goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23516 = (function (f,blockable,meta23517){
this.f = f;
this.blockable = blockable;
this.meta23517 = meta23517;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23516.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23518,meta23517__$1){
var self__ = this;
var _23518__$1 = this;
return (new cljs.core.async.t_cljs$core$async23516(self__.f,self__.blockable,meta23517__$1));
}));

(cljs.core.async.t_cljs$core$async23516.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23518){
var self__ = this;
var _23518__$1 = this;
return self__.meta23517;
}));

(cljs.core.async.t_cljs$core$async23516.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23516.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async23516.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async23516.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async23516.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta23517","meta23517",-1729779712,null)], null);
}));

(cljs.core.async.t_cljs$core$async23516.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23516.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23516");

(cljs.core.async.t_cljs$core$async23516.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async23516");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23516.
 */
cljs.core.async.__GT_t_cljs$core$async23516 = (function cljs$core$async$__GT_t_cljs$core$async23516(f,blockable,meta23517){
return (new cljs.core.async.t_cljs$core$async23516(f,blockable,meta23517));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__23515 = arguments.length;
switch (G__23515) {
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

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async23516(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

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
if((!((buff == null)))){
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
var G__23525 = arguments.length;
switch (G__23525) {
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

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__23529 = arguments.length;
switch (G__23529) {
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

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

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
var G__23538 = arguments.length;
switch (G__23538) {
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

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_25724 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_25724) : fn1.call(null, val_25724));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_25724) : fn1.call(null, val_25724));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

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
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__23559 = arguments.length;
switch (G__23559) {
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

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___25730 = n;
var x_25731 = (0);
while(true){
if((x_25731 < n__5593__auto___25730)){
(a[x_25731] = x_25731);

var G__25732 = (x_25731 + (1));
x_25731 = G__25732;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23574 = (function (flag,meta23575){
this.flag = flag;
this.meta23575 = meta23575;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23574.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23576,meta23575__$1){
var self__ = this;
var _23576__$1 = this;
return (new cljs.core.async.t_cljs$core$async23574(self__.flag,meta23575__$1));
}));

(cljs.core.async.t_cljs$core$async23574.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23576){
var self__ = this;
var _23576__$1 = this;
return self__.meta23575;
}));

(cljs.core.async.t_cljs$core$async23574.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23574.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async23574.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async23574.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async23574.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23575","meta23575",-355995486,null)], null);
}));

(cljs.core.async.t_cljs$core$async23574.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23574.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23574");

(cljs.core.async.t_cljs$core$async23574.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async23574");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23574.
 */
cljs.core.async.__GT_t_cljs$core$async23574 = (function cljs$core$async$__GT_t_cljs$core$async23574(flag,meta23575){
return (new cljs.core.async.t_cljs$core$async23574(flag,meta23575));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async23574(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23590 = (function (flag,cb,meta23591){
this.flag = flag;
this.cb = cb;
this.meta23591 = meta23591;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23590.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23592,meta23591__$1){
var self__ = this;
var _23592__$1 = this;
return (new cljs.core.async.t_cljs$core$async23590(self__.flag,self__.cb,meta23591__$1));
}));

(cljs.core.async.t_cljs$core$async23590.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23592){
var self__ = this;
var _23592__$1 = this;
return self__.meta23591;
}));

(cljs.core.async.t_cljs$core$async23590.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23590.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async23590.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async23590.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async23590.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23591","meta23591",-1334984080,null)], null);
}));

(cljs.core.async.t_cljs$core$async23590.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23590.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23590");

(cljs.core.async.t_cljs$core$async23590.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async23590");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23590.
 */
cljs.core.async.__GT_t_cljs$core$async23590 = (function cljs$core$async$__GT_t_cljs$core$async23590(flag,cb,meta23591){
return (new cljs.core.async.t_cljs$core$async23590(flag,cb,meta23591));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async23590(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null, (0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null, (1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23599_SHARP_){
var G__23606 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23599_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__23606) : fret.call(null, G__23606));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23600_SHARP_){
var G__23607 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23600_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__23607) : fret.call(null, G__23607));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__25736 = (i + (1));
i = G__25736;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null, );
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
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
var args__5732__auto__ = [];
var len__5726__auto___25738 = arguments.length;
var i__5727__auto___25739 = (0);
while(true){
if((i__5727__auto___25739 < len__5726__auto___25738)){
args__5732__auto__.push((arguments[i__5727__auto___25739]));

var G__25740 = (i__5727__auto___25739 + (1));
i__5727__auto___25739 = G__25740;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23619){
var map__23620 = p__23619;
var map__23620__$1 = cljs.core.__destructure_map(map__23620);
var opts = map__23620__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23611){
var G__23612 = cljs.core.first(seq23611);
var seq23611__$1 = cljs.core.next(seq23611);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23612,seq23611__$1);
}));

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
var G__23633 = arguments.length;
switch (G__23633) {
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

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23457__auto___25745 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23458__auto__ = (function (){var switch__23318__auto__ = (function (state_23708){
var state_val_23709 = (state_23708[(1)]);
if((state_val_23709 === (7))){
var inst_23699 = (state_23708[(2)]);
var state_23708__$1 = state_23708;
var statearr_23723_25749 = state_23708__$1;
(statearr_23723_25749[(2)] = inst_23699);

(statearr_23723_25749[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23709 === (1))){
var state_23708__$1 = state_23708;
var statearr_23732_25750 = state_23708__$1;
(statearr_23732_25750[(2)] = null);

(statearr_23732_25750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23709 === (4))){
var inst_23672 = (state_23708[(7)]);
var inst_23672__$1 = (state_23708[(2)]);
var inst_23681 = (inst_23672__$1 == null);
var state_23708__$1 = (function (){var statearr_23733 = state_23708;
(statearr_23733[(7)] = inst_23672__$1);

return statearr_23733;
})();
if(cljs.core.truth_(inst_23681)){
var statearr_23734_25751 = state_23708__$1;
(statearr_23734_25751[(1)] = (5));

} else {
var statearr_23735_25752 = state_23708__$1;
(statearr_23735_25752[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23709 === (13))){
var state_23708__$1 = state_23708;
var statearr_23736_25753 = state_23708__$1;
(statearr_23736_25753[(2)] = null);

(statearr_23736_25753[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23709 === (6))){
var inst_23672 = (state_23708[(7)]);
var state_23708__$1 = state_23708;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23708__$1,(11),to,inst_23672);
} else {
if((state_val_23709 === (3))){
var inst_23701 = (state_23708[(2)]);
var state_23708__$1 = state_23708;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23708__$1,inst_23701);
} else {
if((state_val_23709 === (12))){
var state_23708__$1 = state_23708;
var statearr_23737_25754 = state_23708__$1;
(statearr_23737_25754[(2)] = null);

(statearr_23737_25754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23709 === (2))){
var state_23708__$1 = state_23708;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23708__$1,(4),from);
} else {
if((state_val_23709 === (11))){
var inst_23692 = (state_23708[(2)]);
var state_23708__$1 = state_23708;
if(cljs.core.truth_(inst_23692)){
var statearr_23738_25755 = state_23708__$1;
(statearr_23738_25755[(1)] = (12));

} else {
var statearr_23739_25756 = state_23708__$1;
(statearr_23739_25756[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23709 === (9))){
var state_23708__$1 = state_23708;
var statearr_23740_25757 = state_23708__$1;
(statearr_23740_25757[(2)] = null);

(statearr_23740_25757[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23709 === (5))){
var state_23708__$1 = state_23708;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23741_25758 = state_23708__$1;
(statearr_23741_25758[(1)] = (8));

} else {
var statearr_23742_25759 = state_23708__$1;
(statearr_23742_25759[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23709 === (14))){
var inst_23697 = (state_23708[(2)]);
var state_23708__$1 = state_23708;
var statearr_23743_25760 = state_23708__$1;
(statearr_23743_25760[(2)] = inst_23697);

(statearr_23743_25760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23709 === (10))){
var inst_23689 = (state_23708[(2)]);
var state_23708__$1 = state_23708;
var statearr_23744_25761 = state_23708__$1;
(statearr_23744_25761[(2)] = inst_23689);

(statearr_23744_25761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23709 === (8))){
var inst_23685 = cljs.core.async.close_BANG_(to);
var state_23708__$1 = state_23708;
var statearr_23745_25762 = state_23708__$1;
(statearr_23745_25762[(2)] = inst_23685);

(statearr_23745_25762[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__23319__auto__ = null;
var cljs$core$async$state_machine__23319__auto____0 = (function (){
var statearr_23746 = [null,null,null,null,null,null,null,null];
(statearr_23746[(0)] = cljs$core$async$state_machine__23319__auto__);

(statearr_23746[(1)] = (1));

return statearr_23746;
});
var cljs$core$async$state_machine__23319__auto____1 = (function (state_23708){
while(true){
var ret_value__23320__auto__ = (function (){try{while(true){
var result__23321__auto__ = switch__23318__auto__(state_23708);
if(cljs.core.keyword_identical_QMARK_(result__23321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23321__auto__;
}
break;
}
}catch (e23747){var ex__23322__auto__ = e23747;
var statearr_23748_25763 = state_23708;
(statearr_23748_25763[(2)] = ex__23322__auto__);


if(cljs.core.seq((state_23708[(4)]))){
var statearr_23749_25764 = state_23708;
(statearr_23749_25764[(1)] = cljs.core.first((state_23708[(4)])));

} else {
throw ex__23322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25765 = state_23708;
state_23708 = G__25765;
continue;
} else {
return ret_value__23320__auto__;
}
break;
}
});
cljs$core$async$state_machine__23319__auto__ = function(state_23708){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23319__auto____1.call(this,state_23708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23319__auto____0;
cljs$core$async$state_machine__23319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23319__auto____1;
return cljs$core$async$state_machine__23319__auto__;
})()
})();
var state__23459__auto__ = (function (){var statearr_23750 = f__23458__auto__();
(statearr_23750[(6)] = c__23457__auto___25745);

return statearr_23750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23459__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__23751){
var vec__23752 = p__23751;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23752,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23752,(1),null);
var job = vec__23752;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__23457__auto___25766 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23458__auto__ = (function (){var switch__23318__auto__ = (function (state_23759){
var state_val_23760 = (state_23759[(1)]);
if((state_val_23760 === (1))){
var state_23759__$1 = state_23759;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23759__$1,(2),res,v);
} else {
if((state_val_23760 === (2))){
var inst_23756 = (state_23759[(2)]);
var inst_23757 = cljs.core.async.close_BANG_(res);
var state_23759__$1 = (function (){var statearr_23762 = state_23759;
(statearr_23762[(7)] = inst_23756);

return statearr_23762;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_23759__$1,inst_23757);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23319__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23319__auto____0 = (function (){
var statearr_23763 = [null,null,null,null,null,null,null,null];
(statearr_23763[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23319__auto__);

(statearr_23763[(1)] = (1));

return statearr_23763;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23319__auto____1 = (function (state_23759){
while(true){
var ret_value__23320__auto__ = (function (){try{while(true){
var result__23321__auto__ = switch__23318__auto__(state_23759);
if(cljs.core.keyword_identical_QMARK_(result__23321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23321__auto__;
}
break;
}
}catch (e23764){var ex__23322__auto__ = e23764;
var statearr_23765_25767 = state_23759;
(statearr_23765_25767[(2)] = ex__23322__auto__);


if(cljs.core.seq((state_23759[(4)]))){
var statearr_23766_25768 = state_23759;
(statearr_23766_25768[(1)] = cljs.core.first((state_23759[(4)])));

} else {
throw ex__23322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25773 = state_23759;
state_23759 = G__25773;
continue;
} else {
return ret_value__23320__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23319__auto__ = function(state_23759){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23319__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23319__auto____1.call(this,state_23759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23319__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23319__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23319__auto__;
})()
})();
var state__23459__auto__ = (function (){var statearr_23767 = f__23458__auto__();
(statearr_23767[(6)] = c__23457__auto___25766);

return statearr_23767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23459__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__23768){
var vec__23769 = p__23768;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23769,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23769,(1),null);
var job = vec__23769;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null, v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___25774 = n;
var __25775 = (0);
while(true){
if((__25775 < n__5593__auto___25774)){
var G__23776_25776 = type;
var G__23776_25777__$1 = (((G__23776_25776 instanceof cljs.core.Keyword))?G__23776_25776.fqn:null);
switch (G__23776_25777__$1) {
case "compute":
var c__23457__auto___25779 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__25775,c__23457__auto___25779,G__23776_25776,G__23776_25777__$1,n__5593__auto___25774,jobs,results,process__$1,async){
return (function (){
var f__23458__auto__ = (function (){var switch__23318__auto__ = ((function (__25775,c__23457__auto___25779,G__23776_25776,G__23776_25777__$1,n__5593__auto___25774,jobs,results,process__$1,async){
return (function (state_23808){
var state_val_23809 = (state_23808[(1)]);
if((state_val_23809 === (1))){
var state_23808__$1 = state_23808;
var statearr_23811_25781 = state_23808__$1;
(statearr_23811_25781[(2)] = null);

(statearr_23811_25781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23809 === (2))){
var state_23808__$1 = state_23808;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23808__$1,(4),jobs);
} else {
if((state_val_23809 === (3))){
var inst_23806 = (state_23808[(2)]);
var state_23808__$1 = state_23808;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23808__$1,inst_23806);
} else {
if((state_val_23809 === (4))){
var inst_23794 = (state_23808[(2)]);
var inst_23799 = process__$1(inst_23794);
var state_23808__$1 = state_23808;
if(cljs.core.truth_(inst_23799)){
var statearr_23812_25783 = state_23808__$1;
(statearr_23812_25783[(1)] = (5));

} else {
var statearr_23813_25784 = state_23808__$1;
(statearr_23813_25784[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23809 === (5))){
var state_23808__$1 = state_23808;
var statearr_23815_25785 = state_23808__$1;
(statearr_23815_25785[(2)] = null);

(statearr_23815_25785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23809 === (6))){
var state_23808__$1 = state_23808;
var statearr_23816_25786 = state_23808__$1;
(statearr_23816_25786[(2)] = null);

(statearr_23816_25786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23809 === (7))){
var inst_23804 = (state_23808[(2)]);
var state_23808__$1 = state_23808;
var statearr_23817_25787 = state_23808__$1;
(statearr_23817_25787[(2)] = inst_23804);

(statearr_23817_25787[(1)] = (3));


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
});})(__25775,c__23457__auto___25779,G__23776_25776,G__23776_25777__$1,n__5593__auto___25774,jobs,results,process__$1,async))
;
return ((function (__25775,switch__23318__auto__,c__23457__auto___25779,G__23776_25776,G__23776_25777__$1,n__5593__auto___25774,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23319__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23319__auto____0 = (function (){
var statearr_23820 = [null,null,null,null,null,null,null];
(statearr_23820[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23319__auto__);

(statearr_23820[(1)] = (1));

return statearr_23820;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23319__auto____1 = (function (state_23808){
while(true){
var ret_value__23320__auto__ = (function (){try{while(true){
var result__23321__auto__ = switch__23318__auto__(state_23808);
if(cljs.core.keyword_identical_QMARK_(result__23321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23321__auto__;
}
break;
}
}catch (e23821){var ex__23322__auto__ = e23821;
var statearr_23822_25799 = state_23808;
(statearr_23822_25799[(2)] = ex__23322__auto__);


if(cljs.core.seq((state_23808[(4)]))){
var statearr_23823_25800 = state_23808;
(statearr_23823_25800[(1)] = cljs.core.first((state_23808[(4)])));

} else {
throw ex__23322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25805 = state_23808;
state_23808 = G__25805;
continue;
} else {
return ret_value__23320__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23319__auto__ = function(state_23808){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23319__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23319__auto____1.call(this,state_23808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23319__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23319__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23319__auto__;
})()
;})(__25775,switch__23318__auto__,c__23457__auto___25779,G__23776_25776,G__23776_25777__$1,n__5593__auto___25774,jobs,results,process__$1,async))
})();
var state__23459__auto__ = (function (){var statearr_23825 = f__23458__auto__();
(statearr_23825[(6)] = c__23457__auto___25779);

return statearr_23825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23459__auto__);
});})(__25775,c__23457__auto___25779,G__23776_25776,G__23776_25777__$1,n__5593__auto___25774,jobs,results,process__$1,async))
);


break;
case "async":
var c__23457__auto___25806 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__25775,c__23457__auto___25806,G__23776_25776,G__23776_25777__$1,n__5593__auto___25774,jobs,results,process__$1,async){
return (function (){
var f__23458__auto__ = (function (){var switch__23318__auto__ = ((function (__25775,c__23457__auto___25806,G__23776_25776,G__23776_25777__$1,n__5593__auto___25774,jobs,results,process__$1,async){
return (function (state_23847){
var state_val_23849 = (state_23847[(1)]);
if((state_val_23849 === (1))){
var state_23847__$1 = state_23847;
var statearr_23861_25807 = state_23847__$1;
(statearr_23861_25807[(2)] = null);

(statearr_23861_25807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23849 === (2))){
var state_23847__$1 = state_23847;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23847__$1,(4),jobs);
} else {
if((state_val_23849 === (3))){
var inst_23844 = (state_23847[(2)]);
var state_23847__$1 = state_23847;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23847__$1,inst_23844);
} else {
if((state_val_23849 === (4))){
var inst_23832 = (state_23847[(2)]);
var inst_23833 = async(inst_23832);
var state_23847__$1 = state_23847;
if(cljs.core.truth_(inst_23833)){
var statearr_23862_25815 = state_23847__$1;
(statearr_23862_25815[(1)] = (5));

} else {
var statearr_23863_25816 = state_23847__$1;
(statearr_23863_25816[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23849 === (5))){
var state_23847__$1 = state_23847;
var statearr_23868_25820 = state_23847__$1;
(statearr_23868_25820[(2)] = null);

(statearr_23868_25820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23849 === (6))){
var state_23847__$1 = state_23847;
var statearr_23874_25821 = state_23847__$1;
(statearr_23874_25821[(2)] = null);

(statearr_23874_25821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23849 === (7))){
var inst_23839 = (state_23847[(2)]);
var state_23847__$1 = state_23847;
var statearr_23882_25823 = state_23847__$1;
(statearr_23882_25823[(2)] = inst_23839);

(statearr_23882_25823[(1)] = (3));


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
});})(__25775,c__23457__auto___25806,G__23776_25776,G__23776_25777__$1,n__5593__auto___25774,jobs,results,process__$1,async))
;
return ((function (__25775,switch__23318__auto__,c__23457__auto___25806,G__23776_25776,G__23776_25777__$1,n__5593__auto___25774,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23319__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23319__auto____0 = (function (){
var statearr_23889 = [null,null,null,null,null,null,null];
(statearr_23889[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23319__auto__);

(statearr_23889[(1)] = (1));

return statearr_23889;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23319__auto____1 = (function (state_23847){
while(true){
var ret_value__23320__auto__ = (function (){try{while(true){
var result__23321__auto__ = switch__23318__auto__(state_23847);
if(cljs.core.keyword_identical_QMARK_(result__23321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23321__auto__;
}
break;
}
}catch (e23895){var ex__23322__auto__ = e23895;
var statearr_23896_25825 = state_23847;
(statearr_23896_25825[(2)] = ex__23322__auto__);


if(cljs.core.seq((state_23847[(4)]))){
var statearr_23903_25826 = state_23847;
(statearr_23903_25826[(1)] = cljs.core.first((state_23847[(4)])));

} else {
throw ex__23322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25830 = state_23847;
state_23847 = G__25830;
continue;
} else {
return ret_value__23320__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23319__auto__ = function(state_23847){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23319__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23319__auto____1.call(this,state_23847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23319__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23319__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23319__auto__;
})()
;})(__25775,switch__23318__auto__,c__23457__auto___25806,G__23776_25776,G__23776_25777__$1,n__5593__auto___25774,jobs,results,process__$1,async))
})();
var state__23459__auto__ = (function (){var statearr_23916 = f__23458__auto__();
(statearr_23916[(6)] = c__23457__auto___25806);

return statearr_23916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23459__auto__);
});})(__25775,c__23457__auto___25806,G__23776_25776,G__23776_25777__$1,n__5593__auto___25774,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23776_25777__$1)].join('')));

}

var G__25838 = (__25775 + (1));
__25775 = G__25838;
continue;
} else {
}
break;
}

var c__23457__auto___25839 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23458__auto__ = (function (){var switch__23318__auto__ = (function (state_23940){
var state_val_23941 = (state_23940[(1)]);
if((state_val_23941 === (7))){
var inst_23935 = (state_23940[(2)]);
var state_23940__$1 = state_23940;
var statearr_23943_25843 = state_23940__$1;
(statearr_23943_25843[(2)] = inst_23935);

(statearr_23943_25843[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23941 === (1))){
var state_23940__$1 = state_23940;
var statearr_23944_25844 = state_23940__$1;
(statearr_23944_25844[(2)] = null);

(statearr_23944_25844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23941 === (4))){
var inst_23920 = (state_23940[(7)]);
var inst_23920__$1 = (state_23940[(2)]);
var inst_23921 = (inst_23920__$1 == null);
var state_23940__$1 = (function (){var statearr_23949 = state_23940;
(statearr_23949[(7)] = inst_23920__$1);

return statearr_23949;
})();
if(cljs.core.truth_(inst_23921)){
var statearr_23954_25849 = state_23940__$1;
(statearr_23954_25849[(1)] = (5));

} else {
var statearr_23955_25850 = state_23940__$1;
(statearr_23955_25850[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23941 === (6))){
var inst_23925 = (state_23940[(8)]);
var inst_23920 = (state_23940[(7)]);
var inst_23925__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_23926 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23927 = [inst_23920,inst_23925__$1];
var inst_23928 = (new cljs.core.PersistentVector(null,2,(5),inst_23926,inst_23927,null));
var state_23940__$1 = (function (){var statearr_23960 = state_23940;
(statearr_23960[(8)] = inst_23925__$1);

return statearr_23960;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23940__$1,(8),jobs,inst_23928);
} else {
if((state_val_23941 === (3))){
var inst_23937 = (state_23940[(2)]);
var state_23940__$1 = state_23940;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23940__$1,inst_23937);
} else {
if((state_val_23941 === (2))){
var state_23940__$1 = state_23940;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23940__$1,(4),from);
} else {
if((state_val_23941 === (9))){
var inst_23932 = (state_23940[(2)]);
var state_23940__$1 = (function (){var statearr_23962 = state_23940;
(statearr_23962[(9)] = inst_23932);

return statearr_23962;
})();
var statearr_23963_25855 = state_23940__$1;
(statearr_23963_25855[(2)] = null);

(statearr_23963_25855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23941 === (5))){
var inst_23923 = cljs.core.async.close_BANG_(jobs);
var state_23940__$1 = state_23940;
var statearr_23964_25856 = state_23940__$1;
(statearr_23964_25856[(2)] = inst_23923);

(statearr_23964_25856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23941 === (8))){
var inst_23925 = (state_23940[(8)]);
var inst_23930 = (state_23940[(2)]);
var state_23940__$1 = (function (){var statearr_23966 = state_23940;
(statearr_23966[(10)] = inst_23930);

return statearr_23966;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23940__$1,(9),results,inst_23925);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23319__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23319__auto____0 = (function (){
var statearr_23967 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23967[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23319__auto__);

(statearr_23967[(1)] = (1));

return statearr_23967;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23319__auto____1 = (function (state_23940){
while(true){
var ret_value__23320__auto__ = (function (){try{while(true){
var result__23321__auto__ = switch__23318__auto__(state_23940);
if(cljs.core.keyword_identical_QMARK_(result__23321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23321__auto__;
}
break;
}
}catch (e23968){var ex__23322__auto__ = e23968;
var statearr_23969_25857 = state_23940;
(statearr_23969_25857[(2)] = ex__23322__auto__);


if(cljs.core.seq((state_23940[(4)]))){
var statearr_23970_25858 = state_23940;
(statearr_23970_25858[(1)] = cljs.core.first((state_23940[(4)])));

} else {
throw ex__23322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25859 = state_23940;
state_23940 = G__25859;
continue;
} else {
return ret_value__23320__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23319__auto__ = function(state_23940){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23319__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23319__auto____1.call(this,state_23940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23319__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23319__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23319__auto__;
})()
})();
var state__23459__auto__ = (function (){var statearr_23972 = f__23458__auto__();
(statearr_23972[(6)] = c__23457__auto___25839);

return statearr_23972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23459__auto__);
}));


var c__23457__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23458__auto__ = (function (){var switch__23318__auto__ = (function (state_24010){
var state_val_24011 = (state_24010[(1)]);
if((state_val_24011 === (7))){
var inst_24006 = (state_24010[(2)]);
var state_24010__$1 = state_24010;
var statearr_24013_25860 = state_24010__$1;
(statearr_24013_25860[(2)] = inst_24006);

(statearr_24013_25860[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24011 === (20))){
var state_24010__$1 = state_24010;
var statearr_24014_25861 = state_24010__$1;
(statearr_24014_25861[(2)] = null);

(statearr_24014_25861[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24011 === (1))){
var state_24010__$1 = state_24010;
var statearr_24015_25862 = state_24010__$1;
(statearr_24015_25862[(2)] = null);

(statearr_24015_25862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24011 === (4))){
var inst_23975 = (state_24010[(7)]);
var inst_23975__$1 = (state_24010[(2)]);
var inst_23976 = (inst_23975__$1 == null);
var state_24010__$1 = (function (){var statearr_24016 = state_24010;
(statearr_24016[(7)] = inst_23975__$1);

return statearr_24016;
})();
if(cljs.core.truth_(inst_23976)){
var statearr_24017_25863 = state_24010__$1;
(statearr_24017_25863[(1)] = (5));

} else {
var statearr_24018_25865 = state_24010__$1;
(statearr_24018_25865[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24011 === (15))){
var inst_23988 = (state_24010[(8)]);
var state_24010__$1 = state_24010;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24010__$1,(18),to,inst_23988);
} else {
if((state_val_24011 === (21))){
var inst_24001 = (state_24010[(2)]);
var state_24010__$1 = state_24010;
var statearr_24020_25867 = state_24010__$1;
(statearr_24020_25867[(2)] = inst_24001);

(statearr_24020_25867[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24011 === (13))){
var inst_24003 = (state_24010[(2)]);
var state_24010__$1 = (function (){var statearr_24021 = state_24010;
(statearr_24021[(9)] = inst_24003);

return statearr_24021;
})();
var statearr_24022_25868 = state_24010__$1;
(statearr_24022_25868[(2)] = null);

(statearr_24022_25868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24011 === (6))){
var inst_23975 = (state_24010[(7)]);
var state_24010__$1 = state_24010;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24010__$1,(11),inst_23975);
} else {
if((state_val_24011 === (17))){
var inst_23996 = (state_24010[(2)]);
var state_24010__$1 = state_24010;
if(cljs.core.truth_(inst_23996)){
var statearr_24023_25869 = state_24010__$1;
(statearr_24023_25869[(1)] = (19));

} else {
var statearr_24024_25870 = state_24010__$1;
(statearr_24024_25870[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24011 === (3))){
var inst_24008 = (state_24010[(2)]);
var state_24010__$1 = state_24010;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24010__$1,inst_24008);
} else {
if((state_val_24011 === (12))){
var inst_23985 = (state_24010[(10)]);
var state_24010__$1 = state_24010;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24010__$1,(14),inst_23985);
} else {
if((state_val_24011 === (2))){
var state_24010__$1 = state_24010;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24010__$1,(4),results);
} else {
if((state_val_24011 === (19))){
var state_24010__$1 = state_24010;
var statearr_24026_25871 = state_24010__$1;
(statearr_24026_25871[(2)] = null);

(statearr_24026_25871[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24011 === (11))){
var inst_23985 = (state_24010[(2)]);
var state_24010__$1 = (function (){var statearr_24027 = state_24010;
(statearr_24027[(10)] = inst_23985);

return statearr_24027;
})();
var statearr_24028_25872 = state_24010__$1;
(statearr_24028_25872[(2)] = null);

(statearr_24028_25872[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24011 === (9))){
var state_24010__$1 = state_24010;
var statearr_24029_25873 = state_24010__$1;
(statearr_24029_25873[(2)] = null);

(statearr_24029_25873[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24011 === (5))){
var state_24010__$1 = state_24010;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24030_25874 = state_24010__$1;
(statearr_24030_25874[(1)] = (8));

} else {
var statearr_24031_25875 = state_24010__$1;
(statearr_24031_25875[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24011 === (14))){
var inst_23988 = (state_24010[(8)]);
var inst_23990 = (state_24010[(11)]);
var inst_23988__$1 = (state_24010[(2)]);
var inst_23989 = (inst_23988__$1 == null);
var inst_23990__$1 = cljs.core.not(inst_23989);
var state_24010__$1 = (function (){var statearr_24032 = state_24010;
(statearr_24032[(8)] = inst_23988__$1);

(statearr_24032[(11)] = inst_23990__$1);

return statearr_24032;
})();
if(inst_23990__$1){
var statearr_24034_25876 = state_24010__$1;
(statearr_24034_25876[(1)] = (15));

} else {
var statearr_24035_25877 = state_24010__$1;
(statearr_24035_25877[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24011 === (16))){
var inst_23990 = (state_24010[(11)]);
var state_24010__$1 = state_24010;
var statearr_24036_25878 = state_24010__$1;
(statearr_24036_25878[(2)] = inst_23990);

(statearr_24036_25878[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24011 === (10))){
var inst_23982 = (state_24010[(2)]);
var state_24010__$1 = state_24010;
var statearr_24037_25880 = state_24010__$1;
(statearr_24037_25880[(2)] = inst_23982);

(statearr_24037_25880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24011 === (18))){
var inst_23993 = (state_24010[(2)]);
var state_24010__$1 = state_24010;
var statearr_24038_25881 = state_24010__$1;
(statearr_24038_25881[(2)] = inst_23993);

(statearr_24038_25881[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24011 === (8))){
var inst_23979 = cljs.core.async.close_BANG_(to);
var state_24010__$1 = state_24010;
var statearr_24039_25883 = state_24010__$1;
(statearr_24039_25883[(2)] = inst_23979);

(statearr_24039_25883[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23319__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23319__auto____0 = (function (){
var statearr_24040 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24040[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23319__auto__);

(statearr_24040[(1)] = (1));

return statearr_24040;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23319__auto____1 = (function (state_24010){
while(true){
var ret_value__23320__auto__ = (function (){try{while(true){
var result__23321__auto__ = switch__23318__auto__(state_24010);
if(cljs.core.keyword_identical_QMARK_(result__23321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23321__auto__;
}
break;
}
}catch (e24041){var ex__23322__auto__ = e24041;
var statearr_24042_25884 = state_24010;
(statearr_24042_25884[(2)] = ex__23322__auto__);


if(cljs.core.seq((state_24010[(4)]))){
var statearr_24044_25885 = state_24010;
(statearr_24044_25885[(1)] = cljs.core.first((state_24010[(4)])));

} else {
throw ex__23322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25886 = state_24010;
state_24010 = G__25886;
continue;
} else {
return ret_value__23320__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23319__auto__ = function(state_24010){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23319__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23319__auto____1.call(this,state_24010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23319__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23319__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23319__auto__;
})()
})();
var state__23459__auto__ = (function (){var statearr_24045 = f__23458__auto__();
(statearr_24045[(6)] = c__23457__auto__);

return statearr_24045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23459__auto__);
}));

return c__23457__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__24047 = arguments.length;
switch (G__24047) {
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

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

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
var G__24050 = arguments.length;
switch (G__24050) {
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

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

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
var G__24053 = arguments.length;
switch (G__24053) {
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

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__23457__auto___25893 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23458__auto__ = (function (){var switch__23318__auto__ = (function (state_24080){
var state_val_24081 = (state_24080[(1)]);
if((state_val_24081 === (7))){
var inst_24076 = (state_24080[(2)]);
var state_24080__$1 = state_24080;
var statearr_24082_25894 = state_24080__$1;
(statearr_24082_25894[(2)] = inst_24076);

(statearr_24082_25894[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24081 === (1))){
var state_24080__$1 = state_24080;
var statearr_24084_25895 = state_24080__$1;
(statearr_24084_25895[(2)] = null);

(statearr_24084_25895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24081 === (4))){
var inst_24057 = (state_24080[(7)]);
var inst_24057__$1 = (state_24080[(2)]);
var inst_24058 = (inst_24057__$1 == null);
var state_24080__$1 = (function (){var statearr_24085 = state_24080;
(statearr_24085[(7)] = inst_24057__$1);

return statearr_24085;
})();
if(cljs.core.truth_(inst_24058)){
var statearr_24086_25897 = state_24080__$1;
(statearr_24086_25897[(1)] = (5));

} else {
var statearr_24087_25898 = state_24080__$1;
(statearr_24087_25898[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24081 === (13))){
var state_24080__$1 = state_24080;
var statearr_24088_25906 = state_24080__$1;
(statearr_24088_25906[(2)] = null);

(statearr_24088_25906[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24081 === (6))){
var inst_24057 = (state_24080[(7)]);
var inst_24063 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_24057) : p.call(null, inst_24057));
var state_24080__$1 = state_24080;
if(cljs.core.truth_(inst_24063)){
var statearr_24089_25910 = state_24080__$1;
(statearr_24089_25910[(1)] = (9));

} else {
var statearr_24090_25911 = state_24080__$1;
(statearr_24090_25911[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24081 === (3))){
var inst_24078 = (state_24080[(2)]);
var state_24080__$1 = state_24080;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24080__$1,inst_24078);
} else {
if((state_val_24081 === (12))){
var state_24080__$1 = state_24080;
var statearr_24091_25916 = state_24080__$1;
(statearr_24091_25916[(2)] = null);

(statearr_24091_25916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24081 === (2))){
var state_24080__$1 = state_24080;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24080__$1,(4),ch);
} else {
if((state_val_24081 === (11))){
var inst_24057 = (state_24080[(7)]);
var inst_24067 = (state_24080[(2)]);
var state_24080__$1 = state_24080;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24080__$1,(8),inst_24067,inst_24057);
} else {
if((state_val_24081 === (9))){
var state_24080__$1 = state_24080;
var statearr_24093_25917 = state_24080__$1;
(statearr_24093_25917[(2)] = tc);

(statearr_24093_25917[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24081 === (5))){
var inst_24060 = cljs.core.async.close_BANG_(tc);
var inst_24061 = cljs.core.async.close_BANG_(fc);
var state_24080__$1 = (function (){var statearr_24094 = state_24080;
(statearr_24094[(8)] = inst_24060);

return statearr_24094;
})();
var statearr_24095_25919 = state_24080__$1;
(statearr_24095_25919[(2)] = inst_24061);

(statearr_24095_25919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24081 === (14))){
var inst_24074 = (state_24080[(2)]);
var state_24080__$1 = state_24080;
var statearr_24096_25920 = state_24080__$1;
(statearr_24096_25920[(2)] = inst_24074);

(statearr_24096_25920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24081 === (10))){
var state_24080__$1 = state_24080;
var statearr_24097_25921 = state_24080__$1;
(statearr_24097_25921[(2)] = fc);

(statearr_24097_25921[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24081 === (8))){
var inst_24069 = (state_24080[(2)]);
var state_24080__$1 = state_24080;
if(cljs.core.truth_(inst_24069)){
var statearr_24099_25922 = state_24080__$1;
(statearr_24099_25922[(1)] = (12));

} else {
var statearr_24100_25923 = state_24080__$1;
(statearr_24100_25923[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__23319__auto__ = null;
var cljs$core$async$state_machine__23319__auto____0 = (function (){
var statearr_24102 = [null,null,null,null,null,null,null,null,null];
(statearr_24102[(0)] = cljs$core$async$state_machine__23319__auto__);

(statearr_24102[(1)] = (1));

return statearr_24102;
});
var cljs$core$async$state_machine__23319__auto____1 = (function (state_24080){
while(true){
var ret_value__23320__auto__ = (function (){try{while(true){
var result__23321__auto__ = switch__23318__auto__(state_24080);
if(cljs.core.keyword_identical_QMARK_(result__23321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23321__auto__;
}
break;
}
}catch (e24103){var ex__23322__auto__ = e24103;
var statearr_24104_25925 = state_24080;
(statearr_24104_25925[(2)] = ex__23322__auto__);


if(cljs.core.seq((state_24080[(4)]))){
var statearr_24105_25926 = state_24080;
(statearr_24105_25926[(1)] = cljs.core.first((state_24080[(4)])));

} else {
throw ex__23322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25927 = state_24080;
state_24080 = G__25927;
continue;
} else {
return ret_value__23320__auto__;
}
break;
}
});
cljs$core$async$state_machine__23319__auto__ = function(state_24080){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23319__auto____1.call(this,state_24080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23319__auto____0;
cljs$core$async$state_machine__23319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23319__auto____1;
return cljs$core$async$state_machine__23319__auto__;
})()
})();
var state__23459__auto__ = (function (){var statearr_24106 = f__23458__auto__();
(statearr_24106[(6)] = c__23457__auto___25893);

return statearr_24106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23459__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__23457__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23458__auto__ = (function (){var switch__23318__auto__ = (function (state_24129){
var state_val_24130 = (state_24129[(1)]);
if((state_val_24130 === (7))){
var inst_24125 = (state_24129[(2)]);
var state_24129__$1 = state_24129;
var statearr_24131_25928 = state_24129__$1;
(statearr_24131_25928[(2)] = inst_24125);

(statearr_24131_25928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24130 === (1))){
var inst_24108 = init;
var inst_24109 = inst_24108;
var state_24129__$1 = (function (){var statearr_24132 = state_24129;
(statearr_24132[(7)] = inst_24109);

return statearr_24132;
})();
var statearr_24133_25929 = state_24129__$1;
(statearr_24133_25929[(2)] = null);

(statearr_24133_25929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24130 === (4))){
var inst_24112 = (state_24129[(8)]);
var inst_24112__$1 = (state_24129[(2)]);
var inst_24113 = (inst_24112__$1 == null);
var state_24129__$1 = (function (){var statearr_24134 = state_24129;
(statearr_24134[(8)] = inst_24112__$1);

return statearr_24134;
})();
if(cljs.core.truth_(inst_24113)){
var statearr_24135_25930 = state_24129__$1;
(statearr_24135_25930[(1)] = (5));

} else {
var statearr_24137_25931 = state_24129__$1;
(statearr_24137_25931[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24130 === (6))){
var inst_24109 = (state_24129[(7)]);
var inst_24116 = (state_24129[(9)]);
var inst_24112 = (state_24129[(8)]);
var inst_24116__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_24109,inst_24112) : f.call(null, inst_24109,inst_24112));
var inst_24117 = cljs.core.reduced_QMARK_(inst_24116__$1);
var state_24129__$1 = (function (){var statearr_24138 = state_24129;
(statearr_24138[(9)] = inst_24116__$1);

return statearr_24138;
})();
if(inst_24117){
var statearr_24139_25934 = state_24129__$1;
(statearr_24139_25934[(1)] = (8));

} else {
var statearr_24140_25935 = state_24129__$1;
(statearr_24140_25935[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24130 === (3))){
var inst_24127 = (state_24129[(2)]);
var state_24129__$1 = state_24129;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24129__$1,inst_24127);
} else {
if((state_val_24130 === (2))){
var state_24129__$1 = state_24129;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24129__$1,(4),ch);
} else {
if((state_val_24130 === (9))){
var inst_24116 = (state_24129[(9)]);
var inst_24109 = inst_24116;
var state_24129__$1 = (function (){var statearr_24141 = state_24129;
(statearr_24141[(7)] = inst_24109);

return statearr_24141;
})();
var statearr_24142_25936 = state_24129__$1;
(statearr_24142_25936[(2)] = null);

(statearr_24142_25936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24130 === (5))){
var inst_24109 = (state_24129[(7)]);
var state_24129__$1 = state_24129;
var statearr_24143_25937 = state_24129__$1;
(statearr_24143_25937[(2)] = inst_24109);

(statearr_24143_25937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24130 === (10))){
var inst_24123 = (state_24129[(2)]);
var state_24129__$1 = state_24129;
var statearr_24144_25938 = state_24129__$1;
(statearr_24144_25938[(2)] = inst_24123);

(statearr_24144_25938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24130 === (8))){
var inst_24116 = (state_24129[(9)]);
var inst_24119 = cljs.core.deref(inst_24116);
var state_24129__$1 = state_24129;
var statearr_24146_25939 = state_24129__$1;
(statearr_24146_25939[(2)] = inst_24119);

(statearr_24146_25939[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__23319__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23319__auto____0 = (function (){
var statearr_24147 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24147[(0)] = cljs$core$async$reduce_$_state_machine__23319__auto__);

(statearr_24147[(1)] = (1));

return statearr_24147;
});
var cljs$core$async$reduce_$_state_machine__23319__auto____1 = (function (state_24129){
while(true){
var ret_value__23320__auto__ = (function (){try{while(true){
var result__23321__auto__ = switch__23318__auto__(state_24129);
if(cljs.core.keyword_identical_QMARK_(result__23321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23321__auto__;
}
break;
}
}catch (e24148){var ex__23322__auto__ = e24148;
var statearr_24149_25940 = state_24129;
(statearr_24149_25940[(2)] = ex__23322__auto__);


if(cljs.core.seq((state_24129[(4)]))){
var statearr_24150_25941 = state_24129;
(statearr_24150_25941[(1)] = cljs.core.first((state_24129[(4)])));

} else {
throw ex__23322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25942 = state_24129;
state_24129 = G__25942;
continue;
} else {
return ret_value__23320__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23319__auto__ = function(state_24129){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23319__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23319__auto____1.call(this,state_24129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23319__auto____0;
cljs$core$async$reduce_$_state_machine__23319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23319__auto____1;
return cljs$core$async$reduce_$_state_machine__23319__auto__;
})()
})();
var state__23459__auto__ = (function (){var statearr_24151 = f__23458__auto__();
(statearr_24151[(6)] = c__23457__auto__);

return statearr_24151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23459__auto__);
}));

return c__23457__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__23457__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23458__auto__ = (function (){var switch__23318__auto__ = (function (state_24157){
var state_val_24158 = (state_24157[(1)]);
if((state_val_24158 === (1))){
var inst_24152 = cljs.core.async.reduce(f__$1,init,ch);
var state_24157__$1 = state_24157;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24157__$1,(2),inst_24152);
} else {
if((state_val_24158 === (2))){
var inst_24154 = (state_24157[(2)]);
var inst_24155 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_24154) : f__$1.call(null, inst_24154));
var state_24157__$1 = state_24157;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24157__$1,inst_24155);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__23319__auto__ = null;
var cljs$core$async$transduce_$_state_machine__23319__auto____0 = (function (){
var statearr_24160 = [null,null,null,null,null,null,null];
(statearr_24160[(0)] = cljs$core$async$transduce_$_state_machine__23319__auto__);

(statearr_24160[(1)] = (1));

return statearr_24160;
});
var cljs$core$async$transduce_$_state_machine__23319__auto____1 = (function (state_24157){
while(true){
var ret_value__23320__auto__ = (function (){try{while(true){
var result__23321__auto__ = switch__23318__auto__(state_24157);
if(cljs.core.keyword_identical_QMARK_(result__23321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23321__auto__;
}
break;
}
}catch (e24161){var ex__23322__auto__ = e24161;
var statearr_24162_25950 = state_24157;
(statearr_24162_25950[(2)] = ex__23322__auto__);


if(cljs.core.seq((state_24157[(4)]))){
var statearr_24163_25951 = state_24157;
(statearr_24163_25951[(1)] = cljs.core.first((state_24157[(4)])));

} else {
throw ex__23322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25952 = state_24157;
state_24157 = G__25952;
continue;
} else {
return ret_value__23320__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__23319__auto__ = function(state_24157){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__23319__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__23319__auto____1.call(this,state_24157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__23319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__23319__auto____0;
cljs$core$async$transduce_$_state_machine__23319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__23319__auto____1;
return cljs$core$async$transduce_$_state_machine__23319__auto__;
})()
})();
var state__23459__auto__ = (function (){var statearr_24164 = f__23458__auto__();
(statearr_24164[(6)] = c__23457__auto__);

return statearr_24164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23459__auto__);
}));

return c__23457__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__24166 = arguments.length;
switch (G__24166) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23457__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23458__auto__ = (function (){var switch__23318__auto__ = (function (state_24192){
var state_val_24193 = (state_24192[(1)]);
if((state_val_24193 === (7))){
var inst_24174 = (state_24192[(2)]);
var state_24192__$1 = state_24192;
var statearr_24194_25959 = state_24192__$1;
(statearr_24194_25959[(2)] = inst_24174);

(statearr_24194_25959[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24193 === (1))){
var inst_24168 = cljs.core.seq(coll);
var inst_24169 = inst_24168;
var state_24192__$1 = (function (){var statearr_24196 = state_24192;
(statearr_24196[(7)] = inst_24169);

return statearr_24196;
})();
var statearr_24197_25960 = state_24192__$1;
(statearr_24197_25960[(2)] = null);

(statearr_24197_25960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24193 === (4))){
var inst_24169 = (state_24192[(7)]);
var inst_24172 = cljs.core.first(inst_24169);
var state_24192__$1 = state_24192;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24192__$1,(7),ch,inst_24172);
} else {
if((state_val_24193 === (13))){
var inst_24186 = (state_24192[(2)]);
var state_24192__$1 = state_24192;
var statearr_24198_25962 = state_24192__$1;
(statearr_24198_25962[(2)] = inst_24186);

(statearr_24198_25962[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24193 === (6))){
var inst_24177 = (state_24192[(2)]);
var state_24192__$1 = state_24192;
if(cljs.core.truth_(inst_24177)){
var statearr_24199_25966 = state_24192__$1;
(statearr_24199_25966[(1)] = (8));

} else {
var statearr_24200_25967 = state_24192__$1;
(statearr_24200_25967[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24193 === (3))){
var inst_24190 = (state_24192[(2)]);
var state_24192__$1 = state_24192;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24192__$1,inst_24190);
} else {
if((state_val_24193 === (12))){
var state_24192__$1 = state_24192;
var statearr_24201_25968 = state_24192__$1;
(statearr_24201_25968[(2)] = null);

(statearr_24201_25968[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24193 === (2))){
var inst_24169 = (state_24192[(7)]);
var state_24192__$1 = state_24192;
if(cljs.core.truth_(inst_24169)){
var statearr_24202_25969 = state_24192__$1;
(statearr_24202_25969[(1)] = (4));

} else {
var statearr_24203_25970 = state_24192__$1;
(statearr_24203_25970[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24193 === (11))){
var inst_24183 = cljs.core.async.close_BANG_(ch);
var state_24192__$1 = state_24192;
var statearr_24205_25971 = state_24192__$1;
(statearr_24205_25971[(2)] = inst_24183);

(statearr_24205_25971[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24193 === (9))){
var state_24192__$1 = state_24192;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24206_25972 = state_24192__$1;
(statearr_24206_25972[(1)] = (11));

} else {
var statearr_24207_25973 = state_24192__$1;
(statearr_24207_25973[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24193 === (5))){
var inst_24169 = (state_24192[(7)]);
var state_24192__$1 = state_24192;
var statearr_24208_25974 = state_24192__$1;
(statearr_24208_25974[(2)] = inst_24169);

(statearr_24208_25974[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24193 === (10))){
var inst_24188 = (state_24192[(2)]);
var state_24192__$1 = state_24192;
var statearr_24209_25975 = state_24192__$1;
(statearr_24209_25975[(2)] = inst_24188);

(statearr_24209_25975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24193 === (8))){
var inst_24169 = (state_24192[(7)]);
var inst_24179 = cljs.core.next(inst_24169);
var inst_24169__$1 = inst_24179;
var state_24192__$1 = (function (){var statearr_24210 = state_24192;
(statearr_24210[(7)] = inst_24169__$1);

return statearr_24210;
})();
var statearr_24211_25976 = state_24192__$1;
(statearr_24211_25976[(2)] = null);

(statearr_24211_25976[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__23319__auto__ = null;
var cljs$core$async$state_machine__23319__auto____0 = (function (){
var statearr_24213 = [null,null,null,null,null,null,null,null];
(statearr_24213[(0)] = cljs$core$async$state_machine__23319__auto__);

(statearr_24213[(1)] = (1));

return statearr_24213;
});
var cljs$core$async$state_machine__23319__auto____1 = (function (state_24192){
while(true){
var ret_value__23320__auto__ = (function (){try{while(true){
var result__23321__auto__ = switch__23318__auto__(state_24192);
if(cljs.core.keyword_identical_QMARK_(result__23321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23321__auto__;
}
break;
}
}catch (e24214){var ex__23322__auto__ = e24214;
var statearr_24215_25980 = state_24192;
(statearr_24215_25980[(2)] = ex__23322__auto__);


if(cljs.core.seq((state_24192[(4)]))){
var statearr_24216_25990 = state_24192;
(statearr_24216_25990[(1)] = cljs.core.first((state_24192[(4)])));

} else {
throw ex__23322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25991 = state_24192;
state_24192 = G__25991;
continue;
} else {
return ret_value__23320__auto__;
}
break;
}
});
cljs$core$async$state_machine__23319__auto__ = function(state_24192){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23319__auto____1.call(this,state_24192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23319__auto____0;
cljs$core$async$state_machine__23319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23319__auto____1;
return cljs$core$async$state_machine__23319__auto__;
})()
})();
var state__23459__auto__ = (function (){var statearr_24217 = f__23458__auto__();
(statearr_24217[(6)] = c__23457__auto__);

return statearr_24217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23459__auto__);
}));

return c__23457__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__24220 = arguments.length;
switch (G__24220) {
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

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_25997 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_25997(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_26001 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null, m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null, m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_26001(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_26003 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_26003(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_26010 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_26010(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24227 = (function (ch,cs,meta24228){
this.ch = ch;
this.cs = cs;
this.meta24228 = meta24228;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24227.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24229,meta24228__$1){
var self__ = this;
var _24229__$1 = this;
return (new cljs.core.async.t_cljs$core$async24227(self__.ch,self__.cs,meta24228__$1));
}));

(cljs.core.async.t_cljs$core$async24227.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24229){
var self__ = this;
var _24229__$1 = this;
return self__.meta24228;
}));

(cljs.core.async.t_cljs$core$async24227.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24227.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async24227.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24227.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async24227.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async24227.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async24227.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24228","meta24228",-1289536701,null)], null);
}));

(cljs.core.async.t_cljs$core$async24227.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24227.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24227");

(cljs.core.async.t_cljs$core$async24227.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async24227");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24227.
 */
cljs.core.async.__GT_t_cljs$core$async24227 = (function cljs$core$async$__GT_t_cljs$core$async24227(ch,cs,meta24228){
return (new cljs.core.async.t_cljs$core$async24227(ch,cs,meta24228));
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
var m = (new cljs.core.async.t_cljs$core$async24227(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__23457__auto___26015 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23458__auto__ = (function (){var switch__23318__auto__ = (function (state_24368){
var state_val_24369 = (state_24368[(1)]);
if((state_val_24369 === (7))){
var inst_24363 = (state_24368[(2)]);
var state_24368__$1 = state_24368;
var statearr_24370_26016 = state_24368__$1;
(statearr_24370_26016[(2)] = inst_24363);

(statearr_24370_26016[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24369 === (20))){
var inst_24266 = (state_24368[(7)]);
var inst_24279 = cljs.core.first(inst_24266);
var inst_24280 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24279,(0),null);
var inst_24281 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24279,(1),null);
var state_24368__$1 = (function (){var statearr_24372 = state_24368;
(statearr_24372[(8)] = inst_24280);

return statearr_24372;
})();
if(cljs.core.truth_(inst_24281)){
var statearr_24373_26017 = state_24368__$1;
(statearr_24373_26017[(1)] = (22));

} else {
var statearr_24374_26018 = state_24368__$1;
(statearr_24374_26018[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24369 === (27))){
var inst_24235 = (state_24368[(9)]);
var inst_24311 = (state_24368[(10)]);
var inst_24316 = (state_24368[(11)]);
var inst_24309 = (state_24368[(12)]);
var inst_24316__$1 = cljs.core._nth(inst_24309,inst_24311);
var inst_24317 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_24316__$1,inst_24235,done);
var state_24368__$1 = (function (){var statearr_24375 = state_24368;
(statearr_24375[(11)] = inst_24316__$1);

return statearr_24375;
})();
if(cljs.core.truth_(inst_24317)){
var statearr_24376_26019 = state_24368__$1;
(statearr_24376_26019[(1)] = (30));

} else {
var statearr_24377_26020 = state_24368__$1;
(statearr_24377_26020[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24369 === (1))){
var state_24368__$1 = state_24368;
var statearr_24378_26023 = state_24368__$1;
(statearr_24378_26023[(2)] = null);

(statearr_24378_26023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24369 === (24))){
var inst_24266 = (state_24368[(7)]);
var inst_24286 = (state_24368[(2)]);
var inst_24287 = cljs.core.next(inst_24266);
var inst_24244 = inst_24287;
var inst_24245 = null;
var inst_24246 = (0);
var inst_24247 = (0);
var state_24368__$1 = (function (){var statearr_24380 = state_24368;
(statearr_24380[(13)] = inst_24286);

(statearr_24380[(14)] = inst_24245);

(statearr_24380[(15)] = inst_24244);

(statearr_24380[(16)] = inst_24247);

(statearr_24380[(17)] = inst_24246);

return statearr_24380;
})();
var statearr_24381_26024 = state_24368__$1;
(statearr_24381_26024[(2)] = null);

(statearr_24381_26024[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24369 === (39))){
var state_24368__$1 = state_24368;
var statearr_24385_26025 = state_24368__$1;
(statearr_24385_26025[(2)] = null);

(statearr_24385_26025[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24369 === (4))){
var inst_24235 = (state_24368[(9)]);
var inst_24235__$1 = (state_24368[(2)]);
var inst_24236 = (inst_24235__$1 == null);
var state_24368__$1 = (function (){var statearr_24386 = state_24368;
(statearr_24386[(9)] = inst_24235__$1);

return statearr_24386;
})();
if(cljs.core.truth_(inst_24236)){
var statearr_24387_26026 = state_24368__$1;
(statearr_24387_26026[(1)] = (5));

} else {
var statearr_24388_26027 = state_24368__$1;
(statearr_24388_26027[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24369 === (15))){
var inst_24245 = (state_24368[(14)]);
var inst_24244 = (state_24368[(15)]);
var inst_24247 = (state_24368[(16)]);
var inst_24246 = (state_24368[(17)]);
var inst_24262 = (state_24368[(2)]);
var inst_24263 = (inst_24247 + (1));
var tmp24382 = inst_24245;
var tmp24383 = inst_24244;
var tmp24384 = inst_24246;
var inst_24244__$1 = tmp24383;
var inst_24245__$1 = tmp24382;
var inst_24246__$1 = tmp24384;
var inst_24247__$1 = inst_24263;
var state_24368__$1 = (function (){var statearr_24390 = state_24368;
(statearr_24390[(18)] = inst_24262);

(statearr_24390[(14)] = inst_24245__$1);

(statearr_24390[(15)] = inst_24244__$1);

(statearr_24390[(16)] = inst_24247__$1);

(statearr_24390[(17)] = inst_24246__$1);

return statearr_24390;
})();
var statearr_24391_26029 = state_24368__$1;
(statearr_24391_26029[(2)] = null);

(statearr_24391_26029[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24369 === (21))){
var inst_24290 = (state_24368[(2)]);
var state_24368__$1 = state_24368;
var statearr_24395_26031 = state_24368__$1;
(statearr_24395_26031[(2)] = inst_24290);

(statearr_24395_26031[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24369 === (31))){
var inst_24316 = (state_24368[(11)]);
var inst_24320 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_24316);
var state_24368__$1 = state_24368;
var statearr_24396_26032 = state_24368__$1;
(statearr_24396_26032[(2)] = inst_24320);

(statearr_24396_26032[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24369 === (32))){
var inst_24311 = (state_24368[(10)]);
var inst_24308 = (state_24368[(19)]);
var inst_24309 = (state_24368[(12)]);
var inst_24310 = (state_24368[(20)]);
var inst_24322 = (state_24368[(2)]);
var inst_24323 = (inst_24311 + (1));
var tmp24392 = inst_24308;
var tmp24393 = inst_24309;
var tmp24394 = inst_24310;
var inst_24308__$1 = tmp24392;
var inst_24309__$1 = tmp24393;
var inst_24310__$1 = tmp24394;
var inst_24311__$1 = inst_24323;
var state_24368__$1 = (function (){var statearr_24398 = state_24368;
(statearr_24398[(10)] = inst_24311__$1);

(statearr_24398[(19)] = inst_24308__$1);

(statearr_24398[(21)] = inst_24322);

(statearr_24398[(12)] = inst_24309__$1);

(statearr_24398[(20)] = inst_24310__$1);

return statearr_24398;
})();
var statearr_24399_26033 = state_24368__$1;
(statearr_24399_26033[(2)] = null);

(statearr_24399_26033[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24369 === (40))){
var inst_24336 = (state_24368[(22)]);
var inst_24340 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_24336);
var state_24368__$1 = state_24368;
var statearr_24400_26034 = state_24368__$1;
(statearr_24400_26034[(2)] = inst_24340);

(statearr_24400_26034[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24369 === (33))){
var inst_24327 = (state_24368[(23)]);
var inst_24329 = cljs.core.chunked_seq_QMARK_(inst_24327);
var state_24368__$1 = state_24368;
if(inst_24329){
var statearr_24401_26035 = state_24368__$1;
(statearr_24401_26035[(1)] = (36));

} else {
var statearr_24402_26036 = state_24368__$1;
(statearr_24402_26036[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24369 === (13))){
var inst_24256 = (state_24368[(24)]);
var inst_24259 = cljs.core.async.close_BANG_(inst_24256);
var state_24368__$1 = state_24368;
var statearr_24404_26037 = state_24368__$1;
(statearr_24404_26037[(2)] = inst_24259);

(statearr_24404_26037[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24369 === (22))){
var inst_24280 = (state_24368[(8)]);
var inst_24283 = cljs.core.async.close_BANG_(inst_24280);
var state_24368__$1 = state_24368;
var statearr_24405_26038 = state_24368__$1;
(statearr_24405_26038[(2)] = inst_24283);

(statearr_24405_26038[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24369 === (36))){
var inst_24327 = (state_24368[(23)]);
var inst_24331 = cljs.core.chunk_first(inst_24327);
var inst_24332 = cljs.core.chunk_rest(inst_24327);
var inst_24333 = cljs.core.count(inst_24331);
var inst_24308 = inst_24332;
var inst_24309 = inst_24331;
var inst_24310 = inst_24333;
var inst_24311 = (0);
var state_24368__$1 = (function (){var statearr_24406 = state_24368;
(statearr_24406[(10)] = inst_24311);

(statearr_24406[(19)] = inst_24308);

(statearr_24406[(12)] = inst_24309);

(statearr_24406[(20)] = inst_24310);

return statearr_24406;
})();
var statearr_24407_26041 = state_24368__$1;
(statearr_24407_26041[(2)] = null);

(statearr_24407_26041[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24369 === (41))){
var inst_24327 = (state_24368[(23)]);
var inst_24342 = (state_24368[(2)]);
var inst_24343 = cljs.core.next(inst_24327);
var inst_24308 = inst_24343;
var inst_24309 = null;
var inst_24310 = (0);
var inst_24311 = (0);
var state_24368__$1 = (function (){var statearr_24409 = state_24368;
(statearr_24409[(10)] = inst_24311);

(statearr_24409[(19)] = inst_24308);

(statearr_24409[(12)] = inst_24309);

(statearr_24409[(20)] = inst_24310);

(statearr_24409[(25)] = inst_24342);

return statearr_24409;
})();
var statearr_24410_26053 = state_24368__$1;
(statearr_24410_26053[(2)] = null);

(statearr_24410_26053[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24369 === (43))){
var state_24368__$1 = state_24368;
var statearr_24411_26054 = state_24368__$1;
(statearr_24411_26054[(2)] = null);

(statearr_24411_26054[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24369 === (29))){
var inst_24351 = (state_24368[(2)]);
var state_24368__$1 = state_24368;
var statearr_24412_26056 = state_24368__$1;
(statearr_24412_26056[(2)] = inst_24351);

(statearr_24412_26056[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24369 === (44))){
var inst_24360 = (state_24368[(2)]);
var state_24368__$1 = (function (){var statearr_24414 = state_24368;
(statearr_24414[(26)] = inst_24360);

return statearr_24414;
})();
var statearr_24416_26058 = state_24368__$1;
(statearr_24416_26058[(2)] = null);

(statearr_24416_26058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24369 === (6))){
var inst_24300 = (state_24368[(27)]);
var inst_24299 = cljs.core.deref(cs);
var inst_24300__$1 = cljs.core.keys(inst_24299);
var inst_24301 = cljs.core.count(inst_24300__$1);
var inst_24302 = cljs.core.reset_BANG_(dctr,inst_24301);
var inst_24307 = cljs.core.seq(inst_24300__$1);
var inst_24308 = inst_24307;
var inst_24309 = null;
var inst_24310 = (0);
var inst_24311 = (0);
var state_24368__$1 = (function (){var statearr_24417 = state_24368;
(statearr_24417[(10)] = inst_24311);

(statearr_24417[(27)] = inst_24300__$1);

(statearr_24417[(19)] = inst_24308);

(statearr_24417[(28)] = inst_24302);

(statearr_24417[(12)] = inst_24309);

(statearr_24417[(20)] = inst_24310);

return statearr_24417;
})();
var statearr_24418_26069 = state_24368__$1;
(statearr_24418_26069[(2)] = null);

(statearr_24418_26069[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24369 === (28))){
var inst_24327 = (state_24368[(23)]);
var inst_24308 = (state_24368[(19)]);
var inst_24327__$1 = cljs.core.seq(inst_24308);
var state_24368__$1 = (function (){var statearr_24419 = state_24368;
(statearr_24419[(23)] = inst_24327__$1);

return statearr_24419;
})();
if(inst_24327__$1){
var statearr_24420_26070 = state_24368__$1;
(statearr_24420_26070[(1)] = (33));

} else {
var statearr_24421_26071 = state_24368__$1;
(statearr_24421_26071[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24369 === (25))){
var inst_24311 = (state_24368[(10)]);
var inst_24310 = (state_24368[(20)]);
var inst_24313 = (inst_24311 < inst_24310);
var inst_24314 = inst_24313;
var state_24368__$1 = state_24368;
if(cljs.core.truth_(inst_24314)){
var statearr_24422_26072 = state_24368__$1;
(statearr_24422_26072[(1)] = (27));

} else {
var statearr_24423_26074 = state_24368__$1;
(statearr_24423_26074[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24369 === (34))){
var state_24368__$1 = state_24368;
var statearr_24426_26077 = state_24368__$1;
(statearr_24426_26077[(2)] = null);

(statearr_24426_26077[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24369 === (17))){
var state_24368__$1 = state_24368;
var statearr_24427_26079 = state_24368__$1;
(statearr_24427_26079[(2)] = null);

(statearr_24427_26079[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24369 === (3))){
var inst_24366 = (state_24368[(2)]);
var state_24368__$1 = state_24368;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24368__$1,inst_24366);
} else {
if((state_val_24369 === (12))){
var inst_24295 = (state_24368[(2)]);
var state_24368__$1 = state_24368;
var statearr_24428_26080 = state_24368__$1;
(statearr_24428_26080[(2)] = inst_24295);

(statearr_24428_26080[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24369 === (2))){
var state_24368__$1 = state_24368;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24368__$1,(4),ch);
} else {
if((state_val_24369 === (23))){
var state_24368__$1 = state_24368;
var statearr_24429_26092 = state_24368__$1;
(statearr_24429_26092[(2)] = null);

(statearr_24429_26092[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24369 === (35))){
var inst_24349 = (state_24368[(2)]);
var state_24368__$1 = state_24368;
var statearr_24430_26093 = state_24368__$1;
(statearr_24430_26093[(2)] = inst_24349);

(statearr_24430_26093[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24369 === (19))){
var inst_24266 = (state_24368[(7)]);
var inst_24271 = cljs.core.chunk_first(inst_24266);
var inst_24272 = cljs.core.chunk_rest(inst_24266);
var inst_24273 = cljs.core.count(inst_24271);
var inst_24244 = inst_24272;
var inst_24245 = inst_24271;
var inst_24246 = inst_24273;
var inst_24247 = (0);
var state_24368__$1 = (function (){var statearr_24431 = state_24368;
(statearr_24431[(14)] = inst_24245);

(statearr_24431[(15)] = inst_24244);

(statearr_24431[(16)] = inst_24247);

(statearr_24431[(17)] = inst_24246);

return statearr_24431;
})();
var statearr_24432_26096 = state_24368__$1;
(statearr_24432_26096[(2)] = null);

(statearr_24432_26096[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24369 === (11))){
var inst_24266 = (state_24368[(7)]);
var inst_24244 = (state_24368[(15)]);
var inst_24266__$1 = cljs.core.seq(inst_24244);
var state_24368__$1 = (function (){var statearr_24433 = state_24368;
(statearr_24433[(7)] = inst_24266__$1);

return statearr_24433;
})();
if(inst_24266__$1){
var statearr_24434_26100 = state_24368__$1;
(statearr_24434_26100[(1)] = (16));

} else {
var statearr_24435_26101 = state_24368__$1;
(statearr_24435_26101[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24369 === (9))){
var inst_24297 = (state_24368[(2)]);
var state_24368__$1 = state_24368;
var statearr_24436_26102 = state_24368__$1;
(statearr_24436_26102[(2)] = inst_24297);

(statearr_24436_26102[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24369 === (5))){
var inst_24242 = cljs.core.deref(cs);
var inst_24243 = cljs.core.seq(inst_24242);
var inst_24244 = inst_24243;
var inst_24245 = null;
var inst_24246 = (0);
var inst_24247 = (0);
var state_24368__$1 = (function (){var statearr_24437 = state_24368;
(statearr_24437[(14)] = inst_24245);

(statearr_24437[(15)] = inst_24244);

(statearr_24437[(16)] = inst_24247);

(statearr_24437[(17)] = inst_24246);

return statearr_24437;
})();
var statearr_24439_26110 = state_24368__$1;
(statearr_24439_26110[(2)] = null);

(statearr_24439_26110[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24369 === (14))){
var state_24368__$1 = state_24368;
var statearr_24441_26111 = state_24368__$1;
(statearr_24441_26111[(2)] = null);

(statearr_24441_26111[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24369 === (45))){
var inst_24357 = (state_24368[(2)]);
var state_24368__$1 = state_24368;
var statearr_24442_26118 = state_24368__$1;
(statearr_24442_26118[(2)] = inst_24357);

(statearr_24442_26118[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24369 === (26))){
var inst_24300 = (state_24368[(27)]);
var inst_24353 = (state_24368[(2)]);
var inst_24354 = cljs.core.seq(inst_24300);
var state_24368__$1 = (function (){var statearr_24443 = state_24368;
(statearr_24443[(29)] = inst_24353);

return statearr_24443;
})();
if(inst_24354){
var statearr_24444_26121 = state_24368__$1;
(statearr_24444_26121[(1)] = (42));

} else {
var statearr_24445_26122 = state_24368__$1;
(statearr_24445_26122[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24369 === (16))){
var inst_24266 = (state_24368[(7)]);
var inst_24269 = cljs.core.chunked_seq_QMARK_(inst_24266);
var state_24368__$1 = state_24368;
if(inst_24269){
var statearr_24446_26123 = state_24368__$1;
(statearr_24446_26123[(1)] = (19));

} else {
var statearr_24447_26124 = state_24368__$1;
(statearr_24447_26124[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24369 === (38))){
var inst_24346 = (state_24368[(2)]);
var state_24368__$1 = state_24368;
var statearr_24449_26128 = state_24368__$1;
(statearr_24449_26128[(2)] = inst_24346);

(statearr_24449_26128[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24369 === (30))){
var state_24368__$1 = state_24368;
var statearr_24452_26129 = state_24368__$1;
(statearr_24452_26129[(2)] = null);

(statearr_24452_26129[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24369 === (10))){
var inst_24245 = (state_24368[(14)]);
var inst_24247 = (state_24368[(16)]);
var inst_24255 = cljs.core._nth(inst_24245,inst_24247);
var inst_24256 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24255,(0),null);
var inst_24257 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24255,(1),null);
var state_24368__$1 = (function (){var statearr_24456 = state_24368;
(statearr_24456[(24)] = inst_24256);

return statearr_24456;
})();
if(cljs.core.truth_(inst_24257)){
var statearr_24457_26132 = state_24368__$1;
(statearr_24457_26132[(1)] = (13));

} else {
var statearr_24458_26133 = state_24368__$1;
(statearr_24458_26133[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24369 === (18))){
var inst_24293 = (state_24368[(2)]);
var state_24368__$1 = state_24368;
var statearr_24462_26134 = state_24368__$1;
(statearr_24462_26134[(2)] = inst_24293);

(statearr_24462_26134[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24369 === (42))){
var state_24368__$1 = state_24368;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24368__$1,(45),dchan);
} else {
if((state_val_24369 === (37))){
var inst_24327 = (state_24368[(23)]);
var inst_24235 = (state_24368[(9)]);
var inst_24336 = (state_24368[(22)]);
var inst_24336__$1 = cljs.core.first(inst_24327);
var inst_24337 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_24336__$1,inst_24235,done);
var state_24368__$1 = (function (){var statearr_24464 = state_24368;
(statearr_24464[(22)] = inst_24336__$1);

return statearr_24464;
})();
if(cljs.core.truth_(inst_24337)){
var statearr_24465_26135 = state_24368__$1;
(statearr_24465_26135[(1)] = (39));

} else {
var statearr_24466_26136 = state_24368__$1;
(statearr_24466_26136[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24369 === (8))){
var inst_24247 = (state_24368[(16)]);
var inst_24246 = (state_24368[(17)]);
var inst_24249 = (inst_24247 < inst_24246);
var inst_24250 = inst_24249;
var state_24368__$1 = state_24368;
if(cljs.core.truth_(inst_24250)){
var statearr_24470_26137 = state_24368__$1;
(statearr_24470_26137[(1)] = (10));

} else {
var statearr_24471_26144 = state_24368__$1;
(statearr_24471_26144[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__23319__auto__ = null;
var cljs$core$async$mult_$_state_machine__23319__auto____0 = (function (){
var statearr_24473 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24473[(0)] = cljs$core$async$mult_$_state_machine__23319__auto__);

(statearr_24473[(1)] = (1));

return statearr_24473;
});
var cljs$core$async$mult_$_state_machine__23319__auto____1 = (function (state_24368){
while(true){
var ret_value__23320__auto__ = (function (){try{while(true){
var result__23321__auto__ = switch__23318__auto__(state_24368);
if(cljs.core.keyword_identical_QMARK_(result__23321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23321__auto__;
}
break;
}
}catch (e24477){var ex__23322__auto__ = e24477;
var statearr_24478_26150 = state_24368;
(statearr_24478_26150[(2)] = ex__23322__auto__);


if(cljs.core.seq((state_24368[(4)]))){
var statearr_24480_26151 = state_24368;
(statearr_24480_26151[(1)] = cljs.core.first((state_24368[(4)])));

} else {
throw ex__23322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26152 = state_24368;
state_24368 = G__26152;
continue;
} else {
return ret_value__23320__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23319__auto__ = function(state_24368){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23319__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23319__auto____1.call(this,state_24368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23319__auto____0;
cljs$core$async$mult_$_state_machine__23319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23319__auto____1;
return cljs$core$async$mult_$_state_machine__23319__auto__;
})()
})();
var state__23459__auto__ = (function (){var statearr_24484 = f__23458__auto__();
(statearr_24484[(6)] = c__23457__auto___26015);

return statearr_24484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23459__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__24494 = arguments.length;
switch (G__24494) {
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

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

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

var cljs$core$async$Mix$admix_STAR_$dyn_26155 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_26155(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_26163 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_26163(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_26171 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_26171(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_26174 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null, m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null, m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_26174(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_26177 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null, m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null, m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_26177(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26179 = arguments.length;
var i__5727__auto___26180 = (0);
while(true){
if((i__5727__auto___26180 < len__5726__auto___26179)){
args__5732__auto__.push((arguments[i__5727__auto___26180]));

var G__26181 = (i__5727__auto___26180 + (1));
i__5727__auto___26180 = G__26181;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24578){
var map__24580 = p__24578;
var map__24580__$1 = cljs.core.__destructure_map(map__24580);
var opts = map__24580__$1;
var statearr_24581_26183 = state;
(statearr_24581_26183[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_24585_26184 = state;
(statearr_24585_26184[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_24588_26185 = state;
(statearr_24588_26185[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24566){
var G__24567 = cljs.core.first(seq24566);
var seq24566__$1 = cljs.core.next(seq24566);
var G__24568 = cljs.core.first(seq24566__$1);
var seq24566__$2 = cljs.core.next(seq24566__$1);
var G__24569 = cljs.core.first(seq24566__$2);
var seq24566__$3 = cljs.core.next(seq24566__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24567,G__24568,G__24569,seq24566__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24614 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24615){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta24615 = meta24615;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24614.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24616,meta24615__$1){
var self__ = this;
var _24616__$1 = this;
return (new cljs.core.async.t_cljs$core$async24614(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24615__$1));
}));

(cljs.core.async.t_cljs$core$async24614.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24616){
var self__ = this;
var _24616__$1 = this;
return self__.meta24615;
}));

(cljs.core.async.t_cljs$core$async24614.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24614.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async24614.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24614.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async24614.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async24614.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async24614.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async24614.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async24614.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta24615","meta24615",-1200681516,null)], null);
}));

(cljs.core.async.t_cljs$core$async24614.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24614.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24614");

(cljs.core.async.t_cljs$core$async24614.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async24614");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24614.
 */
cljs.core.async.__GT_t_cljs$core$async24614 = (function cljs$core$async$__GT_t_cljs$core$async24614(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24615){
return (new cljs.core.async.t_cljs$core$async24614(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24615));
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
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null, v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async24614(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__23457__auto___26197 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23458__auto__ = (function (){var switch__23318__auto__ = (function (state_24726){
var state_val_24728 = (state_24726[(1)]);
if((state_val_24728 === (7))){
var inst_24678 = (state_24726[(2)]);
var state_24726__$1 = state_24726;
if(cljs.core.truth_(inst_24678)){
var statearr_24734_26198 = state_24726__$1;
(statearr_24734_26198[(1)] = (8));

} else {
var statearr_24735_26199 = state_24726__$1;
(statearr_24735_26199[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24728 === (20))){
var inst_24670 = (state_24726[(7)]);
var state_24726__$1 = state_24726;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24726__$1,(23),out,inst_24670);
} else {
if((state_val_24728 === (1))){
var inst_24648 = calc_state();
var inst_24649 = cljs.core.__destructure_map(inst_24648);
var inst_24650 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24649,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24651 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24649,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24653 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24649,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24655 = inst_24648;
var state_24726__$1 = (function (){var statearr_24736 = state_24726;
(statearr_24736[(8)] = inst_24650);

(statearr_24736[(9)] = inst_24653);

(statearr_24736[(10)] = inst_24655);

(statearr_24736[(11)] = inst_24651);

return statearr_24736;
})();
var statearr_24737_26206 = state_24726__$1;
(statearr_24737_26206[(2)] = null);

(statearr_24737_26206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24728 === (24))){
var inst_24658 = (state_24726[(12)]);
var inst_24655 = inst_24658;
var state_24726__$1 = (function (){var statearr_24738 = state_24726;
(statearr_24738[(10)] = inst_24655);

return statearr_24738;
})();
var statearr_24739_26210 = state_24726__$1;
(statearr_24739_26210[(2)] = null);

(statearr_24739_26210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24728 === (4))){
var inst_24670 = (state_24726[(7)]);
var inst_24673 = (state_24726[(13)]);
var inst_24669 = (state_24726[(2)]);
var inst_24670__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24669,(0),null);
var inst_24671 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24669,(1),null);
var inst_24673__$1 = (inst_24670__$1 == null);
var state_24726__$1 = (function (){var statearr_24740 = state_24726;
(statearr_24740[(14)] = inst_24671);

(statearr_24740[(7)] = inst_24670__$1);

(statearr_24740[(13)] = inst_24673__$1);

return statearr_24740;
})();
if(cljs.core.truth_(inst_24673__$1)){
var statearr_24741_26211 = state_24726__$1;
(statearr_24741_26211[(1)] = (5));

} else {
var statearr_24742_26212 = state_24726__$1;
(statearr_24742_26212[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24728 === (15))){
var inst_24696 = (state_24726[(15)]);
var inst_24661 = (state_24726[(16)]);
var inst_24696__$1 = cljs.core.empty_QMARK_(inst_24661);
var state_24726__$1 = (function (){var statearr_24743 = state_24726;
(statearr_24743[(15)] = inst_24696__$1);

return statearr_24743;
})();
if(inst_24696__$1){
var statearr_24744_26214 = state_24726__$1;
(statearr_24744_26214[(1)] = (17));

} else {
var statearr_24745_26215 = state_24726__$1;
(statearr_24745_26215[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24728 === (21))){
var inst_24658 = (state_24726[(12)]);
var inst_24655 = inst_24658;
var state_24726__$1 = (function (){var statearr_24746 = state_24726;
(statearr_24746[(10)] = inst_24655);

return statearr_24746;
})();
var statearr_24747_26219 = state_24726__$1;
(statearr_24747_26219[(2)] = null);

(statearr_24747_26219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24728 === (13))){
var inst_24688 = (state_24726[(2)]);
var inst_24689 = calc_state();
var inst_24655 = inst_24689;
var state_24726__$1 = (function (){var statearr_24748 = state_24726;
(statearr_24748[(10)] = inst_24655);

(statearr_24748[(17)] = inst_24688);

return statearr_24748;
})();
var statearr_24749_26220 = state_24726__$1;
(statearr_24749_26220[(2)] = null);

(statearr_24749_26220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24728 === (22))){
var inst_24719 = (state_24726[(2)]);
var state_24726__$1 = state_24726;
var statearr_24750_26221 = state_24726__$1;
(statearr_24750_26221[(2)] = inst_24719);

(statearr_24750_26221[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24728 === (6))){
var inst_24671 = (state_24726[(14)]);
var inst_24676 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24671,change);
var state_24726__$1 = state_24726;
var statearr_24751_26222 = state_24726__$1;
(statearr_24751_26222[(2)] = inst_24676);

(statearr_24751_26222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24728 === (25))){
var state_24726__$1 = state_24726;
var statearr_24752_26224 = state_24726__$1;
(statearr_24752_26224[(2)] = null);

(statearr_24752_26224[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24728 === (17))){
var inst_24671 = (state_24726[(14)]);
var inst_24662 = (state_24726[(18)]);
var inst_24698 = (inst_24662.cljs$core$IFn$_invoke$arity$1 ? inst_24662.cljs$core$IFn$_invoke$arity$1(inst_24671) : inst_24662.call(null, inst_24671));
var inst_24699 = cljs.core.not(inst_24698);
var state_24726__$1 = state_24726;
var statearr_24753_26225 = state_24726__$1;
(statearr_24753_26225[(2)] = inst_24699);

(statearr_24753_26225[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24728 === (3))){
var inst_24723 = (state_24726[(2)]);
var state_24726__$1 = state_24726;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24726__$1,inst_24723);
} else {
if((state_val_24728 === (12))){
var state_24726__$1 = state_24726;
var statearr_24754_26230 = state_24726__$1;
(statearr_24754_26230[(2)] = null);

(statearr_24754_26230[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24728 === (2))){
var inst_24655 = (state_24726[(10)]);
var inst_24658 = (state_24726[(12)]);
var inst_24658__$1 = cljs.core.__destructure_map(inst_24655);
var inst_24661 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24658__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24662 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24658__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24664 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24658__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24726__$1 = (function (){var statearr_24755 = state_24726;
(statearr_24755[(18)] = inst_24662);

(statearr_24755[(16)] = inst_24661);

(statearr_24755[(12)] = inst_24658__$1);

return statearr_24755;
})();
return cljs.core.async.ioc_alts_BANG_(state_24726__$1,(4),inst_24664);
} else {
if((state_val_24728 === (23))){
var inst_24710 = (state_24726[(2)]);
var state_24726__$1 = state_24726;
if(cljs.core.truth_(inst_24710)){
var statearr_24756_26231 = state_24726__$1;
(statearr_24756_26231[(1)] = (24));

} else {
var statearr_24757_26238 = state_24726__$1;
(statearr_24757_26238[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24728 === (19))){
var inst_24702 = (state_24726[(2)]);
var state_24726__$1 = state_24726;
var statearr_24760_26239 = state_24726__$1;
(statearr_24760_26239[(2)] = inst_24702);

(statearr_24760_26239[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24728 === (11))){
var inst_24671 = (state_24726[(14)]);
var inst_24685 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_24671);
var state_24726__$1 = state_24726;
var statearr_24761_26240 = state_24726__$1;
(statearr_24761_26240[(2)] = inst_24685);

(statearr_24761_26240[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24728 === (9))){
var inst_24671 = (state_24726[(14)]);
var inst_24661 = (state_24726[(16)]);
var inst_24692 = (state_24726[(19)]);
var inst_24692__$1 = (inst_24661.cljs$core$IFn$_invoke$arity$1 ? inst_24661.cljs$core$IFn$_invoke$arity$1(inst_24671) : inst_24661.call(null, inst_24671));
var state_24726__$1 = (function (){var statearr_24762 = state_24726;
(statearr_24762[(19)] = inst_24692__$1);

return statearr_24762;
})();
if(cljs.core.truth_(inst_24692__$1)){
var statearr_24763_26241 = state_24726__$1;
(statearr_24763_26241[(1)] = (14));

} else {
var statearr_24764_26242 = state_24726__$1;
(statearr_24764_26242[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24728 === (5))){
var inst_24673 = (state_24726[(13)]);
var state_24726__$1 = state_24726;
var statearr_24769_26243 = state_24726__$1;
(statearr_24769_26243[(2)] = inst_24673);

(statearr_24769_26243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24728 === (14))){
var inst_24692 = (state_24726[(19)]);
var state_24726__$1 = state_24726;
var statearr_24774_26244 = state_24726__$1;
(statearr_24774_26244[(2)] = inst_24692);

(statearr_24774_26244[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24728 === (26))){
var inst_24715 = (state_24726[(2)]);
var state_24726__$1 = state_24726;
var statearr_24776_26245 = state_24726__$1;
(statearr_24776_26245[(2)] = inst_24715);

(statearr_24776_26245[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24728 === (16))){
var inst_24704 = (state_24726[(2)]);
var state_24726__$1 = state_24726;
if(cljs.core.truth_(inst_24704)){
var statearr_24777_26252 = state_24726__$1;
(statearr_24777_26252[(1)] = (20));

} else {
var statearr_24778_26253 = state_24726__$1;
(statearr_24778_26253[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24728 === (10))){
var inst_24721 = (state_24726[(2)]);
var state_24726__$1 = state_24726;
var statearr_24779_26254 = state_24726__$1;
(statearr_24779_26254[(2)] = inst_24721);

(statearr_24779_26254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24728 === (18))){
var inst_24696 = (state_24726[(15)]);
var state_24726__$1 = state_24726;
var statearr_24780_26255 = state_24726__$1;
(statearr_24780_26255[(2)] = inst_24696);

(statearr_24780_26255[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24728 === (8))){
var inst_24670 = (state_24726[(7)]);
var inst_24683 = (inst_24670 == null);
var state_24726__$1 = state_24726;
if(cljs.core.truth_(inst_24683)){
var statearr_24783_26256 = state_24726__$1;
(statearr_24783_26256[(1)] = (11));

} else {
var statearr_24786_26257 = state_24726__$1;
(statearr_24786_26257[(1)] = (12));

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
});
return (function() {
var cljs$core$async$mix_$_state_machine__23319__auto__ = null;
var cljs$core$async$mix_$_state_machine__23319__auto____0 = (function (){
var statearr_24791 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24791[(0)] = cljs$core$async$mix_$_state_machine__23319__auto__);

(statearr_24791[(1)] = (1));

return statearr_24791;
});
var cljs$core$async$mix_$_state_machine__23319__auto____1 = (function (state_24726){
while(true){
var ret_value__23320__auto__ = (function (){try{while(true){
var result__23321__auto__ = switch__23318__auto__(state_24726);
if(cljs.core.keyword_identical_QMARK_(result__23321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23321__auto__;
}
break;
}
}catch (e24792){var ex__23322__auto__ = e24792;
var statearr_24793_26261 = state_24726;
(statearr_24793_26261[(2)] = ex__23322__auto__);


if(cljs.core.seq((state_24726[(4)]))){
var statearr_24794_26263 = state_24726;
(statearr_24794_26263[(1)] = cljs.core.first((state_24726[(4)])));

} else {
throw ex__23322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26264 = state_24726;
state_24726 = G__26264;
continue;
} else {
return ret_value__23320__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23319__auto__ = function(state_24726){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23319__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23319__auto____1.call(this,state_24726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23319__auto____0;
cljs$core$async$mix_$_state_machine__23319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23319__auto____1;
return cljs$core$async$mix_$_state_machine__23319__auto__;
})()
})();
var state__23459__auto__ = (function (){var statearr_24799 = f__23458__auto__();
(statearr_24799[(6)] = c__23457__auto___26197);

return statearr_24799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23459__auto__);
}));


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

var cljs$core$async$Pub$sub_STAR_$dyn_26265 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null, p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null, p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_26265(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_26268 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null, p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null, p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_26268(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_26274 = (function() {
var G__26275 = null;
var G__26275__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null, p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null, p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__26275__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null, p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null, p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__26275 = function(p,v){
switch(arguments.length){
case 1:
return G__26275__1.call(this,p);
case 2:
return G__26275__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26275.cljs$core$IFn$_invoke$arity$1 = G__26275__1;
G__26275.cljs$core$IFn$_invoke$arity$2 = G__26275__2;
return G__26275;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__24829 = arguments.length;
switch (G__24829) {
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

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_26274(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_26274(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24847 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24848){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24848 = meta24848;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24847.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24849,meta24848__$1){
var self__ = this;
var _24849__$1 = this;
return (new cljs.core.async.t_cljs$core$async24847(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24848__$1));
}));

(cljs.core.async.t_cljs$core$async24847.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24849){
var self__ = this;
var _24849__$1 = this;
return self__.meta24848;
}));

(cljs.core.async.t_cljs$core$async24847.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24847.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async24847.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24847.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async24847.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async24847.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async24847.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async24847.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24848","meta24848",167641420,null)], null);
}));

(cljs.core.async.t_cljs$core$async24847.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24847.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24847");

(cljs.core.async.t_cljs$core$async24847.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async24847");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24847.
 */
cljs.core.async.__GT_t_cljs$core$async24847 = (function cljs$core$async$__GT_t_cljs$core$async24847(ch,topic_fn,buf_fn,mults,ensure_mult,meta24848){
return (new cljs.core.async.t_cljs$core$async24847(ch,topic_fn,buf_fn,mults,ensure_mult,meta24848));
});


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
var G__24838 = arguments.length;
switch (G__24838) {
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

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__24832_SHARP_){
if(cljs.core.truth_((p1__24832_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__24832_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__24832_SHARP_.call(null, topic)))){
return p1__24832_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__24832_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async24847(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__23457__auto___26292 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23458__auto__ = (function (){var switch__23318__auto__ = (function (state_24946){
var state_val_24947 = (state_24946[(1)]);
if((state_val_24947 === (7))){
var inst_24941 = (state_24946[(2)]);
var state_24946__$1 = state_24946;
var statearr_24951_26293 = state_24946__$1;
(statearr_24951_26293[(2)] = inst_24941);

(statearr_24951_26293[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24947 === (20))){
var state_24946__$1 = state_24946;
var statearr_24953_26294 = state_24946__$1;
(statearr_24953_26294[(2)] = null);

(statearr_24953_26294[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24947 === (1))){
var state_24946__$1 = state_24946;
var statearr_24954_26295 = state_24946__$1;
(statearr_24954_26295[(2)] = null);

(statearr_24954_26295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24947 === (24))){
var inst_24921 = (state_24946[(7)]);
var inst_24933 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_24921);
var state_24946__$1 = state_24946;
var statearr_24955_26296 = state_24946__$1;
(statearr_24955_26296[(2)] = inst_24933);

(statearr_24955_26296[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24947 === (4))){
var inst_24869 = (state_24946[(8)]);
var inst_24869__$1 = (state_24946[(2)]);
var inst_24870 = (inst_24869__$1 == null);
var state_24946__$1 = (function (){var statearr_24956 = state_24946;
(statearr_24956[(8)] = inst_24869__$1);

return statearr_24956;
})();
if(cljs.core.truth_(inst_24870)){
var statearr_24957_26297 = state_24946__$1;
(statearr_24957_26297[(1)] = (5));

} else {
var statearr_24958_26298 = state_24946__$1;
(statearr_24958_26298[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24947 === (15))){
var inst_24915 = (state_24946[(2)]);
var state_24946__$1 = state_24946;
var statearr_24959_26299 = state_24946__$1;
(statearr_24959_26299[(2)] = inst_24915);

(statearr_24959_26299[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24947 === (21))){
var inst_24938 = (state_24946[(2)]);
var state_24946__$1 = (function (){var statearr_24960 = state_24946;
(statearr_24960[(9)] = inst_24938);

return statearr_24960;
})();
var statearr_24965_26300 = state_24946__$1;
(statearr_24965_26300[(2)] = null);

(statearr_24965_26300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24947 === (13))){
var inst_24896 = (state_24946[(10)]);
var inst_24898 = cljs.core.chunked_seq_QMARK_(inst_24896);
var state_24946__$1 = state_24946;
if(inst_24898){
var statearr_24966_26301 = state_24946__$1;
(statearr_24966_26301[(1)] = (16));

} else {
var statearr_24967_26302 = state_24946__$1;
(statearr_24967_26302[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24947 === (22))){
var inst_24930 = (state_24946[(2)]);
var state_24946__$1 = state_24946;
if(cljs.core.truth_(inst_24930)){
var statearr_24969_26303 = state_24946__$1;
(statearr_24969_26303[(1)] = (23));

} else {
var statearr_24970_26304 = state_24946__$1;
(statearr_24970_26304[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24947 === (6))){
var inst_24923 = (state_24946[(11)]);
var inst_24869 = (state_24946[(8)]);
var inst_24921 = (state_24946[(7)]);
var inst_24921__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_24869) : topic_fn.call(null, inst_24869));
var inst_24922 = cljs.core.deref(mults);
var inst_24923__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24922,inst_24921__$1);
var state_24946__$1 = (function (){var statearr_24971 = state_24946;
(statearr_24971[(11)] = inst_24923__$1);

(statearr_24971[(7)] = inst_24921__$1);

return statearr_24971;
})();
if(cljs.core.truth_(inst_24923__$1)){
var statearr_24972_26305 = state_24946__$1;
(statearr_24972_26305[(1)] = (19));

} else {
var statearr_24973_26306 = state_24946__$1;
(statearr_24973_26306[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24947 === (25))){
var inst_24935 = (state_24946[(2)]);
var state_24946__$1 = state_24946;
var statearr_24974_26307 = state_24946__$1;
(statearr_24974_26307[(2)] = inst_24935);

(statearr_24974_26307[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24947 === (17))){
var inst_24896 = (state_24946[(10)]);
var inst_24906 = cljs.core.first(inst_24896);
var inst_24907 = cljs.core.async.muxch_STAR_(inst_24906);
var inst_24908 = cljs.core.async.close_BANG_(inst_24907);
var inst_24909 = cljs.core.next(inst_24896);
var inst_24879 = inst_24909;
var inst_24880 = null;
var inst_24881 = (0);
var inst_24882 = (0);
var state_24946__$1 = (function (){var statearr_24975 = state_24946;
(statearr_24975[(12)] = inst_24882);

(statearr_24975[(13)] = inst_24908);

(statearr_24975[(14)] = inst_24879);

(statearr_24975[(15)] = inst_24880);

(statearr_24975[(16)] = inst_24881);

return statearr_24975;
})();
var statearr_24976_26312 = state_24946__$1;
(statearr_24976_26312[(2)] = null);

(statearr_24976_26312[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24947 === (3))){
var inst_24943 = (state_24946[(2)]);
var state_24946__$1 = state_24946;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24946__$1,inst_24943);
} else {
if((state_val_24947 === (12))){
var inst_24917 = (state_24946[(2)]);
var state_24946__$1 = state_24946;
var statearr_24979_26313 = state_24946__$1;
(statearr_24979_26313[(2)] = inst_24917);

(statearr_24979_26313[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24947 === (2))){
var state_24946__$1 = state_24946;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24946__$1,(4),ch);
} else {
if((state_val_24947 === (23))){
var state_24946__$1 = state_24946;
var statearr_24980_26314 = state_24946__$1;
(statearr_24980_26314[(2)] = null);

(statearr_24980_26314[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24947 === (19))){
var inst_24923 = (state_24946[(11)]);
var inst_24869 = (state_24946[(8)]);
var inst_24928 = cljs.core.async.muxch_STAR_(inst_24923);
var state_24946__$1 = state_24946;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24946__$1,(22),inst_24928,inst_24869);
} else {
if((state_val_24947 === (11))){
var inst_24896 = (state_24946[(10)]);
var inst_24879 = (state_24946[(14)]);
var inst_24896__$1 = cljs.core.seq(inst_24879);
var state_24946__$1 = (function (){var statearr_24981 = state_24946;
(statearr_24981[(10)] = inst_24896__$1);

return statearr_24981;
})();
if(inst_24896__$1){
var statearr_24982_26315 = state_24946__$1;
(statearr_24982_26315[(1)] = (13));

} else {
var statearr_24983_26316 = state_24946__$1;
(statearr_24983_26316[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24947 === (9))){
var inst_24919 = (state_24946[(2)]);
var state_24946__$1 = state_24946;
var statearr_24984_26317 = state_24946__$1;
(statearr_24984_26317[(2)] = inst_24919);

(statearr_24984_26317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24947 === (5))){
var inst_24876 = cljs.core.deref(mults);
var inst_24877 = cljs.core.vals(inst_24876);
var inst_24878 = cljs.core.seq(inst_24877);
var inst_24879 = inst_24878;
var inst_24880 = null;
var inst_24881 = (0);
var inst_24882 = (0);
var state_24946__$1 = (function (){var statearr_24985 = state_24946;
(statearr_24985[(12)] = inst_24882);

(statearr_24985[(14)] = inst_24879);

(statearr_24985[(15)] = inst_24880);

(statearr_24985[(16)] = inst_24881);

return statearr_24985;
})();
var statearr_24986_26326 = state_24946__$1;
(statearr_24986_26326[(2)] = null);

(statearr_24986_26326[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24947 === (14))){
var state_24946__$1 = state_24946;
var statearr_24990_26327 = state_24946__$1;
(statearr_24990_26327[(2)] = null);

(statearr_24990_26327[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24947 === (16))){
var inst_24896 = (state_24946[(10)]);
var inst_24901 = cljs.core.chunk_first(inst_24896);
var inst_24902 = cljs.core.chunk_rest(inst_24896);
var inst_24903 = cljs.core.count(inst_24901);
var inst_24879 = inst_24902;
var inst_24880 = inst_24901;
var inst_24881 = inst_24903;
var inst_24882 = (0);
var state_24946__$1 = (function (){var statearr_24991 = state_24946;
(statearr_24991[(12)] = inst_24882);

(statearr_24991[(14)] = inst_24879);

(statearr_24991[(15)] = inst_24880);

(statearr_24991[(16)] = inst_24881);

return statearr_24991;
})();
var statearr_24992_26331 = state_24946__$1;
(statearr_24992_26331[(2)] = null);

(statearr_24992_26331[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24947 === (10))){
var inst_24882 = (state_24946[(12)]);
var inst_24879 = (state_24946[(14)]);
var inst_24880 = (state_24946[(15)]);
var inst_24881 = (state_24946[(16)]);
var inst_24887 = cljs.core._nth(inst_24880,inst_24882);
var inst_24888 = cljs.core.async.muxch_STAR_(inst_24887);
var inst_24889 = cljs.core.async.close_BANG_(inst_24888);
var inst_24890 = (inst_24882 + (1));
var tmp24987 = inst_24879;
var tmp24988 = inst_24880;
var tmp24989 = inst_24881;
var inst_24879__$1 = tmp24987;
var inst_24880__$1 = tmp24988;
var inst_24881__$1 = tmp24989;
var inst_24882__$1 = inst_24890;
var state_24946__$1 = (function (){var statearr_24993 = state_24946;
(statearr_24993[(12)] = inst_24882__$1);

(statearr_24993[(17)] = inst_24889);

(statearr_24993[(14)] = inst_24879__$1);

(statearr_24993[(15)] = inst_24880__$1);

(statearr_24993[(16)] = inst_24881__$1);

return statearr_24993;
})();
var statearr_24994_26332 = state_24946__$1;
(statearr_24994_26332[(2)] = null);

(statearr_24994_26332[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24947 === (18))){
var inst_24912 = (state_24946[(2)]);
var state_24946__$1 = state_24946;
var statearr_24995_26337 = state_24946__$1;
(statearr_24995_26337[(2)] = inst_24912);

(statearr_24995_26337[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24947 === (8))){
var inst_24882 = (state_24946[(12)]);
var inst_24881 = (state_24946[(16)]);
var inst_24884 = (inst_24882 < inst_24881);
var inst_24885 = inst_24884;
var state_24946__$1 = state_24946;
if(cljs.core.truth_(inst_24885)){
var statearr_24996_26338 = state_24946__$1;
(statearr_24996_26338[(1)] = (10));

} else {
var statearr_24997_26339 = state_24946__$1;
(statearr_24997_26339[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__23319__auto__ = null;
var cljs$core$async$state_machine__23319__auto____0 = (function (){
var statearr_24998 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24998[(0)] = cljs$core$async$state_machine__23319__auto__);

(statearr_24998[(1)] = (1));

return statearr_24998;
});
var cljs$core$async$state_machine__23319__auto____1 = (function (state_24946){
while(true){
var ret_value__23320__auto__ = (function (){try{while(true){
var result__23321__auto__ = switch__23318__auto__(state_24946);
if(cljs.core.keyword_identical_QMARK_(result__23321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23321__auto__;
}
break;
}
}catch (e24999){var ex__23322__auto__ = e24999;
var statearr_25000_26340 = state_24946;
(statearr_25000_26340[(2)] = ex__23322__auto__);


if(cljs.core.seq((state_24946[(4)]))){
var statearr_25001_26341 = state_24946;
(statearr_25001_26341[(1)] = cljs.core.first((state_24946[(4)])));

} else {
throw ex__23322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26342 = state_24946;
state_24946 = G__26342;
continue;
} else {
return ret_value__23320__auto__;
}
break;
}
});
cljs$core$async$state_machine__23319__auto__ = function(state_24946){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23319__auto____1.call(this,state_24946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23319__auto____0;
cljs$core$async$state_machine__23319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23319__auto____1;
return cljs$core$async$state_machine__23319__auto__;
})()
})();
var state__23459__auto__ = (function (){var statearr_25003 = f__23458__auto__();
(statearr_25003[(6)] = c__23457__auto___26292);

return statearr_25003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23459__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__25006 = arguments.length;
switch (G__25006) {
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

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

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
var G__25010 = arguments.length;
switch (G__25010) {
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

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

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
var G__25014 = arguments.length;
switch (G__25014) {
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

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__23457__auto___26349 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23458__auto__ = (function (){var switch__23318__auto__ = (function (state_25067){
var state_val_25068 = (state_25067[(1)]);
if((state_val_25068 === (7))){
var state_25067__$1 = state_25067;
var statearr_25070_26350 = state_25067__$1;
(statearr_25070_26350[(2)] = null);

(statearr_25070_26350[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25068 === (1))){
var state_25067__$1 = state_25067;
var statearr_25071_26351 = state_25067__$1;
(statearr_25071_26351[(2)] = null);

(statearr_25071_26351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25068 === (4))){
var inst_25019 = (state_25067[(7)]);
var inst_25020 = (state_25067[(8)]);
var inst_25022 = (inst_25020 < inst_25019);
var state_25067__$1 = state_25067;
if(cljs.core.truth_(inst_25022)){
var statearr_25072_26356 = state_25067__$1;
(statearr_25072_26356[(1)] = (6));

} else {
var statearr_25073_26357 = state_25067__$1;
(statearr_25073_26357[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25068 === (15))){
var inst_25050 = (state_25067[(9)]);
var inst_25057 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_25050);
var state_25067__$1 = state_25067;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25067__$1,(17),out,inst_25057);
} else {
if((state_val_25068 === (13))){
var inst_25050 = (state_25067[(9)]);
var inst_25050__$1 = (state_25067[(2)]);
var inst_25052 = cljs.core.some(cljs.core.nil_QMARK_,inst_25050__$1);
var state_25067__$1 = (function (){var statearr_25077 = state_25067;
(statearr_25077[(9)] = inst_25050__$1);

return statearr_25077;
})();
if(cljs.core.truth_(inst_25052)){
var statearr_25078_26361 = state_25067__$1;
(statearr_25078_26361[(1)] = (14));

} else {
var statearr_25079_26362 = state_25067__$1;
(statearr_25079_26362[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25068 === (6))){
var state_25067__$1 = state_25067;
var statearr_25080_26363 = state_25067__$1;
(statearr_25080_26363[(2)] = null);

(statearr_25080_26363[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25068 === (17))){
var inst_25059 = (state_25067[(2)]);
var state_25067__$1 = (function (){var statearr_25082 = state_25067;
(statearr_25082[(10)] = inst_25059);

return statearr_25082;
})();
var statearr_25083_26367 = state_25067__$1;
(statearr_25083_26367[(2)] = null);

(statearr_25083_26367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25068 === (3))){
var inst_25064 = (state_25067[(2)]);
var state_25067__$1 = state_25067;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25067__$1,inst_25064);
} else {
if((state_val_25068 === (12))){
var _ = (function (){var statearr_25097 = state_25067;
(statearr_25097[(4)] = cljs.core.rest((state_25067[(4)])));

return statearr_25097;
})();
var state_25067__$1 = state_25067;
var ex25081 = (state_25067__$1[(2)]);
var statearr_25098_26371 = state_25067__$1;
(statearr_25098_26371[(5)] = ex25081);


if((ex25081 instanceof Object)){
var statearr_25105_26372 = state_25067__$1;
(statearr_25105_26372[(1)] = (11));

(statearr_25105_26372[(5)] = null);

} else {
throw ex25081;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25068 === (2))){
var inst_25018 = cljs.core.reset_BANG_(dctr,cnt);
var inst_25019 = cnt;
var inst_25020 = (0);
var state_25067__$1 = (function (){var statearr_25106 = state_25067;
(statearr_25106[(11)] = inst_25018);

(statearr_25106[(7)] = inst_25019);

(statearr_25106[(8)] = inst_25020);

return statearr_25106;
})();
var statearr_25107_26373 = state_25067__$1;
(statearr_25107_26373[(2)] = null);

(statearr_25107_26373[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25068 === (11))){
var inst_25028 = (state_25067[(2)]);
var inst_25029 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_25067__$1 = (function (){var statearr_25115 = state_25067;
(statearr_25115[(12)] = inst_25028);

return statearr_25115;
})();
var statearr_25119_26377 = state_25067__$1;
(statearr_25119_26377[(2)] = inst_25029);

(statearr_25119_26377[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25068 === (9))){
var inst_25020 = (state_25067[(8)]);
var _ = (function (){var statearr_25120 = state_25067;
(statearr_25120[(4)] = cljs.core.cons((12),(state_25067[(4)])));

return statearr_25120;
})();
var inst_25035 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_25020) : chs__$1.call(null, inst_25020));
var inst_25036 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_25020) : done.call(null, inst_25020));
var inst_25037 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_25035,inst_25036);
var ___$1 = (function (){var statearr_25121 = state_25067;
(statearr_25121[(4)] = cljs.core.rest((state_25067[(4)])));

return statearr_25121;
})();
var state_25067__$1 = state_25067;
var statearr_25125_26382 = state_25067__$1;
(statearr_25125_26382[(2)] = inst_25037);

(statearr_25125_26382[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25068 === (5))){
var inst_25047 = (state_25067[(2)]);
var state_25067__$1 = (function (){var statearr_25126 = state_25067;
(statearr_25126[(13)] = inst_25047);

return statearr_25126;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25067__$1,(13),dchan);
} else {
if((state_val_25068 === (14))){
var inst_25054 = cljs.core.async.close_BANG_(out);
var state_25067__$1 = state_25067;
var statearr_25127_26383 = state_25067__$1;
(statearr_25127_26383[(2)] = inst_25054);

(statearr_25127_26383[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25068 === (16))){
var inst_25062 = (state_25067[(2)]);
var state_25067__$1 = state_25067;
var statearr_25128_26384 = state_25067__$1;
(statearr_25128_26384[(2)] = inst_25062);

(statearr_25128_26384[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25068 === (10))){
var inst_25020 = (state_25067[(8)]);
var inst_25040 = (state_25067[(2)]);
var inst_25041 = (inst_25020 + (1));
var inst_25020__$1 = inst_25041;
var state_25067__$1 = (function (){var statearr_25129 = state_25067;
(statearr_25129[(8)] = inst_25020__$1);

(statearr_25129[(14)] = inst_25040);

return statearr_25129;
})();
var statearr_25131_26385 = state_25067__$1;
(statearr_25131_26385[(2)] = null);

(statearr_25131_26385[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25068 === (8))){
var inst_25045 = (state_25067[(2)]);
var state_25067__$1 = state_25067;
var statearr_25135_26386 = state_25067__$1;
(statearr_25135_26386[(2)] = inst_25045);

(statearr_25135_26386[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__23319__auto__ = null;
var cljs$core$async$state_machine__23319__auto____0 = (function (){
var statearr_25136 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25136[(0)] = cljs$core$async$state_machine__23319__auto__);

(statearr_25136[(1)] = (1));

return statearr_25136;
});
var cljs$core$async$state_machine__23319__auto____1 = (function (state_25067){
while(true){
var ret_value__23320__auto__ = (function (){try{while(true){
var result__23321__auto__ = switch__23318__auto__(state_25067);
if(cljs.core.keyword_identical_QMARK_(result__23321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23321__auto__;
}
break;
}
}catch (e25137){var ex__23322__auto__ = e25137;
var statearr_25138_26387 = state_25067;
(statearr_25138_26387[(2)] = ex__23322__auto__);


if(cljs.core.seq((state_25067[(4)]))){
var statearr_25139_26388 = state_25067;
(statearr_25139_26388[(1)] = cljs.core.first((state_25067[(4)])));

} else {
throw ex__23322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26389 = state_25067;
state_25067 = G__26389;
continue;
} else {
return ret_value__23320__auto__;
}
break;
}
});
cljs$core$async$state_machine__23319__auto__ = function(state_25067){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23319__auto____1.call(this,state_25067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23319__auto____0;
cljs$core$async$state_machine__23319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23319__auto____1;
return cljs$core$async$state_machine__23319__auto__;
})()
})();
var state__23459__auto__ = (function (){var statearr_25140 = f__23458__auto__();
(statearr_25140[(6)] = c__23457__auto___26349);

return statearr_25140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23459__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__25143 = arguments.length;
switch (G__25143) {
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

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__23457__auto___26391 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23458__auto__ = (function (){var switch__23318__auto__ = (function (state_25182){
var state_val_25183 = (state_25182[(1)]);
if((state_val_25183 === (7))){
var inst_25160 = (state_25182[(7)]);
var inst_25161 = (state_25182[(8)]);
var inst_25160__$1 = (state_25182[(2)]);
var inst_25161__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25160__$1,(0),null);
var inst_25162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25160__$1,(1),null);
var inst_25163 = (inst_25161__$1 == null);
var state_25182__$1 = (function (){var statearr_25185 = state_25182;
(statearr_25185[(7)] = inst_25160__$1);

(statearr_25185[(9)] = inst_25162);

(statearr_25185[(8)] = inst_25161__$1);

return statearr_25185;
})();
if(cljs.core.truth_(inst_25163)){
var statearr_25186_26393 = state_25182__$1;
(statearr_25186_26393[(1)] = (8));

} else {
var statearr_25187_26394 = state_25182__$1;
(statearr_25187_26394[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25183 === (1))){
var inst_25148 = cljs.core.vec(chs);
var inst_25149 = inst_25148;
var state_25182__$1 = (function (){var statearr_25188 = state_25182;
(statearr_25188[(10)] = inst_25149);

return statearr_25188;
})();
var statearr_25189_26396 = state_25182__$1;
(statearr_25189_26396[(2)] = null);

(statearr_25189_26396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25183 === (4))){
var inst_25149 = (state_25182[(10)]);
var state_25182__$1 = state_25182;
return cljs.core.async.ioc_alts_BANG_(state_25182__$1,(7),inst_25149);
} else {
if((state_val_25183 === (6))){
var inst_25177 = (state_25182[(2)]);
var state_25182__$1 = state_25182;
var statearr_25190_26398 = state_25182__$1;
(statearr_25190_26398[(2)] = inst_25177);

(statearr_25190_26398[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25183 === (3))){
var inst_25179 = (state_25182[(2)]);
var state_25182__$1 = state_25182;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25182__$1,inst_25179);
} else {
if((state_val_25183 === (2))){
var inst_25149 = (state_25182[(10)]);
var inst_25151 = cljs.core.count(inst_25149);
var inst_25152 = (inst_25151 > (0));
var state_25182__$1 = state_25182;
if(cljs.core.truth_(inst_25152)){
var statearr_25192_26399 = state_25182__$1;
(statearr_25192_26399[(1)] = (4));

} else {
var statearr_25193_26400 = state_25182__$1;
(statearr_25193_26400[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25183 === (11))){
var inst_25149 = (state_25182[(10)]);
var inst_25170 = (state_25182[(2)]);
var tmp25191 = inst_25149;
var inst_25149__$1 = tmp25191;
var state_25182__$1 = (function (){var statearr_25194 = state_25182;
(statearr_25194[(10)] = inst_25149__$1);

(statearr_25194[(11)] = inst_25170);

return statearr_25194;
})();
var statearr_25195_26401 = state_25182__$1;
(statearr_25195_26401[(2)] = null);

(statearr_25195_26401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25183 === (9))){
var inst_25161 = (state_25182[(8)]);
var state_25182__$1 = state_25182;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25182__$1,(11),out,inst_25161);
} else {
if((state_val_25183 === (5))){
var inst_25175 = cljs.core.async.close_BANG_(out);
var state_25182__$1 = state_25182;
var statearr_25197_26402 = state_25182__$1;
(statearr_25197_26402[(2)] = inst_25175);

(statearr_25197_26402[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25183 === (10))){
var inst_25173 = (state_25182[(2)]);
var state_25182__$1 = state_25182;
var statearr_25198_26403 = state_25182__$1;
(statearr_25198_26403[(2)] = inst_25173);

(statearr_25198_26403[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25183 === (8))){
var inst_25160 = (state_25182[(7)]);
var inst_25162 = (state_25182[(9)]);
var inst_25149 = (state_25182[(10)]);
var inst_25161 = (state_25182[(8)]);
var inst_25165 = (function (){var cs = inst_25149;
var vec__25154 = inst_25160;
var v = inst_25161;
var c = inst_25162;
return (function (p1__25141_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__25141_SHARP_);
});
})();
var inst_25166 = cljs.core.filterv(inst_25165,inst_25149);
var inst_25149__$1 = inst_25166;
var state_25182__$1 = (function (){var statearr_25200 = state_25182;
(statearr_25200[(10)] = inst_25149__$1);

return statearr_25200;
})();
var statearr_25201_26407 = state_25182__$1;
(statearr_25201_26407[(2)] = null);

(statearr_25201_26407[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__23319__auto__ = null;
var cljs$core$async$state_machine__23319__auto____0 = (function (){
var statearr_25202 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25202[(0)] = cljs$core$async$state_machine__23319__auto__);

(statearr_25202[(1)] = (1));

return statearr_25202;
});
var cljs$core$async$state_machine__23319__auto____1 = (function (state_25182){
while(true){
var ret_value__23320__auto__ = (function (){try{while(true){
var result__23321__auto__ = switch__23318__auto__(state_25182);
if(cljs.core.keyword_identical_QMARK_(result__23321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23321__auto__;
}
break;
}
}catch (e25203){var ex__23322__auto__ = e25203;
var statearr_25204_26408 = state_25182;
(statearr_25204_26408[(2)] = ex__23322__auto__);


if(cljs.core.seq((state_25182[(4)]))){
var statearr_25205_26409 = state_25182;
(statearr_25205_26409[(1)] = cljs.core.first((state_25182[(4)])));

} else {
throw ex__23322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26410 = state_25182;
state_25182 = G__26410;
continue;
} else {
return ret_value__23320__auto__;
}
break;
}
});
cljs$core$async$state_machine__23319__auto__ = function(state_25182){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23319__auto____1.call(this,state_25182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23319__auto____0;
cljs$core$async$state_machine__23319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23319__auto____1;
return cljs$core$async$state_machine__23319__auto__;
})()
})();
var state__23459__auto__ = (function (){var statearr_25207 = f__23458__auto__();
(statearr_25207[(6)] = c__23457__auto___26391);

return statearr_25207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23459__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

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
var G__25213 = arguments.length;
switch (G__25213) {
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

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__23457__auto___26415 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23458__auto__ = (function (){var switch__23318__auto__ = (function (state_25237){
var state_val_25238 = (state_25237[(1)]);
if((state_val_25238 === (7))){
var inst_25219 = (state_25237[(7)]);
var inst_25219__$1 = (state_25237[(2)]);
var inst_25220 = (inst_25219__$1 == null);
var inst_25221 = cljs.core.not(inst_25220);
var state_25237__$1 = (function (){var statearr_25239 = state_25237;
(statearr_25239[(7)] = inst_25219__$1);

return statearr_25239;
})();
if(inst_25221){
var statearr_25240_26416 = state_25237__$1;
(statearr_25240_26416[(1)] = (8));

} else {
var statearr_25241_26417 = state_25237__$1;
(statearr_25241_26417[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25238 === (1))){
var inst_25214 = (0);
var state_25237__$1 = (function (){var statearr_25242 = state_25237;
(statearr_25242[(8)] = inst_25214);

return statearr_25242;
})();
var statearr_25243_26418 = state_25237__$1;
(statearr_25243_26418[(2)] = null);

(statearr_25243_26418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25238 === (4))){
var state_25237__$1 = state_25237;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25237__$1,(7),ch);
} else {
if((state_val_25238 === (6))){
var inst_25232 = (state_25237[(2)]);
var state_25237__$1 = state_25237;
var statearr_25244_26419 = state_25237__$1;
(statearr_25244_26419[(2)] = inst_25232);

(statearr_25244_26419[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25238 === (3))){
var inst_25234 = (state_25237[(2)]);
var inst_25235 = cljs.core.async.close_BANG_(out);
var state_25237__$1 = (function (){var statearr_25245 = state_25237;
(statearr_25245[(9)] = inst_25234);

return statearr_25245;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_25237__$1,inst_25235);
} else {
if((state_val_25238 === (2))){
var inst_25214 = (state_25237[(8)]);
var inst_25216 = (inst_25214 < n);
var state_25237__$1 = state_25237;
if(cljs.core.truth_(inst_25216)){
var statearr_25246_26424 = state_25237__$1;
(statearr_25246_26424[(1)] = (4));

} else {
var statearr_25247_26425 = state_25237__$1;
(statearr_25247_26425[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25238 === (11))){
var inst_25214 = (state_25237[(8)]);
var inst_25224 = (state_25237[(2)]);
var inst_25225 = (inst_25214 + (1));
var inst_25214__$1 = inst_25225;
var state_25237__$1 = (function (){var statearr_25248 = state_25237;
(statearr_25248[(8)] = inst_25214__$1);

(statearr_25248[(10)] = inst_25224);

return statearr_25248;
})();
var statearr_25249_26426 = state_25237__$1;
(statearr_25249_26426[(2)] = null);

(statearr_25249_26426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25238 === (9))){
var state_25237__$1 = state_25237;
var statearr_25250_26427 = state_25237__$1;
(statearr_25250_26427[(2)] = null);

(statearr_25250_26427[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25238 === (5))){
var state_25237__$1 = state_25237;
var statearr_25251_26428 = state_25237__$1;
(statearr_25251_26428[(2)] = null);

(statearr_25251_26428[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25238 === (10))){
var inst_25229 = (state_25237[(2)]);
var state_25237__$1 = state_25237;
var statearr_25252_26429 = state_25237__$1;
(statearr_25252_26429[(2)] = inst_25229);

(statearr_25252_26429[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25238 === (8))){
var inst_25219 = (state_25237[(7)]);
var state_25237__$1 = state_25237;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25237__$1,(11),out,inst_25219);
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
});
return (function() {
var cljs$core$async$state_machine__23319__auto__ = null;
var cljs$core$async$state_machine__23319__auto____0 = (function (){
var statearr_25253 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25253[(0)] = cljs$core$async$state_machine__23319__auto__);

(statearr_25253[(1)] = (1));

return statearr_25253;
});
var cljs$core$async$state_machine__23319__auto____1 = (function (state_25237){
while(true){
var ret_value__23320__auto__ = (function (){try{while(true){
var result__23321__auto__ = switch__23318__auto__(state_25237);
if(cljs.core.keyword_identical_QMARK_(result__23321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23321__auto__;
}
break;
}
}catch (e25254){var ex__23322__auto__ = e25254;
var statearr_25255_26430 = state_25237;
(statearr_25255_26430[(2)] = ex__23322__auto__);


if(cljs.core.seq((state_25237[(4)]))){
var statearr_25256_26431 = state_25237;
(statearr_25256_26431[(1)] = cljs.core.first((state_25237[(4)])));

} else {
throw ex__23322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26432 = state_25237;
state_25237 = G__26432;
continue;
} else {
return ret_value__23320__auto__;
}
break;
}
});
cljs$core$async$state_machine__23319__auto__ = function(state_25237){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23319__auto____1.call(this,state_25237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23319__auto____0;
cljs$core$async$state_machine__23319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23319__auto____1;
return cljs$core$async$state_machine__23319__auto__;
})()
})();
var state__23459__auto__ = (function (){var statearr_25257 = f__23458__auto__();
(statearr_25257[(6)] = c__23457__auto___26415);

return statearr_25257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23459__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25269 = (function (f,ch,meta25260,_,fn1,meta25270){
this.f = f;
this.ch = ch;
this.meta25260 = meta25260;
this._ = _;
this.fn1 = fn1;
this.meta25270 = meta25270;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25269.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25271,meta25270__$1){
var self__ = this;
var _25271__$1 = this;
return (new cljs.core.async.t_cljs$core$async25269(self__.f,self__.ch,self__.meta25260,self__._,self__.fn1,meta25270__$1));
}));

(cljs.core.async.t_cljs$core$async25269.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25271){
var self__ = this;
var _25271__$1 = this;
return self__.meta25270;
}));

(cljs.core.async.t_cljs$core$async25269.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25269.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async25269.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async25269.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__25258_SHARP_){
var G__25273 = (((p1__25258_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__25258_SHARP_) : self__.f.call(null, p1__25258_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__25273) : f1.call(null, G__25273));
});
}));

(cljs.core.async.t_cljs$core$async25269.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25260","meta25260",-1984793855,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25259","cljs.core.async/t_cljs$core$async25259",1374004986,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25270","meta25270",-2106600825,null)], null);
}));

(cljs.core.async.t_cljs$core$async25269.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25269.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25269");

(cljs.core.async.t_cljs$core$async25269.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async25269");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25269.
 */
cljs.core.async.__GT_t_cljs$core$async25269 = (function cljs$core$async$__GT_t_cljs$core$async25269(f,ch,meta25260,_,fn1,meta25270){
return (new cljs.core.async.t_cljs$core$async25269(f,ch,meta25260,_,fn1,meta25270));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25259 = (function (f,ch,meta25260){
this.f = f;
this.ch = ch;
this.meta25260 = meta25260;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25259.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25261,meta25260__$1){
var self__ = this;
var _25261__$1 = this;
return (new cljs.core.async.t_cljs$core$async25259(self__.f,self__.ch,meta25260__$1));
}));

(cljs.core.async.t_cljs$core$async25259.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25261){
var self__ = this;
var _25261__$1 = this;
return self__.meta25260;
}));

(cljs.core.async.t_cljs$core$async25259.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25259.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async25259.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async25259.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25259.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async25269(self__.f,self__.ch,self__.meta25260,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__25278 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__25278) : self__.f.call(null, G__25278));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async25259.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25259.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async25259.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25260","meta25260",-1984793855,null)], null);
}));

(cljs.core.async.t_cljs$core$async25259.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25259.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25259");

(cljs.core.async.t_cljs$core$async25259.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async25259");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25259.
 */
cljs.core.async.__GT_t_cljs$core$async25259 = (function cljs$core$async$__GT_t_cljs$core$async25259(f,ch,meta25260){
return (new cljs.core.async.t_cljs$core$async25259(f,ch,meta25260));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async25259(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25279 = (function (f,ch,meta25280){
this.f = f;
this.ch = ch;
this.meta25280 = meta25280;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25279.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25281,meta25280__$1){
var self__ = this;
var _25281__$1 = this;
return (new cljs.core.async.t_cljs$core$async25279(self__.f,self__.ch,meta25280__$1));
}));

(cljs.core.async.t_cljs$core$async25279.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25281){
var self__ = this;
var _25281__$1 = this;
return self__.meta25280;
}));

(cljs.core.async.t_cljs$core$async25279.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25279.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async25279.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25279.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async25279.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25279.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async25279.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25280","meta25280",379587320,null)], null);
}));

(cljs.core.async.t_cljs$core$async25279.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25279.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25279");

(cljs.core.async.t_cljs$core$async25279.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async25279");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25279.
 */
cljs.core.async.__GT_t_cljs$core$async25279 = (function cljs$core$async$__GT_t_cljs$core$async25279(f,ch,meta25280){
return (new cljs.core.async.t_cljs$core$async25279(f,ch,meta25280));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async25279(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25282 = (function (p,ch,meta25283){
this.p = p;
this.ch = ch;
this.meta25283 = meta25283;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25282.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25284,meta25283__$1){
var self__ = this;
var _25284__$1 = this;
return (new cljs.core.async.t_cljs$core$async25282(self__.p,self__.ch,meta25283__$1));
}));

(cljs.core.async.t_cljs$core$async25282.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25284){
var self__ = this;
var _25284__$1 = this;
return self__.meta25283;
}));

(cljs.core.async.t_cljs$core$async25282.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25282.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async25282.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async25282.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25282.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async25282.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25282.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async25282.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25283","meta25283",1318522587,null)], null);
}));

(cljs.core.async.t_cljs$core$async25282.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25282.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25282");

(cljs.core.async.t_cljs$core$async25282.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async25282");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25282.
 */
cljs.core.async.__GT_t_cljs$core$async25282 = (function cljs$core$async$__GT_t_cljs$core$async25282(p,ch,meta25283){
return (new cljs.core.async.t_cljs$core$async25282(p,ch,meta25283));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async25282(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__25294 = arguments.length;
switch (G__25294) {
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

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__23457__auto___26448 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23458__auto__ = (function (){var switch__23318__auto__ = (function (state_25315){
var state_val_25316 = (state_25315[(1)]);
if((state_val_25316 === (7))){
var inst_25311 = (state_25315[(2)]);
var state_25315__$1 = state_25315;
var statearr_25317_26450 = state_25315__$1;
(statearr_25317_26450[(2)] = inst_25311);

(statearr_25317_26450[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (1))){
var state_25315__$1 = state_25315;
var statearr_25318_26451 = state_25315__$1;
(statearr_25318_26451[(2)] = null);

(statearr_25318_26451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (4))){
var inst_25297 = (state_25315[(7)]);
var inst_25297__$1 = (state_25315[(2)]);
var inst_25298 = (inst_25297__$1 == null);
var state_25315__$1 = (function (){var statearr_25319 = state_25315;
(statearr_25319[(7)] = inst_25297__$1);

return statearr_25319;
})();
if(cljs.core.truth_(inst_25298)){
var statearr_25320_26452 = state_25315__$1;
(statearr_25320_26452[(1)] = (5));

} else {
var statearr_25321_26453 = state_25315__$1;
(statearr_25321_26453[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (6))){
var inst_25297 = (state_25315[(7)]);
var inst_25302 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_25297) : p.call(null, inst_25297));
var state_25315__$1 = state_25315;
if(cljs.core.truth_(inst_25302)){
var statearr_25322_26458 = state_25315__$1;
(statearr_25322_26458[(1)] = (8));

} else {
var statearr_25323_26459 = state_25315__$1;
(statearr_25323_26459[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (3))){
var inst_25313 = (state_25315[(2)]);
var state_25315__$1 = state_25315;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25315__$1,inst_25313);
} else {
if((state_val_25316 === (2))){
var state_25315__$1 = state_25315;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25315__$1,(4),ch);
} else {
if((state_val_25316 === (11))){
var inst_25305 = (state_25315[(2)]);
var state_25315__$1 = state_25315;
var statearr_25324_26460 = state_25315__$1;
(statearr_25324_26460[(2)] = inst_25305);

(statearr_25324_26460[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (9))){
var state_25315__$1 = state_25315;
var statearr_25326_26461 = state_25315__$1;
(statearr_25326_26461[(2)] = null);

(statearr_25326_26461[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (5))){
var inst_25300 = cljs.core.async.close_BANG_(out);
var state_25315__$1 = state_25315;
var statearr_25328_26462 = state_25315__$1;
(statearr_25328_26462[(2)] = inst_25300);

(statearr_25328_26462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (10))){
var inst_25308 = (state_25315[(2)]);
var state_25315__$1 = (function (){var statearr_25329 = state_25315;
(statearr_25329[(8)] = inst_25308);

return statearr_25329;
})();
var statearr_25330_26463 = state_25315__$1;
(statearr_25330_26463[(2)] = null);

(statearr_25330_26463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (8))){
var inst_25297 = (state_25315[(7)]);
var state_25315__$1 = state_25315;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25315__$1,(11),out,inst_25297);
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
});
return (function() {
var cljs$core$async$state_machine__23319__auto__ = null;
var cljs$core$async$state_machine__23319__auto____0 = (function (){
var statearr_25331 = [null,null,null,null,null,null,null,null,null];
(statearr_25331[(0)] = cljs$core$async$state_machine__23319__auto__);

(statearr_25331[(1)] = (1));

return statearr_25331;
});
var cljs$core$async$state_machine__23319__auto____1 = (function (state_25315){
while(true){
var ret_value__23320__auto__ = (function (){try{while(true){
var result__23321__auto__ = switch__23318__auto__(state_25315);
if(cljs.core.keyword_identical_QMARK_(result__23321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23321__auto__;
}
break;
}
}catch (e25332){var ex__23322__auto__ = e25332;
var statearr_25333_26464 = state_25315;
(statearr_25333_26464[(2)] = ex__23322__auto__);


if(cljs.core.seq((state_25315[(4)]))){
var statearr_25334_26465 = state_25315;
(statearr_25334_26465[(1)] = cljs.core.first((state_25315[(4)])));

} else {
throw ex__23322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26466 = state_25315;
state_25315 = G__26466;
continue;
} else {
return ret_value__23320__auto__;
}
break;
}
});
cljs$core$async$state_machine__23319__auto__ = function(state_25315){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23319__auto____1.call(this,state_25315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23319__auto____0;
cljs$core$async$state_machine__23319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23319__auto____1;
return cljs$core$async$state_machine__23319__auto__;
})()
})();
var state__23459__auto__ = (function (){var statearr_25335 = f__23458__auto__();
(statearr_25335[(6)] = c__23457__auto___26448);

return statearr_25335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23459__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__25340 = arguments.length;
switch (G__25340) {
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

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__23457__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23458__auto__ = (function (){var switch__23318__auto__ = (function (state_25402){
var state_val_25403 = (state_25402[(1)]);
if((state_val_25403 === (7))){
var inst_25398 = (state_25402[(2)]);
var state_25402__$1 = state_25402;
var statearr_25404_26470 = state_25402__$1;
(statearr_25404_26470[(2)] = inst_25398);

(statearr_25404_26470[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25403 === (20))){
var inst_25368 = (state_25402[(7)]);
var inst_25379 = (state_25402[(2)]);
var inst_25380 = cljs.core.next(inst_25368);
var inst_25354 = inst_25380;
var inst_25355 = null;
var inst_25356 = (0);
var inst_25357 = (0);
var state_25402__$1 = (function (){var statearr_25405 = state_25402;
(statearr_25405[(8)] = inst_25379);

(statearr_25405[(9)] = inst_25356);

(statearr_25405[(10)] = inst_25357);

(statearr_25405[(11)] = inst_25355);

(statearr_25405[(12)] = inst_25354);

return statearr_25405;
})();
var statearr_25406_26471 = state_25402__$1;
(statearr_25406_26471[(2)] = null);

(statearr_25406_26471[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25403 === (1))){
var state_25402__$1 = state_25402;
var statearr_25407_26472 = state_25402__$1;
(statearr_25407_26472[(2)] = null);

(statearr_25407_26472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25403 === (4))){
var inst_25343 = (state_25402[(13)]);
var inst_25343__$1 = (state_25402[(2)]);
var inst_25344 = (inst_25343__$1 == null);
var state_25402__$1 = (function (){var statearr_25408 = state_25402;
(statearr_25408[(13)] = inst_25343__$1);

return statearr_25408;
})();
if(cljs.core.truth_(inst_25344)){
var statearr_25409_26473 = state_25402__$1;
(statearr_25409_26473[(1)] = (5));

} else {
var statearr_25410_26474 = state_25402__$1;
(statearr_25410_26474[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25403 === (15))){
var state_25402__$1 = state_25402;
var statearr_25414_26475 = state_25402__$1;
(statearr_25414_26475[(2)] = null);

(statearr_25414_26475[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25403 === (21))){
var state_25402__$1 = state_25402;
var statearr_25415_26476 = state_25402__$1;
(statearr_25415_26476[(2)] = null);

(statearr_25415_26476[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25403 === (13))){
var inst_25356 = (state_25402[(9)]);
var inst_25357 = (state_25402[(10)]);
var inst_25355 = (state_25402[(11)]);
var inst_25354 = (state_25402[(12)]);
var inst_25364 = (state_25402[(2)]);
var inst_25365 = (inst_25357 + (1));
var tmp25411 = inst_25356;
var tmp25412 = inst_25355;
var tmp25413 = inst_25354;
var inst_25354__$1 = tmp25413;
var inst_25355__$1 = tmp25412;
var inst_25356__$1 = tmp25411;
var inst_25357__$1 = inst_25365;
var state_25402__$1 = (function (){var statearr_25416 = state_25402;
(statearr_25416[(14)] = inst_25364);

(statearr_25416[(9)] = inst_25356__$1);

(statearr_25416[(10)] = inst_25357__$1);

(statearr_25416[(11)] = inst_25355__$1);

(statearr_25416[(12)] = inst_25354__$1);

return statearr_25416;
})();
var statearr_25417_26477 = state_25402__$1;
(statearr_25417_26477[(2)] = null);

(statearr_25417_26477[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25403 === (22))){
var state_25402__$1 = state_25402;
var statearr_25418_26478 = state_25402__$1;
(statearr_25418_26478[(2)] = null);

(statearr_25418_26478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25403 === (6))){
var inst_25343 = (state_25402[(13)]);
var inst_25352 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_25343) : f.call(null, inst_25343));
var inst_25353 = cljs.core.seq(inst_25352);
var inst_25354 = inst_25353;
var inst_25355 = null;
var inst_25356 = (0);
var inst_25357 = (0);
var state_25402__$1 = (function (){var statearr_25419 = state_25402;
(statearr_25419[(9)] = inst_25356);

(statearr_25419[(10)] = inst_25357);

(statearr_25419[(11)] = inst_25355);

(statearr_25419[(12)] = inst_25354);

return statearr_25419;
})();
var statearr_25420_26480 = state_25402__$1;
(statearr_25420_26480[(2)] = null);

(statearr_25420_26480[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25403 === (17))){
var inst_25368 = (state_25402[(7)]);
var inst_25372 = cljs.core.chunk_first(inst_25368);
var inst_25373 = cljs.core.chunk_rest(inst_25368);
var inst_25374 = cljs.core.count(inst_25372);
var inst_25354 = inst_25373;
var inst_25355 = inst_25372;
var inst_25356 = inst_25374;
var inst_25357 = (0);
var state_25402__$1 = (function (){var statearr_25421 = state_25402;
(statearr_25421[(9)] = inst_25356);

(statearr_25421[(10)] = inst_25357);

(statearr_25421[(11)] = inst_25355);

(statearr_25421[(12)] = inst_25354);

return statearr_25421;
})();
var statearr_25422_26481 = state_25402__$1;
(statearr_25422_26481[(2)] = null);

(statearr_25422_26481[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25403 === (3))){
var inst_25400 = (state_25402[(2)]);
var state_25402__$1 = state_25402;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25402__$1,inst_25400);
} else {
if((state_val_25403 === (12))){
var inst_25388 = (state_25402[(2)]);
var state_25402__$1 = state_25402;
var statearr_25423_26485 = state_25402__$1;
(statearr_25423_26485[(2)] = inst_25388);

(statearr_25423_26485[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25403 === (2))){
var state_25402__$1 = state_25402;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25402__$1,(4),in$);
} else {
if((state_val_25403 === (23))){
var inst_25396 = (state_25402[(2)]);
var state_25402__$1 = state_25402;
var statearr_25424_26486 = state_25402__$1;
(statearr_25424_26486[(2)] = inst_25396);

(statearr_25424_26486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25403 === (19))){
var inst_25383 = (state_25402[(2)]);
var state_25402__$1 = state_25402;
var statearr_25425_26487 = state_25402__$1;
(statearr_25425_26487[(2)] = inst_25383);

(statearr_25425_26487[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25403 === (11))){
var inst_25368 = (state_25402[(7)]);
var inst_25354 = (state_25402[(12)]);
var inst_25368__$1 = cljs.core.seq(inst_25354);
var state_25402__$1 = (function (){var statearr_25426 = state_25402;
(statearr_25426[(7)] = inst_25368__$1);

return statearr_25426;
})();
if(inst_25368__$1){
var statearr_25427_26488 = state_25402__$1;
(statearr_25427_26488[(1)] = (14));

} else {
var statearr_25428_26489 = state_25402__$1;
(statearr_25428_26489[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25403 === (9))){
var inst_25390 = (state_25402[(2)]);
var inst_25391 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_25402__$1 = (function (){var statearr_25429 = state_25402;
(statearr_25429[(15)] = inst_25390);

return statearr_25429;
})();
if(cljs.core.truth_(inst_25391)){
var statearr_25430_26490 = state_25402__$1;
(statearr_25430_26490[(1)] = (21));

} else {
var statearr_25431_26491 = state_25402__$1;
(statearr_25431_26491[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25403 === (5))){
var inst_25346 = cljs.core.async.close_BANG_(out);
var state_25402__$1 = state_25402;
var statearr_25432_26492 = state_25402__$1;
(statearr_25432_26492[(2)] = inst_25346);

(statearr_25432_26492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25403 === (14))){
var inst_25368 = (state_25402[(7)]);
var inst_25370 = cljs.core.chunked_seq_QMARK_(inst_25368);
var state_25402__$1 = state_25402;
if(inst_25370){
var statearr_25433_26493 = state_25402__$1;
(statearr_25433_26493[(1)] = (17));

} else {
var statearr_25434_26494 = state_25402__$1;
(statearr_25434_26494[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25403 === (16))){
var inst_25386 = (state_25402[(2)]);
var state_25402__$1 = state_25402;
var statearr_25435_26495 = state_25402__$1;
(statearr_25435_26495[(2)] = inst_25386);

(statearr_25435_26495[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25403 === (10))){
var inst_25357 = (state_25402[(10)]);
var inst_25355 = (state_25402[(11)]);
var inst_25362 = cljs.core._nth(inst_25355,inst_25357);
var state_25402__$1 = state_25402;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25402__$1,(13),out,inst_25362);
} else {
if((state_val_25403 === (18))){
var inst_25368 = (state_25402[(7)]);
var inst_25377 = cljs.core.first(inst_25368);
var state_25402__$1 = state_25402;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25402__$1,(20),out,inst_25377);
} else {
if((state_val_25403 === (8))){
var inst_25356 = (state_25402[(9)]);
var inst_25357 = (state_25402[(10)]);
var inst_25359 = (inst_25357 < inst_25356);
var inst_25360 = inst_25359;
var state_25402__$1 = state_25402;
if(cljs.core.truth_(inst_25360)){
var statearr_25436_26496 = state_25402__$1;
(statearr_25436_26496[(1)] = (10));

} else {
var statearr_25437_26497 = state_25402__$1;
(statearr_25437_26497[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23319__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23319__auto____0 = (function (){
var statearr_25438 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25438[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23319__auto__);

(statearr_25438[(1)] = (1));

return statearr_25438;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23319__auto____1 = (function (state_25402){
while(true){
var ret_value__23320__auto__ = (function (){try{while(true){
var result__23321__auto__ = switch__23318__auto__(state_25402);
if(cljs.core.keyword_identical_QMARK_(result__23321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23321__auto__;
}
break;
}
}catch (e25439){var ex__23322__auto__ = e25439;
var statearr_25440_26498 = state_25402;
(statearr_25440_26498[(2)] = ex__23322__auto__);


if(cljs.core.seq((state_25402[(4)]))){
var statearr_25441_26499 = state_25402;
(statearr_25441_26499[(1)] = cljs.core.first((state_25402[(4)])));

} else {
throw ex__23322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26500 = state_25402;
state_25402 = G__26500;
continue;
} else {
return ret_value__23320__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23319__auto__ = function(state_25402){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23319__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23319__auto____1.call(this,state_25402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23319__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23319__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23319__auto__;
})()
})();
var state__23459__auto__ = (function (){var statearr_25442 = f__23458__auto__();
(statearr_25442[(6)] = c__23457__auto__);

return statearr_25442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23459__auto__);
}));

return c__23457__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__25444 = arguments.length;
switch (G__25444) {
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

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__25446 = arguments.length;
switch (G__25446) {
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

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__25449 = arguments.length;
switch (G__25449) {
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

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__23457__auto___26506 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23458__auto__ = (function (){var switch__23318__auto__ = (function (state_25473){
var state_val_25474 = (state_25473[(1)]);
if((state_val_25474 === (7))){
var inst_25468 = (state_25473[(2)]);
var state_25473__$1 = state_25473;
var statearr_25475_26510 = state_25473__$1;
(statearr_25475_26510[(2)] = inst_25468);

(statearr_25475_26510[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25474 === (1))){
var inst_25450 = null;
var state_25473__$1 = (function (){var statearr_25479 = state_25473;
(statearr_25479[(7)] = inst_25450);

return statearr_25479;
})();
var statearr_25480_26511 = state_25473__$1;
(statearr_25480_26511[(2)] = null);

(statearr_25480_26511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25474 === (4))){
var inst_25453 = (state_25473[(8)]);
var inst_25453__$1 = (state_25473[(2)]);
var inst_25454 = (inst_25453__$1 == null);
var inst_25455 = cljs.core.not(inst_25454);
var state_25473__$1 = (function (){var statearr_25481 = state_25473;
(statearr_25481[(8)] = inst_25453__$1);

return statearr_25481;
})();
if(inst_25455){
var statearr_25482_26512 = state_25473__$1;
(statearr_25482_26512[(1)] = (5));

} else {
var statearr_25483_26513 = state_25473__$1;
(statearr_25483_26513[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25474 === (6))){
var state_25473__$1 = state_25473;
var statearr_25484_26514 = state_25473__$1;
(statearr_25484_26514[(2)] = null);

(statearr_25484_26514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25474 === (3))){
var inst_25470 = (state_25473[(2)]);
var inst_25471 = cljs.core.async.close_BANG_(out);
var state_25473__$1 = (function (){var statearr_25485 = state_25473;
(statearr_25485[(9)] = inst_25470);

return statearr_25485;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_25473__$1,inst_25471);
} else {
if((state_val_25474 === (2))){
var state_25473__$1 = state_25473;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25473__$1,(4),ch);
} else {
if((state_val_25474 === (11))){
var inst_25453 = (state_25473[(8)]);
var inst_25462 = (state_25473[(2)]);
var inst_25450 = inst_25453;
var state_25473__$1 = (function (){var statearr_25486 = state_25473;
(statearr_25486[(7)] = inst_25450);

(statearr_25486[(10)] = inst_25462);

return statearr_25486;
})();
var statearr_25487_26515 = state_25473__$1;
(statearr_25487_26515[(2)] = null);

(statearr_25487_26515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25474 === (9))){
var inst_25453 = (state_25473[(8)]);
var state_25473__$1 = state_25473;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25473__$1,(11),out,inst_25453);
} else {
if((state_val_25474 === (5))){
var inst_25450 = (state_25473[(7)]);
var inst_25453 = (state_25473[(8)]);
var inst_25457 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25453,inst_25450);
var state_25473__$1 = state_25473;
if(inst_25457){
var statearr_25489_26516 = state_25473__$1;
(statearr_25489_26516[(1)] = (8));

} else {
var statearr_25490_26517 = state_25473__$1;
(statearr_25490_26517[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25474 === (10))){
var inst_25465 = (state_25473[(2)]);
var state_25473__$1 = state_25473;
var statearr_25491_26518 = state_25473__$1;
(statearr_25491_26518[(2)] = inst_25465);

(statearr_25491_26518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25474 === (8))){
var inst_25450 = (state_25473[(7)]);
var tmp25488 = inst_25450;
var inst_25450__$1 = tmp25488;
var state_25473__$1 = (function (){var statearr_25492 = state_25473;
(statearr_25492[(7)] = inst_25450__$1);

return statearr_25492;
})();
var statearr_25493_26522 = state_25473__$1;
(statearr_25493_26522[(2)] = null);

(statearr_25493_26522[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__23319__auto__ = null;
var cljs$core$async$state_machine__23319__auto____0 = (function (){
var statearr_25494 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25494[(0)] = cljs$core$async$state_machine__23319__auto__);

(statearr_25494[(1)] = (1));

return statearr_25494;
});
var cljs$core$async$state_machine__23319__auto____1 = (function (state_25473){
while(true){
var ret_value__23320__auto__ = (function (){try{while(true){
var result__23321__auto__ = switch__23318__auto__(state_25473);
if(cljs.core.keyword_identical_QMARK_(result__23321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23321__auto__;
}
break;
}
}catch (e25496){var ex__23322__auto__ = e25496;
var statearr_25497_26527 = state_25473;
(statearr_25497_26527[(2)] = ex__23322__auto__);


if(cljs.core.seq((state_25473[(4)]))){
var statearr_25501_26528 = state_25473;
(statearr_25501_26528[(1)] = cljs.core.first((state_25473[(4)])));

} else {
throw ex__23322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26529 = state_25473;
state_25473 = G__26529;
continue;
} else {
return ret_value__23320__auto__;
}
break;
}
});
cljs$core$async$state_machine__23319__auto__ = function(state_25473){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23319__auto____1.call(this,state_25473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23319__auto____0;
cljs$core$async$state_machine__23319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23319__auto____1;
return cljs$core$async$state_machine__23319__auto__;
})()
})();
var state__23459__auto__ = (function (){var statearr_25502 = f__23458__auto__();
(statearr_25502[(6)] = c__23457__auto___26506);

return statearr_25502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23459__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__25504 = arguments.length;
switch (G__25504) {
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

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__23457__auto___26532 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23458__auto__ = (function (){var switch__23318__auto__ = (function (state_25542){
var state_val_25543 = (state_25542[(1)]);
if((state_val_25543 === (7))){
var inst_25538 = (state_25542[(2)]);
var state_25542__$1 = state_25542;
var statearr_25544_26533 = state_25542__$1;
(statearr_25544_26533[(2)] = inst_25538);

(statearr_25544_26533[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25543 === (1))){
var inst_25505 = (new Array(n));
var inst_25506 = inst_25505;
var inst_25507 = (0);
var state_25542__$1 = (function (){var statearr_25545 = state_25542;
(statearr_25545[(7)] = inst_25507);

(statearr_25545[(8)] = inst_25506);

return statearr_25545;
})();
var statearr_25546_26534 = state_25542__$1;
(statearr_25546_26534[(2)] = null);

(statearr_25546_26534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25543 === (4))){
var inst_25510 = (state_25542[(9)]);
var inst_25510__$1 = (state_25542[(2)]);
var inst_25511 = (inst_25510__$1 == null);
var inst_25512 = cljs.core.not(inst_25511);
var state_25542__$1 = (function (){var statearr_25547 = state_25542;
(statearr_25547[(9)] = inst_25510__$1);

return statearr_25547;
})();
if(inst_25512){
var statearr_25548_26536 = state_25542__$1;
(statearr_25548_26536[(1)] = (5));

} else {
var statearr_25549_26537 = state_25542__$1;
(statearr_25549_26537[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25543 === (15))){
var inst_25532 = (state_25542[(2)]);
var state_25542__$1 = state_25542;
var statearr_25550_26538 = state_25542__$1;
(statearr_25550_26538[(2)] = inst_25532);

(statearr_25550_26538[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25543 === (13))){
var state_25542__$1 = state_25542;
var statearr_25551_26539 = state_25542__$1;
(statearr_25551_26539[(2)] = null);

(statearr_25551_26539[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25543 === (6))){
var inst_25507 = (state_25542[(7)]);
var inst_25528 = (inst_25507 > (0));
var state_25542__$1 = state_25542;
if(cljs.core.truth_(inst_25528)){
var statearr_25552_26540 = state_25542__$1;
(statearr_25552_26540[(1)] = (12));

} else {
var statearr_25553_26541 = state_25542__$1;
(statearr_25553_26541[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25543 === (3))){
var inst_25540 = (state_25542[(2)]);
var state_25542__$1 = state_25542;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25542__$1,inst_25540);
} else {
if((state_val_25543 === (12))){
var inst_25506 = (state_25542[(8)]);
var inst_25530 = cljs.core.vec(inst_25506);
var state_25542__$1 = state_25542;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25542__$1,(15),out,inst_25530);
} else {
if((state_val_25543 === (2))){
var state_25542__$1 = state_25542;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25542__$1,(4),ch);
} else {
if((state_val_25543 === (11))){
var inst_25522 = (state_25542[(2)]);
var inst_25523 = (new Array(n));
var inst_25506 = inst_25523;
var inst_25507 = (0);
var state_25542__$1 = (function (){var statearr_25554 = state_25542;
(statearr_25554[(7)] = inst_25507);

(statearr_25554[(10)] = inst_25522);

(statearr_25554[(8)] = inst_25506);

return statearr_25554;
})();
var statearr_25555_26542 = state_25542__$1;
(statearr_25555_26542[(2)] = null);

(statearr_25555_26542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25543 === (9))){
var inst_25506 = (state_25542[(8)]);
var inst_25520 = cljs.core.vec(inst_25506);
var state_25542__$1 = state_25542;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25542__$1,(11),out,inst_25520);
} else {
if((state_val_25543 === (5))){
var inst_25507 = (state_25542[(7)]);
var inst_25510 = (state_25542[(9)]);
var inst_25515 = (state_25542[(11)]);
var inst_25506 = (state_25542[(8)]);
var inst_25514 = (inst_25506[inst_25507] = inst_25510);
var inst_25515__$1 = (inst_25507 + (1));
var inst_25516 = (inst_25515__$1 < n);
var state_25542__$1 = (function (){var statearr_25556 = state_25542;
(statearr_25556[(12)] = inst_25514);

(statearr_25556[(11)] = inst_25515__$1);

return statearr_25556;
})();
if(cljs.core.truth_(inst_25516)){
var statearr_25557_26547 = state_25542__$1;
(statearr_25557_26547[(1)] = (8));

} else {
var statearr_25558_26548 = state_25542__$1;
(statearr_25558_26548[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25543 === (14))){
var inst_25535 = (state_25542[(2)]);
var inst_25536 = cljs.core.async.close_BANG_(out);
var state_25542__$1 = (function (){var statearr_25560 = state_25542;
(statearr_25560[(13)] = inst_25535);

return statearr_25560;
})();
var statearr_25561_26549 = state_25542__$1;
(statearr_25561_26549[(2)] = inst_25536);

(statearr_25561_26549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25543 === (10))){
var inst_25526 = (state_25542[(2)]);
var state_25542__$1 = state_25542;
var statearr_25570_26550 = state_25542__$1;
(statearr_25570_26550[(2)] = inst_25526);

(statearr_25570_26550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25543 === (8))){
var inst_25515 = (state_25542[(11)]);
var inst_25506 = (state_25542[(8)]);
var tmp25559 = inst_25506;
var inst_25506__$1 = tmp25559;
var inst_25507 = inst_25515;
var state_25542__$1 = (function (){var statearr_25577 = state_25542;
(statearr_25577[(7)] = inst_25507);

(statearr_25577[(8)] = inst_25506__$1);

return statearr_25577;
})();
var statearr_25578_26551 = state_25542__$1;
(statearr_25578_26551[(2)] = null);

(statearr_25578_26551[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__23319__auto__ = null;
var cljs$core$async$state_machine__23319__auto____0 = (function (){
var statearr_25579 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25579[(0)] = cljs$core$async$state_machine__23319__auto__);

(statearr_25579[(1)] = (1));

return statearr_25579;
});
var cljs$core$async$state_machine__23319__auto____1 = (function (state_25542){
while(true){
var ret_value__23320__auto__ = (function (){try{while(true){
var result__23321__auto__ = switch__23318__auto__(state_25542);
if(cljs.core.keyword_identical_QMARK_(result__23321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23321__auto__;
}
break;
}
}catch (e25586){var ex__23322__auto__ = e25586;
var statearr_25587_26553 = state_25542;
(statearr_25587_26553[(2)] = ex__23322__auto__);


if(cljs.core.seq((state_25542[(4)]))){
var statearr_25588_26554 = state_25542;
(statearr_25588_26554[(1)] = cljs.core.first((state_25542[(4)])));

} else {
throw ex__23322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26555 = state_25542;
state_25542 = G__26555;
continue;
} else {
return ret_value__23320__auto__;
}
break;
}
});
cljs$core$async$state_machine__23319__auto__ = function(state_25542){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23319__auto____1.call(this,state_25542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23319__auto____0;
cljs$core$async$state_machine__23319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23319__auto____1;
return cljs$core$async$state_machine__23319__auto__;
})()
})();
var state__23459__auto__ = (function (){var statearr_25589 = f__23458__auto__();
(statearr_25589[(6)] = c__23457__auto___26532);

return statearr_25589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23459__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__25591 = arguments.length;
switch (G__25591) {
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

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__23457__auto___26557 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23458__auto__ = (function (){var switch__23318__auto__ = (function (state_25658){
var state_val_25659 = (state_25658[(1)]);
if((state_val_25659 === (7))){
var inst_25654 = (state_25658[(2)]);
var state_25658__$1 = state_25658;
var statearr_25660_26558 = state_25658__$1;
(statearr_25660_26558[(2)] = inst_25654);

(statearr_25660_26558[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (1))){
var inst_25612 = [];
var inst_25613 = inst_25612;
var inst_25614 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25658__$1 = (function (){var statearr_25662 = state_25658;
(statearr_25662[(7)] = inst_25613);

(statearr_25662[(8)] = inst_25614);

return statearr_25662;
})();
var statearr_25663_26559 = state_25658__$1;
(statearr_25663_26559[(2)] = null);

(statearr_25663_26559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (4))){
var inst_25617 = (state_25658[(9)]);
var inst_25617__$1 = (state_25658[(2)]);
var inst_25618 = (inst_25617__$1 == null);
var inst_25619 = cljs.core.not(inst_25618);
var state_25658__$1 = (function (){var statearr_25664 = state_25658;
(statearr_25664[(9)] = inst_25617__$1);

return statearr_25664;
})();
if(inst_25619){
var statearr_25665_26560 = state_25658__$1;
(statearr_25665_26560[(1)] = (5));

} else {
var statearr_25666_26561 = state_25658__$1;
(statearr_25666_26561[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (15))){
var inst_25613 = (state_25658[(7)]);
var inst_25644 = cljs.core.vec(inst_25613);
var state_25658__$1 = state_25658;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25658__$1,(18),out,inst_25644);
} else {
if((state_val_25659 === (13))){
var inst_25639 = (state_25658[(2)]);
var state_25658__$1 = state_25658;
var statearr_25667_26562 = state_25658__$1;
(statearr_25667_26562[(2)] = inst_25639);

(statearr_25667_26562[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (6))){
var inst_25613 = (state_25658[(7)]);
var inst_25641 = inst_25613.length;
var inst_25642 = (inst_25641 > (0));
var state_25658__$1 = state_25658;
if(cljs.core.truth_(inst_25642)){
var statearr_25668_26563 = state_25658__$1;
(statearr_25668_26563[(1)] = (15));

} else {
var statearr_25669_26564 = state_25658__$1;
(statearr_25669_26564[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (17))){
var inst_25651 = (state_25658[(2)]);
var inst_25652 = cljs.core.async.close_BANG_(out);
var state_25658__$1 = (function (){var statearr_25670 = state_25658;
(statearr_25670[(10)] = inst_25651);

return statearr_25670;
})();
var statearr_25671_26565 = state_25658__$1;
(statearr_25671_26565[(2)] = inst_25652);

(statearr_25671_26565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (3))){
var inst_25656 = (state_25658[(2)]);
var state_25658__$1 = state_25658;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25658__$1,inst_25656);
} else {
if((state_val_25659 === (12))){
var inst_25613 = (state_25658[(7)]);
var inst_25632 = cljs.core.vec(inst_25613);
var state_25658__$1 = state_25658;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25658__$1,(14),out,inst_25632);
} else {
if((state_val_25659 === (2))){
var state_25658__$1 = state_25658;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25658__$1,(4),ch);
} else {
if((state_val_25659 === (11))){
var inst_25613 = (state_25658[(7)]);
var inst_25621 = (state_25658[(11)]);
var inst_25617 = (state_25658[(9)]);
var inst_25629 = inst_25613.push(inst_25617);
var tmp25672 = inst_25613;
var inst_25613__$1 = tmp25672;
var inst_25614 = inst_25621;
var state_25658__$1 = (function (){var statearr_25676 = state_25658;
(statearr_25676[(7)] = inst_25613__$1);

(statearr_25676[(12)] = inst_25629);

(statearr_25676[(8)] = inst_25614);

return statearr_25676;
})();
var statearr_25677_26569 = state_25658__$1;
(statearr_25677_26569[(2)] = null);

(statearr_25677_26569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (9))){
var inst_25614 = (state_25658[(8)]);
var inst_25625 = cljs.core.keyword_identical_QMARK_(inst_25614,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_25658__$1 = state_25658;
var statearr_25678_26570 = state_25658__$1;
(statearr_25678_26570[(2)] = inst_25625);

(statearr_25678_26570[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (5))){
var inst_25622 = (state_25658[(13)]);
var inst_25614 = (state_25658[(8)]);
var inst_25621 = (state_25658[(11)]);
var inst_25617 = (state_25658[(9)]);
var inst_25621__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_25617) : f.call(null, inst_25617));
var inst_25622__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25621__$1,inst_25614);
var state_25658__$1 = (function (){var statearr_25679 = state_25658;
(statearr_25679[(13)] = inst_25622__$1);

(statearr_25679[(11)] = inst_25621__$1);

return statearr_25679;
})();
if(inst_25622__$1){
var statearr_25680_26571 = state_25658__$1;
(statearr_25680_26571[(1)] = (8));

} else {
var statearr_25681_26572 = state_25658__$1;
(statearr_25681_26572[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (14))){
var inst_25621 = (state_25658[(11)]);
var inst_25617 = (state_25658[(9)]);
var inst_25634 = (state_25658[(2)]);
var inst_25635 = [];
var inst_25636 = inst_25635.push(inst_25617);
var inst_25613 = inst_25635;
var inst_25614 = inst_25621;
var state_25658__$1 = (function (){var statearr_25682 = state_25658;
(statearr_25682[(14)] = inst_25634);

(statearr_25682[(7)] = inst_25613);

(statearr_25682[(8)] = inst_25614);

(statearr_25682[(15)] = inst_25636);

return statearr_25682;
})();
var statearr_25683_26573 = state_25658__$1;
(statearr_25683_26573[(2)] = null);

(statearr_25683_26573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (16))){
var state_25658__$1 = state_25658;
var statearr_25684_26574 = state_25658__$1;
(statearr_25684_26574[(2)] = null);

(statearr_25684_26574[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (10))){
var inst_25627 = (state_25658[(2)]);
var state_25658__$1 = state_25658;
if(cljs.core.truth_(inst_25627)){
var statearr_25685_26575 = state_25658__$1;
(statearr_25685_26575[(1)] = (11));

} else {
var statearr_25686_26576 = state_25658__$1;
(statearr_25686_26576[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (18))){
var inst_25647 = (state_25658[(2)]);
var state_25658__$1 = state_25658;
var statearr_25687_26577 = state_25658__$1;
(statearr_25687_26577[(2)] = inst_25647);

(statearr_25687_26577[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (8))){
var inst_25622 = (state_25658[(13)]);
var state_25658__$1 = state_25658;
var statearr_25688_26578 = state_25658__$1;
(statearr_25688_26578[(2)] = inst_25622);

(statearr_25688_26578[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__23319__auto__ = null;
var cljs$core$async$state_machine__23319__auto____0 = (function (){
var statearr_25689 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25689[(0)] = cljs$core$async$state_machine__23319__auto__);

(statearr_25689[(1)] = (1));

return statearr_25689;
});
var cljs$core$async$state_machine__23319__auto____1 = (function (state_25658){
while(true){
var ret_value__23320__auto__ = (function (){try{while(true){
var result__23321__auto__ = switch__23318__auto__(state_25658);
if(cljs.core.keyword_identical_QMARK_(result__23321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23321__auto__;
}
break;
}
}catch (e25690){var ex__23322__auto__ = e25690;
var statearr_25691_26580 = state_25658;
(statearr_25691_26580[(2)] = ex__23322__auto__);


if(cljs.core.seq((state_25658[(4)]))){
var statearr_25692_26581 = state_25658;
(statearr_25692_26581[(1)] = cljs.core.first((state_25658[(4)])));

} else {
throw ex__23322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26582 = state_25658;
state_25658 = G__26582;
continue;
} else {
return ret_value__23320__auto__;
}
break;
}
});
cljs$core$async$state_machine__23319__auto__ = function(state_25658){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23319__auto____1.call(this,state_25658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23319__auto____0;
cljs$core$async$state_machine__23319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23319__auto____1;
return cljs$core$async$state_machine__23319__auto__;
})()
})();
var state__23459__auto__ = (function (){var statearr_25693 = f__23458__auto__();
(statearr_25693[(6)] = c__23457__auto___26557);

return statearr_25693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23459__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
