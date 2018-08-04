goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__10296 = arguments.length;
switch (G__10296) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10297 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10297 = (function (f,blockable,meta10298){
this.f = f;
this.blockable = blockable;
this.meta10298 = meta10298;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async10297.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10299,meta10298__$1){
var self__ = this;
var _10299__$1 = this;
return (new cljs.core.async.t_cljs$core$async10297(self__.f,self__.blockable,meta10298__$1));
});

cljs.core.async.t_cljs$core$async10297.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10299){
var self__ = this;
var _10299__$1 = this;
return self__.meta10298;
});

cljs.core.async.t_cljs$core$async10297.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10297.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async10297.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async10297.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async10297.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta10298","meta10298",1149564134,null)], null);
});

cljs.core.async.t_cljs$core$async10297.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10297.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10297";

cljs.core.async.t_cljs$core$async10297.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async10297");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10297.
 */
cljs.core.async.__GT_t_cljs$core$async10297 = (function cljs$core$async$__GT_t_cljs$core$async10297(f__$1,blockable__$1,meta10298){
return (new cljs.core.async.t_cljs$core$async10297(f__$1,blockable__$1,meta10298));
});

}

return (new cljs.core.async.t_cljs$core$async10297(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__10376 = arguments.length;
switch (G__10376) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__10391 = arguments.length;
switch (G__10391) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__10402 = arguments.length;
switch (G__10402) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_10407 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_10407) : fn1.call(null,val_10407));
} else {
cljs.core.async.impl.dispatch.run(((function (val_10407,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_10407) : fn1.call(null,val_10407));
});})(val_10407,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__10413 = arguments.length;
switch (G__10413) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5455__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4408__auto___10418 = n;
var x_10419 = (0);
while(true){
if((x_10419 < n__4408__auto___10418)){
(a[x_10419] = (0));

var G__10420 = (x_10419 + (1));
x_10419 = G__10420;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__10421 = (i + (1));
i = G__10421;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10425 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10425 = (function (flag,meta10426){
this.flag = flag;
this.meta10426 = meta10426;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async10425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_10427,meta10426__$1){
var self__ = this;
var _10427__$1 = this;
return (new cljs.core.async.t_cljs$core$async10425(self__.flag,meta10426__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async10425.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_10427){
var self__ = this;
var _10427__$1 = this;
return self__.meta10426;
});})(flag))
;

cljs.core.async.t_cljs$core$async10425.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10425.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async10425.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async10425.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async10425.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta10426","meta10426",-497470261,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async10425.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10425.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10425";

cljs.core.async.t_cljs$core$async10425.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async10425");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10425.
 */
cljs.core.async.__GT_t_cljs$core$async10425 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async10425(flag__$1,meta10426){
return (new cljs.core.async.t_cljs$core$async10425(flag__$1,meta10426));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async10425(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10436 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10436 = (function (flag,cb,meta10437){
this.flag = flag;
this.cb = cb;
this.meta10437 = meta10437;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async10436.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10438,meta10437__$1){
var self__ = this;
var _10438__$1 = this;
return (new cljs.core.async.t_cljs$core$async10436(self__.flag,self__.cb,meta10437__$1));
});

cljs.core.async.t_cljs$core$async10436.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10438){
var self__ = this;
var _10438__$1 = this;
return self__.meta10437;
});

cljs.core.async.t_cljs$core$async10436.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10436.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async10436.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async10436.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async10436.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta10437","meta10437",487780152,null)], null);
});

cljs.core.async.t_cljs$core$async10436.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10436.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10436";

cljs.core.async.t_cljs$core$async10436.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async10436");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10436.
 */
cljs.core.async.__GT_t_cljs$core$async10436 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async10436(flag__$1,cb__$1,meta10437){
return (new cljs.core.async.t_cljs$core$async10436(flag__$1,cb__$1,meta10437));
});

}

return (new cljs.core.async.t_cljs$core$async10436(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10448_SHARP_){
var G__10453 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10448_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__10453) : fret.call(null,G__10453));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10449_SHARP_){
var G__10454 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10449_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__10454) : fret.call(null,G__10454));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__3949__auto__ = wport;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return port;
}
})()], null));
} else {
var G__10471 = (i + (1));
i = G__10471;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3949__auto__ = ret;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3938__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___10477 = arguments.length;
var i__4532__auto___10478 = (0);
while(true){
if((i__4532__auto___10478 < len__4531__auto___10477)){
args__4534__auto__.push((arguments[i__4532__auto___10478]));

var G__10479 = (i__4532__auto___10478 + (1));
i__4532__auto___10478 = G__10479;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__10474){
var map__10475 = p__10474;
var map__10475__$1 = ((((!((map__10475 == null)))?(((((map__10475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10475):map__10475);
var opts = map__10475__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq10472){
var G__10473 = cljs.core.first(seq10472);
var seq10472__$1 = cljs.core.next(seq10472);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10473,seq10472__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__10481 = arguments.length;
switch (G__10481) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__10225__auto___10546 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10225__auto___10546){
return (function (){
var f__10226__auto__ = (function (){var switch__9843__auto__ = ((function (c__10225__auto___10546){
return (function (state_10515){
var state_val_10516 = (state_10515[(1)]);
if((state_val_10516 === (7))){
var inst_10510 = (state_10515[(2)]);
var state_10515__$1 = state_10515;
var statearr_10520_10548 = state_10515__$1;
(statearr_10520_10548[(2)] = inst_10510);

(statearr_10520_10548[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10516 === (1))){
var state_10515__$1 = state_10515;
var statearr_10522_10549 = state_10515__$1;
(statearr_10522_10549[(2)] = null);

(statearr_10522_10549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10516 === (4))){
var inst_10492 = (state_10515[(7)]);
var inst_10492__$1 = (state_10515[(2)]);
var inst_10494 = (inst_10492__$1 == null);
var state_10515__$1 = (function (){var statearr_10523 = state_10515;
(statearr_10523[(7)] = inst_10492__$1);

return statearr_10523;
})();
if(cljs.core.truth_(inst_10494)){
var statearr_10524_10550 = state_10515__$1;
(statearr_10524_10550[(1)] = (5));

} else {
var statearr_10525_10551 = state_10515__$1;
(statearr_10525_10551[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10516 === (13))){
var state_10515__$1 = state_10515;
var statearr_10526_10552 = state_10515__$1;
(statearr_10526_10552[(2)] = null);

(statearr_10526_10552[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10516 === (6))){
var inst_10492 = (state_10515[(7)]);
var state_10515__$1 = state_10515;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10515__$1,(11),to,inst_10492);
} else {
if((state_val_10516 === (3))){
var inst_10513 = (state_10515[(2)]);
var state_10515__$1 = state_10515;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10515__$1,inst_10513);
} else {
if((state_val_10516 === (12))){
var state_10515__$1 = state_10515;
var statearr_10530_10553 = state_10515__$1;
(statearr_10530_10553[(2)] = null);

(statearr_10530_10553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10516 === (2))){
var state_10515__$1 = state_10515;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10515__$1,(4),from);
} else {
if((state_val_10516 === (11))){
var inst_10503 = (state_10515[(2)]);
var state_10515__$1 = state_10515;
if(cljs.core.truth_(inst_10503)){
var statearr_10531_10554 = state_10515__$1;
(statearr_10531_10554[(1)] = (12));

} else {
var statearr_10532_10555 = state_10515__$1;
(statearr_10532_10555[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10516 === (9))){
var state_10515__$1 = state_10515;
var statearr_10533_10556 = state_10515__$1;
(statearr_10533_10556[(2)] = null);

(statearr_10533_10556[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10516 === (5))){
var state_10515__$1 = state_10515;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10534_10557 = state_10515__$1;
(statearr_10534_10557[(1)] = (8));

} else {
var statearr_10535_10558 = state_10515__$1;
(statearr_10535_10558[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10516 === (14))){
var inst_10508 = (state_10515[(2)]);
var state_10515__$1 = state_10515;
var statearr_10536_10559 = state_10515__$1;
(statearr_10536_10559[(2)] = inst_10508);

(statearr_10536_10559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10516 === (10))){
var inst_10500 = (state_10515[(2)]);
var state_10515__$1 = state_10515;
var statearr_10537_10561 = state_10515__$1;
(statearr_10537_10561[(2)] = inst_10500);

(statearr_10537_10561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10516 === (8))){
var inst_10497 = cljs.core.async.close_BANG_(to);
var state_10515__$1 = state_10515;
var statearr_10538_10563 = state_10515__$1;
(statearr_10538_10563[(2)] = inst_10497);

(statearr_10538_10563[(1)] = (10));


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
});})(c__10225__auto___10546))
;
return ((function (switch__9843__auto__,c__10225__auto___10546){
return (function() {
var cljs$core$async$state_machine__9844__auto__ = null;
var cljs$core$async$state_machine__9844__auto____0 = (function (){
var statearr_10539 = [null,null,null,null,null,null,null,null];
(statearr_10539[(0)] = cljs$core$async$state_machine__9844__auto__);

(statearr_10539[(1)] = (1));

return statearr_10539;
});
var cljs$core$async$state_machine__9844__auto____1 = (function (state_10515){
while(true){
var ret_value__9845__auto__ = (function (){try{while(true){
var result__9846__auto__ = switch__9843__auto__(state_10515);
if(cljs.core.keyword_identical_QMARK_(result__9846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9846__auto__;
}
break;
}
}catch (e10540){if((e10540 instanceof Object)){
var ex__9847__auto__ = e10540;
var statearr_10541_10564 = state_10515;
(statearr_10541_10564[(5)] = ex__9847__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10540;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10565 = state_10515;
state_10515 = G__10565;
continue;
} else {
return ret_value__9845__auto__;
}
break;
}
});
cljs$core$async$state_machine__9844__auto__ = function(state_10515){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9844__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9844__auto____1.call(this,state_10515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9844__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9844__auto____0;
cljs$core$async$state_machine__9844__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9844__auto____1;
return cljs$core$async$state_machine__9844__auto__;
})()
;})(switch__9843__auto__,c__10225__auto___10546))
})();
var state__10227__auto__ = (function (){var statearr_10544 = (f__10226__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10226__auto__.cljs$core$IFn$_invoke$arity$0() : f__10226__auto__.call(null));
(statearr_10544[(6)] = c__10225__auto___10546);

return statearr_10544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10227__auto__);
});})(c__10225__auto___10546))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__10567){
var vec__10568 = p__10567;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10568,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10568,(1),null);
var job = vec__10568;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__10225__auto___10739 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10225__auto___10739,res,vec__10568,v,p,job,jobs,results){
return (function (){
var f__10226__auto__ = (function (){var switch__9843__auto__ = ((function (c__10225__auto___10739,res,vec__10568,v,p,job,jobs,results){
return (function (state_10575){
var state_val_10576 = (state_10575[(1)]);
if((state_val_10576 === (1))){
var state_10575__$1 = state_10575;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10575__$1,(2),res,v);
} else {
if((state_val_10576 === (2))){
var inst_10572 = (state_10575[(2)]);
var inst_10573 = cljs.core.async.close_BANG_(res);
var state_10575__$1 = (function (){var statearr_10577 = state_10575;
(statearr_10577[(7)] = inst_10572);

return statearr_10577;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_10575__$1,inst_10573);
} else {
return null;
}
}
});})(c__10225__auto___10739,res,vec__10568,v,p,job,jobs,results))
;
return ((function (switch__9843__auto__,c__10225__auto___10739,res,vec__10568,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9844__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9844__auto____0 = (function (){
var statearr_10578 = [null,null,null,null,null,null,null,null];
(statearr_10578[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9844__auto__);

(statearr_10578[(1)] = (1));

return statearr_10578;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9844__auto____1 = (function (state_10575){
while(true){
var ret_value__9845__auto__ = (function (){try{while(true){
var result__9846__auto__ = switch__9843__auto__(state_10575);
if(cljs.core.keyword_identical_QMARK_(result__9846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9846__auto__;
}
break;
}
}catch (e10579){if((e10579 instanceof Object)){
var ex__9847__auto__ = e10579;
var statearr_10580_10740 = state_10575;
(statearr_10580_10740[(5)] = ex__9847__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10575);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10579;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10741 = state_10575;
state_10575 = G__10741;
continue;
} else {
return ret_value__9845__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9844__auto__ = function(state_10575){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9844__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9844__auto____1.call(this,state_10575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9844__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9844__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9844__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9844__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9844__auto__;
})()
;})(switch__9843__auto__,c__10225__auto___10739,res,vec__10568,v,p,job,jobs,results))
})();
var state__10227__auto__ = (function (){var statearr_10581 = (f__10226__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10226__auto__.cljs$core$IFn$_invoke$arity$0() : f__10226__auto__.call(null));
(statearr_10581[(6)] = c__10225__auto___10739);

return statearr_10581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10227__auto__);
});})(c__10225__auto___10739,res,vec__10568,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__10582){
var vec__10583 = p__10582;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10583,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10583,(1),null);
var job = vec__10583;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4408__auto___10742 = n;
var __10743 = (0);
while(true){
if((__10743 < n__4408__auto___10742)){
var G__10586_10744 = type;
var G__10586_10745__$1 = (((G__10586_10744 instanceof cljs.core.Keyword))?G__10586_10744.fqn:null);
switch (G__10586_10745__$1) {
case "compute":
var c__10225__auto___10747 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__10743,c__10225__auto___10747,G__10586_10744,G__10586_10745__$1,n__4408__auto___10742,jobs,results,process,async){
return (function (){
var f__10226__auto__ = (function (){var switch__9843__auto__ = ((function (__10743,c__10225__auto___10747,G__10586_10744,G__10586_10745__$1,n__4408__auto___10742,jobs,results,process,async){
return (function (state_10599){
var state_val_10600 = (state_10599[(1)]);
if((state_val_10600 === (1))){
var state_10599__$1 = state_10599;
var statearr_10601_10748 = state_10599__$1;
(statearr_10601_10748[(2)] = null);

(statearr_10601_10748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10600 === (2))){
var state_10599__$1 = state_10599;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10599__$1,(4),jobs);
} else {
if((state_val_10600 === (3))){
var inst_10597 = (state_10599[(2)]);
var state_10599__$1 = state_10599;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10599__$1,inst_10597);
} else {
if((state_val_10600 === (4))){
var inst_10589 = (state_10599[(2)]);
var inst_10590 = process(inst_10589);
var state_10599__$1 = state_10599;
if(cljs.core.truth_(inst_10590)){
var statearr_10602_10749 = state_10599__$1;
(statearr_10602_10749[(1)] = (5));

} else {
var statearr_10603_10750 = state_10599__$1;
(statearr_10603_10750[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10600 === (5))){
var state_10599__$1 = state_10599;
var statearr_10604_10751 = state_10599__$1;
(statearr_10604_10751[(2)] = null);

(statearr_10604_10751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10600 === (6))){
var state_10599__$1 = state_10599;
var statearr_10605_10752 = state_10599__$1;
(statearr_10605_10752[(2)] = null);

(statearr_10605_10752[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10600 === (7))){
var inst_10595 = (state_10599[(2)]);
var state_10599__$1 = state_10599;
var statearr_10606_10753 = state_10599__$1;
(statearr_10606_10753[(2)] = inst_10595);

(statearr_10606_10753[(1)] = (3));


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
});})(__10743,c__10225__auto___10747,G__10586_10744,G__10586_10745__$1,n__4408__auto___10742,jobs,results,process,async))
;
return ((function (__10743,switch__9843__auto__,c__10225__auto___10747,G__10586_10744,G__10586_10745__$1,n__4408__auto___10742,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9844__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9844__auto____0 = (function (){
var statearr_10607 = [null,null,null,null,null,null,null];
(statearr_10607[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9844__auto__);

(statearr_10607[(1)] = (1));

return statearr_10607;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9844__auto____1 = (function (state_10599){
while(true){
var ret_value__9845__auto__ = (function (){try{while(true){
var result__9846__auto__ = switch__9843__auto__(state_10599);
if(cljs.core.keyword_identical_QMARK_(result__9846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9846__auto__;
}
break;
}
}catch (e10608){if((e10608 instanceof Object)){
var ex__9847__auto__ = e10608;
var statearr_10609_10754 = state_10599;
(statearr_10609_10754[(5)] = ex__9847__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10599);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10608;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10755 = state_10599;
state_10599 = G__10755;
continue;
} else {
return ret_value__9845__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9844__auto__ = function(state_10599){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9844__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9844__auto____1.call(this,state_10599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9844__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9844__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9844__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9844__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9844__auto__;
})()
;})(__10743,switch__9843__auto__,c__10225__auto___10747,G__10586_10744,G__10586_10745__$1,n__4408__auto___10742,jobs,results,process,async))
})();
var state__10227__auto__ = (function (){var statearr_10610 = (f__10226__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10226__auto__.cljs$core$IFn$_invoke$arity$0() : f__10226__auto__.call(null));
(statearr_10610[(6)] = c__10225__auto___10747);

return statearr_10610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10227__auto__);
});})(__10743,c__10225__auto___10747,G__10586_10744,G__10586_10745__$1,n__4408__auto___10742,jobs,results,process,async))
);


break;
case "async":
var c__10225__auto___10756 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__10743,c__10225__auto___10756,G__10586_10744,G__10586_10745__$1,n__4408__auto___10742,jobs,results,process,async){
return (function (){
var f__10226__auto__ = (function (){var switch__9843__auto__ = ((function (__10743,c__10225__auto___10756,G__10586_10744,G__10586_10745__$1,n__4408__auto___10742,jobs,results,process,async){
return (function (state_10623){
var state_val_10624 = (state_10623[(1)]);
if((state_val_10624 === (1))){
var state_10623__$1 = state_10623;
var statearr_10625_10757 = state_10623__$1;
(statearr_10625_10757[(2)] = null);

(statearr_10625_10757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10624 === (2))){
var state_10623__$1 = state_10623;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10623__$1,(4),jobs);
} else {
if((state_val_10624 === (3))){
var inst_10621 = (state_10623[(2)]);
var state_10623__$1 = state_10623;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10623__$1,inst_10621);
} else {
if((state_val_10624 === (4))){
var inst_10613 = (state_10623[(2)]);
var inst_10614 = async(inst_10613);
var state_10623__$1 = state_10623;
if(cljs.core.truth_(inst_10614)){
var statearr_10626_10758 = state_10623__$1;
(statearr_10626_10758[(1)] = (5));

} else {
var statearr_10627_10759 = state_10623__$1;
(statearr_10627_10759[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10624 === (5))){
var state_10623__$1 = state_10623;
var statearr_10628_10760 = state_10623__$1;
(statearr_10628_10760[(2)] = null);

(statearr_10628_10760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10624 === (6))){
var state_10623__$1 = state_10623;
var statearr_10629_10761 = state_10623__$1;
(statearr_10629_10761[(2)] = null);

(statearr_10629_10761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10624 === (7))){
var inst_10619 = (state_10623[(2)]);
var state_10623__$1 = state_10623;
var statearr_10630_10762 = state_10623__$1;
(statearr_10630_10762[(2)] = inst_10619);

(statearr_10630_10762[(1)] = (3));


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
});})(__10743,c__10225__auto___10756,G__10586_10744,G__10586_10745__$1,n__4408__auto___10742,jobs,results,process,async))
;
return ((function (__10743,switch__9843__auto__,c__10225__auto___10756,G__10586_10744,G__10586_10745__$1,n__4408__auto___10742,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9844__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9844__auto____0 = (function (){
var statearr_10631 = [null,null,null,null,null,null,null];
(statearr_10631[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9844__auto__);

(statearr_10631[(1)] = (1));

return statearr_10631;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9844__auto____1 = (function (state_10623){
while(true){
var ret_value__9845__auto__ = (function (){try{while(true){
var result__9846__auto__ = switch__9843__auto__(state_10623);
if(cljs.core.keyword_identical_QMARK_(result__9846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9846__auto__;
}
break;
}
}catch (e10632){if((e10632 instanceof Object)){
var ex__9847__auto__ = e10632;
var statearr_10633_10763 = state_10623;
(statearr_10633_10763[(5)] = ex__9847__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10623);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10632;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10764 = state_10623;
state_10623 = G__10764;
continue;
} else {
return ret_value__9845__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9844__auto__ = function(state_10623){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9844__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9844__auto____1.call(this,state_10623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9844__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9844__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9844__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9844__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9844__auto__;
})()
;})(__10743,switch__9843__auto__,c__10225__auto___10756,G__10586_10744,G__10586_10745__$1,n__4408__auto___10742,jobs,results,process,async))
})();
var state__10227__auto__ = (function (){var statearr_10634 = (f__10226__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10226__auto__.cljs$core$IFn$_invoke$arity$0() : f__10226__auto__.call(null));
(statearr_10634[(6)] = c__10225__auto___10756);

return statearr_10634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10227__auto__);
});})(__10743,c__10225__auto___10756,G__10586_10744,G__10586_10745__$1,n__4408__auto___10742,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10586_10745__$1)].join('')));

}

var G__10765 = (__10743 + (1));
__10743 = G__10765;
continue;
} else {
}
break;
}

var c__10225__auto___10766 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10225__auto___10766,jobs,results,process,async){
return (function (){
var f__10226__auto__ = (function (){var switch__9843__auto__ = ((function (c__10225__auto___10766,jobs,results,process,async){
return (function (state_10656){
var state_val_10657 = (state_10656[(1)]);
if((state_val_10657 === (1))){
var state_10656__$1 = state_10656;
var statearr_10658_10767 = state_10656__$1;
(statearr_10658_10767[(2)] = null);

(statearr_10658_10767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10657 === (2))){
var state_10656__$1 = state_10656;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10656__$1,(4),from);
} else {
if((state_val_10657 === (3))){
var inst_10654 = (state_10656[(2)]);
var state_10656__$1 = state_10656;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10656__$1,inst_10654);
} else {
if((state_val_10657 === (4))){
var inst_10637 = (state_10656[(7)]);
var inst_10637__$1 = (state_10656[(2)]);
var inst_10638 = (inst_10637__$1 == null);
var state_10656__$1 = (function (){var statearr_10659 = state_10656;
(statearr_10659[(7)] = inst_10637__$1);

return statearr_10659;
})();
if(cljs.core.truth_(inst_10638)){
var statearr_10660_10768 = state_10656__$1;
(statearr_10660_10768[(1)] = (5));

} else {
var statearr_10661_10769 = state_10656__$1;
(statearr_10661_10769[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10657 === (5))){
var inst_10640 = cljs.core.async.close_BANG_(jobs);
var state_10656__$1 = state_10656;
var statearr_10662_10770 = state_10656__$1;
(statearr_10662_10770[(2)] = inst_10640);

(statearr_10662_10770[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10657 === (6))){
var inst_10637 = (state_10656[(7)]);
var inst_10642 = (state_10656[(8)]);
var inst_10642__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_10643 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10644 = [inst_10637,inst_10642__$1];
var inst_10645 = (new cljs.core.PersistentVector(null,2,(5),inst_10643,inst_10644,null));
var state_10656__$1 = (function (){var statearr_10663 = state_10656;
(statearr_10663[(8)] = inst_10642__$1);

return statearr_10663;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10656__$1,(8),jobs,inst_10645);
} else {
if((state_val_10657 === (7))){
var inst_10652 = (state_10656[(2)]);
var state_10656__$1 = state_10656;
var statearr_10664_10771 = state_10656__$1;
(statearr_10664_10771[(2)] = inst_10652);

(statearr_10664_10771[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10657 === (8))){
var inst_10642 = (state_10656[(8)]);
var inst_10647 = (state_10656[(2)]);
var state_10656__$1 = (function (){var statearr_10665 = state_10656;
(statearr_10665[(9)] = inst_10647);

return statearr_10665;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10656__$1,(9),results,inst_10642);
} else {
if((state_val_10657 === (9))){
var inst_10649 = (state_10656[(2)]);
var state_10656__$1 = (function (){var statearr_10666 = state_10656;
(statearr_10666[(10)] = inst_10649);

return statearr_10666;
})();
var statearr_10667_10772 = state_10656__$1;
(statearr_10667_10772[(2)] = null);

(statearr_10667_10772[(1)] = (2));


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
});})(c__10225__auto___10766,jobs,results,process,async))
;
return ((function (switch__9843__auto__,c__10225__auto___10766,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9844__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9844__auto____0 = (function (){
var statearr_10668 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10668[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9844__auto__);

(statearr_10668[(1)] = (1));

return statearr_10668;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9844__auto____1 = (function (state_10656){
while(true){
var ret_value__9845__auto__ = (function (){try{while(true){
var result__9846__auto__ = switch__9843__auto__(state_10656);
if(cljs.core.keyword_identical_QMARK_(result__9846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9846__auto__;
}
break;
}
}catch (e10669){if((e10669 instanceof Object)){
var ex__9847__auto__ = e10669;
var statearr_10670_10773 = state_10656;
(statearr_10670_10773[(5)] = ex__9847__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10656);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10669;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10774 = state_10656;
state_10656 = G__10774;
continue;
} else {
return ret_value__9845__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9844__auto__ = function(state_10656){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9844__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9844__auto____1.call(this,state_10656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9844__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9844__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9844__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9844__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9844__auto__;
})()
;})(switch__9843__auto__,c__10225__auto___10766,jobs,results,process,async))
})();
var state__10227__auto__ = (function (){var statearr_10671 = (f__10226__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10226__auto__.cljs$core$IFn$_invoke$arity$0() : f__10226__auto__.call(null));
(statearr_10671[(6)] = c__10225__auto___10766);

return statearr_10671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10227__auto__);
});})(c__10225__auto___10766,jobs,results,process,async))
);


var c__10225__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10225__auto__,jobs,results,process,async){
return (function (){
var f__10226__auto__ = (function (){var switch__9843__auto__ = ((function (c__10225__auto__,jobs,results,process,async){
return (function (state_10709){
var state_val_10710 = (state_10709[(1)]);
if((state_val_10710 === (7))){
var inst_10705 = (state_10709[(2)]);
var state_10709__$1 = state_10709;
var statearr_10711_10775 = state_10709__$1;
(statearr_10711_10775[(2)] = inst_10705);

(statearr_10711_10775[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10710 === (20))){
var state_10709__$1 = state_10709;
var statearr_10712_10776 = state_10709__$1;
(statearr_10712_10776[(2)] = null);

(statearr_10712_10776[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10710 === (1))){
var state_10709__$1 = state_10709;
var statearr_10713_10777 = state_10709__$1;
(statearr_10713_10777[(2)] = null);

(statearr_10713_10777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10710 === (4))){
var inst_10674 = (state_10709[(7)]);
var inst_10674__$1 = (state_10709[(2)]);
var inst_10675 = (inst_10674__$1 == null);
var state_10709__$1 = (function (){var statearr_10714 = state_10709;
(statearr_10714[(7)] = inst_10674__$1);

return statearr_10714;
})();
if(cljs.core.truth_(inst_10675)){
var statearr_10715_10778 = state_10709__$1;
(statearr_10715_10778[(1)] = (5));

} else {
var statearr_10716_10779 = state_10709__$1;
(statearr_10716_10779[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10710 === (15))){
var inst_10687 = (state_10709[(8)]);
var state_10709__$1 = state_10709;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10709__$1,(18),to,inst_10687);
} else {
if((state_val_10710 === (21))){
var inst_10700 = (state_10709[(2)]);
var state_10709__$1 = state_10709;
var statearr_10717_10780 = state_10709__$1;
(statearr_10717_10780[(2)] = inst_10700);

(statearr_10717_10780[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10710 === (13))){
var inst_10702 = (state_10709[(2)]);
var state_10709__$1 = (function (){var statearr_10718 = state_10709;
(statearr_10718[(9)] = inst_10702);

return statearr_10718;
})();
var statearr_10719_10781 = state_10709__$1;
(statearr_10719_10781[(2)] = null);

(statearr_10719_10781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10710 === (6))){
var inst_10674 = (state_10709[(7)]);
var state_10709__$1 = state_10709;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10709__$1,(11),inst_10674);
} else {
if((state_val_10710 === (17))){
var inst_10695 = (state_10709[(2)]);
var state_10709__$1 = state_10709;
if(cljs.core.truth_(inst_10695)){
var statearr_10720_10782 = state_10709__$1;
(statearr_10720_10782[(1)] = (19));

} else {
var statearr_10721_10783 = state_10709__$1;
(statearr_10721_10783[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10710 === (3))){
var inst_10707 = (state_10709[(2)]);
var state_10709__$1 = state_10709;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10709__$1,inst_10707);
} else {
if((state_val_10710 === (12))){
var inst_10684 = (state_10709[(10)]);
var state_10709__$1 = state_10709;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10709__$1,(14),inst_10684);
} else {
if((state_val_10710 === (2))){
var state_10709__$1 = state_10709;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10709__$1,(4),results);
} else {
if((state_val_10710 === (19))){
var state_10709__$1 = state_10709;
var statearr_10722_10784 = state_10709__$1;
(statearr_10722_10784[(2)] = null);

(statearr_10722_10784[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10710 === (11))){
var inst_10684 = (state_10709[(2)]);
var state_10709__$1 = (function (){var statearr_10723 = state_10709;
(statearr_10723[(10)] = inst_10684);

return statearr_10723;
})();
var statearr_10724_10785 = state_10709__$1;
(statearr_10724_10785[(2)] = null);

(statearr_10724_10785[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10710 === (9))){
var state_10709__$1 = state_10709;
var statearr_10725_10786 = state_10709__$1;
(statearr_10725_10786[(2)] = null);

(statearr_10725_10786[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10710 === (5))){
var state_10709__$1 = state_10709;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10726_10787 = state_10709__$1;
(statearr_10726_10787[(1)] = (8));

} else {
var statearr_10727_10788 = state_10709__$1;
(statearr_10727_10788[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10710 === (14))){
var inst_10687 = (state_10709[(8)]);
var inst_10689 = (state_10709[(11)]);
var inst_10687__$1 = (state_10709[(2)]);
var inst_10688 = (inst_10687__$1 == null);
var inst_10689__$1 = cljs.core.not(inst_10688);
var state_10709__$1 = (function (){var statearr_10728 = state_10709;
(statearr_10728[(8)] = inst_10687__$1);

(statearr_10728[(11)] = inst_10689__$1);

return statearr_10728;
})();
if(inst_10689__$1){
var statearr_10729_10789 = state_10709__$1;
(statearr_10729_10789[(1)] = (15));

} else {
var statearr_10730_10790 = state_10709__$1;
(statearr_10730_10790[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10710 === (16))){
var inst_10689 = (state_10709[(11)]);
var state_10709__$1 = state_10709;
var statearr_10731_10791 = state_10709__$1;
(statearr_10731_10791[(2)] = inst_10689);

(statearr_10731_10791[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10710 === (10))){
var inst_10681 = (state_10709[(2)]);
var state_10709__$1 = state_10709;
var statearr_10732_10792 = state_10709__$1;
(statearr_10732_10792[(2)] = inst_10681);

(statearr_10732_10792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10710 === (18))){
var inst_10692 = (state_10709[(2)]);
var state_10709__$1 = state_10709;
var statearr_10733_10793 = state_10709__$1;
(statearr_10733_10793[(2)] = inst_10692);

(statearr_10733_10793[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10710 === (8))){
var inst_10678 = cljs.core.async.close_BANG_(to);
var state_10709__$1 = state_10709;
var statearr_10734_10794 = state_10709__$1;
(statearr_10734_10794[(2)] = inst_10678);

(statearr_10734_10794[(1)] = (10));


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
}
}
}
});})(c__10225__auto__,jobs,results,process,async))
;
return ((function (switch__9843__auto__,c__10225__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9844__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9844__auto____0 = (function (){
var statearr_10735 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10735[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9844__auto__);

(statearr_10735[(1)] = (1));

return statearr_10735;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9844__auto____1 = (function (state_10709){
while(true){
var ret_value__9845__auto__ = (function (){try{while(true){
var result__9846__auto__ = switch__9843__auto__(state_10709);
if(cljs.core.keyword_identical_QMARK_(result__9846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9846__auto__;
}
break;
}
}catch (e10736){if((e10736 instanceof Object)){
var ex__9847__auto__ = e10736;
var statearr_10737_10795 = state_10709;
(statearr_10737_10795[(5)] = ex__9847__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10709);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10736;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10796 = state_10709;
state_10709 = G__10796;
continue;
} else {
return ret_value__9845__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9844__auto__ = function(state_10709){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9844__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9844__auto____1.call(this,state_10709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9844__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9844__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9844__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9844__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9844__auto__;
})()
;})(switch__9843__auto__,c__10225__auto__,jobs,results,process,async))
})();
var state__10227__auto__ = (function (){var statearr_10738 = (f__10226__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10226__auto__.cljs$core$IFn$_invoke$arity$0() : f__10226__auto__.call(null));
(statearr_10738[(6)] = c__10225__auto__);

return statearr_10738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10227__auto__);
});})(c__10225__auto__,jobs,results,process,async))
);

return c__10225__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__10798 = arguments.length;
switch (G__10798) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__10801 = arguments.length;
switch (G__10801) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__10804 = arguments.length;
switch (G__10804) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__10225__auto___10853 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10225__auto___10853,tc,fc){
return (function (){
var f__10226__auto__ = (function (){var switch__9843__auto__ = ((function (c__10225__auto___10853,tc,fc){
return (function (state_10830){
var state_val_10831 = (state_10830[(1)]);
if((state_val_10831 === (7))){
var inst_10826 = (state_10830[(2)]);
var state_10830__$1 = state_10830;
var statearr_10832_10854 = state_10830__$1;
(statearr_10832_10854[(2)] = inst_10826);

(statearr_10832_10854[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10831 === (1))){
var state_10830__$1 = state_10830;
var statearr_10833_10855 = state_10830__$1;
(statearr_10833_10855[(2)] = null);

(statearr_10833_10855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10831 === (4))){
var inst_10807 = (state_10830[(7)]);
var inst_10807__$1 = (state_10830[(2)]);
var inst_10808 = (inst_10807__$1 == null);
var state_10830__$1 = (function (){var statearr_10834 = state_10830;
(statearr_10834[(7)] = inst_10807__$1);

return statearr_10834;
})();
if(cljs.core.truth_(inst_10808)){
var statearr_10835_10856 = state_10830__$1;
(statearr_10835_10856[(1)] = (5));

} else {
var statearr_10836_10857 = state_10830__$1;
(statearr_10836_10857[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10831 === (13))){
var state_10830__$1 = state_10830;
var statearr_10837_10858 = state_10830__$1;
(statearr_10837_10858[(2)] = null);

(statearr_10837_10858[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10831 === (6))){
var inst_10807 = (state_10830[(7)]);
var inst_10813 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_10807) : p.call(null,inst_10807));
var state_10830__$1 = state_10830;
if(cljs.core.truth_(inst_10813)){
var statearr_10838_10859 = state_10830__$1;
(statearr_10838_10859[(1)] = (9));

} else {
var statearr_10839_10860 = state_10830__$1;
(statearr_10839_10860[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10831 === (3))){
var inst_10828 = (state_10830[(2)]);
var state_10830__$1 = state_10830;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10830__$1,inst_10828);
} else {
if((state_val_10831 === (12))){
var state_10830__$1 = state_10830;
var statearr_10840_10861 = state_10830__$1;
(statearr_10840_10861[(2)] = null);

(statearr_10840_10861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10831 === (2))){
var state_10830__$1 = state_10830;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10830__$1,(4),ch);
} else {
if((state_val_10831 === (11))){
var inst_10807 = (state_10830[(7)]);
var inst_10817 = (state_10830[(2)]);
var state_10830__$1 = state_10830;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10830__$1,(8),inst_10817,inst_10807);
} else {
if((state_val_10831 === (9))){
var state_10830__$1 = state_10830;
var statearr_10841_10862 = state_10830__$1;
(statearr_10841_10862[(2)] = tc);

(statearr_10841_10862[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10831 === (5))){
var inst_10810 = cljs.core.async.close_BANG_(tc);
var inst_10811 = cljs.core.async.close_BANG_(fc);
var state_10830__$1 = (function (){var statearr_10842 = state_10830;
(statearr_10842[(8)] = inst_10810);

return statearr_10842;
})();
var statearr_10843_10863 = state_10830__$1;
(statearr_10843_10863[(2)] = inst_10811);

(statearr_10843_10863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10831 === (14))){
var inst_10824 = (state_10830[(2)]);
var state_10830__$1 = state_10830;
var statearr_10844_10864 = state_10830__$1;
(statearr_10844_10864[(2)] = inst_10824);

(statearr_10844_10864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10831 === (10))){
var state_10830__$1 = state_10830;
var statearr_10845_10865 = state_10830__$1;
(statearr_10845_10865[(2)] = fc);

(statearr_10845_10865[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10831 === (8))){
var inst_10819 = (state_10830[(2)]);
var state_10830__$1 = state_10830;
if(cljs.core.truth_(inst_10819)){
var statearr_10846_10866 = state_10830__$1;
(statearr_10846_10866[(1)] = (12));

} else {
var statearr_10847_10867 = state_10830__$1;
(statearr_10847_10867[(1)] = (13));

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
});})(c__10225__auto___10853,tc,fc))
;
return ((function (switch__9843__auto__,c__10225__auto___10853,tc,fc){
return (function() {
var cljs$core$async$state_machine__9844__auto__ = null;
var cljs$core$async$state_machine__9844__auto____0 = (function (){
var statearr_10848 = [null,null,null,null,null,null,null,null,null];
(statearr_10848[(0)] = cljs$core$async$state_machine__9844__auto__);

(statearr_10848[(1)] = (1));

return statearr_10848;
});
var cljs$core$async$state_machine__9844__auto____1 = (function (state_10830){
while(true){
var ret_value__9845__auto__ = (function (){try{while(true){
var result__9846__auto__ = switch__9843__auto__(state_10830);
if(cljs.core.keyword_identical_QMARK_(result__9846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9846__auto__;
}
break;
}
}catch (e10849){if((e10849 instanceof Object)){
var ex__9847__auto__ = e10849;
var statearr_10850_10868 = state_10830;
(statearr_10850_10868[(5)] = ex__9847__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10830);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10849;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10869 = state_10830;
state_10830 = G__10869;
continue;
} else {
return ret_value__9845__auto__;
}
break;
}
});
cljs$core$async$state_machine__9844__auto__ = function(state_10830){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9844__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9844__auto____1.call(this,state_10830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9844__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9844__auto____0;
cljs$core$async$state_machine__9844__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9844__auto____1;
return cljs$core$async$state_machine__9844__auto__;
})()
;})(switch__9843__auto__,c__10225__auto___10853,tc,fc))
})();
var state__10227__auto__ = (function (){var statearr_10851 = (f__10226__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10226__auto__.cljs$core$IFn$_invoke$arity$0() : f__10226__auto__.call(null));
(statearr_10851[(6)] = c__10225__auto___10853);

return statearr_10851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10227__auto__);
});})(c__10225__auto___10853,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__10225__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10225__auto__){
return (function (){
var f__10226__auto__ = (function (){var switch__9843__auto__ = ((function (c__10225__auto__){
return (function (state_10890){
var state_val_10891 = (state_10890[(1)]);
if((state_val_10891 === (7))){
var inst_10886 = (state_10890[(2)]);
var state_10890__$1 = state_10890;
var statearr_10892_10910 = state_10890__$1;
(statearr_10892_10910[(2)] = inst_10886);

(statearr_10892_10910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10891 === (1))){
var inst_10870 = init;
var state_10890__$1 = (function (){var statearr_10893 = state_10890;
(statearr_10893[(7)] = inst_10870);

return statearr_10893;
})();
var statearr_10894_10911 = state_10890__$1;
(statearr_10894_10911[(2)] = null);

(statearr_10894_10911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10891 === (4))){
var inst_10873 = (state_10890[(8)]);
var inst_10873__$1 = (state_10890[(2)]);
var inst_10874 = (inst_10873__$1 == null);
var state_10890__$1 = (function (){var statearr_10895 = state_10890;
(statearr_10895[(8)] = inst_10873__$1);

return statearr_10895;
})();
if(cljs.core.truth_(inst_10874)){
var statearr_10896_10912 = state_10890__$1;
(statearr_10896_10912[(1)] = (5));

} else {
var statearr_10897_10913 = state_10890__$1;
(statearr_10897_10913[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10891 === (6))){
var inst_10877 = (state_10890[(9)]);
var inst_10870 = (state_10890[(7)]);
var inst_10873 = (state_10890[(8)]);
var inst_10877__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_10870,inst_10873) : f.call(null,inst_10870,inst_10873));
var inst_10878 = cljs.core.reduced_QMARK_(inst_10877__$1);
var state_10890__$1 = (function (){var statearr_10898 = state_10890;
(statearr_10898[(9)] = inst_10877__$1);

return statearr_10898;
})();
if(inst_10878){
var statearr_10899_10914 = state_10890__$1;
(statearr_10899_10914[(1)] = (8));

} else {
var statearr_10900_10915 = state_10890__$1;
(statearr_10900_10915[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10891 === (3))){
var inst_10888 = (state_10890[(2)]);
var state_10890__$1 = state_10890;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10890__$1,inst_10888);
} else {
if((state_val_10891 === (2))){
var state_10890__$1 = state_10890;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10890__$1,(4),ch);
} else {
if((state_val_10891 === (9))){
var inst_10877 = (state_10890[(9)]);
var inst_10870 = inst_10877;
var state_10890__$1 = (function (){var statearr_10901 = state_10890;
(statearr_10901[(7)] = inst_10870);

return statearr_10901;
})();
var statearr_10902_10916 = state_10890__$1;
(statearr_10902_10916[(2)] = null);

(statearr_10902_10916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10891 === (5))){
var inst_10870 = (state_10890[(7)]);
var state_10890__$1 = state_10890;
var statearr_10903_10917 = state_10890__$1;
(statearr_10903_10917[(2)] = inst_10870);

(statearr_10903_10917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10891 === (10))){
var inst_10884 = (state_10890[(2)]);
var state_10890__$1 = state_10890;
var statearr_10904_10918 = state_10890__$1;
(statearr_10904_10918[(2)] = inst_10884);

(statearr_10904_10918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10891 === (8))){
var inst_10877 = (state_10890[(9)]);
var inst_10880 = cljs.core.deref(inst_10877);
var state_10890__$1 = state_10890;
var statearr_10905_10919 = state_10890__$1;
(statearr_10905_10919[(2)] = inst_10880);

(statearr_10905_10919[(1)] = (10));


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
});})(c__10225__auto__))
;
return ((function (switch__9843__auto__,c__10225__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__9844__auto__ = null;
var cljs$core$async$reduce_$_state_machine__9844__auto____0 = (function (){
var statearr_10906 = [null,null,null,null,null,null,null,null,null,null];
(statearr_10906[(0)] = cljs$core$async$reduce_$_state_machine__9844__auto__);

(statearr_10906[(1)] = (1));

return statearr_10906;
});
var cljs$core$async$reduce_$_state_machine__9844__auto____1 = (function (state_10890){
while(true){
var ret_value__9845__auto__ = (function (){try{while(true){
var result__9846__auto__ = switch__9843__auto__(state_10890);
if(cljs.core.keyword_identical_QMARK_(result__9846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9846__auto__;
}
break;
}
}catch (e10907){if((e10907 instanceof Object)){
var ex__9847__auto__ = e10907;
var statearr_10908_10920 = state_10890;
(statearr_10908_10920[(5)] = ex__9847__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10890);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10907;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10921 = state_10890;
state_10890 = G__10921;
continue;
} else {
return ret_value__9845__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__9844__auto__ = function(state_10890){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__9844__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__9844__auto____1.call(this,state_10890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__9844__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__9844__auto____0;
cljs$core$async$reduce_$_state_machine__9844__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__9844__auto____1;
return cljs$core$async$reduce_$_state_machine__9844__auto__;
})()
;})(switch__9843__auto__,c__10225__auto__))
})();
var state__10227__auto__ = (function (){var statearr_10909 = (f__10226__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10226__auto__.cljs$core$IFn$_invoke$arity$0() : f__10226__auto__.call(null));
(statearr_10909[(6)] = c__10225__auto__);

return statearr_10909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10227__auto__);
});})(c__10225__auto__))
);

return c__10225__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__10225__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10225__auto__,f__$1){
return (function (){
var f__10226__auto__ = (function (){var switch__9843__auto__ = ((function (c__10225__auto__,f__$1){
return (function (state_10927){
var state_val_10928 = (state_10927[(1)]);
if((state_val_10928 === (1))){
var inst_10922 = cljs.core.async.reduce(f__$1,init,ch);
var state_10927__$1 = state_10927;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10927__$1,(2),inst_10922);
} else {
if((state_val_10928 === (2))){
var inst_10924 = (state_10927[(2)]);
var inst_10925 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_10924) : f__$1.call(null,inst_10924));
var state_10927__$1 = state_10927;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10927__$1,inst_10925);
} else {
return null;
}
}
});})(c__10225__auto__,f__$1))
;
return ((function (switch__9843__auto__,c__10225__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__9844__auto__ = null;
var cljs$core$async$transduce_$_state_machine__9844__auto____0 = (function (){
var statearr_10929 = [null,null,null,null,null,null,null];
(statearr_10929[(0)] = cljs$core$async$transduce_$_state_machine__9844__auto__);

(statearr_10929[(1)] = (1));

return statearr_10929;
});
var cljs$core$async$transduce_$_state_machine__9844__auto____1 = (function (state_10927){
while(true){
var ret_value__9845__auto__ = (function (){try{while(true){
var result__9846__auto__ = switch__9843__auto__(state_10927);
if(cljs.core.keyword_identical_QMARK_(result__9846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9846__auto__;
}
break;
}
}catch (e10930){if((e10930 instanceof Object)){
var ex__9847__auto__ = e10930;
var statearr_10931_10933 = state_10927;
(statearr_10931_10933[(5)] = ex__9847__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10927);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10930;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10934 = state_10927;
state_10927 = G__10934;
continue;
} else {
return ret_value__9845__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__9844__auto__ = function(state_10927){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__9844__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__9844__auto____1.call(this,state_10927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__9844__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__9844__auto____0;
cljs$core$async$transduce_$_state_machine__9844__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__9844__auto____1;
return cljs$core$async$transduce_$_state_machine__9844__auto__;
})()
;})(switch__9843__auto__,c__10225__auto__,f__$1))
})();
var state__10227__auto__ = (function (){var statearr_10932 = (f__10226__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10226__auto__.cljs$core$IFn$_invoke$arity$0() : f__10226__auto__.call(null));
(statearr_10932[(6)] = c__10225__auto__);

return statearr_10932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10227__auto__);
});})(c__10225__auto__,f__$1))
);

return c__10225__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__10936 = arguments.length;
switch (G__10936) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__10225__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10225__auto__){
return (function (){
var f__10226__auto__ = (function (){var switch__9843__auto__ = ((function (c__10225__auto__){
return (function (state_10961){
var state_val_10962 = (state_10961[(1)]);
if((state_val_10962 === (7))){
var inst_10943 = (state_10961[(2)]);
var state_10961__$1 = state_10961;
var statearr_10963_10984 = state_10961__$1;
(statearr_10963_10984[(2)] = inst_10943);

(statearr_10963_10984[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10962 === (1))){
var inst_10937 = cljs.core.seq(coll);
var inst_10938 = inst_10937;
var state_10961__$1 = (function (){var statearr_10964 = state_10961;
(statearr_10964[(7)] = inst_10938);

return statearr_10964;
})();
var statearr_10965_10985 = state_10961__$1;
(statearr_10965_10985[(2)] = null);

(statearr_10965_10985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10962 === (4))){
var inst_10938 = (state_10961[(7)]);
var inst_10941 = cljs.core.first(inst_10938);
var state_10961__$1 = state_10961;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10961__$1,(7),ch,inst_10941);
} else {
if((state_val_10962 === (13))){
var inst_10955 = (state_10961[(2)]);
var state_10961__$1 = state_10961;
var statearr_10966_10986 = state_10961__$1;
(statearr_10966_10986[(2)] = inst_10955);

(statearr_10966_10986[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10962 === (6))){
var inst_10946 = (state_10961[(2)]);
var state_10961__$1 = state_10961;
if(cljs.core.truth_(inst_10946)){
var statearr_10967_10987 = state_10961__$1;
(statearr_10967_10987[(1)] = (8));

} else {
var statearr_10968_10988 = state_10961__$1;
(statearr_10968_10988[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10962 === (3))){
var inst_10959 = (state_10961[(2)]);
var state_10961__$1 = state_10961;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10961__$1,inst_10959);
} else {
if((state_val_10962 === (12))){
var state_10961__$1 = state_10961;
var statearr_10969_10989 = state_10961__$1;
(statearr_10969_10989[(2)] = null);

(statearr_10969_10989[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10962 === (2))){
var inst_10938 = (state_10961[(7)]);
var state_10961__$1 = state_10961;
if(cljs.core.truth_(inst_10938)){
var statearr_10970_10990 = state_10961__$1;
(statearr_10970_10990[(1)] = (4));

} else {
var statearr_10971_10991 = state_10961__$1;
(statearr_10971_10991[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10962 === (11))){
var inst_10952 = cljs.core.async.close_BANG_(ch);
var state_10961__$1 = state_10961;
var statearr_10972_10992 = state_10961__$1;
(statearr_10972_10992[(2)] = inst_10952);

(statearr_10972_10992[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10962 === (9))){
var state_10961__$1 = state_10961;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10973_10993 = state_10961__$1;
(statearr_10973_10993[(1)] = (11));

} else {
var statearr_10974_10994 = state_10961__$1;
(statearr_10974_10994[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10962 === (5))){
var inst_10938 = (state_10961[(7)]);
var state_10961__$1 = state_10961;
var statearr_10975_10995 = state_10961__$1;
(statearr_10975_10995[(2)] = inst_10938);

(statearr_10975_10995[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10962 === (10))){
var inst_10957 = (state_10961[(2)]);
var state_10961__$1 = state_10961;
var statearr_10976_10996 = state_10961__$1;
(statearr_10976_10996[(2)] = inst_10957);

(statearr_10976_10996[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10962 === (8))){
var inst_10938 = (state_10961[(7)]);
var inst_10948 = cljs.core.next(inst_10938);
var inst_10938__$1 = inst_10948;
var state_10961__$1 = (function (){var statearr_10977 = state_10961;
(statearr_10977[(7)] = inst_10938__$1);

return statearr_10977;
})();
var statearr_10978_10997 = state_10961__$1;
(statearr_10978_10997[(2)] = null);

(statearr_10978_10997[(1)] = (2));


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
});})(c__10225__auto__))
;
return ((function (switch__9843__auto__,c__10225__auto__){
return (function() {
var cljs$core$async$state_machine__9844__auto__ = null;
var cljs$core$async$state_machine__9844__auto____0 = (function (){
var statearr_10979 = [null,null,null,null,null,null,null,null];
(statearr_10979[(0)] = cljs$core$async$state_machine__9844__auto__);

(statearr_10979[(1)] = (1));

return statearr_10979;
});
var cljs$core$async$state_machine__9844__auto____1 = (function (state_10961){
while(true){
var ret_value__9845__auto__ = (function (){try{while(true){
var result__9846__auto__ = switch__9843__auto__(state_10961);
if(cljs.core.keyword_identical_QMARK_(result__9846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9846__auto__;
}
break;
}
}catch (e10980){if((e10980 instanceof Object)){
var ex__9847__auto__ = e10980;
var statearr_10981_10998 = state_10961;
(statearr_10981_10998[(5)] = ex__9847__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10961);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10980;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10999 = state_10961;
state_10961 = G__10999;
continue;
} else {
return ret_value__9845__auto__;
}
break;
}
});
cljs$core$async$state_machine__9844__auto__ = function(state_10961){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9844__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9844__auto____1.call(this,state_10961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9844__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9844__auto____0;
cljs$core$async$state_machine__9844__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9844__auto____1;
return cljs$core$async$state_machine__9844__auto__;
})()
;})(switch__9843__auto__,c__10225__auto__))
})();
var state__10227__auto__ = (function (){var statearr_10982 = (f__10226__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10226__auto__.cljs$core$IFn$_invoke$arity$0() : f__10226__auto__.call(null));
(statearr_10982[(6)] = c__10225__auto__);

return statearr_10982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10227__auto__);
});})(c__10225__auto__))
);

return c__10225__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4244__auto__.call(null,_));
} else {
var m__4244__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__4244__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4244__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4244__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4244__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto__.call(null,m,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto__.call(null,m));
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11000 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11000 = (function (ch,cs,meta11001){
this.ch = ch;
this.cs = cs;
this.meta11001 = meta11001;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async11000.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11002,meta11001__$1){
var self__ = this;
var _11002__$1 = this;
return (new cljs.core.async.t_cljs$core$async11000(self__.ch,self__.cs,meta11001__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async11000.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11002){
var self__ = this;
var _11002__$1 = this;
return self__.meta11001;
});})(cs))
;

cljs.core.async.t_cljs$core$async11000.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11000.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async11000.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11000.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async11000.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async11000.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async11000.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta11001","meta11001",657470041,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async11000.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11000.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11000";

cljs.core.async.t_cljs$core$async11000.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async11000");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11000.
 */
cljs.core.async.__GT_t_cljs$core$async11000 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async11000(ch__$1,cs__$1,meta11001){
return (new cljs.core.async.t_cljs$core$async11000(ch__$1,cs__$1,meta11001));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async11000(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__10225__auto___11222 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10225__auto___11222,cs,m,dchan,dctr,done){
return (function (){
var f__10226__auto__ = (function (){var switch__9843__auto__ = ((function (c__10225__auto___11222,cs,m,dchan,dctr,done){
return (function (state_11137){
var state_val_11138 = (state_11137[(1)]);
if((state_val_11138 === (7))){
var inst_11133 = (state_11137[(2)]);
var state_11137__$1 = state_11137;
var statearr_11139_11223 = state_11137__$1;
(statearr_11139_11223[(2)] = inst_11133);

(statearr_11139_11223[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11138 === (20))){
var inst_11036 = (state_11137[(7)]);
var inst_11048 = cljs.core.first(inst_11036);
var inst_11049 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11048,(0),null);
var inst_11050 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11048,(1),null);
var state_11137__$1 = (function (){var statearr_11140 = state_11137;
(statearr_11140[(8)] = inst_11049);

return statearr_11140;
})();
if(cljs.core.truth_(inst_11050)){
var statearr_11141_11224 = state_11137__$1;
(statearr_11141_11224[(1)] = (22));

} else {
var statearr_11142_11225 = state_11137__$1;
(statearr_11142_11225[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11138 === (27))){
var inst_11080 = (state_11137[(9)]);
var inst_11085 = (state_11137[(10)]);
var inst_11005 = (state_11137[(11)]);
var inst_11078 = (state_11137[(12)]);
var inst_11085__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_11078,inst_11080);
var inst_11086 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11085__$1,inst_11005,done);
var state_11137__$1 = (function (){var statearr_11143 = state_11137;
(statearr_11143[(10)] = inst_11085__$1);

return statearr_11143;
})();
if(cljs.core.truth_(inst_11086)){
var statearr_11144_11226 = state_11137__$1;
(statearr_11144_11226[(1)] = (30));

} else {
var statearr_11145_11227 = state_11137__$1;
(statearr_11145_11227[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11138 === (1))){
var state_11137__$1 = state_11137;
var statearr_11146_11228 = state_11137__$1;
(statearr_11146_11228[(2)] = null);

(statearr_11146_11228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11138 === (24))){
var inst_11036 = (state_11137[(7)]);
var inst_11055 = (state_11137[(2)]);
var inst_11056 = cljs.core.next(inst_11036);
var inst_11014 = inst_11056;
var inst_11015 = null;
var inst_11016 = (0);
var inst_11017 = (0);
var state_11137__$1 = (function (){var statearr_11147 = state_11137;
(statearr_11147[(13)] = inst_11016);

(statearr_11147[(14)] = inst_11014);

(statearr_11147[(15)] = inst_11055);

(statearr_11147[(16)] = inst_11015);

(statearr_11147[(17)] = inst_11017);

return statearr_11147;
})();
var statearr_11148_11229 = state_11137__$1;
(statearr_11148_11229[(2)] = null);

(statearr_11148_11229[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11138 === (39))){
var state_11137__$1 = state_11137;
var statearr_11152_11230 = state_11137__$1;
(statearr_11152_11230[(2)] = null);

(statearr_11152_11230[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11138 === (4))){
var inst_11005 = (state_11137[(11)]);
var inst_11005__$1 = (state_11137[(2)]);
var inst_11006 = (inst_11005__$1 == null);
var state_11137__$1 = (function (){var statearr_11153 = state_11137;
(statearr_11153[(11)] = inst_11005__$1);

return statearr_11153;
})();
if(cljs.core.truth_(inst_11006)){
var statearr_11154_11231 = state_11137__$1;
(statearr_11154_11231[(1)] = (5));

} else {
var statearr_11155_11232 = state_11137__$1;
(statearr_11155_11232[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11138 === (15))){
var inst_11016 = (state_11137[(13)]);
var inst_11014 = (state_11137[(14)]);
var inst_11015 = (state_11137[(16)]);
var inst_11017 = (state_11137[(17)]);
var inst_11032 = (state_11137[(2)]);
var inst_11033 = (inst_11017 + (1));
var tmp11149 = inst_11016;
var tmp11150 = inst_11014;
var tmp11151 = inst_11015;
var inst_11014__$1 = tmp11150;
var inst_11015__$1 = tmp11151;
var inst_11016__$1 = tmp11149;
var inst_11017__$1 = inst_11033;
var state_11137__$1 = (function (){var statearr_11156 = state_11137;
(statearr_11156[(18)] = inst_11032);

(statearr_11156[(13)] = inst_11016__$1);

(statearr_11156[(14)] = inst_11014__$1);

(statearr_11156[(16)] = inst_11015__$1);

(statearr_11156[(17)] = inst_11017__$1);

return statearr_11156;
})();
var statearr_11157_11233 = state_11137__$1;
(statearr_11157_11233[(2)] = null);

(statearr_11157_11233[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11138 === (21))){
var inst_11059 = (state_11137[(2)]);
var state_11137__$1 = state_11137;
var statearr_11161_11234 = state_11137__$1;
(statearr_11161_11234[(2)] = inst_11059);

(statearr_11161_11234[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11138 === (31))){
var inst_11085 = (state_11137[(10)]);
var inst_11089 = done(null);
var inst_11090 = cljs.core.async.untap_STAR_(m,inst_11085);
var state_11137__$1 = (function (){var statearr_11162 = state_11137;
(statearr_11162[(19)] = inst_11089);

return statearr_11162;
})();
var statearr_11163_11235 = state_11137__$1;
(statearr_11163_11235[(2)] = inst_11090);

(statearr_11163_11235[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11138 === (32))){
var inst_11080 = (state_11137[(9)]);
var inst_11079 = (state_11137[(20)]);
var inst_11078 = (state_11137[(12)]);
var inst_11077 = (state_11137[(21)]);
var inst_11092 = (state_11137[(2)]);
var inst_11093 = (inst_11080 + (1));
var tmp11158 = inst_11079;
var tmp11159 = inst_11078;
var tmp11160 = inst_11077;
var inst_11077__$1 = tmp11160;
var inst_11078__$1 = tmp11159;
var inst_11079__$1 = tmp11158;
var inst_11080__$1 = inst_11093;
var state_11137__$1 = (function (){var statearr_11164 = state_11137;
(statearr_11164[(9)] = inst_11080__$1);

(statearr_11164[(20)] = inst_11079__$1);

(statearr_11164[(22)] = inst_11092);

(statearr_11164[(12)] = inst_11078__$1);

(statearr_11164[(21)] = inst_11077__$1);

return statearr_11164;
})();
var statearr_11165_11236 = state_11137__$1;
(statearr_11165_11236[(2)] = null);

(statearr_11165_11236[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11138 === (40))){
var inst_11105 = (state_11137[(23)]);
var inst_11109 = done(null);
var inst_11110 = cljs.core.async.untap_STAR_(m,inst_11105);
var state_11137__$1 = (function (){var statearr_11166 = state_11137;
(statearr_11166[(24)] = inst_11109);

return statearr_11166;
})();
var statearr_11167_11237 = state_11137__$1;
(statearr_11167_11237[(2)] = inst_11110);

(statearr_11167_11237[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11138 === (33))){
var inst_11096 = (state_11137[(25)]);
var inst_11098 = cljs.core.chunked_seq_QMARK_(inst_11096);
var state_11137__$1 = state_11137;
if(inst_11098){
var statearr_11168_11238 = state_11137__$1;
(statearr_11168_11238[(1)] = (36));

} else {
var statearr_11169_11239 = state_11137__$1;
(statearr_11169_11239[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11138 === (13))){
var inst_11026 = (state_11137[(26)]);
var inst_11029 = cljs.core.async.close_BANG_(inst_11026);
var state_11137__$1 = state_11137;
var statearr_11170_11240 = state_11137__$1;
(statearr_11170_11240[(2)] = inst_11029);

(statearr_11170_11240[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11138 === (22))){
var inst_11049 = (state_11137[(8)]);
var inst_11052 = cljs.core.async.close_BANG_(inst_11049);
var state_11137__$1 = state_11137;
var statearr_11171_11241 = state_11137__$1;
(statearr_11171_11241[(2)] = inst_11052);

(statearr_11171_11241[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11138 === (36))){
var inst_11096 = (state_11137[(25)]);
var inst_11100 = cljs.core.chunk_first(inst_11096);
var inst_11101 = cljs.core.chunk_rest(inst_11096);
var inst_11102 = cljs.core.count(inst_11100);
var inst_11077 = inst_11101;
var inst_11078 = inst_11100;
var inst_11079 = inst_11102;
var inst_11080 = (0);
var state_11137__$1 = (function (){var statearr_11172 = state_11137;
(statearr_11172[(9)] = inst_11080);

(statearr_11172[(20)] = inst_11079);

(statearr_11172[(12)] = inst_11078);

(statearr_11172[(21)] = inst_11077);

return statearr_11172;
})();
var statearr_11173_11242 = state_11137__$1;
(statearr_11173_11242[(2)] = null);

(statearr_11173_11242[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11138 === (41))){
var inst_11096 = (state_11137[(25)]);
var inst_11112 = (state_11137[(2)]);
var inst_11113 = cljs.core.next(inst_11096);
var inst_11077 = inst_11113;
var inst_11078 = null;
var inst_11079 = (0);
var inst_11080 = (0);
var state_11137__$1 = (function (){var statearr_11174 = state_11137;
(statearr_11174[(9)] = inst_11080);

(statearr_11174[(20)] = inst_11079);

(statearr_11174[(12)] = inst_11078);

(statearr_11174[(21)] = inst_11077);

(statearr_11174[(27)] = inst_11112);

return statearr_11174;
})();
var statearr_11175_11243 = state_11137__$1;
(statearr_11175_11243[(2)] = null);

(statearr_11175_11243[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11138 === (43))){
var state_11137__$1 = state_11137;
var statearr_11176_11244 = state_11137__$1;
(statearr_11176_11244[(2)] = null);

(statearr_11176_11244[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11138 === (29))){
var inst_11121 = (state_11137[(2)]);
var state_11137__$1 = state_11137;
var statearr_11177_11245 = state_11137__$1;
(statearr_11177_11245[(2)] = inst_11121);

(statearr_11177_11245[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11138 === (44))){
var inst_11130 = (state_11137[(2)]);
var state_11137__$1 = (function (){var statearr_11178 = state_11137;
(statearr_11178[(28)] = inst_11130);

return statearr_11178;
})();
var statearr_11179_11246 = state_11137__$1;
(statearr_11179_11246[(2)] = null);

(statearr_11179_11246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11138 === (6))){
var inst_11069 = (state_11137[(29)]);
var inst_11068 = cljs.core.deref(cs);
var inst_11069__$1 = cljs.core.keys(inst_11068);
var inst_11070 = cljs.core.count(inst_11069__$1);
var inst_11071 = cljs.core.reset_BANG_(dctr,inst_11070);
var inst_11076 = cljs.core.seq(inst_11069__$1);
var inst_11077 = inst_11076;
var inst_11078 = null;
var inst_11079 = (0);
var inst_11080 = (0);
var state_11137__$1 = (function (){var statearr_11180 = state_11137;
(statearr_11180[(30)] = inst_11071);

(statearr_11180[(9)] = inst_11080);

(statearr_11180[(20)] = inst_11079);

(statearr_11180[(29)] = inst_11069__$1);

(statearr_11180[(12)] = inst_11078);

(statearr_11180[(21)] = inst_11077);

return statearr_11180;
})();
var statearr_11181_11247 = state_11137__$1;
(statearr_11181_11247[(2)] = null);

(statearr_11181_11247[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11138 === (28))){
var inst_11096 = (state_11137[(25)]);
var inst_11077 = (state_11137[(21)]);
var inst_11096__$1 = cljs.core.seq(inst_11077);
var state_11137__$1 = (function (){var statearr_11182 = state_11137;
(statearr_11182[(25)] = inst_11096__$1);

return statearr_11182;
})();
if(inst_11096__$1){
var statearr_11183_11248 = state_11137__$1;
(statearr_11183_11248[(1)] = (33));

} else {
var statearr_11184_11249 = state_11137__$1;
(statearr_11184_11249[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11138 === (25))){
var inst_11080 = (state_11137[(9)]);
var inst_11079 = (state_11137[(20)]);
var inst_11082 = (inst_11080 < inst_11079);
var inst_11083 = inst_11082;
var state_11137__$1 = state_11137;
if(cljs.core.truth_(inst_11083)){
var statearr_11185_11250 = state_11137__$1;
(statearr_11185_11250[(1)] = (27));

} else {
var statearr_11186_11251 = state_11137__$1;
(statearr_11186_11251[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11138 === (34))){
var state_11137__$1 = state_11137;
var statearr_11187_11252 = state_11137__$1;
(statearr_11187_11252[(2)] = null);

(statearr_11187_11252[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11138 === (17))){
var state_11137__$1 = state_11137;
var statearr_11188_11253 = state_11137__$1;
(statearr_11188_11253[(2)] = null);

(statearr_11188_11253[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11138 === (3))){
var inst_11135 = (state_11137[(2)]);
var state_11137__$1 = state_11137;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11137__$1,inst_11135);
} else {
if((state_val_11138 === (12))){
var inst_11064 = (state_11137[(2)]);
var state_11137__$1 = state_11137;
var statearr_11189_11254 = state_11137__$1;
(statearr_11189_11254[(2)] = inst_11064);

(statearr_11189_11254[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11138 === (2))){
var state_11137__$1 = state_11137;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11137__$1,(4),ch);
} else {
if((state_val_11138 === (23))){
var state_11137__$1 = state_11137;
var statearr_11190_11255 = state_11137__$1;
(statearr_11190_11255[(2)] = null);

(statearr_11190_11255[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11138 === (35))){
var inst_11119 = (state_11137[(2)]);
var state_11137__$1 = state_11137;
var statearr_11191_11256 = state_11137__$1;
(statearr_11191_11256[(2)] = inst_11119);

(statearr_11191_11256[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11138 === (19))){
var inst_11036 = (state_11137[(7)]);
var inst_11040 = cljs.core.chunk_first(inst_11036);
var inst_11041 = cljs.core.chunk_rest(inst_11036);
var inst_11042 = cljs.core.count(inst_11040);
var inst_11014 = inst_11041;
var inst_11015 = inst_11040;
var inst_11016 = inst_11042;
var inst_11017 = (0);
var state_11137__$1 = (function (){var statearr_11192 = state_11137;
(statearr_11192[(13)] = inst_11016);

(statearr_11192[(14)] = inst_11014);

(statearr_11192[(16)] = inst_11015);

(statearr_11192[(17)] = inst_11017);

return statearr_11192;
})();
var statearr_11193_11257 = state_11137__$1;
(statearr_11193_11257[(2)] = null);

(statearr_11193_11257[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11138 === (11))){
var inst_11014 = (state_11137[(14)]);
var inst_11036 = (state_11137[(7)]);
var inst_11036__$1 = cljs.core.seq(inst_11014);
var state_11137__$1 = (function (){var statearr_11194 = state_11137;
(statearr_11194[(7)] = inst_11036__$1);

return statearr_11194;
})();
if(inst_11036__$1){
var statearr_11195_11258 = state_11137__$1;
(statearr_11195_11258[(1)] = (16));

} else {
var statearr_11196_11259 = state_11137__$1;
(statearr_11196_11259[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11138 === (9))){
var inst_11066 = (state_11137[(2)]);
var state_11137__$1 = state_11137;
var statearr_11197_11260 = state_11137__$1;
(statearr_11197_11260[(2)] = inst_11066);

(statearr_11197_11260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11138 === (5))){
var inst_11012 = cljs.core.deref(cs);
var inst_11013 = cljs.core.seq(inst_11012);
var inst_11014 = inst_11013;
var inst_11015 = null;
var inst_11016 = (0);
var inst_11017 = (0);
var state_11137__$1 = (function (){var statearr_11198 = state_11137;
(statearr_11198[(13)] = inst_11016);

(statearr_11198[(14)] = inst_11014);

(statearr_11198[(16)] = inst_11015);

(statearr_11198[(17)] = inst_11017);

return statearr_11198;
})();
var statearr_11199_11261 = state_11137__$1;
(statearr_11199_11261[(2)] = null);

(statearr_11199_11261[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11138 === (14))){
var state_11137__$1 = state_11137;
var statearr_11200_11262 = state_11137__$1;
(statearr_11200_11262[(2)] = null);

(statearr_11200_11262[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11138 === (45))){
var inst_11127 = (state_11137[(2)]);
var state_11137__$1 = state_11137;
var statearr_11201_11263 = state_11137__$1;
(statearr_11201_11263[(2)] = inst_11127);

(statearr_11201_11263[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11138 === (26))){
var inst_11069 = (state_11137[(29)]);
var inst_11123 = (state_11137[(2)]);
var inst_11124 = cljs.core.seq(inst_11069);
var state_11137__$1 = (function (){var statearr_11202 = state_11137;
(statearr_11202[(31)] = inst_11123);

return statearr_11202;
})();
if(inst_11124){
var statearr_11203_11264 = state_11137__$1;
(statearr_11203_11264[(1)] = (42));

} else {
var statearr_11204_11265 = state_11137__$1;
(statearr_11204_11265[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11138 === (16))){
var inst_11036 = (state_11137[(7)]);
var inst_11038 = cljs.core.chunked_seq_QMARK_(inst_11036);
var state_11137__$1 = state_11137;
if(inst_11038){
var statearr_11205_11266 = state_11137__$1;
(statearr_11205_11266[(1)] = (19));

} else {
var statearr_11206_11267 = state_11137__$1;
(statearr_11206_11267[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11138 === (38))){
var inst_11116 = (state_11137[(2)]);
var state_11137__$1 = state_11137;
var statearr_11207_11268 = state_11137__$1;
(statearr_11207_11268[(2)] = inst_11116);

(statearr_11207_11268[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11138 === (30))){
var state_11137__$1 = state_11137;
var statearr_11208_11269 = state_11137__$1;
(statearr_11208_11269[(2)] = null);

(statearr_11208_11269[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11138 === (10))){
var inst_11015 = (state_11137[(16)]);
var inst_11017 = (state_11137[(17)]);
var inst_11025 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_11015,inst_11017);
var inst_11026 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11025,(0),null);
var inst_11027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11025,(1),null);
var state_11137__$1 = (function (){var statearr_11209 = state_11137;
(statearr_11209[(26)] = inst_11026);

return statearr_11209;
})();
if(cljs.core.truth_(inst_11027)){
var statearr_11210_11270 = state_11137__$1;
(statearr_11210_11270[(1)] = (13));

} else {
var statearr_11211_11271 = state_11137__$1;
(statearr_11211_11271[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11138 === (18))){
var inst_11062 = (state_11137[(2)]);
var state_11137__$1 = state_11137;
var statearr_11212_11272 = state_11137__$1;
(statearr_11212_11272[(2)] = inst_11062);

(statearr_11212_11272[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11138 === (42))){
var state_11137__$1 = state_11137;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11137__$1,(45),dchan);
} else {
if((state_val_11138 === (37))){
var inst_11096 = (state_11137[(25)]);
var inst_11005 = (state_11137[(11)]);
var inst_11105 = (state_11137[(23)]);
var inst_11105__$1 = cljs.core.first(inst_11096);
var inst_11106 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11105__$1,inst_11005,done);
var state_11137__$1 = (function (){var statearr_11213 = state_11137;
(statearr_11213[(23)] = inst_11105__$1);

return statearr_11213;
})();
if(cljs.core.truth_(inst_11106)){
var statearr_11214_11273 = state_11137__$1;
(statearr_11214_11273[(1)] = (39));

} else {
var statearr_11215_11274 = state_11137__$1;
(statearr_11215_11274[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11138 === (8))){
var inst_11016 = (state_11137[(13)]);
var inst_11017 = (state_11137[(17)]);
var inst_11019 = (inst_11017 < inst_11016);
var inst_11020 = inst_11019;
var state_11137__$1 = state_11137;
if(cljs.core.truth_(inst_11020)){
var statearr_11216_11275 = state_11137__$1;
(statearr_11216_11275[(1)] = (10));

} else {
var statearr_11217_11276 = state_11137__$1;
(statearr_11217_11276[(1)] = (11));

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
}
}
}
}
}
}
}
}
}
});})(c__10225__auto___11222,cs,m,dchan,dctr,done))
;
return ((function (switch__9843__auto__,c__10225__auto___11222,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__9844__auto__ = null;
var cljs$core$async$mult_$_state_machine__9844__auto____0 = (function (){
var statearr_11218 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11218[(0)] = cljs$core$async$mult_$_state_machine__9844__auto__);

(statearr_11218[(1)] = (1));

return statearr_11218;
});
var cljs$core$async$mult_$_state_machine__9844__auto____1 = (function (state_11137){
while(true){
var ret_value__9845__auto__ = (function (){try{while(true){
var result__9846__auto__ = switch__9843__auto__(state_11137);
if(cljs.core.keyword_identical_QMARK_(result__9846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9846__auto__;
}
break;
}
}catch (e11219){if((e11219 instanceof Object)){
var ex__9847__auto__ = e11219;
var statearr_11220_11277 = state_11137;
(statearr_11220_11277[(5)] = ex__9847__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11137);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11219;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11278 = state_11137;
state_11137 = G__11278;
continue;
} else {
return ret_value__9845__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__9844__auto__ = function(state_11137){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__9844__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__9844__auto____1.call(this,state_11137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__9844__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__9844__auto____0;
cljs$core$async$mult_$_state_machine__9844__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__9844__auto____1;
return cljs$core$async$mult_$_state_machine__9844__auto__;
})()
;})(switch__9843__auto__,c__10225__auto___11222,cs,m,dchan,dctr,done))
})();
var state__10227__auto__ = (function (){var statearr_11221 = (f__10226__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10226__auto__.cljs$core$IFn$_invoke$arity$0() : f__10226__auto__.call(null));
(statearr_11221[(6)] = c__10225__auto___11222);

return statearr_11221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10227__auto__);
});})(c__10225__auto___11222,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__11280 = arguments.length;
switch (G__11280) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto__.call(null,m,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto__.call(null,m,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto__.call(null,m));
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4244__auto__.call(null,m,state_map));
} else {
var m__4244__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4244__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4244__auto__.call(null,m,mode));
} else {
var m__4244__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4244__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11292 = arguments.length;
var i__4532__auto___11293 = (0);
while(true){
if((i__4532__auto___11293 < len__4531__auto___11292)){
args__4534__auto__.push((arguments[i__4532__auto___11293]));

var G__11294 = (i__4532__auto___11293 + (1));
i__4532__auto___11293 = G__11294;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__11286){
var map__11287 = p__11286;
var map__11287__$1 = ((((!((map__11287 == null)))?(((((map__11287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11287):map__11287);
var opts = map__11287__$1;
var statearr_11289_11295 = state;
(statearr_11289_11295[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__11287,map__11287__$1,opts){
return (function (val){
var statearr_11290_11296 = state;
(statearr_11290_11296[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__11287,map__11287__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_11291_11297 = state;
(statearr_11291_11297[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq11282){
var G__11283 = cljs.core.first(seq11282);
var seq11282__$1 = cljs.core.next(seq11282);
var G__11284 = cljs.core.first(seq11282__$1);
var seq11282__$2 = cljs.core.next(seq11282__$1);
var G__11285 = cljs.core.first(seq11282__$2);
var seq11282__$3 = cljs.core.next(seq11282__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11283,G__11284,G__11285,seq11282__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_(solos)))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11298 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11298 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta11299){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta11299 = meta11299;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async11298.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11300,meta11299__$1){
var self__ = this;
var _11300__$1 = this;
return (new cljs.core.async.t_cljs$core$async11298(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta11299__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11298.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11300){
var self__ = this;
var _11300__$1 = this;
return self__.meta11299;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11298.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11298.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11298.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11298.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11298.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11298.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11298.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11298.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11298.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta11299","meta11299",2046729840,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11298.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11298.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11298";

cljs.core.async.t_cljs$core$async11298.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async11298");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11298.
 */
cljs.core.async.__GT_t_cljs$core$async11298 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async11298(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta11299){
return (new cljs.core.async.t_cljs$core$async11298(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta11299));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async11298(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10225__auto___11462 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10225__auto___11462,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__10226__auto__ = (function (){var switch__9843__auto__ = ((function (c__10225__auto___11462,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_11402){
var state_val_11403 = (state_11402[(1)]);
if((state_val_11403 === (7))){
var inst_11317 = (state_11402[(2)]);
var state_11402__$1 = state_11402;
var statearr_11404_11463 = state_11402__$1;
(statearr_11404_11463[(2)] = inst_11317);

(statearr_11404_11463[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11403 === (20))){
var inst_11329 = (state_11402[(7)]);
var state_11402__$1 = state_11402;
var statearr_11405_11464 = state_11402__$1;
(statearr_11405_11464[(2)] = inst_11329);

(statearr_11405_11464[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11403 === (27))){
var state_11402__$1 = state_11402;
var statearr_11406_11465 = state_11402__$1;
(statearr_11406_11465[(2)] = null);

(statearr_11406_11465[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11403 === (1))){
var inst_11304 = (state_11402[(8)]);
var inst_11304__$1 = calc_state();
var inst_11306 = (inst_11304__$1 == null);
var inst_11307 = cljs.core.not(inst_11306);
var state_11402__$1 = (function (){var statearr_11407 = state_11402;
(statearr_11407[(8)] = inst_11304__$1);

return statearr_11407;
})();
if(inst_11307){
var statearr_11408_11466 = state_11402__$1;
(statearr_11408_11466[(1)] = (2));

} else {
var statearr_11409_11467 = state_11402__$1;
(statearr_11409_11467[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11403 === (24))){
var inst_11353 = (state_11402[(9)]);
var inst_11376 = (state_11402[(10)]);
var inst_11362 = (state_11402[(11)]);
var inst_11376__$1 = (inst_11353.cljs$core$IFn$_invoke$arity$1 ? inst_11353.cljs$core$IFn$_invoke$arity$1(inst_11362) : inst_11353.call(null,inst_11362));
var state_11402__$1 = (function (){var statearr_11410 = state_11402;
(statearr_11410[(10)] = inst_11376__$1);

return statearr_11410;
})();
if(cljs.core.truth_(inst_11376__$1)){
var statearr_11411_11468 = state_11402__$1;
(statearr_11411_11468[(1)] = (29));

} else {
var statearr_11412_11469 = state_11402__$1;
(statearr_11412_11469[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11403 === (4))){
var inst_11320 = (state_11402[(2)]);
var state_11402__$1 = state_11402;
if(cljs.core.truth_(inst_11320)){
var statearr_11413_11470 = state_11402__$1;
(statearr_11413_11470[(1)] = (8));

} else {
var statearr_11414_11471 = state_11402__$1;
(statearr_11414_11471[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11403 === (15))){
var inst_11347 = (state_11402[(2)]);
var state_11402__$1 = state_11402;
if(cljs.core.truth_(inst_11347)){
var statearr_11415_11472 = state_11402__$1;
(statearr_11415_11472[(1)] = (19));

} else {
var statearr_11416_11473 = state_11402__$1;
(statearr_11416_11473[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11403 === (21))){
var inst_11352 = (state_11402[(12)]);
var inst_11352__$1 = (state_11402[(2)]);
var inst_11353 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11352__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11354 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11352__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11355 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11352__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_11402__$1 = (function (){var statearr_11417 = state_11402;
(statearr_11417[(12)] = inst_11352__$1);

(statearr_11417[(9)] = inst_11353);

(statearr_11417[(13)] = inst_11354);

return statearr_11417;
})();
return cljs.core.async.ioc_alts_BANG_(state_11402__$1,(22),inst_11355);
} else {
if((state_val_11403 === (31))){
var inst_11384 = (state_11402[(2)]);
var state_11402__$1 = state_11402;
if(cljs.core.truth_(inst_11384)){
var statearr_11418_11474 = state_11402__$1;
(statearr_11418_11474[(1)] = (32));

} else {
var statearr_11419_11475 = state_11402__$1;
(statearr_11419_11475[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11403 === (32))){
var inst_11361 = (state_11402[(14)]);
var state_11402__$1 = state_11402;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11402__$1,(35),out,inst_11361);
} else {
if((state_val_11403 === (33))){
var inst_11352 = (state_11402[(12)]);
var inst_11329 = inst_11352;
var state_11402__$1 = (function (){var statearr_11420 = state_11402;
(statearr_11420[(7)] = inst_11329);

return statearr_11420;
})();
var statearr_11421_11476 = state_11402__$1;
(statearr_11421_11476[(2)] = null);

(statearr_11421_11476[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11403 === (13))){
var inst_11329 = (state_11402[(7)]);
var inst_11336 = inst_11329.cljs$lang$protocol_mask$partition0$;
var inst_11337 = (inst_11336 & (64));
var inst_11338 = inst_11329.cljs$core$ISeq$;
var inst_11339 = (cljs.core.PROTOCOL_SENTINEL === inst_11338);
var inst_11340 = ((inst_11337) || (inst_11339));
var state_11402__$1 = state_11402;
if(cljs.core.truth_(inst_11340)){
var statearr_11422_11477 = state_11402__$1;
(statearr_11422_11477[(1)] = (16));

} else {
var statearr_11423_11478 = state_11402__$1;
(statearr_11423_11478[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11403 === (22))){
var inst_11361 = (state_11402[(14)]);
var inst_11362 = (state_11402[(11)]);
var inst_11360 = (state_11402[(2)]);
var inst_11361__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11360,(0),null);
var inst_11362__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11360,(1),null);
var inst_11363 = (inst_11361__$1 == null);
var inst_11364 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_11362__$1,change);
var inst_11365 = ((inst_11363) || (inst_11364));
var state_11402__$1 = (function (){var statearr_11424 = state_11402;
(statearr_11424[(14)] = inst_11361__$1);

(statearr_11424[(11)] = inst_11362__$1);

return statearr_11424;
})();
if(cljs.core.truth_(inst_11365)){
var statearr_11425_11479 = state_11402__$1;
(statearr_11425_11479[(1)] = (23));

} else {
var statearr_11426_11480 = state_11402__$1;
(statearr_11426_11480[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11403 === (36))){
var inst_11352 = (state_11402[(12)]);
var inst_11329 = inst_11352;
var state_11402__$1 = (function (){var statearr_11427 = state_11402;
(statearr_11427[(7)] = inst_11329);

return statearr_11427;
})();
var statearr_11428_11481 = state_11402__$1;
(statearr_11428_11481[(2)] = null);

(statearr_11428_11481[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11403 === (29))){
var inst_11376 = (state_11402[(10)]);
var state_11402__$1 = state_11402;
var statearr_11429_11482 = state_11402__$1;
(statearr_11429_11482[(2)] = inst_11376);

(statearr_11429_11482[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11403 === (6))){
var state_11402__$1 = state_11402;
var statearr_11430_11483 = state_11402__$1;
(statearr_11430_11483[(2)] = false);

(statearr_11430_11483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11403 === (28))){
var inst_11372 = (state_11402[(2)]);
var inst_11373 = calc_state();
var inst_11329 = inst_11373;
var state_11402__$1 = (function (){var statearr_11431 = state_11402;
(statearr_11431[(15)] = inst_11372);

(statearr_11431[(7)] = inst_11329);

return statearr_11431;
})();
var statearr_11432_11484 = state_11402__$1;
(statearr_11432_11484[(2)] = null);

(statearr_11432_11484[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11403 === (25))){
var inst_11398 = (state_11402[(2)]);
var state_11402__$1 = state_11402;
var statearr_11433_11485 = state_11402__$1;
(statearr_11433_11485[(2)] = inst_11398);

(statearr_11433_11485[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11403 === (34))){
var inst_11396 = (state_11402[(2)]);
var state_11402__$1 = state_11402;
var statearr_11434_11486 = state_11402__$1;
(statearr_11434_11486[(2)] = inst_11396);

(statearr_11434_11486[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11403 === (17))){
var state_11402__$1 = state_11402;
var statearr_11435_11487 = state_11402__$1;
(statearr_11435_11487[(2)] = false);

(statearr_11435_11487[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11403 === (3))){
var state_11402__$1 = state_11402;
var statearr_11436_11488 = state_11402__$1;
(statearr_11436_11488[(2)] = false);

(statearr_11436_11488[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11403 === (12))){
var inst_11400 = (state_11402[(2)]);
var state_11402__$1 = state_11402;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11402__$1,inst_11400);
} else {
if((state_val_11403 === (2))){
var inst_11304 = (state_11402[(8)]);
var inst_11309 = inst_11304.cljs$lang$protocol_mask$partition0$;
var inst_11310 = (inst_11309 & (64));
var inst_11311 = inst_11304.cljs$core$ISeq$;
var inst_11312 = (cljs.core.PROTOCOL_SENTINEL === inst_11311);
var inst_11313 = ((inst_11310) || (inst_11312));
var state_11402__$1 = state_11402;
if(cljs.core.truth_(inst_11313)){
var statearr_11437_11489 = state_11402__$1;
(statearr_11437_11489[(1)] = (5));

} else {
var statearr_11438_11490 = state_11402__$1;
(statearr_11438_11490[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11403 === (23))){
var inst_11361 = (state_11402[(14)]);
var inst_11367 = (inst_11361 == null);
var state_11402__$1 = state_11402;
if(cljs.core.truth_(inst_11367)){
var statearr_11439_11491 = state_11402__$1;
(statearr_11439_11491[(1)] = (26));

} else {
var statearr_11440_11492 = state_11402__$1;
(statearr_11440_11492[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11403 === (35))){
var inst_11387 = (state_11402[(2)]);
var state_11402__$1 = state_11402;
if(cljs.core.truth_(inst_11387)){
var statearr_11441_11493 = state_11402__$1;
(statearr_11441_11493[(1)] = (36));

} else {
var statearr_11442_11494 = state_11402__$1;
(statearr_11442_11494[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11403 === (19))){
var inst_11329 = (state_11402[(7)]);
var inst_11349 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11329);
var state_11402__$1 = state_11402;
var statearr_11443_11495 = state_11402__$1;
(statearr_11443_11495[(2)] = inst_11349);

(statearr_11443_11495[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11403 === (11))){
var inst_11329 = (state_11402[(7)]);
var inst_11333 = (inst_11329 == null);
var inst_11334 = cljs.core.not(inst_11333);
var state_11402__$1 = state_11402;
if(inst_11334){
var statearr_11444_11496 = state_11402__$1;
(statearr_11444_11496[(1)] = (13));

} else {
var statearr_11445_11497 = state_11402__$1;
(statearr_11445_11497[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11403 === (9))){
var inst_11304 = (state_11402[(8)]);
var state_11402__$1 = state_11402;
var statearr_11446_11498 = state_11402__$1;
(statearr_11446_11498[(2)] = inst_11304);

(statearr_11446_11498[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11403 === (5))){
var state_11402__$1 = state_11402;
var statearr_11447_11499 = state_11402__$1;
(statearr_11447_11499[(2)] = true);

(statearr_11447_11499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11403 === (14))){
var state_11402__$1 = state_11402;
var statearr_11448_11500 = state_11402__$1;
(statearr_11448_11500[(2)] = false);

(statearr_11448_11500[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11403 === (26))){
var inst_11362 = (state_11402[(11)]);
var inst_11369 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_11362);
var state_11402__$1 = state_11402;
var statearr_11449_11501 = state_11402__$1;
(statearr_11449_11501[(2)] = inst_11369);

(statearr_11449_11501[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11403 === (16))){
var state_11402__$1 = state_11402;
var statearr_11450_11502 = state_11402__$1;
(statearr_11450_11502[(2)] = true);

(statearr_11450_11502[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11403 === (38))){
var inst_11392 = (state_11402[(2)]);
var state_11402__$1 = state_11402;
var statearr_11451_11503 = state_11402__$1;
(statearr_11451_11503[(2)] = inst_11392);

(statearr_11451_11503[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11403 === (30))){
var inst_11353 = (state_11402[(9)]);
var inst_11354 = (state_11402[(13)]);
var inst_11362 = (state_11402[(11)]);
var inst_11379 = cljs.core.empty_QMARK_(inst_11353);
var inst_11380 = (inst_11354.cljs$core$IFn$_invoke$arity$1 ? inst_11354.cljs$core$IFn$_invoke$arity$1(inst_11362) : inst_11354.call(null,inst_11362));
var inst_11381 = cljs.core.not(inst_11380);
var inst_11382 = ((inst_11379) && (inst_11381));
var state_11402__$1 = state_11402;
var statearr_11452_11504 = state_11402__$1;
(statearr_11452_11504[(2)] = inst_11382);

(statearr_11452_11504[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11403 === (10))){
var inst_11304 = (state_11402[(8)]);
var inst_11325 = (state_11402[(2)]);
var inst_11326 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11325,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11327 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11325,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11328 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11325,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_11329 = inst_11304;
var state_11402__$1 = (function (){var statearr_11453 = state_11402;
(statearr_11453[(16)] = inst_11328);

(statearr_11453[(17)] = inst_11326);

(statearr_11453[(18)] = inst_11327);

(statearr_11453[(7)] = inst_11329);

return statearr_11453;
})();
var statearr_11454_11505 = state_11402__$1;
(statearr_11454_11505[(2)] = null);

(statearr_11454_11505[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11403 === (18))){
var inst_11344 = (state_11402[(2)]);
var state_11402__$1 = state_11402;
var statearr_11455_11506 = state_11402__$1;
(statearr_11455_11506[(2)] = inst_11344);

(statearr_11455_11506[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11403 === (37))){
var state_11402__$1 = state_11402;
var statearr_11456_11507 = state_11402__$1;
(statearr_11456_11507[(2)] = null);

(statearr_11456_11507[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11403 === (8))){
var inst_11304 = (state_11402[(8)]);
var inst_11322 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11304);
var state_11402__$1 = state_11402;
var statearr_11457_11508 = state_11402__$1;
(statearr_11457_11508[(2)] = inst_11322);

(statearr_11457_11508[(1)] = (10));


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
}
}
});})(c__10225__auto___11462,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__9843__auto__,c__10225__auto___11462,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__9844__auto__ = null;
var cljs$core$async$mix_$_state_machine__9844__auto____0 = (function (){
var statearr_11458 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11458[(0)] = cljs$core$async$mix_$_state_machine__9844__auto__);

(statearr_11458[(1)] = (1));

return statearr_11458;
});
var cljs$core$async$mix_$_state_machine__9844__auto____1 = (function (state_11402){
while(true){
var ret_value__9845__auto__ = (function (){try{while(true){
var result__9846__auto__ = switch__9843__auto__(state_11402);
if(cljs.core.keyword_identical_QMARK_(result__9846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9846__auto__;
}
break;
}
}catch (e11459){if((e11459 instanceof Object)){
var ex__9847__auto__ = e11459;
var statearr_11460_11509 = state_11402;
(statearr_11460_11509[(5)] = ex__9847__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11402);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11459;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11510 = state_11402;
state_11402 = G__11510;
continue;
} else {
return ret_value__9845__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__9844__auto__ = function(state_11402){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__9844__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__9844__auto____1.call(this,state_11402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__9844__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__9844__auto____0;
cljs$core$async$mix_$_state_machine__9844__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__9844__auto____1;
return cljs$core$async$mix_$_state_machine__9844__auto__;
})()
;})(switch__9843__auto__,c__10225__auto___11462,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__10227__auto__ = (function (){var statearr_11461 = (f__10226__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10226__auto__.cljs$core$IFn$_invoke$arity$0() : f__10226__auto__.call(null));
(statearr_11461[(6)] = c__10225__auto___11462);

return statearr_11461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10227__auto__);
});})(c__10225__auto___11462,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4244__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4244__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4244__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4244__auto__.call(null,p,v,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4244__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__11512 = arguments.length;
switch (G__11512) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4244__auto__.call(null,p));
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__4244__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4244__auto__.call(null,p,v));
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__4244__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__11516 = arguments.length;
switch (G__11516) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3949__auto__,mults){
return (function (p1__11514_SHARP_){
if(cljs.core.truth_((p1__11514_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__11514_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__11514_SHARP_.call(null,topic)))){
return p1__11514_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__11514_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11517 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11517 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta11518){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta11518 = meta11518;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async11517.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11519,meta11518__$1){
var self__ = this;
var _11519__$1 = this;
return (new cljs.core.async.t_cljs$core$async11517(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta11518__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11517.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11519){
var self__ = this;
var _11519__$1 = this;
return self__.meta11518;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11517.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11517.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11517.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11517.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11517.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11517.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11517.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11517.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta11518","meta11518",-466051803,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11517.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11517.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11517";

cljs.core.async.t_cljs$core$async11517.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async11517");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11517.
 */
cljs.core.async.__GT_t_cljs$core$async11517 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async11517(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11518){
return (new cljs.core.async.t_cljs$core$async11517(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11518));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async11517(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10225__auto___11637 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10225__auto___11637,mults,ensure_mult,p){
return (function (){
var f__10226__auto__ = (function (){var switch__9843__auto__ = ((function (c__10225__auto___11637,mults,ensure_mult,p){
return (function (state_11591){
var state_val_11592 = (state_11591[(1)]);
if((state_val_11592 === (7))){
var inst_11587 = (state_11591[(2)]);
var state_11591__$1 = state_11591;
var statearr_11593_11638 = state_11591__$1;
(statearr_11593_11638[(2)] = inst_11587);

(statearr_11593_11638[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11592 === (20))){
var state_11591__$1 = state_11591;
var statearr_11594_11639 = state_11591__$1;
(statearr_11594_11639[(2)] = null);

(statearr_11594_11639[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11592 === (1))){
var state_11591__$1 = state_11591;
var statearr_11595_11640 = state_11591__$1;
(statearr_11595_11640[(2)] = null);

(statearr_11595_11640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11592 === (24))){
var inst_11570 = (state_11591[(7)]);
var inst_11579 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_11570);
var state_11591__$1 = state_11591;
var statearr_11596_11641 = state_11591__$1;
(statearr_11596_11641[(2)] = inst_11579);

(statearr_11596_11641[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11592 === (4))){
var inst_11522 = (state_11591[(8)]);
var inst_11522__$1 = (state_11591[(2)]);
var inst_11523 = (inst_11522__$1 == null);
var state_11591__$1 = (function (){var statearr_11597 = state_11591;
(statearr_11597[(8)] = inst_11522__$1);

return statearr_11597;
})();
if(cljs.core.truth_(inst_11523)){
var statearr_11598_11642 = state_11591__$1;
(statearr_11598_11642[(1)] = (5));

} else {
var statearr_11599_11643 = state_11591__$1;
(statearr_11599_11643[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11592 === (15))){
var inst_11564 = (state_11591[(2)]);
var state_11591__$1 = state_11591;
var statearr_11600_11644 = state_11591__$1;
(statearr_11600_11644[(2)] = inst_11564);

(statearr_11600_11644[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11592 === (21))){
var inst_11584 = (state_11591[(2)]);
var state_11591__$1 = (function (){var statearr_11601 = state_11591;
(statearr_11601[(9)] = inst_11584);

return statearr_11601;
})();
var statearr_11602_11645 = state_11591__$1;
(statearr_11602_11645[(2)] = null);

(statearr_11602_11645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11592 === (13))){
var inst_11546 = (state_11591[(10)]);
var inst_11548 = cljs.core.chunked_seq_QMARK_(inst_11546);
var state_11591__$1 = state_11591;
if(inst_11548){
var statearr_11603_11646 = state_11591__$1;
(statearr_11603_11646[(1)] = (16));

} else {
var statearr_11604_11647 = state_11591__$1;
(statearr_11604_11647[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11592 === (22))){
var inst_11576 = (state_11591[(2)]);
var state_11591__$1 = state_11591;
if(cljs.core.truth_(inst_11576)){
var statearr_11605_11648 = state_11591__$1;
(statearr_11605_11648[(1)] = (23));

} else {
var statearr_11606_11649 = state_11591__$1;
(statearr_11606_11649[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11592 === (6))){
var inst_11572 = (state_11591[(11)]);
var inst_11570 = (state_11591[(7)]);
var inst_11522 = (state_11591[(8)]);
var inst_11570__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_11522) : topic_fn.call(null,inst_11522));
var inst_11571 = cljs.core.deref(mults);
var inst_11572__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11571,inst_11570__$1);
var state_11591__$1 = (function (){var statearr_11607 = state_11591;
(statearr_11607[(11)] = inst_11572__$1);

(statearr_11607[(7)] = inst_11570__$1);

return statearr_11607;
})();
if(cljs.core.truth_(inst_11572__$1)){
var statearr_11608_11650 = state_11591__$1;
(statearr_11608_11650[(1)] = (19));

} else {
var statearr_11609_11651 = state_11591__$1;
(statearr_11609_11651[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11592 === (25))){
var inst_11581 = (state_11591[(2)]);
var state_11591__$1 = state_11591;
var statearr_11610_11652 = state_11591__$1;
(statearr_11610_11652[(2)] = inst_11581);

(statearr_11610_11652[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11592 === (17))){
var inst_11546 = (state_11591[(10)]);
var inst_11555 = cljs.core.first(inst_11546);
var inst_11556 = cljs.core.async.muxch_STAR_(inst_11555);
var inst_11557 = cljs.core.async.close_BANG_(inst_11556);
var inst_11558 = cljs.core.next(inst_11546);
var inst_11532 = inst_11558;
var inst_11533 = null;
var inst_11534 = (0);
var inst_11535 = (0);
var state_11591__$1 = (function (){var statearr_11611 = state_11591;
(statearr_11611[(12)] = inst_11557);

(statearr_11611[(13)] = inst_11535);

(statearr_11611[(14)] = inst_11532);

(statearr_11611[(15)] = inst_11533);

(statearr_11611[(16)] = inst_11534);

return statearr_11611;
})();
var statearr_11612_11653 = state_11591__$1;
(statearr_11612_11653[(2)] = null);

(statearr_11612_11653[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11592 === (3))){
var inst_11589 = (state_11591[(2)]);
var state_11591__$1 = state_11591;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11591__$1,inst_11589);
} else {
if((state_val_11592 === (12))){
var inst_11566 = (state_11591[(2)]);
var state_11591__$1 = state_11591;
var statearr_11613_11654 = state_11591__$1;
(statearr_11613_11654[(2)] = inst_11566);

(statearr_11613_11654[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11592 === (2))){
var state_11591__$1 = state_11591;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11591__$1,(4),ch);
} else {
if((state_val_11592 === (23))){
var state_11591__$1 = state_11591;
var statearr_11614_11655 = state_11591__$1;
(statearr_11614_11655[(2)] = null);

(statearr_11614_11655[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11592 === (19))){
var inst_11572 = (state_11591[(11)]);
var inst_11522 = (state_11591[(8)]);
var inst_11574 = cljs.core.async.muxch_STAR_(inst_11572);
var state_11591__$1 = state_11591;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11591__$1,(22),inst_11574,inst_11522);
} else {
if((state_val_11592 === (11))){
var inst_11546 = (state_11591[(10)]);
var inst_11532 = (state_11591[(14)]);
var inst_11546__$1 = cljs.core.seq(inst_11532);
var state_11591__$1 = (function (){var statearr_11615 = state_11591;
(statearr_11615[(10)] = inst_11546__$1);

return statearr_11615;
})();
if(inst_11546__$1){
var statearr_11616_11656 = state_11591__$1;
(statearr_11616_11656[(1)] = (13));

} else {
var statearr_11617_11657 = state_11591__$1;
(statearr_11617_11657[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11592 === (9))){
var inst_11568 = (state_11591[(2)]);
var state_11591__$1 = state_11591;
var statearr_11618_11658 = state_11591__$1;
(statearr_11618_11658[(2)] = inst_11568);

(statearr_11618_11658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11592 === (5))){
var inst_11529 = cljs.core.deref(mults);
var inst_11530 = cljs.core.vals(inst_11529);
var inst_11531 = cljs.core.seq(inst_11530);
var inst_11532 = inst_11531;
var inst_11533 = null;
var inst_11534 = (0);
var inst_11535 = (0);
var state_11591__$1 = (function (){var statearr_11619 = state_11591;
(statearr_11619[(13)] = inst_11535);

(statearr_11619[(14)] = inst_11532);

(statearr_11619[(15)] = inst_11533);

(statearr_11619[(16)] = inst_11534);

return statearr_11619;
})();
var statearr_11620_11659 = state_11591__$1;
(statearr_11620_11659[(2)] = null);

(statearr_11620_11659[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11592 === (14))){
var state_11591__$1 = state_11591;
var statearr_11624_11660 = state_11591__$1;
(statearr_11624_11660[(2)] = null);

(statearr_11624_11660[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11592 === (16))){
var inst_11546 = (state_11591[(10)]);
var inst_11550 = cljs.core.chunk_first(inst_11546);
var inst_11551 = cljs.core.chunk_rest(inst_11546);
var inst_11552 = cljs.core.count(inst_11550);
var inst_11532 = inst_11551;
var inst_11533 = inst_11550;
var inst_11534 = inst_11552;
var inst_11535 = (0);
var state_11591__$1 = (function (){var statearr_11625 = state_11591;
(statearr_11625[(13)] = inst_11535);

(statearr_11625[(14)] = inst_11532);

(statearr_11625[(15)] = inst_11533);

(statearr_11625[(16)] = inst_11534);

return statearr_11625;
})();
var statearr_11626_11661 = state_11591__$1;
(statearr_11626_11661[(2)] = null);

(statearr_11626_11661[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11592 === (10))){
var inst_11535 = (state_11591[(13)]);
var inst_11532 = (state_11591[(14)]);
var inst_11533 = (state_11591[(15)]);
var inst_11534 = (state_11591[(16)]);
var inst_11540 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_11533,inst_11535);
var inst_11541 = cljs.core.async.muxch_STAR_(inst_11540);
var inst_11542 = cljs.core.async.close_BANG_(inst_11541);
var inst_11543 = (inst_11535 + (1));
var tmp11621 = inst_11532;
var tmp11622 = inst_11533;
var tmp11623 = inst_11534;
var inst_11532__$1 = tmp11621;
var inst_11533__$1 = tmp11622;
var inst_11534__$1 = tmp11623;
var inst_11535__$1 = inst_11543;
var state_11591__$1 = (function (){var statearr_11627 = state_11591;
(statearr_11627[(13)] = inst_11535__$1);

(statearr_11627[(14)] = inst_11532__$1);

(statearr_11627[(15)] = inst_11533__$1);

(statearr_11627[(16)] = inst_11534__$1);

(statearr_11627[(17)] = inst_11542);

return statearr_11627;
})();
var statearr_11628_11662 = state_11591__$1;
(statearr_11628_11662[(2)] = null);

(statearr_11628_11662[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11592 === (18))){
var inst_11561 = (state_11591[(2)]);
var state_11591__$1 = state_11591;
var statearr_11629_11663 = state_11591__$1;
(statearr_11629_11663[(2)] = inst_11561);

(statearr_11629_11663[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11592 === (8))){
var inst_11535 = (state_11591[(13)]);
var inst_11534 = (state_11591[(16)]);
var inst_11537 = (inst_11535 < inst_11534);
var inst_11538 = inst_11537;
var state_11591__$1 = state_11591;
if(cljs.core.truth_(inst_11538)){
var statearr_11630_11664 = state_11591__$1;
(statearr_11630_11664[(1)] = (10));

} else {
var statearr_11631_11665 = state_11591__$1;
(statearr_11631_11665[(1)] = (11));

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
}
}
}
}
}
}
}
});})(c__10225__auto___11637,mults,ensure_mult,p))
;
return ((function (switch__9843__auto__,c__10225__auto___11637,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__9844__auto__ = null;
var cljs$core$async$state_machine__9844__auto____0 = (function (){
var statearr_11632 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11632[(0)] = cljs$core$async$state_machine__9844__auto__);

(statearr_11632[(1)] = (1));

return statearr_11632;
});
var cljs$core$async$state_machine__9844__auto____1 = (function (state_11591){
while(true){
var ret_value__9845__auto__ = (function (){try{while(true){
var result__9846__auto__ = switch__9843__auto__(state_11591);
if(cljs.core.keyword_identical_QMARK_(result__9846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9846__auto__;
}
break;
}
}catch (e11633){if((e11633 instanceof Object)){
var ex__9847__auto__ = e11633;
var statearr_11634_11666 = state_11591;
(statearr_11634_11666[(5)] = ex__9847__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11591);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11633;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11667 = state_11591;
state_11591 = G__11667;
continue;
} else {
return ret_value__9845__auto__;
}
break;
}
});
cljs$core$async$state_machine__9844__auto__ = function(state_11591){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9844__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9844__auto____1.call(this,state_11591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9844__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9844__auto____0;
cljs$core$async$state_machine__9844__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9844__auto____1;
return cljs$core$async$state_machine__9844__auto__;
})()
;})(switch__9843__auto__,c__10225__auto___11637,mults,ensure_mult,p))
})();
var state__10227__auto__ = (function (){var statearr_11635 = (f__10226__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10226__auto__.cljs$core$IFn$_invoke$arity$0() : f__10226__auto__.call(null));
(statearr_11635[(6)] = c__10225__auto___11637);

return statearr_11635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10227__auto__);
});})(c__10225__auto___11637,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__11669 = arguments.length;
switch (G__11669) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__11672 = arguments.length;
switch (G__11672) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__11675 = arguments.length;
switch (G__11675) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__10225__auto___11742 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10225__auto___11742,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__10226__auto__ = (function (){var switch__9843__auto__ = ((function (c__10225__auto___11742,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_11714){
var state_val_11715 = (state_11714[(1)]);
if((state_val_11715 === (7))){
var state_11714__$1 = state_11714;
var statearr_11716_11743 = state_11714__$1;
(statearr_11716_11743[(2)] = null);

(statearr_11716_11743[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11715 === (1))){
var state_11714__$1 = state_11714;
var statearr_11717_11744 = state_11714__$1;
(statearr_11717_11744[(2)] = null);

(statearr_11717_11744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11715 === (4))){
var inst_11678 = (state_11714[(7)]);
var inst_11680 = (inst_11678 < cnt);
var state_11714__$1 = state_11714;
if(cljs.core.truth_(inst_11680)){
var statearr_11718_11745 = state_11714__$1;
(statearr_11718_11745[(1)] = (6));

} else {
var statearr_11719_11746 = state_11714__$1;
(statearr_11719_11746[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11715 === (15))){
var inst_11710 = (state_11714[(2)]);
var state_11714__$1 = state_11714;
var statearr_11720_11747 = state_11714__$1;
(statearr_11720_11747[(2)] = inst_11710);

(statearr_11720_11747[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11715 === (13))){
var inst_11703 = cljs.core.async.close_BANG_(out);
var state_11714__$1 = state_11714;
var statearr_11721_11748 = state_11714__$1;
(statearr_11721_11748[(2)] = inst_11703);

(statearr_11721_11748[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11715 === (6))){
var state_11714__$1 = state_11714;
var statearr_11722_11749 = state_11714__$1;
(statearr_11722_11749[(2)] = null);

(statearr_11722_11749[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11715 === (3))){
var inst_11712 = (state_11714[(2)]);
var state_11714__$1 = state_11714;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11714__$1,inst_11712);
} else {
if((state_val_11715 === (12))){
var inst_11700 = (state_11714[(8)]);
var inst_11700__$1 = (state_11714[(2)]);
var inst_11701 = cljs.core.some(cljs.core.nil_QMARK_,inst_11700__$1);
var state_11714__$1 = (function (){var statearr_11723 = state_11714;
(statearr_11723[(8)] = inst_11700__$1);

return statearr_11723;
})();
if(cljs.core.truth_(inst_11701)){
var statearr_11724_11750 = state_11714__$1;
(statearr_11724_11750[(1)] = (13));

} else {
var statearr_11725_11751 = state_11714__$1;
(statearr_11725_11751[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11715 === (2))){
var inst_11677 = cljs.core.reset_BANG_(dctr,cnt);
var inst_11678 = (0);
var state_11714__$1 = (function (){var statearr_11726 = state_11714;
(statearr_11726[(9)] = inst_11677);

(statearr_11726[(7)] = inst_11678);

return statearr_11726;
})();
var statearr_11727_11752 = state_11714__$1;
(statearr_11727_11752[(2)] = null);

(statearr_11727_11752[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11715 === (11))){
var inst_11678 = (state_11714[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_11714,(10),Object,null,(9));
var inst_11687 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_11678) : chs__$1.call(null,inst_11678));
var inst_11688 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_11678) : done.call(null,inst_11678));
var inst_11689 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_11687,inst_11688);
var state_11714__$1 = state_11714;
var statearr_11728_11753 = state_11714__$1;
(statearr_11728_11753[(2)] = inst_11689);


cljs.core.async.impl.ioc_helpers.process_exception(state_11714__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11715 === (9))){
var inst_11678 = (state_11714[(7)]);
var inst_11691 = (state_11714[(2)]);
var inst_11692 = (inst_11678 + (1));
var inst_11678__$1 = inst_11692;
var state_11714__$1 = (function (){var statearr_11729 = state_11714;
(statearr_11729[(10)] = inst_11691);

(statearr_11729[(7)] = inst_11678__$1);

return statearr_11729;
})();
var statearr_11730_11754 = state_11714__$1;
(statearr_11730_11754[(2)] = null);

(statearr_11730_11754[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11715 === (5))){
var inst_11698 = (state_11714[(2)]);
var state_11714__$1 = (function (){var statearr_11731 = state_11714;
(statearr_11731[(11)] = inst_11698);

return statearr_11731;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11714__$1,(12),dchan);
} else {
if((state_val_11715 === (14))){
var inst_11700 = (state_11714[(8)]);
var inst_11705 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_11700);
var state_11714__$1 = state_11714;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11714__$1,(16),out,inst_11705);
} else {
if((state_val_11715 === (16))){
var inst_11707 = (state_11714[(2)]);
var state_11714__$1 = (function (){var statearr_11732 = state_11714;
(statearr_11732[(12)] = inst_11707);

return statearr_11732;
})();
var statearr_11733_11755 = state_11714__$1;
(statearr_11733_11755[(2)] = null);

(statearr_11733_11755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11715 === (10))){
var inst_11682 = (state_11714[(2)]);
var inst_11683 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_11714__$1 = (function (){var statearr_11734 = state_11714;
(statearr_11734[(13)] = inst_11682);

return statearr_11734;
})();
var statearr_11735_11756 = state_11714__$1;
(statearr_11735_11756[(2)] = inst_11683);


cljs.core.async.impl.ioc_helpers.process_exception(state_11714__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11715 === (8))){
var inst_11696 = (state_11714[(2)]);
var state_11714__$1 = state_11714;
var statearr_11736_11757 = state_11714__$1;
(statearr_11736_11757[(2)] = inst_11696);

(statearr_11736_11757[(1)] = (5));


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
});})(c__10225__auto___11742,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__9843__auto__,c__10225__auto___11742,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__9844__auto__ = null;
var cljs$core$async$state_machine__9844__auto____0 = (function (){
var statearr_11737 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11737[(0)] = cljs$core$async$state_machine__9844__auto__);

(statearr_11737[(1)] = (1));

return statearr_11737;
});
var cljs$core$async$state_machine__9844__auto____1 = (function (state_11714){
while(true){
var ret_value__9845__auto__ = (function (){try{while(true){
var result__9846__auto__ = switch__9843__auto__(state_11714);
if(cljs.core.keyword_identical_QMARK_(result__9846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9846__auto__;
}
break;
}
}catch (e11738){if((e11738 instanceof Object)){
var ex__9847__auto__ = e11738;
var statearr_11739_11758 = state_11714;
(statearr_11739_11758[(5)] = ex__9847__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11714);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11738;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11759 = state_11714;
state_11714 = G__11759;
continue;
} else {
return ret_value__9845__auto__;
}
break;
}
});
cljs$core$async$state_machine__9844__auto__ = function(state_11714){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9844__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9844__auto____1.call(this,state_11714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9844__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9844__auto____0;
cljs$core$async$state_machine__9844__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9844__auto____1;
return cljs$core$async$state_machine__9844__auto__;
})()
;})(switch__9843__auto__,c__10225__auto___11742,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__10227__auto__ = (function (){var statearr_11740 = (f__10226__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10226__auto__.cljs$core$IFn$_invoke$arity$0() : f__10226__auto__.call(null));
(statearr_11740[(6)] = c__10225__auto___11742);

return statearr_11740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10227__auto__);
});})(c__10225__auto___11742,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__11762 = arguments.length;
switch (G__11762) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__10225__auto___11816 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10225__auto___11816,out){
return (function (){
var f__10226__auto__ = (function (){var switch__9843__auto__ = ((function (c__10225__auto___11816,out){
return (function (state_11794){
var state_val_11795 = (state_11794[(1)]);
if((state_val_11795 === (7))){
var inst_11773 = (state_11794[(7)]);
var inst_11774 = (state_11794[(8)]);
var inst_11773__$1 = (state_11794[(2)]);
var inst_11774__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11773__$1,(0),null);
var inst_11775 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11773__$1,(1),null);
var inst_11776 = (inst_11774__$1 == null);
var state_11794__$1 = (function (){var statearr_11796 = state_11794;
(statearr_11796[(9)] = inst_11775);

(statearr_11796[(7)] = inst_11773__$1);

(statearr_11796[(8)] = inst_11774__$1);

return statearr_11796;
})();
if(cljs.core.truth_(inst_11776)){
var statearr_11797_11817 = state_11794__$1;
(statearr_11797_11817[(1)] = (8));

} else {
var statearr_11798_11818 = state_11794__$1;
(statearr_11798_11818[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11795 === (1))){
var inst_11763 = cljs.core.vec(chs);
var inst_11764 = inst_11763;
var state_11794__$1 = (function (){var statearr_11799 = state_11794;
(statearr_11799[(10)] = inst_11764);

return statearr_11799;
})();
var statearr_11800_11819 = state_11794__$1;
(statearr_11800_11819[(2)] = null);

(statearr_11800_11819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11795 === (4))){
var inst_11764 = (state_11794[(10)]);
var state_11794__$1 = state_11794;
return cljs.core.async.ioc_alts_BANG_(state_11794__$1,(7),inst_11764);
} else {
if((state_val_11795 === (6))){
var inst_11790 = (state_11794[(2)]);
var state_11794__$1 = state_11794;
var statearr_11801_11820 = state_11794__$1;
(statearr_11801_11820[(2)] = inst_11790);

(statearr_11801_11820[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11795 === (3))){
var inst_11792 = (state_11794[(2)]);
var state_11794__$1 = state_11794;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11794__$1,inst_11792);
} else {
if((state_val_11795 === (2))){
var inst_11764 = (state_11794[(10)]);
var inst_11766 = cljs.core.count(inst_11764);
var inst_11767 = (inst_11766 > (0));
var state_11794__$1 = state_11794;
if(cljs.core.truth_(inst_11767)){
var statearr_11803_11821 = state_11794__$1;
(statearr_11803_11821[(1)] = (4));

} else {
var statearr_11804_11822 = state_11794__$1;
(statearr_11804_11822[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11795 === (11))){
var inst_11764 = (state_11794[(10)]);
var inst_11783 = (state_11794[(2)]);
var tmp11802 = inst_11764;
var inst_11764__$1 = tmp11802;
var state_11794__$1 = (function (){var statearr_11805 = state_11794;
(statearr_11805[(11)] = inst_11783);

(statearr_11805[(10)] = inst_11764__$1);

return statearr_11805;
})();
var statearr_11806_11823 = state_11794__$1;
(statearr_11806_11823[(2)] = null);

(statearr_11806_11823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11795 === (9))){
var inst_11774 = (state_11794[(8)]);
var state_11794__$1 = state_11794;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11794__$1,(11),out,inst_11774);
} else {
if((state_val_11795 === (5))){
var inst_11788 = cljs.core.async.close_BANG_(out);
var state_11794__$1 = state_11794;
var statearr_11807_11824 = state_11794__$1;
(statearr_11807_11824[(2)] = inst_11788);

(statearr_11807_11824[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11795 === (10))){
var inst_11786 = (state_11794[(2)]);
var state_11794__$1 = state_11794;
var statearr_11808_11825 = state_11794__$1;
(statearr_11808_11825[(2)] = inst_11786);

(statearr_11808_11825[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11795 === (8))){
var inst_11775 = (state_11794[(9)]);
var inst_11773 = (state_11794[(7)]);
var inst_11774 = (state_11794[(8)]);
var inst_11764 = (state_11794[(10)]);
var inst_11778 = (function (){var cs = inst_11764;
var vec__11769 = inst_11773;
var v = inst_11774;
var c = inst_11775;
return ((function (cs,vec__11769,v,c,inst_11775,inst_11773,inst_11774,inst_11764,state_val_11795,c__10225__auto___11816,out){
return (function (p1__11760_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__11760_SHARP_);
});
;})(cs,vec__11769,v,c,inst_11775,inst_11773,inst_11774,inst_11764,state_val_11795,c__10225__auto___11816,out))
})();
var inst_11779 = cljs.core.filterv(inst_11778,inst_11764);
var inst_11764__$1 = inst_11779;
var state_11794__$1 = (function (){var statearr_11809 = state_11794;
(statearr_11809[(10)] = inst_11764__$1);

return statearr_11809;
})();
var statearr_11810_11826 = state_11794__$1;
(statearr_11810_11826[(2)] = null);

(statearr_11810_11826[(1)] = (2));


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
});})(c__10225__auto___11816,out))
;
return ((function (switch__9843__auto__,c__10225__auto___11816,out){
return (function() {
var cljs$core$async$state_machine__9844__auto__ = null;
var cljs$core$async$state_machine__9844__auto____0 = (function (){
var statearr_11811 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11811[(0)] = cljs$core$async$state_machine__9844__auto__);

(statearr_11811[(1)] = (1));

return statearr_11811;
});
var cljs$core$async$state_machine__9844__auto____1 = (function (state_11794){
while(true){
var ret_value__9845__auto__ = (function (){try{while(true){
var result__9846__auto__ = switch__9843__auto__(state_11794);
if(cljs.core.keyword_identical_QMARK_(result__9846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9846__auto__;
}
break;
}
}catch (e11812){if((e11812 instanceof Object)){
var ex__9847__auto__ = e11812;
var statearr_11813_11827 = state_11794;
(statearr_11813_11827[(5)] = ex__9847__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11794);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11812;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11828 = state_11794;
state_11794 = G__11828;
continue;
} else {
return ret_value__9845__auto__;
}
break;
}
});
cljs$core$async$state_machine__9844__auto__ = function(state_11794){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9844__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9844__auto____1.call(this,state_11794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9844__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9844__auto____0;
cljs$core$async$state_machine__9844__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9844__auto____1;
return cljs$core$async$state_machine__9844__auto__;
})()
;})(switch__9843__auto__,c__10225__auto___11816,out))
})();
var state__10227__auto__ = (function (){var statearr_11814 = (f__10226__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10226__auto__.cljs$core$IFn$_invoke$arity$0() : f__10226__auto__.call(null));
(statearr_11814[(6)] = c__10225__auto___11816);

return statearr_11814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10227__auto__);
});})(c__10225__auto___11816,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__11830 = arguments.length;
switch (G__11830) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__10225__auto___11875 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10225__auto___11875,out){
return (function (){
var f__10226__auto__ = (function (){var switch__9843__auto__ = ((function (c__10225__auto___11875,out){
return (function (state_11854){
var state_val_11855 = (state_11854[(1)]);
if((state_val_11855 === (7))){
var inst_11836 = (state_11854[(7)]);
var inst_11836__$1 = (state_11854[(2)]);
var inst_11837 = (inst_11836__$1 == null);
var inst_11838 = cljs.core.not(inst_11837);
var state_11854__$1 = (function (){var statearr_11856 = state_11854;
(statearr_11856[(7)] = inst_11836__$1);

return statearr_11856;
})();
if(inst_11838){
var statearr_11857_11876 = state_11854__$1;
(statearr_11857_11876[(1)] = (8));

} else {
var statearr_11858_11877 = state_11854__$1;
(statearr_11858_11877[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11855 === (1))){
var inst_11831 = (0);
var state_11854__$1 = (function (){var statearr_11859 = state_11854;
(statearr_11859[(8)] = inst_11831);

return statearr_11859;
})();
var statearr_11860_11878 = state_11854__$1;
(statearr_11860_11878[(2)] = null);

(statearr_11860_11878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11855 === (4))){
var state_11854__$1 = state_11854;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11854__$1,(7),ch);
} else {
if((state_val_11855 === (6))){
var inst_11849 = (state_11854[(2)]);
var state_11854__$1 = state_11854;
var statearr_11861_11879 = state_11854__$1;
(statearr_11861_11879[(2)] = inst_11849);

(statearr_11861_11879[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11855 === (3))){
var inst_11851 = (state_11854[(2)]);
var inst_11852 = cljs.core.async.close_BANG_(out);
var state_11854__$1 = (function (){var statearr_11862 = state_11854;
(statearr_11862[(9)] = inst_11851);

return statearr_11862;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_11854__$1,inst_11852);
} else {
if((state_val_11855 === (2))){
var inst_11831 = (state_11854[(8)]);
var inst_11833 = (inst_11831 < n);
var state_11854__$1 = state_11854;
if(cljs.core.truth_(inst_11833)){
var statearr_11863_11880 = state_11854__$1;
(statearr_11863_11880[(1)] = (4));

} else {
var statearr_11864_11881 = state_11854__$1;
(statearr_11864_11881[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11855 === (11))){
var inst_11831 = (state_11854[(8)]);
var inst_11841 = (state_11854[(2)]);
var inst_11842 = (inst_11831 + (1));
var inst_11831__$1 = inst_11842;
var state_11854__$1 = (function (){var statearr_11865 = state_11854;
(statearr_11865[(8)] = inst_11831__$1);

(statearr_11865[(10)] = inst_11841);

return statearr_11865;
})();
var statearr_11866_11882 = state_11854__$1;
(statearr_11866_11882[(2)] = null);

(statearr_11866_11882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11855 === (9))){
var state_11854__$1 = state_11854;
var statearr_11867_11883 = state_11854__$1;
(statearr_11867_11883[(2)] = null);

(statearr_11867_11883[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11855 === (5))){
var state_11854__$1 = state_11854;
var statearr_11868_11884 = state_11854__$1;
(statearr_11868_11884[(2)] = null);

(statearr_11868_11884[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11855 === (10))){
var inst_11846 = (state_11854[(2)]);
var state_11854__$1 = state_11854;
var statearr_11869_11885 = state_11854__$1;
(statearr_11869_11885[(2)] = inst_11846);

(statearr_11869_11885[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11855 === (8))){
var inst_11836 = (state_11854[(7)]);
var state_11854__$1 = state_11854;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11854__$1,(11),out,inst_11836);
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
});})(c__10225__auto___11875,out))
;
return ((function (switch__9843__auto__,c__10225__auto___11875,out){
return (function() {
var cljs$core$async$state_machine__9844__auto__ = null;
var cljs$core$async$state_machine__9844__auto____0 = (function (){
var statearr_11870 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11870[(0)] = cljs$core$async$state_machine__9844__auto__);

(statearr_11870[(1)] = (1));

return statearr_11870;
});
var cljs$core$async$state_machine__9844__auto____1 = (function (state_11854){
while(true){
var ret_value__9845__auto__ = (function (){try{while(true){
var result__9846__auto__ = switch__9843__auto__(state_11854);
if(cljs.core.keyword_identical_QMARK_(result__9846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9846__auto__;
}
break;
}
}catch (e11871){if((e11871 instanceof Object)){
var ex__9847__auto__ = e11871;
var statearr_11872_11886 = state_11854;
(statearr_11872_11886[(5)] = ex__9847__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11854);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11871;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11887 = state_11854;
state_11854 = G__11887;
continue;
} else {
return ret_value__9845__auto__;
}
break;
}
});
cljs$core$async$state_machine__9844__auto__ = function(state_11854){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9844__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9844__auto____1.call(this,state_11854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9844__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9844__auto____0;
cljs$core$async$state_machine__9844__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9844__auto____1;
return cljs$core$async$state_machine__9844__auto__;
})()
;})(switch__9843__auto__,c__10225__auto___11875,out))
})();
var state__10227__auto__ = (function (){var statearr_11873 = (f__10226__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10226__auto__.cljs$core$IFn$_invoke$arity$0() : f__10226__auto__.call(null));
(statearr_11873[(6)] = c__10225__auto___11875);

return statearr_11873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10227__auto__);
});})(c__10225__auto___11875,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11889 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11889 = (function (f,ch,meta11890){
this.f = f;
this.ch = ch;
this.meta11890 = meta11890;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async11889.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11891,meta11890__$1){
var self__ = this;
var _11891__$1 = this;
return (new cljs.core.async.t_cljs$core$async11889(self__.f,self__.ch,meta11890__$1));
});

cljs.core.async.t_cljs$core$async11889.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11891){
var self__ = this;
var _11891__$1 = this;
return self__.meta11890;
});

cljs.core.async.t_cljs$core$async11889.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11889.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async11889.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async11889.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11889.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11892 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11892 = (function (f,ch,meta11890,_,fn1,meta11893){
this.f = f;
this.ch = ch;
this.meta11890 = meta11890;
this._ = _;
this.fn1 = fn1;
this.meta11893 = meta11893;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async11892.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_11894,meta11893__$1){
var self__ = this;
var _11894__$1 = this;
return (new cljs.core.async.t_cljs$core$async11892(self__.f,self__.ch,self__.meta11890,self__._,self__.fn1,meta11893__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async11892.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_11894){
var self__ = this;
var _11894__$1 = this;
return self__.meta11893;
});})(___$1))
;

cljs.core.async.t_cljs$core$async11892.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11892.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async11892.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async11892.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__11888_SHARP_){
var G__11895 = (((p1__11888_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__11888_SHARP_) : self__.f.call(null,p1__11888_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__11895) : f1.call(null,G__11895));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async11892.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11890","meta11890",234360413,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async11889","cljs.core.async/t_cljs$core$async11889",-1823513489,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta11893","meta11893",-791003807,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async11892.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11892.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11892";

cljs.core.async.t_cljs$core$async11892.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async11892");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11892.
 */
cljs.core.async.__GT_t_cljs$core$async11892 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async11892(f__$1,ch__$1,meta11890__$1,___$2,fn1__$1,meta11893){
return (new cljs.core.async.t_cljs$core$async11892(f__$1,ch__$1,meta11890__$1,___$2,fn1__$1,meta11893));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async11892(self__.f,self__.ch,self__.meta11890,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__11896 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__11896) : self__.f.call(null,G__11896));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async11889.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11889.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async11889.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11890","meta11890",234360413,null)], null);
});

cljs.core.async.t_cljs$core$async11889.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11889.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11889";

cljs.core.async.t_cljs$core$async11889.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async11889");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11889.
 */
cljs.core.async.__GT_t_cljs$core$async11889 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async11889(f__$1,ch__$1,meta11890){
return (new cljs.core.async.t_cljs$core$async11889(f__$1,ch__$1,meta11890));
});

}

return (new cljs.core.async.t_cljs$core$async11889(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11897 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11897 = (function (f,ch,meta11898){
this.f = f;
this.ch = ch;
this.meta11898 = meta11898;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async11897.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11899,meta11898__$1){
var self__ = this;
var _11899__$1 = this;
return (new cljs.core.async.t_cljs$core$async11897(self__.f,self__.ch,meta11898__$1));
});

cljs.core.async.t_cljs$core$async11897.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11899){
var self__ = this;
var _11899__$1 = this;
return self__.meta11898;
});

cljs.core.async.t_cljs$core$async11897.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11897.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async11897.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11897.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async11897.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11897.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async11897.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11898","meta11898",-882263989,null)], null);
});

cljs.core.async.t_cljs$core$async11897.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11897.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11897";

cljs.core.async.t_cljs$core$async11897.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async11897");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11897.
 */
cljs.core.async.__GT_t_cljs$core$async11897 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async11897(f__$1,ch__$1,meta11898){
return (new cljs.core.async.t_cljs$core$async11897(f__$1,ch__$1,meta11898));
});

}

return (new cljs.core.async.t_cljs$core$async11897(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11900 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11900 = (function (p,ch,meta11901){
this.p = p;
this.ch = ch;
this.meta11901 = meta11901;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async11900.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11902,meta11901__$1){
var self__ = this;
var _11902__$1 = this;
return (new cljs.core.async.t_cljs$core$async11900(self__.p,self__.ch,meta11901__$1));
});

cljs.core.async.t_cljs$core$async11900.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11902){
var self__ = this;
var _11902__$1 = this;
return self__.meta11901;
});

cljs.core.async.t_cljs$core$async11900.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11900.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async11900.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async11900.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11900.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async11900.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11900.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async11900.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11901","meta11901",-854950149,null)], null);
});

cljs.core.async.t_cljs$core$async11900.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11900.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11900";

cljs.core.async.t_cljs$core$async11900.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async11900");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11900.
 */
cljs.core.async.__GT_t_cljs$core$async11900 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async11900(p__$1,ch__$1,meta11901){
return (new cljs.core.async.t_cljs$core$async11900(p__$1,ch__$1,meta11901));
});

}

return (new cljs.core.async.t_cljs$core$async11900(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__11904 = arguments.length;
switch (G__11904) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__10225__auto___11944 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10225__auto___11944,out){
return (function (){
var f__10226__auto__ = (function (){var switch__9843__auto__ = ((function (c__10225__auto___11944,out){
return (function (state_11925){
var state_val_11926 = (state_11925[(1)]);
if((state_val_11926 === (7))){
var inst_11921 = (state_11925[(2)]);
var state_11925__$1 = state_11925;
var statearr_11927_11945 = state_11925__$1;
(statearr_11927_11945[(2)] = inst_11921);

(statearr_11927_11945[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11926 === (1))){
var state_11925__$1 = state_11925;
var statearr_11928_11946 = state_11925__$1;
(statearr_11928_11946[(2)] = null);

(statearr_11928_11946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11926 === (4))){
var inst_11907 = (state_11925[(7)]);
var inst_11907__$1 = (state_11925[(2)]);
var inst_11908 = (inst_11907__$1 == null);
var state_11925__$1 = (function (){var statearr_11929 = state_11925;
(statearr_11929[(7)] = inst_11907__$1);

return statearr_11929;
})();
if(cljs.core.truth_(inst_11908)){
var statearr_11930_11947 = state_11925__$1;
(statearr_11930_11947[(1)] = (5));

} else {
var statearr_11931_11948 = state_11925__$1;
(statearr_11931_11948[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11926 === (6))){
var inst_11907 = (state_11925[(7)]);
var inst_11912 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_11907) : p.call(null,inst_11907));
var state_11925__$1 = state_11925;
if(cljs.core.truth_(inst_11912)){
var statearr_11932_11949 = state_11925__$1;
(statearr_11932_11949[(1)] = (8));

} else {
var statearr_11933_11950 = state_11925__$1;
(statearr_11933_11950[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11926 === (3))){
var inst_11923 = (state_11925[(2)]);
var state_11925__$1 = state_11925;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11925__$1,inst_11923);
} else {
if((state_val_11926 === (2))){
var state_11925__$1 = state_11925;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11925__$1,(4),ch);
} else {
if((state_val_11926 === (11))){
var inst_11915 = (state_11925[(2)]);
var state_11925__$1 = state_11925;
var statearr_11934_11951 = state_11925__$1;
(statearr_11934_11951[(2)] = inst_11915);

(statearr_11934_11951[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11926 === (9))){
var state_11925__$1 = state_11925;
var statearr_11935_11952 = state_11925__$1;
(statearr_11935_11952[(2)] = null);

(statearr_11935_11952[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11926 === (5))){
var inst_11910 = cljs.core.async.close_BANG_(out);
var state_11925__$1 = state_11925;
var statearr_11936_11953 = state_11925__$1;
(statearr_11936_11953[(2)] = inst_11910);

(statearr_11936_11953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11926 === (10))){
var inst_11918 = (state_11925[(2)]);
var state_11925__$1 = (function (){var statearr_11937 = state_11925;
(statearr_11937[(8)] = inst_11918);

return statearr_11937;
})();
var statearr_11938_11954 = state_11925__$1;
(statearr_11938_11954[(2)] = null);

(statearr_11938_11954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11926 === (8))){
var inst_11907 = (state_11925[(7)]);
var state_11925__$1 = state_11925;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11925__$1,(11),out,inst_11907);
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
});})(c__10225__auto___11944,out))
;
return ((function (switch__9843__auto__,c__10225__auto___11944,out){
return (function() {
var cljs$core$async$state_machine__9844__auto__ = null;
var cljs$core$async$state_machine__9844__auto____0 = (function (){
var statearr_11939 = [null,null,null,null,null,null,null,null,null];
(statearr_11939[(0)] = cljs$core$async$state_machine__9844__auto__);

(statearr_11939[(1)] = (1));

return statearr_11939;
});
var cljs$core$async$state_machine__9844__auto____1 = (function (state_11925){
while(true){
var ret_value__9845__auto__ = (function (){try{while(true){
var result__9846__auto__ = switch__9843__auto__(state_11925);
if(cljs.core.keyword_identical_QMARK_(result__9846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9846__auto__;
}
break;
}
}catch (e11940){if((e11940 instanceof Object)){
var ex__9847__auto__ = e11940;
var statearr_11941_11955 = state_11925;
(statearr_11941_11955[(5)] = ex__9847__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11925);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11940;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11956 = state_11925;
state_11925 = G__11956;
continue;
} else {
return ret_value__9845__auto__;
}
break;
}
});
cljs$core$async$state_machine__9844__auto__ = function(state_11925){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9844__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9844__auto____1.call(this,state_11925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9844__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9844__auto____0;
cljs$core$async$state_machine__9844__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9844__auto____1;
return cljs$core$async$state_machine__9844__auto__;
})()
;})(switch__9843__auto__,c__10225__auto___11944,out))
})();
var state__10227__auto__ = (function (){var statearr_11942 = (f__10226__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10226__auto__.cljs$core$IFn$_invoke$arity$0() : f__10226__auto__.call(null));
(statearr_11942[(6)] = c__10225__auto___11944);

return statearr_11942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10227__auto__);
});})(c__10225__auto___11944,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__11958 = arguments.length;
switch (G__11958) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__10225__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10225__auto__){
return (function (){
var f__10226__auto__ = (function (){var switch__9843__auto__ = ((function (c__10225__auto__){
return (function (state_12021){
var state_val_12022 = (state_12021[(1)]);
if((state_val_12022 === (7))){
var inst_12017 = (state_12021[(2)]);
var state_12021__$1 = state_12021;
var statearr_12023_12061 = state_12021__$1;
(statearr_12023_12061[(2)] = inst_12017);

(statearr_12023_12061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (20))){
var inst_11987 = (state_12021[(7)]);
var inst_11998 = (state_12021[(2)]);
var inst_11999 = cljs.core.next(inst_11987);
var inst_11973 = inst_11999;
var inst_11974 = null;
var inst_11975 = (0);
var inst_11976 = (0);
var state_12021__$1 = (function (){var statearr_12024 = state_12021;
(statearr_12024[(8)] = inst_11998);

(statearr_12024[(9)] = inst_11975);

(statearr_12024[(10)] = inst_11974);

(statearr_12024[(11)] = inst_11973);

(statearr_12024[(12)] = inst_11976);

return statearr_12024;
})();
var statearr_12025_12062 = state_12021__$1;
(statearr_12025_12062[(2)] = null);

(statearr_12025_12062[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (1))){
var state_12021__$1 = state_12021;
var statearr_12026_12063 = state_12021__$1;
(statearr_12026_12063[(2)] = null);

(statearr_12026_12063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (4))){
var inst_11962 = (state_12021[(13)]);
var inst_11962__$1 = (state_12021[(2)]);
var inst_11963 = (inst_11962__$1 == null);
var state_12021__$1 = (function (){var statearr_12027 = state_12021;
(statearr_12027[(13)] = inst_11962__$1);

return statearr_12027;
})();
if(cljs.core.truth_(inst_11963)){
var statearr_12028_12064 = state_12021__$1;
(statearr_12028_12064[(1)] = (5));

} else {
var statearr_12029_12065 = state_12021__$1;
(statearr_12029_12065[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (15))){
var state_12021__$1 = state_12021;
var statearr_12033_12066 = state_12021__$1;
(statearr_12033_12066[(2)] = null);

(statearr_12033_12066[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (21))){
var state_12021__$1 = state_12021;
var statearr_12034_12067 = state_12021__$1;
(statearr_12034_12067[(2)] = null);

(statearr_12034_12067[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (13))){
var inst_11975 = (state_12021[(9)]);
var inst_11974 = (state_12021[(10)]);
var inst_11973 = (state_12021[(11)]);
var inst_11976 = (state_12021[(12)]);
var inst_11983 = (state_12021[(2)]);
var inst_11984 = (inst_11976 + (1));
var tmp12030 = inst_11975;
var tmp12031 = inst_11974;
var tmp12032 = inst_11973;
var inst_11973__$1 = tmp12032;
var inst_11974__$1 = tmp12031;
var inst_11975__$1 = tmp12030;
var inst_11976__$1 = inst_11984;
var state_12021__$1 = (function (){var statearr_12035 = state_12021;
(statearr_12035[(9)] = inst_11975__$1);

(statearr_12035[(10)] = inst_11974__$1);

(statearr_12035[(11)] = inst_11973__$1);

(statearr_12035[(12)] = inst_11976__$1);

(statearr_12035[(14)] = inst_11983);

return statearr_12035;
})();
var statearr_12036_12068 = state_12021__$1;
(statearr_12036_12068[(2)] = null);

(statearr_12036_12068[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (22))){
var state_12021__$1 = state_12021;
var statearr_12037_12069 = state_12021__$1;
(statearr_12037_12069[(2)] = null);

(statearr_12037_12069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (6))){
var inst_11962 = (state_12021[(13)]);
var inst_11971 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_11962) : f.call(null,inst_11962));
var inst_11972 = cljs.core.seq(inst_11971);
var inst_11973 = inst_11972;
var inst_11974 = null;
var inst_11975 = (0);
var inst_11976 = (0);
var state_12021__$1 = (function (){var statearr_12038 = state_12021;
(statearr_12038[(9)] = inst_11975);

(statearr_12038[(10)] = inst_11974);

(statearr_12038[(11)] = inst_11973);

(statearr_12038[(12)] = inst_11976);

return statearr_12038;
})();
var statearr_12039_12070 = state_12021__$1;
(statearr_12039_12070[(2)] = null);

(statearr_12039_12070[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (17))){
var inst_11987 = (state_12021[(7)]);
var inst_11991 = cljs.core.chunk_first(inst_11987);
var inst_11992 = cljs.core.chunk_rest(inst_11987);
var inst_11993 = cljs.core.count(inst_11991);
var inst_11973 = inst_11992;
var inst_11974 = inst_11991;
var inst_11975 = inst_11993;
var inst_11976 = (0);
var state_12021__$1 = (function (){var statearr_12040 = state_12021;
(statearr_12040[(9)] = inst_11975);

(statearr_12040[(10)] = inst_11974);

(statearr_12040[(11)] = inst_11973);

(statearr_12040[(12)] = inst_11976);

return statearr_12040;
})();
var statearr_12041_12071 = state_12021__$1;
(statearr_12041_12071[(2)] = null);

(statearr_12041_12071[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (3))){
var inst_12019 = (state_12021[(2)]);
var state_12021__$1 = state_12021;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12021__$1,inst_12019);
} else {
if((state_val_12022 === (12))){
var inst_12007 = (state_12021[(2)]);
var state_12021__$1 = state_12021;
var statearr_12042_12072 = state_12021__$1;
(statearr_12042_12072[(2)] = inst_12007);

(statearr_12042_12072[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (2))){
var state_12021__$1 = state_12021;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12021__$1,(4),in$);
} else {
if((state_val_12022 === (23))){
var inst_12015 = (state_12021[(2)]);
var state_12021__$1 = state_12021;
var statearr_12043_12073 = state_12021__$1;
(statearr_12043_12073[(2)] = inst_12015);

(statearr_12043_12073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (19))){
var inst_12002 = (state_12021[(2)]);
var state_12021__$1 = state_12021;
var statearr_12044_12074 = state_12021__$1;
(statearr_12044_12074[(2)] = inst_12002);

(statearr_12044_12074[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (11))){
var inst_11987 = (state_12021[(7)]);
var inst_11973 = (state_12021[(11)]);
var inst_11987__$1 = cljs.core.seq(inst_11973);
var state_12021__$1 = (function (){var statearr_12045 = state_12021;
(statearr_12045[(7)] = inst_11987__$1);

return statearr_12045;
})();
if(inst_11987__$1){
var statearr_12046_12075 = state_12021__$1;
(statearr_12046_12075[(1)] = (14));

} else {
var statearr_12047_12076 = state_12021__$1;
(statearr_12047_12076[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (9))){
var inst_12009 = (state_12021[(2)]);
var inst_12010 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_12021__$1 = (function (){var statearr_12048 = state_12021;
(statearr_12048[(15)] = inst_12009);

return statearr_12048;
})();
if(cljs.core.truth_(inst_12010)){
var statearr_12049_12077 = state_12021__$1;
(statearr_12049_12077[(1)] = (21));

} else {
var statearr_12050_12078 = state_12021__$1;
(statearr_12050_12078[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (5))){
var inst_11965 = cljs.core.async.close_BANG_(out);
var state_12021__$1 = state_12021;
var statearr_12051_12079 = state_12021__$1;
(statearr_12051_12079[(2)] = inst_11965);

(statearr_12051_12079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (14))){
var inst_11987 = (state_12021[(7)]);
var inst_11989 = cljs.core.chunked_seq_QMARK_(inst_11987);
var state_12021__$1 = state_12021;
if(inst_11989){
var statearr_12052_12080 = state_12021__$1;
(statearr_12052_12080[(1)] = (17));

} else {
var statearr_12053_12081 = state_12021__$1;
(statearr_12053_12081[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (16))){
var inst_12005 = (state_12021[(2)]);
var state_12021__$1 = state_12021;
var statearr_12054_12082 = state_12021__$1;
(statearr_12054_12082[(2)] = inst_12005);

(statearr_12054_12082[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (10))){
var inst_11974 = (state_12021[(10)]);
var inst_11976 = (state_12021[(12)]);
var inst_11981 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_11974,inst_11976);
var state_12021__$1 = state_12021;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12021__$1,(13),out,inst_11981);
} else {
if((state_val_12022 === (18))){
var inst_11987 = (state_12021[(7)]);
var inst_11996 = cljs.core.first(inst_11987);
var state_12021__$1 = state_12021;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12021__$1,(20),out,inst_11996);
} else {
if((state_val_12022 === (8))){
var inst_11975 = (state_12021[(9)]);
var inst_11976 = (state_12021[(12)]);
var inst_11978 = (inst_11976 < inst_11975);
var inst_11979 = inst_11978;
var state_12021__$1 = state_12021;
if(cljs.core.truth_(inst_11979)){
var statearr_12055_12083 = state_12021__$1;
(statearr_12055_12083[(1)] = (10));

} else {
var statearr_12056_12084 = state_12021__$1;
(statearr_12056_12084[(1)] = (11));

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
}
}
}
}
}
});})(c__10225__auto__))
;
return ((function (switch__9843__auto__,c__10225__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__9844__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__9844__auto____0 = (function (){
var statearr_12057 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12057[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__9844__auto__);

(statearr_12057[(1)] = (1));

return statearr_12057;
});
var cljs$core$async$mapcat_STAR__$_state_machine__9844__auto____1 = (function (state_12021){
while(true){
var ret_value__9845__auto__ = (function (){try{while(true){
var result__9846__auto__ = switch__9843__auto__(state_12021);
if(cljs.core.keyword_identical_QMARK_(result__9846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9846__auto__;
}
break;
}
}catch (e12058){if((e12058 instanceof Object)){
var ex__9847__auto__ = e12058;
var statearr_12059_12085 = state_12021;
(statearr_12059_12085[(5)] = ex__9847__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12021);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12058;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12086 = state_12021;
state_12021 = G__12086;
continue;
} else {
return ret_value__9845__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__9844__auto__ = function(state_12021){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__9844__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__9844__auto____1.call(this,state_12021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__9844__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__9844__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__9844__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__9844__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__9844__auto__;
})()
;})(switch__9843__auto__,c__10225__auto__))
})();
var state__10227__auto__ = (function (){var statearr_12060 = (f__10226__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10226__auto__.cljs$core$IFn$_invoke$arity$0() : f__10226__auto__.call(null));
(statearr_12060[(6)] = c__10225__auto__);

return statearr_12060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10227__auto__);
});})(c__10225__auto__))
);

return c__10225__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__12088 = arguments.length;
switch (G__12088) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__12091 = arguments.length;
switch (G__12091) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__12094 = arguments.length;
switch (G__12094) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__10225__auto___12141 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10225__auto___12141,out){
return (function (){
var f__10226__auto__ = (function (){var switch__9843__auto__ = ((function (c__10225__auto___12141,out){
return (function (state_12118){
var state_val_12119 = (state_12118[(1)]);
if((state_val_12119 === (7))){
var inst_12113 = (state_12118[(2)]);
var state_12118__$1 = state_12118;
var statearr_12120_12142 = state_12118__$1;
(statearr_12120_12142[(2)] = inst_12113);

(statearr_12120_12142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12119 === (1))){
var inst_12095 = null;
var state_12118__$1 = (function (){var statearr_12121 = state_12118;
(statearr_12121[(7)] = inst_12095);

return statearr_12121;
})();
var statearr_12122_12143 = state_12118__$1;
(statearr_12122_12143[(2)] = null);

(statearr_12122_12143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12119 === (4))){
var inst_12098 = (state_12118[(8)]);
var inst_12098__$1 = (state_12118[(2)]);
var inst_12099 = (inst_12098__$1 == null);
var inst_12100 = cljs.core.not(inst_12099);
var state_12118__$1 = (function (){var statearr_12123 = state_12118;
(statearr_12123[(8)] = inst_12098__$1);

return statearr_12123;
})();
if(inst_12100){
var statearr_12124_12144 = state_12118__$1;
(statearr_12124_12144[(1)] = (5));

} else {
var statearr_12125_12145 = state_12118__$1;
(statearr_12125_12145[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12119 === (6))){
var state_12118__$1 = state_12118;
var statearr_12126_12146 = state_12118__$1;
(statearr_12126_12146[(2)] = null);

(statearr_12126_12146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12119 === (3))){
var inst_12115 = (state_12118[(2)]);
var inst_12116 = cljs.core.async.close_BANG_(out);
var state_12118__$1 = (function (){var statearr_12127 = state_12118;
(statearr_12127[(9)] = inst_12115);

return statearr_12127;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12118__$1,inst_12116);
} else {
if((state_val_12119 === (2))){
var state_12118__$1 = state_12118;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12118__$1,(4),ch);
} else {
if((state_val_12119 === (11))){
var inst_12098 = (state_12118[(8)]);
var inst_12107 = (state_12118[(2)]);
var inst_12095 = inst_12098;
var state_12118__$1 = (function (){var statearr_12128 = state_12118;
(statearr_12128[(7)] = inst_12095);

(statearr_12128[(10)] = inst_12107);

return statearr_12128;
})();
var statearr_12129_12147 = state_12118__$1;
(statearr_12129_12147[(2)] = null);

(statearr_12129_12147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12119 === (9))){
var inst_12098 = (state_12118[(8)]);
var state_12118__$1 = state_12118;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12118__$1,(11),out,inst_12098);
} else {
if((state_val_12119 === (5))){
var inst_12095 = (state_12118[(7)]);
var inst_12098 = (state_12118[(8)]);
var inst_12102 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12098,inst_12095);
var state_12118__$1 = state_12118;
if(inst_12102){
var statearr_12131_12148 = state_12118__$1;
(statearr_12131_12148[(1)] = (8));

} else {
var statearr_12132_12149 = state_12118__$1;
(statearr_12132_12149[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12119 === (10))){
var inst_12110 = (state_12118[(2)]);
var state_12118__$1 = state_12118;
var statearr_12133_12150 = state_12118__$1;
(statearr_12133_12150[(2)] = inst_12110);

(statearr_12133_12150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12119 === (8))){
var inst_12095 = (state_12118[(7)]);
var tmp12130 = inst_12095;
var inst_12095__$1 = tmp12130;
var state_12118__$1 = (function (){var statearr_12134 = state_12118;
(statearr_12134[(7)] = inst_12095__$1);

return statearr_12134;
})();
var statearr_12135_12151 = state_12118__$1;
(statearr_12135_12151[(2)] = null);

(statearr_12135_12151[(1)] = (2));


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
});})(c__10225__auto___12141,out))
;
return ((function (switch__9843__auto__,c__10225__auto___12141,out){
return (function() {
var cljs$core$async$state_machine__9844__auto__ = null;
var cljs$core$async$state_machine__9844__auto____0 = (function (){
var statearr_12136 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12136[(0)] = cljs$core$async$state_machine__9844__auto__);

(statearr_12136[(1)] = (1));

return statearr_12136;
});
var cljs$core$async$state_machine__9844__auto____1 = (function (state_12118){
while(true){
var ret_value__9845__auto__ = (function (){try{while(true){
var result__9846__auto__ = switch__9843__auto__(state_12118);
if(cljs.core.keyword_identical_QMARK_(result__9846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9846__auto__;
}
break;
}
}catch (e12137){if((e12137 instanceof Object)){
var ex__9847__auto__ = e12137;
var statearr_12138_12152 = state_12118;
(statearr_12138_12152[(5)] = ex__9847__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12118);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12137;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12153 = state_12118;
state_12118 = G__12153;
continue;
} else {
return ret_value__9845__auto__;
}
break;
}
});
cljs$core$async$state_machine__9844__auto__ = function(state_12118){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9844__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9844__auto____1.call(this,state_12118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9844__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9844__auto____0;
cljs$core$async$state_machine__9844__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9844__auto____1;
return cljs$core$async$state_machine__9844__auto__;
})()
;})(switch__9843__auto__,c__10225__auto___12141,out))
})();
var state__10227__auto__ = (function (){var statearr_12139 = (f__10226__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10226__auto__.cljs$core$IFn$_invoke$arity$0() : f__10226__auto__.call(null));
(statearr_12139[(6)] = c__10225__auto___12141);

return statearr_12139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10227__auto__);
});})(c__10225__auto___12141,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__12155 = arguments.length;
switch (G__12155) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__10225__auto___12221 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10225__auto___12221,out){
return (function (){
var f__10226__auto__ = (function (){var switch__9843__auto__ = ((function (c__10225__auto___12221,out){
return (function (state_12193){
var state_val_12194 = (state_12193[(1)]);
if((state_val_12194 === (7))){
var inst_12189 = (state_12193[(2)]);
var state_12193__$1 = state_12193;
var statearr_12195_12222 = state_12193__$1;
(statearr_12195_12222[(2)] = inst_12189);

(statearr_12195_12222[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12194 === (1))){
var inst_12156 = (new Array(n));
var inst_12157 = inst_12156;
var inst_12158 = (0);
var state_12193__$1 = (function (){var statearr_12196 = state_12193;
(statearr_12196[(7)] = inst_12157);

(statearr_12196[(8)] = inst_12158);

return statearr_12196;
})();
var statearr_12197_12223 = state_12193__$1;
(statearr_12197_12223[(2)] = null);

(statearr_12197_12223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12194 === (4))){
var inst_12161 = (state_12193[(9)]);
var inst_12161__$1 = (state_12193[(2)]);
var inst_12162 = (inst_12161__$1 == null);
var inst_12163 = cljs.core.not(inst_12162);
var state_12193__$1 = (function (){var statearr_12198 = state_12193;
(statearr_12198[(9)] = inst_12161__$1);

return statearr_12198;
})();
if(inst_12163){
var statearr_12199_12224 = state_12193__$1;
(statearr_12199_12224[(1)] = (5));

} else {
var statearr_12200_12225 = state_12193__$1;
(statearr_12200_12225[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12194 === (15))){
var inst_12183 = (state_12193[(2)]);
var state_12193__$1 = state_12193;
var statearr_12201_12226 = state_12193__$1;
(statearr_12201_12226[(2)] = inst_12183);

(statearr_12201_12226[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12194 === (13))){
var state_12193__$1 = state_12193;
var statearr_12202_12227 = state_12193__$1;
(statearr_12202_12227[(2)] = null);

(statearr_12202_12227[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12194 === (6))){
var inst_12158 = (state_12193[(8)]);
var inst_12179 = (inst_12158 > (0));
var state_12193__$1 = state_12193;
if(cljs.core.truth_(inst_12179)){
var statearr_12203_12228 = state_12193__$1;
(statearr_12203_12228[(1)] = (12));

} else {
var statearr_12204_12229 = state_12193__$1;
(statearr_12204_12229[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12194 === (3))){
var inst_12191 = (state_12193[(2)]);
var state_12193__$1 = state_12193;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12193__$1,inst_12191);
} else {
if((state_val_12194 === (12))){
var inst_12157 = (state_12193[(7)]);
var inst_12181 = cljs.core.vec(inst_12157);
var state_12193__$1 = state_12193;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12193__$1,(15),out,inst_12181);
} else {
if((state_val_12194 === (2))){
var state_12193__$1 = state_12193;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12193__$1,(4),ch);
} else {
if((state_val_12194 === (11))){
var inst_12173 = (state_12193[(2)]);
var inst_12174 = (new Array(n));
var inst_12157 = inst_12174;
var inst_12158 = (0);
var state_12193__$1 = (function (){var statearr_12205 = state_12193;
(statearr_12205[(10)] = inst_12173);

(statearr_12205[(7)] = inst_12157);

(statearr_12205[(8)] = inst_12158);

return statearr_12205;
})();
var statearr_12206_12230 = state_12193__$1;
(statearr_12206_12230[(2)] = null);

(statearr_12206_12230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12194 === (9))){
var inst_12157 = (state_12193[(7)]);
var inst_12171 = cljs.core.vec(inst_12157);
var state_12193__$1 = state_12193;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12193__$1,(11),out,inst_12171);
} else {
if((state_val_12194 === (5))){
var inst_12157 = (state_12193[(7)]);
var inst_12166 = (state_12193[(11)]);
var inst_12158 = (state_12193[(8)]);
var inst_12161 = (state_12193[(9)]);
var inst_12165 = (inst_12157[inst_12158] = inst_12161);
var inst_12166__$1 = (inst_12158 + (1));
var inst_12167 = (inst_12166__$1 < n);
var state_12193__$1 = (function (){var statearr_12207 = state_12193;
(statearr_12207[(11)] = inst_12166__$1);

(statearr_12207[(12)] = inst_12165);

return statearr_12207;
})();
if(cljs.core.truth_(inst_12167)){
var statearr_12208_12231 = state_12193__$1;
(statearr_12208_12231[(1)] = (8));

} else {
var statearr_12209_12232 = state_12193__$1;
(statearr_12209_12232[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12194 === (14))){
var inst_12186 = (state_12193[(2)]);
var inst_12187 = cljs.core.async.close_BANG_(out);
var state_12193__$1 = (function (){var statearr_12211 = state_12193;
(statearr_12211[(13)] = inst_12186);

return statearr_12211;
})();
var statearr_12212_12233 = state_12193__$1;
(statearr_12212_12233[(2)] = inst_12187);

(statearr_12212_12233[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12194 === (10))){
var inst_12177 = (state_12193[(2)]);
var state_12193__$1 = state_12193;
var statearr_12213_12234 = state_12193__$1;
(statearr_12213_12234[(2)] = inst_12177);

(statearr_12213_12234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12194 === (8))){
var inst_12157 = (state_12193[(7)]);
var inst_12166 = (state_12193[(11)]);
var tmp12210 = inst_12157;
var inst_12157__$1 = tmp12210;
var inst_12158 = inst_12166;
var state_12193__$1 = (function (){var statearr_12214 = state_12193;
(statearr_12214[(7)] = inst_12157__$1);

(statearr_12214[(8)] = inst_12158);

return statearr_12214;
})();
var statearr_12215_12235 = state_12193__$1;
(statearr_12215_12235[(2)] = null);

(statearr_12215_12235[(1)] = (2));


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
});})(c__10225__auto___12221,out))
;
return ((function (switch__9843__auto__,c__10225__auto___12221,out){
return (function() {
var cljs$core$async$state_machine__9844__auto__ = null;
var cljs$core$async$state_machine__9844__auto____0 = (function (){
var statearr_12216 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12216[(0)] = cljs$core$async$state_machine__9844__auto__);

(statearr_12216[(1)] = (1));

return statearr_12216;
});
var cljs$core$async$state_machine__9844__auto____1 = (function (state_12193){
while(true){
var ret_value__9845__auto__ = (function (){try{while(true){
var result__9846__auto__ = switch__9843__auto__(state_12193);
if(cljs.core.keyword_identical_QMARK_(result__9846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9846__auto__;
}
break;
}
}catch (e12217){if((e12217 instanceof Object)){
var ex__9847__auto__ = e12217;
var statearr_12218_12236 = state_12193;
(statearr_12218_12236[(5)] = ex__9847__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12193);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12217;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12237 = state_12193;
state_12193 = G__12237;
continue;
} else {
return ret_value__9845__auto__;
}
break;
}
});
cljs$core$async$state_machine__9844__auto__ = function(state_12193){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9844__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9844__auto____1.call(this,state_12193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9844__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9844__auto____0;
cljs$core$async$state_machine__9844__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9844__auto____1;
return cljs$core$async$state_machine__9844__auto__;
})()
;})(switch__9843__auto__,c__10225__auto___12221,out))
})();
var state__10227__auto__ = (function (){var statearr_12219 = (f__10226__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10226__auto__.cljs$core$IFn$_invoke$arity$0() : f__10226__auto__.call(null));
(statearr_12219[(6)] = c__10225__auto___12221);

return statearr_12219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10227__auto__);
});})(c__10225__auto___12221,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__12239 = arguments.length;
switch (G__12239) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__10225__auto___12309 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10225__auto___12309,out){
return (function (){
var f__10226__auto__ = (function (){var switch__9843__auto__ = ((function (c__10225__auto___12309,out){
return (function (state_12281){
var state_val_12282 = (state_12281[(1)]);
if((state_val_12282 === (7))){
var inst_12277 = (state_12281[(2)]);
var state_12281__$1 = state_12281;
var statearr_12283_12310 = state_12281__$1;
(statearr_12283_12310[(2)] = inst_12277);

(statearr_12283_12310[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12282 === (1))){
var inst_12240 = [];
var inst_12241 = inst_12240;
var inst_12242 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_12281__$1 = (function (){var statearr_12284 = state_12281;
(statearr_12284[(7)] = inst_12242);

(statearr_12284[(8)] = inst_12241);

return statearr_12284;
})();
var statearr_12285_12311 = state_12281__$1;
(statearr_12285_12311[(2)] = null);

(statearr_12285_12311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12282 === (4))){
var inst_12245 = (state_12281[(9)]);
var inst_12245__$1 = (state_12281[(2)]);
var inst_12246 = (inst_12245__$1 == null);
var inst_12247 = cljs.core.not(inst_12246);
var state_12281__$1 = (function (){var statearr_12286 = state_12281;
(statearr_12286[(9)] = inst_12245__$1);

return statearr_12286;
})();
if(inst_12247){
var statearr_12287_12312 = state_12281__$1;
(statearr_12287_12312[(1)] = (5));

} else {
var statearr_12288_12313 = state_12281__$1;
(statearr_12288_12313[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12282 === (15))){
var inst_12271 = (state_12281[(2)]);
var state_12281__$1 = state_12281;
var statearr_12289_12314 = state_12281__$1;
(statearr_12289_12314[(2)] = inst_12271);

(statearr_12289_12314[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12282 === (13))){
var state_12281__$1 = state_12281;
var statearr_12290_12315 = state_12281__$1;
(statearr_12290_12315[(2)] = null);

(statearr_12290_12315[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12282 === (6))){
var inst_12241 = (state_12281[(8)]);
var inst_12266 = inst_12241.length;
var inst_12267 = (inst_12266 > (0));
var state_12281__$1 = state_12281;
if(cljs.core.truth_(inst_12267)){
var statearr_12291_12316 = state_12281__$1;
(statearr_12291_12316[(1)] = (12));

} else {
var statearr_12292_12317 = state_12281__$1;
(statearr_12292_12317[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12282 === (3))){
var inst_12279 = (state_12281[(2)]);
var state_12281__$1 = state_12281;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12281__$1,inst_12279);
} else {
if((state_val_12282 === (12))){
var inst_12241 = (state_12281[(8)]);
var inst_12269 = cljs.core.vec(inst_12241);
var state_12281__$1 = state_12281;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12281__$1,(15),out,inst_12269);
} else {
if((state_val_12282 === (2))){
var state_12281__$1 = state_12281;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12281__$1,(4),ch);
} else {
if((state_val_12282 === (11))){
var inst_12249 = (state_12281[(10)]);
var inst_12245 = (state_12281[(9)]);
var inst_12259 = (state_12281[(2)]);
var inst_12260 = [];
var inst_12261 = inst_12260.push(inst_12245);
var inst_12241 = inst_12260;
var inst_12242 = inst_12249;
var state_12281__$1 = (function (){var statearr_12293 = state_12281;
(statearr_12293[(11)] = inst_12259);

(statearr_12293[(12)] = inst_12261);

(statearr_12293[(7)] = inst_12242);

(statearr_12293[(8)] = inst_12241);

return statearr_12293;
})();
var statearr_12294_12318 = state_12281__$1;
(statearr_12294_12318[(2)] = null);

(statearr_12294_12318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12282 === (9))){
var inst_12241 = (state_12281[(8)]);
var inst_12257 = cljs.core.vec(inst_12241);
var state_12281__$1 = state_12281;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12281__$1,(11),out,inst_12257);
} else {
if((state_val_12282 === (5))){
var inst_12242 = (state_12281[(7)]);
var inst_12249 = (state_12281[(10)]);
var inst_12245 = (state_12281[(9)]);
var inst_12249__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12245) : f.call(null,inst_12245));
var inst_12250 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12249__$1,inst_12242);
var inst_12251 = cljs.core.keyword_identical_QMARK_(inst_12242,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_12252 = ((inst_12250) || (inst_12251));
var state_12281__$1 = (function (){var statearr_12295 = state_12281;
(statearr_12295[(10)] = inst_12249__$1);

return statearr_12295;
})();
if(cljs.core.truth_(inst_12252)){
var statearr_12296_12319 = state_12281__$1;
(statearr_12296_12319[(1)] = (8));

} else {
var statearr_12297_12320 = state_12281__$1;
(statearr_12297_12320[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12282 === (14))){
var inst_12274 = (state_12281[(2)]);
var inst_12275 = cljs.core.async.close_BANG_(out);
var state_12281__$1 = (function (){var statearr_12299 = state_12281;
(statearr_12299[(13)] = inst_12274);

return statearr_12299;
})();
var statearr_12300_12321 = state_12281__$1;
(statearr_12300_12321[(2)] = inst_12275);

(statearr_12300_12321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12282 === (10))){
var inst_12264 = (state_12281[(2)]);
var state_12281__$1 = state_12281;
var statearr_12301_12322 = state_12281__$1;
(statearr_12301_12322[(2)] = inst_12264);

(statearr_12301_12322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12282 === (8))){
var inst_12249 = (state_12281[(10)]);
var inst_12241 = (state_12281[(8)]);
var inst_12245 = (state_12281[(9)]);
var inst_12254 = inst_12241.push(inst_12245);
var tmp12298 = inst_12241;
var inst_12241__$1 = tmp12298;
var inst_12242 = inst_12249;
var state_12281__$1 = (function (){var statearr_12302 = state_12281;
(statearr_12302[(7)] = inst_12242);

(statearr_12302[(14)] = inst_12254);

(statearr_12302[(8)] = inst_12241__$1);

return statearr_12302;
})();
var statearr_12303_12323 = state_12281__$1;
(statearr_12303_12323[(2)] = null);

(statearr_12303_12323[(1)] = (2));


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
});})(c__10225__auto___12309,out))
;
return ((function (switch__9843__auto__,c__10225__auto___12309,out){
return (function() {
var cljs$core$async$state_machine__9844__auto__ = null;
var cljs$core$async$state_machine__9844__auto____0 = (function (){
var statearr_12304 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12304[(0)] = cljs$core$async$state_machine__9844__auto__);

(statearr_12304[(1)] = (1));

return statearr_12304;
});
var cljs$core$async$state_machine__9844__auto____1 = (function (state_12281){
while(true){
var ret_value__9845__auto__ = (function (){try{while(true){
var result__9846__auto__ = switch__9843__auto__(state_12281);
if(cljs.core.keyword_identical_QMARK_(result__9846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9846__auto__;
}
break;
}
}catch (e12305){if((e12305 instanceof Object)){
var ex__9847__auto__ = e12305;
var statearr_12306_12324 = state_12281;
(statearr_12306_12324[(5)] = ex__9847__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12281);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12305;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12325 = state_12281;
state_12281 = G__12325;
continue;
} else {
return ret_value__9845__auto__;
}
break;
}
});
cljs$core$async$state_machine__9844__auto__ = function(state_12281){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9844__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9844__auto____1.call(this,state_12281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9844__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9844__auto____0;
cljs$core$async$state_machine__9844__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9844__auto____1;
return cljs$core$async$state_machine__9844__auto__;
})()
;})(switch__9843__auto__,c__10225__auto___12309,out))
})();
var state__10227__auto__ = (function (){var statearr_12307 = (f__10226__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10226__auto__.cljs$core$IFn$_invoke$arity$0() : f__10226__auto__.call(null));
(statearr_12307[(6)] = c__10225__auto___12309);

return statearr_12307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10227__auto__);
});})(c__10225__auto___12309,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
