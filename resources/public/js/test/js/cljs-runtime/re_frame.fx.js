goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_6647 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));

try{try{var seq__6649 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__6650 = null;
var count__6651 = (0);
var i__6652 = (0);
while(true){
if((i__6652 < count__6651)){
var vec__6653 = chunk__6650.cljs$core$IIndexed$_nth$arity$2(null,i__6652);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6653,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6653,(1),null);
var temp__5455__auto___6708 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___6708)){
var effect_fn_6710 = temp__5455__auto___6708;
(effect_fn_6710.cljs$core$IFn$_invoke$arity$1 ? effect_fn_6710.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_6710.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__6712 = seq__6649;
var G__6713 = chunk__6650;
var G__6714 = count__6651;
var G__6715 = (i__6652 + (1));
seq__6649 = G__6712;
chunk__6650 = G__6713;
count__6651 = G__6714;
i__6652 = G__6715;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__6649);
if(temp__5457__auto__){
var seq__6649__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6649__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__6649__$1);
var G__6716 = cljs.core.chunk_rest(seq__6649__$1);
var G__6717 = c__4351__auto__;
var G__6718 = cljs.core.count(c__4351__auto__);
var G__6719 = (0);
seq__6649 = G__6716;
chunk__6650 = G__6717;
count__6651 = G__6718;
i__6652 = G__6719;
continue;
} else {
var vec__6663 = cljs.core.first(seq__6649__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6663,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6663,(1),null);
var temp__5455__auto___6721 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___6721)){
var effect_fn_6722 = temp__5455__auto___6721;
(effect_fn_6722.cljs$core$IFn$_invoke$arity$1 ? effect_fn_6722.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_6722.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__6723 = cljs.core.next(seq__6649__$1);
var G__6724 = null;
var G__6725 = (0);
var G__6726 = (0);
seq__6649 = G__6723;
chunk__6650 = G__6724;
count__6651 = G__6725;
i__6652 = G__6726;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__4979__auto___6727 = re_frame.interop.now();
var duration__4980__auto___6728 = (end__4979__auto___6727 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__4980__auto___6728,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__4979__auto___6727);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_6647;
}} else {
var seq__6670 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__6671 = null;
var count__6672 = (0);
var i__6673 = (0);
while(true){
if((i__6673 < count__6672)){
var vec__6674 = chunk__6671.cljs$core$IIndexed$_nth$arity$2(null,i__6673);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6674,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6674,(1),null);
var temp__5455__auto___6732 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___6732)){
var effect_fn_6733 = temp__5455__auto___6732;
(effect_fn_6733.cljs$core$IFn$_invoke$arity$1 ? effect_fn_6733.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_6733.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__6738 = seq__6670;
var G__6739 = chunk__6671;
var G__6740 = count__6672;
var G__6741 = (i__6673 + (1));
seq__6670 = G__6738;
chunk__6671 = G__6739;
count__6672 = G__6740;
i__6673 = G__6741;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__6670);
if(temp__5457__auto__){
var seq__6670__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6670__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__6670__$1);
var G__6749 = cljs.core.chunk_rest(seq__6670__$1);
var G__6750 = c__4351__auto__;
var G__6751 = cljs.core.count(c__4351__auto__);
var G__6752 = (0);
seq__6670 = G__6749;
chunk__6671 = G__6750;
count__6672 = G__6751;
i__6673 = G__6752;
continue;
} else {
var vec__6677 = cljs.core.first(seq__6670__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6677,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6677,(1),null);
var temp__5455__auto___6757 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___6757)){
var effect_fn_6758 = temp__5455__auto___6757;
(effect_fn_6758.cljs$core$IFn$_invoke$arity$1 ? effect_fn_6758.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_6758.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__6760 = cljs.core.next(seq__6670__$1);
var G__6761 = null;
var G__6762 = (0);
var G__6763 = (0);
seq__6670 = G__6760;
chunk__6671 = G__6761;
count__6672 = G__6762;
i__6673 = G__6763;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__6771 = cljs.core.seq(value);
var chunk__6772 = null;
var count__6773 = (0);
var i__6774 = (0);
while(true){
if((i__6774 < count__6773)){
var map__6779 = chunk__6772.cljs$core$IIndexed$_nth$arity$2(null,i__6774);
var map__6779__$1 = ((((!((map__6779 == null)))?(((((map__6779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6779):map__6779);
var effect = map__6779__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6779__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6779__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__6771,chunk__6772,count__6773,i__6774,map__6779,map__6779__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__6771,chunk__6772,count__6773,i__6774,map__6779,map__6779__$1,effect,ms,dispatch))
,ms);
}


var G__6801 = seq__6771;
var G__6802 = chunk__6772;
var G__6803 = count__6773;
var G__6804 = (i__6774 + (1));
seq__6771 = G__6801;
chunk__6772 = G__6802;
count__6773 = G__6803;
i__6774 = G__6804;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__6771);
if(temp__5457__auto__){
var seq__6771__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6771__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__6771__$1);
var G__6805 = cljs.core.chunk_rest(seq__6771__$1);
var G__6806 = c__4351__auto__;
var G__6807 = cljs.core.count(c__4351__auto__);
var G__6808 = (0);
seq__6771 = G__6805;
chunk__6772 = G__6806;
count__6773 = G__6807;
i__6774 = G__6808;
continue;
} else {
var map__6785 = cljs.core.first(seq__6771__$1);
var map__6785__$1 = ((((!((map__6785 == null)))?(((((map__6785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6785.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6785):map__6785);
var effect = map__6785__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6785__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6785__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__6771,chunk__6772,count__6773,i__6774,map__6785,map__6785__$1,effect,ms,dispatch,seq__6771__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__6771,chunk__6772,count__6773,i__6774,map__6785,map__6785__$1,effect,ms,dispatch,seq__6771__$1,temp__5457__auto__))
,ms);
}


var G__6812 = cljs.core.next(seq__6771__$1);
var G__6813 = null;
var G__6814 = (0);
var G__6815 = (0);
seq__6771 = G__6812;
chunk__6772 = G__6813;
count__6773 = G__6814;
i__6774 = G__6815;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_(value))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_(value))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value], 0));
} else {
var seq__6819 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__6820 = null;
var count__6821 = (0);
var i__6822 = (0);
while(true){
if((i__6822 < count__6821)){
var event = chunk__6820.cljs$core$IIndexed$_nth$arity$2(null,i__6822);
re_frame.router.dispatch(event);


var G__6823 = seq__6819;
var G__6824 = chunk__6820;
var G__6825 = count__6821;
var G__6826 = (i__6822 + (1));
seq__6819 = G__6823;
chunk__6820 = G__6824;
count__6821 = G__6825;
i__6822 = G__6826;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__6819);
if(temp__5457__auto__){
var seq__6819__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6819__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__6819__$1);
var G__6827 = cljs.core.chunk_rest(seq__6819__$1);
var G__6828 = c__4351__auto__;
var G__6829 = cljs.core.count(c__4351__auto__);
var G__6830 = (0);
seq__6819 = G__6827;
chunk__6820 = G__6828;
count__6821 = G__6829;
i__6822 = G__6830;
continue;
} else {
var event = cljs.core.first(seq__6819__$1);
re_frame.router.dispatch(event);


var G__6831 = cljs.core.next(seq__6819__$1);
var G__6832 = null;
var G__6833 = (0);
var G__6834 = (0);
seq__6819 = G__6831;
chunk__6820 = G__6832;
count__6821 = G__6833;
i__6822 = G__6834;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__6837 = cljs.core.seq(value);
var chunk__6838 = null;
var count__6839 = (0);
var i__6840 = (0);
while(true){
if((i__6840 < count__6839)){
var event = chunk__6838.cljs$core$IIndexed$_nth$arity$2(null,i__6840);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__6841 = seq__6837;
var G__6842 = chunk__6838;
var G__6843 = count__6839;
var G__6844 = (i__6840 + (1));
seq__6837 = G__6841;
chunk__6838 = G__6842;
count__6839 = G__6843;
i__6840 = G__6844;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__6837);
if(temp__5457__auto__){
var seq__6837__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6837__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__6837__$1);
var G__6845 = cljs.core.chunk_rest(seq__6837__$1);
var G__6846 = c__4351__auto__;
var G__6847 = cljs.core.count(c__4351__auto__);
var G__6848 = (0);
seq__6837 = G__6845;
chunk__6838 = G__6846;
count__6839 = G__6847;
i__6840 = G__6848;
continue;
} else {
var event = cljs.core.first(seq__6837__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__6850 = cljs.core.next(seq__6837__$1);
var G__6851 = null;
var G__6852 = (0);
var G__6853 = (0);
seq__6837 = G__6850;
chunk__6838 = G__6851;
count__6839 = G__6852;
i__6840 = G__6853;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref(re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
