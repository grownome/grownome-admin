goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if(((!((this$ == null))) && (!((this$.shadow$dom$IElement$_to_dom$arity$1 == null))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (shadow.dom._to_dom["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if(((!((this$ == null))) && (!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (shadow.dom._to_svg["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__12365 = coll;
var G__12366 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__12365,G__12366) : shadow.dom.lazy_native_coll_seq.call(null,G__12365,G__12366));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__3949__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if(((!((el == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode([cljs.core.str.cljs$core$IFn$_invoke$arity$1(el)].join(''));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__12409 = arguments.length;
switch (G__12409) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__12421 = arguments.length;
switch (G__12421) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__12428 = arguments.length;
switch (G__12428) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__12431 = arguments.length;
switch (G__12431) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__12441 = arguments.length;
switch (G__12441) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__12442 = document;
var G__12443 = shadow.dom.dom_node(el);
return goog.dom.contains(G__12442,G__12443);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__12444 = shadow.dom.dom_node(parent);
var G__12445 = shadow.dom.dom_node(el);
return goog.dom.contains(G__12444,G__12445);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__12447 = shadow.dom.dom_node(el);
var G__12448 = cls;
return goog.dom.classlist.add(G__12447,G__12448);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__12449 = shadow.dom.dom_node(el);
var G__12450 = cls;
return goog.dom.classlist.remove(G__12449,G__12450);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__12452 = arguments.length;
switch (G__12452) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__12453 = shadow.dom.dom_node(el);
var G__12454 = cls;
return goog.dom.classlist.toggle(G__12453,G__12454);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__3949__auto__ = !((typeof document !== 'undefined'));
if(or__3949__auto__){
return or__3949__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e12456){if((e12456 instanceof Object)){
var e = e12456;
return console.log("didnt support attachEvent",el,e);
} else {
throw e12456;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__3949__auto__ = !((typeof document !== 'undefined'));
if(or__3949__auto__){
return or__3949__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__12457 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__12458 = null;
var count__12459 = (0);
var i__12460 = (0);
while(true){
if((i__12460 < count__12459)){
var el = chunk__12458.cljs$core$IIndexed$_nth$arity$2(null,i__12460);
var handler_12467__$1 = ((function (seq__12457,chunk__12458,count__12459,i__12460,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__12457,chunk__12458,count__12459,i__12460,el))
;
var G__12461_12468 = el;
var G__12462_12469 = cljs.core.name(ev);
var G__12463_12470 = handler_12467__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__12461_12468,G__12462_12469,G__12463_12470) : shadow.dom.dom_listen.call(null,G__12461_12468,G__12462_12469,G__12463_12470));


var G__12471 = seq__12457;
var G__12472 = chunk__12458;
var G__12473 = count__12459;
var G__12474 = (i__12460 + (1));
seq__12457 = G__12471;
chunk__12458 = G__12472;
count__12459 = G__12473;
i__12460 = G__12474;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__12457);
if(temp__5457__auto__){
var seq__12457__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12457__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__12457__$1);
var G__12475 = cljs.core.chunk_rest(seq__12457__$1);
var G__12476 = c__4351__auto__;
var G__12477 = cljs.core.count(c__4351__auto__);
var G__12478 = (0);
seq__12457 = G__12475;
chunk__12458 = G__12476;
count__12459 = G__12477;
i__12460 = G__12478;
continue;
} else {
var el = cljs.core.first(seq__12457__$1);
var handler_12479__$1 = ((function (seq__12457,chunk__12458,count__12459,i__12460,el,seq__12457__$1,temp__5457__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__12457,chunk__12458,count__12459,i__12460,el,seq__12457__$1,temp__5457__auto__))
;
var G__12464_12480 = el;
var G__12465_12481 = cljs.core.name(ev);
var G__12466_12482 = handler_12479__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__12464_12480,G__12465_12481,G__12466_12482) : shadow.dom.dom_listen.call(null,G__12464_12480,G__12465_12481,G__12466_12482));


var G__12483 = cljs.core.next(seq__12457__$1);
var G__12484 = null;
var G__12485 = (0);
var G__12486 = (0);
seq__12457 = G__12483;
chunk__12458 = G__12484;
count__12459 = G__12485;
i__12460 = G__12486;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__12488 = arguments.length;
switch (G__12488) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__12489 = shadow.dom.dom_node(el);
var G__12490 = cljs.core.name(ev);
var G__12491 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__12489,G__12490,G__12491) : shadow.dom.dom_listen.call(null,G__12489,G__12490,G__12491));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__12493 = shadow.dom.dom_node(el);
var G__12494 = cljs.core.name(ev);
var G__12495 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__12493,G__12494,G__12495) : shadow.dom.dom_listen_remove.call(null,G__12493,G__12494,G__12495));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__12496 = cljs.core.seq(events);
var chunk__12497 = null;
var count__12498 = (0);
var i__12499 = (0);
while(true){
if((i__12499 < count__12498)){
var vec__12500 = chunk__12497.cljs$core$IIndexed$_nth$arity$2(null,i__12499);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12500,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12500,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12506 = seq__12496;
var G__12507 = chunk__12497;
var G__12508 = count__12498;
var G__12509 = (i__12499 + (1));
seq__12496 = G__12506;
chunk__12497 = G__12507;
count__12498 = G__12508;
i__12499 = G__12509;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__12496);
if(temp__5457__auto__){
var seq__12496__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12496__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__12496__$1);
var G__12510 = cljs.core.chunk_rest(seq__12496__$1);
var G__12511 = c__4351__auto__;
var G__12512 = cljs.core.count(c__4351__auto__);
var G__12513 = (0);
seq__12496 = G__12510;
chunk__12497 = G__12511;
count__12498 = G__12512;
i__12499 = G__12513;
continue;
} else {
var vec__12503 = cljs.core.first(seq__12496__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12503,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12503,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12514 = cljs.core.next(seq__12496__$1);
var G__12515 = null;
var G__12516 = (0);
var G__12517 = (0);
seq__12496 = G__12514;
chunk__12497 = G__12515;
count__12498 = G__12516;
i__12499 = G__12517;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__12518 = cljs.core.seq(styles);
var chunk__12519 = null;
var count__12520 = (0);
var i__12521 = (0);
while(true){
if((i__12521 < count__12520)){
var vec__12522 = chunk__12519.cljs$core$IIndexed$_nth$arity$2(null,i__12521);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12522,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12522,(1),null);
var G__12525_12534 = dom;
var G__12526_12535 = cljs.core.name(k);
var G__12527_12536 = (((v == null))?"":v);
goog.style.setStyle(G__12525_12534,G__12526_12535,G__12527_12536);


var G__12537 = seq__12518;
var G__12538 = chunk__12519;
var G__12539 = count__12520;
var G__12540 = (i__12521 + (1));
seq__12518 = G__12537;
chunk__12519 = G__12538;
count__12520 = G__12539;
i__12521 = G__12540;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__12518);
if(temp__5457__auto__){
var seq__12518__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12518__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__12518__$1);
var G__12541 = cljs.core.chunk_rest(seq__12518__$1);
var G__12542 = c__4351__auto__;
var G__12543 = cljs.core.count(c__4351__auto__);
var G__12544 = (0);
seq__12518 = G__12541;
chunk__12519 = G__12542;
count__12520 = G__12543;
i__12521 = G__12544;
continue;
} else {
var vec__12528 = cljs.core.first(seq__12518__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12528,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12528,(1),null);
var G__12531_12545 = dom;
var G__12532_12546 = cljs.core.name(k);
var G__12533_12547 = (((v == null))?"":v);
goog.style.setStyle(G__12531_12545,G__12532_12546,G__12533_12547);


var G__12548 = cljs.core.next(seq__12518__$1);
var G__12549 = null;
var G__12550 = (0);
var G__12551 = (0);
seq__12518 = G__12548;
chunk__12519 = G__12549;
count__12520 = G__12550;
i__12521 = G__12551;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__12552_12553 = key;
var G__12552_12554__$1 = (((G__12552_12553 instanceof cljs.core.Keyword))?G__12552_12553.fqn:null);
switch (G__12552_12554__$1) {
case "id":
el.id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');

break;
case "class":
el.className = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_12556 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__3949__auto__ = goog.string.startsWith(ks_12556,"data-");
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return goog.string.startsWith(ks_12556,"aria-");
}
})())){
el.setAttribute(ks_12556,value);
} else {
(el[ks_12556] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__12557 = shadow.dom.dom_node(el);
var G__12558 = cls;
return goog.dom.classlist.contains(G__12557,G__12558);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec__$1)].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__12559){
var map__12560 = p__12559;
var map__12560__$1 = ((((!((map__12560 == null)))?(((((map__12560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12560.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12560):map__12560);
var props = map__12560__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12560__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__12562 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12562,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12562,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12562,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__12565 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__12565,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__12565;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__12567 = arguments.length;
switch (G__12567) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5457__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5457__auto__)){
var n = temp__5457__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5457__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5457__auto__)){
var n = temp__5457__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__12569){
var vec__12570 = p__12569;
var seq__12571 = cljs.core.seq(vec__12570);
var first__12572 = cljs.core.first(seq__12571);
var seq__12571__$1 = cljs.core.next(seq__12571);
var nn = first__12572;
var first__12572__$1 = cljs.core.first(seq__12571__$1);
var seq__12571__$2 = cljs.core.next(seq__12571__$1);
var np = first__12572__$1;
var nc = seq__12571__$2;
var node = vec__12570;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12573 = nn;
var G__12574 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__12573,G__12574) : create_fn.call(null,G__12573,G__12574));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12575 = nn;
var G__12576 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__12575,G__12576) : create_fn.call(null,G__12575,G__12576));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__12577 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12577,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12577,(1),null);
var seq__12580_12596 = cljs.core.seq(node_children);
var chunk__12581_12597 = null;
var count__12582_12598 = (0);
var i__12583_12599 = (0);
while(true){
if((i__12583_12599 < count__12582_12598)){
var child_struct_12600 = chunk__12581_12597.cljs$core$IIndexed$_nth$arity$2(null,i__12583_12599);
var children_12601 = shadow.dom.dom_node(child_struct_12600);
if(cljs.core.seq_QMARK_(children_12601)){
var seq__12584_12602 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12601));
var chunk__12586_12603 = null;
var count__12587_12604 = (0);
var i__12588_12605 = (0);
while(true){
if((i__12588_12605 < count__12587_12604)){
var child_12606 = chunk__12586_12603.cljs$core$IIndexed$_nth$arity$2(null,i__12588_12605);
if(cljs.core.truth_(child_12606)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12606);


var G__12607 = seq__12584_12602;
var G__12608 = chunk__12586_12603;
var G__12609 = count__12587_12604;
var G__12610 = (i__12588_12605 + (1));
seq__12584_12602 = G__12607;
chunk__12586_12603 = G__12608;
count__12587_12604 = G__12609;
i__12588_12605 = G__12610;
continue;
} else {
var G__12611 = seq__12584_12602;
var G__12612 = chunk__12586_12603;
var G__12613 = count__12587_12604;
var G__12614 = (i__12588_12605 + (1));
seq__12584_12602 = G__12611;
chunk__12586_12603 = G__12612;
count__12587_12604 = G__12613;
i__12588_12605 = G__12614;
continue;
}
} else {
var temp__5457__auto___12615 = cljs.core.seq(seq__12584_12602);
if(temp__5457__auto___12615){
var seq__12584_12616__$1 = temp__5457__auto___12615;
if(cljs.core.chunked_seq_QMARK_(seq__12584_12616__$1)){
var c__4351__auto___12617 = cljs.core.chunk_first(seq__12584_12616__$1);
var G__12618 = cljs.core.chunk_rest(seq__12584_12616__$1);
var G__12619 = c__4351__auto___12617;
var G__12620 = cljs.core.count(c__4351__auto___12617);
var G__12621 = (0);
seq__12584_12602 = G__12618;
chunk__12586_12603 = G__12619;
count__12587_12604 = G__12620;
i__12588_12605 = G__12621;
continue;
} else {
var child_12622 = cljs.core.first(seq__12584_12616__$1);
if(cljs.core.truth_(child_12622)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12622);


var G__12623 = cljs.core.next(seq__12584_12616__$1);
var G__12624 = null;
var G__12625 = (0);
var G__12626 = (0);
seq__12584_12602 = G__12623;
chunk__12586_12603 = G__12624;
count__12587_12604 = G__12625;
i__12588_12605 = G__12626;
continue;
} else {
var G__12627 = cljs.core.next(seq__12584_12616__$1);
var G__12628 = null;
var G__12629 = (0);
var G__12630 = (0);
seq__12584_12602 = G__12627;
chunk__12586_12603 = G__12628;
count__12587_12604 = G__12629;
i__12588_12605 = G__12630;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12601);
}


var G__12631 = seq__12580_12596;
var G__12632 = chunk__12581_12597;
var G__12633 = count__12582_12598;
var G__12634 = (i__12583_12599 + (1));
seq__12580_12596 = G__12631;
chunk__12581_12597 = G__12632;
count__12582_12598 = G__12633;
i__12583_12599 = G__12634;
continue;
} else {
var temp__5457__auto___12635 = cljs.core.seq(seq__12580_12596);
if(temp__5457__auto___12635){
var seq__12580_12636__$1 = temp__5457__auto___12635;
if(cljs.core.chunked_seq_QMARK_(seq__12580_12636__$1)){
var c__4351__auto___12637 = cljs.core.chunk_first(seq__12580_12636__$1);
var G__12638 = cljs.core.chunk_rest(seq__12580_12636__$1);
var G__12639 = c__4351__auto___12637;
var G__12640 = cljs.core.count(c__4351__auto___12637);
var G__12641 = (0);
seq__12580_12596 = G__12638;
chunk__12581_12597 = G__12639;
count__12582_12598 = G__12640;
i__12583_12599 = G__12641;
continue;
} else {
var child_struct_12642 = cljs.core.first(seq__12580_12636__$1);
var children_12643 = shadow.dom.dom_node(child_struct_12642);
if(cljs.core.seq_QMARK_(children_12643)){
var seq__12590_12644 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12643));
var chunk__12592_12645 = null;
var count__12593_12646 = (0);
var i__12594_12647 = (0);
while(true){
if((i__12594_12647 < count__12593_12646)){
var child_12648 = chunk__12592_12645.cljs$core$IIndexed$_nth$arity$2(null,i__12594_12647);
if(cljs.core.truth_(child_12648)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12648);


var G__12649 = seq__12590_12644;
var G__12650 = chunk__12592_12645;
var G__12651 = count__12593_12646;
var G__12652 = (i__12594_12647 + (1));
seq__12590_12644 = G__12649;
chunk__12592_12645 = G__12650;
count__12593_12646 = G__12651;
i__12594_12647 = G__12652;
continue;
} else {
var G__12653 = seq__12590_12644;
var G__12654 = chunk__12592_12645;
var G__12655 = count__12593_12646;
var G__12656 = (i__12594_12647 + (1));
seq__12590_12644 = G__12653;
chunk__12592_12645 = G__12654;
count__12593_12646 = G__12655;
i__12594_12647 = G__12656;
continue;
}
} else {
var temp__5457__auto___12657__$1 = cljs.core.seq(seq__12590_12644);
if(temp__5457__auto___12657__$1){
var seq__12590_12658__$1 = temp__5457__auto___12657__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12590_12658__$1)){
var c__4351__auto___12659 = cljs.core.chunk_first(seq__12590_12658__$1);
var G__12660 = cljs.core.chunk_rest(seq__12590_12658__$1);
var G__12661 = c__4351__auto___12659;
var G__12662 = cljs.core.count(c__4351__auto___12659);
var G__12663 = (0);
seq__12590_12644 = G__12660;
chunk__12592_12645 = G__12661;
count__12593_12646 = G__12662;
i__12594_12647 = G__12663;
continue;
} else {
var child_12664 = cljs.core.first(seq__12590_12658__$1);
if(cljs.core.truth_(child_12664)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12664);


var G__12665 = cljs.core.next(seq__12590_12658__$1);
var G__12666 = null;
var G__12667 = (0);
var G__12668 = (0);
seq__12590_12644 = G__12665;
chunk__12592_12645 = G__12666;
count__12593_12646 = G__12667;
i__12594_12647 = G__12668;
continue;
} else {
var G__12669 = cljs.core.next(seq__12590_12658__$1);
var G__12670 = null;
var G__12671 = (0);
var G__12672 = (0);
seq__12590_12644 = G__12669;
chunk__12592_12645 = G__12670;
count__12593_12646 = G__12671;
i__12594_12647 = G__12672;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12643);
}


var G__12673 = cljs.core.next(seq__12580_12636__$1);
var G__12674 = null;
var G__12675 = (0);
var G__12676 = (0);
seq__12580_12596 = G__12673;
chunk__12581_12597 = G__12674;
count__12582_12598 = G__12675;
i__12583_12599 = G__12676;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__12677 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__12677);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if(((!((node == null)))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__12679 = cljs.core.seq(node);
var chunk__12680 = null;
var count__12681 = (0);
var i__12682 = (0);
while(true){
if((i__12682 < count__12681)){
var n = chunk__12680.cljs$core$IIndexed$_nth$arity$2(null,i__12682);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__12683 = seq__12679;
var G__12684 = chunk__12680;
var G__12685 = count__12681;
var G__12686 = (i__12682 + (1));
seq__12679 = G__12683;
chunk__12680 = G__12684;
count__12681 = G__12685;
i__12682 = G__12686;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__12679);
if(temp__5457__auto__){
var seq__12679__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12679__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__12679__$1);
var G__12687 = cljs.core.chunk_rest(seq__12679__$1);
var G__12688 = c__4351__auto__;
var G__12689 = cljs.core.count(c__4351__auto__);
var G__12690 = (0);
seq__12679 = G__12687;
chunk__12680 = G__12688;
count__12681 = G__12689;
i__12682 = G__12690;
continue;
} else {
var n = cljs.core.first(seq__12679__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__12691 = cljs.core.next(seq__12679__$1);
var G__12692 = null;
var G__12693 = (0);
var G__12694 = (0);
seq__12679 = G__12691;
chunk__12680 = G__12692;
count__12681 = G__12693;
i__12682 = G__12694;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__12695 = shadow.dom.dom_node(new$);
var G__12696 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__12695,G__12696);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__12698 = arguments.length;
switch (G__12698) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__12701 = arguments.length;
switch (G__12701) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__12704 = arguments.length;
switch (G__12704) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__3949__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join(''));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12711 = arguments.length;
var i__4532__auto___12712 = (0);
while(true){
if((i__4532__auto___12712 < len__4531__auto___12711)){
args__4534__auto__.push((arguments[i__4532__auto___12712]));

var G__12713 = (i__4532__auto___12712 + (1));
i__4532__auto___12712 = G__12713;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__12707_12714 = cljs.core.seq(nodes);
var chunk__12708_12715 = null;
var count__12709_12716 = (0);
var i__12710_12717 = (0);
while(true){
if((i__12710_12717 < count__12709_12716)){
var node_12718 = chunk__12708_12715.cljs$core$IIndexed$_nth$arity$2(null,i__12710_12717);
fragment.appendChild(shadow.dom._to_dom(node_12718));


var G__12719 = seq__12707_12714;
var G__12720 = chunk__12708_12715;
var G__12721 = count__12709_12716;
var G__12722 = (i__12710_12717 + (1));
seq__12707_12714 = G__12719;
chunk__12708_12715 = G__12720;
count__12709_12716 = G__12721;
i__12710_12717 = G__12722;
continue;
} else {
var temp__5457__auto___12723 = cljs.core.seq(seq__12707_12714);
if(temp__5457__auto___12723){
var seq__12707_12724__$1 = temp__5457__auto___12723;
if(cljs.core.chunked_seq_QMARK_(seq__12707_12724__$1)){
var c__4351__auto___12725 = cljs.core.chunk_first(seq__12707_12724__$1);
var G__12726 = cljs.core.chunk_rest(seq__12707_12724__$1);
var G__12727 = c__4351__auto___12725;
var G__12728 = cljs.core.count(c__4351__auto___12725);
var G__12729 = (0);
seq__12707_12714 = G__12726;
chunk__12708_12715 = G__12727;
count__12709_12716 = G__12728;
i__12710_12717 = G__12729;
continue;
} else {
var node_12730 = cljs.core.first(seq__12707_12724__$1);
fragment.appendChild(shadow.dom._to_dom(node_12730));


var G__12731 = cljs.core.next(seq__12707_12724__$1);
var G__12732 = null;
var G__12733 = (0);
var G__12734 = (0);
seq__12707_12714 = G__12731;
chunk__12708_12715 = G__12732;
count__12709_12716 = G__12733;
i__12710_12717 = G__12734;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq12706){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12706));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__12735_12749 = cljs.core.seq(scripts);
var chunk__12736_12750 = null;
var count__12737_12751 = (0);
var i__12738_12752 = (0);
while(true){
if((i__12738_12752 < count__12737_12751)){
var vec__12739_12753 = chunk__12736_12750.cljs$core$IIndexed$_nth$arity$2(null,i__12738_12752);
var script_tag_12754 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12739_12753,(0),null);
var script_body_12755 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12739_12753,(1),null);
eval(script_body_12755);


var G__12756 = seq__12735_12749;
var G__12757 = chunk__12736_12750;
var G__12758 = count__12737_12751;
var G__12759 = (i__12738_12752 + (1));
seq__12735_12749 = G__12756;
chunk__12736_12750 = G__12757;
count__12737_12751 = G__12758;
i__12738_12752 = G__12759;
continue;
} else {
var temp__5457__auto___12760 = cljs.core.seq(seq__12735_12749);
if(temp__5457__auto___12760){
var seq__12735_12761__$1 = temp__5457__auto___12760;
if(cljs.core.chunked_seq_QMARK_(seq__12735_12761__$1)){
var c__4351__auto___12762 = cljs.core.chunk_first(seq__12735_12761__$1);
var G__12763 = cljs.core.chunk_rest(seq__12735_12761__$1);
var G__12764 = c__4351__auto___12762;
var G__12765 = cljs.core.count(c__4351__auto___12762);
var G__12766 = (0);
seq__12735_12749 = G__12763;
chunk__12736_12750 = G__12764;
count__12737_12751 = G__12765;
i__12738_12752 = G__12766;
continue;
} else {
var vec__12742_12767 = cljs.core.first(seq__12735_12761__$1);
var script_tag_12768 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12742_12767,(0),null);
var script_body_12769 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12742_12767,(1),null);
eval(script_body_12769);


var G__12770 = cljs.core.next(seq__12735_12761__$1);
var G__12771 = null;
var G__12772 = (0);
var G__12773 = (0);
seq__12735_12749 = G__12770;
chunk__12736_12750 = G__12771;
count__12737_12751 = G__12772;
i__12738_12752 = G__12773;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__12745){
var vec__12746 = p__12745;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12746,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12746,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__12774 = shadow.dom.dom_node(el);
var G__12775 = cls;
return goog.dom.getAncestorByClass(G__12774,G__12775);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__12777 = arguments.length;
switch (G__12777) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__12778 = shadow.dom.dom_node(el);
var G__12779 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__12778,G__12779);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__12780 = shadow.dom.dom_node(el);
var G__12781 = cljs.core.name(tag);
var G__12782 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__12780,G__12781,G__12782);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__12784 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__12784);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__12785 = shadow.dom.dom_node(dom);
var G__12786 = value;
return goog.dom.forms.setValue(G__12785,G__12786);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__12787 = cljs.core.seq(style_keys);
var chunk__12788 = null;
var count__12789 = (0);
var i__12790 = (0);
while(true){
if((i__12790 < count__12789)){
var it = chunk__12788.cljs$core$IIndexed$_nth$arity$2(null,i__12790);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__12791 = seq__12787;
var G__12792 = chunk__12788;
var G__12793 = count__12789;
var G__12794 = (i__12790 + (1));
seq__12787 = G__12791;
chunk__12788 = G__12792;
count__12789 = G__12793;
i__12790 = G__12794;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__12787);
if(temp__5457__auto__){
var seq__12787__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12787__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__12787__$1);
var G__12795 = cljs.core.chunk_rest(seq__12787__$1);
var G__12796 = c__4351__auto__;
var G__12797 = cljs.core.count(c__4351__auto__);
var G__12798 = (0);
seq__12787 = G__12795;
chunk__12788 = G__12796;
count__12789 = G__12797;
i__12790 = G__12798;
continue;
} else {
var it = cljs.core.first(seq__12787__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__12799 = cljs.core.next(seq__12787__$1);
var G__12800 = null;
var G__12801 = (0);
var G__12802 = (0);
seq__12787 = G__12799;
chunk__12788 = G__12800;
count__12789 = G__12801;
i__12790 = G__12802;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4203__auto____$1,k__4204__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k12804,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__12808 = k12804;
var G__12808__$1 = (((G__12808 instanceof cljs.core.Keyword))?G__12808.fqn:null);
switch (G__12808__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12804,else__4206__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12803){
var self__ = this;
var G__12803__$1 = this;
return (new cljs.core.RecordIter((0),G__12803__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__12809 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__12809(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12805,other12806){
var self__ = this;
var this12805__$1 = this;
return ((!((other12806 == null))) && ((this12805__$1.constructor === other12806.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12805__$1.x,other12806.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12805__$1.y,other12806.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12805__$1.__extmap,other12806.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__12803){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__12810 = cljs.core.keyword_identical_QMARK_;
var expr__12811 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__12813 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__12814 = expr__12811;
return (pred__12810.cljs$core$IFn$_invoke$arity$2 ? pred__12810.cljs$core$IFn$_invoke$arity$2(G__12813,G__12814) : pred__12810.call(null,G__12813,G__12814));
})())){
return (new shadow.dom.Coordinate(G__12803,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12815 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__12816 = expr__12811;
return (pred__12810.cljs$core$IFn$_invoke$arity$2 ? pred__12810.cljs$core$IFn$_invoke$arity$2(G__12815,G__12816) : pred__12810.call(null,G__12815,G__12816));
})())){
return (new shadow.dom.Coordinate(self__.x,G__12803,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__12803),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__12803){
var self__ = this;
var this__4202__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__12803,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return cljs.core._assoc(this__4208__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__12807){
var extmap__4236__auto__ = (function (){var G__12817 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12807,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__12807)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12817);
} else {
return G__12817;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__12807),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__12807),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__12819 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__12819);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__12820 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__12820);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__12821 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__12821);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4203__auto____$1,k__4204__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k12823,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__12827 = k12823;
var G__12827__$1 = (((G__12827 instanceof cljs.core.Keyword))?G__12827.fqn:null);
switch (G__12827__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12823,else__4206__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#shadow.dom.Size{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12822){
var self__ = this;
var G__12822__$1 = this;
return (new cljs.core.RecordIter((0),G__12822__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__12828 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__12828(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12824,other12825){
var self__ = this;
var this12824__$1 = this;
return ((!((other12825 == null))) && ((this12824__$1.constructor === other12825.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12824__$1.w,other12825.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12824__$1.h,other12825.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12824__$1.__extmap,other12825.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__12822){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__12829 = cljs.core.keyword_identical_QMARK_;
var expr__12830 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__12832 = new cljs.core.Keyword(null,"w","w",354169001);
var G__12833 = expr__12830;
return (pred__12829.cljs$core$IFn$_invoke$arity$2 ? pred__12829.cljs$core$IFn$_invoke$arity$2(G__12832,G__12833) : pred__12829.call(null,G__12832,G__12833));
})())){
return (new shadow.dom.Size(G__12822,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12834 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__12835 = expr__12830;
return (pred__12829.cljs$core$IFn$_invoke$arity$2 ? pred__12829.cljs$core$IFn$_invoke$arity$2(G__12834,G__12835) : pred__12829.call(null,G__12834,G__12835));
})())){
return (new shadow.dom.Size(self__.w,G__12822,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__12822),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__12822){
var self__ = this;
var this__4202__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__12822,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return cljs.core._assoc(this__4208__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__12826){
var extmap__4236__auto__ = (function (){var G__12836 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12826,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__12826)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12836);
} else {
return G__12836;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__12826),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__12826),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__12838 = shadow.dom.dom_node(el);
return goog.style.getSize(G__12838);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4405__auto__ = opts;
var l__4406__auto__ = a__4405__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4406__auto__)){
var G__12839 = (i + (1));
var G__12840 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__12839;
ret = G__12840;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12841){
var vec__12842 = p__12841;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12842,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12842,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent([cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__12846 = arguments.length;
switch (G__12846) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__12848_12850 = new_node;
var G__12849_12851 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__12848_12850,G__12849_12851);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__12852_12854 = new_node;
var G__12853_12855 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__12852_12854,G__12853_12855);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5455__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5455__auto__)){
var child = temp__5455__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__12856 = ps;
var G__12857 = (i + (1));
el__$1 = G__12856;
i = G__12857;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__12858 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__12858);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__12859 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__12859);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__12860 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__12860);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__12861 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12861,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12861,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12861,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__12864_12874 = cljs.core.seq(props);
var chunk__12865_12875 = null;
var count__12866_12876 = (0);
var i__12867_12877 = (0);
while(true){
if((i__12867_12877 < count__12866_12876)){
var vec__12868_12878 = chunk__12865_12875.cljs$core$IIndexed$_nth$arity$2(null,i__12867_12877);
var k_12879 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12868_12878,(0),null);
var v_12880 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12868_12878,(1),null);
el.setAttributeNS((function (){var temp__5457__auto__ = cljs.core.namespace(k_12879);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_12879),v_12880);


var G__12881 = seq__12864_12874;
var G__12882 = chunk__12865_12875;
var G__12883 = count__12866_12876;
var G__12884 = (i__12867_12877 + (1));
seq__12864_12874 = G__12881;
chunk__12865_12875 = G__12882;
count__12866_12876 = G__12883;
i__12867_12877 = G__12884;
continue;
} else {
var temp__5457__auto___12885 = cljs.core.seq(seq__12864_12874);
if(temp__5457__auto___12885){
var seq__12864_12886__$1 = temp__5457__auto___12885;
if(cljs.core.chunked_seq_QMARK_(seq__12864_12886__$1)){
var c__4351__auto___12887 = cljs.core.chunk_first(seq__12864_12886__$1);
var G__12888 = cljs.core.chunk_rest(seq__12864_12886__$1);
var G__12889 = c__4351__auto___12887;
var G__12890 = cljs.core.count(c__4351__auto___12887);
var G__12891 = (0);
seq__12864_12874 = G__12888;
chunk__12865_12875 = G__12889;
count__12866_12876 = G__12890;
i__12867_12877 = G__12891;
continue;
} else {
var vec__12871_12892 = cljs.core.first(seq__12864_12886__$1);
var k_12893 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12871_12892,(0),null);
var v_12894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12871_12892,(1),null);
el.setAttributeNS((function (){var temp__5457__auto____$1 = cljs.core.namespace(k_12893);
if(cljs.core.truth_(temp__5457__auto____$1)){
var ns = temp__5457__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_12893),v_12894);


var G__12895 = cljs.core.next(seq__12864_12886__$1);
var G__12896 = null;
var G__12897 = (0);
var G__12898 = (0);
seq__12864_12874 = G__12895;
chunk__12865_12875 = G__12896;
count__12866_12876 = G__12897;
i__12867_12877 = G__12898;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if(((!((el == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__12900 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12900,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12900,(1),null);
var seq__12903_12921 = cljs.core.seq(node_children);
var chunk__12905_12922 = null;
var count__12906_12923 = (0);
var i__12907_12924 = (0);
while(true){
if((i__12907_12924 < count__12906_12923)){
var child_struct_12925 = chunk__12905_12922.cljs$core$IIndexed$_nth$arity$2(null,i__12907_12924);
if(!((child_struct_12925 == null))){
if(typeof child_struct_12925 === 'string'){
var text_12926 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_12926),cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_12925)].join(''));
} else {
var children_12927 = shadow.dom.svg_node(child_struct_12925);
if(cljs.core.seq_QMARK_(children_12927)){
var seq__12909_12928 = cljs.core.seq(children_12927);
var chunk__12911_12929 = null;
var count__12912_12930 = (0);
var i__12913_12931 = (0);
while(true){
if((i__12913_12931 < count__12912_12930)){
var child_12932 = chunk__12911_12929.cljs$core$IIndexed$_nth$arity$2(null,i__12913_12931);
if(cljs.core.truth_(child_12932)){
node.appendChild(child_12932);


var G__12933 = seq__12909_12928;
var G__12934 = chunk__12911_12929;
var G__12935 = count__12912_12930;
var G__12936 = (i__12913_12931 + (1));
seq__12909_12928 = G__12933;
chunk__12911_12929 = G__12934;
count__12912_12930 = G__12935;
i__12913_12931 = G__12936;
continue;
} else {
var G__12937 = seq__12909_12928;
var G__12938 = chunk__12911_12929;
var G__12939 = count__12912_12930;
var G__12940 = (i__12913_12931 + (1));
seq__12909_12928 = G__12937;
chunk__12911_12929 = G__12938;
count__12912_12930 = G__12939;
i__12913_12931 = G__12940;
continue;
}
} else {
var temp__5457__auto___12941 = cljs.core.seq(seq__12909_12928);
if(temp__5457__auto___12941){
var seq__12909_12942__$1 = temp__5457__auto___12941;
if(cljs.core.chunked_seq_QMARK_(seq__12909_12942__$1)){
var c__4351__auto___12943 = cljs.core.chunk_first(seq__12909_12942__$1);
var G__12944 = cljs.core.chunk_rest(seq__12909_12942__$1);
var G__12945 = c__4351__auto___12943;
var G__12946 = cljs.core.count(c__4351__auto___12943);
var G__12947 = (0);
seq__12909_12928 = G__12944;
chunk__12911_12929 = G__12945;
count__12912_12930 = G__12946;
i__12913_12931 = G__12947;
continue;
} else {
var child_12948 = cljs.core.first(seq__12909_12942__$1);
if(cljs.core.truth_(child_12948)){
node.appendChild(child_12948);


var G__12949 = cljs.core.next(seq__12909_12942__$1);
var G__12950 = null;
var G__12951 = (0);
var G__12952 = (0);
seq__12909_12928 = G__12949;
chunk__12911_12929 = G__12950;
count__12912_12930 = G__12951;
i__12913_12931 = G__12952;
continue;
} else {
var G__12953 = cljs.core.next(seq__12909_12942__$1);
var G__12954 = null;
var G__12955 = (0);
var G__12956 = (0);
seq__12909_12928 = G__12953;
chunk__12911_12929 = G__12954;
count__12912_12930 = G__12955;
i__12913_12931 = G__12956;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_12927);
}
}


var G__12957 = seq__12903_12921;
var G__12958 = chunk__12905_12922;
var G__12959 = count__12906_12923;
var G__12960 = (i__12907_12924 + (1));
seq__12903_12921 = G__12957;
chunk__12905_12922 = G__12958;
count__12906_12923 = G__12959;
i__12907_12924 = G__12960;
continue;
} else {
var G__12961 = seq__12903_12921;
var G__12962 = chunk__12905_12922;
var G__12963 = count__12906_12923;
var G__12964 = (i__12907_12924 + (1));
seq__12903_12921 = G__12961;
chunk__12905_12922 = G__12962;
count__12906_12923 = G__12963;
i__12907_12924 = G__12964;
continue;
}
} else {
var temp__5457__auto___12965 = cljs.core.seq(seq__12903_12921);
if(temp__5457__auto___12965){
var seq__12903_12966__$1 = temp__5457__auto___12965;
if(cljs.core.chunked_seq_QMARK_(seq__12903_12966__$1)){
var c__4351__auto___12967 = cljs.core.chunk_first(seq__12903_12966__$1);
var G__12968 = cljs.core.chunk_rest(seq__12903_12966__$1);
var G__12969 = c__4351__auto___12967;
var G__12970 = cljs.core.count(c__4351__auto___12967);
var G__12971 = (0);
seq__12903_12921 = G__12968;
chunk__12905_12922 = G__12969;
count__12906_12923 = G__12970;
i__12907_12924 = G__12971;
continue;
} else {
var child_struct_12972 = cljs.core.first(seq__12903_12966__$1);
if(!((child_struct_12972 == null))){
if(typeof child_struct_12972 === 'string'){
var text_12973 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_12973),cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_12972)].join(''));
} else {
var children_12974 = shadow.dom.svg_node(child_struct_12972);
if(cljs.core.seq_QMARK_(children_12974)){
var seq__12915_12975 = cljs.core.seq(children_12974);
var chunk__12917_12976 = null;
var count__12918_12977 = (0);
var i__12919_12978 = (0);
while(true){
if((i__12919_12978 < count__12918_12977)){
var child_12979 = chunk__12917_12976.cljs$core$IIndexed$_nth$arity$2(null,i__12919_12978);
if(cljs.core.truth_(child_12979)){
node.appendChild(child_12979);


var G__12980 = seq__12915_12975;
var G__12981 = chunk__12917_12976;
var G__12982 = count__12918_12977;
var G__12983 = (i__12919_12978 + (1));
seq__12915_12975 = G__12980;
chunk__12917_12976 = G__12981;
count__12918_12977 = G__12982;
i__12919_12978 = G__12983;
continue;
} else {
var G__12984 = seq__12915_12975;
var G__12985 = chunk__12917_12976;
var G__12986 = count__12918_12977;
var G__12987 = (i__12919_12978 + (1));
seq__12915_12975 = G__12984;
chunk__12917_12976 = G__12985;
count__12918_12977 = G__12986;
i__12919_12978 = G__12987;
continue;
}
} else {
var temp__5457__auto___12988__$1 = cljs.core.seq(seq__12915_12975);
if(temp__5457__auto___12988__$1){
var seq__12915_12989__$1 = temp__5457__auto___12988__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12915_12989__$1)){
var c__4351__auto___12990 = cljs.core.chunk_first(seq__12915_12989__$1);
var G__12991 = cljs.core.chunk_rest(seq__12915_12989__$1);
var G__12992 = c__4351__auto___12990;
var G__12993 = cljs.core.count(c__4351__auto___12990);
var G__12994 = (0);
seq__12915_12975 = G__12991;
chunk__12917_12976 = G__12992;
count__12918_12977 = G__12993;
i__12919_12978 = G__12994;
continue;
} else {
var child_12995 = cljs.core.first(seq__12915_12989__$1);
if(cljs.core.truth_(child_12995)){
node.appendChild(child_12995);


var G__12996 = cljs.core.next(seq__12915_12989__$1);
var G__12997 = null;
var G__12998 = (0);
var G__12999 = (0);
seq__12915_12975 = G__12996;
chunk__12917_12976 = G__12997;
count__12918_12977 = G__12998;
i__12919_12978 = G__12999;
continue;
} else {
var G__13000 = cljs.core.next(seq__12915_12989__$1);
var G__13001 = null;
var G__13002 = (0);
var G__13003 = (0);
seq__12915_12975 = G__13000;
chunk__12917_12976 = G__13001;
count__12918_12977 = G__13002;
i__12919_12978 = G__13003;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_12974);
}
}


var G__13004 = cljs.core.next(seq__12903_12966__$1);
var G__13005 = null;
var G__13006 = (0);
var G__13007 = (0);
seq__12903_12921 = G__13004;
chunk__12905_12922 = G__13005;
count__12906_12923 = G__13006;
i__12907_12924 = G__13007;
continue;
} else {
var G__13008 = cljs.core.next(seq__12903_12966__$1);
var G__13009 = null;
var G__13010 = (0);
var G__13011 = (0);
seq__12903_12921 = G__13008;
chunk__12905_12922 = G__13009;
count__12906_12923 = G__13010;
i__12907_12924 = G__13011;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__13012_13018 = shadow.dom._to_svg;
var G__13013_13019 = "string";
var G__13014_13020 = ((function (G__13012_13018,G__13013_13019){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__13012_13018,G__13013_13019))
;
goog.object.set(G__13012_13018,G__13013_13019,G__13014_13020);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__13015_13021 = shadow.dom._to_svg;
var G__13016_13022 = "null";
var G__13017_13023 = ((function (G__13015_13021,G__13016_13022){
return (function (_){
return null;
});})(G__13015_13021,G__13016_13022))
;
goog.object.set(G__13015_13021,G__13016_13022,G__13017_13023);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4534__auto__ = [];
var len__4531__auto___13026 = arguments.length;
var i__4532__auto___13027 = (0);
while(true){
if((i__4532__auto___13027 < len__4531__auto___13026)){
args__4534__auto__.push((arguments[i__4532__auto___13027]));

var G__13028 = (i__4532__auto___13027 + (1));
i__4532__auto___13027 = G__13028;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq13024){
var G__13025 = cljs.core.first(seq13024);
var seq13024__$1 = cljs.core.next(seq13024);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13025,seq13024__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__13030 = arguments.length;
switch (G__13030) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__13031_13046 = shadow.dom.dom_node(el);
var G__13032_13047 = cljs.core.name(event);
var G__13033_13048 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__13031_13046,G__13032_13047,G__13033_13048) : shadow.dom.dom_listen.call(null,G__13031_13046,G__13032_13047,G__13033_13048));

if(cljs.core.truth_((function (){var and__3938__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__3938__auto__)){
return !(once_or_cleanup === true);
} else {
return and__3938__auto__;
}
})())){
var c__10225__auto___13049 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10225__auto___13049,buf,chan,event_fn){
return (function (){
var f__10226__auto__ = (function (){var switch__9843__auto__ = ((function (c__10225__auto___13049,buf,chan,event_fn){
return (function (state_13038){
var state_val_13039 = (state_13038[(1)]);
if((state_val_13039 === (1))){
var state_13038__$1 = state_13038;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13038__$1,(2),once_or_cleanup);
} else {
if((state_val_13039 === (2))){
var inst_13035 = (state_13038[(2)]);
var inst_13036 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_13038__$1 = (function (){var statearr_13040 = state_13038;
(statearr_13040[(7)] = inst_13035);

return statearr_13040;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_13038__$1,inst_13036);
} else {
return null;
}
}
});})(c__10225__auto___13049,buf,chan,event_fn))
;
return ((function (switch__9843__auto__,c__10225__auto___13049,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__9844__auto__ = null;
var shadow$dom$state_machine__9844__auto____0 = (function (){
var statearr_13041 = [null,null,null,null,null,null,null,null];
(statearr_13041[(0)] = shadow$dom$state_machine__9844__auto__);

(statearr_13041[(1)] = (1));

return statearr_13041;
});
var shadow$dom$state_machine__9844__auto____1 = (function (state_13038){
while(true){
var ret_value__9845__auto__ = (function (){try{while(true){
var result__9846__auto__ = switch__9843__auto__(state_13038);
if(cljs.core.keyword_identical_QMARK_(result__9846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9846__auto__;
}
break;
}
}catch (e13042){if((e13042 instanceof Object)){
var ex__9847__auto__ = e13042;
var statearr_13043_13050 = state_13038;
(statearr_13043_13050[(5)] = ex__9847__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13042;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13051 = state_13038;
state_13038 = G__13051;
continue;
} else {
return ret_value__9845__auto__;
}
break;
}
});
shadow$dom$state_machine__9844__auto__ = function(state_13038){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__9844__auto____0.call(this);
case 1:
return shadow$dom$state_machine__9844__auto____1.call(this,state_13038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__9844__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__9844__auto____0;
shadow$dom$state_machine__9844__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__9844__auto____1;
return shadow$dom$state_machine__9844__auto__;
})()
;})(switch__9843__auto__,c__10225__auto___13049,buf,chan,event_fn))
})();
var state__10227__auto__ = (function (){var statearr_13044 = (f__10226__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10226__auto__.cljs$core$IFn$_invoke$arity$0() : f__10226__auto__.call(null));
(statearr_13044[(6)] = c__10225__auto___13049);

return statearr_13044;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10227__auto__);
});})(c__10225__auto___13049,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
