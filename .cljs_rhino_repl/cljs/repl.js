// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__13399){
var map__13400 = p__13399;
var map__13400__$1 = ((((!((map__13400 == null)))?(((((map__13400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13400.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13400):map__13400);
var m = map__13400__$1;
var n = cljs.core.get.call(null,map__13400__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__13400__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__13402_13424 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__13403_13425 = null;
var count__13404_13426 = (0);
var i__13405_13427 = (0);
while(true){
if((i__13405_13427 < count__13404_13426)){
var f_13428 = cljs.core._nth.call(null,chunk__13403_13425,i__13405_13427);
cljs.core.println.call(null,"  ",f_13428);


var G__13429 = seq__13402_13424;
var G__13430 = chunk__13403_13425;
var G__13431 = count__13404_13426;
var G__13432 = (i__13405_13427 + (1));
seq__13402_13424 = G__13429;
chunk__13403_13425 = G__13430;
count__13404_13426 = G__13431;
i__13405_13427 = G__13432;
continue;
} else {
var temp__4657__auto___13433 = cljs.core.seq.call(null,seq__13402_13424);
if(temp__4657__auto___13433){
var seq__13402_13434__$1 = temp__4657__auto___13433;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13402_13434__$1)){
var c__4319__auto___13435 = cljs.core.chunk_first.call(null,seq__13402_13434__$1);
var G__13436 = cljs.core.chunk_rest.call(null,seq__13402_13434__$1);
var G__13437 = c__4319__auto___13435;
var G__13438 = cljs.core.count.call(null,c__4319__auto___13435);
var G__13439 = (0);
seq__13402_13424 = G__13436;
chunk__13403_13425 = G__13437;
count__13404_13426 = G__13438;
i__13405_13427 = G__13439;
continue;
} else {
var f_13440 = cljs.core.first.call(null,seq__13402_13434__$1);
cljs.core.println.call(null,"  ",f_13440);


var G__13441 = cljs.core.next.call(null,seq__13402_13434__$1);
var G__13442 = null;
var G__13443 = (0);
var G__13444 = (0);
seq__13402_13424 = G__13441;
chunk__13403_13425 = G__13442;
count__13404_13426 = G__13443;
i__13405_13427 = G__13444;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_13445 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_13445);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_13445)))?cljs.core.second.call(null,arglists_13445):arglists_13445));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__13406_13446 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__13407_13447 = null;
var count__13408_13448 = (0);
var i__13409_13449 = (0);
while(true){
if((i__13409_13449 < count__13408_13448)){
var vec__13410_13450 = cljs.core._nth.call(null,chunk__13407_13447,i__13409_13449);
var name_13451 = cljs.core.nth.call(null,vec__13410_13450,(0),null);
var map__13413_13452 = cljs.core.nth.call(null,vec__13410_13450,(1),null);
var map__13413_13453__$1 = ((((!((map__13413_13452 == null)))?(((((map__13413_13452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13413_13452.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13413_13452):map__13413_13452);
var doc_13454 = cljs.core.get.call(null,map__13413_13453__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_13455 = cljs.core.get.call(null,map__13413_13453__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_13451);

cljs.core.println.call(null," ",arglists_13455);

if(cljs.core.truth_(doc_13454)){
cljs.core.println.call(null," ",doc_13454);
} else {
}


var G__13456 = seq__13406_13446;
var G__13457 = chunk__13407_13447;
var G__13458 = count__13408_13448;
var G__13459 = (i__13409_13449 + (1));
seq__13406_13446 = G__13456;
chunk__13407_13447 = G__13457;
count__13408_13448 = G__13458;
i__13409_13449 = G__13459;
continue;
} else {
var temp__4657__auto___13460 = cljs.core.seq.call(null,seq__13406_13446);
if(temp__4657__auto___13460){
var seq__13406_13461__$1 = temp__4657__auto___13460;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13406_13461__$1)){
var c__4319__auto___13462 = cljs.core.chunk_first.call(null,seq__13406_13461__$1);
var G__13463 = cljs.core.chunk_rest.call(null,seq__13406_13461__$1);
var G__13464 = c__4319__auto___13462;
var G__13465 = cljs.core.count.call(null,c__4319__auto___13462);
var G__13466 = (0);
seq__13406_13446 = G__13463;
chunk__13407_13447 = G__13464;
count__13408_13448 = G__13465;
i__13409_13449 = G__13466;
continue;
} else {
var vec__13415_13467 = cljs.core.first.call(null,seq__13406_13461__$1);
var name_13468 = cljs.core.nth.call(null,vec__13415_13467,(0),null);
var map__13418_13469 = cljs.core.nth.call(null,vec__13415_13467,(1),null);
var map__13418_13470__$1 = ((((!((map__13418_13469 == null)))?(((((map__13418_13469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13418_13469.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13418_13469):map__13418_13469);
var doc_13471 = cljs.core.get.call(null,map__13418_13470__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_13472 = cljs.core.get.call(null,map__13418_13470__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_13468);

cljs.core.println.call(null," ",arglists_13472);

if(cljs.core.truth_(doc_13471)){
cljs.core.println.call(null," ",doc_13471);
} else {
}


var G__13473 = cljs.core.next.call(null,seq__13406_13461__$1);
var G__13474 = null;
var G__13475 = (0);
var G__13476 = (0);
seq__13406_13446 = G__13473;
chunk__13407_13447 = G__13474;
count__13408_13448 = G__13475;
i__13409_13449 = G__13476;
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
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__13420 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__13421 = null;
var count__13422 = (0);
var i__13423 = (0);
while(true){
if((i__13423 < count__13422)){
var role = cljs.core._nth.call(null,chunk__13421,i__13423);
var temp__4657__auto___13477__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___13477__$1)){
var spec_13478 = temp__4657__auto___13477__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_13478));
} else {
}


var G__13479 = seq__13420;
var G__13480 = chunk__13421;
var G__13481 = count__13422;
var G__13482 = (i__13423 + (1));
seq__13420 = G__13479;
chunk__13421 = G__13480;
count__13422 = G__13481;
i__13423 = G__13482;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__13420);
if(temp__4657__auto____$1){
var seq__13420__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13420__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__13420__$1);
var G__13483 = cljs.core.chunk_rest.call(null,seq__13420__$1);
var G__13484 = c__4319__auto__;
var G__13485 = cljs.core.count.call(null,c__4319__auto__);
var G__13486 = (0);
seq__13420 = G__13483;
chunk__13421 = G__13484;
count__13422 = G__13485;
i__13423 = G__13486;
continue;
} else {
var role = cljs.core.first.call(null,seq__13420__$1);
var temp__4657__auto___13487__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___13487__$2)){
var spec_13488 = temp__4657__auto___13487__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_13488));
} else {
}


var G__13489 = cljs.core.next.call(null,seq__13420__$1);
var G__13490 = null;
var G__13491 = (0);
var G__13492 = (0);
seq__13420 = G__13489;
chunk__13421 = G__13490;
count__13422 = G__13491;
i__13423 = G__13492;
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

//# sourceMappingURL=repl.js.map
