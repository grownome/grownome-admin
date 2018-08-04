goog.provide('re_com.input_time');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_com.validate');
goog.require('re_com.text');
goog.require('re_com.box');
goog.require('re_com.util');
re_com.input_time.time__GT_mins = (function re_com$input_time$time__GT_mins(time){
return cljs.core.rem(time,(100));
});
re_com.input_time.time__GT_hrs = (function re_com$input_time$time__GT_hrs(time){
return cljs.core.quot(time,(100));
});
/**
 * Parse the string 's' to a valid int. On parse failure, return 0
 */
re_com.input_time.to_int = (function re_com$input_time$to_int(s){
var val = parseInt(s);
if(cljs.core.truth_(isNaN(val))){
return (0);
} else {
return val;
}
});
/**
 * Return a time integer from a triple int vector of form  [H  _  M]
 */
re_com.input_time.triple__GT_time = (function re_com$input_time$triple__GT_time(p__8721){
var vec__8723 = p__8721;
var hr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8723,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8723,(1),null);
var mi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8723,(2),null);
return ((hr * (100)) + mi);
});
re_com.input_time.triple_seeking_re = /^(\d{0,2})()()$|^(\d{0,1})(:{0,1})(\d{0,2})$|^(\d{0,2})(:{0,1})(\d{0,2})$/;
re_com.input_time.extract_triple_from_text = (function re_com$input_time$extract_triple_from_text(text){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,cljs.core.nil_QMARK_),cljs.core.rest(cljs.core.re_matches(re_com.input_time.triple_seeking_re,text)));
});
/**
 * return as a time int, the contents of 'text'
 */
re_com.input_time.text__GT_time = (function re_com$input_time$text__GT_time(text){
return re_com.input_time.triple__GT_time(cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_com.input_time.to_int,re_com.input_time.extract_triple_from_text(text)));
});
/**
 * return a string of format HH:MM for 'time'
 */
re_com.input_time.time__GT_text = (function re_com$input_time$time__GT_text(time){
var hrs = re_com.input_time.time__GT_hrs(time);
var mins = re_com.input_time.time__GT_mins(time);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_com.util.pad_zero_number(hrs,(2))),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_com.util.pad_zero_number(mins,(2)))].join('');
});
/**
 * Return true if text passes basic time validation.
 * Can't do to much validation because user input might not be finished.
 * Why?  On the way to entering 6:30, you must pass through the invalid state of '63'.
 * So we only really check against the triple-extracting regular expression
 */
re_com.input_time.valid_text_QMARK_ = (function re_com$input_time$valid_text_QMARK_(text){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),cljs.core.count(re_com.input_time.extract_triple_from_text(text)));
});
re_com.input_time.valid_time_QMARK_ = (function re_com$input_time$valid_time_QMARK_(time){
if((time == null)){
return false;
} else {
if(((0) > time)){
return false;
} else {
if(((60) < re_com.input_time.time__GT_mins(time))){
return false;
} else {
return true;

}
}
}
});
re_com.input_time.validate_arg_times = (function re_com$input_time$validate_arg_times(model,minimum,maximum){
if(cljs.core.truth_((function (){var and__3938__auto__ = typeof model === 'number';
if(and__3938__auto__){
return re_com.input_time.valid_time_QMARK_(model);
} else {
return and__3938__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["[input-time] given an invalid :model - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)].join('')),"\n","(and (number? model) (valid-time? model))"].join('')));
}

if(cljs.core.truth_((function (){var and__3938__auto__ = typeof minimum === 'number';
if(and__3938__auto__){
return re_com.input_time.valid_time_QMARK_(minimum);
} else {
return and__3938__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["[input-time] given an invalid :minimum - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(minimum)].join('')),"\n","(and (number? minimum) (valid-time? minimum))"].join('')));
}

if(cljs.core.truth_((function (){var and__3938__auto__ = typeof maximum === 'number';
if(and__3938__auto__){
return re_com.input_time.valid_time_QMARK_(maximum);
} else {
return and__3938__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["[input-time] given an invalid :maximum - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(maximum)].join('')),"\n","(and (number? maximum) (valid-time? maximum))"].join('')));
}

if((minimum <= maximum)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["[input-time] :minimum ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(minimum)," > :maximum  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(maximum)].join('')),"\n","(<= minimum maximum)"].join('')));
}

return true;
});
/**
 * Validate the time supplied.
 * Return either the time or, if it is invalid, return something valid
 */
re_com.input_time.force_valid_time = (function re_com$input_time$force_valid_time(time,min,max,previous){
if((time == null)){
return previous;
} else {
if(cljs.core.not(re_com.input_time.valid_time_QMARK_(time))){
return previous;
} else {
if((time < min)){
return min;
} else {
if((max < time)){
return max;
} else {
return time;

}
}
}
}
});
/**
 * Called each time the <input> field gets a keypress, or paste operation.
 * Rests  the text-model only if the new text is valid
 */
re_com.input_time.on_new_keypress = (function re_com$input_time$on_new_keypress(event,text_model){
var current_text = event.target.value;
if(cljs.core.truth_(re_com.input_time.valid_text_QMARK_(current_text))){
return cljs.core.reset_BANG_(text_model,current_text);
} else {
return null;
}
});
/**
 * When Enter is pressed, force the component to lose focus
 */
re_com.input_time.lose_focus_if_enter = (function re_com$input_time$lose_focus_if_enter(ev){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ev.keyCode,(13))){
ev.target.blur();

return true;
} else {
return null;
}
});
/**
 * Called when the field looses focus.
 * Re-validate what has been entered, comparing to mins and maxs.
 * Invoke the callback as necessary
 */
re_com.input_time.on_defocus = (function re_com$input_time$on_defocus(text_model,min,max,callback,previous_val){
var time = re_com.input_time.text__GT_time(cljs.core.deref(text_model));
var time__$1 = re_com.input_time.force_valid_time(time,min,max,previous_val);
cljs.core.reset_BANG_(text_model,re_com.input_time.time__GT_text(time__$1));

if(cljs.core.truth_((function (){var and__3938__auto__ = callback;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(time__$1,previous_val);
} else {
return and__3938__auto__;
}
})())){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(time__$1) : callback.call(null,time__$1));
} else {
return null;
}
});
re_com.input_time.input_time_args_desc = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"integer | string | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a time in integer form. e.g. '09:30am' is 930"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"integer -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"called when user entry completes and value is new. Passed new value as integer"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"minimum","minimum",-1621006059),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(0),new cljs.core.Keyword(null,"type","type",1174270348),"integer | string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"user can't enter a time less than this value"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"maximum","maximum",573880714),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(2359),new cljs.core.Keyword(null,"type","type",1174270348),"integer | string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"user can't enter a time more than this value"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, user input is disabled"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"show-icon?","show-icon?",-756836459),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, a clock icon will be displayed to the right of input field"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"hide-border?","hide-border?",1792698922),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, input filed is displayed without a border"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS width setting for width of the input box (excluding the icon if present)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS height setting"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS style. e.g. {:color \"red\" :width \"50px\"}"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed"], null)], null)], null);
/**
 * I return the markup for an input box which will accept and validate times.
 * Parameters - refer input-time-args above
 */
re_com.input_time.input_time = (function re_com$input_time$input_time(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8851 = arguments.length;
var i__4532__auto___8853 = (0);
while(true){
if((i__4532__auto___8853 < len__4531__auto___8851)){
args__4534__auto__.push((arguments[i__4532__auto___8853]));

var G__8855 = (i__4532__auto___8853 + (1));
i__4532__auto___8853 = G__8855;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return re_com.input_time.input_time.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

re_com.input_time.input_time.cljs$core$IFn$_invoke$arity$variadic = (function (p__8797){
var map__8818 = p__8797;
var map__8818__$1 = ((((!((map__8818 == null)))?(((((map__8818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8818.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8818):map__8818);
var args = map__8818__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8818__$1,new cljs.core.Keyword(null,"model","model",331153215));
var minimum = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__8818__$1,new cljs.core.Keyword(null,"minimum","minimum",-1621006059),(0));
var maximum = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__8818__$1,new cljs.core.Keyword(null,"maximum","maximum",573880714),(2359));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.input_time.input_time_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["input-time"], 0))))){
} else {
throw (new Error("Assert failed: (validate-args-macro input-time-args-desc args \"input-time\")"));
}

if(cljs.core.truth_(re_com.input_time.validate_arg_times(re_com.util.deref_or_value(model),minimum,maximum))){
} else {
throw (new Error("Assert failed: (validate-arg-times (deref-or-value model) minimum maximum)"));
}

var deref_model = re_com.util.deref_or_value(model);
var text_model = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_com.input_time.time__GT_text(deref_model));
var previous_model = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(deref_model);
return ((function (deref_model,text_model,previous_model,map__8818,map__8818__$1,args,model,minimum,maximum){
return (function() { 
var G__8872__delegate = function (p__8834){
var map__8836 = p__8834;
var map__8836__$1 = ((((!((map__8836 == null)))?(((((map__8836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8836.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8836):map__8836);
var args__$1 = map__8836__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8836__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8836__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8836__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var model__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8836__$1,new cljs.core.Keyword(null,"model","model",331153215));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8836__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var hide_border_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8836__$1,new cljs.core.Keyword(null,"hide-border?","hide-border?",1792698922));
var maximum__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__8836__$1,new cljs.core.Keyword(null,"maximum","maximum",573880714),(2359));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8836__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8836__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8836__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var show_icon_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8836__$1,new cljs.core.Keyword(null,"show-icon?","show-icon?",-756836459));
var minimum__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__8836__$1,new cljs.core.Keyword(null,"minimum","minimum",-1621006059),(0));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.input_time.input_time_args_desc),args__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["input-time"], 0))))){
} else {
throw (new Error("Assert failed: (validate-args-macro input-time-args-desc args \"input-time\")"));
}

if(cljs.core.truth_(re_com.input_time.validate_arg_times(re_com.util.deref_or_value(model__$1),minimum__$1,maximum__$1))){
} else {
throw (new Error("Assert failed: (validate-arg-times (deref-or-value model) minimum maximum)"));
}

var style__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(hide_border_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"none"], null):null),style], 0));
var new_val = re_com.util.deref_or_value(model__$1);
var new_val__$1 = (((new_val < minimum__$1))?minimum__$1:new_val);
var new_val__$2 = (((new_val__$1 > maximum__$1))?maximum__$1:new_val__$1);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(previous_model),new_val__$2)){
cljs.core.reset_BANG_(text_model,re_com.input_time.time__GT_text(new_val__$2));

cljs.core.reset_BANG_(previous_model,new_val__$2);
} else {
}

return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-input-time",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),height], null),style__$1], 0)),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"class","class",-2030961996),["time-entry ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),width], null),style__$1], 0)),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(text_model),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),re_com.util.deref_or_value(disabled_QMARK_),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (style__$1,new_val,new_val__$1,new_val__$2,map__8836,map__8836__$1,args__$1,disabled_QMARK_,on_change,height,model__$1,attr,hide_border_QMARK_,maximum__$1,width,style,class$,show_icon_QMARK_,minimum__$1,deref_model,text_model,previous_model,map__8818,map__8818__$1,args,model,minimum,maximum){
return (function (event){
re_com.input_time.on_new_keypress(event,text_model);

return null;
});})(style__$1,new_val,new_val__$1,new_val__$2,map__8836,map__8836__$1,args__$1,disabled_QMARK_,on_change,height,model__$1,attr,hide_border_QMARK_,maximum__$1,width,style,class$,show_icon_QMARK_,minimum__$1,deref_model,text_model,previous_model,map__8818,map__8818__$1,args,model,minimum,maximum))
,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (style__$1,new_val,new_val__$1,new_val__$2,map__8836,map__8836__$1,args__$1,disabled_QMARK_,on_change,height,model__$1,attr,hide_border_QMARK_,maximum__$1,width,style,class$,show_icon_QMARK_,minimum__$1,deref_model,text_model,previous_model,map__8818,map__8818__$1,args,model,minimum,maximum){
return (function (event){
re_com.input_time.on_defocus(text_model,minimum__$1,maximum__$1,on_change,cljs.core.deref(previous_model));

return null;
});})(style__$1,new_val,new_val__$1,new_val__$2,map__8836,map__8836__$1,args__$1,disabled_QMARK_,on_change,height,model__$1,attr,hide_border_QMARK_,maximum__$1,width,style,class$,show_icon_QMARK_,minimum__$1,deref_model,text_model,previous_model,map__8818,map__8818__$1,args,model,minimum,maximum))
,new cljs.core.Keyword(null,"on-key-up","on-key-up",884441808),((function (style__$1,new_val,new_val__$1,new_val__$2,map__8836,map__8836__$1,args__$1,disabled_QMARK_,on_change,height,model__$1,attr,hide_border_QMARK_,maximum__$1,width,style,class$,show_icon_QMARK_,minimum__$1,deref_model,text_model,previous_model,map__8818,map__8818__$1,args,model,minimum,maximum){
return (function (event){
re_com.input_time.lose_focus_if_enter(event);

return null;
});})(style__$1,new_val,new_val__$1,new_val__$2,map__8836,map__8836__$1,args__$1,disabled_QMARK_,on_change,height,model__$1,attr,hide_border_QMARK_,maximum__$1,width,style,class$,show_icon_QMARK_,minimum__$1,deref_model,text_model,previous_model,map__8818,map__8818__$1,args,model,minimum,maximum))
], null),attr], 0))], null),(cljs.core.truth_(show_icon_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.time-icon","div.time-icon",638768452),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.zmdi.zmdi-hc-fw-rc.zmdi-time","i.zmdi.zmdi-hc-fw-rc.zmdi-time",-1040605177),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"static",new cljs.core.Keyword(null,"margin","margin",-995903681),"auto"], null)], null)], null)], null):null)], null)], null);
};
var G__8872 = function (var_args){
var p__8834 = null;
if (arguments.length > 0) {
var G__8911__i = 0, G__8911__a = new Array(arguments.length -  0);
while (G__8911__i < G__8911__a.length) {G__8911__a[G__8911__i] = arguments[G__8911__i + 0]; ++G__8911__i;}
  p__8834 = new cljs.core.IndexedSeq(G__8911__a,0,null);
} 
return G__8872__delegate.call(this,p__8834);};
G__8872.cljs$lang$maxFixedArity = 0;
G__8872.cljs$lang$applyTo = (function (arglist__8913){
var p__8834 = cljs.core.seq(arglist__8913);
return G__8872__delegate(p__8834);
});
G__8872.cljs$core$IFn$_invoke$arity$variadic = G__8872__delegate;
return G__8872;
})()
;
;})(deref_model,text_model,previous_model,map__8818,map__8818__$1,args,model,minimum,maximum))
});

re_com.input_time.input_time.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.input_time.input_time.cljs$lang$applyTo = (function (seq8792){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq8792));
});


//# sourceMappingURL=re_com.input_time.js.map
