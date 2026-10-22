import { isSignal as a } from "@angular/core";
var o = class {
    _defaultMatcher;
    _parentFormGroup;
    _parentForm;
    _stateChanges;
    errorState = !1;
    matcher;
    ngControl;
    formField;
    constructor(r, t, e, s, n) { this._defaultMatcher = r, this._parentFormGroup = e, this._parentForm = s, this._stateChanges = n, t ? a(t.field) && !t.updateValueAndValidity ? (this.formField = t, this.ngControl = null) : (this.formField = null, this.ngControl = t) : this.ngControl = this.formField = null; }
    updateErrorState() { let r = this.errorState, t = this._getCurrentErrorState(this.matcher || this._defaultMatcher); t !== r && (this.errorState = t, this._stateChanges.next()); }
    _getCurrentErrorState(r) { if (this.formField && r?.isSignalErrorState)
        return r.isSignalErrorState(this.formField.field()) ?? !1; let t = this._parentFormGroup || this._parentForm, e = this.ngControl ? this.ngControl.control : null; return r?.isErrorState(e, t) ?? !1; }
};
export { o as a };
