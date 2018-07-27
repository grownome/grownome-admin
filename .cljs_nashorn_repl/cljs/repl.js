// Compiled by ClojureScript 1.10.238 {:target :nashorn}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__13092){
var map__13093 = p__13092;
var map__13093__$1 = ((((!((map__13093 == null)))?(((((map__13093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13093):map__13093);
var m = map__13093__$1;
var n = cljs.core.get.call(null,map__13093__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__13093__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__13095_13117 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__13096_13118 = null;
var count__13097_13119 = (0);
var i__13098_13120 = (0);
while(true){
if((i__13098_13120 < count__13097_13119)){
var f_13121 = cljs.core._nth.call(null,chunk__13096_13118,i__13098_13120);
cljs.core.println.call(null,"  ",f_13121);


var G__13122 = seq__13095_13117;
var G__13123 = chunk__13096_13118;
var G__13124 = count__13097_13119;
var G__13125 = (i__13098_13120 + (1));
seq__13095_13117 = G__13122;
chunk__13096_13118 = G__13123;
count__13097_13119 = G__13124;
i__13098_13120 = G__13125;
continue;
} else {
var temp__4657__auto___13126 = cljs.core.seq.call(null,seq__13095_13117);
if(temp__4657__auto___13126){
var seq__13095_13127__$1 = temp__4657__auto___13126;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13095_13127__$1)){
var c__4319__auto___13128 = cljs.core.chunk_first.call(null,seq__13095_13127__$1);
var G__13129 = cljs.core.chunk_rest.call(null,seq__13095_13127__$1);
var G__13130 = c__4319__auto___13128;
var G__13131 = cljs.core.count.call(null,c__4319__auto___13128);
var G__13132 = (0);
seq__13095_13117 = G__13129;
chunk__13096_13118 = G__13130;
count__13097_13119 = G__13131;
i__13098_13120 = G__13132;
continue;
} else {
var f_13133 = cljs.core.first.call(null,seq__13095_13127__$1);
cljs.core.println.call(null,"  ",f_13133);


var G__13134 = cljs.core.next.call(null,seq__13095_13127__$1);
var G__13135 = null;
var G__13136 = (0);
var G__13137 = (0);
seq__13095_13117 = G__13134;
chunk__13096_13118 = G__13135;
count__13097_13119 = G__13136;
i__13098_13120 = G__13137;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_13138 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_13138);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_13138)))?cljs.core.second.call(null,arglists_13138):arglists_13138));
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
var seq__13099_13139 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__13100_13140 = null;
var count__13101_13141 = (0);
var i__13102_13142 = (0);
while(true){
if((i__13102_13142 < count__13101_13141)){
var vec__13103_13143 = cljs.core._nth.call(null,chunk__13100_13140,i__13102_13142);
var name_13144 = cljs.core.nth.call(null,vec__13103_13143,(0),null);
var map__13106_13145 = cljs.core.nth.call(null,vec__13103_13143,(1),null);
var map__13106_13146__$1 = ((((!((map__13106_13145 == null)))?(((((map__13106_13145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13106_13145.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13106_13145):map__13106_13145);
var doc_13147 = cljs.core.get.call(null,map__13106_13146__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_13148 = cljs.core.get.call(null,map__13106_13146__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_13144);

cljs.core.println.call(null," ",arglists_13148);

if(cljs.core.truth_(doc_13147)){
cljs.core.println.call(null," ",doc_13147);
} else {
}


var G__13149 = seq__13099_13139;
var G__13150 = chunk__13100_13140;
var G__13151 = count__13101_13141;
var G__13152 = (i__13102_13142 + (1));
seq__13099_13139 = G__13149;
chunk__13100_13140 = G__13150;
count__13101_13141 = G__13151;
i__13102_13142 = G__13152;
continue;
} else {
var temp__4657__auto___13153 = cljs.core.seq.call(null,seq__13099_13139);
if(temp__4657__auto___13153){
var seq__13099_13154__$1 = temp__4657__auto___13153;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13099_13154__$1)){
var c__4319__auto___13155 = cljs.core.chunk_first.call(null,seq__13099_13154__$1);
var G__13156 = cljs.core.chunk_rest.call(null,seq__13099_13154__$1);
var G__13157 = c__4319__auto___13155;
var G__13158 = cljs.core.count.call(null,c__4319__auto___13155);
var G__13159 = (0);
seq__13099_13139 = G__13156;
chunk__13100_13140 = G__13157;
count__13101_13141 = G__13158;
i__13102_13142 = G__13159;
continue;
} else {
var vec__13108_13160 = cljs.core.first.call(null,seq__13099_13154__$1);
var name_13161 = cljs.core.nth.call(null,vec__13108_13160,(0),null);
var map__13111_13162 = cljs.core.nth.call(null,vec__13108_13160,(1),null);
var map__13111_13163__$1 = ((((!((map__13111_13162 == null)))?(((((map__13111_13162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13111_13162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13111_13162):map__13111_13162);
var doc_13164 = cljs.core.get.call(null,map__13111_13163__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_13165 = cljs.core.get.call(null,map__13111_13163__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_13161);

cljs.core.println.call(null," ",arglists_13165);

if(cljs.core.truth_(doc_13164)){
cljs.core.println.call(null," ",doc_13164);
} else {
}


var G__13166 = cljs.core.next.call(null,seq__13099_13154__$1);
var G__13167 = null;
var G__13168 = (0);
var G__13169 = (0);
seq__13099_13139 = G__13166;
chunk__13100_13140 = G__13167;
count__13101_13141 = G__13168;
i__13102_13142 = G__13169;
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

var seq__13113 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__13114 = null;
var count__13115 = (0);
var i__13116 = (0);
while(true){
if((i__13116 < count__13115)){
var role = cljs.core._nth.call(null,chunk__13114,i__13116);
var temp__4657__auto___13170__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___13170__$1)){
var spec_13171 = temp__4657__auto___13170__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_13171));
} else {
}


var G__13172 = seq__13113;
var G__13173 = chunk__13114;
var G__13174 = count__13115;
var G__13175 = (i__13116 + (1));
seq__13113 = G__13172;
chunk__13114 = G__13173;
count__13115 = G__13174;
i__13116 = G__13175;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__13113);
if(temp__4657__auto____$1){
var seq__13113__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13113__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__13113__$1);
var G__13176 = cljs.core.chunk_rest.call(null,seq__13113__$1);
var G__13177 = c__4319__auto__;
var G__13178 = cljs.core.count.call(null,c__4319__auto__);
var G__13179 = (0);
seq__13113 = G__13176;
chunk__13114 = G__13177;
count__13115 = G__13178;
i__13116 = G__13179;
continue;
} else {
var role = cljs.core.first.call(null,seq__13113__$1);
var temp__4657__auto___13180__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___13180__$2)){
var spec_13181 = temp__4657__auto___13180__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_13181));
} else {
}


var G__13182 = cljs.core.next.call(null,seq__13113__$1);
var G__13183 = null;
var G__13184 = (0);
var G__13185 = (0);
seq__13113 = G__13182;
chunk__13114 = G__13183;
count__13115 = G__13184;
i__13116 = G__13185;
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
