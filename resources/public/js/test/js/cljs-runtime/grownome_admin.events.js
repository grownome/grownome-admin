goog.provide('grownome_admin.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('grownome_admin.db');
goog.require('day8.re_frame.tracing');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("grownome-admin.events","initialize-db","grownome-admin.events/initialize-db",-1034415433),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null));

var opts__5582__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__5583__auto__ = grownome_admin.db.default_db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__5583__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__5583__auto__;
}catch (e9745){var e = e9745;
throw e;
}}):(function (_,___$1){
return grownome_admin.db.default_db;
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("grownome-admin.events","set-active-panel","grownome-admin.events/set-active-panel",218646721),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__9746){
var vec__9747 = p__9746;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9747,(0),null);
var active_panel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9747,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),new cljs.core.Symbol(null,"active-panel","active-panel",-162014467,null)));

var opts__5582__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__5583__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__5582__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__5583__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__5583__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__5583__auto__;
})(),new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),(function (){var opts__5582__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__5583__auto__ = active_panel;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__5583__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"active-panel","active-panel",-162014467,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__5583__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__5583__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),new cljs.core.Symbol(null,"active-panel","active-panel",-162014467,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__5583__auto__;
}catch (e9751){var e = e9751;
throw e;
}}):(function (db,p__9752){
var vec__9753 = p__9752;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9753,(0),null);
var active_panel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9753,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("grownome-admin.events","sign-in","grownome-admin.events/sign-in",-162709345),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("firebase","google-sign-in","firebase/google-sign-in",-1836012279),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sign-in-method","sign-in-method",1484968299),new cljs.core.Keyword(null,"popup","popup",635890211)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("grownome-admin.events","sign-out","grownome-admin.events/sign-out",-1123163136),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("firebase","sign-out","firebase/sign-out",398432018),null], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("grownome-admin.events","set-user","grownome-admin.events/set-user",1696807598),(function (db,p__9757){
var vec__9758 = p__9757;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9758,(0),null);
var user = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9758,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"user","user",1532431356),user);
}));
var G__9761_9763 = new cljs.core.Keyword("grownome-admin.events","user","grownome-admin.events/user",364203763);
var G__9762_9764 = ((function (G__9761_9763){
return (function (db,_){
return new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(db);
});})(G__9761_9763))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__9761_9763,G__9762_9764) : re_frame.core.reg_sub.call(null,G__9761_9763,G__9762_9764));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("grownome-admin.events","firebase-error","grownome-admin.events/firebase-error",-409397621),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__9765){
var vec__9766 = p__9765;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9766,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9766,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"firebase-error","firebase-error",-1374201998),new cljs.core.Symbol(null,"error","error",661562495,null)));

var opts__5582__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__5583__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__5582__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__5583__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__5583__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__5583__auto__;
})(),new cljs.core.Keyword(null,"firebase-error","firebase-error",-1374201998),(function (){var opts__5582__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__5583__auto__ = error;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__5583__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"error","error",661562495,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__5583__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__5583__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"firebase-error","firebase-error",-1374201998),new cljs.core.Symbol(null,"error","error",661562495,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__5583__auto__;
}catch (e9770){var e = e9770;
throw e;
}}):(function (db,p__9773){
var vec__9774 = p__9773;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9774,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9774,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"firebase-error","firebase-error",-1374201998),error);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("grownome-admin.events","device-get","grownome-admin.events/device-get",-1236031628),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("firestore","get","firestore/get",1951260858),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path-collection","path-collection",-1906935925),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"device-names","device-names",-717868214)], null),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("grownome-admin.events","save-devices","grownome-admin.events/save-devices",372810717)], null)], null)], null);
}));
grownome_admin.events.test_data = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"devices","devices",1929380599),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"docs","docs",-1974280502),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["xx","11"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["yy","22"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),"id"], null)], null)], null);
/**
 * Pull the :devices data out of the incoming vector
 */
grownome_admin.events.get_devices = (function grownome_admin$events$get_devices(d){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"devices","devices",1929380599),cljs.core.first(d))){
return cljs.core.second(d);
} else {
return null;
}
});
/**
 * Extract the :docs data
 */
grownome_admin.events.get_docs = (function grownome_admin$events$get_docs(d){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"docs","docs",-1974280502),cljs.core.first(d))){
return cljs.core.rest(d);
} else {
return null;
}
});
/**
 * Convert a 2-string vector pair into a keyword/string vector pair
 *   (note the extra set of square brackets)
 */
grownome_admin.events.keywordize_pair = (function grownome_admin$events$keywordize_pair(p__9782){
var vec__9784 = p__9782;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9784,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9784,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(a),b], null);
});
/**
 * Convert heterogeneous vectors into a map
 */
grownome_admin.events.get_as_map = (function grownome_admin$events$get_as_map(d){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,d__$1){
var G__9787 = cljs.core.first(d__$1);
var G__9787__$1 = (((G__9787 instanceof cljs.core.Keyword))?G__9787.fqn:null);
switch (G__9787__$1) {
case "data":
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(result,cljs.core.map.cljs$core$IFn$_invoke$arity$2(grownome_admin.events.keywordize_pair,cljs.core.rest(d__$1)));

break;
case "id":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.second(d__$1));

break;
default:
return result;

}
}),cljs.core.PersistentArrayMap.EMPTY,d);
});
/**
 * put it all together
 */
grownome_admin.events.convert_data = (function grownome_admin$events$convert_data(d){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"devices","devices",1929380599),grownome_admin.events.get_as_map(grownome_admin.events.get_docs(grownome_admin.events.get_devices(d)))], null);
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("grownome-admin.events","save-devices","grownome-admin.events/save-devices",372810717),(function (db,p__9790){
var vec__9791 = p__9790;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9791,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9791,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"devices","devices",1929380599),value);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("grownome-admin.events","owned-updatedb","grownome-admin.events/owned-updatedb",1383113798),(function (db,p__9794){
var vec__9795 = p__9794;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9795,(0),null);
var owned_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9795,(1),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9795,(2),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$6(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"devices","devices",1929380599),new cljs.core.Keyword(null,"docs","docs",-1974280502),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null)], null),cljs.core.assoc_in,db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"devices","devices",1929380599),new cljs.core.Keyword(null,"docs","docs",-1974280502),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"owned","owned",-1539792199)], null),owned_val);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"owned-update","owned-update",252219537),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("firestore","update","firestore/update",1315165303),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"device-names","device-names",-717868214),new cljs.core.Keyword(null,"document","document",-1329188687)], null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"owned-val","owned-val",1746305582),"owned-val"], null)], null)], null);
}));

//# sourceMappingURL=grownome_admin.events.js.map
