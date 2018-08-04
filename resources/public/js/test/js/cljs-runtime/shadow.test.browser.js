goog.provide('shadow.test.browser');
goog.require('cljs.core');
goog.require('shadow.test');
goog.require('shadow.dom');
if((typeof shadow !== 'undefined') && (typeof shadow.test !== 'undefined') && (typeof shadow.test.browser !== 'undefined') && (typeof shadow.test.browser.log_node !== 'undefined')){
} else {
shadow.test.browser.log_node = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1("log");
}
if(cljs.core.truth_(shadow.test.browser.log_node)){
cljs.core.set_print_fn_BANG_((function (s){
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(shadow.test.browser.log_node,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"\n"].join(''));
}));
} else {
}
shadow.test.browser.start = (function shadow$test$browser$start(){
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$0();
});
shadow.test.browser.stop = (function shadow$test$browser$stop(done){
shadow.test.browser.log_node.innerText = "";

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
});
shadow.test.browser.init = (function shadow$test$browser$init(){
return shadow.test.browser.start();
});
goog.exportSymbol('shadow.test.browser.init', shadow.test.browser.init);

//# sourceMappingURL=shadow.test.browser.js.map
