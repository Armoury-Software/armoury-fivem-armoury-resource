import { a as z, b as M } from "@nf-internal/chunk-OUIPMTRG";
import { a as q } from "@nf-internal/chunk-LYW4QERV";
import { a as X } from "@nf-internal/chunk-TTLGK2TK";
import { a as Z } from "@nf-internal/chunk-RNULGOC3";
import "@nf-internal/chunk-Z4DWJRNS";
import "@nf-internal/chunk-DKL52G2Q";
import { a as w, b as E, c as b, d as B, e as U, f as K, g as j, h as $, i as Y, j as V, k as G, l as H } from "@nf-internal/chunk-7XAFQ6L7";
import { a as y } from "@nf-internal/chunk-DPTZ4NR4";
import "@nf-internal/chunk-7NZLVDTY";
import { a as O, b as F, c as N, d as k, e as L, f as x, g as P } from "@nf-internal/chunk-IQY62IKL";
import "@nf-internal/chunk-PACPXHXL";
import { a as D, b as S } from "@nf-internal/chunk-TT7XXVKE";
import "@nf-internal/chunk-FZNAMQAG";
import "@nf-internal/chunk-PGIYYMTQ";
import { a as p } from "@nf-internal/chunk-P7VGBIY2";
import "@nf-internal/chunk-SVIUGILY";
import "@nf-internal/chunk-LAIZNMCN";
import { a as h } from "@nf-internal/chunk-DQ6Z6NC4";
import { a as J } from "@nf-internal/chunk-DG2NPXAW";
import "@nf-internal/chunk-XID2BBVI";
import "@nf-internal/chunk-MQ6KVUBG";
import "@nf-internal/chunk-2NFLSA4Y";
import * as _ from "@angular/core";
import { inject as o, DOCUMENT as T, APP_ID as Q, InjectionToken as W, NgZone as ee, Injector as te } from "@angular/core";
import { Subject as se } from "rxjs";
import "rxjs/operators";
import "@angular/platform-browser";
import "@angular/common";
var R = " ";
function re(r, i, e) { let t = d(r, i); e = e.trim(), !t.some(s => s.trim() === e) && (t.push(e), r.setAttribute(i, t.join(R))); }
function ie(r, i, e) { let t = d(r, i); e = e.trim(); let s = t.filter(n => n !== e); s.length ? r.setAttribute(i, s.join(R)) : r.removeAttribute(i); }
function d(r, i) { return r.getAttribute(i)?.match(/\S+/g) ?? []; }
var C = "cdk-describedby-message", c = "cdk-describedby-host", g = 0, ye = (() => { class r {
    _platform = o(h);
    _document = o(T);
    _messageRegistry = new Map;
    _messagesContainer = null;
    _id = `${g++}`;
    constructor() { o(p).load(y), this._id = o(Q) + "-" + g++; }
    describe(e, t, s) { if (!this._canBeDescribed(e, t))
        return; let n = l(t, s); typeof t != "string" ? (v(t, this._id), this._messageRegistry.set(n, { messageElement: t, referenceCount: 0 })) : this._messageRegistry.has(n) || this._createMessageElement(t, s), this._isElementDescribedByMessage(e, n) || this._addMessageReference(e, n); }
    removeDescription(e, t, s) { if (!t || !this._isElementNode(e))
        return; let n = l(t, s); if (this._isElementDescribedByMessage(e, n) && this._removeMessageReference(e, n), typeof t == "string") {
        let a = this._messageRegistry.get(n);
        a && a.referenceCount === 0 && this._deleteMessageElement(n);
    } this._messagesContainer?.childNodes.length === 0 && (this._messagesContainer.remove(), this._messagesContainer = null); }
    ngOnDestroy() { let e = this._document.querySelectorAll(`[${c}="${this._id}"]`); for (let t = 0; t < e.length; t++)
        this._removeCdkDescribedByReferenceIds(e[t]), e[t].removeAttribute(c); this._messagesContainer?.remove(), this._messagesContainer = null, this._messageRegistry.clear(); }
    _createMessageElement(e, t) { let s = this._document.createElement("div"); v(s, this._id), s.textContent = e, t && s.setAttribute("role", t), this._createMessagesContainer(), this._messagesContainer.appendChild(s), this._messageRegistry.set(l(e, t), { messageElement: s, referenceCount: 0 }); }
    _deleteMessageElement(e) { this._messageRegistry.get(e)?.messageElement?.remove(), this._messageRegistry.delete(e); }
    _createMessagesContainer() { if (this._messagesContainer)
        return; let e = "cdk-describedby-message-container", t = this._document.querySelectorAll(`.${e}[platform="server"]`); for (let n = 0; n < t.length; n++)
        t[n].remove(); let s = this._document.createElement("div"); s.style.visibility = "hidden", s.classList.add(e), s.classList.add("cdk-visually-hidden"), this._platform.isBrowser || s.setAttribute("platform", "server"), this._document.body.appendChild(s), this._messagesContainer = s; }
    _removeCdkDescribedByReferenceIds(e) { let t = d(e, "aria-describedby").filter(s => s.indexOf(C) != 0); e.setAttribute("aria-describedby", t.join(" ")); }
    _addMessageReference(e, t) { let s = this._messageRegistry.get(t); re(e, "aria-describedby", s.messageElement.id), e.setAttribute(c, this._id), s.referenceCount++; }
    _removeMessageReference(e, t) { let s = this._messageRegistry.get(t); s.referenceCount--, ie(e, "aria-describedby", s.messageElement.id), e.removeAttribute(c); }
    _isElementDescribedByMessage(e, t) { let s = d(e, "aria-describedby"), n = this._messageRegistry.get(t), a = n && n.messageElement.id; return !!a && s.indexOf(a) != -1; }
    _canBeDescribed(e, t) { if (!this._isElementNode(e))
        return !1; if (t && typeof t == "object")
        return !0; let s = t == null ? "" : `${t}`.trim(), n = e.getAttribute("aria-label"); return s ? !n || n.trim() !== s : !1; }
    _isElementNode(e) { return e.nodeType === this._document.ELEMENT_NODE; }
    static \u0275fac = function (t) { return new (t || r); };
    static \u0275prov = _.\u0275\u0275defineService({ token: r, factory: r.\u0275fac });
} return r; })();
function l(r, i) { return typeof r == "string" ? `${i || ""}/${r}` : r; }
function v(r, i) { r.id || (r.id = `${C}-${i}-${g++}`); }
var u = class {
    _isNoopTreeKeyManager = !0;
    change = new se;
    destroy() { this.change.complete(); }
    onKeydown() { }
    getActiveItemIndex() { return null; }
    getActiveItem() { return null; }
    focusItem() { }
}, Ee = { provide: M, useFactory: () => () => new u }, f = class extends b {
    _focusTrapManager;
    _inertStrategy;
    get enabled() { return this._enabled; }
    set enabled(i) { this._enabled = i, this._enabled ? this._focusTrapManager.register(this) : this._focusTrapManager.deregister(this); }
    constructor(i, e, t, s, n, a, A, I) { super(i, e, t, s, A.defer, I), this._focusTrapManager = n, this._inertStrategy = a, this._focusTrapManager.register(this); }
    destroy() { this._focusTrapManager.deregister(this), super.destroy(); }
    _enable() { this._inertStrategy.preventFocus(this), this.toggleAnchors(!0); }
    _disable() { this._inertStrategy.allowFocus(this), this.toggleAnchors(!1); }
}, m = class {
    _listener = null;
    preventFocus(i) { this._listener && i._document.removeEventListener("focus", this._listener, !0), this._listener = e => this._trapFocus(i, e), i._ngZone.runOutsideAngular(() => { i._document.addEventListener("focus", this._listener, !0); }); }
    allowFocus(i) { this._listener && (i._document.removeEventListener("focus", this._listener, !0), this._listener = null); }
    _trapFocus(i, e) { let t = e.target, s = i._element; t && !s.contains(t) && !t.closest?.("div.cdk-overlay-pane") && setTimeout(() => { i.enabled && !s.contains(i._document.activeElement) && i.focusFirstTabbableElement(); }); }
}, ne = new W("FOCUS_TRAP_INERT_STRATEGY"), oe = (() => { class r {
    _focusTrapStack = [];
    register(e) { this._focusTrapStack = this._focusTrapStack.filter(s => s !== e); let t = this._focusTrapStack; t.length && t[t.length - 1]._disable(), t.push(e), e._enable(); }
    deregister(e) { e._disable(); let t = this._focusTrapStack, s = t.indexOf(e); s !== -1 && (t.splice(s, 1), t.length && t[t.length - 1]._enable()); }
    static \u0275fac = function (t) { return new (t || r); };
    static \u0275prov = _.\u0275\u0275defineService({ token: r, factory: r.\u0275fac });
} return r; })(), be = (() => { class r {
    _checker = o(E);
    _ngZone = o(ee);
    _focusTrapManager = o(oe);
    _document = o(T);
    _inertStrategy;
    _injector = o(te);
    constructor() { let e = o(ne, { optional: !0 }); this._inertStrategy = e || new m; }
    create(e, t = { defer: !1 }) { return new f(e, this._checker, this._ngZone, this._document, this._focusTrapManager, this._inertStrategy, t, this._injector); }
    static \u0275fac = function (t) { return new (t || r); };
    static \u0275prov = _.\u0275\u0275defineService({ token: r, factory: r.\u0275fac });
} return r; })();
export { H as A11yModule, q as ActiveDescendantKeyManager, ye as AriaDescriber, Y as CdkAriaLive, P as CdkMonitorFocus, U as CdkTrapFocus, f as ConfigurableFocusTrap, be as ConfigurableFocusTrapFactory, m as EventListenerFocusTrapInertStrategy, L as FOCUS_MONITOR_DEFAULT_OPTIONS, ne as FOCUS_TRAP_INERT_STRATEGY, X as FocusKeyManager, x as FocusMonitor, k as FocusMonitorDetectionMode, b as FocusTrap, B as FocusTrapFactory, V as HighContrastMode, G as HighContrastModeDetector, F as INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS, O as INPUT_MODALITY_DETECTOR_OPTIONS, N as InputModalityDetector, E as InteractivityChecker, w as IsFocusableConfig, j as LIVE_ANNOUNCER_DEFAULT_OPTIONS, K as LIVE_ANNOUNCER_ELEMENT_TOKEN, Z as ListKeyManager, $ as LiveAnnouncer, Ee as NOOP_TREE_KEY_MANAGER_FACTORY_PROVIDER, u as NoopTreeKeyManager, M as TREE_KEY_MANAGER, z as TreeKeyManager, J as _IdGenerator, re as addAriaReferencedId, d as getAriaReferenceIds, D as isFakeMousedownFromScreenReader, S as isFakeTouchstartFromScreenReader, ie as removeAriaReferencedId };
