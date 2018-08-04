goog.provide('cljs_time.coerce');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('cljs_time.format');
goog.require('goog.date.UtcDateTime');

/**
 * @interface
 */
cljs_time.coerce.ICoerce = function(){};

/**
 * Convert `obj` to a goog.date.DateTime instance.
 */
cljs_time.coerce.to_date_time = (function cljs_time$coerce$to_date_time(obj){
if(((!((obj == null))) && (!((obj.cljs_time$coerce$ICoerce$to_date_time$arity$1 == null))))){
return obj.cljs_time$coerce$ICoerce$to_date_time$arity$1(obj);
} else {
var x__4243__auto__ = (((obj == null))?null:obj);
var m__4244__auto__ = (cljs_time.coerce.to_date_time[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(obj) : m__4244__auto__.call(null,obj));
} else {
var m__4244__auto____$1 = (cljs_time.coerce.to_date_time["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(obj) : m__4244__auto____$1.call(null,obj));
} else {
throw cljs.core.missing_protocol("ICoerce.to-date-time",obj);
}
}
}
});

/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.from_long = (function cljs_time$coerce$from_long(millis){
var G__8534 = millis;
if((G__8534 == null)){
return null;
} else {
return (goog.date.UtcDateTime.fromTimestamp.cljs$core$IFn$_invoke$arity$1 ? goog.date.UtcDateTime.fromTimestamp.cljs$core$IFn$_invoke$arity$1(G__8534) : goog.date.UtcDateTime.fromTimestamp.call(null,G__8534));
}
});
/**
 * Returns DateTime instance from string using formatters in cljs-time.format,
 *   returning first which parses
 */
cljs_time.coerce.from_string = (function cljs_time$coerce$from_string(s){
if(cljs.core.truth_(s)){
return cljs.core.first((function (){var iter__4324__auto__ = (function cljs_time$coerce$from_string_$_iter__8536(s__8537){
return (new cljs.core.LazySeq(null,(function (){
var s__8537__$1 = s__8537;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__8537__$1);
if(temp__5457__auto__){
var s__8537__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__8537__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__8537__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__8539 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__8538 = (0);
while(true){
if((i__8538 < size__4323__auto__)){
var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__8538);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e8543){if((e8543 instanceof Error)){
var _ = e8543;
return null;
} else {
throw e8543;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append(b__8539,d);

var G__8546 = (i__8538 + (1));
i__8538 = G__8546;
continue;
} else {
var G__8547 = (i__8538 + (1));
i__8538 = G__8547;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8539),cljs_time$coerce$from_string_$_iter__8536(cljs.core.chunk_rest(s__8537__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8539),null);
}
} else {
var f = cljs.core.first(s__8537__$2);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e8545){if((e8545 instanceof Error)){
var _ = e8545;
return null;
} else {
throw e8545;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons(d,cljs_time$coerce$from_string_$_iter__8536(cljs.core.rest(s__8537__$2)));
} else {
var G__8550 = cljs.core.rest(s__8537__$2);
s__8537__$1 = G__8550;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(cljs.core.vals(cljs_time.format.formatters));
})());
} else {
return null;
}
});
/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   js Date object.
 */
cljs_time.coerce.from_date = (function cljs_time$coerce$from_date(date){
var G__8551 = date;
var G__8551__$1 = (((G__8551 == null))?null:G__8551.getTime());
if((G__8551__$1 == null)){
return null;
} else {
return cljs_time.coerce.from_long(G__8551__$1);
}
});
/**
 * Convert `obj` to the number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.to_long = (function cljs_time$coerce$to_long(obj){
var G__8553 = obj;
var G__8553__$1 = (((G__8553 == null))?null:cljs_time.coerce.to_date_time(G__8553));
if((G__8553__$1 == null)){
return null;
} else {
return G__8553__$1.getTime();
}
});
/**
 * Convert `obj` to Unix epoch.
 */
cljs_time.coerce.to_epoch = (function cljs_time$coerce$to_epoch(obj){
var millis = cljs_time.coerce.to_long(obj);
var and__3938__auto__ = millis;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.quot(millis,(1000));
} else {
return and__3938__auto__;
}
});
/**
 * Convert `obj` to a JavaScript Date instance.
 */
cljs_time.coerce.to_date = (function cljs_time$coerce$to_date(obj){
var G__8554 = obj;
var G__8554__$1 = (((G__8554 == null))?null:cljs_time.coerce.to_date_time(G__8554));
var G__8554__$2 = (((G__8554__$1 == null))?null:G__8554__$1.getTime());
if((G__8554__$2 == null)){
return null;
} else {
return (new Date(G__8554__$2));
}
});
/**
 * Returns a string representation of obj in UTC time-zone
 *   using "yyyy-MM-dd'T'HH:mm:ss.SSSZZ" date-time representation.
 */
cljs_time.coerce.to_string = (function cljs_time$coerce$to_string(obj){
var G__8569 = obj;
var G__8569__$1 = (((G__8569 == null))?null:cljs_time.coerce.to_date_time(G__8569));
if((G__8569__$1 == null)){
return null;
} else {
return cljs_time.format.unparse(new cljs.core.Keyword(null,"date-time","date-time",177938180).cljs$core$IFn$_invoke$arity$1(cljs_time.format.formatters),G__8569__$1);
}
});
/**
 * Convert `obj` to a goog.date.Date instance
 */
cljs_time.coerce.to_local_date = (function cljs_time$coerce$to_local_date(obj){
if(cljs.core.truth_(obj)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(goog.date.Date,cljs.core.type(obj))){
return obj;
} else {
var temp__5455__auto__ = cljs_time.coerce.to_date_time(obj);
if(cljs.core.truth_(temp__5455__auto__)){
var dt = temp__5455__auto__;
return (new goog.date.Date(dt.getYear(),dt.getMonth(),dt.getDate()));
} else {
return null;
}
}
} else {
return null;
}
});
/**
 * Convert `obj` to a goog.date.DateTime instance
 */
cljs_time.coerce.to_local_date_time = (function cljs_time$coerce$to_local_date_time(obj){
if(cljs.core.truth_(obj)){
var temp__5455__auto__ = cljs_time.coerce.to_date_time(obj);
if(cljs.core.truth_(temp__5455__auto__)){
var dt = temp__5455__auto__;
var G__8583 = (new goog.date.DateTime(dt.getYear(),dt.getMonth(),dt.getDate()));
G__8583.setHours(dt.getHours());

G__8583.setMinutes(dt.getMinutes());

G__8583.setSeconds(dt.getSeconds());

G__8583.setMilliseconds(dt.getMilliseconds());

return G__8583;
} else {
return null;
}
} else {
return null;
}
});
goog.object.set(cljs_time.coerce.ICoerce,"null",true);

var G__8593_8606 = cljs_time.coerce.to_date_time;
var G__8594_8607 = "null";
var G__8595_8608 = ((function (G__8593_8606,G__8594_8607){
return (function (_){
return null;
});})(G__8593_8606,G__8594_8607))
;
goog.object.set(G__8593_8606,G__8594_8607,G__8595_8608);

Date.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date){
var date__$1 = this;
return cljs_time.coerce.from_date(date__$1);
});

goog.date.Date.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date){
var local_date__$1 = this;
if(cljs.core.truth_(local_date__$1)){
return cljs_time.core.to_utc_time_zone(local_date__$1);
} else {
return null;
}
});

goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date_time){
var local_date_time__$1 = this;
if(cljs.core.truth_(local_date_time__$1)){
return cljs_time.core.to_utc_time_zone(local_date_time__$1);
} else {
return null;
}
});

goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date_time){
var date_time__$1 = this;
return date_time__$1;
});

goog.object.set(cljs_time.coerce.ICoerce,"number",true);

var G__8599_8614 = cljs_time.coerce.to_date_time;
var G__8600_8615 = "number";
var G__8601_8616 = ((function (G__8599_8614,G__8600_8615){
return (function (long$){
return cljs_time.coerce.from_long(long$);
});})(G__8599_8614,G__8600_8615))
;
goog.object.set(G__8599_8614,G__8600_8615,G__8601_8616);

goog.object.set(cljs_time.coerce.ICoerce,"string",true);

var G__8602_8623 = cljs_time.coerce.to_date_time;
var G__8603_8624 = "string";
var G__8604_8625 = ((function (G__8602_8623,G__8603_8624){
return (function (string){
return cljs_time.coerce.from_string(string);
});})(G__8602_8623,G__8603_8624))
;
goog.object.set(G__8602_8623,G__8603_8624,G__8604_8625);

//# sourceMappingURL=cljs_time.coerce.js.map
