import {
  b as k,
  u as F,
  g as w,
  e as $,
  S as B,
  U as S,
  d as q,
} from "./index-CkW8Cm0p.js";
import { s as C } from "./sanitize-ChfC-5Mx.js";
import { a as T, _ as A } from "./WhitepaperCTA-skeGE0c1.js";
import {
  h as y,
  p as b,
  d as c,
  e as n,
  f as t,
  j as h,
  l as m,
  u as x,
  k as u,
  t as i,
  A as g,
  r as j,
  q as f,
  F as v,
  z as _,
  G as L,
  B as N,
  J as W,
  T as H,
} from "./vue-Z9E3ejSf.js";
const z = { class: "section-nav border-t border-gray-200 pt-8 mt-12" },
  M = { class: "flex justify-between items-center gap-4" },
  P = {
    class:
      "font-semibold text-gray-900 group-hover:text-[#FF5B00] transition-colors",
  },
  V = { key: 1, class: "flex-1" },
  D = {
    class:
      "font-semibold text-gray-900 group-hover:text-[#FF5B00] transition-colors",
  },
  Q = { key: 3, class: "flex-1" },
  R = {
    __name: "SectionNav",
    props: { currentSlug: { type: String, required: !0 } },
    setup(s) {
      const r = s,
        { prev: d, next: o } = y(() => T(r.currentSlug)).value;
      return (l, e) => {
        const a = b("router-link");
        return (
          n(),
          c("nav", z, [
            t("div", M, [
              x(d)
                ? (n(),
                  h(
                    a,
                    {
                      key: 0,
                      to: `/${x(d).slug}/`,
                      class:
                        "group flex-1 p-4 rounded-xl border border-gray-200 hover:border-[#FF5B00] hover:bg-orange-50 transition-all",
                    },
                    {
                      default: u(() => [
                        e[0] ||
                          (e[0] = t(
                            "div",
                            { class: "text-sm text-gray-500 mb-1" },
                            "← Previous",
                            -1
                          )),
                        t("div", P, i(x(d).title), 1),
                      ]),
                      _: 1,
                    },
                    8,
                    ["to"]
                  ))
                : (n(), c("div", V)),
              m(
                a,
                {
                  to: "/whitepaper/",
                  class:
                    "px-4 py-2 text-sm text-gray-600 hover:text-[#FF5B00] transition-colors",
                },
                {
                  default: u(() => [
                    ...(e[1] || (e[1] = [g(" ← All Sections ", -1)])),
                  ]),
                  _: 1,
                }
              ),
              x(o)
                ? (n(),
                  h(
                    a,
                    {
                      key: 2,
                      to: `/${x(o).slug}/`,
                      class:
                        "group flex-1 p-4 rounded-xl border border-gray-200 hover:border-[#FF5B00] hover:bg-orange-50 transition-all text-right",
                    },
                    {
                      default: u(() => [
                        e[2] ||
                          (e[2] = t(
                            "div",
                            { class: "text-sm text-gray-500 mb-1" },
                            "Next →",
                            -1
                          )),
                        t("div", D, i(x(o).title), 1),
                      ]),
                      _: 1,
                    },
                    8,
                    ["to"]
                  ))
                : (n(), c("div", Q)),
            ]),
          ])
        );
      };
    },
  },
  G = { key: 0, class: "faq-section mt-12" },
  O = { class: "text-2xl font-bold mb-6" },
  U = { class: "space-y-3" },
  E = ["onClick"],
  I = { class: "font-medium text-gray-900 pr-4" },
  J = { class: "overflow-hidden" },
  K = { class: "p-4 pt-0 text-gray-600 leading-relaxed" },
  X = {
    __name: "FAQAccordion",
    props: {
      faqs: { type: Array, required: !0, default: () => [] },
      title: { type: String, default: "Frequently Asked Questions" },
    },
    setup(s) {
      const r = j(null),
        d = (o) => {
          r.value = r.value === o ? null : o;
        };
      return (o, l) =>
        s.faqs && s.faqs.length > 0
          ? (n(),
            c("section", G, [
              t("h2", O, i(s.title), 1),
              t("div", U, [
                (n(!0),
                c(
                  v,
                  null,
                  _(
                    s.faqs,
                    (e, a) => (
                      n(),
                      c(
                        "div",
                        {
                          key: a,
                          class:
                            "border border-gray-200 rounded-xl overflow-hidden",
                        },
                        [
                          t(
                            "button",
                            {
                              onClick: (p) => d(a),
                              class:
                                "w-full flex justify-between items-center p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors",
                            },
                            [
                              t("span", I, i(e.question), 1),
                              (n(),
                              c(
                                "svg",
                                {
                                  class: L([
                                    "w-5 h-5 text-gray-500 transition-transform flex-shrink-0",
                                    r.value === a ? "rotate-180" : "",
                                  ]),
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                },
                                [
                                  ...(l[0] ||
                                    (l[0] = [
                                      t(
                                        "path",
                                        {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          "stroke-width": "2",
                                          d: "M19 9l-7 7-7-7",
                                        },
                                        null,
                                        -1
                                      ),
                                    ])),
                                ],
                                2
                              )),
                            ],
                            8,
                            E
                          ),
                          m(
                            H,
                            {
                              "enter-active-class":
                                "transition-all duration-300 ease-out",
                              "enter-from-class": "opacity-0 max-h-0",
                              "enter-to-class": "opacity-100 max-h-96",
                              "leave-active-class":
                                "transition-all duration-200 ease-in",
                              "leave-from-class": "opacity-100 max-h-96",
                              "leave-to-class": "opacity-0 max-h-0",
                            },
                            {
                              default: u(() => [
                                N(
                                  t(
                                    "div",
                                    J,
                                    [t("div", K, i(e.answer), 1)],
                                    512
                                  ),
                                  [[W, r.value === a]]
                                ),
                              ]),
                              _: 2,
                            },
                            1024
                          ),
                        ]
                      )
                    )
                  ),
                  128
                )),
              ]),
            ]))
          : f("", !0);
    },
  },
  Y = { key: 0, class: "related-terms mt-10 p-6 bg-gray-50 rounded-xl" },
  Z = { class: "flex flex-wrap gap-2" },
  tt = { class: "mt-3 text-sm text-gray-500" },
  et = {
    __name: "RelatedTerms",
    props: { terms: { type: Array, required: !0, default: () => [] } },
    setup(s) {
      const r = (d) =>
        d
          .split("-")
          .map((o) => o.charAt(0).toUpperCase() + o.slice(1))
          .join(" ");
      return (d, o) => {
        const l = b("router-link");
        return s.terms && s.terms.length > 0
          ? (n(),
            c("section", Y, [
              o[4] ||
                (o[4] = t(
                  "h3",
                  { class: "text-lg font-semibold mb-4 text-gray-900" },
                  "Related Terms",
                  -1
                )),
              t("div", Z, [
                (n(!0),
                c(
                  v,
                  null,
                  _(
                    s.terms,
                    (e) => (
                      n(),
                      h(
                        l,
                        {
                          key: e,
                          to: `/learn/${e}/`,
                          class:
                            "inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-[#FF5B00] hover:text-[#FF5B00] transition-colors",
                        },
                        {
                          default: u(() => [
                            o[0] ||
                              (o[0] = t(
                                "svg",
                                {
                                  class: "w-4 h-4",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                },
                                [
                                  t("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
                                  }),
                                ],
                                -1
                              )),
                            g(" " + i(r(e)), 1),
                          ]),
                          _: 2,
                        },
                        1032,
                        ["to"]
                      )
                    )
                  ),
                  128
                )),
              ]),
              t("p", tt, [
                o[2] || (o[2] = g(" Learn more about these terms in our ", -1)),
                m(
                  l,
                  { to: "/learn/", class: "text-[#FF5B00] hover:underline" },
                  {
                    default: u(() => [
                      ...(o[1] || (o[1] = [g("glossary", -1)])),
                    ]),
                    _: 1,
                  }
                ),
                o[3] || (o[3] = g(". ", -1)),
              ]),
            ]))
          : f("", !0);
      };
    },
  },
  st = { class: "whitepaper-section min-h-screen bg-white text-black" },
  ot = {
    class:
      "relative bg-gradient-to-b from-[#0a0a0a] to-[#1a1a2e] text-white py-20 md:py-28",
  },
  rt = { class: "max-w-4xl mx-auto px-6" },
  nt = { "aria-label": "Breadcrumb", class: "mb-6" },
  at = { class: "flex items-center gap-2 text-sm text-gray-400" },
  lt = { class: "text-[#FF5B00]" },
  it = {
    class:
      "inline-block px-3 py-1 bg-[#FF5B00]/20 text-[#FF5B00] rounded-full text-sm font-medium mb-4",
  },
  ct = {
    class: "text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight",
  },
  dt = { class: "text-xl text-gray-300" },
  ut = { class: "py-12 md:py-16" },
  mt = { class: "max-w-4xl mx-auto px-6" },
  xt = ["innerHTML"],
  gt = { key: 0, class: "mt-12 pt-8 border-t border-gray-200" },
  pt = { class: "grid md:grid-cols-3 gap-4" },
  ht = { class: "text-xs text-[#FF5B00] font-medium" },
  ft = {
    class:
      "font-semibold text-sm text-gray-900 group-hover:text-[#FF5B00] transition-colors mt-1 line-clamp-2",
  },
  yt = { class: "text-xs text-gray-500 mt-2" },
  Ft = {
    __name: "WhitepaperSection",
    props: { section: { type: Object, required: !0 } },
    setup(s) {
      const r = s,
        d = y(() => {
          var l;
          return (l = r.section.relatedPosts) != null && l.length
            ? r.section.relatedPosts
                .map((e) => k.find((a) => a.slug === e))
                .filter(Boolean)
            : [];
        });
      F({
        title: r.section.metaTitle,
        description: r.section.metaDescription,
        path: `/${r.section.slug}/`,
      });
      const o = y(() => {
        const l = [
            w(),
            $([
              { name: "Home", url: "/" },
              { name: "Whitepaper", url: "/whitepaper/" },
              { name: r.section.title, url: `/${r.section.slug}/` },
            ]),
            B(r.section),
          ],
          e = S(r.section);
        return e && l.push(e), l;
      });
      return (
        q(o),
        (l, e) => {
          const a = b("router-link");
          return (
            n(),
            c("main", st, [
              t("section", ot, [
                t("div", rt, [
                  t("nav", nt, [
                    t("ol", at, [
                      t("li", null, [
                        m(
                          a,
                          {
                            to: "/",
                            class: "hover:text-white transition-colors",
                          },
                          {
                            default: u(() => [
                              ...(e[0] || (e[0] = [g("Home", -1)])),
                            ]),
                            _: 1,
                          }
                        ),
                      ]),
                      e[2] || (e[2] = t("li", { class: "mx-2" }, "/", -1)),
                      t("li", null, [
                        m(
                          a,
                          {
                            to: "/whitepaper/",
                            class: "hover:text-white transition-colors",
                          },
                          {
                            default: u(() => [
                              ...(e[1] || (e[1] = [g("Whitepaper", -1)])),
                            ]),
                            _: 1,
                          }
                        ),
                      ]),
                      e[3] || (e[3] = t("li", { class: "mx-2" }, "/", -1)),
                      t("li", lt, i(s.section.title), 1),
                    ]),
                  ]),
                  t(
                    "div",
                    it,
                    " Section " + i(s.section.order) + " • Whitepaper ",
                    1
                  ),
                  t("h1", ct, i(s.section.title), 1),
                  t("p", dt, i(s.section.subtitle), 1),
                ]),
              ]),
              t("article", ut, [
                t("div", mt, [
                  t(
                    "div",
                    {
                      class:
                        "prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-ul:text-gray-700 prose-li:text-gray-700",
                      innerHTML: x(C)(s.section.content),
                    },
                    null,
                    8,
                    xt
                  ),
                  m(R, { currentSlug: s.section.slug }, null, 8, [
                    "currentSlug",
                  ]),
                  d.value.length > 0
                    ? (n(),
                      c("section", gt, [
                        e[4] ||
                          (e[4] = t(
                            "h2",
                            { class: "text-xl font-bold mb-6 text-gray-900" },
                            "Related Articles",
                            -1
                          )),
                        t("div", pt, [
                          (n(!0),
                          c(
                            v,
                            null,
                            _(
                              d.value,
                              (p) => (
                                n(),
                                h(
                                  a,
                                  {
                                    key: p.slug,
                                    to: `/blog/${p.slug}/`,
                                    class:
                                      "group p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors border border-gray-200",
                                  },
                                  {
                                    default: u(() => [
                                      t("span", ht, i(p.rawCategory), 1),
                                      t("h3", ft, i(p.name), 1),
                                      t("p", yt, i(p.time), 1),
                                    ]),
                                    _: 2,
                                  },
                                  1032,
                                  ["to"]
                                )
                              )
                            ),
                            128
                          )),
                        ]),
                      ]))
                    : f("", !0),
                  m(et, { terms: s.section.relatedGlossaryTerms }, null, 8, [
                    "terms",
                  ]),
                  m(X, { faqs: s.section.faqs }, null, 8, ["faqs"]),
                  s.section.cta
                    ? (n(),
                      h(
                        A,
                        {
                          key: 1,
                          title: s.section.cta.title,
                          description: s.section.cta.description,
                          buttonText: s.section.cta.buttonText,
                          buttonLink: s.section.cta.buttonLink,
                        },
                        null,
                        8,
                        ["title", "description", "buttonText", "buttonLink"]
                      ))
                    : f("", !0),
                ]),
              ]),
            ])
          );
        }
      );
    },
  };
export { Ft as _ };
