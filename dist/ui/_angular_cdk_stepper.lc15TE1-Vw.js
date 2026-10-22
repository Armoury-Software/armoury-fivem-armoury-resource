import { b as D } from "@nf-internal/chunk-QVM7OE7V";
import { a as I } from "@nf-internal/chunk-TTLGK2TK";
import "@nf-internal/chunk-RNULGOC3";
import "@nf-internal/chunk-Z4DWJRNS";
import { c as g } from "@nf-internal/chunk-PGIYYMTQ";
import { a as y } from "@nf-internal/chunk-SVIUGILY";
import { e as O, l as N } from "@nf-internal/chunk-LAIZNMCN";
import { a as v } from "@nf-internal/chunk-DG2NPXAW";
import { b as C } from "@nf-internal/chunk-EPOSXZTE";
import { c as b } from "@nf-internal/chunk-VZX42TFW";
import "@nf-internal/chunk-2NFLSA4Y";
import * as s from "@angular/core";
import { inject as o, ElementRef as E, TemplateRef as k, InjectionToken as A, signal as a, EventEmitter as f, computed as u, booleanAttribute as c, ChangeDetectorRef as R, QueryList as M, numberAttribute as w } from "@angular/core";
import { Subject as T, of as P } from "rxjs";
import { startWith as h, takeUntil as _ } from "rxjs/operators";
var F = ["*"];
function H(i, G) { i & 1 && s.\u0275\u0275projection(0); }
var L = (() => { class i {
    _elementRef = o(E);
    focus() { this._elementRef.nativeElement.focus(); }
    static \u0275fac = function (t) { return new (t || i); };
    static \u0275dir = s.\u0275\u0275defineDirective({ type: i, selectors: [["", "cdkStepHeader", ""]], hostAttrs: ["role", "tab"] });
} return i; })(), Q = (() => { class i {
    template = o(k);
    static \u0275fac = function (t) { return new (t || i); };
    static \u0275dir = s.\u0275\u0275defineDirective({ type: i, selectors: [["", "cdkStepLabel", ""]] });
} return i; })(), S = class {
    selectedIndex;
    previouslySelectedIndex;
    selectedStep;
    previouslySelectedStep;
}, l = { NUMBER: "number", EDIT: "edit", DONE: "done", ERROR: "error" }, B = new A("STEPPER_GLOBAL_OPTIONS"), V = (() => { class i {
    _stepperOptions;
    _stepper = o(m);
    _displayDefaultIndicatorType;
    stepLabel;
    _childForms;
    content;
    stepControl;
    get interacted() { return this._interacted(); }
    set interacted(e) { this._interacted.set(e); }
    _interacted = a(!1);
    interactedStream = new f;
    label;
    errorMessage;
    ariaLabel;
    ariaLabelledby;
    get state() { return this._state(); }
    set state(e) { this._state.set(e); }
    _state = a(void 0);
    get editable() { return this._editable(); }
    set editable(e) { this._editable.set(e); }
    _editable = a(!0);
    optional = !1;
    get completed() { let e = this._completedOverride(), t = this._interacted(); return e ?? (t && (!this.stepControl || j(this.stepControl))); }
    set completed(e) { this._completedOverride.set(e); }
    _completedOverride = a(null);
    index = a(-1);
    isSelected = u(() => this._stepper.selectedIndex === this.index());
    indicatorType = u(() => { let e = this.isSelected(), t = this.completed, r = this._state() ?? l.NUMBER, n = this._editable(); return this._showError() && this.hasError && !e ? l.ERROR : this._displayDefaultIndicatorType ? !t || e ? l.NUMBER : n ? l.EDIT : l.DONE : t && !e ? l.DONE : t && e ? r : n && e ? l.EDIT : r; });
    isNavigable = u(() => { let e = this.isSelected(); return this.completed || e || !this._stepper.linear; });
    get hasError() { let e = this._customError(); return e ?? this._getDefaultError(); }
    set hasError(e) { this._customError.set(e); }
    _customError = a(null);
    _getDefaultError() { return this.interacted && !!this.stepControl && x(this.stepControl); }
    constructor() { let e = o(B, { optional: !0 }); this._stepperOptions = e || {}, this._displayDefaultIndicatorType = this._stepperOptions.displayDefaultIndicatorType !== !1; }
    select() { this._stepper.selected = this; }
    reset() { this._interacted.set(!1), this._completedOverride() != null && this._completedOverride.set(!1), this._customError() != null && this._customError.set(!1), this.stepControl && (this._childForms?.forEach(e => e.resetForm?.()), U(this.stepControl)); }
    ngOnChanges() { this._stepper._stateChanged(); }
    _markAsInteracted() { this._interacted() || (this._interacted.set(!0), this.interactedStream.emit(this)); }
    _showError() { return this._stepperOptions.showError ?? this._customError() != null; }
    static \u0275fac = function (t) { return new (t || i); };
    static \u0275cmp = s.\u0275\u0275defineComponent({ type: i, selectors: [["cdk-step"]], contentQueries: function (t, r, n) { if (t & 1 && s.\u0275\u0275contentQuery(n, Q, 5)(n, D, 5), t & 2) {
            let d;
            s.\u0275\u0275queryRefresh(d = s.\u0275\u0275loadQuery()) && (r.stepLabel = d.first), s.\u0275\u0275queryRefresh(d = s.\u0275\u0275loadQuery()) && (r._childForms = d);
        } }, viewQuery: function (t, r) { if (t & 1 && s.\u0275\u0275viewQuery(k, 7), t & 2) {
            let n;
            s.\u0275\u0275queryRefresh(n = s.\u0275\u0275loadQuery()) && (r.content = n.first);
        } }, inputs: { stepControl: "stepControl", label: "label", errorMessage: "errorMessage", ariaLabel: [0, "aria-label", "ariaLabel"], ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"], state: "state", editable: [2, "editable", "editable", c], optional: [2, "optional", "optional", c], completed: [2, "completed", "completed", c], hasError: [2, "hasError", "hasError", c] }, outputs: { interactedStream: "interacted" }, exportAs: ["cdkStep"], features: [s.\u0275\u0275NgOnChangesFeature], ngContentSelectors: F, decls: 1, vars: 0, template: function (t, r) { t & 1 && (s.\u0275\u0275projectionDef(), s.\u0275\u0275domTemplate(0, H, 1, 0, "ng-template")); }, encapsulation: 2 });
} return i; })(), m = (() => { class i {
    _dir = o(b, { optional: !0 });
    _changeDetectorRef = o(R);
    _elementRef = o(E);
    _destroyed = new T;
    _keyManager;
    _steps;
    steps = new M;
    _stepHeader;
    _sortedHeaders = new M;
    get linear() { return this._linear(); }
    set linear(e) { this._linear.set(e); }
    _linear = a(!1);
    get selectedIndex() { return this._selectedIndex(); }
    set selectedIndex(e) { this._steps ? (this._isValidIndex(e), this.selectedIndex !== e && (this.selected?._markAsInteracted(), !this._anyControlsInvalidOrPending(e) && (e >= this.selectedIndex || this.steps.toArray()[e].editable) && this._updateSelectedItemIndex(e))) : this._selectedIndex.set(e); }
    _selectedIndex = a(0);
    get selected() { return this.steps ? this.steps.toArray()[this.selectedIndex] : void 0; }
    set selected(e) { this.selectedIndex = e && this.steps ? this.steps.toArray().indexOf(e) : -1; }
    selectionChange = new f;
    selectedIndexChange = new f;
    _groupId = o(v).getId("cdk-stepper-");
    get orientation() { return this._orientation; }
    set orientation(e) { this._orientation = e, this._keyManager && this._keyManager.withVerticalOrientation(e === "vertical"); }
    _orientation = "horizontal";
    ngAfterContentInit() { this._steps.changes.pipe(h(this._steps), _(this._destroyed)).subscribe(e => { this.steps.reset(e.filter(t => t._stepper === this)), this.steps.forEach((t, r) => t.index.set(r)), this.steps.notifyOnChanges(); }); }
    ngAfterViewInit() { if (this._stepHeader.changes.pipe(h(this._stepHeader), _(this._destroyed)).subscribe(e => { this._sortedHeaders.reset(e.toArray().sort((t, r) => t._elementRef.nativeElement.compareDocumentPosition(r._elementRef.nativeElement) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1)), this._sortedHeaders.notifyOnChanges(); }), this._keyManager = new I(this._sortedHeaders).withWrap().withHomeAndEnd().withVerticalOrientation(this._orientation === "vertical"), this._keyManager.updateActiveItem(this.selectedIndex), (this._dir ? this._dir.change : P()).pipe(h(this._layoutDirection()), _(this._destroyed)).subscribe(e => this._keyManager?.withHorizontalOrientation(e)), this._keyManager.updateActiveItem(this.selectedIndex), this.steps.changes.subscribe(() => { this.selected || this._selectedIndex.set(Math.max(this.selectedIndex - 1, 0)); }), this._isValidIndex(this.selectedIndex) || this._selectedIndex.set(0), this.linear && this.selectedIndex > 0) {
        let e = this.steps.toArray().slice(0, this._selectedIndex());
        for (let t of e)
            t._markAsInteracted();
    } }
    ngOnDestroy() { this._keyManager?.destroy(), this.steps.destroy(), this._sortedHeaders.destroy(), this._destroyed.next(), this._destroyed.complete(); }
    next() { this.selectedIndex = Math.min(this._selectedIndex() + 1, this.steps.length - 1); }
    previous() { this.selectedIndex = Math.max(this._selectedIndex() - 1, 0); }
    reset() { this._updateSelectedItemIndex(0), this.steps.forEach(e => e.reset()), this._stateChanged(); }
    _getStepLabelId(e) { return `${this._groupId}-label-${e}`; }
    _getStepContentId(e) { return `${this._groupId}-content-${e}`; }
    _stateChanged() { this._changeDetectorRef.markForCheck(); }
    _getAnimationDirection(e) { let t = e - this._selectedIndex(); return t < 0 ? this._layoutDirection() === "rtl" ? "next" : "previous" : t > 0 ? this._layoutDirection() === "rtl" ? "previous" : "next" : "current"; }
    _getFocusIndex() { return this._keyManager ? this._keyManager.activeItemIndex : this._selectedIndex(); }
    _updateSelectedItemIndex(e) { let t = this.steps.toArray(), r = this._selectedIndex(); this.selectionChange.emit({ selectedIndex: e, previouslySelectedIndex: r, selectedStep: t[e], previouslySelectedStep: t[r] }), this._keyManager && (this._containsFocus() ? this._keyManager.setActiveItem(e) : this._keyManager.updateActiveItem(e)), this._selectedIndex.set(e), this.selectedIndexChange.emit(e), this._stateChanged(); }
    _onKeydown(e) { let t = y(e), r = e.keyCode, n = this._keyManager; n?.activeItemIndex != null && !t && (r === 32 || r === 13) ? (this.selectedIndex = n.activeItemIndex, e.preventDefault()) : n?.setFocusOrigin("keyboard").onKeydown(e); }
    _anyControlsInvalidOrPending(e) { return this.linear && e >= 0 ? this.steps.toArray().slice(0, e).some(t => { let r = t.stepControl; return (r ? x(r) || q(r) || !t.interacted : !t.completed) && !t.optional && !t._completedOverride(); }) : !1; }
    _layoutDirection() { return this._dir && this._dir.value === "rtl" ? "rtl" : "ltr"; }
    _containsFocus() { let e = this._elementRef.nativeElement, t = g(); return e === t || e.contains(t); }
    _isValidIndex(e) { return e > -1 && (!this.steps || e < this.steps.length); }
    static \u0275fac = function (t) { return new (t || i); };
    static \u0275dir = s.\u0275\u0275defineDirective({ type: i, selectors: [["", "cdkStepper", ""]], contentQueries: function (t, r, n) { if (t & 1 && s.\u0275\u0275contentQuery(n, V, 5)(n, L, 5), t & 2) {
            let d;
            s.\u0275\u0275queryRefresh(d = s.\u0275\u0275loadQuery()) && (r._steps = d), s.\u0275\u0275queryRefresh(d = s.\u0275\u0275loadQuery()) && (r._stepHeader = d);
        } }, inputs: { linear: [2, "linear", "linear", c], selectedIndex: [2, "selectedIndex", "selectedIndex", w], selected: "selected", orientation: "orientation" }, outputs: { selectionChange: "selectionChange", selectedIndexChange: "selectedIndexChange" }, exportAs: ["cdkStepper"] });
} return i; })();
function p(i) { return typeof i == "function"; }
function j(i) { return p(i) ? i().valid() : i.valid; }
function x(i) { return p(i) ? i().invalid() : i.invalid; }
function q(i) { return p(i) ? i().pending() : i.pending; }
function U(i) { p(i) ? i().reset() : i.reset(); }
var pe = (() => { class i {
    _stepper = o(m);
    type = "submit";
    static \u0275fac = function (t) { return new (t || i); };
    static \u0275dir = s.\u0275\u0275defineDirective({ type: i, selectors: [["button", "cdkStepperNext", ""]], hostVars: 1, hostBindings: function (t, r) { t & 1 && s.\u0275\u0275listener("click", function () { return r._stepper.next(); }), t & 2 && s.\u0275\u0275domProperty("type", r.type); }, inputs: { type: "type" } });
} return i; })(), ue = (() => { class i {
    _stepper = o(m);
    type = "button";
    static \u0275fac = function (t) { return new (t || i); };
    static \u0275dir = s.\u0275\u0275defineDirective({ type: i, selectors: [["button", "cdkStepperPrevious", ""]], hostVars: 1, hostBindings: function (t, r) { t & 1 && s.\u0275\u0275listener("click", function () { return r._stepper.previous(); }), t & 2 && s.\u0275\u0275domProperty("type", r.type); }, inputs: { type: "type" } });
} return i; })(), he = (() => { class i {
    static \u0275fac = function (t) { return new (t || i); };
    static \u0275mod = s.\u0275\u0275defineNgModule({ type: i });
    static \u0275inj = s.\u0275\u0275defineInjector({ imports: [C] });
} return i; })();
export { V as CdkStep, L as CdkStepHeader, Q as CdkStepLabel, m as CdkStepper, he as CdkStepperModule, pe as CdkStepperNext, ue as CdkStepperPrevious, B as STEPPER_GLOBAL_OPTIONS, l as STEP_STATE, S as StepperSelectionEvent };
