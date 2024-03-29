(ns grownome-admin.events
  (:require
   [re-frame.core :as re-frame]
   [grownome-admin.db :as db]
   [day8.re-frame.tracing :refer-macros [fn-traced defn-traced]]
   [clojure.walk :as walk]))

(re-frame/reg-event-db
 ::initialize-db
 (fn-traced [_ _]
   db/default-db))

(re-frame/reg-event-db
 ::set-active-panel
 (fn-traced [db [_ active-panel]]
   (assoc db :active-panel active-panel)))

;; Firebase auth sign-in
(re-frame/reg-event-fx
 ::sign-in
 (fn [_ _] {:firebase/google-sign-in {:sign-in-method :popup}}))


;;; Firebase auth sign-out
(re-frame/reg-event-fx
 ::sign-out
 (fn [_ _] {:firebase/sign-out nil}))


;;; Firebase auth - Store the user object
(re-frame/reg-event-db
 ::set-user
 (fn [db [_ user]]
   (assoc db :user user)))

;;; Firebase auth - A subscription to return the user to the library
(re-frame/reg-sub
 ::user
 (fn [db _] (:user db)))

;;; Firebase auth error
(re-frame/reg-event-db
 ::firebase-error
 ;; Takes parameters of 1) Db and 2) the event
 ;; Key value is the db parameter and 2) is the information passed with the event
 ;; [{:key :value} [::firebase-error {:errormetadata "our error"}]]
 (fn-traced [db [_ error]]
            (assoc db :firebase-error error)))

;;; Firebase retrieve device collection, save into DB
(re-frame/reg-event-fx
 ::device-get
 (fn [_ _] {:firestore/get {:path-collection [:device-names]
                            :on-success [::save-devices]}}))
(defn build-index
  "Built an index out of a list map using a key"
  [coll k]
  (println (count coll))
  (reduce (fn [index data]
            (assoc index (get-in data [:data k]) data))
          {} coll))


(defn drop-data
  "Drop extraneous data from our device information"
  [d]
  (dissoc d :metadata :ref :object))

(defn convert-data
  "Pieces data conversion parts together"
  [d]
  (let [e (get d :docs)
        keywordify (walk/keywordize-keys e)
        converted-data (map drop-data keywordify)
        indexed-data (build-index converted-data :deviceName)]
    indexed-data))

;; [:devices [:docs [:data [...], :id [id], ...]]]
;; Save the devices retrieved from Firestore to the DB
(re-frame/reg-event-db
 ::save-devices
 (fn [db [_ value]]
   (assoc db :devices (convert-data value))
        ))

;;; device editing updates Owned in DB
(re-frame/reg-event-db
 ::owned-updatedb
  (fn [db [_ owned-val id]]
    (update-in db [:devices :docs [:id id]] assoc-in db [:devices :docs :data :owned] owned-val)))

;;; device editing updates Initial State Link in DB
(re-frame/reg-event-fx
 ::update-device
 (fn [{:keys [db]} [_ id device-updates ]]
   {:db (update-in db [:devices id :data] #(merge % device-updates))
    :firestore/update {:path [:device-names id]
                       :data device-updates}}))
