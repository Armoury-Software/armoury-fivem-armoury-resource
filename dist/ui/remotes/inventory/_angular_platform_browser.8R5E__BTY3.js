var je = Object.defineProperty, Fe = Object.defineProperties;
var $e = Object.getOwnPropertyDescriptors;
var re = Object.getOwnPropertySymbols;
var ze = Object.prototype.hasOwnProperty, Ge = Object.prototype.propertyIsEnumerable;
var oe = (n, r, e) => r in n ? je(n, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[r] = e, O = (n, r) => { for (var e in r ||= {})
    ze.call(r, e) && oe(n, e, r[e]); if (re)
    for (var e of re(r))
        Ge.call(r, e) && oe(n, e, r[e]); return n; }, se = (n, r) => Fe(n, $e(r));
var z = (n, r, e) => new Promise((t, o) => { var s = c => { try {
    a(e.next(c));
}
catch (d) {
    o(d);
} }, i = c => { try {
    a(e.throw(c));
}
catch (d) {
    o(d);
} }, a = c => c.done ? t(c.value) : Promise.resolve(c.value).then(s, i); a((e = e.apply(n, r)).next()); });
import { \u0275DomAdapter as st, \u0275setRootDomAdapter as it, \u0275parseCookieValue as at, \u0275getDOM as ve, DOCUMENT as ye, CommonModule as ct, \u0275PLATFORM_BROWSER_ID as lt } from "@angular/common";
import * as g from "@angular/core";
import { \u0275global as v, \u0275RuntimeError as dt, InjectionToken as fn, ApplicationModule as ut, \u0275INJECTOR_SCOPE as ft, ErrorHandler as Ee, \u0275SHARED_STYLES_HOST as pe, RendererFactory2 as pt, \u0275TESTABILITY_GETTER as X, NgZone as he, TestabilityRegistry as me, Testability as q, \u0275TESTABILITY as ht, \u0275internalCreateApplication as Se, createPlatformFactory as mt, platformCore as gt, PLATFORM_ID as vt, PLATFORM_INITIALIZER as yt, \u0275USE_PENDING_TASKS as Et, \u0275resolveComponentResources as pn, \u0275setDocument as St } from "@angular/core";
import { DOCUMENT as K, \u0275getDOM as Ye } from "@angular/common";
import * as l from "@angular/core";
import { InjectionToken as W, \u0275RuntimeError as L, APP_ID as Z, CSP_NONCE as le, PLATFORM_ID as Ke, makeEnvironmentProviders as We, ViewEncapsulation as E, \u0275SHARED_STYLES_HOST as Ze, \u0275TracingService as Je, RendererStyleFlags2 as N, \u0275allLeavingAnimations as Xe } from "@angular/core";
var S = class {
    _doc;
    constructor(r) { this._doc = r; }
    manager;
}, M = (() => { class n extends S {
    constructor(e) { super(e); }
    supports(e) { return !0; }
    addEventListener(e, t, o, s) { return e.addEventListener(t, o, s), () => this.removeEventListener(e, t, o, s); }
    removeEventListener(e, t, o, s) { return e.removeEventListener(t, o, s); }
    static \u0275fac = function (t) { return new (t || n)(l.\u0275\u0275inject(K)); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac });
} return n; })(), R = new W(""), U = (() => { class n {
    _zone;
    _plugins;
    _eventNameToPlugin = new Map;
    constructor(e, t) { this._zone = t, e.forEach(i => { i.manager = this; }); let o = e.filter(i => !(i instanceof M)); this._plugins = o.slice().reverse(); let s = e.find(i => i instanceof M); s && this._plugins.push(s); }
    addEventListener(e, t, o, s) { return this._findPluginFor(t).addEventListener(e, t, o, s); }
    getZone() { return this._zone; }
    _findPluginFor(e) { let t = this._eventNameToPlugin.get(e); if (t)
        return t; if (t = this._plugins.find(s => s.supports(e)), !t)
        throw new L(-5101, !1); return this._eventNameToPlugin.set(e, t), t; }
    static \u0275fac = function (t) { return new (t || n)(l.\u0275\u0275inject(R), l.\u0275\u0275inject(l.NgZone)); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac });
} return n; })(), P = "ng-app-id";
function ie(n) { for (let r of n)
    r.remove(); }
function ae(n, r) { let e = r.createElement("style"); return e.textContent = n, e; }
function qe(n, r, e, t) { let o = n.head?.querySelectorAll(`style[${P}="${r}"],link[${P}="${r}"]`); if (!o || o.length === 0)
    return !1; for (let s of o)
    s.removeAttribute(P), s instanceof HTMLLinkElement ? t.set(s.href.slice(s.href.lastIndexOf("/") + 1), { usage: 0, elements: [s] }) : s.textContent && e.set(s.textContent, { usage: 0, elements: [s] }); return !0; }
function Y(n, r) { let e = r.createElement("link"); return e.setAttribute("rel", "stylesheet"), e.setAttribute("href", n), e; }
var x = (() => { class n {
    doc;
    appId;
    nonce;
    inline = new Map;
    external = new Map;
    hosts = new Set;
    constructor(e, t, o, s = {}) { this.doc = e, this.appId = t, this.nonce = o, qe(e, t, this.inline, this.external) && this.hosts.add(e.head); }
    addStyles(e, t) { for (let o of e)
        this.addUsage(o, this.inline, ae); t?.forEach(o => this.addUsage(o, this.external, Y)); }
    removeStyles(e, t) { for (let o of e)
        this.removeUsage(o, this.inline); t?.forEach(o => this.removeUsage(o, this.external)); }
    addUsage(e, t, o) { let s = t.get(e); s ? s.usage++ : t.set(e, { usage: 1, elements: [...this.hosts].map(i => this.addElement(i, o(e, this.doc))) }); }
    removeUsage(e, t) { let o = t.get(e); o && (o.usage--, o.usage <= 0 && (ie(o.elements), t.delete(e))); }
    ngOnDestroy() { for (let [, { elements: e }] of [...this.inline, ...this.external])
        ie(e); this.hosts.clear(); }
    addHost(e) { if (!this.hosts.has(e)) {
        this.hosts.add(e);
        for (let [t, { elements: o }] of this.inline)
            o.push(this.addElement(e, ae(t, this.doc)));
        for (let [t, { elements: o }] of this.external)
            o.push(this.addElement(e, Y(t, this.doc)));
    } }
    removeHost(e) { this.hosts.delete(e); for (let t of [...this.inline.values(), ...this.external.values()]) {
        let o = [];
        for (let s of t.elements)
            s.parentNode === e ? s.remove() : o.push(s);
        t.elements = o;
    } }
    addElement(e, t) { return this.nonce && t.setAttribute("nonce", this.nonce), typeof ngServerMode < "u" && ngServerMode && t.setAttribute(P, this.appId), e.appendChild(t); }
    static \u0275fac = function (t) { return new (t || n)(l.\u0275\u0275inject(K), l.\u0275\u0275inject(Z), l.\u0275\u0275inject(le, 8), l.\u0275\u0275inject(Ke)); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac });
} return n; })(), G = { svg: "http://www.w3.org/2000/svg", xhtml: "http://www.w3.org/1999/xhtml", xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/", math: "http://www.w3.org/1998/Math/MathML" }, J = /%COMP%/g;
var de = "%COMP%", Qe = `_nghost-${de}`, et = `_ngcontent-${de}`, tt = !0, ue = new W("", { factory: () => tt }), B = new W("");
function nt(n) { return We([{ provide: B, useFactory: r => `${n ?? r}_`, deps: [Z] }]); }
function rt(n) { return et.replace(J, n); }
function ot(n) { return Qe.replace(J, n); }
function fe(n, r) { return r.map(e => e.replace(J, n)); }
var V = (() => { class n {
    eventManager;
    sharedStylesHost;
    appId;
    removeStylesOnCompDestroy;
    doc;
    ngZone;
    nonce;
    tracingService;
    rendererByCompId = new Map;
    defaultRenderer;
    cssVarNamespace;
    constructor(e, t, o, s, i, a, c = null, d = null, u = null) { this.eventManager = e, this.sharedStylesHost = t, this.appId = o, this.removeStylesOnCompDestroy = s, this.doc = i, this.ngZone = a, this.nonce = c, this.tracingService = d, this.cssVarNamespace = u ?? "", this.defaultRenderer = new _(e, i, a, this.tracingService, this.cssVarNamespace); }
    createRenderer(e, t) { if (!e || !t)
        return this.defaultRenderer; typeof ngServerMode < "u" && ngServerMode && (t.encapsulation === E.ShadowDom || t.encapsulation === E.ExperimentalIsolatedShadowDom) && (t = se(O({}, t), { encapsulation: E.Emulated })); let o = this.getOrCreateRenderer(e, t); return o instanceof k ? o.applyToHost(e) : o instanceof D && o.applyStyles(), o; }
    getOrCreateRenderer(e, t) { let o = this.rendererByCompId, s = o.get(t.id); if (!s) {
        let i = this.doc, a = this.ngZone, c = this.eventManager, d = this.sharedStylesHost, u = this.removeStylesOnCompDestroy, h = this.tracingService;
        switch (t.encapsulation) {
            case E.Emulated:
                s = new k(c, d, t, this.appId, u, i, a, h, this.cssVarNamespace);
                break;
            case E.ShadowDom: return new H(c, e, t, i, a, this.nonce, h, this.cssVarNamespace, d);
            case E.ExperimentalIsolatedShadowDom: return new H(c, e, t, i, a, this.nonce, h, this.cssVarNamespace);
            default:
                s = new D(c, d, t, u, i, a, h, this.cssVarNamespace);
                break;
        }
        o.set(t.id, s);
    } return s; }
    ngOnDestroy() { this.rendererByCompId.clear(); }
    componentReplaced(e) { this.rendererByCompId.delete(e); }
    static \u0275fac = function (t) { return new (t || n)(l.\u0275\u0275inject(U), l.\u0275\u0275inject(Ze), l.\u0275\u0275inject(Z), l.\u0275\u0275inject(ue), l.\u0275\u0275inject(K), l.\u0275\u0275inject(l.NgZone), l.\u0275\u0275inject(le), l.\u0275\u0275inject(Je, 8), l.\u0275\u0275inject(B, 8)); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac });
} return n; })(), _ = class {
    eventManager;
    doc;
    ngZone;
    tracingService;
    cssVarNamespace;
    data = Object.create(null);
    throwOnSyntheticProps = !0;
    constructor(r, e, t, o, s = "") { this.eventManager = r, this.doc = e, this.ngZone = t, this.tracingService = o, this.cssVarNamespace = s; }
    destroy() { }
    destroyNode = null;
    createElement(r, e) { return e ? this.doc.createElementNS(G[e] || e, r) : this.doc.createElement(r); }
    createComment(r) { return this.doc.createComment(r); }
    createText(r) { return this.doc.createTextNode(r); }
    appendChild(r, e) { (ce(r) ? r.content : r).appendChild(e); }
    insertBefore(r, e, t) { if (r) {
        let o = ce(r) ? r.content : r;
        if (t != null && t.parentNode !== o)
            throw new L(-5106, !1);
        o.insertBefore(e, t);
    } }
    removeChild(r, e) { e.remove(); }
    selectRootElement(r, e) { let t = typeof r == "string" ? this.doc.querySelector(r) : r; if (!t)
        throw new L(-5104, !1); return e || (t.textContent = ""), t; }
    parentNode(r) { return r.parentNode; }
    nextSibling(r) { return r.nextSibling; }
    setAttribute(r, e, t, o) { if (o) {
        e = o + ":" + e;
        let s = G[o];
        s ? r.setAttributeNS(s, e, t) : r.setAttribute(e, t);
    }
    else
        r.setAttribute(e, t); }
    removeAttribute(r, e, t) { if (t) {
        let o = G[t];
        o ? r.removeAttributeNS(o, e) : r.removeAttribute(`${t}:${e}`);
    }
    else
        r.removeAttribute(e); }
    addClass(r, e) { r.classList.add(e); }
    removeClass(r, e) { r.classList.remove(e); }
    setStyle(r, e, t, o) { let s = e.startsWith("--"); s && (e = e.replace("%NS%", this.cssVarNamespace)), s || o & (N.DashCase | N.Important) ? r.style.setProperty(e, t, o & N.Important ? "important" : "") : r.style[e] = t; }
    removeStyle(r, e, t) { let o = e.startsWith("--"); o && (e = e.replace("%NS%", this.cssVarNamespace)), o || t & N.DashCase ? r.style.removeProperty(e) : r.style[e] = ""; }
    setProperty(r, e, t) { r != null && (r[e] = t); }
    setValue(r, e) { r.nodeValue = e; }
    listen(r, e, t, o) { if (typeof r == "string" && (r = Ye().getGlobalEventTarget(this.doc, r), !r))
        throw new L(-5102, !1); let s = this.decoratePreventDefault(t); return this.tracingService?.wrapEventListener && (s = this.tracingService.wrapEventListener(r, e, s)), this.eventManager.addEventListener(r, e, s, o); }
    decoratePreventDefault(r) { return e => { if (e === "__ngUnwrap__")
        return r; (typeof ngServerMode < "u" && ngServerMode ? this.ngZone.runGuarded(() => r(e)) : r(e)) === !1 && e.preventDefault(); }; }
};
function ce(n) { return n.tagName === "TEMPLATE" && n.content !== void 0; }
var H = class extends _ {
    hostEl;
    sharedStylesHost;
    shadowRoot;
    constructor(r, e, t, o, s, i, a, c, d) { super(r, o, s, a, c), this.hostEl = e, this.sharedStylesHost = d, this.shadowRoot = e.attachShadow({ mode: "open" }), this.sharedStylesHost && this.sharedStylesHost.addHost(this.shadowRoot); let u = t.styles; u = fe(t.id, u).map(m => m.replace(/%NS%/g, c)); for (let m of u) {
        let y = document.createElement("style");
        i && y.setAttribute("nonce", i), y.textContent = m, this.shadowRoot.appendChild(y);
    } let h = t.getExternalStyles?.(); if (h)
        for (let m of h) {
            let y = Y(m, o);
            i && y.setAttribute("nonce", i), this.shadowRoot.appendChild(y);
        } }
    nodeOrShadowRoot(r) { return r === this.hostEl ? this.shadowRoot : r; }
    appendChild(r, e) { return super.appendChild(this.nodeOrShadowRoot(r), e); }
    insertBefore(r, e, t) { return super.insertBefore(this.nodeOrShadowRoot(r), e, t); }
    removeChild(r, e) { return super.removeChild(null, e); }
    parentNode(r) { return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(r))); }
    destroy() { this.sharedStylesHost && this.sharedStylesHost.removeHost(this.shadowRoot); }
}, D = class extends _ {
    sharedStylesHost;
    removeStylesOnCompDestroy;
    styles;
    styleUrls;
    constructor(r, e, t, o, s, i, a, c, d) { super(r, s, i, a, c), this.sharedStylesHost = e, this.removeStylesOnCompDestroy = o; let u = t.styles, h = d ? fe(d, u) : u; this.styles = h.map(m => m.replace(/%NS%/g, c)), this.styleUrls = t.getExternalStyles?.(d); }
    applyStyles() { this.sharedStylesHost.addStyles(this.styles, this.styleUrls); }
    destroy() { this.removeStylesOnCompDestroy && Xe.size === 0 && this.sharedStylesHost.removeStyles(this.styles, this.styleUrls); }
}, k = class extends D {
    contentAttr;
    hostAttr;
    constructor(r, e, t, o, s, i, a, c, d) { let u = o + "-" + t.id; super(r, e, t, s, i, a, c, d, u), this.contentAttr = rt(u), this.hostAttr = ot(u); }
    applyToHost(r) { this.applyStyles(), this.setAttribute(r, this.hostAttr, ""); }
    createElement(r, e) { let t = super.createElement(r, e); return super.setAttribute(t, this.contentAttr, ""), t; }
};
var j = class n extends st {
    supportsDOMEvents = !0;
    static makeCurrent() { it(new n); }
    onAndCancel(r, e, t, o) { return r.addEventListener(e, t, o), () => { r.removeEventListener(e, t, o); }; }
    dispatchEvent(r, e) { r.dispatchEvent(e); }
    remove(r) { r.remove(); }
    createElement(r, e) { return e = e || this.getDefaultDocument(), e.createElement(r); }
    createHtmlDocument() { return document.implementation.createHTMLDocument("fakeTitle"); }
    getDefaultDocument() { return document; }
    isElementNode(r) { return r.nodeType === Node.ELEMENT_NODE; }
    isShadowRoot(r) { return r instanceof DocumentFragment; }
    getGlobalEventTarget(r, e) { return e === "window" ? window : e === "document" ? r : e === "body" ? r.body : null; }
    getBaseHref(r) { let e = Tt(); return e == null ? null : wt(e); }
    resetBaseElement() { C = null; }
    getUserAgent() { return window.navigator.userAgent; }
    getCookie(r) { return at(document.cookie, r); }
}, C = null;
function Tt() { return C = C || document.head.querySelector("base"), C ? C.getAttribute("href") : null; }
function wt(n) { return new URL(n, document.baseURI).pathname; }
var F = class {
    addToWindow(r) { v.getAngularTestability = (t, o = !0) => { let s = r.findTestabilityInTree(t, o); if (s == null)
        throw new dt(5103, !1); return s; }, v.getAllAngularTestabilities = () => r.getAllTestabilities(), v.getAllAngularRootElements = () => r.getAllRootElements(); let e = t => { let o = v.getAllAngularTestabilities(), s = o.length, i = function () { s--, s == 0 && t(); }; o.forEach(a => { a.whenStable(i); }); }; v.frameworkStabilizers || (v.frameworkStabilizers = []), v.frameworkStabilizers.push(e); }
    findTestabilityInTree(r, e, t) { if (e == null)
        return null; let o = r.getTestability(e); return o ?? (t ? ve().isShadowRoot(e) ? this.findTestabilityInTree(r, e.host, !0) : this.findTestabilityInTree(r, e.parentElement, !0) : null); }
}, ge = ["alt", "control", "meta", "shift"], Mt = { "\b": "Backspace", "	": "Tab", "\x7F": "Delete", "\x1B": "Escape", Del: "Delete", Esc: "Escape", Left: "ArrowLeft", Right: "ArrowRight", Up: "ArrowUp", Down: "ArrowDown", Menu: "ContextMenu", Scroll: "ScrollLock", Win: "OS" }, _t = { alt: n => n.altKey, control: n => n.ctrlKey, meta: n => n.metaKey, shift: n => n.shiftKey }, Te = (() => { class n extends S {
    constructor(e) { super(e); }
    supports(e) { return n.parseEventName(e) != null; }
    addEventListener(e, t, o, s) { let i = n.parseEventName(t), a = n.eventCallback(i.fullKey, o, this.manager.getZone()); return this.manager.getZone().runOutsideAngular(() => ve().onAndCancel(e, i.domEventName, a, s)); }
    static parseEventName(e) { let t = e.toLowerCase().split("."), o = t.shift(); if (t.length === 0 || !(o === "keydown" || o === "keyup"))
        return null; let s = n._normalizeKey(t.pop()), i = "", a = t.indexOf("code"); if (a > -1 && (t.splice(a, 1), i = "code."), ge.forEach(d => { let u = t.indexOf(d); u > -1 && (t.splice(u, 1), i += d + "."); }), i += s, t.length != 0 || s.length === 0)
        return null; let c = {}; return c.domEventName = o, c.fullKey = i, c; }
    static matchEventFullKeyCode(e, t) { let o = Mt[e.key] || e.key, s = ""; return t.indexOf("code.") > -1 && (o = e.code, s = "code."), o == null || !o ? !1 : (o = o.toLowerCase(), o === " " ? o = "space" : o === "." && (o = "dot"), ge.forEach(i => { if (i !== o) {
        let a = _t[i];
        a(e) && (s += i + ".");
    } }), s += o, s === t); }
    static eventCallback(e, t, o) { return s => { n.matchEventFullKeyCode(s, e) && o.runGuarded(() => t(s)); }; }
    static _normalizeKey(e) { return e === "esc" ? "escape" : e; }
    static \u0275fac = function (t) { return new (t || n)(g.\u0275\u0275inject(ye)); };
    static \u0275prov = g.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac });
} return n; })();
function Dt(n, r, e) { return z(this, null, function* () { let t = O({ rootComponent: n }, we(r, e)); return Se(t); }); }
function Rt(n, r) { return z(this, null, function* () { return Se(we(n, r)); }); }
function we(n, r) { return { platformRef: r?.platformRef, appProviders: [...De, ...n?.providers ?? []], platformProviders: Me }; }
function Ct(n = {}) { return [..._e, n?.usePendingTasksForStability !== void 0 ? { provide: Et, useValue: n.usePendingTasksForStability ?? !1 } : []]; }
function At() { j.makeCurrent(); }
function bt() { return new Ee; }
function It() { return St(document), document; }
var Me = [{ provide: vt, useValue: lt }, { provide: yt, useValue: At, multi: !0 }, { provide: ye, useFactory: It }], Ot = mt(gt, "browser", Me);
var _e = [{ provide: X, useClass: F }, { provide: ht, useClass: q, deps: [he, me, X] }, { provide: q, useClass: q, deps: [he, me, X] }], De = [{ provide: ft, useValue: "root" }, { provide: Ee, useFactory: bt }, { provide: R, useClass: M, multi: !0 }, { provide: R, useClass: Te, multi: !0 }, V, { provide: pe, useClass: x }, { provide: x, useExisting: pe }, U, { provide: pt, useExisting: V }, []], Nt = (() => { class n {
    constructor() { }
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275mod = g.\u0275\u0275defineNgModule({ type: n });
    static \u0275inj = g.\u0275\u0275defineInjector({ providers: [...De, ..._e], imports: [ct, ut] });
} return n; })();
import { DOCUMENT as te, \u0275getDOM as He } from "@angular/common";
import { \u0275getDOM as Wn } from "@angular/common";
import * as p from "@angular/core";
import { inject as I, \u0275RuntimeError as $, \u0275global as Re, ApplicationRef as ke, makeEnvironmentProviders as Lt, \u0275CACHE_ACTIVE as Ce, APP_BOOTSTRAP_LISTENER as Pt, \u0275withDomHydration as Ht, \u0275withIncrementalHydration as Ue, \u0275withEventReplay as kt, \u0275withI18nSupport as Ut, ENVIRONMENT_INITIALIZER as _n, \u0275IS_ENABLED_BLOCKING_INITIAL_NAVIGATION as Dn, \u0275Console as Rn, \u0275formatRuntimeError as Cn, SecurityContext as T, \u0275allowSanitizationBypassAndThrow as A, \u0275unwrapSafeValue as b, \u0275_sanitizeUrl as xt, \u0275_sanitizeHtml as Bt, \u0275bypassSanitizationTrustHtml as Vt, \u0275bypassSanitizationTrustStyle as jt, \u0275bypassSanitizationTrustScript as Ft, \u0275bypassSanitizationTrustUrl as $t, \u0275bypassSanitizationTrustResourceUrl as zt, Version as Gt } from "@angular/core";
import { \u0275withHttpTransferCache as xe } from "@angular/common/http";
var Nn = (() => { class n {
    _doc = I(te);
    _dom = He();
    _cachedHead;
    addTag(e, t = !1) { return e ? this._getOrCreateElement(e, t) : null; }
    addTags(e, t = !1) { return e.filter(o => !!o).map(o => this._getOrCreateElement(o, t)); }
    getTag(e) { if (!e)
        return null; let t = this._doc.querySelector(Ae(e)); return Ne(t) ? t : null; }
    getTags(e) { if (!e)
        return []; let t = this._doc.querySelectorAll(Ae(e)); return t ? Array.from(t).filter(o => Ne(o)) : []; }
    updateTag(e, t) { Ie(e), t ??= Oe(e); let o = this.getTag(t); return o ? (be(e, o), o) : this._getOrCreateElement(e, !0); }
    removeTag(e) { this.removeTagElement(this.getTag(e)); }
    removeTagElement(e) { e && this._dom.remove(e); }
    _getOrCreateElement(e, t = !1) { if (Ie(e), !t) {
        let i = Oe(e), a = this.getTags(i).filter(c => Kt(e, c))[0];
        if (a !== void 0)
            return a;
    } let o = this._dom.createElement("meta"); return be(e, o), this._doc.getElementsByTagName("head")[0].appendChild(o), o; }
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275prov = p.\u0275\u0275defineService({ token: n, factory: n.\u0275fac });
} return n; })();
function Ae(n) { return `meta[${n}]`; }
function be(n, r) { Object.keys(n).forEach(e => r.setAttribute(ne(e), n[e])); }
function Ie(n) { for (let r of Object.keys(n))
    if (ne(r).toLowerCase().startsWith("on"))
        throw new $(5203, !1); }
function Oe(n) { let r = n.name ? "name" : "property"; return `${r}=${Yt(String(n[r]))}`; }
function Yt(n) { return `"${n.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`; }
function Kt(n, r) { return Object.keys(n).every(e => r.getAttribute(ne(e)) === n[e]); }
function ne(n) { return Object.hasOwn(Le, n) ? Le[n] : n; }
function Ne(n) { return n?.nodeName.toLowerCase() === "meta"; }
var Le = { httpEquiv: "http-equiv" }, Ln = (() => { class n {
    _doc;
    constructor(e) { this._doc = e; }
    getTitle() { return this._doc.title; }
    setTitle(e) { this._doc.title = e || ""; }
    static \u0275fac = function (t) { return new (t || n)(p.\u0275\u0275inject(te)); };
    static \u0275prov = p.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" });
} return n; })();
function Be(n, r) { if (typeof COMPILED > "u" || !COMPILED) {
    let e = Re.ng = Re.ng || {};
    e[n] = r;
} }
var Q = class {
    msPerTick;
    numTicks;
    constructor(r, e) { this.msPerTick = r, this.numTicks = e; }
}, ee = class {
    appRef;
    constructor(r) { this.appRef = r.injector.get(ke); }
    timeChangeDetection(r) { let e = r && r.record, t = "Change Detection"; e && "profile" in console && typeof console.profile == "function" && console.profile(t); let o = performance.now(), s = 0; for (; s < 5 || performance.now() - o < 500;)
        this.appRef.tick(), s++; let i = performance.now(); e && "profileEnd" in console && typeof console.profileEnd == "function" && console.profileEnd(t); let a = (i - o) / s; return console.log(`ran ${s} change detection cycles`), console.log(`${a.toFixed(2)} ms per check`), new Q(a, s); }
}, Ve = "profiler";
function Pn(n) { return Be(Ve, new ee(n)), n; }
function Hn() { Be(Ve, null); }
var Pe = class {
    static all() { return () => !0; }
    static css(r) { return e => e.nativeElement != null ? Wt(e.nativeElement, r) : !1; }
    static directive(r) { return e => e.providerTokens.indexOf(r) !== -1; }
};
function Wt(n, r) { return He().isElementNode(n) ? n.matches && n.matches(r) || n.msMatchesSelector && n.msMatchesSelector(r) || n.webkitMatchesSelector && n.webkitMatchesSelector(r) : !1; }
var kn = (() => { class n {
    namespacePrefix = I(B, { optional: !0 }) ?? "";
    namespace(e) { return this.namespacePrefix ? `--${this.namespacePrefix}${e.substring(2)}` : e; }
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275prov = p.\u0275\u0275defineService({ token: n, factory: n.\u0275fac });
} return n; })(), f = (function (n) { return n[n.NoHttpTransferCache = 0] = "NoHttpTransferCache", n[n.HttpTransferCacheOptions = 1] = "HttpTransferCacheOptions", n[n.I18nSupport = 2] = "I18nSupport", n[n.EventReplay = 3] = "EventReplay", n[n.IncrementalHydration = 4] = "IncrementalHydration", n[n.NoIncrementalHydration = 5] = "NoIncrementalHydration", n; })(f || {});
function w(n, r = [], e = {}) { return { \u0275kind: n, \u0275providers: r }; }
function Un() { return w(f.NoHttpTransferCache); }
function xn(n) { return w(f.HttpTransferCacheOptions, xe(n)); }
function Bn() { return w(f.I18nSupport, Ut()); }
function Vn() { return w(f.EventReplay, kt()); }
function jn() { return w(f.IncrementalHydration, Ue()); }
function Fn() { return w(f.NoIncrementalHydration); }
function $n(...n) { let r = [], e = new Set; for (let { \u0275providers: o, \u0275kind: s } of n)
    e.add(s), o.length && r.push(o); let t = e.has(f.HttpTransferCacheOptions); return Lt([[], [], Ht(), e.has(f.NoHttpTransferCache) || t ? [] : xe({}), e.has(f.NoIncrementalHydration) ? [] : Ue(), r, { provide: Ce, useValue: { isActive: !0 } }, { provide: Pt, multi: !0, useFactory: () => { let o = I(ke), s = I(Ce); return () => { o.whenStable().then(() => { s.isActive = !1; }); }; } }]); }
var Zt = (() => { class n {
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275prov = p.\u0275\u0275defineInjectable({ token: n, factory: function (t) { let o = null; return t ? o = new (t || n) : o = p.\u0275\u0275inject(Jt), o; }, providedIn: "root" });
} return n; })(), Jt = (() => { class n extends Zt {
    _doc = I(te);
    sanitize(e, t) { if (t == null)
        return null; switch (e) {
        case T.NONE: return t;
        case T.HTML: return A(t, "HTML") ? b(t) : Bt(this._doc, String(t)).toString();
        case T.STYLE: return A(t, "Style") ? b(t) : t;
        case T.SCRIPT:
            if (A(t, "Script"))
                return b(t);
            throw new $(5200, !1);
        case T.URL: return A(t, "URL") ? b(t) : xt(String(t));
        case T.RESOURCE_URL:
            if (A(t, "ResourceURL"))
                return b(t);
            throw new $(-5201, !1);
        default: throw new $(5202, !1);
    } }
    bypassSecurityTrustHtml(e) { return Vt(e); }
    bypassSecurityTrustStyle(e) { return jt(e); }
    bypassSecurityTrustScript(e) { return Ft(e); }
    bypassSecurityTrustUrl(e) { return $t(e); }
    bypassSecurityTrustResourceUrl(e) { return zt(e); }
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275prov = p.\u0275\u0275defineService({ token: n, factory: n.\u0275fac });
} return n; })(), zn = new Gt("22.1.4");
export { Nt as BrowserModule, Pe as By, kn as CssVarNamespacer, Zt as DomSanitizer, R as EVENT_MANAGER_PLUGINS, U as EventManager, S as EventManagerPlugin, f as HydrationFeatureKind, Nn as Meta, ue as REMOVE_STYLES_ON_COMPONENT_DESTROY, Ln as Title, zn as VERSION, Dt as bootstrapApplication, Rt as createApplication, Hn as disableDebugTools, Pn as enableDebugTools, Ot as platformBrowser, $n as provideClientHydration, nt as provideCssVarNamespacing, Ct as provideProtractorTestingSupport, Vn as withEventReplay, xn as withHttpTransferCacheOptions, Bn as withI18nSupport, jn as withIncrementalHydration, Un as withNoHttpTransferCache, Fn as withNoIncrementalHydration, j as \u0275BrowserDomAdapter, F as \u0275BrowserGetTestability, M as \u0275DomEventsPlugin, V as \u0275DomRendererFactory2, Jt as \u0275DomSanitizerImpl, Te as \u0275KeyEventsPlugin, x as \u0275SharedStylesHost, Wn as \u0275getDOM };
/*! Bundled license information:

@angular/platform-browser/fesm2022/_dom_renderer-chunk.mjs:
@angular/platform-browser/fesm2022/_browser-chunk.mjs:
@angular/platform-browser/fesm2022/platform-browser.mjs:
  (**
   * @license Angular v22.1.4
   * (c) 2010-2026 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
