function Ys(e) {
  const t = Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const le = {},
  jt = [],
  ze = () => {},
  Oi = () => !1,
  xn = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  Xs = (e) => e.startsWith("onUpdate:"),
  _e = Object.assign,
  Zs = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  Al = Object.prototype.hasOwnProperty,
  re = (e, t) => Al.call(e, t),
  Q = Array.isArray,
  Ut = (e) => zn(e) === "[object Map]",
  Pi = (e) => zn(e) === "[object Set]",
  X = (e) => typeof e == "function",
  de = (e) => typeof e == "string",
  ut = (e) => typeof e == "symbol",
  ue = (e) => e !== null && typeof e == "object",
  zs = (e) => (ue(e) || X(e)) && X(e.then) && X(e.catch),
  Ni = Object.prototype.toString,
  zn = (e) => Ni.call(e),
  Cl = (e) => zn(e).slice(8, -1),
  Ii = (e) => zn(e) === "[object Object]",
  er = (e) =>
    de(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  Gt = Ys(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  es = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  xl = /-\w/g,
  ke = es((e) => e.replace(xl, (t) => t.slice(1).toUpperCase())),
  Tl = /\B([A-Z])/g,
  Ct = es((e) => e.replace(Tl, "-$1").toLowerCase()),
  ts = es((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  hs = es((e) => (e ? `on${ts(e)}` : "")),
  vt = (e, t) => !Object.is(e, t),
  Ln = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  },
  Mi = (e, t, n, s = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: s,
      value: n,
    });
  },
  tr = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  },
  Di = (e) => {
    const t = de(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
let wr;
const ns = () =>
  wr ||
  (wr =
    typeof globalThis != "undefined"
      ? globalThis
      : typeof self != "undefined"
      ? self
      : typeof window != "undefined"
      ? window
      : typeof global != "undefined"
      ? global
      : {});
function nr(e) {
  if (Q(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        r = de(s) ? Ol(s) : nr(s);
      if (r) for (const i in r) t[i] = r[i];
    }
    return t;
  } else if (de(e) || ue(e)) return e;
}
const Rl = /;(?![^(]*\))/g,
  wl = /:([^]+)/,
  Sl = /\/\*[^]*?\*\//g;
function Ol(e) {
  const t = {};
  return (
    e
      .replace(Sl, "")
      .split(Rl)
      .forEach((n) => {
        if (n) {
          const s = n.split(wl);
          s.length > 1 && (t[s[0].trim()] = s[1].trim());
        }
      }),
    t
  );
}
function sr(e) {
  let t = "";
  if (de(e)) t = e;
  else if (Q(e))
    for (let n = 0; n < e.length; n++) {
      const s = sr(e[n]);
      s && (t += s + " ");
    }
  else if (ue(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const Pl =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  Nl = Ys(Pl);
function Li(e) {
  return !!e || e === "";
}
const Fi = (e) => !!(e && e.__v_isRef === !0),
  Il = (e) =>
    de(e)
      ? e
      : e == null
      ? ""
      : Q(e) || (ue(e) && (e.toString === Ni || !X(e.toString)))
      ? Fi(e)
        ? Il(e.value)
        : JSON.stringify(e, Bi, 2)
      : String(e),
  Bi = (e, t) =>
    Fi(t)
      ? Bi(e, t.value)
      : Ut(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [s, r], i) => ((n[ds(s, i) + " =>"] = r), n),
            {}
          ),
        }
      : Pi(t)
      ? { [`Set(${t.size})`]: [...t.values()].map((n) => ds(n)) }
      : ut(t)
      ? ds(t)
      : ue(t) && !Q(t) && !Ii(t)
      ? String(t)
      : t,
  ds = (e, t = "") => {
    var n;
    return ut(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
let Ne;
class Ml {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this._on = 0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.parent = Ne),
      !t && Ne && (this.index = (Ne.scopes || (Ne.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause();
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = Ne;
      try {
        return (Ne = this), t();
      } finally {
        Ne = n;
      }
    }
  }
  on() {
    ++this._on === 1 && ((this.prevScope = Ne), (Ne = this));
  }
  off() {
    this._on > 0 &&
      --this._on === 0 &&
      ((Ne = this.prevScope), (this.prevScope = void 0));
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop();
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (((this.cleanups.length = 0), this.scopes)) {
        for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r &&
          r !== this &&
          ((this.parent.scopes[this.index] = r), (r.index = this.index));
      }
      this.parent = void 0;
    }
  }
}
function Dl() {
  return Ne;
}
let fe;
const ps = new WeakSet();
class Hi {
  constructor(t) {
    (this.fn = t),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      Ne && Ne.active && Ne.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 &&
      ((this.flags &= -65), ps.has(this) && (ps.delete(this), this.trigger()));
  }
  notify() {
    (this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || ki(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    (this.flags |= 2), Sr(this), ji(this);
    const t = fe,
      n = Ge;
    (fe = this), (Ge = !0);
    try {
      return this.fn();
    } finally {
      Ui(this), (fe = t), (Ge = n), (this.flags &= -3);
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) or(t);
      (this.deps = this.depsTail = void 0),
        Sr(this),
        this.onStop && this.onStop(),
        (this.flags &= -2);
    }
  }
  trigger() {
    this.flags & 64
      ? ps.add(this)
      : this.scheduler
      ? this.scheduler()
      : this.runIfDirty();
  }
  runIfDirty() {
    Os(this) && this.run();
  }
  get dirty() {
    return Os(this);
  }
}
let Vi = 0,
  cn,
  fn;
function ki(e, t = !1) {
  if (((e.flags |= 8), t)) {
    (e.next = fn), (fn = e);
    return;
  }
  (e.next = cn), (cn = e);
}
function rr() {
  Vi++;
}
function ir() {
  if (--Vi > 0) return;
  if (fn) {
    let t = fn;
    for (fn = void 0; t; ) {
      const n = t.next;
      (t.next = void 0), (t.flags &= -9), (t = n);
    }
  }
  let e;
  for (; cn; ) {
    let t = cn;
    for (cn = void 0; t; ) {
      const n = t.next;
      if (((t.next = void 0), (t.flags &= -9), t.flags & 1))
        try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function ji(e) {
  for (let t = e.deps; t; t = t.nextDep)
    (t.version = -1),
      (t.prevActiveLink = t.dep.activeLink),
      (t.dep.activeLink = t);
}
function Ui(e) {
  let t,
    n = e.depsTail,
    s = n;
  for (; s; ) {
    const r = s.prevDep;
    s.version === -1 ? (s === n && (n = r), or(s), Ll(s)) : (t = s),
      (s.dep.activeLink = s.prevActiveLink),
      (s.prevActiveLink = void 0),
      (s = r);
  }
  (e.deps = t), (e.depsTail = n);
}
function Os(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (
      t.dep.version !== t.version ||
      (t.dep.computed && (Gi(t.dep.computed) || t.dep.version !== t.version))
    )
      return !0;
  return !!e._dirty;
}
function Gi(e) {
  if (
    (e.flags & 4 && !(e.flags & 16)) ||
    ((e.flags &= -17), e.globalVersion === yn) ||
    ((e.globalVersion = yn),
    !e.isSSR && e.flags & 128 && ((!e.deps && !e._dirty) || !Os(e)))
  )
    return;
  e.flags |= 2;
  const t = e.dep,
    n = fe,
    s = Ge;
  (fe = e), (Ge = !0);
  try {
    ji(e);
    const r = e.fn(e._value);
    (t.version === 0 || vt(r, e._value)) &&
      ((e.flags |= 128), (e._value = r), t.version++);
  } catch (r) {
    throw (t.version++, r);
  } finally {
    (fe = n), (Ge = s), Ui(e), (e.flags &= -3);
  }
}
function or(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e;
  if (
    (s && ((s.nextSub = r), (e.prevSub = void 0)),
    r && ((r.prevSub = s), (e.nextSub = void 0)),
    n.subs === e && ((n.subs = s), !s && n.computed))
  ) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep) or(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Ll(e) {
  const { prevDep: t, nextDep: n } = e;
  t && ((t.nextDep = n), (e.prevDep = void 0)),
    n && ((n.prevDep = t), (e.nextDep = void 0));
}
let Ge = !0;
const Ki = [];
function lt() {
  Ki.push(Ge), (Ge = !1);
}
function ct() {
  const e = Ki.pop();
  Ge = e === void 0 ? !0 : e;
}
function Sr(e) {
  const { cleanup: t } = e;
  if (((e.cleanup = void 0), t)) {
    const n = fe;
    fe = void 0;
    try {
      t();
    } finally {
      fe = n;
    }
  }
}
let yn = 0;
class Fl {
  constructor(t, n) {
    (this.sub = t),
      (this.dep = n),
      (this.version = n.version),
      (this.nextDep =
        this.prevDep =
        this.nextSub =
        this.prevSub =
        this.prevActiveLink =
          void 0);
  }
}
class lr {
  constructor(t) {
    (this.computed = t),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0),
      (this.map = void 0),
      (this.key = void 0),
      (this.sc = 0),
      (this.__v_skip = !0);
  }
  track(t) {
    if (!fe || !Ge || fe === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== fe)
      (n = this.activeLink = new Fl(fe, this)),
        fe.deps
          ? ((n.prevDep = fe.depsTail),
            (fe.depsTail.nextDep = n),
            (fe.depsTail = n))
          : (fe.deps = fe.depsTail = n),
        Wi(n);
    else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
      const s = n.nextDep;
      (s.prevDep = n.prevDep),
        n.prevDep && (n.prevDep.nextDep = s),
        (n.prevDep = fe.depsTail),
        (n.nextDep = void 0),
        (fe.depsTail.nextDep = n),
        (fe.depsTail = n),
        fe.deps === n && (fe.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, yn++, this.notify(t);
  }
  notify(t) {
    rr();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      ir();
    }
  }
}
function Wi(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep) Wi(s);
    }
    const n = e.dep.subs;
    n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e);
  }
}
const Ps = new WeakMap(),
  Ot = Symbol(""),
  Ns = Symbol(""),
  _n = Symbol("");
function Ae(e, t, n) {
  if (Ge && fe) {
    let s = Ps.get(e);
    s || Ps.set(e, (s = new Map()));
    let r = s.get(n);
    r || (s.set(n, (r = new lr())), (r.map = s), (r.key = n)), r.track();
  }
}
function it(e, t, n, s, r, i) {
  const o = Ps.get(e);
  if (!o) {
    yn++;
    return;
  }
  const l = (c) => {
    c && c.trigger();
  };
  if ((rr(), t === "clear")) o.forEach(l);
  else {
    const c = Q(e),
      a = c && er(n);
    if (c && n === "length") {
      const f = Number(s);
      o.forEach((u, p) => {
        (p === "length" || p === _n || (!ut(p) && p >= f)) && l(u);
      });
    } else
      switch (
        ((n !== void 0 || o.has(void 0)) && l(o.get(n)), a && l(o.get(_n)), t)
      ) {
        case "add":
          c ? a && l(o.get("length")) : (l(o.get(Ot)), Ut(e) && l(o.get(Ns)));
          break;
        case "delete":
          c || (l(o.get(Ot)), Ut(e) && l(o.get(Ns)));
          break;
        case "set":
          Ut(e) && l(o.get(Ot));
          break;
      }
  }
  ir();
}
function Ft(e) {
  const t = ne(e);
  return t === e ? t : (Ae(t, "iterate", _n), Ve(e) ? t : t.map(Ke));
}
function ss(e) {
  return Ae((e = ne(e)), "iterate", _n), e;
}
function mt(e, t) {
  return ft(e) ? (Et(e) ? Qt(Ke(t)) : Qt(t)) : Ke(t);
}
const Bl = {
  __proto__: null,
  [Symbol.iterator]() {
    return gs(this, Symbol.iterator, (e) => mt(this, e));
  },
  concat(...e) {
    return Ft(this).concat(...e.map((t) => (Q(t) ? Ft(t) : t)));
  },
  entries() {
    return gs(this, "entries", (e) => ((e[1] = mt(this, e[1])), e));
  },
  every(e, t) {
    return tt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return tt(
      this,
      "filter",
      e,
      t,
      (n) => n.map((s) => mt(this, s)),
      arguments
    );
  },
  find(e, t) {
    return tt(this, "find", e, t, (n) => mt(this, n), arguments);
  },
  findIndex(e, t) {
    return tt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return tt(this, "findLast", e, t, (n) => mt(this, n), arguments);
  },
  findLastIndex(e, t) {
    return tt(this, "findLastIndex", e, t, void 0, arguments);
  },
  forEach(e, t) {
    return tt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return ms(this, "includes", e);
  },
  indexOf(...e) {
    return ms(this, "indexOf", e);
  },
  join(e) {
    return Ft(this).join(e);
  },
  lastIndexOf(...e) {
    return ms(this, "lastIndexOf", e);
  },
  map(e, t) {
    return tt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return nn(this, "pop");
  },
  push(...e) {
    return nn(this, "push", e);
  },
  reduce(e, ...t) {
    return Or(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Or(this, "reduceRight", e, t);
  },
  shift() {
    return nn(this, "shift");
  },
  some(e, t) {
    return tt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return nn(this, "splice", e);
  },
  toReversed() {
    return Ft(this).toReversed();
  },
  toSorted(e) {
    return Ft(this).toSorted(e);
  },
  toSpliced(...e) {
    return Ft(this).toSpliced(...e);
  },
  unshift(...e) {
    return nn(this, "unshift", e);
  },
  values() {
    return gs(this, "values", (e) => mt(this, e));
  },
};
function gs(e, t, n) {
  const s = ss(e),
    r = s[t]();
  return (
    s !== e &&
      !Ve(e) &&
      ((r._next = r.next),
      (r.next = () => {
        const i = r._next();
        return i.done || (i.value = n(i.value)), i;
      })),
    r
  );
}
const Hl = Array.prototype;
function tt(e, t, n, s, r, i) {
  const o = ss(e),
    l = o !== e && !Ve(e),
    c = o[t];
  if (c !== Hl[t]) {
    const u = c.apply(e, i);
    return l ? Ke(u) : u;
  }
  let a = n;
  o !== e &&
    (l
      ? (a = function (u, p) {
          return n.call(this, mt(e, u), p, e);
        })
      : n.length > 2 &&
        (a = function (u, p) {
          return n.call(this, u, p, e);
        }));
  const f = c.call(o, a, s);
  return l && r ? r(f) : f;
}
function Or(e, t, n, s) {
  const r = ss(e);
  let i = n;
  return (
    r !== e &&
      (Ve(e)
        ? n.length > 3 &&
          (i = function (o, l, c) {
            return n.call(this, o, l, c, e);
          })
        : (i = function (o, l, c) {
            return n.call(this, o, mt(e, l), c, e);
          })),
    r[t](i, ...s)
  );
}
function ms(e, t, n) {
  const s = ne(e);
  Ae(s, "iterate", _n);
  const r = s[t](...n);
  return (r === -1 || r === !1) && ur(n[0])
    ? ((n[0] = ne(n[0])), s[t](...n))
    : r;
}
function nn(e, t, n = []) {
  lt(), rr();
  const s = ne(e)[t].apply(e, n);
  return ir(), ct(), s;
}
const Vl = Ys("__proto__,__v_isRef,__isVue"),
  $i = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(ut)
  );
function kl(e) {
  ut(e) || (e = String(e));
  const t = ne(this);
  return Ae(t, "has", e), t.hasOwnProperty(e);
}
class qi {
  constructor(t = !1, n = !1) {
    (this._isReadonly = t), (this._isShallow = n);
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const r = this._isReadonly,
      i = this._isShallow;
    if (n === "__v_isReactive") return !r;
    if (n === "__v_isReadonly") return r;
    if (n === "__v_isShallow") return i;
    if (n === "__v_raw")
      return s === (r ? (i ? Yl : Xi) : i ? Yi : Qi).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(s)
        ? t
        : void 0;
    const o = Q(t);
    if (!r) {
      let c;
      if (o && (c = Bl[n])) return c;
      if (n === "hasOwnProperty") return kl;
    }
    const l = Reflect.get(t, n, Te(t) ? t : s);
    if ((ut(n) ? $i.has(n) : Vl(n)) || (r || Ae(t, "get", n), i)) return l;
    if (Te(l)) {
      const c = o && er(n) ? l : l.value;
      return r && ue(c) ? Ms(c) : c;
    }
    return ue(l) ? (r ? Ms(l) : rs(l)) : l;
  }
}
class Ji extends qi {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let i = t[n];
    const o = Q(t) && er(n);
    if (!this._isShallow) {
      const a = ft(i);
      if (
        (!Ve(s) && !ft(s) && ((i = ne(i)), (s = ne(s))), !o && Te(i) && !Te(s))
      )
        return a || (i.value = s), !0;
    }
    const l = o ? Number(n) < t.length : re(t, n),
      c = Reflect.set(t, n, s, Te(t) ? t : r);
    return (
      t === ne(r) && (l ? vt(s, i) && it(t, "set", n, s) : it(t, "add", n, s)),
      c
    );
  }
  deleteProperty(t, n) {
    const s = re(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && s && it(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!ut(n) || !$i.has(n)) && Ae(t, "has", n), s;
  }
  ownKeys(t) {
    return Ae(t, "iterate", Q(t) ? "length" : Ot), Reflect.ownKeys(t);
  }
}
class jl extends qi {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const Ul = new Ji(),
  Gl = new jl(),
  Kl = new Ji(!0);
const Is = (e) => e,
  wn = (e) => Reflect.getPrototypeOf(e);
function Wl(e, t, n) {
  return function (...s) {
    const r = this.__v_raw,
      i = ne(r),
      o = Ut(i),
      l = e === "entries" || (e === Symbol.iterator && o),
      c = e === "keys" && o,
      a = r[e](...s),
      f = n ? Is : t ? Qt : Ke;
    return (
      !t && Ae(i, "iterate", c ? Ns : Ot),
      {
        next() {
          const { value: u, done: p } = a.next();
          return p
            ? { value: u, done: p }
            : { value: l ? [f(u[0]), f(u[1])] : f(u), done: p };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function Sn(e) {
  return function (...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function $l(e, t) {
  const n = {
    get(r) {
      const i = this.__v_raw,
        o = ne(i),
        l = ne(r);
      e || (vt(r, l) && Ae(o, "get", r), Ae(o, "get", l));
      const { has: c } = wn(o),
        a = t ? Is : e ? Qt : Ke;
      if (c.call(o, r)) return a(i.get(r));
      if (c.call(o, l)) return a(i.get(l));
      i !== o && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && Ae(ne(r), "iterate", Ot), r.size;
    },
    has(r) {
      const i = this.__v_raw,
        o = ne(i),
        l = ne(r);
      return (
        e || (vt(r, l) && Ae(o, "has", r), Ae(o, "has", l)),
        r === l ? i.has(r) : i.has(r) || i.has(l)
      );
    },
    forEach(r, i) {
      const o = this,
        l = o.__v_raw,
        c = ne(l),
        a = t ? Is : e ? Qt : Ke;
      return (
        !e && Ae(c, "iterate", Ot),
        l.forEach((f, u) => r.call(i, a(f), a(u), o))
      );
    },
  };
  return (
    _e(
      n,
      e
        ? {
            add: Sn("add"),
            set: Sn("set"),
            delete: Sn("delete"),
            clear: Sn("clear"),
          }
        : {
            add(r) {
              !t && !Ve(r) && !ft(r) && (r = ne(r));
              const i = ne(this);
              return (
                wn(i).has.call(i, r) || (i.add(r), it(i, "add", r, r)), this
              );
            },
            set(r, i) {
              !t && !Ve(i) && !ft(i) && (i = ne(i));
              const o = ne(this),
                { has: l, get: c } = wn(o);
              let a = l.call(o, r);
              a || ((r = ne(r)), (a = l.call(o, r)));
              const f = c.call(o, r);
              return (
                o.set(r, i),
                a ? vt(i, f) && it(o, "set", r, i) : it(o, "add", r, i),
                this
              );
            },
            delete(r) {
              const i = ne(this),
                { has: o, get: l } = wn(i);
              let c = o.call(i, r);
              c || ((r = ne(r)), (c = o.call(i, r))), l && l.call(i, r);
              const a = i.delete(r);
              return c && it(i, "delete", r, void 0), a;
            },
            clear() {
              const r = ne(this),
                i = r.size !== 0,
                o = r.clear();
              return i && it(r, "clear", void 0, void 0), o;
            },
          }
    ),
    ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
      n[r] = Wl(r, e, t);
    }),
    n
  );
}
function cr(e, t) {
  const n = $l(e, t);
  return (s, r, i) =>
    r === "__v_isReactive"
      ? !e
      : r === "__v_isReadonly"
      ? e
      : r === "__v_raw"
      ? s
      : Reflect.get(re(n, r) && r in s ? n : s, r, i);
}
const ql = { get: cr(!1, !1) },
  Jl = { get: cr(!1, !0) },
  Ql = { get: cr(!0, !1) };
const Qi = new WeakMap(),
  Yi = new WeakMap(),
  Xi = new WeakMap(),
  Yl = new WeakMap();
function Xl(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Zl(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Xl(Cl(e));
}
function rs(e) {
  return ft(e) ? e : fr(e, !1, Ul, ql, Qi);
}
function Zi(e) {
  return fr(e, !1, Kl, Jl, Yi);
}
function Ms(e) {
  return fr(e, !0, Gl, Ql, Xi);
}
function fr(e, t, n, s, r) {
  if (!ue(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const i = Zl(e);
  if (i === 0) return e;
  const o = r.get(e);
  if (o) return o;
  const l = new Proxy(e, i === 2 ? s : n);
  return r.set(e, l), l;
}
function Et(e) {
  return ft(e) ? Et(e.__v_raw) : !!(e && e.__v_isReactive);
}
function ft(e) {
  return !!(e && e.__v_isReadonly);
}
function Ve(e) {
  return !!(e && e.__v_isShallow);
}
function ur(e) {
  return e ? !!e.__v_raw : !1;
}
function ne(e) {
  const t = e && e.__v_raw;
  return t ? ne(t) : e;
}
function zl(e) {
  return (
    !re(e, "__v_skip") && Object.isExtensible(e) && Mi(e, "__v_skip", !0), e
  );
}
const Ke = (e) => (ue(e) ? rs(e) : e),
  Qt = (e) => (ue(e) ? Ms(e) : e);
function Te(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function ec(e) {
  return zi(e, !1);
}
function tc(e) {
  return zi(e, !0);
}
function zi(e, t) {
  return Te(e) ? e : new nc(e, t);
}
class nc {
  constructor(t, n) {
    (this.dep = new lr()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = n ? t : ne(t)),
      (this._value = n ? t : Ke(t)),
      (this.__v_isShallow = n);
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue,
      s = this.__v_isShallow || Ve(t) || ft(t);
    (t = s ? t : ne(t)),
      vt(t, n) &&
        ((this._rawValue = t),
        (this._value = s ? t : Ke(t)),
        this.dep.trigger());
  }
}
function Kt(e) {
  return Te(e) ? e.value : e;
}
const sc = {
  get: (e, t, n) => (t === "__v_raw" ? e : Kt(Reflect.get(e, t, n))),
  set: (e, t, n, s) => {
    const r = e[t];
    return Te(r) && !Te(n) ? ((r.value = n), !0) : Reflect.set(e, t, n, s);
  },
};
function eo(e) {
  return Et(e) ? e : new Proxy(e, sc);
}
class rc {
  constructor(t, n, s) {
    (this.fn = t),
      (this.setter = n),
      (this._value = void 0),
      (this.dep = new lr(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = yn - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !n),
      (this.isSSR = s);
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && fe !== this))
      return ki(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Gi(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function ic(e, t, n = !1) {
  let s, r;
  return X(e) ? (s = e) : ((s = e.get), (r = e.set)), new rc(s, r, n);
}
const On = {},
  jn = new WeakMap();
let wt;
function oc(e, t = !1, n = wt) {
  if (n) {
    let s = jn.get(n);
    s || jn.set(n, (s = [])), s.push(e);
  }
}
function lc(e, t, n = le) {
  const {
      immediate: s,
      deep: r,
      once: i,
      scheduler: o,
      augmentJob: l,
      call: c,
    } = n,
    a = (_) => (r ? _ : Ve(_) || r === !1 || r === 0 ? ot(_, 1) : ot(_));
  let f,
    u,
    p,
    g,
    A = !1,
    R = !1;
  if (
    (Te(e)
      ? ((u = () => e.value), (A = Ve(e)))
      : Et(e)
      ? ((u = () => a(e)), (A = !0))
      : Q(e)
      ? ((R = !0),
        (A = e.some((_) => Et(_) || Ve(_))),
        (u = () =>
          e.map((_) => {
            if (Te(_)) return _.value;
            if (Et(_)) return a(_);
            if (X(_)) return c ? c(_, 2) : _();
          })))
      : X(e)
      ? t
        ? (u = c ? () => c(e, 2) : e)
        : (u = () => {
            if (p) {
              lt();
              try {
                p();
              } finally {
                ct();
              }
            }
            const _ = wt;
            wt = f;
            try {
              return c ? c(e, 3, [g]) : e(g);
            } finally {
              wt = _;
            }
          })
      : (u = ze),
    t && r)
  ) {
    const _ = u,
      v = r === !0 ? 1 / 0 : r;
    u = () => ot(_(), v);
  }
  const V = Dl(),
    D = () => {
      f.stop(), V && V.active && Zs(V.effects, f);
    };
  if (i && t) {
    const _ = t;
    t = (...v) => {
      _(...v), D();
    };
  }
  let I = R ? new Array(e.length).fill(On) : On;
  const m = (_) => {
    if (!(!(f.flags & 1) || (!f.dirty && !_)))
      if (t) {
        const v = f.run();
        if (r || A || (R ? v.some((O, F) => vt(O, I[F])) : vt(v, I))) {
          p && p();
          const O = wt;
          wt = f;
          try {
            const F = [v, I === On ? void 0 : R && I[0] === On ? [] : I, g];
            (I = v), c ? c(t, 3, F) : t(...F);
          } finally {
            wt = O;
          }
        }
      } else f.run();
  };
  return (
    l && l(m),
    (f = new Hi(u)),
    (f.scheduler = o ? () => o(m, !1) : m),
    (g = (_) => oc(_, !1, f)),
    (p = f.onStop =
      () => {
        const _ = jn.get(f);
        if (_) {
          if (c) c(_, 4);
          else for (const v of _) v();
          jn.delete(f);
        }
      }),
    t ? (s ? m(!0) : (I = f.run())) : o ? o(m.bind(null, !0), !0) : f.run(),
    (D.pause = f.pause.bind(f)),
    (D.resume = f.resume.bind(f)),
    (D.stop = D),
    D
  );
}
function ot(e, t = 1 / 0, n) {
  if (
    t <= 0 ||
    !ue(e) ||
    e.__v_skip ||
    ((n = n || new Map()), (n.get(e) || 0) >= t)
  )
    return e;
  if ((n.set(e, t), t--, Te(e))) ot(e.value, t, n);
  else if (Q(e)) for (let s = 0; s < e.length; s++) ot(e[s], t, n);
  else if (Pi(e) || Ut(e))
    e.forEach((s) => {
      ot(s, t, n);
    });
  else if (Ii(e)) {
    for (const s in e) ot(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && ot(e[s], t, n);
  }
  return e;
}
function Tn(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    Rn(r, t, n);
  }
}
function We(e, t, n, s) {
  if (X(e)) {
    const r = Tn(e, t, n, s);
    return (
      r &&
        zs(r) &&
        r.catch((i) => {
          Rn(i, t, n);
        }),
      r
    );
  }
  if (Q(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++) r.push(We(e[i], t, n, s));
    return r;
  }
}
function Rn(e, t, n, s = !0) {
  const r = t ? t.vnode : null,
    { errorHandler: i, throwUnhandledErrorInProduction: o } =
      (t && t.appContext.config) || le;
  if (t) {
    let l = t.parent;
    const c = t.proxy,
      a = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const f = l.ec;
      if (f) {
        for (let u = 0; u < f.length; u++) if (f[u](e, c, a) === !1) return;
      }
      l = l.parent;
    }
    if (i) {
      lt(), Tn(i, null, 10, [e, c, a]), ct();
      return;
    }
  }
  cc(e, n, r, s, o);
}
function cc(e, t, n, s = !0, r = !1) {
  if (r) throw e;
  console.error(e);
}
const Se = [];
let Ye = -1;
const Wt = [];
let yt = null,
  Ht = 0;
const to = Promise.resolve();
let Un = null;
function no(e) {
  const t = Un || to;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function fc(e) {
  let t = Ye + 1,
    n = Se.length;
  for (; t < n; ) {
    const s = (t + n) >>> 1,
      r = Se[s],
      i = bn(r);
    i < e || (i === e && r.flags & 2) ? (t = s + 1) : (n = s);
  }
  return t;
}
function ar(e) {
  if (!(e.flags & 1)) {
    const t = bn(e),
      n = Se[Se.length - 1];
    !n || (!(e.flags & 2) && t >= bn(n)) ? Se.push(e) : Se.splice(fc(t), 0, e),
      (e.flags |= 1),
      so();
  }
}
function so() {
  Un || (Un = to.then(ro));
}
function Ds(e) {
  Q(e)
    ? Wt.push(...e)
    : yt && e.id === -1
    ? yt.splice(Ht + 1, 0, e)
    : e.flags & 1 || (Wt.push(e), (e.flags |= 1)),
    so();
}
function Pr(e, t, n = Ye + 1) {
  for (; n < Se.length; n++) {
    const s = Se[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid) continue;
      Se.splice(n, 1),
        n--,
        s.flags & 4 && (s.flags &= -2),
        s(),
        s.flags & 4 || (s.flags &= -2);
    }
  }
}
function Gn(e) {
  if (Wt.length) {
    const t = [...new Set(Wt)].sort((n, s) => bn(n) - bn(s));
    if (((Wt.length = 0), yt)) {
      yt.push(...t);
      return;
    }
    for (yt = t, Ht = 0; Ht < yt.length; Ht++) {
      const n = yt[Ht];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2);
    }
    (yt = null), (Ht = 0);
  }
}
const bn = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id);
function ro(e) {
  try {
    for (Ye = 0; Ye < Se.length; Ye++) {
      const t = Se[Ye];
      t &&
        !(t.flags & 8) &&
        (t.flags & 4 && (t.flags &= -2),
        Tn(t, t.i, t.i ? 15 : 14),
        t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Ye < Se.length; Ye++) {
      const t = Se[Ye];
      t && (t.flags &= -2);
    }
    (Ye = -1),
      (Se.length = 0),
      Gn(),
      (Un = null),
      (Se.length || Wt.length) && ro();
  }
}
let be = null,
  io = null;
function Kn(e) {
  const t = be;
  return (be = e), (io = (e && e.type.__scopeId) || null), t;
}
function uc(e, t = be, n) {
  if (!t || e._n) return e;
  const s = (...r) => {
    s._d && Jn(-1);
    const i = Kn(t);
    let o;
    try {
      o = e(...r);
    } finally {
      Kn(i), s._d && Jn(1);
    }
    return o;
  };
  return (s._n = !0), (s._c = !0), (s._d = !0), s;
}
function ta(e, t) {
  if (be === null) return e;
  const n = us(be),
    s = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [i, o, l, c = le] = t[r];
    i &&
      (X(i) && (i = { mounted: i, updated: i }),
      i.deep && ot(o),
      s.push({
        dir: i,
        instance: n,
        value: o,
        oldValue: void 0,
        arg: l,
        modifiers: c,
      }));
  }
  return e;
}
function Xe(e, t, n, s) {
  const r = e.dirs,
    i = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const l = r[o];
    i && (l.oldValue = i[o].value);
    let c = l.dir[s];
    c && (lt(), We(c, n, 8, [e.el, l, e, t]), ct());
  }
}
const oo = Symbol("_vte"),
  lo = (e) => e.__isTeleport,
  un = (e) => e && (e.disabled || e.disabled === ""),
  Nr = (e) => e && (e.defer || e.defer === ""),
  Ir = (e) => typeof SVGElement != "undefined" && e instanceof SVGElement,
  Mr = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement,
  Ls = (e, t) => {
    const n = e && e.to;
    return de(n) ? (t ? t(n) : null) : n;
  },
  co = {
    name: "Teleport",
    __isTeleport: !0,
    process(e, t, n, s, r, i, o, l, c, a) {
      const {
          mc: f,
          pc: u,
          pbc: p,
          o: { insert: g, querySelector: A, createText: R, createComment: V },
        } = a,
        D = un(t.props);
      let { shapeFlag: I, children: m, dynamicChildren: _ } = t;
      if (e == null) {
        const v = (t.el = R("")),
          O = (t.anchor = R(""));
        g(v, n, s), g(O, n, s);
        const F = (S, P) => {
            I & 16 && f(m, S, P, r, i, o, l, c);
          },
          G = () => {
            const S = (t.target = Ls(t.props, A)),
              P = fo(S, t, R, g);
            S &&
              (o !== "svg" && Ir(S)
                ? (o = "svg")
                : o !== "mathml" && Mr(S) && (o = "mathml"),
              r &&
                r.isCE &&
                (
                  r.ce._teleportTargets || (r.ce._teleportTargets = new Set())
                ).add(S),
              D || (F(S, P), Fn(t, !1)));
          };
        D && (F(n, O), Fn(t, !0)),
          Nr(t.props)
            ? ((t.el.__isMounted = !1),
              Ee(() => {
                G(), delete t.el.__isMounted;
              }, i))
            : G();
      } else {
        if (Nr(t.props) && e.el.__isMounted === !1) {
          Ee(() => {
            co.process(e, t, n, s, r, i, o, l, c, a);
          }, i);
          return;
        }
        (t.el = e.el), (t.targetStart = e.targetStart);
        const v = (t.anchor = e.anchor),
          O = (t.target = e.target),
          F = (t.targetAnchor = e.targetAnchor),
          G = un(e.props),
          S = G ? n : O,
          P = G ? v : F;
        if (
          (o === "svg" || Ir(O)
            ? (o = "svg")
            : (o === "mathml" || Mr(O)) && (o = "mathml"),
          _
            ? (p(e.dynamicChildren, _, S, r, i, o, l), _r(e, t, !0))
            : c || u(e, t, S, P, r, i, o, l, !1),
          D)
        )
          G
            ? t.props &&
              e.props &&
              t.props.to !== e.props.to &&
              (t.props.to = e.props.to)
            : Pn(t, n, v, a, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const W = (t.target = Ls(t.props, A));
          W && Pn(t, W, null, a, 0);
        } else G && Pn(t, O, F, a, 1);
        Fn(t, D);
      }
    },
    remove(e, t, n, { um: s, o: { remove: r } }, i) {
      const {
        shapeFlag: o,
        children: l,
        anchor: c,
        targetStart: a,
        targetAnchor: f,
        target: u,
        props: p,
      } = e;
      if ((u && (r(a), r(f)), i && r(c), o & 16)) {
        const g = i || !un(p);
        for (let A = 0; A < l.length; A++) {
          const R = l[A];
          s(R, t, n, g, !!R.dynamicChildren);
        }
      }
    },
    move: Pn,
    hydrate: ac,
  };
function Pn(e, t, n, { o: { insert: s }, m: r }, i = 2) {
  i === 0 && s(e.targetAnchor, t, n);
  const { el: o, anchor: l, shapeFlag: c, children: a, props: f } = e,
    u = i === 2;
  if ((u && s(o, t, n), (!u || un(f)) && c & 16))
    for (let p = 0; p < a.length; p++) r(a[p], t, n, 2);
  u && s(l, t, n);
}
function ac(
  e,
  t,
  n,
  s,
  r,
  i,
  {
    o: {
      nextSibling: o,
      parentNode: l,
      querySelector: c,
      insert: a,
      createText: f,
    },
  },
  u
) {
  function p(R, V, D, I) {
    (V.anchor = u(o(R), V, l(R), n, s, r, i)),
      (V.targetStart = D),
      (V.targetAnchor = I);
  }
  const g = (t.target = Ls(t.props, c)),
    A = un(t.props);
  if (g) {
    const R = g._lpa || g.firstChild;
    if (t.shapeFlag & 16)
      if (A) p(e, t, R, R && o(R));
      else {
        t.anchor = o(e);
        let V = R;
        for (; V; ) {
          if (V && V.nodeType === 8) {
            if (V.data === "teleport start anchor") t.targetStart = V;
            else if (V.data === "teleport anchor") {
              (t.targetAnchor = V),
                (g._lpa = t.targetAnchor && o(t.targetAnchor));
              break;
            }
          }
          V = o(V);
        }
        t.targetAnchor || fo(g, t, f, a), u(R && o(R), t, g, n, s, r, i);
      }
    Fn(t, A);
  } else A && t.shapeFlag & 16 && p(e, t, e, o(e));
  return t.anchor && o(t.anchor);
}
const na = co;
function Fn(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let s, r;
    for (
      t
        ? ((s = e.el), (r = e.anchor))
        : ((s = e.targetStart), (r = e.targetAnchor));
      s && s !== r;

    )
      s.nodeType === 1 && s.setAttribute("data-v-owner", n.uid),
        (s = s.nextSibling);
    n.ut();
  }
}
function fo(e, t, n, s) {
  const r = (t.targetStart = n("")),
    i = (t.targetAnchor = n(""));
  return (r[oo] = i), e && (s(r, e), s(i, e)), i;
}
const rt = Symbol("_leaveCb"),
  Nn = Symbol("_enterCb");
function uo() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    bo(() => {
      e.isMounted = !0;
    }),
    Eo(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const Be = [Function, Array],
  ao = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Be,
    onEnter: Be,
    onAfterEnter: Be,
    onEnterCancelled: Be,
    onBeforeLeave: Be,
    onLeave: Be,
    onAfterLeave: Be,
    onLeaveCancelled: Be,
    onBeforeAppear: Be,
    onAppear: Be,
    onAfterAppear: Be,
    onAppearCancelled: Be,
  },
  ho = (e) => {
    const t = e.subTree;
    return t.component ? ho(t.component) : t;
  },
  hc = {
    name: "BaseTransition",
    props: ao,
    setup(e, { slots: t }) {
      const n = fs(),
        s = uo();
      return () => {
        const r = t.default && hr(t.default(), !0);
        if (!r || !r.length) return;
        const i = po(r),
          o = ne(e),
          { mode: l } = o;
        if (s.isLeaving) return ys(i);
        const c = Dr(i);
        if (!c) return ys(i);
        let a = vn(c, o, s, n, (u) => (a = u));
        c.type !== me && It(c, a);
        let f = n.subTree && Dr(n.subTree);
        if (f && f.type !== me && !Ze(f, c) && ho(n).type !== me) {
          let u = vn(f, o, s, n);
          if ((It(f, u), l === "out-in" && c.type !== me))
            return (
              (s.isLeaving = !0),
              (u.afterLeave = () => {
                (s.isLeaving = !1),
                  n.job.flags & 8 || n.update(),
                  delete u.afterLeave,
                  (f = void 0);
              }),
              ys(i)
            );
          l === "in-out" && c.type !== me
            ? (u.delayLeave = (p, g, A) => {
                const R = go(s, f);
                (R[String(f.key)] = f),
                  (p[rt] = () => {
                    g(), (p[rt] = void 0), delete a.delayedLeave, (f = void 0);
                  }),
                  (a.delayedLeave = () => {
                    A(), delete a.delayedLeave, (f = void 0);
                  });
              })
            : (f = void 0);
        } else f && (f = void 0);
        return i;
      };
    },
  };
function po(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== me) {
        t = n;
        break;
      }
  }
  return t;
}
const dc = hc;
function go(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || ((s = Object.create(null)), n.set(t.type, s)), s;
}
function vn(e, t, n, s, r) {
  const {
      appear: i,
      mode: o,
      persisted: l = !1,
      onBeforeEnter: c,
      onEnter: a,
      onAfterEnter: f,
      onEnterCancelled: u,
      onBeforeLeave: p,
      onLeave: g,
      onAfterLeave: A,
      onLeaveCancelled: R,
      onBeforeAppear: V,
      onAppear: D,
      onAfterAppear: I,
      onAppearCancelled: m,
    } = t,
    _ = String(e.key),
    v = go(n, e),
    O = (S, P) => {
      S && We(S, s, 9, P);
    },
    F = (S, P) => {
      const W = P[1];
      O(S, P),
        Q(S) ? S.every((w) => w.length <= 1) && W() : S.length <= 1 && W();
    },
    G = {
      mode: o,
      persisted: l,
      beforeEnter(S) {
        let P = c;
        if (!n.isMounted)
          if (i) P = V || c;
          else return;
        S[rt] && S[rt](!0);
        const W = v[_];
        W && Ze(e, W) && W.el[rt] && W.el[rt](), O(P, [S]);
      },
      enter(S) {
        let P = a,
          W = f,
          w = u;
        if (!n.isMounted)
          if (i) (P = D || a), (W = I || f), (w = m || u);
          else return;
        let K = !1;
        const ee = (S[Nn] = (oe) => {
          K ||
            ((K = !0),
            oe ? O(w, [S]) : O(W, [S]),
            G.delayedLeave && G.delayedLeave(),
            (S[Nn] = void 0));
        });
        P ? F(P, [S, ee]) : ee();
      },
      leave(S, P) {
        const W = String(e.key);
        if ((S[Nn] && S[Nn](!0), n.isUnmounting)) return P();
        O(p, [S]);
        let w = !1;
        const K = (S[rt] = (ee) => {
          w ||
            ((w = !0),
            P(),
            ee ? O(R, [S]) : O(A, [S]),
            (S[rt] = void 0),
            v[W] === e && delete v[W]);
        });
        (v[W] = e), g ? F(g, [S, K]) : K();
      },
      clone(S) {
        const P = vn(S, t, n, s, r);
        return r && r(P), P;
      },
    };
  return G;
}
function ys(e) {
  if (is(e)) return (e = At(e)), (e.children = null), e;
}
function Dr(e) {
  if (!is(e)) return lo(e.type) && e.children ? po(e.children) : e;
  if (e.component) return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16) return n[0];
    if (t & 32 && X(n.default)) return n.default();
  }
}
function It(e, t) {
  e.shapeFlag & 6 && e.component
    ? ((e.transition = t), It(e.component.subTree, t))
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t);
}
function hr(e, t = !1, n) {
  let s = [],
    r = 0;
  for (let i = 0; i < e.length; i++) {
    let o = e[i];
    const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : i);
    o.type === Ce
      ? (o.patchFlag & 128 && r++, (s = s.concat(hr(o.children, t, l))))
      : (t || o.type !== me) && s.push(l != null ? At(o, { key: l }) : o);
  }
  if (r > 1) for (let i = 0; i < s.length; i++) s[i].patchFlag = -2;
  return s;
}
function mo(e, t) {
  return X(e) ? _e({ name: e.name }, t, { setup: e }) : e;
}
function yo(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Wn = new WeakMap();
function $t(e, t, n, s, r = !1) {
  if (Q(e)) {
    e.forEach((A, R) => $t(A, t && (Q(t) ? t[R] : t), n, s, r));
    return;
  }
  if (Pt(s) && !r) {
    s.shapeFlag & 512 &&
      s.type.__asyncResolved &&
      s.component.subTree.component &&
      $t(e, t, n, s.component.subTree);
    return;
  }
  const i = s.shapeFlag & 4 ? us(s.component) : s.el,
    o = r ? null : i,
    { i: l, r: c } = e,
    a = t && t.r,
    f = l.refs === le ? (l.refs = {}) : l.refs,
    u = l.setupState,
    p = ne(u),
    g = u === le ? Oi : (A) => re(p, A);
  if (a != null && a !== c) {
    if ((Lr(t), de(a))) (f[a] = null), g(a) && (u[a] = null);
    else if (Te(a)) {
      a.value = null;
      const A = t;
      A.k && (f[A.k] = null);
    }
  }
  if (X(c)) Tn(c, l, 12, [o, f]);
  else {
    const A = de(c),
      R = Te(c);
    if (A || R) {
      const V = () => {
        if (e.f) {
          const D = A ? (g(c) ? u[c] : f[c]) : c.value;
          if (r) Q(D) && Zs(D, i);
          else if (Q(D)) D.includes(i) || D.push(i);
          else if (A) (f[c] = [i]), g(c) && (u[c] = f[c]);
          else {
            const I = [i];
            (c.value = I), e.k && (f[e.k] = I);
          }
        } else
          A
            ? ((f[c] = o), g(c) && (u[c] = o))
            : R && ((c.value = o), e.k && (f[e.k] = o));
      };
      if (o) {
        const D = () => {
          V(), Wn.delete(e);
        };
        (D.id = -1), Wn.set(e, D), Ee(D, n);
      } else Lr(e), V();
    }
  }
}
function Lr(e) {
  const t = Wn.get(e);
  t && ((t.flags |= 8), Wn.delete(e));
}
let Fr = !1;
const Bt = () => {
    Fr ||
      (console.error("Hydration completed but contains mismatches."),
      (Fr = !0));
  },
  pc = (e) => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject",
  gc = (e) => e.namespaceURI.includes("MathML"),
  In = (e) => {
    if (e.nodeType === 1) {
      if (pc(e)) return "svg";
      if (gc(e)) return "mathml";
    }
  },
  Mn = (e) => e.nodeType === 8;
function mc(e) {
  const {
      mt: t,
      p: n,
      o: {
        patchProp: s,
        createText: r,
        nextSibling: i,
        parentNode: o,
        remove: l,
        insert: c,
        createComment: a,
      },
    } = e,
    f = (m, _) => {
      if (!_.hasChildNodes()) {
        n(null, m, _), Gn(), (_._vnode = m);
        return;
      }
      u(_.firstChild, m, null, null, null), Gn(), (_._vnode = m);
    },
    u = (m, _, v, O, F, G = !1) => {
      G = G || !!_.dynamicChildren;
      const S = Mn(m) && m.data === "[",
        P = () => R(m, _, v, O, F, S),
        { type: W, ref: w, shapeFlag: K, patchFlag: ee } = _;
      let oe = m.nodeType;
      (_.el = m), ee === -2 && ((G = !1), (_.dynamicChildren = null));
      let U = null;
      switch (W) {
        case Nt:
          oe !== 3
            ? _.children === ""
              ? (c((_.el = r("")), o(m), m), (U = m))
              : (U = P())
            : (m.data !== _.children && (Bt(), (m.data = _.children)),
              (U = i(m)));
          break;
        case me:
          I(m)
            ? ((U = i(m)), D((_.el = m.content.firstChild), m, v))
            : oe !== 8 || S
            ? (U = P())
            : (U = i(m));
          break;
        case hn:
          if ((S && ((m = i(m)), (oe = m.nodeType)), oe === 1 || oe === 3)) {
            U = m;
            const Y = !_.children.length;
            for (let k = 0; k < _.staticCount; k++)
              Y && (_.children += U.nodeType === 1 ? U.outerHTML : U.data),
                k === _.staticCount - 1 && (_.anchor = U),
                (U = i(U));
            return S ? i(U) : U;
          } else P();
          break;
        case Ce:
          S ? (U = A(m, _, v, O, F, G)) : (U = P());
          break;
        default:
          if (K & 1)
            (oe !== 1 || _.type.toLowerCase() !== m.tagName.toLowerCase()) &&
            !I(m)
              ? (U = P())
              : (U = p(m, _, v, O, F, G));
          else if (K & 6) {
            _.slotScopeIds = F;
            const Y = o(m);
            if (
              (S
                ? (U = V(m))
                : Mn(m) && m.data === "teleport start"
                ? (U = V(m, m.data, "teleport end"))
                : (U = i(m)),
              t(_, Y, null, v, O, In(Y), G),
              Pt(_) && !_.type.__asyncResolved)
            ) {
              let k;
              S
                ? ((k = ye(Ce)),
                  (k.anchor = U ? U.previousSibling : Y.lastChild))
                : (k = m.nodeType === 3 ? Jo("") : ye("div")),
                (k.el = m),
                (_.component.subTree = k);
            }
          } else
            K & 64
              ? oe !== 8
                ? (U = P())
                : (U = _.type.hydrate(m, _, v, O, F, G, e, g))
              : K & 128 &&
                (U = _.type.hydrate(m, _, v, O, In(o(m)), F, G, e, u));
      }
      return w != null && $t(w, null, O, _), U;
    },
    p = (m, _, v, O, F, G) => {
      G = G || !!_.dynamicChildren;
      const {
          type: S,
          props: P,
          patchFlag: W,
          shapeFlag: w,
          dirs: K,
          transition: ee,
        } = _,
        oe = S === "input" || S === "option";
      if (oe || W !== -1) {
        K && Xe(_, null, v, "created");
        let U = !1;
        if (I(m)) {
          U = Vo(null, ee) && v && v.vnode.props && v.vnode.props.appear;
          const k = m.content.firstChild;
          if (U) {
            const ae = k.getAttribute("class");
            ae && (k.$cls = ae), ee.beforeEnter(k);
          }
          D(k, m, v), (_.el = m = k);
        }
        if (w & 16 && !(P && (P.innerHTML || P.textContent))) {
          let k = g(m.firstChild, _, m, v, O, F, G);
          for (; k; ) {
            Dn(m, 1) || Bt();
            const ae = k;
            (k = k.nextSibling), l(ae);
          }
        } else if (w & 8) {
          let k = _.children;
          k[0] ===
            `
` &&
            (m.tagName === "PRE" || m.tagName === "TEXTAREA") &&
            (k = k.slice(1));
          const { textContent: ae } = m;
          ae !== k &&
            ae !==
              k.replace(
                /\r\n|\r/g,
                `
`
              ) &&
            (Dn(m, 0) || Bt(), (m.textContent = _.children));
        }
        if (P) {
          if (oe || !G || W & 48) {
            const k = m.tagName.includes("-");
            for (const ae in P)
              ((oe && (ae.endsWith("value") || ae === "indeterminate")) ||
                (xn(ae) && !Gt(ae)) ||
                ae[0] === "." ||
                k) &&
                s(m, ae, null, P[ae], void 0, v);
          } else if (P.onClick) s(m, "onClick", null, P.onClick, void 0, v);
          else if (W & 4 && Et(P.style)) for (const k in P.style) P.style[k];
        }
        let Y;
        (Y = P && P.onVnodeBeforeMount) && He(Y, v, _),
          K && Xe(_, null, v, "beforeMount"),
          ((Y = P && P.onVnodeMounted) || K || U) &&
            Go(() => {
              Y && He(Y, v, _),
                U && ee.enter(m),
                K && Xe(_, null, v, "mounted");
            }, O);
      }
      return m.nextSibling;
    },
    g = (m, _, v, O, F, G, S) => {
      S = S || !!_.dynamicChildren;
      const P = _.children,
        W = P.length;
      for (let w = 0; w < W; w++) {
        const K = S ? P[w] : (P[w] = Le(P[w])),
          ee = K.type === Nt;
        m
          ? (ee &&
              !S &&
              w + 1 < W &&
              Le(P[w + 1]).type === Nt &&
              (c(r(m.data.slice(K.children.length)), v, i(m)),
              (m.data = K.children)),
            (m = u(m, K, O, F, G, S)))
          : ee && !K.children
          ? c((K.el = r("")), v)
          : (Dn(v, 1) || Bt(), n(null, K, v, null, O, F, In(v), G));
      }
      return m;
    },
    A = (m, _, v, O, F, G) => {
      const { slotScopeIds: S } = _;
      S && (F = F ? F.concat(S) : S);
      const P = o(m),
        W = g(i(m), _, P, v, O, F, G);
      return W && Mn(W) && W.data === "]"
        ? i((_.anchor = W))
        : (Bt(), c((_.anchor = a("]")), P, W), W);
    },
    R = (m, _, v, O, F, G) => {
      if ((Dn(m.parentElement, 1) || Bt(), (_.el = null), G)) {
        const W = V(m);
        for (;;) {
          const w = i(m);
          if (w && w !== W) l(w);
          else break;
        }
      }
      const S = i(m),
        P = o(m);
      return (
        l(m),
        n(null, _, P, S, v, O, In(P), F),
        v && ((v.vnode.el = _.el), cs(v, _.el)),
        S
      );
    },
    V = (m, _ = "[", v = "]") => {
      let O = 0;
      for (; m; )
        if (((m = i(m)), m && Mn(m) && (m.data === _ && O++, m.data === v))) {
          if (O === 0) return i(m);
          O--;
        }
      return m;
    },
    D = (m, _, v) => {
      const O = _.parentNode;
      O && O.replaceChild(m, _);
      let F = v;
      for (; F; )
        F.vnode.el === _ && (F.vnode.el = F.subTree.el = m), (F = F.parent);
    },
    I = (m) => m.nodeType === 1 && m.tagName === "TEMPLATE";
  return [f, u];
}
const Br = "data-allow-mismatch",
  yc = { 0: "text", 1: "children", 2: "class", 3: "style", 4: "attribute" };
function Dn(e, t) {
  if (t === 0 || t === 1)
    for (; e && !e.hasAttribute(Br); ) e = e.parentElement;
  const n = e && e.getAttribute(Br);
  if (n == null) return !1;
  if (n === "") return !0;
  {
    const s = n.split(",");
    return t === 0 && s.includes("children") ? !0 : s.includes(yc[t]);
  }
}
ns().requestIdleCallback;
ns().cancelIdleCallback;
const Pt = (e) => !!e.type.__asyncLoader,
  is = (e) => e.type.__isKeepAlive;
function _c(e, t) {
  _o(e, "a", t);
}
function bc(e, t) {
  _o(e, "da", t);
}
function _o(e, t, n = xe) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let r = n;
      for (; r; ) {
        if (r.isDeactivated) return;
        r = r.parent;
      }
      return e();
    });
  if ((os(t, s, n), n)) {
    let r = n.parent;
    for (; r && r.parent; )
      is(r.parent.vnode) && vc(s, t, n, r), (r = r.parent);
  }
}
function vc(e, t, n, s) {
  const r = os(t, e, s, !0);
  Ao(() => {
    Zs(s[t], r);
  }, n);
}
function os(e, t, n = xe, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []),
      i =
        t.__weh ||
        (t.__weh = (...o) => {
          lt();
          const l = Mt(n),
            c = We(t, n, e, o);
          return l(), ct(), c;
        });
    return s ? r.unshift(i) : r.push(i), i;
  }
}
const at =
    (e) =>
    (t, n = xe) => {
      (!An || e === "sp") && os(e, (...s) => t(...s), n);
    },
  Ec = at("bm"),
  bo = at("m"),
  Ac = at("bu"),
  vo = at("u"),
  Eo = at("bum"),
  Ao = at("um"),
  Cc = at("sp"),
  xc = at("rtg"),
  Tc = at("rtc");
function Rc(e, t = xe) {
  os("ec", e, t);
}
const dr = "components",
  wc = "directives";
function sa(e, t) {
  return pr(dr, e, !0, t) || e;
}
const Co = Symbol.for("v-ndc");
function ra(e) {
  return de(e) ? pr(dr, e, !1) || e : e || Co;
}
function ia(e) {
  return pr(wc, e);
}
function pr(e, t, n = !0, s = !1) {
  const r = be || xe;
  if (r) {
    const i = r.type;
    if (e === dr) {
      const l = _f(i, !1);
      if (l && (l === t || l === ke(t) || l === ts(ke(t)))) return i;
    }
    const o = Hr(r[e] || i[e], t) || Hr(r.appContext[e], t);
    return !o && s ? i : o;
  }
}
function Hr(e, t) {
  return e && (e[t] || e[ke(t)] || e[ts(ke(t))]);
}
function oa(e, t, n, s) {
  let r;
  const i = n,
    o = Q(e);
  if (o || de(e)) {
    const l = o && Et(e);
    let c = !1,
      a = !1;
    l && ((c = !Ve(e)), (a = ft(e)), (e = ss(e))), (r = new Array(e.length));
    for (let f = 0, u = e.length; f < u; f++)
      r[f] = t(c ? (a ? Qt(Ke(e[f])) : Ke(e[f])) : e[f], f, void 0, i);
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let l = 0; l < e; l++) r[l] = t(l + 1, l, void 0, i);
  } else if (ue(e))
    if (e[Symbol.iterator]) r = Array.from(e, (l, c) => t(l, c, void 0, i));
    else {
      const l = Object.keys(e);
      r = new Array(l.length);
      for (let c = 0, a = l.length; c < a; c++) {
        const f = l[c];
        r[c] = t(e[f], f, c, i);
      }
    }
  else r = [];
  return r;
}
function la(e, t, n = {}, s, r) {
  if (be.ce || (be.parent && Pt(be.parent) && be.parent.ce)) {
    const a = Object.keys(n).length > 0;
    return (
      t !== "default" && (n.name = t),
      qn(),
      js(Ce, null, [ye("slot", n, s && s())], a ? -2 : 64)
    );
  }
  let i = e[t];
  i && i._c && (i._d = !1), qn();
  const o = i && xo(i(n)),
    l = n.key || (o && o.key),
    c = js(
      Ce,
      { key: (l && !ut(l) ? l : `_${t}`) + (!o && s ? "_fb" : "") },
      o || (s ? s() : []),
      o && e._ === 1 ? 64 : -2
    );
  return i && i._c && (i._d = !0), c;
}
function xo(e) {
  return e.some((t) =>
    Xt(t) ? !(t.type === me || (t.type === Ce && !xo(t.children))) : !0
  )
    ? e
    : null;
}
const Fs = (e) => (e ? (Qo(e) ? us(e) : Fs(e.parent)) : null),
  an = _e(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Fs(e.parent),
    $root: (e) => Fs(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Ro(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        ar(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = no.bind(e.proxy)),
    $watch: (e) => Hc.bind(e),
  }),
  _s = (e, t) => e !== le && !e.__isScriptSetup && re(e, t),
  Sc = {
    get({ _: e }, t) {
      if (t === "__v_skip") return !0;
      const {
        ctx: n,
        setupState: s,
        data: r,
        props: i,
        accessCache: o,
        type: l,
        appContext: c,
      } = e;
      if (t[0] !== "$") {
        const p = o[t];
        if (p !== void 0)
          switch (p) {
            case 1:
              return s[t];
            case 2:
              return r[t];
            case 4:
              return n[t];
            case 3:
              return i[t];
          }
        else {
          if (_s(s, t)) return (o[t] = 1), s[t];
          if (r !== le && re(r, t)) return (o[t] = 2), r[t];
          if (re(i, t)) return (o[t] = 3), i[t];
          if (n !== le && re(n, t)) return (o[t] = 4), n[t];
          Bs && (o[t] = 0);
        }
      }
      const a = an[t];
      let f, u;
      if (a) return t === "$attrs" && Ae(e.attrs, "get", ""), a(e);
      if ((f = l.__cssModules) && (f = f[t])) return f;
      if (n !== le && re(n, t)) return (o[t] = 4), n[t];
      if (((u = c.config.globalProperties), re(u, t))) return u[t];
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: r, ctx: i } = e;
      return _s(r, t)
        ? ((r[t] = n), !0)
        : s !== le && re(s, t)
        ? ((s[t] = n), !0)
        : re(e.props, t) || (t[0] === "$" && t.slice(1) in e)
        ? !1
        : ((i[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: s,
          appContext: r,
          props: i,
          type: o,
        },
      },
      l
    ) {
      let c;
      return !!(
        n[l] ||
        (e !== le && l[0] !== "$" && re(e, l)) ||
        _s(t, l) ||
        re(i, l) ||
        re(s, l) ||
        re(an, l) ||
        re(r.config.globalProperties, l) ||
        ((c = o.__cssModules) && c[l])
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : re(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
function Vr(e) {
  return Q(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
function ca(e) {
  const t = fs();
  let n = e();
  return (
    Gs(),
    zs(n) &&
      (n = n.catch((s) => {
        throw (Mt(t), s);
      })),
    [n, () => Mt(t)]
  );
}
let Bs = !0;
function Oc(e) {
  const t = Ro(e),
    n = e.proxy,
    s = e.ctx;
  (Bs = !1), t.beforeCreate && kr(t.beforeCreate, e, "bc");
  const {
    data: r,
    computed: i,
    methods: o,
    watch: l,
    provide: c,
    inject: a,
    created: f,
    beforeMount: u,
    mounted: p,
    beforeUpdate: g,
    updated: A,
    activated: R,
    deactivated: V,
    beforeDestroy: D,
    beforeUnmount: I,
    destroyed: m,
    unmounted: _,
    render: v,
    renderTracked: O,
    renderTriggered: F,
    errorCaptured: G,
    serverPrefetch: S,
    expose: P,
    inheritAttrs: W,
    components: w,
    directives: K,
    filters: ee,
  } = t;
  if ((a && Pc(a, s, null), o))
    for (const Y in o) {
      const k = o[Y];
      X(k) && (s[Y] = k.bind(n));
    }
  if (r) {
    const Y = r.call(n, n);
    ue(Y) && (e.data = rs(Y));
  }
  if (((Bs = !0), i))
    for (const Y in i) {
      const k = i[Y],
        ae = X(k) ? k.bind(n, n) : X(k.get) ? k.get.bind(n, n) : ze,
        ht = !X(k) && X(k.set) ? k.set.bind(n) : ze,
        qe = Ue({ get: ae, set: ht });
      Object.defineProperty(s, Y, {
        enumerable: !0,
        configurable: !0,
        get: () => qe.value,
        set: (Oe) => (qe.value = Oe),
      });
    }
  if (l) for (const Y in l) To(l[Y], s, n, Y);
  if (c) {
    const Y = X(c) ? c.call(n) : c;
    Reflect.ownKeys(Y).forEach((k) => {
      Bn(k, Y[k]);
    });
  }
  f && kr(f, e, "c");
  function U(Y, k) {
    Q(k) ? k.forEach((ae) => Y(ae.bind(n))) : k && Y(k.bind(n));
  }
  if (
    (U(Ec, u),
    U(bo, p),
    U(Ac, g),
    U(vo, A),
    U(_c, R),
    U(bc, V),
    U(Rc, G),
    U(Tc, O),
    U(xc, F),
    U(Eo, I),
    U(Ao, _),
    U(Cc, S),
    Q(P))
  )
    if (P.length) {
      const Y = e.exposed || (e.exposed = {});
      P.forEach((k) => {
        Object.defineProperty(Y, k, {
          get: () => n[k],
          set: (ae) => (n[k] = ae),
          enumerable: !0,
        });
      });
    } else e.exposed || (e.exposed = {});
  v && e.render === ze && (e.render = v),
    W != null && (e.inheritAttrs = W),
    w && (e.components = w),
    K && (e.directives = K),
    S && yo(e);
}
function Pc(e, t, n = ze) {
  Q(e) && (e = Hs(e));
  for (const s in e) {
    const r = e[s];
    let i;
    ue(r)
      ? "default" in r
        ? (i = et(r.from || s, r.default, !0))
        : (i = et(r.from || s))
      : (i = et(r)),
      Te(i)
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: (o) => (i.value = o),
          })
        : (t[s] = i);
  }
}
function kr(e, t, n) {
  We(Q(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function To(e, t, n, s) {
  let r = s.includes(".") ? So(n, s) : () => n[s];
  if (de(e)) {
    const i = t[e];
    X(i) && Hn(r, i);
  } else if (X(e)) Hn(r, e.bind(n));
  else if (ue(e))
    if (Q(e)) e.forEach((i) => To(i, t, n, s));
    else {
      const i = X(e.handler) ? e.handler.bind(n) : t[e.handler];
      X(i) && Hn(r, i, e);
    }
}
function Ro(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: r,
      optionsCache: i,
      config: { optionMergeStrategies: o },
    } = e.appContext,
    l = i.get(t);
  let c;
  return (
    l
      ? (c = l)
      : !r.length && !n && !s
      ? (c = t)
      : ((c = {}), r.length && r.forEach((a) => $n(c, a, o, !0)), $n(c, t, o)),
    ue(t) && i.set(t, c),
    c
  );
}
function $n(e, t, n, s = !1) {
  const { mixins: r, extends: i } = t;
  i && $n(e, i, n, !0), r && r.forEach((o) => $n(e, o, n, !0));
  for (const o in t)
    if (!(s && o === "expose")) {
      const l = Nc[o] || (n && n[o]);
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const Nc = {
  data: jr,
  props: Ur,
  emits: Ur,
  methods: ln,
  computed: ln,
  beforeCreate: Re,
  created: Re,
  beforeMount: Re,
  mounted: Re,
  beforeUpdate: Re,
  updated: Re,
  beforeDestroy: Re,
  beforeUnmount: Re,
  destroyed: Re,
  unmounted: Re,
  activated: Re,
  deactivated: Re,
  errorCaptured: Re,
  serverPrefetch: Re,
  components: ln,
  directives: ln,
  watch: Mc,
  provide: jr,
  inject: Ic,
};
function jr(e, t) {
  return t
    ? e
      ? function () {
          return _e(
            X(e) ? e.call(this, this) : e,
            X(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function Ic(e, t) {
  return ln(Hs(e), Hs(t));
}
function Hs(e) {
  if (Q(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Re(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ln(e, t) {
  return e ? _e(Object.create(null), e, t) : t;
}
function Ur(e, t) {
  return e
    ? Q(e) && Q(t)
      ? [...new Set([...e, ...t])]
      : _e(Object.create(null), Vr(e), Vr(t != null ? t : {}))
    : t;
}
function Mc(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = _e(Object.create(null), e);
  for (const s in t) n[s] = Re(e[s], t[s]);
  return n;
}
function wo() {
  return {
    app: null,
    config: {
      isNativeTag: Oi,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let Dc = 0;
function Lc(e, t) {
  return function (s, r = null) {
    X(s) || (s = _e({}, s)), r != null && !ue(r) && (r = null);
    const i = wo(),
      o = new WeakSet(),
      l = [];
    let c = !1;
    const a = (i.app = {
      _uid: Dc++,
      _component: s,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: vf,
      get config() {
        return i.config;
      },
      set config(f) {},
      use(f, ...u) {
        return (
          o.has(f) ||
            (f && X(f.install)
              ? (o.add(f), f.install(a, ...u))
              : X(f) && (o.add(f), f(a, ...u))),
          a
        );
      },
      mixin(f) {
        return i.mixins.includes(f) || i.mixins.push(f), a;
      },
      component(f, u) {
        return u ? ((i.components[f] = u), a) : i.components[f];
      },
      directive(f, u) {
        return u ? ((i.directives[f] = u), a) : i.directives[f];
      },
      mount(f, u, p) {
        if (!c) {
          const g = a._ceVNode || ye(s, r);
          return (
            (g.appContext = i),
            p === !0 ? (p = "svg") : p === !1 && (p = void 0),
            u && t ? t(g, f) : e(g, f, p),
            (c = !0),
            (a._container = f),
            (f.__vue_app__ = a),
            us(g.component)
          );
        }
      },
      onUnmount(f) {
        l.push(f);
      },
      unmount() {
        c &&
          (We(l, a._instance, 16),
          e(null, a._container),
          delete a._container.__vue_app__);
      },
      provide(f, u) {
        return (i.provides[f] = u), a;
      },
      runWithContext(f) {
        const u = qt;
        qt = a;
        try {
          return f();
        } finally {
          qt = u;
        }
      },
    });
    return a;
  };
}
let qt = null;
function Bn(e, t) {
  if (xe) {
    let n = xe.provides;
    const s = xe.parent && xe.parent.provides;
    s === n && (n = xe.provides = Object.create(s)), (n[e] = t);
  }
}
function et(e, t, n = !1) {
  const s = fs();
  if (s || qt) {
    let r = qt
      ? qt._context.provides
      : s
      ? s.parent == null || s.ce
        ? s.vnode.appContext && s.vnode.appContext.provides
        : s.parent.provides
      : void 0;
    if (r && e in r) return r[e];
    if (arguments.length > 1) return n && X(t) ? t.call(s && s.proxy) : t;
  }
}
const Fc = Symbol.for("v-scx"),
  Bc = () => et(Fc);
function fa(e, t) {
  return gr(e, null, t);
}
function Hn(e, t, n) {
  return gr(e, t, n);
}
function gr(e, t, n = le) {
  const { immediate: s, deep: r, flush: i, once: o } = n,
    l = _e({}, n),
    c = (t && s) || (!t && i !== "post");
  let a;
  if (An) {
    if (i === "sync") {
      const g = Bc();
      a = g.__watcherHandles || (g.__watcherHandles = []);
    } else if (!c) {
      const g = () => {};
      return (g.stop = ze), (g.resume = ze), (g.pause = ze), g;
    }
  }
  const f = xe;
  l.call = (g, A, R) => We(g, f, A, R);
  let u = !1;
  i === "post"
    ? (l.scheduler = (g) => {
        Ee(g, f && f.suspense);
      })
    : i !== "sync" &&
      ((u = !0),
      (l.scheduler = (g, A) => {
        A ? g() : ar(g);
      })),
    (l.augmentJob = (g) => {
      t && (g.flags |= 4),
        u && ((g.flags |= 2), f && ((g.id = f.uid), (g.i = f)));
    });
  const p = lc(e, t, l);
  return An && (a ? a.push(p) : c && p()), p;
}
function Hc(e, t, n) {
  const s = this.proxy,
    r = de(e) ? (e.includes(".") ? So(s, e) : () => s[e]) : e.bind(s, s);
  let i;
  X(t) ? (i = t) : ((i = t.handler), (n = t));
  const o = Mt(this),
    l = gr(r, i.bind(s), n);
  return o(), l;
}
function So(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++) s = s[n[r]];
    return s;
  };
}
const Vc = (e, t) =>
  t === "modelValue" || t === "model-value"
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${ke(t)}Modifiers`] || e[`${Ct(t)}Modifiers`];
function kc(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || le;
  let r = n;
  const i = t.startsWith("update:"),
    o = i && Vc(s, t.slice(7));
  o &&
    (o.trim && (r = n.map((f) => (de(f) ? f.trim() : f))),
    o.number && (r = n.map(tr)));
  let l,
    c = s[(l = hs(t))] || s[(l = hs(ke(t)))];
  !c && i && (c = s[(l = hs(Ct(t)))]), c && We(c, e, 6, r);
  const a = s[l + "Once"];
  if (a) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[l]) return;
    (e.emitted[l] = !0), We(a, e, 6, r);
  }
}
const jc = new WeakMap();
function Oo(e, t, n = !1) {
  const s = n ? jc : t.emitsCache,
    r = s.get(e);
  if (r !== void 0) return r;
  const i = e.emits;
  let o = {},
    l = !1;
  if (!X(e)) {
    const c = (a) => {
      const f = Oo(a, t, !0);
      f && ((l = !0), _e(o, f));
    };
    !n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c);
  }
  return !i && !l
    ? (ue(e) && s.set(e, null), null)
    : (Q(i) ? i.forEach((c) => (o[c] = null)) : _e(o, i),
      ue(e) && s.set(e, o),
      o);
}
function ls(e, t) {
  return !e || !xn(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      re(e, t[0].toLowerCase() + t.slice(1)) || re(e, Ct(t)) || re(e, t));
}
function bs(e) {
  const {
      type: t,
      vnode: n,
      proxy: s,
      withProxy: r,
      propsOptions: [i],
      slots: o,
      attrs: l,
      emit: c,
      render: a,
      renderCache: f,
      props: u,
      data: p,
      setupState: g,
      ctx: A,
      inheritAttrs: R,
    } = e,
    V = Kn(e);
  let D, I;
  try {
    if (n.shapeFlag & 4) {
      const _ = r || s,
        v = _;
      (D = Le(a.call(v, _, f, u, g, p, A))), (I = l);
    } else {
      const _ = t;
      (D = Le(
        _.length > 1 ? _(u, { attrs: l, slots: o, emit: c }) : _(u, null)
      )),
        (I = t.props ? l : Gc(l));
    }
  } catch (_) {
    (dn.length = 0), Rn(_, e, 1), (D = ye(me));
  }
  let m = D;
  if (I && R !== !1) {
    const _ = Object.keys(I),
      { shapeFlag: v } = m;
    _.length &&
      v & 7 &&
      (i && _.some(Xs) && (I = Kc(I, i)), (m = At(m, I, !1, !0)));
  }
  return (
    n.dirs &&
      ((m = At(m, null, !1, !0)),
      (m.dirs = m.dirs ? m.dirs.concat(n.dirs) : n.dirs)),
    n.transition && It(m, n.transition),
    (D = m),
    Kn(V),
    D
  );
}
function Uc(e, t = !0) {
  let n;
  for (let s = 0; s < e.length; s++) {
    const r = e[s];
    if (Xt(r)) {
      if (r.type !== me || r.children === "v-if") {
        if (n) return;
        n = r;
      }
    } else return;
  }
  return n;
}
const Gc = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || xn(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  Kc = (e, t) => {
    const n = {};
    for (const s in e) (!Xs(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
    return n;
  };
function Wc(e, t, n) {
  const { props: s, children: r, component: i } = e,
    { props: o, children: l, patchFlag: c } = t,
    a = i.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && c >= 0) {
    if (c & 1024) return !0;
    if (c & 16) return s ? Gr(s, o, a) : !!o;
    if (c & 8) {
      const f = t.dynamicProps;
      for (let u = 0; u < f.length; u++) {
        const p = f[u];
        if (o[p] !== s[p] && !ls(a, p)) return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable)
      ? !0
      : s === o
      ? !1
      : s
      ? o
        ? Gr(s, o, a)
        : !0
      : !!o;
  return !1;
}
function Gr(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length) return !0;
  for (let r = 0; r < s.length; r++) {
    const i = s[r];
    if (t[i] !== e[i] && !ls(n, i)) return !0;
  }
  return !1;
}
function cs({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if ((s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e))
      ((e = t.vnode).el = n), (t = t.parent);
    else break;
  }
}
const Po = {},
  No = () => Object.create(Po),
  Io = (e) => Object.getPrototypeOf(e) === Po;
function $c(e, t, n, s = !1) {
  const r = {},
    i = No();
  (e.propsDefaults = Object.create(null)), Mo(e, t, r, i);
  for (const o in e.propsOptions[0]) o in r || (r[o] = void 0);
  n ? (e.props = s ? r : Zi(r)) : e.type.props ? (e.props = r) : (e.props = i),
    (e.attrs = i);
}
function qc(e, t, n, s) {
  const {
      props: r,
      attrs: i,
      vnode: { patchFlag: o },
    } = e,
    l = ne(r),
    [c] = e.propsOptions;
  let a = !1;
  if ((s || o > 0) && !(o & 16)) {
    if (o & 8) {
      const f = e.vnode.dynamicProps;
      for (let u = 0; u < f.length; u++) {
        let p = f[u];
        if (ls(e.emitsOptions, p)) continue;
        const g = t[p];
        if (c)
          if (re(i, p)) g !== i[p] && ((i[p] = g), (a = !0));
          else {
            const A = ke(p);
            r[A] = Vs(c, l, A, g, e, !1);
          }
        else g !== i[p] && ((i[p] = g), (a = !0));
      }
    }
  } else {
    Mo(e, t, r, i) && (a = !0);
    let f;
    for (const u in l)
      (!t || (!re(t, u) && ((f = Ct(u)) === u || !re(t, f)))) &&
        (c
          ? n &&
            (n[u] !== void 0 || n[f] !== void 0) &&
            (r[u] = Vs(c, l, u, void 0, e, !0))
          : delete r[u]);
    if (i !== l)
      for (const u in i) (!t || !re(t, u)) && (delete i[u], (a = !0));
  }
  a && it(e.attrs, "set", "");
}
function Mo(e, t, n, s) {
  const [r, i] = e.propsOptions;
  let o = !1,
    l;
  if (t)
    for (let c in t) {
      if (Gt(c)) continue;
      const a = t[c];
      let f;
      r && re(r, (f = ke(c)))
        ? !i || !i.includes(f)
          ? (n[f] = a)
          : ((l || (l = {}))[f] = a)
        : ls(e.emitsOptions, c) ||
          ((!(c in s) || a !== s[c]) && ((s[c] = a), (o = !0)));
    }
  if (i) {
    const c = ne(n),
      a = l || le;
    for (let f = 0; f < i.length; f++) {
      const u = i[f];
      n[u] = Vs(r, c, u, a[u], e, !re(a, u));
    }
  }
  return o;
}
function Vs(e, t, n, s, r, i) {
  const o = e[n];
  if (o != null) {
    const l = re(o, "default");
    if (l && s === void 0) {
      const c = o.default;
      if (o.type !== Function && !o.skipFactory && X(c)) {
        const { propsDefaults: a } = r;
        if (n in a) s = a[n];
        else {
          const f = Mt(r);
          (s = a[n] = c.call(null, t)), f();
        }
      } else s = c;
      r.ce && r.ce._setProp(n, s);
    }
    o[0] &&
      (i && !l ? (s = !1) : o[1] && (s === "" || s === Ct(n)) && (s = !0));
  }
  return s;
}
const Jc = new WeakMap();
function Do(e, t, n = !1) {
  const s = n ? Jc : t.propsCache,
    r = s.get(e);
  if (r) return r;
  const i = e.props,
    o = {},
    l = [];
  let c = !1;
  if (!X(e)) {
    const f = (u) => {
      c = !0;
      const [p, g] = Do(u, t, !0);
      _e(o, p), g && l.push(...g);
    };
    !n && t.mixins.length && t.mixins.forEach(f),
      e.extends && f(e.extends),
      e.mixins && e.mixins.forEach(f);
  }
  if (!i && !c) return ue(e) && s.set(e, jt), jt;
  if (Q(i))
    for (let f = 0; f < i.length; f++) {
      const u = ke(i[f]);
      Kr(u) && (o[u] = le);
    }
  else if (i)
    for (const f in i) {
      const u = ke(f);
      if (Kr(u)) {
        const p = i[f],
          g = (o[u] = Q(p) || X(p) ? { type: p } : _e({}, p)),
          A = g.type;
        let R = !1,
          V = !0;
        if (Q(A))
          for (let D = 0; D < A.length; ++D) {
            const I = A[D],
              m = X(I) && I.name;
            if (m === "Boolean") {
              R = !0;
              break;
            } else m === "String" && (V = !1);
          }
        else R = X(A) && A.name === "Boolean";
        (g[0] = R), (g[1] = V), (R || re(g, "default")) && l.push(u);
      }
    }
  const a = [o, l];
  return ue(e) && s.set(e, a), a;
}
function Kr(e) {
  return e[0] !== "$" && !Gt(e);
}
const mr = (e) => e === "_" || e === "_ctx" || e === "$stable",
  yr = (e) => (Q(e) ? e.map(Le) : [Le(e)]),
  Qc = (e, t, n) => {
    if (t._n) return t;
    const s = uc((...r) => yr(t(...r)), n);
    return (s._c = !1), s;
  },
  Lo = (e, t, n) => {
    const s = e._ctx;
    for (const r in e) {
      if (mr(r)) continue;
      const i = e[r];
      if (X(i)) t[r] = Qc(r, i, s);
      else if (i != null) {
        const o = yr(i);
        t[r] = () => o;
      }
    }
  },
  Fo = (e, t) => {
    const n = yr(t);
    e.slots.default = () => n;
  },
  Bo = (e, t, n) => {
    for (const s in t) (n || !mr(s)) && (e[s] = t[s]);
  },
  Yc = (e, t, n) => {
    const s = (e.slots = No());
    if (e.vnode.shapeFlag & 32) {
      const r = t._;
      r ? (Bo(s, t, n), n && Mi(s, "_", r, !0)) : Lo(t, s);
    } else t && Fo(e, t);
  },
  Xc = (e, t, n) => {
    const { vnode: s, slots: r } = e;
    let i = !0,
      o = le;
    if (s.shapeFlag & 32) {
      const l = t._;
      l
        ? n && l === 1
          ? (i = !1)
          : Bo(r, t, n)
        : ((i = !t.$stable), Lo(t, r)),
        (o = t);
    } else t && (Fo(e, t), (o = { default: 1 }));
    if (i) for (const l in r) !mr(l) && o[l] == null && delete r[l];
  },
  Ee = Go;
function Zc(e) {
  return Ho(e);
}
function zc(e) {
  return Ho(e, mc);
}
function Ho(e, t) {
  const n = ns();
  n.__VUE__ = !0;
  const {
      insert: s,
      remove: r,
      patchProp: i,
      createElement: o,
      createText: l,
      createComment: c,
      setText: a,
      setElementText: f,
      parentNode: u,
      nextSibling: p,
      setScopeId: g = ze,
      insertStaticContent: A,
    } = e,
    R = (
      h,
      d,
      y,
      C = null,
      b = null,
      x = null,
      L = void 0,
      M = null,
      N = !!d.dynamicChildren
    ) => {
      if (h === d) return;
      h && !Ze(h, d) && ((C = E(h)), Oe(h, b, x, !0), (h = null)),
        d.patchFlag === -2 && ((N = !1), (d.dynamicChildren = null));
      const { type: T, ref: J, shapeFlag: H } = d;
      switch (T) {
        case Nt:
          V(h, d, y, C);
          break;
        case me:
          D(h, d, y, C);
          break;
        case hn:
          h == null && I(d, y, C, L);
          break;
        case Ce:
          w(h, d, y, C, b, x, L, M, N);
          break;
        default:
          H & 1
            ? v(h, d, y, C, b, x, L, M, N)
            : H & 6
            ? K(h, d, y, C, b, x, L, M, N)
            : (H & 64 || H & 128) && T.process(h, d, y, C, b, x, L, M, N, q);
      }
      J != null && b
        ? $t(J, h && h.ref, x, d || h, !d)
        : J == null && h && h.ref != null && $t(h.ref, null, x, h, !0);
    },
    V = (h, d, y, C) => {
      if (h == null) s((d.el = l(d.children)), y, C);
      else {
        const b = (d.el = h.el);
        d.children !== h.children && a(b, d.children);
      }
    },
    D = (h, d, y, C) => {
      h == null ? s((d.el = c(d.children || "")), y, C) : (d.el = h.el);
    },
    I = (h, d, y, C) => {
      [h.el, h.anchor] = A(h.children, d, y, C, h.el, h.anchor);
    },
    m = ({ el: h, anchor: d }, y, C) => {
      let b;
      for (; h && h !== d; ) (b = p(h)), s(h, y, C), (h = b);
      s(d, y, C);
    },
    _ = ({ el: h, anchor: d }) => {
      let y;
      for (; h && h !== d; ) (y = p(h)), r(h), (h = y);
      r(d);
    },
    v = (h, d, y, C, b, x, L, M, N) => {
      if (
        (d.type === "svg" ? (L = "svg") : d.type === "math" && (L = "mathml"),
        h == null)
      )
        O(d, y, C, b, x, L, M, N);
      else {
        const T = h.el && h.el._isVueCE ? h.el : null;
        try {
          T && T._beginPatch(), S(h, d, b, x, L, M, N);
        } finally {
          T && T._endPatch();
        }
      }
    },
    O = (h, d, y, C, b, x, L, M) => {
      let N, T;
      const { props: J, shapeFlag: H, transition: $, dirs: Z } = h;
      if (
        ((N = h.el = o(h.type, x, J && J.is, J)),
        H & 8
          ? f(N, h.children)
          : H & 16 && G(h.children, N, null, C, b, vs(h, x), L, M),
        Z && Xe(h, null, C, "created"),
        F(N, h, h.scopeId, L, C),
        J)
      ) {
        for (const ce in J)
          ce !== "value" && !Gt(ce) && i(N, ce, null, J[ce], x, C);
        "value" in J && i(N, "value", null, J.value, x),
          (T = J.onVnodeBeforeMount) && He(T, C, h);
      }
      Z && Xe(h, null, C, "beforeMount");
      const te = Vo(b, $);
      te && $.beforeEnter(N),
        s(N, d, y),
        ((T = J && J.onVnodeMounted) || te || Z) &&
          Ee(() => {
            T && He(T, C, h), te && $.enter(N), Z && Xe(h, null, C, "mounted");
          }, b);
    },
    F = (h, d, y, C, b) => {
      if ((y && g(h, y), C)) for (let x = 0; x < C.length; x++) g(h, C[x]);
      if (b) {
        let x = b.subTree;
        if (
          d === x ||
          (jo(x.type) && (x.ssContent === d || x.ssFallback === d))
        ) {
          const L = b.vnode;
          F(h, L, L.scopeId, L.slotScopeIds, b.parent);
        }
      }
    },
    G = (h, d, y, C, b, x, L, M, N = 0) => {
      for (let T = N; T < h.length; T++) {
        const J = (h[T] = M ? _t(h[T]) : Le(h[T]));
        R(null, J, d, y, C, b, x, L, M);
      }
    },
    S = (h, d, y, C, b, x, L) => {
      const M = (d.el = h.el);
      let { patchFlag: N, dynamicChildren: T, dirs: J } = d;
      N |= h.patchFlag & 16;
      const H = h.props || le,
        $ = d.props || le;
      let Z;
      if (
        (y && Tt(y, !1),
        (Z = $.onVnodeBeforeUpdate) && He(Z, y, d, h),
        J && Xe(d, h, y, "beforeUpdate"),
        y && Tt(y, !0),
        ((H.innerHTML && $.innerHTML == null) ||
          (H.textContent && $.textContent == null)) &&
          f(M, ""),
        T
          ? P(h.dynamicChildren, T, M, y, C, vs(d, b), x)
          : L || k(h, d, M, null, y, C, vs(d, b), x, !1),
        N > 0)
      ) {
        if (N & 16) W(M, H, $, y, b);
        else if (
          (N & 2 && H.class !== $.class && i(M, "class", null, $.class, b),
          N & 4 && i(M, "style", H.style, $.style, b),
          N & 8)
        ) {
          const te = d.dynamicProps;
          for (let ce = 0; ce < te.length; ce++) {
            const ie = te[ce],
              Pe = H[ie],
              ve = $[ie];
            (ve !== Pe || ie === "value") && i(M, ie, Pe, ve, b, y);
          }
        }
        N & 1 && h.children !== d.children && f(M, d.children);
      } else !L && T == null && W(M, H, $, y, b);
      ((Z = $.onVnodeUpdated) || J) &&
        Ee(() => {
          Z && He(Z, y, d, h), J && Xe(d, h, y, "updated");
        }, C);
    },
    P = (h, d, y, C, b, x, L) => {
      for (let M = 0; M < d.length; M++) {
        const N = h[M],
          T = d[M],
          J =
            N.el && (N.type === Ce || !Ze(N, T) || N.shapeFlag & 198)
              ? u(N.el)
              : y;
        R(N, T, J, null, C, b, x, L, !0);
      }
    },
    W = (h, d, y, C, b) => {
      if (d !== y) {
        if (d !== le)
          for (const x in d) !Gt(x) && !(x in y) && i(h, x, d[x], null, b, C);
        for (const x in y) {
          if (Gt(x)) continue;
          const L = y[x],
            M = d[x];
          L !== M && x !== "value" && i(h, x, M, L, b, C);
        }
        "value" in y && i(h, "value", d.value, y.value, b);
      }
    },
    w = (h, d, y, C, b, x, L, M, N) => {
      const T = (d.el = h ? h.el : l("")),
        J = (d.anchor = h ? h.anchor : l(""));
      let { patchFlag: H, dynamicChildren: $, slotScopeIds: Z } = d;
      Z && (M = M ? M.concat(Z) : Z),
        h == null
          ? (s(T, y, C), s(J, y, C), G(d.children || [], y, J, b, x, L, M, N))
          : H > 0 && H & 64 && $ && h.dynamicChildren
          ? (P(h.dynamicChildren, $, y, b, x, L, M),
            (d.key != null || (b && d === b.subTree)) && _r(h, d, !0))
          : k(h, d, y, J, b, x, L, M, N);
    },
    K = (h, d, y, C, b, x, L, M, N) => {
      (d.slotScopeIds = M),
        h == null
          ? d.shapeFlag & 512
            ? b.ctx.activate(d, y, C, L, N)
            : ee(d, y, C, b, x, L, N)
          : oe(h, d, N);
    },
    ee = (h, d, y, C, b, x, L) => {
      const M = (h.component = df(h, C, b));
      if ((is(h) && (M.ctx.renderer = q), pf(M, !1, L), M.asyncDep)) {
        if ((b && b.registerDep(M, U, L), !h.el)) {
          const N = (M.subTree = ye(me));
          D(null, N, d, y), (h.placeholder = N.el);
        }
      } else U(M, h, d, y, b, x, L);
    },
    oe = (h, d, y) => {
      const C = (d.component = h.component);
      if (Wc(h, d, y))
        if (C.asyncDep && !C.asyncResolved) {
          Y(C, d, y);
          return;
        } else (C.next = d), C.update();
      else (d.el = h.el), (C.vnode = d);
    },
    U = (h, d, y, C, b, x, L) => {
      const M = () => {
        if (h.isMounted) {
          let { next: H, bu: $, u: Z, parent: te, vnode: ce } = h;
          {
            const Me = ko(h);
            if (Me) {
              H && ((H.el = ce.el), Y(h, H, L)),
                Me.asyncDep.then(() => {
                  h.isUnmounted || M();
                });
              return;
            }
          }
          let ie = H,
            Pe;
          Tt(h, !1),
            H ? ((H.el = ce.el), Y(h, H, L)) : (H = ce),
            $ && Ln($),
            (Pe = H.props && H.props.onVnodeBeforeUpdate) && He(Pe, te, H, ce),
            Tt(h, !0);
          const ve = bs(h),
            je = h.subTree;
          (h.subTree = ve),
            R(je, ve, u(je.el), E(je), h, b, x),
            (H.el = ve.el),
            ie === null && cs(h, ve.el),
            Z && Ee(Z, b),
            (Pe = H.props && H.props.onVnodeUpdated) &&
              Ee(() => He(Pe, te, H, ce), b);
        } else {
          let H;
          const { el: $, props: Z } = d,
            { bm: te, m: ce, parent: ie, root: Pe, type: ve } = h,
            je = Pt(d);
          if (
            (Tt(h, !1),
            te && Ln(te),
            !je && (H = Z && Z.onVnodeBeforeMount) && He(H, ie, d),
            Tt(h, !0),
            $ && he)
          ) {
            const Me = () => {
              (h.subTree = bs(h)), he($, h.subTree, h, b, null);
            };
            je && ve.__asyncHydrate ? ve.__asyncHydrate($, h, Me) : Me();
          } else {
            Pe.ce &&
              Pe.ce._def.shadowRoot !== !1 &&
              Pe.ce._injectChildStyle(ve);
            const Me = (h.subTree = bs(h));
            R(null, Me, y, C, h, b, x), (d.el = Me.el);
          }
          if ((ce && Ee(ce, b), !je && (H = Z && Z.onVnodeMounted))) {
            const Me = d;
            Ee(() => He(H, ie, Me), b);
          }
          (d.shapeFlag & 256 ||
            (ie && Pt(ie.vnode) && ie.vnode.shapeFlag & 256)) &&
            h.a &&
            Ee(h.a, b),
            (h.isMounted = !0),
            (d = y = C = null);
        }
      };
      h.scope.on();
      const N = (h.effect = new Hi(M));
      h.scope.off();
      const T = (h.update = N.run.bind(N)),
        J = (h.job = N.runIfDirty.bind(N));
      (J.i = h), (J.id = h.uid), (N.scheduler = () => ar(J)), Tt(h, !0), T();
    },
    Y = (h, d, y) => {
      d.component = h;
      const C = h.vnode.props;
      (h.vnode = d),
        (h.next = null),
        qc(h, d.props, C, y),
        Xc(h, d.children, y),
        lt(),
        Pr(h),
        ct();
    },
    k = (h, d, y, C, b, x, L, M, N = !1) => {
      const T = h && h.children,
        J = h ? h.shapeFlag : 0,
        H = d.children,
        { patchFlag: $, shapeFlag: Z } = d;
      if ($ > 0) {
        if ($ & 128) {
          ht(T, H, y, C, b, x, L, M, N);
          return;
        } else if ($ & 256) {
          ae(T, H, y, C, b, x, L, M, N);
          return;
        }
      }
      Z & 8
        ? (J & 16 && Fe(T, b, x), H !== T && f(y, H))
        : J & 16
        ? Z & 16
          ? ht(T, H, y, C, b, x, L, M, N)
          : Fe(T, b, x, !0)
        : (J & 8 && f(y, ""), Z & 16 && G(H, y, C, b, x, L, M, N));
    },
    ae = (h, d, y, C, b, x, L, M, N) => {
      (h = h || jt), (d = d || jt);
      const T = h.length,
        J = d.length,
        H = Math.min(T, J);
      let $;
      for ($ = 0; $ < H; $++) {
        const Z = (d[$] = N ? _t(d[$]) : Le(d[$]));
        R(h[$], Z, y, null, b, x, L, M, N);
      }
      T > J ? Fe(h, b, x, !0, !1, H) : G(d, y, C, b, x, L, M, N, H);
    },
    ht = (h, d, y, C, b, x, L, M, N) => {
      let T = 0;
      const J = d.length;
      let H = h.length - 1,
        $ = J - 1;
      for (; T <= H && T <= $; ) {
        const Z = h[T],
          te = (d[T] = N ? _t(d[T]) : Le(d[T]));
        if (Ze(Z, te)) R(Z, te, y, null, b, x, L, M, N);
        else break;
        T++;
      }
      for (; T <= H && T <= $; ) {
        const Z = h[H],
          te = (d[$] = N ? _t(d[$]) : Le(d[$]));
        if (Ze(Z, te)) R(Z, te, y, null, b, x, L, M, N);
        else break;
        H--, $--;
      }
      if (T > H) {
        if (T <= $) {
          const Z = $ + 1,
            te = Z < J ? d[Z].el : C;
          for (; T <= $; )
            R(null, (d[T] = N ? _t(d[T]) : Le(d[T])), y, te, b, x, L, M, N),
              T++;
        }
      } else if (T > $) for (; T <= H; ) Oe(h[T], b, x, !0), T++;
      else {
        const Z = T,
          te = T,
          ce = new Map();
        for (T = te; T <= $; T++) {
          const De = (d[T] = N ? _t(d[T]) : Le(d[T]));
          De.key != null && ce.set(De.key, T);
        }
        let ie,
          Pe = 0;
        const ve = $ - te + 1;
        let je = !1,
          Me = 0;
        const tn = new Array(ve);
        for (T = 0; T < ve; T++) tn[T] = 0;
        for (T = Z; T <= H; T++) {
          const De = h[T];
          if (Pe >= ve) {
            Oe(De, b, x, !0);
            continue;
          }
          let Je;
          if (De.key != null) Je = ce.get(De.key);
          else
            for (ie = te; ie <= $; ie++)
              if (tn[ie - te] === 0 && Ze(De, d[ie])) {
                Je = ie;
                break;
              }
          Je === void 0
            ? Oe(De, b, x, !0)
            : ((tn[Je - te] = T + 1),
              Je >= Me ? (Me = Je) : (je = !0),
              R(De, d[Je], y, null, b, x, L, M, N),
              Pe++);
        }
        const xr = je ? ef(tn) : jt;
        for (ie = xr.length - 1, T = ve - 1; T >= 0; T--) {
          const De = te + T,
            Je = d[De],
            Tr = d[De + 1],
            Rr = De + 1 < J ? Tr.el || Tr.placeholder : C;
          tn[T] === 0
            ? R(null, Je, y, Rr, b, x, L, M, N)
            : je && (ie < 0 || T !== xr[ie] ? qe(Je, y, Rr, 2) : ie--);
        }
      }
    },
    qe = (h, d, y, C, b = null) => {
      const { el: x, type: L, transition: M, children: N, shapeFlag: T } = h;
      if (T & 6) {
        qe(h.component.subTree, d, y, C);
        return;
      }
      if (T & 128) {
        h.suspense.move(d, y, C);
        return;
      }
      if (T & 64) {
        L.move(h, d, y, q);
        return;
      }
      if (L === Ce) {
        s(x, d, y);
        for (let H = 0; H < N.length; H++) qe(N[H], d, y, C);
        s(h.anchor, d, y);
        return;
      }
      if (L === hn) {
        m(h, d, y);
        return;
      }
      if (C !== 2 && T & 1 && M)
        if (C === 0) M.beforeEnter(x), s(x, d, y), Ee(() => M.enter(x), b);
        else {
          const { leave: H, delayLeave: $, afterLeave: Z } = M,
            te = () => {
              h.ctx.isUnmounted ? r(x) : s(x, d, y);
            },
            ce = () => {
              x._isLeaving && x[rt](!0),
                H(x, () => {
                  te(), Z && Z();
                });
            };
          $ ? $(x, te, ce) : ce();
        }
      else s(x, d, y);
    },
    Oe = (h, d, y, C = !1, b = !1) => {
      const {
        type: x,
        props: L,
        ref: M,
        children: N,
        dynamicChildren: T,
        shapeFlag: J,
        patchFlag: H,
        dirs: $,
        cacheIndex: Z,
      } = h;
      if (
        (H === -2 && (b = !1),
        M != null && (lt(), $t(M, null, y, h, !0), ct()),
        Z != null && (d.renderCache[Z] = void 0),
        J & 256)
      ) {
        d.ctx.deactivate(h);
        return;
      }
      const te = J & 1 && $,
        ce = !Pt(h);
      let ie;
      if ((ce && (ie = L && L.onVnodeBeforeUnmount) && He(ie, d, h), J & 6))
        xt(h.component, y, C);
      else {
        if (J & 128) {
          h.suspense.unmount(y, C);
          return;
        }
        te && Xe(h, null, d, "beforeUnmount"),
          J & 64
            ? h.type.remove(h, d, y, q, C)
            : T && !T.hasOnce && (x !== Ce || (H > 0 && H & 64))
            ? Fe(T, d, y, !1, !0)
            : ((x === Ce && H & 384) || (!b && J & 16)) && Fe(N, d, y),
          C && Dt(h);
      }
      ((ce && (ie = L && L.onVnodeUnmounted)) || te) &&
        Ee(() => {
          ie && He(ie, d, h), te && Xe(h, null, d, "unmounted");
        }, y);
    },
    Dt = (h) => {
      const { type: d, el: y, anchor: C, transition: b } = h;
      if (d === Ce) {
        Lt(y, C);
        return;
      }
      if (d === hn) {
        _(h);
        return;
      }
      const x = () => {
        r(y), b && !b.persisted && b.afterLeave && b.afterLeave();
      };
      if (h.shapeFlag & 1 && b && !b.persisted) {
        const { leave: L, delayLeave: M } = b,
          N = () => L(y, x);
        M ? M(h.el, x, N) : N();
      } else x();
    },
    Lt = (h, d) => {
      let y;
      for (; h !== d; ) (y = p(h)), r(h), (h = y);
      r(d);
    },
    xt = (h, d, y) => {
      const { bum: C, scope: b, job: x, subTree: L, um: M, m: N, a: T } = h;
      Wr(N),
        Wr(T),
        C && Ln(C),
        b.stop(),
        x && ((x.flags |= 8), Oe(L, h, d, y)),
        M && Ee(M, d),
        Ee(() => {
          h.isUnmounted = !0;
        }, d);
    },
    Fe = (h, d, y, C = !1, b = !1, x = 0) => {
      for (let L = x; L < h.length; L++) Oe(h[L], d, y, C, b);
    },
    E = (h) => {
      if (h.shapeFlag & 6) return E(h.component.subTree);
      if (h.shapeFlag & 128) return h.suspense.next();
      const d = p(h.anchor || h.el),
        y = d && d[oo];
      return y ? p(y) : d;
    };
  let j = !1;
  const B = (h, d, y) => {
      h == null
        ? d._vnode && Oe(d._vnode, null, null, !0)
        : R(d._vnode || null, h, d, null, null, null, y),
        (d._vnode = h),
        j || ((j = !0), Pr(), Gn(), (j = !1));
    },
    q = {
      p: R,
      um: Oe,
      m: qe,
      r: Dt,
      mt: ee,
      mc: G,
      pc: k,
      pbc: P,
      n: E,
      o: e,
    };
  let z, he;
  return t && ([z, he] = t(q)), { render: B, hydrate: z, createApp: Lc(B, z) };
}
function vs({ type: e, props: t }, n) {
  return (n === "svg" && e === "foreignObject") ||
    (n === "mathml" &&
      e === "annotation-xml" &&
      t &&
      t.encoding &&
      t.encoding.includes("html"))
    ? void 0
    : n;
}
function Tt({ effect: e, job: t }, n) {
  n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5));
}
function Vo(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function _r(e, t, n = !1) {
  const s = e.children,
    r = t.children;
  if (Q(s) && Q(r))
    for (let i = 0; i < s.length; i++) {
      const o = s[i];
      let l = r[i];
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = r[i] = _t(r[i])), (l.el = o.el)),
        !n && l.patchFlag !== -2 && _r(o, l)),
        l.type === Nt && l.patchFlag !== -1 && (l.el = o.el),
        l.type === me && !l.el && (l.el = o.el);
    }
}
function ef(e) {
  const t = e.slice(),
    n = [0];
  let s, r, i, o, l;
  const c = e.length;
  for (s = 0; s < c; s++) {
    const a = e[s];
    if (a !== 0) {
      if (((r = n[n.length - 1]), e[r] < a)) {
        (t[s] = r), n.push(s);
        continue;
      }
      for (i = 0, o = n.length - 1; i < o; )
        (l = (i + o) >> 1), e[n[l]] < a ? (i = l + 1) : (o = l);
      a < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), (n[i] = s));
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; ) (n[i] = o), (o = t[o]);
  return n;
}
function ko(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : ko(t);
}
function Wr(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
const jo = (e) => e.__isSuspense;
let ks = 0;
const tf = {
    name: "Suspense",
    __isSuspense: !0,
    process(e, t, n, s, r, i, o, l, c, a) {
      if (e == null) nf(t, n, s, r, i, o, l, c, a);
      else {
        if (i && i.deps > 0 && !e.suspense.isInFallback) {
          (t.suspense = e.suspense), (t.suspense.vnode = t), (t.el = e.el);
          return;
        }
        sf(e, t, n, s, r, o, l, c, a);
      }
    },
    hydrate: rf,
    normalize: of,
  },
  ua = tf;
function En(e, t) {
  const n = e.props && e.props[t];
  X(n) && n();
}
function nf(e, t, n, s, r, i, o, l, c) {
  const {
      p: a,
      o: { createElement: f },
    } = c,
    u = f("div"),
    p = (e.suspense = Uo(e, r, s, t, u, n, i, o, l, c));
  a(null, (p.pendingBranch = e.ssContent), u, null, s, p, i, o),
    p.deps > 0
      ? (En(e, "onPending"),
        En(e, "onFallback"),
        a(null, e.ssFallback, t, n, s, null, i, o),
        Jt(p, e.ssFallback))
      : p.resolve(!1, !0);
}
function sf(e, t, n, s, r, i, o, l, { p: c, um: a, o: { createElement: f } }) {
  const u = (t.suspense = e.suspense);
  (u.vnode = t), (t.el = e.el);
  const p = t.ssContent,
    g = t.ssFallback,
    { activeBranch: A, pendingBranch: R, isInFallback: V, isHydrating: D } = u;
  if (R)
    (u.pendingBranch = p),
      Ze(R, p)
        ? (c(R, p, u.hiddenContainer, null, r, u, i, o, l),
          u.deps <= 0
            ? u.resolve()
            : V && (D || (c(A, g, n, s, r, null, i, o, l), Jt(u, g))))
        : ((u.pendingId = ks++),
          D ? ((u.isHydrating = !1), (u.activeBranch = R)) : a(R, r, u),
          (u.deps = 0),
          (u.effects.length = 0),
          (u.hiddenContainer = f("div")),
          V
            ? (c(null, p, u.hiddenContainer, null, r, u, i, o, l),
              u.deps <= 0
                ? u.resolve()
                : (c(A, g, n, s, r, null, i, o, l), Jt(u, g)))
            : A && Ze(A, p)
            ? (c(A, p, n, s, r, u, i, o, l), u.resolve(!0))
            : (c(null, p, u.hiddenContainer, null, r, u, i, o, l),
              u.deps <= 0 && u.resolve()));
  else if (A && Ze(A, p)) c(A, p, n, s, r, u, i, o, l), Jt(u, p);
  else if (
    (En(t, "onPending"),
    (u.pendingBranch = p),
    p.shapeFlag & 512
      ? (u.pendingId = p.component.suspenseId)
      : (u.pendingId = ks++),
    c(null, p, u.hiddenContainer, null, r, u, i, o, l),
    u.deps <= 0)
  )
    u.resolve();
  else {
    const { timeout: I, pendingId: m } = u;
    I > 0
      ? setTimeout(() => {
          u.pendingId === m && u.fallback(g);
        }, I)
      : I === 0 && u.fallback(g);
  }
}
function Uo(e, t, n, s, r, i, o, l, c, a, f = !1) {
  const {
    p: u,
    m: p,
    um: g,
    n: A,
    o: { parentNode: R, remove: V },
  } = a;
  let D;
  const I = lf(e);
  I && t && t.pendingBranch && ((D = t.pendingId), t.deps++);
  const m = e.props ? Di(e.props.timeout) : void 0,
    _ = i,
    v = {
      vnode: e,
      parent: t,
      parentComponent: n,
      namespace: o,
      container: s,
      hiddenContainer: r,
      deps: 0,
      pendingId: ks++,
      timeout: typeof m == "number" ? m : -1,
      activeBranch: null,
      pendingBranch: null,
      isInFallback: !f,
      isHydrating: f,
      isUnmounted: !1,
      effects: [],
      resolve(O = !1, F = !1) {
        const {
          vnode: G,
          activeBranch: S,
          pendingBranch: P,
          pendingId: W,
          effects: w,
          parentComponent: K,
          container: ee,
          isInFallback: oe,
        } = v;
        let U = !1;
        v.isHydrating
          ? (v.isHydrating = !1)
          : O ||
            ((U = S && P.transition && P.transition.mode === "out-in"),
            U &&
              (S.transition.afterLeave = () => {
                W === v.pendingId &&
                  (p(P, ee, i === _ ? A(S) : i, 0),
                  Ds(w),
                  oe && G.ssFallback && (G.ssFallback.el = null));
              }),
            S &&
              (R(S.el) === ee && (i = A(S)),
              g(S, K, v, !0),
              !U &&
                oe &&
                G.ssFallback &&
                Ee(() => (G.ssFallback.el = null), v)),
            U || p(P, ee, i, 0)),
          Jt(v, P),
          (v.pendingBranch = null),
          (v.isInFallback = !1);
        let Y = v.parent,
          k = !1;
        for (; Y; ) {
          if (Y.pendingBranch) {
            Y.effects.push(...w), (k = !0);
            break;
          }
          Y = Y.parent;
        }
        !k && !U && Ds(w),
          (v.effects = []),
          I &&
            t &&
            t.pendingBranch &&
            D === t.pendingId &&
            (t.deps--, t.deps === 0 && !F && t.resolve()),
          En(G, "onResolve");
      },
      fallback(O) {
        if (!v.pendingBranch) return;
        const {
          vnode: F,
          activeBranch: G,
          parentComponent: S,
          container: P,
          namespace: W,
        } = v;
        En(F, "onFallback");
        const w = A(G),
          K = () => {
            v.isInFallback && (u(null, O, P, w, S, null, W, l, c), Jt(v, O));
          },
          ee = O.transition && O.transition.mode === "out-in";
        ee && (G.transition.afterLeave = K),
          (v.isInFallback = !0),
          g(G, S, null, !0),
          ee || K();
      },
      move(O, F, G) {
        v.activeBranch && p(v.activeBranch, O, F, G), (v.container = O);
      },
      next() {
        return v.activeBranch && A(v.activeBranch);
      },
      registerDep(O, F, G) {
        const S = !!v.pendingBranch;
        S && v.deps++;
        const P = O.vnode.el;
        O.asyncDep
          .catch((W) => {
            Rn(W, O, 0);
          })
          .then((W) => {
            if (O.isUnmounted || v.isUnmounted || v.pendingId !== O.suspenseId)
              return;
            O.asyncResolved = !0;
            const { vnode: w } = O;
            Ks(O, W), P && (w.el = P);
            const K = !P && O.subTree.el;
            F(O, w, R(P || O.subTree.el), P ? null : A(O.subTree), v, o, G),
              K && ((w.placeholder = null), V(K)),
              cs(O, w.el),
              S && --v.deps === 0 && v.resolve();
          });
      },
      unmount(O, F) {
        (v.isUnmounted = !0),
          v.activeBranch && g(v.activeBranch, n, O, F),
          v.pendingBranch && g(v.pendingBranch, n, O, F);
      },
    };
  return v;
}
function rf(e, t, n, s, r, i, o, l, c) {
  const a = (t.suspense = Uo(
      t,
      s,
      n,
      e.parentNode,
      document.createElement("div"),
      null,
      r,
      i,
      o,
      l,
      !0
    )),
    f = c(e, (a.pendingBranch = t.ssContent), n, a, i, o);
  return a.deps === 0 && a.resolve(!1, !0), f;
}
function of(e) {
  const { shapeFlag: t, children: n } = e,
    s = t & 32;
  (e.ssContent = $r(s ? n.default : n)),
    (e.ssFallback = s ? $r(n.fallback) : ye(me));
}
function $r(e) {
  let t;
  if (X(e)) {
    const n = Yt && e._c;
    n && ((e._d = !1), qn()), (e = e()), n && ((e._d = !0), (t = Ie), Ko());
  }
  return (
    Q(e) && (e = Uc(e)),
    (e = Le(e)),
    t && !e.dynamicChildren && (e.dynamicChildren = t.filter((n) => n !== e)),
    e
  );
}
function Go(e, t) {
  t && t.pendingBranch
    ? Q(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : Ds(e);
}
function Jt(e, t) {
  e.activeBranch = t;
  const { vnode: n, parentComponent: s } = e;
  let r = t.el;
  for (; !r && t.component; ) (t = t.component.subTree), (r = t.el);
  (n.el = r), s && s.subTree === n && ((s.vnode.el = r), cs(s, r));
}
function lf(e) {
  const t = e.props && e.props.suspensible;
  return t != null && t !== !1;
}
const Ce = Symbol.for("v-fgt"),
  Nt = Symbol.for("v-txt"),
  me = Symbol.for("v-cmt"),
  hn = Symbol.for("v-stc"),
  dn = [];
let Ie = null;
function qn(e = !1) {
  dn.push((Ie = e ? null : []));
}
function Ko() {
  dn.pop(), (Ie = dn[dn.length - 1] || null);
}
let Yt = 1;
function Jn(e, t = !1) {
  (Yt += e), e < 0 && Ie && t && (Ie.hasOnce = !0);
}
function Wo(e) {
  return (
    (e.dynamicChildren = Yt > 0 ? Ie || jt : null),
    Ko(),
    Yt > 0 && Ie && Ie.push(e),
    e
  );
}
function aa(e, t, n, s, r, i) {
  return Wo(qo(e, t, n, s, r, i, !0));
}
function js(e, t, n, s, r) {
  return Wo(ye(e, t, n, s, r, !0));
}
function Xt(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ze(e, t) {
  return e.type === t.type && e.key === t.key;
}
const $o = ({ key: e }) => (e != null ? e : null),
  Vn = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? de(e) || Te(e) || X(e)
        ? { i: be, r: e, k: t, f: !!n }
        : e
      : null
  );
function qo(
  e,
  t = null,
  n = null,
  s = 0,
  r = null,
  i = e === Ce ? 0 : 1,
  o = !1,
  l = !1
) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && $o(t),
    ref: t && Vn(t),
    scopeId: io,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: be,
  };
  return (
    l
      ? (br(c, n), i & 128 && e.normalize(c))
      : n && (c.shapeFlag |= de(n) ? 8 : 16),
    Yt > 0 &&
      !o &&
      Ie &&
      (c.patchFlag > 0 || i & 6) &&
      c.patchFlag !== 32 &&
      Ie.push(c),
    c
  );
}
const ye = cf;
function cf(e, t = null, n = null, s = 0, r = null, i = !1) {
  if (((!e || e === Co) && (e = me), Xt(e))) {
    const l = At(e, t, !0);
    return (
      n && br(l, n),
      Yt > 0 &&
        !i &&
        Ie &&
        (l.shapeFlag & 6 ? (Ie[Ie.indexOf(e)] = l) : Ie.push(l)),
      (l.patchFlag = -2),
      l
    );
  }
  if ((bf(e) && (e = e.__vccOpts), t)) {
    t = ff(t);
    let { class: l, style: c } = t;
    l && !de(l) && (t.class = sr(l)),
      ue(c) && (ur(c) && !Q(c) && (c = _e({}, c)), (t.style = nr(c)));
  }
  const o = de(e) ? 1 : jo(e) ? 128 : lo(e) ? 64 : ue(e) ? 4 : X(e) ? 2 : 0;
  return qo(e, t, n, s, r, o, i, !0);
}
function ff(e) {
  return e ? (ur(e) || Io(e) ? _e({}, e) : e) : null;
}
function At(e, t, n = !1, s = !1) {
  const { props: r, ref: i, patchFlag: o, children: l, transition: c } = e,
    a = t ? uf(r || {}, t) : r,
    f = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: a,
      key: a && $o(a),
      ref:
        t && t.ref
          ? n && i
            ? Q(i)
              ? i.concat(Vn(t))
              : [i, Vn(t)]
            : Vn(t)
          : i,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: l,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== Ce ? (o === -1 ? 16 : o | 16) : o,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: c,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && At(e.ssContent),
      ssFallback: e.ssFallback && At(e.ssFallback),
      placeholder: e.placeholder,
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    };
  return c && s && It(f, c.clone(f)), f;
}
function Jo(e = " ", t = 0) {
  return ye(Nt, null, e, t);
}
function ha(e, t) {
  const n = ye(hn, null, e);
  return (n.staticCount = t), n;
}
function da(e = "", t = !1) {
  return t ? (qn(), js(me, null, e)) : ye(me, null, e);
}
function Le(e) {
  return e == null || typeof e == "boolean"
    ? ye(me)
    : Q(e)
    ? ye(Ce, null, e.slice())
    : Xt(e)
    ? _t(e)
    : ye(Nt, null, String(e));
}
function _t(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : At(e);
}
function br(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null) t = null;
  else if (Q(t)) n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), br(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !Io(t)
        ? (t._ctx = be)
        : r === 3 &&
          be &&
          (be.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    X(t)
      ? ((t = { default: t, _ctx: be }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [Jo(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function uf(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = sr([t.class, s.class]));
      else if (r === "style") t.style = nr([t.style, s.style]);
      else if (xn(r)) {
        const i = t[r],
          o = s[r];
        o &&
          i !== o &&
          !(Q(i) && i.includes(o)) &&
          (t[r] = i ? [].concat(i, o) : o);
      } else r !== "" && (t[r] = s[r]);
  }
  return t;
}
function He(e, t, n, s = null) {
  We(e, t, 7, [n, s]);
}
const af = wo();
let hf = 0;
function df(e, t, n) {
  const s = e.type,
    r = (t ? t.appContext : e.appContext) || af,
    i = {
      uid: hf++,
      vnode: e,
      type: s,
      parent: t,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new Ml(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(r.provides),
      ids: t ? t.ids : ["", 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Do(s, r),
      emitsOptions: Oo(s, r),
      emit: null,
      emitted: null,
      propsDefaults: le,
      inheritAttrs: s.inheritAttrs,
      ctx: le,
      data: le,
      props: le,
      attrs: le,
      slots: le,
      refs: le,
      setupState: le,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (i.ctx = { _: i }),
    (i.root = t ? t.root : i),
    (i.emit = kc.bind(null, i)),
    e.ce && e.ce(i),
    i
  );
}
let xe = null;
const fs = () => xe || be;
let Qn, Us;
{
  const e = ns(),
    t = (n, s) => {
      let r;
      return (
        (r = e[n]) || (r = e[n] = []),
        r.push(s),
        (i) => {
          r.length > 1 ? r.forEach((o) => o(i)) : r[0](i);
        }
      );
    };
  (Qn = t("__VUE_INSTANCE_SETTERS__", (n) => (xe = n))),
    (Us = t("__VUE_SSR_SETTERS__", (n) => (An = n)));
}
const Mt = (e) => {
    const t = xe;
    return (
      Qn(e),
      e.scope.on(),
      () => {
        e.scope.off(), Qn(t);
      }
    );
  },
  Gs = () => {
    xe && xe.scope.off(), Qn(null);
  };
function Qo(e) {
  return e.vnode.shapeFlag & 4;
}
let An = !1;
function pf(e, t = !1, n = !1) {
  t && Us(t);
  const { props: s, children: r } = e.vnode,
    i = Qo(e);
  $c(e, s, i, t), Yc(e, r, n || t);
  const o = i ? gf(e, t) : void 0;
  return t && Us(!1), o;
}
function gf(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, Sc));
  const { setup: s } = n;
  if (s) {
    lt();
    const r = (e.setupContext = s.length > 1 ? yf(e) : null),
      i = Mt(e),
      o = Tn(s, e, 0, [e.props, r]),
      l = zs(o);
    if ((ct(), i(), (l || e.sp) && !Pt(e) && yo(e), l)) {
      if ((o.then(Gs, Gs), t))
        return o
          .then((c) => {
            Ks(e, c);
          })
          .catch((c) => {
            Rn(c, e, 0);
          });
      e.asyncDep = o;
    } else Ks(e, o);
  } else Yo(e);
}
function Ks(e, t, n) {
  X(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : ue(t) && (e.setupState = eo(t)),
    Yo(e);
}
function Yo(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || ze);
  {
    const r = Mt(e);
    lt();
    try {
      Oc(e);
    } finally {
      ct(), r();
    }
  }
}
const mf = {
  get(e, t) {
    return Ae(e, "get", ""), e[t];
  },
};
function yf(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, mf),
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function us(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(eo(zl(e.exposed)), {
          get(t, n) {
            if (n in t) return t[n];
            if (n in an) return an[n](e);
          },
          has(t, n) {
            return n in t || n in an;
          },
        }))
    : e.proxy;
}
function _f(e, t = !0) {
  return X(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function bf(e) {
  return X(e) && "__vccOpts" in e;
}
const Ue = (e, t) => ic(e, t, An);
function vr(e, t, n) {
  try {
    Jn(-1);
    const s = arguments.length;
    return s === 2
      ? ue(t) && !Q(t)
        ? Xt(t)
          ? ye(e, null, [t])
          : ye(e, t)
        : ye(e, null, t)
      : (s > 3
          ? (n = Array.prototype.slice.call(arguments, 2))
          : s === 3 && Xt(n) && (n = [n]),
        ye(e, t, n));
  } finally {
    Jn(1);
  }
}
const vf = "3.5.25";
let Ws;
const qr = typeof window != "undefined" && window.trustedTypes;
if (qr)
  try {
    Ws = qr.createPolicy("vue", { createHTML: (e) => e });
  } catch (e) {}
const Xo = Ws ? (e) => Ws.createHTML(e) : (e) => e,
  Ef = "http://www.w3.org/2000/svg",
  Af = "http://www.w3.org/1998/Math/MathML",
  st = typeof document != "undefined" ? document : null,
  Jr = st && st.createElement("template"),
  Cf = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, s) => {
      const r =
        t === "svg"
          ? st.createElementNS(Ef, e)
          : t === "mathml"
          ? st.createElementNS(Af, e)
          : n
          ? st.createElement(e, { is: n })
          : st.createElement(e);
      return (
        e === "select" &&
          s &&
          s.multiple != null &&
          r.setAttribute("multiple", s.multiple),
        r
      );
    },
    createText: (e) => st.createTextNode(e),
    createComment: (e) => st.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => st.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, s, r, i) {
      const o = n ? n.previousSibling : t.lastChild;
      if (r && (r === i || r.nextSibling))
        for (
          ;
          t.insertBefore(r.cloneNode(!0), n),
            !(r === i || !(r = r.nextSibling));

        );
      else {
        Jr.innerHTML = Xo(
          s === "svg"
            ? `<svg>${e}</svg>`
            : s === "mathml"
            ? `<math>${e}</math>`
            : e
        );
        const l = Jr.content;
        if (s === "svg" || s === "mathml") {
          const c = l.firstChild;
          for (; c.firstChild; ) l.appendChild(c.firstChild);
          l.removeChild(c);
        }
        t.insertBefore(l, n);
      }
      return [
        o ? o.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  },
  dt = "transition",
  sn = "animation",
  Zt = Symbol("_vtc"),
  Zo = {
    name: String,
    type: String,
    css: { type: Boolean, default: !0 },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String,
  },
  zo = _e({}, ao, Zo),
  xf = (e) => ((e.displayName = "Transition"), (e.props = zo), e),
  pa = xf((e, { slots: t }) => vr(dc, el(e), t)),
  Rt = (e, t = []) => {
    Q(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  },
  Qr = (e) => (e ? (Q(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function el(e) {
  const t = {};
  for (const w in e) w in Zo || (t[w] = e[w]);
  if (e.css === !1) return t;
  const {
      name: n = "v",
      type: s,
      duration: r,
      enterFromClass: i = `${n}-enter-from`,
      enterActiveClass: o = `${n}-enter-active`,
      enterToClass: l = `${n}-enter-to`,
      appearFromClass: c = i,
      appearActiveClass: a = o,
      appearToClass: f = l,
      leaveFromClass: u = `${n}-leave-from`,
      leaveActiveClass: p = `${n}-leave-active`,
      leaveToClass: g = `${n}-leave-to`,
    } = e,
    A = Tf(r),
    R = A && A[0],
    V = A && A[1],
    {
      onBeforeEnter: D,
      onEnter: I,
      onEnterCancelled: m,
      onLeave: _,
      onLeaveCancelled: v,
      onBeforeAppear: O = D,
      onAppear: F = I,
      onAppearCancelled: G = m,
    } = t,
    S = (w, K, ee, oe) => {
      (w._enterCancelled = oe), gt(w, K ? f : l), gt(w, K ? a : o), ee && ee();
    },
    P = (w, K) => {
      (w._isLeaving = !1), gt(w, u), gt(w, g), gt(w, p), K && K();
    },
    W = (w) => (K, ee) => {
      const oe = w ? F : I,
        U = () => S(K, w, ee);
      Rt(oe, [K, U]),
        Yr(() => {
          gt(K, w ? c : i), Qe(K, w ? f : l), Qr(oe) || Xr(K, s, R, U);
        });
    };
  return _e(t, {
    onBeforeEnter(w) {
      Rt(D, [w]), Qe(w, i), Qe(w, o);
    },
    onBeforeAppear(w) {
      Rt(O, [w]), Qe(w, c), Qe(w, a);
    },
    onEnter: W(!1),
    onAppear: W(!0),
    onLeave(w, K) {
      w._isLeaving = !0;
      const ee = () => P(w, K);
      Qe(w, u),
        w._enterCancelled ? (Qe(w, p), $s(w)) : ($s(w), Qe(w, p)),
        Yr(() => {
          w._isLeaving && (gt(w, u), Qe(w, g), Qr(_) || Xr(w, s, V, ee));
        }),
        Rt(_, [w, ee]);
    },
    onEnterCancelled(w) {
      S(w, !1, void 0, !0), Rt(m, [w]);
    },
    onAppearCancelled(w) {
      S(w, !0, void 0, !0), Rt(G, [w]);
    },
    onLeaveCancelled(w) {
      P(w), Rt(v, [w]);
    },
  });
}
function Tf(e) {
  if (e == null) return null;
  if (ue(e)) return [Es(e.enter), Es(e.leave)];
  {
    const t = Es(e);
    return [t, t];
  }
}
function Es(e) {
  return Di(e);
}
function Qe(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
    (e[Zt] || (e[Zt] = new Set())).add(t);
}
function gt(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[Zt];
  n && (n.delete(t), n.size || (e[Zt] = void 0));
}
function Yr(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Rf = 0;
function Xr(e, t, n, s) {
  const r = (e._endId = ++Rf),
    i = () => {
      r === e._endId && s();
    };
  if (n != null) return setTimeout(i, n);
  const { type: o, timeout: l, propCount: c } = tl(e, t);
  if (!o) return s();
  const a = o + "end";
  let f = 0;
  const u = () => {
      e.removeEventListener(a, p), i();
    },
    p = (g) => {
      g.target === e && ++f >= c && u();
    };
  setTimeout(() => {
    f < c && u();
  }, l + 1),
    e.addEventListener(a, p);
}
function tl(e, t) {
  const n = window.getComputedStyle(e),
    s = (A) => (n[A] || "").split(", "),
    r = s(`${dt}Delay`),
    i = s(`${dt}Duration`),
    o = Zr(r, i),
    l = s(`${sn}Delay`),
    c = s(`${sn}Duration`),
    a = Zr(l, c);
  let f = null,
    u = 0,
    p = 0;
  t === dt
    ? o > 0 && ((f = dt), (u = o), (p = i.length))
    : t === sn
    ? a > 0 && ((f = sn), (u = a), (p = c.length))
    : ((u = Math.max(o, a)),
      (f = u > 0 ? (o > a ? dt : sn) : null),
      (p = f ? (f === dt ? i.length : c.length) : 0));
  const g =
    f === dt &&
    /\b(?:transform|all)(?:,|$)/.test(s(`${dt}Property`).toString());
  return { type: f, timeout: u, propCount: p, hasTransform: g };
}
function Zr(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, s) => zr(n) + zr(e[s])));
}
function zr(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function $s(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function wf(e, t, n) {
  const s = e[Zt];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
      ? e.setAttribute("class", t)
      : (e.className = t);
}
const Yn = Symbol("_vod"),
  nl = Symbol("_vsh"),
  ga = {
    name: "show",
    beforeMount(e, { value: t }, { transition: n }) {
      (e[Yn] = e.style.display === "none" ? "" : e.style.display),
        n && t ? n.beforeEnter(e) : rn(e, t);
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e);
    },
    updated(e, { value: t, oldValue: n }, { transition: s }) {
      !t != !n &&
        (s
          ? t
            ? (s.beforeEnter(e), rn(e, !0), s.enter(e))
            : s.leave(e, () => {
                rn(e, !1);
              })
          : rn(e, t));
    },
    beforeUnmount(e, { value: t }) {
      rn(e, t);
    },
  };
function rn(e, t) {
  (e.style.display = t ? e[Yn] : "none"), (e[nl] = !t);
}
const Sf = Symbol(""),
  Of = /(?:^|;)\s*display\s*:/;
function Pf(e, t, n) {
  const s = e.style,
    r = de(n);
  let i = !1;
  if (n && !r) {
    if (t)
      if (de(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && kn(s, l, "");
        }
      else for (const o in t) n[o] == null && kn(s, o, "");
    for (const o in n) o === "display" && (i = !0), kn(s, o, n[o]);
  } else if (r) {
    if (t !== n) {
      const o = s[Sf];
      o && (n += ";" + o), (s.cssText = n), (i = Of.test(n));
    }
  } else t && e.removeAttribute("style");
  Yn in e && ((e[Yn] = i ? s.display : ""), e[nl] && (s.display = "none"));
}
const ei = /\s*!important$/;
function kn(e, t, n) {
  if (Q(n)) n.forEach((s) => kn(e, t, s));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const s = Nf(e, t);
    ei.test(n)
      ? e.setProperty(Ct(s), n.replace(ei, ""), "important")
      : (e[s] = n);
  }
}
const ti = ["Webkit", "Moz", "ms"],
  As = {};
function Nf(e, t) {
  const n = As[t];
  if (n) return n;
  let s = ke(t);
  if (s !== "filter" && s in e) return (As[t] = s);
  s = ts(s);
  for (let r = 0; r < ti.length; r++) {
    const i = ti[r] + s;
    if (i in e) return (As[t] = i);
  }
  return t;
}
const ni = "http://www.w3.org/1999/xlink";
function si(e, t, n, s, r, i = Nl(t)) {
  s && t.startsWith("xlink:")
    ? n == null
      ? e.removeAttributeNS(ni, t.slice(6, t.length))
      : e.setAttributeNS(ni, t, n)
    : n == null || (i && !Li(n))
    ? e.removeAttribute(t)
    : e.setAttribute(t, i ? "" : ut(n) ? String(n) : n);
}
function ri(e, t, n, s, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Xo(n) : n);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && !i.includes("-")) {
    const l = i === "OPTION" ? e.getAttribute("value") || "" : e.value,
      c = n == null ? (e.type === "checkbox" ? "on" : "") : String(n);
    (l !== c || !("_value" in e)) && (e.value = c),
      n == null && e.removeAttribute(t),
      (e._value = n);
    return;
  }
  let o = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean"
      ? (n = Li(n))
      : n == null && l === "string"
      ? ((n = ""), (o = !0))
      : l === "number" && ((n = 0), (o = !0));
  }
  try {
    e[t] = n;
  } catch (l) {}
  o && e.removeAttribute(r || t);
}
function Vt(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function If(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const ii = Symbol("_vei");
function Mf(e, t, n, s, r = null) {
  const i = e[ii] || (e[ii] = {}),
    o = i[t];
  if (s && o) o.value = s;
  else {
    const [l, c] = Df(t);
    if (s) {
      const a = (i[t] = Bf(s, r));
      Vt(e, l, a, c);
    } else o && (If(e, l, o, c), (i[t] = void 0));
  }
}
const oi = /(?:Once|Passive|Capture)$/;
function Df(e) {
  let t;
  if (oi.test(e)) {
    t = {};
    let s;
    for (; (s = e.match(oi)); )
      (e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : Ct(e.slice(2)), t];
}
let Cs = 0;
const Lf = Promise.resolve(),
  Ff = () => Cs || (Lf.then(() => (Cs = 0)), (Cs = Date.now()));
function Bf(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now();
    else if (s._vts <= n.attached) return;
    We(Hf(s, n.value), t, 5, [s]);
  };
  return (n.value = e), (n.attached = Ff()), n;
}
function Hf(e, t) {
  if (Q(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((s) => (r) => !r._stopped && s && s(r))
    );
  } else return t;
}
const li = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  Vf = (e, t, n, s, r, i) => {
    const o = r === "svg";
    t === "class"
      ? wf(e, s, o)
      : t === "style"
      ? Pf(e, n, s)
      : xn(t)
      ? Xs(t) || Mf(e, t, n, s, i)
      : (
          t[0] === "."
            ? ((t = t.slice(1)), !0)
            : t[0] === "^"
            ? ((t = t.slice(1)), !1)
            : kf(e, t, s, o)
        )
      ? (ri(e, t, s),
        !e.tagName.includes("-") &&
          (t === "value" || t === "checked" || t === "selected") &&
          si(e, t, s, o, i, t !== "value"))
      : e._isVueCE && (/[A-Z]/.test(t) || !de(s))
      ? ri(e, ke(t), s, i, t)
      : (t === "true-value"
          ? (e._trueValue = s)
          : t === "false-value" && (e._falseValue = s),
        si(e, t, s, o));
  };
function kf(e, t, n, s) {
  if (s)
    return !!(
      t === "innerHTML" ||
      t === "textContent" ||
      (t in e && li(t) && X(n))
    );
  if (
    t === "spellcheck" ||
    t === "draggable" ||
    t === "translate" ||
    t === "autocorrect" ||
    (t === "sandbox" && e.tagName === "IFRAME") ||
    t === "form" ||
    (t === "list" && e.tagName === "INPUT") ||
    (t === "type" && e.tagName === "TEXTAREA")
  )
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return li(t) && de(n) ? !1 : t in e;
}
const sl = new WeakMap(),
  rl = new WeakMap(),
  Xn = Symbol("_moveCb"),
  ci = Symbol("_enterCb"),
  jf = (e) => (delete e.props.mode, e),
  Uf = jf({
    name: "TransitionGroup",
    props: _e({}, zo, { tag: String, moveClass: String }),
    setup(e, { slots: t }) {
      const n = fs(),
        s = uo();
      let r, i;
      return (
        vo(() => {
          if (!r.length) return;
          const o = e.moveClass || `${e.name || "v"}-move`;
          if (!$f(r[0].el, n.vnode.el, o)) {
            r = [];
            return;
          }
          r.forEach(Gf), r.forEach(Kf);
          const l = r.filter(Wf);
          $s(n.vnode.el),
            l.forEach((c) => {
              const a = c.el,
                f = a.style;
              Qe(a, o),
                (f.transform = f.webkitTransform = f.transitionDuration = "");
              const u = (a[Xn] = (p) => {
                (p && p.target !== a) ||
                  ((!p || p.propertyName.endsWith("transform")) &&
                    (a.removeEventListener("transitionend", u),
                    (a[Xn] = null),
                    gt(a, o)));
              });
              a.addEventListener("transitionend", u);
            }),
            (r = []);
        }),
        () => {
          const o = ne(e),
            l = el(o);
          let c = o.tag || Ce;
          if (((r = []), i))
            for (let a = 0; a < i.length; a++) {
              const f = i[a];
              f.el &&
                f.el instanceof Element &&
                (r.push(f),
                It(f, vn(f, l, s, n)),
                sl.set(f, { left: f.el.offsetLeft, top: f.el.offsetTop }));
            }
          i = t.default ? hr(t.default()) : [];
          for (let a = 0; a < i.length; a++) {
            const f = i[a];
            f.key != null && It(f, vn(f, l, s, n));
          }
          return ye(c, null, i);
        }
      );
    },
  }),
  ma = Uf;
function Gf(e) {
  const t = e.el;
  t[Xn] && t[Xn](), t[ci] && t[ci]();
}
function Kf(e) {
  rl.set(e, { left: e.el.offsetLeft, top: e.el.offsetTop });
}
function Wf(e) {
  const t = sl.get(e),
    n = rl.get(e),
    s = t.left - n.left,
    r = t.top - n.top;
  if (s || r) {
    const i = e.el.style;
    return (
      (i.transform = i.webkitTransform = `translate(${s}px,${r}px)`),
      (i.transitionDuration = "0s"),
      e
    );
  }
}
function $f(e, t, n) {
  const s = e.cloneNode(),
    r = e[Zt];
  r &&
    r.forEach((l) => {
      l.split(/\s+/).forEach((c) => c && s.classList.remove(c));
    }),
    n.split(/\s+/).forEach((l) => l && s.classList.add(l)),
    (s.style.display = "none");
  const i = t.nodeType === 1 ? t : t.parentNode;
  i.appendChild(s);
  const { hasTransform: o } = tl(s);
  return i.removeChild(s), o;
}
const fi = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Q(t) ? (n) => Ln(t, n) : t;
};
function qf(e) {
  e.target.composing = !0;
}
function ui(e) {
  const t = e.target;
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event("input")));
}
const xs = Symbol("_assign");
function ai(e, t, n) {
  return t && (e = e.trim()), n && (e = tr(e)), e;
}
const ya = {
    created(e, { modifiers: { lazy: t, trim: n, number: s } }, r) {
      e[xs] = fi(r);
      const i = s || (r.props && r.props.type === "number");
      Vt(e, t ? "change" : "input", (o) => {
        o.target.composing || e[xs](ai(e.value, n, i));
      }),
        (n || i) &&
          Vt(e, "change", () => {
            e.value = ai(e.value, n, i);
          }),
        t ||
          (Vt(e, "compositionstart", qf),
          Vt(e, "compositionend", ui),
          Vt(e, "change", ui));
    },
    mounted(e, { value: t }) {
      e.value = t == null ? "" : t;
    },
    beforeUpdate(
      e,
      { value: t, oldValue: n, modifiers: { lazy: s, trim: r, number: i } },
      o
    ) {
      if (((e[xs] = fi(o)), e.composing)) return;
      const l =
          (i || e.type === "number") && !/^0\d/.test(e.value)
            ? tr(e.value)
            : e.value,
        c = t == null ? "" : t;
      l !== c &&
        ((document.activeElement === e &&
          e.type !== "range" &&
          ((s && t === n) || (r && e.value.trim() === c))) ||
          (e.value = c));
    },
  },
  Jf = ["ctrl", "shift", "alt", "meta"],
  Qf = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => "button" in e && e.button !== 0,
    middle: (e) => "button" in e && e.button !== 1,
    right: (e) => "button" in e && e.button !== 2,
    exact: (e, t) => Jf.some((n) => e[`${n}Key`] && !t.includes(n)),
  },
  _a = (e, t) => {
    const n = e._withMods || (e._withMods = {}),
      s = t.join(".");
    return (
      n[s] ||
      (n[s] = (r, ...i) => {
        for (let o = 0; o < t.length; o++) {
          const l = Qf[t[o]];
          if (l && l(r, t)) return;
        }
        return e(r, ...i);
      })
    );
  },
  Yf = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace",
  },
  ba = (e, t) => {
    const n = e._withKeys || (e._withKeys = {}),
      s = t.join(".");
    return (
      n[s] ||
      (n[s] = (r) => {
        if (!("key" in r)) return;
        const i = Ct(r.key);
        if (t.some((o) => o === i || Yf[o] === i)) return e(r);
      })
    );
  },
  il = _e({ patchProp: Vf }, Cf);
let pn,
  hi = !1;
function Xf() {
  return pn || (pn = Zc(il));
}
function Zf() {
  return (pn = hi ? pn : zc(il)), (hi = !0), pn;
}
const va = (...e) => {
    const t = Xf().createApp(...e),
      { mount: n } = t;
    return (
      (t.mount = (s) => {
        const r = ll(s);
        if (!r) return;
        const i = t._component;
        !X(i) && !i.render && !i.template && (i.template = r.innerHTML),
          r.nodeType === 1 && (r.textContent = "");
        const o = n(r, !1, ol(r));
        return (
          r instanceof Element &&
            (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")),
          o
        );
      }),
      t
    );
  },
  Ea = (...e) => {
    const t = Zf().createApp(...e),
      { mount: n } = t;
    return (
      (t.mount = (s) => {
        const r = ll(s);
        if (r) return n(r, !0, ol(r));
      }),
      t
    );
  };
function ol(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function ll(e) {
  return de(e) ? document.querySelector(e) : e;
}
const kt = typeof document != "undefined";
function cl(e) {
  return (
    typeof e == "object" ||
    "displayName" in e ||
    "props" in e ||
    "__vccOpts" in e
  );
}
function zf(e) {
  return (
    e.__esModule ||
    e[Symbol.toStringTag] === "Module" ||
    (e.default && cl(e.default))
  );
}
const se = Object.assign;
function Ts(e, t) {
  const n = {};
  for (const s in t) {
    const r = t[s];
    n[s] = $e(r) ? r.map(e) : e(r);
  }
  return n;
}
const gn = () => {},
  $e = Array.isArray;
function di(e, t) {
  const n = {};
  for (const s in e) n[s] = s in t ? t[s] : e[s];
  return n;
}
const fl = /#/g,
  eu = /&/g,
  tu = /\//g,
  nu = /=/g,
  su = /\?/g,
  ul = /\+/g,
  ru = /%5B/g,
  iu = /%5D/g,
  al = /%5E/g,
  ou = /%60/g,
  hl = /%7B/g,
  lu = /%7C/g,
  dl = /%7D/g,
  cu = /%20/g;
function Er(e) {
  return e == null
    ? ""
    : encodeURI("" + e)
        .replace(lu, "|")
        .replace(ru, "[")
        .replace(iu, "]");
}
function fu(e) {
  return Er(e).replace(hl, "{").replace(dl, "}").replace(al, "^");
}
function qs(e) {
  return Er(e)
    .replace(ul, "%2B")
    .replace(cu, "+")
    .replace(fl, "%23")
    .replace(eu, "%26")
    .replace(ou, "`")
    .replace(hl, "{")
    .replace(dl, "}")
    .replace(al, "^");
}
function uu(e) {
  return qs(e).replace(nu, "%3D");
}
function au(e) {
  return Er(e).replace(fl, "%23").replace(su, "%3F");
}
function hu(e) {
  return au(e).replace(tu, "%2F");
}
function Cn(e) {
  if (e == null) return null;
  try {
    return decodeURIComponent("" + e);
  } catch (t) {}
  return "" + e;
}
const du = /\/$/,
  pu = (e) => e.replace(du, "");
function Rs(e, t, n = "/") {
  let s,
    r = {},
    i = "",
    o = "";
  const l = t.indexOf("#");
  let c = t.indexOf("?");
  return (
    (c = l >= 0 && c > l ? -1 : c),
    c >= 0 &&
      ((s = t.slice(0, c)),
      (i = t.slice(c, l > 0 ? l : t.length)),
      (r = e(i.slice(1)))),
    l >= 0 && ((s = s || t.slice(0, l)), (o = t.slice(l, t.length))),
    (s = _u(s != null ? s : t, n)),
    { fullPath: s + i + o, path: s, query: r, hash: Cn(o) }
  );
}
function gu(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function pi(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || "/";
}
function mu(e, t, n) {
  const s = t.matched.length - 1,
    r = n.matched.length - 1;
  return (
    s > -1 &&
    s === r &&
    zt(t.matched[s], n.matched[r]) &&
    pl(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  );
}
function zt(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function pl(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!yu(e[n], t[n])) return !1;
  return !0;
}
function yu(e, t) {
  return $e(e) ? gi(e, t) : $e(t) ? gi(t, e) : e === t;
}
function gi(e, t) {
  return $e(t)
    ? e.length === t.length && e.every((n, s) => n === t[s])
    : e.length === 1 && e[0] === t;
}
function _u(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const n = t.split("/"),
    s = e.split("/"),
    r = s[s.length - 1];
  (r === ".." || r === ".") && s.push("");
  let i = n.length - 1,
    o,
    l;
  for (o = 0; o < s.length; o++)
    if (((l = s[o]), l !== "."))
      if (l === "..") i > 1 && i--;
      else break;
  return n.slice(0, i).join("/") + "/" + s.slice(o).join("/");
}
const pt = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0,
};
let Zn = (function (e) {
    return (e.pop = "pop"), (e.push = "push"), e;
  })({}),
  mn = (function (e) {
    return (e.back = "back"), (e.forward = "forward"), (e.unknown = ""), e;
  })({});
const ws = "";
function gl(e) {
  if (!e)
    if (kt) {
      const t = document.querySelector("base");
      (e = (t && t.getAttribute("href")) || "/"),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ""));
    } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), pu(e);
}
const bu = /^[^#]+#/;
function ml(e, t) {
  return e.replace(bu, "#") + t;
}
function vu(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    s = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: s.left - n.left - (t.left || 0),
    top: s.top - n.top - (t.top || 0),
  };
}
const as = () => ({ left: window.scrollX, top: window.scrollY });
function Eu(e) {
  let t;
  if ("el" in e) {
    const n = e.el,
      s = typeof n == "string" && n.startsWith("#"),
      r =
        typeof n == "string"
          ? s
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n;
    if (!r) return;
    t = vu(r, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.scrollX,
        t.top != null ? t.top : window.scrollY
      );
}
function mi(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Js = new Map();
function Au(e, t) {
  Js.set(e, t);
}
function Cu(e) {
  const t = Js.get(e);
  return Js.delete(e), t;
}
function xu(e) {
  return typeof e == "string" || (e && typeof e == "object");
}
function yl(e) {
  return typeof e == "string" || typeof e == "symbol";
}
let pe = (function (e) {
  return (
    (e[(e.MATCHER_NOT_FOUND = 1)] = "MATCHER_NOT_FOUND"),
    (e[(e.NAVIGATION_GUARD_REDIRECT = 2)] = "NAVIGATION_GUARD_REDIRECT"),
    (e[(e.NAVIGATION_ABORTED = 4)] = "NAVIGATION_ABORTED"),
    (e[(e.NAVIGATION_CANCELLED = 8)] = "NAVIGATION_CANCELLED"),
    (e[(e.NAVIGATION_DUPLICATED = 16)] = "NAVIGATION_DUPLICATED"),
    e
  );
})({});
const _l = Symbol("");
pe.MATCHER_NOT_FOUND + "",
  pe.NAVIGATION_GUARD_REDIRECT + "",
  pe.NAVIGATION_ABORTED + "",
  pe.NAVIGATION_CANCELLED + "",
  pe.NAVIGATION_DUPLICATED + "";
function en(e, t) {
  return se(new Error(), { type: e, [_l]: !0 }, t);
}
function nt(e, t) {
  return e instanceof Error && _l in e && (t == null || !!(e.type & t));
}
const Tu = ["params", "query", "hash"];
function Ru(e) {
  if (typeof e == "string") return e;
  if (e.path != null) return e.path;
  const t = {};
  for (const n of Tu) n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
function wu(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const n = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < n.length; ++s) {
    const r = n[s].replace(ul, " "),
      i = r.indexOf("="),
      o = Cn(i < 0 ? r : r.slice(0, i)),
      l = i < 0 ? null : Cn(r.slice(i + 1));
    if (o in t) {
      let c = t[o];
      $e(c) || (c = t[o] = [c]), c.push(l);
    } else t[o] = l;
  }
  return t;
}
function yi(e) {
  let t = "";
  for (let n in e) {
    const s = e[n];
    if (((n = uu(n)), s == null)) {
      s !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    ($e(s) ? s.map((r) => r && qs(r)) : [s && qs(s)]).forEach((r) => {
      r !== void 0 &&
        ((t += (t.length ? "&" : "") + n), r != null && (t += "=" + r));
    });
  }
  return t;
}
function Su(e) {
  const t = {};
  for (const n in e) {
    const s = e[n];
    s !== void 0 &&
      (t[n] = $e(s)
        ? s.map((r) => (r == null ? null : "" + r))
        : s == null
        ? s
        : "" + s);
  }
  return t;
}
const Ou = Symbol(""),
  _i = Symbol(""),
  Ar = Symbol(""),
  Cr = Symbol(""),
  Qs = Symbol("");
function on() {
  let e = [];
  function t(s) {
    return (
      e.push(s),
      () => {
        const r = e.indexOf(s);
        r > -1 && e.splice(r, 1);
      }
    );
  }
  function n() {
    e = [];
  }
  return { add: t, list: () => e.slice(), reset: n };
}
function bt(e, t, n, s, r, i = (o) => o()) {
  const o = s && (s.enterCallbacks[r] = s.enterCallbacks[r] || []);
  return () =>
    new Promise((l, c) => {
      const a = (p) => {
          p === !1
            ? c(en(pe.NAVIGATION_ABORTED, { from: n, to: t }))
            : p instanceof Error
            ? c(p)
            : xu(p)
            ? c(en(pe.NAVIGATION_GUARD_REDIRECT, { from: t, to: p }))
            : (o &&
                s.enterCallbacks[r] === o &&
                typeof p == "function" &&
                o.push(p),
              l());
        },
        f = i(() => e.call(s && s.instances[r], t, n, a));
      let u = Promise.resolve(f);
      e.length < 3 && (u = u.then(a)), u.catch((p) => c(p));
    });
}
function Ss(e, t, n, s, r = (i) => i()) {
  const i = [];
  for (const o of e)
    for (const l in o.components) {
      let c = o.components[l];
      if (!(t !== "beforeRouteEnter" && !o.instances[l]))
        if (cl(c)) {
          const a = (c.__vccOpts || c)[t];
          a && i.push(bt(a, n, s, o, l, r));
        } else {
          let a = c();
          i.push(() =>
            a.then((f) => {
              if (!f)
                throw new Error(
                  `Couldn't resolve component "${l}" at "${o.path}"`
                );
              const u = zf(f) ? f.default : f;
              (o.mods[l] = f), (o.components[l] = u);
              const p = (u.__vccOpts || u)[t];
              return p && bt(p, n, s, o, l, r)();
            })
          );
        }
    }
  return i;
}
function Pu(e, t) {
  const n = [],
    s = [],
    r = [],
    i = Math.max(t.matched.length, e.matched.length);
  for (let o = 0; o < i; o++) {
    const l = t.matched[o];
    l && (e.matched.find((a) => zt(a, l)) ? s.push(l) : n.push(l));
    const c = e.matched[o];
    c && (t.matched.find((a) => zt(a, c)) || r.push(c));
  }
  return [n, s, r];
}
let Nu = () => location.protocol + "//" + location.host;
function bl(e, t) {
  const { pathname: n, search: s, hash: r } = t,
    i = e.indexOf("#");
  if (i > -1) {
    let o = r.includes(e.slice(i)) ? e.slice(i).length : 1,
      l = r.slice(o);
    return l[0] !== "/" && (l = "/" + l), pi(l, "");
  }
  return pi(n, e) + s + r;
}
function Iu(e, t, n, s) {
  let r = [],
    i = [],
    o = null;
  const l = ({ state: p }) => {
    const g = bl(e, location),
      A = n.value,
      R = t.value;
    let V = 0;
    if (p) {
      if (((n.value = g), (t.value = p), o && o === A)) {
        o = null;
        return;
      }
      V = R ? p.position - R.position : 0;
    } else s(g);
    r.forEach((D) => {
      D(n.value, A, {
        delta: V,
        type: Zn.pop,
        direction: V ? (V > 0 ? mn.forward : mn.back) : mn.unknown,
      });
    });
  };
  function c() {
    o = n.value;
  }
  function a(p) {
    r.push(p);
    const g = () => {
      const A = r.indexOf(p);
      A > -1 && r.splice(A, 1);
    };
    return i.push(g), g;
  }
  function f() {
    if (document.visibilityState === "hidden") {
      const { history: p } = window;
      if (!p.state) return;
      p.replaceState(se({}, p.state, { scroll: as() }), "");
    }
  }
  function u() {
    for (const p of i) p();
    (i = []),
      window.removeEventListener("popstate", l),
      window.removeEventListener("pagehide", f),
      document.removeEventListener("visibilitychange", f);
  }
  return (
    window.addEventListener("popstate", l),
    window.addEventListener("pagehide", f),
    document.addEventListener("visibilitychange", f),
    { pauseListeners: c, listen: a, destroy: u }
  );
}
function bi(e, t, n, s = !1, r = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: s,
    position: window.history.length,
    scroll: r ? as() : null,
  };
}
function Mu(e) {
  const { history: t, location: n } = window,
    s = { value: bl(e, n) },
    r = { value: t.state };
  r.value ||
    i(
      s.value,
      {
        back: null,
        current: s.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0
    );
  function i(c, a, f) {
    const u = e.indexOf("#"),
      p =
        u > -1
          ? (n.host && document.querySelector("base") ? e : e.slice(u)) + c
          : Nu() + e + c;
    try {
      t[f ? "replaceState" : "pushState"](a, "", p), (r.value = a);
    } catch (g) {
      console.error(g), n[f ? "replace" : "assign"](p);
    }
  }
  function o(c, a) {
    i(
      c,
      se({}, t.state, bi(r.value.back, c, r.value.forward, !0), a, {
        position: r.value.position,
      }),
      !0
    ),
      (s.value = c);
  }
  function l(c, a) {
    const f = se({}, r.value, t.state, { forward: c, scroll: as() });
    i(f.current, f, !0),
      i(c, se({}, bi(s.value, c, null), { position: f.position + 1 }, a), !1),
      (s.value = c);
  }
  return { location: s, state: r, push: l, replace: o };
}
function Aa(e) {
  e = gl(e);
  const t = Mu(e),
    n = Iu(e, t.state, t.location, t.replace);
  function s(i, o = !0) {
    o || n.pauseListeners(), history.go(i);
  }
  const r = se(
    { location: "", base: e, go: s, createHref: ml.bind(null, e) },
    t,
    n
  );
  return (
    Object.defineProperty(r, "location", {
      enumerable: !0,
      get: () => t.location.value,
    }),
    Object.defineProperty(r, "state", {
      enumerable: !0,
      get: () => t.state.value,
    }),
    r
  );
}
function Ca(e = "") {
  let t = [],
    n = [[ws, {}]],
    s = 0;
  e = gl(e);
  function r(l, c = {}) {
    s++, s !== n.length && n.splice(s), n.push([l, c]);
  }
  function i(l, c, { direction: a, delta: f }) {
    const u = { direction: a, delta: f, type: Zn.pop };
    for (const p of t) p(l, c, u);
  }
  const o = {
    location: ws,
    state: {},
    base: e,
    createHref: ml.bind(null, e),
    replace(l, c) {
      n.splice(s--, 1), r(l, c);
    },
    push(l, c) {
      r(l, c);
    },
    listen(l) {
      return (
        t.push(l),
        () => {
          const c = t.indexOf(l);
          c > -1 && t.splice(c, 1);
        }
      );
    },
    destroy() {
      (t = []), (n = [[ws, {}]]), (s = 0);
    },
    go(l, c = !0) {
      const a = this.location,
        f = l < 0 ? mn.back : mn.forward;
      (s = Math.max(0, Math.min(s + l, n.length - 1))),
        c && i(this.location, a, { direction: f, delta: l });
    },
  };
  return (
    Object.defineProperty(o, "location", {
      enumerable: !0,
      get: () => n[s][0],
    }),
    Object.defineProperty(o, "state", { enumerable: !0, get: () => n[s][1] }),
    o
  );
}
let St = (function (e) {
  return (
    (e[(e.Static = 0)] = "Static"),
    (e[(e.Param = 1)] = "Param"),
    (e[(e.Group = 2)] = "Group"),
    e
  );
})({});
var ge = (function (e) {
  return (
    (e[(e.Static = 0)] = "Static"),
    (e[(e.Param = 1)] = "Param"),
    (e[(e.ParamRegExp = 2)] = "ParamRegExp"),
    (e[(e.ParamRegExpEnd = 3)] = "ParamRegExpEnd"),
    (e[(e.EscapeNext = 4)] = "EscapeNext"),
    e
  );
})(ge || {});
const Du = { type: St.Static, value: "" },
  Lu = /[a-zA-Z0-9_]/;
function Fu(e) {
  if (!e) return [[]];
  if (e === "/") return [[Du]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(g) {
    throw new Error(`ERR (${n})/"${a}": ${g}`);
  }
  let n = ge.Static,
    s = n;
  const r = [];
  let i;
  function o() {
    i && r.push(i), (i = []);
  }
  let l = 0,
    c,
    a = "",
    f = "";
  function u() {
    a &&
      (n === ge.Static
        ? i.push({ type: St.Static, value: a })
        : n === ge.Param || n === ge.ParamRegExp || n === ge.ParamRegExpEnd
        ? (i.length > 1 &&
            (c === "*" || c === "+") &&
            t(
              `A repeatable param (${a}) must be alone in its segment. eg: '/:ids+.`
            ),
          i.push({
            type: St.Param,
            value: a,
            regexp: f,
            repeatable: c === "*" || c === "+",
            optional: c === "*" || c === "?",
          }))
        : t("Invalid state to consume buffer"),
      (a = ""));
  }
  function p() {
    a += c;
  }
  for (; l < e.length; ) {
    if (((c = e[l++]), c === "\\" && n !== ge.ParamRegExp)) {
      (s = n), (n = ge.EscapeNext);
      continue;
    }
    switch (n) {
      case ge.Static:
        c === "/" ? (a && u(), o()) : c === ":" ? (u(), (n = ge.Param)) : p();
        break;
      case ge.EscapeNext:
        p(), (n = s);
        break;
      case ge.Param:
        c === "("
          ? (n = ge.ParamRegExp)
          : Lu.test(c)
          ? p()
          : (u(), (n = ge.Static), c !== "*" && c !== "?" && c !== "+" && l--);
        break;
      case ge.ParamRegExp:
        c === ")"
          ? f[f.length - 1] == "\\"
            ? (f = f.slice(0, -1) + c)
            : (n = ge.ParamRegExpEnd)
          : (f += c);
        break;
      case ge.ParamRegExpEnd:
        u(),
          (n = ge.Static),
          c !== "*" && c !== "?" && c !== "+" && l--,
          (f = "");
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return (
    n === ge.ParamRegExp && t(`Unfinished custom RegExp for param "${a}"`),
    u(),
    o(),
    r
  );
}
const vi = "[^/]+?",
  Bu = { sensitive: !1, strict: !1, start: !0, end: !0 };
var we = (function (e) {
  return (
    (e[(e._multiplier = 10)] = "_multiplier"),
    (e[(e.Root = 90)] = "Root"),
    (e[(e.Segment = 40)] = "Segment"),
    (e[(e.SubSegment = 30)] = "SubSegment"),
    (e[(e.Static = 40)] = "Static"),
    (e[(e.Dynamic = 20)] = "Dynamic"),
    (e[(e.BonusCustomRegExp = 10)] = "BonusCustomRegExp"),
    (e[(e.BonusWildcard = -50)] = "BonusWildcard"),
    (e[(e.BonusRepeatable = -20)] = "BonusRepeatable"),
    (e[(e.BonusOptional = -8)] = "BonusOptional"),
    (e[(e.BonusStrict = 0.7000000000000001)] = "BonusStrict"),
    (e[(e.BonusCaseSensitive = 0.25)] = "BonusCaseSensitive"),
    e
  );
})(we || {});
const Hu = /[.+*?^${}()[\]/\\]/g;
function Vu(e, t) {
  const n = se({}, Bu, t),
    s = [];
  let r = n.start ? "^" : "";
  const i = [];
  for (const a of e) {
    const f = a.length ? [] : [we.Root];
    n.strict && !a.length && (r += "/");
    for (let u = 0; u < a.length; u++) {
      const p = a[u];
      let g = we.Segment + (n.sensitive ? we.BonusCaseSensitive : 0);
      if (p.type === St.Static)
        u || (r += "/"), (r += p.value.replace(Hu, "\\$&")), (g += we.Static);
      else if (p.type === St.Param) {
        const { value: A, repeatable: R, optional: V, regexp: D } = p;
        i.push({ name: A, repeatable: R, optional: V });
        const I = D || vi;
        if (I !== vi) {
          g += we.BonusCustomRegExp;
          try {
            `${I}`;
          } catch (_) {
            throw new Error(
              `Invalid custom RegExp for param "${A}" (${I}): ` + _.message
            );
          }
        }
        let m = R ? `((?:${I})(?:/(?:${I}))*)` : `(${I})`;
        u || (m = V && a.length < 2 ? `(?:/${m})` : "/" + m),
          V && (m += "?"),
          (r += m),
          (g += we.Dynamic),
          V && (g += we.BonusOptional),
          R && (g += we.BonusRepeatable),
          I === ".*" && (g += we.BonusWildcard);
      }
      f.push(g);
    }
    s.push(f);
  }
  if (n.strict && n.end) {
    const a = s.length - 1;
    s[a][s[a].length - 1] += we.BonusStrict;
  }
  n.strict || (r += "/?"),
    n.end ? (r += "$") : n.strict && !r.endsWith("/") && (r += "(?:/|$)");
  const o = new RegExp(r, n.sensitive ? "" : "i");
  function l(a) {
    const f = a.match(o),
      u = {};
    if (!f) return null;
    for (let p = 1; p < f.length; p++) {
      const g = f[p] || "",
        A = i[p - 1];
      u[A.name] = g && A.repeatable ? g.split("/") : g;
    }
    return u;
  }
  function c(a) {
    let f = "",
      u = !1;
    for (const p of e) {
      (!u || !f.endsWith("/")) && (f += "/"), (u = !1);
      for (const g of p)
        if (g.type === St.Static) f += g.value;
        else if (g.type === St.Param) {
          const { value: A, repeatable: R, optional: V } = g,
            D = A in a ? a[A] : "";
          if ($e(D) && !R)
            throw new Error(
              `Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`
            );
          const I = $e(D) ? D.join("/") : D;
          if (!I)
            if (V)
              p.length < 2 &&
                (f.endsWith("/") ? (f = f.slice(0, -1)) : (u = !0));
            else throw new Error(`Missing required param "${A}"`);
          f += I;
        }
    }
    return f || "/";
  }
  return { re: o, score: s, keys: i, parse: l, stringify: c };
}
function ku(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const s = t[n] - e[n];
    if (s) return s;
    n++;
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === we.Static + we.Segment
      ? -1
      : 1
    : e.length > t.length
    ? t.length === 1 && t[0] === we.Static + we.Segment
      ? 1
      : -1
    : 0;
}
function vl(e, t) {
  let n = 0;
  const s = e.score,
    r = t.score;
  for (; n < s.length && n < r.length; ) {
    const i = ku(s[n], r[n]);
    if (i) return i;
    n++;
  }
  if (Math.abs(r.length - s.length) === 1) {
    if (Ei(s)) return 1;
    if (Ei(r)) return -1;
  }
  return r.length - s.length;
}
function Ei(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const ju = { strict: !1, end: !0, sensitive: !1 };
function Uu(e, t, n) {
  const s = Vu(Fu(e.path), n),
    r = se(s, { record: e, parent: t, children: [], alias: [] });
  return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r;
}
function Gu(e, t) {
  const n = [],
    s = new Map();
  t = di(ju, t);
  function r(u) {
    return s.get(u);
  }
  function i(u, p, g) {
    const A = !g,
      R = Ci(u);
    R.aliasOf = g && g.record;
    const V = di(t, u),
      D = [R];
    if ("alias" in u) {
      const _ = typeof u.alias == "string" ? [u.alias] : u.alias;
      for (const v of _)
        D.push(
          Ci(
            se({}, R, {
              components: g ? g.record.components : R.components,
              path: v,
              aliasOf: g ? g.record : R,
            })
          )
        );
    }
    let I, m;
    for (const _ of D) {
      const { path: v } = _;
      if (p && v[0] !== "/") {
        const O = p.record.path,
          F = O[O.length - 1] === "/" ? "" : "/";
        _.path = p.record.path + (v && F + v);
      }
      if (
        ((I = Uu(_, p, V)),
        g
          ? g.alias.push(I)
          : ((m = m || I),
            m !== I && m.alias.push(I),
            A && u.name && !xi(I) && o(u.name)),
        El(I) && c(I),
        R.children)
      ) {
        const O = R.children;
        for (let F = 0; F < O.length; F++) i(O[F], I, g && g.children[F]);
      }
      g = g || I;
    }
    return m
      ? () => {
          o(m);
        }
      : gn;
  }
  function o(u) {
    if (yl(u)) {
      const p = s.get(u);
      p &&
        (s.delete(u),
        n.splice(n.indexOf(p), 1),
        p.children.forEach(o),
        p.alias.forEach(o));
    } else {
      const p = n.indexOf(u);
      p > -1 &&
        (n.splice(p, 1),
        u.record.name && s.delete(u.record.name),
        u.children.forEach(o),
        u.alias.forEach(o));
    }
  }
  function l() {
    return n;
  }
  function c(u) {
    const p = $u(u, n);
    n.splice(p, 0, u), u.record.name && !xi(u) && s.set(u.record.name, u);
  }
  function a(u, p) {
    let g,
      A = {},
      R,
      V;
    if ("name" in u && u.name) {
      if (((g = s.get(u.name)), !g))
        throw en(pe.MATCHER_NOT_FOUND, { location: u });
      (V = g.record.name),
        (A = se(
          Ai(
            p.params,
            g.keys
              .filter((m) => !m.optional)
              .concat(g.parent ? g.parent.keys.filter((m) => m.optional) : [])
              .map((m) => m.name)
          ),
          u.params &&
            Ai(
              u.params,
              g.keys.map((m) => m.name)
            )
        )),
        (R = g.stringify(A));
    } else if (u.path != null)
      (R = u.path),
        (g = n.find((m) => m.re.test(R))),
        g && ((A = g.parse(R)), (V = g.record.name));
    else {
      if (((g = p.name ? s.get(p.name) : n.find((m) => m.re.test(p.path))), !g))
        throw en(pe.MATCHER_NOT_FOUND, { location: u, currentLocation: p });
      (V = g.record.name),
        (A = se({}, p.params, u.params)),
        (R = g.stringify(A));
    }
    const D = [];
    let I = g;
    for (; I; ) D.unshift(I.record), (I = I.parent);
    return { name: V, path: R, params: A, matched: D, meta: Wu(D) };
  }
  e.forEach((u) => i(u));
  function f() {
    (n.length = 0), s.clear();
  }
  return {
    addRoute: i,
    resolve: a,
    removeRoute: o,
    clearRoutes: f,
    getRoutes: l,
    getRecordMatcher: r,
  };
}
function Ai(e, t) {
  const n = {};
  for (const s of t) s in e && (n[s] = e[s]);
  return n;
}
function Ci(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: Ku(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      "components" in e
        ? e.components || null
        : e.component && { default: e.component },
  };
  return Object.defineProperty(t, "mods", { value: {} }), t;
}
function Ku(e) {
  const t = {},
    n = e.props || !1;
  if ("component" in e) t.default = n;
  else for (const s in e.components) t[s] = typeof n == "object" ? n[s] : n;
  return t;
}
function xi(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function Wu(e) {
  return e.reduce((t, n) => se(t, n.meta), {});
}
function $u(e, t) {
  let n = 0,
    s = t.length;
  for (; n !== s; ) {
    const i = (n + s) >> 1;
    vl(e, t[i]) < 0 ? (s = i) : (n = i + 1);
  }
  const r = qu(e);
  return r && (s = t.lastIndexOf(r, s - 1)), s;
}
function qu(e) {
  let t = e;
  for (; (t = t.parent); ) if (El(t) && vl(e, t) === 0) return t;
}
function El({ record: e }) {
  return !!(
    e.name ||
    (e.components && Object.keys(e.components).length) ||
    e.redirect
  );
}
function Ti(e) {
  const t = et(Ar),
    n = et(Cr),
    s = Ue(() => {
      const c = Kt(e.to);
      return t.resolve(c);
    }),
    r = Ue(() => {
      const { matched: c } = s.value,
        { length: a } = c,
        f = c[a - 1],
        u = n.matched;
      if (!f || !u.length) return -1;
      const p = u.findIndex(zt.bind(null, f));
      if (p > -1) return p;
      const g = Ri(c[a - 2]);
      return a > 1 && Ri(f) === g && u[u.length - 1].path !== g
        ? u.findIndex(zt.bind(null, c[a - 2]))
        : p;
    }),
    i = Ue(() => r.value > -1 && Zu(n.params, s.value.params)),
    o = Ue(
      () =>
        r.value > -1 &&
        r.value === n.matched.length - 1 &&
        pl(n.params, s.value.params)
    );
  function l(c = {}) {
    if (Xu(c)) {
      const a = t[Kt(e.replace) ? "replace" : "push"](Kt(e.to)).catch(gn);
      return (
        e.viewTransition &&
          typeof document != "undefined" &&
          "startViewTransition" in document &&
          document.startViewTransition(() => a),
        a
      );
    }
    return Promise.resolve();
  }
  return {
    route: s,
    href: Ue(() => s.value.href),
    isActive: i,
    isExactActive: o,
    navigate: l,
  };
}
function Ju(e) {
  return e.length === 1 ? e[0] : e;
}
const Qu = mo({
    name: "RouterLink",
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: "page" },
      viewTransition: Boolean,
    },
    useLink: Ti,
    setup(e, { slots: t }) {
      const n = rs(Ti(e)),
        { options: s } = et(Ar),
        r = Ue(() => ({
          [wi(e.activeClass, s.linkActiveClass, "router-link-active")]:
            n.isActive,
          [wi(
            e.exactActiveClass,
            s.linkExactActiveClass,
            "router-link-exact-active"
          )]: n.isExactActive,
        }));
      return () => {
        const i = t.default && Ju(t.default(n));
        return e.custom
          ? i
          : vr(
              "a",
              {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: r.value,
              },
              i
            );
      };
    },
  }),
  Yu = Qu;
function Xu(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function Zu(e, t) {
  for (const n in t) {
    const s = t[n],
      r = e[n];
    if (typeof s == "string") {
      if (s !== r) return !1;
    } else if (!$e(r) || r.length !== s.length || s.some((i, o) => i !== r[o]))
      return !1;
  }
  return !0;
}
function Ri(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
}
const wi = (e, t, n) => (e != null ? e : t != null ? t : n),
  zu = mo({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const s = et(Qs),
        r = Ue(() => e.route || s.value),
        i = et(_i, 0),
        o = Ue(() => {
          let a = Kt(i);
          const { matched: f } = r.value;
          let u;
          for (; (u = f[a]) && !u.components; ) a++;
          return a;
        }),
        l = Ue(() => r.value.matched[o.value]);
      Bn(
        _i,
        Ue(() => o.value + 1)
      ),
        Bn(Ou, l),
        Bn(Qs, r);
      const c = ec();
      return (
        Hn(
          () => [c.value, l.value, e.name],
          ([a, f, u], [p, g, A]) => {
            f &&
              ((f.instances[u] = a),
              g &&
                g !== f &&
                a &&
                a === p &&
                (f.leaveGuards.size || (f.leaveGuards = g.leaveGuards),
                f.updateGuards.size || (f.updateGuards = g.updateGuards))),
              a &&
                f &&
                (!g || !zt(f, g) || !p) &&
                (f.enterCallbacks[u] || []).forEach((R) => R(a));
          },
          { flush: "post" }
        ),
        () => {
          const a = r.value,
            f = e.name,
            u = l.value,
            p = u && u.components[f];
          if (!p) return Si(n.default, { Component: p, route: a });
          const g = u.props[f],
            A = g
              ? g === !0
                ? a.params
                : typeof g == "function"
                ? g(a)
                : g
              : null,
            V = vr(
              p,
              se({}, A, t, {
                onVnodeUnmounted: (D) => {
                  D.component.isUnmounted && (u.instances[f] = null);
                },
                ref: c,
              })
            );
          return Si(n.default, { Component: V, route: a }) || V;
        }
      );
    },
  });
function Si(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const ea = zu;
function xa(e) {
  const t = Gu(e.routes, e),
    n = e.parseQuery || wu,
    s = e.stringifyQuery || yi,
    r = e.history,
    i = on(),
    o = on(),
    l = on(),
    c = tc(pt);
  let a = pt;
  kt &&
    e.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual");
  const f = Ts.bind(null, (E) => "" + E),
    u = Ts.bind(null, hu),
    p = Ts.bind(null, Cn);
  function g(E, j) {
    let B, q;
    return (
      yl(E) ? ((B = t.getRecordMatcher(E)), (q = j)) : (q = E), t.addRoute(q, B)
    );
  }
  function A(E) {
    const j = t.getRecordMatcher(E);
    j && t.removeRoute(j);
  }
  function R() {
    return t.getRoutes().map((E) => E.record);
  }
  function V(E) {
    return !!t.getRecordMatcher(E);
  }
  function D(E, j) {
    if (((j = se({}, j || c.value)), typeof E == "string")) {
      const d = Rs(n, E, j.path),
        y = t.resolve({ path: d.path }, j),
        C = r.createHref(d.fullPath);
      return se(d, y, {
        params: p(y.params),
        hash: Cn(d.hash),
        redirectedFrom: void 0,
        href: C,
      });
    }
    let B;
    if (E.path != null) B = se({}, E, { path: Rs(n, E.path, j.path).path });
    else {
      const d = se({}, E.params);
      for (const y in d) d[y] == null && delete d[y];
      (B = se({}, E, { params: u(d) })), (j.params = u(j.params));
    }
    const q = t.resolve(B, j),
      z = E.hash || "";
    q.params = f(p(q.params));
    const he = gu(s, se({}, E, { hash: fu(z), path: q.path })),
      h = r.createHref(he);
    return se(
      { fullPath: he, hash: z, query: s === yi ? Su(E.query) : E.query || {} },
      q,
      { redirectedFrom: void 0, href: h }
    );
  }
  function I(E) {
    return typeof E == "string" ? Rs(n, E, c.value.path) : se({}, E);
  }
  function m(E, j) {
    if (a !== E) return en(pe.NAVIGATION_CANCELLED, { from: j, to: E });
  }
  function _(E) {
    return F(E);
  }
  function v(E) {
    return _(se(I(E), { replace: !0 }));
  }
  function O(E, j) {
    const B = E.matched[E.matched.length - 1];
    if (B && B.redirect) {
      const { redirect: q } = B;
      let z = typeof q == "function" ? q(E, j) : q;
      return (
        typeof z == "string" &&
          ((z = z.includes("?") || z.includes("#") ? (z = I(z)) : { path: z }),
          (z.params = {})),
        se(
          {
            query: E.query,
            hash: E.hash,
            params: z.path != null ? {} : E.params,
          },
          z
        )
      );
    }
  }
  function F(E, j) {
    const B = (a = D(E)),
      q = c.value,
      z = E.state,
      he = E.force,
      h = E.replace === !0,
      d = O(B, q);
    if (d)
      return F(
        se(I(d), {
          state: typeof d == "object" ? se({}, z, d.state) : z,
          force: he,
          replace: h,
        }),
        j || B
      );
    const y = B;
    y.redirectedFrom = j;
    let C;
    return (
      !he &&
        mu(s, q, B) &&
        ((C = en(pe.NAVIGATION_DUPLICATED, { to: y, from: q })),
        qe(q, q, !0, !1)),
      (C ? Promise.resolve(C) : P(y, q))
        .catch((b) =>
          nt(b) ? (nt(b, pe.NAVIGATION_GUARD_REDIRECT) ? b : ht(b)) : k(b, y, q)
        )
        .then((b) => {
          if (b) {
            if (nt(b, pe.NAVIGATION_GUARD_REDIRECT))
              return F(
                se({ replace: h }, I(b.to), {
                  state: typeof b.to == "object" ? se({}, z, b.to.state) : z,
                  force: he,
                }),
                j || y
              );
          } else b = w(y, q, !0, h, z);
          return W(y, q, b), b;
        })
    );
  }
  function G(E, j) {
    const B = m(E, j);
    return B ? Promise.reject(B) : Promise.resolve();
  }
  function S(E) {
    const j = Lt.values().next().value;
    return j && typeof j.runWithContext == "function"
      ? j.runWithContext(E)
      : E();
  }
  function P(E, j) {
    let B;
    const [q, z, he] = Pu(E, j);
    B = Ss(q.reverse(), "beforeRouteLeave", E, j);
    for (const d of q)
      d.leaveGuards.forEach((y) => {
        B.push(bt(y, E, j));
      });
    const h = G.bind(null, E, j);
    return (
      B.push(h),
      Fe(B)
        .then(() => {
          B = [];
          for (const d of i.list()) B.push(bt(d, E, j));
          return B.push(h), Fe(B);
        })
        .then(() => {
          B = Ss(z, "beforeRouteUpdate", E, j);
          for (const d of z)
            d.updateGuards.forEach((y) => {
              B.push(bt(y, E, j));
            });
          return B.push(h), Fe(B);
        })
        .then(() => {
          B = [];
          for (const d of he)
            if (d.beforeEnter)
              if ($e(d.beforeEnter))
                for (const y of d.beforeEnter) B.push(bt(y, E, j));
              else B.push(bt(d.beforeEnter, E, j));
          return B.push(h), Fe(B);
        })
        .then(
          () => (
            E.matched.forEach((d) => (d.enterCallbacks = {})),
            (B = Ss(he, "beforeRouteEnter", E, j, S)),
            B.push(h),
            Fe(B)
          )
        )
        .then(() => {
          B = [];
          for (const d of o.list()) B.push(bt(d, E, j));
          return B.push(h), Fe(B);
        })
        .catch((d) => (nt(d, pe.NAVIGATION_CANCELLED) ? d : Promise.reject(d)))
    );
  }
  function W(E, j, B) {
    l.list().forEach((q) => S(() => q(E, j, B)));
  }
  function w(E, j, B, q, z) {
    const he = m(E, j);
    if (he) return he;
    const h = j === pt,
      d = kt ? history.state : {};
    B &&
      (q || h
        ? r.replace(E.fullPath, se({ scroll: h && d && d.scroll }, z))
        : r.push(E.fullPath, z)),
      (c.value = E),
      qe(E, j, B, h),
      ht();
  }
  let K;
  function ee() {
    K ||
      (K = r.listen((E, j, B) => {
        if (!xt.listening) return;
        const q = D(E),
          z = O(q, xt.currentRoute.value);
        if (z) {
          F(se(z, { replace: !0, force: !0 }), q).catch(gn);
          return;
        }
        a = q;
        const he = c.value;
        kt && Au(mi(he.fullPath, B.delta), as()),
          P(q, he)
            .catch((h) =>
              nt(h, pe.NAVIGATION_ABORTED | pe.NAVIGATION_CANCELLED)
                ? h
                : nt(h, pe.NAVIGATION_GUARD_REDIRECT)
                ? (F(se(I(h.to), { force: !0 }), q)
                    .then((d) => {
                      nt(d, pe.NAVIGATION_ABORTED | pe.NAVIGATION_DUPLICATED) &&
                        !B.delta &&
                        B.type === Zn.pop &&
                        r.go(-1, !1);
                    })
                    .catch(gn),
                  Promise.reject())
                : (B.delta && r.go(-B.delta, !1), k(h, q, he))
            )
            .then((h) => {
              (h = h || w(q, he, !1)),
                h &&
                  (B.delta && !nt(h, pe.NAVIGATION_CANCELLED)
                    ? r.go(-B.delta, !1)
                    : B.type === Zn.pop &&
                      nt(h, pe.NAVIGATION_ABORTED | pe.NAVIGATION_DUPLICATED) &&
                      r.go(-1, !1)),
                W(q, he, h);
            })
            .catch(gn);
      }));
  }
  let oe = on(),
    U = on(),
    Y;
  function k(E, j, B) {
    ht(E);
    const q = U.list();
    return (
      q.length ? q.forEach((z) => z(E, j, B)) : console.error(E),
      Promise.reject(E)
    );
  }
  function ae() {
    return Y && c.value !== pt
      ? Promise.resolve()
      : new Promise((E, j) => {
          oe.add([E, j]);
        });
  }
  function ht(E) {
    return (
      Y ||
        ((Y = !E),
        ee(),
        oe.list().forEach(([j, B]) => (E ? B(E) : j())),
        oe.reset()),
      E
    );
  }
  function qe(E, j, B, q) {
    const { scrollBehavior: z } = e;
    if (!kt || !z) return Promise.resolve();
    const he =
      (!B && Cu(mi(E.fullPath, 0))) ||
      ((q || !B) && history.state && history.state.scroll) ||
      null;
    return no()
      .then(() => z(E, j, he))
      .then((h) => h && Eu(h))
      .catch((h) => k(h, E, j));
  }
  const Oe = (E) => r.go(E);
  let Dt;
  const Lt = new Set(),
    xt = {
      currentRoute: c,
      listening: !0,
      addRoute: g,
      removeRoute: A,
      clearRoutes: t.clearRoutes,
      hasRoute: V,
      getRoutes: R,
      resolve: D,
      options: e,
      push: _,
      replace: v,
      go: Oe,
      back: () => Oe(-1),
      forward: () => Oe(1),
      beforeEach: i.add,
      beforeResolve: o.add,
      afterEach: l.add,
      onError: U.add,
      isReady: ae,
      install(E) {
        E.component("RouterLink", Yu),
          E.component("RouterView", ea),
          (E.config.globalProperties.$router = xt),
          Object.defineProperty(E.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => Kt(c),
          }),
          kt &&
            !Dt &&
            c.value === pt &&
            ((Dt = !0), _(r.location).catch((q) => {}));
        const j = {};
        for (const q in pt)
          Object.defineProperty(j, q, {
            get: () => c.value[q],
            enumerable: !0,
          });
        E.provide(Ar, xt), E.provide(Cr, Zi(j)), E.provide(Qs, c);
        const B = E.unmount;
        Lt.add(E),
          (E.unmount = function () {
            Lt.delete(E),
              Lt.size < 1 &&
                ((a = pt),
                K && K(),
                (K = null),
                (c.value = pt),
                (Dt = !1),
                (Y = !1)),
              B();
          });
      },
    };
  function Fe(E) {
    return E.reduce((j, B) => j.then(() => S(B)), Promise.resolve());
  }
  return xt;
}
function Ta(e) {
  return et(Cr);
}
export {
  Jo as A,
  ta as B,
  ya as C,
  ba as D,
  Ta as E,
  Ce as F,
  sr as G,
  ia as H,
  _a as I,
  ga as J,
  ha as K,
  ma as L,
  xa as M,
  Ca as N,
  Aa as O,
  Ea as P,
  va as Q,
  Yu as R,
  ua as S,
  pa as T,
  vr as U,
  na as V,
  la as W,
  ca as X,
  Hn as a,
  bc as b,
  _c as c,
  aa as d,
  qn as e,
  qo as f,
  fs as g,
  Ue as h,
  et as i,
  js as j,
  uc as k,
  ye as l,
  nr as m,
  no as n,
  Eo as o,
  sa as p,
  da as q,
  ec as r,
  ra as s,
  Il as t,
  Kt as u,
  vf as v,
  fa as w,
  bo as x,
  Ao as y,
  oa as z,
};
