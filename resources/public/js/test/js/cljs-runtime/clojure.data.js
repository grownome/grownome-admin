goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__4306){
var vec__4307 = p__4306;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4307,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4307,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__4316 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4316,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4316,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4316,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && (((!((ab == null))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && (((!((a_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && (((!((b_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__4344 = arguments.length;
switch (G__4344) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4037__auto__ = cljs.core.count(a);
var y__4038__auto__ = cljs.core.count(b);
return ((x__4037__auto__ > y__4038__auto__) ? x__4037__auto__ : y__4038__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if(((!((x == null))) && (!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4243__auto__ = (((x == null))?null:x);
var m__4244__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4244__auto__.call(null,x));
} else {
var m__4244__auto____$1 = (clojure.data.equality_partition["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__4244__auto____$1.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if(((!((a == null))) && (!((a.clojure$data$Diff$diff_similar$arity$2 == null))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4243__auto__ = (((a == null))?null:a);
var m__4244__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4244__auto__.call(null,a,b));
} else {
var m__4244__auto____$1 = (clojure.data.diff_similar["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(a,b) : m__4244__auto____$1.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__4412_4464 = clojure.data.equality_partition;
var G__4413_4465 = "null";
var G__4414_4466 = ((function (G__4412_4464,G__4413_4465){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__4412_4464,G__4413_4465))
;
goog.object.set(G__4412_4464,G__4413_4465,G__4414_4466);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__4420_4469 = clojure.data.equality_partition;
var G__4421_4470 = "string";
var G__4422_4471 = ((function (G__4420_4469,G__4421_4470){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__4420_4469,G__4421_4470))
;
goog.object.set(G__4420_4469,G__4421_4470,G__4422_4471);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__4425_4480 = clojure.data.equality_partition;
var G__4426_4481 = "number";
var G__4427_4482 = ((function (G__4425_4480,G__4426_4481){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__4425_4480,G__4426_4481))
;
goog.object.set(G__4425_4480,G__4426_4481,G__4427_4482);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__4430_4483 = clojure.data.equality_partition;
var G__4431_4484 = "array";
var G__4432_4485 = ((function (G__4430_4483,G__4431_4484){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__4430_4483,G__4431_4484))
;
goog.object.set(G__4430_4483,G__4431_4484,G__4432_4485);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__4437_4488 = clojure.data.equality_partition;
var G__4438_4489 = "function";
var G__4439_4490 = ((function (G__4437_4488,G__4438_4489){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__4437_4488,G__4438_4489))
;
goog.object.set(G__4437_4488,G__4438_4489,G__4439_4490);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__4442_4493 = clojure.data.equality_partition;
var G__4443_4494 = "boolean";
var G__4444_4495 = ((function (G__4442_4493,G__4443_4494){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__4442_4493,G__4443_4494))
;
goog.object.set(G__4442_4493,G__4443_4494,G__4444_4495);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__4449_4498 = clojure.data.equality_partition;
var G__4450_4499 = "_";
var G__4451_4500 = ((function (G__4449_4498,G__4450_4499){
return (function (x){
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});})(G__4449_4498,G__4450_4499))
;
goog.object.set(G__4449_4498,G__4450_4499,G__4451_4500);
goog.object.set(clojure.data.Diff,"null",true);

var G__4514_4570 = clojure.data.diff_similar;
var G__4515_4571 = "null";
var G__4516_4572 = ((function (G__4514_4570,G__4515_4571){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__4514_4570,G__4515_4571))
;
goog.object.set(G__4514_4570,G__4515_4571,G__4516_4572);

goog.object.set(clojure.data.Diff,"string",true);

var G__4519_4574 = clojure.data.diff_similar;
var G__4520_4575 = "string";
var G__4521_4576 = ((function (G__4519_4574,G__4520_4575){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__4519_4574,G__4520_4575))
;
goog.object.set(G__4519_4574,G__4520_4575,G__4521_4576);

goog.object.set(clojure.data.Diff,"number",true);

var G__4528_4579 = clojure.data.diff_similar;
var G__4529_4580 = "number";
var G__4530_4581 = ((function (G__4528_4579,G__4529_4580){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__4528_4579,G__4529_4580))
;
goog.object.set(G__4528_4579,G__4529_4580,G__4530_4581);

goog.object.set(clojure.data.Diff,"array",true);

var G__4533_4583 = clojure.data.diff_similar;
var G__4535_4584 = "array";
var G__4536_4585 = ((function (G__4533_4583,G__4535_4584){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__4533_4583,G__4535_4584))
;
goog.object.set(G__4533_4583,G__4535_4584,G__4536_4585);

goog.object.set(clojure.data.Diff,"function",true);

var G__4543_4588 = clojure.data.diff_similar;
var G__4544_4589 = "function";
var G__4545_4590 = ((function (G__4543_4588,G__4544_4589){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__4543_4588,G__4544_4589))
;
goog.object.set(G__4543_4588,G__4544_4589,G__4545_4590);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__4549_4593 = clojure.data.diff_similar;
var G__4550_4594 = "boolean";
var G__4551_4595 = ((function (G__4549_4593,G__4550_4594){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__4549_4593,G__4550_4594))
;
goog.object.set(G__4549_4593,G__4550_4594,G__4551_4595);

goog.object.set(clojure.data.Diff,"_",true);

var G__4554_4596 = clojure.data.diff_similar;
var G__4555_4597 = "_";
var G__4556_4598 = ((function (G__4554_4596,G__4555_4597){
return (function (a,b){
var fexpr__4565 = (function (){var G__4567 = clojure.data.equality_partition(a);
var G__4567__$1 = (((G__4567 instanceof cljs.core.Keyword))?G__4567.fqn:null);
switch (G__4567__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4567__$1)].join('')));

}
})();
return (fexpr__4565.cljs$core$IFn$_invoke$arity$2 ? fexpr__4565.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__4565.call(null,a,b));
});})(G__4554_4596,G__4555_4597))
;
goog.object.set(G__4554_4596,G__4555_4597,G__4556_4598);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});

//# sourceMappingURL=clojure.data.js.map
