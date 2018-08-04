goog.provide('iron.utils');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('clojure.string');
/**
 * Variant of empty? that behaves reasonably for non-seqs too.
 *   Note that nil is negligible but false is not negligible.
 */
iron.utils.negligible_QMARK_ = (function iron$utils$negligible_QMARK_(x){
if(cljs.core.seqable_QMARK_(x)){
return cljs.core.empty_QMARK_(x);
} else {
if(cljs.core.boolean_QMARK_(x)){
return false;
} else {
return cljs.core.not(x);

}
}
});
/**
 * Case-insensitive string compare
 */
iron.utils.ci_compare = (function iron$utils$ci_compare(s1,s2){
return cljs.core.compare(clojure.string.upper_case(s1),clojure.string.upper_case(s2));
});
/**
 * Case-insensitive string sort
 */
iron.utils.ci_sort = (function iron$utils$ci_sort(coll){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(clojure.string.upper_case,coll);
});
/**
 * Case-insensitive string sort-by
 */
iron.utils.ci_sort_by = (function iron$utils$ci_sort_by(keyfn,coll){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(clojure.string.upper_case,keyfn),coll);
});
/**
 * Case-insensitive string inclusion test
 */
iron.utils.ci_includes_QMARK_ = (function iron$utils$ci_includes_QMARK_(s,substr){
return clojure.string.includes_QMARK_(clojure.string.upper_case(s),clojure.string.upper_case(substr));
});
/**
 * Like s/valid?, but show the error like s/assert. Useful for pre-conditions.
 */
iron.utils.validate = (function iron$utils$validate(spec,x){
var or__3949__auto__ = cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec,x);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.spec.alpha.explain(spec,x);
}
});
/**
 * Like concat, but return a vector.
 */
iron.utils.vconcat = (function iron$utils$vconcat(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9376 = arguments.length;
var i__4532__auto___9377 = (0);
while(true){
if((i__4532__auto___9377 < len__4531__auto___9376)){
args__4534__auto__.push((arguments[i__4532__auto___9377]));

var G__9378 = (i__4532__auto___9377 + (1));
i__4532__auto___9377 = G__9378;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return iron.utils.vconcat.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

iron.utils.vconcat.cljs$core$IFn$_invoke$arity$variadic = (function (vecs){
return cljs.core.vec(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,vecs));
});

iron.utils.vconcat.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
iron.utils.vconcat.cljs$lang$applyTo = (function (seq9375){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9375));
});

cljs.spec.alpha.def_impl(new cljs.core.Keyword("iron.utils","event-vector","iron.utils/event-vector",-2103185245),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"params","params",710516235)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword_QMARK_,cljs.spec.alpha.rep_impl(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)));
/**
 * Remove trailing '?' from predicate, to make suitable for JavaScript
 */
iron.utils.unpredicate = (function iron$utils$unpredicate(s){
if(clojure.string.ends_with_QMARK_(s,"?")){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(cljs.core.count(s) - (1)));
} else {
return s;
}
});
/**
 * Convert a string from ClojureScript to JavaScript conventions.
 *   - Replace hyphens with camelCase
 *   - Remove trailing '?'
 */
iron.utils.camelize_str = (function iron$utils$camelize_str(s){
var vec__9379 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(iron.utils.unpredicate(s),"-");
var seq__9380 = cljs.core.seq(vec__9379);
var first__9381 = cljs.core.first(seq__9380);
var seq__9380__$1 = cljs.core.next(seq__9380);
var first_word = first__9381;
var more = seq__9380__$1;
if(more){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_word),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.capitalize,more)))].join('');
} else {
return first_word;
}
});
/**
 * Convert a keyword from ClojureScript to JavaScript conventions.
 *   - Replace hyphens with camelCase
 *   - Remove trailing '?'
 *   - Preserve namespace
 */
iron.utils.camelize_key = (function iron$utils$camelize_key(k){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(k),iron.utils.camelize_str(cljs.core.name(k)));
});
/**
 * Convert a map from ClojureScript to JavaScript conventions. Change the map
 *   keys, but leave the values alone.  For convenience, you can pass in a seq
 *   of keywords that must be excluded (left unchanged).
 */
iron.utils.camelize_map_keys = (function iron$utils$camelize_map_keys(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9395 = arguments.length;
var i__4532__auto___9396 = (0);
while(true){
if((i__4532__auto___9396 < len__4531__auto___9395)){
args__4534__auto__.push((arguments[i__4532__auto___9396]));

var G__9397 = (i__4532__auto___9396 + (1));
i__4532__auto___9396 = G__9397;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return iron.utils.camelize_map_keys.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

iron.utils.camelize_map_keys.cljs$core$IFn$_invoke$arity$variadic = (function (m,p__9387){
var map__9388 = p__9387;
var map__9388__$1 = ((((!((map__9388 == null)))?(((((map__9388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9388.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9388):map__9388);
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9388__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
return cljs.core.reduce_kv(((function (map__9388,map__9388__$1,exclude){
return (function (m__$1,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([k]),exclude))?k:iron.utils.camelize_key(k)),v);
});})(map__9388,map__9388__$1,exclude))
,cljs.core.PersistentArrayMap.EMPTY,m);
});

iron.utils.camelize_map_keys.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
iron.utils.camelize_map_keys.cljs$lang$applyTo = (function (seq9383){
var G__9384 = cljs.core.first(seq9383);
var seq9383__$1 = cljs.core.next(seq9383);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9384,seq9383__$1);
});

/**
 * Simple helper to show an error message in Clojure or ClojureScript
 */
iron.utils.err = (function iron$utils$err(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9404 = arguments.length;
var i__4532__auto___9405 = (0);
while(true){
if((i__4532__auto___9405 < len__4531__auto___9404)){
args__4534__auto__.push((arguments[i__4532__auto___9405]));

var G__9406 = (i__4532__auto___9405 + (1));
i__4532__auto___9405 = G__9406;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return iron.utils.err.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

iron.utils.err.cljs$core$IFn$_invoke$arity$variadic = (function (strings){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(console.error,strings);
});

iron.utils.err.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
iron.utils.err.cljs$lang$applyTo = (function (seq9400){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9400));
});


//# sourceMappingURL=iron.utils.js.map
