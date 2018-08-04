goog.provide('grownome_admin.routes');
goog.require('cljs.core');
goog.require('goog.History');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('re_frame.core');
goog.require('grownome_admin.events');
grownome_admin.routes.hook_browser_navigation_BANG_ = (function grownome_admin$routes$hook_browser_navigation_BANG_(){
var G__9803 = (new goog.History());
var G__9804_9807 = G__9803;
var G__9805_9808 = goog.history.EventType.NAVIGATE;
var G__9806_9809 = ((function (G__9804_9807,G__9805_9808,G__9803){
return (function (event){
return secretary.core.dispatch_BANG_(event.token);
});})(G__9804_9807,G__9805_9808,G__9803))
;
goog.events.listen(G__9804_9807,G__9805_9808,G__9806_9809);

G__9803.setEnabled(true);

return G__9803;
});
grownome_admin.routes.app_routes = (function grownome_admin$routes$app_routes(){
secretary.core.set_config_BANG_(new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__5040__auto___9838 = (function (params__5041__auto__){
if(cljs.core.map_QMARK_(params__5041__auto__)){
var map__9811 = params__5041__auto__;
var map__9811__$1 = ((((!((map__9811 == null)))?(((((map__9811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9811.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9811):map__9811);
var G__9813 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("grownome-admin.events","set-active-panel","grownome-admin.events/set-active-panel",218646721),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__9813) : re_frame.core.dispatch.call(null,G__9813));
} else {
if(cljs.core.vector_QMARK_(params__5041__auto__)){
var vec__9814 = params__5041__auto__;
var G__9817 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("grownome-admin.events","set-active-panel","grownome-admin.events/set-active-panel",218646721),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__9817) : re_frame.core.dispatch.call(null,G__9817));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__5040__auto___9838);


var action__5040__auto___9839 = (function (params__5041__auto__){
if(cljs.core.map_QMARK_(params__5041__auto__)){
var map__9820 = params__5041__auto__;
var map__9820__$1 = ((((!((map__9820 == null)))?(((((map__9820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9820):map__9820);
var G__9822 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("grownome-admin.events","set-active-panel","grownome-admin.events/set-active-panel",218646721),new cljs.core.Keyword(null,"devices-panel","devices-panel",-1077541922)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__9822) : re_frame.core.dispatch.call(null,G__9822));
} else {
if(cljs.core.vector_QMARK_(params__5041__auto__)){
var vec__9823 = params__5041__auto__;
var G__9826 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("grownome-admin.events","set-active-panel","grownome-admin.events/set-active-panel",218646721),new cljs.core.Keyword(null,"devices-panel","devices-panel",-1077541922)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__9826) : re_frame.core.dispatch.call(null,G__9826));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/devices",action__5040__auto___9839);


var action__5040__auto___9840 = (function (params__5041__auto__){
if(cljs.core.map_QMARK_(params__5041__auto__)){
var map__9828 = params__5041__auto__;
var map__9828__$1 = ((((!((map__9828 == null)))?(((((map__9828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9828.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9828):map__9828);
var G__9831 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("grownome-admin.events","set-active-panel","grownome-admin.events/set-active-panel",218646721),new cljs.core.Keyword(null,"customers-panel","customers-panel",1920391764)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__9831) : re_frame.core.dispatch.call(null,G__9831));
} else {
if(cljs.core.vector_QMARK_(params__5041__auto__)){
var vec__9834 = params__5041__auto__;
var G__9837 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("grownome-admin.events","set-active-panel","grownome-admin.events/set-active-panel",218646721),new cljs.core.Keyword(null,"customers-panel","customers-panel",1920391764)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__9837) : re_frame.core.dispatch.call(null,G__9837));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/customers",action__5040__auto___9840);


return grownome_admin.routes.hook_browser_navigation_BANG_();
});

//# sourceMappingURL=grownome_admin.routes.js.map
