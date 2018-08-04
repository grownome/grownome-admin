goog.provide('re_com.typeahead');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_com.misc');
goog.require('re_com.util');
goog.require('re_com.popover');
goog.require('re_com.box');
goog.require('re_com.validate');
goog.require('reagent.core');
goog.require('goog.events.KeyCodes');

/**
 * Return an initial value for the typeahead state, given `args`.
 */
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__8589){
var map__8590 = p__8589;
var map__8590__$1 = ((((!((map__8590 == null)))?(((((map__8590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8590.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8590):map__8590);
var args = map__8590__$1;
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8590__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8590__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8590__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8590__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8590__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8590__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8590__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value(model);
var G__8592 = (function (){var c_input = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__3949__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,(re_com.typeahead.debounce.cljs$core$IFn$_invoke$arity$2 ? re_com.typeahead.debounce.cljs$core$IFn$_invoke$arity$2(c_input,debounce_delay) : re_com.typeahead.debounce.call(null,c_input,debounce_delay)),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value(model),re_com.util.deref_or_value(model)]);
})();
if(cljs.core.truth_(external_model_value)){
return (re_com.typeahead.display_suggestion.cljs$core$IFn$_invoke$arity$2 ? re_com.typeahead.display_suggestion.cljs$core$IFn$_invoke$arity$2(G__8592,external_model_value) : re_com.typeahead.display_suggestion.call(null,G__8592,external_model_value));
} else {
return G__8592;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__8609,event){
var map__8610 = p__8609;
var map__8610__$1 = ((((!((map__8610 == null)))?(((((map__8610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8610.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8610):map__8610);
var state = map__8610__$1;
var change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8610__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8610__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value(change_on_blur_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value(rigid_QMARK_);
var G__8612 = event;
var G__8612__$1 = (((G__8612 instanceof cljs.core.Keyword))?G__8612.fqn:null);
switch (G__8612__$1) {
case "input-text-blurred":
var and__3938__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not(rigid_QMARK___$1);
} else {
return and__3938__auto__;
}

break;
case "suggestion-activated":
return cljs.core.not(change_on_blur_QMARK___$1);

break;
case "input-text-changed":
return cljs.core.not((function (){var or__3949__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return rigid_QMARK___$1;
}
})());

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8612__$1)].join('')));

}
});
/**
 * Should `event` cause the `input-text` value to be used to show the active suggestion?
 */
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__8630,event){
var map__8631 = p__8630;
var map__8631__$1 = ((((!((map__8631 == null)))?(((((map__8631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8631.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8631):map__8631);
var state = map__8631__$1;
var change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8631__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value(change_on_blur_QMARK_);
var G__8635 = event;
var G__8635__$1 = (((G__8635 instanceof cljs.core.Keyword))?G__8635.fqn:null);
switch (G__8635__$1) {
case "suggestion-activated":
return cljs.core.not(change_on_blur_QMARK___$1);

break;
default:
return false;

}
});
/**
 * Change the `typeahead` `model` value to `new-value`
 */
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__8646,new_value){
var map__8647 = p__8646;
var map__8647__$1 = ((((!((map__8647 == null)))?(((((map__8647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8647):map__8647);
var state = map__8647__$1;
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8647__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(new_value) : on_change.call(null,new_value));
} else {
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__8671,suggestion){
var map__8673 = p__8671;
var map__8673__$1 = ((((!((map__8673 == null)))?(((((map__8673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8673.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8673):map__8673);
var state = map__8673__$1;
var suggestion_to_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8673__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = (suggestion_to_string.cljs$core$IFn$_invoke$arity$1 ? suggestion_to_string.cljs$core$IFn$_invoke$arity$1(suggestion) : suggestion_to_string.call(null,suggestion));
var G__8678 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__8678,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true], 0));
} else {
return G__8678;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728)], 0));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__8682,index){
var map__8683 = p__8682;
var map__8683__$1 = ((((!((map__8683 == null)))?(((((map__8683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8683):map__8683);
var state = map__8683__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8683__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(suggestions,index);
var G__8685 = state;
var G__8685__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__8685,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__8685__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_(state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model(G__8685__$1,suggestion):G__8685__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_(state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion(G__8685__$2,suggestion);
} else {
return G__8685__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__8692,index){
var map__8693 = p__8692;
var map__8693__$1 = ((((!((map__8693 == null)))?(((((map__8693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8693.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8693):map__8693);
var state = map__8693__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8693__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(suggestions,index);
return re_com.typeahead.clear_suggestions(re_com.typeahead.display_suggestion(re_com.typeahead.update_model(re_com.typeahead.activate_suggestion_by_index(state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__8698){
var map__8699 = p__8698;
var map__8699__$1 = ((((!((map__8699 == null)))?(((((map__8699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8699):map__8699);
var state = map__8699__$1;
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8699__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__8707 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index(G__8707,suggestion_active_index);
} else {
return G__8707;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod((count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__8714){
var map__8715 = p__8714;
var map__8715__$1 = ((((!((map__8715 == null)))?(((((map__8715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8715.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8715):map__8715);
var state = map__8715__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8715__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8715__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__8717 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index(G__8717,re_com.typeahead.wrap(((function (){var or__3949__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count(suggestions)));
} else {
return G__8717;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__8727){
var map__8729 = p__8727;
var map__8729__$1 = ((((!((map__8729 == null)))?(((((map__8729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8729):map__8729);
var state = map__8729__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8729__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8729__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__8732 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index(G__8732,re_com.typeahead.wrap(((function (){var or__3949__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count(suggestions)));
} else {
return G__8732;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__8740 = state;
var G__8740__$1 = re_com.typeahead.clear_suggestions(G__8740)
;
var G__8740__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__8740__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false], 0))
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_(state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model(G__8740__$2,null);
} else {
return G__8740__$2;
}
});
/**
 * Update state when new suggestions are available
 */
re_com.typeahead.got_suggestions = (function re_com$typeahead$got_suggestions(state,suggestions){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),suggestions,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),null], 0));
});
/**
 * Update state when the `input-text` is about to lose focus.
 */
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__8745){
var map__8746 = p__8745;
var map__8746__$1 = ((((!((map__8746 == null)))?(((((map__8746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8746):map__8746);
var state = map__8746__$1;
var input_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8746__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8746__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
var G__8748 = state;
if(cljs.core.truth_((function (){var and__3938__auto__ = cljs.core.not(displaying_suggestion_QMARK_);
if(and__3938__auto__){
return re_com.typeahead.event_updates_model_QMARK_(state,new cljs.core.Keyword(null,"input-text-blurred","input-text-blurred",-501892307));
} else {
return and__3938__auto__;
}
})())){
return re_com.typeahead.update_model(G__8748,input_text);
} else {
return G__8748;
}
});
/**
 * Update `state` given a new `data-source`. Resets the typeahead since any existing suggestions
 *   came from the old `data-source`.
 */
re_com.typeahead.change_data_source = (function re_com$typeahead$change_data_source(state,data_source){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(re_com.typeahead.reset_typeahead(state),new cljs.core.Keyword(null,"data-source","data-source",-658934676),data_source);
});
/**
 * Update state when the external model value has changed.
 */
re_com.typeahead.external_model_changed = (function re_com$typeahead$external_model_changed(state,new_value){
return re_com.typeahead.clear_suggestions(re_com.typeahead.display_suggestion(re_com.typeahead.update_model(state,new_value),new_value));
});
/**
 * Call the `data-source` fn with `text`, and then call `got-suggestions` with the result
 *   (asynchronously, if `data-source` does not return a truthy value).
 */
re_com.typeahead.search_data_source_BANG_ = (function re_com$typeahead$search_data_source_BANG_(data_source,state_atom,text){
var temp__5455__auto__ = (function (){var G__8760 = text;
var G__8761 = ((function (G__8760){
return (function (p1__8756_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.got_suggestions,p1__8756_SHARP_);
});})(G__8760))
;
return (data_source.cljs$core$IFn$_invoke$arity$2 ? data_source.cljs$core$IFn$_invoke$arity$2(G__8760,G__8761) : data_source.call(null,G__8760,G__8761));
})();
if(cljs.core.truth_(temp__5455__auto__)){
var return_value = temp__5455__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.got_suggestions,return_value);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),true);
}
});
/**
 * For every value arriving on the `c-search` channel, call `search-data-source!`.
 */
re_com.typeahead.search_data_source_loop_BANG_ = (function re_com$typeahead$search_data_source_loop_BANG_(state_atom,c_search){
var c__3112__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__3112__auto__){
return (function (){
var f__3113__auto__ = (function (){var switch__3023__auto__ = ((function (c__3112__auto__){
return (function (state_8830){
var state_val_8831 = (state_8830[(1)]);
if((state_val_8831 === (1))){
var state_8830__$1 = state_8830;
var statearr_8838_8861 = state_8830__$1;
(statearr_8838_8861[(2)] = null);

(statearr_8838_8861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8831 === (2))){
var state_8830__$1 = state_8830;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8830__$1,(4),c_search);
} else {
if((state_val_8831 === (3))){
var inst_8825 = (state_8830[(2)]);
var state_8830__$1 = state_8830;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8830__$1,inst_8825);
} else {
if((state_val_8831 === (4))){
var inst_8798 = (state_8830[(7)]);
var inst_8798__$1 = (state_8830[(2)]);
var inst_8800 = cljs.core.deref(state_atom);
var inst_8802 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_8800);
var inst_8807 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",inst_8798__$1);
var state_8830__$1 = (function (){var statearr_8842 = state_8830;
(statearr_8842[(7)] = inst_8798__$1);

(statearr_8842[(8)] = inst_8802);

return statearr_8842;
})();
if(inst_8807){
var statearr_8843_8873 = state_8830__$1;
(statearr_8843_8873[(1)] = (5));

} else {
var statearr_8844_8874 = state_8830__$1;
(statearr_8844_8874[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8831 === (5))){
var inst_8809 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.reset_typeahead);
var state_8830__$1 = state_8830;
var statearr_8845_8876 = state_8830__$1;
(statearr_8845_8876[(2)] = inst_8809);

(statearr_8845_8876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8831 === (6))){
var inst_8798 = (state_8830[(7)]);
var inst_8802 = (state_8830[(8)]);
var inst_8811 = re_com.typeahead.search_data_source_BANG_(inst_8802,state_atom,inst_8798);
var state_8830__$1 = state_8830;
var statearr_8846_8881 = state_8830__$1;
(statearr_8846_8881[(2)] = inst_8811);

(statearr_8846_8881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8831 === (7))){
var inst_8814 = (state_8830[(2)]);
var state_8830__$1 = (function (){var statearr_8847 = state_8830;
(statearr_8847[(9)] = inst_8814);

return statearr_8847;
})();
var statearr_8849_8882 = state_8830__$1;
(statearr_8849_8882[(2)] = null);

(statearr_8849_8882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__3112__auto__))
;
return ((function (switch__3023__auto__,c__3112__auto__){
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__3024__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__3024__auto____0 = (function (){
var statearr_8854 = [null,null,null,null,null,null,null,null,null,null];
(statearr_8854[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__3024__auto__);

(statearr_8854[(1)] = (1));

return statearr_8854;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__3024__auto____1 = (function (state_8830){
while(true){
var ret_value__3025__auto__ = (function (){try{while(true){
var result__3026__auto__ = switch__3023__auto__(state_8830);
if(cljs.core.keyword_identical_QMARK_(result__3026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3026__auto__;
}
break;
}
}catch (e8856){if((e8856 instanceof Object)){
var ex__3027__auto__ = e8856;
var statearr_8857_8884 = state_8830;
(statearr_8857_8884[(5)] = ex__3027__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8830);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8856;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__3025__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8886 = state_8830;
state_8830 = G__8886;
continue;
} else {
return ret_value__3025__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__3024__auto__ = function(state_8830){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__3024__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__3024__auto____1.call(this,state_8830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__3024__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__3024__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__3024__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__3024__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__3024__auto__;
})()
;})(switch__3023__auto__,c__3112__auto__))
})();
var state__3114__auto__ = (function (){var statearr_8859 = (f__3113__auto__.cljs$core$IFn$_invoke$arity$0 ? f__3113__auto__.cljs$core$IFn$_invoke$arity$0() : f__3113__auto__.call(null));
(statearr_8859[(6)] = c__3112__auto__);

return statearr_8859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__3114__auto__);
});})(c__3112__auto__))
);

return c__3112__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__8895 = cljs.core.deref(state_atom);
var map__8895__$1 = ((((!((map__8895 == null)))?(((((map__8895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8895):map__8895);
var state = map__8895__$1;
var input_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8895__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8895__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_text,input_text)){
return state;
} else {
if(clojure.string.blank_QMARK_(new_text)){
} else {
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c_input,new_text);
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,((function (map__8895,map__8895__$1,state,input_text,c_input){
return (function (p1__8892_SHARP_){
var G__8905 = p1__8892_SHARP_;
var G__8905__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__8905,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false], 0))
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_(state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model(G__8905__$1,new_text);
} else {
return G__8905__$1;
}
});})(map__8895,map__8895__$1,state,input_text,c_input))
);
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__8914 = cljs.core._EQ_;
var expr__8915 = event.which;
if(cljs.core.truth_((pred__8914.cljs$core$IFn$_invoke$arity$2 ? pred__8914.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.UP,expr__8915) : pred__8914.call(null,goog.events.KeyCodes.UP,expr__8915)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_((pred__8914.cljs$core$IFn$_invoke$arity$2 ? pred__8914.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.DOWN,expr__8915) : pred__8914.call(null,goog.events.KeyCodes.DOWN,expr__8915)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_((pred__8914.cljs$core$IFn$_invoke$arity$2 ? pred__8914.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.ENTER,expr__8915) : pred__8914.call(null,goog.events.KeyCodes.ENTER,expr__8915)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_((pred__8914.cljs$core$IFn$_invoke$arity$2 ? pred__8914.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.ESC,expr__8915) : pred__8914.call(null,goog.events.KeyCodes.ESC,expr__8915)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.reset_typeahead);
} else {
if(cljs.core.truth_((pred__8914.cljs$core$IFn$_invoke$arity$2 ? pred__8914.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.TAB,expr__8915) : pred__8914.call(null,goog.events.KeyCodes.TAB,expr__8915)))){
if(cljs.core.truth_(cljs.core.not_empty(new cljs.core.Keyword(null,"suggestions","suggestions",-859472618).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_atom))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.activate_suggestion_next);

return event.preventDefault();
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.input_text_will_blur);
}
} else {
return true;
}
}
}
}
}
});
re_com.typeahead.typeahead_args_desc = new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null)," supplies suggestion objects. This can either accept a single string argument (the search term), or a string and a callback. For the first case, the fn should return a collection of suggestion objects (which can be anything). For the second case, the fn should return ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil"], null),", and eventually result in a call to the callback with a collection of suggestion objects."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"string -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":change-on-blur?"], null)," controls when it is called. It is passed a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, invoke ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-change"], null)," when the user chooses a suggestion, otherwise invoke it on every change (navigating through suggestions with the mouse or keyboard, or if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"rigid?"], null)," is also ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null),", invoke it on every character typed.)"], null)], null),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"object | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"The initial value of the typeahead (should match the suggestion objects returned by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),")."]),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(250),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.integer_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"After receiving input, the typeahead will wait this many milliseconds without receiving new input before calling ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"render fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"override the rendering of the suggestion items by passing a fn that returns hiccup forms. The fn will receive two arguments: the search term, and the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"suggestion -> string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"When a suggestion is chosen, the input-text value will be set to the result of calling this fn with the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"If ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null)," the user will be allowed to choose arbitrary text input rather than a suggestion from ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),". In this case, a string will be supplied in lieu of a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.input_status_type_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"validation status. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil/omitted"], null)," for normal status or one of: ",re_com.validate.input_status_types_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, display an icon to match ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":status"], null)," (no icon for nil)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"displayed in status icon's tooltip"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"background text shown when empty"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"250px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS width setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS height setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the user can't interact (input anything)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed"], null)], null)], null);
/**
 * typeahead reagent component
 */
re_com.typeahead.typeahead = (function re_com$typeahead$typeahead(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9020 = arguments.length;
var i__4532__auto___9021 = (0);
while(true){
if((i__4532__auto___9021 < len__4531__auto___9020)){
args__4534__auto__.push((arguments[i__4532__auto___9021]));

var G__9024 = (i__4532__auto___9021 + (1));
i__4532__auto___9021 = G__9024;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__8954){
var map__8955 = p__8954;
var map__8955__$1 = ((((!((map__8955 == null)))?(((((map__8955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8955):map__8955);
var args = map__8955__$1;
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.typeahead.typeahead_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["typeahead"], 0))))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__8966 = re_com.typeahead.make_typeahead_state(args);
var map__8966__$1 = ((((!((map__8966 == null)))?(((((map__8966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8966):map__8966);
var state = map__8966__$1;
var c_search = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8966__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8966__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(state);
var input_text_model = reagent.core.cursor(state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
re_com.typeahead.search_data_source_loop_BANG_(state_atom,c_search);

return ((function (map__8966,map__8966__$1,state,c_search,c_input,state_atom,input_text_model,map__8955,map__8955__$1,args){
return (function() { 
var G__9030__delegate = function (p__8970){
var map__8971 = p__8970;
var map__8971__$1 = ((((!((map__8971 == null)))?(((((map__8971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8971):map__8971);
var args__$1 = map__8971__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8971__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8971__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8971__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8971__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8971__$1,new cljs.core.Keyword(null,"model","model",331153215));
var _debounce_delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8971__$1,new cljs.core.Keyword(null,"_debounce-delay","_debounce-delay",-1476744225));
var _on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8971__$1,new cljs.core.Keyword(null,"_on-change","_on-change",156649312));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8971__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8971__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var _suggestion_to_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8971__$1,new cljs.core.Keyword(null,"_suggestion-to-string","_suggestion-to-string",795407399));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8971__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8971__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var _rigid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8971__$1,new cljs.core.Keyword(null,"_rigid?","_rigid?",1424449294));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8971__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var _change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8971__$1,new cljs.core.Keyword(null,"_change-on-blur?","_change-on-blur?",1219941073));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8971__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8971__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var _attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8971__$1,new cljs.core.Keyword(null,"_attr","_attr",299438964));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.typeahead.typeahead_args_desc),args__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["typeahead"], 0))))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__8986 = cljs.core.deref(state_atom);
var map__8986__$1 = ((((!((map__8986 == null)))?(((((map__8986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8986.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8986):map__8986);
var state__$1 = map__8986__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8986__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8986__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8986__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var external_model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8986__$1,new cljs.core.Keyword(null,"external-model","external-model",506095421));
var last_data_source = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(state__$1);
var latest_external_model = re_com.util.deref_or_value(model);
var width__$1 = (function (){var or__3949__auto__ = width;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return "250px";
}
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(last_data_source,data_source)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.change_data_source,data_source);
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(latest_external_model,external_model)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.external_model_changed,latest_external_model);
} else {
}

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.input_text,new cljs.core.Keyword(null,"model","model",331153215),input_text_model,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),status_icon_QMARK_,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),status_tooltip,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_com.typeahead.input_text_on_change_BANG_,state_atom),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_com.typeahead.input_text_on_key_down_BANG_,state_atom)], null)], null),(cljs.core.truth_((function (){var or__3949__auto__ = cljs.core.not_empty(suggestions);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return waiting_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-suggestions-container",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-throbber"], null)], null):null),(function (){var iter__4324__auto__ = ((function (map__8986,map__8986__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__8971,map__8971__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__8966,map__8966__$1,state,c_search,c_input,state_atom,input_text_model,map__8955,map__8955__$1,args){
return (function re_com$typeahead$iter__9000(s__9001){
return (new cljs.core.LazySeq(null,((function (map__8986,map__8986__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__8971,map__8971__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__8966,map__8966__$1,state,c_search,c_input,state_atom,input_text_model,map__8955,map__8955__$1,args){
return (function (){
var s__9001__$1 = s__9001;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__9001__$1);
if(temp__5457__auto__){
var s__9001__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__9001__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__9001__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__9003 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__9002 = (0);
while(true){
if((i__9002 < size__4323__auto__)){
var vec__9008 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__9002);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9008,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9008,(1),null);
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(suggestion_active_index,i);
cljs.core.chunk_append(b__9003,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?(render_suggestion.cljs$core$IFn$_invoke$arity$1 ? render_suggestion.cljs$core$IFn$_invoke$arity$1(s) : render_suggestion.call(null,s)):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__9002,selected_QMARK_,vec__9008,i,s,c__4322__auto__,size__4323__auto__,b__9003,s__9001__$2,temp__5457__auto__,map__8986,map__8986__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__8971,map__8971__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__8966,map__8966__$1,state,c_search,c_input,state_atom,input_text_model,map__8955,map__8955__$1,args){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__9002,selected_QMARK_,vec__9008,i,s,c__4322__auto__,size__4323__auto__,b__9003,s__9001__$2,temp__5457__auto__,map__8986,map__8986__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__8971,map__8971__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__8966,map__8966__$1,state,c_search,c_input,state_atom,input_text_model,map__8955,map__8955__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__9002,selected_QMARK_,vec__9008,i,s,c__4322__auto__,size__4323__auto__,b__9003,s__9001__$2,temp__5457__auto__,map__8986,map__8986__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__8971,map__8971__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__8966,map__8966__$1,state,c_search,c_input,state_atom,input_text_model,map__8955,map__8955__$1,args){
return (function (p1__8948_SHARP_){
p1__8948_SHARP_.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__9002,selected_QMARK_,vec__9008,i,s,c__4322__auto__,size__4323__auto__,b__9003,s__9001__$2,temp__5457__auto__,map__8986,map__8986__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__8971,map__8971__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__8966,map__8966__$1,state,c_search,c_input,state_atom,input_text_model,map__8955,map__8955__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__9086 = (i__9002 + (1));
i__9002 = G__9086;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__9003),re_com$typeahead$iter__9000(cljs.core.chunk_rest(s__9001__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__9003),null);
}
} else {
var vec__9014 = cljs.core.first(s__9001__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9014,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9014,(1),null);
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(suggestion_active_index,i);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?(render_suggestion.cljs$core$IFn$_invoke$arity$1 ? render_suggestion.cljs$core$IFn$_invoke$arity$1(s) : render_suggestion.call(null,s)):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,vec__9014,i,s,s__9001__$2,temp__5457__auto__,map__8986,map__8986__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__8971,map__8971__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__8966,map__8966__$1,state,c_search,c_input,state_atom,input_text_model,map__8955,map__8955__$1,args){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__9014,i,s,s__9001__$2,temp__5457__auto__,map__8986,map__8986__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__8971,map__8971__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__8966,map__8966__$1,state,c_search,c_input,state_atom,input_text_model,map__8955,map__8955__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,vec__9014,i,s,s__9001__$2,temp__5457__auto__,map__8986,map__8986__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__8971,map__8971__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__8966,map__8966__$1,state,c_search,c_input,state_atom,input_text_model,map__8955,map__8955__$1,args){
return (function (p1__8948_SHARP_){
p1__8948_SHARP_.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__9014,i,s,s__9001__$2,temp__5457__auto__,map__8986,map__8986__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__8971,map__8971__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__8966,map__8966__$1,state,c_search,c_input,state_atom,input_text_model,map__8955,map__8955__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),re_com$typeahead$iter__9000(cljs.core.rest(s__9001__$2)));
}
} else {
return null;
}
break;
}
});})(map__8986,map__8986__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__8971,map__8971__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__8966,map__8966__$1,state,c_search,c_input,state_atom,input_text_model,map__8955,map__8955__$1,args))
,null,null));
});})(map__8986,map__8986__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__8971,map__8971__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__8966,map__8966__$1,state,c_search,c_input,state_atom,input_text_model,map__8955,map__8955__$1,args))
;
return iter__4324__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),suggestions));
})()], null)], null)], null):null)], null)], null);
};
var G__9030 = function (var_args){
var p__8970 = null;
if (arguments.length > 0) {
var G__9109__i = 0, G__9109__a = new Array(arguments.length -  0);
while (G__9109__i < G__9109__a.length) {G__9109__a[G__9109__i] = arguments[G__9109__i + 0]; ++G__9109__i;}
  p__8970 = new cljs.core.IndexedSeq(G__9109__a,0,null);
} 
return G__9030__delegate.call(this,p__8970);};
G__9030.cljs$lang$maxFixedArity = 0;
G__9030.cljs$lang$applyTo = (function (arglist__9110){
var p__8970 = cljs.core.seq(arglist__9110);
return G__9030__delegate(p__8970);
});
G__9030.cljs$core$IFn$_invoke$arity$variadic = G__9030__delegate;
return G__9030;
})()
;
;})(map__8966,map__8966__$1,state,c_search,c_input,state_atom,input_text_model,map__8955,map__8955__$1,args))
});

re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq8949){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq8949));
});

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__3112__auto___9218 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__3112__auto___9218,out){
return (function (){
var f__3113__auto__ = (function (){var switch__3023__auto__ = ((function (c__3112__auto___9218,out){
return (function (state_9167){
var state_val_9169 = (state_9167[(1)]);
if((state_val_9169 === (7))){
var inst_9117 = (state_9167[(2)]);
var state_9167__$1 = state_9167;
var statearr_9172_9220 = state_9167__$1;
(statearr_9172_9220[(2)] = inst_9117);

(statearr_9172_9220[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9169 === (1))){
var inst_9112 = null;
var state_9167__$1 = (function (){var statearr_9173 = state_9167;
(statearr_9173[(7)] = inst_9112);

return statearr_9173;
})();
var statearr_9174_9221 = state_9167__$1;
(statearr_9174_9221[(2)] = null);

(statearr_9174_9221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9169 === (4))){
var state_9167__$1 = state_9167;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9167__$1,(7),in$);
} else {
if((state_val_9169 === (15))){
var inst_9151 = (state_9167[(2)]);
var state_9167__$1 = (function (){var statearr_9179 = state_9167;
(statearr_9179[(8)] = inst_9151);

return statearr_9179;
})();
var statearr_9180_9223 = state_9167__$1;
(statearr_9180_9223[(2)] = null);

(statearr_9180_9223[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9169 === (13))){
var inst_9137 = (state_9167[(9)]);
var inst_9153 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_9137,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_9167__$1 = state_9167;
if(inst_9153){
var statearr_9182_9224 = state_9167__$1;
(statearr_9182_9224[(1)] = (16));

} else {
var statearr_9183_9225 = state_9167__$1;
(statearr_9183_9225[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9169 === (6))){
var inst_9121 = (state_9167[(10)]);
var inst_9120 = (state_9167[(2)]);
var inst_9121__$1 = cljs.core.async.timeout(ms);
var inst_9131 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9132 = [in$,inst_9121__$1];
var inst_9133 = (new cljs.core.PersistentVector(null,2,(5),inst_9131,inst_9132,null));
var state_9167__$1 = (function (){var statearr_9184 = state_9167;
(statearr_9184[(11)] = inst_9120);

(statearr_9184[(10)] = inst_9121__$1);

return statearr_9184;
})();
return cljs.core.async.ioc_alts_BANG_(state_9167__$1,(8),inst_9133);
} else {
if((state_val_9169 === (17))){
var state_9167__$1 = state_9167;
var statearr_9185_9226 = state_9167__$1;
(statearr_9185_9226[(2)] = null);

(statearr_9185_9226[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9169 === (3))){
var inst_9165 = (state_9167[(2)]);
var state_9167__$1 = state_9167;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9167__$1,inst_9165);
} else {
if((state_val_9169 === (12))){
var inst_9120 = (state_9167[(11)]);
var state_9167__$1 = state_9167;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9167__$1,(15),out,inst_9120);
} else {
if((state_val_9169 === (2))){
var inst_9112 = (state_9167[(7)]);
var inst_9114 = (inst_9112 == null);
var state_9167__$1 = state_9167;
if(cljs.core.truth_(inst_9114)){
var statearr_9187_9228 = state_9167__$1;
(statearr_9187_9228[(1)] = (4));

} else {
var statearr_9188_9229 = state_9167__$1;
(statearr_9188_9229[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9169 === (11))){
var inst_9162 = (state_9167[(2)]);
var inst_9112 = inst_9162;
var state_9167__$1 = (function (){var statearr_9189 = state_9167;
(statearr_9189[(7)] = inst_9112);

return statearr_9189;
})();
var statearr_9190_9230 = state_9167__$1;
(statearr_9190_9230[(2)] = null);

(statearr_9190_9230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9169 === (9))){
var inst_9135 = (state_9167[(12)]);
var inst_9143 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_9135,(0),null);
var inst_9144 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_9135,(1),null);
var state_9167__$1 = (function (){var statearr_9191 = state_9167;
(statearr_9191[(13)] = inst_9144);

return statearr_9191;
})();
var statearr_9192_9231 = state_9167__$1;
(statearr_9192_9231[(2)] = inst_9143);

(statearr_9192_9231[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9169 === (5))){
var inst_9112 = (state_9167[(7)]);
var state_9167__$1 = state_9167;
var statearr_9193_9232 = state_9167__$1;
(statearr_9193_9232[(2)] = inst_9112);

(statearr_9193_9232[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9169 === (14))){
var inst_9160 = (state_9167[(2)]);
var state_9167__$1 = state_9167;
var statearr_9194_9233 = state_9167__$1;
(statearr_9194_9233[(2)] = inst_9160);

(statearr_9194_9233[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9169 === (16))){
var inst_9136 = (state_9167[(14)]);
var state_9167__$1 = state_9167;
var statearr_9195_9234 = state_9167__$1;
(statearr_9195_9234[(2)] = inst_9136);

(statearr_9195_9234[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9169 === (10))){
var inst_9121 = (state_9167[(10)]);
var inst_9137 = (state_9167[(9)]);
var inst_9146 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_9137,inst_9121);
var state_9167__$1 = state_9167;
if(inst_9146){
var statearr_9198_9236 = state_9167__$1;
(statearr_9198_9236[(1)] = (12));

} else {
var statearr_9199_9241 = state_9167__$1;
(statearr_9199_9241[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9169 === (18))){
var inst_9158 = (state_9167[(2)]);
var state_9167__$1 = state_9167;
var statearr_9200_9243 = state_9167__$1;
(statearr_9200_9243[(2)] = inst_9158);

(statearr_9200_9243[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9169 === (8))){
var inst_9137 = (state_9167[(9)]);
var inst_9135 = (state_9167[(12)]);
var inst_9135__$1 = (state_9167[(2)]);
var inst_9136 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_9135__$1,(0),null);
var inst_9137__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_9135__$1,(1),null);
var inst_9138 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_9137__$1,in$);
var state_9167__$1 = (function (){var statearr_9201 = state_9167;
(statearr_9201[(9)] = inst_9137__$1);

(statearr_9201[(14)] = inst_9136);

(statearr_9201[(12)] = inst_9135__$1);

return statearr_9201;
})();
if(inst_9138){
var statearr_9202_9246 = state_9167__$1;
(statearr_9202_9246[(1)] = (9));

} else {
var statearr_9203_9247 = state_9167__$1;
(statearr_9203_9247[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
}
}
});})(c__3112__auto___9218,out))
;
return ((function (switch__3023__auto__,c__3112__auto___9218,out){
return (function() {
var re_com$typeahead$debounce_$_state_machine__3024__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__3024__auto____0 = (function (){
var statearr_9209 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9209[(0)] = re_com$typeahead$debounce_$_state_machine__3024__auto__);

(statearr_9209[(1)] = (1));

return statearr_9209;
});
var re_com$typeahead$debounce_$_state_machine__3024__auto____1 = (function (state_9167){
while(true){
var ret_value__3025__auto__ = (function (){try{while(true){
var result__3026__auto__ = switch__3023__auto__(state_9167);
if(cljs.core.keyword_identical_QMARK_(result__3026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3026__auto__;
}
break;
}
}catch (e9214){if((e9214 instanceof Object)){
var ex__3027__auto__ = e9214;
var statearr_9215_9252 = state_9167;
(statearr_9215_9252[(5)] = ex__3027__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9167);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9214;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__3025__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9253 = state_9167;
state_9167 = G__9253;
continue;
} else {
return ret_value__3025__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__3024__auto__ = function(state_9167){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__3024__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__3024__auto____1.call(this,state_9167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$debounce_$_state_machine__3024__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__3024__auto____0;
re_com$typeahead$debounce_$_state_machine__3024__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__3024__auto____1;
return re_com$typeahead$debounce_$_state_machine__3024__auto__;
})()
;})(switch__3023__auto__,c__3112__auto___9218,out))
})();
var state__3114__auto__ = (function (){var statearr_9216 = (f__3113__auto__.cljs$core$IFn$_invoke$arity$0 ? f__3113__auto__.cljs$core$IFn$_invoke$arity$0() : f__3113__auto__.call(null));
(statearr_9216[(6)] = c__3112__auto___9218);

return statearr_9216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__3114__auto__);
});})(c__3112__auto___9218,out))
);


return out;
});

//# sourceMappingURL=re_com.typeahead.js.map
