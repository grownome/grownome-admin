(ns grownome-admin.runner
  (:require
   [grownome-admin.core-test]
   [cljs.test :refer-macros [run-tests]]))

(run-tests 'grownome-admin.core-test)
