goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28583 = arguments.length;
var i__5727__auto___28584 = (0);
while(true){
if((i__5727__auto___28584 < len__5726__auto___28583)){
args__5732__auto__.push((arguments[i__5727__auto___28584]));

var G__28585 = (i__5727__auto___28584 + (1));
i__5727__auto___28584 = G__28585;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq28298){
var G__28299 = cljs.core.first(seq28298);
var seq28298__$1 = cljs.core.next(seq28298);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28299,seq28298__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__28303 = cljs.core.seq(sources);
var chunk__28304 = null;
var count__28305 = (0);
var i__28306 = (0);
while(true){
if((i__28306 < count__28305)){
var map__28313 = chunk__28304.cljs$core$IIndexed$_nth$arity$2(null, i__28306);
var map__28313__$1 = cljs.core.__destructure_map(map__28313);
var src = map__28313__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28313__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28313__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28313__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28313__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e28314){var e_28586 = e28314;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_28586);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_28586.message)].join('')));
}

var G__28587 = seq__28303;
var G__28588 = chunk__28304;
var G__28589 = count__28305;
var G__28590 = (i__28306 + (1));
seq__28303 = G__28587;
chunk__28304 = G__28588;
count__28305 = G__28589;
i__28306 = G__28590;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28303);
if(temp__5804__auto__){
var seq__28303__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28303__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__28303__$1);
var G__28591 = cljs.core.chunk_rest(seq__28303__$1);
var G__28592 = c__5525__auto__;
var G__28593 = cljs.core.count(c__5525__auto__);
var G__28594 = (0);
seq__28303 = G__28591;
chunk__28304 = G__28592;
count__28305 = G__28593;
i__28306 = G__28594;
continue;
} else {
var map__28315 = cljs.core.first(seq__28303__$1);
var map__28315__$1 = cljs.core.__destructure_map(map__28315);
var src = map__28315__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28315__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28315__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28315__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28315__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e28317){var e_28595 = e28317;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_28595);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_28595.message)].join('')));
}

var G__28596 = cljs.core.next(seq__28303__$1);
var G__28597 = null;
var G__28598 = (0);
var G__28599 = (0);
seq__28303 = G__28596;
chunk__28304 = G__28597;
count__28305 = G__28598;
i__28306 = G__28599;
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
return null;
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
var seq__28319 = cljs.core.seq(js_requires);
var chunk__28320 = null;
var count__28321 = (0);
var i__28322 = (0);
while(true){
if((i__28322 < count__28321)){
var js_ns = chunk__28320.cljs$core$IIndexed$_nth$arity$2(null, i__28322);
var require_str_28600 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_28600);


var G__28601 = seq__28319;
var G__28602 = chunk__28320;
var G__28603 = count__28321;
var G__28604 = (i__28322 + (1));
seq__28319 = G__28601;
chunk__28320 = G__28602;
count__28321 = G__28603;
i__28322 = G__28604;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28319);
if(temp__5804__auto__){
var seq__28319__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28319__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__28319__$1);
var G__28605 = cljs.core.chunk_rest(seq__28319__$1);
var G__28606 = c__5525__auto__;
var G__28607 = cljs.core.count(c__5525__auto__);
var G__28608 = (0);
seq__28319 = G__28605;
chunk__28320 = G__28606;
count__28321 = G__28607;
i__28322 = G__28608;
continue;
} else {
var js_ns = cljs.core.first(seq__28319__$1);
var require_str_28609 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_28609);


var G__28610 = cljs.core.next(seq__28319__$1);
var G__28611 = null;
var G__28612 = (0);
var G__28613 = (0);
seq__28319 = G__28610;
chunk__28320 = G__28611;
count__28321 = G__28612;
i__28322 = G__28613;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__28324){
var map__28325 = p__28324;
var map__28325__$1 = cljs.core.__destructure_map(map__28325);
var msg = map__28325__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28325__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28325__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__28326(s__28327){
return (new cljs.core.LazySeq(null,(function (){
var s__28327__$1 = s__28327;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__28327__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__28332 = cljs.core.first(xs__6360__auto__);
var map__28332__$1 = cljs.core.__destructure_map(map__28332);
var src = map__28332__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28332__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28332__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__28327__$1,map__28332,map__28332__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__28325,map__28325__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__28326_$_iter__28328(s__28329){
return (new cljs.core.LazySeq(null,((function (s__28327__$1,map__28332,map__28332__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__28325,map__28325__$1,msg,info,reload_info){
return (function (){
var s__28329__$1 = s__28329;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__28329__$1);
if(temp__5804__auto____$1){
var s__28329__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__28329__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__28329__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__28331 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__28330 = (0);
while(true){
if((i__28330 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__28330);
cljs.core.chunk_append(b__28331,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__28614 = (i__28330 + (1));
i__28330 = G__28614;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28331),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__28326_$_iter__28328(cljs.core.chunk_rest(s__28329__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28331),null);
}
} else {
var warning = cljs.core.first(s__28329__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__28326_$_iter__28328(cljs.core.rest(s__28329__$2)));
}
} else {
return null;
}
break;
}
});})(s__28327__$1,map__28332,map__28332__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__28325,map__28325__$1,msg,info,reload_info))
,null,null));
});})(s__28327__$1,map__28332,map__28332__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__28325,map__28325__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__28326(cljs.core.rest(s__28327__$1)));
} else {
var G__28615 = cljs.core.rest(s__28327__$1);
s__28327__$1 = G__28615;
continue;
}
} else {
var G__28616 = cljs.core.rest(s__28327__$1);
s__28327__$1 = G__28616;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__28333_28617 = cljs.core.seq(warnings);
var chunk__28334_28618 = null;
var count__28335_28619 = (0);
var i__28336_28620 = (0);
while(true){
if((i__28336_28620 < count__28335_28619)){
var map__28339_28621 = chunk__28334_28618.cljs$core$IIndexed$_nth$arity$2(null, i__28336_28620);
var map__28339_28622__$1 = cljs.core.__destructure_map(map__28339_28621);
var w_28623 = map__28339_28622__$1;
var msg_28624__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28339_28622__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_28625 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28339_28622__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_28626 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28339_28622__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_28627 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28339_28622__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_28627)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_28625),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_28626),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_28624__$1)].join(''));


var G__28628 = seq__28333_28617;
var G__28629 = chunk__28334_28618;
var G__28630 = count__28335_28619;
var G__28631 = (i__28336_28620 + (1));
seq__28333_28617 = G__28628;
chunk__28334_28618 = G__28629;
count__28335_28619 = G__28630;
i__28336_28620 = G__28631;
continue;
} else {
var temp__5804__auto___28632 = cljs.core.seq(seq__28333_28617);
if(temp__5804__auto___28632){
var seq__28333_28633__$1 = temp__5804__auto___28632;
if(cljs.core.chunked_seq_QMARK_(seq__28333_28633__$1)){
var c__5525__auto___28634 = cljs.core.chunk_first(seq__28333_28633__$1);
var G__28635 = cljs.core.chunk_rest(seq__28333_28633__$1);
var G__28636 = c__5525__auto___28634;
var G__28637 = cljs.core.count(c__5525__auto___28634);
var G__28638 = (0);
seq__28333_28617 = G__28635;
chunk__28334_28618 = G__28636;
count__28335_28619 = G__28637;
i__28336_28620 = G__28638;
continue;
} else {
var map__28340_28639 = cljs.core.first(seq__28333_28633__$1);
var map__28340_28640__$1 = cljs.core.__destructure_map(map__28340_28639);
var w_28641 = map__28340_28640__$1;
var msg_28642__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28340_28640__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_28643 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28340_28640__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_28644 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28340_28640__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_28645 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28340_28640__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_28645)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_28643),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_28644),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_28642__$1)].join(''));


var G__28646 = cljs.core.next(seq__28333_28633__$1);
var G__28647 = null;
var G__28648 = (0);
var G__28649 = (0);
seq__28333_28617 = G__28646;
chunk__28334_28618 = G__28647;
count__28335_28619 = G__28648;
i__28336_28620 = G__28649;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__28323_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__28323_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return new$;
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__28341){
var map__28342 = p__28341;
var map__28342__$1 = cljs.core.__destructure_map(map__28342);
var msg = map__28342__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28342__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28342__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__28343 = cljs.core.seq(updates);
var chunk__28345 = null;
var count__28346 = (0);
var i__28347 = (0);
while(true){
if((i__28347 < count__28346)){
var path = chunk__28345.cljs$core$IIndexed$_nth$arity$2(null, i__28347);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__28457_28650 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__28461_28651 = null;
var count__28462_28652 = (0);
var i__28463_28653 = (0);
while(true){
if((i__28463_28653 < count__28462_28652)){
var node_28654 = chunk__28461_28651.cljs$core$IIndexed$_nth$arity$2(null, i__28463_28653);
if(cljs.core.not(node_28654.shadow$old)){
var path_match_28655 = shadow.cljs.devtools.client.browser.match_paths(node_28654.getAttribute("href"),path);
if(cljs.core.truth_(path_match_28655)){
var new_link_28656 = (function (){var G__28489 = node_28654.cloneNode(true);
G__28489.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_28655),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__28489;
})();
(node_28654.shadow$old = true);

(new_link_28656.onload = ((function (seq__28457_28650,chunk__28461_28651,count__28462_28652,i__28463_28653,seq__28343,chunk__28345,count__28346,i__28347,new_link_28656,path_match_28655,node_28654,path,map__28342,map__28342__$1,msg,updates,reload_info){
return (function (e){
var seq__28490_28657 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__28492_28658 = null;
var count__28493_28659 = (0);
var i__28494_28660 = (0);
while(true){
if((i__28494_28660 < count__28493_28659)){
var map__28498_28661 = chunk__28492_28658.cljs$core$IIndexed$_nth$arity$2(null, i__28494_28660);
var map__28498_28662__$1 = cljs.core.__destructure_map(map__28498_28661);
var task_28663 = map__28498_28662__$1;
var fn_str_28664 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28498_28662__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_28665 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28498_28662__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_28666 = goog.getObjectByName(fn_str_28664,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_28665)].join(''));

(fn_obj_28666.cljs$core$IFn$_invoke$arity$2 ? fn_obj_28666.cljs$core$IFn$_invoke$arity$2(path,new_link_28656) : fn_obj_28666.call(null, path,new_link_28656));


var G__28667 = seq__28490_28657;
var G__28668 = chunk__28492_28658;
var G__28669 = count__28493_28659;
var G__28670 = (i__28494_28660 + (1));
seq__28490_28657 = G__28667;
chunk__28492_28658 = G__28668;
count__28493_28659 = G__28669;
i__28494_28660 = G__28670;
continue;
} else {
var temp__5804__auto___28671 = cljs.core.seq(seq__28490_28657);
if(temp__5804__auto___28671){
var seq__28490_28672__$1 = temp__5804__auto___28671;
if(cljs.core.chunked_seq_QMARK_(seq__28490_28672__$1)){
var c__5525__auto___28673 = cljs.core.chunk_first(seq__28490_28672__$1);
var G__28674 = cljs.core.chunk_rest(seq__28490_28672__$1);
var G__28675 = c__5525__auto___28673;
var G__28676 = cljs.core.count(c__5525__auto___28673);
var G__28677 = (0);
seq__28490_28657 = G__28674;
chunk__28492_28658 = G__28675;
count__28493_28659 = G__28676;
i__28494_28660 = G__28677;
continue;
} else {
var map__28499_28678 = cljs.core.first(seq__28490_28672__$1);
var map__28499_28679__$1 = cljs.core.__destructure_map(map__28499_28678);
var task_28680 = map__28499_28679__$1;
var fn_str_28681 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28499_28679__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_28682 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28499_28679__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_28683 = goog.getObjectByName(fn_str_28681,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_28682)].join(''));

(fn_obj_28683.cljs$core$IFn$_invoke$arity$2 ? fn_obj_28683.cljs$core$IFn$_invoke$arity$2(path,new_link_28656) : fn_obj_28683.call(null, path,new_link_28656));


var G__28684 = cljs.core.next(seq__28490_28672__$1);
var G__28685 = null;
var G__28686 = (0);
var G__28687 = (0);
seq__28490_28657 = G__28684;
chunk__28492_28658 = G__28685;
count__28493_28659 = G__28686;
i__28494_28660 = G__28687;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_28654);
});})(seq__28457_28650,chunk__28461_28651,count__28462_28652,i__28463_28653,seq__28343,chunk__28345,count__28346,i__28347,new_link_28656,path_match_28655,node_28654,path,map__28342,map__28342__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_28655], 0));

goog.dom.insertSiblingAfter(new_link_28656,node_28654);


var G__28688 = seq__28457_28650;
var G__28689 = chunk__28461_28651;
var G__28690 = count__28462_28652;
var G__28691 = (i__28463_28653 + (1));
seq__28457_28650 = G__28688;
chunk__28461_28651 = G__28689;
count__28462_28652 = G__28690;
i__28463_28653 = G__28691;
continue;
} else {
var G__28692 = seq__28457_28650;
var G__28693 = chunk__28461_28651;
var G__28694 = count__28462_28652;
var G__28695 = (i__28463_28653 + (1));
seq__28457_28650 = G__28692;
chunk__28461_28651 = G__28693;
count__28462_28652 = G__28694;
i__28463_28653 = G__28695;
continue;
}
} else {
var G__28696 = seq__28457_28650;
var G__28697 = chunk__28461_28651;
var G__28698 = count__28462_28652;
var G__28699 = (i__28463_28653 + (1));
seq__28457_28650 = G__28696;
chunk__28461_28651 = G__28697;
count__28462_28652 = G__28698;
i__28463_28653 = G__28699;
continue;
}
} else {
var temp__5804__auto___28700 = cljs.core.seq(seq__28457_28650);
if(temp__5804__auto___28700){
var seq__28457_28701__$1 = temp__5804__auto___28700;
if(cljs.core.chunked_seq_QMARK_(seq__28457_28701__$1)){
var c__5525__auto___28702 = cljs.core.chunk_first(seq__28457_28701__$1);
var G__28703 = cljs.core.chunk_rest(seq__28457_28701__$1);
var G__28704 = c__5525__auto___28702;
var G__28705 = cljs.core.count(c__5525__auto___28702);
var G__28706 = (0);
seq__28457_28650 = G__28703;
chunk__28461_28651 = G__28704;
count__28462_28652 = G__28705;
i__28463_28653 = G__28706;
continue;
} else {
var node_28707 = cljs.core.first(seq__28457_28701__$1);
if(cljs.core.not(node_28707.shadow$old)){
var path_match_28708 = shadow.cljs.devtools.client.browser.match_paths(node_28707.getAttribute("href"),path);
if(cljs.core.truth_(path_match_28708)){
var new_link_28709 = (function (){var G__28500 = node_28707.cloneNode(true);
G__28500.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_28708),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__28500;
})();
(node_28707.shadow$old = true);

(new_link_28709.onload = ((function (seq__28457_28650,chunk__28461_28651,count__28462_28652,i__28463_28653,seq__28343,chunk__28345,count__28346,i__28347,new_link_28709,path_match_28708,node_28707,seq__28457_28701__$1,temp__5804__auto___28700,path,map__28342,map__28342__$1,msg,updates,reload_info){
return (function (e){
var seq__28501_28710 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__28503_28711 = null;
var count__28504_28712 = (0);
var i__28505_28713 = (0);
while(true){
if((i__28505_28713 < count__28504_28712)){
var map__28509_28714 = chunk__28503_28711.cljs$core$IIndexed$_nth$arity$2(null, i__28505_28713);
var map__28509_28715__$1 = cljs.core.__destructure_map(map__28509_28714);
var task_28716 = map__28509_28715__$1;
var fn_str_28717 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28509_28715__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_28718 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28509_28715__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_28719 = goog.getObjectByName(fn_str_28717,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_28718)].join(''));

(fn_obj_28719.cljs$core$IFn$_invoke$arity$2 ? fn_obj_28719.cljs$core$IFn$_invoke$arity$2(path,new_link_28709) : fn_obj_28719.call(null, path,new_link_28709));


var G__28720 = seq__28501_28710;
var G__28721 = chunk__28503_28711;
var G__28722 = count__28504_28712;
var G__28723 = (i__28505_28713 + (1));
seq__28501_28710 = G__28720;
chunk__28503_28711 = G__28721;
count__28504_28712 = G__28722;
i__28505_28713 = G__28723;
continue;
} else {
var temp__5804__auto___28724__$1 = cljs.core.seq(seq__28501_28710);
if(temp__5804__auto___28724__$1){
var seq__28501_28725__$1 = temp__5804__auto___28724__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28501_28725__$1)){
var c__5525__auto___28726 = cljs.core.chunk_first(seq__28501_28725__$1);
var G__28727 = cljs.core.chunk_rest(seq__28501_28725__$1);
var G__28728 = c__5525__auto___28726;
var G__28729 = cljs.core.count(c__5525__auto___28726);
var G__28730 = (0);
seq__28501_28710 = G__28727;
chunk__28503_28711 = G__28728;
count__28504_28712 = G__28729;
i__28505_28713 = G__28730;
continue;
} else {
var map__28510_28731 = cljs.core.first(seq__28501_28725__$1);
var map__28510_28732__$1 = cljs.core.__destructure_map(map__28510_28731);
var task_28733 = map__28510_28732__$1;
var fn_str_28734 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28510_28732__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_28735 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28510_28732__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_28736 = goog.getObjectByName(fn_str_28734,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_28735)].join(''));

(fn_obj_28736.cljs$core$IFn$_invoke$arity$2 ? fn_obj_28736.cljs$core$IFn$_invoke$arity$2(path,new_link_28709) : fn_obj_28736.call(null, path,new_link_28709));


var G__28737 = cljs.core.next(seq__28501_28725__$1);
var G__28738 = null;
var G__28739 = (0);
var G__28740 = (0);
seq__28501_28710 = G__28737;
chunk__28503_28711 = G__28738;
count__28504_28712 = G__28739;
i__28505_28713 = G__28740;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_28707);
});})(seq__28457_28650,chunk__28461_28651,count__28462_28652,i__28463_28653,seq__28343,chunk__28345,count__28346,i__28347,new_link_28709,path_match_28708,node_28707,seq__28457_28701__$1,temp__5804__auto___28700,path,map__28342,map__28342__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_28708], 0));

goog.dom.insertSiblingAfter(new_link_28709,node_28707);


var G__28741 = cljs.core.next(seq__28457_28701__$1);
var G__28742 = null;
var G__28743 = (0);
var G__28744 = (0);
seq__28457_28650 = G__28741;
chunk__28461_28651 = G__28742;
count__28462_28652 = G__28743;
i__28463_28653 = G__28744;
continue;
} else {
var G__28745 = cljs.core.next(seq__28457_28701__$1);
var G__28746 = null;
var G__28747 = (0);
var G__28748 = (0);
seq__28457_28650 = G__28745;
chunk__28461_28651 = G__28746;
count__28462_28652 = G__28747;
i__28463_28653 = G__28748;
continue;
}
} else {
var G__28749 = cljs.core.next(seq__28457_28701__$1);
var G__28750 = null;
var G__28751 = (0);
var G__28752 = (0);
seq__28457_28650 = G__28749;
chunk__28461_28651 = G__28750;
count__28462_28652 = G__28751;
i__28463_28653 = G__28752;
continue;
}
}
} else {
}
}
break;
}


var G__28753 = seq__28343;
var G__28754 = chunk__28345;
var G__28755 = count__28346;
var G__28756 = (i__28347 + (1));
seq__28343 = G__28753;
chunk__28345 = G__28754;
count__28346 = G__28755;
i__28347 = G__28756;
continue;
} else {
var G__28757 = seq__28343;
var G__28758 = chunk__28345;
var G__28759 = count__28346;
var G__28760 = (i__28347 + (1));
seq__28343 = G__28757;
chunk__28345 = G__28758;
count__28346 = G__28759;
i__28347 = G__28760;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28343);
if(temp__5804__auto__){
var seq__28343__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28343__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__28343__$1);
var G__28761 = cljs.core.chunk_rest(seq__28343__$1);
var G__28762 = c__5525__auto__;
var G__28763 = cljs.core.count(c__5525__auto__);
var G__28764 = (0);
seq__28343 = G__28761;
chunk__28345 = G__28762;
count__28346 = G__28763;
i__28347 = G__28764;
continue;
} else {
var path = cljs.core.first(seq__28343__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__28511_28765 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__28515_28766 = null;
var count__28516_28767 = (0);
var i__28517_28768 = (0);
while(true){
if((i__28517_28768 < count__28516_28767)){
var node_28769 = chunk__28515_28766.cljs$core$IIndexed$_nth$arity$2(null, i__28517_28768);
if(cljs.core.not(node_28769.shadow$old)){
var path_match_28770 = shadow.cljs.devtools.client.browser.match_paths(node_28769.getAttribute("href"),path);
if(cljs.core.truth_(path_match_28770)){
var new_link_28771 = (function (){var G__28543 = node_28769.cloneNode(true);
G__28543.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_28770),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__28543;
})();
(node_28769.shadow$old = true);

(new_link_28771.onload = ((function (seq__28511_28765,chunk__28515_28766,count__28516_28767,i__28517_28768,seq__28343,chunk__28345,count__28346,i__28347,new_link_28771,path_match_28770,node_28769,path,seq__28343__$1,temp__5804__auto__,map__28342,map__28342__$1,msg,updates,reload_info){
return (function (e){
var seq__28544_28772 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__28546_28773 = null;
var count__28547_28774 = (0);
var i__28548_28775 = (0);
while(true){
if((i__28548_28775 < count__28547_28774)){
var map__28552_28776 = chunk__28546_28773.cljs$core$IIndexed$_nth$arity$2(null, i__28548_28775);
var map__28552_28777__$1 = cljs.core.__destructure_map(map__28552_28776);
var task_28778 = map__28552_28777__$1;
var fn_str_28779 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28552_28777__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_28780 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28552_28777__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_28781 = goog.getObjectByName(fn_str_28779,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_28780)].join(''));

(fn_obj_28781.cljs$core$IFn$_invoke$arity$2 ? fn_obj_28781.cljs$core$IFn$_invoke$arity$2(path,new_link_28771) : fn_obj_28781.call(null, path,new_link_28771));


var G__28782 = seq__28544_28772;
var G__28783 = chunk__28546_28773;
var G__28784 = count__28547_28774;
var G__28785 = (i__28548_28775 + (1));
seq__28544_28772 = G__28782;
chunk__28546_28773 = G__28783;
count__28547_28774 = G__28784;
i__28548_28775 = G__28785;
continue;
} else {
var temp__5804__auto___28786__$1 = cljs.core.seq(seq__28544_28772);
if(temp__5804__auto___28786__$1){
var seq__28544_28787__$1 = temp__5804__auto___28786__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28544_28787__$1)){
var c__5525__auto___28788 = cljs.core.chunk_first(seq__28544_28787__$1);
var G__28789 = cljs.core.chunk_rest(seq__28544_28787__$1);
var G__28790 = c__5525__auto___28788;
var G__28791 = cljs.core.count(c__5525__auto___28788);
var G__28792 = (0);
seq__28544_28772 = G__28789;
chunk__28546_28773 = G__28790;
count__28547_28774 = G__28791;
i__28548_28775 = G__28792;
continue;
} else {
var map__28553_28793 = cljs.core.first(seq__28544_28787__$1);
var map__28553_28794__$1 = cljs.core.__destructure_map(map__28553_28793);
var task_28795 = map__28553_28794__$1;
var fn_str_28796 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28553_28794__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_28797 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28553_28794__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_28798 = goog.getObjectByName(fn_str_28796,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_28797)].join(''));

(fn_obj_28798.cljs$core$IFn$_invoke$arity$2 ? fn_obj_28798.cljs$core$IFn$_invoke$arity$2(path,new_link_28771) : fn_obj_28798.call(null, path,new_link_28771));


var G__28799 = cljs.core.next(seq__28544_28787__$1);
var G__28800 = null;
var G__28801 = (0);
var G__28802 = (0);
seq__28544_28772 = G__28799;
chunk__28546_28773 = G__28800;
count__28547_28774 = G__28801;
i__28548_28775 = G__28802;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_28769);
});})(seq__28511_28765,chunk__28515_28766,count__28516_28767,i__28517_28768,seq__28343,chunk__28345,count__28346,i__28347,new_link_28771,path_match_28770,node_28769,path,seq__28343__$1,temp__5804__auto__,map__28342,map__28342__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_28770], 0));

goog.dom.insertSiblingAfter(new_link_28771,node_28769);


var G__28803 = seq__28511_28765;
var G__28804 = chunk__28515_28766;
var G__28805 = count__28516_28767;
var G__28806 = (i__28517_28768 + (1));
seq__28511_28765 = G__28803;
chunk__28515_28766 = G__28804;
count__28516_28767 = G__28805;
i__28517_28768 = G__28806;
continue;
} else {
var G__28807 = seq__28511_28765;
var G__28808 = chunk__28515_28766;
var G__28809 = count__28516_28767;
var G__28810 = (i__28517_28768 + (1));
seq__28511_28765 = G__28807;
chunk__28515_28766 = G__28808;
count__28516_28767 = G__28809;
i__28517_28768 = G__28810;
continue;
}
} else {
var G__28811 = seq__28511_28765;
var G__28812 = chunk__28515_28766;
var G__28813 = count__28516_28767;
var G__28814 = (i__28517_28768 + (1));
seq__28511_28765 = G__28811;
chunk__28515_28766 = G__28812;
count__28516_28767 = G__28813;
i__28517_28768 = G__28814;
continue;
}
} else {
var temp__5804__auto___28815__$1 = cljs.core.seq(seq__28511_28765);
if(temp__5804__auto___28815__$1){
var seq__28511_28816__$1 = temp__5804__auto___28815__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28511_28816__$1)){
var c__5525__auto___28817 = cljs.core.chunk_first(seq__28511_28816__$1);
var G__28818 = cljs.core.chunk_rest(seq__28511_28816__$1);
var G__28819 = c__5525__auto___28817;
var G__28820 = cljs.core.count(c__5525__auto___28817);
var G__28821 = (0);
seq__28511_28765 = G__28818;
chunk__28515_28766 = G__28819;
count__28516_28767 = G__28820;
i__28517_28768 = G__28821;
continue;
} else {
var node_28822 = cljs.core.first(seq__28511_28816__$1);
if(cljs.core.not(node_28822.shadow$old)){
var path_match_28823 = shadow.cljs.devtools.client.browser.match_paths(node_28822.getAttribute("href"),path);
if(cljs.core.truth_(path_match_28823)){
var new_link_28824 = (function (){var G__28554 = node_28822.cloneNode(true);
G__28554.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_28823),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__28554;
})();
(node_28822.shadow$old = true);

(new_link_28824.onload = ((function (seq__28511_28765,chunk__28515_28766,count__28516_28767,i__28517_28768,seq__28343,chunk__28345,count__28346,i__28347,new_link_28824,path_match_28823,node_28822,seq__28511_28816__$1,temp__5804__auto___28815__$1,path,seq__28343__$1,temp__5804__auto__,map__28342,map__28342__$1,msg,updates,reload_info){
return (function (e){
var seq__28555_28825 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__28557_28826 = null;
var count__28558_28827 = (0);
var i__28559_28828 = (0);
while(true){
if((i__28559_28828 < count__28558_28827)){
var map__28563_28829 = chunk__28557_28826.cljs$core$IIndexed$_nth$arity$2(null, i__28559_28828);
var map__28563_28830__$1 = cljs.core.__destructure_map(map__28563_28829);
var task_28831 = map__28563_28830__$1;
var fn_str_28832 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28563_28830__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_28833 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28563_28830__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_28834 = goog.getObjectByName(fn_str_28832,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_28833)].join(''));

(fn_obj_28834.cljs$core$IFn$_invoke$arity$2 ? fn_obj_28834.cljs$core$IFn$_invoke$arity$2(path,new_link_28824) : fn_obj_28834.call(null, path,new_link_28824));


var G__28835 = seq__28555_28825;
var G__28836 = chunk__28557_28826;
var G__28837 = count__28558_28827;
var G__28838 = (i__28559_28828 + (1));
seq__28555_28825 = G__28835;
chunk__28557_28826 = G__28836;
count__28558_28827 = G__28837;
i__28559_28828 = G__28838;
continue;
} else {
var temp__5804__auto___28839__$2 = cljs.core.seq(seq__28555_28825);
if(temp__5804__auto___28839__$2){
var seq__28555_28840__$1 = temp__5804__auto___28839__$2;
if(cljs.core.chunked_seq_QMARK_(seq__28555_28840__$1)){
var c__5525__auto___28841 = cljs.core.chunk_first(seq__28555_28840__$1);
var G__28842 = cljs.core.chunk_rest(seq__28555_28840__$1);
var G__28843 = c__5525__auto___28841;
var G__28844 = cljs.core.count(c__5525__auto___28841);
var G__28845 = (0);
seq__28555_28825 = G__28842;
chunk__28557_28826 = G__28843;
count__28558_28827 = G__28844;
i__28559_28828 = G__28845;
continue;
} else {
var map__28564_28846 = cljs.core.first(seq__28555_28840__$1);
var map__28564_28847__$1 = cljs.core.__destructure_map(map__28564_28846);
var task_28848 = map__28564_28847__$1;
var fn_str_28849 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28564_28847__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_28850 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28564_28847__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_28851 = goog.getObjectByName(fn_str_28849,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_28850)].join(''));

(fn_obj_28851.cljs$core$IFn$_invoke$arity$2 ? fn_obj_28851.cljs$core$IFn$_invoke$arity$2(path,new_link_28824) : fn_obj_28851.call(null, path,new_link_28824));


var G__28852 = cljs.core.next(seq__28555_28840__$1);
var G__28853 = null;
var G__28854 = (0);
var G__28855 = (0);
seq__28555_28825 = G__28852;
chunk__28557_28826 = G__28853;
count__28558_28827 = G__28854;
i__28559_28828 = G__28855;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_28822);
});})(seq__28511_28765,chunk__28515_28766,count__28516_28767,i__28517_28768,seq__28343,chunk__28345,count__28346,i__28347,new_link_28824,path_match_28823,node_28822,seq__28511_28816__$1,temp__5804__auto___28815__$1,path,seq__28343__$1,temp__5804__auto__,map__28342,map__28342__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_28823], 0));

goog.dom.insertSiblingAfter(new_link_28824,node_28822);


var G__28856 = cljs.core.next(seq__28511_28816__$1);
var G__28857 = null;
var G__28858 = (0);
var G__28859 = (0);
seq__28511_28765 = G__28856;
chunk__28515_28766 = G__28857;
count__28516_28767 = G__28858;
i__28517_28768 = G__28859;
continue;
} else {
var G__28860 = cljs.core.next(seq__28511_28816__$1);
var G__28861 = null;
var G__28862 = (0);
var G__28863 = (0);
seq__28511_28765 = G__28860;
chunk__28515_28766 = G__28861;
count__28516_28767 = G__28862;
i__28517_28768 = G__28863;
continue;
}
} else {
var G__28864 = cljs.core.next(seq__28511_28816__$1);
var G__28865 = null;
var G__28866 = (0);
var G__28867 = (0);
seq__28511_28765 = G__28864;
chunk__28515_28766 = G__28865;
count__28516_28767 = G__28866;
i__28517_28768 = G__28867;
continue;
}
}
} else {
}
}
break;
}


var G__28868 = cljs.core.next(seq__28343__$1);
var G__28869 = null;
var G__28870 = (0);
var G__28871 = (0);
seq__28343 = G__28868;
chunk__28345 = G__28869;
count__28346 = G__28870;
i__28347 = G__28871;
continue;
} else {
var G__28872 = cljs.core.next(seq__28343__$1);
var G__28873 = null;
var G__28874 = (0);
var G__28875 = (0);
seq__28343 = G__28872;
chunk__28345 = G__28873;
count__28346 = G__28874;
i__28347 = G__28875;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__28565){
var map__28566 = p__28565;
var map__28566__$1 = cljs.core.__destructure_map(map__28566);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28566__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__28567,done,error){
var map__28568 = p__28567;
var map__28568__$1 = cljs.core.__destructure_map(map__28568);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28568__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__28569,done,error){
var map__28570 = p__28569;
var map__28570__$1 = cljs.core.__destructure_map(map__28570);
var msg = map__28570__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28570__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28570__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28570__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__28571){
var map__28572 = p__28571;
var map__28572__$1 = cljs.core.__destructure_map(map__28572);
var src = map__28572__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28572__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__28573 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__28573) : done.call(null, G__28573));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__28574){
var map__28575 = p__28574;
var map__28575__$1 = cljs.core.__destructure_map(map__28575);
var msg__$1 = map__28575__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28575__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null, sources_to_load));
}catch (e28576){var ex = e28576;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null, ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__28577){
var map__28578 = p__28577;
var map__28578__$1 = cljs.core.__destructure_map(map__28578);
var env = map__28578__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28578__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__28579){
var map__28580 = p__28579;
var map__28580__$1 = cljs.core.__destructure_map(map__28580);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28580__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28580__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__28581){
var map__28582 = p__28581;
var map__28582__$1 = cljs.core.__destructure_map(map__28582);
var svc = map__28582__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28582__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
