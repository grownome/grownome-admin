goog.provide('grownome_admin.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('grownome_admin.events');
goog.require('grownome_admin.routes');
goog.require('grownome_admin.views');
goog.require('grownome_admin.config');
goog.require('com.degel.re_frame_firebase');
grownome_admin.core.dev_setup = (function grownome_admin$core$dev_setup(){
if(grownome_admin.config.debug_QMARK_){
cljs.core.enable_console_print_BANG_();

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
grownome_admin.core.mount_root = (function grownome_admin$core$mount_root(){
(re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0 ? re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0() : re_frame.core.clear_subscription_cache_BANG_.call(null));

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [grownome_admin.views.main_panel], null),document.getElementById("app"));
});
if((typeof grownome_admin !== 'undefined') && (typeof grownome_admin.core !== 'undefined') && (typeof grownome_admin.core.firebase_app_info !== 'undefined')){
} else {
grownome_admin.core.firebase_app_info = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"apiKey","apiKey",-942818613),"AIzaSyDjJRXjfKE7HbqVVEqYbE_o1WhCT9HZUWk",new cljs.core.Keyword(null,"authDomain","authDomain",-1125516118),"grownome-app.firebaseapp.com",new cljs.core.Keyword(null,"databaseURL","databaseURL",265559722),"https://grownome-app.firebaseio.com",new cljs.core.Keyword(null,"storageBucket","storageBucket",1729567801),"grownome-app.appspot.com",new cljs.core.Keyword(null,"projectId","projectId",-1551013096),"grownome-app"], null);
}
grownome_admin.core.init = (function grownome_admin$core$init(){
grownome_admin.routes.app_routes();

com.degel.re_frame_firebase.init.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"firebase-app-info","firebase-app-info",507617607),grownome_admin.core.firebase_app_info,new cljs.core.Keyword(null,"get-user-sub","get-user-sub",1337447940),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("grownome-admin.events","user","grownome-admin.events/user",364203763)], null),new cljs.core.Keyword(null,"set-user-event","set-user-event",-2139443858),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("grownome-admin.events","set-user","grownome-admin.events/set-user",1696807598)], null),new cljs.core.Keyword(null,"default-error-handler","default-error-handler",2070828115),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("grownome-admin.events","firebase-error","grownome-admin.events/firebase-error",-409397621)], null)], 0));

var G__10145_10146 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("grownome-admin.events","initialize-db","grownome-admin.events/initialize-db",-1034415433)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__10145_10146) : re_frame.core.dispatch_sync.call(null,G__10145_10146));

grownome_admin.core.dev_setup();

return grownome_admin.core.mount_root();
});
goog.exportSymbol('grownome_admin.core.init', grownome_admin.core.init);

//# sourceMappingURL=grownome_admin.core.js.map
