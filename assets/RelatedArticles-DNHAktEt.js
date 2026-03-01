var _ = Object.defineProperty,
  b = Object.defineProperties;
var v = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty,
  w = Object.prototype.propertyIsEnumerable;
var c = (s, e, t) =>
    e in s
      ? _(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (s[e] = t),
  d = (s, e) => {
    for (var t in e || (e = {})) f.call(e, t) && c(s, t, e[t]);
    if (m) for (var t of m(e)) w.call(e, t) && c(s, t, e[t]);
    return s;
  },
  g = (s, e) => b(s, v(e));
import { b as k, P as y } from "./index-CkW8Cm0p.js";
import {
  h as B,
  p as F,
  d as u,
  q as P,
  e as n,
  f as a,
  t as l,
  F as z,
  z as C,
  j as E,
  k as A,
} from "./vue-Z9E3ejSf.js";
const I = {
    key: 0,
    class:
      "base-x-p max-w-[2000px] mx-auto mt-[100px] max-xl:mt-[80px] max-lg:mt-16 max-md:mt-12",
  },
  L = { class: "title text-black text-center mb-10 max-md:mb-6" },
  R = {
    class: "grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto",
  },
  j = { class: "h-48 overflow-hidden" },
  q = ["src", "alt"],
  D = { class: "p-5" },
  N = { class: "text-xs font-medium text-[#FF5B00] uppercase tracking-wide" },
  S = {
    class:
      "font-semibold text-black text-base mt-2 line-clamp-2 group-hover:text-[#FF5B00] transition-colors",
  },
  V = { class: "text-gray-500 text-sm mt-2 line-clamp-2" },
  H = { class: "text-xs text-gray-400 mt-3 block" },
  p = "/images/blog-placeholder.svg",
  G = {
    __name: "RelatedArticles",
    props: {
      slugs: { type: Array, required: !0 },
      title: { type: String, default: "Related Articles" },
    },
    setup(s) {
      const e = s,
        t = B(() =>
          e.slugs
            .map((r) => k.find((i) => i.slug === r))
            .filter(Boolean)
            .map((r) =>
              g(d({}, r), { normalizedPreview: y(r.textPreview || "") })
            )
        ),
        x = (r) => {
          r.target.src = p;
        };
      
    },
  };
export { G as _ };
