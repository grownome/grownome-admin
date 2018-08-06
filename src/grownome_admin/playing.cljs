(ns grownome-admin.playing
  (:require [cljs.spec.alpha :as s]
            [clojure.string :as string]))


(def test-data
 {:docs
             [{:data {"assignedDate" "12-1-1992",
                    "deviceName" "Europe"},
             :id "Europe"}
              {:data {"assignedDate" "12-1-1992",
                    "deviceName" "Brownie"},
              :id "Brownie"}]
  })

(defn get-devices
  "Pull the :devices data out of the incoming vector"
  [d]
  (:devices d))

(defn get-docs
  "Extract the :docs data"
  [d]
  (when (contains? d :docs)
    (:docs d))
    (println "get-docs" d))

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
              result)
              )
          {}
          d)
          )

(defn convert-data
  "put it all together"
  [d]
  [:docs (-> get-as-map)]
             println d)
