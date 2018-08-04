goog.provide('grownome_admin.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('grownome_admin.events');
goog.require('re_com.core');
goog.require('re_com.buttons');
goog.require('re_com.util');
goog.require('re_com.modal_panel');
goog.require('grownome_admin.subs');
goog.require('reagent.core');
grownome_admin.views.link_to_home_page = (function grownome_admin$views$link_to_home_page(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink_href,new cljs.core.Keyword(null,"label","label",1718410804),"Home Page",new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null);
});
grownome_admin.views.link_to_devices_page = (function grownome_admin$views$link_to_devices_page(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink_href,new cljs.core.Keyword(null,"label","label",1718410804),"Devices",new cljs.core.Keyword(null,"href","href",-793805698),"#/devices"], null);
});
grownome_admin.views.link_to_customers_page = (function grownome_admin$views$link_to_customers_page(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink_href,new cljs.core.Keyword(null,"label","label",1718410804),"Customers",new cljs.core.Keyword(null,"href","href",-793805698),"#/customers"], null);
});
grownome_admin.views.home_panel = (function grownome_admin$views$home_panel(){
return null;
});
grownome_admin.views.device_row = (function grownome_admin$views$device_row(device){
var edit_mode_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var owned_val = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var link_val = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var status = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var status_tooltip = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
return ((function (edit_mode_QMARK_,owned_val,link_val,status,status_tooltip){
return (function (device__$1){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-div-table-row",new cljs.core.Keyword(null,"width","width",-384071477),"1060px",new cljs.core.Keyword(null,"gap","gap",80255254),"15px",new cljs.core.Keyword(null,"children","children",-940561982),((cljs.core.not(cljs.core.deref(edit_mode_QMARK_)))?new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"initial",new cljs.core.Keyword(null,"width","width",-384071477),"1px",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),""], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"initial",new cljs.core.Keyword(null,"width","width",-384071477),"160px",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,cljs.core.get.cljs$core$IFn$_invoke$arity$3(device__$1,"deviceName","Default Value")], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"initial",new cljs.core.Keyword(null,"width","width",-384071477),"100px",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,cljs.core.get.cljs$core$IFn$_invoke$arity$3(device__$1,"owned","Default Value")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"17px"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"initial",new cljs.core.Keyword(null,"width","width",-384071477),"115px",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,cljs.core.get.cljs$core$IFn$_invoke$arity$3(device__$1,"ownedBy","Not Owned")], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"initial",new cljs.core.Keyword(null,"width","width",-384071477),"185px",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,cljs.core.get.cljs$core$IFn$_invoke$arity$3(device__$1,"initialStateLink","Default Value")], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"initial",new cljs.core.Keyword(null,"width","width",-384071477),"180px",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,cljs.core.get.cljs$core$IFn$_invoke$arity$3(device__$1,"number","Default Value")], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"initial",new cljs.core.Keyword(null,"width","width",-384071477),"170px",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,cljs.core.get.cljs$core$IFn$_invoke$arity$3(device__$1,"assignedDate","Default Value")], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.buttons.md_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi zmdi-edit",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (edit_mode_QMARK_,owned_val,link_val,status,status_tooltip){
return (function (){
return cljs.core.reset_BANG_(edit_mode_QMARK_,true);
});})(edit_mode_QMARK_,owned_val,link_val,status,status_tooltip))
], null)], null):new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"initial",new cljs.core.Keyword(null,"width","width",-384071477),"1px",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),""], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"initial",new cljs.core.Keyword(null,"width","width",-384071477),"160px",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,cljs.core.get.cljs$core$IFn$_invoke$arity$3(device__$1,"deviceName","Default Value")], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"model","model",331153215),owned_val,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (edit_mode_QMARK_,owned_val,link_val,status,status_tooltip){
return (function (p1__9818_SHARP_){
var G__9827_9842 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("grownome-admin.events","owned-updatedb","grownome-admin.events/owned-updatedb",1383113798),owned_val], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__9827_9842) : re_frame.core.dispatch.call(null,G__9827_9842));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["things are triggering"], 0));

return cljs.core.reset_BANG_(owned_val,p1__9818_SHARP_);
});})(edit_mode_QMARK_,owned_val,link_val,status,status_tooltip))
,new cljs.core.Keyword(null,"width","width",-384071477),"100px",new cljs.core.Keyword(null,"height","height",1025178622),"20px"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"17px"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"initial",new cljs.core.Keyword(null,"width","width",-384071477),"115px",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,cljs.core.get.cljs$core$IFn$_invoke$arity$3(device__$1,"ownedBy","Not Owned")], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"model","model",331153215),link_val,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (edit_mode_QMARK_,owned_val,link_val,status,status_tooltip){
return (function (p1__9819_SHARP_){
var G__9830_9843 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("grownome-admin.events","owned-updatedb","grownome-admin.events/owned-updatedb",1383113798),owned_val], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__9830_9843) : re_frame.core.dispatch.call(null,G__9830_9843));

return cljs.core.reset_BANG_(link_val,p1__9819_SHARP_);
});})(edit_mode_QMARK_,owned_val,link_val,status,status_tooltip))
,new cljs.core.Keyword(null,"width","width",-384071477),"185px",new cljs.core.Keyword(null,"height","height",1025178622),"20px"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"initial",new cljs.core.Keyword(null,"width","width",-384071477),"180px",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,cljs.core.get.cljs$core$IFn$_invoke$arity$3(device__$1,"number","Default Value")], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"initial",new cljs.core.Keyword(null,"width","width",-384071477),"170px",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,cljs.core.get.cljs$core$IFn$_invoke$arity$3(device__$1,"assignedDate","Default Value")], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.buttons.md_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi zmdi-edit",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (edit_mode_QMARK_,owned_val,link_val,status,status_tooltip){
return (function (){
var G__9832_9844 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("grownome-admin.events","owned-updatedb","grownome-admin.events/owned-updatedb",1383113798),owned_val], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__9832_9844) : re_frame.core.dispatch.call(null,G__9832_9844));

var G__9833_9845 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("grownome-admin.events","islink-updatedb","grownome-admin.events/islink-updatedb",864782381),link_val], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__9833_9845) : re_frame.core.dispatch.call(null,G__9833_9845));

return cljs.core.reset_BANG_(edit_mode_QMARK_,false);
});})(edit_mode_QMARK_,owned_val,link_val,status,status_tooltip))
], null)], null))], null);
});
;})(edit_mode_QMARK_,owned_val,link_val,status,status_tooltip))
});
grownome_admin.views.devices_list = (function grownome_admin$views$devices_list(){
var sorted_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var sorted_field = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var inverted_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var devices = (function (){var G__9846 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("grownome-admin.subs","devices-sorted","grownome-admin.subs/devices-sorted",-313174229),sorted_QMARK_,sorted_field,inverted_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__9846) : re_frame.core.subscribe.call(null,G__9846));
})();
return ((function (sorted_QMARK_,sorted_field,inverted_QMARK_,devices){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"1060px",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0"], null),new cljs.core.Keyword(null,"gap","gap",80255254),"0px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"initial",new cljs.core.Keyword(null,"width","width",-384071477),"160px",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830),new cljs.core.Keyword(null,"label","label",1718410804),"Device Name"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"15px"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"initial",new cljs.core.Keyword(null,"width","width",-384071477),"100px",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830),new cljs.core.Keyword(null,"label","label",1718410804),"Owned?"], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.buttons.md_icon_button,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"smaller","smaller",-1619801498),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"20px"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (sorted_QMARK_,sorted_field,inverted_QMARK_,devices){
return (function (){
cljs.core.reset_BANG_(sorted_QMARK_,true);

cljs.core.reset_BANG_(sorted_field,"owned");

return cljs.core.reset_BANG_(inverted_QMARK_,false);
});})(sorted_QMARK_,sorted_field,inverted_QMARK_,devices))
,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi zmdi-arrow-back zmdi-hc-rotate-90"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.buttons.md_icon_button,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"smaller","smaller",-1619801498),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"20px"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (sorted_QMARK_,sorted_field,inverted_QMARK_,devices){
return (function (){
cljs.core.reset_BANG_(sorted_QMARK_,true);

cljs.core.reset_BANG_(sorted_field,"owned");

return cljs.core.reset_BANG_(inverted_QMARK_,true);
});})(sorted_QMARK_,sorted_field,inverted_QMARK_,devices))
,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi zmdi-arrow-forward zmdi-hc-rotate-90"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"15px"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"initial",new cljs.core.Keyword(null,"width","width",-384071477),"115px",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830),new cljs.core.Keyword(null,"label","label",1718410804),"Owned By"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"15px"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"initial",new cljs.core.Keyword(null,"width","width",-384071477),"185px",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830),new cljs.core.Keyword(null,"label","label",1718410804),"Initial State Link"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"15px"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"initial",new cljs.core.Keyword(null,"width","width",-384071477),"170px",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830),new cljs.core.Keyword(null,"label","label",1718410804),"Device Number"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"15px"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"initial",new cljs.core.Keyword(null,"width","width",-384071477),"170px",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830),new cljs.core.Keyword(null,"label","label",1718410804),"Assigned Date"], null)], null)], null)], null),(function (){var temp__5455__auto__ = cljs.core.deref(devices);
if(cljs.core.truth_(temp__5455__auto__)){
var ds = temp__5455__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4324__auto__ = ((function (ds,temp__5455__auto__,sorted_QMARK_,sorted_field,inverted_QMARK_,devices){
return (function grownome_admin$views$devices_list_$_iter__9847(s__9848){
return (new cljs.core.LazySeq(null,((function (ds,temp__5455__auto__,sorted_QMARK_,sorted_field,inverted_QMARK_,devices){
return (function (){
var s__9848__$1 = s__9848;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__9848__$1);
if(temp__5457__auto__){
var s__9848__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__9848__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__9848__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__9850 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__9849 = (0);
while(true){
if((i__9849 < size__4323__auto__)){
var d = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__9849);
cljs.core.chunk_append(b__9850,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [grownome_admin.views.device_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(d)], null));

var G__9851 = (i__9849 + (1));
i__9849 = G__9851;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__9850),grownome_admin$views$devices_list_$_iter__9847(cljs.core.chunk_rest(s__9848__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__9850),null);
}
} else {
var d = cljs.core.first(s__9848__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [grownome_admin.views.device_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(d)], null),grownome_admin$views$devices_list_$_iter__9847(cljs.core.rest(s__9848__$2)));
}
} else {
return null;
}
break;
}
});})(ds,temp__5455__auto__,sorted_QMARK_,sorted_field,inverted_QMARK_,devices))
,null,null));
});})(ds,temp__5455__auto__,sorted_QMARK_,sorted_field,inverted_QMARK_,devices))
;
return iter__4324__auto__(ds);
})())], null)], null)], null);
} else {
return null;
}
})()], null)], null);
});
;})(sorted_QMARK_,sorted_field,inverted_QMARK_,devices))
});
grownome_admin.views.devices_panel = (function grownome_admin$views$devices_panel(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"1em",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"Refresh Device Listing",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__9852 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("grownome-admin.events","device-get","grownome-admin.events/device-get",-1236031628)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__9852) : re_frame.core.dispatch.call(null,G__9852));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [grownome_admin.views.devices_list], null)], null)], null);
});
grownome_admin.views.customers_title = (function grownome_admin$views$customers_title(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"This is the Customers Page.",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null);
});
grownome_admin.views.customers_panel = (function grownome_admin$views$customers_panel(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"1em",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [grownome_admin.views.customers_title], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [grownome_admin.views.link_to_home_page], null)], null)], null);
});
grownome_admin.views.useful_hyperlinks = (function grownome_admin$views$useful_hyperlinks(){
var target = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("_blank");
var href_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return ((function (target,href_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink_href,new cljs.core.Keyword(null,"label","label",1718410804),"Open Firebase",new cljs.core.Keyword(null,"href","href",-793805698),(cljs.core.truth_(href_QMARK_)?"https://console.firebase.google.com/u/0/project/grownome-app/overview":null),new cljs.core.Keyword(null,"target","target",253001721),(cljs.core.truth_(href_QMARK_)?target:null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink_href,new cljs.core.Keyword(null,"label","label",1718410804),"Open Pivotal",new cljs.core.Keyword(null,"href","href",-793805698),(cljs.core.truth_(href_QMARK_)?"https://www.pivotaltracker.com/n/projects/2140870":null),new cljs.core.Keyword(null,"target","target",253001721),(cljs.core.truth_(href_QMARK_)?target:null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink_href,new cljs.core.Keyword(null,"label","label",1718410804),"Open Google Cloud",new cljs.core.Keyword(null,"href","href",-793805698),(cljs.core.truth_(href_QMARK_)?"https://console.cloud.google.com/home/dashboard?project=grownome&_ga=2.67711889.-1279443608.1514820147":null),new cljs.core.Keyword(null,"target","target",253001721),(cljs.core.truth_(href_QMARK_)?target:null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink_href,new cljs.core.Keyword(null,"label","label",1718410804),"Open Google Drive",new cljs.core.Keyword(null,"href","href",-793805698),(cljs.core.truth_(href_QMARK_)?"https://drive.google.com/drive/u/0/my-drive":null),new cljs.core.Keyword(null,"target","target",253001721),(cljs.core.truth_(href_QMARK_)?target:null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink_href,new cljs.core.Keyword(null,"label","label",1718410804),"Open Resin.io",new cljs.core.Keyword(null,"href","href",-793805698),(cljs.core.truth_(href_QMARK_)?"https://dashboard.resin.io/login":null),new cljs.core.Keyword(null,"target","target",253001721),(cljs.core.truth_(href_QMARK_)?target:null)], null)], null)], null);
});
;})(target,href_QMARK_))
});
grownome_admin.views.nav_panel = (function grownome_admin$views$nav_panel(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"5px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Pages",new cljs.core.Keyword(null,"underline?","underline?",-1123247603),true,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level4","level4",1467985519)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [grownome_admin.views.link_to_home_page], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [grownome_admin.views.link_to_devices_page], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [grownome_admin.views.link_to_customers_page], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Links",new cljs.core.Keyword(null,"underline?","underline?",-1123247603),true,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level4","level4",1467985519)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [grownome_admin.views.useful_hyperlinks], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"140px"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"Sign In",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__9858 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("grownome-admin.events","sign-in","grownome-admin.events/sign-in",-162709345)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__9858) : re_frame.core.dispatch.call(null,G__9858));
})], null)], null)], null);
});
grownome_admin.views.panels = (function grownome_admin$views$panels(panel_name){
var G__9873 = panel_name;
var G__9873__$1 = (((G__9873 instanceof cljs.core.Keyword))?G__9873.fqn:null);
switch (G__9873__$1) {
case "home-panel":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [grownome_admin.views.home_panel], null);

break;
case "devices-panel":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [grownome_admin.views.devices_panel], null);

break;
case "customers-panel":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [grownome_admin.views.customers_panel], null);

break;
case "nav-panel":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [grownome_admin.views.nav_panel], null);

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);

}
});
grownome_admin.views.show_panel = (function grownome_admin$views$show_panel(panel_name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [grownome_admin.views.panels,panel_name], null);
});
grownome_admin.views.main_panel = (function grownome_admin$views$main_panel(){
var active_panel = (function (){var G__9886 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("grownome-admin.subs","active-panel","grownome-admin.subs/active-panel",-1633834041)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__9886) : re_frame.core.subscribe.call(null,G__9886));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"img/Logo_full_green.png",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"500px",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"100px",new cljs.core.Keyword(null,"width","width",-384071477),"auto",new cljs.core.Keyword(null,"height","height",1025178622),"auto"], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133),new cljs.core.Keyword(null,"label","label",1718410804),["Admin Panel"].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"30px",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"20px"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"height","height",1025178622),"100px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"150px",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"20px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"40px"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [grownome_admin.views.panels,new cljs.core.Keyword(null,"nav-panel","nav-panel",533208582)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"40px"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [grownome_admin.views.panels,cljs.core.deref(active_panel)], null)], null)], null)], null)], null)], null);
});

//# sourceMappingURL=grownome_admin.views.js.map
