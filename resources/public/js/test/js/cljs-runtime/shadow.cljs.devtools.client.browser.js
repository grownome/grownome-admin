goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return cljs.core._vreset_BANG_(shadow.cljs.devtools.client.browser.active_modules_ref,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(shadow.cljs.devtools.client.browser.active_modules_ref),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4534__auto__ = [];
var len__4531__auto___13868 = arguments.length;
var i__4532__auto___13869 = (0);
while(true){
if((i__4532__auto___13869 < len__4531__auto___13868)){
args__4534__auto__.push((arguments[i__4532__auto___13869]));

var G__13870 = (i__4532__auto___13869 + (1));
i__4532__auto___13869 = G__13870;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq13866){
var G__13867 = cljs.core.first(seq13866);
var seq13866__$1 = cljs.core.next(seq13866);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13867,seq13866__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5455__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5455__auto__)){
var s = temp__5455__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__13871){
var map__13872 = p__13871;
var map__13872__$1 = ((((!((map__13872 == null)))?(((((map__13872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13872.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13872):map__13872);
var src = map__13872__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13872__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13872__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__3949__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__3949__auto__){
return or__3949__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__13874 = cljs.core.seq(sources);
var chunk__13875 = null;
var count__13876 = (0);
var i__13877 = (0);
while(true){
if((i__13877 < count__13876)){
var map__13878 = chunk__13875.cljs$core$IIndexed$_nth$arity$2(null,i__13877);
var map__13878__$1 = ((((!((map__13878 == null)))?(((((map__13878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13878.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13878):map__13878);
var src = map__13878__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13878__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13878__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13878__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13878__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__13882 = seq__13874;
var G__13883 = chunk__13875;
var G__13884 = count__13876;
var G__13885 = (i__13877 + (1));
seq__13874 = G__13882;
chunk__13875 = G__13883;
count__13876 = G__13884;
i__13877 = G__13885;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__13874);
if(temp__5457__auto__){
var seq__13874__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13874__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__13874__$1);
var G__13886 = cljs.core.chunk_rest(seq__13874__$1);
var G__13887 = c__4351__auto__;
var G__13888 = cljs.core.count(c__4351__auto__);
var G__13889 = (0);
seq__13874 = G__13886;
chunk__13875 = G__13887;
count__13876 = G__13888;
i__13877 = G__13889;
continue;
} else {
var map__13880 = cljs.core.first(seq__13874__$1);
var map__13880__$1 = ((((!((map__13880 == null)))?(((((map__13880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13880.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13880):map__13880);
var src = map__13880__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13880__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13880__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13880__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13880__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__13890 = cljs.core.next(seq__13874__$1);
var G__13891 = null;
var G__13892 = (0);
var G__13893 = (0);
seq__13874 = G__13890;
chunk__13875 = G__13891;
count__13876 = G__13892;
i__13877 = G__13893;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__13894 = cljs.core.seq(js_requires);
var chunk__13895 = null;
var count__13896 = (0);
var i__13897 = (0);
while(true){
if((i__13897 < count__13896)){
var js_ns = chunk__13895.cljs$core$IIndexed$_nth$arity$2(null,i__13897);
var require_str_13898 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_13898);


var G__13899 = seq__13894;
var G__13900 = chunk__13895;
var G__13901 = count__13896;
var G__13902 = (i__13897 + (1));
seq__13894 = G__13899;
chunk__13895 = G__13900;
count__13896 = G__13901;
i__13897 = G__13902;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__13894);
if(temp__5457__auto__){
var seq__13894__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13894__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__13894__$1);
var G__13903 = cljs.core.chunk_rest(seq__13894__$1);
var G__13904 = c__4351__auto__;
var G__13905 = cljs.core.count(c__4351__auto__);
var G__13906 = (0);
seq__13894 = G__13903;
chunk__13895 = G__13904;
count__13896 = G__13905;
i__13897 = G__13906;
continue;
} else {
var js_ns = cljs.core.first(seq__13894__$1);
var require_str_13907 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_13907);


var G__13908 = cljs.core.next(seq__13894__$1);
var G__13909 = null;
var G__13910 = (0);
var G__13911 = (0);
seq__13894 = G__13908;
chunk__13895 = G__13909;
count__13896 = G__13910;
i__13897 = G__13911;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__13912 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__13912) : callback.call(null,G__13912));
} else {
var G__13913 = shadow.cljs.devtools.client.env.files_url();
var G__13914 = ((function (G__13913){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__13913))
;
var G__13915 = "POST";
var G__13916 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__13917 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__13913,G__13914,G__13915,G__13916,G__13917);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__13919){
var map__13920 = p__13919;
var map__13920__$1 = ((((!((map__13920 == null)))?(((((map__13920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13920.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13920):map__13920);
var msg = map__13920__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13920__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13920__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__13922 = info;
var map__13922__$1 = ((((!((map__13922 == null)))?(((((map__13922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13922.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13922):map__13922);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13922__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13922__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (map__13922,map__13922__$1,sources,compiled,map__13920,map__13920__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__13924(s__13925){
return (new cljs.core.LazySeq(null,((function (map__13922,map__13922__$1,sources,compiled,map__13920,map__13920__$1,msg,info,reload_info){
return (function (){
var s__13925__$1 = s__13925;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13925__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var map__13930 = cljs.core.first(xs__6012__auto__);
var map__13930__$1 = ((((!((map__13930 == null)))?(((((map__13930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13930):map__13930);
var src = map__13930__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13930__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13930__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4320__auto__ = ((function (s__13925__$1,map__13930,map__13930__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__13922,map__13922__$1,sources,compiled,map__13920,map__13920__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__13924_$_iter__13926(s__13927){
return (new cljs.core.LazySeq(null,((function (s__13925__$1,map__13930,map__13930__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__13922,map__13922__$1,sources,compiled,map__13920,map__13920__$1,msg,info,reload_info){
return (function (){
var s__13927__$1 = s__13927;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__13927__$1);
if(temp__5457__auto____$1){
var s__13927__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13927__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13927__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13929 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13928 = (0);
while(true){
if((i__13928 < size__4323__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13928);
cljs.core.chunk_append(b__13929,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__13949 = (i__13928 + (1));
i__13928 = G__13949;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13929),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__13924_$_iter__13926(cljs.core.chunk_rest(s__13927__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13929),null);
}
} else {
var warning = cljs.core.first(s__13927__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__13924_$_iter__13926(cljs.core.rest(s__13927__$2)));
}
} else {
return null;
}
break;
}
});})(s__13925__$1,map__13930,map__13930__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__13922,map__13922__$1,sources,compiled,map__13920,map__13920__$1,msg,info,reload_info))
,null,null));
});})(s__13925__$1,map__13930,map__13930__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__13922,map__13922__$1,sources,compiled,map__13920,map__13920__$1,msg,info,reload_info))
;
var fs__4321__auto__ = cljs.core.seq(iterys__4320__auto__(warnings));
if(fs__4321__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4321__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__13924(cljs.core.rest(s__13925__$1)));
} else {
var G__13950 = cljs.core.rest(s__13925__$1);
s__13925__$1 = G__13950;
continue;
}
} else {
var G__13951 = cljs.core.rest(s__13925__$1);
s__13925__$1 = G__13951;
continue;
}
} else {
return null;
}
break;
}
});})(map__13922,map__13922__$1,sources,compiled,map__13920,map__13920__$1,msg,info,reload_info))
,null,null));
});})(map__13922,map__13922__$1,sources,compiled,map__13920,map__13920__$1,msg,info,reload_info))
;
return iter__4324__auto__(sources);
})()));
var seq__13932_13952 = cljs.core.seq(warnings);
var chunk__13933_13953 = null;
var count__13934_13954 = (0);
var i__13935_13955 = (0);
while(true){
if((i__13935_13955 < count__13934_13954)){
var map__13936_13956 = chunk__13933_13953.cljs$core$IIndexed$_nth$arity$2(null,i__13935_13955);
var map__13936_13957__$1 = ((((!((map__13936_13956 == null)))?(((((map__13936_13956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13936_13956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13936_13956):map__13936_13956);
var w_13958 = map__13936_13957__$1;
var msg_13959__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13936_13957__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_13960 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13936_13957__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_13961 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13936_13957__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_13962 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13936_13957__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_13962)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_13960),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_13961),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_13959__$1)].join(''));


var G__13963 = seq__13932_13952;
var G__13964 = chunk__13933_13953;
var G__13965 = count__13934_13954;
var G__13966 = (i__13935_13955 + (1));
seq__13932_13952 = G__13963;
chunk__13933_13953 = G__13964;
count__13934_13954 = G__13965;
i__13935_13955 = G__13966;
continue;
} else {
var temp__5457__auto___13967 = cljs.core.seq(seq__13932_13952);
if(temp__5457__auto___13967){
var seq__13932_13968__$1 = temp__5457__auto___13967;
if(cljs.core.chunked_seq_QMARK_(seq__13932_13968__$1)){
var c__4351__auto___13969 = cljs.core.chunk_first(seq__13932_13968__$1);
var G__13970 = cljs.core.chunk_rest(seq__13932_13968__$1);
var G__13971 = c__4351__auto___13969;
var G__13972 = cljs.core.count(c__4351__auto___13969);
var G__13973 = (0);
seq__13932_13952 = G__13970;
chunk__13933_13953 = G__13971;
count__13934_13954 = G__13972;
i__13935_13955 = G__13973;
continue;
} else {
var map__13938_13974 = cljs.core.first(seq__13932_13968__$1);
var map__13938_13975__$1 = ((((!((map__13938_13974 == null)))?(((((map__13938_13974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13938_13974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13938_13974):map__13938_13974);
var w_13976 = map__13938_13975__$1;
var msg_13977__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13938_13975__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_13978 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13938_13975__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_13979 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13938_13975__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_13980 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13938_13975__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_13980)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_13978),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_13979),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_13977__$1)].join(''));


var G__13981 = cljs.core.next(seq__13932_13968__$1);
var G__13982 = null;
var G__13983 = (0);
var G__13984 = (0);
seq__13932_13952 = G__13981;
chunk__13933_13953 = G__13982;
count__13934_13954 = G__13983;
i__13935_13955 = G__13984;
continue;
}
} else {
}
}
break;
}

if(!(shadow.cljs.devtools.client.env.autoload)){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__13922,map__13922__$1,sources,compiled,warnings,map__13920,map__13920__$1,msg,info,reload_info){
return (function (p__13940){
var map__13941 = p__13940;
var map__13941__$1 = ((((!((map__13941 == null)))?(((((map__13941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13941.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13941):map__13941);
var src = map__13941__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13941__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13941__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__13922,map__13922__$1,sources,compiled,warnings,map__13920,map__13920__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__13922,map__13922__$1,sources,compiled,warnings,map__13920,map__13920__$1,msg,info,reload_info){
return (function (p__13943){
var map__13944 = p__13943;
var map__13944__$1 = ((((!((map__13944 == null)))?(((((map__13944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13944.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13944):map__13944);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13944__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__13922,map__13922__$1,sources,compiled,warnings,map__13920,map__13920__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__13922,map__13922__$1,sources,compiled,warnings,map__13920,map__13920__$1,msg,info,reload_info){
return (function (p__13946){
var map__13947 = p__13946;
var map__13947__$1 = ((((!((map__13947 == null)))?(((((map__13947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13947):map__13947);
var rc = map__13947__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13947__$1,new cljs.core.Keyword(null,"module","module",1424618191));
var or__3949__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format);
if(or__3949__auto__){
return or__3949__auto__;
} else {
return shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module);
}
});})(map__13922,map__13922__$1,sources,compiled,warnings,map__13920,map__13920__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__13922,map__13922__$1,sources,compiled,warnings,map__13920,map__13920__$1,msg,info,reload_info){
return (function (p1__13918_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__13918_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__13922,map__13922__$1,sources,compiled,warnings,map__13920,map__13920__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__13985){
var map__13986 = p__13985;
var map__13986__$1 = ((((!((map__13986 == null)))?(((((map__13986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13986.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13986):map__13986);
var msg = map__13986__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13986__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__13988 = cljs.core.seq(updates);
var chunk__13990 = null;
var count__13991 = (0);
var i__13992 = (0);
while(true){
if((i__13992 < count__13991)){
var path = chunk__13990.cljs$core$IIndexed$_nth$arity$2(null,i__13992);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__13994_14018 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__13997_14019 = null;
var count__13998_14020 = (0);
var i__13999_14021 = (0);
while(true){
if((i__13999_14021 < count__13998_14020)){
var node_14022 = chunk__13997_14019.cljs$core$IIndexed$_nth$arity$2(null,i__13999_14021);
var node_uri_14023 = (function (){var G__14002 = node_14022.getAttribute("href");
return goog.Uri.parse(G__14002);
})();
var node_uri_resolved_14024 = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri_14023);
var node_abs_14025 = node_uri_resolved_14024.getPath();
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri_14023))) || (cljs.core.not(node_uri_14023.hasDomain())))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs_14025,path)))){
var new_link_14026 = (function (){var G__14003 = node_14022.cloneNode(true);
G__14003.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__14003;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0));

goog.dom.insertSiblingAfter(new_link_14026,node_14022);

goog.dom.removeNode(node_14022);


var G__14027 = seq__13994_14018;
var G__14028 = chunk__13997_14019;
var G__14029 = count__13998_14020;
var G__14030 = (i__13999_14021 + (1));
seq__13994_14018 = G__14027;
chunk__13997_14019 = G__14028;
count__13998_14020 = G__14029;
i__13999_14021 = G__14030;
continue;
} else {
var G__14031 = seq__13994_14018;
var G__14032 = chunk__13997_14019;
var G__14033 = count__13998_14020;
var G__14034 = (i__13999_14021 + (1));
seq__13994_14018 = G__14031;
chunk__13997_14019 = G__14032;
count__13998_14020 = G__14033;
i__13999_14021 = G__14034;
continue;
}
} else {
var temp__5457__auto___14035 = cljs.core.seq(seq__13994_14018);
if(temp__5457__auto___14035){
var seq__13994_14036__$1 = temp__5457__auto___14035;
if(cljs.core.chunked_seq_QMARK_(seq__13994_14036__$1)){
var c__4351__auto___14037 = cljs.core.chunk_first(seq__13994_14036__$1);
var G__14038 = cljs.core.chunk_rest(seq__13994_14036__$1);
var G__14039 = c__4351__auto___14037;
var G__14040 = cljs.core.count(c__4351__auto___14037);
var G__14041 = (0);
seq__13994_14018 = G__14038;
chunk__13997_14019 = G__14039;
count__13998_14020 = G__14040;
i__13999_14021 = G__14041;
continue;
} else {
var node_14042 = cljs.core.first(seq__13994_14036__$1);
var node_uri_14043 = (function (){var G__14004 = node_14042.getAttribute("href");
return goog.Uri.parse(G__14004);
})();
var node_uri_resolved_14044 = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri_14043);
var node_abs_14045 = node_uri_resolved_14044.getPath();
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri_14043))) || (cljs.core.not(node_uri_14043.hasDomain())))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs_14045,path)))){
var new_link_14046 = (function (){var G__14005 = node_14042.cloneNode(true);
G__14005.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__14005;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0));

goog.dom.insertSiblingAfter(new_link_14046,node_14042);

goog.dom.removeNode(node_14042);


var G__14047 = cljs.core.next(seq__13994_14036__$1);
var G__14048 = null;
var G__14049 = (0);
var G__14050 = (0);
seq__13994_14018 = G__14047;
chunk__13997_14019 = G__14048;
count__13998_14020 = G__14049;
i__13999_14021 = G__14050;
continue;
} else {
var G__14051 = cljs.core.next(seq__13994_14036__$1);
var G__14052 = null;
var G__14053 = (0);
var G__14054 = (0);
seq__13994_14018 = G__14051;
chunk__13997_14019 = G__14052;
count__13998_14020 = G__14053;
i__13999_14021 = G__14054;
continue;
}
}
} else {
}
}
break;
}


var G__14055 = seq__13988;
var G__14056 = chunk__13990;
var G__14057 = count__13991;
var G__14058 = (i__13992 + (1));
seq__13988 = G__14055;
chunk__13990 = G__14056;
count__13991 = G__14057;
i__13992 = G__14058;
continue;
} else {
var G__14059 = seq__13988;
var G__14060 = chunk__13990;
var G__14061 = count__13991;
var G__14062 = (i__13992 + (1));
seq__13988 = G__14059;
chunk__13990 = G__14060;
count__13991 = G__14061;
i__13992 = G__14062;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq(seq__13988);
if(temp__5457__auto__){
var seq__13988__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13988__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__13988__$1);
var G__14063 = cljs.core.chunk_rest(seq__13988__$1);
var G__14064 = c__4351__auto__;
var G__14065 = cljs.core.count(c__4351__auto__);
var G__14066 = (0);
seq__13988 = G__14063;
chunk__13990 = G__14064;
count__13991 = G__14065;
i__13992 = G__14066;
continue;
} else {
var path = cljs.core.first(seq__13988__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__14006_14067 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__14009_14068 = null;
var count__14010_14069 = (0);
var i__14011_14070 = (0);
while(true){
if((i__14011_14070 < count__14010_14069)){
var node_14071 = chunk__14009_14068.cljs$core$IIndexed$_nth$arity$2(null,i__14011_14070);
var node_uri_14072 = (function (){var G__14014 = node_14071.getAttribute("href");
return goog.Uri.parse(G__14014);
})();
var node_uri_resolved_14073 = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri_14072);
var node_abs_14074 = node_uri_resolved_14073.getPath();
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri_14072))) || (cljs.core.not(node_uri_14072.hasDomain())))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs_14074,path)))){
var new_link_14075 = (function (){var G__14015 = node_14071.cloneNode(true);
G__14015.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__14015;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0));

goog.dom.insertSiblingAfter(new_link_14075,node_14071);

goog.dom.removeNode(node_14071);


var G__14076 = seq__14006_14067;
var G__14077 = chunk__14009_14068;
var G__14078 = count__14010_14069;
var G__14079 = (i__14011_14070 + (1));
seq__14006_14067 = G__14076;
chunk__14009_14068 = G__14077;
count__14010_14069 = G__14078;
i__14011_14070 = G__14079;
continue;
} else {
var G__14080 = seq__14006_14067;
var G__14081 = chunk__14009_14068;
var G__14082 = count__14010_14069;
var G__14083 = (i__14011_14070 + (1));
seq__14006_14067 = G__14080;
chunk__14009_14068 = G__14081;
count__14010_14069 = G__14082;
i__14011_14070 = G__14083;
continue;
}
} else {
var temp__5457__auto___14084__$1 = cljs.core.seq(seq__14006_14067);
if(temp__5457__auto___14084__$1){
var seq__14006_14085__$1 = temp__5457__auto___14084__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14006_14085__$1)){
var c__4351__auto___14086 = cljs.core.chunk_first(seq__14006_14085__$1);
var G__14087 = cljs.core.chunk_rest(seq__14006_14085__$1);
var G__14088 = c__4351__auto___14086;
var G__14089 = cljs.core.count(c__4351__auto___14086);
var G__14090 = (0);
seq__14006_14067 = G__14087;
chunk__14009_14068 = G__14088;
count__14010_14069 = G__14089;
i__14011_14070 = G__14090;
continue;
} else {
var node_14091 = cljs.core.first(seq__14006_14085__$1);
var node_uri_14092 = (function (){var G__14016 = node_14091.getAttribute("href");
return goog.Uri.parse(G__14016);
})();
var node_uri_resolved_14093 = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri_14092);
var node_abs_14094 = node_uri_resolved_14093.getPath();
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri_14092))) || (cljs.core.not(node_uri_14092.hasDomain())))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs_14094,path)))){
var new_link_14095 = (function (){var G__14017 = node_14091.cloneNode(true);
G__14017.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__14017;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0));

goog.dom.insertSiblingAfter(new_link_14095,node_14091);

goog.dom.removeNode(node_14091);


var G__14096 = cljs.core.next(seq__14006_14085__$1);
var G__14097 = null;
var G__14098 = (0);
var G__14099 = (0);
seq__14006_14067 = G__14096;
chunk__14009_14068 = G__14097;
count__14010_14069 = G__14098;
i__14011_14070 = G__14099;
continue;
} else {
var G__14100 = cljs.core.next(seq__14006_14085__$1);
var G__14101 = null;
var G__14102 = (0);
var G__14103 = (0);
seq__14006_14067 = G__14100;
chunk__14009_14068 = G__14101;
count__14010_14069 = G__14102;
i__14011_14070 = G__14103;
continue;
}
}
} else {
}
}
break;
}


var G__14104 = cljs.core.next(seq__13988__$1);
var G__14105 = null;
var G__14106 = (0);
var G__14107 = (0);
seq__13988 = G__14104;
chunk__13990 = G__14105;
count__13991 = G__14106;
i__13992 = G__14107;
continue;
} else {
var G__14108 = cljs.core.next(seq__13988__$1);
var G__14109 = null;
var G__14110 = (0);
var G__14111 = (0);
seq__13988 = G__14108;
chunk__13990 = G__14109;
count__13991 = G__14110;
i__13992 = G__14111;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__14112){
var map__14113 = p__14112;
var map__14113__$1 = ((((!((map__14113 == null)))?(((((map__14113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14113.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14113):map__14113);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14113__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14113__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__14113,map__14113__$1,id,js){
return (function (){
return eval(js);
});})(map__14113,map__14113__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__14115){
var map__14116 = p__14115;
var map__14116__$1 = ((((!((map__14116 == null)))?(((((map__14116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14116):map__14116);
var msg = map__14116__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14116__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14116__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14116__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14116__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__14116,map__14116__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__14118){
var map__14119 = p__14118;
var map__14119__$1 = ((((!((map__14119 == null)))?(((((map__14119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14119.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14119):map__14119);
var src = map__14119__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14119__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__3938__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__3938__auto__;
}
});})(map__14116,map__14116__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__14116,map__14116__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__14116,map__14116__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__14121){
var map__14122 = p__14121;
var map__14122__$1 = ((((!((map__14122 == null)))?(((((map__14122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14122):map__14122);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14122__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14122__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.repl_ns_ref,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(repl_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"ns","ns",441598760)], null)));

return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__14122,map__14122__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL init successful");
});})(map__14122,map__14122__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__14124){
var map__14125 = p__14124;
var map__14125__$1 = ((((!((map__14125 == null)))?(((((map__14125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14125.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14125):map__14125);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14125__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14125__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.repl_ns_ref,ns);

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__14127){
var map__14128 = p__14127;
var map__14128__$1 = ((((!((map__14128 == null)))?(((((map__14128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14128):map__14128);
var msg = map__14128__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14128__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__14130 = type;
var G__14130__$1 = (((G__14130 instanceof cljs.core.Keyword))?G__14130.fqn:null);
switch (G__14130__$1) {
case "asset-watch":
return shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.browser.repl_require(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

return shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
return shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

return shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":
return null;

break;
case "client/stale":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.build_id),"\" not running"].join(''));

break;
default:
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__14132 = ["http",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((shadow.cljs.devtools.client.env.ssl)?"s":null)),"://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_host),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.build_id),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.proc_id),"/browser"].join('');
var G__14133 = ((function (G__14132){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__14132))
;
var G__14134 = "POST";
var G__14135 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__14136 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__14132,G__14133,G__14134,G__14135,G__14136);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5457__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto__)){
var s = temp__5457__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__3949__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
}catch (e14137){var e = e14137;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5457__auto___14138 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto___14138)){
var s_14139 = temp__5457__auto___14138;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_14139.onclose = ((function (s_14139,temp__5457__auto___14138){
return (function (e){
return null;
});})(s_14139,temp__5457__auto___14138))
;

s_14139.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5457__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto__)){
var s = temp__5457__auto__;
return s.close();
} else {
return null;
}
}));

setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
