import { a as Se } from "@nf-internal/chunk-455X7AMD";
import { f as ke } from "@nf-internal/chunk-OMYIKJU2";
import { b as u, c as w } from "@nf-internal/chunk-HGEVE5R3";
import { a as ee, h as Ce } from "@nf-internal/chunk-KCATCKVP";
import { c as J } from "@nf-internal/chunk-HZSYPXGA";
import { a as Ae } from "@nf-internal/chunk-WJDZCIUH";
import { b as we } from "@nf-internal/chunk-NE3WOAAK";
import { a as ve, j as ye, n as Z } from "@nf-internal/chunk-OWKVPWKA";
import "@nf-internal/chunk-M4FUFBJO";
import "@nf-internal/chunk-TBOQSXHX";
import { a as H, b as z, c as N, d as ge, e as fe, f as be, g as De } from "@nf-internal/chunk-PMOCNCWX";
import "@nf-internal/chunk-TDH6BADM";
import { a as _e } from "@nf-internal/chunk-2SOO3RAN";
import { c as X } from "@nf-internal/chunk-L6LZ2NRF";
import "@nf-internal/chunk-2NFLSA4Y";
import * as n from "@angular/core";
import { inject as o, ElementRef as E, NgZone as Ne, EventEmitter as c, Injector as q, Renderer2 as Re, afterNextRender as Te, InjectionToken as Oe, ChangeDetectorRef as g, signal as h, ViewContainerRef as Ye, DOCUMENT as tt, booleanAttribute as f, forwardRef as Pe, HostAttributeToken as at, TemplateRef as nt } from "@angular/core";
import { Subject as v, Subscription as _, merge as j, of as te } from "rxjs";
import { _IdGenerator as Q, CdkMonitorFocus as Le, CdkTrapFocus as it, A11yModule as rt } from "@angular/cdk/a11y";
import { Directionality as Y, BidiModule as st } from "@angular/cdk/bidi";
import { coerceStringArray as ot } from "@angular/cdk/coercion";
import { ESCAPE as Be, hasModifierKey as k, SPACE as S, ENTER as M, PAGE_DOWN as $, PAGE_UP as G, END as he, HOME as pe, DOWN_ARROW as P, UP_ARROW as T, RIGHT_ARROW as x, LEFT_ARROW as I, BACKSPACE as dt } from "@angular/cdk/keycodes";
import { createRepositionScrollStrategy as lt, FlexibleConnectedPositionStrategy as ct, createOverlayRef as ht, OverlayConfig as pt, createBlockScrollStrategy as ut, createGlobalPositionStrategy as mt, createFlexibleConnectedPositionStrategy as _t, OverlayModule as gt } from "@angular/cdk/overlay";
import { Platform as ft, _getFocusedElementPierceShadowDom as He } from "@angular/cdk/platform";
import { ComponentPortal as ze, CdkPortalOutlet as Ke, TemplatePortal as bt, PortalModule as Dt } from "@angular/cdk/portal";
import { startWith as ue, take as vt, filter as yt } from "rxjs/operators";
import { _CdkPrivateStyleLoader as U, _VisuallyHiddenLoader as me } from "@angular/cdk/private";
import { CdkScrollableModule as Ct } from "@angular/cdk/scrolling";
import "@angular/cdk/layout";
import "@angular/common";
import "@angular/cdk/observers/private";
function wt(r, d) { return this._trackRow(d); }
var je = (r, d) => d.id;
function At(r, d) { if (r & 1 && (n.\u0275\u0275domElementStart(0, "tr", 0)(1, "td", 3), n.\u0275\u0275text(2), n.\u0275\u0275domElementEnd()()), r & 2) {
    let e = n.\u0275\u0275nextContext();
    n.\u0275\u0275advance(), n.\u0275\u0275styleProp("padding-top", e._cellPadding)("padding-bottom", e._cellPadding), n.\u0275\u0275attribute("colspan", e.numCols), n.\u0275\u0275advance(), n.\u0275\u0275textInterpolate1(" ", e.label, " ");
} }
function kt(r, d) { if (r & 1 && (n.\u0275\u0275domElementStart(0, "td", 3), n.\u0275\u0275text(1), n.\u0275\u0275domElementEnd()), r & 2) {
    let e = n.\u0275\u0275nextContext(2);
    n.\u0275\u0275styleProp("padding-top", e._cellPadding)("padding-bottom", e._cellPadding), n.\u0275\u0275attribute("colspan", e._firstRowOffset), n.\u0275\u0275advance(), n.\u0275\u0275textInterpolate1(" ", e._firstRowOffset >= e.labelMinRequiredCells ? e.label : "", " ");
} }
function St(r, d) { if (r & 1) {
    let e = n.\u0275\u0275getCurrentView();
    n.\u0275\u0275domElementStart(0, "td", 6)(1, "button", 7), n.\u0275\u0275domListener("click", function (t) { let i = n.\u0275\u0275restoreView(e).$implicit, s = n.\u0275\u0275nextContext(2); return n.\u0275\u0275resetView(s._cellClicked(i, t)); })("focus", function (t) { let i = n.\u0275\u0275restoreView(e).$implicit, s = n.\u0275\u0275nextContext(2); return n.\u0275\u0275resetView(s._emitActiveDateChange(i, t)); }), n.\u0275\u0275domElementStart(2, "span", 8), n.\u0275\u0275text(3), n.\u0275\u0275domElementEnd(), n.\u0275\u0275domElement(4, "span", 9), n.\u0275\u0275domElementEnd()();
} if (r & 2) {
    let e = d.$implicit, a = d.$index, t = n.\u0275\u0275nextContext().$index, i = n.\u0275\u0275nextContext();
    n.\u0275\u0275styleProp("width", i._cellWidth)("padding-top", i._cellPadding)("padding-bottom", i._cellPadding), n.\u0275\u0275attribute("data-mat-row", t)("data-mat-col", a), n.\u0275\u0275advance(), n.\u0275\u0275classMap(e.cssClasses), n.\u0275\u0275classProp("mat-calendar-body-disabled", !e.enabled)("mat-calendar-body-active", i._isActiveCell(t, a))("mat-calendar-body-range-start", i._isRangeStart(e.compareValue))("mat-calendar-body-range-end", i._isRangeEnd(e.compareValue))("mat-calendar-body-in-range", i._isInRange(e.compareValue))("mat-calendar-body-comparison-bridge-start", i._isComparisonBridgeStart(e.compareValue, t, a))("mat-calendar-body-comparison-bridge-end", i._isComparisonBridgeEnd(e.compareValue, t, a))("mat-calendar-body-comparison-start", i._isComparisonStart(e.compareValue))("mat-calendar-body-comparison-end", i._isComparisonEnd(e.compareValue))("mat-calendar-body-in-comparison-range", i._isInComparisonRange(e.compareValue))("mat-calendar-body-preview-start", i._isPreviewStart(e.compareValue))("mat-calendar-body-preview-end", i._isPreviewEnd(e.compareValue))("mat-calendar-body-in-preview", i._isInPreview(e.compareValue)), n.\u0275\u0275domProperty("tabIndex", i._isActiveCell(t, a) ? 0 : -1), n.\u0275\u0275attribute("aria-label", e.ariaLabel)("aria-disabled", !e.enabled || null)("aria-pressed", i._isSelected(e.compareValue))("aria-current", i.todayValue === e.compareValue ? "date" : null)("aria-describedby", i._getDescribedby(e.compareValue)), n.\u0275\u0275advance(), n.\u0275\u0275classProp("mat-calendar-body-selected", i._isSelected(e.compareValue))("mat-calendar-body-comparison-identical", i._isComparisonIdentical(e.compareValue))("mat-calendar-body-today", i.todayValue === e.compareValue), n.\u0275\u0275advance(), n.\u0275\u0275textInterpolate1(" ", e.displayValue, " ");
} }
function Mt(r, d) { if (r & 1 && (n.\u0275\u0275domElementStart(0, "tr", 1), n.\u0275\u0275conditionalCreate(1, kt, 2, 6, "td", 4), n.\u0275\u0275repeaterCreate(2, St, 5, 49, "td", 5, je), n.\u0275\u0275domElementEnd()), r & 2) {
    let e = d.$implicit, a = d.$index, t = n.\u0275\u0275nextContext();
    n.\u0275\u0275advance(), n.\u0275\u0275conditional(a === 0 && t._firstRowOffset ? 1 : -1), n.\u0275\u0275advance(), n.\u0275\u0275repeater(e);
} }
function Vt(r, d) { if (r & 1 && (n.\u0275\u0275elementStart(0, "th", 2)(1, "span", 6), n.\u0275\u0275text(2), n.\u0275\u0275elementEnd(), n.\u0275\u0275elementStart(3, "span", 3), n.\u0275\u0275text(4), n.\u0275\u0275elementEnd()()), r & 2) {
    let e = d.$implicit;
    n.\u0275\u0275advance(2), n.\u0275\u0275textInterpolate(e.long), n.\u0275\u0275advance(2), n.\u0275\u0275textInterpolate(e.narrow);
} }
var We = ["*"];
function Et(r, d) { }
function xt(r, d) { if (r & 1) {
    let e = n.\u0275\u0275getCurrentView();
    n.\u0275\u0275elementStart(0, "mat-month-view", 4), n.\u0275\u0275twoWayListener("activeDateChange", function (t) { n.\u0275\u0275restoreView(e); let i = n.\u0275\u0275nextContext(); return n.\u0275\u0275twoWayBindingSet(i.activeDate, t) || (i.activeDate = t), n.\u0275\u0275resetView(t); }), n.\u0275\u0275listener("_userSelection", function (t) { n.\u0275\u0275restoreView(e); let i = n.\u0275\u0275nextContext(); return n.\u0275\u0275resetView(i._dateSelected(t)); })("dragStarted", function (t) { n.\u0275\u0275restoreView(e); let i = n.\u0275\u0275nextContext(); return n.\u0275\u0275resetView(i._dragStarted(t)); })("dragEnded", function (t) { n.\u0275\u0275restoreView(e); let i = n.\u0275\u0275nextContext(); return n.\u0275\u0275resetView(i._dragEnded(t)); }), n.\u0275\u0275elementEnd();
} if (r & 2) {
    let e = n.\u0275\u0275nextContext();
    n.\u0275\u0275twoWayProperty("activeDate", e.activeDate), n.\u0275\u0275property("selected", e.selected)("dateFilter", e.dateFilter)("maxDate", e.maxDate)("minDate", e.minDate)("dateClass", e.dateClass)("comparisonStart", e.comparisonStart)("comparisonEnd", e.comparisonEnd)("startDateAccessibleName", e.startDateAccessibleName)("endDateAccessibleName", e.endDateAccessibleName)("activeDrag", e._activeDrag);
} }
function It(r, d) { if (r & 1) {
    let e = n.\u0275\u0275getCurrentView();
    n.\u0275\u0275elementStart(0, "mat-year-view", 5), n.\u0275\u0275twoWayListener("activeDateChange", function (t) { n.\u0275\u0275restoreView(e); let i = n.\u0275\u0275nextContext(); return n.\u0275\u0275twoWayBindingSet(i.activeDate, t) || (i.activeDate = t), n.\u0275\u0275resetView(t); }), n.\u0275\u0275listener("monthSelected", function (t) { n.\u0275\u0275restoreView(e); let i = n.\u0275\u0275nextContext(); return n.\u0275\u0275resetView(i._monthSelectedInYearView(t)); })("selectedChange", function (t) { n.\u0275\u0275restoreView(e); let i = n.\u0275\u0275nextContext(); return n.\u0275\u0275resetView(i._goToDateInView(t, "month")); }), n.\u0275\u0275elementEnd();
} if (r & 2) {
    let e = n.\u0275\u0275nextContext();
    n.\u0275\u0275twoWayProperty("activeDate", e.activeDate), n.\u0275\u0275property("selected", e.selected)("dateFilter", e.dateFilter)("maxDate", e.maxDate)("minDate", e.minDate)("dateClass", e.dateClass);
} }
function Ft(r, d) { if (r & 1) {
    let e = n.\u0275\u0275getCurrentView();
    n.\u0275\u0275elementStart(0, "mat-multi-year-view", 6), n.\u0275\u0275twoWayListener("activeDateChange", function (t) { n.\u0275\u0275restoreView(e); let i = n.\u0275\u0275nextContext(); return n.\u0275\u0275twoWayBindingSet(i.activeDate, t) || (i.activeDate = t), n.\u0275\u0275resetView(t); }), n.\u0275\u0275listener("yearSelected", function (t) { n.\u0275\u0275restoreView(e); let i = n.\u0275\u0275nextContext(); return n.\u0275\u0275resetView(i._yearSelectedInMultiYearView(t)); })("selectedChange", function (t) { n.\u0275\u0275restoreView(e); let i = n.\u0275\u0275nextContext(); return n.\u0275\u0275resetView(i._goToDateInView(t, "year")); }), n.\u0275\u0275elementEnd();
} if (r & 2) {
    let e = n.\u0275\u0275nextContext();
    n.\u0275\u0275twoWayProperty("activeDate", e.activeDate), n.\u0275\u0275property("selected", e.selected)("dateFilter", e.dateFilter)("maxDate", e.maxDate)("minDate", e.minDate)("dateClass", e.dateClass);
} }
function Nt(r, d) { }
var Rt = ["button"], Tt = [[["", "matDatepickerToggleIcon", ""]]], Ot = ["[matDatepickerToggleIcon]"];
function Yt(r, d) { r & 1 && (n.\u0275\u0275namespaceSVG(), n.\u0275\u0275elementStart(0, "svg", 2), n.\u0275\u0275element(1, "path", 3), n.\u0275\u0275elementEnd()); }
var Pt = [[["input", "matStartDate", ""]], [["input", "matEndDate", ""]]], Lt = ["input[matStartDate]", "input[matEndDate]"];
function Bt(r, d) { r & 1 && (n.\u0275\u0275domElementStart(0, "div", 0), n.\u0275\u0275projection(1), n.\u0275\u0275domElementEnd()); }
var F = (() => { class r {
    changes = new v;
    calendarLabel = "Calendar";
    openCalendarLabel = "Open calendar";
    closeCalendarLabel = "Close calendar";
    prevMonthLabel = "Previous month";
    nextMonthLabel = "Next month";
    prevYearLabel = "Previous year";
    nextYearLabel = "Next year";
    prevMultiYearLabel = "Previous 24 years";
    nextMultiYearLabel = "Next 24 years";
    switchToMonthViewLabel = "Choose date";
    switchToMultiYearViewLabel = "Choose month and year";
    startDateLabel = "Start date";
    endDateLabel = "End date";
    comparisonDateLabel = "Comparison range";
    formatYearRange(e, a) { return `${e} \u2013 ${a}`; }
    formatYearRangeLabel(e, a) { return `${e} to ${a}`; }
    static \u0275fac = function (a) { return new (a || r); };
    static \u0275prov = n.\u0275\u0275defineService({ token: r, factory: r.\u0275fac });
} return r; })(), Ht = 0, O = class {
    value;
    displayValue;
    ariaLabel;
    enabled;
    compareValue;
    rawValue;
    id = Ht++;
    cssClasses;
    constructor(d, e, a, t, i, s = d, l) { this.value = d, this.displayValue = e, this.ariaLabel = a, this.enabled = t, this.compareValue = s, this.rawValue = l, this.cssClasses = i instanceof Set ? Array.from(i) : i; }
}, zt = { passive: !1, capture: !0 }, K = { passive: !0, capture: !0 }, Me = { passive: !0 }, V = (() => {
    class r {
        _elementRef = o(E);
        _ngZone = o(Ne);
        _platform = o(ft);
        _intl = o(F);
        _eventCleanups;
        _skipNextFocus = !1;
        _focusActiveCellAfterViewChecked = !1;
        label;
        rows;
        todayValue;
        startValue;
        endValue;
        labelMinRequiredCells;
        numCols = 7;
        activeCell = 0;
        ngAfterViewChecked() { this._focusActiveCellAfterViewChecked && (this._focusActiveCell(), this._focusActiveCellAfterViewChecked = !1); }
        isRange = !1;
        cellAspectRatio = 1;
        comparisonStart = null;
        comparisonEnd = null;
        previewStart = null;
        previewEnd = null;
        startDateAccessibleName = null;
        endDateAccessibleName = null;
        selectedValueChange = new c;
        previewChange = new c;
        activeDateChange = new c;
        dragStarted = new c;
        dragEnded = new c;
        _firstRowOffset;
        _cellPadding;
        _cellWidth;
        _startDateLabelId;
        _endDateLabelId;
        _comparisonStartDateLabelId;
        _comparisonEndDateLabelId;
        _didDragSinceMouseDown = !1;
        _injector = o(q);
        comparisonDateAccessibleName = this._intl.comparisonDateLabel;
        _trackRow = e => e;
        constructor() { let e = o(Re), a = o(Q); this._startDateLabelId = a.getId("mat-calendar-body-start-"), this._endDateLabelId = a.getId("mat-calendar-body-end-"), this._comparisonStartDateLabelId = a.getId("mat-calendar-body-comparison-start-"), this._comparisonEndDateLabelId = a.getId("mat-calendar-body-comparison-end-"), o(U).load(_e), this._ngZone.runOutsideAngular(() => { let t = this._elementRef.nativeElement, i = [e.listen(t, "touchmove", this._touchmoveHandler, zt), e.listen(t, "mouseenter", this._enterHandler, K), e.listen(t, "focus", this._enterHandler, K), e.listen(t, "mouseleave", this._leaveHandler, K), e.listen(t, "blur", this._leaveHandler, K), e.listen(t, "mousedown", this._mousedownHandler, Me), e.listen(t, "touchstart", this._mousedownHandler, Me)]; this._platform.isBrowser && i.push(e.listen("window", "mouseup", this._mouseupHandler), e.listen("window", "touchend", this._touchendHandler)), this._eventCleanups = i; }); }
        _cellClicked(e, a) { this._didDragSinceMouseDown || e.enabled && this.selectedValueChange.emit({ value: e.value, event: a }); }
        _emitActiveDateChange(e, a) { e.enabled && this.activeDateChange.emit({ value: e.value, event: a }); }
        _isSelected(e) { return this.startValue === e || this.endValue === e; }
        ngOnChanges(e) { let a = e.numCols, { rows: t, numCols: i } = this; (e.rows || a) && (this._firstRowOffset = t && t.length && t[0].length ? i - t[0].length : 0), (e.cellAspectRatio || a || !this._cellPadding) && (this._cellPadding = `${50 * this.cellAspectRatio / i}%`), (a || !this._cellWidth) && (this._cellWidth = `${100 / i}%`); }
        ngOnDestroy() { this._eventCleanups.forEach(e => e()); }
        _isActiveCell(e, a) { let t = e * this.numCols + a; return e && (t -= this._firstRowOffset), t == this.activeCell; }
        _focusActiveCell(e = !0) { Te(() => { setTimeout(() => { let a = this._elementRef.nativeElement.querySelector(".mat-calendar-body-active"); a && (e || (this._skipNextFocus = !0), a.focus()); }); }, { injector: this._injector }); }
        _scheduleFocusActiveCellAfterViewChecked() { this._focusActiveCellAfterViewChecked = !0; }
        _isRangeStart(e) { return ie(e, this.startValue, this.endValue); }
        _isRangeEnd(e) { return re(e, this.startValue, this.endValue); }
        _isInRange(e) { return se(e, this.startValue, this.endValue, this.isRange); }
        _isComparisonStart(e) { return ie(e, this.comparisonStart, this.comparisonEnd); }
        _isComparisonBridgeStart(e, a, t) { if (!this._isComparisonStart(e) || this._isRangeStart(e) || !this._isInRange(e))
            return !1; let i = this.rows[a][t - 1]; if (!i) {
            let s = this.rows[a - 1];
            i = s && s[s.length - 1];
        } return i && !this._isRangeEnd(i.compareValue); }
        _isComparisonBridgeEnd(e, a, t) { if (!this._isComparisonEnd(e) || this._isRangeEnd(e) || !this._isInRange(e))
            return !1; let i = this.rows[a][t + 1]; if (!i) {
            let s = this.rows[a + 1];
            i = s && s[0];
        } return i && !this._isRangeStart(i.compareValue); }
        _isComparisonEnd(e) { return re(e, this.comparisonStart, this.comparisonEnd); }
        _isInComparisonRange(e) { return se(e, this.comparisonStart, this.comparisonEnd, this.isRange); }
        _isComparisonIdentical(e) { return this.comparisonStart === this.comparisonEnd && e === this.comparisonStart; }
        _isPreviewStart(e) { return ie(e, this.previewStart, this.previewEnd); }
        _isPreviewEnd(e) { return re(e, this.previewStart, this.previewEnd); }
        _isInPreview(e) { return se(e, this.previewStart, this.previewEnd, this.isRange); }
        _getDescribedby(e) { if (!this.isRange)
            return null; if (this.startValue === e && this.endValue === e)
            return `${this._startDateLabelId} ${this._endDateLabelId}`; if (this.startValue === e)
            return this._startDateLabelId; if (this.endValue === e)
            return this._endDateLabelId; if (this.comparisonStart !== null && this.comparisonEnd !== null) {
            if (e === this.comparisonStart && e === this.comparisonEnd)
                return `${this._comparisonStartDateLabelId} ${this._comparisonEndDateLabelId}`;
            if (e === this.comparisonStart)
                return this._comparisonStartDateLabelId;
            if (e === this.comparisonEnd)
                return this._comparisonEndDateLabelId;
        } return null; }
        _enterHandler = e => { if (this._skipNextFocus && e.type === "focus") {
            this._skipNextFocus = !1;
            return;
        } if (e.target && this.isRange) {
            let a = this._getCellFromElement(e.target);
            a && this._ngZone.run(() => this.previewChange.emit({ value: a.enabled ? a : null, event: e }));
        } };
        _touchmoveHandler = e => { if (!this.isRange)
            return; let a = Ve(e), t = a ? this._getCellFromElement(a) : null; a !== e.target && (this._didDragSinceMouseDown = !0), ne(e.target) && e.preventDefault(), this._ngZone.run(() => this.previewChange.emit({ value: t?.enabled ? t : null, event: e })); };
        _leaveHandler = e => { this.previewEnd !== null && this.isRange && (e.type !== "blur" && (this._didDragSinceMouseDown = !0), e.target && this._getCellFromElement(e.target) && !(e.relatedTarget && this._getCellFromElement(e.relatedTarget)) && this._ngZone.run(() => this.previewChange.emit({ value: null, event: e }))); };
        _mousedownHandler = e => { if (!this.isRange)
            return; this._didDragSinceMouseDown = !1; let a = e.target && this._getCellFromElement(e.target); !a || !this._isInRange(a.compareValue) || this._ngZone.run(() => { this.dragStarted.emit({ value: a.rawValue, event: e }); }); };
        _mouseupHandler = e => { if (!this.isRange)
            return; let a = ne(e.target); if (!a) {
            this._ngZone.run(() => { this.dragEnded.emit({ value: null, event: e }); });
            return;
        } a.closest(".mat-calendar-body") === this._elementRef.nativeElement && this._ngZone.run(() => { let t = this._getCellFromElement(a); this.dragEnded.emit({ value: t?.rawValue ?? null, event: e }); }); };
        _touchendHandler = e => { let a = Ve(e); a && this._mouseupHandler({ target: a }); };
        _getCellFromElement(e) { let a = ne(e); if (a) {
            let t = a.getAttribute("data-mat-row"), i = a.getAttribute("data-mat-col");
            if (t && i)
                return this.rows[parseInt(t)]?.[parseInt(i)] || null;
        } return null; }
        static \u0275fac = function (a) { return new (a || r); };
        static \u0275cmp = n.\u0275\u0275defineComponent({ type: r, selectors: [["", "mat-calendar-body", ""]], hostAttrs: [1, "mat-calendar-body"], inputs: { label: "label", rows: "rows", todayValue: "todayValue", startValue: "startValue", endValue: "endValue", labelMinRequiredCells: "labelMinRequiredCells", numCols: "numCols", activeCell: "activeCell", isRange: "isRange", cellAspectRatio: "cellAspectRatio", comparisonStart: "comparisonStart", comparisonEnd: "comparisonEnd", previewStart: "previewStart", previewEnd: "previewEnd", startDateAccessibleName: "startDateAccessibleName", endDateAccessibleName: "endDateAccessibleName" }, outputs: { selectedValueChange: "selectedValueChange", previewChange: "previewChange", activeDateChange: "activeDateChange", dragStarted: "dragStarted", dragEnded: "dragEnded" }, exportAs: ["matCalendarBody"], features: [n.\u0275\u0275NgOnChangesFeature], decls: 11, vars: 11, consts: [["aria-hidden", "true"], ["role", "row"], [1, "mat-calendar-body-hidden-label", 3, "id"], [1, "mat-calendar-body-label"], [1, "mat-calendar-body-label", 3, "paddingTop", "paddingBottom"], ["role", "gridcell", 1, "mat-calendar-body-cell-container", 3, "width", "paddingTop", "paddingBottom"], ["role", "gridcell", 1, "mat-calendar-body-cell-container"], ["type", "button", 1, "mat-calendar-body-cell", 3, "click", "focus", "tabindex"], [1, "mat-calendar-body-cell-content", "mat-focus-indicator"], ["aria-hidden", "true", 1, "mat-calendar-body-cell-preview"]], template: function (a, t) {
                a & 1 && (n.\u0275\u0275conditionalCreate(0, At, 3, 6, "tr", 0), n.\u0275\u0275repeaterCreate(1, Mt, 4, 1, "tr", 1, wt, !0), n.\u0275\u0275domElementStart(3, "span", 2), n.\u0275\u0275text(4), n.\u0275\u0275domElementEnd(), n.\u0275\u0275domElementStart(5, "span", 2), n.\u0275\u0275text(6), n.\u0275\u0275domElementEnd(), n.\u0275\u0275domElementStart(7, "span", 2), n.\u0275\u0275text(8), n.\u0275\u0275domElementEnd(), n.\u0275\u0275domElementStart(9, "span", 2), n.\u0275\u0275text(10), n.\u0275\u0275domElementEnd()), a & 2 && (n.\u0275\u0275conditional(t._firstRowOffset < t.labelMinRequiredCells ? 0 : -1), n.\u0275\u0275advance(), n.\u0275\u0275repeater(t.rows), n.\u0275\u0275advance(2), n.\u0275\u0275domProperty("id", t._startDateLabelId), n.\u0275\u0275advance(), n.\u0275\u0275textInterpolate1(" ", t.startDateAccessibleName, `
`), n.\u0275\u0275advance(), n.\u0275\u0275domProperty("id", t._endDateLabelId), n.\u0275\u0275advance(), n.\u0275\u0275textInterpolate1(" ", t.endDateAccessibleName, `
`), n.\u0275\u0275advance(), n.\u0275\u0275domProperty("id", t._comparisonStartDateLabelId), n.\u0275\u0275advance(), n.\u0275\u0275textInterpolate2(" ", t.comparisonDateAccessibleName, " ", t.startDateAccessibleName, `
`), n.\u0275\u0275advance(), n.\u0275\u0275domProperty("id", t._comparisonEndDateLabelId), n.\u0275\u0275advance(), n.\u0275\u0275textInterpolate2(" ", t.comparisonDateAccessibleName, " ", t.endDateAccessibleName, `
`));
            }, styles: [`.mat-calendar-body {
  min-width: 224px;
}

.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--%NS%mat-datepicker-calendar-date-today-outline-color, var(--%NS%mat-sys-primary));
}

.mat-calendar-body-label {
  height: 0;
  line-height: 0;
  text-align: start;
  padding-left: 4.7142857143%;
  padding-right: 4.7142857143%;
  font-size: var(--%NS%mat-datepicker-calendar-body-label-text-size, var(--%NS%mat-sys-title-small-size));
  font-weight: var(--%NS%mat-datepicker-calendar-body-label-text-weight, var(--%NS%mat-sys-title-small-weight));
  color: var(--%NS%mat-datepicker-calendar-body-label-text-color, var(--%NS%mat-sys-on-surface));
}

.mat-calendar-body-hidden-label {
  display: none;
}

.mat-calendar-body-cell-container {
  position: relative;
  height: 0;
  line-height: 0;
}

.mat-calendar-body-cell {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: none;
  text-align: center;
  outline: none;
  margin: 0;
  font-family: var(--%NS%mat-datepicker-calendar-text-font, var(--%NS%mat-sys-body-medium-font));
  font-size: var(--%NS%mat-datepicker-calendar-text-size, var(--%NS%mat-sys-body-medium-size));
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-calendar-body-cell::-moz-focus-inner {
  border: 0;
}

.mat-calendar-body-cell::before,
.mat-calendar-body-cell::after,
.mat-calendar-body-cell-preview {
  content: "";
  position: absolute;
  top: 5%;
  left: 0;
  z-index: 0;
  box-sizing: border-box;
  display: block;
  height: 90%;
  width: 100%;
}

.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-start::after,
.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
.mat-calendar-body-comparison-start::after,
.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 5%;
  width: 95%;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
[dir=rtl] .mat-calendar-body-comparison-start::after,
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 0;
  border-radius: 0;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
.mat-calendar-body-comparison-end::after,
.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
[dir=rtl] .mat-calendar-body-comparison-end::after,
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  left: 5%;
  border-radius: 0;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}

[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start::after {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-comparison-start.mat-calendar-body-range-end::after, [dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end.mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start::after {
  width: 90%;
}

.mat-calendar-body-in-preview {
  color: var(--%NS%mat-datepicker-calendar-date-preview-state-outline-color, var(--%NS%mat-sys-primary));
}
.mat-calendar-body-in-preview .mat-calendar-body-cell-preview {
  border-top: dashed 1px;
  border-bottom: dashed 1px;
}

.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: 0;
  border-right: dashed 1px;
}

.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: 0;
  border-left: dashed 1px;
}

.mat-calendar-body-disabled {
  cursor: default;
}
.mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  color: var(--%NS%mat-datepicker-calendar-date-disabled-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--%NS%mat-datepicker-calendar-date-today-disabled-state-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-calendar-body-disabled {
    opacity: 0.5;
  }
}

.mat-calendar-body-cell-content {
  top: 5%;
  left: 5%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 90%;
  height: 90%;
  line-height: 1;
  border-width: 1px;
  border-style: solid;
  border-radius: 999px;
  color: var(--%NS%mat-datepicker-calendar-date-text-color, var(--%NS%mat-sys-on-surface));
  border-color: var(--%NS%mat-datepicker-calendar-date-outline-color, transparent);
}
.mat-calendar-body-cell-content.mat-focus-indicator {
  position: absolute;
}
.mat-calendar-body-cell-content::before {
  border-radius: 50%;
}
@media (forced-colors: active) {
  .mat-calendar-body-cell-content {
    border: none;
  }
}

.cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical), .cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  background-color: var(--%NS%mat-datepicker-calendar-date-focus-state-background-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
}

@media (hover: hover) {
  .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
    background-color: var(--%NS%mat-datepicker-calendar-date-hover-state-background-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
  }
}
.mat-calendar-body-selected {
  background-color: var(--%NS%mat-datepicker-calendar-date-selected-state-background-color, var(--%NS%mat-sys-primary));
  color: var(--%NS%mat-datepicker-calendar-date-selected-state-text-color, var(--%NS%mat-sys-on-primary));
}
.mat-calendar-body-disabled > .mat-calendar-body-selected {
  background-color: var(--%NS%mat-datepicker-calendar-date-selected-disabled-state-background-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-selected.mat-calendar-body-today {
  box-shadow: inset 0 0 0 1px var(--%NS%mat-datepicker-calendar-date-today-selected-state-outline-color, var(--%NS%mat-sys-primary));
}

.mat-calendar-body-in-range::before {
  background: var(--%NS%mat-datepicker-calendar-date-in-range-state-background-color, var(--%NS%mat-sys-primary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--%NS%mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--%NS%mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--%NS%mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--%NS%mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-bridge-start::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-end::before {
  background: linear-gradient(to right, var(--%NS%mat-datepicker-calendar-date-in-range-state-background-color, var(--%NS%mat-sys-primary-container)) 50%, var(--%NS%mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--%NS%mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-comparison-bridge-end::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-start::before {
  background: linear-gradient(to left, var(--%NS%mat-datepicker-calendar-date-in-range-state-background-color, var(--%NS%mat-sys-primary-container)) 50%, var(--%NS%mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--%NS%mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-in-range > .mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range.mat-calendar-body-in-range::after {
  background: var(--%NS%mat-datepicker-calendar-date-in-overlap-range-state-background-color, var(--%NS%mat-sys-secondary-container));
}

.mat-calendar-body-comparison-identical.mat-calendar-body-selected,
.mat-calendar-body-in-comparison-range > .mat-calendar-body-selected {
  background: var(--%NS%mat-datepicker-calendar-date-in-overlap-range-selected-state-background-color, var(--%NS%mat-sys-secondary));
}

@media (forced-colors: active) {
  .mat-datepicker-popup:not(:empty),
  .mat-calendar-body-cell:not(.mat-calendar-body-in-range) .mat-calendar-body-selected {
    outline: solid 1px;
  }
  .mat-calendar-body-today {
    outline: dotted 1px;
  }
  .mat-calendar-body-cell::before,
  .mat-calendar-body-cell::after,
  .mat-calendar-body-selected {
    background: none;
  }
  .mat-calendar-body-in-range::before,
  .mat-calendar-body-comparison-bridge-start::before,
  .mat-calendar-body-comparison-bridge-end::before {
    border-top: solid 1px;
    border-bottom: solid 1px;
  }
  .mat-calendar-body-range-start::before {
    border-left: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-start::before {
    border-left: 0;
    border-right: solid 1px;
  }
  .mat-calendar-body-range-end::before {
    border-right: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-end::before {
    border-right: 0;
    border-left: solid 1px;
  }
  .mat-calendar-body-in-comparison-range::before {
    border-top: dashed 1px;
    border-bottom: dashed 1px;
  }
  .mat-calendar-body-comparison-start::before {
    border-left: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-start::before {
    border-left: 0;
    border-right: dashed 1px;
  }
  .mat-calendar-body-comparison-end::before {
    border-right: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-end::before {
    border-right: 0;
    border-left: dashed 1px;
  }
}
`], encapsulation: 2 });
    }
    return r;
})();
function ae(r) { return r?.nodeName === "TD"; }
function ne(r) { let d; return ae(r) ? d = r : ae(r.parentNode) ? d = r.parentNode : ae(r.parentNode?.parentNode) && (d = r.parentNode.parentNode), d?.getAttribute("data-mat-row") != null ? d : null; }
function ie(r, d, e) { return e !== null && d !== e && r < e && r === d; }
function re(r, d, e) { return d !== null && d !== e && r >= d && r === e; }
function se(r, d, e, a) { return a && d !== null && e !== null && d !== e && r >= d && r <= e; }
function Ve(r) { let d = r.changedTouches[0]; return document.elementFromPoint(d.clientX, d.clientY); }
var p = class {
    start;
    end;
    _disableStructuralEquivalency;
    constructor(d, e) { this.start = d, this.end = e; }
}, b = (() => { class r {
    selection;
    _adapter;
    _selectionChanged = new v;
    selectionChanged = this._selectionChanged;
    constructor(e, a) { this.selection = e, this._adapter = a, this.selection = e; }
    updateSelection(e, a) { let t = this.selection; this.selection = e, this._selectionChanged.next({ selection: e, source: a, oldValue: t }); }
    ngOnDestroy() { this._selectionChanged.complete(); }
    _isValidDateInstance(e) { return this._adapter.isDateInstance(e) && this._adapter.isValid(e); }
    static \u0275fac = function (a) { n.\u0275\u0275invalidFactory(); };
    static \u0275prov = n.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac });
} return r; })(), Kt = (() => { class r extends b {
    constructor(e) { super(null, e); }
    add(e) { super.updateSelection(e, this); }
    isValid() { return this.selection != null && this._isValidDateInstance(this.selection); }
    isComplete() { return this.selection != null; }
    clone() { let e = new r(this._adapter); return e.updateSelection(this.selection, this), e; }
    static \u0275fac = function (a) { return new (a || r)(n.\u0275\u0275inject(u)); };
    static \u0275prov = n.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac });
} return r; })(), jt = (() => { class r extends b {
    constructor(e) { super(new p(null, null), e); }
    add(e) { let { start: a, end: t } = this.selection; a == null ? a = e : t == null ? t = e : (a = e, t = null), super.updateSelection(new p(a, t), this); }
    isValid() { let { start: e, end: a } = this.selection; return e == null && a == null ? !0 : e != null && a != null ? this._isValidDateInstance(e) && this._isValidDateInstance(a) && this._adapter.compareDate(e, a) <= 0 : (e == null || this._isValidDateInstance(e)) && (a == null || this._isValidDateInstance(a)); }
    isComplete() { return this.selection.start != null && this.selection.end != null; }
    clone() { let e = new r(this._adapter); return e.updateSelection(this.selection, this), e; }
    static \u0275fac = function (a) { return new (a || r)(n.\u0275\u0275inject(u)); };
    static \u0275prov = n.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac });
} return r; })(), qe = { provide: b, useFactory: () => o(b, { optional: !0, skipSelf: !0 }) || new Kt(o(u)) }, Wt = { provide: b, useFactory: () => o(b, { optional: !0, skipSelf: !0 }) || new jt(o(u)) }, W = new Oe("MAT_DATE_RANGE_SELECTION_STRATEGY"), qt = (() => { class r {
    _dateAdapter;
    constructor(e) { this._dateAdapter = e; }
    selectionFinished(e, a) { let { start: t, end: i } = a; return t == null ? t = e : i == null && e && this._dateAdapter.compareDate(e, t) >= 0 ? i = e : (t = e, i = null), new p(t, i); }
    createPreview(e, a) { let t = null, i = null; return a.start && !a.end && e && (t = a.start, i = e), new p(t, i); }
    createDrag(e, a, t) { let i = a.start, s = a.end; if (!i || !s)
        return null; let l = this._dateAdapter, L = l.compareDate(i, s) !== 0, y = l.getYear(t) - l.getYear(e), C = l.getMonth(t) - l.getMonth(e), B = l.getDate(t) - l.getDate(e); return L && l.sameDate(e, a.start) ? (i = t, l.compareDate(t, s) > 0 && (s = l.addCalendarYears(s, y), s = l.addCalendarMonths(s, C), s = l.addCalendarDays(s, B))) : L && l.sameDate(e, a.end) ? (s = t, l.compareDate(t, i) < 0 && (i = l.addCalendarYears(i, y), i = l.addCalendarMonths(i, C), i = l.addCalendarDays(i, B))) : (i = l.addCalendarYears(i, y), i = l.addCalendarMonths(i, C), i = l.addCalendarDays(i, B), s = l.addCalendarYears(s, y), s = l.addCalendarMonths(s, C), s = l.addCalendarDays(s, B)), new p(i, s); }
    static \u0275fac = function (a) { return new (a || r)(n.\u0275\u0275inject(u)); };
    static \u0275prov = n.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac });
} return r; })(), oe = 7, Qt = 0, Ee = (() => { class r {
    _changeDetectorRef = o(g);
    _dateFormats = o(w, { optional: !0 });
    _dateAdapter = o(u, { optional: !0 });
    _dir = o(Y, { optional: !0 });
    _rangeStrategy = o(W, { optional: !0 });
    _rerenderSubscription = _.EMPTY;
    _selectionKeyPressed = !1;
    get activeDate() { return this._activeDate; }
    set activeDate(e) { let a = this._activeDate, t = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)) || this._dateAdapter.today(); this._activeDate = this._dateAdapter.clampDate(t, this.minDate, this.maxDate), this._hasSameMonthAndYear(a, this._activeDate) || this._init(); }
    _activeDate;
    get selected() { return this._selected; }
    set selected(e) { e instanceof p ? this._selected = e : this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)), this._setRanges(this._selected); }
    _selected = null;
    get minDate() { return this._minDate; }
    set minDate(e) { this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)); }
    _minDate = null;
    get maxDate() { return this._maxDate; }
    set maxDate(e) { this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)); }
    _maxDate = null;
    dateFilter;
    dateClass;
    comparisonStart = null;
    comparisonEnd = null;
    startDateAccessibleName = null;
    endDateAccessibleName = null;
    activeDrag = null;
    selectedChange = new c;
    _userSelection = new c;
    dragStarted = new c;
    dragEnded = new c;
    activeDateChange = new c;
    _matCalendarBody;
    _monthLabel = h("");
    _weeks = h([]);
    _firstWeekOffset = h(0);
    _rangeStart = h(null);
    _rangeEnd = h(null);
    _comparisonRangeStart = h(null);
    _comparisonRangeEnd = h(null);
    _previewStart = h(null);
    _previewEnd = h(null);
    _isRange = h(!1);
    _todayDate = h(null);
    _weekdays = h([]);
    constructor() { o(U).load(me), this._activeDate = this._dateAdapter.today(); }
    ngAfterContentInit() { this._rerenderSubscription = this._dateAdapter.localeChanges.pipe(ue(null)).subscribe(() => this._init()); }
    ngOnChanges(e) { let a = e.comparisonStart || e.comparisonEnd; a && !a.firstChange && this._setRanges(this.selected), e.activeDrag && !this.activeDrag && this._clearPreview(); }
    ngOnDestroy() { this._rerenderSubscription.unsubscribe(); }
    _dateSelected(e) { let a = e.value, t = this._getDateFromDayOfMonth(a), i, s; this._selected instanceof p ? (i = this._getDateInCurrentMonth(this._selected.start), s = this._getDateInCurrentMonth(this._selected.end)) : i = s = this._getDateInCurrentMonth(this._selected), (i !== a || s !== a) && this.selectedChange.emit(t), this._userSelection.emit({ value: t, event: e.event }), this._clearPreview(), this._changeDetectorRef.markForCheck(); }
    _updateActiveDate(e) { let a = e.value, t = this._activeDate; this.activeDate = this._getDateFromDayOfMonth(a), this._dateAdapter.compareDate(t, this.activeDate) && this.activeDateChange.emit(this._activeDate); }
    _handleCalendarBodyKeydown(e) { let a = this._activeDate, t = this._isRtl(); switch (e.keyCode) {
        case I:
            this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, t ? 1 : -1);
            break;
        case x:
            this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, t ? -1 : 1);
            break;
        case T:
            this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, -7);
            break;
        case P:
            this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, 7);
            break;
        case pe:
            this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, 1 - this._dateAdapter.getDate(this._activeDate));
            break;
        case he:
            this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, this._dateAdapter.getNumDaysInMonth(this._activeDate) - this._dateAdapter.getDate(this._activeDate));
            break;
        case G:
            this.activeDate = e.altKey ? this._dateAdapter.addCalendarYears(this._activeDate, -1) : this._dateAdapter.addCalendarMonths(this._activeDate, -1);
            break;
        case $:
            this.activeDate = e.altKey ? this._dateAdapter.addCalendarYears(this._activeDate, 1) : this._dateAdapter.addCalendarMonths(this._activeDate, 1);
            break;
        case M:
        case S:
            this._selectionKeyPressed = !0, this._canSelect(this._activeDate) && e.preventDefault();
            return;
        case Be:
            this._previewEnd() != null && !k(e) && (this._clearPreview(), this.activeDrag ? this.dragEnded.emit({ value: null, event: e }) : (this.selectedChange.emit(null), this._userSelection.emit({ value: null, event: e })), e.preventDefault(), e.stopPropagation());
            return;
        default: return;
    } this._dateAdapter.compareDate(a, this.activeDate) && (this.activeDateChange.emit(this.activeDate), this._focusActiveCellAfterViewChecked()), e.preventDefault(); }
    _handleCalendarBodyKeyup(e) { (e.keyCode === S || e.keyCode === M) && (this._selectionKeyPressed && this._canSelect(this._activeDate) && this._dateSelected({ value: this._dateAdapter.getDate(this._activeDate), event: e }), this._selectionKeyPressed = !1); }
    _init() { this._setRanges(this.selected), this._todayDate.set(this._getCellCompareValue(this._dateAdapter.today())), this._monthLabel.set(this._dateFormats.display.monthLabel ? this._dateAdapter.format(this.activeDate, this._dateFormats.display.monthLabel) : this._dateAdapter.getMonthNames("short")[this._dateAdapter.getMonth(this.activeDate)].toLocaleUpperCase()); let e = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), 1); this._firstWeekOffset.set((oe + this._dateAdapter.getDayOfWeek(e) - this._dateAdapter.getFirstDayOfWeek()) % oe), this._initWeekdays(), this._createWeekCells(), this._changeDetectorRef.markForCheck(); }
    _focusActiveCell(e) { this._matCalendarBody._focusActiveCell(e); }
    _focusActiveCellAfterViewChecked() { this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked(); }
    _previewChanged({ event: e, value: a }) { if (this._rangeStrategy) {
        let t = a ? a.rawValue : null, i = this._rangeStrategy.createPreview(t, this.selected, e);
        if (this._previewStart.set(this._getCellCompareValue(i.start)), this._previewEnd.set(this._getCellCompareValue(i.end)), this.activeDrag && t) {
            let s = this._rangeStrategy.createDrag?.(this.activeDrag.value, this.selected, t, e);
            s && (this._previewStart.set(this._getCellCompareValue(s.start)), this._previewEnd.set(this._getCellCompareValue(s.end)));
        }
    } }
    _dragEnded(e) { if (this.activeDrag)
        if (e.value) {
            let a = this._rangeStrategy?.createDrag?.(this.activeDrag.value, this.selected, e.value, e.event);
            this.dragEnded.emit({ value: a ?? null, event: e.event });
        }
        else
            this.dragEnded.emit({ value: null, event: e.event }); }
    _getDateFromDayOfMonth(e) { return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), e); }
    _initWeekdays() { let e = this._dateAdapter.getFirstDayOfWeek(), a = this._dateAdapter.getDayOfWeekNames("narrow"), i = this._dateAdapter.getDayOfWeekNames("long").map((s, l) => ({ long: s, narrow: a[l], id: Qt++ })); this._weekdays.set(i.slice(e).concat(i.slice(0, e))); }
    _createWeekCells() { let e = this._dateAdapter.getNumDaysInMonth(this.activeDate), a = this._dateAdapter.getDateNames(), t = [[]]; for (let i = 0, s = this._firstWeekOffset(); i < e; i++, s++) {
        s == oe && (t.push([]), s = 0);
        let l = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), i + 1), L = this._shouldEnableDate(l), y = this._dateAdapter.format(l, this._dateFormats.display.dateA11yLabel), C = this.dateClass ? this.dateClass(l, "month") : void 0;
        t[t.length - 1].push(new O(i + 1, a[i], y, L, C, this._getCellCompareValue(l), l));
    } this._weeks.set(t); }
    _shouldEnableDate(e) { return !!e && (!this.minDate || this._dateAdapter.compareDate(e, this.minDate) >= 0) && (!this.maxDate || this._dateAdapter.compareDate(e, this.maxDate) <= 0) && (!this.dateFilter || this.dateFilter(e)); }
    _getDateInCurrentMonth(e) { return e && this._hasSameMonthAndYear(e, this.activeDate) ? this._dateAdapter.getDate(e) : null; }
    _hasSameMonthAndYear(e, a) { return !!(e && a && this._dateAdapter.getMonth(e) == this._dateAdapter.getMonth(a) && this._dateAdapter.getYear(e) == this._dateAdapter.getYear(a)); }
    _getCellCompareValue(e) { if (e) {
        let a = this._dateAdapter.getYear(e), t = this._dateAdapter.getMonth(e), i = this._dateAdapter.getDate(e);
        return new Date(a, t, i).getTime();
    } return null; }
    _isRtl() { return this._dir && this._dir.value === "rtl"; }
    _setRanges(e) { e instanceof p ? (this._rangeStart.set(this._getCellCompareValue(e.start)), this._rangeEnd.set(this._getCellCompareValue(e.end)), this._isRange.set(!0)) : (this._rangeStart.set(this._getCellCompareValue(e)), this._rangeEnd.set(this._rangeStart()), this._isRange.set(!1)), this._comparisonRangeStart.set(this._getCellCompareValue(this.comparisonStart)), this._comparisonRangeEnd.set(this._getCellCompareValue(this.comparisonEnd)); }
    _canSelect(e) { return !this.dateFilter || this.dateFilter(e); }
    _clearPreview() { this._previewStart.set(null), this._previewEnd.set(null); }
    static \u0275fac = function (a) { return new (a || r); };
    static \u0275cmp = n.\u0275\u0275defineComponent({ type: r, selectors: [["mat-month-view"]], viewQuery: function (a, t) { if (a & 1 && n.\u0275\u0275viewQuery(V, 5), a & 2) {
            let i;
            n.\u0275\u0275queryRefresh(i = n.\u0275\u0275loadQuery()) && (t._matCalendarBody = i.first);
        } }, inputs: { activeDate: "activeDate", selected: "selected", minDate: "minDate", maxDate: "maxDate", dateFilter: "dateFilter", dateClass: "dateClass", comparisonStart: "comparisonStart", comparisonEnd: "comparisonEnd", startDateAccessibleName: "startDateAccessibleName", endDateAccessibleName: "endDateAccessibleName", activeDrag: "activeDrag" }, outputs: { selectedChange: "selectedChange", _userSelection: "_userSelection", dragStarted: "dragStarted", dragEnded: "dragEnded", activeDateChange: "activeDateChange" }, exportAs: ["matMonthView"], features: [n.\u0275\u0275NgOnChangesFeature], decls: 8, vars: 14, consts: [["role", "grid", 1, "mat-calendar-table"], [1, "mat-calendar-table-header"], ["scope", "col"], ["aria-hidden", "true"], ["colspan", "7", 1, "mat-calendar-table-header-divider"], ["mat-calendar-body", "", 3, "selectedValueChange", "activeDateChange", "previewChange", "dragStarted", "dragEnded", "keyup", "keydown", "label", "rows", "todayValue", "startValue", "endValue", "comparisonStart", "comparisonEnd", "previewStart", "previewEnd", "isRange", "labelMinRequiredCells", "activeCell", "startDateAccessibleName", "endDateAccessibleName"], [1, "cdk-visually-hidden"]], template: function (a, t) { a & 1 && (n.\u0275\u0275elementStart(0, "table", 0)(1, "thead", 1)(2, "tr"), n.\u0275\u0275repeaterCreate(3, Vt, 5, 2, "th", 2, je), n.\u0275\u0275elementEnd(), n.\u0275\u0275elementStart(5, "tr", 3), n.\u0275\u0275element(6, "th", 4), n.\u0275\u0275elementEnd()(), n.\u0275\u0275elementStart(7, "tbody", 5), n.\u0275\u0275listener("selectedValueChange", function (s) { return t._dateSelected(s); })("activeDateChange", function (s) { return t._updateActiveDate(s); })("previewChange", function (s) { return t._previewChanged(s); })("dragStarted", function (s) { return t.dragStarted.emit(s); })("dragEnded", function (s) { return t._dragEnded(s); })("keyup", function (s) { return t._handleCalendarBodyKeyup(s); })("keydown", function (s) { return t._handleCalendarBodyKeydown(s); }), n.\u0275\u0275elementEnd()()), a & 2 && (n.\u0275\u0275advance(3), n.\u0275\u0275repeater(t._weekdays()), n.\u0275\u0275advance(4), n.\u0275\u0275property("label", t._monthLabel())("rows", t._weeks())("todayValue", t._todayDate())("startValue", t._rangeStart())("endValue", t._rangeEnd())("comparisonStart", t._comparisonRangeStart())("comparisonEnd", t._comparisonRangeEnd())("previewStart", t._previewStart())("previewEnd", t._previewEnd())("isRange", t._isRange())("labelMinRequiredCells", 3)("activeCell", t._dateAdapter.getDate(t.activeDate) - 1)("startDateAccessibleName", t.startDateAccessibleName)("endDateAccessibleName", t.endDateAccessibleName)); }, dependencies: [V], encapsulation: 2 });
} return r; })(), m = 24, de = 4, xe = (() => { class r {
    _changeDetectorRef = o(g);
    _dateAdapter = o(u, { optional: !0 });
    _dir = o(Y, { optional: !0 });
    _rerenderSubscription = _.EMPTY;
    _selectionKeyPressed = !1;
    get activeDate() { return this._activeDate; }
    set activeDate(e) { let a = this._activeDate, t = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)) || this._dateAdapter.today(); this._activeDate = this._dateAdapter.clampDate(t, this.minDate, this.maxDate), Qe(this._dateAdapter, a, this._activeDate, this.minDate, this.maxDate) || this._init(); }
    _activeDate;
    get selected() { return this._selected; }
    set selected(e) { e instanceof p ? this._selected = e : this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)), this._setSelectedYear(e); }
    _selected = null;
    get minDate() { return this._minDate; }
    set minDate(e) { this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)); }
    _minDate = null;
    get maxDate() { return this._maxDate; }
    set maxDate(e) { this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)); }
    _maxDate = null;
    dateFilter;
    dateClass;
    selectedChange = new c;
    yearSelected = new c;
    activeDateChange = new c;
    _matCalendarBody;
    _years = h([]);
    _todayYear = h(0);
    _selectedYear = h(null);
    constructor() { this._dateAdapter, this._activeDate = this._dateAdapter.today(); }
    ngAfterContentInit() { this._rerenderSubscription = this._dateAdapter.localeChanges.pipe(ue(null)).subscribe(() => this._init()); }
    ngOnDestroy() { this._rerenderSubscription.unsubscribe(); }
    _init() { this._todayYear.set(this._dateAdapter.getYear(this._dateAdapter.today())); let a = this._dateAdapter.getYear(this._activeDate) - R(this._dateAdapter, this.activeDate, this.minDate, this.maxDate), t = []; for (let i = 0, s = []; i < m; i++)
        s.push(a + i), s.length == de && (t.push(s.map(l => this._createCellForYear(l))), s = []); this._years.set(t), this._changeDetectorRef.markForCheck(); }
    _yearSelected(e) { let a = e.value, t = this._dateAdapter.createDate(a, 0, 1), i = this._getDateFromYear(a); this.yearSelected.emit(t), this.selectedChange.emit(i); }
    _updateActiveDate(e) { let a = e.value, t = this._activeDate; this.activeDate = this._getDateFromYear(a), this._dateAdapter.compareDate(t, this.activeDate) && this.activeDateChange.emit(this.activeDate); }
    _handleCalendarBodyKeydown(e) { let a = this._activeDate, t = this._isRtl(); switch (e.keyCode) {
        case I:
            this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, t ? 1 : -1);
            break;
        case x:
            this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, t ? -1 : 1);
            break;
        case T:
            this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, -de);
            break;
        case P:
            this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, de);
            break;
        case pe:
            this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, -R(this._dateAdapter, this.activeDate, this.minDate, this.maxDate));
            break;
        case he:
            this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, m - R(this._dateAdapter, this.activeDate, this.minDate, this.maxDate) - 1);
            break;
        case G:
            this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, e.altKey ? -m * 10 : -m);
            break;
        case $:
            this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, e.altKey ? m * 10 : m);
            break;
        case M:
        case S:
            this._selectionKeyPressed = !0;
            break;
        default: return;
    } this._dateAdapter.compareDate(a, this.activeDate) && this.activeDateChange.emit(this.activeDate), this._focusActiveCellAfterViewChecked(), e.preventDefault(); }
    _handleCalendarBodyKeyup(e) { (e.keyCode === S || e.keyCode === M) && (this._selectionKeyPressed && this._yearSelected({ value: this._dateAdapter.getYear(this._activeDate), event: e }), this._selectionKeyPressed = !1); }
    _getActiveCell() { return R(this._dateAdapter, this.activeDate, this.minDate, this.maxDate); }
    _focusActiveCell() { this._matCalendarBody._focusActiveCell(); }
    _focusActiveCellAfterViewChecked() { this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked(); }
    _getDateFromYear(e) { let a = this._dateAdapter.getMonth(this.activeDate), t = this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(e, a, 1)); return this._dateAdapter.createDate(e, a, Math.min(this._dateAdapter.getDate(this.activeDate), t)); }
    _createCellForYear(e) { let a = this._dateAdapter.createDate(e, 0, 1), t = this._dateAdapter.getYearName(a), i = this.dateClass ? this.dateClass(a, "multi-year") : void 0; return new O(e, t, t, this._shouldEnableYear(e), i); }
    _shouldEnableYear(e) { if (e == null || this.maxDate && e > this._dateAdapter.getYear(this.maxDate) || this.minDate && e < this._dateAdapter.getYear(this.minDate))
        return !1; if (!this.dateFilter)
        return !0; let a = this._dateAdapter.createDate(e, 0, 1); for (let t = a; this._dateAdapter.getYear(t) == e; t = this._dateAdapter.addCalendarDays(t, 1))
        if (this.dateFilter(t))
            return !0; return !1; }
    _isRtl() { return this._dir && this._dir.value === "rtl"; }
    _setSelectedYear(e) { if (this._selectedYear.set(null), e instanceof p) {
        let a = e.start || e.end;
        a && this._selectedYear.set(this._dateAdapter.getYear(a));
    }
    else
        e && this._selectedYear.set(this._dateAdapter.getYear(e)); }
    static \u0275fac = function (a) { return new (a || r); };
    static \u0275cmp = n.\u0275\u0275defineComponent({ type: r, selectors: [["mat-multi-year-view"]], viewQuery: function (a, t) { if (a & 1 && n.\u0275\u0275viewQuery(V, 5), a & 2) {
            let i;
            n.\u0275\u0275queryRefresh(i = n.\u0275\u0275loadQuery()) && (t._matCalendarBody = i.first);
        } }, inputs: { activeDate: "activeDate", selected: "selected", minDate: "minDate", maxDate: "maxDate", dateFilter: "dateFilter", dateClass: "dateClass" }, outputs: { selectedChange: "selectedChange", yearSelected: "yearSelected", activeDateChange: "activeDateChange" }, exportAs: ["matMultiYearView"], decls: 5, vars: 7, consts: [["role", "grid", 1, "mat-calendar-table"], ["aria-hidden", "true", 1, "mat-calendar-table-header"], ["colspan", "4", 1, "mat-calendar-table-header-divider"], ["mat-calendar-body", "", 3, "selectedValueChange", "activeDateChange", "keyup", "keydown", "rows", "todayValue", "startValue", "endValue", "numCols", "cellAspectRatio", "activeCell"]], template: function (a, t) { a & 1 && (n.\u0275\u0275elementStart(0, "table", 0)(1, "thead", 1)(2, "tr"), n.\u0275\u0275element(3, "th", 2), n.\u0275\u0275elementEnd()(), n.\u0275\u0275elementStart(4, "tbody", 3), n.\u0275\u0275listener("selectedValueChange", function (s) { return t._yearSelected(s); })("activeDateChange", function (s) { return t._updateActiveDate(s); })("keyup", function (s) { return t._handleCalendarBodyKeyup(s); })("keydown", function (s) { return t._handleCalendarBodyKeydown(s); }), n.\u0275\u0275elementEnd()()), a & 2 && (n.\u0275\u0275advance(4), n.\u0275\u0275property("rows", t._years())("todayValue", t._todayYear())("startValue", t._selectedYear())("endValue", t._selectedYear())("numCols", 4)("cellAspectRatio", 4 / 7)("activeCell", t._getActiveCell())); }, dependencies: [V], encapsulation: 2 });
} return r; })();
function Qe(r, d, e, a, t) { let i = r.getYear(d), s = r.getYear(e), l = $e(r, a, t); return Math.floor((i - l) / m) === Math.floor((s - l) / m); }
function R(r, d, e, a) { let t = r.getYear(d); return $t(t - $e(r, e, a), m); }
function $e(r, d, e) { let a = 0; return e ? a = r.getYear(e) - m + 1 : d && (a = r.getYear(d)), a; }
function $t(r, d) { return (r % d + d) % d; }
var Ie = (() => { class r {
    _changeDetectorRef = o(g);
    _dateFormats = o(w, { optional: !0 });
    _dateAdapter = o(u, { optional: !0 });
    _dir = o(Y, { optional: !0 });
    _rerenderSubscription = _.EMPTY;
    _selectionKeyPressed = !1;
    get activeDate() { return this._activeDate; }
    set activeDate(e) { let a = this._activeDate, t = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)) || this._dateAdapter.today(); this._activeDate = this._dateAdapter.clampDate(t, this.minDate, this.maxDate), this._dateAdapter.getYear(a) !== this._dateAdapter.getYear(this._activeDate) && this._init(); }
    _activeDate;
    get selected() { return this._selected; }
    set selected(e) { e instanceof p ? this._selected = e : this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)), this._setSelectedMonth(e); }
    _selected = null;
    get minDate() { return this._minDate; }
    set minDate(e) { this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)); }
    _minDate = null;
    get maxDate() { return this._maxDate; }
    set maxDate(e) { this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)); }
    _maxDate = null;
    dateFilter;
    dateClass;
    selectedChange = new c;
    monthSelected = new c;
    activeDateChange = new c;
    _matCalendarBody;
    _months = h([]);
    _yearLabel = h("");
    _todayMonth = h(null);
    _selectedMonth = h(null);
    constructor() { this._activeDate = this._dateAdapter.today(); }
    ngAfterContentInit() { this._rerenderSubscription = this._dateAdapter.localeChanges.pipe(ue(null)).subscribe(() => this._init()); }
    ngOnDestroy() { this._rerenderSubscription.unsubscribe(); }
    _monthSelected(e) { let a = e.value, t = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), a, 1); this.monthSelected.emit(t); let i = this._getDateFromMonth(a); this.selectedChange.emit(i); }
    _updateActiveDate(e) { let a = e.value, t = this._activeDate; this.activeDate = this._getDateFromMonth(a), this._dateAdapter.compareDate(t, this.activeDate) && this.activeDateChange.emit(this.activeDate); }
    _handleCalendarBodyKeydown(e) { let a = this._activeDate, t = this._isRtl(); switch (e.keyCode) {
        case I:
            this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, t ? 1 : -1);
            break;
        case x:
            this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, t ? -1 : 1);
            break;
        case T:
            this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, -4);
            break;
        case P:
            this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, 4);
            break;
        case pe:
            this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, -this._dateAdapter.getMonth(this._activeDate));
            break;
        case he:
            this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, 11 - this._dateAdapter.getMonth(this._activeDate));
            break;
        case G:
            this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, e.altKey ? -10 : -1);
            break;
        case $:
            this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, e.altKey ? 10 : 1);
            break;
        case M:
        case S:
            this._selectionKeyPressed = !0;
            break;
        default: return;
    } this._dateAdapter.compareDate(a, this.activeDate) && (this.activeDateChange.emit(this.activeDate), this._focusActiveCellAfterViewChecked()), e.preventDefault(); }
    _handleCalendarBodyKeyup(e) { (e.keyCode === S || e.keyCode === M) && (this._selectionKeyPressed && this._monthSelected({ value: this._dateAdapter.getMonth(this._activeDate), event: e }), this._selectionKeyPressed = !1); }
    _init() { this._setSelectedMonth(this.selected), this._todayMonth.set(this._getMonthInCurrentYear(this._dateAdapter.today())), this._yearLabel.set(this._dateAdapter.getYearName(this.activeDate)); let e = this._dateAdapter.getMonthNames("short"); this._months.set([[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]].map(a => a.map(t => this._createCellForMonth(t, e[t])))), this._changeDetectorRef.markForCheck(); }
    _focusActiveCell() { this._matCalendarBody._focusActiveCell(); }
    _focusActiveCellAfterViewChecked() { this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked(); }
    _getMonthInCurrentYear(e) { return e && this._dateAdapter.getYear(e) == this._dateAdapter.getYear(this.activeDate) ? this._dateAdapter.getMonth(e) : null; }
    _getDateFromMonth(e) { let a = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), e, 1), t = this._dateAdapter.getNumDaysInMonth(a); return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), e, Math.min(this._dateAdapter.getDate(this.activeDate), t)); }
    _createCellForMonth(e, a) { let t = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), e, 1), i = this._dateAdapter.format(t, this._dateFormats.display.monthYearA11yLabel), s = this.dateClass ? this.dateClass(t, "year") : void 0; return new O(e, a.toLocaleUpperCase(), i, this._shouldEnableMonth(e), s); }
    _shouldEnableMonth(e) { let a = this._dateAdapter.getYear(this.activeDate); if (e == null || this._isYearAndMonthAfterMaxDate(a, e) || this._isYearAndMonthBeforeMinDate(a, e))
        return !1; if (!this.dateFilter)
        return !0; let t = this._dateAdapter.createDate(a, e, 1); for (let i = t; this._dateAdapter.getMonth(i) == e; i = this._dateAdapter.addCalendarDays(i, 1))
        if (this.dateFilter(i))
            return !0; return !1; }
    _isYearAndMonthAfterMaxDate(e, a) { if (this.maxDate) {
        let t = this._dateAdapter.getYear(this.maxDate), i = this._dateAdapter.getMonth(this.maxDate);
        return e > t || e === t && a > i;
    } return !1; }
    _isYearAndMonthBeforeMinDate(e, a) { if (this.minDate) {
        let t = this._dateAdapter.getYear(this.minDate), i = this._dateAdapter.getMonth(this.minDate);
        return e < t || e === t && a < i;
    } return !1; }
    _isRtl() { return this._dir && this._dir.value === "rtl"; }
    _setSelectedMonth(e) { e instanceof p ? this._selectedMonth.set(this._getMonthInCurrentYear(e.start) || this._getMonthInCurrentYear(e.end)) : this._selectedMonth.set(this._getMonthInCurrentYear(e)); }
    static \u0275fac = function (a) { return new (a || r); };
    static \u0275cmp = n.\u0275\u0275defineComponent({ type: r, selectors: [["mat-year-view"]], viewQuery: function (a, t) { if (a & 1 && n.\u0275\u0275viewQuery(V, 5), a & 2) {
            let i;
            n.\u0275\u0275queryRefresh(i = n.\u0275\u0275loadQuery()) && (t._matCalendarBody = i.first);
        } }, inputs: { activeDate: "activeDate", selected: "selected", minDate: "minDate", maxDate: "maxDate", dateFilter: "dateFilter", dateClass: "dateClass" }, outputs: { selectedChange: "selectedChange", monthSelected: "monthSelected", activeDateChange: "activeDateChange" }, exportAs: ["matYearView"], decls: 5, vars: 9, consts: [["role", "grid", 1, "mat-calendar-table"], ["aria-hidden", "true", 1, "mat-calendar-table-header"], ["colspan", "4", 1, "mat-calendar-table-header-divider"], ["mat-calendar-body", "", 3, "selectedValueChange", "activeDateChange", "keyup", "keydown", "label", "rows", "todayValue", "startValue", "endValue", "labelMinRequiredCells", "numCols", "cellAspectRatio", "activeCell"]], template: function (a, t) { a & 1 && (n.\u0275\u0275elementStart(0, "table", 0)(1, "thead", 1)(2, "tr"), n.\u0275\u0275element(3, "th", 2), n.\u0275\u0275elementEnd()(), n.\u0275\u0275elementStart(4, "tbody", 3), n.\u0275\u0275listener("selectedValueChange", function (s) { return t._monthSelected(s); })("activeDateChange", function (s) { return t._updateActiveDate(s); })("keyup", function (s) { return t._handleCalendarBodyKeyup(s); })("keydown", function (s) { return t._handleCalendarBodyKeydown(s); }), n.\u0275\u0275elementEnd()()), a & 2 && (n.\u0275\u0275advance(4), n.\u0275\u0275property("label", t._yearLabel())("rows", t._months())("todayValue", t._todayMonth())("startValue", t._selectedMonth())("endValue", t._selectedMonth())("labelMinRequiredCells", 2)("numCols", 4)("cellAspectRatio", 4 / 7)("activeCell", t._dateAdapter.getMonth(t.activeDate))); }, dependencies: [V], encapsulation: 2 });
} return r; })(), Ge = (() => { class r {
    _intl = o(F);
    calendar = o(le);
    _dateAdapter = o(u, { optional: !0 });
    _dateFormats = o(w, { optional: !0 });
    _periodButtonText;
    _periodButtonDescription;
    _periodButtonLabel;
    _prevButtonLabel;
    _nextButtonLabel;
    constructor() { o(U).load(me); let e = o(g); this._updateLabels(), this.calendar.stateChanges.subscribe(() => { this._updateLabels(), e.markForCheck(); }); }
    get periodButtonText() { return this._periodButtonText; }
    get periodButtonDescription() { return this._periodButtonDescription; }
    get periodButtonLabel() { return this._periodButtonLabel; }
    get prevButtonLabel() { return this._prevButtonLabel; }
    get nextButtonLabel() { return this._nextButtonLabel; }
    currentPeriodClicked() { this.calendar.currentView = this.calendar.currentView == "month" ? "multi-year" : "month"; }
    previousClicked() { this.previousEnabled() && (this.calendar.activeDate = this.calendar.currentView == "month" ? this._dateAdapter.addCalendarMonths(this.calendar.activeDate, -1) : this._dateAdapter.addCalendarYears(this.calendar.activeDate, this.calendar.currentView == "year" ? -1 : -m)); }
    nextClicked() { this.nextEnabled() && (this.calendar.activeDate = this.calendar.currentView == "month" ? this._dateAdapter.addCalendarMonths(this.calendar.activeDate, 1) : this._dateAdapter.addCalendarYears(this.calendar.activeDate, this.calendar.currentView == "year" ? 1 : m)); }
    previousEnabled() { return this.calendar.minDate ? !this.calendar.minDate || !this._isSameView(this.calendar.activeDate, this.calendar.minDate) : !0; }
    nextEnabled() { return !this.calendar.maxDate || !this._isSameView(this.calendar.activeDate, this.calendar.maxDate); }
    _updateLabels() { let e = this.calendar, a = this._intl, t = this._dateAdapter; e.currentView === "month" ? (this._periodButtonText = t.format(e.activeDate, this._dateFormats.display.monthYearLabel).toLocaleUpperCase(), this._periodButtonDescription = t.format(e.activeDate, this._dateFormats.display.monthYearLabel).toLocaleUpperCase(), this._periodButtonLabel = a.switchToMultiYearViewLabel, this._prevButtonLabel = a.prevMonthLabel, this._nextButtonLabel = a.nextMonthLabel) : e.currentView === "year" ? (this._periodButtonText = t.getYearName(e.activeDate), this._periodButtonDescription = t.getYearName(e.activeDate), this._periodButtonLabel = a.switchToMonthViewLabel, this._prevButtonLabel = a.prevYearLabel, this._nextButtonLabel = a.nextYearLabel) : (this._periodButtonText = a.formatYearRange(...this._formatMinAndMaxYearLabels()), this._periodButtonDescription = a.formatYearRangeLabel(...this._formatMinAndMaxYearLabels()), this._periodButtonLabel = a.switchToMonthViewLabel, this._prevButtonLabel = a.prevMultiYearLabel, this._nextButtonLabel = a.nextMultiYearLabel); }
    _isSameView(e, a) { return this.calendar.currentView == "month" ? this._dateAdapter.getYear(e) == this._dateAdapter.getYear(a) && this._dateAdapter.getMonth(e) == this._dateAdapter.getMonth(a) : this.calendar.currentView == "year" ? this._dateAdapter.getYear(e) == this._dateAdapter.getYear(a) : Qe(this._dateAdapter, e, a, this.calendar.minDate, this.calendar.maxDate); }
    _formatMinAndMaxYearLabels() { let a = this._dateAdapter.getYear(this.calendar.activeDate) - R(this._dateAdapter, this.calendar.activeDate, this.calendar.minDate, this.calendar.maxDate), t = a + m - 1, i = this._dateAdapter.getYearName(this._dateAdapter.createDate(a, 0, 1)), s = this._dateAdapter.getYearName(this._dateAdapter.createDate(t, 0, 1)); return [i, s]; }
    _periodButtonLabelId = o(Q).getId("mat-calendar-period-label-");
    static \u0275fac = function (a) { return new (a || r); };
    static \u0275cmp = n.\u0275\u0275defineComponent({ type: r, selectors: [["mat-calendar-header"]], exportAs: ["matCalendarHeader"], ngContentSelectors: We, decls: 17, vars: 13, consts: [[1, "mat-calendar-header"], [1, "mat-calendar-controls"], ["aria-live", "polite", 1, "cdk-visually-hidden", 3, "id"], ["matButton", "", "type", "button", 1, "mat-calendar-period-button", 3, "click"], ["aria-hidden", "true"], ["viewBox", "0 0 10 5", "focusable", "false", "aria-hidden", "true", 1, "mat-calendar-arrow"], ["points", "0,0 5,5 10,0"], [1, "mat-calendar-spacer"], ["matIconButton", "", "type", "button", "disabledInteractive", "", 1, "mat-calendar-previous-button", 3, "click", "disabled", "matTooltip"], ["viewBox", "0 0 24 24", "focusable", "false", "aria-hidden", "true"], ["d", "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"], ["matIconButton", "", "type", "button", "disabledInteractive", "", 1, "mat-calendar-next-button", 3, "click", "disabled", "matTooltip"], ["d", "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"]], template: function (a, t) { a & 1 && (n.\u0275\u0275projectionDef(), n.\u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2), n.\u0275\u0275text(3), n.\u0275\u0275elementEnd(), n.\u0275\u0275elementStart(4, "button", 3), n.\u0275\u0275listener("click", function () { return t.currentPeriodClicked(); }), n.\u0275\u0275elementStart(5, "span", 4), n.\u0275\u0275text(6), n.\u0275\u0275elementEnd(), n.\u0275\u0275namespaceSVG(), n.\u0275\u0275elementStart(7, "svg", 5), n.\u0275\u0275element(8, "polygon", 6), n.\u0275\u0275elementEnd()(), n.\u0275\u0275namespaceHTML(), n.\u0275\u0275element(9, "div", 7), n.\u0275\u0275projection(10), n.\u0275\u0275elementStart(11, "button", 8), n.\u0275\u0275listener("click", function () { return t.previousClicked(); }), n.\u0275\u0275namespaceSVG(), n.\u0275\u0275elementStart(12, "svg", 9), n.\u0275\u0275element(13, "path", 10), n.\u0275\u0275elementEnd()(), n.\u0275\u0275namespaceHTML(), n.\u0275\u0275elementStart(14, "button", 11), n.\u0275\u0275listener("click", function () { return t.nextClicked(); }), n.\u0275\u0275namespaceSVG(), n.\u0275\u0275elementStart(15, "svg", 9), n.\u0275\u0275element(16, "path", 12), n.\u0275\u0275elementEnd()()()()), a & 2 && (n.\u0275\u0275advance(2), n.\u0275\u0275property("id", t._periodButtonLabelId), n.\u0275\u0275advance(), n.\u0275\u0275textInterpolate(t.periodButtonDescription), n.\u0275\u0275advance(), n.\u0275\u0275attribute("aria-label", t.periodButtonLabel)("aria-describedby", t._periodButtonLabelId), n.\u0275\u0275advance(2), n.\u0275\u0275textInterpolate(t.periodButtonText), n.\u0275\u0275advance(), n.\u0275\u0275classProp("mat-calendar-invert", t.calendar.currentView !== "month"), n.\u0275\u0275advance(4), n.\u0275\u0275property("disabled", !t.previousEnabled())("matTooltip", t.prevButtonLabel), n.\u0275\u0275attribute("aria-label", t.prevButtonLabel), n.\u0275\u0275advance(3), n.\u0275\u0275property("disabled", !t.nextEnabled())("matTooltip", t.nextButtonLabel), n.\u0275\u0275attribute("aria-label", t.nextButtonLabel)); }, dependencies: [ee, J, ke], encapsulation: 2 });
} return r; })(), le = (() => {
    class r {
        _dateAdapter = o(u, { optional: !0 });
        _dateFormats = o(w, { optional: !0 });
        _changeDetectorRef = o(g);
        _elementRef = o(E);
        headerComponent;
        _calendarHeaderPortal;
        _intlChanges;
        _moveFocusOnNextTick = !1;
        get startAt() { return this._startAt; }
        set startAt(e) { this._startAt = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)); }
        _startAt = null;
        startView = "month";
        get selected() { return this._selected; }
        set selected(e) { e instanceof p ? this._selected = e : this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)); }
        _selected = null;
        get minDate() { return this._minDate; }
        set minDate(e) { this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)); }
        _minDate = null;
        get maxDate() { return this._maxDate; }
        set maxDate(e) { this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)); }
        _maxDate = null;
        dateFilter;
        dateClass;
        comparisonStart = null;
        comparisonEnd = null;
        startDateAccessibleName = null;
        endDateAccessibleName = null;
        selectedChange = new c;
        yearSelected = new c;
        monthSelected = new c;
        viewChanged = new c(!0);
        _userSelection = new c;
        _userDragDrop = new c;
        monthView;
        yearView;
        multiYearView;
        get activeDate() { return this._clampedActiveDate; }
        set activeDate(e) { this._clampedActiveDate = this._dateAdapter.clampDate(e, this.minDate, this.maxDate), this.stateChanges.next(), this._changeDetectorRef.markForCheck(); }
        _clampedActiveDate;
        get currentView() { return this._currentView; }
        set currentView(e) { let a = this._currentView !== e ? e : null; this._currentView = e, this._moveFocusOnNextTick = !0, this._changeDetectorRef.markForCheck(), a && (this.stateChanges.next(), this.viewChanged.emit(a)); }
        _currentView;
        _activeDrag = null;
        stateChanges = new v;
        constructor() { this._intlChanges = o(F).changes.subscribe(() => { this._changeDetectorRef.markForCheck(), this.stateChanges.next(); }); }
        ngAfterContentInit() { this._calendarHeaderPortal = new ze(this.headerComponent || Ge), this.activeDate = this.startAt || this._dateAdapter.today(), this._currentView = this.startView; }
        ngAfterViewChecked() { this._moveFocusOnNextTick && (this._moveFocusOnNextTick = !1, this.focusActiveCell()); }
        ngOnDestroy() { this._intlChanges.unsubscribe(), this.stateChanges.complete(); }
        ngOnChanges(e) { let a = e.minDate && !this._dateAdapter.sameDate(e.minDate.previousValue, e.minDate.currentValue) ? e.minDate : void 0, t = e.maxDate && !this._dateAdapter.sameDate(e.maxDate.previousValue, e.maxDate.currentValue) ? e.maxDate : void 0, i = a || t || e.dateFilter; if (i && !i.firstChange) {
            let s = this._getCurrentViewComponent();
            s && (this._elementRef.nativeElement.contains(He()) && (this._moveFocusOnNextTick = !0), this._changeDetectorRef.detectChanges(), s._init());
        } this.stateChanges.next(); }
        focusActiveCell() { this._getCurrentViewComponent()?._focusActiveCell(!1); }
        updateTodaysDate() { this._getCurrentViewComponent()?._init(); }
        _dateSelected(e) { let a = e.value; (this.selected instanceof p || a && !this._dateAdapter.sameDate(a, this.selected)) && this.selectedChange.emit(a), this._userSelection.emit(e); }
        _yearSelectedInMultiYearView(e) { this.yearSelected.emit(e); }
        _monthSelectedInYearView(e) { this.monthSelected.emit(e); }
        _goToDateInView(e, a) { this.activeDate = e, this.currentView = a; }
        _dragStarted(e) { this._activeDrag = e; }
        _dragEnded(e) { this._activeDrag && (e.value && this._userDragDrop.emit(e), this._activeDrag = null); }
        _getCurrentViewComponent() { return this.monthView || this.yearView || this.multiYearView; }
        static \u0275fac = function (a) { return new (a || r); };
        static \u0275cmp = n.\u0275\u0275defineComponent({ type: r, selectors: [["mat-calendar"]], viewQuery: function (a, t) { if (a & 1 && n.\u0275\u0275viewQuery(Ee, 5)(Ie, 5)(xe, 5), a & 2) {
                let i;
                n.\u0275\u0275queryRefresh(i = n.\u0275\u0275loadQuery()) && (t.monthView = i.first), n.\u0275\u0275queryRefresh(i = n.\u0275\u0275loadQuery()) && (t.yearView = i.first), n.\u0275\u0275queryRefresh(i = n.\u0275\u0275loadQuery()) && (t.multiYearView = i.first);
            } }, hostAttrs: [1, "mat-calendar"], inputs: { headerComponent: "headerComponent", startAt: "startAt", startView: "startView", selected: "selected", minDate: "minDate", maxDate: "maxDate", dateFilter: "dateFilter", dateClass: "dateClass", comparisonStart: "comparisonStart", comparisonEnd: "comparisonEnd", startDateAccessibleName: "startDateAccessibleName", endDateAccessibleName: "endDateAccessibleName" }, outputs: { selectedChange: "selectedChange", yearSelected: "yearSelected", monthSelected: "monthSelected", viewChanged: "viewChanged", _userSelection: "_userSelection", _userDragDrop: "_userDragDrop" }, exportAs: ["matCalendar"], features: [n.\u0275\u0275ProvidersFeature([qe]), n.\u0275\u0275NgOnChangesFeature], decls: 5, vars: 2, consts: [[3, "cdkPortalOutlet"], ["cdkMonitorSubtreeFocus", "", "tabindex", "-1", 1, "mat-calendar-content"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "comparisonStart", "comparisonEnd", "startDateAccessibleName", "endDateAccessibleName", "activeDrag"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass"], [3, "activeDateChange", "_userSelection", "dragStarted", "dragEnded", "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "comparisonStart", "comparisonEnd", "startDateAccessibleName", "endDateAccessibleName", "activeDrag"], [3, "activeDateChange", "monthSelected", "selectedChange", "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass"], [3, "activeDateChange", "yearSelected", "selectedChange", "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass"]], template: function (a, t) { if (a & 1 && (n.\u0275\u0275template(0, Et, 0, 0, "ng-template", 0), n.\u0275\u0275elementStart(1, "div", 1), n.\u0275\u0275conditionalCreate(2, xt, 1, 11, "mat-month-view", 2)(3, It, 1, 6, "mat-year-view", 3)(4, Ft, 1, 6, "mat-multi-year-view", 3), n.\u0275\u0275elementEnd()), a & 2) {
                let i;
                n.\u0275\u0275property("cdkPortalOutlet", t._calendarHeaderPortal), n.\u0275\u0275advance(2), n.\u0275\u0275conditional((i = t.currentView) === "month" ? 2 : i === "year" ? 3 : i === "multi-year" ? 4 : -1);
            } }, dependencies: [Ke, Le, Ee, Ie, xe], styles: [`.mat-calendar {
  display: block;
  line-height: normal;
  font-family: var(--%NS%mat-datepicker-calendar-text-font, var(--%NS%mat-sys-body-medium-font));
  font-size: var(--%NS%mat-datepicker-calendar-text-size, var(--%NS%mat-sys-body-medium-size));
}

.mat-calendar-header {
  padding: 8px 8px 0 8px;
}

.mat-calendar-content {
  padding: 0 8px 8px 8px;
  outline: none;
}

.mat-calendar-controls {
  display: flex;
  align-items: center;
  margin: 5% calc(4.7142857143% - 16px);
}

.mat-calendar-spacer {
  flex: 1 1 auto;
}

.mat-calendar-period-button {
  min-width: 0;
  margin: 0 8px;
  font-size: var(--%NS%mat-datepicker-calendar-period-button-text-size, var(--%NS%mat-sys-title-small-size));
  font-weight: var(--%NS%mat-datepicker-calendar-period-button-text-weight, var(--%NS%mat-sys-title-small-weight));
  --%NS%mat-button-text-label-text-color: var(--%NS%mat-datepicker-calendar-period-button-text-color, var(--%NS%mat-sys-on-surface-variant));
}

.mat-calendar-arrow {
  display: inline-block;
  width: 10px;
  height: 5px;
  margin: 0 0 0 5px;
  vertical-align: middle;
  fill: var(--%NS%mat-datepicker-calendar-period-button-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-calendar-arrow.mat-calendar-invert {
  transform: rotate(180deg);
}
[dir=rtl] .mat-calendar-arrow {
  margin: 0 5px 0 0;
}
@media (forced-colors: active) {
  .mat-calendar-arrow {
    fill: CanvasText;
  }
}

.mat-datepicker-content .mat-calendar-previous-button:not(.mat-mdc-button-disabled),
.mat-datepicker-content .mat-calendar-next-button:not(.mat-mdc-button-disabled) {
  color: var(--%NS%mat-datepicker-calendar-navigation-button-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
[dir=rtl] .mat-calendar-previous-button,
[dir=rtl] .mat-calendar-next-button {
  transform: rotate(180deg);
}

.mat-calendar-table {
  border-spacing: 0;
  border-collapse: collapse;
  width: 100%;
}

.mat-calendar-table-header th {
  text-align: center;
  padding: 0 0 8px 0;
  color: var(--%NS%mat-datepicker-calendar-header-text-color, var(--%NS%mat-sys-on-surface-variant));
  font-size: var(--%NS%mat-datepicker-calendar-header-text-size, var(--%NS%mat-sys-title-small-size));
  font-weight: var(--%NS%mat-datepicker-calendar-header-text-weight, var(--%NS%mat-sys-title-small-weight));
}

.mat-calendar-table-header-divider {
  position: relative;
  height: 1px;
}
.mat-calendar-table-header-divider::after {
  content: "";
  position: absolute;
  top: 0;
  left: -8px;
  right: -8px;
  height: 1px;
  background: var(--%NS%mat-datepicker-calendar-header-divider-color, transparent);
}

.mat-calendar-body-cell-content::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-calendar-body-cell:focus-visible .mat-focus-indicator::before {
  content: "";
}
`], encapsulation: 2 });
    }
    return r;
})(), Gt = new Oe("mat-datepicker-scroll-strategy", { providedIn: "root", factory: () => { let r = o(q); return () => lt(r); } }), Ue = (() => {
    class r {
        _elementRef = o(E);
        _animationsDisabled = X();
        _changeDetectorRef = o(g);
        _globalModel = o(b);
        _dateAdapter = o(u);
        _ngZone = o(Ne);
        _rangeSelectionStrategy = o(W, { optional: !0 });
        _stateChanges;
        _model;
        _eventCleanups;
        _animationFallback;
        _calendar;
        color;
        datepicker;
        comparisonStart = null;
        comparisonEnd = null;
        startDateAccessibleName = null;
        endDateAccessibleName = null;
        _isAbove = !1;
        _animationDone = new v;
        _isAnimating = !1;
        _closeButtonText;
        _closeButtonFocused = !1;
        _actionsPortal = null;
        _dialogLabelId = null;
        constructor() { if (o(U).load(me), this._closeButtonText = o(F).closeCalendarLabel, !this._animationsDisabled) {
            let e = this._elementRef.nativeElement, a = o(Re);
            this._eventCleanups = this._ngZone.runOutsideAngular(() => [a.listen(e, "animationstart", this._handleAnimationEvent), a.listen(e, "animationend", this._handleAnimationEvent), a.listen(e, "animationcancel", this._handleAnimationEvent)]);
        } }
        ngAfterViewInit() { this._stateChanges = this.datepicker.stateChanges.subscribe(() => { this._changeDetectorRef.markForCheck(); }), this._calendar.focusActiveCell(); }
        ngOnDestroy() { clearTimeout(this._animationFallback), this._eventCleanups?.forEach(e => e()), this._stateChanges?.unsubscribe(), this._animationDone.complete(); }
        _handleUserSelection(e) { let a = this._model.selection, t = e.value, i = a instanceof p; if (i && this._rangeSelectionStrategy) {
            let s = this._rangeSelectionStrategy.selectionFinished(t, a, e.event);
            this._model.updateSelection(s, this);
        }
        else
            t && (i || !this._dateAdapter.sameDate(t, a)) && this._model.add(t); (!this._model || this._model.isComplete()) && !this._actionsPortal && this.datepicker.close(); }
        _handleUserDragDrop(e) { this._model.updateSelection(e.value, this); }
        _startExitAnimation() { this._elementRef.nativeElement.classList.add("mat-datepicker-content-exit"), this._animationsDisabled ? this._animationDone.next() : (clearTimeout(this._animationFallback), this._animationFallback = setTimeout(() => { this._isAnimating || this._animationDone.next(); }, 200)); }
        _handleAnimationEvent = e => { let a = this._elementRef.nativeElement; e.target !== a || !e.animationName.startsWith("_mat-datepicker-content") || (clearTimeout(this._animationFallback), this._isAnimating = e.type === "animationstart", a.classList.toggle("mat-datepicker-content-animating", this._isAnimating), this._isAnimating || this._animationDone.next()); };
        _getSelected() { return this._model.selection; }
        _applyPendingSelection() { this._model !== this._globalModel && this._globalModel.updateSelection(this._model.selection, this); }
        _assignActions(e, a) { this._model = e ? this._globalModel.clone() : this._globalModel, this._actionsPortal = e, a && this._changeDetectorRef.detectChanges(); }
        static \u0275fac = function (a) { return new (a || r); };
        static \u0275cmp = n.\u0275\u0275defineComponent({ type: r, selectors: [["mat-datepicker-content"]], viewQuery: function (a, t) { if (a & 1 && n.\u0275\u0275viewQuery(le, 5), a & 2) {
                let i;
                n.\u0275\u0275queryRefresh(i = n.\u0275\u0275loadQuery()) && (t._calendar = i.first);
            } }, hostAttrs: [1, "mat-datepicker-content"], hostVars: 6, hostBindings: function (a, t) { a & 2 && (n.\u0275\u0275classMap(t.color ? "mat-" + t.color : ""), n.\u0275\u0275classProp("mat-datepicker-content-touch", t.datepicker.touchUi)("mat-datepicker-content-animations-enabled", !t._animationsDisabled)); }, inputs: { color: "color" }, exportAs: ["matDatepickerContent"], decls: 5, vars: 26, consts: [["cdkTrapFocus", "", "role", "dialog", 1, "mat-datepicker-content-container"], [3, "yearSelected", "monthSelected", "viewChanged", "_userSelection", "_userDragDrop", "id", "startAt", "startView", "minDate", "maxDate", "dateFilter", "headerComponent", "selected", "dateClass", "comparisonStart", "comparisonEnd", "startDateAccessibleName", "endDateAccessibleName"], [3, "cdkPortalOutlet"], ["type", "button", "matButton", "elevated", 1, "mat-datepicker-close-button", 3, "focus", "blur", "click", "color"]], template: function (a, t) { a & 1 && (n.\u0275\u0275elementStart(0, "div", 0)(1, "mat-calendar", 1), n.\u0275\u0275listener("yearSelected", function (s) { return t.datepicker._selectYear(s); })("monthSelected", function (s) { return t.datepicker._selectMonth(s); })("viewChanged", function (s) { return t.datepicker._viewChanged(s); })("_userSelection", function (s) { return t._handleUserSelection(s); })("_userDragDrop", function (s) { return t._handleUserDragDrop(s); }), n.\u0275\u0275elementEnd(), n.\u0275\u0275template(2, Nt, 0, 0, "ng-template", 2), n.\u0275\u0275elementStart(3, "button", 3), n.\u0275\u0275listener("focus", function () { return t._closeButtonFocused = !0; })("blur", function () { return t._closeButtonFocused = !1; })("click", function () { return t.datepicker.close(); }), n.\u0275\u0275text(4), n.\u0275\u0275elementEnd()()), a & 2 && (n.\u0275\u0275classProp("mat-datepicker-content-container-with-custom-header", t.datepicker.calendarHeaderComponent)("mat-datepicker-content-container-with-actions", t._actionsPortal), n.\u0275\u0275attribute("aria-modal", !0)("aria-labelledby", t._dialogLabelId ?? void 0), n.\u0275\u0275advance(), n.\u0275\u0275classMap(t.datepicker.panelClass), n.\u0275\u0275property("id", t.datepicker.id)("startAt", t.datepicker.startAt)("startView", t.datepicker.startView)("minDate", t.datepicker._getMinDate())("maxDate", t.datepicker._getMaxDate())("dateFilter", t.datepicker._getDateFilter())("headerComponent", t.datepicker.calendarHeaderComponent)("selected", t._getSelected())("dateClass", t.datepicker.dateClass)("comparisonStart", t.comparisonStart)("comparisonEnd", t.comparisonEnd)("startDateAccessibleName", t.startDateAccessibleName)("endDateAccessibleName", t.endDateAccessibleName), n.\u0275\u0275advance(), n.\u0275\u0275property("cdkPortalOutlet", t._actionsPortal), n.\u0275\u0275advance(), n.\u0275\u0275classProp("cdk-visually-hidden", !t._closeButtonFocused), n.\u0275\u0275property("color", t.color || "primary"), n.\u0275\u0275advance(), n.\u0275\u0275textInterpolate(t._closeButtonText)); }, dependencies: [it, le, Ke, ee], styles: [`@keyframes _mat-datepicker-content-dropdown-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-dialog-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-datepicker-content {
  display: block;
  background-color: var(--%NS%mat-datepicker-calendar-container-background-color, var(--%NS%mat-sys-surface-container-high));
  color: var(--%NS%mat-datepicker-calendar-container-text-color, var(--%NS%mat-sys-on-surface));
  box-shadow: var(--%NS%mat-datepicker-calendar-container-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--%NS%mat-datepicker-calendar-container-shape, var(--%NS%mat-sys-corner-large));
}
.mat-datepicker-content.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dropdown-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content .mat-calendar {
  width: 296px;
  height: 354px;
}
.mat-datepicker-content .mat-datepicker-content-container-with-custom-header .mat-calendar {
  height: auto;
}
.mat-datepicker-content .mat-datepicker-close-button {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 8px;
}
.mat-datepicker-content-animating .mat-datepicker-content .mat-datepicker-close-button {
  display: none;
}

.mat-datepicker-content-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.mat-datepicker-content-touch {
  display: block;
  max-height: 80vh;
  box-shadow: var(--%NS%mat-datepicker-calendar-container-touch-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--%NS%mat-datepicker-calendar-container-touch-shape, var(--%NS%mat-sys-corner-extra-large));
  position: relative;
  overflow: visible;
  min-height: fit-content;
}
.mat-datepicker-content-touch.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dialog-enter 150ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content-touch .mat-datepicker-content-container {
  min-height: fit-content;
  max-height: 788px;
  min-width: 250px;
  max-width: 750px;
}
.mat-datepicker-content-touch .mat-calendar {
  width: 100%;
  height: auto;
}

.mat-datepicker-content-exit.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-exit 100ms linear;
}

@media all and (orientation: landscape) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 64vh;
    height: 80vh;
  }
}
@media all and (orientation: portrait) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 80vw;
    height: 100vw;
  }
}
`], encapsulation: 2 });
    }
    return r;
})(), D = (() => { class r {
    _injector = o(q);
    _viewContainerRef = o(Ye);
    _dateAdapter = o(u, { optional: !0 });
    _dir = o(Y, { optional: !0 });
    _model = o(b);
    _animationsDisabled = X();
    _scrollStrategy = o(Gt);
    _inputStateChanges = _.EMPTY;
    _document = o(tt);
    calendarHeaderComponent;
    get startAt() { return this._startAt || (this.datepickerInput ? this.datepickerInput.getStartValue() : null); }
    set startAt(e) { this._startAt = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)); }
    _startAt = null;
    startView = "month";
    get color() { return this._color || (this.datepickerInput ? this.datepickerInput.getThemePalette() : void 0); }
    set color(e) { this._color = e; }
    _color;
    touchUi = !1;
    get disabled() { return this._disabled === void 0 && this.datepickerInput ? this.datepickerInput.disabled : !!this._disabled; }
    set disabled(e) { e !== this._disabled && (this._disabled = e, this.stateChanges.next(void 0)); }
    _disabled;
    xPosition = "start";
    yPosition = "below";
    restoreFocus = !0;
    yearSelected = new c;
    monthSelected = new c;
    viewChanged = new c(!0);
    dateClass;
    openedStream = new c;
    closedStream = new c;
    get panelClass() { return this._panelClass; }
    set panelClass(e) { this._panelClass = ot(e); }
    _panelClass;
    get opened() { return this._opened; }
    set opened(e) { e ? this.open() : this.close(); }
    _opened = !1;
    id = o(Q).getId("mat-datepicker-");
    _getMinDate() { return this.datepickerInput && this.datepickerInput.min; }
    _getMaxDate() { return this.datepickerInput && this.datepickerInput.max; }
    _getDateFilter() { return this.datepickerInput && this.datepickerInput.dateFilter; }
    _overlayRef = null;
    _componentRef = null;
    _focusedElementBeforeOpen = null;
    _backdropHarnessClass = `${this.id}-backdrop`;
    _actionsPortal = null;
    datepickerInput;
    stateChanges = new v;
    _changeDetectorRef = o(g);
    constructor() { this._dateAdapter, this._model.selectionChanged.subscribe(() => { this._changeDetectorRef.markForCheck(); }); }
    ngOnChanges(e) { let a = e.xPosition || e.yPosition; if (a && !a.firstChange && this._overlayRef) {
        let t = this._overlayRef.getConfig().positionStrategy;
        t instanceof ct && (this._setConnectedPositions(t), this.opened && this._overlayRef.updatePosition());
    } this.stateChanges.next(void 0); }
    ngOnDestroy() { this._destroyOverlay(), this.close(), this._inputStateChanges.unsubscribe(), this.stateChanges.complete(); }
    select(e) { this._model.add(e); }
    _selectYear(e) { this.yearSelected.emit(e); }
    _selectMonth(e) { this.monthSelected.emit(e); }
    _viewChanged(e) { this.viewChanged.emit(e); }
    registerInput(e) { return this.datepickerInput, this._inputStateChanges.unsubscribe(), this.datepickerInput = e, this._inputStateChanges = e.stateChanges.subscribe(() => this.stateChanges.next(void 0)), this._model; }
    registerActions(e) { this._actionsPortal, this._actionsPortal = e, this._componentRef?.instance._assignActions(e, !0); }
    removeActions(e) { e === this._actionsPortal && (this._actionsPortal = null, this._componentRef?.instance._assignActions(null, !0)); }
    open() { this._opened || this.disabled || this._componentRef?.instance._isAnimating || (this.datepickerInput, this._focusedElementBeforeOpen = He(), this._openOverlay(), this._opened = !0, this.openedStream.emit()); }
    close() { if (!this._opened || this._componentRef?.instance._isAnimating)
        return; let e = this.restoreFocus && this._focusedElementBeforeOpen && typeof this._focusedElementBeforeOpen.focus == "function", a = () => { this._opened && (this._opened = !1, this.closedStream.emit()); }; if (this._componentRef) {
        let { instance: t, location: i } = this._componentRef;
        t._animationDone.pipe(vt(1)).subscribe(() => { let s = this._document.activeElement; e && (!s || s === this._document.activeElement || i.nativeElement.contains(s)) && this._focusedElementBeforeOpen.focus(), this._focusedElementBeforeOpen = null, this._destroyOverlay(); }), t._startExitAnimation();
    } e ? setTimeout(a) : a(); }
    _applyPendingSelection() { this._componentRef?.instance?._applyPendingSelection(); }
    _forwardContentValues(e) { e.datepicker = this, e.color = this.color, e._dialogLabelId = this.datepickerInput.getOverlayLabelId(), e._assignActions(this._actionsPortal, !1); }
    _openOverlay() { this._destroyOverlay(); let e = this.touchUi, a = new ze(Ue, this._viewContainerRef), t = this._overlayRef = ht(this._injector, new pt({ positionStrategy: e ? this._getDialogStrategy() : this._getDropdownStrategy(), hasBackdrop: !0, backdropClass: [e ? "cdk-overlay-dark-backdrop" : "mat-overlay-transparent-backdrop", this._backdropHarnessClass], direction: this._dir || "ltr", scrollStrategy: e ? ut(this._injector) : this._scrollStrategy(), panelClass: `mat-datepicker-${e ? "dialog" : "popup"}`, disableAnimations: this._animationsDisabled })); this._getCloseStream(t).subscribe(i => { i && i.preventDefault(), this.close(); }), t.keydownEvents().subscribe(i => { let s = i.keyCode; (s === T || s === P || s === I || s === x || s === G || s === $) && i.preventDefault(); }), this._componentRef = t.attach(a), this._forwardContentValues(this._componentRef.instance), e || Te(() => { t.updatePosition(); }, { injector: this._injector }); }
    _destroyOverlay() { this._overlayRef && (this._overlayRef.dispose(), this._overlayRef = this._componentRef = null); }
    _getDialogStrategy() { return mt(this._injector).centerHorizontally().centerVertically(); }
    _getDropdownStrategy() { let e = _t(this._injector, this.datepickerInput.getConnectedOverlayOrigin()).withTransformOriginOn(".mat-datepicker-content").withFlexibleDimensions(!1).withViewportMargin(8).withLockedPosition(); return this._setConnectedPositions(e); }
    _setConnectedPositions(e) { let a = this.xPosition === "end" ? "end" : "start", t = a === "start" ? "end" : "start", i = this.yPosition === "above" ? "bottom" : "top", s = i === "top" ? "bottom" : "top"; return e.withPositions([{ originX: a, originY: s, overlayX: a, overlayY: i }, { originX: a, originY: i, overlayX: a, overlayY: s }, { originX: t, originY: s, overlayX: t, overlayY: i }, { originX: t, originY: i, overlayX: t, overlayY: s }]); }
    _getCloseStream(e) { let a = ["ctrlKey", "shiftKey", "metaKey"]; return j(e.backdropClick(), e.detachments(), e.keydownEvents().pipe(yt(t => t.keyCode === Be && !k(t) || this.datepickerInput && k(t, "altKey") && t.keyCode === T && a.every(i => !k(t, i))))); }
    static \u0275fac = function (a) { return new (a || r); };
    static \u0275dir = n.\u0275\u0275defineDirective({ type: r, inputs: { calendarHeaderComponent: "calendarHeaderComponent", startAt: "startAt", startView: "startView", color: "color", touchUi: [2, "touchUi", "touchUi", f], disabled: [2, "disabled", "disabled", f], xPosition: "xPosition", yPosition: "yPosition", restoreFocus: [2, "restoreFocus", "restoreFocus", f], dateClass: "dateClass", panelClass: "panelClass", opened: [2, "opened", "opened", f] }, outputs: { yearSelected: "yearSelected", monthSelected: "monthSelected", viewChanged: "viewChanged", openedStream: "opened", closedStream: "closed" }, features: [n.\u0275\u0275NgOnChangesFeature] });
} return r; })(), Ha = (() => { class r extends D {
    static \u0275fac = (() => { let e; return function (t) { return (e || (e = n.\u0275\u0275getInheritedFactory(r)))(t || r); }; })();
    static \u0275cmp = n.\u0275\u0275defineComponent({ type: r, selectors: [["mat-datepicker"]], exportAs: ["matDatepicker"], features: [n.\u0275\u0275ProvidersFeature([qe, { provide: D, useExisting: r }]), n.\u0275\u0275InheritDefinitionFeature], decls: 0, vars: 0, template: function (a, t) { }, encapsulation: 2 });
} return r; })(), A = class {
    target;
    targetElement;
    value = null;
    constructor(d, e) { this.target = d, this.targetElement = e, this.value = this.target.value; }
}, Xe = (() => { class r {
    _elementRef = o(E);
    _dateAdapter = o(u, { optional: !0 });
    _dateFormats = o(w, { optional: !0 });
    _isInitialized = !1;
    get value() { return this._model ? this._getValueFromModel(this._model.selection) : this._pendingValue; }
    set value(e) { this._assignValueProgrammatically(e, !0); }
    _model;
    get disabled() { return !!this._disabled || this._parentDisabled(); }
    set disabled(e) { let a = e, t = this._elementRef.nativeElement; this._disabled !== a && (this._disabled = a, this.stateChanges.next(void 0)), a && this._isInitialized && t.blur && t.blur(); }
    _disabled;
    dateChange = new c;
    dateInput = new c;
    stateChanges = new v;
    _onTouched = () => { };
    _validatorOnChange = () => { };
    _cvaOnChange = () => { };
    _valueChangesSubscription = _.EMPTY;
    _localeSubscription = _.EMPTY;
    _pendingValue = null;
    _parseValidator = () => this._lastValueValid ? null : { matDatepickerParse: { text: this._elementRef.nativeElement.value } };
    _filterValidator = e => { let a = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)); return !a || this._matchesFilter(a) ? null : { matDatepickerFilter: !0 }; };
    _minValidator = e => { let a = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)), t = this._getMinDate(); return !t || !a || this._dateAdapter.compareDate(t, a) <= 0 ? null : { matDatepickerMin: { min: t, actual: a } }; };
    _maxValidator = e => { let a = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)), t = this._getMaxDate(); return !t || !a || this._dateAdapter.compareDate(t, a) >= 0 ? null : { matDatepickerMax: { max: t, actual: a } }; };
    _getValidators() { return [this._parseValidator, this._minValidator, this._maxValidator, this._filterValidator]; }
    _registerModel(e) { this._model = e, this._valueChangesSubscription.unsubscribe(), this._pendingValue && this._assignValue(this._pendingValue), this._valueChangesSubscription = this._model.selectionChanged.subscribe(a => { if (this._shouldHandleChangeEvent(a)) {
        let t = this._getValueFromModel(a.selection);
        this._lastValueValid = this._isValidValue(t), this._cvaOnChange(t), this._onTouched(), this._formatValue(t), this.dateInput.emit(new A(this, this._elementRef.nativeElement)), this.dateChange.emit(new A(this, this._elementRef.nativeElement));
    } }); }
    _lastValueValid = !1;
    constructor() { this._localeSubscription = this._dateAdapter.localeChanges.subscribe(() => { this._assignValueProgrammatically(this.value, !0); }); }
    ngAfterViewInit() { this._isInitialized = !0; }
    ngOnChanges(e) { Ze(e, this._dateAdapter) && this.stateChanges.next(void 0); }
    ngOnDestroy() { this._valueChangesSubscription.unsubscribe(), this._localeSubscription.unsubscribe(), this.stateChanges.complete(); }
    registerOnValidatorChange(e) { this._validatorOnChange = e; }
    validate(e) { return this._validator ? this._validator(e) : null; }
    writeValue(e) { this._assignValueProgrammatically(e, e !== this.value); }
    registerOnChange(e) { this._cvaOnChange = e; }
    registerOnTouched(e) { this._onTouched = e; }
    setDisabledState(e) { this.disabled = e; }
    _onKeydown(e) { let a = ["ctrlKey", "shiftKey", "metaKey"]; k(e, "altKey") && e.keyCode === P && a.every(i => !k(e, i)) && !this._elementRef.nativeElement.readOnly && (this._openPopup(), e.preventDefault()); }
    _onInput(e) { let a = e.target.value, t = this._lastValueValid, i = this._dateAdapter.parse(a, this._dateFormats.parse.dateInput); this._lastValueValid = this._isValidValue(i), i = this._dateAdapter.getValidDateOrNull(i); let s = !this._dateAdapter.sameDate(i, this.value); !i || s ? this._cvaOnChange(i) : (a && !this.value && this._cvaOnChange(i), t !== this._lastValueValid && this._validatorOnChange()), s && (this._assignValue(i), this.dateInput.emit(new A(this, this._elementRef.nativeElement))); }
    _onChange() { this.dateChange.emit(new A(this, this._elementRef.nativeElement)); }
    _onBlur() { this.value && this._formatValue(this.value), this._onTouched(); }
    _formatValue(e) { this._elementRef.nativeElement.value = e != null ? this._dateAdapter.format(e, this._dateFormats.display.dateInput) : ""; }
    _assignValue(e) { this._model ? (this._assignValueToModel(e), this._pendingValue = null) : this._pendingValue = e; }
    _isValidValue(e) { return !e || this._dateAdapter.isValid(e); }
    _parentDisabled() { return !1; }
    _assignValueProgrammatically(e, a) { e = this._dateAdapter.deserialize(e), this._lastValueValid = this._isValidValue(e), e = this._dateAdapter.getValidDateOrNull(e), this._assignValue(e), a && this._formatValue(e); }
    _matchesFilter(e) { let a = this._getDateFilter(); return !a || a(e); }
    static \u0275fac = function (a) { return new (a || r); };
    static \u0275dir = n.\u0275\u0275defineDirective({ type: r, inputs: { value: "value", disabled: [2, "disabled", "disabled", f] }, outputs: { dateChange: "dateChange", dateInput: "dateInput" }, features: [n.\u0275\u0275NgOnChangesFeature] });
} return r; })();
function Ze(r, d) { let e = Object.keys(r); for (let a of e) {
    let { previousValue: t, currentValue: i } = r[a];
    if (d.isDateInstance(t) && d.isDateInstance(i)) {
        if (!d.sameDate(t, i))
            return !0;
    }
    else
        return !0;
} return !1; }
var Ut = { provide: H, useExisting: Pe(() => Je), multi: !0 }, Xt = { provide: z, useExisting: Pe(() => Je), multi: !0 }, Je = (() => { class r extends Xe {
    _formField = o(Z, { optional: !0 });
    _closedSubscription = _.EMPTY;
    _openedSubscription = _.EMPTY;
    set matDatepicker(e) { e && (this._datepicker = e, this._ariaOwns.set(e.opened ? e.id : null), this._closedSubscription = e.closedStream.subscribe(() => { this._onTouched(), this._ariaOwns.set(null); }), this._openedSubscription = e.openedStream.subscribe(() => { this._ariaOwns.set(e.id); }), this._registerModel(e.registerInput(this))); }
    _datepicker;
    _ariaOwns = h(null);
    get min() { return this._min; }
    set min(e) { let a = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)); this._dateAdapter.sameDate(a, this._min) || (this._min = a, this._validatorOnChange()); }
    _min = null;
    get max() { return this._max; }
    set max(e) { let a = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)); this._dateAdapter.sameDate(a, this._max) || (this._max = a, this._validatorOnChange()); }
    _max = null;
    get dateFilter() { return this._dateFilter; }
    set dateFilter(e) { let a = this._matchesFilter(this.value); this._dateFilter = e, this._matchesFilter(this.value) !== a && this._validatorOnChange(); }
    _dateFilter;
    _validator = null;
    constructor() { super(), this._validator = N.compose(super._getValidators()); }
    getConnectedOverlayOrigin() { return this._formField ? this._formField.getConnectedOverlayOrigin() : this._elementRef; }
    getOverlayLabelId() { return this._formField ? this._formField.getLabelId() : this._elementRef.nativeElement.getAttribute("aria-labelledby"); }
    getThemePalette() { return this._formField ? this._formField.color : void 0; }
    getStartValue() { return this.value; }
    ngOnDestroy() { super.ngOnDestroy(), this._closedSubscription.unsubscribe(), this._openedSubscription.unsubscribe(); }
    _openPopup() { this._datepicker && this._datepicker.open(); }
    _getValueFromModel(e) { return e; }
    _assignValueToModel(e) { this._model && this._model.updateSelection(e, this); }
    _getMinDate() { return this._min; }
    _getMaxDate() { return this._max; }
    _getDateFilter() { return this._dateFilter; }
    _shouldHandleChangeEvent(e) { return e.source !== this; }
    static \u0275fac = function (a) { return new (a || r); };
    static \u0275dir = n.\u0275\u0275defineDirective({ type: r, selectors: [["input", "matDatepicker", ""]], hostAttrs: [1, "mat-datepicker-input"], hostVars: 6, hostBindings: function (a, t) { a & 1 && n.\u0275\u0275listener("input", function (s) { return t._onInput(s); })("change", function () { return t._onChange(); })("blur", function () { return t._onBlur(); })("keydown", function (s) { return t._onKeydown(s); }), a & 2 && (n.\u0275\u0275domProperty("disabled", t.disabled), n.\u0275\u0275attribute("aria-haspopup", t._datepicker ? "dialog" : null)("aria-owns", t._ariaOwns())("min", t.min ? t._dateAdapter.toIso8601(t.min) : null)("max", t.max ? t._dateAdapter.toIso8601(t.max) : null)("data-mat-calendar", t._datepicker ? t._datepicker.id : null)); }, inputs: { matDatepicker: "matDatepicker", min: "min", max: "max", dateFilter: [0, "matDatepickerFilter", "dateFilter"] }, exportAs: ["matDatepickerInput"], features: [n.\u0275\u0275ProvidersFeature([Ut, Xt, { provide: Se, useExisting: r }]), n.\u0275\u0275InheritDefinitionFeature] });
} return r; })(), Zt = (() => { class r {
    static \u0275fac = function (a) { return new (a || r); };
    static \u0275dir = n.\u0275\u0275defineDirective({ type: r, selectors: [["", "matDatepickerToggleIcon", ""]] });
} return r; })(), Jt = (() => {
    class r {
        _intl = o(F);
        _changeDetectorRef = o(g);
        _stateChanges = _.EMPTY;
        datepicker;
        tabIndex = null;
        ariaLabel;
        get disabled() { return this._disabled === void 0 && this.datepicker ? this.datepicker.disabled : !!this._disabled; }
        set disabled(e) { this._disabled = e; }
        _disabled;
        disableRipple = !1;
        _customIcon;
        _button;
        constructor() { let e = o(new at("tabindex"), { optional: !0 }), a = Number(e); this.tabIndex = a || a === 0 ? a : null; }
        ngOnChanges(e) { e.datepicker && this._watchStateChanges(); }
        ngOnDestroy() { this._stateChanges.unsubscribe(); }
        ngAfterContentInit() { this._watchStateChanges(); }
        _open(e) { this.datepicker && !this.disabled && (this.datepicker.open(), e.stopPropagation()); }
        _watchStateChanges() { let e = this.datepicker ? this.datepicker.stateChanges : te(), a = this.datepicker && this.datepicker.datepickerInput ? this.datepicker.datepickerInput.stateChanges : te(), t = this.datepicker ? j(this.datepicker.openedStream, this.datepicker.closedStream) : te(); this._stateChanges.unsubscribe(), this._stateChanges = j(this._intl.changes, e, a, t).subscribe(() => this._changeDetectorRef.markForCheck()); }
        static \u0275fac = function (a) { return new (a || r); };
        static \u0275cmp = n.\u0275\u0275defineComponent({ type: r, selectors: [["mat-datepicker-toggle"]], contentQueries: function (a, t, i) { if (a & 1 && n.\u0275\u0275contentQuery(i, Zt, 5), a & 2) {
                let s;
                n.\u0275\u0275queryRefresh(s = n.\u0275\u0275loadQuery()) && (t._customIcon = s.first);
            } }, viewQuery: function (a, t) { if (a & 1 && n.\u0275\u0275viewQuery(Rt, 5), a & 2) {
                let i;
                n.\u0275\u0275queryRefresh(i = n.\u0275\u0275loadQuery()) && (t._button = i.first);
            } }, hostAttrs: [1, "mat-datepicker-toggle"], hostVars: 8, hostBindings: function (a, t) { a & 1 && n.\u0275\u0275listener("click", function (s) { return t._open(s); }), a & 2 && (n.\u0275\u0275attribute("tabindex", null)("data-mat-calendar", t.datepicker ? t.datepicker.id : null), n.\u0275\u0275classProp("mat-datepicker-toggle-active", t.datepicker && t.datepicker.opened)("mat-accent", t.datepicker && t.datepicker.color === "accent")("mat-warn", t.datepicker && t.datepicker.color === "warn")); }, inputs: { datepicker: [0, "for", "datepicker"], tabIndex: "tabIndex", ariaLabel: [0, "aria-label", "ariaLabel"], disabled: [2, "disabled", "disabled", f], disableRipple: "disableRipple" }, exportAs: ["matDatepickerToggle"], features: [n.\u0275\u0275NgOnChangesFeature], ngContentSelectors: Ot, decls: 4, vars: 7, consts: [["button", ""], ["matIconButton", "", "type", "button", 3, "tabIndex", "disabled", "disableRipple"], ["viewBox", "0 0 24 24", "width", "24px", "height", "24px", "fill", "currentColor", "focusable", "false", "aria-hidden", "true", 1, "mat-datepicker-toggle-default-icon"], ["d", "M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"]], template: function (a, t) { a & 1 && (n.\u0275\u0275projectionDef(Tt), n.\u0275\u0275elementStart(0, "button", 1, 0), n.\u0275\u0275conditionalCreate(2, Yt, 2, 0, ":svg:svg", 2), n.\u0275\u0275projection(3), n.\u0275\u0275elementEnd()), a & 2 && (n.\u0275\u0275property("tabIndex", t.disabled ? -1 : t.tabIndex)("disabled", t.disabled)("disableRipple", t.disableRipple), n.\u0275\u0275attribute("aria-haspopup", t.datepicker ? "dialog" : null)("aria-label", t.ariaLabel || t._intl.openCalendarLabel)("aria-expanded", t.datepicker ? t.datepicker.opened : null), n.\u0275\u0275advance(2), n.\u0275\u0275conditional(t._customIcon ? -1 : 2)); }, dependencies: [J], styles: [`.mat-datepicker-toggle {
  pointer-events: auto;
  color: var(--%NS%mat-datepicker-toggle-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-datepicker-toggle button {
  color: inherit;
}

.mat-datepicker-toggle-active {
  color: var(--%NS%mat-datepicker-toggle-active-state-icon-color, var(--%NS%mat-sys-primary));
}

@media (forced-colors: active) {
  .mat-datepicker-toggle-default-icon {
    color: CanvasText;
  }
}
`], encapsulation: 2 });
    }
    return r;
})(), ea = (() => {
    class r {
        _changeDetectorRef = o(g);
        _elementRef = o(E);
        _dateAdapter = o(u, { optional: !0 });
        _formField = o(Z, { optional: !0 });
        _closedSubscription = _.EMPTY;
        _openedSubscription = _.EMPTY;
        _startInput;
        _endInput;
        get value() { return this._model ? this._model.selection : null; }
        id = o(Q).getId("mat-date-range-input-");
        focused = !1;
        get shouldLabelFloat() { return this.focused || !this.empty; }
        controlType = "mat-date-range-input";
        get placeholder() { let e = this._startInput?._getPlaceholder() || "", a = this._endInput?._getPlaceholder() || ""; return e || a ? `${e} ${this.separator} ${a}` : ""; }
        get rangePicker() { return this._rangePicker; }
        set rangePicker(e) { e && (this._model = e.registerInput(this), this._rangePicker = e, this._closedSubscription.unsubscribe(), this._openedSubscription.unsubscribe(), this._ariaOwns.set(this.rangePicker.opened ? e.id : null), this._closedSubscription = e.closedStream.subscribe(() => { this._startInput?._onTouched(), this._endInput?._onTouched(), this._ariaOwns.set(null); }), this._openedSubscription = e.openedStream.subscribe(() => { this._ariaOwns.set(e.id); }), this._registerModel(this._model)); }
        _rangePicker;
        _ariaOwns = h(null);
        get required() { return this._required ?? (this._isTargetRequired(this) || this._isTargetRequired(this._startInput) || this._isTargetRequired(this._endInput)) ?? !1; }
        set required(e) { this._required = e; }
        _required;
        get dateFilter() { return this._dateFilter; }
        set dateFilter(e) { let a = this._startInput, t = this._endInput, i = a && a._matchesFilter(a.value), s = t && t._matchesFilter(a.value); this._dateFilter = e, a && a._matchesFilter(a.value) !== i && a._validatorOnChange(), t && t._matchesFilter(t.value) !== s && t._validatorOnChange(); }
        _dateFilter;
        get min() { return this._min; }
        set min(e) { let a = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)); this._dateAdapter.sameDate(a, this._min) || (this._min = a, this._revalidate()); }
        _min = null;
        get max() { return this._max; }
        set max(e) { let a = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)); this._dateAdapter.sameDate(a, this._max) || (this._max = a, this._revalidate()); }
        _max = null;
        get disabled() { return this._startInput && this._endInput ? this._startInput.disabled && this._endInput.disabled : this._groupDisabled; }
        set disabled(e) { e !== this._groupDisabled && (this._groupDisabled = e, this.stateChanges.next(void 0)); }
        _groupDisabled = !1;
        get errorState() { return this._startInput && this._endInput ? this._startInput.errorState || this._endInput.errorState : !1; }
        get empty() { let e = this._startInput ? this._startInput.isEmpty() : !1, a = this._endInput ? this._endInput.isEmpty() : !1; return e && a; }
        _ariaDescribedBy = null;
        _model;
        separator = "\u2013";
        comparisonStart = null;
        comparisonEnd = null;
        ngControl;
        stateChanges = new v;
        disableAutomaticLabeling = !0;
        constructor() { this._dateAdapter, this._formField?._elementRef.nativeElement.classList.contains("mat-mdc-form-field") && this._elementRef.nativeElement.classList.add("mat-mdc-input-element", "mat-mdc-form-field-input-control", "mdc-text-field__input"), this.ngControl = o(ge, { optional: !0, self: !0 }); }
        get describedByIds() { return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ") || []; }
        setDescribedByIds(e) { this._ariaDescribedBy = e.length ? e.join(" ") : null; }
        onContainerClick() { !this.focused && !this.disabled && (!this._model || !this._model.selection.start ? this._startInput.focus() : this._endInput.focus()); }
        ngAfterContentInit() { this._model && this._registerModel(this._model), j(this._startInput.stateChanges, this._endInput.stateChanges).subscribe(() => { this.stateChanges.next(void 0); }); }
        ngOnChanges(e) { Ze(e, this._dateAdapter) && this.stateChanges.next(void 0); }
        ngOnDestroy() { this._closedSubscription.unsubscribe(), this._openedSubscription.unsubscribe(), this.stateChanges.complete(); }
        getStartValue() { return this.value ? this.value.start : null; }
        getThemePalette() { return this._formField ? this._formField.color : void 0; }
        getConnectedOverlayOrigin() { return this._formField ? this._formField.getConnectedOverlayOrigin() : this._elementRef; }
        getOverlayLabelId() { return this._formField ? this._formField.getLabelId() : null; }
        _getInputMirrorValue(e) { let a = e === "start" ? this._startInput : this._endInput; return a ? a.getMirrorValue() : ""; }
        _shouldHidePlaceholders() { return this._startInput ? !this._startInput.isEmpty() : !1; }
        _handleChildValueChange() { this.stateChanges.next(void 0), this._changeDetectorRef.markForCheck(); }
        _openDatepicker() { this._rangePicker && this._rangePicker.open(); }
        _shouldHideSeparator() { return (!this._formField || this._formField.getLabelId() && !this._formField._shouldLabelFloat()) && this.empty; }
        _getAriaLabelledby() { let e = this._formField; return e && e._hasFloatingLabel() ? e._labelId : null; }
        _getStartDateAccessibleName() { return this._startInput._getAccessibleName(); }
        _getEndDateAccessibleName() { return this._endInput._getAccessibleName(); }
        _updateFocus(e) { this.focused = e !== null, this.stateChanges.next(); }
        _revalidate() { this._startInput && this._startInput._validatorOnChange(), this._endInput && this._endInput._validatorOnChange(); }
        _registerModel(e) { this._startInput && this._startInput._registerModel(e), this._endInput && this._endInput._registerModel(e); }
        _isTargetRequired(e) { return e?.ngControl?.control?.hasValidator(N.required); }
        static \u0275fac = function (a) { return new (a || r); };
        static \u0275cmp = n.\u0275\u0275defineComponent({ type: r, selectors: [["mat-date-range-input"]], hostAttrs: ["role", "group", 1, "mat-date-range-input"], hostVars: 8, hostBindings: function (a, t) { a & 2 && (n.\u0275\u0275attribute("id", t.id)("aria-labelledby", t._getAriaLabelledby())("aria-describedby", t._ariaDescribedBy)("data-mat-calendar", t.rangePicker ? t.rangePicker.id : null), n.\u0275\u0275classProp("mat-date-range-input-hide-placeholders", t._shouldHidePlaceholders())("mat-date-range-input-required", t.required)); }, inputs: { rangePicker: "rangePicker", required: [2, "required", "required", f], dateFilter: "dateFilter", min: "min", max: "max", disabled: [2, "disabled", "disabled", f], separator: "separator", comparisonStart: "comparisonStart", comparisonEnd: "comparisonEnd" }, exportAs: ["matDateRangeInput"], features: [n.\u0275\u0275ProvidersFeature([{ provide: ye, useExisting: r }]), n.\u0275\u0275NgOnChangesFeature], ngContentSelectors: Lt, decls: 11, vars: 5, consts: [["cdkMonitorSubtreeFocus", "", 1, "mat-date-range-input-container", 3, "cdkFocusChange"], [1, "mat-date-range-input-wrapper"], ["aria-hidden", "true", 1, "mat-date-range-input-mirror"], [1, "mat-date-range-input-separator"], [1, "mat-date-range-input-wrapper", "mat-date-range-input-end-wrapper"]], template: function (a, t) { a & 1 && (n.\u0275\u0275projectionDef(Pt), n.\u0275\u0275elementStart(0, "div", 0), n.\u0275\u0275listener("cdkFocusChange", function (s) { return t._updateFocus(s); }), n.\u0275\u0275elementStart(1, "div", 1), n.\u0275\u0275projection(2), n.\u0275\u0275elementStart(3, "span", 2), n.\u0275\u0275text(4), n.\u0275\u0275elementEnd()(), n.\u0275\u0275elementStart(5, "span", 3), n.\u0275\u0275text(6), n.\u0275\u0275elementEnd(), n.\u0275\u0275elementStart(7, "div", 4), n.\u0275\u0275projection(8, 1), n.\u0275\u0275elementStart(9, "span", 2), n.\u0275\u0275text(10), n.\u0275\u0275elementEnd()()()), a & 2 && (n.\u0275\u0275advance(4), n.\u0275\u0275textInterpolate(t._getInputMirrorValue("start")), n.\u0275\u0275advance(), n.\u0275\u0275classProp("mat-date-range-input-separator-hidden", t._shouldHideSeparator()), n.\u0275\u0275advance(), n.\u0275\u0275textInterpolate(t.separator), n.\u0275\u0275advance(4), n.\u0275\u0275textInterpolate(t._getInputMirrorValue("end"))); }, dependencies: [Le], styles: [`.mat-date-range-input {
  display: block;
  width: 100%;
}

.mat-date-range-input-container {
  display: flex;
  align-items: center;
}

.mat-date-range-input-separator {
  transition: opacity 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  margin: 0 4px;
  color: var(--%NS%mat-datepicker-range-input-separator-color, var(--%NS%mat-sys-on-surface));
}
.mat-form-field-disabled .mat-date-range-input-separator {
  color: var(--%NS%mat-datepicker-range-input-disabled-state-separator-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
._mat-animation-noopable .mat-date-range-input-separator {
  transition: none;
}

.mat-date-range-input-separator-hidden {
  -webkit-user-select: none;
  user-select: none;
  opacity: 0;
  transition: none;
}

.mat-date-range-input-wrapper {
  position: relative;
  overflow: hidden;
  max-width: calc(50% - 4px);
}

.mat-date-range-input-end-wrapper {
  flex-grow: 1;
}

.mat-date-range-input-inner {
  position: absolute;
  top: 0;
  left: 0;
  font: inherit;
  background: transparent;
  color: currentColor;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  vertical-align: bottom;
  text-align: inherit;
  -webkit-appearance: none;
  width: 100%;
  height: 100%;
}
.mat-date-range-input-inner:-moz-ui-invalid {
  box-shadow: none;
}
.mat-date-range-input-inner::placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-date-range-input-inner::-moz-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-date-range-input-inner::-webkit-input-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-date-range-input-inner:-ms-input-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-date-range-input-inner[disabled] {
  color: var(--%NS%mat-datepicker-range-input-disabled-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-hide-placeholder .mat-date-range-input-inner::placeholder, .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::placeholder {
  -webkit-user-select: none;
  user-select: none;
  color: transparent !important;
  -webkit-text-fill-color: transparent;
  transition: none;
}
@media (forced-colors: active) {
  .mat-form-field-hide-placeholder .mat-date-range-input-inner::placeholder, .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::placeholder {
    opacity: 0;
  }
}
.mat-form-field-hide-placeholder .mat-date-range-input-inner::-moz-placeholder, .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-moz-placeholder {
  -webkit-user-select: none;
  user-select: none;
  color: transparent !important;
  -webkit-text-fill-color: transparent;
  transition: none;
}
@media (forced-colors: active) {
  .mat-form-field-hide-placeholder .mat-date-range-input-inner::-moz-placeholder, .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-moz-placeholder {
    opacity: 0;
  }
}
.mat-form-field-hide-placeholder .mat-date-range-input-inner::-webkit-input-placeholder, .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-webkit-input-placeholder {
  -webkit-user-select: none;
  user-select: none;
  color: transparent !important;
  -webkit-text-fill-color: transparent;
  transition: none;
}
@media (forced-colors: active) {
  .mat-form-field-hide-placeholder .mat-date-range-input-inner::-webkit-input-placeholder, .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-webkit-input-placeholder {
    opacity: 0;
  }
}
.mat-form-field-hide-placeholder .mat-date-range-input-inner:-ms-input-placeholder, .mat-date-range-input-hide-placeholders .mat-date-range-input-inner:-ms-input-placeholder {
  -webkit-user-select: none;
  user-select: none;
  color: transparent !important;
  -webkit-text-fill-color: transparent;
  transition: none;
}
@media (forced-colors: active) {
  .mat-form-field-hide-placeholder .mat-date-range-input-inner:-ms-input-placeholder, .mat-date-range-input-hide-placeholders .mat-date-range-input-inner:-ms-input-placeholder {
    opacity: 0;
  }
}
._mat-animation-noopable .mat-date-range-input-inner::placeholder {
  transition: none;
}
._mat-animation-noopable .mat-date-range-input-inner::-moz-placeholder {
  transition: none;
}
._mat-animation-noopable .mat-date-range-input-inner::-webkit-input-placeholder {
  transition: none;
}
._mat-animation-noopable .mat-date-range-input-inner:-ms-input-placeholder {
  transition: none;
}

.mat-date-range-input-mirror {
  -webkit-user-select: none;
  user-select: none;
  visibility: hidden;
  white-space: nowrap;
  display: inline-block;
  min-width: 2px;
}

.mat-mdc-form-field-type-mat-date-range-input .mat-mdc-form-field-infix {
  width: 200px;
}
`], encapsulation: 2 });
    }
    return r;
})();
function ta(r) { return ce(r, !0); }
function Fe(r) { return r.nodeType === Node.ELEMENT_NODE; }
function aa(r) { return r.nodeName === "INPUT"; }
function na(r) { return r.nodeName === "TEXTAREA"; }
function ce(r, d) { if (Fe(r) && d) {
    let a = (r.getAttribute?.("aria-labelledby")?.split(/\s+/g) || []).reduce((t, i) => { let s = document.getElementById(i); return s && t.push(s), t; }, []);
    if (a.length)
        return a.map(t => ce(t, !1)).join(" ");
} if (Fe(r)) {
    let e = r.getAttribute("aria-label")?.trim();
    if (e)
        return e;
} if (aa(r) || na(r)) {
    if (r.labels?.length)
        return Array.from(r.labels).map(t => ce(t, !1)).join(" ");
    let e = r.getAttribute("placeholder")?.trim();
    if (e)
        return e;
    let a = r.getAttribute("title")?.trim();
    if (a)
        return a;
} return (r.textContent || "").replace(/\s+/g, " ").trim(); }
var et = (() => { class r extends Xe {
    _rangeInput = o(ea);
    _elementRef = o(E);
    _defaultErrorStateMatcher = o(we);
    _injector = o(q);
    _rawValue = h("");
    _parentForm = o(be, { optional: !0 });
    _parentFormGroup = o(De, { optional: !0 });
    ngControl;
    _dir = o(Y, { optional: !0 });
    _errorStateTracker;
    get errorStateMatcher() { return this._errorStateTracker.matcher; }
    set errorStateMatcher(e) { this._errorStateTracker.matcher = e; }
    get errorState() { return this._errorStateTracker.errorState; }
    set errorState(e) { this._errorStateTracker.errorState = e; }
    constructor() { super(), this._errorStateTracker = new Ae(this._defaultErrorStateMatcher, null, this._parentFormGroup, this._parentForm, this.stateChanges); }
    ngOnInit() { let e = this._injector.get(fe, null, { optional: !0, self: !0 }); this._errorStateTracker.formField = this._injector.get(ve, null, { optional: !0, self: !0 }), e && (this.ngControl = e, this._errorStateTracker.ngControl = e); }
    ngAfterContentInit() { this._register(); }
    ngDoCheck() { this.ngControl && this.updateErrorState(), this._rawValue.set(this._elementRef.nativeElement.value); }
    isEmpty() { return this._rawValue().length === 0; }
    _getPlaceholder() { return this._elementRef.nativeElement.placeholder; }
    focus() { this._elementRef.nativeElement.focus(); }
    getMirrorValue() { let e = this._rawValue(); return e.length > 0 ? e : this._getPlaceholder(); }
    updateErrorState() { this._errorStateTracker.updateErrorState(); }
    _onInput(e) { super._onInput(e), this._rangeInput._handleChildValueChange(); }
    _openPopup() { this._rangeInput._openDatepicker(); }
    _getMinDate() { return this._rangeInput.min; }
    _getMaxDate() { return this._rangeInput.max; }
    _getDateFilter() { return this._rangeInput.dateFilter; }
    _parentDisabled() { return this._rangeInput._groupDisabled; }
    _shouldHandleChangeEvent({ source: e }) { return e !== this._rangeInput._startInput && e !== this._rangeInput._endInput; }
    _assignValueProgrammatically(e, a) { super._assignValueProgrammatically(e, a), (this === this._rangeInput._startInput ? this._rangeInput._endInput : this._rangeInput._startInput)?._validatorOnChange(), this._rawValue.set(this._elementRef.nativeElement.value); }
    _formatValue(e) { super._formatValue(e), this._rangeInput._handleChildValueChange(); }
    _getAccessibleName() { return ta(this._elementRef.nativeElement); }
    static \u0275fac = function (a) { return new (a || r); };
    static \u0275dir = n.\u0275\u0275defineDirective({ type: r, inputs: { errorStateMatcher: "errorStateMatcher" }, features: [n.\u0275\u0275InheritDefinitionFeature] });
} return r; })(), za = (() => { class r extends et {
    _startValidator = e => { let a = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)), t = this._model ? this._model.selection.end : null; return !a || !t || this._dateAdapter.compareDate(a, t) <= 0 ? null : { matStartDateInvalid: { end: t, actual: a } }; };
    _validator = N.compose([...super._getValidators(), this._startValidator]);
    _register() { this._rangeInput._startInput = this; }
    _getValueFromModel(e) { return e.start; }
    _shouldHandleChangeEvent(e) { return super._shouldHandleChangeEvent(e) ? e.oldValue?.start ? !e.selection.start || !!this._dateAdapter.compareDate(e.oldValue.start, e.selection.start) : !!e.selection.start : !1; }
    _assignValueToModel(e) { if (this._model) {
        let a = new p(e, this._model.selection.end);
        this._model.updateSelection(a, this), this._rangeInput._handleChildValueChange();
    } }
    _onKeydown(e) { let a = this._rangeInput._endInput, t = this._elementRef.nativeElement, i = this._dir?.value !== "rtl"; (e.keyCode === x && i || e.keyCode === I && !i) && t.selectionStart === t.value.length && t.selectionEnd === t.value.length ? (e.preventDefault(), a._elementRef.nativeElement.setSelectionRange(0, 0), a.focus()) : super._onKeydown(e); }
    static \u0275fac = (() => { let e; return function (t) { return (e || (e = n.\u0275\u0275getInheritedFactory(r)))(t || r); }; })();
    static \u0275dir = n.\u0275\u0275defineDirective({ type: r, selectors: [["input", "matStartDate", ""]], hostAttrs: ["type", "text", 1, "mat-start-date", "mat-date-range-input-inner"], hostVars: 5, hostBindings: function (a, t) { a & 1 && n.\u0275\u0275listener("input", function (s) { return t._onInput(s); })("change", function () { return t._onChange(); })("keydown", function (s) { return t._onKeydown(s); })("blur", function () { return t._onBlur(); }), a & 2 && (n.\u0275\u0275domProperty("disabled", t.disabled), n.\u0275\u0275attribute("aria-haspopup", t._rangeInput.rangePicker ? "dialog" : null)("aria-owns", t._rangeInput._ariaOwns() || null)("min", t._getMinDate() ? t._dateAdapter.toIso8601(t._getMinDate()) : null)("max", t._getMaxDate() ? t._dateAdapter.toIso8601(t._getMaxDate()) : null)); }, outputs: { dateChange: "dateChange", dateInput: "dateInput" }, features: [n.\u0275\u0275ProvidersFeature([{ provide: H, useExisting: r, multi: !0 }, { provide: z, useExisting: r, multi: !0 }]), n.\u0275\u0275InheritDefinitionFeature] });
} return r; })(), Ka = (() => { class r extends et {
    _endValidator = e => { let a = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)), t = this._model ? this._model.selection.start : null; return !a || !t || this._dateAdapter.compareDate(a, t) >= 0 ? null : { matEndDateInvalid: { start: t, actual: a } }; };
    _register() { this._rangeInput._endInput = this; }
    _validator = N.compose([...super._getValidators(), this._endValidator]);
    _getValueFromModel(e) { return e.end; }
    _shouldHandleChangeEvent(e) { return super._shouldHandleChangeEvent(e) ? e.oldValue?.end ? !e.selection.end || !!this._dateAdapter.compareDate(e.oldValue.end, e.selection.end) : !!e.selection.end : !1; }
    _assignValueToModel(e) { if (this._model) {
        let a = new p(this._model.selection.start, e);
        this._model.updateSelection(a, this);
    } }
    _moveCaretToEndOfStartInput() { let e = this._rangeInput._startInput._elementRef.nativeElement, a = e.value; a.length > 0 && e.setSelectionRange(a.length, a.length), e.focus(); }
    _onKeydown(e) { let a = this._elementRef.nativeElement, t = this._dir?.value !== "rtl"; e.keyCode === dt && !a.value ? this._moveCaretToEndOfStartInput() : (e.keyCode === I && t || e.keyCode === x && !t) && a.selectionStart === 0 && a.selectionEnd === 0 ? (e.preventDefault(), this._moveCaretToEndOfStartInput()) : super._onKeydown(e); }
    static \u0275fac = (() => { let e; return function (t) { return (e || (e = n.\u0275\u0275getInheritedFactory(r)))(t || r); }; })();
    static \u0275dir = n.\u0275\u0275defineDirective({ type: r, selectors: [["input", "matEndDate", ""]], hostAttrs: ["type", "text", 1, "mat-end-date", "mat-date-range-input-inner"], hostVars: 5, hostBindings: function (a, t) { a & 1 && n.\u0275\u0275listener("input", function (s) { return t._onInput(s); })("change", function () { return t._onChange(); })("keydown", function (s) { return t._onKeydown(s); })("blur", function () { return t._onBlur(); }), a & 2 && (n.\u0275\u0275domProperty("disabled", t.disabled), n.\u0275\u0275attribute("aria-haspopup", t._rangeInput.rangePicker ? "dialog" : null)("aria-owns", t._rangeInput._ariaOwns() || null)("min", t._getMinDate() ? t._dateAdapter.toIso8601(t._getMinDate()) : null)("max", t._getMaxDate() ? t._dateAdapter.toIso8601(t._getMaxDate()) : null)); }, outputs: { dateChange: "dateChange", dateInput: "dateInput" }, features: [n.\u0275\u0275ProvidersFeature([{ provide: H, useExisting: r, multi: !0 }, { provide: z, useExisting: r, multi: !0 }]), n.\u0275\u0275InheritDefinitionFeature] });
} return r; })(), ja = (() => { class r extends D {
    _forwardContentValues(e) { super._forwardContentValues(e); let a = this.datepickerInput; a && (e.comparisonStart = a.comparisonStart, e.comparisonEnd = a.comparisonEnd, e.startDateAccessibleName = a._getStartDateAccessibleName(), e.endDateAccessibleName = a._getEndDateAccessibleName()); }
    static \u0275fac = (() => { let e; return function (t) { return (e || (e = n.\u0275\u0275getInheritedFactory(r)))(t || r); }; })();
    static \u0275cmp = n.\u0275\u0275defineComponent({ type: r, selectors: [["mat-date-range-picker"]], exportAs: ["matDateRangePicker"], features: [n.\u0275\u0275ProvidersFeature([Wt, { provide: W, useFactory: () => o(W, { optional: !0, skipSelf: !0 }) || new qt(o(u)) }, { provide: D, useExisting: r }]), n.\u0275\u0275InheritDefinitionFeature], decls: 0, vars: 0, template: function (a, t) { }, encapsulation: 2 });
} return r; })(), Wa = (() => { class r {
    _datepicker = o(D);
    _applySelection() { this._datepicker._applyPendingSelection(), this._datepicker.close(); }
    static \u0275fac = function (a) { return new (a || r); };
    static \u0275dir = n.\u0275\u0275defineDirective({ type: r, selectors: [["", "matDatepickerApply", ""], ["", "matDateRangePickerApply", ""]], hostBindings: function (a, t) { a & 1 && n.\u0275\u0275listener("click", function () { return t._applySelection(); }); } });
} return r; })(), qa = (() => { class r {
    _datepicker = o(D);
    static \u0275fac = function (a) { return new (a || r); };
    static \u0275dir = n.\u0275\u0275defineDirective({ type: r, selectors: [["", "matDatepickerCancel", ""], ["", "matDateRangePickerCancel", ""]], hostBindings: function (a, t) { a & 1 && n.\u0275\u0275listener("click", function () { return t._datepicker.close(); }); } });
} return r; })(), Qa = (() => {
    class r {
        _datepicker = o(D);
        _viewContainerRef = o(Ye);
        _template;
        _portal;
        ngAfterViewInit() { this._portal = new bt(this._template, this._viewContainerRef), this._datepicker.registerActions(this._portal); }
        ngOnDestroy() { this._datepicker.removeActions(this._portal), this._portal && this._portal.isAttached && this._portal?.detach(); }
        static \u0275fac = function (a) { return new (a || r); };
        static \u0275cmp = n.\u0275\u0275defineComponent({ type: r, selectors: [["mat-datepicker-actions"], ["mat-date-range-picker-actions"]], viewQuery: function (a, t) { if (a & 1 && n.\u0275\u0275viewQuery(nt, 5), a & 2) {
                let i;
                n.\u0275\u0275queryRefresh(i = n.\u0275\u0275loadQuery()) && (t._template = i.first);
            } }, ngContentSelectors: We, decls: 1, vars: 0, consts: [[1, "mat-datepicker-actions"]], template: function (a, t) { a & 1 && (n.\u0275\u0275projectionDef(), n.\u0275\u0275domTemplate(0, Bt, 2, 0, "ng-template")); }, styles: [`.mat-datepicker-actions {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 8px 8px 8px;
}
.mat-datepicker-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-datepicker-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}
`], encapsulation: 2 });
    }
    return r;
})(), $a = (() => { class r {
    static \u0275fac = function (a) { return new (a || r); };
    static \u0275mod = n.\u0275\u0275defineNgModule({ type: r });
    static \u0275inj = n.\u0275\u0275defineInjector({ providers: [F], imports: [Ce, gt, rt, Dt, Ue, Jt, Ge, st, Ct] });
} return r; })();
export { p as DateRange, qt as DefaultMatCalendarRangeStrategy, Gt as MAT_DATEPICKER_SCROLL_STRATEGY, Xt as MAT_DATEPICKER_VALIDATORS, Ut as MAT_DATEPICKER_VALUE_ACCESSOR, W as MAT_DATE_RANGE_SELECTION_STRATEGY, le as MatCalendar, V as MatCalendarBody, O as MatCalendarCell, Ge as MatCalendarHeader, ea as MatDateRangeInput, ja as MatDateRangePicker, b as MatDateSelectionModel, Ha as MatDatepicker, Qa as MatDatepickerActions, Wa as MatDatepickerApply, qa as MatDatepickerCancel, Ue as MatDatepickerContent, Je as MatDatepickerInput, A as MatDatepickerInputEvent, F as MatDatepickerIntl, $a as MatDatepickerModule, Jt as MatDatepickerToggle, Zt as MatDatepickerToggleIcon, Ka as MatEndDate, Ee as MatMonthView, xe as MatMultiYearView, jt as MatRangeDateSelectionModel, Kt as MatSingleDateSelectionModel, za as MatStartDate, Ie as MatYearView, m as yearsPerPage, de as yearsPerRow };
