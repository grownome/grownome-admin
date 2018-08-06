(ns grownome-admin.core
  (:require
   [reagent.core :as reagent]
   [re-frame.core :as re-frame]
   [grownome-admin.events :as events]
   [grownome-admin.routes :as routes]
   [grownome-admin.views :as views]
   [grownome-admin.config :as config]
   [com.degel.re-frame-firebase :as firebase]
   ))


(defn dev-setup []
  (when config/debug?
    (enable-console-print!)
    (println "dev mode")))

(defn mount-root []
  (re-frame/clear-subscription-cache!)
  (reagent/render [views/main-panel]
                  (.getElementById js/document "app")))

(defonce firebase-app-info
  {:apiKey "AIzaSyDjJRXjfKE7HbqVVEqYbE_o1WhCT9HZUWk"
   :authDomain "grownome-app.firebaseapp.com"
   :databaseURL "https://grownome-app.firebaseio.com"
   :storageBucket "grownome-app.appspot.com"
   :projectId "grownome-app"})

(defn ^:export init []
  (routes/app-routes)
  (firebase/init :firebase-app-info firebase-app-info
                 :get-user-sub           [::events/user]
                 :set-user-event         [::events/set-user]
                 :default-error-handler  [::events/firebase-error])
  (re-frame/dispatch-sync [::events/initialize-db])
  (dev-setup)
  (mount-root))
