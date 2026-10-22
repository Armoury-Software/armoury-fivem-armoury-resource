import { a as R } from "@nf-internal/chunk-455X7AMD";
import { b as f, c as b } from "@nf-internal/chunk-HGEVE5R3";
import { a as D, e as _ } from "@nf-internal/chunk-QSLXVGKB";
import { c as I } from "@nf-internal/chunk-HZSYPXGA";
import "@nf-internal/chunk-CLS55YPL";
import { n as x } from "@nf-internal/chunk-OWKVPWKA";
import "@nf-internal/chunk-M4FUFBJO";
import { a as A, b as O, c as C } from "@nf-internal/chunk-PMOCNCWX";
import "@nf-internal/chunk-TDH6BADM";
import "@nf-internal/chunk-2SOO3RAN";
import { c as M } from "@nf-internal/chunk-L6LZ2NRF";
import "@nf-internal/chunk-2NFLSA4Y";
import * as i from "@angular/core";
import { InjectionToken as N, inject as o, Injector as S, ViewContainerRef as q, signal as g, viewChild as K, viewChildren as j, input as l, output as v, booleanAttribute as h, computed as u, effect as T, ElementRef as w, afterNextRender as B, untracked as y, model as z, Renderer2 as G, HostAttributeToken as U } from "@angular/core";
import { Directionality as Y } from "@angular/cdk/bidi";
import { createRepositionScrollStrategy as W, createFlexibleConnectedPositionStrategy as X, createOverlayRef as Z } from "@angular/cdk/overlay";
import { TemplatePortal as $ } from "@angular/cdk/portal";
import { _getEventTarget as E, _getFocusedElementPierceShadowDom as Q } from "@angular/cdk/platform";
import { TAB as J, ESCAPE as L, hasModifierKey as F, ENTER as ee, DOWN_ARROW as te, UP_ARROW as ie } from "@angular/cdk/keycodes";
import { ActiveDescendantKeyManager as ae, _IdGenerator as ne } from "@angular/cdk/a11y";
import { CdkScrollableModule as re } from "@angular/cdk/scrolling";
import "rxjs";
import "@angular/cdk/layout";
import "@angular/cdk/coercion";
import "@angular/cdk/private";
import "@angular/common";
import "rxjs/operators";
import "@angular/cdk/observers/private";
var se = ["panelTemplate"], oe = (n, d) => d.value;
function le(n, d) { if (n & 1) {
    let e = i.\u0275\u0275getCurrentView();
    i.\u0275\u0275elementStart(0, "mat-option", 3), i.\u0275\u0275listener("onSelectionChange", function (a) { i.\u0275\u0275restoreView(e); let r = i.\u0275\u0275nextContext(2); return i.\u0275\u0275resetView(r._selectValue(a.source)); }), i.\u0275\u0275text(1), i.\u0275\u0275elementEnd();
} if (n & 2) {
    let e = d.$implicit;
    i.\u0275\u0275property("value", e.value), i.\u0275\u0275advance(), i.\u0275\u0275textInterpolate(e.label);
} }
function de(n, d) { if (n & 1) {
    let e = i.\u0275\u0275getCurrentView();
    i.\u0275\u0275elementStart(0, "div", 1), i.\u0275\u0275listener("animationend", function (a) { i.\u0275\u0275restoreView(e); let r = i.\u0275\u0275nextContext(); return i.\u0275\u0275resetView(r._handleAnimationEnd(a)); }), i.\u0275\u0275repeaterCreate(1, le, 2, 2, "mat-option", 2, oe), i.\u0275\u0275elementEnd();
} if (n & 2) {
    let e = i.\u0275\u0275nextContext();
    i.\u0275\u0275classProp("mat-timepicker-panel-animations-enabled", !e._animationsDisabled)("mat-timepicker-panel-exit", !e.isOpen()), i.\u0275\u0275property("id", e.panelId), i.\u0275\u0275attribute("aria-label", e.ariaLabel() || null)("aria-labelledby", e._getAriaLabelledby()), i.\u0275\u0275advance(), i.\u0275\u0275repeater(e._timeOptions);
} }
var pe = [[["", "matTimepickerToggleIcon", ""]]], ce = ["[matTimepickerToggleIcon]"];
function me(n, d) { n & 1 && (i.\u0275\u0275namespaceSVG(), i.\u0275\u0275elementStart(0, "svg", 1), i.\u0275\u0275element(1, "path", 2), i.\u0275\u0275elementEnd()); }
var ue = /^(\d*\.?\d+)\s*(h|hour|hours|m|min|minute|minutes|s|second|seconds)?$/i, P = new N("MAT_TIMEPICKER_CONFIG");
function V(n) { let d; if (n === null)
    return null; if (typeof n == "number")
    d = n;
else {
    if (n.trim().length === 0)
        return null;
    let e = n.match(ue), t = e ? parseFloat(e[1]) : null, a = e?.[2]?.toLowerCase() || null;
    if (!e || t === null || isNaN(t))
        return null;
    a === "h" || a === "hour" || a === "hours" ? d = t * 3600 : a === "m" || a === "min" || a === "minute" || a === "minutes" ? d = t * 60 : d = t;
} return d; }
function he(n, d, e, t, a) { a = Math.max(a, 1); let r = [], s = n.compareTime(e, t) < 1 ? e : t; for (; n.sameDate(s, e) && n.compareTime(s, t) < 1 && n.isValid(s);)
    r.push({ value: s, label: n.format(s, d.display.timeOptionLabel) }), s = n.addSeconds(s, a); return r; }
var _e = new N("MAT_TIMEPICKER_SCROLL_STRATEGY", { providedIn: "root", factory: () => { let n = o(S); return () => W(n); } }), ge = (() => {
    class n {
        _dir = o(Y, { optional: !0 });
        _viewContainerRef = o(q);
        _injector = o(S);
        _defaultConfig = o(P, { optional: !0 });
        _dateAdapter = o(f, { optional: !0 });
        _dateFormats = o(b, { optional: !0 });
        _scrollStrategyFactory = o(_e);
        _animationsDisabled = M();
        _isOpen = g(!1);
        _activeDescendant = g(null);
        _input = g(null);
        _overlayRef = null;
        _portal = null;
        _optionsCacheKey = null;
        _localeChanges;
        _onOpenRender = null;
        _panelTemplate = K.required("panelTemplate");
        _timeOptions = [];
        _options = j(_);
        _keyManager = new ae(this._options, this._injector).withHomeAndEnd(!0).withPageUpDown(!0).withVerticalOrientation(!0);
        interval = l(V(this._defaultConfig?.interval || null), { transform: V });
        options = l(null);
        isOpen = this._isOpen.asReadonly();
        selected = v();
        opened = v();
        closed = v();
        activeDescendant = this._activeDescendant.asReadonly();
        panelId = o(ne).getId("mat-timepicker-panel-");
        disableRipple = l(this._defaultConfig?.disableRipple ?? !1, { transform: h });
        ariaLabel = l(null, { alias: "aria-label" });
        ariaLabelledby = l(null, { alias: "aria-labelledby" });
        disabled = u(() => !!this._input()?.disabled());
        panelClass = l();
        constructor() { o(w).nativeElement.setAttribute("mat-timepicker-panel-id", this.panelId), this._handleLocaleChanges(), this._handleInputStateChanges(), this._keyManager.change.subscribe(() => this._activeDescendant.set(this._keyManager.activeItem?.id || null)); }
        open() { let e = this._input(); if (!e || (e.focus(), this._isOpen()))
            return; this._isOpen.set(!0), this._generateOptions(); let t = this._getOverlayRef(); t.updateSize({ width: e.getOverlayOrigin().nativeElement.offsetWidth }), this._portal ??= new $(this._panelTemplate(), this._viewContainerRef), t.hasAttached() || t.attach(this._portal), this._onOpenRender?.destroy(), this._onOpenRender = B(() => { let a = this._options(); this._syncSelectedState(e.value(), a, a[0]), this._onOpenRender = null; }, { injector: this._injector }), this.opened.emit(); }
        close() { this._isOpen() && (this._isOpen.set(!1), this.closed.emit(), this._animationsDisabled && this._overlayRef?.detach()); }
        registerInput(e) { let t = this._input(); this._input.set(e); }
        ngOnDestroy() { this._keyManager.destroy(), this._localeChanges?.unsubscribe(), this._onOpenRender?.destroy(), this._overlayRef?.dispose(); }
        _getOverlayHost() { return this._overlayRef?.hostElement; }
        _selectValue(e) { this.close(), this._keyManager.setActiveItem(e), this._options().forEach(t => { t !== e && t.deselect(!1); }), this._input()?.timepickerValueAssigned(e.value), this.selected.emit({ value: e.value, source: this }), this._input()?.focus(); }
        _getAriaLabelledby() { return this.ariaLabel() ? null : this.ariaLabelledby() || this._input()?.getLabelId() || null; }
        _handleAnimationEnd(e) { e.animationName === "_mat-timepicker-exit" && this._overlayRef?.detach(); }
        _getOverlayRef() { if (this._overlayRef)
            return this._overlayRef; let e = X(this._injector, this._input().getOverlayOrigin()).withFlexibleDimensions(!1).withPush(!1).withTransformOriginOn(".mat-timepicker-panel").withPopoverLocation("inline").withPositions([{ originX: "start", originY: "bottom", overlayX: "start", overlayY: "top" }, { originX: "start", originY: "top", overlayX: "start", overlayY: "bottom", panelClass: "mat-timepicker-above" }]); return this._overlayRef = Z(this._injector, { positionStrategy: e, scrollStrategy: this._scrollStrategyFactory(), direction: this._dir || "ltr", hasBackdrop: !1, disableAnimations: this._animationsDisabled, panelClass: this.panelClass() }), this._overlayRef.detachments().subscribe(() => this.close()), this._overlayRef.keydownEvents().subscribe(t => this._handleKeydown(t)), this._overlayRef.outsidePointerEvents().subscribe(t => { let a = E(t), r = this._input()?.getOverlayOrigin().nativeElement; a && r && a !== r && !r.contains(a) && this.close(); }), this._overlayRef; }
        _generateOptions() { let e = this.interval() ?? 1800, t = this.options(); if (t !== null)
            this._timeOptions = t;
        else {
            let a = this._input(), r = this._dateAdapter, s = this._dateFormats.display.timeInput, c = a?.min() || r.setTime(r.today(), 0, 0, 0), m = a?.max() || r.setTime(r.today(), 23, 59, 0), p = e + "/" + r.format(c, s) + "/" + r.format(m, s);
            p !== this._optionsCacheKey && (this._optionsCacheKey = p, this._timeOptions = he(r, this._dateFormats, c, m, e));
        } }
        _syncSelectedState(e, t, a) { let r = !1; for (let s of t)
            e && this._dateAdapter.sameTime(s.value, e) ? (s.select(!1), k(s, "center"), y(() => this._keyManager.setActiveItem(s)), r = !0) : s.deselect(!1); r || (a ? (y(() => this._keyManager.setActiveItem(a)), k(a, "center")) : y(() => this._keyManager.setActiveItem(-1))); }
        _handleKeydown(e) { let t = e.keyCode; if (t === J)
            this.close();
        else if (t === L && !F(e))
            e.preventDefault(), this.close();
        else if (t === ee)
            e.preventDefault(), this._keyManager.activeItem ? this._selectValue(this._keyManager.activeItem) : this.close();
        else {
            let a = this._keyManager.activeItem;
            this._keyManager.onKeydown(e);
            let r = this._keyManager.activeItem;
            r && r !== a && k(r, "nearest");
        } }
        _handleLocaleChanges() { this._localeChanges = this._dateAdapter.localeChanges.subscribe(() => { this._optionsCacheKey = null, this.isOpen() && this._generateOptions(); }); }
        _handleInputStateChanges() { T(() => { let e = this._input(), t = this._options(); this._isOpen() && e && this._syncSelectedState(e.value(), t, null); }); }
        static \u0275fac = function (t) { return new (t || n); };
        static \u0275cmp = i.\u0275\u0275defineComponent({ type: n, selectors: [["mat-timepicker"]], viewQuery: function (t, a) { t & 1 && i.\u0275\u0275viewQuerySignal(a._panelTemplate, se, 5)(a._options, _, 5), t & 2 && i.\u0275\u0275queryAdvance(2); }, inputs: { interval: [1, "interval"], options: [1, "options"], disableRipple: [1, "disableRipple"], ariaLabel: [1, "aria-label", "ariaLabel"], ariaLabelledby: [1, "aria-labelledby", "ariaLabelledby"], panelClass: [1, "panelClass"] }, outputs: { selected: "selected", opened: "opened", closed: "closed" }, exportAs: ["matTimepicker"], features: [i.\u0275\u0275ProvidersFeature([{ provide: D, useExisting: n }])], decls: 2, vars: 0, consts: [["panelTemplate", ""], ["role", "listbox", 1, "mat-timepicker-panel", 3, "animationend", "id"], [3, "value"], [3, "onSelectionChange", "value"]], template: function (t, a) { t & 1 && i.\u0275\u0275template(0, de, 3, 7, "ng-template", null, 0, i.\u0275\u0275templateRefExtractor); }, dependencies: [_], styles: [`@keyframes _mat-timepicker-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-timepicker-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
mat-timepicker {
  display: none;
}

.mat-timepicker-panel {
  width: 100%;
  max-height: 256px;
  transform-origin: center top;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  position: relative;
  border-bottom-left-radius: var(--%NS%mat-timepicker-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-timepicker-container-shape, var(--%NS%mat-sys-corner-extra-small));
  box-shadow: var(--%NS%mat-timepicker-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  background-color: var(--%NS%mat-timepicker-container-background-color, var(--%NS%mat-sys-surface-container));
}
@media (forced-colors: active) {
  .mat-timepicker-panel {
    outline: solid 1px;
  }
}
.mat-timepicker-above .mat-timepicker-panel {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-timepicker-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-top-right-radius: var(--%NS%mat-timepicker-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mat-timepicker-panel-animations-enabled {
  animation: _mat-timepicker-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-timepicker-panel-animations-enabled.mat-timepicker-panel-exit {
  animation: _mat-timepicker-exit 100ms linear;
}

.mat-timepicker-input[readonly] {
  cursor: pointer;
}

@media (forced-colors: active) {
  .mat-timepicker-toggle-default-icon {
    color: CanvasText;
  }
}
`], encapsulation: 2 });
    }
    return n;
})();
function k(n, d) { n._getHostElement().scrollIntoView({ block: d, inline: d }); }
var ze = (() => { class n {
    _elementRef = o(w);
    _dateAdapter = o(f, { optional: !0 });
    _dateFormats = o(b, { optional: !0 });
    _formField = o(x, { optional: !0 });
    _onChange;
    _onTouched;
    _validatorOnChange;
    _cleanupClick;
    _accessorDisabled = g(!1);
    _localeSubscription;
    _timepickerSubscription;
    _validator;
    _lastValueValid = !0;
    _minValid = !0;
    _maxValid = !0;
    _lastValidDate = null;
    _ariaActiveDescendant = u(() => { let e = this.timepicker(), t = e.isOpen(), a = e.activeDescendant(); return t && a ? a : null; });
    _ariaExpanded = u(() => this.timepicker().isOpen() + "");
    _ariaControls = u(() => { let e = this.timepicker(); return e.isOpen() ? e.panelId : null; });
    value = z(null);
    timepicker = l.required({ alias: "matTimepicker" });
    min = l(null, { alias: "matTimepickerMin", transform: e => this._transformDateInput(e) });
    max = l(null, { alias: "matTimepickerMax", transform: e => this._transformDateInput(e) });
    openOnClick = l(!0, { alias: "matTimepickerOpenOnClick", transform: h });
    disabled = u(() => this.disabledInput() || this._accessorDisabled());
    disabledInput = l(!1, { transform: h, alias: "disabled" });
    constructor() { let e = o(G); this._validator = this._getValidator(), this._updateFormsState(), this._registerTimepicker(), this._localeSubscription = this._dateAdapter.localeChanges.subscribe(() => { this._hasFocus() || this._formatValue(this.value()); }), this._cleanupClick = e.listen(this.getOverlayOrigin().nativeElement, "click", this._handleClick); }
    writeValue(e) { let t = this._dateAdapter.deserialize(e); this.value.set(this._dateAdapter.getValidDateOrNull(t)); }
    registerOnChange(e) { this._onChange = e; }
    registerOnTouched(e) { this._onTouched = e; }
    setDisabledState(e) { this._accessorDisabled.set(e); }
    validate(e) { return this._validator(e); }
    registerOnValidatorChange(e) { this._validatorOnChange = e; }
    getOverlayOrigin() { return this._formField?.getConnectedOverlayOrigin() || this._elementRef; }
    focus() { this._elementRef.nativeElement.focus(); }
    ngOnDestroy() { this._cleanupClick(), this._timepickerSubscription?.unsubscribe(), this._localeSubscription.unsubscribe(); }
    getLabelId() { return this._formField?.getLabelId() || null; }
    _handleClick = e => { if (this.disabled() || !this.openOnClick())
        return; let t = E(e), a = this.timepicker()._getOverlayHost(); (!t || !a || !a.contains(t)) && this.timepicker().open(); };
    _handleInput(e) { let t = e.target.value, a = this.value(), r = this._dateAdapter.parseTime(t, this._dateFormats.parse.timeInput), s = !this._dateAdapter.sameTime(r, a); !r || s || t && !a ? this._assignUserSelection(r, !0) : this._validatorOnChange?.(); }
    _handleBlur() { let e = this.value(); e && this._isValid(e) && this._formatValue(e), this.timepicker().isOpen() || this._onTouched?.(); }
    _handleKeydown(e) { this.timepicker().isOpen() || this.disabled() || (e.keyCode === L && !F(e) && this.value() !== null ? (e.preventDefault(), this.value.set(null), this._formatValue(null)) : (e.keyCode === te || e.keyCode === ie) && (e.preventDefault(), this.timepicker().open())); }
    timepickerValueAssigned(e) { this._dateAdapter.sameTime(e, this.value()) || (this._assignUserSelection(e, !0), this._formatValue(e)); }
    _updateFormsState() { T(() => { let { _dateAdapter: e, _lastValueValid: t, _minValid: a, _maxValid: r } = this, s = e.deserialize(this.value()), c = this.min(), m = this.max(), p = this._lastValueValid = this._isValid(s); this._minValid = !c || !s || !p || e.compareTime(c, s) <= 0, this._maxValid = !m || !s || !p || e.compareTime(m, s) >= 0; let H = t !== p || a !== this._minValid || r !== this._maxValid; this._hasFocus() || this._formatValue(s), s && p && (this._lastValidDate = s), H && this._validatorOnChange?.(); }); }
    _registerTimepicker() { T(() => { let e = this.timepicker(); e.registerInput(this), e.closed.subscribe(() => this._onTouched?.()); }); }
    _assignUserSelection(e, t) { let a; if (e == null || !this._isValid(e))
        a = e;
    else {
        let r = this._dateAdapter, s = r.getValidDateOrNull(this._lastValidDate || this.value()), c = r.getHours(e), m = r.getMinutes(e), p = r.getSeconds(e);
        a = s ? r.setTime(s, c, m, p) : e;
    } t && this._onChange?.(a), this.value.set(a); }
    _formatValue(e) { e = this._dateAdapter.getValidDateOrNull(e), this._elementRef.nativeElement.value = e == null ? "" : this._dateAdapter.format(e, this._dateFormats.display.timeInput); }
    _isValid(e) { return !e || this._dateAdapter.isValid(e); }
    _transformDateInput(e) { let t = typeof e == "string" ? this._dateAdapter.parseTime(e, this._dateFormats.parse.timeInput) : this._dateAdapter.deserialize(e); return t && this._dateAdapter.isValid(t) ? t : null; }
    _hasFocus() { return Q() === this._elementRef.nativeElement; }
    _getValidator() { return C.compose([() => this._lastValueValid ? null : { matTimepickerParse: { text: this._elementRef.nativeElement.value } }, e => this._minValid ? null : { matTimepickerMin: { min: this.min(), actual: this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)) } }, e => this._maxValid ? null : { matTimepickerMax: { max: this.max(), actual: this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)) } }]); }
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275dir = i.\u0275\u0275defineDirective({ type: n, selectors: [["input", "matTimepicker", ""]], hostAttrs: ["role", "combobox", "type", "text", "aria-haspopup", "listbox", 1, "mat-timepicker-input"], hostVars: 5, hostBindings: function (t, a) { t & 1 && i.\u0275\u0275listener("blur", function () { return a._handleBlur(); })("input", function (s) { return a._handleInput(s); })("keydown", function (s) { return a._handleKeydown(s); }), t & 2 && (i.\u0275\u0275domProperty("disabled", a.disabled()), i.\u0275\u0275attribute("aria-activedescendant", a._ariaActiveDescendant())("aria-expanded", a._ariaExpanded())("aria-controls", a._ariaControls())("mat-timepicker-id", a.timepicker()?.panelId)); }, inputs: { value: [1, "value"], timepicker: [1, "matTimepicker", "timepicker"], min: [1, "matTimepickerMin", "min"], max: [1, "matTimepickerMax", "max"], openOnClick: [1, "matTimepickerOpenOnClick", "openOnClick"], disabledInput: [1, "disabled", "disabledInput"] }, outputs: { value: "valueChange" }, exportAs: ["matTimepickerInput"], features: [i.\u0275\u0275ProvidersFeature([{ provide: A, useExisting: n, multi: !0 }, { provide: O, useExisting: n, multi: !0 }, { provide: R, useExisting: n }])] });
} return n; })(), fe = (() => { class n {
    _defaultConfig = o(P, { optional: !0 });
    _defaultTabIndex = (() => { let e = o(new U("tabindex"), { optional: !0 }), t = Number(e); return isNaN(t) ? null : t; })();
    _isDisabled = u(() => { let e = this.timepicker(); return this.disabled() || e.disabled(); });
    timepicker = l.required({ alias: "for" });
    ariaLabel = l(void 0, { alias: "aria-label" });
    ariaLabelledby = l(void 0, { alias: "aria-labelledby" });
    _defaultAriaLabel = "Open timepicker options";
    disabled = l(!1, { transform: h, alias: "disabled" });
    tabIndex = l(this._defaultTabIndex);
    disableRipple = l(this._defaultConfig?.disableRipple ?? !1, { transform: h });
    _open(e) { this.timepicker() && !this._isDisabled() && (this.timepicker().open(), e.stopPropagation()); }
    getAriaLabel() { return this.ariaLabelledby() ? null : this.ariaLabel() || this._defaultAriaLabel; }
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275cmp = i.\u0275\u0275defineComponent({ type: n, selectors: [["mat-timepicker-toggle"]], hostAttrs: [1, "mat-timepicker-toggle"], hostVars: 1, hostBindings: function (t, a) { t & 1 && i.\u0275\u0275listener("click", function (s) { return a._open(s); }), t & 2 && i.\u0275\u0275attribute("tabindex", null); }, inputs: { timepicker: [1, "for", "timepicker"], ariaLabel: [1, "aria-label", "ariaLabel"], ariaLabelledby: [1, "aria-labelledby", "ariaLabelledby"], disabled: [1, "disabled"], tabIndex: [1, "tabIndex"], disableRipple: [1, "disableRipple"] }, exportAs: ["matTimepickerToggle"], ngContentSelectors: ce, decls: 3, vars: 6, consts: [["matIconButton", "", "type", "button", "aria-haspopup", "listbox", 3, "tabIndex", "disabled", "disableRipple"], ["height", "24px", "width", "24px", "viewBox", "0 -960 960 960", "fill", "currentColor", "focusable", "false", "aria-hidden", "true", 1, "mat-timepicker-toggle-default-icon"], ["d", "m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"]], template: function (t, a) { t & 1 && (i.\u0275\u0275projectionDef(pe), i.\u0275\u0275elementStart(0, "button", 0), i.\u0275\u0275projection(1, 0, null, me, 2, 0), i.\u0275\u0275elementEnd()), t & 2 && (i.\u0275\u0275property("tabIndex", a._isDisabled() ? -1 : a.tabIndex())("disabled", a._isDisabled())("disableRipple", a.disableRipple()), i.\u0275\u0275attribute("aria-label", a.getAriaLabel())("aria-labelledby", a.ariaLabelledby())("aria-expanded", a.timepicker().isOpen())); }, dependencies: [I], encapsulation: 2 });
} return n; })(), Ge = (() => { class n {
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275mod = i.\u0275\u0275defineNgModule({ type: n });
    static \u0275inj = i.\u0275\u0275defineInjector({ imports: [ge, fe, re] });
} return n; })();
export { P as MAT_TIMEPICKER_CONFIG, _e as MAT_TIMEPICKER_SCROLL_STRATEGY, ge as MatTimepicker, ze as MatTimepickerInput, Ge as MatTimepickerModule, fe as MatTimepickerToggle };
