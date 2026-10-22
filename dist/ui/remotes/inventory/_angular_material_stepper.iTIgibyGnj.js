import { h as b, i as g } from "@nf-internal/chunk-A6Z3ONEX";
import { b as p } from "@nf-internal/chunk-NE3WOAAK";
import { a as _ } from "@nf-internal/chunk-TBOQSXHX";
import { f } from "@nf-internal/chunk-TDH6BADM";
import { a as v } from "@nf-internal/chunk-2SOO3RAN";
import { c as u } from "@nf-internal/chunk-L6LZ2NRF";
import "@nf-internal/chunk-2NFLSA4Y";
import { CdkStepLabel as T, CdkStepHeader as D, CdkStep as x, CdkStepper as S, CdkStepperNext as E, CdkStepperPrevious as k, CdkStepperModule as L } from "@angular/cdk/stepper";
import * as e from "@angular/core";
import { inject as l, ChangeDetectorRef as O, TemplateRef as y, ViewContainerRef as I, NgZone as R, Renderer2 as F, signal as P, QueryList as A, EventEmitter as H, input as V, ElementRef as $ } from "@angular/core";
import { NgTemplateOutlet as C } from "@angular/common";
import { Platform as B } from "@angular/cdk/platform";
import { TemplatePortal as Q, CdkPortalOutlet as j, PortalModule as q } from "@angular/cdk/portal";
import { Subject as Z, Subscription as G } from "rxjs";
import { switchMap as K, map as U, startWith as M, takeUntil as d } from "rxjs/operators";
import { FocusMonitor as W } from "@angular/cdk/a11y";
import { _CdkPrivateStyleLoader as Y, _VisuallyHiddenLoader as J } from "@angular/cdk/private";
import { BidiModule as X } from "@angular/cdk/bidi";
import "@angular/common/http";
import "@angular/platform-browser";
import "@angular/cdk/coercion";
import "@angular/cdk/layout";
var ee = (n, r, t) => ({ index: n, active: r, optional: t });
function te(n, r) { if (n & 1 && e.\u0275\u0275elementContainer(0, 2), n & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275property("ngTemplateOutlet", t.iconOverrides[t.state])("ngTemplateOutletContext", e.\u0275\u0275pureFunction3(2, ee, t.index, t.active, t.optional));
} }
function ne(n, r) { if (n & 1 && (e.\u0275\u0275elementStart(0, "span", 7), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), n & 2) {
    let t = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t._getDefaultTextForState(t.state));
} }
function ae(n, r) { if (n & 1 && (e.\u0275\u0275elementStart(0, "span", 8), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), n & 2) {
    let t = e.\u0275\u0275nextContext(3);
    e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t._intl.completedLabel);
} }
function ie(n, r) { if (n & 1 && (e.\u0275\u0275elementStart(0, "span", 8), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), n & 2) {
    let t = e.\u0275\u0275nextContext(3);
    e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t._intl.editableLabel);
} }
function re(n, r) { if (n & 1 && (e.\u0275\u0275conditionalCreate(0, ae, 2, 1, "span", 8)(1, ie, 2, 1, "span", 8), e.\u0275\u0275elementStart(2, "mat-icon", 7), e.\u0275\u0275text(3), e.\u0275\u0275elementEnd()), n & 2) {
    let t = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275conditional(t.state === "done" ? 0 : t.state === "edit" ? 1 : -1), e.\u0275\u0275advance(3), e.\u0275\u0275textInterpolate(t._getDefaultTextForState(t.state));
} }
function oe(n, r) { if (n & 1 && e.\u0275\u0275conditionalCreate(0, ne, 2, 1, "span", 7)(1, re, 4, 2), n & 2) {
    let t, a = e.\u0275\u0275nextContext();
    e.\u0275\u0275conditional((t = a.state) === "number" ? 0 : 1);
} }
function se(n, r) { n & 1 && (e.\u0275\u0275elementStart(0, "div", 4), e.\u0275\u0275elementContainer(1, 9), e.\u0275\u0275elementEnd()), n & 2 && (e.\u0275\u0275advance(), e.\u0275\u0275property("ngTemplateOutlet", r.template)); }
function le(n, r) { if (n & 1 && (e.\u0275\u0275elementStart(0, "div", 4), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), n & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t.label);
} }
function pe(n, r) { if (n & 1 && (e.\u0275\u0275elementStart(0, "div", 5), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), n & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t._intl.optionalLabel);
} }
function ce(n, r) { if (n & 1 && (e.\u0275\u0275elementStart(0, "div", 6), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), n & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t.errorMessage);
} }
var z = ["*"];
function de(n, r) { }
function me(n, r) { if (n & 1 && (e.\u0275\u0275projection(0), e.\u0275\u0275template(1, de, 0, 0, "ng-template", 0)), n & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275property("cdkPortalOutlet", t._portal);
} }
var he = ["animatedContainer"], N = n => ({ steps: n }), w = n => ({ step: n });
function ue(n, r) { n & 1 && e.\u0275\u0275projection(0); }
function fe(n, r) { if (n & 1 && (e.\u0275\u0275elementStart(0, "div", 5), e.\u0275\u0275elementContainer(1, 9)(2, 6), e.\u0275\u0275elementEnd()), n & 2) {
    let t = e.\u0275\u0275nextContext(2), a = e.\u0275\u0275reference(6);
    e.\u0275\u0275advance(), e.\u0275\u0275property("ngTemplateOutlet", t.headerPrefix()), e.\u0275\u0275advance(), e.\u0275\u0275property("ngTemplateOutlet", a)("ngTemplateOutletContext", e.\u0275\u0275pureFunction1(3, N, t.steps));
} }
function ve(n, r) { if (n & 1 && e.\u0275\u0275elementContainer(0, 6), n & 2) {
    let t = e.\u0275\u0275nextContext(2), a = e.\u0275\u0275reference(6);
    e.\u0275\u0275property("ngTemplateOutlet", a)("ngTemplateOutletContext", e.\u0275\u0275pureFunction1(2, N, t.steps));
} }
function _e(n, r) { if (n & 1 && (e.\u0275\u0275elementStart(0, "div", 10, 2), e.\u0275\u0275elementContainer(2, 9), e.\u0275\u0275elementEnd()), n & 2) {
    let t = r.$implicit, a = r.$index, i = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275classMap("mat-horizontal-stepper-content-" + i._getAnimationDirection(a)), e.\u0275\u0275property("id", i._getStepContentId(a)), e.\u0275\u0275attribute("aria-labelledby", i._getStepLabelId(a))("inert", i.selectedIndex === a ? null : ""), e.\u0275\u0275advance(2), e.\u0275\u0275property("ngTemplateOutlet", t.content);
} }
function be(n, r) { if (n & 1 && (e.\u0275\u0275elementStart(0, "div", 3), e.\u0275\u0275conditionalCreate(1, fe, 3, 5, "div", 5)(2, ve, 1, 4, "ng-container", 6), e.\u0275\u0275elementStart(3, "div", 7), e.\u0275\u0275repeaterCreate(4, _e, 3, 6, "div", 8, e.\u0275\u0275repeaterTrackByIdentity), e.\u0275\u0275elementEnd()()), n & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275conditional(t.headerPrefix() ? 1 : 2), e.\u0275\u0275advance(3), e.\u0275\u0275repeater(t.steps);
} }
function ge(n, r) { if (n & 1 && e.\u0275\u0275elementContainer(0, 9), n & 2) {
    let t = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275property("ngTemplateOutlet", t.headerPrefix());
} }
function xe(n, r) { if (n & 1 && (e.\u0275\u0275elementStart(0, "div", 11), e.\u0275\u0275elementContainer(1, 6), e.\u0275\u0275elementStart(2, "div", 12, 2)(4, "div", 13)(5, "div", 14), e.\u0275\u0275elementContainer(6, 9), e.\u0275\u0275elementEnd()()()()), n & 2) {
    let t = r.$implicit, a = r.$index, i = r.$index, o = r.$count, s = e.\u0275\u0275nextContext(2), c = e.\u0275\u0275reference(4);
    e.\u0275\u0275advance(), e.\u0275\u0275property("ngTemplateOutlet", c)("ngTemplateOutletContext", e.\u0275\u0275pureFunction1(11, w, t)), e.\u0275\u0275advance(), e.\u0275\u0275classProp("mat-stepper-vertical-line", i !== o - 1)("mat-vertical-content-container-active", s.selectedIndex === a), e.\u0275\u0275attribute("inert", s.selectedIndex === a ? null : "")("aria-label", s.ariaLabel), e.\u0275\u0275advance(2), e.\u0275\u0275property("id", s._getStepContentId(a)), e.\u0275\u0275attribute("aria-labelledby", s._getStepLabelId(a)), e.\u0275\u0275advance(2), e.\u0275\u0275property("ngTemplateOutlet", t.content);
} }
function Se(n, r) { if (n & 1 && (e.\u0275\u0275elementStart(0, "div", 4), e.\u0275\u0275conditionalCreate(1, ge, 1, 1, "ng-container", 9), e.\u0275\u0275repeaterCreate(2, xe, 7, 13, "div", 11, e.\u0275\u0275repeaterTrackByIdentity), e.\u0275\u0275elementEnd()), n & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275conditional(t.headerPrefix() ? 1 : -1), e.\u0275\u0275advance(), e.\u0275\u0275repeater(t.steps);
} }
function ye(n, r) { if (n & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "mat-step-header", 15), e.\u0275\u0275listener("click", function () { let i = e.\u0275\u0275restoreView(t).step; return e.\u0275\u0275resetView(i.select()); })("keydown", function (i) { e.\u0275\u0275restoreView(t); let o = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(o._onKeydown(i)); }), e.\u0275\u0275elementEnd();
} if (n & 2) {
    let t = r.step, a = e.\u0275\u0275nextContext();
    e.\u0275\u0275classProp("mat-horizontal-stepper-header", a.orientation === "horizontal")("mat-vertical-stepper-header", a.orientation === "vertical"), e.\u0275\u0275property("tabIndex", a._getFocusIndex() === t.index() ? 0 : -1)("id", a._getStepLabelId(t.index()))("index", t.index())("state", t.indicatorType())("label", t.stepLabel || t.label)("selected", t.isSelected())("active", t.isNavigable())("optional", t.optional)("errorMessage", t.errorMessage)("iconOverrides", a._iconOverrides)("disableRipple", a.disableRipple || !t.isNavigable())("color", t.color || a.color), e.\u0275\u0275attribute("role", a.orientation === "horizontal" ? "tab" : "button")("aria-posinset", a.orientation === "horizontal" ? t.index() + 1 : null)("aria-setsize", a.orientation === "horizontal" ? a.steps.length : null)("aria-selected", a.orientation === "horizontal" ? t.isSelected() : null)("aria-current", a.orientation === "vertical" && t.isSelected() ? "step" : null)("aria-disabled", a.orientation === "vertical" && t.isSelected() ? "true" : null)("aria-expanded", a.orientation === "vertical" ? t.isSelected() : null)("aria-controls", a._getStepContentId(t.index()))("aria-label", t.ariaLabel || null)("aria-labelledby", !t.ariaLabel && t.ariaLabelledby ? t.ariaLabelledby : null)("aria-disabled", t.isNavigable() ? null : !0);
} }
function Ce(n, r) { n & 1 && e.\u0275\u0275element(0, "div", 17); }
function Me(n, r) { if (n & 1 && (e.\u0275\u0275elementContainer(0, 6), e.\u0275\u0275conditionalCreate(1, Ce, 1, 0, "div", 17)), n & 2) {
    let t = r.$implicit, a = r.$index, i = r.$count;
    e.\u0275\u0275nextContext(2);
    let o = e.\u0275\u0275reference(4);
    e.\u0275\u0275property("ngTemplateOutlet", o)("ngTemplateOutletContext", e.\u0275\u0275pureFunction1(3, w, t)), e.\u0275\u0275advance(), e.\u0275\u0275conditional(a !== i - 1 ? 1 : -1);
} }
function ze(n, r) { if (n & 1 && (e.\u0275\u0275elementStart(0, "div", 16), e.\u0275\u0275repeaterCreate(1, Me, 2, 5, null, null, e.\u0275\u0275repeaterTrackByIdentity), e.\u0275\u0275elementEnd()), n & 2) {
    let t = r.steps, a = e.\u0275\u0275nextContext();
    e.\u0275\u0275attribute("aria-label", a.ariaLabel), e.\u0275\u0275advance(), e.\u0275\u0275repeater(t);
} }
var m = (() => { class n extends T {
    static \u0275fac = (() => { let t; return function (i) { return (t || (t = e.\u0275\u0275getInheritedFactory(n)))(i || n); }; })();
    static \u0275dir = e.\u0275\u0275defineDirective({ type: n, selectors: [["", "matStepLabel", ""]], features: [e.\u0275\u0275InheritDefinitionFeature] });
} return n; })(), Ne = (() => { class n {
    changes = new Z;
    optionalLabel = "Optional";
    completedLabel = "Completed";
    editableLabel = "Editable";
    static \u0275fac = function (a) { return new (a || n); };
    static \u0275prov = e.\u0275\u0275defineService({ token: n, factory: n.\u0275fac });
} return n; })(), h = (() => {
    class n extends D {
        _intl = l(Ne);
        _focusMonitor = l(W);
        _intlSubscription;
        state;
        label;
        errorMessage;
        iconOverrides;
        index;
        selected = !1;
        active = !1;
        optional = !1;
        disableRipple = !1;
        color;
        constructor() { super(); let t = l(Y); t.load(v), t.load(J); let a = l(O); this._intlSubscription = this._intl.changes.subscribe(() => a.markForCheck()); }
        ngAfterViewInit() { this._focusMonitor.monitor(this._elementRef, !0); }
        ngOnDestroy() { this._intlSubscription.unsubscribe(), this._focusMonitor.stopMonitoring(this._elementRef); }
        focus(t, a) { t ? this._focusMonitor.focusVia(this._elementRef, t, a) : this._elementRef.nativeElement.focus(a); }
        _stringLabel() { return this.label instanceof m ? null : this.label; }
        _templateLabel() { return this.label instanceof m ? this.label : null; }
        _getHostElement() { return this._elementRef.nativeElement; }
        _getDefaultTextForState(t) { return t == "number" ? `${this.index + 1}` : t == "edit" ? "create" : t == "error" ? "warning" : t; }
        _hasEmptyLabel() { return !this._stringLabel() && !this._templateLabel() && !this._hasOptionalLabel() && !this._hasErrorLabel(); }
        _hasOptionalLabel() { return this.optional && this.state !== "error"; }
        _hasErrorLabel() { return this.state === "error"; }
        static \u0275fac = function (a) { return new (a || n); };
        static \u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["mat-step-header"]], hostAttrs: ["role", "", 1, "mat-step-header"], hostVars: 4, hostBindings: function (a, i) { a & 2 && (e.\u0275\u0275classMap("mat-" + (i.color || "primary")), e.\u0275\u0275classProp("mat-step-header-empty-label", i._hasEmptyLabel())); }, inputs: { state: "state", label: "label", errorMessage: "errorMessage", iconOverrides: "iconOverrides", index: "index", selected: "selected", active: "active", optional: "optional", disableRipple: "disableRipple", color: "color" }, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 10, vars: 17, consts: [["matRipple", "", 1, "mat-step-header-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mat-step-icon-content"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "mat-step-label"], [1, "mat-step-text-label"], [1, "mat-step-optional"], [1, "mat-step-sub-label-error"], ["aria-hidden", "true"], [1, "cdk-visually-hidden"], [3, "ngTemplateOutlet"]], template: function (a, i) { if (a & 1 && (e.\u0275\u0275element(0, "div", 0), e.\u0275\u0275elementStart(1, "div")(2, "div", 1), e.\u0275\u0275conditionalCreate(3, te, 1, 6, "ng-container", 2)(4, oe, 2, 1), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(5, "div", 3), e.\u0275\u0275conditionalCreate(6, se, 2, 1, "div", 4)(7, le, 2, 1, "div", 4), e.\u0275\u0275conditionalCreate(8, pe, 2, 1, "div", 5), e.\u0275\u0275conditionalCreate(9, ce, 2, 1, "div", 6), e.\u0275\u0275elementEnd()), a & 2) {
                let o;
                e.\u0275\u0275property("matRippleTrigger", i._getHostElement())("matRippleDisabled", i.disableRipple), e.\u0275\u0275advance(), e.\u0275\u0275classMap(e.\u0275\u0275interpolate1("mat-step-icon-state-", i.state, " mat-step-icon")), e.\u0275\u0275classProp("mat-step-icon-selected", i.selected), e.\u0275\u0275advance(2), e.\u0275\u0275conditional(i.iconOverrides && i.iconOverrides[i.state] ? 3 : 4), e.\u0275\u0275advance(2), e.\u0275\u0275classProp("mat-step-label-active", i.active)("mat-step-label-selected", i.selected)("mat-step-label-error", i.state == "error"), e.\u0275\u0275advance(), e.\u0275\u0275conditional((o = i._templateLabel()) ? 6 : i._stringLabel() ? 7 : -1, o), e.\u0275\u0275advance(2), e.\u0275\u0275conditional(i._hasOptionalLabel() ? 8 : -1), e.\u0275\u0275advance(), e.\u0275\u0275conditional(i._hasErrorLabel() ? 9 : -1);
            } }, dependencies: [f, C, b], styles: [`.mat-step-header {
  overflow: hidden;
  outline: none;
  cursor: pointer;
  position: relative;
  box-sizing: content-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-step-header:focus-visible .mat-focus-indicator::before {
  content: "";
}
.mat-step-header:hover[aria-disabled=true] {
  cursor: default;
}
.mat-step-header:hover:not([aria-disabled]), .mat-step-header:hover[aria-disabled=false] {
  background-color: var(--%NS%mat-stepper-header-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
  border-radius: var(--%NS%mat-stepper-header-hover-state-layer-shape, var(--%NS%mat-sys-corner-medium));
}
.mat-step-header:hover:not([aria-disabled]) .mat-step-header-ripple::before, .mat-step-header:hover[aria-disabled=false] .mat-step-header-ripple::before {
  border-radius: var(--%NS%mat-stepper-header-hover-state-layer-shape, var(--%NS%mat-sys-corner-medium));
}
.mat-step-header.cdk-keyboard-focused, .mat-step-header.cdk-program-focused {
  background-color: var(--%NS%mat-stepper-header-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
  border-radius: var(--%NS%mat-stepper-header-focus-state-layer-shape, var(--%NS%mat-sys-corner-medium));
}
.mat-step-header.cdk-keyboard-focused .mat-step-header-ripple::before, .mat-step-header.cdk-program-focused .mat-step-header-ripple::before {
  border-radius: var(--%NS%mat-stepper-header-focus-state-layer-shape, var(--%NS%mat-sys-corner-medium));
}
@media (hover: none) {
  .mat-step-header:hover {
    background: none;
  }
}
@media (forced-colors: active) {
  .mat-step-header {
    outline: solid 1px;
  }
  .mat-step-header[aria-selected=true] .mat-step-label {
    text-decoration: underline;
  }
  .mat-step-header[aria-disabled=true] {
    outline-color: GrayText;
  }
  .mat-step-header[aria-disabled=true] .mat-step-label,
  .mat-step-header[aria-disabled=true] .mat-step-icon,
  .mat-step-header[aria-disabled=true] .mat-step-optional {
    color: GrayText;
  }
}

.mat-step-optional {
  font-size: 12px;
  color: var(--%NS%mat-stepper-header-optional-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}

.mat-step-sub-label-error {
  font-size: 12px;
  font-weight: normal;
}

.mat-step-icon {
  border-radius: 50%;
  height: 24px;
  width: 24px;
  flex-shrink: 0;
  position: relative;
  color: var(--%NS%mat-stepper-header-icon-foreground-color, var(--%NS%mat-sys-surface));
  background-color: var(--%NS%mat-stepper-header-icon-background-color, var(--%NS%mat-sys-on-surface-variant));
}

.mat-step-icon-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
}

.mat-step-icon .mat-icon {
  font-size: 16px;
  height: 16px;
  width: 16px;
}

.mat-step-icon-state-error {
  background-color: var(--%NS%mat-stepper-header-error-state-icon-background-color, transparent);
  color: var(--%NS%mat-stepper-header-error-state-icon-foreground-color, var(--%NS%mat-sys-error));
}
.mat-step-icon-state-error .mat-icon {
  font-size: 24px;
  height: 24px;
  width: 24px;
}

.mat-step-label {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 50px;
  vertical-align: middle;
  font-family: var(--%NS%mat-stepper-header-label-text-font, var(--%NS%mat-sys-title-small-font));
  font-size: var(--%NS%mat-stepper-header-label-text-size, var(--%NS%mat-sys-title-small-size));
  font-weight: var(--%NS%mat-stepper-header-label-text-weight, var(--%NS%mat-sys-title-small-weight));
  color: var(--%NS%mat-stepper-header-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-step-label.mat-step-label-active {
  color: var(--%NS%mat-stepper-header-selected-state-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-step-label.mat-step-label-error {
  color: var(--%NS%mat-stepper-header-error-state-label-text-color, var(--%NS%mat-sys-error));
  font-size: var(--%NS%mat-stepper-header-error-state-label-text-size, var(--%NS%mat-sys-title-small-size));
}
.mat-step-label.mat-step-label-selected {
  font-size: var(--%NS%mat-stepper-header-selected-state-label-text-size, var(--%NS%mat-sys-title-small-size));
  font-weight: var(--%NS%mat-stepper-header-selected-state-label-text-weight, var(--%NS%mat-sys-title-small-weight));
}
.mat-step-header-empty-label .mat-step-label {
  min-width: 0;
}

.mat-step-text-label {
  text-overflow: ellipsis;
  overflow: hidden;
}

.mat-step-header .mat-step-header-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

.mat-step-icon-selected {
  background-color: var(--%NS%mat-stepper-header-selected-state-icon-background-color, var(--%NS%mat-sys-primary));
  color: var(--%NS%mat-stepper-header-selected-state-icon-foreground-color, var(--%NS%mat-sys-on-primary));
}

.mat-step-icon-state-done {
  background-color: var(--%NS%mat-stepper-header-done-state-icon-background-color, var(--%NS%mat-sys-primary));
  color: var(--%NS%mat-stepper-header-done-state-icon-foreground-color, var(--%NS%mat-sys-on-primary));
}

.mat-step-icon-state-edit {
  background-color: var(--%NS%mat-stepper-header-edit-state-icon-background-color, var(--%NS%mat-sys-primary));
  color: var(--%NS%mat-stepper-header-edit-state-icon-foreground-color, var(--%NS%mat-sys-on-primary));
}
`], encapsulation: 2 });
    }
    return n;
})(), we = (() => { class n {
    templateRef = l(y);
    name;
    static \u0275fac = function (a) { return new (a || n); };
    static \u0275dir = e.\u0275\u0275defineDirective({ type: n, selectors: [["ng-template", "matStepperIcon", ""]], inputs: { name: [0, "matStepperIcon", "name"] } });
} return n; })(), Te = (() => { class n {
    _template = l(y);
    static \u0275fac = function (a) { return new (a || n); };
    static \u0275dir = e.\u0275\u0275defineDirective({ type: n, selectors: [["ng-template", "matStepContent", ""]] });
} return n; })(), De = (() => { class n extends x {
    _errorStateMatcher = l(p, { skipSelf: !0 });
    _viewContainerRef = l(I);
    _isSelected = G.EMPTY;
    stepLabel = void 0;
    color;
    _lazyContent;
    _portal;
    ngAfterContentInit() { this._isSelected = this._stepper.steps.changes.pipe(K(() => this._stepper.selectionChange.pipe(U(t => t.selectedStep === this), M(this._stepper.selected === this)))).subscribe(t => { t && this._lazyContent && !this._portal && (this._portal = new Q(this._lazyContent._template, this._viewContainerRef)); }); }
    ngOnDestroy() { this._isSelected.unsubscribe(); }
    isErrorState(t, a) { let i = this._errorStateMatcher.isErrorState(t, a), o = !!(t && t.invalid && this.interacted); return i || o; }
    isSignalErrorState(t) { let a = this._errorStateMatcher.isSignalErrorState?.(t) ?? !1, i = !!(t && t().invalid() && this.interacted); return a || i; }
    static \u0275fac = (() => { let t; return function (i) { return (t || (t = e.\u0275\u0275getInheritedFactory(n)))(i || n); }; })();
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["mat-step"]], contentQueries: function (a, i, o) { if (a & 1 && e.\u0275\u0275contentQuery(o, m, 5)(o, Te, 5), a & 2) {
            let s;
            e.\u0275\u0275queryRefresh(s = e.\u0275\u0275loadQuery()) && (i.stepLabel = s.first), e.\u0275\u0275queryRefresh(s = e.\u0275\u0275loadQuery()) && (i._lazyContent = s.first);
        } }, hostAttrs: ["hidden", ""], inputs: { color: "color" }, exportAs: ["matStep"], features: [e.\u0275\u0275ProvidersFeature([{ provide: p, useExisting: n }, { provide: x, useExisting: n }]), e.\u0275\u0275InheritDefinitionFeature], ngContentSelectors: z, decls: 1, vars: 0, consts: [[3, "cdkPortalOutlet"]], template: function (a, i) { a & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275template(0, me, 2, 1, "ng-template")); }, dependencies: [j], encapsulation: 2 });
} return n; })(), Ee = (() => {
    class n extends S {
        _ngZone = l(R);
        _renderer = l(F);
        _animationsDisabled = u();
        _cleanupTransition;
        _isAnimating = P(!1);
        _stepHeader = void 0;
        _animatedContainers;
        _steps = void 0;
        steps = new A;
        _icons;
        animationDone = new H;
        disableRipple = !1;
        color;
        labelPosition = "end";
        headerPosition = "top";
        ariaLabel = null;
        headerPrefix = V(null);
        _iconOverrides = {};
        get animationDuration() { return this._animationDuration; }
        set animationDuration(t) { /^[0-9]+(?:\.[0-9]+)?$/.test(t) ? this._animationDuration = t + "ms" : /^[0-9]+(?:\.[0-9]+)?(?:ms|s)$/.test(t) ? this._animationDuration = t : this._animationDuration = ""; }
        _animationDuration = "";
        _isServer = !l(B).isBrowser;
        constructor() { super(); let a = l($).nativeElement.nodeName.toLowerCase(); this.orientation = a === "mat-vertical-stepper" ? "vertical" : "horizontal"; }
        ngAfterContentInit() { super.ngAfterContentInit(), this._icons.forEach(({ name: t, templateRef: a }) => this._iconOverrides[t] = a), this.steps.changes.pipe(d(this._destroyed)).subscribe(() => this._stateChanged()), this.selectedIndexChange.pipe(d(this._destroyed)).subscribe(() => { let t = this._getAnimationDuration(); t === "0ms" || t === "0s" ? this._onAnimationDone() : this._isAnimating.set(!0); }), this._ngZone.runOutsideAngular(() => { this._animationsDisabled || setTimeout(() => { this._elementRef.nativeElement.classList.add("mat-stepper-animations-enabled"), this._cleanupTransition = this._renderer.listen(this._elementRef.nativeElement, "transitionend", this._handleTransitionend); }, 200); }); }
        ngAfterViewInit() { if (super.ngAfterViewInit(), typeof queueMicrotask == "function") {
            let t = !1;
            this._animatedContainers.changes.pipe(M(null), d(this._destroyed)).subscribe(() => queueMicrotask(() => { t || (t = !0, this.animationDone.emit()), this._stateChanged(); }));
        } }
        ngOnDestroy() { super.ngOnDestroy(), this._cleanupTransition?.(); }
        _getAnimationDuration() { return this._animationsDisabled ? "0ms" : this.animationDuration ? this.animationDuration : this.orientation === "horizontal" ? "500ms" : "225ms"; }
        _handleTransitionend = t => { let a = t.target; if (!a)
            return; let i = this.orientation === "horizontal" && t.propertyName === "transform" && a.classList.contains("mat-horizontal-stepper-content-current"), o = this.orientation === "vertical" && t.propertyName === "grid-template-rows" && a.classList.contains("mat-vertical-content-container-active"); (i || o) && this._animatedContainers.find(c => c.nativeElement === a) && this._onAnimationDone(); };
        _onAnimationDone() { this._isAnimating.set(!1), this.animationDone.emit(); }
        static \u0275fac = function (a) { return new (a || n); };
        static \u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["mat-stepper"], ["mat-vertical-stepper"], ["mat-horizontal-stepper"], ["", "matStepper", ""]], contentQueries: function (a, i, o) { if (a & 1 && e.\u0275\u0275contentQuery(o, De, 5)(o, we, 5), a & 2) {
                let s;
                e.\u0275\u0275queryRefresh(s = e.\u0275\u0275loadQuery()) && (i._steps = s), e.\u0275\u0275queryRefresh(s = e.\u0275\u0275loadQuery()) && (i._icons = s);
            } }, viewQuery: function (a, i) { if (a & 1 && e.\u0275\u0275viewQuery(h, 5)(he, 5), a & 2) {
                let o;
                e.\u0275\u0275queryRefresh(o = e.\u0275\u0275loadQuery()) && (i._stepHeader = o), e.\u0275\u0275queryRefresh(o = e.\u0275\u0275loadQuery()) && (i._animatedContainers = o);
            } }, hostVars: 14, hostBindings: function (a, i) { a & 2 && (e.\u0275\u0275styleProp("--%NS%mat-stepper-animation-duration", i._getAnimationDuration()), e.\u0275\u0275classProp("mat-stepper-horizontal", i.orientation === "horizontal")("mat-stepper-vertical", i.orientation === "vertical")("mat-stepper-label-position-end", i.orientation === "horizontal" && i.labelPosition == "end")("mat-stepper-label-position-bottom", i.orientation === "horizontal" && i.labelPosition == "bottom")("mat-stepper-header-position-bottom", i.headerPosition === "bottom")("mat-stepper-animating", i._isAnimating())); }, inputs: { disableRipple: "disableRipple", color: "color", labelPosition: "labelPosition", headerPosition: "headerPosition", ariaLabel: [0, "aria-label", "ariaLabel"], headerPrefix: [1, "headerPrefix"], animationDuration: "animationDuration" }, outputs: { animationDone: "animationDone" }, exportAs: ["matStepper", "matVerticalStepper", "matHorizontalStepper"], features: [e.\u0275\u0275ProvidersFeature([{ provide: S, useExisting: n }]), e.\u0275\u0275InheritDefinitionFeature], ngContentSelectors: z, decls: 7, vars: 2, consts: [["stepTemplate", ""], ["horizontalStepsTemplate", ""], ["animatedContainer", ""], [1, "mat-horizontal-stepper-wrapper"], [1, "mat-vertical-stepper-wrapper"], [1, "mat-horizontal-stepper-header-wrapper"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "mat-horizontal-content-container"], ["role", "tabpanel", 1, "mat-horizontal-stepper-content", 3, "id", "class"], [3, "ngTemplateOutlet"], ["role", "tabpanel", 1, "mat-horizontal-stepper-content", 3, "id"], [1, "mat-step"], [1, "mat-vertical-content-container"], ["role", "region", 1, "mat-vertical-stepper-content", 3, "id"], [1, "mat-vertical-content"], [3, "click", "keydown", "tabIndex", "id", "index", "state", "label", "selected", "active", "optional", "errorMessage", "iconOverrides", "disableRipple", "color"], ["aria-orientation", "horizontal", "role", "tablist", 1, "mat-horizontal-stepper-header-container"], [1, "mat-stepper-horizontal-line"]], template: function (a, i) { if (a & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275conditionalCreate(0, ue, 1, 0), e.\u0275\u0275conditionalCreate(1, be, 6, 1, "div", 3)(2, Se, 4, 1, "div", 4), e.\u0275\u0275template(3, ye, 1, 27, "ng-template", null, 0, e.\u0275\u0275templateRefExtractor)(5, ze, 3, 1, "ng-template", null, 1, e.\u0275\u0275templateRefExtractor)), a & 2) {
                let o;
                e.\u0275\u0275conditional(i._isServer ? 0 : -1), e.\u0275\u0275advance(), e.\u0275\u0275conditional((o = i.orientation) === "horizontal" ? 1 : o === "vertical" ? 2 : -1);
            } }, dependencies: [C, h], styles: [`.mat-stepper-vertical,
.mat-stepper-horizontal {
  display: block;
  font-family: var(--%NS%mat-stepper-container-text-font, var(--%NS%mat-sys-body-medium-font));
  background: var(--%NS%mat-stepper-container-color, var(--%NS%mat-sys-surface));
}

.mat-horizontal-stepper-header-wrapper {
  align-items: center;
  display: flex;
}

.mat-horizontal-stepper-header-container {
  white-space: nowrap;
  display: flex;
  align-items: center;
  flex-grow: 1;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container {
  align-items: flex-start;
}
.mat-stepper-header-position-bottom .mat-horizontal-stepper-header-container {
  order: 1;
}

.mat-stepper-horizontal-line {
  border-top-width: 1px;
  border-top-style: solid;
  flex: auto;
  height: 0;
  margin: 0 -16px;
  min-width: 32px;
  border-top-color: var(--%NS%mat-stepper-line-color, var(--%NS%mat-sys-outline));
}
.mat-stepper-label-position-bottom .mat-stepper-horizontal-line {
  margin: 0;
  min-width: 0;
  position: relative;
  top: calc(calc((var(--%NS%mat-stepper-header-height, 72px) - 24px) / 2) + 12px);
}

.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before, .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after {
  border-top-width: 1px;
  border-top-style: solid;
  content: "";
  display: inline-block;
  height: 0;
  position: absolute;
  width: calc(50% - 20px);
}

.mat-horizontal-stepper-header {
  display: flex;
  overflow: hidden;
  align-items: center;
  padding: 0 24px;
  height: var(--%NS%mat-stepper-header-height, 72px);
}
.mat-horizontal-stepper-header .mat-step-icon {
  margin-right: 8px;
  flex: none;
}
[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon {
  margin-right: 0;
  margin-left: 8px;
}
.mat-horizontal-stepper-header.mat-step-header-empty-label .mat-step-icon {
  margin: 0;
}
.mat-horizontal-stepper-header::before, .mat-horizontal-stepper-header::after {
  border-top-color: var(--%NS%mat-stepper-line-color, var(--%NS%mat-sys-outline));
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header {
  padding: calc((var(--%NS%mat-stepper-header-height, 72px) - 24px) / 2) 24px;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::before, .mat-stepper-label-position-bottom .mat-horizontal-stepper-header::after {
  top: calc(calc((var(--%NS%mat-stepper-header-height, 72px) - 24px) / 2) + 12px);
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header {
  box-sizing: border-box;
  flex-direction: column;
  height: auto;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after {
  right: 0;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before {
  left: 0;
}
[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after {
  display: none;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon {
  margin-right: 0;
  margin-left: 0;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label {
  padding: 16px 0 0 0;
  text-align: center;
  width: 100%;
}

.mat-vertical-stepper-header {
  display: flex;
  align-items: center;
  height: 24px;
  padding: calc((var(--%NS%mat-stepper-header-height, 72px) - 24px) / 2) 24px;
}
.mat-vertical-stepper-header .mat-step-icon {
  margin-right: 12px;
}
[dir=rtl] .mat-vertical-stepper-header .mat-step-icon {
  margin-right: 0;
  margin-left: 12px;
}

.mat-horizontal-stepper-wrapper {
  display: flex;
  flex-direction: column;
}

.mat-horizontal-stepper-content {
  visibility: hidden;
  overflow: hidden;
  outline: 0;
  height: 0;
}
.mat-stepper-animations-enabled .mat-horizontal-stepper-content {
  transition: transform var(--%NS%mat-stepper-animation-duration, 0) cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-horizontal-stepper-content.mat-horizontal-stepper-content-previous {
  transform: translate3d(-100%, 0, 0);
}
.mat-horizontal-stepper-content.mat-horizontal-stepper-content-next {
  transform: translate3d(100%, 0, 0);
}
.mat-horizontal-stepper-content.mat-horizontal-stepper-content-current {
  visibility: visible;
  transform: none;
  height: auto;
}
.mat-stepper-horizontal:not(.mat-stepper-animating) .mat-horizontal-stepper-content.mat-horizontal-stepper-content-current {
  overflow: visible;
}

.mat-horizontal-content-container {
  overflow: hidden;
  padding: 0 24px 24px 24px;
}
@media (forced-colors: active) {
  .mat-horizontal-content-container {
    outline: solid 1px;
  }
}
.mat-stepper-header-position-bottom .mat-horizontal-content-container {
  padding: 24px 24px 0 24px;
}

.mat-vertical-content-container {
  display: grid;
  grid-template-rows: 0fr;
  grid-template-columns: 100%;
  margin-left: 36px;
  border: 0;
  position: relative;
}
.mat-stepper-animations-enabled .mat-vertical-content-container {
  transition: grid-template-rows var(--%NS%mat-stepper-animation-duration, 0) cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-vertical-content-container.mat-vertical-content-container-active {
  grid-template-rows: 1fr;
}
.mat-step:last-child .mat-vertical-content-container {
  border: none;
}
@media (forced-colors: active) {
  .mat-vertical-content-container {
    outline: solid 1px;
  }
}
[dir=rtl] .mat-vertical-content-container {
  margin-left: 0;
  margin-right: 36px;
}
@supports not (grid-template-rows: 0fr) {
  .mat-vertical-content-container {
    height: 0;
  }
  .mat-vertical-content-container.mat-vertical-content-container-active {
    height: auto;
  }
}

.mat-stepper-vertical-line::before {
  content: "";
  position: absolute;
  left: 0;
  border-left-width: 1px;
  border-left-style: solid;
  border-left-color: var(--%NS%mat-stepper-line-color, var(--%NS%mat-sys-outline));
  top: calc(8px - calc((var(--%NS%mat-stepper-header-height, 72px) - 24px) / 2));
  bottom: calc(8px - calc((var(--%NS%mat-stepper-header-height, 72px) - 24px) / 2));
}
[dir=rtl] .mat-stepper-vertical-line::before {
  left: auto;
  right: 0;
}

.mat-vertical-stepper-content {
  overflow: hidden;
  outline: 0;
  visibility: hidden;
}
.mat-stepper-animations-enabled .mat-vertical-stepper-content {
  transition: visibility var(--%NS%mat-stepper-animation-duration, 0) linear;
}
.mat-vertical-content-container-active > .mat-vertical-stepper-content {
  visibility: visible;
}

.mat-vertical-content {
  padding: 0 24px 24px 24px;
}
`], encapsulation: 2 });
    }
    return n;
})(), st = (() => { class n extends E {
    static \u0275fac = (() => { let t; return function (i) { return (t || (t = e.\u0275\u0275getInheritedFactory(n)))(i || n); }; })();
    static \u0275dir = e.\u0275\u0275defineDirective({ type: n, selectors: [["button", "matStepperNext", ""]], hostAttrs: [1, "mat-stepper-next"], hostVars: 1, hostBindings: function (a, i) { a & 2 && e.\u0275\u0275domProperty("type", i.type); }, features: [e.\u0275\u0275InheritDefinitionFeature] });
} return n; })(), lt = (() => { class n extends k {
    static \u0275fac = (() => { let t; return function (i) { return (t || (t = e.\u0275\u0275getInheritedFactory(n)))(i || n); }; })();
    static \u0275dir = e.\u0275\u0275defineDirective({ type: n, selectors: [["button", "matStepperPrevious", ""]], hostAttrs: [1, "mat-stepper-previous"], hostVars: 1, hostBindings: function (a, i) { a & 2 && e.\u0275\u0275domProperty("type", i.type); }, features: [e.\u0275\u0275InheritDefinitionFeature] });
} return n; })(), pt = (() => { class n {
    static \u0275fac = function (a) { return new (a || n); };
    static \u0275mod = e.\u0275\u0275defineNgModule({ type: n });
    static \u0275inj = e.\u0275\u0275defineInjector({ providers: [p], imports: [q, L, g, _, Ee, h, X] });
} return n; })();
export { De as MatStep, Te as MatStepContent, h as MatStepHeader, m as MatStepLabel, Ee as MatStepper, we as MatStepperIcon, Ne as MatStepperIntl, pt as MatStepperModule, st as MatStepperNext, lt as MatStepperPrevious };
