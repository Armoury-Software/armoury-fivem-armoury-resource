import { c as w } from "@nf-internal/chunk-L6LZ2NRF";
import * as u from "@angular/core";
import { InjectionToken as ue, debounced as Bt, computed as jt, \u0275chain as Kt, resource as qt, \u0275isPromise as Ht, linkedSignal as Ut, inject as Wt, \u0275RuntimeError as Gt, untracked as Qt, signal as Yt, CSP_NONCE as Xt, input as en, Renderer2 as tn, DestroyRef as nn, Injector as rn, ElementRef as on, afterRenderEffect as an, effect as dn, makeEnvironmentProviders as sn, declareExperimentalWebMcpTool as cn } from "@angular/core";
import { untracked as st, \u0275RuntimeError as J, computed as h, \u0275isInParamsFunction as ct, \u0275setInParamsFunction as ft, runInInjectionContext as ut, Injector as mt, linkedSignal as ht, signal as pt, APP_ID as gt, effect as bt, InjectionToken as yt, inject as vt } from "@angular/core";
import { SIGNAL as xt } from "@angular/core/primitives/signals";
var C = Symbol("FIELD_TREE");
var f = { list() { return { reduce: (n, a) => a === void 0 ? n : [...n, a], getInitial: () => [] }; }, min() { return { reduce: (n, a) => n === void 0 || a === void 0 ? n ?? a : a < n ? a : n, getInitial: () => { } }; }, max() { return { reduce: (n, a) => n === void 0 || a === void 0 ? n ?? a : a > n ? a : n, getInitial: () => { } }; }, or() { return { reduce: (n, a) => n || a, getInitial: () => !1 }; }, and() { return { reduce: (n, a) => n && a, getInitial: () => !0 }; }, override: ee };
function ee(n) { return { reduce: (a, t) => t, getInitial: () => n?.() }; }
var M = Symbol("IS_ASYNC_VALIDATION_RESOURCE"), x = class {
    reducer;
    create;
    brand;
    [M];
    constructor(a, t) { this.reducer = a, this.create = t; }
};
function s(n) { return new x(n ?? f.override()); }
function E() { return s(); }
var te = s(f.or()), ne = E(), ie = s(f.max()), re = s(f.max()), oe = E(), ae = s(f.min()), de = s(f.min()), le = s(f.max()), se = s(f.min()), ce = s(f.list());
var fe = s();
var St = h(() => !1);
var Nt = h(() => []), wt = h(() => { throw new J(1905, !1); });
var Ct = h(() => []), Mt = h(() => !1);
import { DOCUMENT as mn } from "@angular/common";
import { httpResource as pn } from "@angular/common/http";
import "@angular/core/primitives/signals";
function p(n) { return typeof n == "function" && n[C] === !0; }
var bn = new ue("");
import { _IdGenerator as N } from "@angular/cdk/a11y";
import { Directionality as me } from "@angular/cdk/bidi";
import { coerceBooleanProperty as he } from "@angular/cdk/coercion";
import { Platform as pe } from "@angular/cdk/platform";
import { NgTemplateOutlet as ge } from "@angular/common";
import * as e from "@angular/core";
import { InjectionToken as m, inject as l, ElementRef as y, NgZone as v, Renderer2 as be, ChangeDetectorRef as ye, isSignal as ve, viewChild as g, computed as S, contentChild as _e, signal as xe, effect as Se, afterRenderEffect as Ne } from "@angular/core";
import { Subscription as we, Subject as Ce, merge as Me } from "rxjs";
import { startWith as Ee, map as Fe, pairwise as Re, filter as Te, takeUntil as De } from "rxjs/operators";
import { SharedResizeObserver as Ae } from "@angular/cdk/observers/private";
var Ie = ["notch"], Pe = ["*"], F = ["iconPrefixContainer"], R = ["textPrefixContainer"], T = ["iconSuffixContainer"], D = ["textSuffixContainer"], Oe = ["textField"], ke = ["*", [["mat-label"]], [["", "matPrefix", ""], ["", "matIconPrefix", ""]], [["", "matTextPrefix", ""]], [["", "matTextSuffix", ""]], [["", "matSuffix", ""], ["", "matIconSuffix", ""]], [["mat-error"], ["", "matError", ""]], [["mat-hint", 3, "align", "end"]], [["mat-hint", "align", "end"]]], Le = ["*", "mat-label", "[matPrefix], [matIconPrefix]", "[matTextPrefix]", "[matTextSuffix]", "[matSuffix], [matIconSuffix]", "mat-error, [matError]", "mat-hint:not([align='end'])", "mat-hint[align='end']"];
function ze(n, a) { n & 1 && e.\u0275\u0275element(0, "span", 21); }
function Ve(n, a) { if (n & 1 && (e.\u0275\u0275elementStart(0, "label", 20), e.\u0275\u0275projection(1, 1), e.\u0275\u0275conditionalCreate(2, ze, 1, 0, "span", 21), e.\u0275\u0275elementEnd()), n & 2) {
    let t = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275property("floating", t._shouldLabelFloat())("monitorResize", t._hasOutline())("id", t._labelId), e.\u0275\u0275attribute("for", t._control.disableAutomaticLabeling ? null : t._control.id), e.\u0275\u0275advance(2), e.\u0275\u0275conditional(!t.hideRequiredMarker && t._unwrapMaybeSignal(t._control.required) ? 2 : -1);
} }
function Be(n, a) { if (n & 1 && e.\u0275\u0275conditionalCreate(0, Ve, 3, 5, "label", 20), n & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275conditional(t._hasFloatingLabel() ? 0 : -1);
} }
function je(n, a) { n & 1 && e.\u0275\u0275element(0, "div", 7); }
function Ke(n, a) { }
function qe(n, a) { if (n & 1 && e.\u0275\u0275template(0, Ke, 0, 0, "ng-template", 13), n & 2) {
    e.\u0275\u0275nextContext(2);
    let t = e.\u0275\u0275reference(1);
    e.\u0275\u0275property("ngTemplateOutlet", t);
} }
function He(n, a) { if (n & 1 && (e.\u0275\u0275elementStart(0, "div", 9), e.\u0275\u0275conditionalCreate(1, qe, 1, 1, null, 13), e.\u0275\u0275elementEnd()), n & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275property("matFormFieldNotchedOutlineOpen", t._shouldLabelFloat()), e.\u0275\u0275advance(), e.\u0275\u0275conditional(t._forceDisplayInfixLabel() ? -1 : 1);
} }
function Ue(n, a) { n & 1 && (e.\u0275\u0275elementStart(0, "div", 10, 2), e.\u0275\u0275projection(2, 2), e.\u0275\u0275elementEnd()); }
function We(n, a) { n & 1 && (e.\u0275\u0275elementStart(0, "div", 11, 3), e.\u0275\u0275projection(2, 3), e.\u0275\u0275elementEnd()); }
function Ge(n, a) { }
function $e(n, a) { if (n & 1 && e.\u0275\u0275template(0, Ge, 0, 0, "ng-template", 13), n & 2) {
    e.\u0275\u0275nextContext();
    let t = e.\u0275\u0275reference(1);
    e.\u0275\u0275property("ngTemplateOutlet", t);
} }
function Qe(n, a) { n & 1 && (e.\u0275\u0275elementStart(0, "div", 14, 4), e.\u0275\u0275projection(2, 4), e.\u0275\u0275elementEnd()); }
function Ye(n, a) { n & 1 && (e.\u0275\u0275elementStart(0, "div", 15, 5), e.\u0275\u0275projection(2, 5), e.\u0275\u0275elementEnd()); }
function Xe(n, a) { n & 1 && e.\u0275\u0275element(0, "div", 16); }
function Ze(n, a) { n & 1 && (e.\u0275\u0275elementStart(0, "div", 18), e.\u0275\u0275projection(1, 6), e.\u0275\u0275elementEnd()); }
function Je(n, a) { if (n & 1 && (e.\u0275\u0275elementStart(0, "mat-hint", 22), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), n & 2) {
    let t = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275property("id", t._hintLabelId), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t.hintLabel);
} }
function et(n, a) { if (n & 1 && (e.\u0275\u0275elementStart(0, "div", 19), e.\u0275\u0275conditionalCreate(1, Je, 2, 2, "mat-hint", 22), e.\u0275\u0275projection(2, 7), e.\u0275\u0275element(3, "div", 23), e.\u0275\u0275projection(4, 8), e.\u0275\u0275elementEnd()), n & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275conditional(t.hintLabel ? 1 : -1);
} }
var A = (() => { class n {
    static \u0275fac = function (r) { return new (r || n); };
    static \u0275dir = e.\u0275\u0275defineDirective({ type: n, selectors: [["mat-label"]] });
} return n; })(), B = new m("MatError"), zn = (() => { class n {
    id = l(N).getId("mat-mdc-error-");
    static \u0275fac = function (r) { return new (r || n); };
    static \u0275dir = e.\u0275\u0275defineDirective({ type: n, selectors: [["mat-error"], ["", "matError", ""]], hostAttrs: [1, "mat-mdc-form-field-error", "mat-mdc-form-field-bottom-align"], hostVars: 1, hostBindings: function (r, i) { r & 2 && e.\u0275\u0275domProperty("id", i.id); }, inputs: { id: "id" }, features: [e.\u0275\u0275ProvidersFeature([{ provide: B, useExisting: n }])] });
} return n; })(), I = (() => { class n {
    align = "start";
    id = l(N).getId("mat-mdc-hint-");
    static \u0275fac = function (r) { return new (r || n); };
    static \u0275dir = e.\u0275\u0275defineDirective({ type: n, selectors: [["mat-hint"]], hostAttrs: [1, "mat-mdc-form-field-hint", "mat-mdc-form-field-bottom-align"], hostVars: 4, hostBindings: function (r, i) { r & 2 && (e.\u0275\u0275domProperty("id", i.id), e.\u0275\u0275attribute("align", null), e.\u0275\u0275classProp("mat-mdc-form-field-hint-end", i.align === "end")); }, inputs: { align: "align", id: "id" } });
} return n; })(), j = new m("MatPrefix"), Vn = (() => { class n {
    set _isTextSelector(t) { this._isText = !0; }
    _isText = !1;
    static \u0275fac = function (r) { return new (r || n); };
    static \u0275dir = e.\u0275\u0275defineDirective({ type: n, selectors: [["", "matPrefix", ""], ["", "matIconPrefix", ""], ["", "matTextPrefix", ""]], inputs: { _isTextSelector: [0, "matTextPrefix", "_isTextSelector"] }, features: [e.\u0275\u0275ProvidersFeature([{ provide: j, useExisting: n }])] });
} return n; })(), K = new m("MatSuffix"), Bn = (() => { class n {
    set _isTextSelector(t) { this._isText = !0; }
    _isText = !1;
    static \u0275fac = function (r) { return new (r || n); };
    static \u0275dir = e.\u0275\u0275defineDirective({ type: n, selectors: [["", "matSuffix", ""], ["", "matIconSuffix", ""], ["", "matTextSuffix", ""]], inputs: { _isTextSelector: [0, "matTextSuffix", "_isTextSelector"] }, features: [e.\u0275\u0275ProvidersFeature([{ provide: K, useExisting: n }])] });
} return n; })(), q = new m("FloatingLabelParent"), P = (() => { class n {
    _elementRef = l(y);
    get floating() { return this._floating; }
    set floating(t) { this._floating = t, this.monitorResize && this._handleResize(); }
    _floating = !1;
    get monitorResize() { return this._monitorResize; }
    set monitorResize(t) { this._monitorResize = t, this._monitorResize ? this._subscribeToResize() : this._resizeSubscription.unsubscribe(); }
    _monitorResize = !1;
    _resizeObserver = l(Ae);
    _ngZone = l(v);
    _parent = l(q);
    _resizeSubscription = new we;
    ngOnDestroy() { this._resizeSubscription.unsubscribe(); }
    getWidth() { return tt(this._elementRef.nativeElement); }
    get element() { return this._elementRef.nativeElement; }
    _handleResize() { setTimeout(() => this._parent._handleLabelResized()); }
    _subscribeToResize() { this._resizeSubscription.unsubscribe(), this._ngZone.runOutsideAngular(() => { this._resizeSubscription = this._resizeObserver.observe(this._elementRef.nativeElement, { box: "border-box" }).subscribe(() => this._handleResize()); }); }
    static \u0275fac = function (r) { return new (r || n); };
    static \u0275dir = e.\u0275\u0275defineDirective({ type: n, selectors: [["label", "matFormFieldFloatingLabel", ""]], hostAttrs: [1, "mdc-floating-label", "mat-mdc-floating-label"], hostVars: 2, hostBindings: function (r, i) { r & 2 && e.\u0275\u0275classProp("mdc-floating-label--float-above", i.floating); }, inputs: { floating: "floating", monitorResize: "monitorResize" } });
} return n; })();
function tt(n) { let a = n; if (a.offsetParent !== null)
    return a.scrollWidth; let t = a.cloneNode(!0); t.style.setProperty("position", "absolute"), t.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(t); let r = t.scrollWidth; return t.remove(), r; }
var O = "mdc-line-ripple--active", b = "mdc-line-ripple--deactivating", k = (() => { class n {
    _elementRef = l(y);
    _cleanupTransitionEnd;
    constructor() { let t = l(v), r = l(be); t.runOutsideAngular(() => { this._cleanupTransitionEnd = r.listen(this._elementRef.nativeElement, "transitionend", this._handleTransitionEnd); }); }
    activate() { let t = this._elementRef.nativeElement.classList; t.remove(b), t.add(O); }
    deactivate() { this._elementRef.nativeElement.classList.add(b); }
    _handleTransitionEnd = t => { let r = this._elementRef.nativeElement.classList, i = r.contains(b); t.propertyName === "opacity" && i && r.remove(O, b); };
    ngOnDestroy() { this._cleanupTransitionEnd(); }
    static \u0275fac = function (r) { return new (r || n); };
    static \u0275dir = e.\u0275\u0275defineDirective({ type: n, selectors: [["div", "matFormFieldLineRipple", ""]], hostAttrs: [1, "mdc-line-ripple"] });
} return n; })(), L = (() => { class n {
    _elementRef = l(y);
    _ngZone = l(v);
    open = !1;
    _notch;
    ngAfterViewInit() { let t = this._elementRef.nativeElement, r = t.querySelector(".mdc-floating-label"); r ? (t.classList.add("mdc-notched-outline--upgraded"), typeof requestAnimationFrame == "function" && (r.style.transitionDuration = "0s", this._ngZone.runOutsideAngular(() => { requestAnimationFrame(() => r.style.transitionDuration = ""); }))) : t.classList.add("mdc-notched-outline--no-label"); }
    _setNotchWidth(t) { let r = this._notch.nativeElement; !this.open || !t ? r.style.width = "" : r.style.width = `calc(${t}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`; }
    _setMaxWidth(t) { this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width", `calc(100% - ${t}px)`); }
    static \u0275fac = function (r) { return new (r || n); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["div", "matFormFieldNotchedOutline", ""]], viewQuery: function (r, i) { if (r & 1 && e.\u0275\u0275viewQuery(Ie, 5), r & 2) {
            let o;
            e.\u0275\u0275queryRefresh(o = e.\u0275\u0275loadQuery()) && (i._notch = o.first);
        } }, hostAttrs: [1, "mdc-notched-outline"], hostVars: 2, hostBindings: function (r, i) { r & 2 && e.\u0275\u0275classProp("mdc-notched-outline--notched", i.open); }, inputs: { open: [0, "matFormFieldNotchedOutlineOpen", "open"] }, ngContentSelectors: Pe, decls: 5, vars: 0, consts: [["notch", ""], [1, "mat-mdc-notch-piece", "mdc-notched-outline__leading"], [1, "mat-mdc-notch-piece", "mdc-notched-outline__notch"], [1, "mat-mdc-notch-piece", "mdc-notched-outline__trailing"]], template: function (r, i) { r & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275domElement(0, "div", 1), e.\u0275\u0275domElementStart(1, "div", 2, 0), e.\u0275\u0275projection(3), e.\u0275\u0275domElementEnd(), e.\u0275\u0275domElement(4, "div", 3)); }, encapsulation: 2 });
} return n; })(), nt = (() => { class n {
    id;
    ngField = null;
    ngControl = null;
    focused = !1;
    empty = !1;
    shouldLabelFloat = !1;
    required = !1;
    disabled = !1;
    errorState = !1;
    controlType;
    autofilled;
    userAriaDescribedBy;
    disableAutomaticLabeling;
    describedByIds;
    stateChanges = null;
    value;
    static \u0275fac = function (r) { return new (r || n); };
    static \u0275dir = e.\u0275\u0275defineDirective({ type: n });
} return n; })();
function jn() { return Error("Placeholder attribute and child element were both specified."); }
function Kn(n) { return Error(`A hint was already declared for 'align="${n}"'.`); }
function qn() { return Error("mat-form-field must contain a MatFormFieldControl."); }
var it = new m("MatFormField"), rt = new m("MAT_FORM_FIELD_DEFAULT_OPTIONS"), z = "fill", ot = "auto", V = "fixed", at = "translateY(-50%)", Hn = (() => {
    class n {
        _elementRef = l(y);
        _changeDetectorRef = l(ye);
        _platform = l(pe);
        _idGenerator = l(N);
        _ngZone = l(v);
        _defaults = l(rt, { optional: !0 });
        _currentDirection;
        _unwrapMaybeSignal(t) { return ve(t) ? t() : t; }
        _textField;
        _iconPrefixContainer;
        _textPrefixContainer;
        _iconSuffixContainer;
        _textSuffixContainer;
        _floatingLabel;
        _notchedOutline;
        _lineRipple;
        _iconPrefixContainerSignal = g("iconPrefixContainer");
        _textPrefixContainerSignal = g("textPrefixContainer");
        _iconSuffixContainerSignal = g("iconSuffixContainer");
        _textSuffixContainerSignal = g("textSuffixContainer");
        _prefixSuffixContainers = S(() => [this._iconPrefixContainerSignal(), this._textPrefixContainerSignal(), this._iconSuffixContainerSignal(), this._textSuffixContainerSignal()].map(t => t?.nativeElement).filter(t => t !== void 0));
        _formFieldControl;
        _prefixChildren;
        _suffixChildren;
        _errorChildren;
        _hintChildren;
        _labelChild = _e(A);
        get hideRequiredMarker() { return this._hideRequiredMarker; }
        set hideRequiredMarker(t) { this._hideRequiredMarker = he(t); }
        _hideRequiredMarker = !1;
        color = "primary";
        get floatLabel() { return this._floatLabel || this._defaults?.floatLabel || ot; }
        set floatLabel(t) { t !== this._floatLabel && (this._floatLabel = t, this._changeDetectorRef.markForCheck()); }
        _floatLabel;
        get appearance() { return this._appearanceSignal(); }
        set appearance(t) { let r = t || this._defaults?.appearance || z; this._appearanceSignal.set(r); }
        _appearanceSignal = xe(z);
        get subscriptSizing() { return this._subscriptSizing || this._defaults?.subscriptSizing || V; }
        set subscriptSizing(t) { this._subscriptSizing = t || this._defaults?.subscriptSizing || V; }
        _subscriptSizing = null;
        get hintLabel() { return this._hintLabel; }
        set hintLabel(t) { this._hintLabel = t, this._processHints(); }
        _hintLabel = "";
        _hasIconPrefix = !1;
        _hasTextPrefix = !1;
        _hasIconSuffix = !1;
        _hasTextSuffix = !1;
        _labelId = this._idGenerator.getId("mat-mdc-form-field-label-");
        _hintLabelId = this._idGenerator.getId("mat-mdc-hint-");
        _describedByIds;
        get _control() { return this._explicitFormFieldControl || this._formFieldControl; }
        set _control(t) { this._explicitFormFieldControl = t; }
        _destroyed = new Ce;
        _isFocused = null;
        _explicitFormFieldControl;
        _previousControl = null;
        _previousControlValidatorFn = null;
        _stateChanges;
        _valueChanges;
        _describedByChanges;
        _outlineLabelOffsetResizeObserver = null;
        _animationsDisabled = w();
        constructor() { let t = this._defaults, r = l(me); t && (t.appearance && (this.appearance = t.appearance), this._hideRequiredMarker = !!t?.hideRequiredMarker, t.color && (this.color = t.color)), Se(() => this._currentDirection = r.valueSignal()), this._syncOutlineLabelOffset(); }
        ngAfterViewInit() { this._updateFocusState(), this._animationsDisabled || this._ngZone.runOutsideAngular(() => { setTimeout(() => { this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled"); }, 300); }), this._changeDetectorRef.detectChanges(); }
        ngAfterContentInit() { this._assertFormFieldControl(), this._initializeSubscript(), this._initializePrefixAndSuffix(); }
        ngAfterContentChecked() { this._assertFormFieldControl(), this._control !== this._previousControl && (this._initializeControl(this._previousControl), this._control.ngControl && this._control.ngControl.control && (this._previousControlValidatorFn = p(this._control.ngField) ? null : this._control.ngControl.control.validator), this._previousControl = this._control, this._changeDetectorRef.markForCheck()), this._control.ngControl && this._control.ngControl.control && !p(this._control.ngField) && this._control.ngControl.control.validator !== this._previousControlValidatorFn && this._changeDetectorRef.markForCheck(); }
        ngOnDestroy() { this._outlineLabelOffsetResizeObserver?.disconnect(), this._stateChanges?.unsubscribe(), this._valueChanges?.unsubscribe(), this._describedByChanges?.unsubscribe(), this._destroyed.next(), this._destroyed.complete(); }
        getLabelId = S(() => this._hasFloatingLabel() ? this._labelId : null);
        getConnectedOverlayOrigin() { return this._textField || this._elementRef; }
        _animateAndLockLabel() { this._hasFloatingLabel() && (this.floatLabel = "always"); }
        _initializeControl(t) { let r = this._control, i = "mat-mdc-form-field-type-"; t && this._elementRef.nativeElement.classList.remove(i + t.controlType), r.controlType && this._elementRef.nativeElement.classList.add(i + r.controlType), this._stateChanges?.unsubscribe(), this._stateChanges = r.stateChanges?.subscribe(() => { this._updateFocusState(), this._changeDetectorRef.markForCheck(); }), this._describedByChanges?.unsubscribe(), this._describedByChanges = r.stateChanges?.pipe(Ee([void 0, void 0]), Fe(() => [this._unwrapMaybeSignal(r.errorState), r.userAriaDescribedBy]), Re(), Te(([[o, d], [c, _]]) => o !== c || d !== _)).subscribe(() => this._syncDescribedByIds()), this._valueChanges?.unsubscribe(), r.ngControl && r.ngControl.valueChanges && !p(r.ngField) && (this._valueChanges = r.ngControl.valueChanges.pipe(De(this._destroyed)).subscribe(() => this._changeDetectorRef.markForCheck())); }
        _checkPrefixAndSuffixTypes() { this._hasIconPrefix = !!this._prefixChildren.find(t => !t._isText), this._hasTextPrefix = !!this._prefixChildren.find(t => t._isText), this._hasIconSuffix = !!this._suffixChildren.find(t => !t._isText), this._hasTextSuffix = !!this._suffixChildren.find(t => t._isText); }
        _initializePrefixAndSuffix() { this._checkPrefixAndSuffixTypes(), Me(this._prefixChildren.changes, this._suffixChildren.changes).subscribe(() => { this._checkPrefixAndSuffixTypes(), this._changeDetectorRef.markForCheck(); }); }
        _initializeSubscript() { this._hintChildren.changes.subscribe(() => { this._processHints(), this._changeDetectorRef.markForCheck(); }), this._errorChildren.changes.subscribe(() => { this._syncDescribedByIds(), this._changeDetectorRef.markForCheck(); }), this._validateHints(), this._syncDescribedByIds(); }
        _assertFormFieldControl() { this._control; }
        _updateFocusState() { let t = this._unwrapMaybeSignal(this._control.focused); t && !this._isFocused ? (this._isFocused = !0, this._lineRipple?.activate()) : !t && (this._isFocused || this._isFocused === null) && (this._isFocused = !1, this._lineRipple?.deactivate()), this._elementRef.nativeElement.classList.toggle("mat-focused", t), this._textField?.nativeElement.classList.toggle("mdc-text-field--focused", t); }
        _syncOutlineLabelOffset() { Ne({ earlyRead: () => { if (this._appearanceSignal() !== "outline")
                return this._outlineLabelOffsetResizeObserver?.disconnect(), null; if (globalThis.ResizeObserver) {
                this._outlineLabelOffsetResizeObserver ||= new globalThis.ResizeObserver(() => { this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset()); });
                for (let t of this._prefixSuffixContainers())
                    this._outlineLabelOffsetResizeObserver.observe(t, { box: "border-box" });
            } return this._getOutlinedLabelOffset(); }, write: t => this._writeOutlinedLabelStyles(t()) }); }
        _shouldAlwaysFloat() { return this.floatLabel === "always"; }
        _hasOutline() { return this.appearance === "outline"; }
        _forceDisplayInfixLabel() { return !this._platform.isBrowser && this._prefixChildren.length && !this._shouldLabelFloat(); }
        _hasFloatingLabel = S(() => !!this._labelChild());
        _shouldLabelFloat() { return this._hasFloatingLabel() ? this._shouldAlwaysFloat() || this._unwrapMaybeSignal(this._control.shouldLabelFloat) : !1; }
        _shouldForward(t) { let r = this._control?.ngField || this._control?.ngControl; if (!r)
            return !1; if (p(r)) {
            let i = r();
            return t === "valid" ? i.valid() : t === "dirty" ? i.dirty() : t === "touched" ? i.touched() : t === "pending" ? i.pending() : t === "untouched" ? !i.touched() : t === "pristine" ? !i.dirty() : t === "invalid" ? !i.valid() : !1;
        }
        else {
            let i = r;
            return t === "valid" ? i.valid : t === "dirty" ? i.dirty : t === "touched" ? i.touched : t === "pending" ? i.pending : t === "untouched" ? i.untouched : t === "pristine" ? i.pristine : t === "invalid" ? i.invalid : !1;
        } }
        _getSubscriptMessageType() { return this._errorChildren && this._errorChildren.length > 0 && this._unwrapMaybeSignal(this._control.errorState) ? "error" : "hint"; }
        _handleLabelResized() { this._refreshOutlineNotchWidth(); }
        _refreshOutlineNotchWidth() { !this._hasOutline() || !this._floatingLabel || !this._shouldLabelFloat() ? this._notchedOutline?._setNotchWidth(0) : this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth()); }
        _processHints() { this._validateHints(), this._syncDescribedByIds(); }
        _validateHints() { this._hintChildren; }
        _syncDescribedByIds() { if (this._control) {
            let t = [];
            if (this._control.userAriaDescribedBy && typeof this._control.userAriaDescribedBy == "string" && t.push(...this._control.userAriaDescribedBy.split(" ")), this._getSubscriptMessageType() === "hint") {
                let o = this._hintChildren ? this._hintChildren.find(c => c.align === "start") : null, d = this._hintChildren ? this._hintChildren.find(c => c.align === "end") : null;
                o ? t.push(o.id) : this._hintLabel && t.push(this._hintLabelId), d && t.push(d.id);
            }
            else
                this._errorChildren && t.push(...this._errorChildren.map(o => o.id));
            let r = this._control.describedByIds, i;
            if (r) {
                let o = this._describedByIds || t;
                i = t.concat(r.filter(d => d && !o.includes(d)));
            }
            else
                i = t;
            this._control.setDescribedByIds(i), this._describedByIds = t;
        } }
        _getOutlinedLabelOffset() { if (!this._hasOutline() || !this._floatingLabel)
            return null; if (!this._iconPrefixContainer && !this._textPrefixContainer)
            return ["", null]; if (!this._isAttachedToDom())
            return null; let t = this._iconPrefixContainer?.nativeElement, r = this._textPrefixContainer?.nativeElement, i = this._iconSuffixContainer?.nativeElement, o = this._textSuffixContainer?.nativeElement, d = t?.getBoundingClientRect().width ?? 0, c = r?.getBoundingClientRect().width ?? 0, _ = i?.getBoundingClientRect().width ?? 0, H = o?.getBoundingClientRect().width ?? 0, U = this._currentDirection === "rtl" ? "-1" : "1", W = `${d + c}px`, G = `calc(${U} * (${W} + var(--mat-mdc-form-field-label-offset-x, 0px)))`, $ = `var(--mat-mdc-form-field-label-transform, ${at} translateX(${G}))`, Q = d + c + _ + H; return [$, Q]; }
        _writeOutlinedLabelStyles(t) { if (t !== null) {
            let [r, i] = t;
            this._floatingLabel && (this._floatingLabel.element.style.transform = r), i !== null && this._notchedOutline?._setMaxWidth(i);
        } }
        _isAttachedToDom() { let t = this._elementRef.nativeElement; if (t.getRootNode) {
            let r = t.getRootNode();
            return r && r !== t;
        } return document.documentElement.contains(t); }
        static \u0275fac = function (r) { return new (r || n); };
        static \u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["mat-form-field"]], contentQueries: function (r, i, o) { if (r & 1 && (e.\u0275\u0275contentQuerySignal(o, i._labelChild, A, 5), e.\u0275\u0275contentQuery(o, nt, 5)(o, j, 5)(o, K, 5)(o, B, 5)(o, I, 5)), r & 2) {
                e.\u0275\u0275queryAdvance();
                let d;
                e.\u0275\u0275queryRefresh(d = e.\u0275\u0275loadQuery()) && (i._formFieldControl = d.first), e.\u0275\u0275queryRefresh(d = e.\u0275\u0275loadQuery()) && (i._prefixChildren = d), e.\u0275\u0275queryRefresh(d = e.\u0275\u0275loadQuery()) && (i._suffixChildren = d), e.\u0275\u0275queryRefresh(d = e.\u0275\u0275loadQuery()) && (i._errorChildren = d), e.\u0275\u0275queryRefresh(d = e.\u0275\u0275loadQuery()) && (i._hintChildren = d);
            } }, viewQuery: function (r, i) { if (r & 1 && (e.\u0275\u0275viewQuerySignal(i._iconPrefixContainerSignal, F, 5)(i._textPrefixContainerSignal, R, 5)(i._iconSuffixContainerSignal, T, 5)(i._textSuffixContainerSignal, D, 5), e.\u0275\u0275viewQuery(Oe, 5)(F, 5)(R, 5)(T, 5)(D, 5)(P, 5)(L, 5)(k, 5)), r & 2) {
                e.\u0275\u0275queryAdvance(4);
                let o;
                e.\u0275\u0275queryRefresh(o = e.\u0275\u0275loadQuery()) && (i._textField = o.first), e.\u0275\u0275queryRefresh(o = e.\u0275\u0275loadQuery()) && (i._iconPrefixContainer = o.first), e.\u0275\u0275queryRefresh(o = e.\u0275\u0275loadQuery()) && (i._textPrefixContainer = o.first), e.\u0275\u0275queryRefresh(o = e.\u0275\u0275loadQuery()) && (i._iconSuffixContainer = o.first), e.\u0275\u0275queryRefresh(o = e.\u0275\u0275loadQuery()) && (i._textSuffixContainer = o.first), e.\u0275\u0275queryRefresh(o = e.\u0275\u0275loadQuery()) && (i._floatingLabel = o.first), e.\u0275\u0275queryRefresh(o = e.\u0275\u0275loadQuery()) && (i._notchedOutline = o.first), e.\u0275\u0275queryRefresh(o = e.\u0275\u0275loadQuery()) && (i._lineRipple = o.first);
            } }, hostAttrs: [1, "mat-mdc-form-field"], hostVars: 38, hostBindings: function (r, i) { r & 2 && e.\u0275\u0275classProp("mat-mdc-form-field-label-always-float", i._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix", i._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix", i._hasIconSuffix)("mat-form-field-invalid", i._unwrapMaybeSignal(i._control.errorState))("mat-form-field-disabled", i._unwrapMaybeSignal(i._control.disabled))("mat-form-field-autofilled", i._unwrapMaybeSignal(i._control.autofilled))("mat-form-field-appearance-fill", i.appearance == "fill")("mat-form-field-appearance-outline", i.appearance == "outline")("mat-form-field-hide-placeholder", i._hasFloatingLabel() && !i._shouldLabelFloat())("mat-primary", i.color !== "accent" && i.color !== "warn")("mat-accent", i.color === "accent")("mat-warn", i.color === "warn")("ng-untouched", i._shouldForward("untouched"))("ng-touched", i._shouldForward("touched"))("ng-pristine", i._shouldForward("pristine"))("ng-dirty", i._shouldForward("dirty"))("ng-valid", i._shouldForward("valid"))("ng-invalid", i._shouldForward("invalid"))("ng-pending", i._shouldForward("pending")); }, inputs: { hideRequiredMarker: "hideRequiredMarker", color: "color", floatLabel: "floatLabel", appearance: "appearance", subscriptSizing: "subscriptSizing", hintLabel: "hintLabel" }, exportAs: ["matFormField"], features: [e.\u0275\u0275ProvidersFeature([{ provide: it, useExisting: n }, { provide: q, useExisting: n }])], ngContentSelectors: Le, decls: 18, vars: 21, consts: [["labelTemplate", ""], ["textField", ""], ["iconPrefixContainer", ""], ["textPrefixContainer", ""], ["textSuffixContainer", ""], ["iconSuffixContainer", ""], [1, "mat-mdc-text-field-wrapper", "mdc-text-field", 3, "click"], [1, "mat-mdc-form-field-focus-overlay"], [1, "mat-mdc-form-field-flex"], ["matFormFieldNotchedOutline", "", 3, "matFormFieldNotchedOutlineOpen"], [1, "mat-mdc-form-field-icon-prefix"], [1, "mat-mdc-form-field-text-prefix"], [1, "mat-mdc-form-field-infix"], [3, "ngTemplateOutlet"], [1, "mat-mdc-form-field-text-suffix"], [1, "mat-mdc-form-field-icon-suffix"], ["matFormFieldLineRipple", ""], ["aria-atomic", "true", "aria-live", "polite", 1, "mat-mdc-form-field-subscript-wrapper", "mat-mdc-form-field-bottom-align"], [1, "mat-mdc-form-field-error-wrapper"], [1, "mat-mdc-form-field-hint-wrapper"], ["matFormFieldFloatingLabel", "", 3, "floating", "monitorResize", "id"], ["aria-hidden", "true", 1, "mat-mdc-form-field-required-marker", "mdc-floating-label--required"], [3, "id"], [1, "mat-mdc-form-field-hint-spacer"]], template: function (r, i) { if (r & 1 && (e.\u0275\u0275projectionDef(ke), e.\u0275\u0275template(0, Be, 1, 1, "ng-template", null, 0, e.\u0275\u0275templateRefExtractor), e.\u0275\u0275elementStart(2, "div", 6, 1), e.\u0275\u0275listener("click", function (d) { return i._control.onContainerClick(d); }), e.\u0275\u0275conditionalCreate(4, je, 1, 0, "div", 7), e.\u0275\u0275elementStart(5, "div", 8), e.\u0275\u0275conditionalCreate(6, He, 2, 2, "div", 9), e.\u0275\u0275conditionalCreate(7, Ue, 3, 0, "div", 10), e.\u0275\u0275conditionalCreate(8, We, 3, 0, "div", 11), e.\u0275\u0275elementStart(9, "div", 12), e.\u0275\u0275conditionalCreate(10, $e, 1, 1, null, 13), e.\u0275\u0275projection(11), e.\u0275\u0275elementEnd(), e.\u0275\u0275conditionalCreate(12, Qe, 3, 0, "div", 14), e.\u0275\u0275conditionalCreate(13, Ye, 3, 0, "div", 15), e.\u0275\u0275elementEnd(), e.\u0275\u0275conditionalCreate(14, Xe, 1, 0, "div", 16), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(15, "div", 17), e.\u0275\u0275conditionalCreate(16, Ze, 2, 0, "div", 18)(17, et, 5, 1, "div", 19), e.\u0275\u0275elementEnd()), r & 2) {
                let o, d = i._unwrapMaybeSignal(i._control.disabled);
                e.\u0275\u0275advance(2), e.\u0275\u0275classProp("mdc-text-field--filled", !i._hasOutline())("mdc-text-field--outlined", i._hasOutline())("mdc-text-field--no-label", !i._hasFloatingLabel())("mdc-text-field--disabled", d)("mdc-text-field--invalid", i._unwrapMaybeSignal(i._control.errorState)), e.\u0275\u0275advance(2), e.\u0275\u0275conditional(!i._hasOutline() && !d ? 4 : -1), e.\u0275\u0275advance(2), e.\u0275\u0275conditional(i._hasOutline() ? 6 : -1), e.\u0275\u0275advance(), e.\u0275\u0275conditional(i._hasIconPrefix ? 7 : -1), e.\u0275\u0275advance(), e.\u0275\u0275conditional(i._hasTextPrefix ? 8 : -1), e.\u0275\u0275advance(2), e.\u0275\u0275conditional(!i._hasOutline() || i._forceDisplayInfixLabel() ? 10 : -1), e.\u0275\u0275advance(2), e.\u0275\u0275conditional(i._hasTextSuffix ? 12 : -1), e.\u0275\u0275advance(), e.\u0275\u0275conditional(i._hasIconSuffix ? 13 : -1), e.\u0275\u0275advance(), e.\u0275\u0275conditional(i._hasOutline() ? -1 : 14), e.\u0275\u0275advance(), e.\u0275\u0275classProp("mat-mdc-form-field-subscript-dynamic-size", i.subscriptSizing === "dynamic");
                let c = i._getSubscriptMessageType();
                e.\u0275\u0275advance(), e.\u0275\u0275conditional((o = c) === "error" ? 16 : o === "hint" ? 17 : -1);
            } }, dependencies: [P, L, ge, k, I], styles: [`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-filled-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-outlined-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-filled-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-outlined-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-top-right-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) {
  background-color: var(--%NS%mat-form-field-filled-container-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--%NS%mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-hover-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-filled-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-filled-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-filled-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-filled-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-outlined-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-outlined-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-outlined-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-outlined-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-outline-color, var(--%NS%mat-sys-outline));
  border-width: var(--%NS%mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-hover-outline-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-focus-outline-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-hover-outline-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-focus-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--%NS%mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--%NS%mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--%NS%mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-active-indicator-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-hover-active-indicator-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-active-indicator-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-hover-active-indicator-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--%NS%mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-focus-active-indicator-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-focus-active-indicator-color, var(--%NS%mat-sys-error));
}

.mdc-line-ripple--%NS%active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--%NS%deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--%NS%no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --%NS%mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--%NS%mat-form-field-container-height, 56px);
  padding-top: var(--%NS%mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--%NS%mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--%NS%mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--%NS%mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--%NS%mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--%NS%mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --%NS%mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--%NS%mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--%NS%mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--%NS%mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--%NS%mat-form-field-error-text-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-subscript-text-font, var(--%NS%mat-sys-body-small-font));
  line-height: var(--%NS%mat-form-field-subscript-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  font-size: var(--%NS%mat-form-field-subscript-text-size, var(--%NS%mat-sys-body-small-size));
  letter-spacing: var(--%NS%mat-form-field-subscript-text-tracking, var(--%NS%mat-sys-body-small-tracking));
  font-weight: var(--%NS%mat-form-field-subscript-text-weight, var(--%NS%mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-form-field-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--%NS%mat-form-field-select-option-text-color, var(--%NS%mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--%NS%mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--%NS%mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--%NS%mat-form-field-enabled-select-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-focus-select-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --%NS%mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-container-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-form-field-container-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-form-field-container-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-form-field-container-text-tracking, var(--%NS%mat-sys-body-large-tracking));
  font-weight: var(--%NS%mat-form-field-container-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--%NS%mat-form-field-outlined-label-text-populated-size) * var(--%NS%mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--%NS%mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-leading-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-trailing-icon-color, var(--%NS%mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-hover-trailing-icon-color, var(--%NS%mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-focus-trailing-icon-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--%NS%filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`], encapsulation: 2 });
    }
    return n;
})();
export { bn as a, A as b, B as c, zn as d, I as e, j as f, Vn as g, K as h, Bn as i, nt as j, jn as k, Kn as l, qn as m, it as n, rt as o, Hn as p };
/*! Bundled license information:

@angular/forms/fesm2022/_validation_errors-chunk.mjs:
@angular/forms/fesm2022/signals.mjs:
  (**
   * @license Angular v22.1.4
   * (c) 2010-2026 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
