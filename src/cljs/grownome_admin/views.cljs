(ns grownome-admin.views
  (:require
   [re-frame.core :as re-frame]
   [grownome-admin.events :as events]
   [re-com.core :refer [p row-button h-box v-box box gap line scroller border label title button checkbox hyperlink-href slider horizontal-bar-tabs info-button input-text input-textarea popover-anchor-wrapper popover-content-wrapper popover-tooltip] :refer-macros [handler-fn]]
   [re-com.buttons :refer [row-button-args-desc md-icon-button]]
   [re-com.util :refer [enumerate]]
   [grownome-admin.subs :as subs]
   [reagent.core :as    reagent]
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
(defn useful-hyperlinks []
  (let [target (reagent/atom "_blank")
        href? (reagent/atom true)]
    (fn
      []
      [v-box
       :size "auto"
       :gap "10px"
       :children [[button
                   :label "Open Firebase"                                                       ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;Do this
                   ]
                  [hyperlink-href
                   :label "Open Firebase"
                   :href (when href? "https://console.firebase.google.com/u/0/project/grownome-app/overview")
                   :target (when href? target)
                   ]]])))

(defn home-panel []
  [v-box
   :gap "1em"
   :children [[useful-hyperlinks]
              ]])


;; devices page

;; formats the individual rows in the table. Boxes are included to add custom
;; alignment to match the table headers. Accesses firestore "device-names"
;; database. For every entry in Firestore, a new row is created with
;; the designated formatting.
(defn device-row [device]
  [h-box
   :class "rc-div-table-row"
   :width "1060px"
   :gap "15px"
   :children [              ;;use to bump columns to the right
              [box :size "initial" :width "1px" :child [title :label ""]]
              [box :size "initial" :width "160px"
               :child [p (get device "deviceName" "Default Value")]]
              [box :size "initial" :width "100px"
               :child [p (get device "owned" "Default Value")]]
              [gap :size "17px"] ;; required to accomodate Owned? sorting buttons
              [box :size "initial" :width "115px"
               :child [p (get device "ownedBy" "Not Owned")]]
              [box :size "initial" :width "185px"
               :child [p (get device "initialStateLink" "Default Value")]]
              [box :size "initial" :width "180px"
               :child [p (get device "number" "Default Value")]]
              [box :size "initial" :width "170px"
               :child [p (get device "assignedDate" "Default Value")]]
              [md-icon-button :md-icon-name "zmdi zmdi-edit"]                                ;;;;;;add on-click
              ]
   ])

;; Creates the actual table, including the headers and the columns (that were
;; formatted in device-row)
(defn devices-list []
  (let [devices (re-frame/subscribe [::subs/devices])]
    [v-box
     :children [[h-box
                 :max-width "1060px"
                 :style {:margin "0"}
                 :gap "0px"
                 :children [[box :size "initial" :width "160px"
                             :child [title :level :level2 :label "Device Name"]]
                            [gap :size "15px"]
                            [box :size "initial" :width "100px"
                             :child [title :level :level2 :label "Owned?"]]
                            [md-icon-button :size :smaller
                             :style {:padding-top "20px"}
                             :md-icon-name "zmdi zmdi-arrow-back zmdi-hc-rotate-90"]          ;;;;;;;;;;;;add on-click
                            [md-icon-button :size :smaller
                             :style {:padding-top "20px"}
                             :md-icon-name "zmdi zmdi-arrow-forward zmdi-hc-rotate-90"]       ;;;;;;;;;;;;;add on-click
                            [gap :size "15px"]
                            [box :size "initial" :width "115px"
                             :child [title :level :level2 :label "Owned By"]]
                            [gap :size "15px"]
                            [box :size "initial" :width "185px"
                             :child [title :level :level2 :label "Initial State Link"]]
                            [gap :size "15px"]
                            [box :size "initial" :width "170px"
                             :child [title :level :level2 :label "Device Number"]]
                            [gap :size "15px"]
                            [box :size "initial" :width "170px"
                             :child [title :level :level2 :label "Assigned Date"]]
                            ]
                 ]
                ;; code below pulls in the devices from device-row function
                [h-box
                 :children [[v-box ;; Device name
                             :children (into []
                                             (for [device @devices]
                                               (device-row (:data device))))]
                            ]]]]))

(defn devices-panel []
  [v-box
   :gap "1em"
   :children [[button ;;use to refresh device listing
               :label "Refresh Device Listing"
               :on-click (and (re-frame/dispatch [::events/device-get]) re-frame/dispatch [::subs/devices])]
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
               :on-click #(re-frame/dispatch [::events/sign-in])]]])

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
                            [box
                             :style {:margin-top "40px"}
                             :child [panels @active-panel]]]]
                ]]))
