import { a as R, b as T } from "@nf-internal/chunk-2NFLSA4Y";
import { MatDialog as un } from "@angular/material/dialog";
import { HttpClient as pn } from "@angular/common/http";
import { inject as mt, isDevMode as ft } from "@angular/core";
import { outputToObservable as mn } from "@angular/core/rxjs-interop";
import { catchError as fn, concatMap as hn, EMPTY as gn, filter as _n, takeUntil as yn, tap as vn } from "rxjs";
var Oe = Symbol.for("immer-nothing"), K = Symbol.for("immer-draftable"), w = Symbol.for("immer-state");
function P(e, ...t) { throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`); }
var A = Object, H = A.getPrototypeOf, $ = "constructor", ie = "prototype", Me = "configurable", ue = "enumerable", le = "writable", ee = "value", F = e => !!e && !!e[w];
function N(e) { return e ? He(e) || oe(e) || !!e[K] || !!e[$]?.[K] || ae(e) || q(e) : !1; }
var _t = A[ie][$].toString(), ze = new WeakMap;
function He(e) { if (!e || !j(e))
    return !1; let t = H(e); if (t === null || t === A[ie])
    return !0; let n = A.hasOwnProperty.call(t, $) && t[$]; if (n === Object)
    return !0; if (!W(n))
    return !1; let i = ze.get(n); return i === void 0 && (i = Function.toString.call(n), ze.set(n, i)), i === _t; }
function re(e, t, n = !0) { Y(e) === 0 ? (n ? Reflect.ownKeys(e) : A.keys(e)).forEach(r => { t(r, e[r], e); }) : e.forEach((i, r) => t(r, i, e)); }
function Y(e) { let t = e[w]; return t ? t.type_ : oe(e) ? 1 : ae(e) ? 2 : q(e) ? 3 : 0; }
var U = (e, t, n = Y(e)) => n === 2 ? e.has(t) : A[ie].hasOwnProperty.call(e, t), E = (e, t, n = Y(e)) => n === 2 ? e.get(t) : e[t], pe = (e, t, n, i = Y(e)) => { i === 2 ? e.set(t, n) : i === 3 ? e.add(n) : e[t] = n; };
function yt(e, t) { return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t; }
var oe = Array.isArray, ae = e => e instanceof Map, q = e => e instanceof Set, j = e => typeof e == "object", W = e => typeof e == "function", be = e => typeof e == "boolean";
function vt(e) { let t = +e; return Number.isInteger(t) && String(t) === e; }
var St = e => j(e) ? e?.[w] : null, z = e => e.copy_ || e.base_;
var Ae = e => e.modified_ ? e.copy_ : e.base_;
function Ce(e, t) { if (ae(e))
    return new Map(e); if (q(e))
    return new Set(e); if (oe(e))
    return Array[ie].slice.call(e); let n = He(e); if (t === !0 || t === "class_only" && !n) {
    let i = A.getOwnPropertyDescriptors(e);
    delete i[w];
    let r = Reflect.ownKeys(i);
    for (let o = 0; o < r.length; o++) {
        let s = r[o], p = i[s];
        p[le] === !1 && (p[le] = !0, p[Me] = !0), (p.get || p.set) && (i[s] = { [Me]: !0, [le]: !0, [ue]: p[ue], [ee]: e[s] });
    }
    return A.create(H(e), i);
}
else {
    let i = H(e);
    if (i !== null && n)
        return R({}, e);
    let r = A.create(i);
    return A.assign(r, e);
} }
function Ne(e, t = !1) { return ye(e) || F(e) || !N(e) || (Y(e) > 1 && A.defineProperties(e, { set: ce, add: ce, clear: ce, delete: ce }), A.freeze(e), t && re(e, (n, i) => { Ne(i, !0); }, !1)), e; }
function bt() { P(2); }
var ce = { [ee]: bt };
function ye(e) { return e === null || !j(e) ? !0 : A.isFrozen(e); }
var me = "MapSet", fe = "Patches", Fe = "ArrayMethods", he = {};
function Z(e) { let t = he[e]; return t || P(0, e), t; }
var Be = e => !!he[e];
function xt(e, t) { he[e] || (he[e] = t); }
var te, Ye = () => te, Mt = (e, t) => ({ drafts_: [], parent_: e, immer_: t, canAutoFreeze_: !0, unfinalizedDrafts_: 0, handledSet_: new Set, processedForPatches_: new Set, mapSetPlugin_: Be(me) ? Z(me) : void 0, arrayMethodsPlugin_: Be(Fe) ? Z(Fe) : void 0 });
function Ge(e, t) { t && (e.patchPlugin_ = Z(fe), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t); }
function ke(e) { we(e), e.drafts_.forEach(Ct), e.drafts_ = null; }
function we(e) { e === te && (te = e.parent_); }
var Le = e => te = Mt(te, e);
function Ct(e) { let t = e[w]; t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0; }
function Ve(e, t) { t.unfinalizedDrafts_ = t.drafts_.length; let n = t.drafts_[0]; if (e !== void 0 && e !== n) {
    n[w].modified_ && (ke(t), P(4)), N(e) && (e = We(t, e));
    let { patchPlugin_: r } = t;
    r && r.generateReplacementPatches_(n[w].base_, e, t);
}
else
    e = We(t, n); return kt(t, e, !0), ke(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== Oe ? e : void 0; }
function We(e, t) { if (ye(t))
    return t; let n = t[w]; if (!n)
    return ge(t, e.handledSet_, e); if (!ve(n, e))
    return t; if (!n.modified_)
    return n.base_; if (!n.finalized_) {
    let { callbacks_: i } = n;
    if (i)
        for (; i.length > 0;)
            i.pop()(e);
    je(n, e);
} return n.copy_; }
function kt(e, t, n = !1) { !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Ne(t, n); }
function Ze(e) { e.finalized_ = !0, e.scope_.unfinalizedDrafts_--; }
var ve = (e, t) => e.scope_ === t, wt = [];
function Ue(e, t, n, i) { let r = z(e), o = e.type_; if (i !== void 0 && E(r, i, o) === t) {
    pe(r, i, n, o);
    return;
} if (!e.draftLocations_) {
    let p = e.draftLocations_ = new Map;
    re(r, (x, _) => { if (F(_)) {
        let C = p.get(_) || [];
        C.push(x), p.set(_, C);
    } });
} let s = e.draftLocations_.get(t) ?? wt; for (let p of s)
    pe(r, p, n, o); }
function Dt(e, t, n) { e.callbacks_.push(function (r) { let o = t; if (!o || !ve(o, r))
    return; r.mapSetPlugin_?.fixSetContents(o); let s = Ae(o); Ue(e, o.draft_ ?? o, s, n), je(o, r); }); }
function je(e, t) { if (e.modified_ && !e.finalized_ && (e.type_ === 3 || e.type_ === 1 && e.allIndicesReassigned_ || (e.assigned_?.size ?? 0) > 0)) {
    let { patchPlugin_: i } = t;
    if (i) {
        let r = i.getPath(e);
        r && i.generatePatches_(e, r, t);
    }
    Ze(e);
} }
function It(e, t, n) { let { scope_: i } = e; if (F(n)) {
    let r = n[w];
    ve(r, i) && r.callbacks_.push(function () { de(e); let s = Ae(r); Ue(e, n, s, t); });
}
else
    N(n) && e.callbacks_.push(function () { let o = z(e); e.type_ === 3 ? o.has(n) && ge(n, i.handledSet_, i) : E(o, t, e.type_) === n && i.drafts_.length > 1 && (e.assigned_.get(t) ?? !1) === !0 && e.copy_ && ge(E(e.copy_, t, e.type_), i.handledSet_, i); }); }
function ge(e, t, n) { return !n.immer_.autoFreeze_ && n.unfinalizedDrafts_ < 1 || F(e) || t.has(e) || !N(e) || ye(e) || (t.add(e), re(e, (i, r) => { if (F(r)) {
    let o = r[w];
    if (ve(o, n)) {
        let s = Ae(o);
        pe(e, i, s, e.type_), Ze(o);
    }
}
else
    N(r) && ge(r, t, n); })), e; }
function Pt(e, t) { let n = oe(e), i = { type_: n ? 1 : 0, scope_: t ? t.scope_ : Ye(), modified_: !1, finalized_: !1, assigned_: void 0, parent_: t, base_: e, draft_: null, copy_: null, revoke_: null, isManual_: !1, callbacks_: void 0 }, r = i, o = _e; n && (r = [i], o = ne); let { revoke: s, proxy: p } = Proxy.revocable(r, o); return i.draft_ = p, i.revoke_ = s, [p, i]; }
var _e = { get(e, t) { if (t === w)
        return e; let n = e.scope_.arrayMethodsPlugin_, i = e.type_ === 1 && typeof t == "string"; if (i && n?.isArrayOperationMethod(t))
        return n.createMethodInterceptor(e, t); let r = z(e); if (!U(r, t, e.type_))
        return At(e, r, t); let o = r[t]; if (e.finalized_ || !N(o) || i && e.operationMethod && n?.isMutatingArrayMethod(e.operationMethod) && vt(t))
        return o; if (o === xe(e.base_, t) || Ot(e, t, o)) {
        de(e);
        let s = e.type_ === 1 ? +t : t, p = Ie(e.scope_, o, e, s);
        return e.copy_[s] = p;
    } return o; }, has(e, t) { return t in z(e); }, ownKeys(e) { return Reflect.ownKeys(z(e)); }, set(e, t, n) { let i = qe(z(e), t); if (i?.set)
        return i.set.call(e.draft_, n), !0; if (!e.modified_) {
        let r = xe(z(e), t), o = r?.[w];
        if (o && o.base_ === n)
            return e.copy_[t] = n, e.assigned_.delete(t), !0;
        if (yt(n, r) && (n !== void 0 || U(e.base_, t, e.type_)))
            return !0;
        de(e), De(e);
    } return e.copy_[t] === n && (n !== void 0 || U(e.copy_, t, e.type_)) || Number.isNaN(n) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = n, e.assigned_.set(t, !0), It(e, t, n)), !0; }, deleteProperty(e, t) { return de(e), xe(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_.set(t, !1), De(e)) : e.assigned_.delete(t), e.copy_ && delete e.copy_[t], !0; }, getOwnPropertyDescriptor(e, t) { let n = z(e), i = Reflect.getOwnPropertyDescriptor(n, t); return i && { [le]: !0, [Me]: e.type_ !== 1 || t !== "length", [ue]: i[ue], [ee]: n[t] }; }, defineProperty() { P(11); }, getPrototypeOf(e) { return H(e.base_); }, setPrototypeOf() { P(12); } }, ne = {};
for (let e in _e) {
    let t = _e[e];
    ne[e] = function () { let n = arguments; return n[0] = n[0][0], t.apply(this, n); };
}
ne.deleteProperty = function (e, t) { return ne.set.call(this, e, t, void 0); };
ne.set = function (e, t, n) { return _e.set.call(this, e[0], t, n, e[0]); };
function xe(e, t) { let n = e[w]; return (n ? z(n) : e)[t]; }
function Ot(e, t, n) { return e.type_ !== 1 || !e.allIndicesReassigned_ || !N(n) || n[w] ? !1 : e.baseRefs_.has(n); }
function At(e, t, n) { let i = qe(t, n); return i ? ee in i ? i[ee] : i.get?.call(e.draft_) : void 0; }
function qe(e, t) { if (!(t in e))
    return; let n = H(e); for (; n;) {
    let i = Object.getOwnPropertyDescriptor(n, t);
    if (i)
        return i;
    n = H(n);
} }
function De(e) { e.modified_ || (e.modified_ = !0, e.parent_ && De(e.parent_)); }
function de(e) { e.copy_ || (e.assigned_ = new Map, e.copy_ = Ce(e.base_, e.scope_.immer_.useStrictShallowCopy_)); }
var Nt = class {
    constructor(e) { this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.useStrictIteration_ = !1, this.produce = (t, n, i) => { if (W(t) && !W(n)) {
        let o = n;
        n = t;
        let s = this;
        return function (x = o, ..._) { return s.produce(x, C => n.call(this, C, ..._)); };
    } W(n) || P(6), i !== void 0 && !W(i) && P(7); let r; if (N(t)) {
        let o = Le(this), s = Ie(o, t, void 0), p = !0;
        try {
            r = n(s), p = !1;
        }
        finally {
            p ? ke(o) : we(o);
        }
        return Ge(o, i), Ve(r, o);
    }
    else if (!t || !j(t)) {
        if (r = n(t), r === void 0 && (r = t), r === Oe && (r = void 0), this.autoFreeze_ && Ne(r, !0), i) {
            let o = [], s = [];
            Z(fe).generateReplacementPatches_(t, r, { patches_: o, inversePatches_: s }), i(o, s);
        }
        return r;
    }
    else
        P(1, t); }, this.produceWithPatches = (t, n) => { if (W(t))
        return (s, ...p) => this.produceWithPatches(s, x => t(x, ...p)); let i, r; return [this.produce(t, n, (s, p) => { i = s, r = p; }), i, r]; }, be(e?.autoFreeze) && this.setAutoFreeze(e.autoFreeze), be(e?.useStrictShallowCopy) && this.setUseStrictShallowCopy(e.useStrictShallowCopy), be(e?.useStrictIteration) && this.setUseStrictIteration(e.useStrictIteration); }
    createDraft(e) { N(e) || P(8), F(e) && (e = Rt(e)); let t = Le(this), n = Ie(t, e, void 0); return n[w].isManual_ = !0, we(t), n; }
    finishDraft(e, t) { let n = e && e[w]; (!n || !n.isManual_) && P(9); let { scope_: i } = n; return Ge(i, t), Ve(void 0, i); }
    setAutoFreeze(e) { this.autoFreeze_ = e; }
    setUseStrictShallowCopy(e) { this.useStrictShallowCopy_ = e; }
    setUseStrictIteration(e) { this.useStrictIteration_ = e; }
    shouldUseStrictIteration() { return this.useStrictIteration_; }
    applyPatches(e, t) { let n; for (n = t.length - 1; n >= 0; n--) {
        let r = t[n];
        if (r.path.length === 0 && r.op === "replace") {
            e = r.value;
            break;
        }
    } n > -1 && (t = t.slice(n + 1)); let i = Z(fe).applyPatches_; return F(e) ? i(e, t) : this.produce(e, r => i(r, t)); }
};
function Ie(e, t, n, i) { let [r, o] = ae(t) ? Z(me).proxyMap_(t, n) : q(t) ? Z(me).proxySet_(t, n) : Pt(t, n); return (n?.scope_ ?? Ye()).drafts_.push(r), o.callbacks_ = n?.callbacks_ ?? [], o.key_ = i, n && i !== void 0 ? Dt(n, o, i) : o.callbacks_.push(function (x) { x.mapSetPlugin_?.fixSetContents(o); let { patchPlugin_: _ } = x; o.modified_ && _ && _.generatePatches_(o, [], x); }), r; }
function Rt(e) { return F(e) || P(10, e), Qe(e); }
function Qe(e) { if (!N(e) || ye(e))
    return e; let t = e[w], n, i = !0; if (t) {
    if (!t.modified_)
        return t.base_;
    t.finalized_ = !0, n = Ce(e, t.scope_.immer_.useStrictShallowCopy_), i = t.scope_.immer_.shouldUseStrictIteration();
}
else
    n = Ce(e, !0); let r = n; return q(n) && (n = new Set), re(r, (o, s) => { pe(n, o, Qe(s)); }, i), t && (t.finalized_ = !1), n; }
function Je() { function t(c, h = []) { if (c.key_ !== void 0) {
    let m = c.parent_.copy_ ?? c.parent_.base_, f = St(E(m, c.key_)), g = E(m, c.key_);
    if (g === void 0 || g !== c.draft_ && g !== c.copy_ || f != null && f.base_ !== c.base_)
        return null;
    let y = c.parent_.type_ === 3, M;
    if (y) {
        let k = c.parent_;
        M = Array.from(k.drafts_.keys()).indexOf(c.key_);
    }
    else
        M = c.key_;
    if (!(y && m.size > M || U(m, M)) || c.parent_.type_ === 1 && c.parent_.allIndicesReassigned_)
        return null;
    h.push(M);
} if (c.parent_)
    return t(c.parent_, h); h.reverse(); try {
    n(c.copy_, h);
}
catch {
    return null;
} return h; } function n(c, h) { let m = c; for (let f = 0; f < h.length - 1; f++) {
    let g = h[f];
    if (m = E(m, g), !j(m) || m === null)
        throw new Error(`Cannot resolve path at '${h.join("/")}'`);
} return m; } let i = "replace", r = "add", o = "remove"; function s(c, h, m) { if (c.scope_.processedForPatches_.has(c))
    return; c.scope_.processedForPatches_.add(c); let { patches_: f, inversePatches_: g } = m; switch (c.type_) {
    case 0:
    case 2: return x(c, h, f, g);
    case 1: return p(c, h, f, g);
    case 3: return _(c, h, f, g);
} } function p(c, h, m, f) { let { base_: g, assigned_: y } = c, M = c.copy_; M.length < g.length && ([g, M] = [M, g], [m, f] = [f, m]); let k = c.allIndicesReassigned_ === !0; for (let v = 0; v < g.length; v++) {
    let O = M[v], G = g[v];
    if ((k || y?.get(v.toString())) && O !== G) {
        let L = O?.[w];
        if (L && L.modified_)
            continue;
        let Ee = h.concat([v]);
        m.push({ op: i, path: Ee, value: b(O) }), f.push({ op: i, path: Ee, value: b(G) });
    }
} for (let v = g.length; v < M.length; v++) {
    let O = h.concat([v]);
    m.push({ op: r, path: O, value: b(M[v]) });
} for (let v = M.length - 1; g.length <= v; --v) {
    let O = h.concat([v]);
    f.push({ op: o, path: O });
} } function x(c, h, m, f) { let { base_: g, copy_: y, type_: M } = c; re(c.assigned_, (k, v) => { let O = E(g, k, M), G = E(y, k, M), I = v ? U(g, k) ? i : r : o; if (O === G && I === i)
    return; let L = h.concat(k); m.push(I === o ? { op: I, path: L } : { op: I, path: L, value: b(G) }), f.push(I === r ? { op: o, path: L } : I === o ? { op: r, path: L, value: b(O) } : { op: i, path: L, value: b(O) }); }); } function _(c, h, m, f) { let { base_: g, copy_: y } = c, M = 0; g.forEach(k => { if (!y.has(k)) {
    let v = h.concat([M]);
    m.push({ op: o, path: v, value: k }), f.unshift({ op: r, path: v, value: k });
} M++; }), M = 0, y.forEach(k => { if (!g.has(k)) {
    let v = h.concat([M]);
    m.push({ op: r, path: v, value: k }), f.unshift({ op: o, path: v, value: k });
} M++; }); } function C(c, h, m) { let { patches_: f, inversePatches_: g } = m; f.push({ op: i, path: [], value: h === Oe ? void 0 : h }), g.push({ op: i, path: [], value: c }); } function S(c, h) { return h.forEach(m => { let { path: f, op: g } = m, y = c; for (let O = 0; O < f.length - 1; O++) {
    let G = Y(y), I = f[O];
    typeof I != "string" && typeof I != "number" && (I = "" + I), (G === 0 || G === 1) && (I === "__proto__" || I === $) && P(19), W(y) && I === ie && P(19), y = E(y, I), (y === null || !j(y)) && P(18, f.join("/"));
} let M = Y(y), k = D(m.value), v = f[f.length - 1]; switch (g) {
    case i: switch (M) {
        case 2: return y.set(v, k);
        case 3: P(16);
        default: return y[v] = k;
    }
    case r: switch (M) {
        case 1: return v === "-" ? y.push(k) : y.splice(v, 0, k);
        case 2: return y.set(v, k);
        case 3: return y.add(k);
        default: return y[v] = k;
    }
    case o: switch (M) {
        case 1: return y.splice(v, 1);
        case 2: return y.delete(v);
        case 3: return y.delete(m.value);
        default: return delete y[v];
    }
    default: P(17, g);
} }), c; } function D(c) { if (!N(c))
    return c; if (oe(c))
    return c.map(D); if (ae(c))
    return new Map(Array.from(c.entries()).map(([m, f]) => [m, D(f)])); if (q(c))
    return new Set(Array.from(c).map(D)); let h = Object.create(H(c)); for (let m in c)
    h[m] = D(c[m]); return U(c, K) && (h[K] = c[K]), h; } function b(c) { return F(c) ? D(c) : c; } xt(fe, { applyPatches_: S, generatePatches_: s, generateReplacementPatches_: C, getPath: t }); }
var Tt = globalThis.Iterator, Sn = typeof Tt?.from == "function";
var Pe = new Nt, B = Pe.produce;
var Xe = Pe.applyPatches.bind(Pe);
import { inject as sn, output as cn, viewChildren as ln } from "@angular/core";
import { MAT_DIALOG_DATA as dn } from "@angular/material/dialog";
import { computed as se, DestroyRef as Jt, inject as at, input as J, linkedSignal as Xt, model as st, output as Kt, signal as ct, viewChildren as lt } from "@angular/core";
import { CdkDrag as Te, CdkDropList as $t } from "@angular/cdk/drag-drop";
import { DOCUMENT as en } from "@angular/common";
import { DecimalPipe as Et } from "@angular/common";
import { computed as Ke, effect as zt, inject as $e, input as Ft, isDevMode as Bt, output as Re, resource as Gt, TemplateRef as et, viewChild as Lt } from "@angular/core";
import { CdkContextMenuTrigger as Vt, CdkMenu as Wt, CdkMenuItem as Ht } from "@angular/cdk/menu";
import { MatIconModule as Yt } from "@angular/material/icon";
import { TranslatePipe as Zt } from "@ngx-translate/core";
import { ItemRegistry as Ut } from "@org/shop/nui";
import { CompactNumberPipe as jt } from "@org/shop/shared-ui";
import * as a from "@angular/core";
import * as tt from "@angular/cdk/menu";
import * as nt from "@angular/material/icon";
var qt = ["contextMenu"];
function Qt(e, t) { if (e & 1) {
    let n = a.\u0275\u0275getCurrentView();
    a.\u0275\u0275elementStart(0, "div", 4), a.\u0275\u0275animateLeave("context-menu--animate-leave"), a.\u0275\u0275animateEnter("context-menu--animate-enter"), a.\u0275\u0275elementStart(1, "div", 5)(2, "h4"), a.\u0275\u0275text(3), a.\u0275\u0275pipe(4, "translate"), a.\u0275\u0275elementStart(5, "span", 6), a.\u0275\u0275text(6), a.\u0275\u0275pipe(7, "number"), a.\u0275\u0275elementEnd(), a.\u0275\u0275elementStart(8, "span", 7), a.\u0275\u0275text(9), a.\u0275\u0275pipe(10, "translate"), a.\u0275\u0275elementEnd()(), a.\u0275\u0275elementStart(11, "p"), a.\u0275\u0275text(12), a.\u0275\u0275pipe(13, "translate"), a.\u0275\u0275elementEnd()(), a.\u0275\u0275elementStart(14, "button", 8), a.\u0275\u0275listener("click", function () { a.\u0275\u0275restoreView(n); let r = a.\u0275\u0275nextContext(); return a.\u0275\u0275resetView(r.consumeRequested.emit()); }), a.\u0275\u0275elementStart(15, "mat-icon", 9), a.\u0275\u0275text(16, "touch_app"), a.\u0275\u0275elementEnd(), a.\u0275\u0275text(17), a.\u0275\u0275pipe(18, "translate"), a.\u0275\u0275elementStart(19, "span", 10), a.\u0275\u0275text(20), a.\u0275\u0275pipe(21, "translate"), a.\u0275\u0275elementEnd()(), a.\u0275\u0275elementStart(22, "button", 8), a.\u0275\u0275listener("click", function () { a.\u0275\u0275restoreView(n); let r = a.\u0275\u0275nextContext(); return a.\u0275\u0275resetView(r.takeOneRequested.emit()); }), a.\u0275\u0275elementStart(23, "mat-icon", 9), a.\u0275\u0275text(24, "splitscreen_right"), a.\u0275\u0275elementEnd(), a.\u0275\u0275text(25), a.\u0275\u0275pipe(26, "translate"), a.\u0275\u0275elementStart(27, "span", 10), a.\u0275\u0275text(28), a.\u0275\u0275pipe(29, "translate"), a.\u0275\u0275elementEnd()(), a.\u0275\u0275elementStart(30, "button", 8), a.\u0275\u0275listener("click", function () { a.\u0275\u0275restoreView(n); let r = a.\u0275\u0275nextContext(); return a.\u0275\u0275resetView(r.takeHalfRequested.emit()); }), a.\u0275\u0275elementStart(31, "mat-icon", 9), a.\u0275\u0275text(32, "split_scene"), a.\u0275\u0275elementEnd(), a.\u0275\u0275text(33), a.\u0275\u0275pipe(34, "translate"), a.\u0275\u0275elementStart(35, "span", 10), a.\u0275\u0275text(36), a.\u0275\u0275pipe(37, "translate"), a.\u0275\u0275elementEnd()()();
} if (e & 2) {
    let n = a.\u0275\u0275nextContext();
    a.\u0275\u0275advance(3), a.\u0275\u0275textInterpolate1(" ", a.\u0275\u0275pipeBind1(4, 10, n.resourceName() + "." + (n.item()?.name ?? "")), " "), a.\u0275\u0275advance(3), a.\u0275\u0275textInterpolate(a.\u0275\u0275pipeBind1(7, 12, n.slot()?.amount ?? 0)), a.\u0275\u0275advance(3), a.\u0275\u0275textInterpolate(a.\u0275\u0275pipeBind1(10, 14, "inventory.contextMenu.misc")), a.\u0275\u0275advance(3), a.\u0275\u0275textInterpolate(a.\u0275\u0275pipeBind1(13, 16, n.resourceName() + "." + (n.item()?.description ?? ""))), a.\u0275\u0275advance(5), a.\u0275\u0275textInterpolate1(" ", a.\u0275\u0275pipeBind1(18, 18, "inventory.contextMenu.use"), " "), a.\u0275\u0275advance(3), a.\u0275\u0275textInterpolate1(" ", a.\u0275\u0275pipeBind1(21, 20, "inventory.contextMenu.doubleClick"), " "), a.\u0275\u0275advance(5), a.\u0275\u0275textInterpolate1(" ", a.\u0275\u0275pipeBind1(26, 22, "inventory.contextMenu.takeOne"), " "), a.\u0275\u0275advance(3), a.\u0275\u0275textInterpolate1(" ", a.\u0275\u0275pipeBind1(29, 24, "inventory.contextMenu.ctrlClick"), " "), a.\u0275\u0275advance(5), a.\u0275\u0275textInterpolate1(" ", a.\u0275\u0275pipeBind1(34, 26, "inventory.contextMenu.takeHalf"), " "), a.\u0275\u0275advance(3), a.\u0275\u0275textInterpolate1(" ", a.\u0275\u0275pipeBind1(37, 28, "inventory.contextMenu.altClick"), " ");
} }
var Q = class e {
    slot = Ft.required();
    item;
    imageUrl;
    resourceName;
    trigger = $e(Vt);
    registry = $e(Ut);
    consumeRequested = Re();
    takeOneRequested = Re();
    takeHalfRequested = Re();
    _contextMenu = Lt.required("contextMenu", { read: et });
    constructor() { this.imageUrl = Ke(() => { if (this.item()) {
        let [t] = this.slot()?.itemIdentifier?.split(":") ?? [];
        return `${Bt() ? "/dev" : `https://cfx-nui-${t}`}/items/${this.item()?.imagePath}`;
    } return null; }), this.resourceName = Ke(() => { if (this.item()) {
        let [t] = this.slot()?.itemIdentifier?.split(":") ?? [];
        return t;
    } return null; }), this.item = Gt({ params: () => this.slot()?.itemIdentifier, loader: ({ params: t }) => this.registry.getItemDefinition(t), defaultValue: null }).value, zt(() => { this._contextMenu() && (this.trigger.menuTemplateRef = this._contextMenu(), this.trigger.disabled = this.slot() == null); }); }
    onClick(t) { t.button !== 0 || !t.ctrlKey && !t.altKey || (t.preventDefault(), t.stopPropagation(), this.slot()?.itemIdentifier != null && (t.ctrlKey ? this.takeOneRequested.emit() : this.takeHalfRequested.emit())); }
    onDoubleClick(t) { t.button === 0 && !t.ctrlKey && !t.altKey && this.consumeRequested.emit(); }
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275cmp = a.\u0275\u0275defineComponent({ type: e, selectors: [["app-inventory-stash-slot"]], viewQuery: function (n, i) { n & 1 && a.\u0275\u0275viewQuerySignal(i._contextMenu, qt, 5, et), n & 2 && a.\u0275\u0275queryAdvance(); }, hostBindings: function (n, i) { n & 1 && a.\u0275\u0275listener("click", function (o) { return i.onClick(o); })("dblclick", function (o) { return i.onDoubleClick(o); }); }, inputs: { slot: [1, "slot"] }, outputs: { consumeRequested: "consumeRequested", takeOneRequested: "takeOneRequested", takeHalfRequested: "takeHalfRequested" }, features: [a.\u0275\u0275HostDirectivesFeature([tt.CdkContextMenuTrigger])], decls: 8, vars: 5, consts: [["contextMenu", ""], [1, "item__preview"], [1, "item__type"], [1, "item__amount"], ["cdkMenu", "", 1, "context-menu", "context-menu--animate-enter"], [1, "context-menu__header"], [1, "context-menu__header__amount"], [1, "context-menu__header__category"], ["cdkMenuItem", "", 1, "context-menu__item", 3, "click"], [1, "material-symbols-outlined"], [1, "context-menu__item__badge"]], template: function (n, i) { n & 1 && (a.\u0275\u0275element(0, "div", 1), a.\u0275\u0275elementStart(1, "div", 2), a.\u0275\u0275text(2, "A"), a.\u0275\u0275elementEnd(), a.\u0275\u0275elementStart(3, "div", 3), a.\u0275\u0275text(4), a.\u0275\u0275pipe(5, "compactNumber"), a.\u0275\u0275elementEnd(), a.\u0275\u0275template(6, Qt, 38, 30, "ng-template", null, 0, a.\u0275\u0275templateRefExtractor)), n & 2 && (a.\u0275\u0275styleProp("background-image", i.imageUrl() ? "url(" + i.imageUrl() + ")" : "none"), a.\u0275\u0275advance(4), a.\u0275\u0275textInterpolate(a.\u0275\u0275pipeBind1(5, 3, i.slot()?.amount ?? 0))); }, dependencies: [Wt, Ht, Yt, nt.MatIcon, Zt, jt, Et], styles: ["[_nghost-%COMP%]{border:2px solid #636671;border-radius:1px;box-sizing:border-box;background-image:radial-gradient(circle farthest-corner at 50% 50%,#6669,#0000),linear-gradient(141.34deg,#000,#090b0d);text-align:center;font-size:14px;font-family:sans-serif;position:relative;flex-shrink:0;align-self:flex-start;aspect-ratio:1/1;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));grid-template-rows:minmax(0,1fr) auto;font-family:Big Shoulders,sans-serif;font-weight:700;cursor:pointer}.drag-disabled[_nghost-%COMP%], .drag-disabled   [_nghost-%COMP%]{cursor:default}.blank[_nghost-%COMP%], .blank   [_nghost-%COMP%]{opacity:0}.item__preview[_ngcontent-%COMP%]{grid-column:1/-1;background-repeat:no-repeat;background-position:center calc(50% + 12px)}.item__type[_ngcontent-%COMP%]{text-align:left;padding-left:8px}.item__amount[_ngcontent-%COMP%]{text-align:right;padding-right:6px}.item__type[_ngcontent-%COMP%], .item__amount[_ngcontent-%COMP%]{padding-bottom:4px}.context-menu[_ngcontent-%COMP%]{--%NS%context-menu-padding: 6px;color:var(--%NS%mat-sys-inverse-on-surface);display:inline-flex;flex-direction:column;min-width:180px;max-width:220px;background-color:#fff;padding:var(--%NS%context-menu-padding);border-radius:2px;box-shadow:0 4px 33.6px -4px #000;overflow:hidden}.context-menu__header[_ngcontent-%COMP%]{background:linear-gradient(-135deg,#8ba2de,#6983c7 55%,#4c65a8);color:#fff;margin-left:calc(0px - var(--%NS%context-menu-padding));margin-top:calc(0px - var(--%NS%context-menu-padding));width:calc(100% + var(--%NS%context-menu-padding) * 2);padding:calc(var(--%NS%context-menu-padding) * 2) calc(var(--%NS%context-menu-padding) * 2) var(--%NS%context-menu-padding);box-sizing:border-box;margin-bottom:var(--%NS%context-menu-padding)}.context-menu__header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{display:flex;margin:0;text-transform:uppercase;font-weight:500;column-gap:4px;word-break:break-word}.context-menu__header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] + p[_ngcontent-%COMP%]{font-size:.7rem;margin:.25rem 0;letter-spacing:-.4px;opacity:.9;font-weight:300}.context-menu__header__amount[_ngcontent-%COMP%], .context-menu__header__category[_ngcontent-%COMP%]{border-radius:2px;border:1px solid white;text-transform:uppercase;letter-spacing:.2px;padding:1px 4px;align-self:flex-start;line-height:1rem;font-size:.85rem;box-sizing:content-box;word-break:keep-all}.context-menu__header__amount[_ngcontent-%COMP%]{background:#fff;color:#4c65a8;margin-left:auto;font-weight:600}.context-menu__header__category[_ngcontent-%COMP%]{color:#fff;font-weight:300}.context-menu__item[_ngcontent-%COMP%]{background-color:transparent;cursor:pointer;border:none;border-radius:2px;-webkit-user-select:none;user-select:none;min-width:64px;line-height:32px;padding:0 8px 0 2px;display:flex;align-items:center;flex-direction:row;flex:1;font-weight:700;letter-spacing:.2px;font-size:.9rem;text-transform:uppercase;transition:color .15s,background-color .15s}.context-menu__item[_ngcontent-%COMP%]:not(:last-of-type){border-bottom:2px solid rgba(0,0,0,.0862745098)}.context-menu__item[_ngcontent-%COMP%]:hover, .context-menu__item[_ngcontent-%COMP%]:active{background-color:#6983c7;border-bottom-color:transparent;color:#fff}.context-menu__item[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%], .context-menu__item[_ngcontent-%COMP%]:active   mat-icon[_ngcontent-%COMP%]{margin-right:5px}.context-menu__item[_ngcontent-%COMP%]:hover   *[class*=__badge][_ngcontent-%COMP%], .context-menu__item[_ngcontent-%COMP%]:active   *[class*=__badge][_ngcontent-%COMP%]{color:#fff;border-color:#fff}.context-menu__item[_ngcontent-%COMP%]:focus, .context-menu__item[_ngcontent-%COMP%]:focus-visible{outline:none}.context-menu__item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;margin-top:4px;margin-right:3px;opacity:.5;transition:margin-right .15s;transform:scale(.9)}.context-menu__item__badge[_ngcontent-%COMP%]{border-radius:4px;border:1px solid darkgray;color:#a9a9a9;font-size:.7rem;line-height:17px;padding:0 4px;align-self:center;margin-top:-2px;position:absolute;right:12px;pointer-events:none}.context-menu--animate-enter[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_menuEnter .1s cubic-bezier(0,0,.2,1) forwards}.context-menu--animate-leave[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_menuLeave 75ms cubic-bezier(.4,0,1,1) forwards}@keyframes _ngcontent-%COMP%_menuEnter{0%{opacity:0;transform:scale(.95) translateY(-10px)}to{opacity:1;transform:scale(1) translateY(0)}}@keyframes _ngcontent-%COMP%_menuLeave{0%{opacity:1;transform:scale(1) translateY(0)}to{opacity:0;transform:scale(.95) translateY(-10px)}}"] });
};
function rt(e, t) { if (e === t)
    return !0; if (e === null || t === null || typeof e != "object" || typeof t != "object" || Array.isArray(e) !== Array.isArray(t))
    return !1; let n = Object.entries(e), i = Object.entries(t); return n.length === i.length && n.every(([r, o]) => Object.prototype.hasOwnProperty.call(t, r) && rt(o, t[r])); }
function it(e) { return Object.fromEntries(Object.entries(e).filter(([t]) => t !== "slotIndex" && t !== "stashId")); }
function ot(e, t) { let n = t.flatMap(({ stash: s, slots: p }) => p.flatMap((x, _) => x ? [{ stash: s, index: _, item: x }] : [])), i = n.filter(s => s.item === e); if (i.length === 1)
    return i[0]; let r = it(e), o = n.filter(s => rt(r, it(s.item))); return o.length === 1 ? o[0] : void 0; }
import * as l from "@angular/core";
function tn(e, t) { e & 1 && l.\u0275\u0275element(0, "div", 2); }
function nn(e, t) { if (e & 1) {
    let n = l.\u0275\u0275getCurrentView();
    l.\u0275\u0275elementStart(0, "div", 4), l.\u0275\u0275listener("cdkDragStarted", function (r) { let o = l.\u0275\u0275restoreView(n).$index, s = l.\u0275\u0275nextContext(); return l.\u0275\u0275resetView(s.startDrag(r.source, o)); })("cdkDragMoved", function (r) { l.\u0275\u0275restoreView(n); let o = l.\u0275\u0275nextContext(); return l.\u0275\u0275resetView(o.updateDropTarget(r)); })("cdkDragReleased", function (r) { l.\u0275\u0275restoreView(n); let o = l.\u0275\u0275nextContext(); return l.\u0275\u0275resetView(o.release(r)); })("cdkDragEnded", function () { l.\u0275\u0275restoreView(n); let r = l.\u0275\u0275nextContext(); return l.\u0275\u0275resetView(r.endDrag()); }), l.\u0275\u0275elementStart(1, "app-inventory-stash-slot", 5), l.\u0275\u0275listener("takeOneRequested", function () { let r = l.\u0275\u0275restoreView(n).$index, o = l.\u0275\u0275nextContext(); return l.\u0275\u0275resetView(o.takeFromSlot(r, "one")); })("takeHalfRequested", function () { let r = l.\u0275\u0275restoreView(n).$index, o = l.\u0275\u0275nextContext(); return l.\u0275\u0275resetView(o.takeFromSlot(r, "half")); }), l.\u0275\u0275elementEnd()();
} if (e & 2) {
    let n = t.$implicit, i = t.$index, r = l.\u0275\u0275nextContext();
    l.\u0275\u0275classProp("drop-target", r.dropTargetIndex() === i)("take-dimmed", r.isTaking() && n !== null && r.takeSourceIndex() !== i && r.dropTargetIndex() !== i)("drag-disabled", (n?.itemIdentifier ?? null) === null)("blank", (n?.itemIdentifier ?? null) === null), l.\u0275\u0275property("cdkDragDisabled", r.isTaking() || (n?.itemIdentifier ?? null) === null)("cdkDragPreviewClass", "stash-drag-preview-" + r.id()), l.\u0275\u0275advance(), l.\u0275\u0275property("slot", n);
} }
var X = class e {
    document = at(en);
    takeOperation = ct(null);
    pointerPosition;
    drags = lt(Te);
    slotComponents = lt(Q);
    swapAnimation;
    takeAnimation;
    swapAnimationCleanup;
    activeDrag;
    id = J.required();
    type = J.required();
    confirmedState = st.required();
    currentState = Xt(() => this.confirmedState());
    maxSlots = J();
    maxWeight = J(0);
    revision = st(0);
    orientation = J("mixed");
    connectedStashes = J([]);
    changed = Kt();
    dropTargetIndex = ct(-1);
    isTaking = se(() => this.takeOwner() !== void 0);
    takeSourceIndex = se(() => this.takeOperation()?.sources[0]?.index ?? -1);
    slots = se(() => this.currentState().length);
    weight = se(() => this.slotComponents()?.reduce((t, n) => t + (n.item()?.weight ?? 0) * (n.slot()?.amount ?? 1), 0));
    effectiveMaxSlots = se(() => this.maxSlots() ? Math.max(this.maxSlots(), this.slots()) : this.slots());
    constructor() { at(Jt).onDestroy(() => { this.cancelConnectedTake(), this.cancelSwapAnimation(); }); }
    confirmRevision(t) { this.cancelConnectedTake(), this.revision.set(t), this.confirmedState.set(this.currentState()); }
    replaceConfirmedState(t, n) { this.cancelConnectedTake(); let i = new Set([this, ...this.connectedStashes()]); for (let r of i)
        r.cancelSwapAnimation(); this.revision.set(n), this.confirmedState.set(t), this.currentState.set(t); for (let r of i) {
        let o = r.activeDrag;
        if (o) {
            let s = r.resolveDraggedItem();
            s && (o.item = s.item), o.pointerPosition && r.highlightDropTarget(o.pointerPosition, o.source);
        }
    } }
    startDrag(t, n) { if (this.isTaking())
        return; let i = this.currentState()[n]; this.activeDrag = i ? { source: t, item: i } : void 0, this.cancelSwapAnimation(); }
    endDrag() { this.clearDropTargets(); let t = this.activeDrag; queueMicrotask(() => { this.activeDrag === t && (this.activeDrag = void 0); }); }
    resolveDraggedItem() { if (this.activeDrag)
        return ot(this.activeDrag.item, [...new Set([this, ...this.connectedStashes()])].map(t => ({ stash: t, slots: t.currentState() }))); }
    takeOwner() { return [this, ...this.connectedStashes()].find(t => t.takeOperation() !== null); }
    takeFromSlot(t, n) { let i = new Set([this, ...this.connectedStashes()]); if ([...i].some(S => S.activeDrag))
        return; let r = this.currentState()[t]; if (r?.itemIdentifier == null || r.amount <= 0)
        return; let o = this.takeOwner() ?? this; if (o !== this)
        return; let s = o.takeOperation(); if (s && (s.sources[0].index !== t || s.itemIdentifier !== r.itemIdentifier))
        return; let p = n === "one" ? 1 : Math.max(1, Math.floor(r.amount / 2)); if (!s) {
        let S = this.slotComponents()[t]?.item(), D = this.drags()[t]?.getRootElement();
        if (!S || !D)
            return;
        for (let h of i)
            h.cancelSwapAnimation();
        let b = D.getBoundingClientRect(), c = D.cloneNode(!0);
        c.removeAttribute("id"), c.querySelectorAll("[id]").forEach(h => h.removeAttribute("id")), c.classList.remove("blank", "drop-target", "drag-disabled"), c.classList.add("cdk-drag-preview"), c.setAttribute("aria-hidden", "true"), c.setAttribute("popover", "manual"), Object.assign(c.style, { position: "fixed", left: "0", top: "0", margin: "0", right: "auto", bottom: "auto", background: "none", border: "none", padding: "0", color: "inherit", overflow: "visible", width: `${b.width}px`, height: `${b.height}px`, pointerEvents: "none", zIndex: "10000" }), this.document.body.appendChild(c), c.showPopover?.(), s = { sources: [], itemIdentifier: r.itemIdentifier, stackSize: S.stackSize, preview: c, amount: 0 }, o.pointerPosition ??= { x: b.left + b.width / 2, y: b.top + b.height / 2 };
    } let x = s.sources.find(S => S.stash === this && S.index === t), _ = x ? s.sources.map(S => S === x ? T(R({}, S), { amount: S.amount + p }) : S) : [...s.sources, { stash: this, index: t, slot: r, amount: p }]; this.currentState.set(B(this.currentState(), S => { S[t] = r.amount === p ? null : T(R({}, r), { amount: r.amount - p }); })), o.takeOperation.set(T(R({}, s), { sources: _, amount: s.amount + p })); let C = s.preview.querySelector(".item__amount"); C && (C.textContent = String(s.amount + p)), o.positionTakePreview(), o.animateTakePreview(); }
    animateTakePreview() { if (this.takeAnimation?.cancel(), this.takeAnimation = void 0, this.document.defaultView?.matchMedia("(prefers-reduced-motion: reduce)").matches)
        return; let t = this.takeOperation()?.preview.firstElementChild; this.takeAnimation = t?.animate([{ transform: "scale(1, 1)", offset: 0 }, { transform: "scale(1.12, 1.06)", offset: .3 }, { transform: "scale(0.98, 1.03)", offset: .65 }, { transform: "scale(1, 1)", offset: 1 }], { duration: 120, easing: "ease-out" }); }
    moveTakePreview(t) { this.pointerPosition = { x: t.clientX, y: t.clientY }, this.positionTakePreview(); }
    positionTakePreview() { let t = this.takeOperation(), n = this.pointerPosition; if (!t || !n)
        return; let i = t.preview.getBoundingClientRect(); t.preview.style.transform = `translate(${n.x - i.width / 2}px, ${n.y - i.height / 2}px)`, this.clearDropTargets(); let r = this.dropTargetAtPoint(n); r?.stash.dropTargetIndex.set(r.index); }
    dropTakenItems(t) { let n = this.takeOperation(); if (!n || t.button !== 0 || t.target?.closest?.(".context-menu, .cdk-menu, .cdk-overlay-backdrop"))
        return; let r = this.dropTargetAtPoint({ x: t.clientX, y: t.clientY }); if (!r) {
        this.cancelConnectedTake();
        return;
    } let o = r.stash.currentState()[r.index], s = o?.itemIdentifier != null, p = s ? r.stash.slotComponents()[r.index]?.item()?.stackSize : n.stackSize; if (s && o.itemIdentifier !== n.itemIdentifier || p == null || (s ? o.amount : 0) + n.amount > p || n.sources.length === 1 && n.sources[0].stash === r.stash && n.sources[0].index === r.index) {
        this.cancelConnectedTake();
        return;
    } r.stash.currentState.set(B(r.stash.currentState(), x => { x[r.index] = s ? T(R({}, o), { amount: o.amount + n.amount }) : T(R({}, n.sources[0].slot), { amount: n.amount }); })), this.finishTake(), this.changed.emit({ type: "stash-slots-take", sourceStashId: n.sources[0].stash.id(), sourceSlotId: n.sources[0].index, sourceRevision: n.sources[0].stash.revision(), targetStashId: r.stash.id(), targetSlotId: r.index, targetRevision: r.stash.revision(), amount: n.amount }); }
    cancelConnectedTake() { let t = this.takeOwner(), n = t?.takeOperation(); if (!(!t || !n)) {
        for (let i of n.sources)
            i.stash.currentState.set(B(i.stash.currentState(), r => { r[i.index] = i.slot; }));
        t.finishTake();
    } }
    finishTake() { this.takeAnimation?.cancel(), this.takeAnimation = void 0, this.takeOperation()?.preview.remove(), this.takeOperation.set(null), this.clearDropTargets(); }
    cancelSwapAnimation() { this.clearDropTargets(), this.takeAnimation?.cancel(), this.takeAnimation = void 0, this.swapAnimation?.cancel(), this.swapAnimation = void 0, this.swapAnimationCleanup?.(), this.swapAnimationCleanup = void 0; }
    clearDropTargets() { for (let t of new Set([this, ...this.connectedStashes()]))
        t.dropTargetIndex.set(-1), t.activeDrag?.source.getPlaceholderElement()?.classList.remove("drop-target"); }
    dropTargetAtPoint(t, n) { for (let i of new Set([this, ...this.connectedStashes()])) {
        let r = i.slotIndexAtPoint(t, n);
        if (r !== -1)
            return { stash: i, index: r };
    } }
    updateDropTarget({ source: t, pointerPosition: n }) { this.activeDrag && (this.activeDrag.pointerPosition = n), this.highlightDropTarget(n, t); }
    highlightDropTarget(t, n) { if (this.clearDropTargets(), !this.resolveDraggedItem())
        return; let i = this.dropTargetAtPoint(t, n); i?.stash.dropTargetIndex.set(i.index), i?.stash.drags()[i.index] === n && n.getPlaceholderElement().classList.add("drop-target"); }
    release({ source: t, event: n }) { let i = this.resolveDraggedItem(); if (!i)
        return; let r = "changedTouches" in n ? n.changedTouches[0] : n; if (!r)
        return; let o = this.dropTargetAtPoint({ x: r.clientX, y: r.clientY }, t), s = t.getPlaceholderElement(), p = i.stash.drags()[i.index], x = (p === t ? s : p?.getRootElement())?.getBoundingClientRect() ?? s.getBoundingClientRect(), _ = o?.stash.drags()[o.index], C = _ === t ? s : _?.getRootElement(), S = C?.getBoundingClientRect() ?? x, D = t.getRootElement().ownerDocument.querySelector(`.cdk-drag-preview.stash-drag-preview-${this.id()}`), b = D?.getBoundingClientRect(), c = b ? Math.hypot(S.left - b.left, S.top - b.top) : 0, m = window.matchMedia("(prefers-reduced-motion: reduce)").matches || c <= 1 ? 0 : Math.min(180, Math.ceil(c * 4)); if (D?.style.setProperty("--stash-drop-duration", `${m}ms`), !C || (s.style.transform = `translate(${S.left - x.left}px, ${S.top - x.top}px)`, s.style.visibility = "hidden", m === 0 || !o || i.stash.stackTransferAmount(i.index, o.stash, o.index) !== void 0 || o.stash.currentState()[o.index]?.itemIdentifier == null))
        return; let f = C.firstElementChild; if (!f)
        return; let g = f; if (o.stash !== this) {
        g = f.cloneNode(!0);
        let y = f.getBoundingClientRect();
        Object.assign(g.style, { position: "fixed", left: `${y.left}px`, top: `${y.top}px`, width: `${y.width}px`, height: `${y.height}px`, margin: "0", pointerEvents: "none", zIndex: "1000" }), C.closest("app-inventory-stash")?.parentElement?.appendChild(g);
        let M = f.style.visibility;
        f.style.visibility = "hidden", this.swapAnimationCleanup = () => { f.style.visibility = M, g.remove(); };
    } this.swapAnimation = g.animate([{ transform: "translate(0, 0)" }, { transform: `translate(${x.left - S.left}px, ${x.top - S.top}px)` }], { duration: m, easing: "cubic-bezier(0.2, 0, 0, 1)", fill: "forwards" }); }
    slotIndexAtPoint(t, n) { return this.drags().findIndex(i => { let o = (i === n || i === this.activeDrag?.source ? i.getPlaceholderElement() : i.getRootElement()).getBoundingClientRect(); return t.x >= o.left && t.x < o.right && t.y >= o.top && t.y < o.bottom; }); }
    stackTransferAmount(t, n, i) { let r = this.currentState()[t], o = n.currentState()[i]; if (r?.itemIdentifier == null || !o || r.itemIdentifier !== o.itemIdentifier)
        return; let s = this.slotComponents()[t]?.item(), p = n.slotComponents()[i]?.item(); if (!(!s || !p || r.amount >= s.stackSize) && !(o.amount >= p.stackSize))
        return Math.max(0, Math.min(r.amount, p.stackSize - o.amount)); }
    drop(t) { this.cancelSwapAnimation(); let n = this.resolveDraggedItem(); if (this.activeDrag = void 0, !n)
        return; let { stash: i, index: r } = n, { previousContainer: o, container: s, dropPoint: p } = t; if (o !== s)
        return; let x = this.dropTargetAtPoint(p); if (!x)
        return; let { stash: _, index: C } = x; if (_ === i && C === r)
        return; let S = i.stackTransferAmount(r, _, C); if (S !== void 0) {
        if (S === 0)
            return;
        let b = i.currentState()[r], c = _.currentState()[C];
        if (!b || !c)
            return;
        let h = b.amount - S, m = T(R({}, c), { amount: c.amount + S }), f = B(i.currentState(), g => { g[r] = h === 0 ? null : T(R({}, b), { amount: h }), _ === i && (g[C] = m); });
        _ !== i && _.currentState.set(B(_.currentState(), g => { g[C] = m; })), i.currentState.set(f), this.changed.emit({ type: _ === i ? "same-stash-slot-transfer" : "cross-stash-slot-transfer", sourceStashId: i.id(), targetStashId: _ === i ? null : _.id(), sourceSlotId: r, targetSlotId: C, sourceRevision: i.revision(), targetRevision: _ === i ? null : _.revision(), amount: S });
        return;
    } if (_ !== i) {
        let b = i.currentState()[r];
        if (b?.itemIdentifier == null)
            return;
        let c = _.currentState()[C], h = B(i.currentState(), f => { f[r] = c; }), m = B(_.currentState(), f => { f[C] = b; });
        if (h === i.currentState() && m === _.currentState())
            return;
        i.currentState.set(h), _.currentState.set(m), this.changed.emit({ type: "cross-stash-slot-swap", sourceStashId: i.id(), targetStashId: _.id(), sourceSlotId: r, targetSlotId: C, sourceRevision: i.revision(), targetRevision: _.revision() });
        return;
    } let D = B(i.currentState(), b => { [b[r], b[C]] = [b[C], b[r]]; }); D !== i.currentState() && (i.currentState.set(D), this.changed.emit({ type: "same-stash-slot-swap", sourceStashId: i.id(), targetStashId: null, sourceSlotId: r, targetSlotId: C, sourceRevision: i.revision(), targetRevision: null })); }
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275cmp = l.\u0275\u0275defineComponent({ type: e, selectors: [["app-inventory-stash"]], viewQuery: function (n, i) { n & 1 && l.\u0275\u0275viewQuerySignal(i.drags, Te, 5)(i.slotComponents, Q, 5), n & 2 && l.\u0275\u0275queryAdvance(2); }, hostBindings: function (n, i) { n & 1 && l.\u0275\u0275listener("pointermove", function (o) { return i.moveTakePreview(o); }, l.\u0275\u0275resolveDocument)("pointerdown", function (o) { return i.moveTakePreview(o); }, l.\u0275\u0275resolveDocument)("click", function (o) { return i.dropTakenItems(o); }, l.\u0275\u0275resolveDocument)("keydown.escape", function () { return i.cancelConnectedTake(); }, l.\u0275\u0275resolveDocument); }, inputs: { id: [1, "id"], type: [1, "type"], confirmedState: [1, "confirmedState"], maxSlots: [1, "maxSlots"], maxWeight: [1, "maxWeight"], revision: [1, "revision"], orientation: [1, "orientation"], connectedStashes: [1, "connectedStashes"] }, outputs: { confirmedState: "confirmedStateChange", revision: "revisionChange", changed: "changed" }, decls: 6, vars: 3, consts: [["cdkDropList", "", 1, "list", 3, "cdkDropListDropped", "cdkDropListData", "cdkDropListOrientation", "cdkDropListSortingDisabled"], ["aria-hidden", "true", 1, "list__background"], [1, "list__background-item"], ["cdkDrag", "", 1, "list__item", 3, "cdkDragDisabled", "cdkDragPreviewClass", "drop-target", "take-dimmed", "drag-disabled", "blank"], ["cdkDrag", "", 1, "list__item", 3, "cdkDragStarted", "cdkDragMoved", "cdkDragReleased", "cdkDragEnded", "cdkDragDisabled", "cdkDragPreviewClass"], [1, "list__slot", 3, "takeOneRequested", "takeHalfRequested", "slot"]], template: function (n, i) { n & 1 && (l.\u0275\u0275elementStart(0, "div", 0), l.\u0275\u0275listener("cdkDropListDropped", function (o) { return i.drop(o); }), l.\u0275\u0275elementStart(1, "div", 1), l.\u0275\u0275repeaterCreate(2, tn, 1, 0, "div", 2, l.\u0275\u0275repeaterTrackByIndex), l.\u0275\u0275elementEnd(), l.\u0275\u0275repeaterCreate(4, nn, 2, 11, "div", 3, l.\u0275\u0275repeaterTrackByIndex), l.\u0275\u0275elementEnd()), n & 2 && (l.\u0275\u0275property("cdkDropListData", i.currentState())("cdkDropListOrientation", i.orientation())("cdkDropListSortingDisabled", !0), l.\u0275\u0275advance(2), l.\u0275\u0275repeater(i.currentState()), l.\u0275\u0275advance(2), l.\u0275\u0275repeater(i.currentState())); }, dependencies: [Q, $t, Te], styles: ['.list[_ngcontent-%COMP%]{position:relative;isolation:isolate;display:flex;flex-wrap:wrap;align-content:flex-start;width:100%;max-width:100%;gap:var(--%NS%slot-gap);padding:var(--%NS%list-padding);margin-left:calc(0px - var(--%NS%list-padding));margin-top:calc(0px - var(--%NS%list-padding));min-height:60px;overflow:hidden;box-sizing:border-box}.list__background[_ngcontent-%COMP%]{position:absolute;inset:0;z-index:0;display:flex;flex-wrap:wrap;align-content:flex-start;gap:var(--%NS%slot-gap);padding:var(--%NS%list-padding);box-sizing:border-box;pointer-events:none}.list__background-item[_ngcontent-%COMP%]{border-radius:1px;width:var(--%NS%slot-size);height:var(--%NS%slot-size);flex-shrink:0;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAiCAYAAADRcLDBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAG1mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTAxLTI3VDEzOjI2OjI1KzAyOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTAxLTI3VDEzOjI2OjI1KzAyOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0wMS0yN1QxMzoyNjoyNSswMjowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpmMDVkZTI5MS03YTA1LTc2NDAtYTljMy01MGI2MzE4YzQ4M2UiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpmNGY0ZDMzOS04N2ExLTdkNGEtOGYwNS00NWUwY2M1NTI0ZjUiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyY2Q1NTNiYy0wYzliLTFlNDgtOGUzYy0xNzdlMTZmZGE0MTYiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoyY2Q1NTNiYy0wYzliLTFlNDgtOGUzYy0xNzdlMTZmZGE0MTYiIHN0RXZ0OndoZW49IjIwMjItMDEtMjdUMTM6MjY6MjUrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4yIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZjA1ZGUyOTEtN2EwNS03NjQwLWE5YzMtNTBiNjMxOGM0ODNlIiBzdEV2dDp3aGVuPSIyMDIyLTAxLTI3VDEzOjI2OjI1KzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDxwaG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDxyZGY6QmFnPiA8cmRmOmxpPkIzQjAxNERFRjQxMzg2MzdGM0ZEOUM3OEFBNDA3ODRFPC9yZGY6bGk+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjYxMjlhYWRiLTQ1N2ItMGQ0Ni1iMjRmLTY1MDE4NGYwOTE2MjwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6ZmVmY2M3OGMtYmY0Zi01MTQ1LThhN2UtMzE3MmUwNWUwNThmPC9yZGY6bGk+IDwvcmRmOkJhZz4gPC9waG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+CMN36gAAA7BJREFUWMPtk0lLHFEURl8nJE5RBEPoxJioCYl2d92FCq4V/QmuXCg4C+rGeV45geDGhQOCIs7zPC/cOOCAiij+mtzvUVUpO213VRk1iywOr7vr9ftO3XufGBsbEwsLC2JmZuYeU1NTYnt7W1xeXorl5WX53WvPayaKiWMimVfeZwRifn5ejI+PC2FDAuERzDeGVBQmlgmzImNHAoeHq2Hkhy+qjOOvSVxcXDiWlpYieHPs9PQ0BRDQ8DAxzLtHSXCg2NzcjLy+vo47Pz/3bG1tEYvR5OSkWRHgVisTbkciQh04z9raGp2cnNDt7S2dnZ3RxsYGoSIQsijz1bsyviQc6qY4ddD0MLC+vk6np6d0d3cnV8ihKnhmsU2oTOg9CT4IPQ/hH6O1cF9oYTs7O8TDKitzcHBAKysrepssyjgXFxeDMHuit7fXOTc352YR4jXgARMTE3Ld3d3VZY6Pj2l1dVWKmJkZ5LAAPrv6+vqiRElJibupqYn6+/sVbgtBJtAheHPIzM7OShm+QVLm6OiI+DrrbfL+H/YjHOvg4KDS1tZGtbW18aK4uDihoKCAWIZYRhkYGFC4VwTMyCBQk0Flbm5u6PDwUJdBi/Ac5xnClbq6OqquriZeY0VpaWkCQyxDhYWFhM/Nzc3K0NCQrAzAn83K7O3t6W2CDAYYv+O89vZ2GV5TU4Nwqq+vB78lNFCRoqIiuba2tkoZ9NCMDN4aMti/v79PV1dXcpC7uroUBDY0NGjBRv6UMMqgTagQZEZGRmRl1IHyCSSxBxKQ7+zsVBobG2V4VVUVlZWVyQp4yTwsYZTJz8/HAbKckIEIwowC+I6+43l3d7eC+UJIZWUl5ebmUmZmJqWmpsqzWlparElooEV5eXlUXl5OHR0dyujoqC4D8B3heEsMHN48OzubMjIyKCUlhZKSkig9PZ0qKipwAexJaFXB8KJNkEG5h4eHlZ6eHll2hGPoEJKVlSWDk5OTKS0tjXJycuRz7DM9E4FktNuEcqPPfN/1gyGBULQAK8T4xvkSsC9hlIGEr6nHbwBCD9yKp5fwcyWfV8Ik/yX+PQnXC0vEQ+I98+OFJL4zkZAAQcwHJvGZJH4yUcwbRmgSGsFMNON5Igk342TeIlzDWwI4mBAmJpCMBQkX84kJMob7kzASqsq4bEokMtFMsK9wsxJ+ZfxIJKhv7jfcqoRGGPNZa5MPCZT9IxNiJtyuxD0ZllBUCY/65pbCHyshB5glwlnCyRKhfJjDjgD4BdkNkLqcCag2AAAAAElFTkSuQmCC),linear-gradient(166deg,#000,#090b0d);background-position:center;background-repeat:no-repeat;border:2px solid #1D1E21;box-shadow:0 4px 33.6px -4px #000;box-sizing:border-box}.list__item[_ngcontent-%COMP%]{position:relative;z-index:1;width:var(--%NS%slot-size);height:var(--%NS%slot-size);flex-shrink:0;align-self:flex-start;cursor:pointer}.list__item.drag-disabled[_ngcontent-%COMP%]{cursor:default}.list__item[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:0;z-index:2;border-radius:inherit;background:#0009;pointer-events:none;opacity:0;transition:opacity .12s ease-out}.list__item.take-dimmed[_ngcontent-%COMP%]:after{opacity:1}.list__item.drop-target[_ngcontent-%COMP%]{outline:2px solid #80d8ff;outline-offset:4px;background:#80d8ff30}.list__slot[_ngcontent-%COMP%]{width:100%}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:.25}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform var(--%NS%stash-drop-duration, 0ms) cubic-bezier(.2,0,0,1)}@media(prefers-reduced-motion:reduce){.list__item[_ngcontent-%COMP%]:after, .cdk-drag-animating[_ngcontent-%COMP%]{transition:none}}'] });
};
import { DecimalPipe as rn } from "@angular/common";
import { computed as dt, input as ut } from "@angular/core";
import { MatButtonModule as on } from "@angular/material/button";
import { MatIcon as an } from "@angular/material/icon";
import * as d from "@angular/core";
import * as pt from "@angular/material/button";
var Se = class e {
    title = ut.required();
    stash = ut.required();
    cashAmount = dt(() => this.stash().currentState().reduce((t, n) => t + (n?.itemIdentifier === "armoury-roleplay:cash" ? n.amount : 0), 0));
    slotMetadata = dt(() => this.stash().currentState().reduce((t, n) => ({ occupied: t.occupied + (n != null ? 1 : 0), total: t.total + 1 }), { occupied: 0, total: 0 }));
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275cmp = d.\u0275\u0275defineComponent({ type: e, selectors: [["app-inventory-stash-header"]], inputs: { title: [1, "title"], stash: [1, "stash"] }, decls: 34, vars: 16, consts: [[1, "metadata"], [2, "transform", "scale(0.9) translateY(-50%)", "margin-top", "-1px", "margin-right", "-2px"], [2, "transform", "scale(0.7) translateY(-50%)", "margin-top", "-3px"], [1, "details"], [2, "transform", "scale(0.7) translateY(-50%)", "margin-top", "-3px", "margin-left", "-4px", "left", "0"], [2, "padding-left", "20px"], [1, "actions"], ["matMiniFab", ""], [1, "weight"], [1, "weight__bar"]], template: function (n, i) { if (n & 1 && (d.\u0275\u0275elementStart(0, "h2"), d.\u0275\u0275text(1), d.\u0275\u0275elementEnd(), d.\u0275\u0275elementStart(2, "div", 0)(3, "span")(4, "mat-icon", 1), d.\u0275\u0275text(5, "attach_money"), d.\u0275\u0275elementEnd(), d.\u0275\u0275elementStart(6, "h4"), d.\u0275\u0275text(7), d.\u0275\u0275pipe(8, "number"), d.\u0275\u0275elementEnd()(), d.\u0275\u0275elementStart(9, "span")(10, "mat-icon", 2), d.\u0275\u0275text(11, "inventory_2"), d.\u0275\u0275elementEnd(), d.\u0275\u0275elementStart(12, "h4"), d.\u0275\u0275text(13), d.\u0275\u0275elementEnd()()(), d.\u0275\u0275elementStart(14, "div", 3)(15, "span")(16, "mat-icon", 4), d.\u0275\u0275text(17, "fitness_center"), d.\u0275\u0275elementEnd(), d.\u0275\u0275elementStart(18, "h4", 5), d.\u0275\u0275text(19), d.\u0275\u0275pipe(20, "number"), d.\u0275\u0275pipe(21, "number"), d.\u0275\u0275elementEnd()()(), d.\u0275\u0275elementStart(22, "div", 6)(23, "button", 7)(24, "mat-icon"), d.\u0275\u0275text(25, "merge_type"), d.\u0275\u0275elementEnd()(), d.\u0275\u0275elementStart(26, "button", 7)(27, "mat-icon"), d.\u0275\u0275text(28, "mobiledata_arrows"), d.\u0275\u0275elementEnd()(), d.\u0275\u0275elementStart(29, "button", 7)(30, "mat-icon"), d.\u0275\u0275text(31, "question_mark"), d.\u0275\u0275elementEnd()()(), d.\u0275\u0275elementStart(32, "div", 8), d.\u0275\u0275element(33, "div", 9), d.\u0275\u0275elementEnd()), n & 2) {
            let r = i.stash().weight() / 1e3, o = i.stash().maxWeight() / 1e3;
            d.\u0275\u0275advance(), d.\u0275\u0275textInterpolate(i.title()), d.\u0275\u0275advance(6), d.\u0275\u0275textInterpolate(d.\u0275\u0275pipeBind1(8, 8, i.cashAmount())), d.\u0275\u0275advance(6), d.\u0275\u0275textInterpolate2("", i.slotMetadata().occupied, "/", i.slotMetadata().total), d.\u0275\u0275advance(6), d.\u0275\u0275textInterpolate2(" ", d.\u0275\u0275pipeBind2(20, 10, r, "1.2-2"), "/", d.\u0275\u0275pipeBind2(21, 13, o, "1.0-2"), " KG "), d.\u0275\u0275advance(14), d.\u0275\u0275styleProp("width", r / o * 100 + "%");
        } }, dependencies: [an, on, pt.MatMiniFabButton, rn], styles: ['[_nghost-%COMP%]{width:min(100%,max(var(--%NS%slot-size),round(down,100% - 2 * var(--%NS%list-padding) + var(--%NS%slot-gap),var(--%NS%slot-size) + var(--%NS%slot-gap)) - var(--%NS%slot-gap)));min-width:0;color:#cfcfcf;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));grid-template-rows:repeat(3,auto);grid-template-areas:"title metadata" "details actions" "weight weight";padding-bottom:4px}mat-icon[_ngcontent-%COMP%]{opacity:.6}h2[_ngcontent-%COMP%], h4[_ngcontent-%COMP%]{margin:0}h4[_ngcontent-%COMP%]{font-weight:500}h2[_ngcontent-%COMP%], .metadata[_ngcontent-%COMP%], .details[_ngcontent-%COMP%]{align-items:flex-start}h2[_ngcontent-%COMP%] > span[_ngcontent-%COMP%], .metadata[_ngcontent-%COMP%] > span[_ngcontent-%COMP%], .details[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{position:relative}h2[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .metadata[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .details[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{position:absolute;right:100%;top:50%}h2[_ngcontent-%COMP%]{color:#fff;grid-area:title;text-transform:uppercase;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.metadata[_ngcontent-%COMP%]{padding-top:2px;column-gap:32px;display:flex;grid-area:metadata;justify-content:flex-end}.metadata[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{column-gap:3px;display:flex}.details[_ngcontent-%COMP%]{grid-area:details;margin-top:10px}.actions[_ngcontent-%COMP%]{display:flex;align-items:flex-end;column-gap:8px;grid-area:actions;justify-content:flex-end}.weight[_ngcontent-%COMP%]{grid-area:weight;background:#d9d9d90d;border:1px solid #37383D;border-radius:1px;position:relative;padding:1px;margin:6px 0}.weight__bar[_ngcontent-%COMP%]{max-width:100%;height:4px;border-radius:1px;background:#6983c7;transition:width .2s ease-in-out}'] });
};
import * as u from "@angular/core";
var V = class e {
    stashes = ln(X);
    data = sn(dn);
    changed = cn();
    updateRevision(t, n) { for (let i of this.stashes())
        i.id() === t && i.confirmRevision(n); }
    onChanged(t) { this.changed.emit(t); }
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275cmp = u.\u0275\u0275defineComponent({ type: e, selectors: [["ng-component"]], viewQuery: function (n, i) { n & 1 && u.\u0275\u0275viewQuerySignal(i.stashes, X, 5), n & 2 && u.\u0275\u0275queryAdvance(); }, hostAttrs: [2, "--slot-size", "84px", "--slot-gap", "12px", "--list-padding", "32px"], outputs: { changed: "changed" }, decls: 9, vars: 16, consts: [["quickUseStash", ""], ["mainStash", ""], [1, "stash__mine"], ["title", "(N-T) Buzunare", 3, "stash"], [3, "confirmedStateChange", "changed", "id", "type", "maxSlots", "maxWeight", "revision", "confirmedState", "connectedStashes"], ["title", "(N-T) Rucsac", 3, "stash"], [1, "stash__principal"], [1, "stash__extras"]], template: function (n, i) { if (n & 1) {
            let r = u.\u0275\u0275getCurrentView();
            u.\u0275\u0275elementStart(0, "div", 2), u.\u0275\u0275element(1, "app-inventory-stash-header", 3), u.\u0275\u0275elementStart(2, "app-inventory-stash", 4, 0), u.\u0275\u0275twoWayListener("confirmedStateChange", function (s) { return u.\u0275\u0275restoreView(r), u.\u0275\u0275twoWayBindingSet(i.data.stashes.character_quick_use.slots, s) || (i.data.stashes.character_quick_use.slots = s), u.\u0275\u0275resetView(s); }), u.\u0275\u0275listener("changed", function (s) { return i.onChanged(s); }), u.\u0275\u0275elementEnd(), u.\u0275\u0275element(4, "app-inventory-stash-header", 5), u.\u0275\u0275elementStart(5, "app-inventory-stash", 4, 1), u.\u0275\u0275twoWayListener("confirmedStateChange", function (s) { return u.\u0275\u0275restoreView(r), u.\u0275\u0275twoWayBindingSet(i.data.stashes.character_main.slots, s) || (i.data.stashes.character_main.slots = s), u.\u0275\u0275resetView(s); }), u.\u0275\u0275listener("changed", function (s) { return i.onChanged(s); }), u.\u0275\u0275elementEnd()(), u.\u0275\u0275element(7, "div", 6)(8, "div", 7);
        } if (n & 2) {
            let r = u.\u0275\u0275reference(3), o = u.\u0275\u0275reference(6);
            u.\u0275\u0275advance(), u.\u0275\u0275property("stash", r), u.\u0275\u0275advance(), u.\u0275\u0275property("id", i.data.stashes.character_quick_use.id)("type", i.data.stashes.character_quick_use.type)("maxSlots", i.data.stashes.character_quick_use.maxSlots)("maxWeight", i.data.stashes.character_quick_use.maxWeight)("revision", 0), u.\u0275\u0275twoWayProperty("confirmedState", i.data.stashes.character_quick_use.slots), u.\u0275\u0275property("connectedStashes", i.stashes()), u.\u0275\u0275advance(2), u.\u0275\u0275property("stash", o), u.\u0275\u0275advance(), u.\u0275\u0275property("id", i.data.stashes.character_main.id)("type", i.data.stashes.character_main.type)("maxSlots", i.data.stashes.character_main.maxSlots)("maxWeight", i.data.stashes.character_main.maxWeight)("revision", 0), u.\u0275\u0275twoWayProperty("confirmedState", i.data.stashes.character_main.slots), u.\u0275\u0275property("connectedStashes", i.stashes());
        } }, dependencies: [X, Se], styles: ['[_nghost-%COMP%]{display:grid;grid-template-columns:repeat(3,minmax(0,min(33.333333%,480px)));grid-template-rows:minmax(0,1fr);justify-content:center;height:100%;min-height:0;overflow:hidden;padding-top:6vh}.stash__mine[_ngcontent-%COMP%], .stash__principal[_ngcontent-%COMP%], .stash__extras[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-width:0;min-height:0}.stash__mine[_ngcontent-%COMP%]{padding-left:30px;position:relative}.stash__mine[_ngcontent-%COMP%]:after{font-family:Big Shoulders,sans-serif;content:"INVENTAR";position:absolute;color:#ffffff0d;font-size:142px;font-weight:900;z-index:-1;left:calc(var(--%NS%list-padding) - 6px);top:calc(10px - var(--%NS%list-padding))}.stash__extras[_ngcontent-%COMP%]{padding-right:30px}'] });
};
import * as gt from "@angular/core";
Je();
var ht = class e {
    dialog = mt(un);
    http = mt(pn);
    handleMessage(t) { switch (ft() && console.log("Received message", t), t.type) {
        case "inventory:my-stash:open":
            this.openInventory(t);
            break;
        case "global:stash:revision:new":
            this.receiveNewRevision(t);
            break;
        case "global:stash:resync":
            this.receivePendingChanges(t);
            break;
        case "global:stash:reset":
            this.receiveConfirmedStateForReplace(t);
            break;
    } }
    openInventory(t) { if (this.dialog.openDialogs.some(i => i.componentInstance instanceof V))
        return; let n = this.dialog.open(V, { width: "100%", maxWidth: "100%", height: "100%", maxHeight: "100%", backdropClass: "dialog__backdrop--harder", panelClass: "dialog__no-default-background", data: t }); mn(n.componentInstance.changed).pipe(vn(i => console.log("Some changes have been made:", i)), _n(() => !ft()), hn(i => this.http.post("https://armoury-roleplay/onStashChanges", i).pipe(fn(r => (console.error("(onChange) NUI request failed:", r), gn)))), yn(n.afterClosed())).subscribe(); }
    receiveNewRevision({ revision: t, stashId: n }) { console.log(`Received new revision (${t}) for stash (id: ${n})`); for (let i of this.dialog.openDialogs)
        i.componentInstance instanceof V && i.componentInstance.updateRevision(n, t); }
    receivePendingChanges({ stashId: t, patches: n, revision: i }) { for (let r of this.dialog.openDialogs)
        if (r.componentInstance instanceof V) {
            for (let o of r.componentInstance.stashes())
                if (o.id() === t) {
                    console.log("Stash resync", JSON.stringify({ stashId: t, currentRevision: o.revision(), incomingRevision: i, state: o.confirmedState(), patches: n }));
                    let s = Xe({ slots: o.confirmedState() }, n);
                    o.replaceConfirmedState(s.slots, i);
                }
        } }
    receiveConfirmedStateForReplace({ stash: t, revision: n }) { for (let i of this.dialog.openDialogs)
        if (i.componentInstance instanceof V)
            for (let r of i.componentInstance.stashes())
                r.id() === t.id && r.replaceConfirmedState(t.slots, n); }
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275prov = gt.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac, providedIn: "root" });
};
export { ht as NuiHandler };
