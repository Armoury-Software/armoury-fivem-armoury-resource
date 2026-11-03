import "@nf-internal/chunk-2NFLSA4Y";
import { input as _, output as x } from "@angular/core";
import { CommonModule as b } from "@angular/common";
import * as e from "@angular/core";
import * as l from "@angular/common";
function P(i, a) { i & 1 && (e.\u0275\u0275domElementStart(0, "div", 3), e.\u0275\u0275text(1, "Out of Stock"), e.\u0275\u0275domElementEnd()); }
function h(i, a) { if (i & 1 && (e.\u0275\u0275domElementStart(0, "span"), e.\u0275\u0275text(1, "\u2605"), e.\u0275\u0275domElementEnd()), i & 2) {
    let n = a.$implicit;
    e.\u0275\u0275classProp("filled", n);
} }
var s = class i {
    product = _.required();
    productClick = x();
    getStars() { let a = this.product().rating, n = Math.floor(a), r = a % 1 >= .5; return Array(5).fill(!1).map((c, p) => !!(p < n || p === n && r)); }
    static \u0275fac = function (n) { return new (n || i); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["shop-product-card"]], inputs: { product: [1, "product"] }, outputs: { productClick: "productClick" }, decls: 18, vars: 12, consts: [["tabindex", "0", "role", "button", 1, "product-card", 3, "click", "keyup.enter", "keyup.space"], [1, "product-image"], [3, "src", "alt"], [1, "out-of-stock-overlay"], [1, "product-info"], [1, "product-name"], [1, "product-category"], [1, "product-rating"], [1, "stars"], [3, "filled"], [1, "review-count"], [1, "product-price"]], template: function (n, r) { n & 1 && (e.\u0275\u0275domElementStart(0, "div", 0), e.\u0275\u0275domListener("click", function () { return r.productClick.emit(r.product()); })("keyup.enter", function () { return r.productClick.emit(r.product()); })("keyup.space", function () { return r.productClick.emit(r.product()); }), e.\u0275\u0275domElementStart(1, "div", 1), e.\u0275\u0275domElement(2, "img", 2), e.\u0275\u0275conditionalCreate(3, P, 2, 0, "div", 3), e.\u0275\u0275domElementEnd(), e.\u0275\u0275domElementStart(4, "div", 4)(5, "h3", 5), e.\u0275\u0275text(6), e.\u0275\u0275domElementEnd(), e.\u0275\u0275domElementStart(7, "p", 6), e.\u0275\u0275text(8), e.\u0275\u0275domElementEnd(), e.\u0275\u0275domElementStart(9, "div", 7)(10, "span", 8), e.\u0275\u0275repeaterCreate(11, h, 2, 2, "span", 9, e.\u0275\u0275repeaterTrackByIndex), e.\u0275\u0275domElementEnd(), e.\u0275\u0275domElementStart(13, "span", 10), e.\u0275\u0275text(14), e.\u0275\u0275domElementEnd()(), e.\u0275\u0275domElementStart(15, "div", 11), e.\u0275\u0275text(16), e.\u0275\u0275pipe(17, "currency"), e.\u0275\u0275domElementEnd()()()), n & 2 && (e.\u0275\u0275classProp("out-of-stock", !r.product().inStock), e.\u0275\u0275attribute("aria-label", "View details for " + r.product().name), e.\u0275\u0275advance(2), e.\u0275\u0275domProperty("src", r.product().imageUrl, e.\u0275\u0275sanitizeUrl)("alt", r.product().name), e.\u0275\u0275advance(), e.\u0275\u0275conditional(r.product().inStock ? -1 : 3), e.\u0275\u0275advance(3), e.\u0275\u0275textInterpolate(r.product().name), e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate(r.product().category), e.\u0275\u0275advance(3), e.\u0275\u0275repeater(r.getStars()), e.\u0275\u0275advance(3), e.\u0275\u0275textInterpolate1("(", r.product().reviewCount, ")"), e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate1(" ", e.\u0275\u0275pipeBind1(17, 10, r.product().price), " ")); }, dependencies: [b, l.CurrencyPipe], styles: [".product-card[_ngcontent-%COMP%]{border:1px solid #e0e0e0;border-radius:8px;overflow:hidden;cursor:pointer;transition:all .3s ease;background:#fff;height:100%;display:flex;flex-direction:column}.product-card[_ngcontent-%COMP%]:hover{transform:translateY(-4px);box-shadow:0 4px 12px #0000001a}.product-card.out-of-stock[_ngcontent-%COMP%]{opacity:.7}.product-image[_ngcontent-%COMP%]{position:relative;width:100%;padding-top:100%;overflow:hidden;background:#f5f5f5}.product-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover}.out-of-stock-overlay[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background:#000000b3;color:#fff;padding:8px 16px;border-radius:4px;font-weight:700}.product-info[_ngcontent-%COMP%]{padding:16px;flex:1;display:flex;flex-direction:column}.product-name[_ngcontent-%COMP%]{margin:0 0 8px;font-size:1.1rem;font-weight:600;color:#333;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.product-category[_ngcontent-%COMP%]{margin:0 0 8px;font-size:.9rem;color:#666}.product-rating[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;margin-bottom:12px}.stars[_ngcontent-%COMP%]{color:#ddd}.stars[_ngcontent-%COMP%]   .filled[_ngcontent-%COMP%]{color:gold}.review-count[_ngcontent-%COMP%]{font-size:.85rem;color:#666}.product-price[_ngcontent-%COMP%]{font-size:1.25rem;font-weight:700;color:#2c3e50;margin-top:auto}"] });
};
import { input as v, output as E } from "@angular/core";
import { CommonModule as M } from "@angular/common";
import * as o from "@angular/core";
var k = (i, a) => a.id;
function w(i, a) { if (i & 1) {
    let n = o.\u0275\u0275getCurrentView();
    o.\u0275\u0275elementStart(0, "shop-product-card", 3), o.\u0275\u0275listener("productClick", function (c) { o.\u0275\u0275restoreView(n); let p = o.\u0275\u0275nextContext(); return o.\u0275\u0275resetView(p.productSelect.emit(c)); }), o.\u0275\u0275elementEnd();
} if (i & 2) {
    let n = a.$implicit;
    o.\u0275\u0275property("product", n);
} }
function S(i, a) { i & 1 && (o.\u0275\u0275elementStart(0, "div", 2)(1, "p"), o.\u0275\u0275text(2, "No products found"), o.\u0275\u0275elementEnd()()); }
var u = class i {
    products = v.required();
    productSelect = E();
    static \u0275fac = function (n) { return new (n || i); };
    static \u0275cmp = o.\u0275\u0275defineComponent({ type: i, selectors: [["shop-product-grid"]], inputs: { products: [1, "products"] }, outputs: { productSelect: "productSelect" }, decls: 4, vars: 1, consts: [[1, "product-grid"], [3, "product"], [1, "no-products"], [3, "productClick", "product"]], template: function (n, r) { n & 1 && (o.\u0275\u0275elementStart(0, "div", 0), o.\u0275\u0275repeaterCreate(1, w, 1, 1, "shop-product-card", 1, k, !1, S, 3, 0, "div", 2), o.\u0275\u0275elementEnd()), n & 2 && (o.\u0275\u0275advance(), o.\u0275\u0275repeater(r.products())); }, dependencies: [M, s], styles: [".product-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:24px;padding:24px 0}.no-products[_ngcontent-%COMP%]{grid-column:1 / -1;text-align:center;padding:48px;color:#666;font-size:1.1rem}@media(max-width:768px){.product-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:16px}}"] });
};
import { CommonModule as O } from "@angular/common";
import * as d from "@angular/core";
var f = class i {
    static \u0275fac = function (n) { return new (n || i); };
    static \u0275cmp = d.\u0275\u0275defineComponent({ type: i, selectors: [["shop-loading-spinner"]], decls: 4, vars: 0, consts: [[1, "spinner-container"], [1, "spinner"]], template: function (n, r) { n & 1 && (d.\u0275\u0275domElementStart(0, "div", 0), d.\u0275\u0275domElement(1, "div", 1), d.\u0275\u0275domElementStart(2, "p"), d.\u0275\u0275text(3, "Loading..."), d.\u0275\u0275domElementEnd()()); }, dependencies: [O], styles: [".spinner-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:48px}.spinner[_ngcontent-%COMP%]{width:40px;height:40px;border:4px solid #f3f3f3;border-top:4px solid #3498db;border-radius:50%;animation:_ngcontent-%COMP%_spin 1s linear infinite}@keyframes _ngcontent-%COMP%_spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}p[_ngcontent-%COMP%]{margin-top:16px;color:#666;font-size:1rem}"] });
};
import { input as m, output as D } from "@angular/core";
import { CommonModule as T } from "@angular/common";
import * as t from "@angular/core";
function N(i, a) { if (i & 1) {
    let n = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275domElementStart(0, "button", 3), t.\u0275\u0275domListener("click", function () { t.\u0275\u0275restoreView(n); let c = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(c.retry.emit()); }), t.\u0275\u0275text(1, "Try Again"), t.\u0275\u0275domElementEnd();
} }
var g = class i {
    title = m();
    message = m();
    showRetry = m(!0);
    retry = D();
    static \u0275fac = function (n) { return new (n || i); };
    static \u0275cmp = t.\u0275\u0275defineComponent({ type: i, selectors: [["shop-error-message"]], inputs: { title: [1, "title"], message: [1, "message"], showRetry: [1, "showRetry"] }, outputs: { retry: "retry" }, decls: 8, vars: 3, consts: [[1, "error-container"], [1, "error-icon"], [1, "retry-button"], [1, "retry-button", 3, "click"]], template: function (n, r) { n & 1 && (t.\u0275\u0275domElementStart(0, "div", 0)(1, "div", 1), t.\u0275\u0275text(2, "\u26A0\uFE0F"), t.\u0275\u0275domElementEnd(), t.\u0275\u0275domElementStart(3, "h3"), t.\u0275\u0275text(4), t.\u0275\u0275domElementEnd(), t.\u0275\u0275domElementStart(5, "p"), t.\u0275\u0275text(6), t.\u0275\u0275domElementEnd(), t.\u0275\u0275conditionalCreate(7, N, 2, 0, "button", 2), t.\u0275\u0275domElementEnd()), n & 2 && (t.\u0275\u0275advance(4), t.\u0275\u0275textInterpolate(r.title() || "Oops! Something went wrong"), t.\u0275\u0275advance(2), t.\u0275\u0275textInterpolate1(" ", r.message() || "An unexpected error occurred. Please try again later.", " "), t.\u0275\u0275advance(), t.\u0275\u0275conditional(r.showRetry() ? 7 : -1)); }, dependencies: [T], styles: [".error-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:48px;text-align:center;background:#fff;border-radius:8px;border:1px solid #e0e0e0}.error-icon[_ngcontent-%COMP%]{font-size:48px;margin-bottom:16px}h3[_ngcontent-%COMP%]{margin:0 0 8px;font-size:1.5rem;color:#333}p[_ngcontent-%COMP%]{margin:0 0 24px;color:#666;font-size:1rem;max-width:400px}.retry-button[_ngcontent-%COMP%]{background:#3498db;color:#fff;border:none;padding:12px 24px;border-radius:4px;font-size:1rem;cursor:pointer;transition:background .3s ease}.retry-button[_ngcontent-%COMP%]:hover{background:#2980b9}"] });
};
import * as y from "@angular/core";
var C = class i {
    formatter = new Intl.NumberFormat("en", { notation: "compact", compactDisplay: "short", maximumFractionDigits: 1 });
    transform(a) { if (a == null || !Number.isFinite(a))
        return ""; let r = ([1e12, 1e9, 1e6, 1e3].find(c => Math.abs(a) >= c) ?? 1) / 10; return this.formatter.format(Math.trunc(a / r) * r); }
    static \u0275fac = function (n) { return new (n || i); };
    static \u0275pipe = y.\u0275\u0275definePipe({ name: "compactNumber", type: i, pure: !0 });
};
export { C as CompactNumberPipe, g as ErrorMessageComponent, f as LoadingSpinnerComponent, s as ProductCardComponent, u as ProductGridComponent };
