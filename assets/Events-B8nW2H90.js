import {
  _ as v,
  c as d,
  u as g,
  d as f,
  g as b,
  e as h,
  K as y,
  s as E,
  n as k,
} from "./index-CkW8Cm0p.js";
import {
  d as l,
  e as a,
  l as n,
  f as e,
  A as _,
  r as w,
  h as $,
  q as B,
  F as i,
  z as p,
  G as C,
  t as F,
  j as N,
} from "./vue-Z9E3ejSf.js";
import { g as S, E as I } from "./events-BeUnrYL-.js";
import "./gsap-BwUJxYA3.js";
const O = {
    class:
      "flex items-center max-w-[2055px] mx-auto flex-col base-x-p mt-[200px] max-xl:mt-[180px] max-lg:mt-[120px] max-md:mt-28",
  },
  P = {
    class: "flex flex-col mx-auto items-center text-center gap-8 max-md:gap-5",
  },
  V = { class: "flex items-center gap-3" },
  z = {
    __name: "Hero",
    setup(m) {
      return (o, t) => (
        a(),
        l("section", O, [
          n(v, {
            items: [{ name: "Home", to: "/" }, { name: "Events" }],
            variant: "light",
            class: "w-full",
          }),
          e("div", P, [
            t[0] ||
              (t[0] = e(
                "h1",
                { class: "title text-black max-w-[800px]" },
                [e("span", { class: "sectitle" }, "Upcoming"), _(" Events ")],
                -1
              )),
            t[1] ||
              (t[1] = e(
                "p",
                { class: "max-w-[865px] text-black mx-auto description" },
                " Join IPO Genie at exclusive crypto events, conferences, and community meetups around the world. ",
                -1
              )),
            e("div", V, [
              n(d, { text: "Buy $IPO Now", link: "app.uniswap.org/swap?chain=mainnet&inputCurrency=NATIVE&outputCurrency=0xComingSoon" }),
              n(d, {
                text: "Join Community",
                link: "https://t.me/IPO_GENIE",
                "bg-color": "transparent",
                "text-color": "#000",
                "border-color": "#000",
                "arrow-color": "#fff",
                "bg-arrow": "#FF5B00",
                class: "!w-max gap-5",
              }),
            ]),
          ]),
        ])
      );
    },
  },
  A = { class: "base-x-p py-20 max-md:py-12" },
  G = { class: "max-w-[1400px] mx-auto" },
  H = {
    class:
      "flex items-center justify-between mb-12 max-md:flex-col max-md:items-start max-md:gap-4",
  },
  L = { class: "flex gap-2" },
  j = ["onClick"],
  J = { class: "grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1" },
  U = { key: 0, class: "text-center py-16" },
  q = {
    __name: "EventsList",
    setup(m) {
      const o = S(),
        t = [
          { label: "All", value: "all" },
          { label: "Live", value: "live" },
          { label: "Upcoming", value: "upcoming" },
          { label: "Past", value: "past" },
        ],
        r = w("all"),
        u = $(() =>
          r.value === "all" ? o : o.filter((x) => x.status === r.value)
        );
      return (x, c) => (
        a(),
        l("section", A, [
          e("div", G, [
            e("div", H, [
              c[0] ||
                (c[0] = e(
                  "h2",
                  { class: "text-4xl font-bold text-black max-md:text-2xl" },
                  [e("span", { class: "sectitle" }, "Featured"), _(" Events ")],
                  -1
                )),
              e("div", L, [
                (a(),
                l(
                  i,
                  null,
                  p(t, (s) =>
                    e(
                      "button",
                      {
                        key: s.value,
                        onClick: (D) => (r.value = s.value),
                        class: C([
                          "px-5 py-2 rounded-full text-sm font-medium transition-all duration-200",
                          r.value === s.value
                            ? "bg-[#FF5B00] text-white"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200",
                        ]),
                      },
                      F(s.label),
                      11,
                      j
                    )
                  ),
                  64
                )),
              ]),
            ]),
            e("div", J, [
              (a(!0),
              l(
                i,
                null,
                p(
                  u.value,
                  (s) => (
                    a(), N(I, { key: s.id, event: s }, null, 8, ["event"])
                  )
                ),
                128
              )),
            ]),
            u.value.length === 0
              ? (a(),
                l("div", U, [
                  ...(c[1] ||
                    (c[1] = [
                      e(
                        "p",
                        { class: "text-gray-500 text-lg" },
                        "No events found for this category.",
                        -1
                      ),
                    ])),
                ]))
              : B("", !0),
          ]),
        ])
      );
    },
  },
  R = {
    __name: "Events",
    setup(m) {
      return (
        g(E.events),
        f([
          b(),
          h([
            { name: "Home", url: "/" },
            { name: "Events", url: "/events" },
          ]),
          y(),
        ]),
        (o, t) => (a(), l(i, null, [n(z), n(q), n(k)], 64))
      );
    },
  };
export { R as default };
