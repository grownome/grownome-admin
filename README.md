# grownome-admin

A [re-frame](https://github.com/Day8/re-frame) application designed to ... well, that part is up to you.

## Development Mode

### Run application:

```
lein clean
lein figwheel dev
```

Figwheel will automatically push cljs changes to the browser.

Wait a bit, then browse to [http://localhost:3449](http://localhost:3449).



### If you want to run inside of emacs so that you get autocompelete
in spacemacs run
```
META-m s i

```
inside of your repl run
```clj
(use 'figwheel-sidecar.repl-api)
(start-figwheel!)
(cljs-repl)
```


### Run tests:

```
META-m s i

```

```
(use 'figwheel-sidecar.repl-api)
(start-figwheel! "test")
```

## Production Build


To compile clojurescript to javascript:

```
lein clean
lein cljsbuild once min
```
