goog.provide('com.degel.re_frame_firebase.firestore');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('clojure.string');
goog.require('re_frame.core');
goog.require('reagent.ratom');
goog.require('iron.re_utils');
goog.require('iron.utils');
goog.require('firebase.app');
goog.require('firebase.firestore');
goog.require('com.degel.re_frame_firebase.core');
goog.require('com.degel.re_frame_firebase.specs');
goog.require('com.degel.re_frame_firebase.helpers');
/**
 * Returns a field value to be used to store the server timestamp.
 *   See https://firebase.google.com/docs/firestore/manage-data/add-data#update_fields_in_nested_objects
 *   You should use this as a field value when setting/updating/adding a document.
 * 
 *   Example usage:
 *   {:firestore/add {:path [:some-colection]
 *                 :data {:name "document-with-timestamp"
 *                        :timestamp (server-timestamp)}}
 */
com.degel.re_frame_firebase.firestore.server_timestamp = (function com$degel$re_frame_firebase$firestore$server_timestamp(){
return firebase.firestore.FieldValue.serverTimestamp();
});
/**
 * Returns a field value to be used to delete a field.
 *   See https://firebase.google.com/docs/firestore/manage-data/delete-data#fields
 *   When updating a document, you should use this as a field value if you want to
 *   delete such field.
 * 
 *   Example usage:
 *   {:firestore/update {:path [:my "document"]
 *                    :data {:field-to-delete (delete-field-value)}}}
 */
com.degel.re_frame_firebase.firestore.delete_field_value = (function com$degel$re_frame_firebase$firestore$delete_field_value(){
return firebase.firestore.FieldValue.delete();
});
/**
 * Returns a field path which can be used to refer to ID of a document.
 *   See https://firebase.google.com/docs/reference/js/firebase.firestore.FieldPath#.documentId
 *   It can be used in queries to sort or filter by the document ID.
 * 
 *   Example usage:
 *   {:firestore/get {:path-collection [:my-collection]
 *                 :where [[(document-id-field-path) :>= "start"]]}}
 */
com.degel.re_frame_firebase.firestore.document_id_field_path = (function com$degel$re_frame_firebase$firestore$document_id_field_path(){
return firebase.firestore.FieldPath.documentId();
});
/**
 * Converts a seq of keywords and/or strings into a CollectionReference.
 *   The seq represents the path to the collection (e.g. [:path "to" :collection]).
 *   See https://firebase.google.com/docs/reference/js/firebase.firestore.CollectionReference
 */
com.degel.re_frame_firebase.firestore.clj__GT_CollectionReference = (function com$degel$re_frame_firebase$firestore$clj__GT_CollectionReference(path){
if(cljs.core.truth_(iron.utils.validate(new cljs.core.Keyword("com.degel.re-frame-firebase.specs","path-collection","com.degel.re-frame-firebase.specs/path-collection",-2016036922),path))){
} else {
throw (new Error("Assert failed: (utils/validate :com.degel.re-frame-firebase.specs/path-collection path)"));
}

if((path instanceof firebase.firestore.CollectionReference)){
return path;
} else {
return firebase.firestore().collection(clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.clj__GT_js(path)));
}
});
/**
 * Converts a seq of keywords and/or strings into a DocumentReference.
 *   The seq represents the path to the document (e.g. [:path-to "document"]).
 *   See https://firebase.google.com/docs/reference/js/firebase.firestore.DocumentReference
 */
com.degel.re_frame_firebase.firestore.clj__GT_DocumentReference = (function com$degel$re_frame_firebase$firestore$clj__GT_DocumentReference(path){
if(cljs.core.truth_(iron.utils.validate(new cljs.core.Keyword("com.degel.re-frame-firebase.specs","path-document","com.degel.re-frame-firebase.specs/path-document",-572117239),path))){
} else {
throw (new Error("Assert failed: (utils/validate :com.degel.re-frame-firebase.specs/path-document path)"));
}

if((path instanceof firebase.firestore.DocumentReference)){
return path;
} else {
return firebase.firestore().doc(clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.clj__GT_js(path)));
}
});
/**
 * Converts a string/keyword or a seq of string/keywords into a FieldPath.
 *   Uses the FieldPath contructor.
 *   Only tries conversion if the argument isn't a FieldPath already.
 *   Possible arguments: "string.dotted.path", :keyword-path, [:path :in-a :seq], a FieldPath object.
 *   See https://firebase.google.com/docs/reference/js/firebase.firestore.FieldPath
 */
com.degel.re_frame_firebase.firestore.clj__GT_FieldPath = (function com$degel$re_frame_firebase$firestore$clj__GT_FieldPath(field_path){
if((field_path == null)){
return null;
} else {
if((field_path instanceof firebase.firestore.FieldPath)){
return field_path;
} else {
if(cljs.core.coll_QMARK_(field_path)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(firebase.firestore.FieldPath,cljs.core.clj__GT_js(field_path));
} else {
return (new firebase.firestore.FieldPath(cljs.core.clj__GT_js(field_path)));

}
}
}
});
/**
 * Converts a clojure-style map into a SetOptions satisfying one.
 *   The provided map can contain a :merge key with either true or false, and a
 *   :merge-fields key with a seq of field paths to be passed to clj->FieldPath.
 *   See https://firebase.google.com/docs/reference/js/firebase.firestore.SetOptions
 */
com.degel.re_frame_firebase.firestore.clj__GT_SetOptions = (function com$degel$re_frame_firebase$firestore$clj__GT_SetOptions(set_options){
var $ = cljs.core.PersistentArrayMap.EMPTY;
var $__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"merge","merge",-1804319409).cljs$core$IFn$_invoke$arity$1(set_options))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($,new cljs.core.Keyword(null,"merge","merge",-1804319409),new cljs.core.Keyword(null,"merge","merge",-1804319409).cljs$core$IFn$_invoke$arity$1(set_options)):$);
var $__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"marge-fields","marge-fields",-1049623119).cljs$core$IFn$_invoke$arity$1(set_options))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($__$1,new cljs.core.Keyword(null,"mergeFields","mergeFields",609315227),cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.degel.re_frame_firebase.firestore.clj__GT_FieldPath,new cljs.core.Keyword(null,"merge-fields","merge-fields",519905564).cljs$core$IFn$_invoke$arity$1(set_options)))):$__$1);
return cljs.core.clj__GT_js($__$2);
});
/**
 * Converts a clojure-style map into a GetOptions satisfying one.
 *   The provided map can contain a :source key with one of the following values:
 *   :default, :server or :cache. You can also provide a string like "server".
 *   See https://firebase.google.com/docs/reference/js/firebase.firestore.GetOptions
 */
com.degel.re_frame_firebase.firestore.clj__GT_GetOptions = (function com$degel$re_frame_firebase$firestore$clj__GT_GetOptions(get_options){
if(cljs.core.truth_(get_options)){
return cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$2(get_options,new cljs.core.Keyword(null,"default","default",-1987822328))], null));
} else {
return ({});
}
});
/**
 * Converts a clojure-style map into a SnapshotListenOptions satisfying one.
 *   The provided map can contain a :include-metadata-changes key with either true or false.
 *   See https://firebase.google.com/docs/reference/js/firebase.firestore.SnapshotListenOptions
 */
com.degel.re_frame_firebase.firestore.clj__GT_SnapshotListenOptions = (function com$degel$re_frame_firebase$firestore$clj__GT_SnapshotListenOptions(snapshot_listen_options){
if(cljs.core.truth_(snapshot_listen_options)){
return cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"includeMetadataChanges","includeMetadataChanges",-1442358339),new cljs.core.Keyword(null,"include-metadata-changes","include-metadata-changes",1841924941).cljs$core$IFn$_invoke$arity$2(snapshot_listen_options,false)], null));
} else {
return ({});
}
});
/**
 * Converts a clojure-style map into a SnapshotOptions satisfying one.
 *   The provided map can containe a :server-timestamps key with one of the following values:
 *   :estimate, :previous or :none. You can also provide a string like "estimate".
 *   See https://firebase.google.com/docs/reference/js/firebase.firestore.SnapshotOptions
 */
com.degel.re_frame_firebase.firestore.clj__GT_SnapshotOptions = (function com$degel$re_frame_firebase$firestore$clj__GT_SnapshotOptions(snapshot_options){
return cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"serverTimestamps","serverTimestamps",1410967040),new cljs.core.Keyword(null,"server-timestamps","server-timestamps",-1530059659).cljs$core$IFn$_invoke$arity$2(snapshot_options,new cljs.core.Keyword(null,"none","none",1333468478))], null));
});
com.degel.re_frame_firebase.firestore.PathReference__GT_clj = (function com$degel$re_frame_firebase$firestore$PathReference__GT_clj(reference){

var ref = reference;
var result = cljs.core.List.EMPTY;
while(true){
if(cljs.core.truth_(ref)){
var G__9955 = ref.parent;
var G__9956 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,ref.id);
ref = G__9955;
result = G__9956;
continue;
} else {
return cljs.core.vec(result);
}
break;
}
});
com.degel.re_frame_firebase.firestore.SnapshotMetadata__GT_clj = (function com$degel$re_frame_firebase$firestore$SnapshotMetadata__GT_clj(metadata){

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from-cache","from-cache",223356736),metadata.fromCache,new cljs.core.Keyword(null,"has-pending-writes","has-pending-writes",-1757938800),metadata.hasPendingWrites], null);
});
/**
 * Converts a DocumentSnapshot object into a clojure-style map.
 *   :data      the document's contents (nil if it doesn't exist).
 *   :id        a string representing document's id.
 *   :metadata  metadata converted with SnapshotMetadata->clj.
 *   :ref       the object's path converted with PathReference->clj.
 *   :object    the original DocumentSnapshot if expose-objects argument
 *           is set to true (nil otherwise).
 *   See https://firebase.google.com/docs/reference/js/firebase.firestore.DocumentSnapshot
 */
com.degel.re_frame_firebase.firestore.DocumentSnapshot__GT_clj = (function com$degel$re_frame_firebase$firestore$DocumentSnapshot__GT_clj(var_args){
var G__9958 = arguments.length;
switch (G__9958) {
case 1:
return com.degel.re_frame_firebase.firestore.DocumentSnapshot__GT_clj.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.degel.re_frame_firebase.firestore.DocumentSnapshot__GT_clj.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.degel.re_frame_firebase.firestore.DocumentSnapshot__GT_clj.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.degel.re_frame_firebase.firestore.DocumentSnapshot__GT_clj.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.degel.re_frame_firebase.firestore.DocumentSnapshot__GT_clj.cljs$core$IFn$_invoke$arity$1 = (function (doc){
return com.degel.re_frame_firebase.firestore.DocumentSnapshot__GT_clj.cljs$core$IFn$_invoke$arity$4(doc,null,null,null);
});

com.degel.re_frame_firebase.firestore.DocumentSnapshot__GT_clj.cljs$core$IFn$_invoke$arity$2 = (function (doc,snapshot_options){
return com.degel.re_frame_firebase.firestore.DocumentSnapshot__GT_clj.cljs$core$IFn$_invoke$arity$4(doc,snapshot_options,null,null);
});

com.degel.re_frame_firebase.firestore.DocumentSnapshot__GT_clj.cljs$core$IFn$_invoke$arity$3 = (function (doc,snapshot_options,expose_objects){
return com.degel.re_frame_firebase.firestore.DocumentSnapshot__GT_clj.cljs$core$IFn$_invoke$arity$4(doc,snapshot_options,expose_objects,null);
});

com.degel.re_frame_firebase.firestore.DocumentSnapshot__GT_clj.cljs$core$IFn$_invoke$arity$4 = (function (doc,snapshot_options,expose_objects,sure_exists){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"data","data",-232669377),(cljs.core.truth_((function (){var or__3949__auto__ = sure_exists;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return doc.exists;
}
})())?cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(doc.data(com.degel.re_frame_firebase.firestore.clj__GT_SnapshotOptions(snapshot_options))):null),new cljs.core.Keyword(null,"id","id",-1388402092),doc.id,new cljs.core.Keyword(null,"metadata","metadata",1799301597),com.degel.re_frame_firebase.firestore.SnapshotMetadata__GT_clj(doc.metadata),new cljs.core.Keyword(null,"ref","ref",1289896967),com.degel.re_frame_firebase.firestore.PathReference__GT_clj(doc.ref),new cljs.core.Keyword(null,"object","object",1474613949),(cljs.core.truth_(expose_objects)?doc:null)], null);
});

com.degel.re_frame_firebase.firestore.DocumentSnapshot__GT_clj.cljs$lang$maxFixedArity = 4;

/**
 * Converts a DocumentChange object into a clojure-style map.
 *   :doc       the DocumentSnapshot converted with DocumentSnapshot->clj.
 *   :new-index a number.
 *   :old-index a number.
 *   :type      a string.
 *   :object    the original DocumentChange if expose-objects argument
 *           is set to true (nil otherwise).
 *   See https://firebase.google.com/docs/reference/js/firebase.firestore.DocumentChange
 */
com.degel.re_frame_firebase.firestore.DocumentChange__GT_clj = (function com$degel$re_frame_firebase$firestore$DocumentChange__GT_clj(var_args){
var G__9969 = arguments.length;
switch (G__9969) {
case 1:
return com.degel.re_frame_firebase.firestore.DocumentChange__GT_clj.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.degel.re_frame_firebase.firestore.DocumentChange__GT_clj.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.degel.re_frame_firebase.firestore.DocumentChange__GT_clj.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.degel.re_frame_firebase.firestore.DocumentChange__GT_clj.cljs$core$IFn$_invoke$arity$1 = (function (change){
return com.degel.re_frame_firebase.firestore.DocumentChange__GT_clj.cljs$core$IFn$_invoke$arity$3(change,null,null);
});

com.degel.re_frame_firebase.firestore.DocumentChange__GT_clj.cljs$core$IFn$_invoke$arity$2 = (function (change,snapshot_options){
return com.degel.re_frame_firebase.firestore.DocumentChange__GT_clj.cljs$core$IFn$_invoke$arity$3(change,snapshot_options,null);
});

com.degel.re_frame_firebase.firestore.DocumentChange__GT_clj.cljs$core$IFn$_invoke$arity$3 = (function (change,snapshot_options,expose_objects){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"doc","doc",1913296891),com.degel.re_frame_firebase.firestore.DocumentSnapshot__GT_clj.cljs$core$IFn$_invoke$arity$4(change.doc,snapshot_options,expose_objects,true),new cljs.core.Keyword(null,"new-index","new-index",518435631),change.newIndex,new cljs.core.Keyword(null,"old-index","old-index",-1707356430),change.oldIndex,new cljs.core.Keyword(null,"type","type",1174270348),change.type,new cljs.core.Keyword(null,"object","object",1474613949),(cljs.core.truth_(expose_objects)?change:null)], null);
});

com.degel.re_frame_firebase.firestore.DocumentChange__GT_clj.cljs$lang$maxFixedArity = 3;

/**
 * Converts a QuerySnapshot object into a clojure-style map.
 *   :docs        vector of documents converted with DocumentSnapshot->clj.
 *   :metadata    metadata converted with SnapshotMetadata->clj.
 *   :size        the number of documents.
 *   :doc-changes vector of DocumentChanges converted with DocumentChange->clj if
 *             doc-changes argument is set to true (nil otherwise).
 *   :object      the original DocumentSnapshot if expose-objects argument
 *             is set to true (nil otherwise).
 *   See https://firebase.google.com/docs/reference/js/firebase.firestore.QuerySnapshot
 */
com.degel.re_frame_firebase.firestore.QuerySnapshot__GT_clj = (function com$degel$re_frame_firebase$firestore$QuerySnapshot__GT_clj(var_args){
var G__9974 = arguments.length;
switch (G__9974) {
case 1:
return com.degel.re_frame_firebase.firestore.QuerySnapshot__GT_clj.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.degel.re_frame_firebase.firestore.QuerySnapshot__GT_clj.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.degel.re_frame_firebase.firestore.QuerySnapshot__GT_clj.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.degel.re_frame_firebase.firestore.QuerySnapshot__GT_clj.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return com.degel.re_frame_firebase.firestore.QuerySnapshot__GT_clj.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.degel.re_frame_firebase.firestore.QuerySnapshot__GT_clj.cljs$core$IFn$_invoke$arity$1 = (function (query){
return com.degel.re_frame_firebase.firestore.QuerySnapshot__GT_clj.cljs$core$IFn$_invoke$arity$5(query,null,null,null,null);
});

com.degel.re_frame_firebase.firestore.QuerySnapshot__GT_clj.cljs$core$IFn$_invoke$arity$2 = (function (query,snapshot_options){
return com.degel.re_frame_firebase.firestore.QuerySnapshot__GT_clj.cljs$core$IFn$_invoke$arity$5(query,snapshot_options,null,null,null);
});

com.degel.re_frame_firebase.firestore.QuerySnapshot__GT_clj.cljs$core$IFn$_invoke$arity$3 = (function (query,snapshot_options,snapshot_listen_options){
return com.degel.re_frame_firebase.firestore.QuerySnapshot__GT_clj.cljs$core$IFn$_invoke$arity$5(query,snapshot_options,snapshot_listen_options,null,null);
});

com.degel.re_frame_firebase.firestore.QuerySnapshot__GT_clj.cljs$core$IFn$_invoke$arity$4 = (function (query,snapshot_options,snapshot_listen_options,doc_changes){
return com.degel.re_frame_firebase.firestore.QuerySnapshot__GT_clj.cljs$core$IFn$_invoke$arity$5(query,snapshot_options,snapshot_listen_options,doc_changes,null);
});

com.degel.re_frame_firebase.firestore.QuerySnapshot__GT_clj.cljs$core$IFn$_invoke$arity$5 = (function (query,snapshot_options,snapshot_listen_options,doc_changes,expose_objects){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"docs","docs",-1974280502),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__9971_SHARP_){
return com.degel.re_frame_firebase.firestore.DocumentSnapshot__GT_clj.cljs$core$IFn$_invoke$arity$4(p1__9971_SHARP_,snapshot_options,expose_objects,true);
}),query.docs)),new cljs.core.Keyword(null,"metadata","metadata",1799301597),com.degel.re_frame_firebase.firestore.SnapshotMetadata__GT_clj(query.metadata),new cljs.core.Keyword(null,"size","size",1098693007),query.size,new cljs.core.Keyword(null,"doc-changes","doc-changes",1400350887),(cljs.core.truth_(doc_changes)?cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__9972_SHARP_){
return com.degel.re_frame_firebase.firestore.DocumentChange__GT_clj.cljs$core$IFn$_invoke$arity$3(p1__9972_SHARP_,snapshot_options,expose_objects);
}),query.docChanges(com.degel.re_frame_firebase.firestore.clj__GT_SnapshotListenOptions(snapshot_listen_options)))):null),new cljs.core.Keyword(null,"object","object",1474613949),(cljs.core.truth_(expose_objects)?query:null)], null);
});

com.degel.re_frame_firebase.firestore.QuerySnapshot__GT_clj.cljs$lang$maxFixedArity = 5;

com.degel.re_frame_firebase.firestore.document_parser_wrapper = (function com$degel$re_frame_firebase$firestore$document_parser_wrapper(callback,snapshot_options,expose_objects){
if(cljs.core.truth_(iron.utils.validate(cljs.spec.alpha.nilable_impl(new cljs.core.Keyword("re-frame","vec-or-fn","re-frame/vec-or-fn",-1395135769),new cljs.core.Keyword("re-frame","vec-or-fn","re-frame/vec-or-fn",-1395135769),null),callback))){
} else {
throw (new Error("Assert failed: (utils/validate (s/nilable :re-frame/vec-or-fn) callback)"));
}

if(cljs.core.truth_(callback)){
return (function (p1__9982_SHARP_){
var G__9985 = com.degel.re_frame_firebase.firestore.DocumentSnapshot__GT_clj.cljs$core$IFn$_invoke$arity$4(p1__9982_SHARP_,snapshot_options,expose_objects,false);
var fexpr__9984 = iron.re_utils.event__GT_fn(callback);
return (fexpr__9984.cljs$core$IFn$_invoke$arity$1 ? fexpr__9984.cljs$core$IFn$_invoke$arity$1(G__9985) : fexpr__9984.call(null,G__9985));
});
} else {
return null;
}
});
com.degel.re_frame_firebase.firestore.collection_parser_wrapper = (function com$degel$re_frame_firebase$firestore$collection_parser_wrapper(callback,snapshot_options,snapshot_listen_options,doc_changes,expose_objects){
if(cljs.core.truth_(iron.utils.validate(cljs.spec.alpha.nilable_impl(new cljs.core.Keyword("re-frame","vec-or-fn","re-frame/vec-or-fn",-1395135769),new cljs.core.Keyword("re-frame","vec-or-fn","re-frame/vec-or-fn",-1395135769),null),callback))){
} else {
throw (new Error("Assert failed: (utils/validate (s/nilable :re-frame/vec-or-fn) callback)"));
}

if(cljs.core.truth_(callback)){
return (function (p1__9987_SHARP_){
var G__9994 = com.degel.re_frame_firebase.firestore.QuerySnapshot__GT_clj.cljs$core$IFn$_invoke$arity$5(p1__9987_SHARP_,snapshot_options,snapshot_listen_options,doc_changes,expose_objects);
var fexpr__9993 = iron.re_utils.event__GT_fn(callback);
return (fexpr__9993.cljs$core$IFn$_invoke$arity$1 ? fexpr__9993.cljs$core$IFn$_invoke$arity$1(G__9994) : fexpr__9993.call(null,G__9994));
});
} else {
return null;
}
});
com.degel.re_frame_firebase.firestore.reference_parser_wrapper = (function com$degel$re_frame_firebase$firestore$reference_parser_wrapper(callback){
if(cljs.core.truth_(iron.utils.validate(cljs.spec.alpha.nilable_impl(new cljs.core.Keyword("re-frame","vec-or-fn","re-frame/vec-or-fn",-1395135769),new cljs.core.Keyword("re-frame","vec-or-fn","re-frame/vec-or-fn",-1395135769),null),callback))){
} else {
throw (new Error("Assert failed: (utils/validate (s/nilable :re-frame/vec-or-fn) callback)"));
}

if(cljs.core.truth_(callback)){
return (function (p1__9995_SHARP_){
var G__9997 = com.degel.re_frame_firebase.firestore.PathReference__GT_clj(p1__9995_SHARP_);
var fexpr__9996 = iron.re_utils.event__GT_fn(callback);
return (fexpr__9996.cljs$core$IFn$_invoke$arity$1 ? fexpr__9996.cljs$core$IFn$_invoke$arity$1(G__9997) : fexpr__9996.call(null,G__9997));
});
} else {
return null;
}
});
com.degel.re_frame_firebase.firestore.setter = (function com$degel$re_frame_firebase$firestore$setter(var_args){
var G__9999 = arguments.length;
switch (G__9999) {
case 3:
return com.degel.re_frame_firebase.firestore.setter.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.degel.re_frame_firebase.firestore.setter.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.degel.re_frame_firebase.firestore.setter.cljs$core$IFn$_invoke$arity$3 = (function (path,data,set_options){
return com.degel.re_frame_firebase.firestore.clj__GT_DocumentReference(path).set(cljs.core.clj__GT_js(data),com.degel.re_frame_firebase.firestore.clj__GT_SetOptions(set_options));
});

com.degel.re_frame_firebase.firestore.setter.cljs$core$IFn$_invoke$arity$4 = (function (instance,path,data,set_options){
return instance.set(com.degel.re_frame_firebase.firestore.clj__GT_DocumentReference(path),cljs.core.clj__GT_js(data),com.degel.re_frame_firebase.firestore.clj__GT_SetOptions(set_options));
});

com.degel.re_frame_firebase.firestore.setter.cljs$lang$maxFixedArity = 4;

com.degel.re_frame_firebase.firestore.updater = (function com$degel$re_frame_firebase$firestore$updater(var_args){
var G__10006 = arguments.length;
switch (G__10006) {
case 2:
return com.degel.re_frame_firebase.firestore.updater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.degel.re_frame_firebase.firestore.updater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.degel.re_frame_firebase.firestore.updater.cljs$core$IFn$_invoke$arity$2 = (function (path,data){
return com.degel.re_frame_firebase.firestore.clj__GT_DocumentReference(path).update(cljs.core.clj__GT_js(data));
});

com.degel.re_frame_firebase.firestore.updater.cljs$core$IFn$_invoke$arity$3 = (function (instance,path,data){
return instance.update(com.degel.re_frame_firebase.firestore.clj__GT_DocumentReference(path),cljs.core.clj__GT_js(data));
});

com.degel.re_frame_firebase.firestore.updater.cljs$lang$maxFixedArity = 3;

com.degel.re_frame_firebase.firestore.deleter = (function com$degel$re_frame_firebase$firestore$deleter(var_args){
var G__10009 = arguments.length;
switch (G__10009) {
case 1:
return com.degel.re_frame_firebase.firestore.deleter.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.degel.re_frame_firebase.firestore.deleter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.degel.re_frame_firebase.firestore.deleter.cljs$core$IFn$_invoke$arity$1 = (function (path){
return com.degel.re_frame_firebase.firestore.clj__GT_DocumentReference(path).delete();
});

com.degel.re_frame_firebase.firestore.deleter.cljs$core$IFn$_invoke$arity$2 = (function (instance,path){
return instance.delete(com.degel.re_frame_firebase.firestore.clj__GT_DocumentReference(path));
});

com.degel.re_frame_firebase.firestore.deleter.cljs$lang$maxFixedArity = 2;

com.degel.re_frame_firebase.firestore.set_effect = (function com$degel$re_frame_firebase$firestore$set_effect(p__10011){
var map__10012 = p__10011;
var map__10012__$1 = ((((!((map__10012 == null)))?(((((map__10012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10012.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10012):map__10012);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10012__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10012__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var set_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10012__$1,new cljs.core.Keyword(null,"set-options","set-options",361093112));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10012__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10012__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
return com.degel.re_frame_firebase.helpers.promise_wrapper(com.degel.re_frame_firebase.firestore.setter.cljs$core$IFn$_invoke$arity$3(path,data,set_options),on_success,on_failure);
});
com.degel.re_frame_firebase.firestore.update_effect = (function com$degel$re_frame_firebase$firestore$update_effect(p__10014){
var map__10015 = p__10014;
var map__10015__$1 = ((((!((map__10015 == null)))?(((((map__10015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10015.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10015):map__10015);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10015__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10015__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10015__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10015__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
return com.degel.re_frame_firebase.helpers.promise_wrapper(com.degel.re_frame_firebase.firestore.updater.cljs$core$IFn$_invoke$arity$2(path,data),on_success,on_failure);
});
com.degel.re_frame_firebase.firestore.delete_effect = (function com$degel$re_frame_firebase$firestore$delete_effect(p__10017){
var map__10018 = p__10017;
var map__10018__$1 = ((((!((map__10018 == null)))?(((((map__10018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10018):map__10018);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10018__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10018__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10018__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
return com.degel.re_frame_firebase.helpers.promise_wrapper(com.degel.re_frame_firebase.firestore.deleter.cljs$core$IFn$_invoke$arity$1(path),on_success,on_failure);
});
com.degel.re_frame_firebase.firestore.write_batch_effect = (function com$degel$re_frame_firebase$firestore$write_batch_effect(p__10020){
var map__10021 = p__10020;
var map__10021__$1 = ((((!((map__10021 == null)))?(((((map__10021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10021):map__10021);
var operations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10021__$1,new cljs.core.Keyword(null,"operations","operations",1630691895));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10021__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10021__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var batch_instance = firebase.firestore().batch();
cljs.core.run_BANG_(((function (batch_instance,map__10021,map__10021__$1,operations,on_success,on_failure){
return (function (p__10023){
var vec__10024 = p__10023;
var event_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10024,(0),null);
var map__10027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10024,(1),null);
var map__10027__$1 = ((((!((map__10027 == null)))?(((((map__10027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10027):map__10027);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10027__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10027__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var set_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10027__$1,new cljs.core.Keyword(null,"set-options","set-options",361093112));
var G__10029 = event_type;
var G__10029__$1 = (((G__10029 instanceof cljs.core.Keyword))?G__10029.fqn:null);
switch (G__10029__$1) {
case "firestore/delete":
return com.degel.re_frame_firebase.firestore.deleter.cljs$core$IFn$_invoke$arity$2(batch_instance,path);

break;
case "firestore/set":
return com.degel.re_frame_firebase.firestore.setter.cljs$core$IFn$_invoke$arity$4(batch_instance,path,data,set_options);

break;
case "firestore/update":
return com.degel.re_frame_firebase.firestore.updater.cljs$core$IFn$_invoke$arity$3(batch_instance,path,data);

break;
default:
return alert("Internal error: unknown write effect: ",event_type);

}
});})(batch_instance,map__10021,map__10021__$1,operations,on_success,on_failure))
,operations);

return com.degel.re_frame_firebase.helpers.promise_wrapper(batch_instance.commit(),on_success,on_failure);
});
com.degel.re_frame_firebase.firestore.adder = (function com$degel$re_frame_firebase$firestore$adder(path,data){
return com.degel.re_frame_firebase.firestore.clj__GT_CollectionReference(path).add(cljs.core.clj__GT_js(data));
});
com.degel.re_frame_firebase.firestore.add_effect = (function com$degel$re_frame_firebase$firestore$add_effect(p__10031){
var map__10032 = p__10031;
var map__10032__$1 = ((((!((map__10032 == null)))?(((((map__10032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10032.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10032):map__10032);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10032__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10032__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10032__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10032__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
return com.degel.re_frame_firebase.helpers.promise_wrapper(com.degel.re_frame_firebase.firestore.adder(path,data),com.degel.re_frame_firebase.firestore.reference_parser_wrapper(on_success),on_failure);
});
com.degel.re_frame_firebase.firestore.query = (function com$degel$re_frame_firebase$firestore$query(ref,where,order_by,limit,start_at,start_after,end_at,end_before){
var $ = ref;
var $__$1 = (cljs.core.truth_(where)?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function ($){
return (function ($$,p__10034){
var vec__10035 = p__10034;
var field_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10035,(0),null);
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10035,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10035,(2),null);
return $$.where(com.degel.re_frame_firebase.firestore.clj__GT_FieldPath(field_path),cljs.core.clj__GT_js(op),cljs.core.clj__GT_js(value));
});})($))
,$,where):$);
var $__$2 = (cljs.core.truth_(order_by)?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function ($,$__$1){
return (function ($$,order){
return $$.orderBy(cljs.core.clj__GT_js(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(order,(0))),cljs.core.clj__GT_js(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(order,(1),new cljs.core.Keyword(null,"asc","asc",356854569))));
});})($,$__$1))
,$__$1,order_by):$__$1);
var $__$3 = (cljs.core.truth_(limit)?$__$2.limit(limit):$__$2);
var $__$4 = (cljs.core.truth_(start_at)?$__$3.startAt.apply($__$3,cljs.core.clj__GT_js(start_at)):$__$3);
var $__$5 = (cljs.core.truth_(start_after)?$__$4.startAfter.apply($__$4,cljs.core.clj__GT_js(start_after)):$__$4);
var $__$6 = (cljs.core.truth_(end_at)?$__$5.endAt.apply($__$5,cljs.core.clj__GT_js(end_at)):$__$5);
if(cljs.core.truth_(end_before)){
return $__$6.endBefore.apply($__$6,cljs.core.clj__GT_js(end_before));
} else {
return $__$6;
}
});
com.degel.re_frame_firebase.firestore.getter_document = (function com$degel$re_frame_firebase$firestore$getter_document(path,get_options){
return com.degel.re_frame_firebase.firestore.clj__GT_DocumentReference(path).get(com.degel.re_frame_firebase.firestore.clj__GT_GetOptions(get_options));
});
com.degel.re_frame_firebase.firestore.getter_collection = (function com$degel$re_frame_firebase$firestore$getter_collection(path,get_options,where,order_by,limit,start_at,start_after,end_at,end_before){
return com.degel.re_frame_firebase.firestore.query(com.degel.re_frame_firebase.firestore.clj__GT_CollectionReference(path),where,order_by,limit,start_at,start_after,end_at,end_before).get(com.degel.re_frame_firebase.firestore.clj__GT_GetOptions(get_options));
});
com.degel.re_frame_firebase.firestore.get_effect = (function com$degel$re_frame_firebase$firestore$get_effect(p__10038){
var map__10039 = p__10038;
var map__10039__$1 = ((((!((map__10039 == null)))?(((((map__10039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10039):map__10039);
var get_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10039__$1,new cljs.core.Keyword(null,"get-options","get-options",-987973923));
var where = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10039__$1,new cljs.core.Keyword(null,"where","where",-2044795965));
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10039__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363));
var path_document = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10039__$1,new cljs.core.Keyword(null,"path-document","path-document",-1268354874));
var doc_changes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10039__$1,new cljs.core.Keyword(null,"doc-changes","doc-changes",1400350887));
var snapshot_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10039__$1,new cljs.core.Keyword(null,"snapshot-options","snapshot-options",1851200008));
var start_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10039__$1,new cljs.core.Keyword(null,"start-at","start-at",-103334680));
var path_collection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10039__$1,new cljs.core.Keyword(null,"path-collection","path-collection",-1906935925));
var start_after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10039__$1,new cljs.core.Keyword(null,"start-after","start-after",-1380036532));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10039__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var expose_objects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10039__$1,new cljs.core.Keyword(null,"expose-objects","expose-objects",1262071024));
var end_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10039__$1,new cljs.core.Keyword(null,"end-at","end-at",1331226740));
var snapshot_listen_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10039__$1,new cljs.core.Keyword(null,"snapshot-listen-options","snapshot-listen-options",-873904587));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10039__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var order_by = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10039__$1,new cljs.core.Keyword(null,"order-by","order-by",1527318070));
var end_before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10039__$1,new cljs.core.Keyword(null,"end-before","end-before",1724055831));
if(cljs.core.truth_(path_document)){
return com.degel.re_frame_firebase.helpers.promise_wrapper(com.degel.re_frame_firebase.firestore.getter_document(path_document,get_options),com.degel.re_frame_firebase.firestore.document_parser_wrapper(on_success,snapshot_options,expose_objects),on_failure);
} else {
return com.degel.re_frame_firebase.helpers.promise_wrapper(com.degel.re_frame_firebase.firestore.getter_collection(path_collection,get_options,where,order_by,limit,start_at,start_after,end_at,end_before),com.degel.re_frame_firebase.firestore.collection_parser_wrapper(on_success,snapshot_options,snapshot_listen_options,doc_changes,expose_objects),on_failure);
}
});
com.degel.re_frame_firebase.firestore.on_snapshotter = (function com$degel$re_frame_firebase$firestore$on_snapshotter(reference_or_query,snapshot_listen_options,on_next,on_error){
return reference_or_query.onSnapshot(com.degel.re_frame_firebase.firestore.clj__GT_SnapshotListenOptions(snapshot_listen_options),on_next,(cljs.core.truth_(on_error)?iron.re_utils.event__GT_fn(on_error):com.degel.re_frame_firebase.core.default_error_handler()));
});
com.degel.re_frame_firebase.firestore.on_snapshot = (function com$degel$re_frame_firebase$firestore$on_snapshot(p__10041){
var map__10042 = p__10041;
var map__10042__$1 = ((((!((map__10042 == null)))?(((((map__10042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10042):map__10042);
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10042__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var on_next = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10042__$1,new cljs.core.Keyword(null,"on-next","on-next",1556687516));
var where = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10042__$1,new cljs.core.Keyword(null,"where","where",-2044795965));
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10042__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363));
var path_document = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10042__$1,new cljs.core.Keyword(null,"path-document","path-document",-1268354874));
var doc_changes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10042__$1,new cljs.core.Keyword(null,"doc-changes","doc-changes",1400350887));
var snapshot_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10042__$1,new cljs.core.Keyword(null,"snapshot-options","snapshot-options",1851200008));
var start_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10042__$1,new cljs.core.Keyword(null,"start-at","start-at",-103334680));
var path_collection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10042__$1,new cljs.core.Keyword(null,"path-collection","path-collection",-1906935925));
var start_after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10042__$1,new cljs.core.Keyword(null,"start-after","start-after",-1380036532));
var expose_objects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10042__$1,new cljs.core.Keyword(null,"expose-objects","expose-objects",1262071024));
var end_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10042__$1,new cljs.core.Keyword(null,"end-at","end-at",1331226740));
var snapshot_listen_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10042__$1,new cljs.core.Keyword(null,"snapshot-listen-options","snapshot-listen-options",-873904587));
var order_by = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10042__$1,new cljs.core.Keyword(null,"order-by","order-by",1527318070));
var end_before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10042__$1,new cljs.core.Keyword(null,"end-before","end-before",1724055831));
if(cljs.core.truth_(iron.utils.validate(new cljs.core.Keyword("re-frame","vec-or-fn","re-frame/vec-or-fn",-1395135769),on_next))){
} else {
throw (new Error("Assert failed: (utils/validate :re-frame/vec-or-fn on-next)"));
}

if(cljs.core.truth_(iron.utils.validate(cljs.spec.alpha.nilable_impl(new cljs.core.Keyword("re-frame","vec-or-fn","re-frame/vec-or-fn",-1395135769),new cljs.core.Keyword("re-frame","vec-or-fn","re-frame/vec-or-fn",-1395135769),null),on_error))){
} else {
throw (new Error("Assert failed: (utils/validate (s/nilable :re-frame/vec-or-fn) on-error)"));
}

if(cljs.core.truth_(path_document)){
return com.degel.re_frame_firebase.firestore.on_snapshotter(com.degel.re_frame_firebase.firestore.clj__GT_DocumentReference(path_document),snapshot_listen_options,com.degel.re_frame_firebase.firestore.document_parser_wrapper(on_next,snapshot_options,expose_objects),on_error);
} else {
return com.degel.re_frame_firebase.firestore.on_snapshotter(com.degel.re_frame_firebase.firestore.query(com.degel.re_frame_firebase.firestore.clj__GT_CollectionReference(path_collection),where,order_by,limit,start_at,start_after,end_at,end_before),snapshot_listen_options,com.degel.re_frame_firebase.firestore.collection_parser_wrapper(on_next,snapshot_options,snapshot_listen_options,doc_changes,expose_objects),on_error);
}
});
com.degel.re_frame_firebase.firestore.on_snapshot_effect = com.degel.re_frame_firebase.firestore.on_snapshot;
com.degel.re_frame_firebase.firestore.on_snapshot_sub = (function com$degel$re_frame_firebase$firestore$on_snapshot_sub(app_db,p__10045){
var vec__10046 = p__10045;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10046,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10046,(1),null);
var uuid = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())].join('');
var callback = ((function (uuid,vec__10046,_,params){
return (function (p1__10044_SHARP_){
return iron.re_utils._GT_evt.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.degel.re-frame-firebase.firestore","on-snapshot-handler","com.degel.re-frame-firebase.firestore/on-snapshot-handler",1993440103),uuid,p1__10044_SHARP_], null));
});})(uuid,vec__10046,_,params))
;
var unsubscribe = com.degel.re_frame_firebase.firestore.on_snapshot(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,new cljs.core.Keyword(null,"on-next","on-next",1556687516),callback));
return reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic(((function (uuid,callback,unsubscribe,vec__10046,_,params){
return (function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(app_db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.degel.re-frame-firebase.firestore","cache","com.degel.re-frame-firebase.firestore/cache",-1355522558),uuid], null),cljs.core.PersistentVector.EMPTY);
});})(uuid,callback,unsubscribe,vec__10046,_,params))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360),((function (uuid,callback,unsubscribe,vec__10046,_,params){
return (function (){
(unsubscribe.cljs$core$IFn$_invoke$arity$0 ? unsubscribe.cljs$core$IFn$_invoke$arity$0() : unsubscribe.call(null));

return iron.re_utils._GT_evt.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.degel.re-frame-firebase.firestore","on-snapshot-handler","com.degel.re-frame-firebase.firestore/on-snapshot-handler",1993440103),uuid,null], null));
});})(uuid,callback,unsubscribe,vec__10046,_,params))
], 0));
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.degel.re-frame-firebase.firestore","on-snapshot-handler","com.degel.re-frame-firebase.firestore/on-snapshot-handler",1993440103),(function (app_db,p__10049){
var vec__10050 = p__10049;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10050,(0),null);
var uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10050,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10050,(2),null);
if(cljs.core.truth_(value)){
return cljs.core.assoc_in(app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.degel.re-frame-firebase.firestore","cache","com.degel.re-frame-firebase.firestore/cache",-1355522558),uuid], null),value);
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(app_db,new cljs.core.Keyword("com.degel.re-frame-firebase.firestore","cache","com.degel.re-frame-firebase.firestore/cache",-1355522558),cljs.core.dissoc,uuid);
}
}));

//# sourceMappingURL=com.degel.re_frame_firebase.firestore.js.map
