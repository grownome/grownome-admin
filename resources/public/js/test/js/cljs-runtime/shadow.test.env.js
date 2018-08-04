goog.provide('shadow.test.env');
goog.require('cljs.core');
if((typeof shadow !== 'undefined') && (typeof shadow.test !== 'undefined') && (typeof shadow.test.env !== 'undefined') && (typeof shadow.test.env.tests_ref !== 'undefined')){
} else {
shadow.test.env.tests_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.PersistentArrayMap.EMPTY], null));
}
if(cljs.core.truth_(new cljs.core.Keyword(null,"hooked","hooked",-567608274).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(shadow.test.env.tests_ref)))){
} else {
var event_fn_10151 = (function (ns){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(shadow.test.env.tests_ref,cljs.core.update,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ns], 0));
});
if(cljs.core.not(goog.global.SHADOW_NS_RESET)){
goog.global.SHADOW_NS_RESET = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_fn_10151], null);
} else {
goog.global.SHADOW_NS_RESET = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(goog.global.SHADOW_NS_RESET,event_fn_10151);
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.test.env.tests_ref,cljs.core.assoc,new cljs.core.Keyword(null,"hooked","hooked",-567608274),true);
}
shadow.test.env.register_test = (function shadow$test$env$register_test(test_ns,test_name,test_var){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.test.env.tests_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),test_ns,new cljs.core.Keyword(null,"vars","vars",-2046957217),test_name], null),test_var);

return test_var;
});
shadow.test.env.register_fixtures = (function shadow$test$env$register_fixtures(test_ns,type,fix){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.test.env.tests_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),test_ns,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994),type], null),fix);
});
shadow.test.env.get_tests = (function shadow$test$env$get_tests(){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.test.env.tests_ref),new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
});
shadow.test.env.get_test_ns_info = (function shadow$test$env$get_test_ns_info(ns){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.test.env.tests_ref),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns], null));
});
/**
 * returns all the registered test namespaces and symbols
 * use (get-test-ns-info the-sym) to get the details
 */
shadow.test.env.get_test_namespaces = (function shadow$test$env$get_test_namespaces(){
return cljs.core.keys(new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(shadow.test.env.tests_ref)));
});
shadow.test.env.get_test_count = (function shadow$test$env$get_test_count(){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),(function (){var iter__4324__auto__ = (function shadow$test$env$get_test_count_$_iter__10156(s__10157){
return (new cljs.core.LazySeq(null,(function (){
var s__10157__$1 = s__10157;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__10157__$1);
if(temp__5457__auto__){
var s__10157__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10157__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__10157__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__10159 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__10158 = (0);
while(true){
if((i__10158 < size__4323__auto__)){
var map__10160 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__10158);
var map__10160__$1 = ((((!((map__10160 == null)))?(((((map__10160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10160.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10160):map__10160);
var test_ns = map__10160__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10160__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
cljs.core.chunk_append(b__10159,cljs.core.count(vars));

var G__10182 = (i__10158 + (1));
i__10158 = G__10182;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10159),shadow$test$env$get_test_count_$_iter__10156(cljs.core.chunk_rest(s__10157__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10159),null);
}
} else {
var map__10164 = cljs.core.first(s__10157__$2);
var map__10164__$1 = ((((!((map__10164 == null)))?(((((map__10164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10164):map__10164);
var test_ns = map__10164__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10164__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.core.cons(cljs.core.count(vars),shadow$test$env$get_test_count_$_iter__10156(cljs.core.rest(s__10157__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(cljs.core.vals(new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(shadow.test.env.tests_ref))));
})());
});

//# sourceMappingURL=shadow.test.env.js.map
