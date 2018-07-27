// Compiled by ClojureScript 1.10.238 {}
goog.provide('grownome_admin.playing');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
grownome_admin.playing.test_data = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"devices","devices",1929380599),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"docs","docs",-1974280502),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["xx","11"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["yy","22"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),"id"], null)], null)], null);
/**
 * Pull the :devices data out of the incoming vector
 */
grownome_admin.playing.get_devices = (function grownome_admin$playing$get_devices(d){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"devices","devices",1929380599),cljs.core.first.call(null,d))){
return cljs.core.second.call(null,d);
} else {
return null;
}
});
/**
 * Extract the :docs data
 */
grownome_admin.playing.get_docs = (function grownome_admin$playing$get_docs(d){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"docs","docs",-1974280502),cljs.core.first.call(null,d))){
return cljs.core.rest.call(null,d);
} else {
return null;
}
});
/**
 * Convert a 2-string vector pair into a keyword/string vector pair
 *   (note the extra set of square brackets)
 */
grownome_admin.playing.keywordize_pair = (function grownome_admin$playing$keywordize_pair(p__13278){
var vec__13279 = p__13278;
var a = cljs.core.nth.call(null,vec__13279,(0),null);
var b = cljs.core.nth.call(null,vec__13279,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,a),b], null);
});
/**
 * Convert heterogeneous vectors into a map
 */
grownome_admin.playing.get_as_map = (function grownome_admin$playing$get_as_map(d){
return cljs.core.reduce.call(null,(function (result,d__$1){
var G__13282 = cljs.core.first.call(null,d__$1);
var G__13282__$1 = (((G__13282 instanceof cljs.core.Keyword))?G__13282.fqn:null);
switch (G__13282__$1) {
case "data":
return cljs.core.into.call(null,result,cljs.core.map.call(null,grownome_admin.playing.keywordize_pair,cljs.core.rest.call(null,d__$1)));

break;
case "id":
return cljs.core.assoc.call(null,result,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.second.call(null,d__$1));

break;
default:
return result;

}
}),cljs.core.PersistentArrayMap.EMPTY,d);
});
/**
 * put it all together
 */
grownome_admin.playing.convert_data = (function grownome_admin$playing$convert_data(d){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"devices","devices",1929380599),grownome_admin.playing.get_as_map.call(null,grownome_admin.playing.get_docs.call(null,grownome_admin.playing.get_devices.call(null,d)))], null);
});

//# sourceMappingURL=playing.js.map
