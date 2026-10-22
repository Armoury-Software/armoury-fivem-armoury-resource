import "@nf-internal/chunk-2NFLSA4Y";
import * as t from "@angular/core";
import { booleanAttribute as T } from "@angular/core";
import { CdkTable as y, HeaderRowOutlet as E, DataRowOutlet as P, NoDataRowOutlet as A, FooterRowOutlet as B, CDK_TABLE as z, STICKY_POSITIONING_LISTENER as O, CdkCell as H, CdkCellDef as b, CdkColumnDef as v, CdkFooterCell as j, CdkFooterCellDef as w, CdkHeaderCell as L, CdkHeaderCellDef as D, CdkFooterRow as x, CdkCellOutlet as h, CdkFooterRowDef as C, CdkHeaderRow as _, CdkHeaderRowDef as F, CdkNoDataRow as S, CdkRow as N, CdkRowDef as M, CdkTextColumn as V, CdkTableModule as $ } from "@angular/cdk/table";
import { BehaviorSubject as m, Subject as G, merge as I, of as k, combineLatest as u } from "rxjs";
import { DataSource as K } from "@angular/cdk/collections";
import { _isNumberValue as W } from "@angular/cdk/coercion";
import { map as f } from "rxjs/operators";
import { BidiModule as X } from "@angular/cdk/bidi";
var q = [[["caption"]], [["colgroup"], ["col"]], "*"], Y = ["caption", "colgroup, col", "*"];
function J(e, r) { e & 1 && t.\u0275\u0275projection(0, 2); }
function Q(e, r) { e & 1 && (t.\u0275\u0275elementStart(0, "thead", 0), t.\u0275\u0275elementContainer(1, 1), t.\u0275\u0275elementEnd(), t.\u0275\u0275elementStart(2, "tbody", 2), t.\u0275\u0275elementContainer(3, 3)(4, 4), t.\u0275\u0275elementEnd(), t.\u0275\u0275elementStart(5, "tfoot", 0), t.\u0275\u0275elementContainer(6, 5), t.\u0275\u0275elementEnd()); }
function U(e, r) { e & 1 && t.\u0275\u0275elementContainer(0, 1)(1, 3)(2, 4)(3, 5); }
function Z(e, r) { if (e & 1 && (t.\u0275\u0275elementStart(0, "th", 3), t.\u0275\u0275text(1), t.\u0275\u0275elementEnd()), e & 2) {
    let a = t.\u0275\u0275nextContext();
    t.\u0275\u0275styleProp("text-align", a.justify), t.\u0275\u0275advance(), t.\u0275\u0275textInterpolate1(" ", a.headerText, " ");
} }
function ee(e, r) { if (e & 1 && (t.\u0275\u0275elementStart(0, "td", 4), t.\u0275\u0275text(1), t.\u0275\u0275elementEnd()), e & 2) {
    let a = r.$implicit, n = t.\u0275\u0275nextContext();
    t.\u0275\u0275styleProp("text-align", n.justify), t.\u0275\u0275advance(), t.\u0275\u0275textInterpolate1(" ", n.dataAccessor(a, n.name), " ");
} }
var we = (() => { class e {
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275dir = t.\u0275\u0275defineDirective({ type: e, selectors: [["mat-table", "recycleRows", ""], ["table", "mat-table", "", "recycleRows", ""]] });
} return e; })(), De = (() => {
    class e extends y {
        stickyCssClass = "mat-mdc-table-sticky";
        needsPositionStickyOnElement = !1;
        static \u0275fac = (() => { let a; return function (i) { return (a || (a = t.\u0275\u0275getInheritedFactory(e)))(i || e); }; })();
        static \u0275cmp = t.\u0275\u0275defineComponent({ type: e, selectors: [["mat-table"], ["table", "mat-table", ""]], hostAttrs: [1, "mat-mdc-table", "mdc-data-table__table"], hostVars: 2, hostBindings: function (n, i) { n & 2 && t.\u0275\u0275classProp("mat-table-fixed-layout", i.fixedLayout); }, exportAs: ["matTable"], features: [t.\u0275\u0275ProvidersFeature([{ provide: y, useExisting: e }, { provide: z, useExisting: e }, { provide: O, useValue: null }]), t.\u0275\u0275InheritDefinitionFeature], ngContentSelectors: Y, decls: 5, vars: 2, consts: [["role", "rowgroup"], ["headerRowOutlet", ""], ["role", "rowgroup", 1, "mdc-data-table__content"], ["rowOutlet", ""], ["noDataRowOutlet", ""], ["footerRowOutlet", ""]], template: function (n, i) { n & 1 && (t.\u0275\u0275projectionDef(q), t.\u0275\u0275projection(0), t.\u0275\u0275projection(1, 1), t.\u0275\u0275conditionalCreate(2, J, 1, 0), t.\u0275\u0275conditionalCreate(3, Q, 7, 0)(4, U, 4, 0)), n & 2 && (t.\u0275\u0275advance(2), t.\u0275\u0275conditional(i._isServer ? 2 : -1), t.\u0275\u0275advance(), t.\u0275\u0275conditional(i._isNativeHtmlTable ? 3 : 4)); }, dependencies: [E, P, A, B], styles: [`.mat-mdc-table-sticky {
  position: sticky !important;
}

mat-table {
  display: block;
}

mat-header-row {
  min-height: var(--%NS%mat-table-header-container-height, 56px);
}

mat-row {
  min-height: var(--%NS%mat-table-row-item-container-height, 52px);
}

mat-footer-row {
  min-height: var(--%NS%mat-table-footer-container-height, 52px);
}

mat-row, mat-header-row, mat-footer-row {
  display: flex;
  border-width: 0;
  border-bottom-width: 1px;
  border-style: solid;
  align-items: center;
  box-sizing: border-box;
}

mat-cell:first-of-type, mat-header-cell:first-of-type, mat-footer-cell:first-of-type {
  padding-left: 24px;
}
[dir=rtl] mat-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type) {
  padding-left: 0;
  padding-right: 24px;
}
mat-cell:last-of-type, mat-header-cell:last-of-type, mat-footer-cell:last-of-type {
  padding-right: 24px;
}
[dir=rtl] mat-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type) {
  padding-right: 0;
  padding-left: 24px;
}

mat-cell, mat-header-cell, mat-footer-cell {
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  word-wrap: break-word;
  min-height: inherit;
}

.mat-mdc-table {
  min-width: 100%;
  border: 0;
  border-spacing: 0;
  table-layout: auto;
  white-space: normal;
  background-color: var(--%NS%mat-table-background-color, var(--%NS%mat-sys-surface));
}

.mat-table-fixed-layout {
  table-layout: fixed;
}

.mdc-data-table__cell {
  box-sizing: border-box;
  overflow: hidden;
  text-align: start;
  text-overflow: ellipsis;
}

.mdc-data-table__cell,
.mdc-data-table__header-cell {
  padding: 0 16px;
}

.mat-mdc-header-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--%NS%mat-table-header-container-height, 56px);
  color: var(--%NS%mat-table-header-headline-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-table-header-headline-font, var(--%NS%mat-sys-title-small-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-header-headline-line-height, var(--%NS%mat-sys-title-small-line-height));
  font-size: var(--%NS%mat-table-header-headline-size, var(--%NS%mat-sys-title-small-size, 14px));
  font-weight: var(--%NS%mat-table-header-headline-weight, var(--%NS%mat-sys-title-small-weight, 500));
}

.mat-mdc-row {
  height: var(--%NS%mat-table-row-item-container-height, 52px);
  color: var(--%NS%mat-table-row-item-label-text-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
}

.mat-mdc-row,
.mdc-data-table__content {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-table-row-item-label-text-font, var(--%NS%mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-row-item-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-table-row-item-label-text-size, var(--%NS%mat-sys-body-medium-size, 14px));
  font-weight: var(--%NS%mat-table-row-item-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}

.mat-mdc-footer-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--%NS%mat-table-footer-container-height, 52px);
  color: var(--%NS%mat-table-row-item-label-text-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-table-footer-supporting-text-font, var(--%NS%mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-footer-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-table-footer-supporting-text-size, var(--%NS%mat-sys-body-medium-size, 14px));
  font-weight: var(--%NS%mat-table-footer-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  letter-spacing: var(--%NS%mat-table-footer-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
}

.mat-mdc-header-cell {
  border-bottom-color: var(--%NS%mat-table-row-item-outline-color, var(--%NS%mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--%NS%mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--%NS%mat-table-header-headline-tracking, var(--%NS%mat-sys-title-small-tracking));
  font-weight: inherit;
  line-height: inherit;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: none;
  text-align: start;
}
.mdc-data-table__row:last-child > .mat-mdc-header-cell {
  border-bottom: none;
}

.mat-mdc-cell {
  border-bottom-color: var(--%NS%mat-table-row-item-outline-color, var(--%NS%mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--%NS%mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--%NS%mat-table-row-item-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  line-height: inherit;
}
.mdc-data-table__row:last-child > .mat-mdc-cell {
  border-bottom: none;
}

.mat-mdc-footer-cell {
  letter-spacing: var(--%NS%mat-table-row-item-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
}

mat-row.mat-mdc-row,
mat-header-row.mat-mdc-header-row,
mat-footer-row.mat-mdc-footer-row {
  border-bottom: none;
}

.mat-mdc-table tbody,
.mat-mdc-table tfoot,
.mat-mdc-table thead,
.mat-mdc-cell,
.mat-mdc-footer-cell,
.mat-mdc-header-row,
.mat-mdc-row,
.mat-mdc-footer-row,
.mat-mdc-table .mat-mdc-header-cell {
  background: inherit;
}

.mat-mdc-table mat-header-row.mat-mdc-header-row,
.mat-mdc-table mat-row.mat-mdc-row,
.mat-mdc-table mat-footer-row.mat-mdc-footer-cell {
  height: unset;
}

mat-header-cell.mat-mdc-header-cell,
mat-cell.mat-mdc-cell,
mat-footer-cell.mat-mdc-footer-cell {
  align-self: stretch;
}
`], encapsulation: 2, changeDetection: 1 });
    }
    return e;
})(), te = (() => { class e extends b {
    static \u0275fac = (() => { let a; return function (i) { return (a || (a = t.\u0275\u0275getInheritedFactory(e)))(i || e); }; })();
    static \u0275dir = t.\u0275\u0275defineDirective({ type: e, selectors: [["", "matCellDef", ""]], features: [t.\u0275\u0275ProvidersFeature([{ provide: b, useExisting: e }]), t.\u0275\u0275InheritDefinitionFeature] });
} return e; })(), ae = (() => { class e extends D {
    static \u0275fac = (() => { let a; return function (i) { return (a || (a = t.\u0275\u0275getInheritedFactory(e)))(i || e); }; })();
    static \u0275dir = t.\u0275\u0275defineDirective({ type: e, selectors: [["", "matHeaderCellDef", ""]], features: [t.\u0275\u0275ProvidersFeature([{ provide: D, useExisting: e }]), t.\u0275\u0275InheritDefinitionFeature] });
} return e; })(), xe = (() => { class e extends w {
    static \u0275fac = (() => { let a; return function (i) { return (a || (a = t.\u0275\u0275getInheritedFactory(e)))(i || e); }; })();
    static \u0275dir = t.\u0275\u0275defineDirective({ type: e, selectors: [["", "matFooterCellDef", ""]], features: [t.\u0275\u0275ProvidersFeature([{ provide: w, useExisting: e }]), t.\u0275\u0275InheritDefinitionFeature] });
} return e; })(), ne = (() => { class e extends v {
    get name() { return this._name; }
    set name(a) { this._setNameInput(a); }
    _updateColumnCssClassName() { super._updateColumnCssClassName(), this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`); }
    static \u0275fac = (() => { let a; return function (i) { return (a || (a = t.\u0275\u0275getInheritedFactory(e)))(i || e); }; })();
    static \u0275dir = t.\u0275\u0275defineDirective({ type: e, selectors: [["", "matColumnDef", ""]], inputs: { name: [0, "matColumnDef", "name"] }, features: [t.\u0275\u0275ProvidersFeature([{ provide: v, useExisting: e }]), t.\u0275\u0275InheritDefinitionFeature] });
} return e; })(), ie = (() => { class e extends L {
    static \u0275fac = (() => { let a; return function (i) { return (a || (a = t.\u0275\u0275getInheritedFactory(e)))(i || e); }; })();
    static \u0275dir = t.\u0275\u0275defineDirective({ type: e, selectors: [["mat-header-cell"], ["th", "mat-header-cell", ""]], hostAttrs: ["role", "columnheader", 1, "mat-mdc-header-cell", "mdc-data-table__header-cell"], features: [t.\u0275\u0275InheritDefinitionFeature] });
} return e; })(), Ce = (() => { class e extends j {
    static \u0275fac = (() => { let a; return function (i) { return (a || (a = t.\u0275\u0275getInheritedFactory(e)))(i || e); }; })();
    static \u0275dir = t.\u0275\u0275defineDirective({ type: e, selectors: [["mat-footer-cell"], ["td", "mat-footer-cell", ""]], hostAttrs: [1, "mat-mdc-footer-cell", "mdc-data-table__cell"], features: [t.\u0275\u0275InheritDefinitionFeature] });
} return e; })(), re = (() => { class e extends H {
    static \u0275fac = (() => { let a; return function (i) { return (a || (a = t.\u0275\u0275getInheritedFactory(e)))(i || e); }; })();
    static \u0275dir = t.\u0275\u0275defineDirective({ type: e, selectors: [["mat-cell"], ["td", "mat-cell", ""]], hostAttrs: [1, "mat-mdc-cell", "mdc-data-table__cell"], features: [t.\u0275\u0275InheritDefinitionFeature] });
} return e; })();
var _e = (() => { class e extends F {
    static \u0275fac = (() => { let a; return function (i) { return (a || (a = t.\u0275\u0275getInheritedFactory(e)))(i || e); }; })();
    static \u0275dir = t.\u0275\u0275defineDirective({ type: e, selectors: [["", "matHeaderRowDef", ""]], inputs: { columns: [0, "matHeaderRowDef", "columns"], sticky: [2, "matHeaderRowDefSticky", "sticky", T] }, features: [t.\u0275\u0275ProvidersFeature([{ provide: F, useExisting: e }]), t.\u0275\u0275InheritDefinitionFeature] });
} return e; })(), Fe = (() => { class e extends C {
    static \u0275fac = (() => { let a; return function (i) { return (a || (a = t.\u0275\u0275getInheritedFactory(e)))(i || e); }; })();
    static \u0275dir = t.\u0275\u0275defineDirective({ type: e, selectors: [["", "matFooterRowDef", ""]], inputs: { columns: [0, "matFooterRowDef", "columns"], sticky: [2, "matFooterRowDefSticky", "sticky", T] }, features: [t.\u0275\u0275ProvidersFeature([{ provide: C, useExisting: e }]), t.\u0275\u0275InheritDefinitionFeature] });
} return e; })(), Se = (() => { class e extends M {
    static \u0275fac = (() => { let a; return function (i) { return (a || (a = t.\u0275\u0275getInheritedFactory(e)))(i || e); }; })();
    static \u0275dir = t.\u0275\u0275defineDirective({ type: e, selectors: [["", "matRowDef", ""]], inputs: { columns: [0, "matRowDefColumns", "columns"], when: [0, "matRowDefWhen", "when"] }, features: [t.\u0275\u0275ProvidersFeature([{ provide: M, useExisting: e }]), t.\u0275\u0275InheritDefinitionFeature] });
} return e; })(), Ne = (() => { class e extends _ {
    static \u0275fac = (() => { let a; return function (i) { return (a || (a = t.\u0275\u0275getInheritedFactory(e)))(i || e); }; })();
    static \u0275cmp = t.\u0275\u0275defineComponent({ type: e, selectors: [["mat-header-row"], ["tr", "mat-header-row", ""]], hostAttrs: ["role", "row", 1, "mat-mdc-header-row", "mdc-data-table__header-row"], exportAs: ["matHeaderRow"], features: [t.\u0275\u0275ProvidersFeature([{ provide: _, useExisting: e }]), t.\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function (n, i) { n & 1 && t.\u0275\u0275elementContainer(0, 0); }, dependencies: [h], encapsulation: 2, changeDetection: 1 });
} return e; })(), Me = (() => { class e extends x {
    static \u0275fac = (() => { let a; return function (i) { return (a || (a = t.\u0275\u0275getInheritedFactory(e)))(i || e); }; })();
    static \u0275cmp = t.\u0275\u0275defineComponent({ type: e, selectors: [["mat-footer-row"], ["tr", "mat-footer-row", ""]], hostAttrs: ["role", "row", 1, "mat-mdc-footer-row", "mdc-data-table__row"], exportAs: ["matFooterRow"], features: [t.\u0275\u0275ProvidersFeature([{ provide: x, useExisting: e }]), t.\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function (n, i) { n & 1 && t.\u0275\u0275elementContainer(0, 0); }, dependencies: [h], encapsulation: 2, changeDetection: 1 });
} return e; })(), Ie = (() => { class e extends N {
    static \u0275fac = (() => { let a; return function (i) { return (a || (a = t.\u0275\u0275getInheritedFactory(e)))(i || e); }; })();
    static \u0275cmp = t.\u0275\u0275defineComponent({ type: e, selectors: [["mat-row"], ["tr", "mat-row", ""]], hostAttrs: ["role", "row", 1, "mat-mdc-row", "mdc-data-table__row"], exportAs: ["matRow"], features: [t.\u0275\u0275ProvidersFeature([{ provide: N, useExisting: e }]), t.\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function (n, i) { n & 1 && t.\u0275\u0275elementContainer(0, 0); }, dependencies: [h], encapsulation: 2, changeDetection: 1 });
} return e; })(), ke = (() => { class e extends S {
    _cellSelector = "td, mat-cell, [mat-cell], .mat-cell";
    constructor() { super(), this._contentClassNames.push("mat-mdc-no-data-row", "mat-mdc-row", "mdc-data-table__row"), this._cellClassNames.push("mat-mdc-cell", "mdc-data-table__cell", "mat-no-data-cell"); }
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275dir = t.\u0275\u0275defineDirective({ type: e, selectors: [["ng-template", "matNoDataRow", ""]], features: [t.\u0275\u0275ProvidersFeature([{ provide: S, useExisting: e }]), t.\u0275\u0275InheritDefinitionFeature] });
} return e; })(), Re = (() => { class e extends V {
    static \u0275fac = (() => { let a; return function (i) { return (a || (a = t.\u0275\u0275getInheritedFactory(e)))(i || e); }; })();
    static \u0275cmp = t.\u0275\u0275defineComponent({ type: e, selectors: [["mat-text-column"]], features: [t.\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 0, consts: [["matColumnDef", ""], ["mat-header-cell", "", 3, "text-align", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "text-align", 4, "matCellDef"], ["mat-header-cell", ""], ["mat-cell", ""]], template: function (n, i) { n & 1 && (t.\u0275\u0275elementContainerStart(0, 0), t.\u0275\u0275template(1, Z, 2, 3, "th", 1)(2, ee, 2, 3, "td", 2), t.\u0275\u0275elementContainerEnd()); }, dependencies: [ne, ae, ie, te, re], encapsulation: 2, changeDetection: 1 });
} return e; })();
var Te = (() => { class e {
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275mod = t.\u0275\u0275defineNgModule({ type: e });
    static \u0275inj = t.\u0275\u0275defineInjector({ imports: [$, X] });
} return e; })(), oe = 9007199254740991, R = class extends K {
    _data;
    _renderData = new m([]);
    _filter = new m("");
    _internalPageChanges = new G;
    _renderChangesSubscription = null;
    filteredData;
    get data() { return this._data.value; }
    set data(r) { r = Array.isArray(r) ? r : [], this._data.next(r), this._renderChangesSubscription || this._filterData(r); }
    get filter() { return this._filter.value; }
    set filter(r) { this._filter.next(r), this._renderChangesSubscription || this._filterData(this.data); }
    get sort() { return this._sort; }
    set sort(r) { this._sort = r, this._updateChangeSubscription(); }
    _sort;
    get paginator() { return this._paginator; }
    set paginator(r) { this._paginator = r, this._updateChangeSubscription(); }
    _paginator;
    sortingDataAccessor = (r, a) => { let n = r[a]; if (W(n)) {
        let i = Number(n);
        return i < oe ? i : n;
    } return n; };
    sortData = (r, a) => { let n = a.active, i = a.direction; return !n || i == "" ? r : r.sort((d, c) => { let o = this.sortingDataAccessor(d, n), l = this.sortingDataAccessor(c, n), p = typeof o, g = typeof l; p !== g && (p === "number" && (o += ""), g === "number" && (l += "")); let s = 0; return o != null && l != null ? o > l ? s = 1 : o < l && (s = -1) : o != null ? s = 1 : l != null && (s = -1), s * (i == "asc" ? 1 : -1); }); };
    filterPredicate = (r, a) => { let n = a.trim().toLowerCase(); return Object.values(r).some(i => `${i}`.toLowerCase().includes(n)); };
    constructor(r = []) { super(), this._data = new m(r), this._updateChangeSubscription(); }
    _updateChangeSubscription() { let r = this._sort ? I(this._sort.sortChange, this._sort.initialized) : k(null), a = this._paginator ? I(this._paginator.page, this._internalPageChanges, this._paginator.initialized) : k(null), n = this._data, i = u([n, this._filter]).pipe(f(([o]) => this._filterData(o))), d = u([i, r]).pipe(f(([o]) => this._orderData(o))), c = u([d, a]).pipe(f(([o]) => this._pageData(o))); this._renderChangesSubscription?.unsubscribe(), this._renderChangesSubscription = c.subscribe(o => this._renderData.next(o)); }
    _filterData(r) { return this.filteredData = this.filter == null || this.filter === "" ? r : r.filter(a => this.filterPredicate(a, this.filter)), this.paginator && this._updatePaginator(this.filteredData.length), this.filteredData; }
    _orderData(r) { return this.sort ? this.sortData(r.slice(), this.sort) : r; }
    _pageData(r) { if (!this.paginator)
        return r; let a = this.paginator.pageIndex * this.paginator.pageSize; return r.slice(a, a + this.paginator.pageSize); }
    _updatePaginator(r) { Promise.resolve().then(() => { let a = this.paginator; if (a && (a.length = r, a.pageIndex > 0)) {
        let n = Math.ceil(a.length / a.pageSize) - 1 || 0, i = Math.min(a.pageIndex, n);
        i !== a.pageIndex && (a.pageIndex = i, this._internalPageChanges.next());
    } }); }
    connect() { return this._renderChangesSubscription || this._updateChangeSubscription(), this._renderData; }
    disconnect() { this._renderChangesSubscription?.unsubscribe(), this._renderChangesSubscription = null; }
};
export { re as MatCell, te as MatCellDef, ne as MatColumnDef, Ce as MatFooterCell, xe as MatFooterCellDef, Me as MatFooterRow, Fe as MatFooterRowDef, ie as MatHeaderCell, ae as MatHeaderCellDef, Ne as MatHeaderRow, _e as MatHeaderRowDef, ke as MatNoDataRow, we as MatRecycleRows, Ie as MatRow, Se as MatRowDef, De as MatTable, R as MatTableDataSource, Te as MatTableModule, Re as MatTextColumn };
