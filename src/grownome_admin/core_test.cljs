(ns ^:figwheel-always grownome-admin.core-test
  (:require [cljs.test :refer-macros [deftest testing is]]
            [cljs.spec.alpha :as spec]
            [grownome-admin.events :as events]
            [grownome-admin.core :as core]))

(def test-devices
  {:docs [{:data {"assignedDate" #inst "2018-07-31T15:25:24.289-00:00", "deviceName" "Europe", "initialStateLink" "www.reddit.com", "number" 30, "owned" "FALSE"}, :id "Europe", :metadata {:from-cache false, :has-pending-writes false}, :ref ["device-names" "Europe"], :object nil}
          {:data {"assignedDate" #inst "2018-07-31T15:37:01.901-00:00", "deviceName" "Sunday", "initialStateLink" "www.fred.com", "number" 163, "owned" "TRUE"}, :id "Sunday", :metadata {:from-cache false, :has-pending-writes false}, :ref ["device-names" "Sunday"], :object nil}]})


(deftest test-convert-data
  (testing "If Firestore data input conversion works")
  (is (= {:data {"assignedDate" #inst "2018-07-31T15:25:24.289-00:00", "deviceName" "Europe", "initialStateLink" "www.reddit.com", "number" 30, "owned" "FALSE"}, :id "Europe"} (events/convert-data test-devices))))
