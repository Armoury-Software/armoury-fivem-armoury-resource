import { a as m, c as C } from "@nf-internal/chunk-DPTZ4NR4";
import { b as S } from "@nf-internal/chunk-7NZLVDTY";
import { b as w, d as I } from "@nf-internal/chunk-FZNAMQAG";
import { c as A } from "@nf-internal/chunk-PGIYYMTQ";
import { a as _ } from "@nf-internal/chunk-P7VGBIY2";
import { a as p } from "@nf-internal/chunk-DQ6Z6NC4";
import { DOCUMENT as x, \u0275getDOM as fe } from "@angular/common";
import { \u0275getDOM as Pe } from "@angular/common";
import * as d from "@angular/core";
import { inject as B, \u0275RuntimeError as b, \u0275global as ge, ApplicationRef as ve, makeEnvironmentProviders as Te, \u0275CACHE_ACTIVE as Ee, APP_BOOTSTRAP_LISTENER as ye, \u0275withDomHydration as Ce, \u0275withIncrementalHydration as Se, \u0275withEventReplay as we, \u0275withI18nSupport as Ie, ENVIRONMENT_INITIALIZER as Ne, \u0275IS_ENABLED_BLOCKING_INITIAL_NAVIGATION as ke, \u0275Console as De, \u0275formatRuntimeError as Me, SecurityContext as l, \u0275allowSanitizationBypassAndThrow as h, \u0275unwrapSafeValue as f, \u0275_sanitizeUrl as P, \u0275_sanitizeHtml as V, \u0275bypassSanitizationTrustHtml as U, \u0275bypassSanitizationTrustStyle as j, \u0275bypassSanitizationTrustScript as $, \u0275bypassSanitizationTrustUrl as z, \u0275bypassSanitizationTrustResourceUrl as W, Version as Re } from "@angular/core";
import { \u0275withHttpTransferCache as Fe } from "@angular/common/http";
var g = (() => { class t {
    static \u0275fac = function (n) { return new (n || t); };
    static \u0275prov = d.\u0275\u0275defineInjectable({ token: t, factory: function (n) { let r = null; return n ? r = new (n || t) : r = d.\u0275\u0275inject(K), r; }, providedIn: "root" });
} return t; })(), K = (() => { class t extends g {
    _doc = B(x);
    sanitize(e, n) { if (n == null)
        return null; switch (e) {
        case l.NONE: return n;
        case l.HTML: return h(n, "HTML") ? f(n) : V(this._doc, String(n)).toString();
        case l.STYLE: return h(n, "Style") ? f(n) : n;
        case l.SCRIPT:
            if (h(n, "Script"))
                return f(n);
            throw new b(5200, !1);
        case l.URL: return h(n, "URL") ? f(n) : P(String(n));
        case l.RESOURCE_URL:
            if (h(n, "ResourceURL"))
                return f(n);
            throw new b(-5201, !1);
        default: throw new b(5202, !1);
    } }
    bypassSecurityTrustHtml(e) { return U(e); }
    bypassSecurityTrustStyle(e) { return j(e); }
    bypassSecurityTrustScript(e) { return $(e); }
    bypassSecurityTrustUrl(e) { return z(e); }
    bypassSecurityTrustResourceUrl(e) { return W(e); }
    static \u0275fac = function (n) { return new (n || t); };
    static \u0275prov = d.\u0275\u0275defineService({ token: t, factory: t.\u0275fac });
} return t; })();
import * as a from "@angular/core";
import { inject as s, ElementRef as L, booleanAttribute as N, afterNextRender as G, NgZone as E, DOCUMENT as y, Injector as Z, InjectionToken as R } from "@angular/core";
var k = class {
    ignoreVisibility = !1;
    ignoreInert = !1;
}, q = (() => { class t {
    _platform = s(p);
    isDisabled(e) { return e.hasAttribute("disabled"); }
    isVisible(e) { return X(e) && getComputedStyle(e).visibility === "visible"; }
    isTabbable(e) { if (!this._platform.isBrowser)
        return !1; let n = Y(se(e)); if (n && (D(n) === -1 || !this.isVisible(n)))
        return !1; let r = e.nodeName.toLowerCase(), o = D(e); return e.hasAttribute("contenteditable") ? o !== -1 : r === "iframe" || r === "object" || this._platform.WEBKIT && this._platform.IOS && !ie(e) ? !1 : r === "audio" ? e.hasAttribute("controls") ? o !== -1 : !1 : r === "video" ? o === -1 ? !1 : o !== null ? !0 : this._platform.FIREFOX || e.hasAttribute("controls") : e.tabIndex >= 0; }
    isFocusable(e, n) { return re(e) && !this.isDisabled(e) && (n?.ignoreInert || !e.closest?.("[inert]")) && (n?.ignoreVisibility || this.isVisible(e)); }
    static \u0275fac = function (n) { return new (n || t); };
    static \u0275prov = a.\u0275\u0275defineService({ token: t, factory: t.\u0275fac });
} return t; })();
function Y(t) { try {
    return t.frameElement;
}
catch {
    return null;
} }
function X(t) { return !!(t.offsetWidth || t.offsetHeight || typeof t.getClientRects == "function" && t.getClientRects().length); }
function J(t) { let i = t.nodeName.toLowerCase(); return i === "input" || i === "select" || i === "button" || i === "textarea"; }
function Q(t) { return te(t) && t.type == "hidden"; }
function ee(t) { return ne(t) && t.hasAttribute("href"); }
function te(t) { return t.nodeName.toLowerCase() == "input"; }
function ne(t) { return t.nodeName.toLowerCase() == "a"; }
function H(t) { if (!t.hasAttribute("tabindex") || t.tabIndex === void 0)
    return !1; let i = t.getAttribute("tabindex"); return !!(i && !isNaN(parseInt(i, 10))); }
function D(t) { if (!H(t))
    return null; let i = parseInt(t.getAttribute("tabindex") || "", 10); return isNaN(i) ? -1 : i; }
function ie(t) { let i = t.nodeName.toLowerCase(), e = i === "input" && t.type; return e === "text" || e === "password" || i === "select" || i === "textarea"; }
function re(t) { return Q(t) ? !1 : J(t) || ee(t) || t.hasAttribute("contenteditable") || H(t); }
function se(t) { return t.ownerDocument && t.ownerDocument.defaultView || window; }
var T = class {
    _element;
    _checker;
    _ngZone;
    _document;
    _injector;
    _startAnchor = null;
    _endAnchor = null;
    _hasAttached = !1;
    startAnchorListener = () => { !this.focusLastTabbableElement() && this._checker.isFocusable(this._element) && this._element.focus(); };
    endAnchorListener = () => { !this.focusFirstTabbableElement() && this._checker.isFocusable(this._element) && this._element.focus(); };
    get enabled() { return this._enabled; }
    set enabled(i) { this._enabled = i, this._startAnchor && this._endAnchor && (this._toggleAnchorTabIndex(i, this._startAnchor), this._toggleAnchorTabIndex(i, this._endAnchor)); }
    _enabled = !0;
    constructor(i, e, n, r, o = !1, c) { this._element = i, this._checker = e, this._ngZone = n, this._document = r, this._injector = c, o || this.attachAnchors(); }
    destroy() { let i = this._startAnchor, e = this._endAnchor; i && (i.removeEventListener("focus", this.startAnchorListener), i.remove()), e && (e.removeEventListener("focus", this.endAnchorListener), e.remove()), this._startAnchor = this._endAnchor = null, this._hasAttached = !1; }
    attachAnchors() { return this._hasAttached ? !0 : (this._ngZone.runOutsideAngular(() => { this._startAnchor || (this._startAnchor = this._createAnchor(), this._startAnchor.addEventListener("focus", this.startAnchorListener)), this._endAnchor || (this._endAnchor = this._createAnchor(), this._endAnchor.addEventListener("focus", this.endAnchorListener)); }), this._element.parentNode && (this._element.parentNode.insertBefore(this._startAnchor, this._element), this._element.parentNode.insertBefore(this._endAnchor, this._element.nextSibling), this._hasAttached = !0), this._hasAttached); }
    focusInitialElementWhenReady(i) { return new Promise(e => { this._executeOnStable(() => e(this.focusInitialElement(i))); }); }
    focusFirstTabbableElementWhenReady(i) { return new Promise(e => { this._executeOnStable(() => e(this.focusFirstTabbableElement(i))); }); }
    focusLastTabbableElementWhenReady(i) { return new Promise(e => { this._executeOnStable(() => e(this.focusLastTabbableElement(i))); }); }
    _getRegionBoundary(i) { let e = this._element.querySelectorAll(`[cdk-focus-region-${i}], [cdkFocusRegion${i}], [cdk-focus-${i}]`); return i == "start" ? e.length ? e[0] : this._getFirstTabbableElement(this._element) : e.length ? e[e.length - 1] : this._getLastTabbableElement(this._element); }
    focusInitialElement(i) { let e = this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]"); if (e) {
        if (!this._checker.isFocusable(e)) {
            let n = this._getFirstTabbableElement(e);
            return n?.focus(i), !!n;
        }
        return e.focus(i), !0;
    } return this.focusFirstTabbableElement(i); }
    focusFirstTabbableElement(i) { let e = this._getRegionBoundary("start"); return e && e.focus(i), !!e; }
    focusLastTabbableElement(i) { let e = this._getRegionBoundary("end"); return e && e.focus(i), !!e; }
    hasAttached() { return this._hasAttached; }
    _getFirstTabbableElement(i) { if (this._checker.isFocusable(i) && this._checker.isTabbable(i))
        return i; let e = i.children; for (let n = 0; n < e.length; n++) {
        let r = e[n].nodeType === this._document.ELEMENT_NODE ? this._getFirstTabbableElement(e[n]) : null;
        if (r)
            return r;
    } return null; }
    _getLastTabbableElement(i) { if (this._checker.isFocusable(i) && this._checker.isTabbable(i))
        return i; let e = i.children; for (let n = e.length - 1; n >= 0; n--) {
        let r = e[n].nodeType === this._document.ELEMENT_NODE ? this._getLastTabbableElement(e[n]) : null;
        if (r)
            return r;
    } return null; }
    _createAnchor() { let i = this._document.createElement("div"); return this._toggleAnchorTabIndex(this._enabled, i), i.classList.add("cdk-visually-hidden"), i.classList.add("cdk-focus-trap-anchor"), i.setAttribute("aria-hidden", "true"), i; }
    _toggleAnchorTabIndex(i, e) { i ? e.setAttribute("tabindex", "0") : e.removeAttribute("tabindex"); }
    toggleAnchors(i) { this._startAnchor && this._endAnchor && (this._toggleAnchorTabIndex(i, this._startAnchor), this._toggleAnchorTabIndex(i, this._endAnchor)); }
    _executeOnStable(i) { G(i, { injector: this._injector }); }
}, oe = (() => { class t {
    _checker = s(q);
    _ngZone = s(E);
    _document = s(y);
    _injector = s(Z);
    constructor() { s(_).load(m); }
    create(e, n = !1) { return new T(e, this._checker, this._ngZone, this._document, n, this._injector); }
    static \u0275fac = function (n) { return new (n || t); };
    static \u0275prov = a.\u0275\u0275defineService({ token: t, factory: t.\u0275fac });
} return t; })(), Je = (() => { class t {
    _elementRef = s(L);
    _focusTrapFactory = s(oe);
    focusTrap = void 0;
    _previouslyFocusedElement = null;
    get enabled() { return this.focusTrap?.enabled || !1; }
    set enabled(e) { this.focusTrap && (this.focusTrap.enabled = e); }
    autoCapture = !1;
    constructor() { s(p).isBrowser && (this.focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement, !0)); }
    ngOnDestroy() { this.focusTrap?.destroy(), this._previouslyFocusedElement && (this._previouslyFocusedElement.focus(), this._previouslyFocusedElement = null); }
    ngAfterContentInit() { this.focusTrap?.attachAnchors(), this.autoCapture && this._captureFocus(); }
    ngDoCheck() { this.focusTrap && !this.focusTrap.hasAttached() && this.focusTrap.attachAnchors(); }
    ngOnChanges(e) { let n = e.autoCapture; n && !n.firstChange && this.autoCapture && this.focusTrap?.hasAttached() && this._captureFocus(); }
    _captureFocus() { this._previouslyFocusedElement = A(), this.focusTrap?.focusInitialElementWhenReady(); }
    static \u0275fac = function (n) { return new (n || t); };
    static \u0275dir = a.\u0275\u0275defineDirective({ type: t, selectors: [["", "cdkTrapFocus", ""]], inputs: { enabled: [2, "cdkTrapFocus", "enabled", N], autoCapture: [2, "cdkTrapFocusAutoCapture", "autoCapture", N] }, exportAs: ["cdkTrapFocus"], features: [a.\u0275\u0275NgOnChangesFeature] });
} return t; })(), ae = new R("liveAnnouncerElement", { providedIn: "root", factory: () => null }), ce = new R("LIVE_ANNOUNCER_DEFAULT_OPTIONS"), ue = 0, le = (() => { class t {
    _ngZone = s(E);
    _defaultOptions = s(ce, { optional: !0 });
    _liveElement;
    _document = s(y);
    _sanitizer = s(g);
    _previousTimeout;
    _currentPromise;
    _currentResolve;
    constructor() { let e = s(ae, { optional: !0 }); this._liveElement = e || this._createLiveElement(); }
    announce(e, ...n) { let r = this._defaultOptions, o, c; return n.length === 1 && typeof n[0] == "number" ? c = n[0] : [o, c] = n, this.clear(), clearTimeout(this._previousTimeout), o || (o = r && r.politeness ? r.politeness : "polite"), c == null && r && (c = r.duration), this._liveElement.setAttribute("aria-live", o), this._liveElement.id && this._exposeAnnouncerToModals(this._liveElement.id), this._ngZone.runOutsideAngular(() => (this._currentPromise || (this._currentPromise = new Promise(F => this._currentResolve = F)), clearTimeout(this._previousTimeout), this._previousTimeout = setTimeout(() => { !e || typeof e == "string" ? this._liveElement.textContent = e : C(this._liveElement, e, this._sanitizer), typeof c == "number" && (this._previousTimeout = setTimeout(() => this.clear(), c)), this._currentResolve?.(), this._currentPromise = this._currentResolve = void 0; }, 100), this._currentPromise)); }
    clear() { this._liveElement && (this._liveElement.textContent = ""); }
    ngOnDestroy() { clearTimeout(this._previousTimeout), this._liveElement?.remove(), this._liveElement = null, this._currentResolve?.(), this._currentPromise = this._currentResolve = void 0; }
    _createLiveElement() { let e = "cdk-live-announcer-element", n = this._document.getElementsByClassName(e), r = this._document.createElement("div"); for (let o = 0; o < n.length; o++)
        n[o].remove(); return r.classList.add(e), r.classList.add("cdk-visually-hidden"), r.setAttribute("aria-atomic", "true"), r.setAttribute("aria-live", "polite"), r.id = `cdk-live-announcer-${ue++}`, this._document.body.appendChild(r), r; }
    _exposeAnnouncerToModals(e) { let n = this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]'); for (let r = 0; r < n.length; r++) {
        let o = n[r], c = o.getAttribute("aria-owns");
        c ? c.indexOf(e) === -1 && o.setAttribute("aria-owns", c + " " + e) : o.setAttribute("aria-owns", e);
    } }
    static \u0275fac = function (n) { return new (n || t); };
    static \u0275prov = a.\u0275\u0275defineService({ token: t, factory: t.\u0275fac });
} return t; })(), Qe = (() => { class t {
    _elementRef = s(L);
    _liveAnnouncer = s(le);
    _contentObserver = s(w);
    _ngZone = s(E);
    get politeness() { return this._politeness; }
    set politeness(e) { this._politeness = e === "off" || e === "assertive" ? e : "polite", this._politeness === "off" ? this._subscription && (this._subscription.unsubscribe(), this._subscription = void 0) : this._subscription || (this._subscription = this._ngZone.runOutsideAngular(() => this._contentObserver.observe(this._elementRef).subscribe(() => { let n = this._elementRef.nativeElement.textContent; n !== this._previousAnnouncedText && (this._liveAnnouncer.announce(n, this._politeness, this.duration), this._previousAnnouncedText = n); }))); }
    _politeness = "polite";
    duration;
    _previousAnnouncedText;
    _subscription;
    constructor() { s(_).load(m); }
    ngOnDestroy() { this._subscription?.unsubscribe(); }
    static \u0275fac = function (n) { return new (n || t); };
    static \u0275dir = a.\u0275\u0275defineDirective({ type: t, selectors: [["", "cdkAriaLive", ""]], inputs: { politeness: [0, "cdkAriaLive", "politeness"], duration: [0, "cdkAriaLiveDuration", "duration"] }, exportAs: ["cdkAriaLive"] });
} return t; })(), u = (function (t) { return t[t.NONE = 0] = "NONE", t[t.BLACK_ON_WHITE = 1] = "BLACK_ON_WHITE", t[t.WHITE_ON_BLACK = 2] = "WHITE_ON_BLACK", t; })(u || {}), M = "cdk-high-contrast-black-on-white", O = "cdk-high-contrast-white-on-black", v = "cdk-high-contrast-active", de = (() => { class t {
    _platform = s(p);
    _hasCheckedHighContrastMode = !1;
    _document = s(y);
    _breakpointSubscription;
    constructor() { this._breakpointSubscription = s(S).observe("(forced-colors: active)").subscribe(() => { this._hasCheckedHighContrastMode && (this._hasCheckedHighContrastMode = !1, this._applyBodyHighContrastModeCssClasses()); }); }
    getHighContrastMode() { if (!this._platform.isBrowser)
        return u.NONE; let e = this._document.createElement("div"); e.style.backgroundColor = "rgb(1,2,3)", e.style.position = "absolute", this._document.body.appendChild(e); let n = this._document.defaultView || window, r = n && n.getComputedStyle ? n.getComputedStyle(e) : null, o = (r && r.backgroundColor || "").replace(/ /g, ""); switch (e.remove(), o) {
        case "rgb(0,0,0)":
        case "rgb(45,50,54)":
        case "rgb(32,32,32)": return u.WHITE_ON_BLACK;
        case "rgb(255,255,255)":
        case "rgb(255,250,239)": return u.BLACK_ON_WHITE;
    } return u.NONE; }
    ngOnDestroy() { this._breakpointSubscription.unsubscribe(); }
    _applyBodyHighContrastModeCssClasses() { if (!this._hasCheckedHighContrastMode && this._platform.isBrowser && this._document.body) {
        let e = this._document.body.classList;
        e.remove(v, M, O), this._hasCheckedHighContrastMode = !0;
        let n = this.getHighContrastMode();
        n === u.BLACK_ON_WHITE ? e.add(v, M) : n === u.WHITE_ON_BLACK && e.add(v, O);
    } }
    static \u0275fac = function (n) { return new (n || t); };
    static \u0275prov = a.\u0275\u0275defineService({ token: t, factory: t.\u0275fac });
} return t; })(), et = (() => { class t {
    constructor() { s(de)._applyBodyHighContrastModeCssClasses(); }
    static \u0275fac = function (n) { return new (n || t); };
    static \u0275mod = a.\u0275\u0275defineNgModule({ type: t });
    static \u0275inj = a.\u0275\u0275defineInjector({ imports: [I] });
} return t; })();
export { k as a, q as b, T as c, oe as d, Je as e, ae as f, ce as g, le as h, Qe as i, u as j, de as k, et as l };
/*! Bundled license information:

@angular/platform-browser/fesm2022/platform-browser.mjs:
  (**
   * @license Angular v22.1.4
   * (c) 2010-2026 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
