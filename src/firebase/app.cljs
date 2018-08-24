(ns firebase.app
  (:require
   ["@firebase/app" :as fa]))

(js/goog.exportSymbol "firebase" fa/firebase)
