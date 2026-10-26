import { a as Ee } from "@nf-internal/chunk-FTHT4BYA";
import { MatDialog as At } from "@angular/material/dialog";
import { HttpClient as Ot } from "@angular/common/http";
import { inject as Ke, isDevMode as Xe } from "@angular/core";
import { outputToObservable as Rt } from "@angular/core/rxjs-interop";
import { catchError as Tt, concatMap as Nt, EMPTY as zt, filter as Ft, takeUntil as Lt, tap as Vt } from "rxjs";
var Me = Symbol.for("immer-nothing"), G = Symbol.for("immer-draftable"), C = Symbol.for("immer-state");
function M(e, ...t) { throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`); }
var x = Object, L = x.getPrototypeOf, Q = "constructor", J = "prototype", ye = "configurable", oe = "enumerable", re = "writable", Y = "value", R = e => !!e && !!e[C];
function k(e) { return e ? Le(e) || j(e) || !!e[G] || !!e[Q]?.[G] || ee(e) || W(e) : !1; }
var je = x[J][Q].toString(), Ae = new WeakMap;
function Le(e) { if (!e || !H(e))
    return !1; let t = L(e); if (t === null || t === x[J])
    return !0; let n = x.hasOwnProperty.call(t, Q) && t[Q]; if (n === Object)
    return !0; if (!F(n))
    return !1; let r = Ae.get(n); return r === void 0 && (r = Function.toString.call(n), Ae.set(n, r)), r === je; }
function Z(e, t, n = !0) { V(e) === 0 ? (n ? Reflect.ownKeys(e) : x.keys(e)).forEach(i => { t(i, e[i], e); }) : e.forEach((r, i) => t(i, r, e)); }
function V(e) { let t = e[C]; return t ? t.type_ : j(e) ? 1 : ee(e) ? 2 : W(e) ? 3 : 0; }
var B = (e, t, n = V(e)) => n === 2 ? e.has(t) : x[J].hasOwnProperty.call(e, t), A = (e, t, n = V(e)) => n === 2 ? e.get(t) : e[t], se = (e, t, n, r = V(e)) => { r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : e[t] = n; };
function et(e, t) { return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t; }
var j = Array.isArray, ee = e => e instanceof Map, W = e => e instanceof Set, H = e => typeof e == "object", F = e => typeof e == "function", me = e => typeof e == "boolean";
function tt(e) { let t = +e; return Number.isInteger(t) && String(t) === e; }
var nt = e => H(e) ? e?.[C] : null, O = e => e.copy_ || e.base_;
var Pe = e => e.modified_ ? e.copy_ : e.base_;
function Se(e, t) { if (ee(e))
    return new Map(e); if (W(e))
    return new Set(e); if (j(e))
    return Array[J].slice.call(e); let n = Le(e); if (t === !0 || t === "class_only" && !n) {
    let r = x.getOwnPropertyDescriptors(e);
    delete r[C];
    let i = Reflect.ownKeys(r);
    for (let o = 0; o < i.length; o++) {
        let d = i[o], c = r[d];
        c[re] === !1 && (c[re] = !0, c[ye] = !0), (c.get || c.set) && (r[d] = { [ye]: !0, [re]: !0, [oe]: c[oe], [Y]: e[d] });
    }
    return x.create(L(e), r);
}
else {
    let r = L(e);
    if (r !== null && n)
        return Ee({}, e);
    let i = x.create(r);
    return x.assign(i, e);
} }
function Ie(e, t = !1) { return fe(e) || R(e) || !k(e) || (V(e) > 1 && x.defineProperties(e, { set: ne, add: ne, clear: ne, delete: ne }), x.freeze(e), t && Z(e, (n, r) => { Ie(r, !0); }, !1)), e; }
function rt() { M(2); }
var ne = { [Y]: rt };
function fe(e) { return e === null || !H(e) ? !0 : x.isFrozen(e); }
var ae = "MapSet", ce = "Patches", Oe = "ArrayMethods", le = {};
function U(e) { let t = le[e]; return t || M(0, e), t; }
var Re = e => !!le[e];
function it(e, t) { le[e] || (le[e] = t); }
var K, Ve = () => K, ot = (e, t) => ({ drafts_: [], parent_: e, immer_: t, canAutoFreeze_: !0, unfinalizedDrafts_: 0, handledSet_: new Set, processedForPatches_: new Set, mapSetPlugin_: Re(ae) ? U(ae) : void 0, arrayMethodsPlugin_: Re(Oe) ? U(Oe) : void 0 });
function Te(e, t) { t && (e.patchPlugin_ = U(ce), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t); }
function ve(e) { be(e), e.drafts_.forEach(st), e.drafts_ = null; }
function be(e) { e === K && (K = e.parent_); }
var Ne = e => K = ot(K, e);
function st(e) { let t = e[C]; t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0; }
function ze(e, t) { t.unfinalizedDrafts_ = t.drafts_.length; let n = t.drafts_[0]; if (e !== void 0 && e !== n) {
    n[C].modified_ && (ve(t), M(4)), k(e) && (e = Fe(t, e));
    let { patchPlugin_: i } = t;
    i && i.generateReplacementPatches_(n[C].base_, e, t);
}
else
    e = Fe(t, n); return at(t, e, !0), ve(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== Me ? e : void 0; }
function Fe(e, t) { if (fe(t))
    return t; let n = t[C]; if (!n)
    return de(t, e.handledSet_, e); if (!pe(n, e))
    return t; if (!n.modified_)
    return n.base_; if (!n.finalized_) {
    let { callbacks_: r } = n;
    if (r)
        for (; r.length > 0;)
            r.pop()(e);
    Be(n, e);
} return n.copy_; }
function at(e, t, n = !1) { !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Ie(t, n); }
function Ue(e) { e.finalized_ = !0, e.scope_.unfinalizedDrafts_--; }
var pe = (e, t) => e.scope_ === t, ct = [];
function $e(e, t, n, r) { let i = O(e), o = e.type_; if (r !== void 0 && A(i, r, o) === t) {
    se(i, r, n, o);
    return;
} if (!e.draftLocations_) {
    let c = e.draftLocations_ = new Map;
    Z(i, (g, D) => { if (R(D)) {
        let b = c.get(D) || [];
        b.push(g), c.set(D, b);
    } });
} let d = e.draftLocations_.get(t) ?? ct; for (let c of d)
    se(i, c, n, o); }
function lt(e, t, n) { e.callbacks_.push(function (i) { let o = t; if (!o || !pe(o, i))
    return; i.mapSetPlugin_?.fixSetContents(o); let d = Pe(o); $e(e, o.draft_ ?? o, d, n), Be(o, i); }); }
function Be(e, t) { if (e.modified_ && !e.finalized_ && (e.type_ === 3 || e.type_ === 1 && e.allIndicesReassigned_ || (e.assigned_?.size ?? 0) > 0)) {
    let { patchPlugin_: r } = t;
    if (r) {
        let i = r.getPath(e);
        i && r.generatePatches_(e, i, t);
    }
    Ue(e);
} }
function dt(e, t, n) { let { scope_: r } = e; if (R(n)) {
    let i = n[C];
    pe(i, r) && i.callbacks_.push(function () { ie(e); let d = Pe(i); $e(e, n, d, t); });
}
else
    k(n) && e.callbacks_.push(function () { let o = O(e); e.type_ === 3 ? o.has(n) && de(n, r.handledSet_, r) : A(o, t, e.type_) === n && r.drafts_.length > 1 && (e.assigned_.get(t) ?? !1) === !0 && e.copy_ && de(A(e.copy_, t, e.type_), r.handledSet_, r); }); }
function de(e, t, n) { return !n.immer_.autoFreeze_ && n.unfinalizedDrafts_ < 1 || R(e) || t.has(e) || !k(e) || fe(e) || (t.add(e), Z(e, (r, i) => { if (R(i)) {
    let o = i[C];
    if (pe(o, n)) {
        let d = Pe(o);
        se(e, r, d, e.type_), Ue(o);
    }
}
else
    k(i) && de(i, t, n); })), e; }
function ut(e, t) { let n = j(e), r = { type_: n ? 1 : 0, scope_: t ? t.scope_ : Ve(), modified_: !1, finalized_: !1, assigned_: void 0, parent_: t, base_: e, draft_: null, copy_: null, revoke_: null, isManual_: !1, callbacks_: void 0 }, i = r, o = ue; n && (i = [r], o = X); let { revoke: d, proxy: c } = Proxy.revocable(i, o); return r.draft_ = c, r.revoke_ = d, [c, r]; }
var ue = { get(e, t) { if (t === C)
        return e; let n = e.scope_.arrayMethodsPlugin_, r = e.type_ === 1 && typeof t == "string"; if (r && n?.isArrayOperationMethod(t))
        return n.createMethodInterceptor(e, t); let i = O(e); if (!B(i, t, e.type_))
        return pt(e, i, t); let o = i[t]; if (e.finalized_ || !k(o) || r && e.operationMethod && n?.isMutatingArrayMethod(e.operationMethod) && tt(t))
        return o; if (o === ge(e.base_, t) || ft(e, t, o)) {
        ie(e);
        let d = e.type_ === 1 ? +t : t, c = De(e.scope_, o, e, d);
        return e.copy_[d] = c;
    } return o; }, has(e, t) { return t in O(e); }, ownKeys(e) { return Reflect.ownKeys(O(e)); }, set(e, t, n) { let r = He(O(e), t); if (r?.set)
        return r.set.call(e.draft_, n), !0; if (!e.modified_) {
        let i = ge(O(e), t), o = i?.[C];
        if (o && o.base_ === n)
            return e.copy_[t] = n, e.assigned_.delete(t), !0;
        if (et(n, i) && (n !== void 0 || B(e.base_, t, e.type_)))
            return !0;
        ie(e), Ce(e);
    } return e.copy_[t] === n && (n !== void 0 || B(e.copy_, t, e.type_)) || Number.isNaN(n) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = n, e.assigned_.set(t, !0), dt(e, t, n)), !0; }, deleteProperty(e, t) { return ie(e), ge(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_.set(t, !1), Ce(e)) : e.assigned_.delete(t), e.copy_ && delete e.copy_[t], !0; }, getOwnPropertyDescriptor(e, t) { let n = O(e), r = Reflect.getOwnPropertyDescriptor(n, t); return r && { [re]: !0, [ye]: e.type_ !== 1 || t !== "length", [oe]: r[oe], [Y]: n[t] }; }, defineProperty() { M(11); }, getPrototypeOf(e) { return L(e.base_); }, setPrototypeOf() { M(12); } }, X = {};
for (let e in ue) {
    let t = ue[e];
    X[e] = function () { let n = arguments; return n[0] = n[0][0], t.apply(this, n); };
}
X.deleteProperty = function (e, t) { return X.set.call(this, e, t, void 0); };
X.set = function (e, t, n) { return ue.set.call(this, e[0], t, n, e[0]); };
function ge(e, t) { let n = e[C]; return (n ? O(n) : e)[t]; }
function ft(e, t, n) { return e.type_ !== 1 || !e.allIndicesReassigned_ || !k(n) || n[C] ? !1 : e.baseRefs_.has(n); }
function pt(e, t, n) { let r = He(t, n); return r ? Y in r ? r[Y] : r.get?.call(e.draft_) : void 0; }
function He(e, t) { if (!(t in e))
    return; let n = L(e); for (; n;) {
    let r = Object.getOwnPropertyDescriptor(n, t);
    if (r)
        return r;
    n = L(n);
} }
function Ce(e) { e.modified_ || (e.modified_ = !0, e.parent_ && Ce(e.parent_)); }
function ie(e) { e.copy_ || (e.assigned_ = new Map, e.copy_ = Se(e.base_, e.scope_.immer_.useStrictShallowCopy_)); }
var ht = class {
    constructor(e) { this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.useStrictIteration_ = !1, this.produce = (t, n, r) => { if (F(t) && !F(n)) {
        let o = n;
        n = t;
        let d = this;
        return function (g = o, ...D) { return d.produce(g, b => n.call(this, b, ...D)); };
    } F(n) || M(6), r !== void 0 && !F(r) && M(7); let i; if (k(t)) {
        let o = Ne(this), d = De(o, t, void 0), c = !0;
        try {
            i = n(d), c = !1;
        }
        finally {
            c ? ve(o) : be(o);
        }
        return Te(o, r), ze(i, o);
    }
    else if (!t || !H(t)) {
        if (i = n(t), i === void 0 && (i = t), i === Me && (i = void 0), this.autoFreeze_ && Ie(i, !0), r) {
            let o = [], d = [];
            U(ce).generateReplacementPatches_(t, i, { patches_: o, inversePatches_: d }), r(o, d);
        }
        return i;
    }
    else
        M(1, t); }, this.produceWithPatches = (t, n) => { if (F(t))
        return (d, ...c) => this.produceWithPatches(d, g => t(g, ...c)); let r, i; return [this.produce(t, n, (d, c) => { r = d, i = c; }), r, i]; }, me(e?.autoFreeze) && this.setAutoFreeze(e.autoFreeze), me(e?.useStrictShallowCopy) && this.setUseStrictShallowCopy(e.useStrictShallowCopy), me(e?.useStrictIteration) && this.setUseStrictIteration(e.useStrictIteration); }
    createDraft(e) { k(e) || M(8), R(e) && (e = _t(e)); let t = Ne(this), n = De(t, e, void 0); return n[C].isManual_ = !0, be(t), n; }
    finishDraft(e, t) { let n = e && e[C]; (!n || !n.isManual_) && M(9); let { scope_: r } = n; return Te(r, t), ze(void 0, r); }
    setAutoFreeze(e) { this.autoFreeze_ = e; }
    setUseStrictShallowCopy(e) { this.useStrictShallowCopy_ = e; }
    setUseStrictIteration(e) { this.useStrictIteration_ = e; }
    shouldUseStrictIteration() { return this.useStrictIteration_; }
    applyPatches(e, t) { let n; for (n = t.length - 1; n >= 0; n--) {
        let i = t[n];
        if (i.path.length === 0 && i.op === "replace") {
            e = i.value;
            break;
        }
    } n > -1 && (t = t.slice(n + 1)); let r = U(ce).applyPatches_; return R(e) ? r(e, t) : this.produce(e, i => r(i, t)); }
};
function De(e, t, n, r) { let [i, o] = ee(t) ? U(ae).proxyMap_(t, n) : W(t) ? U(ae).proxySet_(t, n) : ut(t, n); return (n?.scope_ ?? Ve()).drafts_.push(i), o.callbacks_ = n?.callbacks_ ?? [], o.key_ = r, n && r !== void 0 ? lt(n, o, r) : o.callbacks_.push(function (g) { g.mapSetPlugin_?.fixSetContents(o); let { patchPlugin_: D } = g; o.modified_ && D && D.generatePatches_(o, [], g); }), i; }
function _t(e) { return R(e) || M(10, e), We(e); }
function We(e) { if (!k(e) || fe(e))
    return e; let t = e[C], n, r = !0; if (t) {
    if (!t.modified_)
        return t.base_;
    t.finalized_ = !0, n = Se(e, t.scope_.immer_.useStrictShallowCopy_), r = t.scope_.immer_.shouldUseStrictIteration();
}
else
    n = Se(e, !0); let i = n; return W(n) && (n = new Set), Z(i, (o, d) => { se(n, o, We(d)); }, r), t && (t.finalized_ = !1), n; }
function qe() { function t(s, f = []) { if (s.key_ !== void 0) {
    let u = s.parent_.copy_ ?? s.parent_.base_, h = nt(A(u, s.key_)), _ = A(u, s.key_);
    if (_ === void 0 || _ !== s.draft_ && _ !== s.copy_ || h != null && h.base_ !== s.base_)
        return null;
    let m = s.parent_.type_ === 3, y;
    if (m) {
        let S = s.parent_;
        y = Array.from(S.drafts_.keys()).indexOf(s.key_);
    }
    else
        y = s.key_;
    if (!(m && u.size > y || B(u, y)) || s.parent_.type_ === 1 && s.parent_.allIndicesReassigned_)
        return null;
    f.push(y);
} if (s.parent_)
    return t(s.parent_, f); f.reverse(); try {
    n(s.copy_, f);
}
catch {
    return null;
} return f; } function n(s, f) { let u = s; for (let h = 0; h < f.length - 1; h++) {
    let _ = f[h];
    if (u = A(u, _), !H(u) || u === null)
        throw new Error(`Cannot resolve path at '${f.join("/")}'`);
} return u; } let r = "replace", i = "add", o = "remove"; function d(s, f, u) { if (s.scope_.processedForPatches_.has(s))
    return; s.scope_.processedForPatches_.add(s); let { patches_: h, inversePatches_: _ } = u; switch (s.type_) {
    case 0:
    case 2: return g(s, f, h, _);
    case 1: return c(s, f, h, _);
    case 3: return D(s, f, h, _);
} } function c(s, f, u, h) { let { base_: _, assigned_: m } = s, y = s.copy_; y.length < _.length && ([_, y] = [y, _], [u, h] = [h, u]); let S = s.allIndicesReassigned_ === !0; for (let p = 0; p < _.length; p++) {
    let P = y[p], T = _[p];
    if ((S || m?.get(p.toString())) && P !== T) {
        let N = P?.[C];
        if (N && N.modified_)
            continue;
        let ke = f.concat([p]);
        u.push({ op: r, path: ke, value: I(P) }), h.push({ op: r, path: ke, value: I(T) });
    }
} for (let p = _.length; p < y.length; p++) {
    let P = f.concat([p]);
    u.push({ op: i, path: P, value: I(y[p]) });
} for (let p = y.length - 1; _.length <= p; --p) {
    let P = f.concat([p]);
    h.push({ op: o, path: P });
} } function g(s, f, u, h) { let { base_: _, copy_: m, type_: y } = s; Z(s.assigned_, (S, p) => { let P = A(_, S, y), T = A(m, S, y), w = p ? B(_, S) ? r : i : o; if (P === T && w === r)
    return; let N = f.concat(S); u.push(w === o ? { op: w, path: N } : { op: w, path: N, value: I(T) }), h.push(w === i ? { op: o, path: N } : w === o ? { op: i, path: N, value: I(P) } : { op: r, path: N, value: I(P) }); }); } function D(s, f, u, h) { let { base_: _, copy_: m } = s, y = 0; _.forEach(S => { if (!m.has(S)) {
    let p = f.concat([y]);
    u.push({ op: o, path: p, value: S }), h.unshift({ op: i, path: p, value: S });
} y++; }), y = 0, m.forEach(S => { if (!_.has(S)) {
    let p = f.concat([y]);
    u.push({ op: i, path: p, value: S }), h.unshift({ op: o, path: p, value: S });
} y++; }); } function b(s, f, u) { let { patches_: h, inversePatches_: _ } = u; h.push({ op: r, path: [], value: f === Me ? void 0 : f }), _.push({ op: r, path: [], value: s }); } function $(s, f) { return f.forEach(u => { let { path: h, op: _ } = u, m = s; for (let P = 0; P < h.length - 1; P++) {
    let T = V(m), w = h[P];
    typeof w != "string" && typeof w != "number" && (w = "" + w), (T === 0 || T === 1) && (w === "__proto__" || w === Q) && M(19), F(m) && w === J && M(19), m = A(m, w), (m === null || !H(m)) && M(18, h.join("/"));
} let y = V(m), S = E(u.value), p = h[h.length - 1]; switch (_) {
    case r: switch (y) {
        case 2: return m.set(p, S);
        case 3: M(16);
        default: return m[p] = S;
    }
    case i: switch (y) {
        case 1: return p === "-" ? m.push(S) : m.splice(p, 0, S);
        case 2: return m.set(p, S);
        case 3: return m.add(S);
        default: return m[p] = S;
    }
    case o: switch (y) {
        case 1: return m.splice(p, 1);
        case 2: return m.delete(p);
        case 3: return m.delete(u.value);
        default: return delete m[p];
    }
    default: M(17, _);
} }), s; } function E(s) { if (!k(s))
    return s; if (j(s))
    return s.map(E); if (ee(s))
    return new Map(Array.from(s.entries()).map(([u, h]) => [u, E(h)])); if (W(s))
    return new Set(Array.from(s).map(E)); let f = Object.create(L(s)); for (let u in s)
    f[u] = E(s[u]); return B(s, G) && (f[G] = s[G]), f; } function I(s) { return R(s) ? E(s) : s; } it(ce, { applyPatches_: $, generatePatches_: d, generateReplacementPatches_: b, getPath: t }); }
var mt = globalThis.Iterator, $t = typeof mt?.from == "function";
var we = new ht, he = we.produce;
var Ge = we.applyPatches.bind(we);
import { inject as It, output as xt, viewChildren as kt } from "@angular/core";
import { MAT_DIALOG_DATA as Et } from "@angular/material/dialog";
import { computed as Qe, DestroyRef as yt, inject as St, input as te, linkedSignal as vt, model as Ye, output as bt, signal as Ct, viewChildren as Dt } from "@angular/core";
import { CdkDrag as xe, CdkDropList as wt } from "@angular/cdk/drag-drop";
import { input as gt } from "@angular/core";
import * as v from "@angular/core";
var _e = class e {
    slot = gt.required();
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275cmp = v.\u0275\u0275defineComponent({ type: e, selectors: [["app-inventory-stash-slot"]], inputs: { slot: [1, "slot"] }, decls: 6, vars: 2, consts: [[1, "item__preview"], [1, "item__type"], [1, "item__amount"]], template: function (n, r) { n & 1 && (v.\u0275\u0275domElementStart(0, "div", 0), v.\u0275\u0275text(1), v.\u0275\u0275domElementEnd(), v.\u0275\u0275domElementStart(2, "div", 1), v.\u0275\u0275text(3, "A"), v.\u0275\u0275domElementEnd(), v.\u0275\u0275domElementStart(4, "div", 2), v.\u0275\u0275text(5), v.\u0275\u0275domElementEnd()), n & 2 && (v.\u0275\u0275advance(), v.\u0275\u0275textInterpolate(r.slot()?.itemIdentifier ?? null), v.\u0275\u0275advance(4), v.\u0275\u0275textInterpolate(r.slot()?.amount ?? 0)); }, styles: ["[_nghost-%COMP%]{border:solid 2px rgba(204,204,204,.6274509804);box-sizing:border-box;cursor:move;background:#ffffff40;text-align:center;font-size:14px;font-family:sans-serif;position:relative;flex-shrink:0;align-self:flex-start;aspect-ratio:1/1;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));grid-template-rows:minmax(0,1fr) auto}.drag-disabled[_nghost-%COMP%], .drag-disabled   [_nghost-%COMP%]{cursor:default}.item__preview[_ngcontent-%COMP%]{grid-column:1/-1}"] });
};
import * as a from "@angular/core";
var Mt = (e, t) => t ?? e;
function Pt(e, t) { if (e & 1) {
    let n = a.\u0275\u0275getCurrentView();
    a.\u0275\u0275elementStart(0, "div", 2), a.\u0275\u0275listener("cdkDragStarted", function () { a.\u0275\u0275restoreView(n); let i = a.\u0275\u0275nextContext(); return a.\u0275\u0275resetView(i.cancelSwapAnimation()); })("cdkDragMoved", function (i) { a.\u0275\u0275restoreView(n); let o = a.\u0275\u0275nextContext(); return a.\u0275\u0275resetView(o.updateDropTarget(i)); })("cdkDragReleased", function (i) { a.\u0275\u0275restoreView(n); let o = a.\u0275\u0275nextContext(); return a.\u0275\u0275resetView(o.release(i)); })("cdkDragEnded", function () { a.\u0275\u0275restoreView(n); let i = a.\u0275\u0275nextContext(); return a.\u0275\u0275resetView(i.clearDropTargets()); }), a.\u0275\u0275element(1, "app-inventory-stash-slot", 3), a.\u0275\u0275elementEnd();
} if (e & 2) {
    let n = t.$implicit, r = t.$index, i = a.\u0275\u0275nextContext();
    a.\u0275\u0275classProp("drop-target", i.dropTargetIndex() === r)("drag-disabled", (n?.itemIdentifier ?? null) === null), a.\u0275\u0275property("cdkDragDisabled", (n?.itemIdentifier ?? null) === null)("cdkDragPreviewClass", "stash-drag-preview-" + i.id()), a.\u0275\u0275advance(), a.\u0275\u0275property("slot", n);
} }
var q = class e {
    drags = Dt(xe);
    swapAnimation;
    swapAnimationCleanup;
    id = te.required();
    type = te.required();
    confirmedState = Ye.required();
    currentState = vt(() => this.confirmedState());
    maxSlots = te();
    revision = Ye(0);
    orientation = te("mixed");
    connectedStashes = te([]);
    changed = bt();
    dropTargetIndex = Ct(-1);
    slots = Qe(() => this.currentState().length);
    effectiveMaxSlots = Qe(() => this.maxSlots() ? Math.max(this.maxSlots(), this.slots()) : this.slots());
    constructor() { St(yt).onDestroy(() => this.cancelSwapAnimation()); }
    confirmRevision(t) { this.revision.set(t), this.confirmedState.set(this.currentState()); }
    replaceConfirmedState(t, n) { this.revision.set(n), this.confirmedState.set(t), this.currentState.set(t); }
    cancelSwapAnimation() { this.clearDropTargets(), this.swapAnimation?.cancel(), this.swapAnimation = void 0, this.swapAnimationCleanup?.(), this.swapAnimationCleanup = void 0; }
    clearDropTargets() { for (let t of new Set([this, ...this.connectedStashes()]))
        t.dropTargetIndex.set(-1); }
    dropTargetAtPoint(t, n) { for (let r of new Set([this, ...this.connectedStashes()])) {
        let i = r.slotIndexAtPoint(t, n);
        if (i !== -1)
            return { stash: r, index: i };
    } }
    updateDropTarget({ source: t, pointerPosition: n }) { let r = this.dropTargetAtPoint(n, t); this.clearDropTargets(), r?.stash.dropTargetIndex.set(r.index); }
    release({ source: t, event: n }) { let r = "changedTouches" in n ? n.changedTouches[0] : n; if (!r)
        return; let i = this.dropTargetAtPoint({ x: r.clientX, y: r.clientY }, t), o = t.getPlaceholderElement(), d = o.getBoundingClientRect(), c = i?.stash.drags()[i.index]?.getRootElement(), g = c?.getBoundingClientRect() ?? d, D = t.getRootElement().ownerDocument.querySelector(`.cdk-drag-preview.stash-drag-preview-${this.id()}`), b = D?.getBoundingClientRect(), $ = b ? Math.hypot(g.left - b.left, g.top - b.top) : 0, I = window.matchMedia("(prefers-reduced-motion: reduce)").matches || $ <= 1 ? 0 : Math.min(180, Math.ceil($ * 4)); if (D?.style.setProperty("--stash-drop-duration", `${I}ms`), !c || (o.style.transform = `translate(${g.left - d.left}px, ${g.top - d.top}px)`, o.style.visibility = "hidden", I === 0 || !i || i.stash.currentState()[i.index]?.itemIdentifier == null))
        return; let s = c.firstElementChild; if (!s)
        return; let f = s; if (i.stash !== this) {
        f = s.cloneNode(!0);
        let u = s.getBoundingClientRect();
        Object.assign(f.style, { position: "fixed", left: `${u.left}px`, top: `${u.top}px`, width: `${u.width}px`, height: `${u.height}px`, margin: "0", pointerEvents: "none", zIndex: "1000" }), c.closest("app-inventory-stash")?.parentElement?.appendChild(f);
        let h = s.style.visibility;
        s.style.visibility = "hidden", this.swapAnimationCleanup = () => { s.style.visibility = h, f.remove(); };
    } this.swapAnimation = f.animate([{ transform: "translate(0, 0)" }, { transform: `translate(${d.left - g.left}px, ${d.top - g.top}px)` }], { duration: I, easing: "cubic-bezier(0.2, 0, 0, 1)", fill: "forwards" }); }
    slotIndexAtPoint(t, n) { return this.drags().findIndex(r => { if (r === n)
        return !1; let i = r.getRootElement().getBoundingClientRect(); return t.x >= i.left && t.x < i.right && t.y >= i.top && t.y < i.bottom; }); }
    drop(t) { this.cancelSwapAnimation(); let { previousContainer: n, container: r, previousIndex: i, dropPoint: o } = t; if (n !== r)
        return; let d = this.dropTargetAtPoint(o); if (!d)
        return; let { stash: c, index: g } = d; if (c === this && g === i)
        return; if (c !== this) {
        let b = this.currentState()[i];
        if (b?.itemIdentifier == null)
            return;
        let $ = c.currentState()[g], E = he(this.currentState(), s => { s[i] = $; }), I = he(c.currentState(), s => { s[g] = b; });
        if (E === this.currentState() && I === c.currentState())
            return;
        this.currentState.set(E), c.currentState.set(I), this.changed.emit({ type: "cross-stash-slot-swap", sourceStashId: this.id(), targetStashId: c.id(), sourceSlotId: i, targetSlotId: g, sourceRevision: this.revision(), targetRevision: c.revision() });
        return;
    } let D = he(this.currentState(), b => { [b[i], b[g]] = [b[g], b[i]]; }); D !== this.currentState() && (this.currentState.set(D), this.changed.emit({ type: "same-stash-slot-swap", sourceStashId: this.id(), targetStashId: null, sourceSlotId: i, targetSlotId: g, sourceRevision: this.revision(), targetRevision: null })); }
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275cmp = a.\u0275\u0275defineComponent({ type: e, selectors: [["app-inventory-stash"]], viewQuery: function (n, r) { n & 1 && a.\u0275\u0275viewQuerySignal(r.drags, xe, 5), n & 2 && a.\u0275\u0275queryAdvance(); }, inputs: { id: [1, "id"], type: [1, "type"], confirmedState: [1, "confirmedState"], maxSlots: [1, "maxSlots"], revision: [1, "revision"], orientation: [1, "orientation"], connectedStashes: [1, "connectedStashes"] }, outputs: { confirmedState: "confirmedStateChange", revision: "revisionChange", changed: "changed" }, decls: 3, vars: 3, consts: [["cdkDropList", "", 1, "list", 3, "cdkDropListDropped", "cdkDropListData", "cdkDropListOrientation", "cdkDropListSortingDisabled"], ["cdkDrag", "", 1, "list__item", 3, "cdkDragDisabled", "cdkDragPreviewClass", "drop-target", "drag-disabled"], ["cdkDrag", "", 1, "list__item", 3, "cdkDragStarted", "cdkDragMoved", "cdkDragReleased", "cdkDragEnded", "cdkDragDisabled", "cdkDragPreviewClass"], [1, "list__slot", 3, "slot"]], template: function (n, r) { n & 1 && (a.\u0275\u0275elementStart(0, "div", 0), a.\u0275\u0275listener("cdkDropListDropped", function (o) { return r.drop(o); }), a.\u0275\u0275repeaterCreate(1, Pt, 2, 7, "div", 1, Mt), a.\u0275\u0275elementEnd()), n & 2 && (a.\u0275\u0275property("cdkDropListData", r.currentState())("cdkDropListOrientation", r.orientation())("cdkDropListSortingDisabled", !0), a.\u0275\u0275advance(), a.\u0275\u0275repeater(r.currentState())); }, dependencies: [_e, wt, xe], styles: [".list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;width:100%;max-width:100%;gap:18px;padding:15px;border:solid 2px #ccc;min-height:60px;overflow:hidden;box-sizing:border-box}.list__item[_ngcontent-%COMP%]{width:72px;flex-shrink:0;align-self:flex-start;cursor:move}.list__item.drag-disabled[_ngcontent-%COMP%]{cursor:default}.list__item.drop-target[_ngcontent-%COMP%]{outline:2px solid #80d8ff;outline-offset:4px;background:#80d8ff30}.list__slot[_ngcontent-%COMP%]{width:100%;pointer-events:none}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:.25}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform var(--%NS%stash-drop-duration, 0ms) cubic-bezier(.2,0,0,1)}@media(prefers-reduced-motion:reduce){.cdk-drag-animating[_ngcontent-%COMP%]{transition:none}}"] });
};
import * as l from "@angular/core";
var z = class e {
    stashes = kt(q);
    data = It(Et);
    changed = xt();
    updateRevision(t, n) { for (let r of this.stashes())
        r.id() === t && r.confirmRevision(n); }
    onChanged(t) { this.changed.emit(t); }
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275cmp = l.\u0275\u0275defineComponent({ type: e, selectors: [["ng-component"]], viewQuery: function (n, r) { n & 1 && l.\u0275\u0275viewQuerySignal(r.stashes, q, 5), n & 2 && l.\u0275\u0275queryAdvance(); }, outputs: { changed: "changed" }, decls: 7, vars: 12, consts: [[3, "confirmedStateChange", "changed", "id", "type", "maxSlots", "revision", "confirmedState", "connectedStashes"]], template: function (n, r) { n & 1 && (l.\u0275\u0275elementStart(0, "h3"), l.\u0275\u0275text(1, "My stash"), l.\u0275\u0275elementEnd(), l.\u0275\u0275elementStart(2, "app-inventory-stash", 0), l.\u0275\u0275twoWayListener("confirmedStateChange", function (o) { return l.\u0275\u0275twoWayBindingSet(r.data.stashes.character_main.slots, o) || (r.data.stashes.character_main.slots = o), o; }), l.\u0275\u0275listener("changed", function (o) { return r.onChanged(o); }), l.\u0275\u0275elementEnd(), l.\u0275\u0275element(3, "br"), l.\u0275\u0275elementStart(4, "h3"), l.\u0275\u0275text(5, "Quick use"), l.\u0275\u0275elementEnd(), l.\u0275\u0275elementStart(6, "app-inventory-stash", 0), l.\u0275\u0275twoWayListener("confirmedStateChange", function (o) { return l.\u0275\u0275twoWayBindingSet(r.data.stashes.character_quick_use.slots, o) || (r.data.stashes.character_quick_use.slots = o), o; }), l.\u0275\u0275listener("changed", function (o) { return r.onChanged(o); }), l.\u0275\u0275elementEnd()), n & 2 && (l.\u0275\u0275advance(2), l.\u0275\u0275property("id", r.data.stashes.character_main.id)("type", r.data.stashes.character_main.type)("maxSlots", r.data.stashes.character_main.maxSlots)("revision", 0), l.\u0275\u0275twoWayProperty("confirmedState", r.data.stashes.character_main.slots), l.\u0275\u0275property("connectedStashes", r.stashes()), l.\u0275\u0275advance(4), l.\u0275\u0275property("id", r.data.stashes.character_quick_use.id)("type", r.data.stashes.character_quick_use.type)("maxSlots", r.data.stashes.character_quick_use.maxSlots)("revision", 0), l.\u0275\u0275twoWayProperty("confirmedState", r.data.stashes.character_quick_use.slots), l.\u0275\u0275property("connectedStashes", r.stashes())); }, dependencies: [q], styles: ["[_nghost-%COMP%]{display:block;padding:14px 22px;height:100%}"] });
};
import * as Ze from "@angular/core";
qe();
var Je = class e {
    dialog = Ke(At);
    http = Ke(Ot);
    handleMessage(t) { switch (Xe() && console.log("Received message", t), t.type) {
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
    openInventory(t) { if (this.dialog.openDialogs.some(r => r.componentInstance instanceof z))
        return; let n = this.dialog.open(z, { width: "100%", maxWidth: "100%", height: "100%", maxHeight: "100%", backdropClass: "dialog__backdrop--harder", panelClass: "dialog__no-default-background", data: t }); Rt(n.componentInstance.changed).pipe(Vt(r => console.log("Some changes have been made:", r)), Ft(() => !Xe()), Nt(r => this.http.post("https://armoury-roleplay/onStashChanges", r).pipe(Tt(i => (console.error("(onChange) NUI request failed:", i), zt)))), Lt(n.afterClosed())).subscribe(); }
    receiveNewRevision({ revision: t, stashId: n }) { console.log(`Received new revision (${t}) for stash (id: ${n})`); for (let r of this.dialog.openDialogs)
        r.componentInstance instanceof z && r.componentInstance.updateRevision(n, t); }
    receivePendingChanges({ stashId: t, patches: n, revision: r }) { for (let i of this.dialog.openDialogs)
        if (i.componentInstance instanceof z)
            for (let o of i.componentInstance.stashes())
                o.id() === t && o.replaceConfirmedState(Ge(o.confirmedState(), n), r); }
    receiveConfirmedStateForReplace({ stash: t, revision: n }) { for (let r of this.dialog.openDialogs)
        if (r.componentInstance instanceof z)
            for (let i of r.componentInstance.stashes())
                i.id() === t.id && i.replaceConfirmedState(t.slots, n); }
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275prov = Ze.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac, providedIn: "root" });
};
export { Je as NuiHandler };
