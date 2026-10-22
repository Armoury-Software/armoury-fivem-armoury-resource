import { MatDialog as N } from "@angular/material/dialog";
import { inject as O, isDevMode as L } from "@angular/core";
import { inject as P, output as R } from "@angular/core";
import { MAT_DIALOG_DATA as E } from "@angular/material/dialog";
import { computed as _, DestroyRef as C, inject as x, input as g, output as k, viewChildren as M } from "@angular/core";
import { CdkDrag as v, CdkDropList as w, moveItemInArray as I } from "@angular/cdk/drag-drop";
import { input as S } from "@angular/core";
import * as o from "@angular/core";
var u = class d {
    slot = S.required();
    static \u0275fac = function (e) { return new (e || d); };
    static \u0275cmp = o.\u0275\u0275defineComponent({ type: d, selectors: [["app-inventory-stash-slot"]], inputs: { slot: [1, "slot"] }, decls: 6, vars: 2, consts: [[1, "item__preview"], [1, "item__type"], [1, "item__amount"]], template: function (e, n) { e & 1 && (o.\u0275\u0275domElementStart(0, "div", 0), o.\u0275\u0275text(1), o.\u0275\u0275domElementEnd(), o.\u0275\u0275domElementStart(2, "div", 1), o.\u0275\u0275text(3, "A"), o.\u0275\u0275domElementEnd(), o.\u0275\u0275domElementStart(4, "div", 2), o.\u0275\u0275text(5), o.\u0275\u0275domElementEnd()), e & 2 && (o.\u0275\u0275advance(), o.\u0275\u0275textInterpolate(n.slot().itemIdentifier), o.\u0275\u0275advance(4), o.\u0275\u0275textInterpolate(n.slot().amount)); }, styles: ["[_nghost-%COMP%]{border:solid 2px rgba(204,204,204,.6274509804);box-sizing:border-box;cursor:move;background:#ffffff40;text-align:center;font-size:14px;font-family:sans-serif;position:relative;flex-shrink:0;align-self:flex-start;aspect-ratio:1/1;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));grid-template-rows:minmax(0,1fr) auto}.drag-disabled[_nghost-%COMP%], .drag-disabled   [_nghost-%COMP%]{cursor:default}.item__preview[_ngcontent-%COMP%]{grid-column:1/-1}"] });
};
import * as t from "@angular/core";
function A(d, i) { if (d & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "div", 2), t.\u0275\u0275listener("cdkDragStarted", function (s) { t.\u0275\u0275restoreView(e); let a = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(a.startReorderAnimation(s.source)); })("cdkDragEnded", function () { t.\u0275\u0275restoreView(e); let s = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(s.endReorderAnimation()); }), t.\u0275\u0275element(1, "app-inventory-stash-slot", 3), t.\u0275\u0275elementEnd();
} if (d & 2) {
    let e = i.$implicit;
    t.\u0275\u0275classProp("drag-disabled", e.itemIdentifier == null), t.\u0275\u0275property("cdkDragDisabled", e.itemIdentifier == null), t.\u0275\u0275advance(), t.\u0275\u0275property("slot", e);
} }
var h = class d {
    drags = M(v);
    slotPositions = new Map;
    slotAnimations = new Map;
    activeDrag;
    id = g.required();
    items = g.required();
    maxSlots = g();
    orientation = g("mixed");
    changed = k();
    slots = _(() => this.items().length);
    effectiveMaxSlots = _(() => this.maxSlots() ? Math.max(this.maxSlots(), this.slots()) : this.slots());
    constructor() { x(C).onDestroy(() => this.cancelSlotAnimations()); }
    startReorderAnimation(i) { this.activeDrag = i, this.cancelSlotAnimations(), this.slotPositions.clear(); for (let e of this.drags())
        e !== this.activeDrag && this.slotPositions.set(e, e.getRootElement().getBoundingClientRect()); }
    animateReorder() { let i = window.matchMedia("(prefers-reduced-motion: reduce)").matches, e = this.drags().filter(n => n !== this.activeDrag).map(n => { let s = n.getRootElement(), a = s.firstElementChild, c = this.slotPositions.get(n), m = s.getBoundingClientRect(), l = this.slotAnimations.has(n) ? a.getBoundingClientRect() : m; return this.slotPositions.set(n, m), { drag: n, card: a, previous: c, current: m, visual: l }; }); for (let { drag: n, card: s, previous: a, current: c, visual: m } of e) {
        if (this.slotAnimations.get(n)?.cancel(), this.slotAnimations.delete(n), i || !a)
            continue;
        let l = a.left - c.left + m.left - c.left, y = a.top - c.top + m.top - c.top;
        if (l === 0 && y === 0)
            continue;
        let f = s.animate([{ transform: `translate(${l}px, ${y}px)` }, { transform: "translate(0, 0)" }], { duration: 180, easing: "cubic-bezier(0.2, 0, 0, 1)" });
        this.slotAnimations.set(n, f), f.onfinish = () => { this.slotAnimations.get(n) === f && this.slotAnimations.delete(n); };
    } }
    endReorderAnimation() { this.activeDrag = void 0, this.slotPositions.clear(); }
    cancelSlotAnimations() { for (let i of this.slotAnimations.values())
        i.cancel(); this.slotAnimations.clear(); }
    drop(i) { let { previousContainer: e, container: n, previousIndex: s, currentIndex: a } = i; if (e !== n || s === a)
        return; let c = [], m = a > s ? -1 : 1; for (let l = Math.min(s, a); l <= Math.max(s, a); l++)
        c.push({ type: "reorder", previousIndex: l, currentIndex: l === s ? a : l + m }); I(this.items(), s, a), this.changed.emit({ stashId: this.id(), actions: c }); }
    static \u0275fac = function (e) { return new (e || d); };
    static \u0275cmp = t.\u0275\u0275defineComponent({ type: d, selectors: [["app-inventory-stash"]], viewQuery: function (e, n) { e & 1 && t.\u0275\u0275viewQuerySignal(n.drags, v, 5), e & 2 && t.\u0275\u0275queryAdvance(); }, inputs: { id: [1, "id"], items: [1, "items"], maxSlots: [1, "maxSlots"], orientation: [1, "orientation"] }, outputs: { changed: "changed" }, decls: 3, vars: 2, consts: [["cdkDropList", "", 1, "list", 3, "cdkDropListSorted", "cdkDropListDropped", "cdkDropListData", "cdkDropListOrientation"], ["cdkDrag", "", 1, "list__item", 3, "cdkDragDisabled", "drag-disabled"], ["cdkDrag", "", 1, "list__item", 3, "cdkDragStarted", "cdkDragEnded", "cdkDragDisabled"], [1, "list__slot", 3, "slot"]], template: function (e, n) { e & 1 && (t.\u0275\u0275elementStart(0, "div", 0), t.\u0275\u0275listener("cdkDropListSorted", function () { return n.animateReorder(); })("cdkDropListDropped", function (a) { return n.drop(a); }), t.\u0275\u0275repeaterCreate(1, A, 2, 4, "div", 1, t.\u0275\u0275repeaterTrackByIdentity), t.\u0275\u0275elementEnd()), e & 2 && (t.\u0275\u0275property("cdkDropListData", n.items())("cdkDropListOrientation", n.orientation()), t.\u0275\u0275advance(), t.\u0275\u0275repeater(n.items())); }, dependencies: [u, w, v], styles: [".list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;width:100%;max-width:100%;gap:18px;padding:15px;border:solid 2px #ccc;min-height:60px;overflow:hidden;box-sizing:border-box}.list__item[_ngcontent-%COMP%]{width:72px;flex-shrink:0;align-self:flex-start;cursor:move}.list__item.drag-disabled[_ngcontent-%COMP%]{cursor:default}.list__slot[_ngcontent-%COMP%]{width:100%;pointer-events:none}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:.25}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .18s cubic-bezier(.2,0,0,1)}@media(prefers-reduced-motion:reduce){.cdk-drag-animating[_ngcontent-%COMP%]{transition:none}}"] });
};
import * as r from "@angular/core";
var p = class d {
    data = P(E);
    changed = R();
    onChanged(i) { console.log("changes are", i), this.changed.emit(i); }
    static \u0275fac = function (e) { return new (e || d); };
    static \u0275cmp = r.\u0275\u0275defineComponent({ type: d, selectors: [["ng-component"]], outputs: { changed: "changed" }, decls: 3, vars: 3, consts: [[3, "changed", "id", "maxSlots", "items"]], template: function (e, n) { e & 1 && (r.\u0275\u0275elementStart(0, "h3"), r.\u0275\u0275text(1, "My stash"), r.\u0275\u0275elementEnd(), r.\u0275\u0275elementStart(2, "app-inventory-stash", 0), r.\u0275\u0275listener("changed", function (a) { return n.onChanged(a); }), r.\u0275\u0275elementEnd()), e & 2 && (r.\u0275\u0275advance(2), r.\u0275\u0275property("id", "character_main")("maxSlots", 26)("items", n.data.stashes.character_main)); }, dependencies: [h], styles: ["[_nghost-%COMP%]{display:block;padding:14px 22px;height:100%}"] });
};
import * as b from "@angular/core";
var D = class d {
    dialog = O(N);
    handleMessage(i) { L() && console.log("Received message", i), i.type === "inventory:my-stash:open" && this.openInventory(i); }
    openInventory(i) { this.dialog.openDialogs.some(e => e.componentInstance instanceof p) || this.dialog.open(p, { width: "100%", maxWidth: "100%", height: "100%", maxHeight: "100%", backdropClass: "dialog__backdrop--harder", panelClass: "dialog__no-default-background", data: i }); }
    static \u0275fac = function (e) { return new (e || d); };
    static \u0275prov = b.\u0275\u0275defineInjectable({ token: d, factory: d.\u0275fac, providedIn: "root" });
};
export { D as NuiHandler };
