goog.provide('expound.ansi');
goog.require('cljs.core');
goog.require('clojure.string');
/**
 * Map of symbols to numeric SGR (select graphic rendition) codes.
 */
expound.ansi.sgr_code = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"bold","bold",-116809535),new cljs.core.Keyword(null,"blink","blink",-271985917),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"bg-red","bg-red",-1645498040),new cljs.core.Keyword(null,"bg-cyan","bg-cyan",-1582237015),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"bg-green","bg-green",-138353590),new cljs.core.Keyword(null,"fg-reset","fg-reset",1908873578),new cljs.core.Keyword(null,"cyan","cyan",1118839274),new cljs.core.Keyword(null,"bg-black","bg-black",2110303851),new cljs.core.Keyword(null,"fg-256","fg-256",-255017013),new cljs.core.Keyword(null,"underline","underline",2018066703),new cljs.core.Keyword(null,"bg-magenta","bg-magenta",2073641232),new cljs.core.Keyword(null,"strike","strike",-1173815471),new cljs.core.Keyword(null,"bg-yellow","bg-yellow",-1293468429),new cljs.core.Keyword(null,"hidden","hidden",-312506092),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"bg-white","bg-white",-1453241673),new cljs.core.Keyword(null,"bg-256","bg-256",1097886744),new cljs.core.Keyword(null,"magenta","magenta",1687937081),new cljs.core.Keyword(null,"bg-blue","bg-blue",-1747478308),new cljs.core.Keyword(null,"bg-reset","bg-reset",857739453),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"reverse","reverse",-888455266),new cljs.core.Keyword(null,"black","black",1294279647)],[(1),(5),(37),(33),(41),(46),(32),(42),(39),(36),(40),(38),(3),(45),(9),(43),(8),(31),(34),(47),(48),(35),(44),(49),(0),(7),(30)]);
expound.ansi._STAR_enable_color_STAR_ = false;
/**
 * Returns an ANSI escope string which will apply the given collection of SGR
 *   codes.
 */
expound.ansi.esc = (function expound$ansi$esc(codes){
var codes__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(expound.ansi.sgr_code,codes,codes);
var codes__$2 = clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",codes__$1);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\u001B"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(codes__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1("m")].join('');
});
/**
 * Returns an ANSI escope string which will enact the given SGR codes.
 */
expound.ansi.escape = (function expound$ansi$escape(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9096 = arguments.length;
var i__4532__auto___9097 = (0);
while(true){
if((i__4532__auto___9097 < len__4531__auto___9096)){
args__4534__auto__.push((arguments[i__4532__auto___9097]));

var G__9098 = (i__4532__auto___9097 + (1));
i__4532__auto___9097 = G__9098;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return expound.ansi.escape.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

expound.ansi.escape.cljs$core$IFn$_invoke$arity$variadic = (function (codes){
return expound.ansi.esc(codes);
});

expound.ansi.escape.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
expound.ansi.escape.cljs$lang$applyTo = (function (seq9095){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9095));
});

/**
 * Wraps the given string with SGR escapes to apply the given codes, then reset
 *   the graphics.
 */
expound.ansi.sgr = (function expound$ansi$sgr(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9102 = arguments.length;
var i__4532__auto___9103 = (0);
while(true){
if((i__4532__auto___9103 < len__4531__auto___9102)){
args__4534__auto__.push((arguments[i__4532__auto___9103]));

var G__9104 = (i__4532__auto___9103 + (1));
i__4532__auto___9103 = G__9104;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return expound.ansi.sgr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

expound.ansi.sgr.cljs$core$IFn$_invoke$arity$variadic = (function (string,codes){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(expound.ansi.esc(codes)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(string),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expound.ansi.escape.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"none","none",1333468478)], 0)))].join('');
});

expound.ansi.sgr.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
expound.ansi.sgr.cljs$lang$applyTo = (function (seq9100){
var G__9101 = cljs.core.first(seq9100);
var seq9100__$1 = cljs.core.next(seq9100);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9101,seq9100__$1);
});

/**
 * Removes color codes from the given string.
 */
expound.ansi.strip = (function expound$ansi$strip(string){
return clojure.string.replace(string,/\u001b\[[0-9;]*[mK]/,"");
});
expound.ansi.ansi_code_QMARK_ = expound.ansi.sgr_code;
expound.ansi._STAR_print_styles_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"good-key","good-key",-1265033983),new cljs.core.Keyword(null,"warning-key","warning-key",-1487066651),new cljs.core.Keyword(null,"correct-key","correct-key",1087492967),new cljs.core.Keyword(null,"highlight","highlight",-800930873),new cljs.core.Keyword(null,"focus-path","focus-path",-2048689431),new cljs.core.Keyword(null,"bad-value","bad-value",-139100659),new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"good-pred","good-pred",-629085297),new cljs.core.Keyword(null,"good","good",511701169),new cljs.core.Keyword(null,"focus-key","focus-key",2074966449),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"bad","bad",1127186645),new cljs.core.Keyword(null,"error-key","error-key",-1651308715),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"message","message",-406056002)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"green","green",-945526839)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bold","bold",-116809535)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"green","green",-945526839)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bold","bold",-116809535)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"magenta","magenta",1687937081)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"red","red",-969428204)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cyan","cyan",1118839274)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cyan","cyan",1118839274)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"green","green",-945526839)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"green","green",-945526839)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bold","bold",-116809535)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"magenta","magenta",1687937081)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"red","red",-969428204)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"red","red",-969428204)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"none","none",1333468478)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"magenta","magenta",1687937081)], null)]);
expound.ansi.resolve_styles = (function expound$ansi$resolve_styles(styles){
var temp__5455__auto__ = cljs.core.not_empty(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__9111_SHARP_){
var or__3949__auto__ = (function (){var temp__5457__auto__ = (expound.ansi._STAR_print_styles_STAR_.cljs$core$IFn$_invoke$arity$1 ? expound.ansi._STAR_print_styles_STAR_.cljs$core$IFn$_invoke$arity$1(p1__9111_SHARP_) : expound.ansi._STAR_print_styles_STAR_.call(null,p1__9111_SHARP_));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return res;
} else {
return null;
}
})();
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9111_SHARP_], null);
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([styles], 0)));
if(cljs.core.truth_(temp__5455__auto__)){
var res = temp__5455__auto__;
return res;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bold","bold",-116809535)], null);
}
});
expound.ansi.color = (function expound$ansi$color(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9168 = arguments.length;
var i__4532__auto___9170 = (0);
while(true){
if((i__4532__auto___9170 < len__4531__auto___9168)){
args__4534__auto__.push((arguments[i__4532__auto___9170]));

var G__9171 = (i__4532__auto___9170 + (1));
i__4532__auto___9170 = G__9171;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic = (function (s,styles){
if(expound.ansi._STAR_enable_color_STAR_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(expound.ansi.sgr,s,expound.ansi.resolve_styles(styles));
} else {
return s;
}
});

expound.ansi.color.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
expound.ansi.color.cljs$lang$applyTo = (function (seq9129){
var G__9130 = cljs.core.first(seq9129);
var seq9129__$1 = cljs.core.next(seq9129);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9130,seq9129__$1);
});


//# sourceMappingURL=expound.ansi.js.map
