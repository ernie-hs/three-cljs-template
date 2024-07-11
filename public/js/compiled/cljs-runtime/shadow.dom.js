goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_26998 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_26998(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_27006 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_27006(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__25747 = coll;
var G__25748 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__25747,G__25748) : shadow.dom.lazy_native_coll_seq.call(null, G__25747,G__25748));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null, );
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__25782 = arguments.length;
switch (G__25782) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__25804 = arguments.length;
switch (G__25804) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__25824 = arguments.length;
switch (G__25824) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__25854 = arguments.length;
switch (G__25854) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__25866 = arguments.length;
switch (G__25866) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__25882 = arguments.length;
switch (G__25882) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
}));
}catch (e25889){if((e25889 instanceof Object)){
var e = e25889;
return console.log("didnt support attachEvent",el,e);
} else {
throw e25889;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__25912 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__25913 = null;
var count__25914 = (0);
var i__25915 = (0);
while(true){
if((i__25915 < count__25914)){
var el = chunk__25913.cljs$core$IIndexed$_nth$arity$2(null, i__25915);
var handler_27025__$1 = ((function (seq__25912,chunk__25913,count__25914,i__25915,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__25912,chunk__25913,count__25914,i__25915,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_27025__$1);


var G__27026 = seq__25912;
var G__27027 = chunk__25913;
var G__27028 = count__25914;
var G__27029 = (i__25915 + (1));
seq__25912 = G__27026;
chunk__25913 = G__27027;
count__25914 = G__27028;
i__25915 = G__27029;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__25912);
if(temp__5804__auto__){
var seq__25912__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25912__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__25912__$1);
var G__27030 = cljs.core.chunk_rest(seq__25912__$1);
var G__27031 = c__5525__auto__;
var G__27032 = cljs.core.count(c__5525__auto__);
var G__27033 = (0);
seq__25912 = G__27030;
chunk__25913 = G__27031;
count__25914 = G__27032;
i__25915 = G__27033;
continue;
} else {
var el = cljs.core.first(seq__25912__$1);
var handler_27034__$1 = ((function (seq__25912,chunk__25913,count__25914,i__25915,el,seq__25912__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__25912,chunk__25913,count__25914,i__25915,el,seq__25912__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_27034__$1);


var G__27035 = cljs.core.next(seq__25912__$1);
var G__27036 = null;
var G__27037 = (0);
var G__27038 = (0);
seq__25912 = G__27035;
chunk__25913 = G__27036;
count__25914 = G__27037;
i__25915 = G__27038;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__25933 = arguments.length;
switch (G__25933) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__25943 = cljs.core.seq(events);
var chunk__25944 = null;
var count__25945 = (0);
var i__25946 = (0);
while(true){
if((i__25946 < count__25945)){
var vec__25963 = chunk__25944.cljs$core$IIndexed$_nth$arity$2(null, i__25946);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25963,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25963,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__27043 = seq__25943;
var G__27044 = chunk__25944;
var G__27045 = count__25945;
var G__27046 = (i__25946 + (1));
seq__25943 = G__27043;
chunk__25944 = G__27044;
count__25945 = G__27045;
i__25946 = G__27046;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__25943);
if(temp__5804__auto__){
var seq__25943__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25943__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__25943__$1);
var G__27047 = cljs.core.chunk_rest(seq__25943__$1);
var G__27048 = c__5525__auto__;
var G__27049 = cljs.core.count(c__5525__auto__);
var G__27050 = (0);
seq__25943 = G__27047;
chunk__25944 = G__27048;
count__25945 = G__27049;
i__25946 = G__27050;
continue;
} else {
var vec__25977 = cljs.core.first(seq__25943__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25977,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25977,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__27051 = cljs.core.next(seq__25943__$1);
var G__27052 = null;
var G__27053 = (0);
var G__27054 = (0);
seq__25943 = G__27051;
chunk__25944 = G__27052;
count__25945 = G__27053;
i__25946 = G__27054;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__25993 = cljs.core.seq(styles);
var chunk__25994 = null;
var count__25995 = (0);
var i__25996 = (0);
while(true){
if((i__25996 < count__25995)){
var vec__26007 = chunk__25994.cljs$core$IIndexed$_nth$arity$2(null, i__25996);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26007,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26007,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__27055 = seq__25993;
var G__27056 = chunk__25994;
var G__27057 = count__25995;
var G__27058 = (i__25996 + (1));
seq__25993 = G__27055;
chunk__25994 = G__27056;
count__25995 = G__27057;
i__25996 = G__27058;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__25993);
if(temp__5804__auto__){
var seq__25993__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25993__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__25993__$1);
var G__27059 = cljs.core.chunk_rest(seq__25993__$1);
var G__27060 = c__5525__auto__;
var G__27061 = cljs.core.count(c__5525__auto__);
var G__27062 = (0);
seq__25993 = G__27059;
chunk__25994 = G__27060;
count__25995 = G__27061;
i__25996 = G__27062;
continue;
} else {
var vec__26011 = cljs.core.first(seq__25993__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26011,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26011,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__27063 = cljs.core.next(seq__25993__$1);
var G__27064 = null;
var G__27065 = (0);
var G__27066 = (0);
seq__25993 = G__27063;
chunk__25994 = G__27064;
count__25995 = G__27065;
i__25996 = G__27066;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__26014_27067 = key;
var G__26014_27068__$1 = (((G__26014_27067 instanceof cljs.core.Keyword))?G__26014_27067.fqn:null);
switch (G__26014_27068__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_27070 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_27070,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_27070,"aria-");
}
})())){
el.setAttribute(ks_27070,value);
} else {
(el[ks_27070] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__26039){
var map__26040 = p__26039;
var map__26040__$1 = cljs.core.__destructure_map(map__26040);
var props = map__26040__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26040__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__26042 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26042,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26042,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26042,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__26052 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__26052,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__26052;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__26059 = arguments.length;
switch (G__26059) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__26081){
var vec__26083 = p__26081;
var seq__26084 = cljs.core.seq(vec__26083);
var first__26085 = cljs.core.first(seq__26084);
var seq__26084__$1 = cljs.core.next(seq__26084);
var nn = first__26085;
var first__26085__$1 = cljs.core.first(seq__26084__$1);
var seq__26084__$2 = cljs.core.next(seq__26084__$1);
var np = first__26085__$1;
var nc = seq__26084__$2;
var node = vec__26083;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__26094 = nn;
var G__26095 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__26094,G__26095) : create_fn.call(null, G__26094,G__26095));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null, nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__26098 = nn;
var G__26099 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__26098,G__26099) : create_fn.call(null, G__26098,G__26099));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__26103 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26103,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26103,(1),null);
var seq__26106_27076 = cljs.core.seq(node_children);
var chunk__26107_27077 = null;
var count__26108_27078 = (0);
var i__26109_27079 = (0);
while(true){
if((i__26109_27079 < count__26108_27078)){
var child_struct_27081 = chunk__26107_27077.cljs$core$IIndexed$_nth$arity$2(null, i__26109_27079);
var children_27083 = shadow.dom.dom_node(child_struct_27081);
if(cljs.core.seq_QMARK_(children_27083)){
var seq__26165_27085 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_27083));
var chunk__26167_27086 = null;
var count__26168_27087 = (0);
var i__26169_27088 = (0);
while(true){
if((i__26169_27088 < count__26168_27087)){
var child_27089 = chunk__26167_27086.cljs$core$IIndexed$_nth$arity$2(null, i__26169_27088);
if(cljs.core.truth_(child_27089)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_27089);


var G__27090 = seq__26165_27085;
var G__27091 = chunk__26167_27086;
var G__27092 = count__26168_27087;
var G__27093 = (i__26169_27088 + (1));
seq__26165_27085 = G__27090;
chunk__26167_27086 = G__27091;
count__26168_27087 = G__27092;
i__26169_27088 = G__27093;
continue;
} else {
var G__27094 = seq__26165_27085;
var G__27095 = chunk__26167_27086;
var G__27096 = count__26168_27087;
var G__27097 = (i__26169_27088 + (1));
seq__26165_27085 = G__27094;
chunk__26167_27086 = G__27095;
count__26168_27087 = G__27096;
i__26169_27088 = G__27097;
continue;
}
} else {
var temp__5804__auto___27098 = cljs.core.seq(seq__26165_27085);
if(temp__5804__auto___27098){
var seq__26165_27099__$1 = temp__5804__auto___27098;
if(cljs.core.chunked_seq_QMARK_(seq__26165_27099__$1)){
var c__5525__auto___27100 = cljs.core.chunk_first(seq__26165_27099__$1);
var G__27101 = cljs.core.chunk_rest(seq__26165_27099__$1);
var G__27102 = c__5525__auto___27100;
var G__27103 = cljs.core.count(c__5525__auto___27100);
var G__27104 = (0);
seq__26165_27085 = G__27101;
chunk__26167_27086 = G__27102;
count__26168_27087 = G__27103;
i__26169_27088 = G__27104;
continue;
} else {
var child_27105 = cljs.core.first(seq__26165_27099__$1);
if(cljs.core.truth_(child_27105)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_27105);


var G__27106 = cljs.core.next(seq__26165_27099__$1);
var G__27107 = null;
var G__27108 = (0);
var G__27109 = (0);
seq__26165_27085 = G__27106;
chunk__26167_27086 = G__27107;
count__26168_27087 = G__27108;
i__26169_27088 = G__27109;
continue;
} else {
var G__27110 = cljs.core.next(seq__26165_27099__$1);
var G__27111 = null;
var G__27112 = (0);
var G__27113 = (0);
seq__26165_27085 = G__27110;
chunk__26167_27086 = G__27111;
count__26168_27087 = G__27112;
i__26169_27088 = G__27113;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_27083);
}


var G__27116 = seq__26106_27076;
var G__27117 = chunk__26107_27077;
var G__27118 = count__26108_27078;
var G__27119 = (i__26109_27079 + (1));
seq__26106_27076 = G__27116;
chunk__26107_27077 = G__27117;
count__26108_27078 = G__27118;
i__26109_27079 = G__27119;
continue;
} else {
var temp__5804__auto___27120 = cljs.core.seq(seq__26106_27076);
if(temp__5804__auto___27120){
var seq__26106_27122__$1 = temp__5804__auto___27120;
if(cljs.core.chunked_seq_QMARK_(seq__26106_27122__$1)){
var c__5525__auto___27123 = cljs.core.chunk_first(seq__26106_27122__$1);
var G__27124 = cljs.core.chunk_rest(seq__26106_27122__$1);
var G__27125 = c__5525__auto___27123;
var G__27126 = cljs.core.count(c__5525__auto___27123);
var G__27127 = (0);
seq__26106_27076 = G__27124;
chunk__26107_27077 = G__27125;
count__26108_27078 = G__27126;
i__26109_27079 = G__27127;
continue;
} else {
var child_struct_27129 = cljs.core.first(seq__26106_27122__$1);
var children_27130 = shadow.dom.dom_node(child_struct_27129);
if(cljs.core.seq_QMARK_(children_27130)){
var seq__26186_27131 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_27130));
var chunk__26188_27132 = null;
var count__26189_27133 = (0);
var i__26190_27134 = (0);
while(true){
if((i__26190_27134 < count__26189_27133)){
var child_27135 = chunk__26188_27132.cljs$core$IIndexed$_nth$arity$2(null, i__26190_27134);
if(cljs.core.truth_(child_27135)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_27135);


var G__27136 = seq__26186_27131;
var G__27137 = chunk__26188_27132;
var G__27138 = count__26189_27133;
var G__27139 = (i__26190_27134 + (1));
seq__26186_27131 = G__27136;
chunk__26188_27132 = G__27137;
count__26189_27133 = G__27138;
i__26190_27134 = G__27139;
continue;
} else {
var G__27140 = seq__26186_27131;
var G__27141 = chunk__26188_27132;
var G__27142 = count__26189_27133;
var G__27143 = (i__26190_27134 + (1));
seq__26186_27131 = G__27140;
chunk__26188_27132 = G__27141;
count__26189_27133 = G__27142;
i__26190_27134 = G__27143;
continue;
}
} else {
var temp__5804__auto___27144__$1 = cljs.core.seq(seq__26186_27131);
if(temp__5804__auto___27144__$1){
var seq__26186_27145__$1 = temp__5804__auto___27144__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26186_27145__$1)){
var c__5525__auto___27146 = cljs.core.chunk_first(seq__26186_27145__$1);
var G__27147 = cljs.core.chunk_rest(seq__26186_27145__$1);
var G__27148 = c__5525__auto___27146;
var G__27149 = cljs.core.count(c__5525__auto___27146);
var G__27150 = (0);
seq__26186_27131 = G__27147;
chunk__26188_27132 = G__27148;
count__26189_27133 = G__27149;
i__26190_27134 = G__27150;
continue;
} else {
var child_27151 = cljs.core.first(seq__26186_27145__$1);
if(cljs.core.truth_(child_27151)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_27151);


var G__27152 = cljs.core.next(seq__26186_27145__$1);
var G__27153 = null;
var G__27154 = (0);
var G__27155 = (0);
seq__26186_27131 = G__27152;
chunk__26188_27132 = G__27153;
count__26189_27133 = G__27154;
i__26190_27134 = G__27155;
continue;
} else {
var G__27156 = cljs.core.next(seq__26186_27145__$1);
var G__27157 = null;
var G__27158 = (0);
var G__27159 = (0);
seq__26186_27131 = G__27156;
chunk__26188_27132 = G__27157;
count__26189_27133 = G__27158;
i__26190_27134 = G__27159;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_27130);
}


var G__27160 = cljs.core.next(seq__26106_27122__$1);
var G__27161 = null;
var G__27162 = (0);
var G__27163 = (0);
seq__26106_27076 = G__27160;
chunk__26107_27077 = G__27161;
count__26108_27078 = G__27162;
i__26109_27079 = G__27163;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__26226 = cljs.core.seq(node);
var chunk__26227 = null;
var count__26228 = (0);
var i__26229 = (0);
while(true){
if((i__26229 < count__26228)){
var n = chunk__26227.cljs$core$IIndexed$_nth$arity$2(null, i__26229);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__27170 = seq__26226;
var G__27171 = chunk__26227;
var G__27172 = count__26228;
var G__27173 = (i__26229 + (1));
seq__26226 = G__27170;
chunk__26227 = G__27171;
count__26228 = G__27172;
i__26229 = G__27173;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__26226);
if(temp__5804__auto__){
var seq__26226__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26226__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__26226__$1);
var G__27175 = cljs.core.chunk_rest(seq__26226__$1);
var G__27176 = c__5525__auto__;
var G__27177 = cljs.core.count(c__5525__auto__);
var G__27178 = (0);
seq__26226 = G__27175;
chunk__26227 = G__27176;
count__26228 = G__27177;
i__26229 = G__27178;
continue;
} else {
var n = cljs.core.first(seq__26226__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__27179 = cljs.core.next(seq__26226__$1);
var G__27180 = null;
var G__27181 = (0);
var G__27182 = (0);
seq__26226 = G__27179;
chunk__26227 = G__27180;
count__26228 = G__27181;
i__26229 = G__27182;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__26260 = arguments.length;
switch (G__26260) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__26267 = arguments.length;
switch (G__26267) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__26285 = arguments.length;
switch (G__26285) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___27197 = arguments.length;
var i__5727__auto___27198 = (0);
while(true){
if((i__5727__auto___27198 < len__5726__auto___27197)){
args__5732__auto__.push((arguments[i__5727__auto___27198]));

var G__27199 = (i__5727__auto___27198 + (1));
i__5727__auto___27198 = G__27199;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__26333_27203 = cljs.core.seq(nodes);
var chunk__26334_27204 = null;
var count__26335_27205 = (0);
var i__26336_27206 = (0);
while(true){
if((i__26336_27206 < count__26335_27205)){
var node_27208 = chunk__26334_27204.cljs$core$IIndexed$_nth$arity$2(null, i__26336_27206);
fragment.appendChild(shadow.dom._to_dom(node_27208));


var G__27209 = seq__26333_27203;
var G__27210 = chunk__26334_27204;
var G__27211 = count__26335_27205;
var G__27212 = (i__26336_27206 + (1));
seq__26333_27203 = G__27209;
chunk__26334_27204 = G__27210;
count__26335_27205 = G__27211;
i__26336_27206 = G__27212;
continue;
} else {
var temp__5804__auto___27213 = cljs.core.seq(seq__26333_27203);
if(temp__5804__auto___27213){
var seq__26333_27214__$1 = temp__5804__auto___27213;
if(cljs.core.chunked_seq_QMARK_(seq__26333_27214__$1)){
var c__5525__auto___27215 = cljs.core.chunk_first(seq__26333_27214__$1);
var G__27216 = cljs.core.chunk_rest(seq__26333_27214__$1);
var G__27217 = c__5525__auto___27215;
var G__27218 = cljs.core.count(c__5525__auto___27215);
var G__27219 = (0);
seq__26333_27203 = G__27216;
chunk__26334_27204 = G__27217;
count__26335_27205 = G__27218;
i__26336_27206 = G__27219;
continue;
} else {
var node_27220 = cljs.core.first(seq__26333_27214__$1);
fragment.appendChild(shadow.dom._to_dom(node_27220));


var G__27221 = cljs.core.next(seq__26333_27214__$1);
var G__27222 = null;
var G__27223 = (0);
var G__27224 = (0);
seq__26333_27203 = G__27221;
chunk__26334_27204 = G__27222;
count__26335_27205 = G__27223;
i__26336_27206 = G__27224;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq26318){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26318));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__26352_27225 = cljs.core.seq(scripts);
var chunk__26353_27226 = null;
var count__26354_27227 = (0);
var i__26355_27228 = (0);
while(true){
if((i__26355_27228 < count__26354_27227)){
var vec__26368_27230 = chunk__26353_27226.cljs$core$IIndexed$_nth$arity$2(null, i__26355_27228);
var script_tag_27231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26368_27230,(0),null);
var script_body_27232 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26368_27230,(1),null);
eval(script_body_27232);


var G__27235 = seq__26352_27225;
var G__27236 = chunk__26353_27226;
var G__27237 = count__26354_27227;
var G__27238 = (i__26355_27228 + (1));
seq__26352_27225 = G__27235;
chunk__26353_27226 = G__27236;
count__26354_27227 = G__27237;
i__26355_27228 = G__27238;
continue;
} else {
var temp__5804__auto___27239 = cljs.core.seq(seq__26352_27225);
if(temp__5804__auto___27239){
var seq__26352_27240__$1 = temp__5804__auto___27239;
if(cljs.core.chunked_seq_QMARK_(seq__26352_27240__$1)){
var c__5525__auto___27241 = cljs.core.chunk_first(seq__26352_27240__$1);
var G__27242 = cljs.core.chunk_rest(seq__26352_27240__$1);
var G__27243 = c__5525__auto___27241;
var G__27244 = cljs.core.count(c__5525__auto___27241);
var G__27245 = (0);
seq__26352_27225 = G__27242;
chunk__26353_27226 = G__27243;
count__26354_27227 = G__27244;
i__26355_27228 = G__27245;
continue;
} else {
var vec__26374_27246 = cljs.core.first(seq__26352_27240__$1);
var script_tag_27247 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26374_27246,(0),null);
var script_body_27248 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26374_27246,(1),null);
eval(script_body_27248);


var G__27249 = cljs.core.next(seq__26352_27240__$1);
var G__27250 = null;
var G__27251 = (0);
var G__27252 = (0);
seq__26352_27225 = G__27249;
chunk__26353_27226 = G__27250;
count__26354_27227 = G__27251;
i__26355_27228 = G__27252;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__26378){
var vec__26379 = p__26378;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26379,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26379,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__26395 = arguments.length;
switch (G__26395) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__26420 = cljs.core.seq(style_keys);
var chunk__26421 = null;
var count__26422 = (0);
var i__26423 = (0);
while(true){
if((i__26423 < count__26422)){
var it = chunk__26421.cljs$core$IIndexed$_nth$arity$2(null, i__26423);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__27264 = seq__26420;
var G__27265 = chunk__26421;
var G__27266 = count__26422;
var G__27267 = (i__26423 + (1));
seq__26420 = G__27264;
chunk__26421 = G__27265;
count__26422 = G__27266;
i__26423 = G__27267;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__26420);
if(temp__5804__auto__){
var seq__26420__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26420__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__26420__$1);
var G__27269 = cljs.core.chunk_rest(seq__26420__$1);
var G__27270 = c__5525__auto__;
var G__27271 = cljs.core.count(c__5525__auto__);
var G__27272 = (0);
seq__26420 = G__27269;
chunk__26421 = G__27270;
count__26422 = G__27271;
i__26423 = G__27272;
continue;
} else {
var it = cljs.core.first(seq__26420__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__27273 = cljs.core.next(seq__26420__$1);
var G__27274 = null;
var G__27275 = (0);
var G__27276 = (0);
seq__26420 = G__27273;
chunk__26421 = G__27274;
count__26422 = G__27275;
i__26423 = G__27276;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k26435,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__26444 = k26435;
var G__26444__$1 = (((G__26444 instanceof cljs.core.Keyword))?G__26444.fqn:null);
switch (G__26444__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k26435,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__26454){
var vec__26455 = p__26454;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26455,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26455,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26434){
var self__ = this;
var G__26434__$1 = this;
return (new cljs.core.RecordIter((0),G__26434__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this26436,other26437){
var self__ = this;
var this26436__$1 = this;
return (((!((other26437 == null)))) && ((((this26436__$1.constructor === other26437.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26436__$1.x,other26437.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26436__$1.y,other26437.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26436__$1.__extmap,other26437.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k26435){
var self__ = this;
var this__5307__auto____$1 = this;
var G__26479 = k26435;
var G__26479__$1 = (((G__26479 instanceof cljs.core.Keyword))?G__26479.fqn:null);
switch (G__26479__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k26435);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__26434){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__26482 = cljs.core.keyword_identical_QMARK_;
var expr__26483 = k__5309__auto__;
if(cljs.core.truth_((pred__26482.cljs$core$IFn$_invoke$arity$2 ? pred__26482.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__26483) : pred__26482.call(null, new cljs.core.Keyword(null,"x","x",2099068185),expr__26483)))){
return (new shadow.dom.Coordinate(G__26434,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__26482.cljs$core$IFn$_invoke$arity$2 ? pred__26482.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__26483) : pred__26482.call(null, new cljs.core.Keyword(null,"y","y",-1757859776),expr__26483)))){
return (new shadow.dom.Coordinate(self__.x,G__26434,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__26434),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__26434){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__26434,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__26438){
var extmap__5342__auto__ = (function (){var G__26503 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__26438,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__26438)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__26503);
} else {
return G__26503;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__26438),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__26438),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k26524,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__26535 = k26524;
var G__26535__$1 = (((G__26535 instanceof cljs.core.Keyword))?G__26535.fqn:null);
switch (G__26535__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k26524,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__26543){
var vec__26544 = p__26543;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26544,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26544,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26523){
var self__ = this;
var G__26523__$1 = this;
return (new cljs.core.RecordIter((0),G__26523__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this26525,other26526){
var self__ = this;
var this26525__$1 = this;
return (((!((other26526 == null)))) && ((((this26525__$1.constructor === other26526.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26525__$1.w,other26526.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26525__$1.h,other26526.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26525__$1.__extmap,other26526.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k26524){
var self__ = this;
var this__5307__auto____$1 = this;
var G__26579 = k26524;
var G__26579__$1 = (((G__26579 instanceof cljs.core.Keyword))?G__26579.fqn:null);
switch (G__26579__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k26524);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__26523){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__26583 = cljs.core.keyword_identical_QMARK_;
var expr__26584 = k__5309__auto__;
if(cljs.core.truth_((pred__26583.cljs$core$IFn$_invoke$arity$2 ? pred__26583.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__26584) : pred__26583.call(null, new cljs.core.Keyword(null,"w","w",354169001),expr__26584)))){
return (new shadow.dom.Size(G__26523,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__26583.cljs$core$IFn$_invoke$arity$2 ? pred__26583.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__26584) : pred__26583.call(null, new cljs.core.Keyword(null,"h","h",1109658740),expr__26584)))){
return (new shadow.dom.Size(self__.w,G__26523,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__26523),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__26523){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__26523,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__26530){
var extmap__5342__auto__ = (function (){var G__26589 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__26530,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__26530)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__26589);
} else {
return G__26589;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__26530),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__26530),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__27309 = (i + (1));
var G__27310 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__27309;
ret = G__27310;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__26594){
var vec__26595 = p__26594;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26595,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26595,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__26603 = arguments.length;
switch (G__26603) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__27317 = ps;
var G__27318 = (i + (1));
el__$1 = G__27317;
i = G__27318;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null, parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__26700 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26700,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26700,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26700,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__26710_27326 = cljs.core.seq(props);
var chunk__26711_27327 = null;
var count__26712_27328 = (0);
var i__26713_27329 = (0);
while(true){
if((i__26713_27329 < count__26712_27328)){
var vec__26748_27330 = chunk__26711_27327.cljs$core$IIndexed$_nth$arity$2(null, i__26713_27329);
var k_27331 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26748_27330,(0),null);
var v_27332 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26748_27330,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_27331);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_27331),v_27332);


var G__27333 = seq__26710_27326;
var G__27334 = chunk__26711_27327;
var G__27335 = count__26712_27328;
var G__27336 = (i__26713_27329 + (1));
seq__26710_27326 = G__27333;
chunk__26711_27327 = G__27334;
count__26712_27328 = G__27335;
i__26713_27329 = G__27336;
continue;
} else {
var temp__5804__auto___27337 = cljs.core.seq(seq__26710_27326);
if(temp__5804__auto___27337){
var seq__26710_27338__$1 = temp__5804__auto___27337;
if(cljs.core.chunked_seq_QMARK_(seq__26710_27338__$1)){
var c__5525__auto___27339 = cljs.core.chunk_first(seq__26710_27338__$1);
var G__27340 = cljs.core.chunk_rest(seq__26710_27338__$1);
var G__27341 = c__5525__auto___27339;
var G__27342 = cljs.core.count(c__5525__auto___27339);
var G__27343 = (0);
seq__26710_27326 = G__27340;
chunk__26711_27327 = G__27341;
count__26712_27328 = G__27342;
i__26713_27329 = G__27343;
continue;
} else {
var vec__26756_27344 = cljs.core.first(seq__26710_27338__$1);
var k_27345 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26756_27344,(0),null);
var v_27346 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26756_27344,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_27345);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_27345),v_27346);


var G__27350 = cljs.core.next(seq__26710_27338__$1);
var G__27351 = null;
var G__27352 = (0);
var G__27353 = (0);
seq__26710_27326 = G__27350;
chunk__26711_27327 = G__27351;
count__26712_27328 = G__27352;
i__26713_27329 = G__27353;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null, );
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__26770 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26770,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26770,(1),null);
var seq__26773_27358 = cljs.core.seq(node_children);
var chunk__26775_27359 = null;
var count__26776_27360 = (0);
var i__26777_27361 = (0);
while(true){
if((i__26777_27361 < count__26776_27360)){
var child_struct_27362 = chunk__26775_27359.cljs$core$IIndexed$_nth$arity$2(null, i__26777_27361);
if((!((child_struct_27362 == null)))){
if(typeof child_struct_27362 === 'string'){
var text_27363 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_27363),child_struct_27362].join(''));
} else {
var children_27364 = shadow.dom.svg_node(child_struct_27362);
if(cljs.core.seq_QMARK_(children_27364)){
var seq__26802_27365 = cljs.core.seq(children_27364);
var chunk__26804_27366 = null;
var count__26805_27367 = (0);
var i__26806_27368 = (0);
while(true){
if((i__26806_27368 < count__26805_27367)){
var child_27369 = chunk__26804_27366.cljs$core$IIndexed$_nth$arity$2(null, i__26806_27368);
if(cljs.core.truth_(child_27369)){
node.appendChild(child_27369);


var G__27370 = seq__26802_27365;
var G__27371 = chunk__26804_27366;
var G__27372 = count__26805_27367;
var G__27373 = (i__26806_27368 + (1));
seq__26802_27365 = G__27370;
chunk__26804_27366 = G__27371;
count__26805_27367 = G__27372;
i__26806_27368 = G__27373;
continue;
} else {
var G__27378 = seq__26802_27365;
var G__27379 = chunk__26804_27366;
var G__27380 = count__26805_27367;
var G__27381 = (i__26806_27368 + (1));
seq__26802_27365 = G__27378;
chunk__26804_27366 = G__27379;
count__26805_27367 = G__27380;
i__26806_27368 = G__27381;
continue;
}
} else {
var temp__5804__auto___27382 = cljs.core.seq(seq__26802_27365);
if(temp__5804__auto___27382){
var seq__26802_27384__$1 = temp__5804__auto___27382;
if(cljs.core.chunked_seq_QMARK_(seq__26802_27384__$1)){
var c__5525__auto___27385 = cljs.core.chunk_first(seq__26802_27384__$1);
var G__27386 = cljs.core.chunk_rest(seq__26802_27384__$1);
var G__27387 = c__5525__auto___27385;
var G__27388 = cljs.core.count(c__5525__auto___27385);
var G__27389 = (0);
seq__26802_27365 = G__27386;
chunk__26804_27366 = G__27387;
count__26805_27367 = G__27388;
i__26806_27368 = G__27389;
continue;
} else {
var child_27390 = cljs.core.first(seq__26802_27384__$1);
if(cljs.core.truth_(child_27390)){
node.appendChild(child_27390);


var G__27391 = cljs.core.next(seq__26802_27384__$1);
var G__27392 = null;
var G__27393 = (0);
var G__27394 = (0);
seq__26802_27365 = G__27391;
chunk__26804_27366 = G__27392;
count__26805_27367 = G__27393;
i__26806_27368 = G__27394;
continue;
} else {
var G__27395 = cljs.core.next(seq__26802_27384__$1);
var G__27396 = null;
var G__27397 = (0);
var G__27398 = (0);
seq__26802_27365 = G__27395;
chunk__26804_27366 = G__27396;
count__26805_27367 = G__27397;
i__26806_27368 = G__27398;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_27364);
}
}


var G__27399 = seq__26773_27358;
var G__27400 = chunk__26775_27359;
var G__27401 = count__26776_27360;
var G__27402 = (i__26777_27361 + (1));
seq__26773_27358 = G__27399;
chunk__26775_27359 = G__27400;
count__26776_27360 = G__27401;
i__26777_27361 = G__27402;
continue;
} else {
var G__27403 = seq__26773_27358;
var G__27404 = chunk__26775_27359;
var G__27405 = count__26776_27360;
var G__27406 = (i__26777_27361 + (1));
seq__26773_27358 = G__27403;
chunk__26775_27359 = G__27404;
count__26776_27360 = G__27405;
i__26777_27361 = G__27406;
continue;
}
} else {
var temp__5804__auto___27407 = cljs.core.seq(seq__26773_27358);
if(temp__5804__auto___27407){
var seq__26773_27408__$1 = temp__5804__auto___27407;
if(cljs.core.chunked_seq_QMARK_(seq__26773_27408__$1)){
var c__5525__auto___27409 = cljs.core.chunk_first(seq__26773_27408__$1);
var G__27410 = cljs.core.chunk_rest(seq__26773_27408__$1);
var G__27411 = c__5525__auto___27409;
var G__27412 = cljs.core.count(c__5525__auto___27409);
var G__27413 = (0);
seq__26773_27358 = G__27410;
chunk__26775_27359 = G__27411;
count__26776_27360 = G__27412;
i__26777_27361 = G__27413;
continue;
} else {
var child_struct_27414 = cljs.core.first(seq__26773_27408__$1);
if((!((child_struct_27414 == null)))){
if(typeof child_struct_27414 === 'string'){
var text_27415 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_27415),child_struct_27414].join(''));
} else {
var children_27416 = shadow.dom.svg_node(child_struct_27414);
if(cljs.core.seq_QMARK_(children_27416)){
var seq__26814_27417 = cljs.core.seq(children_27416);
var chunk__26816_27418 = null;
var count__26817_27419 = (0);
var i__26818_27420 = (0);
while(true){
if((i__26818_27420 < count__26817_27419)){
var child_27421 = chunk__26816_27418.cljs$core$IIndexed$_nth$arity$2(null, i__26818_27420);
if(cljs.core.truth_(child_27421)){
node.appendChild(child_27421);


var G__27422 = seq__26814_27417;
var G__27423 = chunk__26816_27418;
var G__27424 = count__26817_27419;
var G__27425 = (i__26818_27420 + (1));
seq__26814_27417 = G__27422;
chunk__26816_27418 = G__27423;
count__26817_27419 = G__27424;
i__26818_27420 = G__27425;
continue;
} else {
var G__27426 = seq__26814_27417;
var G__27427 = chunk__26816_27418;
var G__27428 = count__26817_27419;
var G__27429 = (i__26818_27420 + (1));
seq__26814_27417 = G__27426;
chunk__26816_27418 = G__27427;
count__26817_27419 = G__27428;
i__26818_27420 = G__27429;
continue;
}
} else {
var temp__5804__auto___27430__$1 = cljs.core.seq(seq__26814_27417);
if(temp__5804__auto___27430__$1){
var seq__26814_27431__$1 = temp__5804__auto___27430__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26814_27431__$1)){
var c__5525__auto___27432 = cljs.core.chunk_first(seq__26814_27431__$1);
var G__27433 = cljs.core.chunk_rest(seq__26814_27431__$1);
var G__27434 = c__5525__auto___27432;
var G__27435 = cljs.core.count(c__5525__auto___27432);
var G__27436 = (0);
seq__26814_27417 = G__27433;
chunk__26816_27418 = G__27434;
count__26817_27419 = G__27435;
i__26818_27420 = G__27436;
continue;
} else {
var child_27437 = cljs.core.first(seq__26814_27431__$1);
if(cljs.core.truth_(child_27437)){
node.appendChild(child_27437);


var G__27438 = cljs.core.next(seq__26814_27431__$1);
var G__27439 = null;
var G__27440 = (0);
var G__27441 = (0);
seq__26814_27417 = G__27438;
chunk__26816_27418 = G__27439;
count__26817_27419 = G__27440;
i__26818_27420 = G__27441;
continue;
} else {
var G__27442 = cljs.core.next(seq__26814_27431__$1);
var G__27443 = null;
var G__27444 = (0);
var G__27445 = (0);
seq__26814_27417 = G__27442;
chunk__26816_27418 = G__27443;
count__26817_27419 = G__27444;
i__26818_27420 = G__27445;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_27416);
}
}


var G__27446 = cljs.core.next(seq__26773_27408__$1);
var G__27447 = null;
var G__27448 = (0);
var G__27449 = (0);
seq__26773_27358 = G__27446;
chunk__26775_27359 = G__27447;
count__26776_27360 = G__27448;
i__26777_27361 = G__27449;
continue;
} else {
var G__27450 = cljs.core.next(seq__26773_27408__$1);
var G__27451 = null;
var G__27452 = (0);
var G__27453 = (0);
seq__26773_27358 = G__27450;
chunk__26775_27359 = G__27451;
count__26776_27360 = G__27452;
i__26777_27361 = G__27453;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___27454 = arguments.length;
var i__5727__auto___27455 = (0);
while(true){
if((i__5727__auto___27455 < len__5726__auto___27454)){
args__5732__auto__.push((arguments[i__5727__auto___27455]));

var G__27456 = (i__5727__auto___27455 + (1));
i__5727__auto___27455 = G__27456;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq26835){
var G__26836 = cljs.core.first(seq26835);
var seq26835__$1 = cljs.core.next(seq26835);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26836,seq26835__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__26848 = arguments.length;
switch (G__26848) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5000__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5000__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5000__auto__;
}
})())){
var c__23457__auto___27463 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23458__auto__ = (function (){var switch__23318__auto__ = (function (state_26859){
var state_val_26860 = (state_26859[(1)]);
if((state_val_26860 === (1))){
var state_26859__$1 = state_26859;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26859__$1,(2),once_or_cleanup);
} else {
if((state_val_26860 === (2))){
var inst_26856 = (state_26859[(2)]);
var inst_26857 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_26859__$1 = (function (){var statearr_26865 = state_26859;
(statearr_26865[(7)] = inst_26856);

return statearr_26865;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26859__$1,inst_26857);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__23319__auto__ = null;
var shadow$dom$state_machine__23319__auto____0 = (function (){
var statearr_26866 = [null,null,null,null,null,null,null,null];
(statearr_26866[(0)] = shadow$dom$state_machine__23319__auto__);

(statearr_26866[(1)] = (1));

return statearr_26866;
});
var shadow$dom$state_machine__23319__auto____1 = (function (state_26859){
while(true){
var ret_value__23320__auto__ = (function (){try{while(true){
var result__23321__auto__ = switch__23318__auto__(state_26859);
if(cljs.core.keyword_identical_QMARK_(result__23321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23321__auto__;
}
break;
}
}catch (e26867){var ex__23322__auto__ = e26867;
var statearr_26868_27465 = state_26859;
(statearr_26868_27465[(2)] = ex__23322__auto__);


if(cljs.core.seq((state_26859[(4)]))){
var statearr_26869_27466 = state_26859;
(statearr_26869_27466[(1)] = cljs.core.first((state_26859[(4)])));

} else {
throw ex__23322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27467 = state_26859;
state_26859 = G__27467;
continue;
} else {
return ret_value__23320__auto__;
}
break;
}
});
shadow$dom$state_machine__23319__auto__ = function(state_26859){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__23319__auto____0.call(this);
case 1:
return shadow$dom$state_machine__23319__auto____1.call(this,state_26859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__23319__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__23319__auto____0;
shadow$dom$state_machine__23319__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__23319__auto____1;
return shadow$dom$state_machine__23319__auto__;
})()
})();
var state__23459__auto__ = (function (){var statearr_26875 = f__23458__auto__();
(statearr_26875[(6)] = c__23457__auto___27463);

return statearr_26875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23459__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
