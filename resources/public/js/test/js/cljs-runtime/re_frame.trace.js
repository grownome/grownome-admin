goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-trace#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__6009){
var map__6010 = p__6009;
var map__6010__$1 = ((((!((map__6010 == null)))?(((((map__6010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6010.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6010):map__6010);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6010__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6010__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6010__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6010__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__3949__auto__ = child_of;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__6022_6043 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__6023_6044 = null;
var count__6024_6045 = (0);
var i__6025_6046 = (0);
while(true){
if((i__6025_6046 < count__6024_6045)){
var vec__6026_6048 = chunk__6023_6044.cljs$core$IIndexed$_nth$arity$2(null,i__6025_6046);
var k_6049 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6026_6048,(0),null);
var cb_6050 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6026_6048,(1),null);
try{var G__6030_6051 = cljs.core.deref(re_frame.trace.traces);
(cb_6050.cljs$core$IFn$_invoke$arity$1 ? cb_6050.cljs$core$IFn$_invoke$arity$1(G__6030_6051) : cb_6050.call(null,G__6030_6051));
}catch (e6029){var e_6052 = e6029;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_6049,"while storing",cljs.core.deref(re_frame.trace.traces),e_6052], 0));
}

var G__6053 = seq__6022_6043;
var G__6054 = chunk__6023_6044;
var G__6055 = count__6024_6045;
var G__6056 = (i__6025_6046 + (1));
seq__6022_6043 = G__6053;
chunk__6023_6044 = G__6054;
count__6024_6045 = G__6055;
i__6025_6046 = G__6056;
continue;
} else {
var temp__5457__auto___6057 = cljs.core.seq(seq__6022_6043);
if(temp__5457__auto___6057){
var seq__6022_6058__$1 = temp__5457__auto___6057;
if(cljs.core.chunked_seq_QMARK_(seq__6022_6058__$1)){
var c__4351__auto___6059 = cljs.core.chunk_first(seq__6022_6058__$1);
var G__6060 = cljs.core.chunk_rest(seq__6022_6058__$1);
var G__6061 = c__4351__auto___6059;
var G__6062 = cljs.core.count(c__4351__auto___6059);
var G__6063 = (0);
seq__6022_6043 = G__6060;
chunk__6023_6044 = G__6061;
count__6024_6045 = G__6062;
i__6025_6046 = G__6063;
continue;
} else {
var vec__6032_6064 = cljs.core.first(seq__6022_6058__$1);
var k_6065 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6032_6064,(0),null);
var cb_6066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6032_6064,(1),null);
try{var G__6037_6067 = cljs.core.deref(re_frame.trace.traces);
(cb_6066.cljs$core$IFn$_invoke$arity$1 ? cb_6066.cljs$core$IFn$_invoke$arity$1(G__6037_6067) : cb_6066.call(null,G__6037_6067));
}catch (e6035){var e_6068 = e6035;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_6065,"while storing",cljs.core.deref(re_frame.trace.traces),e_6068], 0));
}

var G__6069 = cljs.core.next(seq__6022_6058__$1);
var G__6070 = null;
var G__6071 = (0);
var G__6072 = (0);
seq__6022_6043 = G__6069;
chunk__6023_6044 = G__6070;
count__6024_6045 = G__6071;
i__6025_6046 = G__6072;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (10)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
