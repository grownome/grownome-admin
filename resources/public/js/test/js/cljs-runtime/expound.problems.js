goog.provide('expound.problems');
goog.require('cljs.core');
goog.require('expound.paths');
goog.require('cljs.spec.alpha');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('expound.printer');
goog.require('expound.ansi');
expound.problems.blank_form = (function expound$problems$blank_form(form){
if(cljs.core.map_QMARK_(form)){
return cljs.core.zipmap(cljs.core.keys(form),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("expound.problems","irrelevant","expound.problems/irrelevant",2090226124)));
} else {
if(cljs.core.vector_QMARK_(form)){
return cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),new cljs.core.Keyword("expound.problems","irrelevant","expound.problems/irrelevant",2090226124)));
} else {
if(cljs.core.set_QMARK_(form)){
return form;
} else {
if(((cljs.core.list_QMARK_(form)) || (cljs.core.seq_QMARK_(form)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),new cljs.core.Keyword("expound.problems","irrelevant","expound.problems/irrelevant",2090226124)));
} else {
return new cljs.core.Keyword("expound.problems","irrelevant","expound.problems/irrelevant",2090226124);

}
}
}
}
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("expound.problems","summary-form","expound.problems/summary-form",514693822,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"show-valid-values?","show-valid-values?",-587258094),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"highlighted-path","highlighted-path",-511870),new cljs.core.Keyword("expound","path","expound/path",-1026376555))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"show-valid-values?","show-valid-values?",-587258094),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"highlighted-path","highlighted-path",-511870),new cljs.core.Keyword("expound","path","expound/path",-1026376555)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-valid-values?","show-valid-values?",-587258094),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"highlighted-path","highlighted-path",-511870)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.boolean_QMARK_,cljs.core.any_QMARK_,new cljs.core.Keyword("expound","path","expound/path",-1026376555)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword("expound","path","expound/path",-1026376555)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"show-valid-values?","show-valid-values?",-587258094),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"highlighted-path","highlighted-path",-511870),new cljs.core.Keyword("expound","path","expound/path",-1026376555)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
expound.problems.summary_form = (function expound$problems$summary_form(show_valid_values_QMARK_,form,in$){
while(true){
var vec__9407 = in$;
var seq__9408 = cljs.core.seq(vec__9407);
var first__9409 = cljs.core.first(seq__9408);
var seq__9408__$1 = cljs.core.next(seq__9408);
var k = first__9409;
var rst = seq__9408__$1;
var rst__$1 = (function (){var or__3949__auto__ = rst;
if(or__3949__auto__){
return or__3949__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var displayed_form = (cljs.core.truth_(show_valid_values_QMARK_)?form:expound.problems.blank_form(form));
if(cljs.core.empty_QMARK_(in$)){
return new cljs.core.Keyword("expound.problems","relevant","expound.problems/relevant",1188199036);
} else {
if(cljs.core.truth_((function (){var and__3938__auto__ = cljs.core.map_QMARK_(form);
if(and__3938__auto__){
return expound.paths.kps_QMARK_(k);
} else {
return and__3938__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(displayed_form,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(k)),(function (){var G__9410 = show_valid_values_QMARK_;
var G__9411 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(k);
var G__9412 = rst__$1;
return (expound.problems.summary_form.cljs$core$IFn$_invoke$arity$3 ? expound.problems.summary_form.cljs$core$IFn$_invoke$arity$3(G__9410,G__9411,G__9412) : expound.problems.summary_form.call(null,G__9410,G__9411,G__9412));
})(),new cljs.core.Keyword("expound.problems","irrelevant","expound.problems/irrelevant",2090226124));
} else {
if(cljs.core.truth_((function (){var and__3938__auto__ = cljs.core.map_QMARK_(form);
if(and__3938__auto__){
return expound.paths.kvps_QMARK_(k);
} else {
return and__3938__auto__;
}
})())){
var G__9426 = show_valid_values_QMARK_;
var G__9427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(form),new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(k));
var G__9428 = rst__$1;
show_valid_values_QMARK_ = G__9426;
form = G__9427;
in$ = G__9428;
continue;
} else {
if(cljs.core.associative_QMARK_(form)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(displayed_form,k,(function (){var G__9413 = show_valid_values_QMARK_;
var G__9414 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(form,k);
var G__9415 = rst__$1;
return (expound.problems.summary_form.cljs$core$IFn$_invoke$arity$3 ? expound.problems.summary_form.cljs$core$IFn$_invoke$arity$3(G__9413,G__9414,G__9415) : expound.problems.summary_form.call(null,G__9413,G__9414,G__9415));
})());
} else {
if(((cljs.core.int_QMARK_(k)) && (cljs.core.seq_QMARK_(form)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(displayed_form),k,(function (){var G__9416 = show_valid_values_QMARK_;
var G__9417 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,k);
var G__9418 = rst__$1;
return (expound.problems.summary_form.cljs$core$IFn$_invoke$arity$3 ? expound.problems.summary_form.cljs$core$IFn$_invoke$arity$3(G__9416,G__9417,G__9418) : expound.problems.summary_form.call(null,G__9416,G__9417,G__9418));
})()));
} else {
if(((cljs.core.int_QMARK_(k)) && (cljs.core.set_QMARK_(form)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(displayed_form),k,(function (){var G__9419 = show_valid_values_QMARK_;
var G__9420 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(form),k);
var G__9421 = rst__$1;
return (expound.problems.summary_form.cljs$core$IFn$_invoke$arity$3 ? expound.problems.summary_form.cljs$core$IFn$_invoke$arity$3(G__9419,G__9420,G__9421) : expound.problems.summary_form.call(null,G__9419,G__9420,G__9421));
})()));
} else {
if(((cljs.core.int_QMARK_(k)) && (cljs.core.list_QMARK_(form)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(displayed_form),k,(function (){var G__9422 = show_valid_values_QMARK_;
var G__9423 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(form),k);
var G__9424 = rst__$1;
return (expound.problems.summary_form.cljs$core$IFn$_invoke$arity$3 ? expound.problems.summary_form.cljs$core$IFn$_invoke$arity$3(G__9422,G__9423,G__9424) : expound.problems.summary_form.call(null,G__9422,G__9423,G__9424));
})()));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot find path segment in form. This can be caused by using conformers to transform values, which is not supported in Expound",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null));

}
}
}
}
}
}
}
break;
}
});
expound.problems.highlight_line = (function expound$problems$highlight_line(prefix,replacement){
var max_width = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__9430_SHARP_){
return cljs.core.count([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__9430_SHARP_)].join(''));
}),clojure.string.split_lines(replacement)));
return expound.printer.indent.cljs$core$IFn$_invoke$arity$2(cljs.core.count([cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join('')),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(max_width,"^")));
});
expound.problems.adjust_in = (function expound$problems$adjust_in(form,problem){
try{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(problem,new cljs.core.Keyword("expound","in","expound/in",-1900412298),expound.paths.in_with_kps(form,new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(problem),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(problem),cljs.core.PersistentVector.EMPTY));
}catch (e9433){var e = e9433;
if(cljs.core.truth_((function (){var or__3949__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"fn","fn",465265323,null)),new cljs.core.Keyword(null,"pred","pred",1927423397).cljs$core$IFn$_invoke$arity$1(problem));
if(or__3949__auto__){
return or__3949__auto__;
} else {
var G__9437 = cljs.core.first(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(problem));
var fexpr__9436 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ret","ret",-468222814),null], null), null);
return (fexpr__9436.cljs$core$IFn$_invoke$arity$1 ? fexpr__9436.cljs$core$IFn$_invoke$arity$1(G__9437) : fexpr__9436.call(null,G__9437));
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(problem,new cljs.core.Keyword("expound","in","expound/in",-1900412298),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(problem));
} else {
throw e;
}
}});
expound.problems.adjust_path = (function expound$problems$adjust_path(failure,problem){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(problem,new cljs.core.Keyword("expound","path","expound/path",-1026376555),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"instrument","instrument",-960698844),failure))?cljs.core.vec(cljs.core.rest(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(problem))):new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(problem)));
});
expound.problems.add_spec = (function expound$problems$add_spec(spec,problem){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(problem,new cljs.core.Keyword(null,"spec","spec",347520401),spec);
});
expound.problems.fix_via = (function expound$problems$fix_via(spec,problem){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(spec,cljs.core.first(new cljs.core.Keyword(null,"via","via",-1904457336).cljs$core$IFn$_invoke$arity$1(problem)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(problem,new cljs.core.Keyword("expound","via","expound/via",-595987777),new cljs.core.Keyword(null,"via","via",-1904457336).cljs$core$IFn$_invoke$arity$1(problem));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(problem,new cljs.core.Keyword("expound","via","expound/via",-595987777),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec], null),new cljs.core.Keyword(null,"via","via",-1904457336).cljs$core$IFn$_invoke$arity$1(problem)));
}
});
expound.problems.missing_spec_QMARK_ = (function expound$problems$missing_spec_QMARK_(_failure,problem){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("no method",new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(problem));
});
expound.problems.not_in_set_QMARK_ = (function expound$problems$not_in_set_QMARK_(_failure,problem){
return cljs.core.set_QMARK_(new cljs.core.Keyword(null,"pred","pred",1927423397).cljs$core$IFn$_invoke$arity$1(problem));
});
expound.problems.fspec_exception_failure_QMARK_ = (function expound$problems$fspec_exception_failure_QMARK_(failure,problem){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"instrument","instrument",-960698844),failure)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"check-failed","check-failed",-1316157547),failure)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"fn","fn",465265323,null)),new cljs.core.Keyword(null,"pred","pred",1927423397).cljs$core$IFn$_invoke$arity$1(problem))));
});
expound.problems.fspec_ret_failure_QMARK_ = (function expound$problems$fspec_ret_failure_QMARK_(failure,problem){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"instrument","instrument",-960698844),failure)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"check-failed","check-failed",-1316157547),failure)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.first(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(problem)))));
});
expound.problems.fspec_fn_failure_QMARK_ = (function expound$problems$fspec_fn_failure_QMARK_(failure,problem){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"instrument","instrument",-960698844),failure)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"check-failed","check-failed",-1316157547),failure)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.first(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(problem)))));
});
expound.problems.check_ret_failure_QMARK_ = (function expound$problems$check_ret_failure_QMARK_(failure,problem){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"check-failed","check-failed",-1316157547),failure)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.first(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(problem)))));
});
expound.problems.check_fn_failure_QMARK_ = (function expound$problems$check_fn_failure_QMARK_(failure,problem){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"check-failed","check-failed",-1316157547),failure)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.first(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(problem)))));
});
expound.problems.missing_key_QMARK_ = (function expound$problems$missing_key_QMARK_(_failure,problem){
var pred = new cljs.core.Keyword(null,"pred","pred",1927423397).cljs$core$IFn$_invoke$arity$1(problem);
var and__3938__auto__ = cljs.core.seq_QMARK_(pred);
if(and__3938__auto__){
var and__3938__auto____$1 = ((2) < cljs.core.count(pred));
if(and__3938__auto____$1){
return cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("expound.spec","contains-key-pred","expound.spec/contains-key-pred",-989075236),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(pred,(2)));
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
});
expound.problems.insufficient_input_QMARK_ = (function expound$problems$insufficient_input_QMARK_(_failure,problem){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Insufficient input",null], null), null),new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(problem));
});
expound.problems.extra_input_QMARK_ = (function expound$problems$extra_input_QMARK_(_failure,problem){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Extra input",null], null), null),new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(problem));
});
expound.problems.ptype = (function expound$problems$ptype(failure,problem){
if(cljs.core.truth_(new cljs.core.Keyword("expound.spec.problem","type","expound.spec.problem/type",-862044659).cljs$core$IFn$_invoke$arity$1(problem))){
return new cljs.core.Keyword("expound.spec.problem","type","expound.spec.problem/type",-862044659).cljs$core$IFn$_invoke$arity$1(problem);
} else {
if(cljs.core.truth_(expound.problems.insufficient_input_QMARK_(failure,problem))){
return new cljs.core.Keyword("expound.problem","insufficient-input","expound.problem/insufficient-input",1437497436);
} else {
if(cljs.core.truth_(expound.problems.extra_input_QMARK_(failure,problem))){
return new cljs.core.Keyword("expound.problem","extra-input","expound.problem/extra-input",2043170217);
} else {
if(cljs.core.truth_(expound.problems.not_in_set_QMARK_(failure,problem))){
return new cljs.core.Keyword("expound.problem","not-in-set","expound.problem/not-in-set",14506077);
} else {
if(cljs.core.truth_(expound.problems.missing_key_QMARK_(failure,problem))){
return new cljs.core.Keyword("expound.problem","missing-key","expound.problem/missing-key",-750683408);
} else {
if(cljs.core.truth_(expound.problems.missing_spec_QMARK_(failure,problem))){
return new cljs.core.Keyword("expound.problem","missing-spec","expound.problem/missing-spec",-1439599438);
} else {
if(cljs.core.truth_(expound.problems.fspec_exception_failure_QMARK_(failure,problem))){
return new cljs.core.Keyword("expound.problem","fspec-exception-failure","expound.problem/fspec-exception-failure",-398312942);
} else {
if(cljs.core.truth_(expound.problems.fspec_ret_failure_QMARK_(failure,problem))){
return new cljs.core.Keyword("expound.problem","fspec-ret-failure","expound.problem/fspec-ret-failure",1192937934);
} else {
if(cljs.core.truth_(expound.problems.fspec_fn_failure_QMARK_(failure,problem))){
return new cljs.core.Keyword("expound.problem","fspec-fn-failure","expound.problem/fspec-fn-failure",-814692716);
} else {
if(cljs.core.truth_(expound.problems.check_ret_failure_QMARK_(failure,problem))){
return new cljs.core.Keyword("expound.problem","check-ret-failure","expound.problem/check-ret-failure",1795987483);
} else {
if(cljs.core.truth_(expound.problems.check_fn_failure_QMARK_(failure,problem))){
return new cljs.core.Keyword("expound.problem","check-fn-failure","expound.problem/check-fn-failure",443478179);
} else {
return new cljs.core.Keyword("expound.problem","unknown","expound.problem/unknown",1364832957);

}
}
}
}
}
}
}
}
}
}
}
});
/**
 * Similar to get-in, but works with paths that reference map keys
 */
expound.problems.value_in = (function expound$problems$value_in(form,in$){
while(true){
var vec__9450 = in$;
var seq__9451 = cljs.core.seq(vec__9450);
var first__9452 = cljs.core.first(seq__9451);
var seq__9451__$1 = cljs.core.next(seq__9451);
var k = first__9452;
var rst = seq__9451__$1;
if(cljs.core.empty_QMARK_(in$)){
return form;
} else {
if(cljs.core.truth_((function (){var and__3938__auto__ = cljs.core.map_QMARK_(form);
if(and__3938__auto__){
return expound.paths.kps_QMARK_(k);
} else {
return and__3938__auto__;
}
})())){
return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(k);
} else {
if(cljs.core.truth_((function (){var and__3938__auto__ = cljs.core.map_QMARK_(form);
if(and__3938__auto__){
return expound.paths.kvps_QMARK_(k);
} else {
return and__3938__auto__;
}
})())){
var G__9456 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(form),new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(k));
var G__9457 = rst;
form = G__9456;
in$ = G__9457;
continue;
} else {
if(cljs.core.associative_QMARK_(form)){
var G__9458 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(form,k);
var G__9459 = rst;
form = G__9458;
in$ = G__9459;
continue;
} else {
if(((cljs.core.int_QMARK_(k)) && (cljs.core.seqable_QMARK_(form)))){
var G__9460 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(form),k);
var G__9461 = rst;
form = G__9460;
in$ = G__9461;
continue;
} else {
return null;
}
}
}
}
}
break;
}
});
expound.problems.escape_replacement = (function expound$problems$escape_replacement(pattern,s){
return clojure.string.replace(s,/\$/,"$$$$");
});
/**
 * Given a problem, returns a pretty printed
 * string that highlights the problem value
 */
expound.problems.highlighted_value = (function expound$problems$highlighted_value(opts,problem){
var map__9466 = problem;
var map__9466__$1 = ((((!((map__9466 == null)))?(((((map__9466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9466.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9466):map__9466);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9466__$1,new cljs.core.Keyword("expound","form","expound/form",-264680632));
var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9466__$1,new cljs.core.Keyword("expound","in","expound/in",-1900412298));
var map__9467 = opts;
var map__9467__$1 = ((((!((map__9467 == null)))?(((((map__9467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9467.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9467):map__9467);
var show_valid_values_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9467__$1,new cljs.core.Keyword(null,"show-valid-values?","show-valid-values?",-587258094),false);
var value_at_path = expound.problems.value_in(form,in$);
var relevant = ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("expound.problems","relevant","expound.problems/relevant",1188199036)),"|(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("expound.problems","kv-relevant","expound.problems/kv-relevant",229013575)),"\\s+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("expound.problems","kv-relevant","expound.problems/kv-relevant",229013575)),"))"].join('');
var regex = cljs.core.re_pattern(["(.*)",cljs.core.str.cljs$core$IFn$_invoke$arity$1(relevant),".*"].join(''));
var s = (function (){var _STAR_print_namespace_maps_STAR_9473 = cljs.core._STAR_print_namespace_maps_STAR_;
cljs.core._STAR_print_namespace_maps_STAR_ = false;

try{return expound.printer.pprint_str(clojure.walk.prewalk_replace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("expound.problems","irrelevant","expound.problems/irrelevant",2090226124),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),expound.problems.summary_form(show_valid_values_QMARK_,form,in$)));
}finally {cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR_9473;
}})();
var vec__9468 = cljs.core.re_find(regex,s);
var seq__9469 = cljs.core.seq(vec__9468);
var first__9470 = cljs.core.first(seq__9469);
var seq__9469__$1 = cljs.core.next(seq__9469);
var line = first__9470;
var first__9470__$1 = cljs.core.first(seq__9469__$1);
var seq__9469__$2 = cljs.core.next(seq__9469__$1);
var prefix = first__9470__$1;
var _more = seq__9469__$2;
var highlighted_line = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(line,cljs.core.re_pattern(relevant),expound.problems.escape_replacement(cljs.core.re_pattern(relevant),expound.printer.indent.cljs$core$IFn$_invoke$arity$3((0),cljs.core.count(prefix),expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic(expound.printer.pprint_str(value_at_path),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"bad-value","bad-value",-139100659)], 0)))))),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic(expound.problems.highlight_line(prefix,expound.printer.pprint_str(value_at_path)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pointer","pointer",85071187)], 0)))].join('');
return expound.printer.no_trailing_whitespace(clojure.string.replace(s,line,expound.problems.escape_replacement(line,highlighted_line)));
});
expound.problems.annotate = (function expound$problems$annotate(explain_data){
var map__9483 = explain_data;
var map__9483__$1 = ((((!((map__9483 == null)))?(((((map__9483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9483.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9483):map__9483);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9483__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9483__$1,new cljs.core.Keyword("cljs.spec.alpha","value","cljs.spec.alpha/value",1974786274));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9483__$1,new cljs.core.Keyword("cljs.spec.alpha","args","cljs.spec.alpha/args",1870769783));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9483__$1,new cljs.core.Keyword("cljs.spec.alpha","ret","cljs.spec.alpha/ret",1165997503));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9483__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9483__$1,new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9483__$1,new cljs.core.Keyword("cljs.spec.alpha","spec","cljs.spec.alpha/spec",1947137578));
var caller = (function (){var or__3949__auto__ = new cljs.core.Keyword("clojure.spec.test.alpha","caller","clojure.spec.test.alpha/caller",-706822212).cljs$core$IFn$_invoke$arity$1(explain_data);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword("orchestra.spec.test","caller","orchestra.spec.test/caller",-686413347).cljs$core$IFn$_invoke$arity$1(explain_data);
}
})();
var form = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"instrument","instrument",-960698844),failure))?value:((cljs.core.contains_QMARK_(explain_data,new cljs.core.Keyword("cljs.spec.alpha","ret","cljs.spec.alpha/ret",1165997503)))?ret:((cljs.core.contains_QMARK_(explain_data,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443)))?fn:((cljs.core.contains_QMARK_(explain_data,new cljs.core.Keyword("cljs.spec.alpha","args","cljs.spec.alpha/args",1870769783)))?args:null))));
var problems_SINGLEQUOTE_ = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(expound.problems.adjust_in,form),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(expound.problems.adjust_path,failure),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(expound.problems.add_spec,spec),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.partial.cljs$core$IFn$_invoke$arity$2(expound.problems.fix_via,spec),((function (map__9483,map__9483__$1,problems,value,args,ret,fn,failure,spec,caller,form){
return (function (p1__9481_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__9481_SHARP_,new cljs.core.Keyword("expound","form","expound/form",-264680632),form);
});})(map__9483,map__9483__$1,problems,value,args,ret,fn,failure,spec,caller,form))
,((function (map__9483,map__9483__$1,problems,value,args,ret,fn,failure,spec,caller,form){
return (function (p1__9482_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__9482_SHARP_,new cljs.core.Keyword("expound.spec.problem","type","expound.spec.problem/type",-862044659),expound.problems.ptype(failure,p1__9482_SHARP_));
});})(map__9483,map__9483__$1,problems,value,args,ret,fn,failure,spec,caller,form))
], 0)),problems);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(explain_data,new cljs.core.Keyword("expound","form","expound/form",-264680632),form,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("expound","caller","expound/caller",-503638870),caller,new cljs.core.Keyword("expound","problems","expound/problems",1257773984),problems_SINGLEQUOTE_], 0));
});
expound.problems.type = expound.problems.ptype;

//# sourceMappingURL=expound.problems.js.map
