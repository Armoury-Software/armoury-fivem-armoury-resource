var V = Object.defineProperty, X = Object.defineProperties;
var J = Object.getOwnPropertyDescriptors;
var D = Object.getOwnPropertySymbols;
var j = Object.prototype.hasOwnProperty, U = Object.prototype.propertyIsEnumerable;
var L = (n, e, t) => e in n ? V(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t, M = (n, e) => { for (var t in e ||= {})
    j.call(e, t) && L(n, t, e[t]); if (D)
    for (var t of D(e))
        U.call(e, t) && L(n, t, e[t]); return n; }, I = (n, e) => X(n, J(e));
var P = (n, e) => { var t = {}; for (var i in n)
    j.call(n, i) && e.indexOf(i) < 0 && (t[i] = n[i]); if (n != null && D)
    for (var i of D(n))
        e.indexOf(i) < 0 && U.call(n, i) && (t[i] = n[i]); return t; };
var k = (n, e, t) => new Promise((i, s) => { var h = o => { try {
    a(t.next(o));
}
catch (r) {
    s(r);
} }, l = o => { try {
    a(t.throw(o));
}
catch (r) {
    s(r);
} }, a = o => o.done ? i(o.value) : Promise.resolve(o.value).then(h, l); a((t = t.apply(n, e)).next()); });
var N = { hasSubscribers: !1 }, S = N, T = N;
import("diagnostics_channel").then(n => { S = n.channel("lru-cache:metrics"), T = n.tracingChannel("lru-cache"); }).catch(() => { });
var K = typeof performance == "object" && performance && typeof performance.now == "function" ? performance : Date, G = () => S.hasSubscribers || T.hasSubscribers, $ = new Set, H = typeof process == "object" && process ? process : {}, Q = (n, e, t, i) => { typeof H.emitWarning == "function" ? H.emitWarning(n, e, t, i) : console.error(`[${t}] ${e}: ${n}`); }, Y = n => !$.has(n), A = n => !!n && n === Math.floor(n) && n > 0 && isFinite(n), B = n => A(n) ? n <= Math.pow(2, 8) ? Uint8Array : n <= Math.pow(2, 16) ? Uint16Array : n <= Math.pow(2, 32) ? Uint32Array : n <= Number.MAX_SAFE_INTEGER ? R : null : null, R = class extends Array {
    constructor(n) { super(n), this.fill(0); }
}, Z = class W {
    heap;
    length;
    static #l = !1;
    static create(e) { let t = B(e); if (!t)
        return []; W.#l = !0; let i = new W(e, t); return W.#l = !1, i; }
    constructor(e, t) { if (!W.#l)
        throw new TypeError("instantiate Stack using Stack.create(n)"); this.heap = new t(e), this.length = 0; }
    push(e) { this.heap[this.length++] = e; }
    pop() { return this.heap[--this.length]; }
}, et = class q {
    #l;
    #u;
    #v;
    #E;
    #w;
    #G;
    #L;
    #S;
    get perf() { return this.#S; }
    ttl;
    ttlResolution;
    ttlAutopurge;
    updateAgeOnGet;
    updateAgeOnHas;
    allowStale;
    noDisposeOnSet;
    noUpdateTTL;
    maxEntrySize;
    sizeCalculation;
    noDeleteOnFetchRejection;
    noDeleteOnStaleGet;
    allowStaleOnFetchAbort;
    allowStaleOnFetchRejection;
    ignoreFetchAbort;
    backgroundFetchSize;
    #h;
    #b;
    #s;
    #i;
    #t;
    #a;
    #f;
    #n;
    #o;
    #m;
    #r;
    #_;
    #y;
    #d;
    #p;
    #F;
    #j;
    #c;
    #W;
    static unsafeExposeInternals(e) { return { starts: e.#y, ttls: e.#d, autopurgeTimers: e.#p, sizes: e.#_, keyMap: e.#s, keyList: e.#i, valList: e.#t, next: e.#a, prev: e.#f, get head() { return e.#n; }, get tail() { return e.#o; }, free: e.#m, isBackgroundFetch: t => e.#e(t), backgroundFetch: (t, i, s, h) => e.#I(t, i, s, h), moveToTail: t => e.#k(t), indexes: t => e.#A(t), rindexes: t => e.#O(t), isStale: t => e.#g(t) }; }
    get max() { return this.#l; }
    get maxSize() { return this.#u; }
    get calculatedSize() { return this.#b; }
    get size() { return this.#h; }
    get fetchMethod() { return this.#G; }
    get memoMethod() { return this.#L; }
    get dispose() { return this.#v; }
    get onInsert() { return this.#E; }
    get disposeAfter() { return this.#w; }
    constructor(e) { let { max: t = 0, ttl: i, ttlResolution: s = 1, ttlAutopurge: h, updateAgeOnGet: l, updateAgeOnHas: a, allowStale: o, dispose: r, onInsert: f, disposeAfter: v, noDisposeOnSet: m, noUpdateTTL: d, maxSize: p = 0, maxEntrySize: u = 0, sizeCalculation: b, fetchMethod: w, memoMethod: c, noDeleteOnFetchRejection: F, noDeleteOnStaleGet: y, allowStaleOnFetchRejection: g, allowStaleOnFetchAbort: _, ignoreFetchAbort: E, backgroundFetchSize: O = 1, perf: z } = e; if (this.backgroundFetchSize = O, z !== void 0 && typeof z?.now != "function")
        throw new TypeError("perf option must have a now() method if specified"); if (this.#S = z ?? K, t !== 0 && !A(t))
        throw new TypeError("max option must be a nonnegative integer"); let x = t ? B(t) : Array; if (!x)
        throw new Error("invalid max value: " + t); if (this.#l = t, this.#u = p, this.maxEntrySize = u || this.#u, this.sizeCalculation = b, this.sizeCalculation) {
        if (!this.#u && !this.maxEntrySize)
            throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
        if (typeof this.sizeCalculation != "function")
            throw new TypeError("sizeCalculation set to non-function");
    } if (c !== void 0 && typeof c != "function")
        throw new TypeError("memoMethod must be a function if defined"); if (this.#L = c, w !== void 0 && typeof w != "function")
        throw new TypeError("fetchMethod must be a function if specified"); if (this.#G = w, this.#j = !!w, this.#s = new Map, this.#i = Array.from({ length: t }).fill(void 0), this.#t = Array.from({ length: t }).fill(void 0), this.#a = new x(t), this.#f = new x(t), this.#n = 0, this.#o = 0, this.#m = Z.create(t), this.#h = 0, this.#b = 0, typeof r == "function" && (this.#v = r), typeof f == "function" && (this.#E = f), typeof v == "function" ? (this.#w = v, this.#r = []) : (this.#w = void 0, this.#r = void 0), this.#F = !!this.#v, this.#W = !!this.#E, this.#c = !!this.#w, this.noDisposeOnSet = !!m, this.noUpdateTTL = !!d, this.noDeleteOnFetchRejection = !!F, this.allowStaleOnFetchRejection = !!g, this.allowStaleOnFetchAbort = !!_, this.ignoreFetchAbort = !!E, this.maxEntrySize !== 0) {
        if (this.#u !== 0 && !A(this.#u))
            throw new TypeError("maxSize must be a positive integer if specified");
        if (!A(this.maxEntrySize))
            throw new TypeError("maxEntrySize must be a positive integer if specified");
        this.#X();
    } if (this.allowStale = !!o, this.noDeleteOnStaleGet = !!y, this.updateAgeOnGet = !!l, this.updateAgeOnHas = !!a, this.ttlResolution = A(s) || s === 0 ? s : 1, this.ttlAutopurge = !!h, this.ttl = i || 0, this.ttl) {
        if (!A(this.ttl))
            throw new TypeError("ttl must be a positive integer if specified");
        this.#P();
    } if (this.#l === 0 && this.ttl === 0 && this.#u === 0)
        throw new TypeError("At least one of max, maxSize, or ttl is required"); if (!this.ttlAutopurge && !this.#l && !this.#u) {
        let C = "LRU_CACHE_UNBOUNDED";
        Y(C) && ($.add(C), Q("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCacheWarning", C, q));
    } }
    getRemainingTTL(e) { return this.#s.has(e) ? 1 / 0 : 0; }
    #P() { let e = new R(this.#l), t = new R(this.#l); this.#d = e, this.#y = t; let i = this.ttlAutopurge ? Array.from({ length: this.#l }) : void 0; this.#p = i, this.#H = (o, r, f = this.#S.now()) => { t[o] = r !== 0 ? f : 0, e[o] = r, s(o, r); }, this.#D = o => { t[o] = e[o] !== 0 ? this.#S.now() : 0, s(o, e[o]); }; let s = this.ttlAutopurge ? (o, r) => { if (i?.[o] && (clearTimeout(i[o]), i[o] = void 0), r && r !== 0 && i) {
        let f = setTimeout(() => { this.#g(o) ? (this.#z(this.#i[o], "expire"), i[o] = void 0) : s(o, a(o)); }, r + 1);
        f.unref && f.unref(), i[o] = f;
    } } : () => { }; this.#x = (o, r) => { if (e[r]) {
        let f = e[r], v = t[r];
        if (!f || !v)
            return;
        o.ttl = f, o.start = v, o.now = h || l();
        let m = o.now - v;
        o.remainingTTL = f - m;
    } }; let h = 0, l = () => { let o = this.#S.now(); if (this.ttlResolution > 0) {
        h = o;
        let r = setTimeout(() => h = 0, this.ttlResolution);
        r.unref && r.unref();
    } return o; }; this.getRemainingTTL = o => { let r = this.#s.get(o); return r === void 0 ? 0 : a(r); }; let a = o => { let r = e[o], f = t[o]; if (!r || !f)
        return 1 / 0; let v = (h || l()) - f; return r - v; }; this.#g = o => { let r = t[o], f = e[o]; return !!f && !!r && (h || l()) - r > f; }; }
    #D = () => { };
    #x = () => { };
    #H = () => { };
    #g = () => !1;
    #X() { let e = new R(this.#l); this.#b = 0, this.#_ = e, this.#R = t => { this.#b -= e[t], e[t] = 0; }, this.#N = (t, i, s, h) => { if (!A(s)) {
        if (this.#e(i))
            return this.backgroundFetchSize;
        if (h) {
            if (typeof h != "function")
                throw new TypeError("sizeCalculation must be a function");
            if (s = h(i, t), !A(s))
                throw new TypeError("sizeCalculation return invalid (expect positive integer)");
        }
        else
            throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
    } return s; }, this.#U = (t, i, s) => { if (e[t] = i, this.#u) {
        let h = this.#u - e[t];
        for (; this.#b > h;)
            this.#M(!0);
    } this.#b += e[t], s && (s.entrySize = i, s.totalCalculatedSize = this.#b); }; }
    #R = e => { };
    #U = (e, t, i) => { };
    #N = (e, t, i, s) => { if (i || s)
        throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache"); return 0; };
    *#A({ allowStale: e = this.allowStale } = {}) { if (this.#h)
        for (let t = this.#o; this.#$(t) && ((e || !this.#g(t)) && (yield t), t !== this.#n);)
            t = this.#f[t]; }
    *#O({ allowStale: e = this.allowStale } = {}) { if (this.#h)
        for (let t = this.#n; this.#$(t) && ((e || !this.#g(t)) && (yield t), t !== this.#o);)
            t = this.#a[t]; }
    #$(e) { return e !== void 0 && this.#s.get(this.#i[e]) === e; }
    *entries() { for (let e of this.#A())
        this.#t[e] !== void 0 && this.#i[e] !== void 0 && !this.#e(this.#t[e]) && (yield [this.#i[e], this.#t[e]]); }
    *rentries() { for (let e of this.#O())
        this.#t[e] !== void 0 && this.#i[e] !== void 0 && !this.#e(this.#t[e]) && (yield [this.#i[e], this.#t[e]]); }
    *keys() { for (let e of this.#A()) {
        let t = this.#i[e];
        t !== void 0 && !this.#e(this.#t[e]) && (yield t);
    } }
    *rkeys() { for (let e of this.#O()) {
        let t = this.#i[e];
        t !== void 0 && !this.#e(this.#t[e]) && (yield t);
    } }
    *values() { for (let e of this.#A())
        this.#t[e] !== void 0 && !this.#e(this.#t[e]) && (yield this.#t[e]); }
    *rvalues() { for (let e of this.#O())
        this.#t[e] !== void 0 && !this.#e(this.#t[e]) && (yield this.#t[e]); }
    [Symbol.iterator]() { return this.entries(); }
    [Symbol.toStringTag] = "LRUCache";
    find(e, t = {}) { for (let i of this.#A()) {
        let s = this.#t[i], h = this.#e(s) ? s.__staleWhileFetching : s;
        if (h !== void 0 && e(h, this.#i[i], this))
            return this.#C(this.#i[i], t);
    } }
    forEach(e, t = this) { for (let i of this.#A()) {
        let s = this.#t[i], h = this.#e(s) ? s.__staleWhileFetching : s;
        h !== void 0 && e.call(t, h, this.#i[i], this);
    } }
    rforEach(e, t = this) { for (let i of this.#O()) {
        let s = this.#t[i], h = this.#e(s) ? s.__staleWhileFetching : s;
        h !== void 0 && e.call(t, h, this.#i[i], this);
    } }
    purgeStale() { let e = !1; for (let t of this.#O({ allowStale: !0 }))
        this.#g(t) && (this.#z(this.#i[t], "expire"), e = !0); return e; }
    info(e) { let t = this.#s.get(e); if (t === void 0)
        return; let i = this.#t[t], s = this.#e(i) ? i.__staleWhileFetching : i; if (s === void 0)
        return; let h = { value: s }; if (this.#d && this.#y) {
        let l = this.#d[t], a = this.#y[t];
        if (l && a) {
            let o = l - (this.#S.now() - a);
            h.ttl = o, h.start = Date.now();
        }
    } return this.#_ && (h.size = this.#_[t]), h; }
    dump() { let e = []; for (let t of this.#A({ allowStale: !0 })) {
        let i = this.#i[t], s = this.#t[t], h = this.#e(s) ? s.__staleWhileFetching : s;
        if (h === void 0 || i === void 0)
            continue;
        let l = { value: h };
        if (this.#d && this.#y) {
            l.ttl = this.#d[t];
            let a = this.#S.now() - this.#y[t];
            l.start = Math.floor(Date.now() - a);
        }
        this.#_ && (l.size = this.#_[t]), e.unshift([i, l]);
    } return e; }
    load(e) { this.clear(); for (let [t, i] of e) {
        if (i.start) {
            let s = Date.now() - i.start;
            i.start = this.#S.now() - s;
        }
        this.#T(t, i.value, i);
    } }
    set(e, t, i = {}) { let { status: s = S.hasSubscribers ? {} : void 0 } = i; i.status = s, s && (s.op = "set", s.key = e, t !== void 0 && (s.value = t), s.cache = this); let h = this.#T(e, t, i); return s && S.hasSubscribers && S.publish(s), h; }
    #T(e, t, i, s) { let { ttl: h = this.ttl, start: l, noDisposeOnSet: a = this.noDisposeOnSet, sizeCalculation: o = this.sizeCalculation, status: r } = i, f = this.#e(t); if (t === void 0)
        return r && (r.set = "deleted"), this.delete(e), this; let { noUpdateTTL: v = this.noUpdateTTL } = i; r && !f && (r.value = t); let m = this.#N(e, t, i.size || 0, o, r); if (this.maxEntrySize && m > this.maxEntrySize)
        return this.#z(e, "set"), r && (r.set = "miss", r.maxEntrySizeExceeded = !0), this; let d = this.#h === 0 ? void 0 : this.#s.get(e); if (d === void 0)
        d = this.#h === 0 ? this.#o : this.#m.length !== 0 ? this.#m.pop() : this.#h === this.#l ? this.#M(!1) : this.#h, this.#i[d] = e, this.#t[d] = t, this.#s.set(e, d), this.#a[this.#o] = d, this.#f[d] = this.#o, this.#o = d, this.#h++, this.#U(d, m, r), r && (r.set = "add"), v = !1, this.#W && !f && this.#E?.(t, e, "add");
    else {
        this.#k(d);
        let p = this.#t[d];
        if (t !== p) {
            if (!a)
                if (this.#e(p)) {
                    p !== s && p.__abortController.abort(new Error("replaced"));
                    let { __staleWhileFetching: u } = p;
                    u !== void 0 && u !== t && (this.#F && this.#v?.(u, e, "set"), this.#c && this.#r?.push([u, e, "set"]));
                }
                else
                    this.#F && this.#v?.(p, e, "set"), this.#c && this.#r?.push([p, e, "set"]);
            if (this.#R(d), this.#U(d, m, r), this.#t[d] = t, !f) {
                let u = p && this.#e(p) ? p.__staleWhileFetching : p, b = u === void 0 ? "add" : t !== u ? "replace" : "update";
                r && (r.set = b, u !== void 0 && (r.oldValue = u)), this.#W && this.onInsert?.(t, e, b);
            }
        }
        else
            f || (r && (r.set = "update"), this.#W && this.onInsert?.(t, e, "update"));
    } if (h !== 0 && !this.#d && this.#P(), this.#d && (v || this.#H(d, h, l), r && this.#x(r, d)), !a && this.#c && this.#r) {
        let p = this.#r, u;
        for (; u = p?.shift();)
            this.#w?.(...u);
    } return this; }
    pop() { try {
        for (; this.#h;) {
            let e = this.#t[this.#n];
            if (this.#M(!0), this.#e(e)) {
                if (e.__staleWhileFetching)
                    return e.__staleWhileFetching;
            }
            else if (e !== void 0)
                return e;
        }
    }
    finally {
        if (this.#c && this.#r) {
            let e = this.#r, t;
            for (; t = e?.shift();)
                this.#w?.(...t);
        }
    } }
    #M(e) { let t = this.#n, i = this.#i[t], s = this.#t[t], h = this.#e(s); h && s.__abortController.abort(new Error("evicted")); let l = h ? s.__staleWhileFetching : s; return (this.#F || this.#c) && l !== void 0 && (this.#F && this.#v?.(l, i, "evict"), this.#c && this.#r?.push([l, i, "evict"])), this.#R(t), this.#p?.[t] && (clearTimeout(this.#p[t]), this.#p[t] = void 0), e && (this.#i[t] = void 0, this.#t[t] = void 0, this.#m.push(t)), this.#h === 1 ? (this.#n = this.#o = 0, this.#m.length = 0) : this.#n = this.#a[t], this.#s.delete(i), this.#h--, t; }
    has(e, t = {}) { let { status: i = S.hasSubscribers ? {} : void 0 } = t; t.status = i, i && (i.op = "has", i.key = e, i.cache = this); let s = this.#J(e, t); return S.hasSubscribers && S.publish(i), s; }
    #J(e, t = {}) { let { updateAgeOnHas: i = this.updateAgeOnHas, status: s } = t, h = this.#s.get(e); if (h !== void 0) {
        let l = this.#t[h];
        if (this.#e(l) && l.__staleWhileFetching === void 0)
            return !1;
        if (this.#g(h))
            s && (s.has = "stale", this.#x(s, h));
        else
            return i && this.#D(h), s && (s.has = "hit", this.#x(s, h)), !0;
    }
    else
        s && (s.has = "miss"); return !1; }
    peek(e, t = {}) { let { status: i = G() ? {} : void 0 } = t; i && (i.op = "peek", i.key = e, i.cache = this), t.status = i; let s = this.#K(e, t); return S.hasSubscribers && S.publish(i), s; }
    #K(e, t) { let { status: i, allowStale: s = this.allowStale } = t, h = this.#s.get(e); if (h === void 0 || !s && this.#g(h)) {
        i && (i.peek = h === void 0 ? "miss" : "stale");
        return;
    } let l = this.#t[h], a = this.#e(l) ? l.__staleWhileFetching : l; return i && (a !== void 0 ? (i.peek = "hit", i.value = a) : i.peek = "miss"), a; }
    #I(e, t, i, s) { let h = t === void 0 ? void 0 : this.#t[t]; if (this.#e(h))
        return h; let l = new AbortController, { signal: a } = i; a?.addEventListener("abort", () => l.abort(a.reason), { signal: l.signal }); let o = { signal: l.signal, options: i, context: s }, r = (u, b = !1) => { let { aborted: w } = l.signal, c = i.ignoreFetchAbort && u !== void 0, F = i.ignoreFetchAbort || !!(i.allowStaleOnFetchAbort && u !== void 0); if (i.status && (w && !b ? (i.status.fetchAborted = !0, i.status.fetchError = l.signal.reason, c && (i.status.fetchAbortIgnored = !0)) : i.status.fetchResolved = !0), w && !c && !b)
        return v(l.signal.reason, F); let y = d, g = this.#t[t]; return (g === d || g === void 0 && c && b) && (u === void 0 ? y.__staleWhileFetching !== void 0 ? this.#t[t] = y.__staleWhileFetching : this.#z(e, "fetch") : (i.status && (i.status.fetchUpdated = !0), this.#T(e, u, o.options, y))), u; }, f = u => (i.status && (i.status.fetchRejected = !0, i.status.fetchError = u), v(u, !1)), v = (u, b) => { let { aborted: w } = l.signal, c = w && i.allowStaleOnFetchAbort, F = c || i.allowStaleOnFetchRejection, y = F || i.noDeleteOnFetchRejection, g = d; if (this.#t[t] === d && (!y || !b && g.__staleWhileFetching === void 0 ? this.#z(e, "fetch") : c || (this.#t[t] = g.__staleWhileFetching)), F)
        return i.status && g.__staleWhileFetching !== void 0 && (i.status.returnedStale = !0), g.__staleWhileFetching; if (g.__returned === g)
        throw u; }, m = (u, b) => { let w = this.#G?.(e, h, o); l.signal.addEventListener("abort", () => { (!i.ignoreFetchAbort || i.allowStaleOnFetchAbort) && (u(void 0), i.allowStaleOnFetchAbort && (u = c => r(c, !0))); }), w && w instanceof Promise ? w.then(c => u(c === void 0 ? void 0 : c), b) : w !== void 0 && u(w); }; i.status && (i.status.fetchDispatched = !0); let d = new Promise(m).then(r, f), p = Object.assign(d, { __abortController: l, __staleWhileFetching: h, __returned: void 0 }); return t === void 0 ? (this.#T(e, p, I(M({}, o.options), { status: void 0 })), t = this.#s.get(e)) : this.#t[t] = p, p; }
    #e(e) { if (!this.#j)
        return !1; let t = e; return !!t && t instanceof Promise && t.hasOwnProperty("__staleWhileFetching") && t.__abortController instanceof AbortController; }
    fetch(e, t = {}) { let i = T.hasSubscribers, { status: s = G() ? {} : void 0 } = t; t.status = s, s && t.context && (s.context = t.context); let h = this.#B(e, t); return s && i && (s.trace = !0, T.tracePromise(() => h, s).catch(() => { })), h; }
    #B(i) { return k(this, arguments, function* (e, t = {}) { let { allowStale: s = this.allowStale, updateAgeOnGet: h = this.updateAgeOnGet, noDeleteOnStaleGet: l = this.noDeleteOnStaleGet, ttl: a = this.ttl, noDisposeOnSet: o = this.noDisposeOnSet, size: r = 0, sizeCalculation: f = this.sizeCalculation, noUpdateTTL: v = this.noUpdateTTL, noDeleteOnFetchRejection: m = this.noDeleteOnFetchRejection, allowStaleOnFetchRejection: d = this.allowStaleOnFetchRejection, ignoreFetchAbort: p = this.ignoreFetchAbort, allowStaleOnFetchAbort: u = this.allowStaleOnFetchAbort, context: b, forceRefresh: w = !1, status: c, signal: F } = t; if (c && (c.op = "fetch", c.key = e, w && (c.forceRefresh = !0), c.cache = this), !this.#j)
        return c && (c.fetch = "get"), this.#C(e, { allowStale: s, updateAgeOnGet: h, noDeleteOnStaleGet: l, status: c }); let y = { allowStale: s, updateAgeOnGet: h, noDeleteOnStaleGet: l, ttl: a, noDisposeOnSet: o, size: r, sizeCalculation: f, noUpdateTTL: v, noDeleteOnFetchRejection: m, allowStaleOnFetchRejection: d, allowStaleOnFetchAbort: u, ignoreFetchAbort: p, status: c, signal: F }, g = this.#s.get(e); if (g === void 0) {
        c && (c.fetch = "miss");
        let _ = this.#I(e, g, y, b);
        return _.__returned = _;
    }
    else {
        let _ = this.#t[g];
        if (this.#e(_)) {
            let x = s && _.__staleWhileFetching !== void 0;
            return c && (c.fetch = "inflight", x && (c.returnedStale = !0)), x ? _.__staleWhileFetching : _.__returned = _;
        }
        let E = this.#g(g);
        if (!w && !E)
            return c && (c.fetch = "hit"), this.#k(g), h && this.#D(g), c && this.#x(c, g), _;
        let O = this.#I(e, g, y, b), z = O.__staleWhileFetching !== void 0 && s;
        return c && (c.fetch = E ? "stale" : "refresh", z && E && (c.returnedStale = !0)), z ? O.__staleWhileFetching : O.__returned = O;
    } }); }
    forceFetch(e, t = {}) { let i = T.hasSubscribers, { status: s = G() ? {} : void 0 } = t; t.status = s, s && t.context && (s.context = t.context); let h = this.#Q(e, t); return s && i && (s.trace = !0, T.tracePromise(() => h, s).catch(() => { })), h; }
    #Q(i) { return k(this, arguments, function* (e, t = {}) { let s = yield this.#B(e, t); if (s === void 0)
        throw new Error("fetch() returned undefined"); return s; }); }
    memo(e, t = {}) { let { status: i = S.hasSubscribers ? {} : void 0 } = t; t.status = i, i && (i.op = "memo", i.key = e, t.context && (i.context = t.context), i.cache = this); let s = this.#Y(e, t); return i && (i.value = s), S.hasSubscribers && S.publish(i), s; }
    #Y(e, t = {}) { let i = this.#L; if (!i)
        throw new Error("no memoMethod provided to constructor"); let v = t, { context: s, status: h, forceRefresh: l } = v, a = P(v, ["context", "status", "forceRefresh"]); h && l && (h.forceRefresh = !0); let o = this.#C(e, a), r = l || o === void 0; if (h && (h.memo = r ? "miss" : "hit", r || (h.value = o)), !r)
        return o; let f = i(e, o, { options: a, context: s }); return h && (h.value = f), this.#T(e, f, a), f; }
    get(e, t = {}) { let { status: i = S.hasSubscribers ? {} : void 0 } = t; t.status = i, i && (i.op = "get", i.key = e, i.cache = this); let s = this.#C(e, t); return i && (s !== void 0 && (i.value = s), S.hasSubscribers && S.publish(i)), s; }
    #C(e, t = {}) { let { allowStale: i = this.allowStale, updateAgeOnGet: s = this.updateAgeOnGet, noDeleteOnStaleGet: h = this.noDeleteOnStaleGet, status: l } = t, a = this.#s.get(e); if (a === void 0) {
        l && (l.get = "miss");
        return;
    } let o = this.#t[a], r = this.#e(o); return l && this.#x(l, a), this.#g(a) ? r ? (l && (l.get = "stale-fetching"), i && o.__staleWhileFetching !== void 0 ? (l && (l.returnedStale = !0), o.__staleWhileFetching) : void 0) : (h || this.#z(e, "expire"), l && (l.get = "stale"), i ? (l && (l.returnedStale = !0), o) : void 0) : (l && (l.get = r ? "fetching" : "hit"), this.#k(a), s && this.#D(a), r ? o.__staleWhileFetching : o); }
    #q(e, t) { this.#f[t] = e, this.#a[e] = t; }
    #k(e) { e !== this.#o && (e === this.#n ? this.#n = this.#a[e] : this.#q(this.#f[e], this.#a[e]), this.#q(this.#o, e), this.#o = e); }
    delete(e) { return this.#z(e, "delete"); }
    #z(e, t) { S.hasSubscribers && S.publish({ op: "delete", delete: t, key: e, cache: this }); let i = !1; if (this.#h !== 0) {
        let s = this.#s.get(e);
        if (s !== void 0)
            if (this.#p?.[s] && (clearTimeout(this.#p[s]), this.#p[s] = void 0), i = !0, this.#h === 1)
                this.#V(t);
            else {
                this.#R(s);
                let h = this.#t[s];
                if (this.#e(h) ? h.__abortController.abort(new Error("deleted")) : (this.#F || this.#c) && (this.#F && this.#v?.(h, e, t), this.#c && this.#r?.push([h, e, t])), this.#s.delete(e), this.#i[s] = void 0, this.#t[s] = void 0, s === this.#o)
                    this.#o = this.#f[s];
                else if (s === this.#n)
                    this.#n = this.#a[s];
                else {
                    let l = this.#f[s];
                    this.#a[l] = this.#a[s];
                    let a = this.#a[s];
                    this.#f[a] = this.#f[s];
                }
                this.#h--, this.#m.push(s);
            }
    } if (this.#c && this.#r?.length) {
        let s = this.#r, h;
        for (; h = s?.shift();)
            this.#w?.(...h);
    } return i; }
    clear() { return this.#V("delete"); }
    #V(e) { for (let t of this.#O({ allowStale: !0 })) {
        let i = this.#t[t];
        if (this.#e(i))
            i.__abortController.abort(new Error("deleted"));
        else {
            let s = this.#i[t];
            this.#F && this.#v?.(i, s, e), this.#c && this.#r?.push([i, s, e]);
        }
    } if (this.#s.clear(), this.#t.fill(void 0), this.#i.fill(void 0), this.#d && this.#y) {
        this.#d.fill(0), this.#y.fill(0);
        for (let t of this.#p ?? [])
            t !== void 0 && clearTimeout(t);
        this.#p?.fill(void 0);
    } if (this.#_ && this.#_.fill(0), this.#n = 0, this.#o = 0, this.#m.length = 0, this.#b = 0, this.#h = 0, this.#c && this.#r) {
        let t = this.#r, i;
        for (; i = t?.shift();)
            this.#w?.(...i);
    } }
};
export { et as LRUCache };
