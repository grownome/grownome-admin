goog.provide('grownome_admin.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
var G__8950_8952 = new cljs.core.Keyword("grownome-admin.subs","name","grownome-admin.subs/name",1540601950);
var G__8951_8953 = ((function (G__8950_8952){
return (function (db){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(db);
});})(G__8950_8952))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__8950_8952,G__8951_8953) : re_frame.core.reg_sub.call(null,G__8950_8952,G__8951_8953));
var G__8963_8968 = new cljs.core.Keyword("grownome-admin.subs","active-panel","grownome-admin.subs/active-panel",-1633834041);
var G__8964_8969 = ((function (G__8963_8968){
return (function (db,_){
return new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994).cljs$core$IFn$_invoke$arity$1(db);
});})(G__8963_8968))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__8963_8968,G__8964_8969) : re_frame.core.reg_sub.call(null,G__8963_8968,G__8964_8969));
var G__8972_8975 = new cljs.core.Keyword("grownome-admin.subs","devices","grownome-admin.subs/devices",-456127812);
var G__8973_8976 = ((function (G__8972_8975){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"devices","devices",1929380599),new cljs.core.Keyword(null,"docs","docs",-1974280502)], null));
});})(G__8972_8975))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__8972_8975,G__8973_8976) : re_frame.core.reg_sub.call(null,G__8972_8975,G__8973_8976));
var G__8982_8993 = new cljs.core.Keyword("grownome-admin.subs","devices-sorted","grownome-admin.subs/devices-sorted",-313174229);
var G__8983_8994 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__8984_8995 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("grownome-admin.subs","devices","grownome-admin.subs/devices",-456127812)], null);
var G__8985_8996 = ((function (G__8982_8993,G__8983_8994,G__8984_8995){
return (function (devices,p__8987,_){
var vec__8989 = p__8987;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8989,(0),null);
var sorted_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8989,(1),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8989,(2),null);
var inverted_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8989,(3),null);
if(cljs.core.truth_(cljs.core.deref(sorted_QMARK_))){
var sorted_devices = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (vec__8989,___$1,sorted_QMARK_,field,inverted_QMARK_,G__8982_8993,G__8983_8994,G__8984_8995){
return (function (p1__8981_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(p1__8981_SHARP_),cljs.core.deref(field));
});})(vec__8989,___$1,sorted_QMARK_,field,inverted_QMARK_,G__8982_8993,G__8983_8994,G__8984_8995))
,devices);
if(cljs.core.truth_(cljs.core.deref(inverted_QMARK_))){
return cljs.core.reverse(sorted_devices);
} else {
return sorted_devices;
}
} else {
return devices;
}
});})(G__8982_8993,G__8983_8994,G__8984_8995))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__8982_8993,G__8983_8994,G__8984_8995,G__8985_8996) : re_frame.core.reg_sub.call(null,G__8982_8993,G__8983_8994,G__8984_8995,G__8985_8996));

//# sourceMappingURL=grownome_admin.subs.js.map
