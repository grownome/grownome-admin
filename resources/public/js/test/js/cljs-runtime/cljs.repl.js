goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__7735){
var map__7736 = p__7735;
var map__7736__$1 = ((((!((map__7736 == null)))?(((((map__7736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7736):map__7736);
var m = map__7736__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7736__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7736__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__7738_7761 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__7739_7762 = null;
var count__7740_7763 = (0);
var i__7741_7764 = (0);
while(true){
if((i__7741_7764 < count__7740_7763)){
var f_7765 = chunk__7739_7762.cljs$core$IIndexed$_nth$arity$2(null,i__7741_7764);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_7765], 0));


var G__7766 = seq__7738_7761;
var G__7767 = chunk__7739_7762;
var G__7768 = count__7740_7763;
var G__7769 = (i__7741_7764 + (1));
seq__7738_7761 = G__7766;
chunk__7739_7762 = G__7767;
count__7740_7763 = G__7768;
i__7741_7764 = G__7769;
continue;
} else {
var temp__5457__auto___7770 = cljs.core.seq(seq__7738_7761);
if(temp__5457__auto___7770){
var seq__7738_7771__$1 = temp__5457__auto___7770;
if(cljs.core.chunked_seq_QMARK_(seq__7738_7771__$1)){
var c__4351__auto___7772 = cljs.core.chunk_first(seq__7738_7771__$1);
var G__7773 = cljs.core.chunk_rest(seq__7738_7771__$1);
var G__7774 = c__4351__auto___7772;
var G__7775 = cljs.core.count(c__4351__auto___7772);
var G__7776 = (0);
seq__7738_7761 = G__7773;
chunk__7739_7762 = G__7774;
count__7740_7763 = G__7775;
i__7741_7764 = G__7776;
continue;
} else {
var f_7777 = cljs.core.first(seq__7738_7771__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_7777], 0));


var G__7778 = cljs.core.next(seq__7738_7771__$1);
var G__7779 = null;
var G__7780 = (0);
var G__7781 = (0);
seq__7738_7761 = G__7778;
chunk__7739_7762 = G__7779;
count__7740_7763 = G__7780;
i__7741_7764 = G__7781;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_7782 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_7782], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_7782)))?cljs.core.second(arglists_7782):arglists_7782)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__7742_7783 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__7743_7784 = null;
var count__7744_7785 = (0);
var i__7745_7786 = (0);
while(true){
if((i__7745_7786 < count__7744_7785)){
var vec__7746_7787 = chunk__7743_7784.cljs$core$IIndexed$_nth$arity$2(null,i__7745_7786);
var name_7788 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7746_7787,(0),null);
var map__7749_7789 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7746_7787,(1),null);
var map__7749_7790__$1 = ((((!((map__7749_7789 == null)))?(((((map__7749_7789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7749_7789.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7749_7789):map__7749_7789);
var doc_7791 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7749_7790__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_7792 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7749_7790__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_7788], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_7792], 0));

if(cljs.core.truth_(doc_7791)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_7791], 0));
} else {
}


var G__7793 = seq__7742_7783;
var G__7794 = chunk__7743_7784;
var G__7795 = count__7744_7785;
var G__7796 = (i__7745_7786 + (1));
seq__7742_7783 = G__7793;
chunk__7743_7784 = G__7794;
count__7744_7785 = G__7795;
i__7745_7786 = G__7796;
continue;
} else {
var temp__5457__auto___7797 = cljs.core.seq(seq__7742_7783);
if(temp__5457__auto___7797){
var seq__7742_7798__$1 = temp__5457__auto___7797;
if(cljs.core.chunked_seq_QMARK_(seq__7742_7798__$1)){
var c__4351__auto___7799 = cljs.core.chunk_first(seq__7742_7798__$1);
var G__7800 = cljs.core.chunk_rest(seq__7742_7798__$1);
var G__7801 = c__4351__auto___7799;
var G__7802 = cljs.core.count(c__4351__auto___7799);
var G__7803 = (0);
seq__7742_7783 = G__7800;
chunk__7743_7784 = G__7801;
count__7744_7785 = G__7802;
i__7745_7786 = G__7803;
continue;
} else {
var vec__7752_7804 = cljs.core.first(seq__7742_7798__$1);
var name_7805 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7752_7804,(0),null);
var map__7755_7806 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7752_7804,(1),null);
var map__7755_7807__$1 = ((((!((map__7755_7806 == null)))?(((((map__7755_7806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7755_7806.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7755_7806):map__7755_7806);
var doc_7808 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7755_7807__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_7809 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7755_7807__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_7805], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_7809], 0));

if(cljs.core.truth_(doc_7808)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_7808], 0));
} else {
}


var G__7810 = cljs.core.next(seq__7742_7798__$1);
var G__7811 = null;
var G__7812 = (0);
var G__7813 = (0);
seq__7742_7783 = G__7810;
chunk__7743_7784 = G__7811;
count__7744_7785 = G__7812;
i__7745_7786 = G__7813;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n))].join(''),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__7757 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__7758 = null;
var count__7759 = (0);
var i__7760 = (0);
while(true){
if((i__7760 < count__7759)){
var role = chunk__7758.cljs$core$IIndexed$_nth$arity$2(null,i__7760);
var temp__5457__auto___7814__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___7814__$1)){
var spec_7815 = temp__5457__auto___7814__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_7815)], 0));
} else {
}


var G__7820 = seq__7757;
var G__7821 = chunk__7758;
var G__7822 = count__7759;
var G__7823 = (i__7760 + (1));
seq__7757 = G__7820;
chunk__7758 = G__7821;
count__7759 = G__7822;
i__7760 = G__7823;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq(seq__7757);
if(temp__5457__auto____$1){
var seq__7757__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__7757__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__7757__$1);
var G__7825 = cljs.core.chunk_rest(seq__7757__$1);
var G__7826 = c__4351__auto__;
var G__7827 = cljs.core.count(c__4351__auto__);
var G__7828 = (0);
seq__7757 = G__7825;
chunk__7758 = G__7826;
count__7759 = G__7827;
i__7760 = G__7828;
continue;
} else {
var role = cljs.core.first(seq__7757__$1);
var temp__5457__auto___7829__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___7829__$2)){
var spec_7830 = temp__5457__auto___7829__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_7830)], 0));
} else {
}


var G__7831 = cljs.core.next(seq__7757__$1);
var G__7832 = null;
var G__7833 = (0);
var G__7834 = (0);
seq__7757 = G__7831;
chunk__7758 = G__7832;
count__7759 = G__7833;
i__7760 = G__7834;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=cljs.repl.js.map
