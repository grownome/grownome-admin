goog.provide('com.degel.re_frame_firebase');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('com.degel.re_frame_firebase.core');
goog.require('com.degel.re_frame_firebase.auth');
goog.require('com.degel.re_frame_firebase.database');
goog.require('com.degel.re_frame_firebase.firestore');
var G__10053_10055 = new cljs.core.Keyword("firebase","write","firebase/write",819100663);
var G__10054_10056 = com.degel.re_frame_firebase.database.write_effect;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__10053_10055,G__10054_10056) : re_frame.core.reg_fx.call(null,G__10053_10055,G__10054_10056));
var G__10057_10059 = new cljs.core.Keyword("firebase","push","firebase/push",1377805980);
var G__10058_10060 = com.degel.re_frame_firebase.database.push_effect;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__10057_10059,G__10058_10060) : re_frame.core.reg_fx.call(null,G__10057_10059,G__10058_10060));
var G__10061_10063 = new cljs.core.Keyword("firebase","read-once","firebase/read-once",-1517006258);
var G__10062_10064 = com.degel.re_frame_firebase.database.once_effect;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__10061_10063,G__10062_10064) : re_frame.core.reg_fx.call(null,G__10061_10063,G__10062_10064));
var G__10065_10072 = new cljs.core.Keyword("firebase","multi","firebase/multi",247754202);
var G__10066_10073 = ((function (G__10065_10072){
return (function (effects){
return cljs.core.run_BANG_(((function (G__10065_10072){
return (function (p__10067){
var vec__10068 = p__10067;
var event_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10068,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10068,(1),null);
var G__10071 = event_type;
var G__10071__$1 = (((G__10071 instanceof cljs.core.Keyword))?G__10071.fqn:null);
switch (G__10071__$1) {
case "firebase/write":
return (com.degel.re_frame_firebase.database.write_effect.cljs$core$IFn$_invoke$arity$1 ? com.degel.re_frame_firebase.database.write_effect.cljs$core$IFn$_invoke$arity$1(args) : com.degel.re_frame_firebase.database.write_effect.call(null,args));

break;
case "firebase/push":
return com.degel.re_frame_firebase.database.push_effect(args);

break;
case "firebase/read-once":
return com.degel.re_frame_firebase.database.once_effect(args);

break;
case "firestore/delete":
return com.degel.re_frame_firebase.firestore.delete_effect(args);

break;
case "firestore/set":
return com.degel.re_frame_firebase.firestore.set_effect(args);

break;
case "firestore/update":
return com.degel.re_frame_firebase.firestore.update_effect(args);

break;
case "firestore/add":
return com.degel.re_frame_firebase.firestore.add_effect(args);

break;
case "firestore/write-batch":
return com.degel.re_frame_firebase.firestore.write_batch_effect(args);

break;
case "firestore/get":
return com.degel.re_frame_firebase.firestore.get_effect(args);

break;
case "firestore/on-snapshot":
return com.degel.re_frame_firebase.firestore.on_snapshot(args);

break;
default:
return alert("Internal error: unknown firebase effect: ",event_type," (",args,")");

}
});})(G__10065_10072))
,effects);
});})(G__10065_10072))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__10065_10072,G__10066_10073) : re_frame.core.reg_fx.call(null,G__10065_10072,G__10066_10073));
re_frame.core.reg_sub_raw(new cljs.core.Keyword("firebase","on-value","firebase/on-value",102924818),com.degel.re_frame_firebase.database.on_value_sub);
var G__10075_10077 = new cljs.core.Keyword("firebase","google-sign-in","firebase/google-sign-in",-1836012279);
var G__10076_10078 = com.degel.re_frame_firebase.auth.google_sign_in;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__10075_10077,G__10076_10078) : re_frame.core.reg_fx.call(null,G__10075_10077,G__10076_10078));
var G__10079_10081 = new cljs.core.Keyword("firebase","facebook-sign-in","firebase/facebook-sign-in",-304769336);
var G__10080_10082 = com.degel.re_frame_firebase.auth.facebook_sign_in;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__10079_10081,G__10080_10082) : re_frame.core.reg_fx.call(null,G__10079_10081,G__10080_10082));
var G__10083_10085 = new cljs.core.Keyword("firebase","twitter-sign-in","firebase/twitter-sign-in",954973976);
var G__10084_10086 = com.degel.re_frame_firebase.auth.twitter_sign_in;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__10083_10085,G__10084_10086) : re_frame.core.reg_fx.call(null,G__10083_10085,G__10084_10086));
var G__10087_10089 = new cljs.core.Keyword("firebase","github-sign-in","firebase/github-sign-in",592945327);
var G__10088_10090 = com.degel.re_frame_firebase.auth.github_sign_in;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__10087_10089,G__10088_10090) : re_frame.core.reg_fx.call(null,G__10087_10089,G__10088_10090));
var G__10091_10093 = new cljs.core.Keyword("firebase","email-sign-in","firebase/email-sign-in",-867694467);
var G__10092_10094 = com.degel.re_frame_firebase.auth.email_sign_in;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__10091_10093,G__10092_10094) : re_frame.core.reg_fx.call(null,G__10091_10093,G__10092_10094));
var G__10095_10097 = new cljs.core.Keyword("firebase","email-create-user","firebase/email-create-user",-127442482);
var G__10096_10098 = com.degel.re_frame_firebase.auth.email_create_user;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__10095_10097,G__10096_10098) : re_frame.core.reg_fx.call(null,G__10095_10097,G__10096_10098));
var G__10099_10101 = new cljs.core.Keyword("firebase","sign-out","firebase/sign-out",398432018);
var G__10100_10102 = com.degel.re_frame_firebase.auth.sign_out;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__10099_10101,G__10100_10102) : re_frame.core.reg_fx.call(null,G__10099_10101,G__10100_10102));
var G__10103_10107 = new cljs.core.Keyword("firebase","connection-state","firebase/connection-state",-937225467);
var G__10104_10108 = ((function (G__10103_10107){
return (function (_,___$1){
var G__10106 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("firebase","on-value","firebase/on-value",102924818),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".info",".info",1865168098),new cljs.core.Keyword(null,"connected","connected",-169833045)], null)], null)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__10106) : re_frame.core.subscribe.call(null,G__10106));
});})(G__10103_10107))
;
var G__10105_10109 = ((function (G__10103_10107,G__10104_10108){
return (function (connected_QMARK_,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("firebase","connected?","firebase/connected?",67821278),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(connected_QMARK_,true)], null);
});})(G__10103_10107,G__10104_10108))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__10103_10107,G__10104_10108,G__10105_10109) : re_frame.core.reg_sub.call(null,G__10103_10107,G__10104_10108,G__10105_10109));
var G__10110_10112 = new cljs.core.Keyword("firestore","set","firestore/set",-501378379);
var G__10111_10113 = com.degel.re_frame_firebase.firestore.set_effect;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__10110_10112,G__10111_10113) : re_frame.core.reg_fx.call(null,G__10110_10112,G__10111_10113));
var G__10114_10116 = new cljs.core.Keyword("firestore","update","firestore/update",1315165303);
var G__10115_10117 = com.degel.re_frame_firebase.firestore.update_effect;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__10114_10116,G__10115_10117) : re_frame.core.reg_fx.call(null,G__10114_10116,G__10115_10117));
var G__10118_10120 = new cljs.core.Keyword("firestore","delete","firestore/delete",-2037491817);
var G__10119_10121 = com.degel.re_frame_firebase.firestore.delete_effect;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__10118_10120,G__10119_10121) : re_frame.core.reg_fx.call(null,G__10118_10120,G__10119_10121));
var G__10122_10124 = new cljs.core.Keyword("firestore","write-batch","firestore/write-batch",181786603);
var G__10123_10125 = com.degel.re_frame_firebase.firestore.write_batch_effect;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__10122_10124,G__10123_10125) : re_frame.core.reg_fx.call(null,G__10122_10124,G__10123_10125));
var G__10126_10128 = new cljs.core.Keyword("firestore","add","firestore/add",493390264);
var G__10127_10129 = com.degel.re_frame_firebase.firestore.add_effect;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__10126_10128,G__10127_10129) : re_frame.core.reg_fx.call(null,G__10126_10128,G__10127_10129));
var G__10130_10132 = new cljs.core.Keyword("firestore","get","firestore/get",1951260858);
var G__10131_10133 = com.degel.re_frame_firebase.firestore.get_effect;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__10130_10132,G__10131_10133) : re_frame.core.reg_fx.call(null,G__10130_10132,G__10131_10133));
var G__10134_10136 = new cljs.core.Keyword("firestore","on-snapshot","firestore/on-snapshot",-61247931);
var G__10135_10137 = com.degel.re_frame_firebase.firestore.on_snapshot_effect;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__10134_10136,G__10135_10137) : re_frame.core.reg_fx.call(null,G__10134_10136,G__10135_10137));
re_frame.core.reg_sub_raw(new cljs.core.Keyword("firestore","on-snapshot","firestore/on-snapshot",-61247931),com.degel.re_frame_firebase.firestore.on_snapshot_sub);
com.degel.re_frame_firebase.init = (function com$degel$re_frame_firebase$init(var_args){
var args__4534__auto__ = [];
var len__4531__auto___10142 = arguments.length;
var i__4532__auto___10143 = (0);
while(true){
if((i__4532__auto___10143 < len__4531__auto___10142)){
args__4534__auto__.push((arguments[i__4532__auto___10143]));

var G__10144 = (i__4532__auto___10143 + (1));
i__4532__auto___10143 = G__10144;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return com.degel.re_frame_firebase.init.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

com.degel.re_frame_firebase.init.cljs$core$IFn$_invoke$arity$variadic = (function (p__10139){
var map__10140 = p__10139;
var map__10140__$1 = ((((!((map__10140 == null)))?(((((map__10140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10140):map__10140);
var firebase_app_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10140__$1,new cljs.core.Keyword(null,"firebase-app-info","firebase-app-info",507617607));
var get_user_sub = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10140__$1,new cljs.core.Keyword(null,"get-user-sub","get-user-sub",1337447940));
var set_user_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10140__$1,new cljs.core.Keyword(null,"set-user-event","set-user-event",-2139443858));
var default_error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10140__$1,new cljs.core.Keyword(null,"default-error-handler","default-error-handler",2070828115));
com.degel.re_frame_firebase.core.set_firebase_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"get-user-sub","get-user-sub",1337447940),get_user_sub,new cljs.core.Keyword(null,"set-user-event","set-user-event",-2139443858),set_user_event,new cljs.core.Keyword(null,"default-error-handler","default-error-handler",2070828115),default_error_handler], 0));

com.degel.re_frame_firebase.core.initialize_app(firebase_app_info);

return com.degel.re_frame_firebase.auth.init_auth();
});

com.degel.re_frame_firebase.init.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.degel.re_frame_firebase.init.cljs$lang$applyTo = (function (seq10138){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10138));
});


//# sourceMappingURL=com.degel.re_frame_firebase.js.map
