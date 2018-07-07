(ns grownome-admin.runner
    (:require [doo.runner :refer-macros [doo-tests]]
              [grownome-admin.core-test]))

(doo-tests 'grownome-admin.core-test)
