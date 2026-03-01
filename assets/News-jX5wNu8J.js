import {
  _ as S,
  b as g,
  a as E,
  c as M,
  u as P,
  d as F,
  g as H,
  e as $,
  f as j,
  s as z,
} from "./index-CkW8Cm0p.js";
import {
  r as x,
  x as I,
  y as A,
  h as u,
  d as r,
  e as s,
  l as _,
  f as i,
  A as h,
  m as L,
  a as O,
  j as b,
  q as T,
  F as f,
  z as B,
  G,
  t as U,
} from "./vue-Z9E3ejSf.js";
import "./gsap-BwUJxYA3.js";
const V = "/assets/HeroBg-DYhygSME.webp",
  D = "/assets/HeroBgMob-BUj6zSH7.webp",
  R = {
    class: "pt-40 base-x-p max-w-[2000px] mx-auto max-md:pt-28 max-sm:pt-24",
  },
  Y = {
    __name: "Hero",
    setup(v) {
      const l = x(!1),
        t = () => {
          l.value = window.innerWidth < 768;
        };
      I(() => {
        t(), window.addEventListener("resize", t);
      }),
        A(() => {
          window.removeEventListener("resize", t);
        });
      const n = u(() => (l.value ? D : V));
      return (p, c) => (
        s(),
        r("div", R, [
          _(S, {
            items: [{ name: "Home", to: "/" }, { name: "Blog" }],
            variant: "light",
          }),
          i(
            "div",
            {
              class:
                "flex justify-center items-center rounded-[40px] max-md:rounded-[20px] bg-cover bg-no-repeat bg-bottom h-[510px] w-full",
              style: L({ backgroundImage: `url(${n.value})` }),
            },
            [
              ...(c[0] ||
                (c[0] = [
                  i(
                    "h1",
                    {
                      class:
                        "title xl:text-[110px] text-[#FF5B00] max-w-[720px] text-center",
                    },
                    [
                      h(" The "),
                      i("span", { class: "sectitle" }, "latest"),
                      h(" from IPOGenie "),
                    ],
                    -1
                  ),
                ])),
            ],
            4
          ),
        ])
      );
    },
  },
  q = {
    class: "base-x-p mt-14 items-center gap-24 justify-center flex flex-col",
  },
  W = {
    class: "items-center gap-14 justify-center flex flex-col max-md:gap-10",
  },
  J = { class: "flex items-center w-full justify-start gap-2 flex-wrap" },
  K = ["onClick"],
  Q = {
    key: 0,
    class:
      "grid grid-cols-3 gap-x-8 gap-y-7 max-lg:grid-cols-2 max-md:flex max-md:flex-col justify-items-center",
  },
  X = { key: 1, class: "text-center py-12 text-gray-400" },
  m = "All Content",
  d = 6,
  Z = {
    __name: "NewsSection",
    setup(v) {
      const l = [
          "Educational Content",
          "News & Updates",
          "Market Insights",
          "Informational Guides",
          "Product Updates",
        ],
        t = x(m),
        n = x(d),
        p = u(() => {
          const o = Array.from(
              new Set(g.map((e) => e.category).filter(Boolean))
            ),
            a = [
              ...l.filter((e) => o.includes(e)),
              ...o
                .filter((e) => !l.includes(e))
                .sort((e, y) => e.localeCompare(y)),
            ];
          return [m, ...a];
        }),
        c = u(() =>
          [
            ...(t.value === m ? g : g.filter((a) => a.category === t.value)),
          ].sort((a, e) =>
            a.lowPriority && !e.lowPriority
              ? 1
              : !a.lowPriority && e.lowPriority
              ? -1
              : 0
          )
        ),
        w = u(() => c.value.slice(0, n.value)),
        C = u(() => n.value < c.value.length),
        k = () => {
          n.value += d;
        },
        N = (o) => {
          (t.value = o), (n.value = d);
        };
      return (
        O(
          p,
          (o) => {
            o.includes(t.value) || ((t.value = m), (n.value = d));
          },
          { immediate: !0 }
        ),
        (o, a) => (
          s(),
          r("div", q, [
            i("div", W, [
              i("div", J, [
                (s(!0),
                r(
                  f,
                  null,
                  B(
                    p.value,
                    (e) => (
                      s(),
                      r(
                        "div",
                        {
                          key: e,
                          class: G([
                            "px-3 py-4 cursor-pointer rounded-[20px] whitespace-nowrap bg-[#0F0E0E] max-md:text-sm max-md:px-2 max-md:py-3",
                            { "bg-[#FF5C01]": t.value === e },
                          ]),
                          onClick: (y) => N(e),
                        },
                        U(e),
                        11,
                        K
                      )
                    )
                  ),
                  128
                )),
              ]),
              w.value.length > 0
                ? (s(),
                  r("div", Q, [
                    (s(!0),
                    r(
                      f,
                      null,
                      B(
                        w.value,
                        (e) => (
                          s(),
                          b(
                            E,
                            {
                              key: e.id,
                              photo: e.thumbnailImage || e.mainImage,
                              title: e.name,
                              text: e.textPreview,
                              slug: e.slug,
                            },
                            null,
                            8,
                            ["photo", "title", "text", "slug"]
                          )
                        )
                      ),
                      128
                    )),
                  ]))
                : (s(),
                  r("div", X, [
                    ...(a[0] ||
                      (a[0] = [
                        i("p", null, "No blogs found in this category.", -1),
                      ])),
                  ])),
            ]),
            C.value
              ? (s(),
                b(M, {
                  key: 0,
                  text: "Load More",
                  "bg-color": "#16151A",
                  "arrow-color": "#000",
                  onClick: k,
                }))
              : T("", !0),
          ])
        )
      );
    },
  },
  ae = {
    __name: "News",
    setup(v) {
      return (
        P(z.blog),
        F([
          H(),
          $([
            { name: "Home", url: "/" },
            { name: "Blog", url: "/blog/" },
          ]),
          j(),
        ]),
        (l, t) => (s(), r(f, null, [_(Y), _(Z)], 64))
      );
    },
  };
export { ae as default };
