goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__23537){
var map__23540 = p__23537;
var map__23540__$1 = cljs.core.__destructure_map(map__23540);
var runtime = map__23540__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23540__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_23650 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_23650)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__23542 = runtime;
var G__23543 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_23650);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__23542,G__23543) : shadow.remote.runtime.shared.process.call(null, G__23542,G__23543));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__23544,res){
var map__23545 = p__23544;
var map__23545__$1 = cljs.core.__destructure_map(map__23545);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23545__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23545__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__23546 = res;
var G__23546__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23546,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__23546);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23546__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__23546__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__23548 = arguments.length;
switch (G__23548) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__23549,msg,handlers,timeout_after_ms){
var map__23550 = p__23549;
var map__23550__$1 = cljs.core.__destructure_map(map__23550);
var runtime = map__23550__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23550__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___23656 = arguments.length;
var i__5727__auto___23657 = (0);
while(true){
if((i__5727__auto___23657 < len__5726__auto___23656)){
args__5732__auto__.push((arguments[i__5727__auto___23657]));

var G__23658 = (i__5727__auto___23657 + (1));
i__5727__auto___23657 = G__23658;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__23560,ev,args){
var map__23561 = p__23560;
var map__23561__$1 = cljs.core.__destructure_map(map__23561);
var runtime = map__23561__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23561__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__23562 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__23565 = null;
var count__23566 = (0);
var i__23567 = (0);
while(true){
if((i__23567 < count__23566)){
var ext = chunk__23565.cljs$core$IIndexed$_nth$arity$2(null, i__23567);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__23659 = seq__23562;
var G__23660 = chunk__23565;
var G__23661 = count__23566;
var G__23662 = (i__23567 + (1));
seq__23562 = G__23659;
chunk__23565 = G__23660;
count__23566 = G__23661;
i__23567 = G__23662;
continue;
} else {
var G__23663 = seq__23562;
var G__23664 = chunk__23565;
var G__23665 = count__23566;
var G__23666 = (i__23567 + (1));
seq__23562 = G__23663;
chunk__23565 = G__23664;
count__23566 = G__23665;
i__23567 = G__23666;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23562);
if(temp__5804__auto__){
var seq__23562__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23562__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__23562__$1);
var G__23667 = cljs.core.chunk_rest(seq__23562__$1);
var G__23668 = c__5525__auto__;
var G__23669 = cljs.core.count(c__5525__auto__);
var G__23670 = (0);
seq__23562 = G__23667;
chunk__23565 = G__23668;
count__23566 = G__23669;
i__23567 = G__23670;
continue;
} else {
var ext = cljs.core.first(seq__23562__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__23673 = cljs.core.next(seq__23562__$1);
var G__23674 = null;
var G__23675 = (0);
var G__23676 = (0);
seq__23562 = G__23673;
chunk__23565 = G__23674;
count__23566 = G__23675;
i__23567 = G__23676;
continue;
} else {
var G__23677 = cljs.core.next(seq__23562__$1);
var G__23678 = null;
var G__23679 = (0);
var G__23680 = (0);
seq__23562 = G__23677;
chunk__23565 = G__23678;
count__23566 = G__23679;
i__23567 = G__23680;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq23551){
var G__23552 = cljs.core.first(seq23551);
var seq23551__$1 = cljs.core.next(seq23551);
var G__23553 = cljs.core.first(seq23551__$1);
var seq23551__$2 = cljs.core.next(seq23551__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23552,G__23553,seq23551__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__23577,p__23578){
var map__23579 = p__23577;
var map__23579__$1 = cljs.core.__destructure_map(map__23579);
var runtime = map__23579__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23579__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__23580 = p__23578;
var map__23580__$1 = cljs.core.__destructure_map(map__23580);
var msg = map__23580__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23580__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__23582 = cljs.core.deref(state_ref);
var map__23582__$1 = cljs.core.__destructure_map(map__23582);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23582__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23582__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__23587,msg){
var map__23588 = p__23587;
var map__23588__$1 = cljs.core.__destructure_map(map__23588);
var runtime = map__23588__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23588__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__23593,key,p__23594){
var map__23595 = p__23593;
var map__23595__$1 = cljs.core.__destructure_map(map__23595);
var state = map__23595__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23595__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__23596 = p__23594;
var map__23596__$1 = cljs.core.__destructure_map(map__23596);
var spec = map__23596__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23596__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23596__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__23597,key,spec){
var map__23598 = p__23597;
var map__23598__$1 = cljs.core.__destructure_map(map__23598);
var runtime = map__23598__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23598__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5808__auto___23703 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5808__auto___23703 == null)){
} else {
var on_welcome_23704 = temp__5808__auto___23703;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_23704.cljs$core$IFn$_invoke$arity$0 ? on_welcome_23704.cljs$core$IFn$_invoke$arity$0() : on_welcome_23704.call(null, ));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__23601_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__23601_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__23602_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__23602_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__23603_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__23603_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__23604_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__23604_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__23605_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__23605_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__23608,key){
var map__23609 = p__23608;
var map__23609__$1 = cljs.core.__destructure_map(map__23609);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23609__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__23610,msg){
var map__23613 = p__23610;
var map__23613__$1 = cljs.core.__destructure_map(map__23613);
var runtime = map__23613__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23613__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__23614,p__23615){
var map__23617 = p__23614;
var map__23617__$1 = cljs.core.__destructure_map(map__23617);
var runtime = map__23617__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23617__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__23618 = p__23615;
var map__23618__$1 = cljs.core.__destructure_map(map__23618);
var msg = map__23618__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23618__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23618__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null, msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__23622 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__23624 = null;
var count__23625 = (0);
var i__23626 = (0);
while(true){
if((i__23626 < count__23625)){
var map__23639 = chunk__23624.cljs$core$IIndexed$_nth$arity$2(null, i__23626);
var map__23639__$1 = cljs.core.__destructure_map(map__23639);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23639__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__23711 = seq__23622;
var G__23712 = chunk__23624;
var G__23713 = count__23625;
var G__23714 = (i__23626 + (1));
seq__23622 = G__23711;
chunk__23624 = G__23712;
count__23625 = G__23713;
i__23626 = G__23714;
continue;
} else {
var G__23715 = seq__23622;
var G__23716 = chunk__23624;
var G__23717 = count__23625;
var G__23718 = (i__23626 + (1));
seq__23622 = G__23715;
chunk__23624 = G__23716;
count__23625 = G__23717;
i__23626 = G__23718;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23622);
if(temp__5804__auto__){
var seq__23622__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23622__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__23622__$1);
var G__23719 = cljs.core.chunk_rest(seq__23622__$1);
var G__23720 = c__5525__auto__;
var G__23721 = cljs.core.count(c__5525__auto__);
var G__23722 = (0);
seq__23622 = G__23719;
chunk__23624 = G__23720;
count__23625 = G__23721;
i__23626 = G__23722;
continue;
} else {
var map__23643 = cljs.core.first(seq__23622__$1);
var map__23643__$1 = cljs.core.__destructure_map(map__23643);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23643__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__23724 = cljs.core.next(seq__23622__$1);
var G__23725 = null;
var G__23726 = (0);
var G__23727 = (0);
seq__23622 = G__23724;
chunk__23624 = G__23725;
count__23625 = G__23726;
i__23626 = G__23727;
continue;
} else {
var G__23728 = cljs.core.next(seq__23622__$1);
var G__23729 = null;
var G__23730 = (0);
var G__23731 = (0);
seq__23622 = G__23728;
chunk__23624 = G__23729;
count__23625 = G__23730;
i__23626 = G__23731;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
