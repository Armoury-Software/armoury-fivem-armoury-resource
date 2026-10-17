import { a as he, b as T, f as V } from "@nf-internal/chunk-32CBFWFR";
import { F as on, G as sn, H as ge, I as pe, J as an, K as un, a as I, b as m, c as nn, s as fe, w as tn, y as rn } from "@nf-internal/chunk-YIWJLNUQ";
import { a as Z, b as W, d as le } from "@nf-internal/chunk-PZNONLPT";
import { BehaviorSubject as vt, Observable as yt, Subject as Dt, Subscription as It } from "rxjs";
var ve = class {
    full;
    major;
    minor;
    patch;
    constructor(n) { this.full = n; let t = n.split("."); this.major = t[0], this.minor = t[1], this.patch = t.slice(2).join("."); }
}, cn = new ve("22.1.4"), Et = (() => { let e = cn.full; return `https://${e.includes("-next") || e.includes("-rc") || e === "0.0.0-PLACEHOLDER" ? "next" : `v${cn.major}`}.angular.dev`; })(), po = `${Et}/errors`, mo = "https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss", h = class extends Error {
    code;
    constructor(n, t) { super(Le(n, t)), this.code = n; }
};
function Tt(e) { return `NG0${Math.abs(e)}`; }
function Le(e, n) { return `${Tt(e)}${n ? ": " + n : ""}`; }
function l(e) { for (let n in e)
    if (e[n] === l)
        return n; throw Error(""); }
function vo(e, n) { for (let t in n)
    Object.hasOwn(n, t) && !Object.hasOwn(e, t) && (e[t] = n[t]); }
function wt(e) {
    if (typeof e == "string")
        return e;
    if (Array.isArray(e))
        return `[${e.map(wt).join(", ")}]`;
    if (e == null)
        return "" + e;
    let n = e.overriddenName || e.name;
    if (n)
        return `${n}`;
    let t = e.toString();
    if (t == null)
        return "" + t;
    let r = t.indexOf(`
`);
    return r >= 0 ? t.slice(0, r) : t;
}
function yo(e, n) { return e ? n ? `${e} ${n}` : e : n || ""; }
function Do(e, n = 100) { if (!e || n < 1 || e.length <= n)
    return e; if (n == 1)
    return e.substring(0, 1) + "..."; let t = Math.round(n / 2); return e.substring(0, t) + "..." + e.substring(e.length - t); }
var Nt = l({ __forward_ref__: l });
function Nn(e) { return e.__forward_ref__ = Nn, e; }
function E(e) { return Mt(e) ? e() : e; }
function Mt(e) { return typeof e == "function" && Object.hasOwn(e, Nt) && e.__forward_ref__ === Nn; }
function bt(e, n, t) { e != n && U(t, e, n, "=="); }
function Mn(e, n) { e == null && U(n, e, null, "!="); }
function U(e, n, t, r) { throw new Error(`ASSERTION ERROR: ${e}` + (r == null ? "" : ` [Expected=> ${t} ${r} ${n} <=Actual]`)); }
function k(e) { return { token: e.token, providedIn: e.providedIn || null, factory: e.factory, value: void 0 }; }
function Io(e) { return { providers: e.providers || [], imports: e.imports || [] }; }
function oe(e) { return _t(e, bn); }
function Eo(e) { return oe(e) !== null; }
function _t(e, n) { return Object.hasOwn(e, n) && e[n] || null; }
function Ct(e) { let n = e?.[bn] ?? null; return n || null; }
function dn(e) { return e && Object.hasOwn(e, ln) ? e[ln] : null; }
var bn = l({ \u0275prov: l }), ln = l({ \u0275inj: l }), g = class {
    _desc;
    ngMetadataName = "InjectionToken";
    \u0275prov;
    constructor(n, t) { this._desc = n, this.\u0275prov = void 0, typeof t == "number" ? this.__NG_ELEMENT_ID__ = t : t !== void 0 && (this.\u0275prov = k({ token: this, providedIn: t.providedIn || "root", factory: t.factory })); }
    get multi() { return this; }
    toString() { return `InjectionToken ${this._desc}`; }
}, fn;
function To(e) { U("setInjectorProfilerContext should never be called in production mode"); let n = fn; return fn = e, n; }
function _n(e) { return e && !!e.\u0275providers; }
var xt = l({ \u0275cmp: l }), Rt = l({ \u0275dir: l }), St = l({ \u0275pipe: l }), Ot = l({ \u0275mod: l }), hn = l({ \u0275fac: l }), wo = l({ __NG_ELEMENT_ID__: l }), gn = l({ __NG_ENV_ID__: l });
function Ft(e) { return ie(e, "@NgModule"), e[Ot] || null; }
function No(e) { let n = Ft(e); if (!n)
    throw new h(915, !1); return n; }
function Cn(e) { return ie(e, "@Component"), e[xt] || null; }
function jt(e) { return ie(e, "@Directive"), e[Rt] || null; }
function kt(e) { return ie(e, "@Pipe"), e[St] || null; }
function ie(e, n) { if (e == null)
    throw new h(-919, !1); }
function Mo(e) { let n = Cn(e) || jt(e) || kt(e); return n !== null && n.standalone; }
function Lt(e) { return typeof e == "string" ? e : e == null ? "" : String(e); }
function bo(e) { return typeof e == "function" ? e.name || e.toString() : typeof e == "object" && e != null && typeof e.type == "function" ? e.type.name || e.type.toString() : Lt(e); }
var xn = l({ ngErrorCode: l }), Pt = l({ ngErrorMessage: l }), At = l({ ngTokenPath: l });
function Vt(e, n) { return Rn("", -200, n); }
function $t(e, n) { throw new h(-201, !1); }
function Rn(e, n, t) { let r = new h(n, e); return r[xn] = n, r[Pt] = e, t && (r[At] = t), r; }
function Ht(e) { return e[xn]; }
var ye;
function Sn() { return ye; }
function M(e) { let n = ye; return ye = e, n; }
function qt(e, n, t) { let r = oe(e); if (r && r.providedIn == "root")
    return r.value === void 0 ? r.value = r.factory() : r.value; if (t & 8)
    return null; if (n !== void 0)
    return n; $t(e, ""); }
var _o = globalThis;
var Gt = {}, C = Gt, De = "__NG_DI_FLAG__", Ie = class {
    injector;
    constructor(n) { this.injector = n; }
    retrieve(n, t) { let r = J(t) || 0; try {
        return this.injector.get(n, r & 8 ? null : C, r);
    }
    catch (o) {
        if (V(o))
            return o;
        throw o;
    } }
};
function Ut(e, n = 0) { let t = he(); if (t === void 0)
    throw new h(-203, !1); if (t === null)
    return qt(e, void 0, n); {
    let r = Bt(n), o = t.retrieve(e, r);
    if (V(o)) {
        if (r.optional)
            return null;
        throw o;
    }
    return o;
} }
function F(e, n = 0) { return (Sn() || Ut)(E(e), n); }
function Co(e) { throw new h(202, !1); }
function p(e, n) { return F(e, J(n)); }
function J(e) { return typeof e > "u" || typeof e == "number" ? e : 0 | (e.optional && 8) | (e.host && 1) | (e.self && 2) | (e.skipSelf && 4); }
function Bt(e) { return { optional: !!(e & 8), host: !!(e & 1), self: !!(e & 2), skipSelf: !!(e & 4) }; }
function Ee(e) { let n = []; for (let t = 0; t < e.length; t++) {
    let r = E(e[t]);
    if (Array.isArray(r)) {
        if (r.length === 0)
            throw new h(900, !1);
        let o, i = 0;
        for (let s = 0; s < r.length; s++) {
            let c = r[s], u = Zt(c);
            typeof u == "number" ? u === -1 ? o = c.token : i |= u : o = c;
        }
        n.push(F(o, i));
    }
    else
        n.push(F(r));
} return n; }
function xo(e, n) { return e[De] = n, e.prototype[De] = n, e; }
function Zt(e) { return e[De]; }
function K(e, n) { let t = Object.hasOwn(e, hn); return t ? e[hn] : null; }
function Ro(e, n, t) { if (e.length !== n.length)
    return !1; for (let r = 0; r < e.length; r++) {
    let o = e[r], i = n[r];
    if (t && (o = t(o), i = t(i)), i !== o)
        return !1;
} return !0; }
function So(e) { return e.flat(Number.POSITIVE_INFINITY); }
function Pe(e, n) { e.forEach(t => Array.isArray(t) ? Pe(t, n) : n(t)); }
function Oo(e, n, t) { n >= e.length ? e.push(t) : e.splice(n, 0, t); }
function Fo(e, n) { return n >= e.length - 1 ? e.pop() : e.splice(n, 1)[0]; }
function jo(e, n) { let t = []; for (let r = 0; r < e; r++)
    t.push(n); return t; }
function ko(e, n, t) { let r = e.length - t; for (; n < r;)
    e[n] = e[n + t], n++; for (; t--;)
    e.pop(); }
function Wt(e, n, t, r) { let o = e.length; if (o == n)
    e.push(t, r);
else if (o === 1)
    e.push(r, e[0]), e[0] = t;
else {
    for (o--, e.push(e[o - 1], e[o]); o > n;) {
        let i = o - 2;
        e[o] = e[i], o--;
    }
    e[n] = t, e[n + 1] = r;
} }
function Lo(e, n, t) { let r = On(e, n); return r >= 0 ? e[r | 1] = t : (r = ~r, Wt(e, r, n, t)), r; }
function Po(e, n) { let t = On(e, n); if (t >= 0)
    return e[t | 1]; }
function On(e, n) { return Yt(e, n, 1); }
function Yt(e, n, t) { let r = 0, o = e.length >> t; for (; o !== r;) {
    let i = r + (o - r >> 1), s = e[i << t];
    if (n === s)
        return i << t;
    s > n ? o = i : r = i + 1;
} return ~(o << t); }
var Ao = {}, Q = [], se = new g(""), Fn = new g("", -1), jn = new g(""), X = class {
    get(n, t = C) { if (t === C) {
        let o = Rn("", -201);
        throw o.name = "\u0275NotFound", o;
    } return t; }
};
function kn(e) { return { \u0275providers: e }; }
function Jt(e) { return kn([{ provide: se, multi: !0, useValue: e }]); }
function Kt(...e) { return { \u0275providers: Qt(!0, e), \u0275fromNgModule: !0 }; }
function Qt(e, ...n) { let t = [], r = new Set, o, i = s => { t.push(s); }; return Pe(n, s => { let c = s; Te(c, i, [], r) && (o ||= [], o.push(c)); }), o !== void 0 && Ln(o, i), t; }
function Ln(e, n) { for (let t = 0; t < e.length; t++) {
    let { ngModule: r, providers: o } = e[t];
    Ae(o, i => { n(i, r); });
} }
function Te(e, n, t, r) { if (e = E(e), !e)
    return !1; let o = null, i = dn(e), s = !i && Cn(e); if (!i && !s) {
    let u = e.ngModule;
    if (i = dn(u), i)
        o = u;
    else
        return !1;
}
else {
    if (s && !s.standalone)
        return !1;
    o = e;
} let c = r.has(o); if (s) {
    if (c)
        return !1;
    if (r.add(o), s.dependencies) {
        let u = typeof s.dependencies == "function" ? s.dependencies() : s.dependencies;
        for (let d of u)
            Te(d, n, t, r);
    }
}
else if (i) {
    if (i.imports != null && !c) {
        r.add(o);
        let d;
        Pe(i.imports, f => { Te(f, n, t, r) && (d ||= [], d.push(f)); }), d !== void 0 && Ln(d, n);
    }
    if (!c) {
        let d = K(o) || (() => new o);
        n({ provide: o, useFactory: d, deps: Q }, o), n({ provide: jn, useValue: o, multi: !0 }, o), n({ provide: se, useValue: () => F(o), multi: !0 }, o);
    }
    let u = i.providers;
    if (u != null && !c) {
        let d = e;
        Ae(u, f => { n(f, d); });
    }
}
else
    return !1; return o !== e && e.providers !== void 0; }
function Ae(e, n) { for (let t of e)
    _n(t) && (t = t.\u0275providers), Array.isArray(t) ? Ae(t, n) : n(t); }
var Xt = l({ provide: String, useValue: l });
function Pn(e) { return e !== null && typeof e == "object" && Xt in e; }
function zt(e) { return !!(e && e.useExisting); }
function er(e) { return !!(e && e.useFactory); }
function we(e) { return typeof e == "function"; }
function Vo(e) { return !!e.useClass; }
var nr = new g(""), Y = {}, pn = {}, me;
function An() { return me === void 0 && (me = new X), me; }
var q = class {
}, z = class extends q {
    parent;
    source;
    scopes;
    records = new Map;
    _ngOnDestroyHooks = new Set;
    _onDestroyHooks = [];
    get destroyed() { return this._destroyed; }
    _destroyed = !1;
    injectorDefTypes;
    constructor(n, t, r, o) { super(), this.parent = t, this.source = r, this.scopes = o, Me(n, s => this.processProvider(s)), this.records.set(Fn, S(void 0, this)), o.has("environment") && this.records.set(q, S(void 0, this)); let i = this.records.get(nr); i != null && typeof i.value == "string" && this.scopes.add(i.value), this.injectorDefTypes = new Set(this.get(jn, Q, { self: !0 })); }
    retrieve(n, t) { let r = J(t) || 0; try {
        return this.get(n, C, r);
    }
    catch (o) {
        if (V(o))
            return o;
        throw o;
    } }
    destroy() { $(this), this._destroyed = !0; let n = m(null); try {
        for (let r of this._ngOnDestroyHooks)
            r.ngOnDestroy();
        let t = this._onDestroyHooks;
        this._onDestroyHooks = [];
        for (let r of t)
            r();
    }
    finally {
        this.records.clear(), this._ngOnDestroyHooks.clear(), this.injectorDefTypes.clear(), m(n);
    } }
    onDestroy(n) { return $(this), this._onDestroyHooks.push(n), () => this.removeOnDestroy(n); }
    runInContext(n) { $(this); let t = T(this), r = M(void 0), o; try {
        return n();
    }
    finally {
        T(t), M(r);
    } }
    get(n, t = C, r) { if ($(this), Object.hasOwn(n, gn))
        return n[gn](this); let o = J(r), i, s = T(this), c = M(void 0); try {
        if (!(o & 4)) {
            let d = this.records.get(n);
            if (d === void 0) {
                let f = ar(n) && oe(n);
                f && this.injectableDefInScope(f) ? d = S(Ne(n), Y) : d = null, this.records.set(n, d);
            }
            if (d != null)
                return this.hydrate(n, d, o);
        }
        let u = o & 2 ? An() : this.parent;
        return t = o & 8 && t === C ? null : t, u.get(n, t);
    }
    catch (u) {
        let d = Ht(u);
        throw d === -200 || d === -201 ? new h(d, null) : u;
    }
    finally {
        M(c), T(s);
    } }
    resolveInjectorInitializers() { let n = m(null), t = T(this), r = M(void 0), o; try {
        let i = this.get(se, Q, { self: !0 });
        for (let s of i)
            s();
    }
    finally {
        T(t), M(r), m(n);
    } }
    toString() { return "R3Injector[...]"; }
    processProvider(n) { n = E(n); let t = we(n) ? n : E(n && n.provide), r = rr(n); if (!we(n) && n.multi === !0) {
        let o = this.records.get(t);
        o || (o = S(void 0, Y, !0), o.factory = () => Ee(o.multi), this.records.set(t, o)), t = n, o.multi.push(n);
    } this.records.set(t, r); }
    hydrate(n, t, r) { let o = m(null); try {
        if (t.value === pn)
            throw Vt("");
        return t.value === Y && (t.value = pn, t.value = t.factory(void 0, r)), typeof t.value == "object" && t.value && sr(t.value) && this._ngOnDestroyHooks.add(t.value), t.value;
    }
    finally {
        m(o);
    } }
    injectableDefInScope(n) { if (!n.providedIn)
        return !1; let t = E(n.providedIn); return typeof t == "string" ? t === "any" || this.scopes.has(t) : this.injectorDefTypes.has(t); }
    removeOnDestroy(n) { let t = this._onDestroyHooks.indexOf(n); t !== -1 && this._onDestroyHooks.splice(t, 1); }
};
function Ne(e) { let n = oe(e), t = n !== null ? n.factory : K(e); if (t !== null)
    return t; if (e instanceof g)
    throw new h(-204, !1); if (e instanceof Function)
    return tr(e); throw new h(-204, !1); }
function tr(e) { if (e.length > 0)
    throw new h(-204, !1); let t = Ct(e); return t !== null ? () => t.factory(e) : () => new e; }
function rr(e) { if (Pn(e))
    return S(void 0, e.useValue); {
    let n = or(e);
    return S(n, Y);
} }
function or(e, n, t) { let r; if (we(e)) {
    let o = E(e);
    return K(o) || Ne(o);
}
else if (Pn(e))
    r = () => E(e.useValue);
else if (er(e))
    r = () => e.useFactory(...Ee(e.deps || []));
else if (zt(e))
    r = (o, i) => F(E(e.useExisting), i !== void 0 && i & 8 ? 8 : void 0);
else {
    let o = E(e && (e.useClass || e.provide));
    if (ir(e))
        r = () => new o(...Ee(e.deps));
    else
        return K(o) || Ne(o);
} return r; }
function $(e) { if (e.destroyed)
    throw new h(-205, !1); }
function S(e, n, t = !1) { return { factory: e, value: n, multi: t ? [] : void 0 }; }
function ir(e) { return !!e.deps; }
function sr(e) { return e !== null && typeof e == "object" && typeof e.ngOnDestroy == "function"; }
function ar(e) { return typeof e == "function" || typeof e == "object" && e.ngMetadataName === "InjectionToken"; }
function Me(e, n) { for (let t of e)
    Array.isArray(t) ? Me(t, n) : t && _n(t) ? Me(t.\u0275providers, n) : n(t); }
function $o(e, n) { let t; e instanceof z ? ($(e), t = e) : t = new Ie(e); let r, o = T(t), i = M(void 0); try {
    return n();
}
finally {
    T(o), M(i);
} }
function Vn() { return Sn() !== void 0 || he() != null; }
function Ho(e) { if (!Vn())
    throw new h(-203, !1); }
var Ve = 0, $e = 1, v = 2, be = 3, qo = 4, ur = 5, Go = 6, cr = 7, $n = 8, Uo = 9, Hn = 10, Bo = 11, Zo = 12, Wo = 13, qn = 14, Yo = 15, Jo = 16, dr = 17, Ko = 18, Qo = 19, Xo = 20, O = 21, zo = 22, _e = 23, lr = 24, ei = 25, ni = 26, fr = 27, He = 1, ti = 6, ri = 7, oi = 8, ii = 9, si = 10;
function Gn(e) { return Array.isArray(e) && typeof e[He] == "object"; }
function Un(e) { return Array.isArray(e) && e[He] === !0; }
function ai(e) { return (e.flags & 4) !== 0; }
function ui(e) { return e.componentOffset > -1; }
function ci(e) { return (e.flags & 1) === 1; }
function di(e) { return !!e.template; }
function li(e) { return (e[v] & 512) !== 0; }
function fi(e) { return (e.type & 16) === 16; }
function hi(e) { return (e[v] & 32) === 32; }
function Bn(e) { return (e[v] & 256) === 256; }
function gi(e, n) { hr(e, n[$e]); }
function hr(e, n) { gr(e); let t = n.data; for (let r = fr; r < t.length; r++)
    if (t[r] === e)
        return; U("This TNode does not belong to this TView."); }
function gr(e) { Mn(e, "TNode must be defined"), e && typeof e == "object" && Object.hasOwn(e, "directiveStylingLast") || U("Not of type TNode, got: " + e); }
function pi(e) { Mn(e, "LView must be defined"), bt(Gn(e), !0, "Expecting LView"); }
var D = (function (e) { return e[e.NONE = 0] = "NONE", e[e.HTML = 1] = "HTML", e[e.STYLE = 2] = "STYLE", e[e.SCRIPT = 3] = "SCRIPT", e[e.URL = 4] = "URL", e[e.RESOURCE_URL = 5] = "RESOURCE_URL", e[e.ATTRIBUTE_NO_BINDING = 6] = "ATTRIBUTE_NO_BINDING", e; })(D || {}), H, Ce = "svg", Zn = "math", Wn = "", mn = "*", xe = () => Object.create(null);
function pr() { return H || (H = xe(), N(D.HTML, void 0, [["iframe", ["srcdoc"]], ["*", ["innerHTML", "outerHTML"]]]), N(D.STYLE, void 0, [["*", ["style"]]]), N(D.URL, void 0, [["*", ["formAction"]], ["area", ["href"]], ["a", ["href", "xlink:href"]], ["form", ["action"]], ["img", ["src"]], ["video", ["src"]]]), N(D.URL, Zn, [["*", ["href", "xlink:href"]]]), N(D.RESOURCE_URL, void 0, [["base", ["href"]], ["embed", ["src"]], ["frame", ["src"]], ["iframe", ["src"]], ["link", ["href"]], ["object", ["codebase", "data"]]]), N(D.URL, Ce, [["a", ["href", "xlink:href"]]]), N(D.ATTRIBUTE_NO_BINDING, Ce, [["animate", ["attributeName", "values", "to", "from"]], ["set", ["to", "attributeName"]], ["animateMotion", ["attributeName"]], ["animateTransform", ["attributeName"]]]), N(D.ATTRIBUTE_NO_BINDING, void 0, [["unknown", ["attributeName", "values", "to", "from", "sandbox", "allow", "allowFullscreen", "referrerPolicy", "csp", "fetchPriority", "credentialless"]], ["iframe", ["sandbox", "allow", "allowFullscreen", "referrerPolicy", "csp", "fetchPriority", "credentialless"]]]), H); }
function N(e, n, t) { let r = n ?? Wn; for (let [o, i] of t) {
    let s = o.toLowerCase();
    for (let c of i) {
        let u = c.toLowerCase(), d = H[u] ??= xe(), f = d[r] ??= xe();
        f[s] = e;
    }
} }
function mi(e, n, t) { let o = pr()[n.toLowerCase()]; if (!o)
    return D.NONE; let i = e.toLowerCase(), s; if (t) {
    let c = o[t];
    c && (s = c[i] ?? c[mn]);
} if (s === void 0) {
    let c = o[Wn];
    c && (s = c[i] ?? c[mn]);
} return s ?? D.NONE; }
function qe(e) { for (; Array.isArray(e);)
    e = e[Ve]; return e; }
function vi(e) { for (; Array.isArray(e);) {
    if (typeof e[He] == "object")
        return e;
    e = e[Ve];
} return null; }
function yi(e, n) { return qe(n[e]); }
function Di(e, n) { return qe(n[e.index]); }
function Ii(e, n) { let t = e === null ? -1 : e.index; return t !== -1 ? qe(n[t]) : null; }
function mr(e, n) { return e.data[n]; }
function Ei(e, n) { return e[n]; }
function Ti(e, n, t, r) { t >= e.data.length && (e.data[t] = null, e.blueprint[t] = null), n[t] = r; }
function wi(e, n) { let t = n[e]; return Gn(t) ? t : t[Ve]; }
function Ni(e) { return (e[v] & 4) === 4; }
function Yn(e) { return (e[v] & 128) === 128; }
function Mi(e) { return Un(e[be]); }
function bi(e, n) { return n == null ? null : e[n]; }
function _i(e) { e[dr] = 0; }
function Ci(e) { e[v] & 1024 || (e[v] |= 1024, Yn(e) && Ge(e)); }
function vr(e, n) { for (; e > 0;)
    n = n[qn], e--; return n; }
function yr(e) { return !!(e[v] & 9216 || e[lr]?.dirty); }
function xi(e) { e[Hn].changeDetectionScheduler?.notify(8), e[v] & 64 && (e[v] |= 1024), yr(e) && Ge(e); }
function Ge(e) { e[Hn].changeDetectionScheduler?.notify(0); let n = vn(e); for (; n !== null && !(n[v] & 8192 || (n[v] |= 8192, !Yn(n)));)
    n = vn(n); }
function Dr(e, n) { if (Bn(e))
    throw new h(911, !1); e[O] === null && (e[O] = []), e[O].push(n); }
function Ir(e, n) { if (e[O] === null)
    return; let t = e[O].indexOf(n); t !== -1 && e[O].splice(t, 1); }
function vn(e) { let n = e[be]; return Un(n) ? n[be] : n; }
function Er(e) { return e[cr] ??= []; }
function Tr(e) { return e.cleanup ??= []; }
function Ri(e, n, t, r) { let o = Er(n); o.push(t), e.firstCreatePass && Tr(e).push(r, o.length - 1); }
var a = { lFrame: Qn(null), bindingsEnabled: !0, skipHydrationRootTNode: null };
var Re = !1;
function Si() { return a.lFrame.elementDepthCount; }
function Oi() { a.lFrame.elementDepthCount++; }
function Fi() { a.lFrame.elementDepthCount--; }
function ji() { return a.bindingsEnabled; }
function ki() { return a.skipHydrationRootTNode !== null; }
function Li(e) { return a.skipHydrationRootTNode === e; }
function Pi() { a.bindingsEnabled = !0; }
function Ai(e) { a.skipHydrationRootTNode = e; }
function Vi() { a.bindingsEnabled = !1; }
function $i() { a.skipHydrationRootTNode = null; }
function Jn() { return a.lFrame.lView; }
function Hi() { return a.lFrame.tView; }
function qi(e) { return a.lFrame.contextLView = e, e[$n]; }
function Gi(e) { return a.lFrame.contextLView = null, e; }
function wr() { let e = Nr(); for (; e !== null && e.type === 64;)
    e = e.parent; return e; }
function Nr() { return a.lFrame.currentTNode; }
function Ui() { let e = a.lFrame, n = e.currentTNode; return e.isParent ? n : n.parent; }
function Bi(e, n) { let t = a.lFrame; t.currentTNode = e, t.isParent = n; }
function Zi() { return a.lFrame.isParent; }
function Wi() { a.lFrame.isParent = !1; }
function Yi() { return a.lFrame.contextLView; }
function Ji() { return Re; }
function yn(e) { let n = Re; return Re = e, n; }
function Ki() { let e = a.lFrame, n = e.bindingRootIndex; return n === -1 && (n = e.bindingRootIndex = e.tView.bindingStartIndex), n; }
function Qi() { return a.lFrame.bindingIndex; }
function Xi(e) { return a.lFrame.bindingIndex = e; }
function zi() { return a.lFrame.bindingIndex++; }
function es(e) { let n = a.lFrame, t = n.bindingIndex; return n.bindingIndex = n.bindingIndex + e, t; }
function ns() { return a.lFrame.inI18n; }
function ts(e) { a.lFrame.inI18n = e; }
function rs(e, n) { let t = a.lFrame; t.bindingIndex = t.bindingRootIndex = e, Mr(n); }
function os() { return a.lFrame.currentDirectiveIndex; }
function Mr(e) { a.lFrame.currentDirectiveIndex = e; }
function is(e) { let n = a.lFrame.currentDirectiveIndex; return n === -1 ? null : e[n]; }
function ss() { return a.lFrame.currentQueryIndex; }
function as(e) { a.lFrame.currentQueryIndex = e; }
function br(e) { let n = e[$e]; return n.type === 2 ? n.declTNode : n.type === 1 ? e[ur] : null; }
function us(e, n, t) { if (t & 4) {
    let o = n, i = e;
    for (; o = o.parent, o === null && !(t & 1);)
        if (o = br(i), o === null || (i = i[qn], o.type & 10))
            break;
    if (o === null)
        return !1;
    n = o, e = i;
} let r = a.lFrame = Kn(); return r.currentTNode = n, r.lView = e, !0; }
function cs(e) { let n = Kn(), t = e[$e]; a.lFrame = n, n.currentTNode = t.firstChild, n.lView = e, n.tView = t, n.contextLView = e, n.bindingIndex = t.bindingStartIndex, n.inI18n = !1; }
function Kn() { let e = a.lFrame, n = e === null ? null : e.child; return n === null ? Qn(e) : n; }
function Qn(e) { let n = { currentTNode: null, isParent: !0, lView: null, tView: null, selectedIndex: -1, contextLView: null, elementDepthCount: 0, currentNamespace: null, currentDirectiveIndex: -1, bindingRootIndex: -1, bindingIndex: -1, currentQueryIndex: 0, parent: e, child: null, inI18n: !1 }; return e !== null && (e.child = n), n; }
function Xn() { let e = a.lFrame; return a.lFrame = e.parent, e.currentTNode = null, e.lView = null, e; }
var ds = Xn;
function ls() { let e = Xn(); e.isParent = !0, e.tView = null, e.selectedIndex = -1, e.contextLView = null, e.elementDepthCount = 0, e.currentDirectiveIndex = -1, e.currentNamespace = null, e.bindingRootIndex = -1, e.bindingIndex = -1, e.currentQueryIndex = 0; }
function fs(e) { return (a.lFrame.contextLView = vr(e, a.lFrame.contextLView))[$n]; }
function hs() { return a.lFrame.selectedIndex; }
function gs(e) { a.lFrame.selectedIndex = e; }
function ps() { let e = a.lFrame; return mr(e.tView, e.selectedIndex); }
function ms() { a.lFrame.currentNamespace = Ce; }
function vs() { a.lFrame.currentNamespace = Zn; }
function ys() { _r(); }
function _r() { a.lFrame.currentNamespace = null; }
function Ds() { return a.lFrame.currentNamespace; }
var zn = !0;
function Is() { return zn; }
function Es(e) { zn = e; }
function Ts() { let e, n; return { promise: new Promise((r, o) => { e = r, n = o; }), resolve: e, reject: n }; }
function Dn(e, n = null, t = null, r) { let o = Cr(e, n, t, r); return o.resolveInjectorInitializers(), o; }
function Cr(e, n = null, t = null, r, o = new Set) { let i = [t || Q, Kt(e)], s; return new z(i, n || An(), s || null, o); }
var xr = new Set;
function ws() { return xr; }
var G = class e {
    static THROW_IF_NOT_FOUND = C;
    static NULL = new X;
    static create(n, t) { if (Array.isArray(n))
        return Dn({ name: "" }, t, n, ""); {
        let r = n.name ?? "";
        return Dn({ name: r }, n.parent, n.providers, r);
    } }
    static \u0275prov = k({ token: e, providedIn: "any", factory: () => F(Fn) });
    static __NG_ELEMENT_ID__ = -1;
}, Ue = new g(""), w = class {
    static __NG_ELEMENT_ID__ = Rr;
    static __NG_ENV_ID__ = n => n;
}, ee = class extends w {
    _lView;
    constructor(n) { super(), this._lView = n; }
    get destroyed() { return Bn(this._lView); }
    onDestroy(n) { let t = this._lView; return Dr(t, n), () => Ir(t, n); }
};
function Rr() { return new ee(Jn()); }
var Sr = !1, Or = new g(""), et = (() => { class e {
    taskId = 0;
    pendingTasks = new Set;
    destroyed = !1;
    pendingTask = new vt(!1);
    debugTaskTracker = p(Or, { optional: !0 });
    get hasPendingTasks() { return this.destroyed ? !1 : this.pendingTask.value; }
    get hasPendingTasksObservable() { return this.destroyed ? new yt(t => { t.next(!1), t.complete(); }) : this.pendingTask; }
    add() { !this.hasPendingTasks && !this.destroyed && this.pendingTask.next(!0); let t = this.taskId++; return this.pendingTasks.add(t), this.debugTaskTracker?.add(t), t; }
    has(t) { return this.pendingTasks.has(t); }
    remove(t) { this.pendingTasks.delete(t), this.debugTaskTracker?.remove(t), this.pendingTasks.size === 0 && this.hasPendingTasks && this.pendingTask.next(!1); }
    ngOnDestroy() { this.pendingTasks.clear(), this.hasPendingTasks && this.pendingTask.next(!1), this.destroyed = !0, this.pendingTask.unsubscribe(); }
    static \u0275prov = k({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), Se = class extends Dt {
    __isAsync;
    destroyRef = void 0;
    pendingTasks = void 0;
    constructor(n = !1) { super(), this.__isAsync = n, Vn() && (this.destroyRef = p(w, { optional: !0 }) ?? void 0, this.pendingTasks = p(et, { optional: !0 }) ?? void 0); }
    emit(n) { let t = m(null); try {
        super.next(n);
    }
    finally {
        m(t);
    } }
    subscribe(n, t, r) { let o = n, i = t || (() => null), s = r; if (n && typeof n == "object") {
        let u = n;
        o = u.next?.bind(u), i = u.error?.bind(u), s = u.complete?.bind(u);
    } this.__isAsync && (i = this.wrapInTimeout(i), o && (o = this.wrapInTimeout(o)), s && (s = this.wrapInTimeout(s))); let c = super.subscribe({ next: o, error: i, complete: s }); return n instanceof It && n.add(c), c; }
    wrapInTimeout(n) { return t => { let r = this.pendingTasks?.add(); setTimeout(() => { try {
        n(t);
    }
    finally {
        r !== void 0 && this.pendingTasks?.remove(r);
    } }); }; }
}, b = Se;
function ne(...e) { }
function Fr(e) { let n, t; function r() { e = ne; try {
    t !== void 0 && typeof cancelAnimationFrame == "function" && cancelAnimationFrame(t), n !== void 0 && clearTimeout(n);
}
catch { } } return n = setTimeout(() => { e(), r(); }), typeof requestAnimationFrame == "function" && (t = requestAnimationFrame(() => { e(), r(); })), () => r(); }
function Ns(e) { return queueMicrotask(() => e()), () => { e = ne; }; }
var Be = "isAngularZone", In = Be + "_ID", jr = 0, Oe = class e {
    hasPendingMacrotasks = !1;
    hasPendingMicrotasks = !1;
    isStable = !0;
    onUnstable = new b(!1);
    onMicrotaskEmpty = new b(!1);
    onStable = new b(!1);
    onError = new b(!1);
    constructor(n) { let { enableLongStackTrace: t = !1, shouldCoalesceEventChangeDetection: r = !1, shouldCoalesceRunChangeDetection: o = !1, scheduleInRootZone: i = Sr } = n; if (typeof Zone > "u")
        throw new h(908, !1); Zone.assertZonePatched(); let s = this; s._nesting = 0, s._outer = s._inner = Zone.current, Zone.TaskTrackingZoneSpec && (s._inner = s._inner.fork(new Zone.TaskTrackingZoneSpec)), t && Zone.longStackTraceZoneSpec && (s._inner = s._inner.fork(Zone.longStackTraceZoneSpec)), s.shouldCoalesceEventChangeDetection = !o && r, s.shouldCoalesceRunChangeDetection = o, s.callbackScheduled = !1, s.scheduleInRootZone = i, Pr(s); }
    static isInAngularZone() { return typeof Zone < "u" && Zone.current.get(Be) === !0; }
    static assertInAngularZone() { if (!e.isInAngularZone())
        throw new h(909, !1); }
    static assertNotInAngularZone() { if (e.isInAngularZone())
        throw new h(909, !1); }
    run(n, t, r) { return this._inner.run(n, t, r); }
    runTask(n, t, r, o) { let i = this._inner, s = i.scheduleEventTask("NgZoneEvent: " + o, n, kr, ne, ne); try {
        return i.runTask(s, t, r);
    }
    finally {
        i.cancelTask(s);
    } }
    runGuarded(n, t, r) { return this._inner.runGuarded(n, t, r); }
    runOutsideAngular(n) { return this._outer.run(n); }
}, kr = {};
function Ze(e) { if (e._nesting == 0 && !e.hasPendingMicrotasks && !e.isStable)
    try {
        e._nesting++, e.onMicrotaskEmpty.emit(null);
    }
    finally {
        if (e._nesting--, !e.hasPendingMicrotasks)
            try {
                e.runOutsideAngular(() => e.onStable.emit(null));
            }
            finally {
                e.isStable = !0;
            }
    } }
function Lr(e) { if (e.isCheckStableRunning || e.callbackScheduled)
    return; e.callbackScheduled = !0; function n() { Fr(() => { e.callbackScheduled = !1, Fe(e), e.isCheckStableRunning = !0, Ze(e), e.isCheckStableRunning = !1; }); } e.scheduleInRootZone ? Zone.root.run(() => { n(); }) : e._outer.run(() => { n(); }), Fe(e); }
function Pr(e) { let n = () => { Lr(e); }, t = jr++; e._inner = e._inner.fork({ name: "angular", properties: { [Be]: !0, [In]: t, [In + t]: !0 }, onInvokeTask: (r, o, i, s, c, u) => { if (Ar(u))
        return r.invokeTask(i, s, c, u); try {
        return En(e), r.invokeTask(i, s, c, u);
    }
    finally {
        (e.shouldCoalesceEventChangeDetection && s.type === "eventTask" || e.shouldCoalesceRunChangeDetection) && n(), Tn(e);
    } }, onInvoke: (r, o, i, s, c, u, d) => { try {
        return En(e), r.invoke(i, s, c, u, d);
    }
    finally {
        e.shouldCoalesceRunChangeDetection && !e.callbackScheduled && !Vr(u) && n(), Tn(e);
    } }, onHasTask: (r, o, i, s) => { r.hasTask(i, s), o === i && (s.change == "microTask" ? (e._hasPendingMicrotasks = s.microTask, Fe(e), Ze(e)) : s.change == "macroTask" && (e.hasPendingMacrotasks = s.macroTask)); }, onHandleError: (r, o, i, s) => (r.handleError(i, s), e.runOutsideAngular(() => e.onError.emit(s)), !1) }); }
function Fe(e) { e._hasPendingMicrotasks || (e.shouldCoalesceEventChangeDetection || e.shouldCoalesceRunChangeDetection) && e.callbackScheduled === !0 ? e.hasPendingMicrotasks = !0 : e.hasPendingMicrotasks = !1; }
function En(e) { e._nesting++, e.isStable && (e.isStable = !1, e.onUnstable.emit(null)); }
function Tn(e) { e._nesting--, Ze(e); }
var wn = class {
    hasPendingMicrotasks = !1;
    hasPendingMacrotasks = !1;
    isStable = !0;
    onUnstable = new b;
    onMicrotaskEmpty = new b;
    onStable = new b;
    onError = new b;
    run(n, t, r) { return n.apply(t, r); }
    runGuarded(n, t, r) { return n.apply(t, r); }
    runOutsideAngular(n) { return n(); }
    runTask(n, t, r, o) { return n.apply(t, r); }
};
function Ar(e) { return nt(e, "__ignore_ng_zone__"); }
function Vr(e) { return nt(e, "__scheduler_tick__"); }
function nt(e, n) { return !Array.isArray(e) || e.length !== 1 ? !1 : e[0]?.data?.[n] === !0; }
var j = class {
    _console = console;
    handleError(n) { this._console.error("ERROR", n); }
}, tt = new g("", { factory: () => { let e = p(Oe), n = p(q), t; return r => { e.runOutsideAngular(() => { n.destroyed && !t ? setTimeout(() => { throw r; }) : (t ??= n.get(j), t.handleError(r)); }); }; } }), Ms = { provide: se, useValue: () => { let e = p(j, { optional: !0 }); }, multi: !0 }, $r = new g("", { factory: () => { if (typeof ngServerMode < "u" && ngServerMode)
        return; let e = p(Ue).defaultView; if (!e)
        return; let n = p(tt), t = i => { n(i.reason), i.preventDefault(); }, r = i => { i.error ? n(i.error) : n(new Error(i.message, { cause: i })), i.preventDefault(); }, o = () => { e.addEventListener("unhandledrejection", t), e.addEventListener("error", r); }; typeof Zone < "u" ? Zone.root.run(o) : o(), p(w).onDestroy(() => { e.removeEventListener("error", r), e.removeEventListener("unhandledrejection", t); }); } });
function bs() { return kn([Jt(() => { p($r); })]); }
function _s(e) { return null; }
function x(e, n) { let [t, r, o] = rn(e, n?.equal), i = t, s = i[I]; return i.set = r, i.update = o, i.asReadonly = ae.bind(i), i; }
function ae() { let e = this[I]; if (e.readonlyFn === void 0) {
    let n = () => this();
    n[I] = e, e.readonlyFn = n;
} return e.readonlyFn; }
var Hr = new g("", { factory: () => qr }), qr = "ng";
var Cs = new g(""), xs = new g("", { providedIn: "platform", factory: () => "unknown" }), Rs = new g(""), Ss = new g("", { factory: () => p(Ue).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce") || null }), Gr = { breakpoints: [16, 32, 48, 64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1920, 2048, 3840], placeholderResolution: 30, disableImageSizeWarning: !1, disableImageLazyLoadWarning: !1 }, Os = new g("", { factory: () => Gr });
function Fs(e) { return e; }
function te() { return Object.create(null); }
var rt = (() => { class e {
    static \u0275prov = k({ token: e, providedIn: "root", factory: () => { let t = new e; return (typeof ngServerMode > "u" || !ngServerMode) && (t.store = Ur(p(Ue), p(Hr))), t; } });
    store = te();
    onSerializeCallbacks = te();
    get(t, r) { if (!Object.hasOwn(this.store, t))
        return r; let o = this.store[t]; return o !== void 0 ? o : r; }
    set(t, r) { this.store[t] = r; }
    remove(t) { delete this.store[t]; }
    hasKey(t) { return Object.hasOwn(this.store, t); }
    get isEmpty() { return Object.keys(this.store).length === 0; }
    onSerialize(t, r) { this.onSerializeCallbacks[t] = r; }
    toJson() { for (let t in this.onSerializeCallbacks)
        if (Object.hasOwn(this.onSerializeCallbacks, t))
            try {
                this.store[t] = this.onSerializeCallbacks[t]();
            }
            catch (r) {
                console.warn("Exception in onSerialize callback: ", r);
            } return JSON.stringify(this.store).replace(/</g, "\\u003C").replace(/\//g, "\\u002F"); }
} return e; })();
function Ur(e, n) { let t = e.getElementById(n + "-state"); if (t?.tagName === "SCRIPT" && t.textContent)
    try {
        return Object.assign(te(), JSON.parse(t.textContent));
    }
    catch (r) {
        console.warn("Exception while restoring TransferState for app " + n, r);
    } return te(); }
function js(e, n) { if (nn() !== null)
    throw new h(-602, !1); }
var ot = (() => { class e {
    view;
    node;
    constructor(t, r) { this.view = t, this.node = r; }
    static __NG_ELEMENT_ID__ = Br;
} return e; })();
function Br() { return new ot(Jn(), wr()); }
var re = class {
}, ks = new g("", { factory: () => !0 }), Ls = new g("", { factory: () => !1 }), Ps = new g(""), Zr = (() => { class e {
    static \u0275prov = k({ token: e, providedIn: "root", factory: () => new je });
} return e; })(), je = class {
    dirtyEffectCount = 0;
    queues = new Map;
    add(n) { this.enqueue(n), this.schedule(n); }
    schedule(n) { n.dirty && this.dirtyEffectCount++; }
    remove(n) { let t = n.zone, r = this.queues.get(t); r.has(n) && (r.delete(n), n.dirty && this.dirtyEffectCount--); }
    enqueue(n) { let t = n.zone; this.queues.has(t) || this.queues.set(t, new Set); let r = this.queues.get(t); r.has(n) || r.add(n); }
    flush() { for (; this.dirtyEffectCount > 0;) {
        let n = !1;
        for (let [t, r] of this.queues)
            t === null ? n ||= this.flushQueue(r) : n ||= t.run(() => this.flushQueue(r));
        n || (this.dirtyEffectCount = 0);
    } }
    flushQueue(n) { let t = !1; for (let r of n)
        r.dirty && (this.dirtyEffectCount--, t = !0, r.run()); return t; }
}, ke = class {
    [I];
    constructor(n) { this[I] = n; }
    destroy() { this[I].destroy(); }
};
function it(e, n) { let t = n?.injector ?? p(G), r = n?.manualCleanup !== !0 ? t.get(w) : null, o, i = t.get(ot, null, { optional: !0 }), s = t.get(re); return i !== null ? (o = Jr(i.view, s, e), r instanceof ee && r._lView === i.view && (r = null)) : o = Kr(e, t.get(Zr), s), o.injector = t, r !== null && (o.onDestroyFns = [r.onDestroy(() => o.destroy())]), new ke(o); }
var st = W(Z({}, on), { cleanupFns: void 0, zone: null, onDestroyFns: null, run() { let e = yn(!1); try {
        sn(this);
    }
    finally {
        yn(e);
    } }, cleanup() { if (!this.cleanupFns?.length)
        return; let e = m(null); try {
        for (; this.cleanupFns.length;)
            this.cleanupFns.pop()();
    }
    finally {
        this.cleanupFns = [], m(e);
    } } }), Wr = W(Z({}, st), { consumerMarkedDirty() { this.scheduler.schedule(this), this.notifier.notify(12); }, destroy() { if (fe(this), this.onDestroyFns !== null)
        for (let e of this.onDestroyFns)
            e(); this.cleanup(), this.scheduler.remove(this); } }), Yr = W(Z({}, st), { consumerMarkedDirty() { this.view[v] |= 8192, Ge(this.view), this.notifier.notify(13); }, destroy() { if (fe(this), this.onDestroyFns !== null)
        for (let e of this.onDestroyFns)
            e(); this.cleanup(), this.view[_e]?.delete(this); } });
function Jr(e, n, t) { let r = Object.create(Yr); return r.view = e, r.zone = typeof Zone < "u" ? Zone.current : null, r.notifier = n, r.fn = at(r, t), e[_e] ??= new Set, e[_e].add(r), r.consumerMarkedDirty(r), r; }
function Kr(e, n, t) { let r = Object.create(Wr); return r.fn = at(r, e), r.scheduler = n, r.notifier = t, r.zone = typeof Zone < "u" ? Zone.current : null, r.scheduler.add(r), r.notifier.notify(12), r; }
function at(e, n) { return () => { n(t => (e.cleanupFns ??= []).push(t)); }; }
function We(e) { return typeof e == "function" && e[I] !== void 0; }
function As(e) { return We(e) && typeof e.set == "function"; }
var ut = (() => { class e {
    internalPendingTasks = p(et);
    scheduler = p(re);
    errorHandler = p(tt);
    add() { let t = this.internalPendingTasks.add(); return () => { this.internalPendingTasks.has(t) && (this.scheduler.notify(11), this.internalPendingTasks.remove(t)); }; }
    run(t) { let r = this.add(); try {
        t().catch(this.errorHandler).finally(r);
    }
    catch (o) {
        this.errorHandler(o), r();
    } }
    static \u0275prov = k({ token: e, providedIn: "root", factory: () => new e });
} return e; })();
var ct = class {
    destroyed = !1;
    listeners = null;
    errorHandler = p(j, { optional: !0 });
    isEmitting = !1;
    hasNullListeners = !1;
    destroyRef = p(w);
    constructor() { this.destroyRef.onDestroy(() => { this.destroyed = !0, this.listeners = null; }); }
    subscribe(n) { if (this.destroyed)
        throw new h(953, !1); return (this.listeners ??= []).push(n), { unsubscribe: () => { let t = this.listeners ? this.listeners.indexOf(n) : -1; t > -1 && (this.isEmitting ? (this.hasNullListeners = !0, this.listeners[t] = null) : this.listeners.splice(t, 1)); } }; }
    emit(n) { if (this.destroyed) {
        console.warn(Le(953, !1));
        return;
    } if (this.listeners === null)
        return; this.isEmitting = !0; let t = m(null); try {
        for (let r of this.listeners)
            try {
                r !== null && r(n);
            }
            catch (o) {
                this.errorHandler?.handleError(o);
            }
    }
    finally {
        this.hasNullListeners && (this.hasNullListeners = !1, this.listeners && Qr(this.listeners)), m(t), this.isEmitting = !1;
    } }
};
function Qr(e) { let n = e.length - 1; for (; n > -1;)
    e[n] === null && e.splice(n, 1), n--; }
function Bs(e) { return e.destroyRef; }
var Xr = new g("");
function R(e, n) { return tn(e, n?.equal); }
function y(e) { return un(e); }
var Ye = class extends Error {
    dependency;
    constructor(n) { super("Dependency error", { cause: n.error() }), this.name = "ResourceDependencyError", this.dependency = n; }
}, L = class e extends Error {
    _brand;
    constructor(n) { super(n); }
    static IDLE = new e("IDLE");
    static LOADING = new e("LOADING");
}, zr = e => e;
function dt(e, n) { if (typeof e == "function") {
    let t = ge(e, zr, n?.equal);
    return lt(t, n?.debugName, n?.set);
}
else {
    let t = ge(e.source, e.computation, e.equal);
    return lt(t, e.debugName, e.set);
} }
function lt(e, n, t) { let r = e[I], o = e; if (t !== void 0) {
    let i = s => pe(r, s);
    o.set = s => t(s, i), o.update = s => t(s(y(e)), i);
}
else
    o.set = i => pe(r, i), o.update = i => an(r, i); return o.asReadonly = ae.bind(e), o; }
function Zs(e) { let n = e.request, t = e.params ?? n ?? (() => null); return new Ke(t, no(e), e.defaultValue, e.equal ? eo(e.equal) : void 0, e.debugName, e.injector ?? p(G), e.id); }
var Je = class {
    value;
    isLoading;
    constructor(n, t) { this.value = n, this.value.set = this.set.bind(this), this.value.update = this.update.bind(this), this.value.asReadonly = ae, this.isLoading = R(() => this.status() === "loading" || this.status() === "reloading", void 0); }
    isError = R(() => this.status() === "error");
    update(n) { this.set(n(y(this.value))); }
    isValueDefined = R(() => this.isError() ? !1 : this.value() !== void 0);
    _snapshot;
    get snapshot() { return this._snapshot ??= R(() => { let n = this.status(); return n === "error" ? { status: "error", error: this.error() } : { status: n, value: this.value() }; }); }
    hasValue() { return this.isValueDefined(); }
    asReadonly() { return this; }
}, Ke = class extends Je {
    loaderFn;
    equal;
    debugName;
    transferCacheKey;
    pendingTasks;
    state;
    extRequest;
    effectRef;
    pendingController;
    resolvePendingTask = void 0;
    destroyed = !1;
    unregisterOnDestroy;
    status;
    error;
    transferState;
    constructor(n, t, r, o, i, s, c, u) { if (so())
        throw ao(); super(R(() => { let f = this.state().stream?.(); if (!f || this.state().status === "loading" && this.error())
        return r; if (!ue(f))
        throw new Xe(this.error()); return f.value; }, { equal: o }), i), this.loaderFn = t, this.equal = o, this.debugName = i, this.transferCacheKey = c; let d = s.get(Xr, void 0, { optional: !0 }) ?? { isActive: !1 }; this.transferState = s.get(rt, void 0, { optional: !0 }) ?? void 0, this.extRequest = dt(() => { try {
        return gt(!0), { request: n(io), reload: 0 };
    }
    catch (f) {
        return pt(f), f === L.IDLE ? { status: "idle", reload: 0 } : f === L.LOADING ? { status: "loading", reload: 0 } : { error: f, reload: 0 };
    }
    finally {
        gt(!1);
    } }, void 0), this.state = dt({ source: this.extRequest, computation: (f, P) => { let { request: B, status: A, error: en } = f, _; if (en)
            A = "resolved", _ = x({ error: Qe(en) }, void 0);
        else if (!A)
            if (P)
                A = B === void 0 ? "idle" : "loading", P.value.extRequest.request === B && (_ = P.value.stream);
            else {
                let ce = this.transferState, de = this.transferCacheKey;
                d.isActive && de && ce && B !== void 0 && ce.hasKey(de) && (_ = x({ value: ce.get(de, r) }, void 0)), _ || (_ = u?.(f.request)), u = void 0, A = B === void 0 ? "idle" : _ ? "resolved" : "loading";
            } return { extRequest: f, status: A, previousStatus: P ? ht(P.value) : "idle", stream: _ }; } }), this.effectRef = it(this.loadEffect.bind(this), { injector: s, manualCleanup: !0 }), this.pendingTasks = s.get(ut), this.unregisterOnDestroy = s.get(w).onDestroy(() => this.destroy()), this.status = R(() => ht(this.state()), void 0), this.error = R(() => { let f = this.state().stream?.(); return f && !ue(f) ? f.error : void 0; }, void 0); }
    set(n) { if (this.destroyed)
        return; let t = y(this.error), r = y(this.state); if (!t) {
        let o = y(this.value);
        if (r.status === "local" && (this.equal ? this.equal(o, n) : o === n))
            return;
    } this.state.set({ extRequest: r.extRequest, status: "local", previousStatus: "local", stream: x({ value: n }, void 0) }), this.abortInProgressLoad(); }
    reload() { let { status: n } = y(this.state); return n === "idle" || n === "loading" ? !1 : (this.extRequest.update(({ request: t, reload: r }) => ({ request: t, reload: r + 1 })), !0); }
    destroy() { this.destroyed = !0, this.unregisterOnDestroy(), this.effectRef.destroy(), this.abortInProgressLoad(), this.state.set({ extRequest: { request: void 0, reload: 0 }, status: "idle", previousStatus: "idle", stream: void 0 }); }
    loadEffect() { return le(this, null, function* () { let n = this.extRequest(), { status: t, previousStatus: r } = y(this.state); if (n.request === void 0)
        return; if (t !== "loading")
        return; this.abortInProgressLoad(); let o = this.resolvePendingTask = this.pendingTasks.add(), { signal: i } = this.pendingController = new AbortController; try {
        let s = y(() => this.loaderFn({ params: n.request, abortSignal: i, previous: { status: r } })), c = () => i.aborted || y(this.extRequest) !== n;
        if (We(s)) {
            if (c())
                return;
            this.state.set({ extRequest: n, status: "resolved", previousStatus: "resolved", stream: s });
            let u = y(s);
            typeof ngServerMode < "u" && ngServerMode && ft(u, this.transferCacheKey, this.transferState);
        }
        else {
            let u = yield s;
            if (c())
                return;
            this.state.set({ extRequest: n, status: "resolved", previousStatus: "resolved", stream: u });
            let d = u ? y(u) : void 0;
            typeof ngServerMode < "u" && ngServerMode && ft(d, this.transferCacheKey, this.transferState);
        }
    }
    catch (s) {
        if (pt(s), i.aborted || y(this.extRequest) !== n)
            return;
        this.state.set({ extRequest: n, status: "resolved", previousStatus: "error", stream: x({ error: Qe(s) }, void 0) });
    }
    finally {
        o?.(), o = void 0;
    } }); }
    abortInProgressLoad() { y(() => this.pendingController?.abort()), this.pendingController = void 0, this.resolvePendingTask?.(), this.resolvePendingTask = void 0; }
};
function ft(e, n, t) { n && t && e && ue(e) && t.set(n, e.value); }
function eo(e) { return (n, t) => n === void 0 || t === void 0 ? n === t : e(n, t); }
function no(e) { return to(e) ? e.stream : n => le(null, null, function* () { try {
    return x({ value: yield e.loader(n) }, void 0);
}
catch (t) {
    return x({ error: Qe(t) }, void 0);
} }); }
function to(e) { return !!e.stream; }
function ht(e) { switch (e.status) {
    case "loading": return e.extRequest.reload === 0 ? "loading" : "reloading";
    case "resolved": return ue(e.stream()) ? "resolved" : "error";
    default: return e.status;
} }
function ue(e) { return e.error === void 0; }
function Qe(e) { return ro(e) ? e : new ze(e); }
function ro(e) { return e instanceof Error || typeof e == "object" && typeof e.name == "string" && typeof e.message == "string"; }
var Xe = class extends Error {
    constructor(n) { super(n.message, { cause: n }); }
}, ze = class extends Error {
    constructor(n) { super(String(n), { cause: n }); }
};
function oo(e) { switch (e.status()) {
    case "idle": throw L.IDLE;
    case "error": throw new Ye(e);
    case "loading":
    case "reloading": throw L.LOADING;
} return e.value(); }
var io = { chain: oo }, mt = !1;
function so() { return mt; }
function gt(e) { mt = e; }
function ao() { return new h(992, !1); }
function pt(e) { if (e instanceof h && e.code === 992)
    throw e; }
export { ve as a, cn as b, Et as c, mo as d, h as e, Le as f, l as g, vo as h, wt as i, yo as j, Do as k, Nn as l, E as m, Mt as n, bt as o, U as p, k as q, Io as r, oe as s, Eo as t, dn as u, bn as v, ln as w, g as x, To as y, _n as z, xt as A, Rt as B, St as C, Ot as D, hn as E, wo as F, Ft as G, No as H, Cn as I, jt as J, kt as K, Mo as L, Lt as M, bo as N, Vt as O, $t as P, M as Q, qt as R, _o as S, F as T, Co as U, p as V, J as W, xo as X, K as Y, Ro as Z, So as _, Pe as $, Oo as aa, Fo as ba, jo as ca, ko as da, Wt as ea, Lo as fa, Po as ga, On as ha, Ao as ia, Q as ja, se as ka, Fn as la, jn as ma, X as na, kn as oa, Jt as pa, Kt as qa, Qt as ra, Te as sa, we as ta, Vo as ua, nr as va, An as wa, q as xa, z as ya, or as za, $o as Aa, Vn as Ba, Ho as Ca, Ve as Da, $e as Ea, v as Fa, be as Ga, qo as Ha, ur as Ia, Go as Ja, cr as Ka, $n as La, Uo as Ma, Hn as Na, Bo as Oa, Zo as Pa, Wo as Qa, qn as Ra, Yo as Sa, Jo as Ta, dr as Ua, Ko as Va, Qo as Wa, Xo as Xa, O as Ya, zo as Za, _e as _a, lr as $a, ei as ab, ni as bb, fr as cb, ti as db, ri as eb, oi as fb, ii as gb, si as hb, Gn as ib, Un as jb, ai as kb, ui as lb, ci as mb, di as nb, li as ob, fi as pb, hi as qb, Bn as rb, gi as sb, gr as tb, pi as ub, D as vb, Ce as wb, Zn as xb, mi as yb, qe as zb, vi as Ab, yi as Bb, Di as Cb, Ii as Db, mr as Eb, Ei as Fb, Ti as Gb, wi as Hb, Ni as Ib, Yn as Jb, Mi as Kb, bi as Lb, _i as Mb, Ci as Nb, vr as Ob, yr as Pb, xi as Qb, Ge as Rb, Dr as Sb, Ir as Tb, vn as Ub, Er as Vb, Tr as Wb, Ri as Xb, Si as Yb, Oi as Zb, Fi as _b, ji as $b, ki as ac, Li as bc, Pi as cc, Ai as dc, Vi as ec, $i as fc, Jn as gc, Hi as hc, qi as ic, Gi as jc, wr as kc, Nr as lc, Ui as mc, Bi as nc, Zi as oc, Wi as pc, Yi as qc, Ji as rc, yn as sc, Ki as tc, Qi as uc, Xi as vc, zi as wc, es as xc, ns as yc, ts as zc, rs as Ac, os as Bc, Mr as Cc, is as Dc, ss as Ec, as as Fc, us as Gc, cs as Hc, ds as Ic, ls as Jc, fs as Kc, hs as Lc, gs as Mc, ps as Nc, ms as Oc, vs as Pc, ys as Qc, Ds as Rc, Is as Sc, Es as Tc, Ts as Uc, Dn as Vc, Cr as Wc, ws as Xc, G as Yc, Ue as Zc, w as _c, Sr as $c, Or as ad, et as bd, b as cd, Fr as dd, Ns as ed, In as fd, Oe as gd, wn as hd, j as id, tt as jd, Ms as kd, bs as ld, _s as md, x as nd, ae as od, Hr as pd, Cs as qd, xs as rd, Rs as sd, Ss as td, Gr as ud, Os as vd, Fs as wd, rt as xd, Ur as yd, js as zd, ot as Ad, re as Bd, ks as Cd, Ls as Dd, Ps as Ed, Zr as Fd, ke as Gd, it as Hd, We as Id, As as Jd, ut as Kd, ct as Ld, Bs as Md, Xr as Nd, R as Od, y as Pd, Ye as Qd, L as Rd, dt as Sd, Zs as Td, Ke as Ud, Qe as Vd, Xe as Wd, oo as Xd, so as Yd, gt as Zd, ao as _d, pt as $d };
/*! Bundled license information:

@angular/core/fesm2022/_pending_tasks-chunk.mjs:
@angular/core/fesm2022/_resource-chunk.mjs:
  (**
   * @license Angular v22.1.4
   * (c) 2010-2026 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
