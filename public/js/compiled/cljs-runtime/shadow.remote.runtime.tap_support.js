goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__27544,p__27545){
var map__27546 = p__27544;
var map__27546__$1 = cljs.core.__destructure_map(map__27546);
var svc = map__27546__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27546__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27546__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27546__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__27547 = p__27545;
var map__27547__$1 = cljs.core.__destructure_map(map__27547);
var msg = map__27547__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27547__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27547__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27547__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27547__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__27549,p__27550){
var map__27551 = p__27549;
var map__27551__$1 = cljs.core.__destructure_map(map__27551);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27551__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__27552 = p__27550;
var map__27552__$1 = cljs.core.__destructure_map(map__27552);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27552__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__27554,p__27555){
var map__27556 = p__27554;
var map__27556__$1 = cljs.core.__destructure_map(map__27556);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27556__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27556__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__27557 = p__27555;
var map__27557__$1 = cljs.core.__destructure_map(map__27557);
var msg = map__27557__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27557__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__27580,tid){
var map__27581 = p__27580;
var map__27581__$1 = cljs.core.__destructure_map(map__27581);
var svc = map__27581__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27581__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__27586 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__27587 = null;
var count__27588 = (0);
var i__27589 = (0);
while(true){
if((i__27589 < count__27588)){
var vec__27596 = chunk__27587.cljs$core$IIndexed$_nth$arity$2(null, i__27589);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27596,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27596,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__27621 = seq__27586;
var G__27622 = chunk__27587;
var G__27623 = count__27588;
var G__27624 = (i__27589 + (1));
seq__27586 = G__27621;
chunk__27587 = G__27622;
count__27588 = G__27623;
i__27589 = G__27624;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__27586);
if(temp__5804__auto__){
var seq__27586__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27586__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__27586__$1);
var G__27625 = cljs.core.chunk_rest(seq__27586__$1);
var G__27626 = c__5525__auto__;
var G__27627 = cljs.core.count(c__5525__auto__);
var G__27628 = (0);
seq__27586 = G__27625;
chunk__27587 = G__27626;
count__27588 = G__27627;
i__27589 = G__27628;
continue;
} else {
var vec__27600 = cljs.core.first(seq__27586__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27600,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27600,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__27629 = cljs.core.next(seq__27586__$1);
var G__27630 = null;
var G__27631 = (0);
var G__27632 = (0);
seq__27586 = G__27629;
chunk__27587 = G__27630;
count__27588 = G__27631;
i__27589 = G__27632;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__27582_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__27582_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__27583_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__27583_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__27584_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__27584_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__27585_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__27585_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__27607){
var map__27608 = p__27607;
var map__27608__$1 = cljs.core.__destructure_map(map__27608);
var svc = map__27608__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27608__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27608__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
