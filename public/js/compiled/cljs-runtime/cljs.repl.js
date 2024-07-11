goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__26609){
var map__26611 = p__26609;
var map__26611__$1 = cljs.core.__destructure_map(map__26611);
var m = map__26611__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26611__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26611__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26617_26914 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26618_26915 = null;
var count__26619_26916 = (0);
var i__26620_26917 = (0);
while(true){
if((i__26620_26917 < count__26619_26916)){
var f_26918 = chunk__26618_26915.cljs$core$IIndexed$_nth$arity$2(null, i__26620_26917);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_26918], 0));


var G__26919 = seq__26617_26914;
var G__26920 = chunk__26618_26915;
var G__26921 = count__26619_26916;
var G__26922 = (i__26620_26917 + (1));
seq__26617_26914 = G__26919;
chunk__26618_26915 = G__26920;
count__26619_26916 = G__26921;
i__26620_26917 = G__26922;
continue;
} else {
var temp__5804__auto___26923 = cljs.core.seq(seq__26617_26914);
if(temp__5804__auto___26923){
var seq__26617_26924__$1 = temp__5804__auto___26923;
if(cljs.core.chunked_seq_QMARK_(seq__26617_26924__$1)){
var c__5525__auto___26925 = cljs.core.chunk_first(seq__26617_26924__$1);
var G__26929 = cljs.core.chunk_rest(seq__26617_26924__$1);
var G__26930 = c__5525__auto___26925;
var G__26931 = cljs.core.count(c__5525__auto___26925);
var G__26932 = (0);
seq__26617_26914 = G__26929;
chunk__26618_26915 = G__26930;
count__26619_26916 = G__26931;
i__26620_26917 = G__26932;
continue;
} else {
var f_26933 = cljs.core.first(seq__26617_26924__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_26933], 0));


var G__26934 = cljs.core.next(seq__26617_26924__$1);
var G__26935 = null;
var G__26936 = (0);
var G__26937 = (0);
seq__26617_26914 = G__26934;
chunk__26618_26915 = G__26935;
count__26619_26916 = G__26936;
i__26620_26917 = G__26937;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_26938 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_26938], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_26938)))?cljs.core.second(arglists_26938):arglists_26938)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26626_26939 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26627_26940 = null;
var count__26628_26941 = (0);
var i__26629_26942 = (0);
while(true){
if((i__26629_26942 < count__26628_26941)){
var vec__26751_26943 = chunk__26627_26940.cljs$core$IIndexed$_nth$arity$2(null, i__26629_26942);
var name_26944 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26751_26943,(0),null);
var map__26754_26945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26751_26943,(1),null);
var map__26754_26946__$1 = cljs.core.__destructure_map(map__26754_26945);
var doc_26947 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26754_26946__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_26948 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26754_26946__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_26944], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_26948], 0));

if(cljs.core.truth_(doc_26947)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_26947], 0));
} else {
}


var G__26949 = seq__26626_26939;
var G__26950 = chunk__26627_26940;
var G__26951 = count__26628_26941;
var G__26952 = (i__26629_26942 + (1));
seq__26626_26939 = G__26949;
chunk__26627_26940 = G__26950;
count__26628_26941 = G__26951;
i__26629_26942 = G__26952;
continue;
} else {
var temp__5804__auto___26953 = cljs.core.seq(seq__26626_26939);
if(temp__5804__auto___26953){
var seq__26626_26954__$1 = temp__5804__auto___26953;
if(cljs.core.chunked_seq_QMARK_(seq__26626_26954__$1)){
var c__5525__auto___26955 = cljs.core.chunk_first(seq__26626_26954__$1);
var G__26956 = cljs.core.chunk_rest(seq__26626_26954__$1);
var G__26957 = c__5525__auto___26955;
var G__26958 = cljs.core.count(c__5525__auto___26955);
var G__26959 = (0);
seq__26626_26939 = G__26956;
chunk__26627_26940 = G__26957;
count__26628_26941 = G__26958;
i__26629_26942 = G__26959;
continue;
} else {
var vec__26760_26960 = cljs.core.first(seq__26626_26954__$1);
var name_26961 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26760_26960,(0),null);
var map__26763_26962 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26760_26960,(1),null);
var map__26763_26963__$1 = cljs.core.__destructure_map(map__26763_26962);
var doc_26964 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26763_26963__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_26965 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26763_26963__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_26961], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_26965], 0));

if(cljs.core.truth_(doc_26964)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_26964], 0));
} else {
}


var G__26966 = cljs.core.next(seq__26626_26954__$1);
var G__26967 = null;
var G__26968 = (0);
var G__26969 = (0);
seq__26626_26939 = G__26966;
chunk__26627_26940 = G__26967;
count__26628_26941 = G__26968;
i__26629_26942 = G__26969;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__26766 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__26767 = null;
var count__26768 = (0);
var i__26769 = (0);
while(true){
if((i__26769 < count__26768)){
var role = chunk__26767.cljs$core$IIndexed$_nth$arity$2(null, i__26769);
var temp__5804__auto___26970__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___26970__$1)){
var spec_26971 = temp__5804__auto___26970__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_26971)], 0));
} else {
}


var G__26972 = seq__26766;
var G__26973 = chunk__26767;
var G__26974 = count__26768;
var G__26975 = (i__26769 + (1));
seq__26766 = G__26972;
chunk__26767 = G__26973;
count__26768 = G__26974;
i__26769 = G__26975;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__26766);
if(temp__5804__auto____$1){
var seq__26766__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__26766__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__26766__$1);
var G__26976 = cljs.core.chunk_rest(seq__26766__$1);
var G__26977 = c__5525__auto__;
var G__26978 = cljs.core.count(c__5525__auto__);
var G__26979 = (0);
seq__26766 = G__26976;
chunk__26767 = G__26977;
count__26768 = G__26978;
i__26769 = G__26979;
continue;
} else {
var role = cljs.core.first(seq__26766__$1);
var temp__5804__auto___26980__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___26980__$2)){
var spec_26981 = temp__5804__auto___26980__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_26981)], 0));
} else {
}


var G__26982 = cljs.core.next(seq__26766__$1);
var G__26983 = null;
var G__26984 = (0);
var G__26985 = (0);
seq__26766 = G__26982;
chunk__26767 = G__26983;
count__26768 = G__26984;
i__26769 = G__26985;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__26808 = datafied_throwable;
var map__26808__$1 = cljs.core.__destructure_map(map__26808);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26808__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26808__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26808__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__26809 = cljs.core.last(via);
var map__26809__$1 = cljs.core.__destructure_map(map__26809);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26809__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26809__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26809__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__26810 = data;
var map__26810__$1 = cljs.core.__destructure_map(map__26810);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26810__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26810__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26810__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__26811 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__26811__$1 = cljs.core.__destructure_map(map__26811);
var top_data = map__26811__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26811__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__26813 = phase;
var G__26813__$1 = (((G__26813 instanceof cljs.core.Keyword))?G__26813.fqn:null);
switch (G__26813__$1) {
case "read-source":
var map__26820 = data;
var map__26820__$1 = cljs.core.__destructure_map(map__26820);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26820__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26820__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__26821 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__26821__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26821,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__26821);
var G__26821__$2 = (cljs.core.truth_((function (){var fexpr__26823 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__26823.cljs$core$IFn$_invoke$arity$1 ? fexpr__26823.cljs$core$IFn$_invoke$arity$1(source) : fexpr__26823.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__26821__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__26821__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26821__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__26821__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__26824 = top_data;
var G__26824__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26824,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__26824);
var G__26824__$2 = (cljs.core.truth_((function (){var fexpr__26825 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__26825.cljs$core$IFn$_invoke$arity$1 ? fexpr__26825.cljs$core$IFn$_invoke$arity$1(source) : fexpr__26825.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__26824__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__26824__$1);
var G__26824__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26824__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__26824__$2);
var G__26824__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26824__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__26824__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26824__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__26824__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__26830 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26830,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26830,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26830,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26830,(3),null);
var G__26833 = top_data;
var G__26833__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26833,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__26833);
var G__26833__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26833__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__26833__$1);
var G__26833__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26833__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__26833__$2);
var G__26833__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26833__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__26833__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26833__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__26833__$4;
}

break;
case "execution":
var vec__26837 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26837,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26837,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26837,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26837,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__26801_SHARP_){
var or__5002__auto__ = (p1__26801_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__26841 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__26841.cljs$core$IFn$_invoke$arity$1 ? fexpr__26841.cljs$core$IFn$_invoke$arity$1(p1__26801_SHARP_) : fexpr__26841.call(null, p1__26801_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__26843 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__26843__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26843,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__26843);
var G__26843__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26843__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__26843__$1);
var G__26843__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26843__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__26843__$2);
var G__26843__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26843__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__26843__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26843__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__26843__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26813__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__26863){
var map__26864 = p__26863;
var map__26864__$1 = cljs.core.__destructure_map(map__26864);
var triage_data = map__26864__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26864__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26864__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26864__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26864__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26864__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26864__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26864__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26864__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__26870 = phase;
var G__26870__$1 = (((G__26870 instanceof cljs.core.Keyword))?G__26870.fqn:null);
switch (G__26870__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__26871 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__26872 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__26873 = loc;
var G__26874 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__26876_27000 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__26877_27001 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__26878_27002 = true;
var _STAR_print_fn_STAR__temp_val__26879_27003 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__26878_27002);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__26879_27003);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26852_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__26852_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__26877_27001);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__26876_27000);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__26871,G__26872,G__26873,G__26874) : format.call(null, G__26871,G__26872,G__26873,G__26874));

break;
case "macroexpansion":
var G__26880 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__26881 = cause_type;
var G__26882 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__26883 = loc;
var G__26884 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__26880,G__26881,G__26882,G__26883,G__26884) : format.call(null, G__26880,G__26881,G__26882,G__26883,G__26884));

break;
case "compile-syntax-check":
var G__26885 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__26886 = cause_type;
var G__26887 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__26888 = loc;
var G__26889 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__26885,G__26886,G__26887,G__26888,G__26889) : format.call(null, G__26885,G__26886,G__26887,G__26888,G__26889));

break;
case "compilation":
var G__26890 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__26891 = cause_type;
var G__26892 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__26893 = loc;
var G__26894 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__26890,G__26891,G__26892,G__26893,G__26894) : format.call(null, G__26890,G__26891,G__26892,G__26893,G__26894));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__26895 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__26896 = symbol;
var G__26897 = loc;
var G__26898 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__26899_27008 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__26900_27009 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__26901_27010 = true;
var _STAR_print_fn_STAR__temp_val__26902_27011 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__26901_27010);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__26902_27011);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26853_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__26853_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__26900_27009);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__26899_27008);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__26895,G__26896,G__26897,G__26898) : format.call(null, G__26895,G__26896,G__26897,G__26898));
} else {
var G__26903 = "Execution error%s at %s(%s).\n%s\n";
var G__26904 = cause_type;
var G__26905 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__26906 = loc;
var G__26907 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__26903,G__26904,G__26905,G__26906,G__26907) : format.call(null, G__26903,G__26904,G__26905,G__26906,G__26907));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26870__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
