# grownome-admin

A [re-frame](https://github.com/Day8/re-frame) application designed to ... well, that part is up to you.

## Development Mode

### Run application:
You must have node and java installed for any of this to work. 
```
npm install
npm run dev
```
This will start a server with your application runing and your tests running.

Wait a bit, then browse to [http://localhost:8700](http://localhost:8700) for the app.
Wait a bit, then browse to [http://localhost:8021](http://localhost:8021) for tests.

Any changes to tests or code will automatically trigger both. Any syntax issues will be reported in the 
chrome console as well as the terminal.

### If you want to run inside of emacs so that you get autocompelete
in spacemacs run
```
META-m s c

```
and accept the default values this will connect you to the shadow-cljs repl
follow this [https://shadow-cljs.github.io/docs/UsersGuide.html#cider](https://shadow-cljs.github.io/docs/UsersGuide.html#cider)
to make it fancy.
## Production Build


To compile clojurescript to javascript:

```
npm run release
```
Ci is set up for this project so google will automatically build and test this for you. Once we have a firebase
set up for this it will deploy it as well.


## I wrote a bit on shadow-cljs
* [Why is this so hard](https://wiki.grownome.com/#Using%20CLJS%20build%20tools%20(aka%20why%20is%20this%20so%20hard))
