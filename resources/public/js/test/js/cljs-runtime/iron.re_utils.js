goog.provide('iron.re_utils');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('expound.alpha');
goog.require('clojure.string');
goog.require('re_frame.core');
goog.require('iron.closure_utils');
goog.require('iron.utils');
/**
 * Shorthand for simple 'layer 2` usage of re-sub
 */
iron.re_utils.sub2 = (function iron$re_utils$sub2(key,db_path){
var G__9892 = key;
var G__9893 = ((function (G__9892){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,db_path);
});})(G__9892))
;
return (re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__9892,G__9893) : re_frame.core.reg_sub.call(null,G__9892,G__9893));
});
/**
 * Shorthand for re-frame dispatch to event.
 *   The two-argument form appends a value into the event.
 *   The three-argument form offers more control over this value, letting
 *   you specify a default value for it and/or a coercer (casting) function
 */
iron.re_utils._GT_evt = (function iron$re_utils$_GT_evt(var_args){
var G__9895 = arguments.length;
switch (G__9895) {
case 1:
return iron.re_utils._GT_evt.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return iron.re_utils._GT_evt.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return iron.re_utils._GT_evt.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

iron.re_utils._GT_evt.cljs$core$IFn$_invoke$arity$1 = (function (event){
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(event) : re_frame.core.dispatch.call(null,event));
});

iron.re_utils._GT_evt.cljs$core$IFn$_invoke$arity$2 = (function (event,value){
var G__9896 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(event,value);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__9896) : re_frame.core.dispatch.call(null,G__9896));
});

iron.re_utils._GT_evt.cljs$core$IFn$_invoke$arity$3 = (function (event,value,p__9897){
var map__9898 = p__9897;
var map__9898__$1 = ((((!((map__9898 == null)))?(((((map__9898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9898):map__9898);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9898__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var coercer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9898__$1,new cljs.core.Keyword(null,"coercer","coercer",1871193355),cljs.core.identity);
return iron.re_utils._GT_evt.cljs$core$IFn$_invoke$arity$2(event,(function (){var G__9900 = (cljs.core.truth_(iron.utils.negligible_QMARK_(value))?default$:value);
return (coercer.cljs$core$IFn$_invoke$arity$1 ? coercer.cljs$core$IFn$_invoke$arity$1(G__9900) : coercer.call(null,G__9900));
})());
});

iron.re_utils._GT_evt.cljs$lang$maxFixedArity = 3;

/**
 * Shorthand for re-frame subscribe and deref.
 */
iron.re_utils._LT_sub = (function iron$re_utils$_LT_sub(var_args){
var G__9903 = arguments.length;
switch (G__9903) {
case 1:
return iron.re_utils._LT_sub.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return iron.re_utils._LT_sub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

iron.re_utils._LT_sub.cljs$core$IFn$_invoke$arity$1 = (function (subscription){
return cljs.core.deref((re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(subscription) : re_frame.core.subscribe.call(null,subscription)));
});

iron.re_utils._LT_sub.cljs$core$IFn$_invoke$arity$2 = (function (subscription,default$){
var or__3949__auto__ = iron.re_utils._LT_sub.cljs$core$IFn$_invoke$arity$1(subscription);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return default$;
}
});

iron.re_utils._LT_sub.cljs$lang$maxFixedArity = 2;

cljs.spec.alpha.def_impl(new cljs.core.Keyword("re-frame","vec-or-fn","re-frame/vec-or-fn",-1395135769),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"event-or-sub","event-or-sub",-336374219),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event-or-sub","event-or-sub",-336374219),new cljs.core.Keyword(null,"function","function",-2127255473)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vector_QMARK_,cljs.core.fn_QMARK_], null),null));
iron.re_utils.vec__GT_fn = (function iron$re_utils$vec__GT_fn(vec_or_fn,key_fn){
if(cljs.core.truth_(iron.utils.validate(cljs.spec.alpha.nilable_impl(new cljs.core.Keyword("re-frame","vec-or-fn","re-frame/vec-or-fn",-1395135769),new cljs.core.Keyword("re-frame","vec-or-fn","re-frame/vec-or-fn",-1395135769),null),vec_or_fn))){
} else {
throw (new Error("Assert failed: (utils/validate (s/nilable :re-frame/vec-or-fn) vec-or-fn)"));
}

var _PERCENT_ = ((cljs.core.vector_QMARK_(vec_or_fn))?(function (p1__9905_SHARP_){
var G__9906 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vec_or_fn,p1__9905_SHARP_);
return (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__9906) : key_fn.call(null,G__9906));
}):vec_or_fn);
if(cljs.core.fn_QMARK_){
} else {
throw (new Error("Assert failed: fn?"));
}

if(cljs.core.truth_(_PERCENT_)){
} else {
throw (new Error("Assert failed: %"));
}

return _PERCENT_;
});
/**
 * For contexts that want to pass an argument to a sink function: accept
 *   either a function or a re-frame event vector.
 *   If a vector is received, convert it to a function that dispatches to that
 *   event, with the parameter conj'd on to the end.
 */
iron.re_utils.event__GT_fn = (function iron$re_utils$event__GT_fn(event_or_fn){
return iron.re_utils.vec__GT_fn(event_or_fn,iron.re_utils._GT_evt);
});
/**
 * Accept either a re-frame sub or a function, for contexts that demand
 *   a function.
 */
iron.re_utils.sub__GT_fn = (function iron$re_utils$sub__GT_fn(sub_or_fn){
return iron.re_utils.vec__GT_fn(sub_or_fn,iron.re_utils._LT_sub);
});
/**
 * Throws an exception if `db` doesn't match the Spec `a-spec`.
 */
iron.re_utils.check_and_throw = (function iron$re_utils$check_and_throw(a_spec,db){
if(((iron.closure_utils.debug_QMARK_) && (cljs.core.not(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(a_spec,db))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((function (){var _STAR_explain_out_STAR_9907 = cljs.spec.alpha._STAR_explain_out_STAR_;
cljs.spec.alpha._STAR_explain_out_STAR_ = expound.alpha.printer;

try{return cljs.spec.alpha.explain(a_spec,db);
}finally {cljs.spec.alpha._STAR_explain_out_STAR_ = _STAR_explain_out_STAR_9907;
}})(),cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
});

//# sourceMappingURL=iron.re_utils.js.map
