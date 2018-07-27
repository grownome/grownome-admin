(ns grownome-admin.playing
 (:require [cljs.spec.alpha :as s]))


(def test-data
  [:devices [:docs
             [:data ["xx" "11"] ["yy" "22"]]
             [:id "id"]]
   ])

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
