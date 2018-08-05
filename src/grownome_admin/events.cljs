(ns grownome-admin.events
  (:require
   [re-frame.core :as re-frame]
   [grownome-admin.db :as db]
   [day8.re-frame.tracing :refer-macros [fn-traced defn-traced]]))

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

(def test-data
  [:devices [:docs
             [:data ["xx" "11"] ["yy" "22"]]
             [:id "id"]]])

(defn get-devices
  "Pull the :devices data out of the incoming vector"
  [d]
  (when (= :devices (first d))
    (second d)))

(defn get-docs
  "Extract the :docs data"
  [d]
  (when (= :docs (first d))
    (rest d)))

(defn keywordize-pair
  "Convert a 2-string vector pair into a keyword/string vector pair
  (note the extra set of square brackets)"
  [[a b]]
  [(keyword a) b])

(defn get-as-map
  "Convert heterogeneous vectors into a map"
  [d]
  (reduce (fn [result d]
            (case (first d)
              :data (into result (map keywordize-pair (rest d)))
              :id (assoc result :id (second d))
              result))
          {}
          d))

(defn convert-data
  "put it all together"
  [d]
  [:devices (-> (get-devices d)
                get-docs
                get-as-map)])

;; [:devices [:docs [:data [...], :id [id], ...]]]
;; Save the devices retrieved from Firestore to the DB
(re-frame/reg-event-db
 ::save-devices
 (fn [db [_ value]]
   (assoc db :devices value)
        ))

;;; device editing updates Owned in DB
(re-frame/reg-event-db
 ::owned-updatedb
  (fn [db [_ owned-val id]]
    (update-in db [:devices :docs [:id id]] assoc-in db [:devices :docs :data :owned] owned-val)))

;;; device editing updates Initial State Link in DB
#_(re-frame/reg-event-db
 ::islink-updatedb
 (println "trying to change")
 (fn [db [_ ISLink-val id]]
   (update-in db {:devices :docs :id id} assoc [:devices :docs :data :initialStateLink] ISLink-val)))

;;; Firebase write to Firestore
(re-frame/reg-event-fx
 :owned-update
 (fn [_ _] {:firestore/update {:path [:device-names :document]
                               :data {:owned-val "owned-val"}}}))
