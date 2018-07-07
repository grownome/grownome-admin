(ns grownome-admin.views
  (:require
   [re-frame.core :as re-frame]
   [grownome-admin.events :as events]
   [re-com.core :refer [p h-box v-box box gap line scroller border label title button checkbox hyperlink-href slider horizontal-bar-tabs info-button
                        input-text input-textarea popover-anchor-wrapper popover-content-wrapper popover-tooltip] :refer-macros [handler-fn]]
   [grownome-admin.subs :as subs]
   ))

;; page links
(defn link-to-home-page []
  [hyperlink-href
   :label "Home Page"
   :href "#/"])

(defn link-to-devices-page []
  [hyperlink-href
   :label "Devices"
   :href "#/devices"])

(defn link-to-customers-page []
  [hyperlink-href
   :label "Customers"
   :href "#/customers"])

;; home page

(defn home-title []
  (let [name (re-frame/subscribe [::subs/name])]
    [title
     :label (str )
     :level :level1]))

(defn home-panel []
  [v-box
   :gap "1em"
   :children [[home-title]
              [link-to-devices-page]]])


;; devices page
(defn devices-title []
  [title
   :label "This is the Devices Page."
   :level :level1])

(defn device-row [device]
  [h-box
   :children [title (get device "deviceName" "Default Value")]])

(defn devices-list []
  (let [devices (re-frame/subscribe [::subs/devices])]
    [v-box
     :children [[h-box
                 :gap "2em"
                 :children [[title :label "Device Name"]
                            [title :label "Owned?"]
                            [title :label "Initial State Link"]
                            [title :label "Device Number"]
                            [title :label "Assigned Date"]
                            ]
                 ]
                [v-box
                 :children (into []
                                 (for [device @devices]
                                   (device-row (:data device))))
     ]]]))

(defn devices-panel []
  [v-box
   :gap "1em"
   :children [[devices-title]
              [button
               :label "Refresh Device Listing"
               :on-click (re-frame/dispatch [::events/device-get])]
              [devices-list]
              ]])

;; customers page
(defn customers-title []
  [title
   :label "This is the Customers Page."
   :level :level1])

(defn customers-panel []
  [v-box
   :gap "1em"
   :children [[customers-title]
              [link-to-home-page]]])

;; navigation
(defn nav-panel []
  [v-box
   :gap "1em"
   :children [[link-to-home-page]
              [link-to-devices-page]
              [link-to-customers-page]
              [button
               :label "Sign In"
               :on-click (re-frame/dispatch [::events/sign-in])]]])

(defn- panels [panel-name]
  (case panel-name
    :home-panel [home-panel]
    :devices-panel [devices-panel]
    :customers-panel [customers-panel]
    :nav-panel [nav-panel]
    [:div]))

(defn show-panel [panel-name]
  [panels panel-name])

(defn main-panel []
  (let [active-panel (re-frame/subscribe [::subs/active-panel])]
    [v-box
     :children [[h-box
                 :size "auto"
                 :children[[:img {:src "img/Logo_full_green.png"
                                  :style {:max-width "500px"
                                          :max-height "100px"
                                          :width "auto"
                                          :height "auto"
                                          }}]
                           [title :level :level1 :label (str "Admin Panel") :style {:margin-top "30px"
                                                                                    :margin-left "20px"
                                                                                    }]]]
                [h-box
                 :height "100px"
                 :children [[box :size "150px"
                             :style {:margin-left "20px" :margin-top "40px"}
                             :child [panels :nav-panel]]
                            [box :child [panels @active-panel]]]]
                ]]))
