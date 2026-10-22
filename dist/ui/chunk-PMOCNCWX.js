import { a as h, b as p } from "@nf-internal/chunk-2NFLSA4Y";
import * as o from "@angular/core";
import { InjectionToken as V, forwardRef as l, \u0275isPromise as tt, \u0275RuntimeError as K, Version as Nn, signal as M, untracked as f, computed as F, EventEmitter as _, booleanAttribute as te, DestroyRef as Ce, ChangeDetectorRef as ne, effect as nt, inject as x, \u0275formatRuntimeError as On, ApplicationRef as it, afterNextRender as rt } from "@angular/core";
import { from as ot, forkJoin as st, Subject as at, Subscription as lt } from "rxjs";
import { map as ut } from "rxjs/operators";
import { \u0275getDOM as fe } from "@angular/common";
var Ve = (() => { class n {
    _renderer;
    _elementRef;
    onChange = e => { };
    onTouched = () => { };
    constructor(e, i) { this._renderer = e, this._elementRef = i; }
    setProperty(e, i) { this._renderer.setProperty(this._elementRef.nativeElement, e, i); }
    registerOnTouched(e) { this.onTouched = e; }
    registerOnChange(e) { this.onChange = e; }
    setDisabledState(e) { this.setProperty("disabled", e); }
    static \u0275fac = function (i) { return new (i || n)(o.\u0275\u0275directiveInject(o.Renderer2), o.\u0275\u0275directiveInject(o.ElementRef)); };
    static \u0275dir = o.\u0275\u0275defineDirective({ type: n });
} return n; })(), D = (() => { class n extends Ve {
    static \u0275fac = (() => { let e; return function (r) { return (e || (e = o.\u0275\u0275getInheritedFactory(n)))(r || n); }; })();
    static \u0275dir = o.\u0275\u0275defineDirective({ type: n, features: [o.\u0275\u0275InheritDefinitionFeature] });
} return n; })(), v = new V(""), dt = { provide: v, useExisting: l(() => ct), multi: !0 }, ct = (() => { class n extends D {
    writeValue(e) { this.setProperty("checked", e); }
    static \u0275fac = (() => { let e; return function (r) { return (e || (e = o.\u0275\u0275getInheritedFactory(n)))(r || n); }; })();
    static \u0275dir = o.\u0275\u0275defineDirective({ type: n, selectors: [["input", "type", "checkbox", "formControlName", "", 3, "ngNoCva", ""], ["input", "type", "checkbox", "formControl", "", 3, "ngNoCva", ""], ["input", "type", "checkbox", "ngModel", "", 3, "ngNoCva", ""]], hostBindings: function (i, r) { i & 1 && o.\u0275\u0275listener("change", function (a) { return r.onChange(a.target.checked); })("blur", function () { return r.onTouched(); }); }, standalone: !1, features: [o.\u0275\u0275ProvidersFeature([dt]), o.\u0275\u0275InheritDefinitionFeature] });
} return n; })(), ht = { provide: v, useExisting: l(() => De), multi: !0 };
function ft() { let n = fe() ? fe().getUserAgent() : ""; return /android (\d+)/.test(n.toLowerCase()); }
var gt = new V(""), De = (() => { class n extends Ve {
    _compositionMode;
    _composing = !1;
    constructor(e, i, r) { super(e, i), this._compositionMode = r, this._compositionMode == null && (this._compositionMode = !ft()); }
    writeValue(e) { let i = e ?? ""; this.setProperty("value", i); }
    _handleInput(e) { (!this._compositionMode || this._compositionMode && !this._composing) && this.onChange(e); }
    _compositionStart() { this._composing = !0; }
    _compositionEnd(e) { this._composing = !1, this._compositionMode && this.onChange(e); }
    static \u0275fac = function (i) { return new (i || n)(o.\u0275\u0275directiveInject(o.Renderer2), o.\u0275\u0275directiveInject(o.ElementRef), o.\u0275\u0275directiveInject(gt, 8)); };
    static \u0275dir = o.\u0275\u0275defineDirective({ type: n, selectors: [["input", "formControlName", "", 3, "type", "checkbox", 3, "ngNoCva", ""], ["textarea", "formControlName", "", 3, "ngNoCva", ""], ["input", "formControl", "", 3, "type", "checkbox", 3, "ngNoCva", ""], ["textarea", "formControl", "", 3, "ngNoCva", ""], ["input", "ngModel", "", 3, "type", "checkbox", 3, "ngNoCva", ""], ["textarea", "ngModel", "", 3, "ngNoCva", ""], ["", "ngDefaultControl", ""]], hostBindings: function (i, r) { i & 1 && o.\u0275\u0275listener("input", function (a) { return r._handleInput(a.target.value); })("blur", function () { return r.onTouched(); })("compositionstart", function () { return r._compositionStart(); })("compositionend", function (a) { return r._compositionEnd(a.target.value); }); }, standalone: !1, features: [o.\u0275\u0275ProvidersFeature([ht]), o.\u0275\u0275InheritDefinitionFeature] });
} return n; })();
function ie(n) { return n == null || re(n) === 0; }
function re(n) { return n == null ? null : Array.isArray(n) || typeof n == "string" ? n.length : n instanceof Set ? n.size : null; }
var d = new V(""), C = new V(""), pt = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, J = class {
    static min(t) { return be(t); }
    static max(t) { return Ae(t); }
    static required(t) { return Me(t); }
    static requiredTrue(t) { return Ee(t); }
    static email(t) { return Fe(t); }
    static minLength(t) { return we(t); }
    static maxLength(t) { return Ne(t); }
    static pattern(t) { return Ie(t); }
    static nullValidator(t) { return T(); }
    static compose(t) { return ke(t); }
    static composeAsync(t) { return je(t); }
};
function be(n) { return t => { if (t.value == null || n == null)
    return null; let e = parseFloat(t.value); return !isNaN(e) && e < n ? { min: { min: n, actual: t.value } } : null; }; }
function Ae(n) { return t => { if (t.value == null || n == null)
    return null; let e = parseFloat(t.value); return !isNaN(e) && e > n ? { max: { max: n, actual: t.value } } : null; }; }
function Me(n) { return ie(n.value) ? { required: !0 } : null; }
function Ee(n) { return n.value === !0 ? null : { required: !0 }; }
function Fe(n) { return ie(n.value) || pt.test(n.value) ? null : { email: !0 }; }
function we(n) { return t => { let e = t.value?.length ?? re(t.value); return e === null || e === 0 ? null : e < n ? { minlength: { requiredLength: n, actualLength: e } } : null; }; }
function Ne(n) { return t => { let e = t.value?.length ?? re(t.value); return e !== null && e > n ? { maxlength: { requiredLength: n, actualLength: e } } : null; }; }
function Ie(n) { if (!n)
    return T; let t, e; return typeof n == "string" ? (e = "", n.charAt(0) !== "^" && (e += "^"), e += n, n.charAt(n.length - 1) !== "$" && (e += "$"), t = new RegExp(e)) : (e = n.toString(), t = n), i => { if (ie(i.value))
    return null; let r = i.value; return t.test(r) ? null : { pattern: { requiredPattern: e, actualValue: r } }; }; }
function T(n) { return null; }
function Se(n) { return n != null; }
function Oe(n) { return tt(n) ? ot(n) : n; }
function xe(n) { let t = {}; return n.forEach(e => { t = e != null ? h(h({}, t), e) : t; }), Object.keys(t).length === 0 ? null : t; }
function Re(n, t) { return t.map(e => e(n)); }
function mt(n) { return !n.validate; }
function Pe(n) { return n.map(t => mt(t) ? t : e => t.validate(e)); }
function ke(n) { if (!n)
    return null; let t = n.filter(Se); return t.length == 0 ? null : function (e) { return xe(Re(e, t)); }; }
function oe(n) { return n != null ? ke(Pe(n)) : null; }
function je(n) { if (!n)
    return null; let t = n.filter(Se); return t.length == 0 ? null : function (e) { let i = Re(e, t).map(Oe); return st(i).pipe(ut(xe)); }; }
function se(n) { return n != null ? je(Pe(n)) : null; }
function ge(n, t) { return n === null ? [t] : Array.isArray(n) ? [...n, t] : [n, t]; }
function Te(n) { return n._rawValidators; }
function Ge(n) { return n._rawAsyncValidators; }
function Q(n) { return n ? Array.isArray(n) ? n : [n] : []; }
function G(n, t) { return Array.isArray(n) ? n.includes(t) : n === t; }
function pe(n, t) { let e = Q(t); return Q(n).forEach(r => { G(e, r) || e.push(r); }), e; }
function me(n, t) { return Q(t).filter(e => !G(n, e)); }
var B = class {
    get value() { return this.control ? this.control.value : null; }
    get valid() { return this.control ? this.control.valid : null; }
    get invalid() { return this.control ? this.control.invalid : null; }
    get pending() { return this.control ? this.control.pending : null; }
    get disabled() { return this.control ? this.control.disabled : null; }
    get enabled() { return this.control ? this.control.enabled : null; }
    get errors() { return this.control ? this.control.errors : null; }
    get pristine() { return this.control ? this.control.pristine : null; }
    get dirty() { return this.control ? this.control.dirty : null; }
    get touched() { return this.control ? this.control.touched : null; }
    get status() { return this.control ? this.control.status : null; }
    get untouched() { return this.control ? this.control.untouched : null; }
    get statusChanges() { return this.control ? this.control.statusChanges : null; }
    get valueChanges() { return this.control ? this.control.valueChanges : null; }
    get path() { return null; }
    _composedValidatorFn;
    _composedAsyncValidatorFn;
    _rawValidators = [];
    _rawAsyncValidators = [];
    _setValidators(t) { this._rawValidators = t || [], this._composedValidatorFn = oe(this._rawValidators); }
    _setAsyncValidators(t) { this._rawAsyncValidators = t || [], this._composedAsyncValidatorFn = se(this._rawAsyncValidators); }
    get validator() { return this._composedValidatorFn || null; }
    get asyncValidator() { return this._composedAsyncValidatorFn || null; }
    _onDestroyCallbacks = [];
    _registerOnDestroy(t) { this._onDestroyCallbacks.push(t); }
    _invokeOnDestroyCallbacks() { this._onDestroyCallbacks.forEach(t => t()), this._onDestroyCallbacks = []; }
    reset(t = void 0) { this.control?.reset(t); }
    hasError(t, e) { return this.control ? this.control.hasError(t, e) : !1; }
    getError(t, e) { return this.control ? this.control.getError(t, e) : null; }
}, u = class extends B {
    name;
    get formDirective() { return null; }
    get path() { return null; }
};
var I = "VALID", j = "INVALID", A = "PENDING", S = "DISABLED", y = class {
}, U = class extends y {
    value;
    source;
    constructor(t, e) { super(), this.value = t, this.source = e; }
}, R = class extends y {
    pristine;
    source;
    constructor(t, e) { super(), this.pristine = t, this.source = e; }
}, P = class extends y {
    touched;
    source;
    constructor(t, e) { super(), this.touched = t, this.source = e; }
}, E = class extends y {
    status;
    source;
    constructor(t, e) { super(), this.status = t, this.source = e; }
}, H = class extends y {
    source;
    constructor(t) { super(), this.source = t; }
}, w = class extends y {
    source;
    constructor(t) { super(), this.source = t; }
};
function Be(n) { return (X(n) ? n.validators : n) || null; }
function vt(n) { return Array.isArray(n) ? oe(n) : n || null; }
function Ue(n, t) { return (X(t) ? t.asyncValidators : n) || null; }
function _t(n) { return Array.isArray(n) ? se(n) : n || null; }
function X(n) { return n != null && !Array.isArray(n) && typeof n == "object"; }
function yt(n, t, e) { let i = n.controls; if (!(t ? Object.keys(i) : i).length)
    throw new K(1e3, ""); if (!He(i, e))
    throw new K(1001, ""); }
function Ct(n, t, e) { n._forEachChild((i, r) => { if (e[r] === void 0)
    throw new K(-1002, ""); }); }
var L = class {
    _pendingDirty = !1;
    _hasOwnPendingAsyncValidator = null;
    _pendingTouched = !1;
    _onCollectionChange = () => { };
    _updateOn;
    _hasRequired = M(!1);
    _parent = null;
    _asyncValidationSubscription;
    _composedValidatorFn;
    _composedAsyncValidatorFn;
    _rawValidators;
    _rawAsyncValidators;
    value;
    constructor(t, e) { this._assignValidators(t), this._assignAsyncValidators(e); }
    get validator() { return this._composedValidatorFn; }
    set validator(t) { this._rawValidators = this._composedValidatorFn = t, this._updateHasRequiredValidator(); }
    get asyncValidator() { return this._composedAsyncValidatorFn; }
    set asyncValidator(t) { this._rawAsyncValidators = this._composedAsyncValidatorFn = t; }
    get parent() { return this._parent; }
    get status() { return f(this.statusReactive); }
    set status(t) { f(() => this.statusReactive.set(t)); }
    _status = F(() => this.statusReactive());
    statusReactive = M(void 0);
    get valid() { return this.status === I; }
    get invalid() { return this.status === j; }
    get pending() { return this.status === A; }
    get disabled() { return this.status === S; }
    get enabled() { return this.status !== S; }
    errors;
    get pristine() { return f(this.pristineReactive); }
    set pristine(t) { f(() => this.pristineReactive.set(t)); }
    _pristine = F(() => this.pristineReactive());
    pristineReactive = M(!0);
    get dirty() { return !this.pristine; }
    get touched() { return f(this.touchedReactive); }
    set touched(t) { f(() => this.touchedReactive.set(t)); }
    _touched = F(() => this.touchedReactive());
    touchedReactive = M(!1);
    get untouched() { return !this.touched; }
    _events = new at;
    events = this._events.asObservable();
    valueChanges;
    statusChanges;
    get updateOn() { return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : "change"; }
    setValidators(t) { this._assignValidators(t); }
    setAsyncValidators(t) { this._assignAsyncValidators(t); }
    addValidators(t) { this.setValidators(pe(t, this._rawValidators)); }
    addAsyncValidators(t) { this.setAsyncValidators(pe(t, this._rawAsyncValidators)); }
    removeValidators(t) { this.setValidators(me(t, this._rawValidators)); }
    removeAsyncValidators(t) { this.setAsyncValidators(me(t, this._rawAsyncValidators)); }
    hasValidator(t) { return G(this._rawValidators, t); }
    hasAsyncValidator(t) { return G(this._rawAsyncValidators, t); }
    clearValidators() { this.validator = null; }
    clearAsyncValidators() { this.asyncValidator = null; }
    markAsTouched(t = {}) { let e = this.touched === !1; this.touched = !0; let i = t.sourceControl ?? this; t.onlySelf || this._parent?.markAsTouched(p(h({}, t), { sourceControl: i })), e && t.emitEvent !== !1 && this._events.next(new P(!0, i)); }
    markAllAsDirty(t = {}) { this.markAsDirty({ onlySelf: !0, emitEvent: t.emitEvent, sourceControl: this }), this._forEachChild(e => e.markAllAsDirty(t)); }
    markAllAsTouched(t = {}) { this.markAsTouched({ onlySelf: !0, emitEvent: t.emitEvent, sourceControl: this }), this._forEachChild(e => e.markAllAsTouched(t)); }
    markAsUntouched(t = {}) { let e = this.touched === !0; this.touched = !1, this._pendingTouched = !1; let i = t.sourceControl ?? this; this._forEachChild(r => { r.markAsUntouched({ onlySelf: !0, emitEvent: t.emitEvent, sourceControl: i }); }), t.onlySelf || this._parent?._updateTouched(t, i), e && t.emitEvent !== !1 && this._events.next(new P(!1, i)); }
    markAsDirty(t = {}) { let e = this.pristine === !0; this.pristine = !1; let i = t.sourceControl ?? this; t.onlySelf || this._parent?.markAsDirty(p(h({}, t), { sourceControl: i })), e && t.emitEvent !== !1 && this._events.next(new R(!1, i)); }
    markAsPristine(t = {}) { let e = this.pristine === !1; this.pristine = !0, this._pendingDirty = !1; let i = t.sourceControl ?? this; this._forEachChild(r => { r.markAsPristine({ onlySelf: !0, emitEvent: t.emitEvent }); }), t.onlySelf || this._parent?._updatePristine(t, i), e && t.emitEvent !== !1 && this._events.next(new R(!0, i)); }
    markAsPending(t = {}) { this.status = A; let e = t.sourceControl ?? this; t.emitEvent !== !1 && (this._events.next(new E(this.status, e)), this.statusChanges.emit(this.status)), t.onlySelf || this._parent?.markAsPending(p(h({}, t), { sourceControl: e })); }
    disable(t = {}) { let e = this._parentMarkedDirty(t.onlySelf); this.status = S, this.errors = null, this._forEachChild(r => { r.disable(p(h({}, t), { onlySelf: !0 })); }), this._updateValue(); let i = t.sourceControl ?? this; t.emitEvent !== !1 && (this._events.next(new U(this.value, i)), this._events.next(new E(this.status, i)), this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)), this._updateAncestors(p(h({}, t), { skipPristineCheck: e }), this), this._onDisabledChange.forEach(r => r(!0)); }
    enable(t = {}) { let e = this._parentMarkedDirty(t.onlySelf); this.status = I, this._forEachChild(i => { i.enable(p(h({}, t), { onlySelf: !0 })); }), this.updateValueAndValidity({ onlySelf: !0, emitEvent: t.emitEvent }), this._updateAncestors(p(h({}, t), { skipPristineCheck: e }), this), this._onDisabledChange.forEach(i => i(!1)); }
    _updateAncestors(t, e) { t.onlySelf || (this._parent?.updateValueAndValidity(t), t.skipPristineCheck || this._parent?._updatePristine({}, e), this._parent?._updateTouched({}, e)); }
    setParent(t) { this._parent = t; }
    getRawValue() { return this.value; }
    updateValueAndValidity(t = {}) { if (this._setInitialStatus(), this._updateValue(), this.enabled) {
        let i = this._cancelExistingSubscription();
        this.errors = this._runValidator(), this.status = this._calculateStatus(), (this.status === I || this.status === A) && this._runAsyncValidator(i, t.emitEvent);
    } let e = t.sourceControl ?? this; t.emitEvent !== !1 && (this._events.next(new U(this.value, e)), this._events.next(new E(this.status, e)), this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)), t.onlySelf || this._parent?.updateValueAndValidity(p(h({}, t), { sourceControl: e })); }
    _updateTreeValidity(t = { emitEvent: !0 }) { this._forEachChild(e => e._updateTreeValidity(t)), this.updateValueAndValidity({ onlySelf: !0, emitEvent: t.emitEvent }); }
    _setInitialStatus() { this.status = this._allControlsDisabled() ? S : I; }
    _runValidator() { return this.validator ? this.validator(this) : null; }
    _runAsyncValidator(t, e) { if (this.asyncValidator) {
        this.status = A, this._hasOwnPendingAsyncValidator = { emitEvent: e !== !1, shouldHaveEmitted: t !== !1 };
        let i = Oe(this.asyncValidator(this));
        this._asyncValidationSubscription = i.subscribe(r => { this._hasOwnPendingAsyncValidator = null, this.setErrors(r, { emitEvent: e, shouldHaveEmitted: t }); });
    } }
    _cancelExistingSubscription() { if (this._asyncValidationSubscription) {
        this._asyncValidationSubscription.unsubscribe();
        let t = (this._hasOwnPendingAsyncValidator?.emitEvent || this._hasOwnPendingAsyncValidator?.shouldHaveEmitted) ?? !1;
        return this._hasOwnPendingAsyncValidator = null, t;
    } return !1; }
    setErrors(t, e = {}) { this.errors = t, this._updateControlsErrors(e.emitEvent !== !1, this, e.shouldHaveEmitted); }
    get(t) { let e = t; return e == null || (Array.isArray(e) || (e = e.split(".")), e.length === 0) ? null : e.reduce((i, r) => i && i._find(r), this); }
    getError(t, e) { let i = e ? this.get(e) : this; return i?.errors ? i.errors[t] : null; }
    hasError(t, e) { return !!this.getError(t, e); }
    get root() { let t = this; for (; t._parent;)
        t = t._parent; return t; }
    _updateControlsErrors(t, e, i) { this.status = this._calculateStatus(), t && this.statusChanges.emit(this.status), (t || i) && this._events.next(new E(this.status, e)), this._parent && this._parent._updateControlsErrors(t, e, i); }
    _initObservables() { this.valueChanges = new _, this.statusChanges = new _; }
    _calculateStatus() { return this._allControlsDisabled() ? S : this.errors ? j : this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(A) ? A : this._anyControlsHaveStatus(j) ? j : I; }
    _anyControlsHaveStatus(t) { return this._anyControls(e => e.status === t); }
    _anyControlsDirty() { return this._anyControls(t => t.dirty); }
    _anyControlsTouched() { return this._anyControls(t => t.touched); }
    _updatePristine(t, e) { let i = !this._anyControlsDirty(), r = this.pristine !== i; this.pristine = i, t.onlySelf || this._parent?._updatePristine(t, e), r && this._events.next(new R(this.pristine, e)); }
    _updateTouched(t = {}, e) { this.touched = this._anyControlsTouched(), this._events.next(new P(this.touched, e)), t.onlySelf || this._parent?._updateTouched(t, e); }
    _onDisabledChange = [];
    _registerOnCollectionChange(t) { this._onCollectionChange = t; }
    _setUpdateStrategy(t) { X(t) && t.updateOn != null && (this._updateOn = t.updateOn); }
    _parentMarkedDirty(t) { return !t && !!this._parent?.dirty && !this._parent._anyControlsDirty(); }
    _find(t) { return null; }
    _assignValidators(t) { this._rawValidators = Array.isArray(t) ? t.slice() : t, this._composedValidatorFn = vt(this._rawValidators), this._updateHasRequiredValidator(); }
    _assignAsyncValidators(t) { this._rawAsyncValidators = Array.isArray(t) ? t.slice() : t, this._composedAsyncValidatorFn = _t(this._rawAsyncValidators); }
    _updateHasRequiredValidator() { f(() => this._hasRequired.set(this.hasValidator(J.required))); }
};
function He(n, t) { return Object.hasOwn(n, t); }
function Vt(n) { return n.tagName === "INPUT" || n.tagName === "SELECT" || n.tagName === "TEXTAREA"; }
function Dt(n, t, e, i) { switch (e) {
    case "name":
        n.setAttribute(t, e, i);
        break;
    case "disabled":
    case "readonly":
    case "required":
        i ? n.setAttribute(t, e, "") : n.removeAttribute(t, e);
        break;
    case "max":
    case "min":
    case "minLength":
    case "maxLength":
        i !== void 0 ? n.setAttribute(t, e, i.toString()) : n.removeAttribute(t, e);
        break;
} }
var ee = class {
    kind;
    context;
    control;
    message;
    constructor({ kind: t, context: e, control: i }) { this.kind = t, this.context = e, this.control = i; }
};
function Le(n) { return typeof n == "number" ? n : parseInt(n, 10); }
function We(n) { return typeof n == "number" ? n : parseFloat(n); }
var b = (() => { class n {
    _validator = T;
    _onChange;
    _enabled;
    ngOnChanges(e) { if (this.inputName in e) {
        let i = this.normalizeInput(e[this.inputName].currentValue);
        this._enabled = this.enabled(i), this._validator = this._enabled ? this.createValidator(i) : T, this._onChange?.();
    } }
    validate(e) { return this._validator(e); }
    registerOnValidatorChange(e) { this._onChange = e; }
    enabled(e) { return e != null; }
    static \u0275fac = function (i) { return new (i || n); };
    static \u0275dir = o.\u0275\u0275defineDirective({ type: n, features: [o.\u0275\u0275NgOnChangesFeature] });
} return n; })(), bt = { provide: d, useExisting: l(() => At), multi: !0 }, At = (() => { class n extends b {
    max;
    inputName = "max";
    normalizeInput = e => We(e);
    createValidator = e => Ae(e);
    static \u0275fac = (() => { let e; return function (r) { return (e || (e = o.\u0275\u0275getInheritedFactory(n)))(r || n); }; })();
    static \u0275dir = o.\u0275\u0275defineDirective({ type: n, selectors: [["input", "type", "number", "max", "", "formControlName", ""], ["input", "type", "number", "max", "", "formControl", ""], ["input", "type", "number", "max", "", "ngModel", ""]], hostVars: 1, hostBindings: function (i, r) { i & 2 && o.\u0275\u0275attribute("max", r._enabled ? r.max : null); }, inputs: { max: "max" }, standalone: !1, features: [o.\u0275\u0275ProvidersFeature([bt]), o.\u0275\u0275InheritDefinitionFeature] });
} return n; })(), Mt = { provide: d, useExisting: l(() => Et), multi: !0 }, Et = (() => { class n extends b {
    min;
    inputName = "min";
    normalizeInput = e => We(e);
    createValidator = e => be(e);
    static \u0275fac = (() => { let e; return function (r) { return (e || (e = o.\u0275\u0275getInheritedFactory(n)))(r || n); }; })();
    static \u0275dir = o.\u0275\u0275defineDirective({ type: n, selectors: [["input", "type", "number", "min", "", "formControlName", ""], ["input", "type", "number", "min", "", "formControl", ""], ["input", "type", "number", "min", "", "ngModel", ""]], hostVars: 1, hostBindings: function (i, r) { i & 2 && o.\u0275\u0275attribute("min", r._enabled ? r.min : null); }, inputs: { min: "min" }, standalone: !1, features: [o.\u0275\u0275ProvidersFeature([Mt]), o.\u0275\u0275InheritDefinitionFeature] });
} return n; })(), Ft = { provide: d, useExisting: l(() => ae), multi: !0 }, wt = { provide: d, useExisting: l(() => Nt), multi: !0 }, ae = (() => { class n extends b {
    required;
    inputName = "required";
    normalizeInput = te;
    createValidator = e => Me;
    enabled(e) { return e; }
    static \u0275fac = (() => { let e; return function (r) { return (e || (e = o.\u0275\u0275getInheritedFactory(n)))(r || n); }; })();
    static \u0275dir = o.\u0275\u0275defineDirective({ type: n, selectors: [["", "required", "", "formControlName", "", 3, "type", "checkbox"], ["", "required", "", "formControl", "", 3, "type", "checkbox"], ["", "required", "", "ngModel", "", 3, "type", "checkbox"]], hostVars: 1, hostBindings: function (i, r) { i & 2 && o.\u0275\u0275attribute("required", r._enabled ? "" : null); }, inputs: { required: "required" }, standalone: !1, features: [o.\u0275\u0275ProvidersFeature([Ft]), o.\u0275\u0275InheritDefinitionFeature] });
} return n; })(), Nt = (() => { class n extends ae {
    createValidator = e => Ee;
    static \u0275fac = (() => { let e; return function (r) { return (e || (e = o.\u0275\u0275getInheritedFactory(n)))(r || n); }; })();
    static \u0275dir = o.\u0275\u0275defineDirective({ type: n, selectors: [["input", "type", "checkbox", "required", "", "formControlName", ""], ["input", "type", "checkbox", "required", "", "formControl", ""], ["input", "type", "checkbox", "required", "", "ngModel", ""]], hostVars: 1, hostBindings: function (i, r) { i & 2 && o.\u0275\u0275attribute("required", r._enabled ? "" : null); }, standalone: !1, features: [o.\u0275\u0275ProvidersFeature([wt]), o.\u0275\u0275InheritDefinitionFeature] });
} return n; })(), It = { provide: d, useExisting: l(() => St), multi: !0 }, St = (() => { class n extends b {
    email;
    inputName = "email";
    normalizeInput = te;
    createValidator = e => Fe;
    enabled(e) { return e; }
    static \u0275fac = (() => { let e; return function (r) { return (e || (e = o.\u0275\u0275getInheritedFactory(n)))(r || n); }; })();
    static \u0275dir = o.\u0275\u0275defineDirective({ type: n, selectors: [["", "email", "", "formControlName", ""], ["", "email", "", "formControl", ""], ["", "email", "", "ngModel", ""]], inputs: { email: "email" }, standalone: !1, features: [o.\u0275\u0275ProvidersFeature([It]), o.\u0275\u0275InheritDefinitionFeature] });
} return n; })(), Ot = { provide: d, useExisting: l(() => xt), multi: !0 }, xt = (() => { class n extends b {
    minlength;
    inputName = "minlength";
    normalizeInput = e => Le(e);
    createValidator = e => we(e);
    static \u0275fac = (() => { let e; return function (r) { return (e || (e = o.\u0275\u0275getInheritedFactory(n)))(r || n); }; })();
    static \u0275dir = o.\u0275\u0275defineDirective({ type: n, selectors: [["", "minlength", "", "formControlName", ""], ["", "minlength", "", "formControl", ""], ["", "minlength", "", "ngModel", ""]], hostVars: 1, hostBindings: function (i, r) { i & 2 && o.\u0275\u0275attribute("minlength", r._enabled ? r.minlength : null); }, inputs: { minlength: "minlength" }, standalone: !1, features: [o.\u0275\u0275ProvidersFeature([Ot]), o.\u0275\u0275InheritDefinitionFeature] });
} return n; })(), Rt = { provide: d, useExisting: l(() => Pt), multi: !0 }, Pt = (() => { class n extends b {
    maxlength;
    inputName = "maxlength";
    normalizeInput = e => Le(e);
    createValidator = e => Ne(e);
    static \u0275fac = (() => { let e; return function (r) { return (e || (e = o.\u0275\u0275getInheritedFactory(n)))(r || n); }; })();
    static \u0275dir = o.\u0275\u0275defineDirective({ type: n, selectors: [["", "maxlength", "", "formControlName", ""], ["", "maxlength", "", "formControl", ""], ["", "maxlength", "", "ngModel", ""]], hostVars: 1, hostBindings: function (i, r) { i & 2 && o.\u0275\u0275attribute("maxlength", r._enabled ? r.maxlength : null); }, inputs: { maxlength: "maxlength" }, standalone: !1, features: [o.\u0275\u0275ProvidersFeature([Rt]), o.\u0275\u0275InheritDefinitionFeature] });
} return n; })(), kt = { provide: d, useExisting: l(() => jt), multi: !0 }, jt = (() => { class n extends b {
    pattern;
    inputName = "pattern";
    normalizeInput = e => e;
    createValidator = e => Ie(e);
    static \u0275fac = (() => { let e; return function (r) { return (e || (e = o.\u0275\u0275getInheritedFactory(n)))(r || n); }; })();
    static \u0275dir = o.\u0275\u0275defineDirective({ type: n, selectors: [["", "pattern", "", "formControlName", ""], ["", "pattern", "", "formControl", ""], ["", "pattern", "", "ngModel", ""]], hostVars: 1, hostBindings: function (i, r) { i & 2 && o.\u0275\u0275attribute("pattern", r._enabled ? r.pattern : null); }, inputs: { pattern: "pattern" }, standalone: !1, features: [o.\u0275\u0275ProvidersFeature([kt]), o.\u0275\u0275InheritDefinitionFeature] });
} return n; })(), Tt = new V(""), k = new V("", { factory: () => le }), le = "always";
function Y(n, t) { return [...t.path, n]; }
function W(n, t, e = le) { ue(n, t), t.valueAccessor.writeValue(n.value), (n.disabled || e === "always") && t.valueAccessor.setDisabledState?.(n.disabled), Bt(n, t), Ht(n, t), Ut(n, t), Gt(n, t); }
function $(n, t, e = !0) { let i = () => { }; t?.valueAccessor?.registerOnChange(i), t?.valueAccessor?.registerOnTouched(i), z(n, t), n && (t._invokeOnDestroyCallbacks(), n._registerOnCollectionChange(() => { })); }
function q(n, t) { n.forEach(e => { e.registerOnValidatorChange && e.registerOnValidatorChange(t); }); }
function Gt(n, t) { if (t.valueAccessor.setDisabledState) {
    let e = i => { t.valueAccessor.setDisabledState(i); };
    n.registerOnDisabledChange(e), t._registerOnDestroy(() => { n._unregisterOnDisabledChange(e); });
} }
function ue(n, t) { let e = Te(n); t.validator !== null ? n.setValidators(ge(e, t.validator)) : typeof e == "function" && n.setValidators([e]); let i = Ge(n); t.asyncValidator !== null ? n.setAsyncValidators(ge(i, t.asyncValidator)) : typeof i == "function" && n.setAsyncValidators([i]); let r = () => n.updateValueAndValidity(); q(t._rawValidators, r), q(t._rawAsyncValidators, r); }
function z(n, t) { let e = !1; if (n !== null) {
    if (t.validator !== null) {
        let r = Te(n);
        if (Array.isArray(r) && r.length > 0) {
            let s = r.filter(a => a !== t.validator);
            s.length !== r.length && (e = !0, n.setValidators(s));
        }
    }
    if (t.asyncValidator !== null) {
        let r = Ge(n);
        if (Array.isArray(r) && r.length > 0) {
            let s = r.filter(a => a !== t.asyncValidator);
            s.length !== r.length && (e = !0, n.setAsyncValidators(s));
        }
    }
} let i = () => { }; return q(t._rawValidators, i), q(t._rawAsyncValidators, i), e; }
function Bt(n, t) { t.valueAccessor.registerOnChange(e => { n._pendingValue = e, n._pendingChange = !0, n._pendingDirty = !0, n.updateOn === "change" && $e(n, t); }); }
function Ut(n, t) { t.valueAccessor.registerOnTouched(() => { n._pendingTouched = !0, n.updateOn === "blur" && n._pendingChange && $e(n, t), n.updateOn !== "submit" && n.markAsTouched(); }); }
function $e(n, t) { n._pendingDirty && n.markAsDirty(), n.setValue(n._pendingValue, { emitModelToViewChange: !1 }), t.viewToModelUpdate(n._pendingValue), n._pendingChange = !1; }
function Ht(n, t) { let e = (i, r) => { t.valueAccessor.writeValue(i), r && t.viewToModelUpdate(i); }; n.registerOnChange(e), t._registerOnDestroy(() => { n._unregisterOnChange(e); }); }
function qe(n, t) { n == null, ue(n, t); }
function Lt(n, t) { return z(n, t); }
function de(n, t) { if (!Object.hasOwn(n, "model"))
    return !1; let e = n.model; return e.isFirstChange() ? !0 : !Object.is(t, e.currentValue); }
function Wt(n) { return Object.getPrototypeOf(n.constructor) === D; }
function ze(n, t) { n._syncPendingControls(), t.forEach(e => { let i = e.control; i.updateOn === "submit" && i._pendingChange && (e.viewToModelUpdate(i._pendingValue), i._pendingChange = !1); }); }
function $t(n, t) { if (!t)
    return null; Array.isArray(t); let e, i, r; return t.forEach(s => { s.constructor === De ? e = s : Wt(s) ? i = s : r = s; }), r || i || e || null; }
function qt(n, t) { let e = n.indexOf(t); e > -1 && n.splice(e, 1); }
var ce = { provide: Tt, useFactory: () => { let n = x(m, { self: !0 }); return { setParseErrors: t => { n.setParseErrorSource(t); }, set onReset(t) { n.onReset = t; } }; } }, m = class extends B {
    _parent = null;
    name = null;
    valueAccessor = null;
    isCustomControlBased = !1;
    userOnReset;
    resetSubscription;
    set onReset(t) { this.userOnReset = t, this.resetSubscription?.unsubscribe(), this.resetSubscription = void 0, this.control && (this.resetSubscription = this.control.events.subscribe(e => { e instanceof w && this.control && this.userOnReset?.(this.control.value); }), this.subscription?.add(this.resetSubscription)); }
    isNativeFormElement = !1;
    rawValueAccessors;
    _selectedValueAccessor = null;
    get selectedValueAccessor() { return this._selectedValueAccessor ??= $t(this, this.rawValueAccessors); }
    parseErrorsValidator = null;
    renderer;
    injector;
    requiredValidatorViaDi;
    subscription;
    customControlBindings = null;
    constructor(t, e, i) { super(), this.injector = t, this.renderer = e, this.rawValueAccessors = i, this.injector?.get(Ce)?.onDestroy(() => { this.removeParseErrorsValidator(this.control), this.subscription?.unsubscribe(); }); }
    setupCustomControl() { this.subscription?.unsubscribe(); let t = this.injector?.get(ne); if (!this.control || !t)
        return; let e = t.markForCheck.bind(t); this.subscription = new lt, this.subscription.add(this.control.valueChanges.subscribe(e)), this.subscription.add(this.control.statusChanges.subscribe(e)), this.resetSubscription?.unsubscribe(), this.resetSubscription = void 0, this.userOnReset && (this.resetSubscription = this.control.events.subscribe(i => { i instanceof w && this.control && this.userOnReset?.(this.control.value); }), this.subscription.add(this.resetSubscription)), this.parseErrorsValidator && this.control.addValidators(this.parseErrorsValidator); }
    ngControlCreate(t) { !t.nativeElement.hasAttribute?.("ngNoCva") && (this.rawValueAccessors && this.rawValueAccessors.length > 0 || this.valueAccessor !== null) || !t.customControl || (this.isCustomControlBased = !0, t.listenToCustomControlModel(r => { this.control?.setValue(r, { emitModelToViewChange: !1 }), this.control?.markAsDirty(), this.viewToModelUpdate(r); }), t.listenToCustomControlOutput("touch", () => { this.control?.markAsTouched(); }), this.customControlBindings = {}, this.isNativeFormElement = Vt(t.nativeElement), this.requiredValidatorViaDi = this._rawValidators.find(r => r instanceof ae)); }
    ngControlUpdate(t, e) { if (!this.isCustomControlBased)
        return; let i = this.control, r = this.customControlBindings; Object.is(r.value, i.value) || (r.value = i.value, t.setCustomControlModelInput(i.value)), this.bindControlProperty(t, r, "touched", i.touched), this.bindControlProperty(t, r, "dirty", i.dirty), this.bindControlProperty(t, r, "valid", i.valid), this.bindControlProperty(t, r, "invalid", i.invalid), this.bindControlProperty(t, r, "pending", i.pending), this.bindControlProperty(t, r, "disabled", i.disabled), this.shouldBindRequired && this.bindControlProperty(t, r, "required", this.isRequired); let s = i.errors; if (r.errors !== s) {
        r.errors = s;
        let a = this._convertErrors(s);
        t.setInputOnDirectives("errors", a);
    } }
    get isRequired() { return (this.requiredValidatorViaDi?._enabled || this.control?._hasRequired()) ?? !1; }
    get shouldBindRequired() { return !0; }
    bindControlProperty(t, e, i, r) { if (e[i] === r)
        return; e[i] = r; let s = t.setInputOnDirectives(i, r); this.isNativeFormElement && !s && (i === "disabled" || i === "required") && this.renderer && Dt(this.renderer, t.nativeElement, i, r); }
    _convertErrors(t) { if (t === null)
        return []; let e = this.control; return Object.entries(t).map(([i, r]) => new ee({ context: r, kind: i, control: e })); }
    setParseErrorSource(t) { if (t === void 0)
        return; let e = null, i = F(() => { let r = t(); return r.length === 0 ? null : r.reduce((s, a) => (s[a.kind] = a, s), {}); }); this.parseErrorsValidator = (() => e).bind(this), nt(() => { e = i(), this.control?.updateValueAndValidity({ emitEvent: !1 }); }, { injector: this.injector }); }
    removeParseErrorsValidator(t) { this.parseErrorsValidator && (t?.removeValidators(this.parseErrorsValidator), t?.updateValueAndValidity({ emitEvent: !1 })); }
};
var Z = class extends L {
    constructor(t, e, i) { super(Be(e), Ue(i, e)), this.controls = t, this._initObservables(), this._setUpdateStrategy(e), this._setUpControls(), this.updateValueAndValidity({ onlySelf: !0, emitEvent: !!this.asyncValidator }); }
    controls;
    registerControl(t, e) { let i = this._find(t); return i || (this.controls[t] = e, e.setParent(this), e._registerOnCollectionChange(this._onCollectionChange), e); }
    addControl(t, e, i = {}) { this.registerControl(t, e), this.updateValueAndValidity({ emitEvent: i.emitEvent }), this._onCollectionChange(); }
    removeControl(t, e = {}) { let i = this._find(t); i && i._registerOnCollectionChange(() => { }), delete this.controls[t], this.updateValueAndValidity({ emitEvent: e.emitEvent }), this._onCollectionChange(); }
    setControl(t, e, i = {}) { let r = this._find(t); r && r._registerOnCollectionChange(() => { }), delete this.controls[t], e && this.registerControl(t, e), this.updateValueAndValidity({ emitEvent: i.emitEvent }), this._onCollectionChange(); }
    contains(t) { return this._find(t)?.enabled === !0; }
    setValue(t, e = {}) { f(() => { Ct(this, !0, t), Object.keys(t).forEach(i => { yt(this, !0, i), this.controls[i].setValue(t[i], { onlySelf: !0, emitEvent: e.emitEvent }); }), this.updateValueAndValidity(e); }); }
    patchValue(t, e = {}) { t != null && (Object.keys(t).forEach(i => { let r = this._find(i); r && r.patchValue(t[i], { onlySelf: !0, emitEvent: e.emitEvent }); }), this.updateValueAndValidity(e)); }
    reset(t = {}, e = {}) { this._forEachChild((i, r) => { i.reset(t ? t[r] : null, p(h({}, e), { onlySelf: !0 })); }), this._updatePristine(e, this), this._updateTouched(e, this), this.updateValueAndValidity(e), e?.emitEvent !== !1 && this._events.next(new w(this)); }
    getRawValue() { return this._reduceChildren({}, (t, e, i) => (t[i] = e.getRawValue(), t)); }
    _syncPendingControls() { let t = this._reduceChildren(!1, (e, i) => i._syncPendingControls() ? !0 : e); return t && this.updateValueAndValidity({ onlySelf: !0 }), t; }
    _forEachChild(t) { Object.keys(this.controls).forEach(e => { let i = this.controls[e]; i && t(i, e); }); }
    _setUpControls() { this._forEachChild(t => { t.setParent(this), t._registerOnCollectionChange(this._onCollectionChange); }); }
    _updateValue() { this.value = this._reduceValue(); }
    _anyControls(t) { for (let [e, i] of Object.entries(this.controls))
        if (this.contains(e) && t(i))
            return !0; return !1; }
    _reduceValue() { let t = {}; return this._reduceChildren(t, (e, i, r) => ((i.enabled || this.disabled) && (e[r] = i.value), e)); }
    _reduceChildren(t, e) { let i = t; return this._forEachChild((r, s) => { i = e(i, r, s); }), i; }
    _allControlsDisabled() { for (let t of Object.keys(this.controls))
        if (this.controls[t].enabled)
            return !1; return Object.keys(this.controls).length > 0 || this.disabled; }
    _find(t) { return He(this.controls, t) ? this.controls[t] : null; }
};
var zt = { provide: u, useExisting: l(() => Ze) }, O = Promise.resolve(), Ze = (() => { class n extends u {
    callSetDisabledState;
    get submitted() { return f(this.submittedReactive); }
    _submitted = F(() => this.submittedReactive());
    submittedReactive = M(!1);
    _directives = new Set;
    form;
    ngSubmit = new _;
    options;
    constructor(e, i, r) { super(), this.callSetDisabledState = r, this.form = new Z({}, oe(e), se(i)); }
    ngAfterViewInit() { this._setUpdateStrategy(); }
    get formDirective() { return this; }
    get control() { return this.form; }
    get path() { return []; }
    get controls() { return this.form.controls; }
    addControl(e) { O.then(() => { let i = this._findContainer(e.path); e.control = i.registerControl(e.name, e.control), e._setupWithForm(this.callSetDisabledState), e.control.updateValueAndValidity({ emitEvent: !1 }), this._directives.add(e); }); }
    getControl(e) { return this.form.get(e.path); }
    removeControl(e) { O.then(() => { this._findContainer(e.path)?.removeControl(e.name), this._directives.delete(e); }); }
    addFormGroup(e) { O.then(() => { let i = this._findContainer(e.path), r = new Z({}); qe(r, e), i.registerControl(e.name, r), r.updateValueAndValidity({ emitEvent: !1 }); }); }
    removeFormGroup(e) { O.then(() => { this._findContainer(e.path)?.removeControl?.(e.name); }); }
    getFormGroup(e) { return this.form.get(e.path); }
    updateModel(e, i) { O.then(() => { this.form.get(e.path).setValue(i); }); }
    setValue(e) { this.control.setValue(e); }
    onSubmit(e) { return this.submittedReactive.set(!0), ze(this.form, this._directives), this.ngSubmit.emit(e), this.form._events.next(new H(this.control)), e?.target?.method === "dialog"; }
    onReset() { this.resetForm(); }
    resetForm(e = void 0) { this.form.reset(e), this.submittedReactive.set(!1); }
    _setUpdateStrategy() { this.options && this.options.updateOn != null && (this.form._updateOn = this.options.updateOn); }
    _findContainer(e) { return e.pop(), e.length ? this.form.get(e) : this.form; }
    static \u0275fac = function (i) { return new (i || n)(o.\u0275\u0275directiveInject(d, 10), o.\u0275\u0275directiveInject(C, 10), o.\u0275\u0275directiveInject(k, 8)); };
    static \u0275dir = o.\u0275\u0275defineDirective({ type: n, selectors: [["form", 3, "ngNoForm", "", 3, "formGroup", "", 3, "formArray", ""], ["ng-form"], ["", "ngForm", ""]], hostBindings: function (i, r) { i & 1 && o.\u0275\u0275listener("submit", function (a) { return r.onSubmit(a); })("reset", function () { return r.onReset(); }); }, inputs: { options: [0, "ngFormOptions", "options"] }, outputs: { ngSubmit: "ngSubmit" }, exportAs: ["ngForm"], standalone: !1, features: [o.\u0275\u0275ProvidersFeature([zt]), o.\u0275\u0275InheritDefinitionFeature] });
} return n; })();
function ve(n, t) { let e = n.indexOf(t); e > -1 && n.splice(e, 1); }
function _e(n) { return typeof n == "object" && n !== null && Object.keys(n).length === 2 && "value" in n && "disabled" in n; }
var Xe = class extends L {
    defaultValue = null;
    _onChange = [];
    _pendingValue;
    _pendingChange = !1;
    constructor(t = null, e, i) { super(Be(e), Ue(i, e)), this._applyFormState(t), this._setUpdateStrategy(e), this._initObservables(), this.updateValueAndValidity({ onlySelf: !0, emitEvent: !!this.asyncValidator }), X(e) && (e.nonNullable || e.initialValueIsDefault) && (_e(t) ? this.defaultValue = t.value : this.defaultValue = t); }
    setValue(t, e = {}) { f(() => { this.value = this._pendingValue = t, this._onChange.length && e.emitModelToViewChange !== !1 && this._onChange.forEach(i => i(this.value, e.emitViewToModelChange !== !1)), this.updateValueAndValidity(e); }); }
    patchValue(t, e = {}) { this.setValue(t, e); }
    reset(t = this.defaultValue, e = {}) { this._applyFormState(t), this.markAsPristine(e), this.markAsUntouched(e), this.setValue(this.value, e), e.overwriteDefaultValue && (this.defaultValue = this.value), this._pendingChange = !1, e?.emitEvent !== !1 && this._events.next(new w(this)); }
    _updateValue() { }
    _anyControls(t) { return !1; }
    _allControlsDisabled() { return this.disabled; }
    registerOnChange(t) { this._onChange.push(t); }
    _unregisterOnChange(t) { ve(this._onChange, t); }
    registerOnDisabledChange(t) { this._onDisabledChange.push(t); }
    _unregisterOnDisabledChange(t) { ve(this._onDisabledChange, t); }
    _forEachChild(t) { }
    _syncPendingControls() { return this.updateOn === "submit" && (this._pendingDirty && this.markAsDirty(), this._pendingTouched && this.markAsTouched(), this._pendingChange) ? (this.setValue(this._pendingValue, { onlySelf: !0, emitModelToViewChange: !1 }), !0) : !1; }
    _applyFormState(t) { _e(t) ? (this.value = this._pendingValue = t.value, t.disabled ? this.disable({ onlySelf: !0, emitEvent: !1 }) : this.enable({ onlySelf: !0, emitEvent: !1 })) : this.value = this._pendingValue = t; }
};
var Zt = n => n instanceof Xe, Ye = (() => { class n extends u {
    _parent;
    ngOnInit() { this._checkParentType(), this.formDirective.addFormGroup(this); }
    ngOnDestroy() { this.formDirective?.removeFormGroup(this); }
    get control() { return this.formDirective.getFormGroup(this); }
    get path() { return Y(this.name == null ? this.name : this.name.toString(), this._parent); }
    get formDirective() { return this._parent ? this._parent.formDirective : null; }
    _checkParentType() { }
    static \u0275fac = (() => { let e; return function (r) { return (e || (e = o.\u0275\u0275getInheritedFactory(n)))(r || n); }; })();
    static \u0275dir = o.\u0275\u0275defineDirective({ type: n, standalone: !1, features: [o.\u0275\u0275InheritDefinitionFeature] });
} return n; })();
var Xt = { provide: u, useExisting: l(() => Yt) }, Yt = (() => { class n extends Ye {
    name = "";
    constructor(e, i, r) { super(), this._parent = e, this._setValidators(i), this._setAsyncValidators(r); }
    _checkParentType() { !(this._parent instanceof n) && this._parent instanceof Ze; }
    static \u0275fac = function (i) { return new (i || n)(o.\u0275\u0275directiveInject(u, 5), o.\u0275\u0275directiveInject(d, 10), o.\u0275\u0275directiveInject(C, 10)); };
    static \u0275dir = o.\u0275\u0275defineDirective({ type: n, selectors: [["", "ngModelGroup", ""]], inputs: { name: [0, "ngModelGroup", "name"] }, exportAs: ["ngModelGroup"], standalone: !1, features: [o.\u0275\u0275ProvidersFeature([Xt]), o.\u0275\u0275InheritDefinitionFeature] });
} return n; })(), he = (() => { class n extends u {
    callSetDisabledState;
    get submitted() { return f(this._submittedReactive); }
    set submitted(e) { this._submittedReactive.set(e); }
    _submitted = F(() => this._submittedReactive());
    _submittedReactive = M(!1);
    _oldForm;
    _onCollectionChange = () => this._updateDomValue();
    directives = [];
    constructor(e, i, r) { super(), this.callSetDisabledState = r, this._setValidators(e), this._setAsyncValidators(i); }
    ngOnChanges(e) { this.onChanges(e); }
    ngOnDestroy() { this.onDestroy(); }
    onChanges(e) { this._checkFormPresent(), Object.hasOwn(e, "form") && (this._updateValidators(), this._updateDomValue(), this._updateRegistrations(), this._oldForm = this.form); }
    onDestroy() { this.form && (z(this.form, this), this.form._onCollectionChange === this._onCollectionChange && this.form._registerOnCollectionChange(() => { })); }
    get formDirective() { return this; }
    get path() { return []; }
    addControl(e) { let i = this.form.get(e.path); return e._setupWithForm(i, this.callSetDisabledState), i.updateValueAndValidity({ emitEvent: !1 }), this.directives.push(e), i; }
    getControl(e) { return this.form.get(e.path); }
    removeControl(e) { $(e.control || null, e, !1), qt(this.directives, e); }
    addFormGroup(e) { this._setUpFormContainer(e); }
    removeFormGroup(e) { this._cleanUpFormContainer(e); }
    getFormGroup(e) { return this.form.get(e.path); }
    getFormArray(e) { return this.form.get(e.path); }
    addFormArray(e) { this._setUpFormContainer(e); }
    removeFormArray(e) { this._cleanUpFormContainer(e); }
    updateModel(e, i) { this.form.get(e.path).setValue(i); }
    onReset() { this.resetForm(); }
    resetForm(e = void 0, i = {}) { this.form.reset(e, i), this._submittedReactive.set(!1); }
    onSubmit(e) { return this.submitted = !0, ze(this.form, this.directives), this.ngSubmit.emit(e), this.form._events.next(new H(this.control)), e?.target?.method === "dialog"; }
    _updateDomValue() { this.directives.forEach(e => { let i = e.control, r = this.form.get(e.path); i !== r && ($(i || null, e), Zt(r) && e._setupWithForm(r, this.callSetDisabledState)); }), this.form._updateTreeValidity({ emitEvent: !1 }); }
    _setUpFormContainer(e) { let i = this.form.get(e.path); qe(i, e), i.updateValueAndValidity({ emitEvent: !1 }); }
    _cleanUpFormContainer(e) { let i = this.form?.get(e.path); i && Lt(i, e) && i.updateValueAndValidity({ emitEvent: !1 }); }
    _updateRegistrations() { this.form._registerOnCollectionChange(this._onCollectionChange), this._oldForm?._registerOnCollectionChange(() => { }); }
    _updateValidators() { ue(this.form, this), this._oldForm && z(this._oldForm, this); }
    _checkFormPresent() { this.form; }
    static \u0275fac = function (i) { return new (i || n)(o.\u0275\u0275directiveInject(d, 10), o.\u0275\u0275directiveInject(C, 10), o.\u0275\u0275directiveInject(k, 8)); };
    static \u0275dir = o.\u0275\u0275defineDirective({ type: n, features: [o.\u0275\u0275InheritDefinitionFeature, o.\u0275\u0275NgOnChangesFeature] });
} return n; })(), Kt = { provide: u, useExisting: l(() => Jt) }, Jt = (() => { class n extends he {
    form = null;
    ngSubmit = new _;
    get control() { return this.form; }
    static \u0275fac = (() => { let e; return function (r) { return (e || (e = o.\u0275\u0275getInheritedFactory(n)))(r || n); }; })();
    static \u0275dir = o.\u0275\u0275defineDirective({ type: n, selectors: [["", "formGroup", ""]], hostBindings: function (i, r) { i & 1 && o.\u0275\u0275listener("submit", function (a) { return r.onSubmit(a); })("reset", function () { return r.onReset(); }); }, inputs: { form: [0, "formGroup", "form"] }, outputs: { ngSubmit: "ngSubmit" }, exportAs: ["ngForm"], standalone: !1, features: [o.\u0275\u0275ProvidersFeature([Kt]), o.\u0275\u0275InheritDefinitionFeature] });
} return n; })(), Qt = { provide: m, useExisting: l(() => en) }, ye = Promise.resolve(), en = (() => { class n extends m {
    _changeDetectorRef;
    callSetDisabledState;
    control = new Xe;
    static ngAcceptInputType_isDisabled;
    _registered = !1;
    _ngModelInjector;
    viewModel;
    name = "";
    isDisabled;
    model;
    options;
    update = new _;
    constructor(e, i, r, s, a, c, g, N) { super(g, N, s), this._changeDetectorRef = a, this.callSetDisabledState = c, this._parent = e, this._setValidators(i), this._setAsyncValidators(r); }
    ngOnChanges(e) { if (this._registered, this._checkForErrors(), !this._registered || "name" in e) {
        if (this._registered && (this._checkName(), this.formDirective)) {
            let i = e.name.previousValue;
            this.formDirective.removeControl({ name: i, path: this._getPath(i) });
        }
        this._setUpControl();
    } "isDisabled" in e && this._updateDisabled(e), de(e, this.viewModel) && (this._updateValue(this.model), this.viewModel = this.model); }
    ngOnDestroy() { this.formDirective?.removeControl(this); }
    \u0275ngControlCreate(e) { super.ngControlCreate(e); }
    \u0275ngControlUpdate(e) { super.ngControlUpdate(e, !1); }
    get shouldBindRequired() { return !1; }
    get path() { return this._getPath(this.name); }
    get formDirective() { return this._parent ? this._parent.formDirective : null; }
    viewToModelUpdate(e) { this.viewModel = e, this.update.emit(e); }
    _setUpControl() { this._setUpdateStrategy(), this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this), this._registered = !0; }
    _setUpdateStrategy() { this.options && this.options.updateOn != null && (this.control._updateOn = this.options.updateOn); }
    _isStandalone() { return !this._parent || !!(this.options && this.options.standalone); }
    _setUpStandalone() { this.isCustomControlBased ? this.setupCustomControl() : (this.valueAccessor ??= this.selectedValueAccessor, W(this.control, this, this.callSetDisabledState)), this.control.updateValueAndValidity({ emitEvent: !1 }); }
    _setupWithForm(e) { this.isCustomControlBased ? this.setupCustomControl() : (this.valueAccessor ??= this.selectedValueAccessor, W(this.control, this, e)); }
    _checkForErrors() { this._checkName(); }
    _checkName() { this.options && this.options.name && (this.name = this.options.name), !this._isStandalone() && this.name; }
    _updateValue(e) { ye.then(() => { this.control.setValue(e, { emitViewToModelChange: !1 }), this._changeDetectorRef?.markForCheck(); }); }
    _updateDisabled(e) { let i = e.isDisabled.currentValue, r = i !== 0 && te(i); ye.then(() => { r && !this.control.disabled ? this.control.disable() : !r && this.control.disabled && this.control.enable(), this._changeDetectorRef?.markForCheck(); }); }
    _getPath(e) { return this._parent ? Y(e, this._parent) : [e]; }
    static \u0275fac = function (i) { return new (i || n)(o.\u0275\u0275directiveInject(u, 9), o.\u0275\u0275directiveInject(d, 10), o.\u0275\u0275directiveInject(C, 10), o.\u0275\u0275directiveInject(v, 10), o.\u0275\u0275directiveInject(ne, 8), o.\u0275\u0275directiveInject(k, 8), o.\u0275\u0275directiveInject(o.Injector, 8), o.\u0275\u0275directiveInject(o.Renderer2, 8)); };
    static \u0275dir = o.\u0275\u0275defineDirective({ type: n, selectors: [["", "ngModel", "", 3, "formControlName", "", 3, "formControl", ""]], inputs: { name: "name", isDisabled: [0, "disabled", "isDisabled"], model: [0, "ngModel", "model"], options: [0, "ngModelOptions", "options"] }, outputs: { update: "ngModelChange" }, exportAs: ["ngModel"], standalone: !1, features: [o.\u0275\u0275ProvidersFeature([Qt, ce]), o.\u0275\u0275InheritDefinitionFeature, o.\u0275\u0275NgOnChangesFeature, o.\u0275\u0275ControlFeature(null)] });
} return n; })();
var tn = { provide: v, useExisting: l(() => nn), multi: !0 }, nn = (() => { class n extends D {
    writeValue(e) { let i = e ?? ""; this.setProperty("value", i); }
    registerOnChange(e) { this.onChange = i => { e(i == "" ? null : parseFloat(i)); }; }
    static \u0275fac = (() => { let e; return function (r) { return (e || (e = o.\u0275\u0275getInheritedFactory(n)))(r || n); }; })();
    static \u0275dir = o.\u0275\u0275defineDirective({ type: n, selectors: [["input", "type", "number", "formControlName", "", 3, "ngNoCva", ""], ["input", "type", "number", "formControl", "", 3, "ngNoCva", ""], ["input", "type", "number", "ngModel", "", 3, "ngNoCva", ""]], hostBindings: function (i, r) { i & 1 && o.\u0275\u0275listener("input", function (a) { return r.onChange(a.target.value); })("blur", function () { return r.onTouched(); }); }, standalone: !1, features: [o.\u0275\u0275ProvidersFeature([tn]), o.\u0275\u0275InheritDefinitionFeature] });
} return n; })(), rn = { provide: v, useExisting: l(() => sn), multi: !0 };
var on = (() => { class n {
    _accessors = [];
    add(e, i) { this._accessors.push([e, i]); }
    remove(e) { for (let i = this._accessors.length - 1; i >= 0; --i)
        if (this._accessors[i][1] === e) {
            this._accessors.splice(i, 1);
            return;
        } }
    select(e) { this._accessors.forEach(i => { this._isSameGroup(i, e) && i[1] !== e && i[1].fireUncheck(e.value); }); }
    _isSameGroup(e, i) { return e[0].control ? e[0]._parent === i._control._parent && e[1].name === i.name : !1; }
    static \u0275fac = function (i) { return new (i || n); };
    static \u0275prov = o.\u0275\u0275defineService({ token: n, factory: n.\u0275fac });
} return n; })(), sn = (() => { class n extends D {
    _registry;
    _injector;
    _state;
    _control;
    _fn;
    setDisabledStateFired = !1;
    onChange = () => { };
    name;
    formControlName;
    value;
    callSetDisabledState = x(k, { optional: !0 }) ?? le;
    constructor(e, i, r, s) { super(e, i), this._registry = r, this._injector = s; }
    ngOnChanges(e) { let i = this._control?.control; e.value && i && this.writeValue(i.value); }
    ngOnInit() { this._control = this._injector.get(m), this._checkName(), this._registry.add(this._control, this); }
    ngOnDestroy() { this._registry.remove(this); }
    writeValue(e) { this._state = e === this.value, this.setProperty("checked", this._state); }
    registerOnChange(e) { this._fn = e, this.onChange = () => { e(this.value), this._registry.select(this); }; }
    setDisabledState(e) { (this.setDisabledStateFired || e || this.callSetDisabledState === "whenDisabledForLegacyCode") && this.setProperty("disabled", e), this.setDisabledStateFired = !0; }
    fireUncheck(e) { this.writeValue(e); }
    _checkName() { this.name && this.formControlName && (this.name, this.formControlName), !this.name && this.formControlName && (this.name = this.formControlName); }
    static \u0275fac = function (i) { return new (i || n)(o.\u0275\u0275directiveInject(o.Renderer2), o.\u0275\u0275directiveInject(o.ElementRef), o.\u0275\u0275directiveInject(on), o.\u0275\u0275directiveInject(o.Injector)); };
    static \u0275dir = o.\u0275\u0275defineDirective({ type: n, selectors: [["input", "type", "radio", "formControlName", "", 3, "ngNoCva", ""], ["input", "type", "radio", "formControl", "", 3, "ngNoCva", ""], ["input", "type", "radio", "ngModel", "", 3, "ngNoCva", ""]], hostBindings: function (i, r) { i & 1 && o.\u0275\u0275listener("change", function () { return r.onChange(); })("blur", function () { return r.onTouched(); }); }, inputs: { name: "name", formControlName: "formControlName", value: "value" }, standalone: !1, features: [o.\u0275\u0275ProvidersFeature([rn]), o.\u0275\u0275InheritDefinitionFeature, o.\u0275\u0275NgOnChangesFeature] });
} return n; })(), an = { provide: v, useExisting: l(() => ln), multi: !0 }, ln = (() => { class n extends D {
    writeValue(e) { this.setProperty("value", parseFloat(e)); }
    registerOnChange(e) { this.onChange = i => { e(i == "" ? null : parseFloat(i)); }; }
    static \u0275fac = (() => { let e; return function (r) { return (e || (e = o.\u0275\u0275getInheritedFactory(n)))(r || n); }; })();
    static \u0275dir = o.\u0275\u0275defineDirective({ type: n, selectors: [["input", "type", "range", "formControlName", "", 3, "ngNoCva", ""], ["input", "type", "range", "formControl", "", 3, "ngNoCva", ""], ["input", "type", "range", "ngModel", "", 3, "ngNoCva", ""]], hostBindings: function (i, r) { i & 1 && o.\u0275\u0275listener("change", function (a) { return r.onChange(a.target.value); })("input", function (a) { return r.onChange(a.target.value); })("blur", function () { return r.onTouched(); }); }, standalone: !1, features: [o.\u0275\u0275ProvidersFeature([an]), o.\u0275\u0275InheritDefinitionFeature] });
} return n; })();
var un = { provide: u, useExisting: l(() => dn) }, dn = (() => { class n extends he {
    form = null;
    ngSubmit = new _;
    get control() { return this.form; }
    static \u0275fac = (() => { let e; return function (r) { return (e || (e = o.\u0275\u0275getInheritedFactory(n)))(r || n); }; })();
    static \u0275dir = o.\u0275\u0275defineDirective({ type: n, selectors: [["", "formArray", ""]], hostBindings: function (i, r) { i & 1 && o.\u0275\u0275listener("submit", function (a) { return r.onSubmit(a); })("reset", function () { return r.onReset(); }); }, inputs: { form: [0, "formArray", "form"] }, outputs: { ngSubmit: "ngSubmit" }, exportAs: ["ngForm"], standalone: !1, features: [o.\u0275\u0275ProvidersFeature([un]), o.\u0275\u0275InheritDefinitionFeature] });
} return n; })(), Ke = new V(""), cn = { provide: m, useExisting: l(() => hn) }, hn = (() => { class n extends m {
    _ngModelWarningConfig;
    callSetDisabledState;
    viewModel;
    form;
    set isDisabled(e) { }
    model;
    update = new _;
    static _ngModelWarningSentOnce = !1;
    _ngModelWarningSent = !1;
    constructor(e, i, r, s, a, c, g) { super(g, c, r), this._ngModelWarningConfig = s, this.callSetDisabledState = a, this._setValidators(e), this._setAsyncValidators(i); }
    ngOnChanges(e) { if (this._isControlChanged(e)) {
        let i = e.form.previousValue;
        i && ($(i, this, !1), this.removeParseErrorsValidator(i)), this.isCustomControlBased ? this.setupCustomControl() : (this.valueAccessor ??= this.selectedValueAccessor, W(this.form, this, this.callSetDisabledState)), this.form.updateValueAndValidity({ emitEvent: !1 });
    } de(e, this.viewModel) && (this.form.setValue(this.model), this.viewModel = this.model); }
    ngOnDestroy() { this.form && $(this.form, this, !1); }
    get path() { return []; }
    get control() { return this.form; }
    viewToModelUpdate(e) { this.viewModel = e, this.update.emit(e); }
    _isControlChanged(e) { return Object.hasOwn(e, "form"); }
    \u0275ngControlCreate(e) { super.ngControlCreate(e); }
    \u0275ngControlUpdate(e) { super.ngControlUpdate(e, !0); }
    static \u0275fac = function (i) { return new (i || n)(o.\u0275\u0275directiveInject(d, 10), o.\u0275\u0275directiveInject(C, 10), o.\u0275\u0275directiveInject(v, 10), o.\u0275\u0275directiveInject(Ke, 8), o.\u0275\u0275directiveInject(k, 8), o.\u0275\u0275directiveInject(o.Renderer2, 8), o.\u0275\u0275directiveInject(o.Injector, 8)); };
    static \u0275dir = o.\u0275\u0275defineDirective({ type: n, selectors: [["", "formControl", ""]], inputs: { form: [0, "formControl", "form"], isDisabled: [0, "disabled", "isDisabled"], model: [0, "ngModel", "model"] }, outputs: { update: "ngModelChange" }, exportAs: ["ngForm"], standalone: !1, features: [o.\u0275\u0275ProvidersFeature([cn, ce]), o.\u0275\u0275InheritDefinitionFeature, o.\u0275\u0275NgOnChangesFeature, o.\u0275\u0275ControlFeature(null)] });
} return n; })(), fn = { provide: u, useExisting: l(() => Je) }, Je = (() => { class n extends Ye {
    name = null;
    constructor(e, i, r) { super(), this._parent = e, this._setValidators(i), this._setAsyncValidators(r); }
    _checkParentType() { et(this._parent); }
    static \u0275fac = function (i) { return new (i || n)(o.\u0275\u0275directiveInject(u, 13), o.\u0275\u0275directiveInject(d, 10), o.\u0275\u0275directiveInject(C, 10)); };
    static \u0275dir = o.\u0275\u0275defineDirective({ type: n, selectors: [["", "formGroupName", ""]], inputs: { name: [0, "formGroupName", "name"] }, standalone: !1, features: [o.\u0275\u0275ProvidersFeature([fn]), o.\u0275\u0275InheritDefinitionFeature] });
} return n; })(), gn = { provide: u, useExisting: l(() => Qe) }, Qe = (() => { class n extends u {
    _parent;
    name = null;
    constructor(e, i, r) { super(), this._parent = e, this._setValidators(i), this._setAsyncValidators(r); }
    ngOnInit() { et(this._parent), this.formDirective.addFormArray(this); }
    ngOnDestroy() { this.formDirective?.removeFormArray(this); }
    get control() { return this.formDirective.getFormArray(this); }
    get formDirective() { return this._parent ? this._parent.formDirective : null; }
    get path() { return Y(this.name == null ? this.name : this.name.toString(), this._parent); }
    static \u0275fac = function (i) { return new (i || n)(o.\u0275\u0275directiveInject(u, 13), o.\u0275\u0275directiveInject(d, 10), o.\u0275\u0275directiveInject(C, 10)); };
    static \u0275dir = o.\u0275\u0275defineDirective({ type: n, selectors: [["", "formArrayName", ""]], inputs: { name: [0, "formArrayName", "name"] }, standalone: !1, features: [o.\u0275\u0275ProvidersFeature([gn]), o.\u0275\u0275InheritDefinitionFeature] });
} return n; })();
function et(n) { return !(n instanceof Je) && !(n instanceof he) && !(n instanceof Qe); }
var pn = { provide: m, useExisting: l(() => mn) }, mn = (() => { class n extends m {
    _ngModelWarningConfig;
    _added = !1;
    viewModel;
    control;
    name = null;
    set isDisabled(e) { }
    model;
    update = new _;
    static _ngModelWarningSentOnce = !1;
    _ngModelWarningSent = !1;
    constructor(e, i, r, s, a, c, g) { super(g, c, s), this._ngModelWarningConfig = a, this._parent = e, this._setValidators(i), this._setAsyncValidators(r); }
    _setupWithForm(e, i) { this.control = e, this.isCustomControlBased ? this.setupCustomControl() : (this.valueAccessor ??= this.selectedValueAccessor, W(e, this, i)); }
    ngOnChanges(e) { this._added || this._setUpControl(), de(e, this.viewModel) && (this.viewModel = this.model, this.formDirective.updateModel(this, this.model)); }
    ngOnDestroy() { this.formDirective?.removeControl(this); }
    viewToModelUpdate(e) { this.viewModel = e, this.update.emit(e); }
    get path() { return Y(this.name == null ? this.name : this.name.toString(), this._parent); }
    get formDirective() { return this._parent ? this._parent.formDirective : null; }
    _setUpControl() { this.control = this.formDirective.addControl(this), this._added = !0; }
    \u0275ngControlCreate(e) { super.ngControlCreate(e); }
    \u0275ngControlUpdate(e) { this.isCustomControlBased && (this._added || this._setUpControl(), super.ngControlUpdate(e, !0)); }
    static \u0275fac = function (i) { return new (i || n)(o.\u0275\u0275directiveInject(u, 13), o.\u0275\u0275directiveInject(d, 10), o.\u0275\u0275directiveInject(C, 10), o.\u0275\u0275directiveInject(v, 10), o.\u0275\u0275directiveInject(Ke, 8), o.\u0275\u0275directiveInject(o.Renderer2, 8), o.\u0275\u0275directiveInject(o.Injector, 8)); };
    static \u0275dir = o.\u0275\u0275defineDirective({ type: n, selectors: [["", "formControlName", ""]], inputs: { name: [0, "formControlName", "name"], isDisabled: [0, "disabled", "isDisabled"], model: [0, "ngModel", "model"] }, outputs: { update: "ngModelChange" }, standalone: !1, features: [o.\u0275\u0275ProvidersFeature([pn, ce]), o.\u0275\u0275InheritDefinitionFeature, o.\u0275\u0275NgOnChangesFeature, o.\u0275\u0275ControlFeature(null)] });
} return n; })();
var vn = { provide: v, useExisting: l(() => Cn), multi: !0 };
function _n(n, t) { return n == null ? `${t}` : (t && typeof t == "object" && (t = "Object"), `${n}: ${t}`.slice(0, 50)); }
function yn(n) { return n.split(":")[0]; }
var Cn = (() => { class n extends D {
    value;
    _optionMap = new Map;
    _idCounter = 0;
    set compareWith(e) { this._compareWith = e; }
    _compareWith = Object.is;
    appRefInjector = x(it).injector;
    destroyRef = x(Ce);
    cdr = x(ne);
    _queuedWrite = !1;
    _writeValueAfterRender() { this._queuedWrite || this.appRefInjector.destroyed || (this._queuedWrite = !0, rt({ write: () => { this.destroyRef.destroyed || (this._queuedWrite = !1, this.writeValue(this.value)); } }, { injector: this.appRefInjector })); }
    writeValue(e) { this.cdr.markForCheck(), this.value = e; let i = this._getOptionId(e), r = _n(i, e); this.setProperty("value", r); }
    registerOnChange(e) { this.onChange = i => { this.value = this._getOptionValue(i), e(this.value); }; }
    _registerOption() { return (this._idCounter++).toString(); }
    _getOptionId(e) { for (let i of this._optionMap.keys())
        if (this._compareWith(this._optionMap.get(i), e))
            return i; return null; }
    _getOptionValue(e) { let i = yn(e); return this._optionMap.has(i) ? this._optionMap.get(i) : e; }
    static \u0275fac = (() => { let e; return function (r) { return (e || (e = o.\u0275\u0275getInheritedFactory(n)))(r || n); }; })();
    static \u0275dir = o.\u0275\u0275defineDirective({ type: n, selectors: [["select", "formControlName", "", 3, "multiple", "", 3, "ngNoCva", ""], ["select", "formControl", "", 3, "multiple", "", 3, "ngNoCva", ""], ["select", "ngModel", "", 3, "multiple", "", 3, "ngNoCva", ""]], hostBindings: function (i, r) { i & 1 && o.\u0275\u0275listener("change", function (a) { return r.onChange(a.target.value); })("blur", function () { return r.onTouched(); }); }, inputs: { compareWith: "compareWith" }, standalone: !1, features: [o.\u0275\u0275ProvidersFeature([vn]), o.\u0275\u0275InheritDefinitionFeature] });
} return n; })();
var Vn = { provide: v, useExisting: l(() => bn), multi: !0 };
function Dn(n) { return n.split(":")[0]; }
var bn = (() => { class n extends D {
    value;
    _optionMap = new Map;
    _idCounter = 0;
    set compareWith(e) { this._compareWith = e; }
    _compareWith = Object.is;
    writeValue(e) { this.value = e; let i; if (Array.isArray(e)) {
        let r = e.map(s => this._getOptionId(s));
        i = (s, a) => { s._setSelected(r.indexOf(a) > -1); };
    }
    else
        i = r => { r._setSelected(!1); }; this._optionMap.forEach(i); }
    registerOnChange(e) { this.onChange = i => { let r = [], s = i.selectedOptions; if (s !== void 0) {
        let a = s;
        for (let c = 0; c < a.length; c++) {
            let g = a[c], N = this._getOptionValue(g.value);
            r.push(N);
        }
    }
    else {
        let a = i.options;
        for (let c = 0; c < a.length; c++) {
            let g = a[c];
            if (g.selected) {
                let N = this._getOptionValue(g.value);
                r.push(N);
            }
        }
    } this.value = r, e(r); }; }
    _registerOption(e) { let i = (this._idCounter++).toString(); return this._optionMap.set(i, e), i; }
    _getOptionId(e) { for (let i of this._optionMap.keys())
        if (this._compareWith(this._optionMap.get(i)._value, e))
            return i; return null; }
    _getOptionValue(e) { let i = Dn(e); return this._optionMap.has(i) ? this._optionMap.get(i)._value : e; }
    static \u0275fac = (() => { let e; return function (r) { return (e || (e = o.\u0275\u0275getInheritedFactory(n)))(r || n); }; })();
    static \u0275dir = o.\u0275\u0275defineDirective({ type: n, selectors: [["select", "multiple", "", "formControlName", "", 3, "ngNoCva", ""], ["select", "multiple", "", "formControl", "", 3, "ngNoCva", ""], ["select", "multiple", "", "ngModel", "", 3, "ngNoCva", ""]], hostBindings: function (i, r) { i & 1 && o.\u0275\u0275listener("change", function (a) { return r.onChange(a.target); })("blur", function () { return r.onTouched(); }); }, inputs: { compareWith: "compareWith" }, standalone: !1, features: [o.\u0275\u0275ProvidersFeature([Vn]), o.\u0275\u0275InheritDefinitionFeature] });
} return n; })();
export { v as a, d as b, J as c, u as d, m as e, Ze as f, Jt as g };
/*! Bundled license information:

@angular/forms/fesm2022/forms.mjs:
  (**
   * @license Angular v22.1.4
   * (c) 2010-2026 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
