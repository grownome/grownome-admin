goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__5661__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__5661 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5662__i = 0, G__5662__a = new Array(arguments.length -  0);
while (G__5662__i < G__5662__a.length) {G__5662__a[G__5662__i] = arguments[G__5662__i + 0]; ++G__5662__i;}
  args = new cljs.core.IndexedSeq(G__5662__a,0,null);
} 
return G__5661__delegate.call(this,args);};
G__5661.cljs$lang$maxFixedArity = 0;
G__5661.cljs$lang$applyTo = (function (arglist__5663){
var args = cljs.core.seq(arglist__5663);
return G__5661__delegate(args);
});
G__5661.cljs$core$IFn$_invoke$arity$variadic = G__5661__delegate;
return G__5661;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__5664__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__5664 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5665__i = 0, G__5665__a = new Array(arguments.length -  0);
while (G__5665__i < G__5665__a.length) {G__5665__a[G__5665__i] = arguments[G__5665__i + 0]; ++G__5665__i;}
  args = new cljs.core.IndexedSeq(G__5665__a,0,null);
} 
return G__5664__delegate.call(this,args);};
G__5664.cljs$lang$maxFixedArity = 0;
G__5664.cljs$lang$applyTo = (function (arglist__5666){
var args = cljs.core.seq(arglist__5666);
return G__5664__delegate(args);
});
G__5664.cljs$core$IFn$_invoke$arity$variadic = G__5664__delegate;
return G__5664;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
