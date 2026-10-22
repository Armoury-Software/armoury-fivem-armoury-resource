import { a as N } from "@nf-internal/chunk-OEHQHN3G";
import { a as m } from "@nf-internal/chunk-RIOYVCV7";
import { a as C, b as S, e as O, f as M, g as w } from "@nf-internal/chunk-QSLXVGKB";
import { a as F } from "@nf-internal/chunk-WJDZCIUH";
import { b as R } from "@nf-internal/chunk-NE3WOAAK";
import { a as A, j as T, n as E } from "@nf-internal/chunk-OWKVPWKA";
import { c as k, e as x, f as D, g as I } from "@nf-internal/chunk-PMOCNCWX";
import { c as b } from "@nf-internal/chunk-L6LZ2NRF";
import { _IdGenerator as Y, LiveAnnouncer as U, ActiveDescendantKeyManager as X } from "@angular/cdk/a11y";
import { Directionality as J, BidiModule as Z } from "@angular/cdk/bidi";
import { SelectionModel as $ } from "@angular/cdk/collections";
import { hasModifierKey as u, ENTER as L, SPACE as P, A as ee, ESCAPE as te, DOWN_ARROW as V, UP_ARROW as W, LEFT_ARROW as ie, RIGHT_ARROW as ne } from "@angular/cdk/keycodes";
import { createRepositionScrollStrategy as ae, OVERLAY_DEFAULT_CONFIG as re, CdkOverlayOrigin as B, CdkConnectedOverlay as K, OverlayModule as le } from "@angular/cdk/overlay";
import { ViewportRuler as oe, CdkScrollableModule as se } from "@angular/cdk/scrolling";
import * as t from "@angular/core";
import { InjectionToken as v, inject as o, Injector as ce, ChangeDetectorRef as de, ElementRef as he, Renderer2 as pe, signal as me, EventEmitter as _, HostAttributeToken as ue, booleanAttribute as d, numberAttribute as z } from "@angular/core";
import { _getEventTarget as _e } from "@angular/cdk/platform";
import { Subject as f, defer as fe, merge as g } from "rxjs";
import { startWith as G, switchMap as q, filter as H, map as j, takeUntil as p, take as ge } from "rxjs/operators";
import "@angular/cdk/coercion";
import "@angular/common";
import "@angular/cdk/observers/private";
import "@angular/cdk/layout";
import "@angular/cdk/private";
import "@angular/cdk/observers";
var ye = ["trigger"], ve = ["panel"], be = [[["mat-select-trigger"]], "*"], Ce = ["mat-select-trigger", "*"];
function Se(a, h) { if (a & 1 && (t.\u0275\u0275elementStart(0, "span", 4), t.\u0275\u0275text(1), t.\u0275\u0275elementEnd()), a & 2) {
    let e = t.\u0275\u0275nextContext();
    t.\u0275\u0275advance(), t.\u0275\u0275textInterpolate(e.placeholder);
} }
function Oe(a, h) { a & 1 && t.\u0275\u0275projection(0); }
function Me(a, h) { if (a & 1 && (t.\u0275\u0275elementStart(0, "span", 11), t.\u0275\u0275text(1), t.\u0275\u0275elementEnd()), a & 2) {
    let e = t.\u0275\u0275nextContext(2);
    t.\u0275\u0275advance(), t.\u0275\u0275textInterpolate(e.triggerValue);
} }
function we(a, h) { if (a & 1 && (t.\u0275\u0275elementStart(0, "span", 5), t.\u0275\u0275conditionalCreate(1, Oe, 1, 0)(2, Me, 2, 1, "span", 11), t.\u0275\u0275elementEnd()), a & 2) {
    let e = t.\u0275\u0275nextContext();
    t.\u0275\u0275advance(), t.\u0275\u0275conditional(e.customTrigger ? 1 : 2);
} }
function ke(a, h) { if (a & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "div", 12, 1), t.\u0275\u0275listener("keydown", function (n) { t.\u0275\u0275restoreView(e); let r = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(r._handleKeydown(n)); }), t.\u0275\u0275projection(2, 1), t.\u0275\u0275elementEnd();
} if (a & 2) {
    let e = t.\u0275\u0275nextContext();
    t.\u0275\u0275classMap(e.panelClass), t.\u0275\u0275classProp("mat-select-panel-animations-enabled", !e._animationsDisabled)("mat-primary", e._parentFormField?.color === "primary")("mat-accent", e._parentFormField?.color === "accent")("mat-warn", e._parentFormField?.color === "warn")("mat-undefined", !e._parentFormField?.color), t.\u0275\u0275attribute("id", e.id + "-panel")("aria-multiselectable", e.multiple)("aria-label", e.ariaLabel || null)("aria-labelledby", e._getPanelAriaLabelledby());
} }
var xe = new v("mat-select-scroll-strategy", { providedIn: "root", factory: () => { let a = o(ce); return () => ae(a); } }), De = new v("MAT_SELECT_CONFIG"), Q = new v("MatSelectTrigger"), y = class {
    source;
    value;
    constructor(h, e) { this.source = h, this.value = e; }
}, ft = (() => {
    class a {
        _viewportRuler = o(oe);
        _changeDetectorRef = o(de);
        _elementRef = o(he);
        _dir = o(J, { optional: !0 });
        _idGenerator = o(Y);
        _renderer = o(pe);
        _parentFormField = o(E, { optional: !0 });
        ngControl = o(x, { self: !0, optional: !0 });
        _liveAnnouncer = o(U);
        _defaultOptions = o(De, { optional: !0 });
        _animationsDisabled = b();
        _popoverLocation;
        _initialized = new f;
        _cleanupDetach;
        options;
        optionGroups;
        customTrigger;
        _positions = [{ originX: "start", originY: "bottom", overlayX: "start", overlayY: "top" }, { originX: "end", originY: "bottom", overlayX: "end", overlayY: "top" }, { originX: "start", originY: "top", overlayX: "start", overlayY: "bottom", panelClass: "mat-mdc-select-panel-above" }, { originX: "end", originY: "top", overlayX: "end", overlayY: "bottom", panelClass: "mat-mdc-select-panel-above" }];
        _scrollOptionIntoView(e) { let i = this.options.toArray()[e]; if (i) {
            let n = this.panel.nativeElement, r = M(e, this.options, this.optionGroups), l = i._getHostElement();
            e === 0 && r === 1 ? n.scrollTop = 0 : n.scrollTop = w(l.offsetTop, l.offsetHeight, n.scrollTop, n.offsetHeight);
        } }
        _positioningSettled() { this._scrollOptionIntoView(this._keyManager.activeItemIndex || 0); }
        _getChangeEvent(e) { return new y(this, e); }
        _scrollStrategyFactory = o(xe);
        _panelOpen = !1;
        _compareWith = (e, i) => e === i;
        _uid = this._idGenerator.getId("mat-select-");
        _triggerAriaLabelledBy = null;
        _previousControl;
        _destroy = new f;
        _errorStateTracker;
        stateChanges = new f;
        disableAutomaticLabeling = !0;
        userAriaDescribedBy;
        _selectionModel;
        _keyManager;
        _preferredOverlayOrigin;
        _overlayWidth;
        _onChange = () => { };
        _onTouched = () => { };
        _valueId = this._idGenerator.getId("mat-select-value-");
        _scrollStrategy;
        _overlayPanelClass = this._defaultOptions?.overlayPanelClass || "";
        get focused() { return this._focused || this._panelOpen; }
        _focused = !1;
        controlType = "mat-select";
        trigger;
        panel;
        _overlayDir;
        panelClass;
        disabled = !1;
        get disableRipple() { return this._disableRipple(); }
        set disableRipple(e) { this._disableRipple.set(e); }
        _disableRipple = me(!1);
        tabIndex = 0;
        get hideSingleSelectionIndicator() { return this._hideSingleSelectionIndicator; }
        set hideSingleSelectionIndicator(e) { this._hideSingleSelectionIndicator = e, this._syncParentProperties(); }
        _hideSingleSelectionIndicator = this._defaultOptions?.hideSingleSelectionIndicator ?? !1;
        get placeholder() { return this._placeholder; }
        set placeholder(e) { this._placeholder = e, this.stateChanges.next(); }
        _placeholder;
        get required() { return this._required ?? this.ngControl?.control?.hasValidator(k.required) ?? !1; }
        set required(e) { this._required = e, this.stateChanges.next(); }
        _required;
        get multiple() { return this._multiple; }
        set multiple(e) { this._selectionModel, this._multiple = e; }
        _multiple = !1;
        disableOptionCentering = this._defaultOptions?.disableOptionCentering ?? !1;
        get compareWith() { return this._compareWith; }
        set compareWith(e) { this._compareWith = e, this._selectionModel && this._initializeSelection(); }
        get value() { return this._value; }
        set value(e) { this._assignValue(e) && this._onChange(e); }
        _value;
        ariaLabel = "";
        ariaLabelledby;
        get errorStateMatcher() { return this._errorStateTracker.matcher; }
        set errorStateMatcher(e) { this._errorStateTracker.matcher = e; }
        typeaheadDebounceInterval;
        sortComparator;
        get id() { return this._id; }
        set id(e) { this._id = e || this._uid, this.stateChanges.next(); }
        _id;
        get errorState() { return this._errorStateTracker.errorState; }
        set errorState(e) { this._errorStateTracker.errorState = e; }
        panelWidth = this._defaultOptions && typeof this._defaultOptions.panelWidth < "u" ? this._defaultOptions.panelWidth : "auto";
        canSelectNullableOptions = this._defaultOptions?.canSelectNullableOptions ?? !1;
        optionSelectionChanges = fe(() => { let e = this.options; return e ? e.changes.pipe(G(e), q(() => g(...e.map(i => i.onSelectionChange)))) : this._initialized.pipe(q(() => this.optionSelectionChanges)); });
        openedChange = new _;
        _openedStream = this.openedChange.pipe(H(e => e), j(() => { }));
        _closedStream = this.openedChange.pipe(H(e => !e), j(() => { }));
        selectionChange = new _;
        valueChange = new _;
        constructor() { let e = o(R), i = o(D, { optional: !0 }), n = o(I, { optional: !0 }), r = o(new ue("tabindex"), { optional: !0 }), l = o(re, { optional: !0 }), c = o(A, { optional: !0, self: !0 }); this.ngControl && (this.ngControl.valueAccessor = this), this._defaultOptions?.typeaheadDebounceInterval != null && (this.typeaheadDebounceInterval = this._defaultOptions.typeaheadDebounceInterval), this._errorStateTracker = new F(e, c || this.ngControl, n, i, this.stateChanges), this._scrollStrategy = this._scrollStrategyFactory(), this.tabIndex = r == null ? 0 : parseInt(r) || 0, this._popoverLocation = l?.usePopover === !1 ? null : "inline", this.id = this.id; }
        ngOnInit() { this._selectionModel = new $(this.multiple), this.stateChanges.next(), this._viewportRuler.change().pipe(p(this._destroy)).subscribe(() => { this.panelOpen && (this._overlayWidth = this._getOverlayWidth(this._preferredOverlayOrigin), this._changeDetectorRef.detectChanges()); }); }
        ngAfterContentInit() { this._initialized.next(), this._initialized.complete(), this._initKeyManager(), this._selectionModel.changed.pipe(p(this._destroy)).subscribe(e => { e.added.forEach(i => i.select()), e.removed.forEach(i => i.deselect()); }), this.options.changes.pipe(G(null), p(this._destroy)).subscribe(() => { this._resetOptions(), this._initializeSelection(); }); }
        ngDoCheck() { let e = this._getTriggerAriaLabelledby(), i = this.ngControl; if (e !== this._triggerAriaLabelledBy) {
            let n = this._elementRef.nativeElement;
            this._triggerAriaLabelledBy = e, e ? n.setAttribute("aria-labelledby", e) : n.removeAttribute("aria-labelledby");
        } i && (this._previousControl !== i.control && (this._previousControl !== void 0 && i.disabled !== null && i.disabled !== this.disabled && (this.disabled = i.disabled), this._previousControl = i.control), this.updateErrorState()); }
        ngOnChanges(e) { (e.disabled || e.userAriaDescribedBy) && this.stateChanges.next(), e.typeaheadDebounceInterval && this._keyManager && this._keyManager.withTypeAhead(this.typeaheadDebounceInterval), e.panelClass && this.panelClass instanceof Set && (this.panelClass = Array.from(this.panelClass)); }
        ngOnDestroy() { this._cleanupDetach?.(), this._keyManager?.destroy(), this._destroy.next(), this._destroy.complete(), this.stateChanges.complete(); }
        toggle() { this.panelOpen ? this.close() : this.open(); }
        open() { this._canOpen() && (this._parentFormField && (this._preferredOverlayOrigin = this._parentFormField.getConnectedOverlayOrigin()), this._cleanupDetach?.(), this._overlayWidth = this._getOverlayWidth(this._preferredOverlayOrigin), this._panelOpen = !0, this._overlayDir.positionChange.pipe(ge(1)).subscribe(() => { this._changeDetectorRef.detectChanges(), this._positioningSettled(); }), this._overlayDir.attachOverlay(), this._keyManager.withHorizontalOrientation(null), this._highlightCorrectOption(), this._changeDetectorRef.markForCheck(), this.stateChanges.next(), Promise.resolve().then(() => this.openedChange.emit(!0))); }
        close() { this._panelOpen && (this._panelOpen = !1, this._exitAndDetach(), this._keyManager.withHorizontalOrientation(this._isRtl() ? "rtl" : "ltr"), this._changeDetectorRef.markForCheck(), this._onTouched(), this.stateChanges.next(), Promise.resolve().then(() => this.openedChange.emit(!1))); }
        _exitAndDetach() { if (this._animationsDisabled || !this.panel) {
            this._detachOverlay();
            return;
        } this._cleanupDetach?.(), this._cleanupDetach = () => { i(), clearTimeout(n), this._cleanupDetach = void 0; }; let e = this.panel.nativeElement, i = this._renderer.listen(e, "animationend", r => { r.animationName === "_mat-select-exit" && (this._cleanupDetach?.(), this._detachOverlay()); }), n = setTimeout(() => { this._cleanupDetach?.(), this._detachOverlay(); }, 200); e.classList.add("mat-select-panel-exit"); }
        _detachOverlay() { this._overlayDir.detachOverlay(), this._changeDetectorRef.markForCheck(); }
        writeValue(e) { this._assignValue(e); }
        registerOnChange(e) { this._onChange = e; }
        registerOnTouched(e) { this._onTouched = e; }
        setDisabledState(e) { this.disabled = e, this._changeDetectorRef.markForCheck(), this.stateChanges.next(); }
        get panelOpen() { return this._panelOpen; }
        get selected() { return this.multiple ? this._selectionModel?.selected || [] : this._selectionModel?.selected[0]; }
        get triggerValue() { if (this.empty)
            return ""; if (this._multiple) {
            let e = this._selectionModel.selected.map(i => i.viewValue);
            return this._isRtl() && e.reverse(), e.join(", ");
        } return this._selectionModel.selected[0].viewValue; }
        updateErrorState() { this._errorStateTracker.updateErrorState(); }
        _isRtl() { return this._dir ? this._dir.value === "rtl" : !1; }
        _handleKeydown(e) { this.disabled || (this.panelOpen ? this._handleOpenKeydown(e) : this._handleClosedKeydown(e)); }
        _handleClosedKeydown(e) { let i = e.keyCode, n = i === V || i === W || i === ie || i === ne, r = i === L || i === P, l = this._keyManager; if (!l.isTyping() && r && !u(e) || (this.multiple || e.altKey) && n)
            e.preventDefault(), this.open();
        else if (!this.multiple) {
            let c = this.selected;
            l.onKeydown(e);
            let s = this.selected;
            s && c !== s && this._liveAnnouncer.announce(s.viewValue, 1e4);
        } }
        _handleOpenKeydown(e) { let i = this._keyManager, n = e.keyCode, r = n === V || n === W, l = i.isTyping(); if (r && e.altKey)
            e.preventDefault(), this.close();
        else if (!l && (n === L || n === P) && i.activeItem && !u(e))
            e.preventDefault(), i.activeItem._selectViaInteraction();
        else if (!l && this._multiple && n === ee && e.ctrlKey) {
            e.preventDefault();
            let c = this.options.some(s => !s.disabled && !s.selected);
            this.options.forEach(s => { s.disabled || (c ? s.select() : s.deselect()); });
        }
        else {
            let c = i.activeItemIndex;
            i.onKeydown(e), this._multiple && r && e.shiftKey && i.activeItem && i.activeItemIndex !== c && i.activeItem._selectViaInteraction();
        } }
        _handleOverlayKeydown(e) { e.keyCode === te && !u(e) && (e.preventDefault(), this.close()); }
        _onFocus() { this.disabled || (this._focused = !0, this.stateChanges.next()); }
        _onBlur() { this._focused = !1, this._keyManager?.cancelTypeahead(), !this.disabled && !this.panelOpen && (this._onTouched(), this._changeDetectorRef.markForCheck(), this.stateChanges.next()); }
        get empty() { return !this._selectionModel || this._selectionModel.isEmpty(); }
        _initializeSelection() { Promise.resolve().then(() => { this.ngControl && (this._value = this.ngControl.value), this._setSelectionByValue(this._value), this.stateChanges.next(); }); }
        _setSelectionByValue(e) { if (this.options.forEach(i => i.setInactiveStyles()), this._selectionModel.clear(), this.multiple && e)
            Array.isArray(e), e.forEach(i => this._selectOptionByValue(i)), this._sortValues();
        else {
            let i = this._selectOptionByValue(e);
            i ? this._keyManager.updateActiveItem(i) : this.panelOpen || this._keyManager.updateActiveItem(-1);
        } this._changeDetectorRef.markForCheck(); }
        _selectOptionByValue(e) { let i = this.options.find(n => { if (this._selectionModel.isSelected(n))
            return !1; try {
            return (n.value != null || this.canSelectNullableOptions) && this._compareWith(n.value, e);
        }
        catch {
            return !1;
        } }); return i && this._selectionModel.select(i), i; }
        _assignValue(e) { return e !== this._value || this._multiple && Array.isArray(e) ? (this.options && this._setSelectionByValue(e), this._value = e, !0) : !1; }
        _skipPredicate = e => this.panelOpen ? !1 : e.disabled;
        _getOverlayWidth(e) { return this.panelWidth === "auto" ? (e instanceof B ? e.elementRef : e || this._elementRef).nativeElement.getBoundingClientRect().width : this.panelWidth === null ? "" : this.panelWidth; }
        _syncParentProperties() { if (this.options)
            for (let e of this.options)
                e._changeDetectorRef.markForCheck(); }
        _initKeyManager() { this._keyManager = new X(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl() ? "rtl" : "ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate), this._keyManager.tabOut.subscribe(() => { this.panelOpen && (!this.multiple && this._keyManager.activeItem && this._keyManager.activeItem._selectViaInteraction(), this.focus(), this.close()); }), this._keyManager.change.subscribe(() => { this._panelOpen && this.panel ? this._scrollOptionIntoView(this._keyManager.activeItemIndex || 0) : !this._panelOpen && !this.multiple && this._keyManager.activeItem && this._keyManager.activeItem._selectViaInteraction(); }); }
        _resetOptions() { let e = g(this.options.changes, this._destroy); this.optionSelectionChanges.pipe(p(e)).subscribe(i => { this._onSelect(i.source, i.isUserInput), i.isUserInput && !this.multiple && this._panelOpen && (this.close(), this.focus()); }), g(...this.options.map(i => i._stateChanges)).pipe(p(e)).subscribe(() => { this._changeDetectorRef.detectChanges(), this.stateChanges.next(); }); }
        _onSelect(e, i) { let n = this._selectionModel.isSelected(e); !this.canSelectNullableOptions && e.value == null && !this._multiple ? (e.deselect(), this._selectionModel.clear(), this.value != null && this._propagateChanges(e.value)) : (n !== e.selected && (e.selected ? this._selectionModel.select(e) : this._selectionModel.deselect(e)), i && this._keyManager.setActiveItem(e), this.multiple && (this._sortValues(), i && this.focus())), n !== this._selectionModel.isSelected(e) && this._propagateChanges(), this.stateChanges.next(); }
        _sortValues() { if (this.multiple) {
            let e = this.options.toArray();
            this._selectionModel.sort((i, n) => this.sortComparator ? this.sortComparator(i, n, e) : e.indexOf(i) - e.indexOf(n)), this.stateChanges.next();
        } }
        _propagateChanges(e) { let i; this.multiple ? i = this.selected.map(n => n.value) : i = this.selected ? this.selected.value : e, this._value = i, this.valueChange.emit(i), this._onChange(i), this.selectionChange.emit(this._getChangeEvent(i)), this._changeDetectorRef.markForCheck(); }
        _highlightCorrectOption() { if (this._keyManager)
            if (this.empty) {
                let e = -1;
                for (let i = 0; i < this.options.length; i++)
                    if (!this.options.get(i).disabled) {
                        e = i;
                        break;
                    }
                this._keyManager.setActiveItem(e);
            }
            else
                this._keyManager.setActiveItem(this._selectionModel.selected[0]); }
        _canOpen() { return !this._panelOpen && !this.disabled && this.options?.length > 0 && !!this._overlayDir; }
        focus(e) { this._elementRef.nativeElement.focus(e); }
        _getPanelAriaLabelledby() { if (this.ariaLabel)
            return null; let e = this._parentFormField?.getLabelId() || null, i = e ? e + " " : ""; return this.ariaLabelledby ? i + this.ariaLabelledby : e; }
        _getAriaActiveDescendant() { return this.panelOpen && this._keyManager && this._keyManager.activeItem ? this._keyManager.activeItem.id : null; }
        _getTriggerAriaLabelledby() { if (this.ariaLabel)
            return null; let e = this._parentFormField?.getLabelId() || ""; return this.ariaLabelledby && (e += " " + this.ariaLabelledby), e || (e = this._valueId), e; }
        get describedByIds() { return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ") || []; }
        setDescribedByIds(e) { let i = this._elementRef.nativeElement; e.length ? i.setAttribute("aria-describedby", e.join(" ")) : i.removeAttribute("aria-describedby"); }
        onContainerClick(e) { let i = _e(e); i && (i.tagName === "MAT-OPTION" || i.classList.contains("cdk-overlay-backdrop") || i.closest(".mat-mdc-select-panel")) || (this.focus(), this.open()); }
        get shouldLabelFloat() { return this.panelOpen || !this.empty || this.focused && !!this.placeholder; }
        static \u0275fac = function (i) { return new (i || a); };
        static \u0275cmp = t.\u0275\u0275defineComponent({ type: a, selectors: [["mat-select"]], contentQueries: function (i, n, r) { if (i & 1 && t.\u0275\u0275contentQuery(r, Q, 5)(r, O, 5)(r, S, 5), i & 2) {
                let l;
                t.\u0275\u0275queryRefresh(l = t.\u0275\u0275loadQuery()) && (n.customTrigger = l.first), t.\u0275\u0275queryRefresh(l = t.\u0275\u0275loadQuery()) && (n.options = l), t.\u0275\u0275queryRefresh(l = t.\u0275\u0275loadQuery()) && (n.optionGroups = l);
            } }, viewQuery: function (i, n) { if (i & 1 && t.\u0275\u0275viewQuery(ye, 5)(ve, 5)(K, 5), i & 2) {
                let r;
                t.\u0275\u0275queryRefresh(r = t.\u0275\u0275loadQuery()) && (n.trigger = r.first), t.\u0275\u0275queryRefresh(r = t.\u0275\u0275loadQuery()) && (n.panel = r.first), t.\u0275\u0275queryRefresh(r = t.\u0275\u0275loadQuery()) && (n._overlayDir = r.first);
            } }, hostAttrs: ["role", "combobox", "aria-haspopup", "listbox", 1, "mat-mdc-select"], hostVars: 21, hostBindings: function (i, n) { i & 1 && t.\u0275\u0275listener("keydown", function (l) { return n._handleKeydown(l); })("focus", function () { return n._onFocus(); })("blur", function () { return n._onBlur(); }), i & 2 && (t.\u0275\u0275attribute("id", n.id)("tabindex", n.disabled ? -1 : n.tabIndex)("aria-controls", n.panelOpen ? n.id + "-panel" : null)("aria-expanded", n.panelOpen)("aria-label", n.ariaLabel || null)("aria-required", n.required.toString())("aria-disabled", n.disabled.toString())("aria-invalid", n.errorState)("aria-activedescendant", n._getAriaActiveDescendant()), t.\u0275\u0275classProp("mat-mdc-select-disabled", n.disabled)("mat-mdc-select-invalid", n.errorState)("mat-mdc-select-required", n.required)("mat-mdc-select-empty", n.empty)("mat-mdc-select-multiple", n.multiple)("mat-select-open", n.panelOpen)); }, inputs: { userAriaDescribedBy: [0, "aria-describedby", "userAriaDescribedBy"], panelClass: "panelClass", disabled: [2, "disabled", "disabled", d], disableRipple: [2, "disableRipple", "disableRipple", d], tabIndex: [2, "tabIndex", "tabIndex", e => e == null ? 0 : z(e)], hideSingleSelectionIndicator: [2, "hideSingleSelectionIndicator", "hideSingleSelectionIndicator", d], placeholder: "placeholder", required: [2, "required", "required", d], multiple: [2, "multiple", "multiple", d], disableOptionCentering: [2, "disableOptionCentering", "disableOptionCentering", d], compareWith: "compareWith", value: "value", ariaLabel: [0, "aria-label", "ariaLabel"], ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"], errorStateMatcher: "errorStateMatcher", typeaheadDebounceInterval: [2, "typeaheadDebounceInterval", "typeaheadDebounceInterval", z], sortComparator: "sortComparator", id: "id", panelWidth: "panelWidth", canSelectNullableOptions: [2, "canSelectNullableOptions", "canSelectNullableOptions", d] }, outputs: { openedChange: "openedChange", _openedStream: "opened", _closedStream: "closed", selectionChange: "selectionChange", valueChange: "valueChange" }, exportAs: ["matSelect"], features: [t.\u0275\u0275ProvidersFeature([{ provide: T, useExisting: a }, { provide: C, useExisting: a }]), t.\u0275\u0275NgOnChangesFeature], ngContentSelectors: Ce, decls: 11, vars: 10, consts: [["fallbackOverlayOrigin", "cdkOverlayOrigin", "trigger", ""], ["panel", ""], ["cdk-overlay-origin", "", 1, "mat-mdc-select-trigger", 3, "click"], [1, "mat-mdc-select-value"], [1, "mat-mdc-select-placeholder", "mat-mdc-select-min-line"], [1, "mat-mdc-select-value-text"], [1, "mat-mdc-select-arrow-wrapper"], [1, "mat-mdc-select-arrow"], ["viewBox", "0 0 24 24", "width", "24px", "height", "24px", "focusable", "false", "aria-hidden", "true"], ["d", "M7 10l5 5 5-5z"], ["cdk-connected-overlay", "", "cdkConnectedOverlayHasBackdrop", "", "cdkConnectedOverlayBackdropClass", "cdk-overlay-transparent-backdrop", 3, "detach", "backdropClick", "overlayKeydown", "cdkConnectedOverlayDisableClose", "cdkConnectedOverlayPanelClass", "cdkConnectedOverlayScrollStrategy", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayPositions", "cdkConnectedOverlayWidth", "cdkConnectedOverlayFlexibleDimensions", "cdkConnectedOverlayUsePopover"], [1, "mat-mdc-select-min-line"], ["role", "listbox", "tabindex", "-1", 1, "mat-mdc-select-panel", "mdc-menu-surface", "mdc-menu-surface--open", 3, "keydown"]], template: function (i, n) { if (i & 1 && (t.\u0275\u0275projectionDef(be), t.\u0275\u0275elementStart(0, "div", 2, 0), t.\u0275\u0275listener("click", function () { return n.open(); }), t.\u0275\u0275elementStart(3, "div", 3), t.\u0275\u0275conditionalCreate(4, Se, 2, 1, "span", 4)(5, we, 3, 1, "span", 5), t.\u0275\u0275elementEnd(), t.\u0275\u0275elementStart(6, "div", 6)(7, "div", 7), t.\u0275\u0275namespaceSVG(), t.\u0275\u0275elementStart(8, "svg", 8), t.\u0275\u0275element(9, "path", 9), t.\u0275\u0275elementEnd()()()(), t.\u0275\u0275template(10, ke, 3, 16, "ng-template", 10), t.\u0275\u0275listener("detach", function () { return n.close(); })("backdropClick", function () { return n.close(); })("overlayKeydown", function (l) { return n._handleOverlayKeydown(l); })), i & 2) {
                let r = t.\u0275\u0275reference(1);
                t.\u0275\u0275advance(3), t.\u0275\u0275attribute("id", n._valueId), t.\u0275\u0275advance(), t.\u0275\u0275conditional(n.empty ? 4 : 5), t.\u0275\u0275advance(6), t.\u0275\u0275property("cdkConnectedOverlayDisableClose", !0)("cdkConnectedOverlayPanelClass", n._overlayPanelClass)("cdkConnectedOverlayScrollStrategy", n._scrollStrategy)("cdkConnectedOverlayOrigin", n._preferredOverlayOrigin || r)("cdkConnectedOverlayPositions", n._positions)("cdkConnectedOverlayWidth", n._overlayWidth)("cdkConnectedOverlayFlexibleDimensions", !0)("cdkConnectedOverlayUsePopover", n._popoverLocation);
            } }, dependencies: [B, K], styles: [`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--%NS%mat-select-enabled-trigger-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-select-trigger-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-select-trigger-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-select-trigger-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-select-trigger-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-select-trigger-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--%NS%mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-select-invalid-arrow-color, var(--%NS%mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--%NS%mat-select-enabled-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-focused-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-disabled-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--%NS%mat-select-panel-background-color, var(--%NS%mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear forwards;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--%NS%mat-select-placeholder-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--%NS%mat-select-arrow-transform, translateY(-8px));
}
`], encapsulation: 2 });
    }
    return a;
})(), gt = (() => { class a {
    static \u0275fac = function (i) { return new (i || a); };
    static \u0275dir = t.\u0275\u0275defineDirective({ type: a, selectors: [["mat-select-trigger"]], features: [t.\u0275\u0275ProvidersFeature([{ provide: Q, useExisting: a }])] });
} return a; })(), yt = (() => { class a {
    static \u0275fac = function (i) { return new (i || a); };
    static \u0275mod = t.\u0275\u0275defineNgModule({ type: a });
    static \u0275inj = t.\u0275\u0275defineInjector({ imports: [le, m, Z, se, N, m] });
} return a; })();
export { xe as a, De as b, Q as c, y as d, ft as e, gt as f, yt as g };
