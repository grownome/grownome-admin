goog.provide('com.degel.re_frame_firebase.auth');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('re_frame.core');
goog.require('iron.re_utils');
goog.require('firebase.app');
goog.require('firebase.auth');
goog.require('com.degel.re_frame_firebase.core');
/**
 * Extract interesting details from the Firebase JS user object.
 */
com.degel.re_frame_firebase.auth.user = (function com$degel$re_frame_firebase$auth$user(firebase_user){
if(cljs.core.truth_(firebase_user)){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uid","uid",-1447769400),firebase_user.uid,new cljs.core.Keyword(null,"provider-data","provider-data",-1151781714),firebase_user.providerData,new cljs.core.Keyword(null,"display-name","display-name",694513143),firebase_user.displayName,new cljs.core.Keyword(null,"photo-url","photo-url",-1816449182),firebase_user.photoURL,new cljs.core.Keyword(null,"email","email",1415816706),cljs.core.first(firebase_user.providerData).email], null);
} else {
return null;
}
});
com.degel.re_frame_firebase.auth.set_user = (function com$degel$re_frame_firebase$auth$set_user(firebase_user){
return com.degel.re_frame_firebase.core.set_current_user(com.degel.re_frame_firebase.auth.user(firebase_user));
});
com.degel.re_frame_firebase.auth.init_auth = (function com$degel$re_frame_firebase$auth$init_auth(){
firebase.auth().onAuthStateChanged(com.degel.re_frame_firebase.auth.set_user,com.degel.re_frame_firebase.core.default_error_handler());

return firebase.auth().getRedirectResult().then((function com$degel$re_frame_firebase$auth$init_auth_$_on_user_credential(user_credential){
return com.degel.re_frame_firebase.auth.set_user(user_credential.user);
})).catch(com.degel.re_frame_firebase.core.default_error_handler());
});
com.degel.re_frame_firebase.auth.sign_in_fns = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"popup","popup",635890211),(function (target9916,auth_provider){
return target9916.signInWithPopup(auth_provider);
}),new cljs.core.Keyword(null,"redirect","redirect",-1975673286),(function (target9917,auth_provider){
return target9917.signInWithRedirect(auth_provider);
})], null);
com.degel.re_frame_firebase.auth.maybe_link_with_credential = (function com$degel$re_frame_firebase$auth$maybe_link_with_credential(pending_credential,user_credential){
if(cljs.core.truth_((function (){var and__3938__auto__ = pending_credential;
if(cljs.core.truth_(and__3938__auto__)){
return user_credential;
} else {
return and__3938__auto__;
}
})())){
var temp__5457__auto__ = user_credential.user;
if(cljs.core.truth_(temp__5457__auto__)){
var firebase_user = temp__5457__auto__;
return firebase_user.linkWithCredential(pending_credential).catch(com.degel.re_frame_firebase.core.default_error_handler());
} else {
return null;
}
} else {
return null;
}
});
com.degel.re_frame_firebase.auth.oauth_sign_in = (function com$degel$re_frame_firebase$auth$oauth_sign_in(auth_provider,opts){
var map__9918 = opts;
var map__9918__$1 = ((((!((map__9918 == null)))?(((((map__9918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9918):map__9918);
var sign_in_method = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9918__$1,new cljs.core.Keyword(null,"sign-in-method","sign-in-method",1484968299),new cljs.core.Keyword(null,"redirect","redirect",-1975673286));
var scopes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9918__$1,new cljs.core.Keyword(null,"scopes","scopes",-1571524352));
var custom_parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9918__$1,new cljs.core.Keyword(null,"custom-parameters","custom-parameters",234352045));
var link_with_credential = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9918__$1,new cljs.core.Keyword(null,"link-with-credential","link-with-credential",-2131116019));
var seq__9920_9926 = cljs.core.seq(scopes);
var chunk__9921_9927 = null;
var count__9922_9928 = (0);
var i__9923_9929 = (0);
while(true){
if((i__9923_9929 < count__9922_9928)){
var scope_9930 = chunk__9921_9927.cljs$core$IIndexed$_nth$arity$2(null,i__9923_9929);
auth_provider.addScope(scope_9930);


var G__9931 = seq__9920_9926;
var G__9932 = chunk__9921_9927;
var G__9933 = count__9922_9928;
var G__9934 = (i__9923_9929 + (1));
seq__9920_9926 = G__9931;
chunk__9921_9927 = G__9932;
count__9922_9928 = G__9933;
i__9923_9929 = G__9934;
continue;
} else {
var temp__5457__auto___9935 = cljs.core.seq(seq__9920_9926);
if(temp__5457__auto___9935){
var seq__9920_9936__$1 = temp__5457__auto___9935;
if(cljs.core.chunked_seq_QMARK_(seq__9920_9936__$1)){
var c__4351__auto___9937 = cljs.core.chunk_first(seq__9920_9936__$1);
var G__9938 = cljs.core.chunk_rest(seq__9920_9936__$1);
var G__9939 = c__4351__auto___9937;
var G__9940 = cljs.core.count(c__4351__auto___9937);
var G__9941 = (0);
seq__9920_9926 = G__9938;
chunk__9921_9927 = G__9939;
count__9922_9928 = G__9940;
i__9923_9929 = G__9941;
continue;
} else {
var scope_9942 = cljs.core.first(seq__9920_9936__$1);
auth_provider.addScope(scope_9942);


var G__9943 = cljs.core.next(seq__9920_9936__$1);
var G__9944 = null;
var G__9945 = (0);
var G__9946 = (0);
seq__9920_9926 = G__9943;
chunk__9921_9927 = G__9944;
count__9922_9928 = G__9945;
i__9923_9929 = G__9946;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(custom_parameters)){
auth_provider.setCustomParameters(cljs.core.clj__GT_js(custom_parameters));
} else {
}

var temp__5455__auto__ = (com.degel.re_frame_firebase.auth.sign_in_fns.cljs$core$IFn$_invoke$arity$1 ? com.degel.re_frame_firebase.auth.sign_in_fns.cljs$core$IFn$_invoke$arity$1(sign_in_method) : com.degel.re_frame_firebase.auth.sign_in_fns.call(null,sign_in_method));
if(cljs.core.truth_(temp__5455__auto__)){
var sign_in = temp__5455__auto__;
return (function (){var G__9924 = firebase.auth();
var G__9925 = auth_provider;
return (sign_in.cljs$core$IFn$_invoke$arity$2 ? sign_in.cljs$core$IFn$_invoke$arity$2(G__9924,G__9925) : sign_in.call(null,G__9924,G__9925));
})().then(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(com.degel.re_frame_firebase.auth.maybe_link_with_credential,link_with_credential)).catch(com.degel.re_frame_firebase.core.default_error_handler());
} else {
return iron.re_utils._GT_evt.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.degel.re_frame_firebase.core.default_error_handler(),(new Error(["Unsupported sign-in-method: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sign_in_method),". Either :redirect or :popup are supported."].join('')))], null));
}
});
com.degel.re_frame_firebase.auth.google_sign_in = (function com$degel$re_frame_firebase$auth$google_sign_in(opts){
return com.degel.re_frame_firebase.auth.oauth_sign_in((new firebase.auth.GoogleAuthProvider()),opts);
});
com.degel.re_frame_firebase.auth.facebook_sign_in = (function com$degel$re_frame_firebase$auth$facebook_sign_in(opts){
return com.degel.re_frame_firebase.auth.oauth_sign_in((new firebase.auth.FacebookAuthProvider()),opts);
});
com.degel.re_frame_firebase.auth.twitter_sign_in = (function com$degel$re_frame_firebase$auth$twitter_sign_in(opts){
return com.degel.re_frame_firebase.auth.oauth_sign_in((new firebase.auth.TwitterAuthProvider()),opts);
});
com.degel.re_frame_firebase.auth.github_sign_in = (function com$degel$re_frame_firebase$auth$github_sign_in(opts){
return com.degel.re_frame_firebase.auth.oauth_sign_in((new firebase.auth.GithubAuthProvider()),opts);
});
com.degel.re_frame_firebase.auth.email_sign_in = (function com$degel$re_frame_firebase$auth$email_sign_in(p__9976){
var map__9977 = p__9976;
var map__9977__$1 = ((((!((map__9977 == null)))?(((((map__9977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9977.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9977):map__9977);
var email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9977__$1,new cljs.core.Keyword(null,"email","email",1415816706));
var password = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9977__$1,new cljs.core.Keyword(null,"password","password",417022471));
return firebase.auth().signInWithEmailAndPassword(email,password).then(com.degel.re_frame_firebase.auth.set_user).catch(com.degel.re_frame_firebase.core.default_error_handler());
});
com.degel.re_frame_firebase.auth.email_create_user = (function com$degel$re_frame_firebase$auth$email_create_user(p__9979){
var map__9980 = p__9979;
var map__9980__$1 = ((((!((map__9980 == null)))?(((((map__9980.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9980.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9980):map__9980);
var email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9980__$1,new cljs.core.Keyword(null,"email","email",1415816706));
var password = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9980__$1,new cljs.core.Keyword(null,"password","password",417022471));
return firebase.auth().createUserWithEmailAndPassword(email,password).then(com.degel.re_frame_firebase.auth.set_user).catch(com.degel.re_frame_firebase.core.default_error_handler());
});
com.degel.re_frame_firebase.auth.sign_out = (function com$degel$re_frame_firebase$auth$sign_out(){
return firebase.auth().signOut().catch(com.degel.re_frame_firebase.core.default_error_handler());
});

//# sourceMappingURL=com.degel.re_frame_firebase.auth.js.map
