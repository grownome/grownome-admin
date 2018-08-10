(ns grownome-admin.subs
  (:require
   [re-frame.core :as re-frame]))

(re-frame/reg-sub
 ::name
 (fn [db]
   (:name db)))

(re-frame/reg-sub
 ::active-panel
 (fn [db _]
   (:active-panel db)))

;; Firebase devices
(re-frame/reg-sub
 ::devices
 (fn [db _]
   (map (fn [[k v]] v) (get-in db [:devices]))))

;; sort device listings
(re-frame/reg-sub
 ::devices-sorted
 :<- [::devices] ;;synctatic sugar to pull in devices subscription
 ;; can combine subscriptions if needed by repeating 
 (fn [devices [_ sorted? field inverted?] _]
   (if @sorted?
     (let [sorted-devices (sort-by #(get (:data %) @field) devices)]
       (if @inverted?
         (reverse sorted-devices)
         sorted-devices))
     devices)))
