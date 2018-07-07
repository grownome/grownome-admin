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
   (get-in db [:devices :docs])))
