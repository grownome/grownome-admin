(defproject grownome-admin "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.10.312"]
                 [reagent "0.7.0"]
                 [re-frame "0.10.5"]
                 [com.andrewmcveigh/cljs-time "0.5.2"]
                 [org.clojure/core.async "0.4.474"]
                 [re-com "2.1.0"]
                 [secretary "1.2.3"]
                 [com.degel/re-frame-firebase "0.6.0"]]

  :plugins [[lein-cljsbuild "1.1.7"]
            [lein-figwheel "0.5.17-SNAPSHOT"]]

  :min-lein-version "2.5.3"

  :source-paths ["src"]

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"
                                    "test/js"]


  :figwheel {:css-dirs ["resources/public/css"]
             :nrepl-middleware ["cemerick.piggieback/wrap-cljs-repl"]}


  :profiles
  {:dev
   {:dependencies [[binaryage/devtools "0.9.10"]
                   [day8.re-frame/re-frame-10x "0.3.3"]
                   [day8.re-frame/tracing "0.5.1"]
                   [cider/piggieback "0.3.8"]
                   [re-frisk "0.5.3"]
                   [org.clojure/tools.nrepl "0.2.13"]
                   [figwheel-sidecar "0.5.17-SNAPSHOT"]
                   [com.bhauman/figwheel-main "0.1.4"]
                   [com.bhauman/rebel-readline-cljs "0.1.4"]]
    :repl-options {:nrepl-middleware [cider.piggieback/wrap-cljs-repl]
                   :source-paths ["cljs_src"]
                   :resource-paths ["target" "resources"]
                   :aliases {"fig" ["trampoline" "run" "-m" "figwheel.main"]
                             "build-dev" ["trampoline" "run" "-m" "figwheel.main" "-b" "dev" "-r"]}
                   :plugins      [[lein-figwheel "0.5.17-SNAPSHOT"]]}}}
  :prod
  {:dependencies [[day8.re-frame/tracing-stubs "0.5.1"]]}

  :cljsbuild {:builds {:dev {:source-paths ["src/cljs"]
                             :figwheel     {:on-jsload "grownome-admin.core/mount-root"}
                             :compiler     {:main                 grownome-admin.core
                                            :output-to            "resources/public/js/compiled/app.js"
                                            :output-dir           "resources/public/js/compiled/out"
                                            :asset-path           "js/compiled/out"
                                            :source-map-timestamp true
                                            :preloads             [devtools.preload
                                                                   day8.re-frame-10x.preload
                                                                   re-frisk.preload]
                                            :closure-defines      {"re_frame.trace.trace_enabled_QMARK_" true
                                                                   "day8.re_frame.tracing.trace_enabled_QMARK_" true}
                                            :external-config      {:devtools/config {:features-to-install :all}}
                                            }}

                       :min {:source-paths ["src/cljs"]
                             :compiler     {:main            grownome-admin.core
                                            :output-to       "resources/public/js/compiled/app.js"
                                            :optimizations   :advanced
                                            :closure-defines {goog.DEBUG false}
                                            :pretty-print    false}}

                       :test {:source-paths ["src/cljs" "test/cljs"]
                              :figwheel     {:on-jsload "grownome-admin.runner"}
                              :compiler     {:main          grownome-admin.runner
                                             :output-to     "resources/public/test/js/compiled/test.js"
                                             :output-dir    "resources/public/test/js/compiled/out"
                                             :asset-path           "test/js/compiled/out"
                                             :optimizations :none}}}}
  )
