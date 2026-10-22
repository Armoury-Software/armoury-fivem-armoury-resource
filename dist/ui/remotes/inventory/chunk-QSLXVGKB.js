import { a as d } from "@nf-internal/chunk-CLS55YPL";
import { f as m } from "@nf-internal/chunk-TDH6BADM";
import { a as p } from "@nf-internal/chunk-2SOO3RAN";
import { _IdGenerator as u } from "@angular/cdk/a11y";
import { ENTER as _, SPACE as v, hasModifierKey as y } from "@angular/cdk/keycodes";
import * as t from "@angular/core";
import { InjectionToken as h, inject as l, booleanAttribute as g, ElementRef as x, ChangeDetectorRef as S, signal as k, EventEmitter as N, isSignal as C } from "@angular/core";
import { Subject as w } from "rxjs";
import { _CdkPrivateStyleLoader as R, _VisuallyHiddenLoader as E } from "@angular/cdk/private";
var M = ["*", [["mat-option"], ["ng-container"]]], O = ["*", "mat-option, ng-container"], I = ["text"], D = [[["mat-icon"]], "*"], V = ["mat-icon", "*"];
function T(n, a) { if (n & 1 && t.\u0275\u0275element(0, "mat-pseudo-checkbox", 1), n & 2) {
    let e = t.\u0275\u0275nextContext();
    t.\u0275\u0275property("disabled", e.disabled)("state", e.selected ? "checked" : "unchecked");
} }
function A(n, a) { if (n & 1 && t.\u0275\u0275element(0, "mat-pseudo-checkbox", 3), n & 2) {
    let e = t.\u0275\u0275nextContext();
    t.\u0275\u0275property("disabled", e.disabled);
} }
function P(n, a) { if (n & 1 && (t.\u0275\u0275elementStart(0, "span", 4), t.\u0275\u0275text(1), t.\u0275\u0275elementEnd()), n & 2) {
    let e = t.\u0275\u0275nextContext();
    t.\u0275\u0275advance(), t.\u0275\u0275textInterpolate1("(", e.group.label, ")");
} }
var f = new h("MAT_OPTION_PARENT_COMPONENT"), b = new h("MatOptgroup"), W = (() => {
    class n {
        label;
        disabled = !1;
        _labelId = l(u).getId("mat-optgroup-label-");
        _inert;
        constructor() { let e = l(f, { optional: !0 }); this._inert = e?.inertGroups ?? !1; }
        static \u0275fac = function (o) { return new (o || n); };
        static \u0275cmp = t.\u0275\u0275defineComponent({ type: n, selectors: [["mat-optgroup"]], hostAttrs: [1, "mat-mdc-optgroup"], hostVars: 3, hostBindings: function (o, i) { o & 2 && t.\u0275\u0275attribute("role", i._inert ? null : "group")("aria-disabled", i._inert ? null : i.disabled.toString())("aria-labelledby", i._inert ? null : i._labelId); }, inputs: { label: "label", disabled: [2, "disabled", "disabled", g] }, exportAs: ["matOptgroup"], features: [t.\u0275\u0275ProvidersFeature([{ provide: b, useExisting: n }])], ngContentSelectors: O, decls: 5, vars: 4, consts: [["role", "presentation", 1, "mat-mdc-optgroup-label", 3, "id"], [1, "mdc-list-item__primary-text"]], template: function (o, i) { o & 1 && (t.\u0275\u0275projectionDef(M), t.\u0275\u0275domElementStart(0, "span", 0)(1, "span", 1), t.\u0275\u0275text(2), t.\u0275\u0275projection(3), t.\u0275\u0275domElementEnd()(), t.\u0275\u0275projection(4, 1)), o & 2 && (t.\u0275\u0275classProp("mdc-list-item--disabled", i.disabled), t.\u0275\u0275domProperty("id", i._labelId), t.\u0275\u0275advance(2), t.\u0275\u0275textInterpolate1("", i.label, " ")); }, styles: [`.mat-mdc-optgroup {
  color: var(--%NS%mat-optgroup-label-text-color, var(--%NS%mat-sys-on-surface-variant));
  font-family: var(--%NS%mat-optgroup-label-text-font, var(--%NS%mat-sys-title-small-font));
  line-height: var(--%NS%mat-optgroup-label-text-line-height, var(--%NS%mat-sys-title-small-line-height));
  font-size: var(--%NS%mat-optgroup-label-text-size, var(--%NS%mat-sys-title-small-size));
  letter-spacing: var(--%NS%mat-optgroup-label-text-tracking, var(--%NS%mat-sys-title-small-tracking));
  font-weight: var(--%NS%mat-optgroup-label-text-weight, var(--%NS%mat-sys-title-small-weight));
}

.mat-mdc-optgroup-label {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  outline: none;
}
.mat-mdc-optgroup-label.mdc-list-item--disabled {
  opacity: 0.38;
}
.mat-mdc-optgroup-label .mdc-list-item__primary-text {
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  white-space: normal;
  color: inherit;
}
`], encapsulation: 2 });
    }
    return n;
})(), c = class {
    source;
    isUserInput;
    constructor(a, e = !1) { this.source = a, this.isUserInput = e; }
}, X = (() => {
    class n {
        _element = l(x);
        _changeDetectorRef = l(S);
        _parent = l(f, { optional: !0 });
        group = l(b, { optional: !0 });
        _signalDisableRipple = !1;
        _selected = !1;
        _active = !1;
        _mostRecentViewValue = "";
        get multiple() { return this._parent && this._parent.multiple; }
        get selected() { return this._selected; }
        value;
        id = l(u).getId("mat-option-");
        get disabled() { return this.group && this.group.disabled || this._disabled(); }
        set disabled(e) { this._disabled.set(e); }
        _disabled = k(!1);
        get disableRipple() { return this._signalDisableRipple ? this._parent.disableRipple() : !!this._parent?.disableRipple; }
        get hideSingleSelectionIndicator() { return !!(this._parent && this._parent.hideSingleSelectionIndicator); }
        onSelectionChange = new N;
        _text;
        _stateChanges = new w;
        constructor() { let e = l(R); e.load(p), e.load(E), this._signalDisableRipple = !!this._parent && C(this._parent.disableRipple); }
        get active() { return this._active; }
        get viewValue() { return (this._text?.nativeElement.textContent || "").trim(); }
        select(e = !0) { this._selected || (this._selected = !0, this._changeDetectorRef.markForCheck(), e && this._emitSelectionChangeEvent()); }
        deselect(e = !0) { this._selected && (this._selected = !1, this._changeDetectorRef.markForCheck(), e && this._emitSelectionChangeEvent()); }
        focus(e, o) { let i = this._getHostElement(); typeof i.focus == "function" && i.focus(o); }
        setActiveStyles() { this._active || (this._active = !0, this._changeDetectorRef.markForCheck()); }
        setInactiveStyles() { this._active && (this._active = !1, this._changeDetectorRef.markForCheck()); }
        getLabel() { return this.viewValue; }
        _handleKeydown(e) { (e.keyCode === _ || e.keyCode === v) && !y(e) && (this._selectViaInteraction(), e.preventDefault()); }
        _selectViaInteraction() { this.disabled || (this._selected = this.multiple ? !this._selected : !0, this._changeDetectorRef.markForCheck(), this._emitSelectionChangeEvent(!0)); }
        _getTabIndex() { return this.disabled ? "-1" : "0"; }
        _getHostElement() { return this._element.nativeElement; }
        ngAfterViewChecked() { if (this._selected) {
            let e = this.viewValue;
            e !== this._mostRecentViewValue && (this._mostRecentViewValue && this._stateChanges.next(), this._mostRecentViewValue = e);
        } }
        ngOnDestroy() { this._stateChanges.complete(); }
        _emitSelectionChangeEvent(e = !1) { this.onSelectionChange.emit(new c(this, e)); }
        static \u0275fac = function (o) { return new (o || n); };
        static \u0275cmp = t.\u0275\u0275defineComponent({ type: n, selectors: [["mat-option"]], viewQuery: function (o, i) { if (o & 1 && t.\u0275\u0275viewQuery(I, 7), o & 2) {
                let r;
                t.\u0275\u0275queryRefresh(r = t.\u0275\u0275loadQuery()) && (i._text = r.first);
            } }, hostAttrs: ["role", "option", 1, "mat-mdc-option", "mdc-list-item"], hostVars: 11, hostBindings: function (o, i) { o & 1 && t.\u0275\u0275listener("click", function () { return i._selectViaInteraction(); })("keydown", function (s) { return i._handleKeydown(s); }), o & 2 && (t.\u0275\u0275domProperty("id", i.id), t.\u0275\u0275attribute("aria-selected", i.selected)("aria-disabled", i.disabled.toString()), t.\u0275\u0275classProp("mdc-list-item--selected", i.selected)("mat-mdc-option-multiple", i.multiple)("mat-mdc-option-active", i.active)("mdc-list-item--disabled", i.disabled)); }, inputs: { value: "value", id: "id", disabled: [2, "disabled", "disabled", g] }, outputs: { onSelectionChange: "onSelectionChange" }, exportAs: ["matOption"], ngContentSelectors: V, decls: 8, vars: 5, consts: [["text", ""], ["aria-hidden", "true", 1, "mat-mdc-option-pseudo-checkbox", 3, "disabled", "state"], [1, "mdc-list-item__primary-text"], ["state", "checked", "aria-hidden", "true", "appearance", "minimal", 1, "mat-mdc-option-pseudo-checkbox", 3, "disabled"], [1, "cdk-visually-hidden"], ["aria-hidden", "true", "mat-ripple", "", 1, "mat-mdc-option-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled"]], template: function (o, i) { o & 1 && (t.\u0275\u0275projectionDef(D), t.\u0275\u0275conditionalCreate(0, T, 1, 2, "mat-pseudo-checkbox", 1), t.\u0275\u0275projection(1), t.\u0275\u0275elementStart(2, "span", 2, 0), t.\u0275\u0275projection(4, 1), t.\u0275\u0275elementEnd(), t.\u0275\u0275conditionalCreate(5, A, 1, 1, "mat-pseudo-checkbox", 3), t.\u0275\u0275conditionalCreate(6, P, 2, 1, "span", 4), t.\u0275\u0275element(7, "div", 5)), o & 2 && (t.\u0275\u0275conditional(i.multiple ? 0 : -1), t.\u0275\u0275advance(5), t.\u0275\u0275conditional(!i.multiple && i.selected && !i.hideSingleSelectionIndicator ? 5 : -1), t.\u0275\u0275advance(), t.\u0275\u0275conditional(i.group && i.group._inert ? 6 : -1), t.\u0275\u0275advance(), t.\u0275\u0275property("matRippleTrigger", i._getHostElement())("matRippleDisabled", i.disabled || i.disableRipple)); }, dependencies: [d, m], styles: [`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--%NS%mat-option-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-option-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-option-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-option-label-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-option-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-option-label-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--%NS%mat-option-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--%NS%mat-option-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--%NS%mat-option-selected-state-layer-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --%NS%mat-list-list-item-selected-container-color: var(--%NS%mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`], encapsulation: 2 });
    }
    return n;
})();
function Z(n, a, e) { if (e.length) {
    let o = a.toArray(), i = e.toArray(), r = 0;
    for (let s = 0; s < n + 1; s++)
        o[s].group && o[s].group === i[r] && r++;
    return r;
} return 0; }
function $(n, a, e, o) { return n < e ? n : n + a > e + o ? Math.max(0, n - o + a) : e; }
export { f as a, b, W as c, c as d, X as e, Z as f, $ as g };
