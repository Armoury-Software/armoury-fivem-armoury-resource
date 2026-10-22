import * as n from "@angular/core";
import "@angular/core";
var a = ["*"], m = (() => {
    class e {
        labelPosition = "after";
        static \u0275fac = function (i) { return new (i || e); };
        static \u0275cmp = n.\u0275\u0275defineComponent({ type: e, selectors: [["", "mat-internal-form-field", ""]], hostAttrs: [1, "mdc-form-field", "mat-internal-form-field"], hostVars: 2, hostBindings: function (i, l) { i & 2 && n.\u0275\u0275classProp("mdc-form-field--align-end", l.labelPosition === "before"); }, inputs: { labelPosition: "labelPosition" }, ngContentSelectors: a, decls: 1, vars: 0, template: function (i, l) { i & 1 && (n.\u0275\u0275projectionDef(), n.\u0275\u0275projection(0)); }, styles: [`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label, .mat-internal-form-field > .mat-internal-form-field-label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label, [dir=rtl] .mat-internal-form-field > .mat-internal-form-field-label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label, .mdc-form-field--align-end > .mat-internal-form-field-label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label, [dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end .mat-internal-form-field-label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`], encapsulation: 2 });
    }
    return e;
})();
export { m as a };
