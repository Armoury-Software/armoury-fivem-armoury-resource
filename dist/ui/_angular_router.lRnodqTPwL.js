var ri = Object.defineProperty, ni = Object.defineProperties;
var ii = Object.getOwnPropertyDescriptors;
var Tr = Object.getOwnPropertySymbols;
var oi = Object.prototype.hasOwnProperty, si = Object.prototype.propertyIsEnumerable;
var Dr = (t, n, e) => n in t ? ri(t, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[n] = e, d = (t, n) => { for (var e in n ||= {})
    oi.call(n, e) && Dr(t, e, n[e]); if (Tr)
    for (var e of Tr(n))
        si.call(n, e) && Dr(t, e, n[e]); return t; }, D = (t, n) => ni(t, ii(n));
var C = (t, n, e) => new Promise((r, i) => { var o = a => { try {
    c(e.next(a));
}
catch (u) {
    i(u);
} }, s = a => { try {
    c(e.throw(a));
}
catch (u) {
    i(u);
} }, c = a => a.done ? r(a.value) : Promise.resolve(a.value).then(o, s); c((e = e.apply(t, n)).next()); });
import { DOCUMENT as ai, Location as ir } from "@angular/common";
import * as R from "@angular/core";
import { \u0275isPromise as ci, \u0275RuntimeError as _, computed as le, signal as $t, InjectionToken as re, EventEmitter as Je, input as ui, inject as v, ViewContainerRef as li, ChangeDetectorRef as di, reflectComponentType as hi, runInInjectionContext as z, \u0275isInjectable as fi, \u0275isNgModule as ya, isStandalone as Ra, createEnvironmentInjector as pi, Compiler as gi, \u0275maybeUnwrapDefaultExport as xr, NgModuleFactory as vi, afterNextRender as mi, EnvironmentInjector as or, DestroyRef as yi, untracked as Pe, \u0275Console as Ri, \u0275PendingTasksInternal as Si, \u0275INTERNAL_APPLICATION_ERROR_HANDLER as Ci, \u0275formatRuntimeError as wi } from "@angular/core";
import { isObservable as kr, from as W, of as m, BehaviorSubject as B, combineLatest as $r, EmptyError as bi, Observable as Ii, concat as Ei, defer as sr, pipe as Mi, EMPTY as F, throwError as Ai, Subject as zt, Subscription as Ni } from "rxjs";
import { first as pe, map as P, switchMap as H, take as xe, startWith as Ti, filter as ke, takeUntil as qt, mergeMap as he, concatMap as zr, tap as G, takeLast as qr, catchError as Fr, finalize as Di } from "rxjs/operators";
import * as Hr from "@angular/platform-browser";
var g = "primary", Ve = Symbol("RouteTitle"), Ft = class {
    params;
    constructor(n) { this.params = n || {}; }
    has(n) { return Object.hasOwn(this.params, n); }
    get(n) { if (this.has(n)) {
        let e = this.params[n];
        return Array.isArray(e) ? e[0] : e;
    } return null; }
    getAll(n) { if (this.has(n)) {
        let e = this.params[n];
        return Array.isArray(e) ? e : [e];
    } return []; }
    get keys() { return Object.keys(this.params); }
};
function ee(t) { return new Ft(t); }
function Lt(t, n, e) { for (let r = 0; r < t.length; r++) {
    let i = t[r], o = n[r];
    if (i[0] === ":")
        e[i.substring(1)] = o;
    else if (i !== o.path)
        return !1;
} return !0; }
function Br(t, n, e) { let r = e.path.split("/"), i = r.indexOf("**"); if (i === -1) {
    if (r.length > t.length || e.pathMatch === "full" && (n.hasChildren() || r.length < t.length))
        return null;
    let a = {}, u = t.slice(0, r.length);
    return Lt(r, u, a) ? { consumed: u, posParams: a } : null;
} if (i !== r.lastIndexOf("**"))
    return null; let o = r.slice(0, i), s = r.slice(i + 1); if (o.length + s.length > t.length || e.pathMatch === "full" && n.hasChildren() && e.path !== "**")
    return null; let c = {}; return !Lt(o, t.slice(0, o.length), c) || !Lt(s, t.slice(t.length - s.length), c) ? null : { consumed: t, posParams: c }; }
function it(t) { return new Promise((n, e) => { t.pipe(pe()).subscribe({ next: r => n(r), error: r => e(r) }); }); }
function _i(t, n) { if (t.length !== n.length)
    return !1; for (let e = 0; e < t.length; ++e)
    if (!Q(t[e], n[e]))
        return !1; return !0; }
function Q(t, n) { let e = t ? Ht(t) : void 0, r = n ? Ht(n) : void 0; if (!e || !r || e.length != r.length)
    return !1; let i; for (let o = 0; o < e.length; o++)
    if (i = e[o], !Vr(t[i], n[i]))
        return !1; return !0; }
function Ht(t) { return [...Object.keys(t), ...Object.getOwnPropertySymbols(t)]; }
function Vr(t, n) { if (Array.isArray(t) && Array.isArray(n)) {
    if (t.length !== n.length)
        return !1;
    let e = [...t].sort(), r = [...n].sort();
    return e.every((i, o) => r[o] === i);
}
else
    return t === n; }
function Ui(t) { return t.length > 0 ? t[t.length - 1] : null; }
function ge(t) { return kr(t) ? t : ci(t) ? W(Promise.resolve(t)) : m(t); }
function Gr(t) { return kr(t) ? it(t) : Promise.resolve(t); }
var Oi = { exact: Qr, subset: Kr }, Wr = { exact: Pi, subset: Li, ignored: () => !0 }, ar = { paths: "exact", fragment: "ignored", matrixParams: "ignored", queryParams: "exact" }, we = { paths: "subset", fragment: "ignored", matrixParams: "ignored", queryParams: "subset" };
function cr(t, n, e) { let r = t instanceof U ? t : n.parseUrl(t); return le(() => Bt(n.lastSuccessfulNavigation()?.finalUrl ?? new U, r, d(d({}, we), e))); }
function Bt(t, n, e) { return Oi[e.paths](t.root, n.root, e.matrixParams) && Wr[e.queryParams](t.queryParams, n.queryParams) && !(e.fragment === "exact" && t.fragment !== n.fragment); }
function Pi(t, n) { return Q(t, n); }
function Qr(t, n, e) { if (!de(t.segments, n.segments) || !tt(t.segments, n.segments, e) || t.numberOfChildren !== n.numberOfChildren)
    return !1; for (let r in n.children)
    if (!t.children[r] || !Qr(t.children[r], n.children[r], e))
        return !1; return !0; }
function Li(t, n) { return Object.keys(n).length <= Object.keys(t).length && Object.keys(n).every(e => Vr(t[e], n[e])); }
function Kr(t, n, e) { return Yr(t, n, n.segments, e); }
function Yr(t, n, e, r) { if (t.segments.length > e.length) {
    let i = t.segments.slice(0, e.length);
    return !(!de(i, e) || n.hasChildren() || !tt(i, e, r));
}
else if (t.segments.length === e.length) {
    if (!de(t.segments, e) || !tt(t.segments, e, r))
        return !1;
    for (let i in n.children)
        if (!t.children[i] || !Kr(t.children[i], n.children[i], r))
            return !1;
    return !0;
}
else {
    let i = e.slice(0, t.segments.length), o = e.slice(t.segments.length);
    return !de(t.segments, i) || !tt(t.segments, i, r) || !t.children[g] ? !1 : Yr(t.children[g], n, o, r);
} }
function tt(t, n, e) { return n.every((r, i) => Wr[e](t[i].parameters, r.parameters)); }
var U = class {
    root;
    queryParams;
    fragment;
    _queryParamMap;
    constructor(n = new y([], {}), e = {}, r = null) { this.root = n, this.queryParams = e, this.fragment = r; }
    get queryParamMap() { return this._queryParamMap ??= ee(this.queryParams), this._queryParamMap; }
    toString() { return ki.serialize(this); }
}, y = class {
    segments;
    children;
    parent = null;
    constructor(n, e) { this.segments = n, this.children = e, Object.values(e).forEach(r => r.parent = this); }
    hasChildren() { return this.numberOfChildren > 0; }
    get numberOfChildren() { return Object.keys(this.children).length; }
    toString() { return rt(this); }
}, oe = class {
    path;
    parameters;
    _parameterMap;
    constructor(n, e) { this.path = n, this.parameters = e; }
    get parameterMap() { return this._parameterMap ??= ee(this.parameters), this._parameterMap; }
    toString() { return Jr(this); }
};
function ji(t, n) { return de(t, n) && t.every((e, r) => Q(e.parameters, n[r].parameters)); }
function de(t, n) { return t.length !== n.length ? !1 : t.every((e, r) => e.path === n[r].path); }
function xi(t, n) { let e = []; return Object.entries(t.children).forEach(([r, i]) => { r === g && (e = e.concat(n(i, r))); }), Object.entries(t.children).forEach(([r, i]) => { r !== g && (e = e.concat(n(i, r))); }), e; }
var ae = (() => { class t {
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = R.\u0275\u0275defineService({ token: t, factory: () => new te });
} return t; })(), te = class {
    parse(n) { let e = new Gt(n); return new U(e.parseRootSegment(), e.parseQueryParams(), e.parseFragment()); }
    serialize(n) { let e = `/${Ue(n.root, !0)}`, r = qi(n.queryParams), i = typeof n.fragment == "string" ? `#${$i(n.fragment)}` : ""; return `${e}${r}${i}`; }
}, ki = new te;
function rt(t) { return t.segments.map(n => Jr(n)).join("/"); }
function Ue(t, n) { if (!t.hasChildren())
    return rt(t); if (n) {
    let e = t.children[g] ? Ue(t.children[g], !1) : "", r = [];
    return Object.entries(t.children).forEach(([i, o]) => { i !== g && r.push(`${i}:${Ue(o, !1)}`); }), r.length > 0 ? `${e}(${r.join("//")})` : e;
}
else {
    let e = xi(t, (r, i) => i === g ? [Ue(t.children[g], !1)] : [`${i}:${Ue(r, !1)}`]);
    return Object.keys(t.children).length === 1 && t.children[g] != null ? `${rt(t)}/${e[0]}` : `${rt(t)}/(${e.join("//")})`;
} }
function Zr(t) { return encodeURIComponent(t).replace(/%40/g, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ","); }
function Xe(t) { return Zr(t).replace(/%3B/gi, ";"); }
function $i(t) { return encodeURI(t); }
function Vt(t) { return Zr(t).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/%26/gi, "&"); }
function nt(t) { return decodeURIComponent(t); }
function _r(t) { return nt(t.replace(/\+/g, "%20")); }
function Jr(t) { return `${Vt(t.path)}${zi(t.parameters)}`; }
function zi(t) { return Object.entries(t).map(([n, e]) => `;${Vt(n)}=${Vt(e)}`).join(""); }
function qi(t) { let n = Object.entries(t).map(([e, r]) => Array.isArray(r) ? r.map(i => `${Xe(e)}=${Xe(i)}`).join("&") : `${Xe(e)}=${Xe(r)}`).filter(e => e); return n.length ? `?${n.join("&")}` : ""; }
var Fi = /^[^\/()?;#]+/;
function jt(t) { let n = t.match(Fi); return n ? n[0] : ""; }
var Hi = /^[^\/()?;=#]+/;
function Bi(t) { let n = t.match(Hi); return n ? n[0] : ""; }
var Vi = /^[^=?&#]+/;
function Gi(t) { let n = t.match(Vi); return n ? n[0] : ""; }
var Wi = /^[^&#]+/;
function Qi(t) { let n = t.match(Wi); return n ? n[0] : ""; }
var Gt = class {
    url;
    remaining;
    constructor(n) { this.url = n, this.remaining = n; }
    parseRootSegment() { for (; this.consumeOptional("/");)
        ; return this.remaining === "" || this.peekStartsWith("?") || this.peekStartsWith("#") ? new y([], {}) : new y([], this.parseChildren()); }
    parseQueryParams() { let n = {}; if (this.consumeOptional("?"))
        do
            this.parseQueryParam(n);
        while (this.consumeOptional("&")); return n; }
    parseFragment() { return this.consumeOptional("#") ? decodeURIComponent(this.remaining) : null; }
    parseChildren(n = 0) { if (n > 50)
        throw new _(4010, !1); if (this.remaining === "")
        return {}; this.consumeOptional("/"); let e = []; for (this.peekStartsWith("(") || e.push(this.parseSegment()); this.peekStartsWith("/") && !this.peekStartsWith("//") && !this.peekStartsWith("/(");)
        this.capture("/"), e.push(this.parseSegment()); let r = {}; this.peekStartsWith("/(") && (this.capture("/"), r = this.parseParens(!0, n)); let i = {}; return this.peekStartsWith("(") && (i = this.parseParens(!1, n)), (e.length > 0 || Object.keys(r).length > 0) && (i[g] = new y(e, r)), i; }
    parseSegment() { let n = jt(this.remaining); if (n === "" && this.peekStartsWith(";"))
        throw new _(4009, !1); return this.capture(n), new oe(nt(n), this.parseMatrixParams()); }
    parseMatrixParams() { let n = {}; for (; this.consumeOptional(";");)
        this.parseParam(n); return n; }
    parseParam(n) { let e = Bi(this.remaining); if (!e)
        return; this.capture(e); let r = ""; if (this.consumeOptional("=")) {
        let i = jt(this.remaining);
        i && (r = i, this.capture(r));
    } n[nt(e)] = nt(r); }
    parseQueryParam(n) { let e = Gi(this.remaining); if (!e)
        return; this.capture(e); let r = ""; if (this.consumeOptional("=")) {
        let s = Qi(this.remaining);
        s && (r = s, this.capture(r));
    } let i = _r(e), o = _r(r); if (Object.hasOwn(n, i)) {
        let s = n[i];
        Array.isArray(s) || (s = [s], n[i] = s), s.push(o);
    }
    else
        n[i] = o; }
    parseParens(n, e) { let r = Object.create(null); for (this.capture("("); !this.consumeOptional(")") && this.remaining.length > 0;) {
        let i = jt(this.remaining), o = this.remaining[i.length];
        if (o !== "/" && o !== ")" && o !== ";")
            throw new _(4010, !1);
        let s;
        i.indexOf(":") > -1 ? (s = i.slice(0, i.indexOf(":")), this.capture(s), this.capture(":")) : n && (s = g);
        let c = this.parseChildren(e + 1);
        r[s ?? g] = Object.keys(c).length === 1 && c[g] ? c[g] : new y([], c), this.consumeOptional("//");
    } return r; }
    peekStartsWith(n) { return this.remaining.startsWith(n); }
    consumeOptional(n) { return this.peekStartsWith(n) ? (this.remaining = this.remaining.substring(n.length), !0) : !1; }
    capture(n) { if (!this.consumeOptional(n))
        throw new _(4011, !1); }
};
function Xr(t) { return t.segments.length > 0 ? new y([], { [g]: t }) : t; }
function en(t) { let n = Object.create(null); for (let [r, i] of Object.entries(t.children)) {
    let o = en(i);
    if (r === g && o.segments.length === 0 && o.hasChildren())
        for (let [s, c] of Object.entries(o.children))
            n[s] = c;
    else
        (o.segments.length > 0 || o.hasChildren()) && (n[r] = o);
} let e = new y(t.segments, n); return Ki(e); }
function Ki(t) { if (t.numberOfChildren === 1 && t.children[g]) {
    let n = t.children[g];
    return new y(t.segments.concat(n.segments), n.children);
} return t; }
function se(t) { return t instanceof U; }
function tn(t, n, e = null, r = null, i = new te) { let o = rn(t); return nn(o, n, e, r, i); }
function rn(t) { let n; function e(o) { let s = {}; for (let a of o.children) {
    let u = e(a);
    s[a.outlet] = u;
} let c = new y(o.url, s); return o === t && (n = c), c; } let r = e(t.root), i = Xr(r); return n ?? i; }
function nn(t, n, e, r, i) { let o = t; for (; o.parent;)
    o = o.parent; if (n.length === 0)
    return xt(o, o, o, e, r, i); let s = Yi(n); if (s.toRoot())
    return xt(o, o, new y([], {}), e, r, i); let c = Zi(s, o, t), a = c.processChildren ? Le(c.segmentGroup, c.index, s.commands) : sn(c.segmentGroup, c.index, s.commands); return xt(o, c.segmentGroup, a, e, r, i); }
function ot(t) { return typeof t == "object" && t != null && !t.outlets && !t.segmentPath; }
function $e(t) { return typeof t == "object" && t != null && t.outlets; }
function Ur(t, n, e) { t ||= "\u0275"; let r = new U; return r.queryParams = { [t]: n }, e.parse(e.serialize(r)).queryParams[t]; }
function xt(t, n, e, r, i, o) { let s = {}; for (let [u, l] of Object.entries(r ?? {}))
    s[u] = Array.isArray(l) ? l.map(p => Ur(u, p, o)) : Ur(u, l, o); let c; t === n ? c = e : c = on(t, n, e); let a = Xr(en(c)); return new U(a, s, i); }
function on(t, n, e) { let r = Object.create(null); return Object.entries(t.children).forEach(([i, o]) => { o === n ? r[i] = e : r[i] = on(o, n, e); }), new y(t.segments, r); }
var st = class {
    isAbsolute;
    numberOfDoubleDots;
    commands;
    constructor(n, e, r) { if (this.isAbsolute = n, this.numberOfDoubleDots = e, this.commands = r, n && r.length > 0 && ot(r[0]))
        throw new _(4003, !1); let i = r.find($e); if (i && i !== Ui(r))
        throw new _(4004, !1); }
    toRoot() { return this.isAbsolute && this.commands.length === 1 && this.commands[0] == "/"; }
};
function Yi(t) { if (typeof t[0] == "string" && t.length === 1 && t[0] === "/")
    return new st(!0, 0, t); let n = 0, e = !1, r = t.reduce((i, o, s) => { if (typeof o == "object" && o != null) {
    if (o.outlets) {
        let c = {};
        return Object.entries(o.outlets).forEach(([a, u]) => { c[a] = typeof u == "string" ? u.split("/") : u; }), [...i, { outlets: c }];
    }
    if (o.segmentPath)
        return [...i, o.segmentPath];
} return typeof o != "string" ? [...i, o] : s === 0 ? (o.split("/").forEach((c, a) => { a == 0 && c === "." || (a == 0 && c === "" ? e = !0 : c === ".." ? n++ : c != "" && i.push(c)); }), i) : [...i, o]; }, []); return new st(e, n, r); }
var Re = class {
    segmentGroup;
    processChildren;
    index;
    constructor(n, e, r) { this.segmentGroup = n, this.processChildren = e, this.index = r; }
};
function Zi(t, n, e) { if (t.isAbsolute)
    return new Re(n, !0, 0); if (!e)
    return new Re(n, !1, NaN); if (e.parent === null)
    return new Re(e, !0, 0); let r = ot(t.commands[0]) ? 0 : 1, i = e.segments.length - 1 + r; return Ji(e, i, t.numberOfDoubleDots); }
function Ji(t, n, e) { let r = t, i = n, o = e; for (; o > i;) {
    if (o -= i, r = r.parent, !r)
        throw new _(4005, !1);
    i = r.segments.length;
} return new Re(r, !1, i - o); }
function Xi(t) { return $e(t[0]) ? t[0].outlets : { [g]: t }; }
function sn(t, n, e) { if (t ??= new y([], {}), t.segments.length === 0 && t.hasChildren())
    return Le(t, n, e); let r = eo(t, n, e), i = e.slice(r.commandIndex); if (r.match && r.pathIndex < t.segments.length) {
    let o = new y(t.segments.slice(0, r.pathIndex), {});
    return o.children[g] = new y(t.segments.slice(r.pathIndex), t.children), Le(o, 0, i);
}
else
    return r.match && i.length === 0 ? new y(t.segments, {}) : r.match && !t.hasChildren() ? Wt(t, n, e) : r.match ? Le(t, 0, i) : Wt(t, n, e); }
function Le(t, n, e) { if (e.length === 0)
    return new y(t.segments, {}); {
    let r = Xi(e), i = Object.create(null);
    if (Object.keys(r).some(o => o !== g) && t.children[g] && t.numberOfChildren === 1 && t.children[g].segments.length === 0) {
        let o = Le(t.children[g], n, e);
        return new y(t.segments, o.children);
    }
    return Object.entries(r).forEach(([o, s]) => { typeof s == "string" && (s = [s]), s !== null && (i[o] = sn(t.children[o], n, s)); }), Object.entries(t.children).forEach(([o, s]) => { r[o] === void 0 && (i[o] = s); }), new y(t.segments, i);
} }
function eo(t, n, e) { let r = 0, i = n, o = { match: !1, pathIndex: 0, commandIndex: 0 }; for (; i < t.segments.length;) {
    if (r >= e.length)
        return o;
    let s = t.segments[i], c = e[r];
    if ($e(c))
        break;
    let a = `${c}`, u = r < e.length - 1 ? e[r + 1] : null;
    if (i > 0 && a === void 0)
        break;
    if (a && u && typeof u == "object" && u.outlets === void 0) {
        if (!Pr(a, u, s))
            return o;
        r += 2;
    }
    else {
        if (!Pr(a, {}, s))
            return o;
        r++;
    }
    i++;
} return { match: !0, pathIndex: i, commandIndex: r }; }
function Wt(t, n, e) { let r = t.segments.slice(0, n), i = 0; for (; i < e.length;) {
    let o = e[i];
    if ($e(o)) {
        let a = to(o.outlets);
        return new y(r, a);
    }
    if (i === 0 && ot(e[0])) {
        let a = t.segments[n];
        r.push(new oe(a.path, Or(e[0]))), i++;
        continue;
    }
    let s = $e(o) ? o.outlets[g] : `${o}`, c = i < e.length - 1 ? e[i + 1] : null;
    s && c && ot(c) ? (r.push(new oe(s, Or(c))), i += 2) : (r.push(new oe(s, {})), i++);
} return new y(r, {}); }
function to(t) { let n = {}; return Object.entries(t).forEach(([e, r]) => { typeof r == "string" && (r = [r]), r !== null && (n[e] = Wt(new y([], {}), 0, r)); }), n; }
function Or(t) { let n = {}; return Object.entries(t).forEach(([e, r]) => n[e] = `${r}`), n; }
function Pr(t, n, e) { return t == e.path && Q(n, e.parameters); }
var Se = "imperative", M = (function (t) { return t[t.NavigationStart = 0] = "NavigationStart", t[t.NavigationEnd = 1] = "NavigationEnd", t[t.NavigationCancel = 2] = "NavigationCancel", t[t.NavigationError = 3] = "NavigationError", t[t.RoutesRecognized = 4] = "RoutesRecognized", t[t.ResolveStart = 5] = "ResolveStart", t[t.ResolveEnd = 6] = "ResolveEnd", t[t.GuardsCheckStart = 7] = "GuardsCheckStart", t[t.GuardsCheckEnd = 8] = "GuardsCheckEnd", t[t.RouteConfigLoadStart = 9] = "RouteConfigLoadStart", t[t.RouteConfigLoadEnd = 10] = "RouteConfigLoadEnd", t[t.ChildActivationStart = 11] = "ChildActivationStart", t[t.ChildActivationEnd = 12] = "ChildActivationEnd", t[t.ActivationStart = 13] = "ActivationStart", t[t.ActivationEnd = 14] = "ActivationEnd", t[t.Scroll = 15] = "Scroll", t[t.NavigationSkipped = 16] = "NavigationSkipped", t; })(M || {}), x = class {
    id;
    url;
    constructor(n, e) { this.id = n, this.url = e; }
}, K = class extends x {
    type = M.NavigationStart;
    navigationTrigger;
    restoredState;
    constructor(n, e, r = "imperative", i = null) { super(n, e), this.navigationTrigger = r, this.restoredState = i; }
    toString() { return `NavigationStart(id: ${this.id}, url: '${this.url}')`; }
}, O = class extends x {
    urlAfterRedirects;
    type = M.NavigationEnd;
    constructor(n, e, r) { super(n, e), this.urlAfterRedirects = r; }
    toString() { return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`; }
}, I = (function (t) { return t[t.Redirect = 0] = "Redirect", t[t.SupersededByNewNavigation = 1] = "SupersededByNewNavigation", t[t.NoDataFromResolver = 2] = "NoDataFromResolver", t[t.GuardRejected = 3] = "GuardRejected", t[t.Aborted = 4] = "Aborted", t; })(I || {}), be = (function (t) { return t[t.IgnoredSameUrlNavigation = 0] = "IgnoredSameUrlNavigation", t[t.IgnoredByUrlHandlingStrategy = 1] = "IgnoredByUrlHandlingStrategy", t; })(be || {}), N = class extends x {
    reason;
    code;
    type = M.NavigationCancel;
    constructor(n, e, r, i) { super(n, e), this.reason = r, this.code = i; }
    toString() { return `NavigationCancel(id: ${this.id}, url: '${this.url}')`; }
};
function ur(t) { return t instanceof N && (t.code === I.Redirect || t.code === I.SupersededByNewNavigation); }
var $ = class extends x {
    reason;
    code;
    type = M.NavigationSkipped;
    constructor(n, e, r, i) { super(n, e), this.reason = r, this.code = i; }
}, Y = class extends x {
    error;
    target;
    type = M.NavigationError;
    constructor(n, e, r, i) { super(n, e), this.error = r, this.target = i; }
    toString() { return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`; }
}, ze = class extends x {
    urlAfterRedirects;
    state;
    type = M.RoutesRecognized;
    constructor(n, e, r, i) { super(n, e), this.urlAfterRedirects = r, this.state = i; }
    toString() { return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`; }
}, at = class extends x {
    urlAfterRedirects;
    state;
    type = M.GuardsCheckStart;
    constructor(n, e, r, i) { super(n, e), this.urlAfterRedirects = r, this.state = i; }
    toString() { return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`; }
}, ct = class extends x {
    urlAfterRedirects;
    state;
    shouldActivate;
    type = M.GuardsCheckEnd;
    constructor(n, e, r, i, o) { super(n, e), this.urlAfterRedirects = r, this.state = i, this.shouldActivate = o; }
    toString() { return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`; }
}, ut = class extends x {
    urlAfterRedirects;
    state;
    type = M.ResolveStart;
    constructor(n, e, r, i) { super(n, e), this.urlAfterRedirects = r, this.state = i; }
    toString() { return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`; }
}, lt = class extends x {
    urlAfterRedirects;
    state;
    type = M.ResolveEnd;
    constructor(n, e, r, i) { super(n, e), this.urlAfterRedirects = r, this.state = i; }
    toString() { return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`; }
}, dt = class {
    route;
    type = M.RouteConfigLoadStart;
    constructor(n) { this.route = n; }
    toString() { return `RouteConfigLoadStart(path: ${this.route.path})`; }
}, ht = class {
    route;
    type = M.RouteConfigLoadEnd;
    constructor(n) { this.route = n; }
    toString() { return `RouteConfigLoadEnd(path: ${this.route.path})`; }
}, ft = class {
    snapshot;
    type = M.ChildActivationStart;
    constructor(n) { this.snapshot = n; }
    toString() { return `ChildActivationStart(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`; }
}, pt = class {
    snapshot;
    type = M.ChildActivationEnd;
    constructor(n) { this.snapshot = n; }
    toString() { return `ChildActivationEnd(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`; }
}, gt = class {
    snapshot;
    type = M.ActivationStart;
    constructor(n) { this.snapshot = n; }
    toString() { return `ActivationStart(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`; }
}, vt = class {
    snapshot;
    type = M.ActivationEnd;
    constructor(n) { this.snapshot = n; }
    toString() { return `ActivationEnd(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`; }
}, Ie = class {
    routerEvent;
    position;
    anchor;
    scrollBehavior;
    type = M.Scroll;
    constructor(n, e, r, i) { this.routerEvent = n, this.position = e, this.anchor = r, this.scrollBehavior = i; }
    toString() { let n = this.position ? `${this.position[0]}, ${this.position[1]}` : null; return `Scroll(anchor: '${this.anchor}', position: '${n}')`; }
}, fe = class {
}, Ee = class {
}, Me = class {
    url;
    navigationBehaviorOptions;
    constructor(n, e) { this.url = n, this.navigationBehaviorOptions = e; }
};
function ro(t) { return !(t instanceof fe) && !(t instanceof Me) && !(t instanceof Ee); }
var mt = class {
    rootInjector;
    outlet = null;
    route = null;
    children;
    attachRef = null;
    get injector() { return this.route?.snapshot._environmentInjector ?? this.rootInjector; }
    constructor(n) { this.rootInjector = n, this.children = new ve(this.rootInjector); }
}, ve = (() => { class t {
    rootInjector;
    contexts = new Map;
    constructor(e) { this.rootInjector = e; }
    onChildOutletCreated(e, r) { let i = this.getOrCreateContext(e); i.outlet = r, this.contexts.set(e, i); }
    onChildOutletDestroyed(e) { let r = this.getContext(e); r && (r.outlet = null, r.attachRef = null); }
    onOutletDeactivated() { let e = this.contexts; return this.contexts = new Map, e; }
    onOutletReAttached(e) { this.contexts = e; }
    getOrCreateContext(e) { let r = this.getContext(e); return r || (r = new mt(this.rootInjector), this.contexts.set(e, r)), r; }
    getContext(e) { return this.contexts.get(e) || null; }
    static \u0275fac = function (r) { return new (r || t)(R.\u0275\u0275inject(R.EnvironmentInjector)); };
    static \u0275prov = R.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })(), yt = class {
    _root;
    constructor(n) { this._root = n; }
    get root() { return this._root.value; }
    parent(n) { let e = this.pathFromRoot(n); return e.length > 1 ? e[e.length - 2] : null; }
    children(n) { let e = Qt(n, this._root); return e ? e.children.map(r => r.value) : []; }
    firstChild(n) { let e = Qt(n, this._root); return e && e.children.length > 0 ? e.children[0].value : null; }
    siblings(n) { let e = Kt(n, this._root); return e.length < 2 ? [] : e[e.length - 2].children.map(i => i.value).filter(i => i !== n); }
    pathFromRoot(n) { return Kt(n, this._root).map(e => e.value); }
};
function Qt(t, n) { if (t === n.value)
    return n; for (let e of n.children) {
    let r = Qt(t, e);
    if (r)
        return r;
} return null; }
function Kt(t, n) { if (t === n.value)
    return [n]; for (let e of n.children) {
    let r = Kt(t, e);
    if (r.length)
        return r.unshift(n), r;
} return []; }
var j = class {
    value;
    children;
    constructor(n, e) { this.value = n, this.children = e; }
    toString() { return `TreeNode(${this.value})`; }
};
function ye(t) { let n = {}; return t && t.children.forEach(e => n[e.value.outlet] = e), n; }
var qe = class extends yt {
    snapshot;
    constructor(n, e) { super(n), this.snapshot = e, dr(this, n); }
    toString() { return this.snapshot.toString(); }
};
function an(t, n) { let e = no(t, n), r = new B([new oe("", {})]), i = new B({}), o = new B({}), s = new B({}), c = new B(""), a = new Z(r, i, s, c, o, g, t, e.root); return a.snapshot = e.root, new qe(new j(a, []), e); }
function no(t, n) { let e = {}, r = {}, i = {}, s = new Ae([], e, i, "", r, g, t, null, {}, n); return new Fe("", new j(s, [])); }
var Z = class {
    urlSubject;
    paramsSubject;
    queryParamsSubject;
    fragmentSubject;
    dataSubject;
    outlet;
    component;
    snapshot;
    _futureSnapshot;
    _routerState;
    _paramMap;
    _queryParamMap;
    title;
    url;
    params;
    queryParams;
    fragment;
    data;
    resources;
    _localInjector;
    pending;
    paramsSignal;
    queryParamsSignal;
    paramMapSignal;
    queryParamMapSignal;
    fragmentSignal;
    dataSignal;
    constructor(n, e, r, i, o, s, c, a) { this.urlSubject = n, this.paramsSubject = e, this.queryParamsSubject = r, this.fragmentSubject = i, this.dataSubject = o, this.outlet = s, this.component = c, this._futureSnapshot = a, this.title = this.dataSubject?.pipe(P(u => u[Ve])) ?? m(void 0), this.url = n, this.params = e, this.queryParams = r, this.fragment = i, this.data = o; }
    get routeConfig() { return this._futureSnapshot.routeConfig; }
    get root() { return this._routerState.root; }
    get parent() { return this._routerState.parent(this); }
    get firstChild() { return this._routerState.firstChild(this); }
    get children() { return this._routerState.children(this); }
    get pathFromRoot() { return this._routerState.pathFromRoot(this); }
    get paramMap() { return this._paramMap ??= this.params.pipe(P(n => ee(n))), this._paramMap; }
    get queryParamMap() { return this._queryParamMap ??= this.queryParams.pipe(P(n => ee(n))), this._queryParamMap; }
    toString() { return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`; }
    _setPending(n) { this._futureSnapshot = n, this.pending?.set(!0); }
}, io = "always";
function lr(t, n, e) { let r, { routeConfig: i } = t; return n !== null && (e === "always" || i?.path === "" || !n.component && !n.routeConfig?.loadComponent) ? r = { params: d(d({}, n.params), t.params), data: d(d({}, n.data), t.data), resolve: d(d(d(d({}, t.data), n.data), i?.data), t._resolvedData) } : r = { params: d({}, t.params), data: d({}, t.data), resolve: d(d({}, t.data), t._resolvedData ?? {}) }, i && ln(i) && (r.resolve[Ve] = i.title), r; }
var Ae = class {
    url;
    params;
    queryParams;
    fragment;
    data;
    outlet;
    component;
    routeConfig;
    _resolve;
    _resolvedData;
    _routerState;
    _paramMap;
    _queryParamMap;
    _environmentInjector;
    resources;
    get title() { return this.data?.[Ve]; }
    constructor(n, e, r, i, o, s, c, a, u, l) { this.url = n, this.params = e, this.queryParams = r, this.fragment = i, this.data = o, this.outlet = s, this.component = c, this.routeConfig = a, this._resolve = u, this._environmentInjector = l; }
    get root() { return this._routerState.root; }
    get parent() { return this._routerState.parent(this); }
    get firstChild() { return this._routerState.firstChild(this); }
    get children() { return this._routerState.children(this); }
    get pathFromRoot() { return this._routerState.pathFromRoot(this); }
    get paramMap() { return this._paramMap ??= ee(this.params), this._paramMap; }
    get queryParamMap() { return this._queryParamMap ??= ee(this.queryParams), this._queryParamMap; }
    toString() { let n = this.url.map(r => r.toString()).join("/"), e = this.routeConfig ? this.routeConfig.path : ""; return `Route(url:'${n}', path:'${e}')`; }
}, Fe = class extends yt {
    url;
    constructor(n, e) { super(e), this.url = n, dr(this, e); }
    toString() { return cn(this._root); }
};
function dr(t, n) { n.value._routerState = t, n.children.forEach(e => dr(t, e)); }
function cn(t) { let n = t.children.length > 0 ? ` { ${t.children.map(cn).join(", ")} } ` : ""; return `${t.value}${n}`; }
function kt(t) { if (t.snapshot) {
    let n = t.snapshot, e = t._futureSnapshot;
    t.snapshot = e, Q(n.queryParams, e.queryParams) || t.queryParamsSubject.next(e.queryParams), n.fragment !== e.fragment && t.fragmentSubject.next(e.fragment), Q(n.params, e.params) || t.paramsSubject.next(e.params), _i(n.url, e.url) || t.urlSubject.next(e.url), Q(n.data, e.data) || t.dataSubject.next(e.data);
}
else
    t.snapshot = t._futureSnapshot, t.dataSubject.next(t._futureSnapshot.data); }
function un(t) { if (t.paramsSignal !== void 0)
    return; let n = t, e = $t(!1); n.pending = e, n.paramsSignal = le(() => e() || !t.snapshot ? t._futureSnapshot.params : t.snapshot.params), n.queryParamsSignal = le(() => e() || !t.snapshot ? t._futureSnapshot.queryParams : t.snapshot.queryParams), n.paramMapSignal = le(() => ee(t.paramsSignal())), n.queryParamMapSignal = le(() => ee(t.queryParamsSignal())), n.fragmentSignal = le(() => e() || !t.snapshot ? t._futureSnapshot.fragment : t.snapshot.fragment), n.dataSignal = le(() => e() || !t.snapshot ? t._futureSnapshot.data : t.snapshot.data), n._setPending = r => { t._futureSnapshot = r, e.set(!0); }; }
function Yt(t, n) { let e = Q(t.params, n.params) && ji(t.url, n.url), r = !t.parent != !n.parent; return e && !r && (!t.parent || Yt(t.parent, n.parent)); }
function ln(t) { return typeof t.title == "string" || t.title === null; }
var dn = new re(""), hr = (() => { class t {
    activated = null;
    get activatedComponentRef() { return this.activated; }
    _activatedRoute = null;
    name = g;
    activateEvents = new Je;
    deactivateEvents = new Je;
    attachEvents = new Je;
    detachEvents = new Je;
    routerOutletData = ui();
    parentContexts = v(ve);
    location = v(li);
    changeDetector = v(di);
    inputBinder = v(Ge, { optional: !0 });
    supportsBindingToComponentInputs = !0;
    ngOnChanges(e) { if (e.name) {
        let { firstChange: r, previousValue: i } = e.name;
        if (r)
            return;
        this.isTrackedInParentContexts(i) && (this.deactivate(), this.parentContexts.onChildOutletDestroyed(i)), this.initializeOutletWithName();
    } }
    ngOnDestroy() { this.isTrackedInParentContexts(this.name) && this.parentContexts.onChildOutletDestroyed(this.name), this.inputBinder?.unsubscribeFromRouteData(this); }
    isTrackedInParentContexts(e) { return this.parentContexts.getContext(e)?.outlet === this; }
    ngOnInit() { this.initializeOutletWithName(); }
    initializeOutletWithName() { if (this.parentContexts.onChildOutletCreated(this.name, this), this.activated)
        return; let e = this.parentContexts.getContext(this.name); e?.route && (e.attachRef ? this.attach(e.attachRef, e.route) : this.activateWith(e.route, e.injector)); }
    get isActivated() { return !!this.activated; }
    get component() { if (!this.activated)
        throw new _(4012, !1); return this.activated.instance; }
    get activatedRoute() { if (!this.activated)
        throw new _(4012, !1); return this._activatedRoute; }
    get activatedRouteData() { return this._activatedRoute ? this._activatedRoute.snapshot.data : {}; }
    detach() { if (!this.activated)
        throw new _(4012, !1); this.location.detach(); let e = this.activated; return this.activated = null, this._activatedRoute = null, this.detachEvents.emit(e.instance), e; }
    attach(e, r) { this.activated = e, this._activatedRoute = r, this.location.insert(e.hostView), this.inputBinder?.bindActivatedRouteToOutletComponent(this, this.location.injector), this.attachEvents.emit(e.instance); }
    deactivate() { if (this.activated) {
        let e = this.component;
        this.activated.destroy(), this.activated = null, this._activatedRoute = null, this.deactivateEvents.emit(e);
    } }
    activateWith(e, r) { if (this.isActivated)
        throw new _(4013, !1); this._activatedRoute = e; let i = this.location, s = e.snapshot.component, c = this.parentContexts.getOrCreateContext(this.name).children, a = new Zt(e, c, i.injector, this.routerOutletData); this.activated = i.createComponent(s, { index: i.length, injector: a, environmentInjector: r }), this.changeDetector.markForCheck(), this.inputBinder?.bindActivatedRouteToOutletComponent(this, this.location.injector), this.activateEvents.emit(this.activated.instance); }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275dir = R.\u0275\u0275defineDirective({ type: t, selectors: [["router-outlet"]], inputs: { name: "name", routerOutletData: [1, "routerOutletData"] }, outputs: { activateEvents: "activate", deactivateEvents: "deactivate", attachEvents: "attach", detachEvents: "detach" }, exportAs: ["outlet"], features: [R.\u0275\u0275NgOnChangesFeature] });
} return t; })(), Zt = class {
    route;
    childContexts;
    parent;
    outletData;
    constructor(n, e, r, i) { this.route = n, this.childContexts = e, this.parent = r, this.outletData = i; }
    get(n, e) { return n === Z ? this.route : n === ve ? this.childContexts : n === dn ? this.outletData : this.parent.get(n, e); }
}, Ge = new re(""), hn = (() => { class t {
    options;
    feature;
    outletDataSubscriptions = new Map;
    outletSeenKeys = new Map;
    outletEffects = new Map;
    constructor(e, r = null) { this.options = e, this.feature = r, this.options.queryParams ??= !0; }
    bindActivatedRouteToOutletComponent(e, r) { this.unsubscribeFromRouteData(e), this.subscribeToRouteData(e, r); }
    unsubscribeFromRouteData(e) { this.outletDataSubscriptions.get(e)?.unsubscribe(), this.outletDataSubscriptions.delete(e), this.outletSeenKeys.delete(e), this.outletEffects.get(e)?.forEach(r => r.destroy()), this.outletEffects.delete(e); }
    subscribeToRouteData(e, r) { let { activatedRoute: i } = e, o = [], s = []; if (this.feature?.createResourceOutletBindingEffects && e.activatedComponentRef) {
        let { handledKeys: a, createdEffects: u } = this.feature.createResourceOutletBindingEffects(e.activatedComponentRef, i, r);
        o.push(...u), s = a;
    } o.length > 0 && this.outletEffects.set(e, o); let c = $r([this.options.queryParams ? i.queryParams : m({}), i.params, i.data]).pipe(H(([a, u, l], p) => (l = d(d(d(d({}, a), u), l), i.resources || {}), p === 0 ? m(l) : Promise.resolve(l)))).subscribe(a => { if (!e.isActivated || !e.activatedComponentRef || e.activatedRoute !== i || i.component === null) {
        this.unsubscribeFromRouteData(e);
        return;
    } let u = hi(i.component); if (!u) {
        this.unsubscribeFromRouteData(e);
        return;
    } let l = this.outletSeenKeys.get(e); l || (l = new Set, this.outletSeenKeys.set(e, l)); for (let f of Object.keys(a))
        l.add(f); let p = this.options.unmatchedInputBehavior ?? "alwaysUndefined"; for (let { templateName: f } of u.inputs) {
        if (s.includes(f))
            continue;
        let w = a[f];
        (w !== void 0 || p === "alwaysUndefined" || l.has(f)) && e.activatedComponentRef.setInput(f, w);
    } }); this.outletDataSubscriptions.set(e, c); }
    static \u0275fac = function (r) { R.\u0275\u0275invalidFactory(); };
    static \u0275prov = R.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac });
} return t; })(), fr = (() => { class t {
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275cmp = R.\u0275\u0275defineComponent({ type: t, selectors: [["ng-component"]], exportAs: ["emptyRouterOutlet"], decls: 1, vars: 0, template: function (r, i) { r & 1 && R.\u0275\u0275element(0, "router-outlet"); }, dependencies: [hr], encapsulation: 2, changeDetection: 1 });
} return t; })();
function pr(t) { let n = t.children && t.children.map(pr), e = n ? D(d({}, t), { children: n }) : d({}, t); return !e.component && !e.loadComponent && (n || e.loadChildren) && e.outlet && e.outlet !== g && (e.component = fr), e; }
function oo(t, n, e) { let r = new Set, i = He(t, n._root, e ? e._root : void 0, r); return { newlyCreatedRoutes: r, state: new qe(i, n) }; }
function He(t, n, e, r) { if (e && t.shouldReuseRoute(n.value, e.value.snapshot)) {
    let i = e.value;
    i._setPending(n.value);
    let o = so(t, n, e, r);
    return new j(i, o);
}
else {
    if (t.shouldAttach(n.value)) {
        let s = t.retrieve(n.value);
        if (s !== null) {
            let c = s.route;
            return c.value._setPending(n.value), c.children = n.children.map(a => He(t, a, void 0, r)), c;
        }
    }
    let i = ao(n.value);
    i._setPending(n.value), r.add(i);
    let o = n.children.map(s => He(t, s, void 0, r));
    return new j(i, o);
} }
function so(t, n, e, r) { return n.children.map(i => { for (let o of e.children)
    if (t.shouldReuseRoute(i.value, o.value.snapshot))
        return He(t, i, o, r); return He(t, i, void 0, r); }); }
function ao(t) { return new Z(new B(t.url), new B(t.params), new B(t.queryParams), new B(t.fragment), new B(t.data), t.outlet, t.component, t); }
var Ne = class {
    redirectTo;
    navigationBehaviorOptions;
    constructor(n, e) { this.redirectTo = n, this.navigationBehaviorOptions = e; }
}, fn = "ngNavigationCancelingError";
function Rt(t, n) { let { redirectTo: e, navigationBehaviorOptions: r } = se(n) ? { redirectTo: n, navigationBehaviorOptions: void 0 } : n, i = pn(!1, I.Redirect); return i.url = e, i.navigationBehaviorOptions = r, i; }
function pn(t, n) { let e = new Error(`NavigationCancelingError: ${t || ""}`); return e[fn] = !0, e.cancellationCode = n, e; }
function co(t) { return gn(t) && se(t.url); }
function gn(t) { return !!t && t[fn]; }
var Jt = class {
    routeReuseStrategy;
    futureState;
    currState;
    forwardEvent;
    inputBindingEnabled;
    constructor(n, e, r, i, o) { this.routeReuseStrategy = n, this.futureState = e, this.currState = r, this.forwardEvent = i, this.inputBindingEnabled = o; }
    activate(n) { let e = this.futureState._root, r = this.currState ? this.currState._root : null; this.deactivateChildRoutes(e, r, n), kt(this.futureState.root), this.activateChildRoutes(e, r, n); }
    deactivateChildRoutes(n, e, r) { let i = ye(e); n.children.forEach(o => { let s = o.value.outlet; this.deactivateRoutes(o, i[s], r), delete i[s]; }), Object.values(i).forEach(o => { this.deactivateRouteAndItsChildren(o, r); }); }
    deactivateRoutes(n, e, r) { let i = n.value, o = e ? e.value : null; if (i === o)
        if (i.component) {
            let s = r.getContext(i.outlet);
            s && this.deactivateChildRoutes(n, e, s.children);
        }
        else
            this.deactivateChildRoutes(n, e, r);
    else
        o && this.deactivateRouteAndItsChildren(e, r); }
    deactivateRouteAndItsChildren(n, e) { n.value.component && this.routeReuseStrategy.shouldDetach(n.value.snapshot) ? this.detachAndStoreRouteSubtree(n, e) : this.deactivateRouteAndOutlet(n, e); }
    detachAndStoreRouteSubtree(n, e) { let r = e.getContext(n.value.outlet), i = r && n.value.component ? r.children : e, o = ye(n); for (let s of Object.values(o))
        this.deactivateRouteAndItsChildren(s, i); if (r && r.outlet) {
        let s = r.outlet.detach(), c = r.children.onOutletDeactivated();
        this.routeReuseStrategy.store(n.value.snapshot, { componentRef: s, route: n, contexts: c });
    } }
    deactivateRouteAndOutlet(n, e) { let r = e.getContext(n.value.outlet), i = r && n.value.component ? r.children : e, o = ye(n); for (let s of Object.values(o))
        this.deactivateRouteAndItsChildren(s, i); r && (r.outlet && (r.outlet.deactivate(), r.children.onOutletDeactivated()), r.attachRef = null, r.route = null), n.value._localInjector?.destroy(); }
    activateChildRoutes(n, e, r) { let i = ye(e); n.children.forEach(o => { this.activateRoutes(o, i[o.value.outlet], r), this.forwardEvent(new vt(o.value.snapshot)); }), n.children.length && this.forwardEvent(new pt(n.value.snapshot)); }
    activateRoutes(n, e, r) { let i = n.value, o = e ? e.value : null; if (kt(i), i === o)
        if (i.component) {
            let s = r.getOrCreateContext(i.outlet);
            this.activateChildRoutes(n, e, s.children);
        }
        else
            this.activateChildRoutes(n, e, r);
    else if (i.component) {
        let s = r.getOrCreateContext(i.outlet);
        if (this.routeReuseStrategy.shouldAttach(i.snapshot)) {
            let c = this.routeReuseStrategy.retrieve(i.snapshot);
            this.routeReuseStrategy.store(i.snapshot, null), s.children.onOutletReAttached(c.contexts), s.attachRef = c.componentRef, s.route = c.route.value, s.outlet && s.outlet.attach(c.componentRef, c.route.value), kt(c.route.value), this.activateChildRoutes(n, null, s.children);
        }
        else
            s.attachRef = null, s.route = i, s.outlet && s.outlet.activateWith(i, s.injector), this.activateChildRoutes(n, null, s.children);
    }
    else
        this.activateChildRoutes(n, null, r); }
}, St = class {
    path;
    route;
    constructor(n) { this.path = n, this.route = this.path[this.path.length - 1]; }
}, Ce = class {
    component;
    route;
    constructor(n, e) { this.component = n, this.route = e; }
};
function uo(t, n, e) { let r = t._root, i = n ? n._root : null; return Oe(r, i, e, [r.value]); }
function lo(t) { let n = t.routeConfig ? t.routeConfig.canActivateChild : null; return !n || n.length === 0 ? null : { node: t, guards: n }; }
function De(t, n) { let e = Symbol(), r = n.get(t, e); return r === e ? typeof t == "function" && !fi(t) ? t : n.get(t) : r; }
function Oe(t, n, e, r, i = { canDeactivateChecks: [], canActivateChecks: [] }) { let o = ye(n); return t.children.forEach(s => { ho(s, o[s.value.outlet], e, r.concat([s.value]), i), delete o[s.value.outlet]; }), Object.entries(o).forEach(([s, c]) => je(c, e.getContext(s), e, i)), i; }
function ho(t, n, e, r, i = { canDeactivateChecks: [], canActivateChecks: [] }) { let o = t.value, s = n ? n.value : null, c = e ? e.getContext(t.value.outlet) : null; if (s && o.routeConfig === s.routeConfig) {
    let a = fo(s, o, o.routeConfig.runGuardsAndResolvers);
    a ? i.canActivateChecks.push(new St(r)) : (o.data = s.data, o._resolvedData = s._resolvedData), o.component ? Oe(t, n, c ? c.children : null, r, i) : Oe(t, n, e, r, i), a && c && c.outlet && c.outlet.isActivated && i.canDeactivateChecks.push(new Ce(c.outlet.component, s));
}
else
    s && je(n, c, e, i), i.canActivateChecks.push(new St(r)), o.component ? Oe(t, null, c ? c.children : null, r, i) : Oe(t, null, e, r, i); return i; }
function fo(t, n, e) { if (typeof e == "function")
    return z(n._environmentInjector, () => e(t, n)); switch (e) {
    case "pathParamsChange": return !de(t.url, n.url);
    case "pathParamsOrQueryParamsChange": return !de(t.url, n.url) || !Q(t.queryParams, n.queryParams);
    case "always": return !0;
    case "paramsOrQueryParamsChange": return !Yt(t, n) || !Q(t.queryParams, n.queryParams);
    default: return !Yt(t, n);
} }
function je(t, n, e, r) { let i = ye(t), o = t.value; Object.entries(i).forEach(([s, c]) => { o.component ? n ? je(c, n.children.getContext(s), n.children, r) : je(c, null, null, r) : je(c, e ? e.getContext(s) : null, e, r); }), o.component ? n && n.outlet && n.outlet.isActivated ? r.canDeactivateChecks.push(new Ce(n.outlet.component, o)) : r.canDeactivateChecks.push(new Ce(null, o)) : r.canDeactivateChecks.push(new Ce(null, o)); }
function We(t) { return typeof t == "function"; }
function po(t) { return typeof t == "boolean"; }
function go(t) { return t && We(t.canLoad); }
function vo(t) { return t && We(t.canActivate); }
function mo(t) { return t && We(t.canActivateChild); }
function yo(t) { return t && We(t.canDeactivate); }
function Ro(t) { return t && We(t.canMatch); }
function vn(t) { return t instanceof bi || t?.name === "EmptyError"; }
var et = Symbol("INITIAL_VALUE");
function Te() { return H(t => $r(t.map(n => n.pipe(xe(1), Ti(et)))).pipe(P(n => { for (let e of n)
    if (e !== !0) {
        if (e === et)
            return et;
        if (e === !1 || So(e))
            return e;
    } return !0; }), ke(n => n !== et), xe(1))); }
function So(t) { return se(t) || t instanceof Ne; }
function mn(t) { return t.aborted ? m(void 0).pipe(xe(1)) : new Ii(n => { let e = () => { n.next(), n.complete(); }; return t.addEventListener("abort", e), () => t.removeEventListener("abort", e); }); }
function yn(t) { return qt(mn(t)); }
function Co(t) { return he(n => { let { targetSnapshot: e, currentSnapshot: r, guards: { canActivateChecks: i, canDeactivateChecks: o } } = n; return o.length === 0 && i.length === 0 ? m(D(d({}, n), { guardsResult: !0 })) : wo(o, e, r).pipe(he(s => s && po(s) ? bo(e, i, t) : m(s)), P(s => D(d({}, n), { guardsResult: s }))); }); }
function wo(t, n, e) { return W(t).pipe(he(r => No(r.component, r.route, e, n)), pe(r => r !== !0, !0)); }
function bo(t, n, e) { return W(n).pipe(zr(r => Ei(Eo(r.route.parent, e), Io(r.route, e), Ao(t, r.path), Mo(t, r.route))), pe(r => r !== !0, !0)); }
function Io(t, n) { return t !== null && n && n(new gt(t)), m(!0); }
function Eo(t, n) { return t !== null && n && n(new ft(t)), m(!0); }
function Mo(t, n) { let e = n.routeConfig ? n.routeConfig.canActivate : null; if (!e || e.length === 0)
    return m(!0); let r = e.map(i => sr(() => { let o = n._environmentInjector, s = De(i, o), c = vo(s) ? s.canActivate(n, t) : z(o, () => s(n, t)); return ge(c).pipe(pe()); })); return m(r).pipe(Te()); }
function Ao(t, n) { let e = n[n.length - 1], i = n.slice(0, n.length - 1).reverse().map(o => lo(o)).filter(o => o !== null).map(o => sr(() => { let s = o.guards.map(c => { let a = o.node._environmentInjector, u = De(c, a), l = mo(u) ? u.canActivateChild(e, t) : z(a, () => u(e, t)); return ge(l).pipe(pe()); }); return m(s).pipe(Te()); })); return m(i).pipe(Te()); }
function No(t, n, e, r) { let i = n && n.routeConfig ? n.routeConfig.canDeactivate : null; if (!i || i.length === 0)
    return m(!0); let o = i.map(s => { let c = n._environmentInjector, a = De(s, c), u = yo(a) ? a.canDeactivate(t, n, e, r) : z(c, () => a(t, n, e, r)); return ge(u).pipe(pe()); }); return m(o).pipe(Te()); }
function To(t, n, e, r, i) { let o = n.canLoad; if (o === void 0 || o.length === 0)
    return m(!0); let s = o.map(c => { let a = De(c, t), u = go(a) ? a.canLoad(n, e) : z(t, () => a(n, e)), l = ge(u); return i ? l.pipe(yn(i)) : l; }); return m(s).pipe(Te(), Rn(r)); }
function Rn(t) { return Mi(G(n => { if (typeof n != "boolean")
    throw Rt(t, n); }), P(n => n === !0)); }
function Do(t, n, e, r, i, o) { let s = n.canMatch; if (!s || s.length === 0)
    return m(!0); let c = s.map(a => { let u = De(a, t), l = Ro(u) ? u.canMatch(n, e, i) : z(t, () => u(n, e, i)); return ge(l).pipe(yn(o)); }); return m(c).pipe(Te(), Rn(r)); }
var X = class t extends Error {
    segmentGroup;
    constructor(n) { super(), this.segmentGroup = n || null, Object.setPrototypeOf(this, t.prototype); }
}, Be = class t extends Error {
    urlTree;
    constructor(n) { super(), this.urlTree = n, Object.setPrototypeOf(this, t.prototype); }
};
function _o(t) { throw new _(4e3, !1); }
function Uo(t) { throw pn(!1, I.GuardRejected); }
var Xt = class {
    urlSerializer;
    urlTree;
    constructor(n, e) { this.urlSerializer = n, this.urlTree = e; }
    lineralizeSegments(n, e) { return C(this, null, function* () { let r = [], i = e.root; for (;;) {
        if (r = r.concat(i.segments), i.numberOfChildren === 0)
            return r;
        if (i.numberOfChildren > 1 || !i.children[g])
            throw _o(`${n.redirectTo}`);
        i = i.children[g];
    } }); }
    applyRedirectCommands(n, e, r, i, o) { return C(this, null, function* () { let s = yield Oo(e, i, o); if (s instanceof U)
        throw new Be(s); let c = this.applyRedirectCreateUrlTree(s, this.urlSerializer.parse(s), n, r); if (s[0] === "/")
        throw new Be(c); return c; }); }
    applyRedirectCreateUrlTree(n, e, r, i) { let o = this.createSegmentGroup(n, e.root, r, i); return new U(o, this.createQueryParams(e.queryParams, this.urlTree.queryParams), e.fragment); }
    createQueryParams(n, e) { let r = {}; return Object.entries(n).forEach(([i, o]) => { if (typeof o == "string" && o[0] === ":") {
        let c = o.substring(1);
        r[i] = e[c];
    }
    else
        r[i] = o; }), r; }
    createSegmentGroup(n, e, r, i) { let o = this.createSegments(n, e.segments, r, i), s = Object.create(null); return Object.entries(e.children).forEach(([c, a]) => { s[c] = this.createSegmentGroup(n, a, r, i); }), new y(o, s); }
    createSegments(n, e, r, i) { return e.map(o => o.path[0] === ":" ? this.findPosParam(n, o, i) : this.findOrReturn(o, r)); }
    findPosParam(n, e, r) { let i = r[e.path.substring(1)]; if (!i)
        throw new _(4001, !1); return i; }
    findOrReturn(n, e) { let r = 0; for (let i of e) {
        if (i.path === n.path)
            return e.splice(r), i;
        r++;
    } return n; }
};
function Oo(t, n, e) { if (typeof t == "string")
    return Promise.resolve(t); let r = t; return it(ge(z(e, () => r(n)))); }
function Po(t, n) { return t.providers && !t._injector && (t._injector = pi(t.providers, n, `Route: ${t.path}`)), t._injector ?? n; }
function V(t) { return t.outlet || g; }
function Lo(t, n) { let e = t.filter(r => V(r) === n); return e.push(...t.filter(r => V(r) !== n)), e; }
var er = { matched: !1, consumedSegments: [], remainingSegments: [], parameters: {}, positionalParamSegments: {} };
function Sn(t) { return { routeConfig: t.routeConfig, url: t.url, params: t.params, queryParams: t.queryParams, fragment: t.fragment, data: t.data, outlet: t.outlet, title: t.title, paramMap: t.paramMap, queryParamMap: t.queryParamMap }; }
function jo(t, n, e, r, i, o, s) { let c = Cn(t, n, e); if (!c.matched)
    return m(c); let a = Sn(o(c)); return r = Po(n, r), Do(r, n, e, i, a, s).pipe(P(u => u === !0 ? c : d({}, er))); }
function Cn(t, n, e) { if (n.path === "")
    return n.pathMatch === "full" && (t.hasChildren() || e.length > 0) ? d({}, er) : { matched: !0, consumedSegments: [], remainingSegments: e, parameters: {}, positionalParamSegments: {} }; let i = (n.matcher || Br)(e, t, n); if (!i)
    return d({}, er); let o = {}; Object.entries(i.posParams ?? {}).forEach(([c, a]) => { o[c] = a.path; }); let s = i.consumed.length > 0 ? d(d({}, o), i.consumed[i.consumed.length - 1].parameters) : o; return { matched: !0, consumedSegments: i.consumed, remainingSegments: e.slice(i.consumed.length), parameters: s, positionalParamSegments: i.posParams ?? {} }; }
function Lr(t, n, e, r, i) { return e.length > 0 && $o(t, e, r, i) ? { segmentGroup: new y(n, ko(r, new y(e, t.children))), slicedSegments: [] } : e.length === 0 && zo(t, e, r) ? { segmentGroup: new y(t.segments, xo(t, e, r, t.children)), slicedSegments: e } : { segmentGroup: new y(t.segments, t.children), slicedSegments: e }; }
function xo(t, n, e, r) { let i = {}; for (let o of e)
    if (bt(t, n, o) && !r[V(o)]) {
        let s = new y([], {});
        i[V(o)] = s;
    } return d(d({}, r), i); }
function ko(t, n) { let e = {}; e[g] = n; for (let r of t)
    if (r.path === "" && V(r) !== g) {
        let i = new y([], {});
        e[V(r)] = i;
    } return e; }
function $o(t, n, e, r) { return e.some(i => !bt(t, n, i) || !(V(i) !== g) ? !1 : !(r !== void 0 && V(i) === r)); }
function zo(t, n, e) { return e.some(r => bt(t, n, r)); }
function bt(t, n, e) { return (t.hasChildren() || n.length > 0) && e.pathMatch === "full" ? !1 : e.path === ""; }
function qo(t, n, e) { return n.length === 0 && !t.children[e]; }
var tr = class {
};
function Fo(t, n, e, r, i, o, s, c) { return C(this, null, function* () { return new rr(t, n, e, r, i, s, o, c).recognize(); }); }
var Ho = 31, rr = class {
    injector;
    configLoader;
    rootComponentType;
    config;
    urlTree;
    paramsInheritanceStrategy;
    urlSerializer;
    abortSignal;
    applyRedirects;
    absoluteRedirectCount = 0;
    allowRedirects = !0;
    constructor(n, e, r, i, o, s, c, a) { this.injector = n, this.configLoader = e, this.rootComponentType = r, this.config = i, this.urlTree = o, this.paramsInheritanceStrategy = s, this.urlSerializer = c, this.abortSignal = a, this.applyRedirects = new Xt(this.urlSerializer, this.urlTree); }
    noMatchError(n) { return new _(4002, `'${n.segmentGroup}'`); }
    recognize() { return C(this, null, function* () { let n = Lr(this.urlTree.root, [], [], this.config).segmentGroup, { children: e, rootSnapshot: r } = yield this.match(n), i = new j(r, e), o = new Fe("", i), s = tn(r, [], this.urlTree.queryParams, this.urlTree.fragment); return s.queryParams = this.urlTree.queryParams, o.url = this.urlSerializer.serialize(s), { state: o, tree: s }; }); }
    match(n) { return C(this, null, function* () { let e = new Ae([], Object.freeze({}), Object.freeze(d({}, this.urlTree.queryParams)), this.urlTree.fragment, Object.freeze({}), g, this.rootComponentType, null, {}, this.injector); try {
        return { children: yield this.processSegmentGroup(this.injector, this.config, n, g, e), rootSnapshot: e };
    }
    catch (r) {
        if (r instanceof Be)
            return this.urlTree = r.urlTree, this.match(r.urlTree.root);
        throw r instanceof X ? this.noMatchError(r) : r;
    } }); }
    processSegmentGroup(n, e, r, i, o) { return C(this, null, function* () { if (r.segments.length === 0 && r.hasChildren())
        return this.processChildren(n, e, r, o); let s = yield this.processSegment(n, e, r, r.segments, i, !0, o); return s instanceof j ? [s] : []; }); }
    processChildren(n, e, r, i) { return C(this, null, function* () { let o = []; for (let a of Object.keys(r.children))
        a === "primary" ? o.unshift(a) : o.push(a); let s = []; for (let a of o) {
        let u = r.children[a], l = Lo(e, a), p = yield this.processSegmentGroup(n, l, u, a, i);
        s.push(...p);
    } let c = wn(s); return Bo(c), c; }); }
    processSegment(n, e, r, i, o, s, c) { return C(this, null, function* () { for (let a of e)
        try {
            return yield this.processSegmentAgainstRoute(a._injector ?? n, e, a, r, i, o, s, c);
        }
        catch (u) {
            if (u instanceof X || vn(u))
                continue;
            throw u;
        } if (qo(r, i, o))
        return new tr; throw new X(r); }); }
    processSegmentAgainstRoute(n, e, r, i, o, s, c, a) { return C(this, null, function* () { if (V(r) !== s && (s === g || !bt(i, o, r)))
        throw new X(i); if (r.redirectTo === void 0)
        return this.matchSegmentAgainstRoute(n, i, r, o, s, a); if (this.allowRedirects && c)
        return this.expandSegmentAgainstRouteUsingRedirect(n, i, e, r, o, s, a); throw new X(i); }); }
    expandSegmentAgainstRouteUsingRedirect(n, e, r, i, o, s, c) { return C(this, null, function* () { let { matched: a, parameters: u, consumedSegments: l, positionalParamSegments: p, remainingSegments: f } = Cn(e, i, o); if (!a)
        throw new X(e); typeof i.redirectTo == "string" && i.redirectTo[0] === "/" && (this.absoluteRedirectCount++, this.absoluteRedirectCount > Ho && (this.allowRedirects = !1)); let w = this.createSnapshot(n, i, o, u, c); if (this.abortSignal.aborted)
        throw new Error(this.abortSignal.reason); let E = yield this.applyRedirects.applyRedirectCommands(l, i.redirectTo, p, Sn(w), n), b = yield this.applyRedirects.lineralizeSegments(i, E); return this.processSegment(n, r, e, b.concat(f), s, !1, c); }); }
    createSnapshot(n, e, r, i, o) { let s = new Ae(r, i, Object.freeze(d({}, this.urlTree.queryParams)), this.urlTree.fragment, Go(e), V(e), e.component ?? e._loadedComponent ?? null, e, Wo(e), n), c = lr(s, o, this.paramsInheritanceStrategy); return s.params = Object.freeze(c.params), s.data = Object.freeze(c.data), s; }
    matchSegmentAgainstRoute(n, e, r, i, o, s) { return C(this, null, function* () { if (this.abortSignal.aborted)
        throw new Error(this.abortSignal.reason); let c = J => this.createSnapshot(n, r, J.consumedSegments, J.parameters, s), a = yield it(jo(e, r, i, n, this.urlSerializer, c, this.abortSignal)); if (r.path === "**" && (e.children = {}), !a?.matched)
        throw new X(e); n = r._injector ?? n; let { routes: u } = yield this.getChildConfig(n, r, i), l = r._loadedInjector ?? n, { parameters: p, consumedSegments: f, remainingSegments: w } = a, E = this.createSnapshot(n, r, f, p, s), { segmentGroup: b, slicedSegments: A } = Lr(e, f, w, u, o); if (A.length === 0 && b.hasChildren()) {
        let J = yield this.processChildren(l, u, b, E);
        return new j(E, J);
    } if (u.length === 0 && A.length === 0)
        return new j(E, []); let ue = V(r) === o, ie = yield this.processSegment(l, u, b, A, ue ? g : o, !0, E); return new j(E, ie instanceof j ? [ie] : []); }); }
    getChildConfig(n, e, r) { return C(this, null, function* () { if (e.children)
        return { routes: e.children, injector: n }; if (e.loadChildren) {
        if (e._loadedRoutes !== void 0) {
            let o = e._loadedNgModuleFactory;
            return o && !e._loadedInjector && (e._loadedInjector = o.create(n).injector), { routes: e._loadedRoutes, injector: e._loadedInjector };
        }
        if (this.abortSignal.aborted)
            throw new Error(this.abortSignal.reason);
        if (yield it(To(n, e, r, this.urlSerializer, this.abortSignal))) {
            let o = yield this.configLoader.loadChildren(n, e);
            return e._loadedRoutes = o.routes, e._loadedInjector = o.injector, e._loadedNgModuleFactory = o.factory, o;
        }
        throw Uo(e);
    } return { routes: [], injector: n }; }); }
};
function Bo(t) { t.sort((n, e) => n.value.outlet === g ? -1 : e.value.outlet === g ? 1 : n.value.outlet.localeCompare(e.value.outlet)); }
function Vo(t) { let n = t.value.routeConfig; return n && n.path === ""; }
function wn(t) { let n = [], e = new Set; for (let r of t) {
    if (!Vo(r)) {
        n.push(r);
        continue;
    }
    let i = n.find(o => r.value.routeConfig === o.value.routeConfig);
    i !== void 0 ? (i.children.push(...r.children), e.add(i)) : n.push(r);
} for (let r of e) {
    let i = wn(r.children);
    n.push(new j(r.value, i));
} return n.filter(r => !e.has(r)); }
function Go(t) { return t.data || {}; }
function Wo(t) { return t.resolve || {}; }
function Qo(t, n, e, r, i, o, s) { return he(c => C(null, null, function* () { let { state: a, tree: u } = yield Fo(t, n, e, r, c.extractedUrl, i, o, s); return D(d({}, c), { targetSnapshot: a, urlAfterRedirects: u }); })); }
function Ko(t) { return he(n => { let { targetSnapshot: e, guards: { canActivateChecks: r } } = n; if (!r.length)
    return m(n); let i = new Set(r.map(c => c.route)), o = new Set; for (let c of i)
    if (!o.has(c))
        for (let a of bn(c))
            o.add(a); let s = 0; return W(o).pipe(zr(c => i.has(c) ? Yo(c, e, t) : (c.data = lr(c, c.parent, t).resolve, m(void 0))), G(() => s++), qr(1), he(c => s === o.size ? m(n) : F)); }); }
function bn(t) { let n = t.children.map(e => bn(e)).flat(); return [t, ...n]; }
function Yo(t, n, e) { let r = t.routeConfig, i = t._resolve; return r?.title !== void 0 && !ln(r) && (i[Ve] = r.title), sr(() => (t.data = lr(t, t.parent, e).resolve, Zo(i, t, n).pipe(P(o => (t._resolvedData = o, t.data = d(d({}, t.data), o), null))))); }
function Zo(t, n, e) { let r = Ht(t); if (r.length === 0)
    return m({}); let i = {}; return W(r).pipe(he(o => Jo(t[o], n, e).pipe(pe(), G(s => { if (s instanceof Ne)
    throw Rt(new te, s); i[o] = s; }))), qr(1), P(() => i), Fr(o => vn(o) ? F : Ai(o))); }
function Jo(t, n, e) { let r = n._environmentInjector, i = De(t, r), o = i.resolve ? i.resolve(n, e) : z(r, () => i(n, e)); return ge(o); }
var It = new re("");
function Ct(t) { return H(n => { let e = t(n); return e ? W(e).pipe(P(() => n)) : m(n); }); }
var gr = (() => { class t {
    buildTitle(e) { let r, i = e.root; for (; i !== void 0;)
        r = this.getResolvedTitleForRoute(i) ?? r, i = i.children.find(o => o.outlet === g); return r; }
    getResolvedTitleForRoute(e) { return e.data[Ve]; }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = R.\u0275\u0275defineService({ token: t, factory: () => v(In) });
} return t; })(), In = (() => { class t extends gr {
    title;
    constructor(e) { super(), this.title = e; }
    updateTitle(e) { let r = this.buildTitle(e); r !== void 0 && this.title.setTitle(r); }
    static \u0275fac = function (r) { return new (r || t)(R.\u0275\u0275inject(Hr.Title)); };
    static \u0275prov = R.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })(), ne = new re("", { factory: () => ({}) }), me = new re(""), Et = (() => { class t {
    componentLoaders = new WeakMap;
    childrenLoaders = new WeakMap;
    onLoadStartListener;
    onLoadEndListener;
    compiler = v(gi);
    loadComponent(e, r) { return C(this, null, function* () { if (this.componentLoaders.get(r))
        return this.componentLoaders.get(r); if (r._loadedComponent)
        return Promise.resolve(r._loadedComponent); this.onLoadStartListener && this.onLoadStartListener(r); let i = C(this, null, function* () { try {
        let o = yield Gr(z(e, () => r.loadComponent())), s = yield Mn(xr(o));
        return this.onLoadEndListener && this.onLoadEndListener(r), r._loadedComponent = s, s;
    }
    finally {
        this.componentLoaders.delete(r);
    } }); return this.componentLoaders.set(r, i), i; }); }
    loadChildren(e, r) { if (this.childrenLoaders.get(r))
        return this.childrenLoaders.get(r); if (r._loadedRoutes)
        return Promise.resolve({ routes: r._loadedRoutes, injector: r._loadedInjector }); this.onLoadStartListener && this.onLoadStartListener(r); let i = C(this, null, function* () { try {
        let o = yield En(r, this.compiler, e, this.onLoadEndListener);
        return r._loadedRoutes = o.routes, r._loadedInjector = o.injector, r._loadedNgModuleFactory = o.factory, o;
    }
    finally {
        this.childrenLoaders.delete(r);
    } }); return this.childrenLoaders.set(r, i), i; }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = R.\u0275\u0275defineService({ token: t, factory: t.\u0275fac });
} return t; })();
function En(t, n, e, r) { return C(this, null, function* () { let i = yield Gr(z(e, () => t.loadChildren())), o = yield Mn(xr(i)), s; o instanceof vi || Array.isArray(o) ? s = o : s = yield n.compileModuleAsync(o), r && r(t); let c, a, u = !1, l; return Array.isArray(s) ? (a = s, u = !0) : (c = s.create(e).injector, l = s, a = c.get(me, [], { optional: !0, self: !0 }).flat()), { routes: a.map(pr), injector: c, factory: l }; }); }
function Mn(t) { return C(this, null, function* () { return t; }); }
var Mt = (() => { class t {
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = R.\u0275\u0275defineService({ token: t, factory: () => v(Xo) });
} return t; })(), Xo = (() => { class t {
    shouldProcessUrl(e) { return !0; }
    extract(e) { return e; }
    merge(e, r) { return e; }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = R.\u0275\u0275defineService({ token: t, factory: t.\u0275fac });
} return t; })(), vr = new re(""), mr = new re("");
function An(t, n, e) { let r = t.get(mr), i = t.get(ai); if (!i.startViewTransition || r.skipNextTransition)
    return r.skipNextTransition = !1, new Promise(u => setTimeout(u)); let o, s = new Promise(u => { o = u; }), c = i.startViewTransition(() => (o(), es(t))); c.updateCallbackDone.catch(u => { }), c.ready.catch(u => { }), c.finished.catch(u => { }); let { onViewTransitionCreated: a } = r; return a && z(t, () => a({ transition: c, from: n, to: e })), s; }
function es(t) { return new Promise(n => { mi({ read: () => setTimeout(n) }, { injector: t }); }); }
var ts = () => { }, At = new re(""), Nt = (() => { class t {
    currentNavigation = $t(null, { equal: () => !1 });
    currentTransition = null;
    lastSuccessfulNavigation = $t(null);
    events = new zt;
    transitionAbortWithErrorSubject = new zt;
    configLoader = v(Et);
    environmentInjector = v(or);
    destroyRef = v(yi);
    urlSerializer = v(ae);
    rootContexts = v(ve);
    location = v(ir);
    inputBindingEnabled = v(Ge, { optional: !0 }) !== null;
    titleStrategy = v(gr);
    options = v(ne, { optional: !0 }) || {};
    paramsInheritanceStrategy = this.options.paramsInheritanceStrategy || io;
    urlHandlingStrategy = v(Mt);
    createViewTransition = v(vr, { optional: !0 });
    navigationErrorHandler = v(At, { optional: !0 });
    routerResourcesFeature = v(It, { optional: !0 });
    navigationId = 0;
    get hasRequestedNavigation() { return this.navigationId !== 0; }
    transitions;
    afterPreactivation = () => m(void 0);
    rootComponentType = null;
    destroyed = !1;
    constructor() { let e = i => this.events.next(new dt(i)), r = i => this.events.next(new ht(i)); this.configLoader.onLoadEndListener = r, this.configLoader.onLoadStartListener = e, this.destroyRef.onDestroy(() => { this.destroyed = !0; }); }
    complete() { this.transitions?.complete(); }
    handleNavigationRequest(e) { let r = ++this.navigationId; Pe(() => { this.transitions?.next(D(d({}, e), { extractedUrl: this.urlHandlingStrategy.extract(e.rawUrl), targetSnapshot: null, targetRouterState: null, guards: { canActivateChecks: [], canDeactivateChecks: [] }, guardsResult: null, id: r, routesRecognizeHandler: {}, beforeActivateHandler: {} })); }); }
    setupNavigations(e) { return this.transitions = new B(null), this.transitions.pipe(ke(r => r !== null), H(r => { let i = !0, o = !1, s = new AbortController, c = () => !o && this.currentTransition?.id === r.id; return m(r).pipe(H(a => { if (this.navigationId > r.id)
        return this.cancelNavigationTransition(r, "", I.SupersededByNewNavigation), F; this.currentTransition = r; let u = this.lastSuccessfulNavigation(); this.currentNavigation.set({ id: a.id, initialUrl: a.rawUrl, extractedUrl: a.extractedUrl, targetBrowserUrl: typeof a.extras.browserUrl == "string" ? this.urlSerializer.parse(a.extras.browserUrl) : a.extras.browserUrl, trigger: a.source, extras: a.extras, previousNavigation: u ? D(d({}, u), { previousNavigation: null }) : null, abort: () => s.abort(), routesRecognizeHandler: a.routesRecognizeHandler, beforeActivateHandler: a.beforeActivateHandler }); let l = !e.navigated || this.isUpdatingInternalState() || this.isUpdatedBrowserUrl(), p = a.extras.onSameUrlNavigation ?? e.onSameUrlNavigation; if (!l && p !== "reload")
        return this.events.next(new $(a.id, this.urlSerializer.serialize(a.rawUrl), "", be.IgnoredSameUrlNavigation)), a.resolve(!1), F; if (this.urlHandlingStrategy.shouldProcessUrl(a.rawUrl))
        return m(a).pipe(H(f => (this.events.next(new K(f.id, this.urlSerializer.serialize(f.extractedUrl), f.source, f.restoredState)), f.id !== this.navigationId ? F : Promise.resolve(f))), Qo(this.environmentInjector, this.configLoader, this.rootComponentType, e.config, this.urlSerializer, this.paramsInheritanceStrategy, s.signal), G(f => { r.targetSnapshot = f.targetSnapshot, r.urlAfterRedirects = f.urlAfterRedirects, this.currentNavigation.update(w => (w.finalUrl = f.urlAfterRedirects, w)), this.events.next(new Ee); }), H(f => W(r.routesRecognizeHandler.deferredHandle ?? m(void 0)).pipe(P(() => f))), G(() => { let f = new ze(a.id, this.urlSerializer.serialize(a.extractedUrl), this.urlSerializer.serialize(a.urlAfterRedirects), a.targetSnapshot); this.events.next(f); })); if (l && this.urlHandlingStrategy.shouldProcessUrl(a.currentRawUrl)) {
        let { id: f, extractedUrl: w, source: E, restoredState: b, extras: A } = a, ue = new K(f, this.urlSerializer.serialize(w), E, b);
        this.events.next(ue);
        let ie = an(this.rootComponentType, this.environmentInjector).snapshot;
        return this.currentTransition = r = D(d({}, a), { targetSnapshot: ie, urlAfterRedirects: w, extras: D(d({}, A), { skipLocationChange: !1, replaceUrl: !1 }) }), this.currentNavigation.update(J => (J.finalUrl = w, J)), m(r);
    }
    else
        return this.events.next(new $(a.id, this.urlSerializer.serialize(a.extractedUrl), "", be.IgnoredByUrlHandlingStrategy)), a.resolve(!1), F; }), P(a => { let u = new at(a.id, this.urlSerializer.serialize(a.extractedUrl), this.urlSerializer.serialize(a.urlAfterRedirects), a.targetSnapshot); return this.events.next(u), this.currentTransition = r = D(d({}, a), { guards: uo(a.targetSnapshot, a.currentSnapshot, this.rootContexts) }), r; }), Co(a => this.events.next(a)), H(a => { if (r.guardsResult = a.guardsResult, a.guardsResult && typeof a.guardsResult != "boolean")
        throw Rt(this.urlSerializer, a.guardsResult); let u = new ct(a.id, this.urlSerializer.serialize(a.extractedUrl), this.urlSerializer.serialize(a.urlAfterRedirects), a.targetSnapshot, !!a.guardsResult); if (this.events.next(u), !c())
        return F; if (!a.guardsResult)
        return this.cancelNavigationTransition(a, "", I.GuardRejected), F; if (a.guards.canActivateChecks.length === 0)
        return m(a); let l = new ut(a.id, this.urlSerializer.serialize(a.extractedUrl), this.urlSerializer.serialize(a.urlAfterRedirects), a.targetSnapshot); if (this.events.next(l), !c())
        return F; let p = !1; return m(a).pipe(Ko(this.paramsInheritanceStrategy), G({ next: () => { p = !0; let f = new lt(a.id, this.urlSerializer.serialize(a.extractedUrl), this.urlSerializer.serialize(a.urlAfterRedirects), a.targetSnapshot); this.events.next(f); }, complete: () => { p || this.cancelNavigationTransition(a, "", I.NoDataFromResolver); } })); }), Ct(a => { let u = p => { let f = []; if (p.routeConfig?._loadedComponent)
        p.component = p.routeConfig?._loadedComponent;
    else if (p.routeConfig?.loadComponent) {
        let w = p._environmentInjector;
        f.push(this.configLoader.loadComponent(w, p.routeConfig).then(E => { p.component = E; }));
    } for (let w of p.children)
        f.push(...u(w)); return f; }, l = u(a.targetSnapshot.root); return l.length === 0 ? m(a) : W(Promise.all(l).then(() => a)); }), H(a => { let { newlyCreatedRoutes: u, state: l } = oo(e.routeReuseStrategy, a.targetSnapshot, a.currentRouterState); return this.currentTransition = r = a = D(d({}, a), { targetRouterState: l, newlyCreatedRoutes: u }), this.currentNavigation.update(p => (p.targetRouterState = l, p)), m(a); }), this.routerResourcesFeature?.setupAndRunResources(s.signal) ?? (a => a), Ct(() => this.afterPreactivation()), H(() => { let { currentSnapshot: a, targetSnapshot: u } = r, l = this.createViewTransition?.(this.environmentInjector, a.root, u.root); return l ? W(l).pipe(P(() => r)) : m(r); }), xe(1), H(a => { i = !1, this.events.next(new fe); let u = r.beforeActivateHandler.deferredHandle; return u ? W(u.then(() => a)) : m(a); }), G(a => { new Jt(e.routeReuseStrategy, r.targetRouterState, r.currentRouterState, u => this.events.next(u), this.inputBindingEnabled).activate(this.rootContexts), a.newlyCreatedRoutes?.clear(), c() && (Nn(a.targetRouterState), o = !0, this.currentNavigation.update(u => (u.abort = ts, u)), this.lastSuccessfulNavigation.set(Pe(this.currentNavigation)), this.events.next(new O(a.id, this.urlSerializer.serialize(a.extractedUrl), this.urlSerializer.serialize(a.urlAfterRedirects))), this.titleStrategy?.updateTitle(a.targetRouterState.snapshot), a.resolve(!0)); }), qt(mn(s.signal).pipe(ke(() => !o && i), G(() => { this.cancelNavigationTransition(r, s.signal.reason + "", I.Aborted); }))), G({ complete: () => { o = !0; } }), qt(this.transitionAbortWithErrorSubject.pipe(G(a => { throw a; }))), Di(() => { s.abort(), o || this.cancelNavigationTransition(r, "", I.SupersededByNewNavigation), this.currentTransition?.id === r.id && (this.currentNavigation.set(null), this.currentTransition = null); }), Fr(a => { if (o = !0, jr(r), this.destroyed)
        return r.resolve(!1), F; if (gn(a))
        this.events.next(new N(r.id, this.urlSerializer.serialize(r.extractedUrl), a.message, a.cancellationCode)), co(a) ? this.events.next(new Me(a.url, a.navigationBehaviorOptions)) : r.resolve(!1);
    else {
        let u = new Y(r.id, this.urlSerializer.serialize(r.extractedUrl), a, r.targetSnapshot ?? void 0);
        try {
            let l = z(this.environmentInjector, () => this.navigationErrorHandler?.(u));
            if (l instanceof Ne) {
                let { message: p, cancellationCode: f } = Rt(this.urlSerializer, l);
                this.events.next(new N(r.id, this.urlSerializer.serialize(r.extractedUrl), p, f)), this.events.next(new Me(l.redirectTo, l.navigationBehaviorOptions));
            }
            else
                throw this.events.next(u), a;
        }
        catch (l) {
            this.options.resolveNavigationPromiseOnError ? r.resolve(!1) : r.reject(l);
        }
    } return F; })); })); }
    cancelNavigationTransition(e, r, i) { jr(e); let o = new N(e.id, this.urlSerializer.serialize(e.extractedUrl), r, i); this.events.next(o), e.resolve(!1); }
    isUpdatingInternalState() { return this.currentTransition?.extractedUrl.toString() !== this.currentTransition?.currentUrlTree.toString(); }
    isUpdatedBrowserUrl() { let e = this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))), r = Pe(this.currentNavigation), i = r?.targetBrowserUrl ?? r?.extractedUrl; return e.toString() !== i?.toString() && !r?.extras.skipLocationChange; }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = R.\u0275\u0275defineService({ token: t, factory: t.\u0275fac });
} return t; })();
function rs(t) { return t !== Se; }
function jr(t) { for (let n of t.newlyCreatedRoutes ?? [])
    n._localInjector?.destroy(), n._localInjector = void 0; Nn(t.targetRouterState); }
function Nn(t) { if (!t)
    return; let n = e => { e.value.pending?.set(!1), e.children.forEach(n); }; n(t._root); }
var yr = new re("");
function Tn(t, n, e) { let r = new Set; n.snapshot.root && Dn(n.snapshot.root, r); let i = t.retrieveStoredRouteHandles?.() || []; for (let o of i) {
    let s = o;
    if (s?.route?.value?.snapshot)
        for (let c of s.route.value.snapshot.pathFromRoot)
            c.routeConfig && r.add(c.routeConfig);
} nr(e, r, t, !1); }
function Dn(t, n) { t.routeConfig && n.add(t.routeConfig); for (let e of t.children)
    Dn(e, n); }
function nr(t, n, e, r) { for (let i of t) {
    let o = r || !!((i._injector || i._loadedInjector) && !n.has(i) && (e.shouldDestroyInjector?.(i) ?? !1));
    i.children && nr(i.children, n, e, o), i.loadChildren && i._loadedRoutes && nr(i._loadedRoutes, n, e, o), o && (i._injector && (i._injector.destroy(), i._injector = void 0), i._loadedInjector && (i._loadedInjector.destroy(), i._loadedInjector = void 0));
} }
function ns(t) { let n = t; n && n.componentRef && (n.componentRef.destroy(), n.route.value._localInjector?.destroy()); }
var _n = (() => { class t {
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = R.\u0275\u0275defineService({ token: t, factory: () => v(is) });
} return t; })(), wt = class {
    shouldDetach(n) { return !1; }
    store(n, e) { }
    shouldAttach(n) { return !1; }
    retrieve(n) { return null; }
    shouldReuseRoute(n, e) { return n.routeConfig === e.routeConfig; }
    shouldDestroyInjector(n) { return !0; }
}, is = (() => { class t extends wt {
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = R.\u0275\u0275defineService({ token: t, factory: t.\u0275fac });
} return t; })(), _e = (() => { class t {
    urlSerializer = v(ae);
    options = v(ne, { optional: !0 }) || {};
    canceledNavigationResolution = this.options.canceledNavigationResolution || "replace";
    location = v(ir);
    urlHandlingStrategy = v(Mt);
    urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred";
    currentUrlTree = new U;
    getCurrentUrlTree() { return this.currentUrlTree; }
    rawUrlTree = this.currentUrlTree;
    getRawUrlTree() { return this.rawUrlTree; }
    createBrowserPath({ finalUrl: e, initialUrl: r, targetBrowserUrl: i }) { let o = e !== void 0 ? this.urlHandlingStrategy.merge(e, r) : r, s = i ?? o; return s instanceof U ? this.urlSerializer.serialize(s) : s; }
    routerUrlState(e) { return e?.targetBrowserUrl === void 0 || e?.finalUrl === void 0 ? {} : { \u0275routerUrl: this.urlSerializer.serialize(e.finalUrl) }; }
    commitTransition({ targetRouterState: e, finalUrl: r, initialUrl: i }) { r && e ? (this.currentUrlTree = r, this.rawUrlTree = this.urlHandlingStrategy.merge(r, i), this.routerState = e) : this.rawUrlTree = i; }
    routerState = an(null, v(or));
    getRouterState() { return this.routerState; }
    _stateMemento = this.createStateMemento();
    get stateMemento() { return this._stateMemento; }
    updateStateMemento() { this._stateMemento = this.createStateMemento(); }
    createStateMemento() { return { rawUrlTree: this.rawUrlTree, currentUrlTree: this.currentUrlTree, routerState: this.routerState }; }
    restoredState() { return this.location.getState(); }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = R.\u0275\u0275defineService({ token: t, factory: () => v(os) });
} return t; })(), os = (() => { class t extends _e {
    currentPageId = 0;
    lastSuccessfulId = -1;
    get browserPageId() { return this.canceledNavigationResolution !== "computed" ? this.currentPageId : this.restoredState()?.\u0275routerPageId ?? this.currentPageId; }
    registerNonRouterCurrentEntryChangeListener(e) { return this.location.subscribe(r => { r.type === "popstate" && setTimeout(() => { e(r.url, r.state, "popstate", { replaceUrl: !0 }); }); }); }
    handleRouterEvent(e, r) { e instanceof K ? this.updateStateMemento() : e instanceof $ ? this.commitTransition(r) : e instanceof ze ? this.urlUpdateStrategy === "eager" && (r.extras.skipLocationChange || this.setBrowserUrl(this.createBrowserPath(r), r)) : e instanceof fe ? (this.commitTransition(r), this.urlUpdateStrategy === "deferred" && !r.extras.skipLocationChange && this.setBrowserUrl(this.createBrowserPath(r), r)) : e instanceof N && !ur(e) ? this.restoreHistory(r) : e instanceof Y ? this.restoreHistory(r, !0) : e instanceof O && (this.lastSuccessfulId = e.id, this.currentPageId = this.browserPageId); }
    setBrowserUrl(e, r) { let { extras: i, id: o } = r, { replaceUrl: s, state: c } = i; if (this.location.isCurrentPathEqualTo(e) || s) {
        let a = this.browserPageId, u = d(d({}, c), this.generateNgRouterState(o, a, r));
        this.location.replaceState(e, "", u);
    }
    else {
        let a = d(d({}, c), this.generateNgRouterState(o, this.browserPageId + 1, r));
        this.location.go(e, "", a);
    } }
    restoreHistory(e, r = !1) { if (this.canceledNavigationResolution === "computed") {
        let i = this.browserPageId, o = this.currentPageId - i;
        o !== 0 ? this.location.historyGo(o) : this.getCurrentUrlTree() === e.finalUrl && o === 0 && (this.resetInternalState(e), this.resetUrlToCurrentUrlTree());
    }
    else
        this.canceledNavigationResolution === "replace" && (r && this.resetInternalState(e), this.resetUrlToCurrentUrlTree()); }
    resetInternalState({ finalUrl: e }) { this.routerState = this.stateMemento.routerState, this.currentUrlTree = this.stateMemento.currentUrlTree, this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, e ?? this.rawUrlTree); }
    resetUrlToCurrentUrlTree() { this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()), "", this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId)); }
    generateNgRouterState(e, r, i) { return this.canceledNavigationResolution === "computed" ? d({ navigationId: e, \u0275routerPageId: r }, this.routerUrlState(i)) : d({ navigationId: e }, this.routerUrlState(i)); }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = R.\u0275\u0275defineService({ token: t, factory: t.\u0275fac });
} return t; })();
function Tt(t, n) { t.events.pipe(ke(e => e instanceof O || e instanceof N || e instanceof Y || e instanceof $), P(e => e instanceof O || e instanceof $ ? 0 : (e instanceof N ? e.code === I.Redirect || e.code === I.SupersededByNewNavigation : !1) ? 2 : 1), ke(e => e !== 2), xe(1)).subscribe(() => { n(); }); }
var q = (() => { class t {
    get currentUrlTree() { return this.stateManager.getCurrentUrlTree(); }
    get rawUrlTree() { return this.stateManager.getRawUrlTree(); }
    disposed = !1;
    nonRouterCurrentEntryChangeSubscription;
    console = v(Ri);
    stateManager = v(_e);
    options = v(ne, { optional: !0 }) || {};
    pendingTasks = v(Si);
    urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred";
    navigationTransitions = v(Nt);
    urlSerializer = v(ae);
    location = v(ir);
    urlHandlingStrategy = v(Mt);
    injector = v(or);
    _events = new zt;
    get events() { return this._events; }
    get routerState() { return this.stateManager.getRouterState(); }
    navigated = !1;
    routeReuseStrategy = v(_n);
    injectorCleanup = v(yr, { optional: !0 });
    onSameUrlNavigation = this.options.onSameUrlNavigation || "ignore";
    config = v(me, { optional: !0 })?.flat() ?? [];
    componentInputBindingEnabled = !!v(Ge, { optional: !0 });
    currentNavigation = this.navigationTransitions.currentNavigation.asReadonly();
    constructor() { this.resetConfig(this.config), this.navigationTransitions.setupNavigations(this).subscribe({ error: e => { } }), this.subscribeToNavigationEvents(); }
    eventsSubscription = new Ni;
    subscribeToNavigationEvents() { let e = this.navigationTransitions.events.subscribe(r => { try {
        let i = this.navigationTransitions.currentTransition, o = Pe(this.navigationTransitions.currentNavigation);
        if (i !== null && o !== null) {
            if (this.stateManager.handleRouterEvent(r, o), r instanceof N && r.code !== I.Redirect && r.code !== I.SupersededByNewNavigation)
                this.navigated = !0;
            else if (r instanceof O)
                this.navigated = !0, this.injectorCleanup?.(this.routeReuseStrategy, this.routerState, this.config);
            else if (r instanceof Me) {
                let s = r.navigationBehaviorOptions, c = this.urlHandlingStrategy.merge(r.url, i.currentRawUrl), a = d({ scroll: i.extras.scroll, browserUrl: i.extras.browserUrl, info: i.extras.info, skipLocationChange: i.extras.skipLocationChange, replaceUrl: i.extras.replaceUrl || this.urlUpdateStrategy === "eager" || rs(i.source) }, s);
                this.scheduleNavigation(c, Se, null, a, { resolve: i.resolve, reject: i.reject, promise: i.promise });
            }
        }
        ro(r) && this._events.next(r);
    }
    catch (i) {
        this.navigationTransitions.transitionAbortWithErrorSubject.next(i);
    } }); this.eventsSubscription.add(e); }
    resetRootComponentType(e) { this.routerState.root.component = e, this.navigationTransitions.rootComponentType = e; }
    initialNavigation() { this.setUpLocationChangeListener(), this.navigationTransitions.hasRequestedNavigation || this.navigateToSyncWithBrowser(this.location.path(!0), Se, this.stateManager.restoredState(), { replaceUrl: !0 }); }
    setUpLocationChangeListener() { this.nonRouterCurrentEntryChangeSubscription ??= this.stateManager.registerNonRouterCurrentEntryChangeListener((e, r, i, o) => { this.navigateToSyncWithBrowser(e, i, r, o); }); }
    navigateToSyncWithBrowser(e, r, i, o) { let s = i?.navigationId ? i : null, c = i?.\u0275routerUrl ?? e; if (i?.\u0275routerUrl && (o = D(d({}, o), { browserUrl: e })), i) {
        let u = d({}, i);
        delete u.navigationId, delete u.\u0275routerPageId, delete u.\u0275routerUrl, Object.keys(u).length !== 0 && (o.state = u);
    } let a = this.parseUrl(c); this.scheduleNavigation(a, r, s, o).catch(u => { this.disposed || this.injector.get(Ci)(u); }); }
    get url() { return this.serializeUrl(this.currentUrlTree); }
    getCurrentNavigation() { return Pe(this.navigationTransitions.currentNavigation); }
    get lastSuccessfulNavigation() { return this.navigationTransitions.lastSuccessfulNavigation; }
    resetConfig(e) { this.config = e.map(pr), this.navigated = !1; }
    ngOnDestroy() { this.dispose(); }
    dispose() { this._events.unsubscribe(), this.navigationTransitions.complete(), this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(), this.nonRouterCurrentEntryChangeSubscription = void 0, this.disposed = !0, this.eventsSubscription.unsubscribe(); }
    createUrlTree(e, r = {}) { let { relativeTo: i, queryParams: o, fragment: s, queryParamsHandling: c, preserveFragment: a } = r, u = a ? this.currentUrlTree.fragment : s, l = null; switch (c ?? this.options.defaultQueryParamsHandling) {
        case "merge":
            l = d(d({}, this.currentUrlTree.queryParams), o);
            break;
        case "preserve":
            l = this.currentUrlTree.queryParams;
            break;
        default: l = o || null;
    } l !== null && (l = this.removeEmptyProps(l)); let p; try {
        let f = i ? i.snapshot : this.routerState.snapshot.root;
        p = rn(f);
    }
    catch {
        (typeof e[0] != "string" || e[0][0] !== "/") && (e = []), p = this.currentUrlTree.root;
    } return nn(p, e, l, u ?? null, this.urlSerializer); }
    navigateByUrl(e, r = { skipLocationChange: !1 }) { let i = se(e) ? e : this.parseUrl(e), o = this.urlHandlingStrategy.merge(i, this.rawUrlTree); return this.scheduleNavigation(o, Se, null, r); }
    navigate(e, r = { skipLocationChange: !1 }) { return ss(e), this.navigateByUrl(this.createUrlTree(e, r), r); }
    serializeUrl(e) { return this.urlSerializer.serialize(e); }
    parseUrl(e) { try {
        return this.urlSerializer.parse(e);
    }
    catch {
        return this.console.warn(wi(4018, !1)), this.urlSerializer.parse("/");
    } }
    isActive(e, r) { let i; if (r === !0 ? i = d({}, ar) : r === !1 ? i = d({}, we) : i = d(d({}, we), r), se(e))
        return Bt(this.currentUrlTree, e, i); let o = this.parseUrl(e); return Bt(this.currentUrlTree, o, i); }
    removeEmptyProps(e) { return Object.entries(e).reduce((r, [i, o]) => (o != null && (r[i] = o), r), {}); }
    scheduleNavigation(e, r, i, o, s) { if (this.disposed)
        return Promise.resolve(!1); let c, a, u; s ? (c = s.resolve, a = s.reject, u = s.promise) : u = new Promise((p, f) => { c = p, a = f; }); let l = this.pendingTasks.add(); return Tt(this, () => { queueMicrotask(() => this.pendingTasks.remove(l)); }), this.navigationTransitions.handleNavigationRequest({ source: r, restoredState: i, currentUrlTree: this.currentUrlTree, currentRawUrl: this.currentUrlTree, rawUrl: e, extras: o, resolve: c, reject: a, promise: u, currentSnapshot: this.routerState.snapshot, currentRouterState: this.routerState }), u.catch(Promise.reject.bind(Promise)); }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = R.\u0275\u0275defineService({ token: t, factory: t.\u0275fac });
} return t; })();
function ss(t) { for (let n = 0; n < t.length; n++)
    if (t[n] == null)
        throw new _(4008, !1); }
import * as Pn from "@angular/common";
import { ViewportScroller as Ln, PlatformNavigation as as, PlatformLocation as cs, \u0275PRECOMMIT_HANDLER_SUPPORTED as us, Location as _t, LOCATION_INITIALIZED as ls, \u0275NavigationAdapterForLocation as ds, HashLocationStrategy as jn, LocationStrategy as wr, PathLocationStrategy as hs } from "@angular/common";
import * as h from "@angular/core";
import { inject as S, HostAttributeToken as fs, linkedSignal as ps, untracked as L, signal as T, input as gs, \u0275INTERNAL_APPLICATION_ERROR_HANDLER as vs, effect as br, \u0275RuntimeError as Aa, computed as xn, booleanAttribute as Rr, EventEmitter as ms, reflectComponentType as ys, Injector as Ir, resourceFromSnapshots as Rs, DestroyRef as Er, createEnvironmentInjector as kn, runInInjectionContext as Un, InjectionToken as Ye, \u0275IS_HYDRATION_DOM_REUSE_ENABLED as Ss, NgZone as Cs, ApplicationRef as $n, EnvironmentInjector as ws, afterNextRender as bs, \u0275promiseWithResolvers as On, makeEnvironmentProviders as Is, APP_BOOTSTRAP_LISTENER as zn, provideAppInitializer as qn, \u0275IS_ENABLED_BLOCKING_INITIAL_NAVIGATION as Es, \u0275performanceMarkFeature as Ms } from "@angular/core";
import { Subject as Mr, of as ce, from as Dt, pipe as As } from "rxjs";
import { mergeAll as Ut, catchError as Ns, filter as Ts, concatMap as Ds, mergeMap as _s } from "rxjs/operators";
var Us = (() => { class t {
    router = S(q);
    stateManager = S(_e);
    fragment = T("");
    queryParams = T({});
    path = T("");
    serializer = S(ae);
    constructor() { this.updateState(), this.router.events?.subscribe(e => { e instanceof O && this.updateState(); }); }
    updateState() { let { fragment: e, root: r, queryParams: i } = this.stateManager.getCurrentUrlTree(); this.fragment.set(e), this.queryParams.set(i), this.path.set(this.serializer.serialize(new U(r))); }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = h.\u0275\u0275defineService({ token: t, factory: t.\u0275fac });
} return t; })(), Ot = (() => { class t {
    router;
    route;
    tabIndexAttribute;
    renderer;
    el;
    locationStrategy;
    hrefAttributeValue = S(new fs("href"), { optional: !0 });
    reactiveHref = ps(() => this.isAnchorElement ? this.computeHref(this._urlTree()) : this.hrefAttributeValue);
    get href() { return L(this.reactiveHref); }
    set href(e) { this.reactiveHref.set(e); }
    set target(e) { this._target.set(e); }
    get target() { return L(this._target); }
    _target = T(void 0);
    set queryParams(e) { this._queryParams.set(e); }
    get queryParams() { return L(this._queryParams); }
    _queryParams = T(void 0, { equal: () => !1 });
    set fragment(e) { this._fragment.set(e); }
    get fragment() { return L(this._fragment); }
    _fragment = T(void 0);
    set queryParamsHandling(e) { this._queryParamsHandling.set(e); }
    get queryParamsHandling() { return L(this._queryParamsHandling); }
    _queryParamsHandling = T(void 0);
    set state(e) { this._state.set(e); }
    get state() { return L(this._state); }
    _state = T(void 0, { equal: () => !1 });
    set info(e) { this._info.set(e); }
    get info() { return L(this._info); }
    _info = T(void 0, { equal: () => !1 });
    set relativeTo(e) { this._relativeTo.set(e); }
    get relativeTo() { return L(this._relativeTo); }
    _relativeTo = T(void 0);
    set preserveFragment(e) { this._preserveFragment.set(e); }
    get preserveFragment() { return L(this._preserveFragment); }
    _preserveFragment = T(!1);
    set skipLocationChange(e) { this._skipLocationChange.set(e); }
    get skipLocationChange() { return L(this._skipLocationChange); }
    _skipLocationChange = T(!1);
    set replaceUrl(e) { this._replaceUrl.set(e); }
    get replaceUrl() { return L(this._replaceUrl); }
    _replaceUrl = T(!1);
    browserUrl = gs(void 0);
    isAnchorElement;
    onChanges = new Mr;
    applicationErrorHandler = S(vs);
    options = S(ne, { optional: !0 });
    reactiveRouterState = S(Us);
    constructor(e, r, i, o, s, c) { this.router = e, this.route = r, this.tabIndexAttribute = i, this.renderer = o, this.el = s, this.locationStrategy = c; let a = s.nativeElement.tagName?.toLowerCase(); this.isAnchorElement = a === "a" || a === "area" || !!(typeof customElements == "object" && customElements.get(a)?.observedAttributes?.includes?.("href")); }
    setTabIndexIfNotOnNativeEl(e) { this.tabIndexAttribute != null || this.isAnchorElement || this.applyAttributeValue("tabindex", e); }
    ngOnChanges(e) { this.onChanges.next(this); }
    routerLinkInput = T(null);
    set routerLink(e) { e == null ? (this.routerLinkInput.set(null), this.setTabIndexIfNotOnNativeEl(null)) : (se(e) ? this.routerLinkInput.set(e) : this.routerLinkInput.set(Array.isArray(e) ? e : [e]), this.setTabIndexIfNotOnNativeEl("0")); }
    onClick(e, r, i, o, s) { let c = this._urlTree(); if (c === null || this.isAnchorElement && (e !== 0 || r || i || o || s || typeof this.target == "string" && this.target != "_self"))
        return !0; let a = this.browserUrl(), u = d({ skipLocationChange: this.skipLocationChange, replaceUrl: this.replaceUrl, state: this.state, info: this.info }, a !== void 0 && { browserUrl: a }); return this.router.navigateByUrl(c, u)?.catch(l => { this.applicationErrorHandler(l); }), !this.isAnchorElement; }
    ngOnDestroy() { }
    applyAttributeValue(e, r) { let i = this.renderer, o = this.el.nativeElement; r !== null ? i.setAttribute(o, e, r) : i.removeAttribute(o, e); }
    _urlTree = xn(() => { this.reactiveRouterState.path(), this._preserveFragment() && this.reactiveRouterState.fragment(); let e = i => i === "preserve" || i === "merge"; (e(this._queryParamsHandling()) || e(this.options?.defaultQueryParamsHandling)) && this.reactiveRouterState.queryParams(); let r = this.routerLinkInput(); return r === null || !this.router.createUrlTree ? null : se(r) ? r : this.router.createUrlTree(r, { relativeTo: this._relativeTo() !== void 0 ? this._relativeTo() : this.route, queryParams: this._queryParams(), fragment: this._fragment(), queryParamsHandling: this._queryParamsHandling(), preserveFragment: this._preserveFragment() }); }, { equal: (e, r) => this.computeHref(e) === this.computeHref(r) });
    get urlTree() { return L(this._urlTree); }
    computeHref(e) { return e !== null && this.locationStrategy ? this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e)) ?? "" : null; }
    static \u0275fac = function (r) { return new (r || t)(h.\u0275\u0275directiveInject(q), h.\u0275\u0275directiveInject(Z), h.\u0275\u0275injectAttribute("tabindex"), h.\u0275\u0275directiveInject(h.Renderer2), h.\u0275\u0275directiveInject(h.ElementRef), h.\u0275\u0275directiveInject(Pn.LocationStrategy)); };
    static \u0275dir = h.\u0275\u0275defineDirective({ type: t, selectors: [["", "routerLink", ""]], hostVars: 2, hostBindings: function (r, i) { r & 1 && h.\u0275\u0275listener("click", function (s) { return i.onClick(s.button, s.ctrlKey, s.shiftKey, s.altKey, s.metaKey); }), r & 2 && h.\u0275\u0275attribute("href", i.reactiveHref(), h.\u0275\u0275sanitizeUrlOrResourceUrl)("target", i._target()); }, inputs: { target: "target", queryParams: "queryParams", fragment: "fragment", queryParamsHandling: "queryParamsHandling", state: "state", info: "info", relativeTo: "relativeTo", preserveFragment: [2, "preserveFragment", "preserveFragment", Rr], skipLocationChange: [2, "skipLocationChange", "skipLocationChange", Rr], replaceUrl: [2, "replaceUrl", "replaceUrl", Rr], browserUrl: [1, "browserUrl"], routerLink: "routerLink" }, features: [h.\u0275\u0275NgOnChangesFeature] });
} return t; })(), Os = (() => { class t {
    router;
    element;
    renderer;
    cdr;
    links;
    classes = [];
    routerEventsSubscription;
    linkInputChangesSubscription;
    _isActive = !1;
    get isActive() { return this._isActive; }
    routerLinkActiveOptions = { exact: !1 };
    ariaCurrentWhenActive;
    isActiveChange = new ms;
    link = S(Ot, { optional: !0 });
    constructor(e, r, i, o) { this.router = e, this.element = r, this.renderer = i, this.cdr = o, this.routerEventsSubscription = e.events.subscribe(s => { s instanceof O && this.update(); }); }
    ngAfterContentInit() { ce(this.links.changes, ce(null)).pipe(Ut()).subscribe(e => { this.update(), this.subscribeToEachLinkOnChanges(); }); }
    subscribeToEachLinkOnChanges() { this.linkInputChangesSubscription?.unsubscribe(); let e = [...this.links.toArray(), this.link].filter(r => !!r).map(r => r.onChanges); this.linkInputChangesSubscription = Dt(e).pipe(Ut()).subscribe(r => { this._isActive !== this.isLinkActive(this.router)(r) && this.update(); }); }
    set routerLinkActive(e) { if (e == null) {
        this.classes = [];
        return;
    } let r = Array.isArray(e) ? e : e.split(" "); this.classes = r.filter(i => !!i); }
    ngOnChanges(e) { this.update(); }
    ngOnDestroy() { this.routerEventsSubscription.unsubscribe(), this.linkInputChangesSubscription?.unsubscribe(); }
    update() { !this.links || !this.router.navigated || this.routerLinkActiveOptions === null && !this._isActive || queueMicrotask(() => { let e = this.hasActiveLinks(); this.classes.forEach(r => { e ? this.renderer.addClass(this.element.nativeElement, r) : this.renderer.removeClass(this.element.nativeElement, r); }), e && this.ariaCurrentWhenActive !== void 0 ? this.renderer.setAttribute(this.element.nativeElement, "aria-current", this.ariaCurrentWhenActive.toString()) : this.renderer.removeAttribute(this.element.nativeElement, "aria-current"), this._isActive !== e && (this._isActive = e, this.cdr.markForCheck(), this.isActiveChange.emit(e)); }); }
    isLinkActive(e) { let r = this.routerLinkActiveOptions; if (r === null)
        return () => !1; let i; return r === void 0 ? i = d({}, we) : Ps(r) ? i = r : r.exact ?? !1 ? i = d({}, ar) : i = d({}, we), o => { let s = o.urlTree; return s ? L(cr(s, e, i)) : !1; }; }
    hasActiveLinks() { let e = this.isLinkActive(this.router); return this.link && e(this.link) || this.links.some(e); }
    static \u0275fac = function (r) { return new (r || t)(h.\u0275\u0275directiveInject(q), h.\u0275\u0275directiveInject(h.ElementRef), h.\u0275\u0275directiveInject(h.Renderer2), h.\u0275\u0275directiveInject(h.ChangeDetectorRef)); };
    static \u0275dir = h.\u0275\u0275defineDirective({ type: t, selectors: [["", "routerLinkActive", ""]], contentQueries: function (r, i, o) { if (r & 1 && h.\u0275\u0275contentQuery(o, Ot, 5), r & 2) {
            let s;
            h.\u0275\u0275queryRefresh(s = h.\u0275\u0275loadQuery()) && (i.links = s);
        } }, inputs: { routerLinkActiveOptions: "routerLinkActiveOptions", ariaCurrentWhenActive: "ariaCurrentWhenActive", routerLinkActive: "routerLinkActive" }, outputs: { isActiveChange: "isActiveChange" }, exportAs: ["routerLinkActive"], features: [h.\u0275\u0275NgOnChangesFeature] });
} return t; })();
function Ps(t) { let n = t; return !!(n.paths || n.matrixParams || n.queryParams || n.fragment); }
var Qe = Symbol(""), Ar = Symbol("");
function Fn(t) { let n = t.status(); return t.hasValue() || n !== "loading" && n !== "reloading"; }
function Ls(t) { return t[Qe] = !1, t; }
function js(t) { let n = S(Ir), e = n.get(q), { snapshot: r, frozenSnapshot: i } = xs(t, e, n), o = Rs(r); return o[Ar] = t, o[Qe] = t[Qe] !== !1, typeof t.reload == "function" ? o.reload = function () { return i() !== null ? !1 : t.reload(); } : o.reload = () => !1, o; }
function xs(t, n, e) { let r = T(null), i = T(!1), o = n.events.subscribe(s => { if (s instanceof K)
    i.set(!1), r() === null && r.set(t.snapshot());
else if (s instanceof O)
    r.set(null), i.set(!1);
else if (s instanceof $)
    r() !== null && i.set(!0);
else if (s instanceof N || s instanceof Y) {
    if (!(s instanceof Y || s instanceof N && s.code !== I.SupersededByNewNavigation && s.code !== I.Redirect))
        return;
    i.set(!0);
} }); return e.get(Er).onDestroy(() => o.unsubscribe()), br(() => { i() && Fn(t) && (i.set(!1), r.set(null)); }, { injector: e }), { snapshot: xn(() => r() ?? t.snapshot()), frozenSnapshot: r }; }
function ks(t, n, e) { let r = [], i = [], o = n.component ? ys(n.component) : null; if (!o)
    return { createdEffects: r, handledKeys: i }; for (let { templateName: s } of o.inputs) {
    let c = n.resources?.[s];
    if (!c || !c[Qe])
        continue;
    let a = br(() => { t.setInput(s, c.value()); }, { injector: e });
    r.push(a), i.push(s);
} return { createdEffects: r, handledKeys: i }; }
function $s(t) { return As(Ct(({ newlyCreatedRoutes: n, targetRouterState: e }) => { if (!n || !e || t.aborted)
    return; let r = [], i = [], o = s => { let c = s.value; c && (un(c), zs(c, n, r, t, i)); for (let a of s.children)
    o(a); }; return o(e._root), Promise.all(r).then(() => Promise.all(i)); })); }
function zs(t, n, e, r, i) { t.routeConfig?.resources && (n.has(t) ? e.push(qs(t._futureSnapshot, t, r, i)) : Fs(t, i, r)); }
function qs(t, n, e, r) { return C(this, null, function* () { let i = t?.routeConfig?.resources, o = t?._environmentInjector; if (!i || !o)
    return; let s = n._localInjector; s || (s = kn([], o), n._localInjector = s); let c = { params: n.paramsSignal, queryParams: n.queryParamsSignal, fragment: n.fragmentSignal, data: n.dataSignal, snapshot: n._futureSnapshot }, a = Un(s, () => i(c)), u; if (a instanceof Promise) {
    if (u = yield a, e.aborted)
        return;
}
else
    u = a; if (!u)
    return; let l = {}; for (let [p, f] of Object.entries(u))
    l[p] = Un(s, () => js(f)); n.resources = n._futureSnapshot.resources = t.resources = l, Hn(n, l, r, e); }); }
function Fs(t, n, e) { let r = t.snapshot?.resources; r && (Object.values(r).forEach(i => { let o = i[Ar]; o.status() === "error" && o.reload?.(); }), t._futureSnapshot.resources = r, Hn(t, r, n, e)); }
function Hn(t, n, e, r) { if (r.aborted)
    return; let i = t._localInjector; if (!(!i || !n))
    for (let o of Object.values(n)) {
        let s = o;
        if (s[Qe] === !1)
            continue;
        let c = new Promise((a, u) => { let l = s[Ar], p = !1, f, w = () => { p = !0, b.destroy(), f?.(), r.removeEventListener("abort", E); }, E = () => { w(), a(); }; r.addEventListener("abort", E, { once: !0 }); let b = br(() => { if (p)
            return; l.status() === "error" ? (w(), u(l.error())) : Fn(l) && (w(), a()); }, { injector: i, manualCleanup: !0 }); f = i.get(Er).onDestroy(() => { w(), a(); }); });
        e.push(c);
    } }
var Ke = class {
}, Hs = (() => { class t {
    preload(e, r) { return r().pipe(Ns(() => ce(null))); }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = h.\u0275\u0275defineService({ token: t, factory: t.\u0275fac });
} return t; })(), Bs = (() => { class t {
    preload(e, r) { return ce(null); }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = h.\u0275\u0275defineService({ token: t, factory: t.\u0275fac });
} return t; })(), Bn = (() => { class t {
    router;
    injector;
    preloadingStrategy;
    loader;
    subscription;
    constructor(e, r, i, o) { this.router = e, this.injector = r, this.preloadingStrategy = i, this.loader = o; }
    setUpPreloading() { this.subscription = this.router.events.pipe(Ts(e => e instanceof O), Ds(() => this.preload())).subscribe(() => { }); }
    preload() { return this.processRoutes(this.injector, this.router.config); }
    ngOnDestroy() { this.subscription?.unsubscribe(); }
    processRoutes(e, r) { let i = []; for (let o of r) {
        o.providers && !o._injector && (o._injector = kn(o.providers, e, ""));
        let s = o._injector ?? e;
        o._loadedNgModuleFactory && !o._loadedInjector && (o._loadedInjector = o._loadedNgModuleFactory.create(s).injector);
        let c = o._loadedInjector ?? s;
        (o.loadChildren && !o._loadedRoutes && o.canLoad === void 0 || o.loadComponent && !o._loadedComponent) && i.push(this.preloadConfig(s, o)), (o.children || o._loadedRoutes) && i.push(this.processRoutes(c, o.children ?? o._loadedRoutes));
    } return Dt(i).pipe(Ut()); }
    preloadConfig(e, r) { return this.preloadingStrategy.preload(r, () => { if (e.destroyed)
        return ce(null); let i; r.loadChildren && r.canLoad === void 0 ? i = Dt(this.loader.loadChildren(e, r)) : i = ce(null); let o = i.pipe(_s(s => s === null ? ce(void 0) : (r._loadedRoutes = s.routes, r._loadedInjector = s.injector, r._loadedNgModuleFactory = s.factory, this.processRoutes(s.injector ?? e, s.routes)))); if (r.loadComponent && !r._loadedComponent) {
        let s = this.loader.loadComponent(e, r);
        return Dt([o, s]).pipe(Ut());
    }
    else
        return o; }); }
    static \u0275fac = function (r) { return new (r || t)(h.\u0275\u0275inject(q), h.\u0275\u0275inject(h.EnvironmentInjector), h.\u0275\u0275inject(Ke), h.\u0275\u0275inject(Et)); };
    static \u0275prov = h.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })(), Pt = new Ye(""), Vn = (() => { class t {
    options;
    routerEventsSubscription;
    scrollEventsSubscription;
    lastId = 0;
    lastSource = Se;
    restoredId = 0;
    store = {};
    isHydrating = S(Ss, { optional: !0 }) ?? !1;
    urlSerializer = S(ae);
    zone = S(Cs);
    viewportScroller = S(Ln);
    transitions = S(Nt);
    constructor(e) { this.options = e, this.options.scrollPositionRestoration ||= "disabled", this.options.anchorScrolling ||= "disabled", this.isHydrating && S($n).whenStable().then(() => { this.isHydrating = !1; }); }
    init() { this.options.scrollPositionRestoration !== "disabled" && this.viewportScroller.setHistoryScrollRestoration("manual"), this.routerEventsSubscription = this.createScrollEvents(), this.scrollEventsSubscription = this.consumeScrollEvents(); }
    createScrollEvents() { return this.transitions.events.subscribe(e => { e instanceof K ? (this.store[this.lastId] = this.viewportScroller.getScrollPosition(), this.lastSource = e.navigationTrigger, this.restoredId = e.restoredState ? e.restoredState.navigationId : 0) : e instanceof O ? (this.lastId = e.id, this.scheduleScrollEvent(e, this.urlSerializer.parse(e.urlAfterRedirects).fragment)) : e instanceof $ && e.code === be.IgnoredSameUrlNavigation && (this.lastSource = void 0, this.restoredId = 0, this.scheduleScrollEvent(e, this.urlSerializer.parse(e.url).fragment)); }); }
    consumeScrollEvents() { return this.transitions.events.subscribe(e => { if (!(e instanceof Ie) || e.scrollBehavior === "manual")
        return; let r = { behavior: "instant" }; e.position ? this.options.scrollPositionRestoration === "top" ? this.viewportScroller.scrollToPosition([0, 0], r) : this.options.scrollPositionRestoration === "enabled" && this.viewportScroller.scrollToPosition(e.position, r) : e.anchor && this.options.anchorScrolling === "enabled" ? this.viewportScroller.scrollToAnchor(e.anchor) : this.options.scrollPositionRestoration !== "disabled" && this.viewportScroller.scrollToPosition([0, 0]); }); }
    scheduleScrollEvent(e, r) { if (this.isHydrating)
        return; let i = L(this.transitions.currentNavigation)?.extras.scroll; this.zone.runOutsideAngular(() => C(this, null, function* () { yield new Promise(o => { setTimeout(o), typeof requestAnimationFrame < "u" && requestAnimationFrame(o); }), this.zone.run(() => { this.transitions.events.next(new Ie(e, this.lastSource === "popstate" ? this.store[this.restoredId] : null, r, i)); }); })); }
    ngOnDestroy() { this.routerEventsSubscription?.unsubscribe(), this.scrollEventsSubscription?.unsubscribe(); }
    static \u0275fac = function (r) { h.\u0275\u0275invalidFactory(); };
    static \u0275prov = h.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac });
} return t; })();
var Vs = (() => { class t extends _e {
    injector = S(ws);
    navigation = S(as);
    inMemoryScrollingEnabled = S(Pt, { optional: !0 }) !== null;
    base = new URL(S(cs).href).origin;
    appRootUrl = new URL(this.location.prepareExternalUrl?.("/") ?? "/", this.base);
    precommitHandlerSupported = S(us);
    activeHistoryEntry = this.navigation.currentEntry;
    currentNavigation = {};
    nonRouterCurrentEntryChangeSubject = new Mr;
    nonRouterEntryChangeListener;
    get registered() { return this.nonRouterEntryChangeListener !== void 0 && !this.nonRouterEntryChangeListener.closed; }
    constructor() { super(); let e = r => { this.handleNavigate(r); }; this.navigation.addEventListener("navigate", e), S(Er).onDestroy(() => this.navigation.removeEventListener("navigate", e)); }
    registerNonRouterCurrentEntryChangeListener(e) { return this.activeHistoryEntry = this.navigation.currentEntry, this.nonRouterEntryChangeListener = this.nonRouterCurrentEntryChangeSubject.subscribe(({ path: r, state: i }) => { e(r, i, "popstate", this.precommitHandlerSupported ? {} : { replaceUrl: !0 }); }), this.nonRouterEntryChangeListener; }
    handleRouterEvent(e, r) { return C(this, null, function* () { if (this.currentNavigation = D(d({}, this.currentNavigation), { routerTransition: r }), e instanceof K)
        this.updateStateMemento(), this.precommitHandlerSupported && this.maybeCreateNavigationForTransition(r);
    else if (e instanceof $)
        this.finishNavigation(), this.commitTransition(r);
    else if (e instanceof Ee)
        r.routesRecognizeHandler.deferredHandle = new Promise(i => C(this, null, function* () { if (this.urlUpdateStrategy === "eager")
            try {
                this.maybeCreateNavigationForTransition(r), yield this.currentNavigation.commitUrl?.();
            }
            catch {
                return;
            } i(); }));
    else if (e instanceof fe)
        r.beforeActivateHandler.deferredHandle = new Promise(i => C(this, null, function* () { if (this.urlUpdateStrategy === "deferred")
            try {
                this.maybeCreateNavigationForTransition(r), yield this.currentNavigation.commitUrl?.();
            }
            catch {
                return;
            } this.commitTransition(r), i(); }));
    else if (e instanceof N || e instanceof Y) {
        if (e instanceof N && e.code === I.Redirect && !!this.currentNavigation.commitUrl)
            return;
        this.cancel(r, e);
    }
    else if (e instanceof O) {
        let { resolveHandler: i, removeAbortListener: o } = this.currentNavigation;
        this.currentNavigation = {}, o?.(), this.activeHistoryEntry = this.navigation.currentEntry, bs({ read: () => i?.() }, { injector: this.injector });
    } }); }
    maybeCreateNavigationForTransition(e) { let { navigationEvent: r, commitUrl: i } = this.currentNavigation; if (i || r && r.navigationType === "traverse" && this.eventAndRouterDestinationsMatch(r, e))
        return; this.currentNavigation.removeAbortListener?.(); let o = this.createBrowserPath(e); this.navigate(o, e); }
    navigate(e, r) { let i = r.extras.skipLocationChange ? this.navigation.currentEntry.url : this.location.prepareExternalUrl(e), o = d(d({}, r.extras.state), this.generateNgRouterState(r)), s = { \u0275routerInfo: { intercept: !0 } }; !this.navigation.transition && this.currentNavigation.navigationEvent && (r.extras.replaceUrl = !1); let c = this.location.isCurrentPathEqualTo(i) || r.extras.replaceUrl || r.extras.skipLocationChange ? "replace" : "push"; Sr(this.navigation.navigate(i, { state: o, history: c, info: s })); }
    finishNavigation() { this.currentNavigation.commitUrl?.(), this.currentNavigation?.resolveHandler?.(), this.currentNavigation = {}; }
    cancel(e, r) { return C(this, null, function* () { this.currentNavigation.rejectNavigateEvent?.(); let i = {}; if (this.currentNavigation = i, ur(r))
        return; let o = this.canceledNavigationResolution === "computed" && this.navigation.currentEntry.key !== this.activeHistoryEntry.key; if (this.resetInternalState(e.finalUrl, o), this.navigation.currentEntry.id !== this.activeHistoryEntry.id && !(r instanceof N && r.code === I.Aborted && (yield Promise.resolve(), this.currentNavigation !== i)))
        if (o)
            Sr(this.navigation.traverseTo(this.activeHistoryEntry.key, { info: { \u0275routerInfo: { intercept: !1 } } }));
        else {
            let s = this.urlSerializer.serialize(this.getCurrentUrlTree()), c = this.location.prepareExternalUrl(s);
            Sr(this.navigation.navigate(c, { state: this.activeHistoryEntry.getState(), history: "replace", info: { \u0275routerInfo: { intercept: !1 } } }));
        } }); }
    resetInternalState(e, r) { this.routerState = this.stateMemento.routerState, this.currentUrlTree = this.stateMemento.currentUrlTree, this.rawUrlTree = r ? this.stateMemento.rawUrlTree : this.urlHandlingStrategy.merge(this.currentUrlTree, e ?? this.rawUrlTree); }
    handleNavigate(e) { if (!e.canIntercept || e.navigationType === "reload")
        return; let r = e?.info?.\u0275routerInfo; if (r && !r.intercept)
        return; let i = !!r; if (!i) {
        let { pathname: E, origin: b } = new URL(e.destination.url), { pathname: A, origin: ue } = this.appRootUrl, ie = A.endsWith("/") ? A : A + "/";
        if (b !== ue || E !== A && !E.startsWith(ie))
            return;
        if (this.currentNavigation.routerTransition?.abort(), !this.registered) {
            this.finishNavigation();
            return;
        }
    } this.currentNavigation = d({}, this.currentNavigation), this.currentNavigation.navigationEvent = e; let o = () => { this.currentNavigation.routerTransition?.abort(); }; e.signal.addEventListener("abort", o), this.currentNavigation.removeAbortListener = () => e.signal.removeEventListener("abort", o); let c = { scroll: this.inMemoryScrollingEnabled ? "manual" : this.currentNavigation.routerTransition?.extras.scroll ?? "after-transition" }, { promise: a, resolve: u, reject: l } = On(), { promise: p, resolve: f, reject: w } = On(); if (this.currentNavigation.rejectNavigateEvent = () => { e.signal.removeEventListener("abort", o), w(), l(); }, this.currentNavigation.resolveHandler = () => { this.currentNavigation.removeAbortListener?.(), u(); }, a.catch(() => { }), p.catch(() => { }), c.handler = () => a, this.deferredCommitSupported(e)) {
        let E = new Promise(b => { c.precommitHandler = A => (this.navigation.transition?.navigationType === "traverse" ? b(() => { }) : b(A.redirect.bind(A)), p); });
        this.currentNavigation.commitUrl = () => C(this, null, function* () { this.currentNavigation.commitUrl = void 0; let b = this.currentNavigation.routerTransition; if (b && !b.extras.skipLocationChange) {
            let A = this.createBrowserPath(b), ue = this.location.isCurrentPathEqualTo(A) || b.extras.replaceUrl ? "replace" : "push", ie = d(d({}, b.extras.state), this.generateNgRouterState(b)), J = this.location.prepareExternalUrl(A);
            (yield E)(J, { state: ie, history: ue });
        } return f(), yield this.navigation.transition?.committed; });
    } e.intercept(c), i || this.handleNavigateEventTriggeredOutsideRouterAPIs(e); }
    handleNavigateEventTriggeredOutsideRouterAPIs(e) { let r = e.destination.url.substring(this.appRootUrl.href.length - 1), i = e.destination.getState(); this.nonRouterCurrentEntryChangeSubject.next({ path: r, state: i }); }
    eventAndRouterDestinationsMatch(e, r) { let i = this.createBrowserPath(r), o = new URL(e.destination.url), s = new URL(this.location.prepareExternalUrl(i), o.origin); o.searchParams.sort(), s.searchParams.sort(); let { pathname: c, search: a, hash: u } = s, { pathname: l, search: p, hash: f } = o; return a === p && u === f && _t.stripTrailingSlash(c) === _t.stripTrailingSlash(l); }
    generateNgRouterState(e) { return D(d({}, this.routerUrlState(e)), { navigationId: e.id }); }
    deferredCommitSupported(e) { return this.precommitHandlerSupported && e.cancelable; }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = h.\u0275\u0275defineService({ token: t, factory: t.\u0275fac });
} return t; })();
function Sr(t) { return t.finished?.catch(() => { }), t.committed?.catch(() => { }), t; }
function Gs(t, ...n) { return Is([{ provide: me, multi: !0, useValue: t }, { provide: Z, useFactory: Gn }, { provide: zn, multi: !0, useFactory: Wn }, n.map(e => e.\u0275providers)]); }
function Gn() { return S(q).routerState.root; }
function k(t, n) { return { \u0275kind: t, \u0275providers: n }; }
function Ws(t = {}) { return k(4, [{ provide: Pt, useFactory: () => new Vn(t) }]); }
function Qs() { return k(11, [{ provide: _e, useExisting: Vs }, { provide: _t, useClass: ds }, []]); }
function Wn() { let t = S(Ir); return n => { let e = t.get($n); if (n !== e.components[0])
    return; let r = t.get(q), i = t.get(Qn); t.get(Nr) === 1 && r.initialNavigation(), t.get(Zn, null, { optional: !0 })?.setUpPreloading(), t.get(Pt, null, { optional: !0 })?.init(), r.resetRootComponentType(e.componentTypes[0]), i.closed || (i.next(), i.complete(), i.unsubscribe()); }; }
var Qn = new Ye("", { factory: () => new Mr }), Nr = new Ye("", { factory: () => 1 });
function Kn() { let t = [{ provide: Es, useValue: !0 }, { provide: Nr, useValue: 0 }, qn(() => { let n = S(Ir); return n.get(ls, Promise.resolve()).then(() => new Promise(r => { let i = n.get(q), o = n.get(Qn); Tt(i, () => { r(!0); }), n.get(Nt).afterPreactivation = () => (r(!0), o.closed ? ce(void 0) : o), i.initialNavigation(); })); })]; return k(2, t); }
function Yn() { let t = [qn(() => { S(q).setUpLocationChangeListener(); }), { provide: Nr, useValue: 2 }]; return k(3, t); }
function Ks() { let t = []; return t = [], k(1, t); }
var Zn = new Ye("");
function Jn(t) { return k(0, [{ provide: Zn, useExisting: Bn }, { provide: Ke, useExisting: t }]); }
function Ys(t) { return k(5, [{ provide: ne, useValue: t }]); }
function Zs() { return k(6, [{ provide: wr, useClass: jn }]); }
function Js(t) { return k(7, [{ provide: At, useValue: t }]); }
function Xs() { return k(10, [{ provide: yr, useValue: Tn }]); }
function Xn(t = {}) { return k(8, [{ provide: Ge, useFactory: () => new hn(t, S(It, { optional: !0 })) }]); }
function ei(t) { Ms("NgRouterViewTransitions"); let n = [{ provide: vr, useValue: An }, { provide: mr, useValue: d({ skipNextTransition: !!t?.skipInitialTransition }, t) }]; return k(9, n); }
function ea() { return k(9, [{ provide: It, useValue: { setupAndRunResources: $s, createResourceOutletBindingEffects: ks } }]); }
var ti = [_t, { provide: ae, useClass: te }, q, ve, { provide: Z, useFactory: Gn }, Et], ta = (() => { class t {
    constructor() { }
    static forRoot(e, r) { return { ngModule: t, providers: [ti, [], { provide: me, multi: !0, useValue: e }, [], r?.errorHandler ? { provide: At, useValue: r.errorHandler } : [], { provide: ne, useValue: r || {} }, r?.useHash ? na() : ia(), ra(), r?.preloadingStrategy ? Jn(r.preloadingStrategy).\u0275providers : [], r?.initialNavigation ? oa(r) : [], r?.bindToComponentInputs ? Xn(typeof r.bindToComponentInputs == "object" ? r.bindToComponentInputs : {}).\u0275providers : [], r?.enableViewTransitions ? ei().\u0275providers : [], sa()] }; }
    static forChild(e) { return { ngModule: t, providers: [{ provide: me, multi: !0, useValue: e }] }; }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275mod = h.\u0275\u0275defineNgModule({ type: t });
    static \u0275inj = h.\u0275\u0275defineInjector({});
} return t; })();
function ra() { return { provide: Pt, useFactory: () => { let t = S(Ln), n = S(ne); return n.scrollOffset && t.setOffset(n.scrollOffset), new Vn(n); } }; }
function na() { return { provide: wr, useClass: jn }; }
function ia() { return { provide: wr, useClass: hs }; }
function oa(t) { return [t.initialNavigation === "disabled" ? Yn().\u0275providers : [], t.initialNavigation === "enabledBlocking" ? Kn().\u0275providers : []]; }
var Cr = new Ye("");
function sa() { return [{ provide: Cr, useFactory: Wn }, { provide: zn, multi: !0, useExisting: Cr }]; }
import { inject as Ze, Version as aa } from "@angular/core";
import "@angular/common";
import "rxjs";
import "rxjs/operators";
import "@angular/platform-browser";
function Ja(t) { return t.map(n => (...e) => Ze(n).canMatch(...e)); }
function Xa(t) { return t.map(n => (...e) => Ze(n).canActivate(...e)); }
function ec(t) { return t.map(n => (...e) => Ze(n).canActivateChild(...e)); }
function tc(t) { return t.map(n => (...e) => Ze(n).canDeactivate(...e)); }
function rc(t) { return (...n) => Ze(t).resolve(...n); }
var nc = new aa("22.1.4");
export { Z as ActivatedRoute, Ae as ActivatedRouteSnapshot, vt as ActivationEnd, gt as ActivationStart, wt as BaseRouteReuseStrategy, pt as ChildActivationEnd, ft as ChildActivationStart, ve as ChildrenOutletContexts, In as DefaultTitleStrategy, te as DefaultUrlSerializer, M as EventType, ct as GuardsCheckEnd, at as GuardsCheckStart, N as NavigationCancel, I as NavigationCancellationCode, O as NavigationEnd, Y as NavigationError, $ as NavigationSkipped, be as NavigationSkippedCode, K as NavigationStart, Bs as NoPreloading, mt as OutletContext, g as PRIMARY_OUTLET, Hs as PreloadAllModules, Ke as PreloadingStrategy, ne as ROUTER_CONFIGURATION, Cr as ROUTER_INITIALIZER, dn as ROUTER_OUTLET_DATA, me as ROUTES, Ne as RedirectCommand, lt as ResolveEnd, ut as ResolveStart, ht as RouteConfigLoadEnd, dt as RouteConfigLoadStart, _n as RouteReuseStrategy, q as Router, x as RouterEvent, Ot as RouterLink, Os as RouterLinkActive, Ot as RouterLinkWithHref, ta as RouterModule, hr as RouterOutlet, Bn as RouterPreloader, qe as RouterState, Fe as RouterStateSnapshot, ze as RoutesRecognized, Ie as Scroll, gr as TitleStrategy, Mt as UrlHandlingStrategy, oe as UrlSegment, y as UrlSegmentGroup, ae as UrlSerializer, U as UrlTree, nc as VERSION, ee as convertToParamMap, tn as createUrlTreeFromSnapshot, Br as defaultUrlMatcher, ns as destroyDetachedRouteHandle, cr as isActive, Xa as mapToCanActivate, ec as mapToCanActivateChild, tc as mapToCanDeactivate, Ja as mapToCanMatch, rc as mapToResolve, Gs as provideRouter, Xn as withComponentInputBinding, Ks as withDebugTracing, Yn as withDisabledInitialNavigation, Kn as withEnabledBlockingInitialNavigation, Xs as withExperimentalAutoCleanupInjectors, Qs as withExperimentalPlatformNavigation, Zs as withHashLocation, Ws as withInMemoryScrolling, Js as withNavigationErrorHandler, Jn as withPreloading, Ys as withRouterConfig, ei as withViewTransitions, fr as \u0275EmptyOutletComponent, ti as \u0275ROUTER_PROVIDERS, Tt as \u0275afterNextNavigation, En as \u0275loadChildren, Ls as \u0275nonBlocking, ea as \u0275withRouterResources };
/*! Bundled license information:

@angular/router/fesm2022/_router-chunk.mjs:
@angular/router/fesm2022/_router_module-chunk.mjs:
@angular/router/fesm2022/router.mjs:
  (**
   * @license Angular v22.1.4
   * (c) 2010-2026 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
