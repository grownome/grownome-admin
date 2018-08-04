goog.provide('com.degel.re_frame_firebase.database');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('clojure.string');
goog.require('re_frame.core');
goog.require('re_frame.loggers');
goog.require('reagent.ratom');
goog.require('iron.re_utils');
goog.require('iron.utils');
goog.require('firebase.app');
goog.require('firebase.database');
goog.require('com.degel.re_frame_firebase.helpers');
goog.require('com.degel.re_frame_firebase.core');
goog.require('com.degel.re_frame_firebase.specs');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.degel.re-frame-firebase.database","cache","com.degel.re-frame-firebase.database/cache",-127090720),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null))),cljs.spec.alpha.nilable_impl(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__9947){
return cljs.core.map_QMARK_(G__9947);
})], null),(function (G__9947){
return cljs.core.map_QMARK_(G__9947);
}),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])),null));
com.degel.re_frame_firebase.database.fb_ref = (function com$degel$re_frame_firebase$database$fb_ref(path){
if(cljs.core.truth_(iron.utils.validate(new cljs.core.Keyword("com.degel.re-frame-firebase.specs","path","com.degel.re-frame-firebase.specs/path",1565043833),path))){
} else {
throw (new Error("Assert failed: (utils/validate :com.degel.re-frame-firebase.specs/path path)"));
}

return firebase.database().ref(clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.clj__GT_js(path)));
});
com.degel.re_frame_firebase.database.setter = (function com$degel$re_frame_firebase$database$setter(p__9948){
var map__9949 = p__9948;
var map__9949__$1 = ((((!((map__9949 == null)))?(((((map__9949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9949.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9949):map__9949);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9949__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9949__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9949__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9949__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
return com.degel.re_frame_firebase.database.fb_ref(path).set(cljs.core.clj__GT_js(value),com.degel.re_frame_firebase.helpers.success_failure_wrapper(on_success,on_failure));
});
com.degel.re_frame_firebase.database.write_effect = com.degel.re_frame_firebase.database.setter;
com.degel.re_frame_firebase.database.push_effect = (function com$degel$re_frame_firebase$database$push_effect(p__9951){
var map__9952 = p__9951;
var map__9952__$1 = ((((!((map__9952 == null)))?(((((map__9952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9952):map__9952);
var all = map__9952__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9952__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9952__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9952__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9952__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var key = com.degel.re_frame_firebase.database.fb_ref(path).push().key;
return com.degel.re_frame_firebase.database.setter(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(all,new cljs.core.Keyword(null,"on-success","on-success",1786904109),((function (key,map__9952,map__9952__$1,all,path,value,on_success,on_failure){
return (function (){
var fexpr__9954 = iron.re_utils.event__GT_fn(on_success);
return (fexpr__9954.cljs$core$IFn$_invoke$arity$1 ? fexpr__9954.cljs$core$IFn$_invoke$arity$1(key) : fexpr__9954.call(null,key));
});})(key,map__9952,map__9952__$1,all,path,value,on_success,on_failure))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,key)], 0)));
});
com.degel.re_frame_firebase.database.once_effect = (function com$degel$re_frame_firebase$database$once_effect(p__9961){
var map__9962 = p__9961;
var map__9962__$1 = ((((!((map__9962 == null)))?(((((map__9962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9962.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9962):map__9962);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9962__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9962__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9962__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
return com.degel.re_frame_firebase.database.fb_ref(path).once("value",((function (map__9962,map__9962__$1,path,on_success,on_failure){
return (function (p1__9959_SHARP_){
var G__9965 = com.degel.re_frame_firebase.helpers.js__GT_clj_tree(p1__9959_SHARP_);
var fexpr__9964 = iron.re_utils.event__GT_fn(on_success);
return (fexpr__9964.cljs$core$IFn$_invoke$arity$1 ? fexpr__9964.cljs$core$IFn$_invoke$arity$1(G__9965) : fexpr__9964.call(null,G__9965));
});})(map__9962,map__9962__$1,path,on_success,on_failure))
,((function (map__9962,map__9962__$1,path,on_success,on_failure){
return (function (p1__9960_SHARP_){
var fexpr__9967 = iron.re_utils.event__GT_fn(on_failure);
return (fexpr__9967.cljs$core$IFn$_invoke$arity$1 ? fexpr__9967.cljs$core$IFn$_invoke$arity$1(p1__9960_SHARP_) : fexpr__9967.call(null,p1__9960_SHARP_));
});})(map__9962,map__9962__$1,path,on_success,on_failure))
);
});
com.degel.re_frame_firebase.database.on_value_sub = (function com$degel$re_frame_firebase$database$on_value_sub(app_db,p__9986){
var vec__9988 = p__9986;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9988,(0),null);
var map__9991 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9988,(1),null);
var map__9991__$1 = ((((!((map__9991 == null)))?(((((map__9991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9991.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9991):map__9991);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9991__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9991__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
if(cljs.core.truth_(path)){
var ref = com.degel.re_frame_firebase.database.fb_ref(path);
var id = path;
var callback = ((function (ref,id,vec__9988,_,map__9991,map__9991__$1,path,on_failure){
return (function (p1__9983_SHARP_){
return iron.re_utils._GT_evt.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.degel.re-frame-firebase.database","on-value-handler","com.degel.re-frame-firebase.database/on-value-handler",-1316230600),id,com.degel.re_frame_firebase.helpers.js__GT_clj_tree(p1__9983_SHARP_)], null));
});})(ref,id,vec__9988,_,map__9991,map__9991__$1,path,on_failure))
;
ref.on("value",callback,iron.re_utils.event__GT_fn((function (){var or__3949__auto__ = on_failure;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return com.degel.re_frame_firebase.core.default_error_handler();
}
})()));

return reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic(((function (ref,id,callback,vec__9988,_,map__9991,map__9991__$1,path,on_failure){
return (function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(app_db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.degel.re-frame-firebase.database","cache","com.degel.re-frame-firebase.database/cache",-127090720),id], null),cljs.core.PersistentVector.EMPTY);
});})(ref,id,callback,vec__9988,_,map__9991,map__9991__$1,path,on_failure))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360),((function (ref,id,callback,vec__9988,_,map__9991,map__9991__$1,path,on_failure){
return (function (){
ref.off("value",callback);

return iron.re_utils._GT_evt.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.degel.re-frame-firebase.database","on-value-handler","com.degel.re-frame-firebase.database/on-value-handler",-1316230600),id,null], null));
});})(ref,id,callback,vec__9988,_,map__9991,map__9991__$1,path,on_failure))
], 0));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Received null Firebase on-value request"], 0));

return reagent.ratom.make_reaction(((function (vec__9988,_,map__9991,map__9991__$1,path,on_failure){
return (function (){
return null;
});})(vec__9988,_,map__9991,map__9991__$1,path,on_failure))
);
}
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.degel.re-frame-firebase.database","on-value-handler","com.degel.re-frame-firebase.database/on-value-handler",-1316230600),(function (app_db,p__10001){
var vec__10002 = p__10001;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10002,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10002,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10002,(2),null);
if(cljs.core.truth_(value)){
return cljs.core.assoc_in(app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.degel.re-frame-firebase.database","cache","com.degel.re-frame-firebase.database/cache",-127090720),id], null),value);
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(app_db,new cljs.core.Keyword("com.degel.re-frame-firebase.database","cache","com.degel.re-frame-firebase.database/cache",-127090720),cljs.core.dissoc,id);
}
}));

//# sourceMappingURL=com.degel.re_frame_firebase.database.js.map
