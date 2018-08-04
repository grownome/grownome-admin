goog.provide('com.degel.re_frame_firebase.core');
goog.require('cljs.core');
goog.require('iron.re_utils');
goog.require('firebase.app');
if((typeof com !== 'undefined') && (typeof com.degel !== 'undefined') && (typeof com.degel.re_frame_firebase !== 'undefined') && (typeof com.degel.re_frame_firebase.core !== 'undefined') && (typeof com.degel.re_frame_firebase.core.firebase_state !== 'undefined')){
} else {
com.degel.re_frame_firebase.core.firebase_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
com.degel.re_frame_firebase.core.set_firebase_state = (function com$degel$re_frame_firebase$core$set_firebase_state(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9912 = arguments.length;
var i__4532__auto___9913 = (0);
while(true){
if((i__4532__auto___9913 < len__4531__auto___9912)){
args__4534__auto__.push((arguments[i__4532__auto___9913]));

var G__9914 = (i__4532__auto___9913 + (1));
i__4532__auto___9913 = G__9914;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return com.degel.re_frame_firebase.core.set_firebase_state.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

com.degel.re_frame_firebase.core.set_firebase_state.cljs$core$IFn$_invoke$arity$variadic = (function (p__9909){
var map__9910 = p__9909;
var map__9910__$1 = ((((!((map__9910 == null)))?(((((map__9910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9910.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9910):map__9910);
var get_user_sub = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9910__$1,new cljs.core.Keyword(null,"get-user-sub","get-user-sub",1337447940));
var set_user_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9910__$1,new cljs.core.Keyword(null,"set-user-event","set-user-event",-2139443858));
var default_error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9910__$1,new cljs.core.Keyword(null,"default-error-handler","default-error-handler",2070828115));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(com.degel.re_frame_firebase.core.firebase_state,cljs.core.assoc,new cljs.core.Keyword(null,"set-user-fn","set-user-fn",-1107518278),iron.re_utils.event__GT_fn(set_user_event),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"get-user-fn","get-user-fn",-1714413522),iron.re_utils.sub__GT_fn(get_user_sub),new cljs.core.Keyword(null,"default-error-handler","default-error-handler",2070828115),iron.re_utils.event__GT_fn((function (){var or__3949__auto__ = default_error_handler;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return alert;
}
})())], 0));
});

com.degel.re_frame_firebase.core.set_firebase_state.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.degel.re_frame_firebase.core.set_firebase_state.cljs$lang$applyTo = (function (seq9908){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9908));
});

com.degel.re_frame_firebase.core.initialize_app = (function com$degel$re_frame_firebase$core$initialize_app(firebase_app_info){
return firebase.initializeApp(cljs.core.clj__GT_js(firebase_app_info));
});
com.degel.re_frame_firebase.core.current_user = (function com$degel$re_frame_firebase$core$current_user(){
var temp__5457__auto__ = new cljs.core.Keyword(null,"get-user-fn","get-user-fn",-1714413522).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(com.degel.re_frame_firebase.core.firebase_state));
if(cljs.core.truth_(temp__5457__auto__)){
var handler = temp__5457__auto__;
return (handler.cljs$core$IFn$_invoke$arity$0 ? handler.cljs$core$IFn$_invoke$arity$0() : handler.call(null));
} else {
return null;
}
});
com.degel.re_frame_firebase.core.set_current_user = (function com$degel$re_frame_firebase$core$set_current_user(user){
var temp__5457__auto__ = new cljs.core.Keyword(null,"set-user-fn","set-user-fn",-1107518278).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(com.degel.re_frame_firebase.core.firebase_state));
if(cljs.core.truth_(temp__5457__auto__)){
var handler = temp__5457__auto__;
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(user) : handler.call(null,user));
} else {
return null;
}
});
com.degel.re_frame_firebase.core.default_error_handler = (function com$degel$re_frame_firebase$core$default_error_handler(){
return new cljs.core.Keyword(null,"default-error-handler","default-error-handler",2070828115).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(com.degel.re_frame_firebase.core.firebase_state));
});

//# sourceMappingURL=com.degel.re_frame_firebase.core.js.map
