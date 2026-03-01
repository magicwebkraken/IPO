import {
  m as j,
  _ as O,
  c as A,
  w as X,
  x as J,
  y as Y,
  u as Q,
  d as Z,
  g as ee,
  e as te,
  s as se,
} from "./index-CkW8Cm0p.js";
import {
  d as o,
  e as a,
  f as e,
  j as G,
  q as f,
  F as g,
  z as S,
  A as B,
  t as l,
  u as r,
  l as v,
  r as I,
  h as y,
  x as L,
  y as D,
  a as ae,
  m as $,
  G as C,
  H as T,
  B as k,
  K as E,
} from "./vue-Z9E3ejSf.js";
import "./gsap-BwUJxYA3.js";
const N = "/assets/mecha_01-I42yahS2.webp",
  H = "/assets/mecha_02-CCDJAoA6.webp",
  P = "/assets/mecha_03-BWv6DI1H.webp",
  q = "/assets/mecha_05-BlsBVVlk.webp",
  U = "/assets/mecha_06-DYozg86f.webp",
  oe = {
    class:
      "mechanics-hero-section base-x-p flex items-center w-full flex-col mt-[200px] max-xl:mt-[180px] max-lg:mt-[120px] max-md:mt-28 overflow-x-hidden mb-[-6rem]",
  },
  ie = {
    class:
      "w-full max-w-[1520px] mx-auto max-md:hidden flex flex-col items-center",
  },
  le = {
    class:
      "flex flex-col mx-auto items-center text-center gap-6 max-md:gap-5 w-full",
  },
  ce = { class: "title text-black max-w-[900px]" },
  ne = { key: 0, class: "sectitle text-[#FF5B00]" },
  re = { key: 1 },
  de = { class: "flex flex-col gap-3" },
  me = { class: "max-w-[650px] text-black mx-auto description" },
  pe = { key: 0, class: "max-w-[865px] text-black mx-auto description" },
  he = { class: "w-full max-w-[1520px] mx-auto mt-14 grid gap-4 grid-cols-1" },
  xe = {
    class:
      "grid gap-4 w-full min-w-0 grid-cols-1 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]",
  },
  ue = {
    class:
      "mechanics-hero-card rounded-[30px] min-h-[280px] md:min-h-[360px] h-auto p-6 md:p-10 bg-white border border-gray-200/80 shadow-sm relative overflow-hidden flex flex-col",
  },
  fe = ["src"],
  be = {
    class:
      "mechanics-hero-card rounded-[30px] min-h-[280px] md:min-h-[360px] h-auto p-6 md:p-10 bg-black relative overflow-hidden flex flex-col border border-white/10",
  },
  ve = ["src"],
  ge = {
    class:
      "grid gap-4 w-full min-w-0 grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]",
  },
  we = {
    class:
      "mechanics-hero-card rounded-[30px] min-h-[280px] md:min-h-[360px] h-auto p-6 md:p-10 bg-[#FF5B00] flex flex-col relative overflow-hidden",
  },
  ke = ["src"],
  _e = {
    class:
      "mechanics-hero-card rounded-[30px] min-h-[280px] md:min-h-[360px] h-auto p-6 md:p-10 bg-white border border-gray-200/80 shadow-sm flex flex-col relative overflow-hidden",
  },
  ye = ["src"],
  $e = {
    class:
      "rounded-[30px] bg-black flex items-center justify-between gap-4 md:gap-6 min-w-0 w-full p-4 md:py-2 md:px-6",
  },
  Be = { class: "flex items-center gap-3 md:gap-4 flex-1 min-w-0" },
  Ie = { class: "flex items-center flex-shrink-0 row3-icons" },
  Se = { class: "relative z-[1] icon-wrap" },
  je = ["src"],
  Fe = { class: "relative z-[2] icon-wrap -ml-8 md:-ml-10" },
  Ce = ["src"],
  Pe = {
    class: "w-full px-4 md:hidden flex flex-col gap-4 max-w-[1400px] mx-auto",
  },
  Me = { class: "flex flex-col mx-auto items-center text-center gap-3" },
  Ae = { class: "title text-black max-w-[900px]" },
  Le = { key: 0, class: "sectitle text-[#FF5B00]" },
  De = { key: 1 },
  ze = { class: "max-w-[650px] text-black mx-auto description" },
  Ee = { key: 0, class: "max-w-[865px] text-black mx-auto description" },
  Te = {
    class:
      "mech-mobile-card rounded-[19px] p-6 bg-white border border-gray-200/80 shadow-sm relative overflow-hidden flex flex-col min-h-0",
  },
  We = ["src"],
  Re = {
    class:
      "mech-mobile-card rounded-[19px] p-6 bg-black relative overflow-hidden flex flex-col border border-white/10 min-h-0",
  },
  Oe = ["src"],
  Ge = {
    class:
      "mech-mobile-card rounded-[19px] p-6 bg-[#FF5B00] flex flex-col relative overflow-hidden",
  },
  Ne = ["src"],
  He = {
    class:
      "mech-mobile-card rounded-[19px] p-6 bg-white border border-gray-200/80 shadow-sm flex flex-col relative overflow-hidden",
  },
  qe = ["src"],
  Ue = {
    class:
      "mech-mobile-card mech-mobile-card-5 rounded-[19px] px-4 py-1 bg-black flex items-start border border-white/10",
  },
  Ve = { class: "flex flex-shrink-0 mech-mobile-coins" },
  Ke = { class: "relative z-[1] mech-mobile-coin" },
  Xe = ["src"],
  Je = { class: "relative z-[2] mech-mobile-coin -ml-6" },
  Ye = ["src"],
  Qe = { class: "flex justify-center w-full pt-2 pb-4" },
  Ze = {
    __name: "HerNew",
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
      return (m, t) => (
        a(),
        o("section", oe, [
          e("div", ie, [
            c.breadcrumbs && c.breadcrumbs.length
              ? (a(),
                G(
                  O,
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
              : f("", !0),
            e("div", le, [
              e("h1", ce, [
                (a(!0),
                o(
                  g,
                  null,
                  S(
                    c.heading,
                    (i, n) => (
                      a(),
                      o(
                        g,
                        { key: n },
                        [
                          i.type === "accent"
                            ? (a(), o("span", ne, l(i.text), 1))
                            : (a(), o("span", re, l(i.text), 1)),
                          B(" " + l(n < c.heading.length - 1 ? " " : ""), 1),
                        ],
                        64
                      )
                    )
                  ),
                  128
                )),
              ]),
              e("div", de, [
                e("p", me, l(c.description), 1),
                c.description2
                  ? (a(), o("p", pe, l(c.description2), 1))
                  : f("", !0),
              ]),
            ]),
            e("div", he, [
              e("div", xe, [
                e("div", ue, [
                  t[0] ||
                    (t[0] = e(
                      "div",
                      { class: "flex flex-col h-full max-w-full z-10" },
                      [
                        e(
                          "h2",
                          {
                            class:
                              "text-black font-extrabold text-lg lg:text-xl xl:text-2xl 2xl:text-[32px] leading-[80%] tracking-[-0.04em] mb-3 font-[Inter]",
                          },
                          "Secure Your $IPO"
                        ),
                        e(
                          "p",
                          {
                            class:
                              "text-black/90 text-base md:text-[18px] leading-[142%] tracking-[-0.02em] mb-6 font-normal font-[Poppins]",
                          },
                          "Join the presale phase to lock in the lowest entry price before the genie escapes the lamp."
                        ),
                      ],
                      -1
                    )),
                  e(
                    "img",
                    {
                      src: r(N),
                      alt: "",
                      class:
                        "absolute bottom-6 right-6 md:bottom-8 md:right-8 h-auto max-h-[50%] max-w-[30%] object-contain object-right object-bottom pointer-events-none",
                    },
                    null,
                    8,
                    fe
                  ),
                ]),
                e("div", be, [
                  t[1] ||
                    (t[1] = e(
                      "div",
                      { class: "flex flex-col h-full max-w-full z-10" },
                      [
                        e(
                          "h2",
                          {
                            class:
                              "text-white font-extrabold text-lg lg:text-xl xl:text-2xl 2xl:text-[32px] leading-[80%] tracking-[-0.04em] mb-3 font-[Inter]",
                          },
                          "Hyper-Staking"
                        ),
                        e(
                          "p",
                          {
                            class:
                              "text-white text-base md:text-[18px] leading-[142%] tracking-[-0.02em] mb-6 font-normal font-[Poppins]",
                          },
                          "Don't just hold. Stake throughout the presale period to compound your gains automatically."
                        ),
                      ],
                      -1
                    )),
                  e(
                    "img",
                    {
                      src: r(H),
                      alt: "",
                      class:
                        "absolute bottom-6 right-6 md:bottom-8 md:right-8 h-auto max-h-[50%] max-w-[30%] object-contain object-right object-bottom pointer-events-none",
                    },
                    null,
                    8,
                    ve
                  ),
                ]),
              ]),
              e("div", ge, [
                e("div", we, [
                  t[2] ||
                    (t[2] = e(
                      "h2",
                      {
                        class:
                          "text-white font-extrabold text-lg lg:text-xl xl:text-2xl 2xl:text-[32px] leading-[80%] tracking-[-0.04em] mb-3 font-[Inter]",
                      },
                      "20% Welcome Gift",
                      -1
                    )),
                  t[3] ||
                    (t[3] = e(
                      "p",
                      {
                        class:
                          "text-white text-base md:text-[18px] leading-[142%] tracking-[-0.02em] font-normal font-[Poppins]",
                      },
                      "Instantly credited upon your first acquisition during presale.",
                      -1
                    )),
                  e(
                    "img",
                    {
                      src: r(q),
                      alt: "",
                      class:
                        "absolute top-[7rem] md:top-[9rem] right-[-1rem] md:right-[-2rem] h-auto max-h-[70%] max-w-[80%] object-contain object-right object-bottom pointer-events-none",
                    },
                    null,
                    8,
                    ke
                  ),
                ]),
                e("div", _e, [
                  t[4] ||
                    (t[4] = e(
                      "h2",
                      {
                        class:
                          "text-black font-extrabold text-lg lg:text-xl xl:text-2xl 2xl:text-[32px] leading-[80%] tracking-[-0.04em] mb-3 font-[Inter]",
                      },
                      "Bank-Grade Safety",
                      -1
                    )),
                  t[5] ||
                    (t[5] = e(
                      "p",
                      {
                        class:
                          "text-black text-base md:text-[18px] leading-[142%] tracking-[-0.02em] font-normal font-[Poppins]",
                      },
                      "Advanced Web3 security safeguards with on-chain verification and trusted payment gateways.",
                      -1
                    )),
                  e(
                    "img",
                    {
                      src: r(U),
                      alt: "",
                      class:
                        "absolute top-[5rem] md:top-[7rem] right-2 h-auto max-h-[70%] max-w-[80%] object-contain object-right object-bottom pointer-events-none",
                    },
                    null,
                    8,
                    ye
                  ),
                ]),
              ]),
              e("div", $e, [
                e("div", Be, [
                  e("div", Ie, [
                    e("span", Se, [
                      e(
                        "img",
                        { src: r(P), alt: "", class: "mecha-icon" },
                        null,
                        8,
                        je
                      ),
                    ]),
                    e("span", Fe, [
                      e(
                        "img",
                        { src: r(P), alt: "", class: "mecha-icon" },
                        null,
                        8,
                        Ce
                      ),
                    ]),
                  ]),
                  t[6] ||
                    (t[6] = e(
                      "div",
                      { class: "flex flex-col gap-1 min-w-0" },
                      [
                        e(
                          "h2",
                          {
                            class:
                              "text-white font-extrabold text-sm lg:text-base xl:text-[18px] leading-[80%] tracking-[-0.04em] font-[Inter]",
                          },
                          "15% Referral Bonus"
                        ),
                        e(
                          "p",
                          {
                            class:
                              "text-white text-sm md:text-[18px] leading-[142%] tracking-[-0.02em] font-normal font-[Poppins]",
                          },
                          "Get rewarded with a 15% bonus for every successful referral that signs up and participates."
                        ),
                      ],
                      -1
                    )),
                ]),
                v(A, {
                  text: "Start Investing",
                  link: "https://app.uniswap.org/swap?chain=mainnet&inputCurrency=NATIVE&outputCurrency=0xComingSoon",
                  "open-in-new-tab": "",
                  "bg-color": "#FF5B00",
                  "text-color": "#fff",
                  class: "flex-shrink-0",
                }),
              ]),
            ]),
          ]),
          e("div", Pe, [
            c.breadcrumbs && c.breadcrumbs.length
              ? (a(),
                G(
                  O,
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
              : f("", !0),
            e("div", Me, [
              e("h1", Ae, [
                (a(!0),
                o(
                  g,
                  null,
                  S(
                    c.heading,
                    (i, n) => (
                      a(),
                      o(
                        g,
                        { key: n },
                        [
                          i.type === "accent"
                            ? (a(), o("span", Le, l(i.text), 1))
                            : (a(), o("span", De, l(i.text), 1)),
                          B(" " + l(n < c.heading.length - 1 ? " " : ""), 1),
                        ],
                        64
                      )
                    )
                  ),
                  128
                )),
              ]),
              e("p", ze, l(c.description), 1),
              c.description2
                ? (a(), o("p", Ee, l(c.description2), 1))
                : f("", !0),
            ]),
            e("div", Te, [
              t[7] ||
                (t[7] = e(
                  "div",
                  { class: "flex flex-col z-10 flex-1" },
                  [
                    e(
                      "h2",
                      { class: "mech-mobile-title-lg text-black mb-2" },
                      "Secure Your $IPO"
                    ),
                    e(
                      "p",
                      { class: "mech-mobile-desc text-black/90 mb-4" },
                      "Join the presale phase to lock in the lowest entry price before the genie escapes the lamp."
                    ),
                  ],
                  -1
                )),
              e(
                "img",
                {
                  src: r(N),
                  alt: "",
                  class:
                    "absolute bottom-4 right-4 h-36 w-auto max-w-[48%] object-contain object-right object-bottom pointer-events-none opacity-90",
                },
                null,
                8,
                We
              ),
            ]),
            e("div", Re, [
              t[8] ||
                (t[8] = e(
                  "div",
                  { class: "flex flex-col z-10 flex-1" },
                  [
                    e(
                      "h2",
                      { class: "mech-mobile-title text-white mb-2" },
                      "Hyper-Staking"
                    ),
                    e(
                      "p",
                      { class: "mech-mobile-desc text-white mb-4" },
                      "Don't just hold. Stake throughout the presale period to compound your gains automatically."
                    ),
                  ],
                  -1
                )),
              e(
                "img",
                {
                  src: r(H),
                  alt: "",
                  class:
                    "absolute bottom-4 right-4 h-36 w-auto max-w-[48%] object-contain object-right object-bottom pointer-events-none opacity-90",
                },
                null,
                8,
                Oe
              ),
            ]),
            e("div", Ge, [
              t[9] ||
                (t[9] = e(
                  "h2",
                  { class: "mech-mobile-title text-white mb-2 z-10" },
                  "20% Welcome Gift",
                  -1
                )),
              t[10] ||
                (t[10] = e(
                  "p",
                  { class: "mech-mobile-desc text-white z-10" },
                  "Instantly credited upon your first acquisition during presale.",
                  -1
                )),
              e(
                "img",
                {
                  src: r(q),
                  alt: "",
                  class:
                    "absolute -right-9 -bottom-7 right-[-1.5rem] h-52 w-auto max-w-[58%] object-contain object-right object-bottom pointer-events-none opacity-90",
                },
                null,
                8,
                Ne
              ),
            ]),
            e("div", He, [
              t[11] ||
                (t[11] = e(
                  "h2",
                  { class: "mech-mobile-title text-black mb-2 z-10" },
                  "Bank-Grade Safety",
                  -1
                )),
              t[12] ||
                (t[12] = e(
                  "p",
                  { class: "mech-mobile-desc text-black z-10" },
                  "Advanced Web3 security safeguards with on-chain verification and trusted payment gateways.",
                  -1
                )),
              e(
                "img",
                {
                  src: r(U),
                  alt: "",
                  class:
                    "absolute bottom-4 right-0 top-[7rem] h-44 w-auto max-w-[48%] object-contain object-right object-bottom pointer-events-none opacity-90",
                },
                null,
                8,
                qe
              ),
            ]),
            e("div", Ue, [
              e("div", Ve, [
                e("span", Ke, [
                  e(
                    "img",
                    { src: r(P), alt: "", class: "w-12 h-12 object-contain" },
                    null,
                    8,
                    Xe
                  ),
                ]),
                e("span", Je, [
                  e(
                    "img",
                    { src: r(P), alt: "", class: "w-12 h-12 object-contain" },
                    null,
                    8,
                    Ye
                  ),
                ]),
              ]),
              t[13] ||
                (t[13] = e(
                  "div",
                  { class: "flex flex-col flex-1 min-w-[85%]" },
                  [
                    e(
                      "h5",
                      { class: "mech-mobile-title-sm text-white" },
                      "15% Referral Bonus"
                    ),
                    e(
                      "p",
                      { class: "mech-mobile-desc-sm text-white" },
                      "Get rewarded with a 15% bonus for every successful referral that signs up and participates."
                    ),
                  ],
                  -1
                )),
            ]),
            e("div", Qe, [
              v(A, {
                text: "Start Investing",
                link: "https://app.uniswap.org/swap?chain=mainnet&inputCurrency=NATIVE&outputCurrency=0xComingSoon",
                "open-in-new-tab": "",
                "bg-color": "#FF5B00",
                "text-color": "#fff",
                "arrow-color": "#FF5B00",
                "bg-arrow": "#fff",
                class:
                  "mech-mobile-cta !w-full !max-w-[160px] !rounded-xl !min-h-[42px]",
              }),
            ]),
          ]),
        ])
      );
    },
  },
  et = j(Ze, [["__scopeId", "data-v-20b7f8bc"]]),
  tt = "/assets/mech_coin_01-Cez9UDWw.webp",
  st = "/assets/mech_coin_02-BS1KHXbQ.webp",
  at = "/assets/mech_coin_03-DHRBlXot.webp",
  ot = "/assets/mech_coin_04-jwcygO2X.webp",
  it = "/assets/mech_coin_05-BRccMK-e.webp",
  lt = "/assets/mech_coin_06-CYfa70Vn.webp",
  ct = "/assets/mech_cover_1-CJ6qOGrh.webp",
  nt = "/assets/mech_cover_2-C6E_iuqp.webp",
  rt = "/assets/mech_cover_3-C5FJCRA-.webp",
  dt = "/assets/mech_cover_4-DpXlyl27.webp",
  mt = "/assets/mech_cover_5-BcGNaxmt.webp",
  pt = "/assets/mech_cover_6-CfMCmgKn.webp",
  ht = {
    class:
      "flex items-center w-full flex-col mt-[200px] max-xl:mt-[180px] max-lg:mt-[120px] max-md:mt-18 mb-24 overflow-x-hidden max-md:overflow-visible",
  },
  xt = {
    class:
      "flex flex-col mx-auto items-center text-center gap-3 max-md:gap-5 base-x-p w-full max-w-[2200px]",
  },
  ut = { class: "title text-black whitespace-nowrap max-md:whitespace-normal" },
  ft = { key: 0, class: "sectitle text-[#FF5B00]" },
  bt = { key: 1 },
  vt = { class: "flex flex-col gap-3" },
  gt = { class: "max-w-[950px] text-black mx-auto description" },
  wt = { key: 0, class: "max-w-[865px] text-black mx-auto description" },
  kt = { class: "w-full mt-5 max-md:mt-14 mb-6" },
  _t = { class: "px-4 md:px-6" },
  yt = { class: "max-md:hidden w-full max-w-[1180px] mx-auto" },
  $t = {
    key: 0,
    class:
      "flex flex-col flex-1 items-center justify-start text-center gap-4 w-full",
  },
  Bt = { class: "stak-card-tier text-black uppercase" },
  It = { class: "stak-card-title text-black" },
  St = { class: "stak-card-desc text-black max-w-[200px]" },
  jt = { class: "flex-1 flex items-center justify-center min-h-0" },
  Ft = {
    key: 0,
    class: "stak-coin-wrap relative inline-flex items-center justify-center",
    style: { width: "10rem", height: "10rem" },
  },
  Ct = ["src", "alt"],
  Pt = ["src"],
  Mt = { class: "mt-auto flex flex-col items-center gap-1" },
  At = { class: "stak-card-price text-black" },
  Lt = { class: "stak-card-mult text-black" },
  Dt = { class: "stak-arrows flex justify-center items-center gap-3 mt-4" },
  zt = ["disabled"],
  Et = ["disabled"],
  Tt = { class: "md:hidden stak-mobile-stack overflow-visible" },
  Wt = { class: "stak-cards-stack" },
  Rt = {
    key: 0,
    class:
      "flex flex-col flex-1 items-center justify-start text-center gap-3 w-full",
  },
  Ot = { class: "stak-card-tier text-black uppercase" },
  Gt = { class: "stak-card-title text-black" },
  Nt = { class: "stak-card-desc text-black max-w-[200px]" },
  Ht = { class: "flex-1 flex items-center justify-center min-h-0" },
  qt = {
    key: 0,
    class: "stak-coin-wrap relative inline-flex items-center justify-center",
    style: { width: "8rem", height: "8rem" },
  },
  Ut = ["src", "alt"],
  Vt = ["src"],
  Kt = { class: "mt-auto flex flex-col items-center gap-1" },
  Xt = { class: "stak-card-price text-black" },
  Jt = { class: "stak-card-mult text-black" },
  Yt = {
    class:
      "flex items-center justify-center w-full min-w-0 max-w-[250px] md:max-w-none md:min-w-[280px] mx-auto base-x-p",
  },
  z = 6,
  Qt = 360,
  Zt = 300,
  es = 32,
  ts = 32,
  ss = {
    __name: "PresaleStakingMechanics",
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
      const m = [0, 1, 2, 3, 4, 5],
        t = [
          {
            tier: "TIER 1",
            title: "Starter",
            desc: "Entry-level access with essential features.",
            image: tt,
            cover: ct,
            price: "$150",
            multiplier: "3%",
          },
          {
            tier: "TIER 2",
            title: "Bronze",
            desc: "Entry level participation for casual investors.",
            image: st,
            cover: nt,
            price: "$400",
            multiplier: "5%",
          },
          {
            tier: "TIER 3",
            title: "Silver",
            desc: "Enhanced allocation and early access notifications.",
            image: at,
            cover: rt,
            price: "$1000",
            multiplier: "8%",
          },
          {
            tier: "TIER 4",
            title: "Gold",
            desc: "Priority access to institutional-grade deals.",
            image: ot,
            cover: dt,
            price: "$2,500",
            multiplier: "12%",
          },
          {
            tier: "TIER 5",
            title: "Platinum  ",
            desc: "Guaranteed top-tier allocations & premium benefits.",
            image: it,
            cover: mt,
            price: "$6,000",
            multiplier: "16%",
          },
          {
            tier: "TIER 6",
            title: "Diamond",
            desc: "Unlock the highest allocations and exclusive privileges.",
            image: lt,
            cover: pt,
            price: "$15,000",
            multiplier: "20%",
          },
        ],
        i = I(typeof window != "undefined" ? window.innerWidth : 1280),
        n = I(0),
        p = y(() => {
          const h = i.value;
          return h >= 1280 ? 3 : h >= 768 ? 2 : 1;
        }),
        _ = y(() => (i.value >= 768 ? Qt : Zt)),
        b = y(() => Math.ceil(z / p.value)),
        w = y(() => ({
          width: `${_.value}px`,
          minWidth: `${_.value}px`,
          flex: "0 0 auto",
        })),
        d = y(() =>
          p.value > 1
            ? {}
            : {
                width: `${_.value}px`,
                maxWidth: "100%",
                marginLeft: "auto",
                marginRight: "auto",
              }
        ),
        u = y(() => {
          const h = _.value,
            x = es,
            s = i.value >= 768 ? ts : 0,
            F = s + z * h + (z - 1) * x,
            V = p.value * (h + x),
            K = -n.value * V;
          return {
            width: `${F}px`,
            paddingLeft: `${s}px`,
            gap: `${x}px`,
            transform: `translateX(${K}px)`,
            transition: "transform 0.9s cubic-bezier(0.54, 1.56, 0.64, 1)",
          };
        });
      function W(h) {
        n.value = Math.max(0, Math.min(h, b.value - 1));
      }
      function R() {
        (i.value = window.innerWidth),
          n.value >= b.value && (n.value = Math.max(0, b.value - 1));
      }
      return (
        L(() => {
          typeof window != "undefined" && window.addEventListener("resize", R);
        }),
        D(() => {
          typeof window != "undefined" &&
            window.removeEventListener("resize", R);
        }),
        ae(b, (h) => {
          n.value >= h && (n.value = Math.max(0, h - 1));
        }),
        (h, x) => (
          a(),
          o("section", ht, [
            e("div", xt, [
              e("h1", ut, [
                (a(!0),
                o(
                  g,
                  null,
                  S(
                    c.heading,
                    (s, F) => (
                      a(),
                      o(
                        g,
                        { key: F },
                        [
                          s.type === "accent"
                            ? (a(), o("span", ft, l(s.text), 1))
                            : (a(), o("span", bt, l(s.text), 1)),
                          B(" " + l(F < c.heading.length - 1 ? " " : ""), 1),
                        ],
                        64
                      )
                    )
                  ),
                  128
                )),
              ]),
              e("div", vt, [
                e("p", gt, l(c.description), 1),
                c.description2
                  ? (a(), o("p", wt, l(c.description2), 1))
                  : f("", !0),
              ]),
            ]),
            e("div", kt, [
              e("div", _t, [
                e("div", yt, [
                  e(
                    "div",
                    {
                      class: "stak-slider-mask min-h-[560px] py-6 w-full",
                      style: $(d.value),
                    },
                    [
                      e(
                        "div",
                        { class: "stak-slider-track", style: $(u.value) },
                        [
                          (a(),
                          o(
                            g,
                            null,
                            S(m, (s) =>
                              e(
                                "div",
                                {
                                  key: "slider-" + s,
                                  class: C([
                                    "stak-slider-card rounded-[30px] min-h-[420px] md:min-h-[520px] p-10 border border-gray-200/80 relative overflow-hidden flex flex-col flex-shrink-0 bg-contain bg-center",
                                    [
                                      s % 2 === 1 ? "border-white/10" : "",
                                      s === 0 ? "stak-card-1-style" : "",
                                      s === 1 ? "stak-card-2-style" : "",
                                      s === 2 ? "stak-card-3-style" : "",
                                      s === 3 ? "stak-card-4-style" : "",
                                      s === 4 ? "stak-card-5-style" : "",
                                      s === 5 ? "stak-card-6-style" : "",
                                    ],
                                  ]),
                                  style: $(w.value),
                                },
                                [
                                  t[s]
                                    ? (a(),
                                      o("div", $t, [
                                        e("span", Bt, l(t[s].tier), 1),
                                        e("h3", It, l(t[s].title), 1),
                                        e("p", St, l(t[s].desc), 1),
                                        e("div", jt, [
                                          t[s].image
                                            ? (a(),
                                              o("div", Ft, [
                                                e(
                                                  "img",
                                                  {
                                                    src: t[s].image,
                                                    alt: t[s].title,
                                                    class:
                                                      "stak-coin-img object-contain absolute inset-0 w-full h-full",
                                                    style: {
                                                      width: "10rem",
                                                      height: "10rem",
                                                      "max-width": "10rem",
                                                      "max-height": "10rem",
                                                    },
                                                  },
                                                  null,
                                                  8,
                                                  Ct
                                                ),
                                                t[s].cover
                                                  ? (a(),
                                                    o(
                                                      "img",
                                                      {
                                                        key: 0,
                                                        src: t[s].cover,
                                                        alt: "",
                                                        "aria-hidden": "true",
                                                        class:
                                                          "object-contain absolute pointer-events-none mt-12",
                                                        style: $(
                                                          s === 5
                                                            ? {
                                                                width: "19rem",
                                                                height: "19rem",
                                                                maxWidth:
                                                                  "19rem",
                                                                maxHeight:
                                                                  "19rem",
                                                                left: "50%",
                                                                top: "55%",
                                                                transform:
                                                                  "translate(-50%, -50%)",
                                                              }
                                                            : {
                                                                width: "10rem",
                                                                height: "10rem",
                                                                maxWidth:
                                                                  "10rem",
                                                                maxHeight:
                                                                  "10rem",
                                                                left: 0,
                                                                top: 0,
                                                              }
                                                        ),
                                                      },
                                                      null,
                                                      12,
                                                      Pt
                                                    ))
                                                  : f("", !0),
                                              ]))
                                            : f("", !0),
                                        ]),
                                        e("div", Mt, [
                                          e("span", At, l(t[s].price), 1),
                                          e(
                                            "span",
                                            Lt,
                                            "Reward Multiplier: " +
                                              l(t[s].multiplier),
                                            1
                                          ),
                                        ]),
                                      ]))
                                    : f("", !0),
                                ],
                                6
                              )
                            ),
                            64
                          )),
                        ],
                        4
                      ),
                    ],
                    4
                  ),
                  e("div", Dt, [
                    e(
                      "button",
                      {
                        type: "button",
                        "aria-label": "Previous slide",
                        class: C([
                          "stak-arrow-btn rounded-[14px] w-12 h-12 flex items-center justify-center flex-shrink-0 shadow-sm transition-colors duration-200",
                          n.value === 0
                            ? "stak-arrow-btn--inactive bg-white text-black"
                            : "stak-arrow-btn--active bg-[#FF5B00] text-white",
                        ]),
                        disabled: n.value === 0,
                        onClick: x[0] || (x[0] = (s) => W(n.value - 1)),
                      },
                      [
                        ...(x[2] ||
                          (x[2] = [
                            e(
                              "svg",
                              {
                                class: "w-5 h-5 flex-shrink-0",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                "stroke-width": "2.5",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              },
                              [e("path", { d: "M15 18l-6-6 6-6" })],
                              -1
                            ),
                          ])),
                      ],
                      10,
                      zt
                    ),
                    e(
                      "button",
                      {
                        type: "button",
                        "aria-label": "Next slide",
                        class: C([
                          "stak-arrow-btn rounded-[14px] w-12 h-12 flex items-center justify-center flex-shrink-0 shadow-sm transition-colors duration-200",
                          n.value >= b.value - 1
                            ? "stak-arrow-btn--inactive bg-white text-black"
                            : "stak-arrow-btn--active bg-[#FF5B00] text-white",
                        ]),
                        disabled: n.value >= b.value - 1,
                        onClick: x[1] || (x[1] = (s) => W(n.value + 1)),
                      },
                      [
                        ...(x[3] ||
                          (x[3] = [
                            e(
                              "svg",
                              {
                                class: "w-5 h-5 flex-shrink-0",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                "stroke-width": "2.5",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              },
                              [e("path", { d: "M9 18l6-6-6-6" })],
                              -1
                            ),
                          ])),
                      ],
                      10,
                      Et
                    ),
                  ]),
                ]),
                e("div", Tt, [
                  e("div", Wt, [
                    (a(),
                    o(
                      g,
                      null,
                      S(m, (s) =>
                        e(
                          "div",
                          {
                            key: "stack-" + s,
                            class: C([
                              "stak-stack-card stak-slider-card rounded-[30px] min-h-[320px] p-6 border border-gray-200/80 relative overflow-hidden flex flex-col bg-contain bg-center",
                              [
                                s % 2 === 1 ? "border-white/10" : "",
                                s === 0 ? "stak-card-1-style" : "",
                                s === 1 ? "stak-card-2-style" : "",
                                s === 2 ? "stak-card-3-style" : "",
                                s === 3 ? "stak-card-4-style" : "",
                                s === 4 ? "stak-card-5-style" : "",
                                s === 5 ? "stak-card-6-style" : "",
                              ],
                            ]),
                          },
                          [
                            t[s]
                              ? (a(),
                                o("div", Rt, [
                                  e("span", Ot, l(t[s].tier), 1),
                                  e("h3", Gt, l(t[s].title), 1),
                                  e("p", Nt, l(t[s].desc), 1),
                                  e("div", Ht, [
                                    t[s].image
                                      ? (a(),
                                        o("div", qt, [
                                          e(
                                            "img",
                                            {
                                              src: t[s].image,
                                              alt: t[s].title,
                                              class:
                                                "stak-coin-img object-contain absolute inset-0 w-full h-full",
                                              style: {
                                                width: "8rem",
                                                height: "8rem",
                                                "max-width": "8rem",
                                                "max-height": "8rem",
                                              },
                                            },
                                            null,
                                            8,
                                            Ut
                                          ),
                                          t[s].cover
                                            ? (a(),
                                              o(
                                                "img",
                                                {
                                                  key: 0,
                                                  src: t[s].cover,
                                                  alt: "",
                                                  "aria-hidden": "true",
                                                  class:
                                                    "object-contain absolute pointer-events-none mt-8",
                                                  style: $(
                                                    s === 5
                                                      ? {
                                                          width: "14rem",
                                                          height: "14rem",
                                                          maxWidth: "14rem",
                                                          maxHeight: "14rem",
                                                          left: "50%",
                                                          top: "55%",
                                                          transform:
                                                            "translate(-50%, -50%)",
                                                        }
                                                      : {
                                                          width: "8rem",
                                                          height: "8rem",
                                                          maxWidth: "8rem",
                                                          maxHeight: "8rem",
                                                          left: 0,
                                                          top: 0,
                                                        }
                                                  ),
                                                },
                                                null,
                                                12,
                                                Vt
                                              ))
                                            : f("", !0),
                                        ]))
                                      : f("", !0),
                                  ]),
                                  e("div", Kt, [
                                    e("span", Xt, l(t[s].price), 1),
                                    e(
                                      "span",
                                      Jt,
                                      "Reward Multiplier: " +
                                        l(t[s].multiplier),
                                      1
                                    ),
                                  ]),
                                ]))
                              : f("", !0),
                          ],
                          2
                        )
                      ),
                      64
                    )),
                  ]),
                ]),
              ]),
            ]),
            e("div", Yt, [
              v(A, {
                text: "Stake Now",
                "arrow-color": "#FF5B00",
                "bg-color": "#FF5B00",
                "bg-arrow": "#fff",
                "border-color": "#FF5B00",
                "text-color": "#fff",
                class: "w-full md:!w-[280px] md:!min-w-[280px] gap-5 shrink-0",
                link: "https://app.uniswap.org/swap?chain=mainnet&inputCurrency=NATIVE&outputCurrency=0xComingSoon",
              }),
            ]),
          ])
        )
      );
    },
  },
  as = j(ss, [["__scopeId", "data-v-7dcb6c04"]]),
  os = "/assets/mech_ban-C461f-ca.png",
  is = "/assets/mech_ban_mb-B4d83QLD.png",
  ls = {
    class:
      "whatis-section w-full py-16 max-md:py-12 mt-[-3rem] max-md:mt-[-5rem]",
  },
  cs = { class: "flex flex-col gap-6 max-lg:gap-5 max-md:gap-3" },
  ns = { class: "whatis-title text-white max-md:whitespace-nowrap" },
  rs = { class: "whatis-title-accent text-[#FF5B00]" },
  ds = { class: "whatis-body text-white" },
  ms = {
    class:
      "whatis-quote-card rounded-[20px] max-md:rounded-[10px] border-2 border-[#FF5B00] bg-[#FF5B00]/[0.11] p-6 pl-10 max-md:py-3 max-md:px-4 max-md:pl-8 relative",
  },
  ps = { class: "whatis-quote text-white" },
  hs = { class: "whatis-body text-white" },
  xs = {
    __name: "WhatIsPresale",
    setup(c) {
      const m = I(!1),
        t = () => {
          m.value = window.innerWidth < 768;
        };
      L(() => {
        t(), window.addEventListener("resize", t);
      }),
        D(() => {
          window.removeEventListener("resize", t);
        });
      const i = {
        title: { main: "What Is a ", accent: "Presale?" },
        intro:
          "A presale is an early access phase (ICO, IDO & IEO) offering better entry terms and priority access compared to public launches.",
        quote:
          '"At IPO Genie, we focus on quality and data instead of speculation or short-term hype."',
        outro:
          "We evaluate fundamentals through professional networks and AI analysis to ensure our investors engage with $IPO crypto presales confidently.",
      };
      return (n, p) => (
        a(),
        o("section", ls, [
          e(
            "div",
            {
              class:
                "whatis-bg-box max-w-[1300px] mx-auto px-12 py-12 max-md:px-4 max-md:py-8 grid grid-cols-1 xl:grid-cols-[55%_45%] gap-12 max-lg:gap-10 max-md:gap-8 xl:gap-16 items-start rounded-[30px] max-md:rounded-[30px] max-md:w-[92%] max-md:min-h-[520px] max-md:py-10",
              style: $({
                backgroundImage: `url(${m.value ? r(is) : r(os)})`,
                backgroundColor: "black",
              }),
            },
            [
              e("div", cs, [
                e("h2", ns, [
                  B(l(i.title.main) + " ", 1),
                  e("span", rs, l(i.title.accent), 1),
                ]),
                e("p", ds, l(i.intro), 1),
                e("div", ms, [e("p", ps, l(i.quote), 1)]),
                e("p", hs, l(i.outro), 1),
              ]),
              p[0] ||
                (p[0] = e(
                  "div",
                  {
                    class:
                      "whatis-cards-wrap grid grid-cols-2 gap-6 max-lg:gap-5 max-md:gap-1 max-w-[1200px] mt-6 max-lg:mt-8 max-md:mt-[-2rem] max-lg:mx-auto",
                  },
                  null,
                  -1
                )),
            ],
            4
          ),
        ])
      );
    },
  },
  us = j(xs, [["__scopeId", "data-v-d0ec82d2"]]),
  fs = {
    class:
      "tokenomics-inner w-full max-w-[1400px] rounded-[40px] max-md:rounded-[20px] mx-auto flex flex-col bg-transparent pt-12 md:pt-12",
  },
  bs = {
    class:
      "tokenomics-content flex flex-row gap-8 md:gap-12 items-stretch min-h-[560px] w-[1300px] mx-auto max-md:w-full max-md:min-h-0",
  },
  vs = {
    class: "tokenomics-chart flex-1 flex items-center justify-start min-w-0",
  },
  gs = { class: "tokenomics-pie mt-32 max-md:mt-24" },
  ws = ["src"],
  ks = {
    class:
      "tokenomics-right flex flex-col justify-end min-w-[320px] max-w-[420px] max-md:min-w-0 max-md:w-full mb-[3rem] max-md:mb-8",
  },
  _s = { class: "tokenomics-supply-number mt-[-0.7rem]" },
  M = 452e7,
  ys = 60 * 1e3,
  $s = {
    __name: "Tokenomics",
    setup(c) {
      const m = I(M),
        t = I(null);
      let i = null,
        n = null,
        p = null;
      const _ = (w) => Math.floor(w).toLocaleString("en-US");
      function b() {
        if (i) return;
        m.value = 0;
        const d = M / (2e3 / 16);
        let u = 0;
        i = setInterval(() => {
          (u += d),
            u >= M
              ? ((m.value = M),
                clearInterval(i),
                (i = null),
                (n = setTimeout(() => {
                  b();
                }, ys)))
              : (m.value = Math.floor(u));
        }, 16);
      }
      return (
        L(() => {
          const w = t.value;
          w &&
            ((p = new IntersectionObserver(
              (d) => {
                const [u] = d;
                u != null && u.isIntersecting && (b(), p.disconnect());
              },
              { threshold: 0.2, rootMargin: "0px" }
            )),
            p.observe(w));
        }),
        D(() => {
          i && clearInterval(i), n && clearTimeout(n), p && p.disconnect();
        }),
        (w, d) => {
          const u = T("scroll-reveal");
          return (
            a(),
            o(
              "section",
              {
                ref_key: "supplySectionEl",
                ref: t,
                class:
                  "tokenomics-section w-full flex justify-center items-center mt-[-4rem] max-md:mt-[-4rem] px-6 md:px-8 py-16 max-md:py-12 mb-5 max-md:mb-[-4rem]",
              },
              [
                k(
                  (a(),
                  o("div", fs, [
                    d[3] ||
                      (d[3] = e(
                        "h2",
                        {
                          class:
                            "tokenomics-title font-inter text-white w-full flex justify-left text-left max-md:justify-center max-md:text-center whitespace-nowrap max-md:whitespace-normal max-md:mb-4 pl-6 md:pl-16 max-md:px-0",
                        },
                        [
                          e("span", { class: "text-[#000]" }, [
                            B("What "),
                            e(
                              "span",
                              { class: "text-[#FF5B00] font-semibold italic" },
                              "Powers "
                            ),
                            B(" Crypto Tokenomics"),
                          ]),
                        ],
                        -1
                      )),
                    d[4] ||
                      (d[4] = e(
                        "p",
                        {
                          class:
                            "tokenomics-subtitle text-black pl-6 md:pl-16 mb-4 max-md:mb-10 mt-2 max-md:mt-1",
                        },
                        " Strong structure matters more than early hype. We review presale tokenomics with a clear, investor-focused checklist examining: ",
                        -1
                      )),
                    e("div", bs, [
                      e("div", vs, [
                        e("div", gs, [
                          e(
                            "img",
                            {
                              src: r(X),
                              alt: "Tokenomics distribution - 50% Presale, 20% Liquidity & Exchange, 18% Community Rewards, 12% Team",
                              class: "tokenomics-image",
                              loading: "lazy",
                            },
                            null,
                            8,
                            ws
                          ),
                          d[0] ||
                            (d[0] = E(
                              '<span class="tokenomics-dot tokenomics-dot-presale" aria-hidden="true" data-v-afcd1ef0></span><span class="tokenomics-dot tokenomics-dot-liquidity" aria-hidden="true" data-v-afcd1ef0></span><span class="tokenomics-dot tokenomics-dot-community" aria-hidden="true" data-v-afcd1ef0></span><span class="tokenomics-dot tokenomics-dot-team" aria-hidden="true" data-v-afcd1ef0></span><svg class="tokenomics-line" viewBox="0 0 100 100" aria-hidden="true" data-v-afcd1ef0><path pathLength="1" style="--line-delay:0.4s;" d="M 36.2 7 L 30 -12 L 1 -12" data-v-afcd1ef0></path><path pathLength="1" style="--line-delay:0.7s;" d="M 92 20 L 84 -7 L 52.7 -7" data-v-afcd1ef0></path><path pathLength="1" style="--line-delay:1s;" d="M 98 60 L 110 44 L 146 44" data-v-afcd1ef0></path><path pathLength="1" style="--line-delay:1.3s;" d="M 64 75 L 95 92 L 132 92" data-v-afcd1ef0></path></svg><div class="tokenomics-label tokenomics-label-presale" style="--label-delay:0s;" data-v-afcd1ef0><div class="tokenomics-label-percent text-black" data-v-afcd1ef0>50%</div><div class="tokenomics-label-title text-black" data-v-afcd1ef0>Community</div><div class="tokenomics-label-sub text-black" data-v-afcd1ef0>Community First</div></div><div class="tokenomics-label tokenomics-label-liquidity" style="--label-delay:0.3s;" data-v-afcd1ef0><div class="tokenomics-label-percent text-black" data-v-afcd1ef0>20%</div><div class="tokenomics-label-title" data-v-afcd1ef0><span class="tokenomics-label-break text-black" data-v-afcd1ef0>Liquidity &amp;</span><span class="tokenomics-label-break text-black" data-v-afcd1ef0>Exchange</span></div><div class="tokenomics-label-sub" data-v-afcd1ef0>Smooth Trading</div></div><div class="tokenomics-label tokenomics-label-right tokenomics-label-community" style="--label-delay:0.6s;" data-v-afcd1ef0><div class="tokenomics-label-percent" data-v-afcd1ef0>18%</div><div class="tokenomics-label-title" data-v-afcd1ef0><span class="tokenomics-label-break text-black" data-v-afcd1ef0>Community</span><span class="tokenomics-label-break text-black" data-v-afcd1ef0>Rewards</span></div><div class="tokenomics-label-sub" data-v-afcd1ef0>Incentivize Growth</div></div><div class="tokenomics-label tokenomics-label-right tokenomics-label-team" style="--label-delay:0.9s;" data-v-afcd1ef0><div class="tokenomics-label-percent" data-v-afcd1ef0>12%</div><div class="tokenomics-label-title text-black" data-v-afcd1ef0>Team</div><div class="tokenomics-label-sub" data-v-afcd1ef0>2 year lock – vesting</div></div>',
                              9
                            )),
                        ]),
                      ]),
                      e("div", ks, [
                        d[1] ||
                          (d[1] = e(
                            "h3",
                            {
                              class: "tokenomics-right-heading text-black mt-1",
                            },
                            " Total Supply: ",
                            -1
                          )),
                        e("div", _s, l(_(m.value)), 1),
                        d[2] ||
                          (d[2] = E(
                            '<ul class="tokenomics-checklist flex flex-col gap-4 mt-6 md:mt-8 list-none p-0 m-0 text-left items-start w-full" data-v-afcd1ef0><li class="tokenomics-checklist-item flex gap-3 items-start" data-v-afcd1ef0><span class="tokenomics-check-icon flex-shrink-0 mt-0.5" aria-hidden="true" data-v-afcd1ef0><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-afcd1ef0><circle cx="12" cy="12" r="12" fill="#FF5B00" data-v-afcd1ef0></circle><path d="M7 12l3 3 7-7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-afcd1ef0></path></svg></span><div data-v-afcd1ef0><div class="tokenomics-checklist-title text-black" data-v-afcd1ef0>Supply Limits &amp; Allocation Strategy</div><div class="tokenomics-checklist-desc text-black mt-0.5" data-v-afcd1ef0>Deciding long-term demand and stability.</div></div></li><li class="tokenomics-checklist-item flex gap-3 items-start" data-v-afcd1ef0><span class="tokenomics-check-icon flex-shrink-0 mt-0.5" aria-hidden="true" data-v-afcd1ef0><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-afcd1ef0><circle cx="12" cy="12" r="12" fill="#FF5B00" data-v-afcd1ef0></circle><path d="M7 12l3 3 7-7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-afcd1ef0></path></svg></span><div data-v-afcd1ef0><div class="tokenomics-checklist-title text-black" data-v-afcd1ef0>Vesting Schedules</div><div class="tokenomics-checklist-desc text-black mt-0.5" data-v-afcd1ef0>Controlled releases to support sustainable growth.</div></div></li><li class="tokenomics-checklist-item flex gap-3 items-start" data-v-afcd1ef0><span class="tokenomics-check-icon flex-shrink-0 mt-0.5" aria-hidden="true" data-v-afcd1ef0><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-afcd1ef0><circle cx="12" cy="12" r="12" fill="#FF5B00" data-v-afcd1ef0></circle><path d="M7 12l3 3 7-7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-afcd1ef0></path></svg></span><div data-v-afcd1ef0><div class="tokenomics-checklist-title text-black" data-v-afcd1ef0>Real Utility Ecosystem</div><div class="tokenomics-checklist-desc text-black mt-0.5" data-v-afcd1ef0>Where value is generated beyond speculation.</div></div></li></ul>',
                            1
                          )),
                      ]),
                    ]),
                  ])),
                  [[u, { animation: "fade-up-blur" }]]
                ),
              ],
              512
            )
          );
        }
      );
    },
  },
  Bs = j($s, [["__scopeId", "data-v-afcd1ef0"]]),
  Is = {
    class: "bottom-banner base-x-p mt-[-4rem] max-md:mt-8 max-md:mt-10 mb-5",
  },
  Ss = { class: "bottom-banner-inner" },
  js = ["src"],
  Fs = { class: "bottom-banner-content" },
  Cs = {
    __name: "BottomBanner",
    setup(c) {
      const m = I(!1),
        t = () => {
          m.value = window.innerWidth < 768;
        };
      return (
        L(() => {
          t(), window.addEventListener("resize", t);
        }),
        D(() => {
          window.removeEventListener("resize", t);
        }),
        (i, n) => {
          const p = T("scroll-reveal");
          return (
            a(),
            o("section", Is, [
              e("div", Ss, [
                e(
                  "img",
                  {
                    src: m.value ? r(J) : r(Y),
                    alt: "",
                    class: "bottom-banner-bg",
                    loading: "lazy",
                    "aria-hidden": "true",
                  },
                  null,
                  8,
                  js
                ),
                k(
                  (a(),
                  o("div", Fs, [
                    n[0] ||
                      (n[0] = E(
                        '<h2 class="bottom-banner-title" data-v-491afe8a><span class="block" data-v-491afe8a>Unlock</span><span class="block" data-v-491afe8a>Institutional-Grade</span><span class="whitespace-nowrap" data-v-491afe8a>Deals for <span class="text-[#FF5B00] font-semibold italic" data-v-491afe8a>Just $10</span></span></h2>',
                        1
                      )),
                    v(A, {
                      text: "Unlock the Next Unicorn",
                      link: "https://app.uniswap.org/swap?chain=mainnet&inputCurrency=NATIVE&outputCurrency=0xComingSoon",
                      "bg-color": "#FF5B00",
                      "text-color": "#fff",
                      "border-color": "#FF5B00",
                      "bg-arrow": "#fff",
                      "arrow-color": "#FF5B00",
                      class: "bottom-banner-cta !w-full !max-w-[280px]",
                    }),
                  ])),
                  [[p, { animation: "fade-up-blur" }]]
                ),
              ]),
            ])
          );
        }
      );
    },
  },
  Ps = j(Cs, [["__scopeId", "data-v-491afe8a"]]),
  Ds = {
    __name: "Mechanics",
    setup(c) {
      return (
        Q(se.presaleGuide),
        Z([
          ee(),
          te([
            { name: "Home", url: "/" },
            { name: "Presale Guide", url: "/presaleguide/" },
          ]),
        ]),
        (m, t) => {
          const i = T("scroll-reveal");
          return (
            a(),
            o(
              g,
              null,
              [
                k(
                  (a(),
                  o("div", null, [
                    v(et, {
                      "text-btn": "Buy $IPO Now",
                      heading: [
                        { text: "Guide to", type: "default" },
                        { text: "$IPO Presale", type: "accent" },
                      ],
                      breadcrumbs: [
                        { name: "Home", to: "/" },
                        { name: "Presale Guide" },
                      ],
                      description:
                        "Acquire $IPO tokens at floor prices. Stake instantly. Unlock the power of automated Web3 rewards.",
                    }),
                  ])),
                  [[i, { animation: "fade-up-blur" }]]
                ),
                k(
                  (a(),
                  o("div", null, [
                    v(as, {
                      "text-btn": "Buy $IPO Now",
                      heading: [
                        { text: "Presale", type: "default" },
                        { text: "Staking ", type: "accent" },
                        { text: "Mechanics", type: "default" },
                      ],
                      description:
                        "Lock $IPO tokens to unlock rewards, priority access, and platform benefits without rigid 7-10 year lockups.",
                    }),
                  ])),
                  [[i, { animation: "fade-up-blur" }]]
                ),
                k((a(), o("div", null, [v(us)])), [
                  [i, { animation: "fade-up-blur", delay: 100 }],
                ]),
                k((a(), o("div", null, [v(Bs)])), [
                  [i, { animation: "fade-up-blur", delay: 100 }],
                ]),
                k((a(), o("div", null, [v(Ps)])), [
                  [i, { animation: "fade-up-blur", delay: 100 }],
                ]),
              ],
              64
            )
          );
        }
      );
    },
  };
export { Ds as default };
