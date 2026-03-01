import {
  m as b,
  u as w,
  d as f,
  g as y,
  e as F,
  Q as _,
} from "./index-CkW8Cm0p.js";
import { w as h, e as B, _ as M } from "./WhitepaperCTA-skeGE0c1.js";
import {
  p as g,
  d as a,
  e as o,
  f as e,
  F as u,
  z as p,
  j as m,
  k as v,
  t as d,
  u as x,
  K as l,
  l as n,
  A as I,
} from "./vue-Z9E3ejSf.js";
import "./gsap-BwUJxYA3.js";
const P = { class: "table-of-contents" },
  $ = { class: "mb-12" },
  O = { class: "grid md:grid-cols-2 lg:grid-cols-3 gap-4" },
  V = { class: "flex items-start gap-4" },
  j = {
    class:
      "w-10 h-10 rounded-lg bg-[#FF5B00]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF5B00]/20 transition-colors",
  },
  C = {
    key: 0,
    class: "w-5 h-5 text-[#FF5B00]",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
  },
  z = {
    key: 1,
    class: "w-5 h-5 text-[#FF5B00]",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
  },
  S = {
    key: 2,
    class: "w-5 h-5 text-[#FF5B00]",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
  },
  H = {
    key: 3,
    class: "w-5 h-5 text-[#FF5B00]",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
  },
  W = {
    key: 4,
    class: "w-5 h-5 text-[#FF5B00]",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
  },
  T = {
    key: 5,
    class: "w-5 h-5 text-[#FF5B00]",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
  },
  A = {
    key: 6,
    class: "w-5 h-5 text-[#FF5B00]",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
  },
  G = {
    key: 7,
    class: "w-5 h-5 text-[#FF5B00]",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
  },
  N = {
    key: 8,
    class: "w-5 h-5 text-[#FF5B00]",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
  },
  R = {
    key: 9,
    class: "w-5 h-5 text-[#FF5B00]",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
  },
  Y = { class: "text-sm text-gray-500 mb-1" },
  D = {
    class:
      "font-bold text-lg text-gray-900 group-hover:text-[#FF5B00] transition-colors mb-2",
  },
  E = { class: "text-gray-600 text-sm line-clamp-2" },
  L = { class: "grid md:grid-cols-2 lg:grid-cols-4 gap-4" },
  J = { class: "text-xs text-gray-500 mb-1" },
  q = {
    class:
      "font-semibold text-gray-900 group-hover:text-[#FF5B00] transition-colors",
  },
  K = {
    __name: "TableOfContents",
    setup(k) {
      const i = {
        "private-market-problem": "lock",
        "market-opportunity": "trending-up",
        "why-tokenized-securities": "clock",
        "ipo-genie-vs-competitors": "scale",
        "ipo-token-utility": "coin",
        "blockchain-compliance": "shield",
        "revenue-model": "dollar",
        "platform-comparison": "chart",
        team: "users",
      };
      return (r, t) => {
        const c = g("router-link");
        return (
          o(),
          a("section", P, [
            e("div", $, [
              t[10] ||
                (t[10] = e(
                  "h2",
                  { class: "text-2xl font-bold mb-6" },
                  "Whitepaper Sections",
                  -1
                )),
              e("div", O, [
                (o(!0),
                a(
                  u,
                  null,
                  p(
                    x(h),
                    (s) => (
                      o(),
                      m(
                        c,
                        {
                          key: s.slug,
                          to: `/${s.slug}/`,
                          class:
                            "group p-6 bg-white border border-gray-200 rounded-xl hover:border-[#FF5B00] hover:shadow-lg transition-all",
                        },
                        {
                          default: v(() => [
                            e("div", V, [
                              e("div", j, [
                                i[s.slug] === "lock"
                                  ? (o(),
                                    a("svg", C, [
                                      ...(t[0] ||
                                        (t[0] = [
                                          e(
                                            "path",
                                            {
                                              "stroke-linecap": "round",
                                              "stroke-linejoin": "round",
                                              "stroke-width": "2",
                                              d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
                                            },
                                            null,
                                            -1
                                          ),
                                        ])),
                                    ]))
                                  : i[s.slug] === "trending-up"
                                  ? (o(),
                                    a("svg", z, [
                                      ...(t[1] ||
                                        (t[1] = [
                                          e(
                                            "path",
                                            {
                                              "stroke-linecap": "round",
                                              "stroke-linejoin": "round",
                                              "stroke-width": "2",
                                              d: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
                                            },
                                            null,
                                            -1
                                          ),
                                        ])),
                                    ]))
                                  : i[s.slug] === "clock"
                                  ? (o(),
                                    a("svg", S, [
                                      ...(t[2] ||
                                        (t[2] = [
                                          e(
                                            "path",
                                            {
                                              "stroke-linecap": "round",
                                              "stroke-linejoin": "round",
                                              "stroke-width": "2",
                                              d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                                            },
                                            null,
                                            -1
                                          ),
                                        ])),
                                    ]))
                                  : i[s.slug] === "scale"
                                  ? (o(),
                                    a("svg", H, [
                                      ...(t[3] ||
                                        (t[3] = [
                                          e(
                                            "path",
                                            {
                                              "stroke-linecap": "round",
                                              "stroke-linejoin": "round",
                                              "stroke-width": "2",
                                              d: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
                                            },
                                            null,
                                            -1
                                          ),
                                        ])),
                                    ]))
                                  : i[s.slug] === "coin"
                                  ? (o(),
                                    a("svg", W, [
                                      ...(t[4] ||
                                        (t[4] = [
                                          e(
                                            "path",
                                            {
                                              "stroke-linecap": "round",
                                              "stroke-linejoin": "round",
                                              "stroke-width": "2",
                                              d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                                            },
                                            null,
                                            -1
                                          ),
                                        ])),
                                    ]))
                                  : i[s.slug] === "shield"
                                  ? (o(),
                                    a("svg", T, [
                                      ...(t[5] ||
                                        (t[5] = [
                                          e(
                                            "path",
                                            {
                                              "stroke-linecap": "round",
                                              "stroke-linejoin": "round",
                                              "stroke-width": "2",
                                              d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                                            },
                                            null,
                                            -1
                                          ),
                                        ])),
                                    ]))
                                  : i[s.slug] === "dollar"
                                  ? (o(),
                                    a("svg", A, [
                                      ...(t[6] ||
                                        (t[6] = [
                                          e(
                                            "path",
                                            {
                                              "stroke-linecap": "round",
                                              "stroke-linejoin": "round",
                                              "stroke-width": "2",
                                              d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1",
                                            },
                                            null,
                                            -1
                                          ),
                                        ])),
                                    ]))
                                  : i[s.slug] === "chart"
                                  ? (o(),
                                    a("svg", G, [
                                      ...(t[7] ||
                                        (t[7] = [
                                          e(
                                            "path",
                                            {
                                              "stroke-linecap": "round",
                                              "stroke-linejoin": "round",
                                              "stroke-width": "2",
                                              d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                                            },
                                            null,
                                            -1
                                          ),
                                        ])),
                                    ]))
                                  : i[s.slug] === "users"
                                  ? (o(),
                                    a("svg", N, [
                                      ...(t[8] ||
                                        (t[8] = [
                                          e(
                                            "path",
                                            {
                                              "stroke-linecap": "round",
                                              "stroke-linejoin": "round",
                                              "stroke-width": "2",
                                              d: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
                                            },
                                            null,
                                            -1
                                          ),
                                        ])),
                                    ]))
                                  : (o(),
                                    a("svg", R, [
                                      ...(t[9] ||
                                        (t[9] = [
                                          e(
                                            "path",
                                            {
                                              "stroke-linecap": "round",
                                              "stroke-linejoin": "round",
                                              "stroke-width": "2",
                                              d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                                            },
                                            null,
                                            -1
                                          ),
                                        ])),
                                    ])),
                              ]),
                              e("div", null, [
                                e("div", Y, "Section " + d(s.order), 1),
                                e("h3", D, d(s.title), 1),
                                e("p", E, d(s.subtitle), 1),
                              ]),
                            ]),
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
            ]),
            e("div", null, [
              t[11] ||
                (t[11] = e(
                  "h2",
                  { class: "text-2xl font-bold mb-6" },
                  "Additional Resources",
                  -1
                )),
              t[12] ||
                (t[12] = e(
                  "p",
                  { class: "text-gray-600 mb-4" },
                  "These existing pages cover related whitepaper content:",
                  -1
                )),
              e("div", L, [
                (o(!0),
                a(
                  u,
                  null,
                  p(
                    x(B),
                    (s) => (
                      o(),
                      m(
                        c,
                        {
                          key: s.slug,
                          to: `/${s.slug}/`,
                          class:
                            "group p-4 bg-gray-50 border border-gray-200 rounded-xl hover:border-[#FF5B00] hover:bg-white transition-all",
                        },
                        {
                          default: v(() => [
                            e("div", J, "§" + d(s.wpSection), 1),
                            e("h3", q, d(s.title), 1),
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
            ]),
          ])
        );
      };
    },
  },
  Q = { class: "whitepaper-hub min-h-screen bg-white text-black" },
  U = {
    class:
      "relative bg-gradient-to-b from-[#0a0a0a] to-[#1a1a2e] text-white py-24 md:py-32",
  },
  X = { class: "max-w-6xl mx-auto px-6" },
  Z = { "aria-label": "Breadcrumb", class: "mb-8" },
  ee = { class: "flex items-center gap-2 text-sm text-gray-400" },
  te = { class: "py-16 md:py-24" },
  se = { class: "max-w-6xl mx-auto px-6" },
  oe = { class: "py-16" },
  ae = { class: "max-w-4xl mx-auto px-6" },
  re = {
    __name: "Whitepaper",
    setup(k) {
      return (
        w({
          title: "IPO Genie Whitepaper | Pre-IPO Investment Platform Guide",
          description:
            "Complete guide to IPO Genie: how we democratize private market access through blockchain, AI, and institutional-grade deal flow. Read our full whitepaper.",
          path: "/whitepaper/",
        }),
        f([
          y(),
          F([
            { name: "Home", url: "/" },
            { name: "Whitepaper", url: "/whitepaper/" },
          ]),
          _(h),
        ]),
        (i, r) => {
          const t = g("router-link");
          return (
            o(),
            a("main", Q, [
              e("section", U, [
                e("div", X, [
                  e("nav", Z, [
                    e("ol", ee, [
                      e("li", null, [
                        n(
                          t,
                          {
                            to: "/",
                            class: "hover:text-white transition-colors",
                          },
                          {
                            default: v(() => [
                              ...(r[0] || (r[0] = [I("Home", -1)])),
                            ]),
                            _: 1,
                          }
                        ),
                      ]),
                      r[1] || (r[1] = e("li", { class: "mx-2" }, "/", -1)),
                      r[2] ||
                        (r[2] = e(
                          "li",
                          { class: "text-[#FF5B00]" },
                          "Whitepaper",
                          -1
                        )),
                    ]),
                  ]),
                  r[3] ||
                    (r[3] = l(
                      '<div class="max-w-3xl" data-v-766d3e30><div class="inline-block px-4 py-1 bg-[#FF5B00]/20 text-[#FF5B00] rounded-full text-sm font-medium mb-6" data-v-766d3e30> Version 1.0 | January 2025 </div><h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" data-v-766d3e30> IPO Genie <span class="text-[#FF5B00]" data-v-766d3e30>Whitepaper</span></h1><p class="text-xl md:text-2xl text-gray-300 mb-8" data-v-766d3e30> The Bridge Between Blockchain and Private Markets </p><p class="text-lg text-gray-400 mb-8 max-w-2xl" data-v-766d3e30> Your Gateway to Institutional-Grade Venture Deals. Learn how IPO Genie democratizes access to pre-IPO opportunities through AI-powered analysis and blockchain technology. </p><div class="flex flex-wrap gap-4" data-v-766d3e30><a href="app.uniswap.org/swap?chain=mainnet&inputCurrency=NATIVE&outputCurrency=0xComingSoon" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-6 py-3 bg-[#FF5B00] text-white rounded-xl font-semibold hover:bg-[#FF5B00]/90 transition-colors" data-v-766d3e30> Buy $IPO Now <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-766d3e30><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" data-v-766d3e30></path></svg></a><a href="https://whitepaper.ipogenie.ai" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-colors" data-v-766d3e30> Full Version <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-766d3e30><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" data-v-766d3e30></path></svg></a></div></div>',
                      1
                    )),
                ]),
              ]),
              r[4] ||
                (r[4] = l(
                  '<section class="py-12 bg-gray-50 border-b border-gray-200" data-v-766d3e30><div class="max-w-6xl mx-auto px-6" data-v-766d3e30><div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center" data-v-766d3e30><div data-v-766d3e30><div class="text-3xl md:text-4xl font-bold text-[#FF5B00]" data-v-766d3e30>$3T+</div><div class="text-gray-600 text-sm mt-1" data-v-766d3e30>Private Market Size</div></div><div data-v-766d3e30><div class="text-3xl md:text-4xl font-bold text-[#FF5B00]" data-v-766d3e30>&lt;1%</div><div class="text-gray-600 text-sm mt-1" data-v-766d3e30>Retail Access</div></div><div data-v-766d3e30><div class="text-3xl md:text-4xl font-bold text-[#FF5B00]" data-v-766d3e30>90%</div><div class="text-gray-600 text-sm mt-1" data-v-766d3e30>Pre-IPO Value Creation</div></div><div data-v-766d3e30><div class="text-3xl md:text-4xl font-bold text-[#FF5B00]" data-v-766d3e30>$10T</div><div class="text-gray-600 text-sm mt-1" data-v-766d3e30>STO Market by 2030</div></div></div></div></section>',
                  1
                )),
              e("section", te, [e("div", se, [n(K)])]),
              r[5] ||
                (r[5] = l(
                  '<section class="py-16 bg-gray-50" data-v-766d3e30><div class="max-w-4xl mx-auto px-6" data-v-766d3e30><h2 class="text-3xl font-bold mb-8" data-v-766d3e30>Executive Summary</h2><div class="prose prose-lg max-w-none" data-v-766d3e30><p data-v-766d3e30> IPO Genie isn&#39;t just another fund; it&#39;s your front-row seat to private market deals that used to be locked behind closed doors. We&#39;ve teamed up with top-tier hedge funds, venture firms, and private networks to bring you verified early-stage investment opportunities - without gatekeepers, endless paperwork, or guesswork. </p><p data-v-766d3e30> Holding <strong data-v-766d3e30>$IPO</strong> gives you seamless access to high-growth startups and pre-IPO companies. These aren&#39;t random picks - every deal is vetted and structured by seasoned experts with experience at Silicon Valley&#39;s top firms. </p><p data-v-766d3e30><strong data-v-766d3e30>Our mission is simple:</strong> make institutional-grade venture investing accessible, transparent, and liquid for everyone. </p></div><div class="mt-8 p-6 bg-white rounded-xl border border-gray-200" data-v-766d3e30><h3 class="font-bold text-lg mb-4" data-v-766d3e30>How It Works</h3><div class="grid md:grid-cols-3 gap-6" data-v-766d3e30><div class="text-center" data-v-766d3e30><div class="w-12 h-12 bg-[#FF5B00] text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-3" data-v-766d3e30>1</div><div class="font-semibold" data-v-766d3e30>Buy $IPO</div><div class="text-sm text-gray-600" data-v-766d3e30>Your key to vetted startups and pre-IPO deals</div></div><div class="text-center" data-v-766d3e30><div class="w-12 h-12 bg-[#FF5B00] text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-3" data-v-766d3e30>2</div><div class="font-semibold" data-v-766d3e30>You Choose</div><div class="text-sm text-gray-600" data-v-766d3e30>Select opportunities backed by our diligence</div></div><div class="text-center" data-v-766d3e30><div class="w-12 h-12 bg-[#FF5B00] text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-3" data-v-766d3e30>3</div><div class="font-semibold" data-v-766d3e30>You Sell</div><div class="text-sm text-gray-600" data-v-766d3e30>Exit anytime, seamlessly and transparently</div></div></div></div></div></section>',
                  1
                )),
              e("section", oe, [
                e("div", ae, [
                  n(M, {
                    title: "Ready to Access Private Markets?",
                    description:
                      "Join the presale and secure your $IPO tokens at the lowest price. Don't miss your chance to be early.",
                    buttonText: "Buy $IPO Now",
                    buttonLink: "app.uniswap.org/swap?chain=mainnet&inputCurrency=NATIVE&outputCurrency=0xComingSoon",
                  }),
                ]),
              ]),
            ])
          );
        }
      );
    },
  },
  ve = b(re, [["__scopeId", "data-v-766d3e30"]]);
export { ve as default };
