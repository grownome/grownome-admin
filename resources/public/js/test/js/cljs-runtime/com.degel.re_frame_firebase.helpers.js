goog.provide('com.degel.re_frame_firebase.helpers');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('iron.re_utils');
goog.require('iron.utils');
goog.require('com.degel.re_frame_firebase.core');
com.degel.re_frame_firebase.helpers.js__GT_clj_tree = (function com$degel$re_frame_firebase$helpers$js__GT_clj_tree(x){
return clojure.walk.keywordize_keys(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(x.val()));
});
com.degel.re_frame_firebase.helpers.promise_wrapper = (function com$degel$re_frame_firebase$helpers$promise_wrapper(promise,on_success,on_failure){
if(cljs.core.truth_(iron.utils.validate(cljs.spec.alpha.nilable_impl(new cljs.core.Keyword("re-frame","vec-or-fn","re-frame/vec-or-fn",-1395135769),new cljs.core.Keyword("re-frame","vec-or-fn","re-frame/vec-or-fn",-1395135769),null),on_success))){
} else {
throw (new Error("Assert failed: (utils/validate (s/nilable :re-frame/vec-or-fn) on-success)"));
}

if(cljs.core.truth_(iron.utils.validate(cljs.spec.alpha.nilable_impl(new cljs.core.Keyword("re-frame","vec-or-fn","re-frame/vec-or-fn",-1395135769),new cljs.core.Keyword("re-frame","vec-or-fn","re-frame/vec-or-fn",-1395135769),null),on_failure))){
} else {
throw (new Error("Assert failed: (utils/validate (s/nilable :re-frame/vec-or-fn) on-failure)"));
}

if(cljs.core.truth_(on_success)){
promise.then(iron.re_utils.event__GT_fn(on_success));
} else {
}

if(cljs.core.truth_(on_failure)){
return promise.catch(iron.re_utils.event__GT_fn(on_failure));
} else {
return promise.catch(com.degel.re_frame_firebase.core.default_error_handler());
}
});
com.degel.re_frame_firebase.helpers.success_failure_wrapper = (function com$degel$re_frame_firebase$helpers$success_failure_wrapper(on_success,on_failure){
if(cljs.core.truth_(iron.utils.validate(cljs.spec.alpha.nilable_impl(new cljs.core.Keyword("re-frame","vec-or-fn","re-frame/vec-or-fn",-1395135769),new cljs.core.Keyword("re-frame","vec-or-fn","re-frame/vec-or-fn",-1395135769),null),on_success))){
} else {
throw (new Error("Assert failed: (utils/validate (s/nilable :re-frame/vec-or-fn) on-success)"));
}

if(cljs.core.truth_(iron.utils.validate(cljs.spec.alpha.nilable_impl(new cljs.core.Keyword("re-frame","vec-or-fn","re-frame/vec-or-fn",-1395135769),new cljs.core.Keyword("re-frame","vec-or-fn","re-frame/vec-or-fn",-1395135769),null),on_failure))){
} else {
throw (new Error("Assert failed: (utils/validate (s/nilable :re-frame/vec-or-fn) on-failure)"));
}

var _PERCENT_ = (function (){var on_success__$1 = (function (){var and__3938__auto__ = on_success;
if(cljs.core.truth_(and__3938__auto__)){
return iron.re_utils.event__GT_fn(on_success);
} else {
return and__3938__auto__;
}
})();
var on_failure__$1 = (function (){var and__3938__auto__ = on_failure;
if(cljs.core.truth_(and__3938__auto__)){
return iron.re_utils.event__GT_fn(on_failure);
} else {
return and__3938__auto__;
}
})();
return ((function (on_success__$1,on_failure__$1){
return (function (err){
if((err == null)){
if(cljs.core.truth_(on_success__$1)){
return (on_success__$1.cljs$core$IFn$_invoke$arity$0 ? on_success__$1.cljs$core$IFn$_invoke$arity$0() : on_success__$1.call(null));
} else {
return null;
}
} else {
if(cljs.core.truth_(on_failure__$1)){
return (on_failure__$1.cljs$core$IFn$_invoke$arity$1 ? on_failure__$1.cljs$core$IFn$_invoke$arity$1(err) : on_failure__$1.call(null,err));
} else {
var fexpr__9915 = com.degel.re_frame_firebase.core.default_error_handler();
return (fexpr__9915.cljs$core$IFn$_invoke$arity$1 ? fexpr__9915.cljs$core$IFn$_invoke$arity$1(err) : fexpr__9915.call(null,err));

}
}
});
;})(on_success__$1,on_failure__$1))
})();
if(cljs.core.fn_QMARK_){
} else {
throw (new Error("Assert failed: fn?"));
}

if(cljs.core.truth_(_PERCENT_)){
} else {
throw (new Error("Assert failed: %"));
}

return _PERCENT_;
});

//# sourceMappingURL=com.degel.re_frame_firebase.helpers.js.map
