var C = (_, m, i) =>
  new Promise((g, y) => {
    var d = (r) => {
        try {
          p(i.next(r));
        } catch (u) {
          y(u);
        }
      },
      c = (r) => {
        try {
          p(i.throw(r));
        } catch (u) {
          y(u);
        }
      },
      p = (r) => (r.done ? g(r.value) : Promise.resolve(r.value).then(d, c));
    p((i = i.apply(_, m)).next());
  });
import {
  M as I,
  u as O,
  d as L,
  g as P,
  e as G,
  N as S,
} from "./index-CkW8Cm0p.js";
import {
  X as T,
  r as w,
  h as f,
  d as l,
  f as t,
  q as F,
  l as D,
  k as B,
  B as N,
  C as V,
  F as b,
  z as h,
  u as M,
  p as $,
  e as o,
  A as z,
  G as A,
  t as v,
  j as E,
} from "./vue-Z9E3ejSf.js";
import "./gsap-BwUJxYA3.js";
const j = { class: "min-h-screen bg-white text-black pt-32 pb-20" },
  q = { class: "max-w-6xl mx-auto px-6" },
  H = { "aria-label": "Breadcrumb", class: "mb-6" },
  U = { class: "flex items-center gap-2 text-sm text-gray-500" },
  Q = { class: "flex flex-wrap gap-4 mb-8" },
  R = { class: "flex gap-2 flex-wrap" },
  W = ["onClick"],
  X = {
    key: 0,
    class: "flex flex-wrap gap-2 mb-8 pb-4 border-b border-gray-200",
  },
  Y = ["href"],
  J = { key: 1 },
  K = ["id"],
  Z = { class: "text-2xl font-bold mb-6 text-[#FF5B00]" },
  ee = { class: "grid md:grid-cols-2 gap-4" },
  te = {
    class:
      "text-lg font-semibold mb-2 group-hover:text-[#FF5B00] transition-colors",
  },
  se = { class: "text-gray-600 text-sm line-clamp-2" },
  ae = {
    class:
      "inline-block mt-3 px-2 py-1 bg-gray-200 text-gray-600 text-xs rounded capitalize",
  },
  oe = { key: 2, class: "text-center py-16" },
  le = { key: 3, class: "text-center py-16 bg-gray-50 rounded-2xl" },
  ce = {
    __name: "Glossary",
    setup(_) {
      return C(this, null, function* () {
        let m,
          i,
          g = [];
        try {
          g =
            (([m, i] = T(() =>
              I(() => import("./glossary.generated-BbgRlcU_.js"), [])
            )),
            (m = yield m),
            i(),
            m).glossary || [];
        } catch (a) {
          g = [];
        }
        O({
          title: "Crypto & IPO Glossary | Learn Investment Terms | IPO Genie",
          description:
            "Master crypto and pre-IPO investing with our comprehensive glossary. Learn key terms like tokenomics, presale, vesting, and more. Your guide to understanding the investment landscape.",
          path: "/learn/",
        }),
          L([
            P(),
            G([
              { name: "Home", url: "/" },
              { name: "Learn", url: "/learn/" },
            ]),
            S(),
          ]);
        const y = [
            { label: "All", value: "all" },
            { label: "Blockchain", value: "blockchain" },
            { label: "DeFi", value: "defi" },
            { label: "Trading", value: "trading" },
            { label: "Tokenomics", value: "tokenomics" },
            { label: "IPO & Markets", value: "ipo-markets" },
            { label: "Investing", value: "investing" },
          ],
          d = w("all"),
          c = w(""),
          p = f(() => {
            let a = [...g];
            if (
              (d.value !== "all" &&
                (a = a.filter((e) => e.category === d.value)),
              c.value.trim())
            ) {
              const e = c.value.toLowerCase();
              a = a.filter(
                (n) =>
                  n.term.toLowerCase().includes(e) ||
                  n.shortDefinition.toLowerCase().includes(e)
              );
            }
            return a;
          }),
          r = f(() => {
            const a = {};
            return (
              p.value.forEach((e) => {
                const n = e.term[0].toUpperCase();
                a[n] || (a[n] = []), a[n].push(e);
              }),
              a
            );
          }),
          u = f(() => Object.keys(r.value).sort());
        return (a, e) => {
          const n = $("router-link");
          return (
            o(),
            l("main", j, [
              t("div", q, [
                t("nav", H, [
                  t("ol", U, [
                    t("li", null, [
                      D(
                        n,
                        { to: "/", class: "hover:text-black" },
                        {
                          default: B(() => [
                            ...(e[2] || (e[2] = [z("Home", -1)])),
                          ]),
                          _: 1,
                        }
                      ),
                    ]),
                    e[3] || (e[3] = t("li", { class: "mx-2" }, "/", -1)),
                    e[4] ||
                      (e[4] = t(
                        "li",
                        { class: "text-[#FF5B00]" },
                        "Learn",
                        -1
                      )),
                  ]),
                ]),
                e[7] ||
                  (e[7] = t(
                    "h1",
                    { class: "text-4xl md:text-5xl font-bold mb-4" },
                    " Crypto & IPO Glossary ",
                    -1
                  )),
                e[8] ||
                  (e[8] = t(
                    "p",
                    { class: "text-gray-600 text-lg mb-8 max-w-2xl" },
                    " Master the language of investing. From blockchain basics to advanced tokenomics, learn the terms you need to navigate the pre-IPO landscape. ",
                    -1
                  )),
                t("div", Q, [
                  N(
                    t(
                      "input",
                      {
                        "onUpdate:modelValue":
                          e[0] || (e[0] = (s) => (c.value = s)),
                        type: "text",
                        placeholder: "Search terms...",
                        class:
                          "flex-1 min-w-[200px] px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#FF5B00]",
                      },
                      null,
                      512
                    ),
                    [[V, c.value]]
                  ),
                  t("div", R, [
                    (o(),
                    l(
                      b,
                      null,
                      h(y, (s) =>
                        t(
                          "button",
                          {
                            key: s.value,
                            onClick: (x) => (d.value = s.value),
                            class: A([
                              "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                              d.value === s.value
                                ? "bg-[#FF5B00] text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200",
                            ]),
                          },
                          v(s.label),
                          11,
                          W
                        )
                      ),
                      64
                    )),
                  ]),
                ]),
                u.value.length
                  ? (o(),
                    l("div", X, [
                      (o(!0),
                      l(
                        b,
                        null,
                        h(
                          u.value,
                          (s) => (
                            o(),
                            l(
                              "a",
                              {
                                key: s,
                                href: `#letter-${s}`,
                                class:
                                  "w-8 h-8 flex items-center justify-center rounded bg-gray-100 hover:bg-[#FF5B00] hover:text-white transition-colors text-sm font-medium",
                              },
                              v(s),
                              9,
                              Y
                            )
                          )
                        ),
                        128
                      )),
                    ]))
                  : F("", !0),
                p.value.length
                  ? (o(),
                    l("div", J, [
                      (o(!0),
                      l(
                        b,
                        null,
                        h(
                          u.value,
                          (s) => (
                            o(),
                            l(
                              "section",
                              { key: s, id: `letter-${s}`, class: "mb-12" },
                              [
                                t("h2", Z, v(s), 1),
                                t("div", ee, [
                                  (o(!0),
                                  l(
                                    b,
                                    null,
                                    h(
                                      r.value[s],
                                      (x) => (
                                        o(),
                                        E(
                                          n,
                                          {
                                            key: x.slug,
                                            to: `/learn/${x.slug}/`,
                                            class:
                                              "group p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors border border-gray-200",
                                          },
                                          {
                                            default: B(() => {
                                              var k;
                                              return [
                                                t("h3", te, v(x.term), 1),
                                                t(
                                                  "p",
                                                  se,
                                                  v(x.shortDefinition),
                                                  1
                                                ),
                                                t(
                                                  "span",
                                                  ae,
                                                  v(
                                                    ((k = x.category) == null
                                                      ? void 0
                                                      : k.replace("-", " ")) ||
                                                      "General"
                                                  ),
                                                  1
                                                ),
                                              ];
                                            }),
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
                              ],
                              8,
                              K
                            )
                          )
                        ),
                        128
                      )),
                    ]))
                  : (o(),
                    l("div", oe, [
                      e[5] ||
                        (e[5] = t(
                          "p",
                          { class: "text-gray-500 text-lg mb-4" },
                          "No terms found matching your criteria.",
                          -1
                        )),
                      t(
                        "button",
                        {
                          onClick:
                            e[1] ||
                            (e[1] = (s) => {
                              (c.value = ""), (d.value = "all");
                            }),
                          class: "text-[#FF5B00] hover:underline",
                        },
                        " Clear filters "
                      ),
                    ])),
                M(g).length === 0
                  ? (o(),
                    l("div", le, [
                      ...(e[6] ||
                        (e[6] = [
                          t(
                            "h2",
                            { class: "text-2xl font-bold mb-4" },
                            "Glossary Coming Soon",
                            -1
                          ),
                          t(
                            "p",
                            { class: "text-gray-600 max-w-md mx-auto" },
                            " We're building a comprehensive glossary of crypto and IPO terms. Check back soon for detailed definitions and explanations. ",
                            -1
                          ),
                        ])),
                    ]))
                  : F("", !0),
              ]),
            ])
          );
        };
      });
    },
  };
export { ce as default };
