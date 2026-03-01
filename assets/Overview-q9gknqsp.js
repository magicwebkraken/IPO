import {
  _ as k,
  m as B,
  c as h,
  u as I,
  d as F,
  g as C,
  e as $,
  s as O,
  D as j,
} from "./index-CkW8Cm0p.js";
import {
  d as a,
  e as t,
  j as x,
  q as i,
  f as e,
  F as p,
  z as _,
  A as P,
  t as o,
  m as d,
  u as m,
  G as u,
  W as g,
  B as b,
  l as y,
  H as A,
} from "./vue-Z9E3ejSf.js";
import "./gsap-BwUJxYA3.js";
const S = {
    class:
      "flex items-center max-w-[2055px] mx-auto flex-col base-x-p mt-[200px] max-xl:mt-[180px] max-lg:mt-[120px] max-md:mt-28",
  },
  D = {
    class: "flex flex-col mx-auto items-center text-center gap-8 max-md:gap-5",
  },
  M = { class: "title text-black max-w-[700px] md:max-w-[960px]" },
  z = { key: 0, class: "sectitle text-[#FF5B00]" },
  G = { key: 1 },
  N = { class: "flex flex-col gap-3" },
  L = { class: "max-w-[865px] text-black mx-auto description" },
  T = { key: 0, class: "max-w-[865px] text-black mx-auto description" },
  q = {
    __name: "HeroSection",
    props: {
      breadcrumbs: { type: Array, default: null },
      heading: {
        type: Array,
        default: () => [
          { text: "AI Powered", type: "accent" },
          { text: "Deal Discovery", type: "default" },
        ],
      },
      description: {
        type: String,
        default:
          "Smart investing tools for crypto powered by AI. Our AI presale analysis scans private markets, validates project signals, detects red flags, and scores opportunities - so you can invest with clarity, not hype.",
      },
      description2: { type: String },
      textBtn: { type: String, default: "Buy $IPO Now" },
      secBtn: { type: Boolean, default: !1 },
    },
    setup(c) {
      return (v, r) => (
        t(),
        a("section", S, [
          c.breadcrumbs && c.breadcrumbs.length
            ? (t(),
              x(
                k,
                {
                  key: 0,
                  items: c.breadcrumbs,
                  variant: "light",
                  class: "w-full",
                },
                null,
                8,
                ["items"]
              ))
            : i("", !0),
          e("div", D, [
            e("h1", M, [
              (t(!0),
              a(
                p,
                null,
                _(
                  c.heading,
                  (l, f) => (
                    t(),
                    a(
                      p,
                      { key: f },
                      [
                        l.type === "accent"
                          ? (t(), a("span", z, o(l.text), 1))
                          : (t(), a("span", G, o(l.text), 1)),
                        P(" " + o(f < c.heading.length - 1 ? " " : ""), 1),
                      ],
                      64
                    )
                  )
                ),
                128
              )),
            ]),
            e("div", N, [
              e("p", L, o(c.description), 1),
              c.description2
                ? (t(), a("p", T, o(c.description2), 1))
                : i("", !0),
            ]),
          ]),
        ])
      );
    },
  },
  H = "/assets/over_01-D4s_1oSq.webp",
  w = "/assets/over_02-DHKprGox.webp",
  V = "/assets/over_02_mb-DFMDmtWq.webp",
  E = "/assets/over_03-D8hNZ5I4.webp",
  K = "/assets/over_03_mb-C4fQBA2N.png",
  W = "/assets/over_04-DDTK_2t4.webp",
  Y = "/assets/over_05-B_XdLhPt.webp",
  Q = "/assets/over_06-BPlczjnm.webp",
  R = "/assets/over_06_mb-xA997TFj.png",
  U = {
    class: "over-card base-x-p max-w-[1600px] mx-auto mt-16 max-md:mt-10 mb-5",
  },
  X = { class: "grid grid-cols-2 gap-4 max-md:grid-cols-1" },
  Z = { class: "over-card__title text-2xl max-md:text-xl" },
  J = { key: 0, class: "over-card__text mt-3 opacity-90" },
  ee = {
    class:
      "over-card__item col-span-2 max-md:col-span-1 relative rounded-[20px] overflow-hidden min-h-[320px] max-md:min-h-[512px]",
  },
  te = {
    class:
      "relative z-10 p-6 text-white min-h-[320px] max-md:min-h-[512px] flex flex-col justify-between",
  },
  ae = { class: "max-w-[480px] max-md:max-w-full" },
  re = { class: "over-card__title text-2xl max-md:text-xl" },
  se = { key: 0, class: "over-card__text mt-3 opacity-90" },
  oe = { key: 1, class: "over-card__text mt-2 opacity-90" },
  ne = { class: "mt-6 max-md:flex max-md:justify-end over-card__row4-btn" },
  ie = { class: "over-card__title text-2xl max-md:text-xl" },
  le = { key: 0, class: "over-card__text mt-3 opacity-90" },
  ce = { key: 1, class: "over-card__text mt-6 opacity-90" },
  de = { key: 0, class: "over-card__text mt-8 opacity-90" },
  ue = { class: "mt-6 flex justify-end flex-shrink-0 over-card__row4-btn" },
  me = {
    class:
      "over-card__item col-span-2 max-md:col-span-1 relative rounded-[20px] overflow-hidden min-h-[320px] max-md:min-h-[512px]",
  },
  pe = { class: "max-w-[670px] max-md:max-w-full" },
  xe = { class: "over-card__title text-2xl max-md:text-xl" },
  ve = { key: 0, class: "over-card__text mt-3 opacity-90" },
  he = { key: 1, class: "over-card__text mt-2 opacity-90" },
  ge = { class: "mt-6 max-md:mt-6 over-card__row4-btn" },
  fe = {
    __name: "OverCard",
    props: {
      row1Cards: {
        type: Array,
        default: () => [
          {
            title: "AI-Powered Insight",
            text: "AI-Powered Deal Discovery is at the core of the IPO Genie web3 solution, transforming how private market opportunities are surfaced and understood. Our platform analyzes market signals, project data, and on-chain activity to support consistent deal scoring across early-stage and pre-IPO opportunities.",
            text2:
              "Instead of relying on speculation, users gain structured insights built from real-time intelligence and verified data sources.",
            link: "/ai-powered/",
            darkBg: !0,
          },
          {
            title: "Fund-as-a-Service (FaaS)",
            text: "IPO Genie’s Fund-as-a-Service (FaaS) is a white-labeled crypto solution that helps DAOs, angel syndicates, and accelerators launch a compliant investment vehicle fast. Built in KYC and AML, accreditation checks, and jurisdiction-specific onboarding handle the hard parts, while smart contracts automate allocations, capital calls, and distributions.",
            text2:
              "Managers and investors get real-time dashboards and export-ready reporting for clear visibility, plus optional on-chain monitoring signals like whale tracking to stay aware of major wallet activity. You keep your brand, we provide the infrastructure. ",
            link: "/faas/",
            darkBg: !1,
          },
        ],
      },
      row2Card: {
        type: Object,
        default: () => ({
          title: "Index Fund",
          text: "IPO Genie Index Funds turn private-market access into a simple, diversified blockchain solution. Each fund token represents a curated basket of high-growth startup opportunities, similar to an ETF concept but built for the pre IPO world. Portfolios can rebalance automatically and remain tradable anytime through IPO native liquidity pools, so users are not stuck in long lockups. For investors coming from a crypto presale mindset, Index Funds offer one-click exposure to multiple vetted themes, with selection supported by AI scoring and community governance.",
          text2: "",
          link: "/index-funds/",
        }),
      },
      row3Cards: {
        type: Array,
        default: () => [
          {
            title: "Behavior Analytics",
            text: "IPO Genie Behavior Analytics transforms staking crypto into an active, data-driven system, not just passive rewards. Using real-time on-chain signals and AI, our blockchain solution builds a dynamic Reputation Score based on governance activity, deal contributions, community participation, and long-term holding.",
            text2:
              "That score unlocks better staking multipliers and platform benefits, helping serious users stand out during a crypto presale cycle and beyond. As tokenized assets expand, Behavior Analysis adds structure to participation, rewarding actions that strengthen the ecosystem while keeping everything transparent on chain.",
            link: "/behavior/",
            darkBg: !1,
          },
          {
            title: "Private Marketplace",
            text: "IPO Genie's private marketplace is a community-powered deal pipeline built as a blockchain solution for sourcing private opportunities at scale. Scouts, operators, analysts, and founders stake $IPO to submit vetted startup deals, showing real skin in the game. AI pre-screening supports faster deal scoring, while the community validates submissions through reputation-based voting and staking filters.",
            text2:
              "Top opportunities move to Venture Council oversight for consistent standards. For users exploring a crypto presale mindset, the Private Marketplace adds a second layer of access by turning discovery into a transparent process where contributors, validators, and early participants can all earn through aligned incentives.",
            link: "/marketplace/",
            darkBg: !0,
          },
        ],
      },
      row4Card: {
        type: Object,
        default: () => ({
          title: "Investment Insurance",
          text: "IPO Genie Insurance adds practical downside protection to high-risk private deals, including select opportunities accessed through a crypto presale journey. Our Crypto insurance is built around IPO backed insurance pools, with milestone protection that can activate if founders abandon a project, key commitments are missed, or a verified rug pull occurs. Claims are reviewed through governance oversight, with on-chain signals and whale tracking helping confirm unusual wallet behavior or sudden liquidity events. The result is a clearer risk framework that turns uncertainty into rules you can understand before you commit capital.",
          text2: "",
          link: "/insurance/",
          darkBg: !1,
        }),
      },
    },
    setup(c) {
      const v = [H, w, W, Y],
        r = c;
      return (l, f) => (
        t(),
        a("section", U, [
          e("div", X, [
            (t(!0),
            a(
              p,
              null,
              _(
                r.row1Cards,
                (s, n) => (
                  t(),
                  a(
                    "div",
                    {
                      key: "r1-" + n,
                      class:
                        "over-card__item relative rounded-[20px] overflow-hidden min-h-[160px]",
                    },
                    [
                      n === 0
                        ? (t(),
                          a(
                            "div",
                            {
                              key: 0,
                              class:
                                "absolute inset-0 rounded-[20px] bg-cover bg-center",
                              style: d({ backgroundImage: `url(${v[n]})` }),
                              "aria-hidden": "true",
                            },
                            null,
                            4
                          ))
                        : (t(),
                          a(
                            p,
                            { key: 1 },
                            [
                              e(
                                "div",
                                {
                                  class:
                                    "absolute inset-0 rounded-[20px] bg-cover bg-center max-md:hidden",
                                  style: d({ backgroundImage: `url(${m(w)})` }),
                                  "aria-hidden": "true",
                                },
                                null,
                                4
                              ),
                              e(
                                "div",
                                {
                                  class:
                                    "absolute inset-0 rounded-[20px] bg-cover bg-center hidden max-md:block",
                                  style: d({ backgroundImage: `url(${m(V)})` }),
                                  "aria-hidden": "true",
                                },
                                null,
                                4
                              ),
                            ],
                            64
                          )),
                      e(
                        "div",
                        {
                          class: u([
                            "relative z-10 p-6 min-h-[560px] flex flex-col justify-between",
                            s.darkBg ? "text-white" : "text-black",
                          ]),
                        },
                        [
                          g(l.$slots, "row1", { card: s, index: n }, () => [
                            e("div", null, [
                              e("h3", Z, o(s.title), 1),
                              s.text
                                ? (t(), a("p", J, o(s.text), 1))
                                : i("", !0),
                              s.text2
                                ? (t(),
                                  a(
                                    "p",
                                    {
                                      key: 1,
                                      class: u([
                                        "over-card__text mt-6 opacity-90",
                                        n === 1 ? "max-md:max-w-[260px]" : "",
                                      ]),
                                    },
                                    o(s.text2),
                                    3
                                  ))
                                : i("", !0),
                            ]),
                            e(
                              "div",
                              {
                                class: u([
                                  "mt-6 over-card__row4-btn",
                                  n === 0 ? "flex justify-end" : "",
                                  n === 1
                                    ? "max-md:flex max-md:justify-end"
                                    : "",
                                ]),
                              },
                              [
                                s.link
                                  ? (t(),
                                    x(
                                      h,
                                      {
                                        key: 0,
                                        text: "Learn More",
                                        to: s.link,
                                        "arrow-color": "#FF5B00",
                                        "bg-color": "#FF5B00",
                                        "bg-arrow": "#fff",
                                        "border-color": "#FF5B00",
                                        "text-color": "#fff",
                                        class: "!w-max gap-10",
                                      },
                                      null,
                                      8,
                                      ["to"]
                                    ))
                                  : i("", !0),
                              ],
                              2
                            ),
                          ]),
                        ],
                        2
                      ),
                    ]
                  )
                )
              ),
              128
            )),
            e("div", ee, [
              e(
                "div",
                {
                  class:
                    "absolute inset-0 rounded-[20px] bg-cover bg-center max-md:hidden",
                  style: d({ backgroundImage: `url(${m(E)})` }),
                  "aria-hidden": "true",
                },
                null,
                4
              ),
              e(
                "div",
                {
                  class:
                    "absolute inset-0 rounded-[20px] bg-cover bg-center hidden max-md:block",
                  style: d({ backgroundImage: `url(${m(K)})` }),
                  "aria-hidden": "true",
                },
                null,
                4
              ),
              e("div", te, [
                g(l.$slots, "row2", { card: r.row2Card, index: 0 }, () => [
                  e("div", ae, [
                    e("h3", re, o(r.row2Card.title), 1),
                    r.row2Card.text
                      ? (t(), a("p", se, o(r.row2Card.text), 1))
                      : i("", !0),
                    r.row2Card.text2
                      ? (t(), a("p", oe, o(r.row2Card.text2), 1))
                      : i("", !0),
                  ]),
                  e("div", ne, [
                    r.row2Card.link
                      ? (t(),
                        x(
                          h,
                          {
                            key: 0,
                            text: "Learn More",
                            to: r.row2Card.link,
                            "arrow-color": "#FF5B00",
                            "bg-color": "#FF5B00",
                            "bg-arrow": "#fff",
                            "border-color": "#FF5B00",
                            class: "!w-max gap-10",
                          },
                          null,
                          8,
                          ["to"]
                        ))
                      : i("", !0),
                  ]),
                ]),
              ]),
            ]),
            (t(!0),
            a(
              p,
              null,
              _(
                r.row3Cards,
                (s, n) => (
                  t(),
                  a(
                    "div",
                    {
                      key: "r3-" + n,
                      class:
                        "over-card__item relative rounded-[20px] overflow-hidden min-h-[560px]",
                    },
                    [
                      e(
                        "div",
                        {
                          class:
                            "absolute inset-0 rounded-[20px] bg-cover bg-center",
                          style: d({ backgroundImage: `url(${v[2 + n]})` }),
                          "aria-hidden": "true",
                        },
                        null,
                        4
                      ),
                      e(
                        "div",
                        {
                          class: u([
                            "relative z-10 p-6 min-h-[560px] flex flex-col justify-between",
                            s.darkBg ? "text-white" : "text-black",
                          ]),
                        },
                        [
                          g(l.$slots, "row3", { card: s, index: n }, () => [
                            e(
                              "div",
                              {
                                class: u([
                                  n === 1
                                    ? "flex flex-col justify-between flex-1 min-h-0"
                                    : "",
                                ]),
                              },
                              [
                                e(
                                  "div",
                                  { class: u([n === 0 ? "mb-16" : ""]) },
                                  [
                                    e("h3", ie, o(s.title), 1),
                                    s.text
                                      ? (t(), a("p", le, o(s.text), 1))
                                      : i("", !0),
                                    s.text2 && n !== 1
                                      ? (t(), a("p", ce, o(s.text2), 1))
                                      : i("", !0),
                                  ],
                                  2
                                ),
                                s.text2 && n === 1
                                  ? (t(), a("p", de, o(s.text2), 1))
                                  : i("", !0),
                              ],
                              2
                            ),
                            e("div", ue, [
                              s.link
                                ? (t(),
                                  x(
                                    h,
                                    {
                                      key: 0,
                                      text: "Learn More",
                                      to: s.link,
                                      "arrow-color": "#FF5B00",
                                      "bg-color": "#FF5B00",
                                      "bg-arrow": "#fff",
                                      "border-color": "#FF5B00",
                                      "text-color": "#fff",
                                      class: "!w-max gap-10",
                                    },
                                    null,
                                    8,
                                    ["to"]
                                  ))
                                : i("", !0),
                            ]),
                          ]),
                        ],
                        2
                      ),
                    ]
                  )
                )
              ),
              128
            )),
            e("div", me, [
              e(
                "div",
                {
                  class:
                    "absolute inset-0 rounded-[20px] bg-cover bg-center max-md:hidden",
                  style: d({ backgroundImage: `url(${m(Q)})` }),
                  "aria-hidden": "true",
                },
                null,
                4
              ),
              e(
                "div",
                {
                  class:
                    "over-card__row4-mobile-bg absolute inset-0 rounded-[20px] bg-cover bg-center hidden max-md:block",
                  style: d({ backgroundImage: `url(${m(R)})` }),
                  "aria-hidden": "true",
                },
                null,
                4
              ),
              e(
                "div",
                {
                  class: u([
                    "relative z-10 p-6 min-h-[320px] max-md:min-h-0 flex flex-col justify-between max-md:justify-start",
                    r.row4Card.darkBg ? "text-white" : "text-black",
                  ]),
                },
                [
                  g(l.$slots, "row4", { card: r.row4Card, index: 0 }, () => [
                    e("div", pe, [
                      e("h3", xe, o(r.row4Card.title), 1),
                      r.row4Card.text
                        ? (t(), a("p", ve, o(r.row4Card.text), 1))
                        : i("", !0),
                      r.row4Card.text2
                        ? (t(), a("p", he, o(r.row4Card.text2), 1))
                        : i("", !0),
                    ]),
                    e("div", ge, [
                      r.row4Card.link
                        ? (t(),
                          x(
                            h,
                            {
                              key: 0,
                              text: "Learn More",
                              to: r.row4Card.link,
                              "arrow-color": "#FF5B00",
                              "bg-color": "#FF5B00",
                              "bg-arrow": "#fff",
                              "border-color": "#FF5B00",
                              "text-color": "#fff",
                              class: "!w-max gap-10",
                            },
                            null,
                            8,
                            ["to"]
                          ))
                        : i("", !0),
                    ]),
                  ]),
                ],
                2
              ),
            ]),
          ]),
        ])
      );
    },
  },
  be = B(fe, [["__scopeId", "data-v-27658836"]]),
  ke = {
    __name: "Overview",
    setup(c) {
      return (
        I(O.overview),
        F([
          C(),
          $([
            { name: "Home", url: "/" },
            { name: "Solutions", url: "/solutions/overview/" },
            { name: "Overview", url: "/solutions/overview/" },
          ]),
        ]),
        (v, r) => {
          const l = A("scroll-reveal");
          return (
            t(),
            a(
              p,
              null,
              [
                b(
                  (t(),
                  a("div", null, [
                    y(q, {
                      "text-btn": "Buy $IPO Now",
                      heading: [
                        { text: "Institutional", type: "default" },
                        { text: "Private", type: "accent" },
                        { text: "Market Infrastructure.", type: "default" },
                      ],
                      breadcrumbs: [
                        { name: "Home", to: "/" },
                        { name: "Solutions", to: "/solutions/overview/" },
                        { name: "Overview" },
                      ],
                      description:
                        "IPO Genie Solution unifies everything you need to access and manage private market opportunities on-chain. Discover deals with AI, use institutional-grade tools, and add smart risk protection in one place. Built for clarity, control, and flexible participation across every stage of the journey.",
                    }),
                  ])),
                  [[l, { animation: "fade-up-blur" }]]
                ),
                b((t(), a("div", null, [y(be)])), [
                  [l, { animation: "fade-up-blur", delay: 100 }],
                ]),
                b((t(), a("div", null, [y(j)])), [
                  [l, { animation: "fade-up-blur", delay: 100 }],
                ]),
              ],
              64
            )
          );
        }
      );
    },
  };
export { ke as default };
