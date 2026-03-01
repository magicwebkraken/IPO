var A = (d, t, r) =>
  new Promise((a, i) => {
    var s = (l) => {
        try {
          f(r.next(l));
        } catch (p) {
          i(p);
        }
      },
      g = (l) => {
        try {
          f(r.throw(l));
        } catch (p) {
          i(p);
        }
      },
      f = (l) => (l.done ? a(l.value) : Promise.resolve(l.value).then(s, g));
    f((r = r.apply(d, t)).next());
  });
import { _ as $ } from "./RelatedArticles-DNHAktEt.js";
import {
  _ as V,
  a as G,
  b as N,
  c as O,
  d as q,
} from "./TechnologySection-rsTEpmtd.js";
import { M as z, _ as H } from "./Matters-Dk1h8fyO.js";
import {
  m as F,
  r as E,
  z as M,
  A as b,
  u as L,
  d as U,
  g as W,
  e as K,
  B as Q,
  v as R,
  k as Y,
  F as X,
  s as v,
} from "./index-CkW8Cm0p.js";
import {
  d as m,
  e as u,
  f as e,
  A as J,
  F as T,
  z as Z,
  G as _,
  t as h,
  r as C,
  x as ee,
  y as te,
  j as se,
  l as o,
  k,
  q as I,
  I as P,
  B as ae,
  u as c,
  C as oe,
  T as S,
  V as ie,
} from "./vue-Z9E3ejSf.js";
import { P as B } from "./ProseSection-BDsjG7tk.js";
import { g as ne } from "./product-faqs-DsJuzZFe.js";
import "./gsap-BwUJxYA3.js";
const re = "/assets/MotionImage1-DejeilDY.png",
  le = "/assets/MotionImage2-DPGHRPW1.png",
  ce = "/assets/MotionImage3-6wXPqQuc.png",
  de = "/assets/MotionImage4-BoFRGuli.png",
  ue = {
    class:
      "mt-[110px] mx-auto max-w-[2000px] flex flex-col items-center justify-center base-x-p max-lg:mt-20 max-md:mt-[50px]",
  },
  me = {
    class:
      "grid mt-[90px] max-lg:mt-12 max-md:mt-8 grid-cols-[repeat(3,1fr)] grid-rows-[repeat(2,330px)] gap-x-3 gap-y-4 max-xl:grid-cols-[repeat(2,1fr)] max-md:grid-rows-[repeat(3,150px)]",
  },
  pe = { class: "flex flex-col gap-3 max-md:gap-1" },
  he = {
    class:
      "font-inter whitespace-nowrap text-2xl font-extrabold leading-[85%] max-md:text-base",
  },
  ge = {
    class:
      "text-lg max-w-[510px] leading-[140%] max-md:text-[10px] max-md:max-w-[245px]",
  },
  fe = ["src", "alt"],
  xe = {
    __name: "Motion",
    setup(d) {
      const t = [
        {
          title: "Total Data Ingestion",
          text: "We don't just read the news. Our engine connects to the raw pulse of the market - ingesting git commits, hiring logs, and funding wires in real-time to build a living profile of every startup.",
          image: re,
        },
        {
          title: "Multi-Vector Scoring",
          text: "Rigorous 50-point inspection pipeline covering code quality, founder history, and velocity.",
          image: le,
        },
        {
          title: "Precision Matching",
          text: "The AI acts as your gatekeeper. It filters out noise based on your specific thesis and sector focus.",
          image: ce,
        },
        {
          title: "Real-Time Pulse",
          text: "Stop chasing deals. Our Sentient Signal Agents monitor the ecosystem 24/7, notifying you instantly when a target hits your KPIs or when a hidden risk emerges.",
          image: de,
          color: !0,
        },
      ];
      return (r, a) => (
        u(),
        m("section", ue, [
          a[0] ||
            (a[0] = e(
              "h2",
              { class: "title text-center text-black" },
              [
                J(" Intelligence in "),
                e("span", { class: "sectitle" }, "Motion"),
              ],
              -1
            )),
          a[1] ||
            (a[1] = e(
              "div",
              {
                class:
                  "description text-center mt-8 text-black max-w-[760px] mx-auto max-md:mt-3",
              },
              " From chaos to clarity. See how IPO Genie transforms millions of raw data points into your next best investment. ",
              -1
            )),
          e("div", me, [
            (u(),
            m(
              T,
              null,
              Z(t, (i, s) =>
                e(
                  "div",
                  {
                    key: s,
                    class: _([
                      "rounded-[20px] flex justify-between p-9 max-md:px-2 max-md:py-3 ",
                      i.color
                        ? "bg-[linear-gradient(124deg,#FF5B00_16.64%,#DA132C_151.5%)] text-white"
                        : "bg-white text-black",
                      s === 1 && "flex-col",
                      s === 2 && "flex-col-reverse max-md:flex-col",
                      s === 3 && "flex-col max-md:flex-row max-md:items-center",
                      s === 0 &&
                        "col-[1/3] row-[1/2] max-xl:col-[1/3] max-xl:row-[1/2]",
                      s === 1 &&
                        "col-[3/4] row-[1/2] max-xl:col-[1/2] max-xl:row-[2/3]",
                      s === 2 &&
                        "col-[1/2] row-[2/3] max-xl:col-[2/3] max-xl:row-[2/3]",
                      s === 3 &&
                        "col-[2/4] row-[2/3] max-xl:col-[1/3] max-xl:row-[3/4]",
                    ]),
                  },
                  [
                    e("div", pe, [
                      e("div", he, h(i.title), 1),
                      e("div", ge, h(i.text), 1),
                    ]),
                    e(
                      "div",
                      {
                        class: _([
                          { "w-full items-end flex justify-end ": s === 3 },
                        ]),
                      },
                      [
                        e(
                          "div",
                          {
                            class: _([
                              { "h-full w-auto": s === 0 },
                              {
                                "w-full h-auto max-md:w-auto max-md:h-[53px]":
                                  s === 1,
                              },
                              {
                                "w-[293px] h-auto max-md:h-12 max-md:w-auto":
                                  s === 2,
                              },
                              { "w-auto h-[126px]  max-md:h-[73px]": s === 3 },
                            ]),
                          },
                          [
                            e(
                              "img",
                              {
                                src: i.image,
                                alt: i.title,
                                class: "object-contain",
                                loading: "lazy",
                              },
                              null,
                              8,
                              fe
                            ),
                          ],
                          2
                        ),
                      ],
                      2
                    ),
                  ],
                  2
                )
              ),
              64
            )),
          ]),
        ])
      );
    },
  },
  we = F(xe, [["__scopeId", "data-v-07704999"]]),
  ye = {
    class:
      "relative bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-3xl p-8 max-w-md w-full border border-white/10 shadow-2xl",
  },
  be = { class: "text-center" },
  ve = {
    class:
      "w-16 h-16 mx-auto mb-5 rounded-full bg-[#FF5B00]/20 flex items-center justify-center",
  },
  _e = {
    key: 0,
    class: "w-8 h-8 text-[#FF5B00]",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
  },
  ke = {
    key: 1,
    class: "w-8 h-8 text-[#FF5B00]",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
  },
  Ie = { class: "text-2xl font-bold text-white mb-2" },
  Se = { class: "text-white/70 mb-6" },
  Ae = ["disabled"],
  Me = ["disabled"],
  Ce = { key: 0, class: "mt-4 text-green-400 text-sm" },
  Pe = { key: 0, class: "mt-4 text-red-400 text-sm" },
  Be = {
    __name: "NewsletterPopup",
    props: {
      delay: { type: Number, default: 5e3 },
      storageKey: { type: String, default: "newsletter_popup_dismissed" },
      title: { type: String, default: "Stay Ahead of the Market" },
      description: {
        type: String,
        default:
          "Get exclusive AI-powered insights, deal alerts, and early access to new features delivered to your inbox.",
      },
      buttonText: { type: String, default: "Get Early Access" },
      successMessage: { type: String, default: "Sent!" },
      variant: { type: String, default: "default" },
      source: { type: String, default: "newsletter_popup" },
    },
    setup(d) {
      const t = d,
        r = C(!1),
        a = C(""),
        { isLoading: i, success: s, error: g, subscribeEmail: f } = E();
      let l = null,
        p = !1;
      const x = () => {
          s.value ||
            b("newsletter_popup", "dismiss", {
              source: t.source,
              variant: t.variant,
            }),
            (r.value = !1),
            typeof localStorage != "undefined" &&
              localStorage.setItem(t.storageKey, Date.now().toString());
        },
        j = () =>
          A(null, null, function* () {
            if (!a.value || !a.value.includes("@")) return;
            b("newsletter_popup", "submit", {
              source: t.source,
              variant: t.variant,
            }),
              (yield f(a.value, { source: t.source }))
                ? (M("newsletter", 2, "popup_subscribed", {
                    source: t.source,
                    variant: t.variant,
                  }),
                  (a.value = ""),
                  setTimeout(() => {
                    x();
                  }, 2e3))
                : b("newsletter_popup", "error", {
                    source: t.source,
                    variant: t.variant,
                    error_message: g.value || "subscribe_failed",
                  });
          }),
        D = () => {
          if (typeof localStorage == "undefined") return !0;
          const w = localStorage.getItem(t.storageKey);
          if (!w) return !0;
          const n = parseInt(w, 10),
            y = 10080 * 60 * 1e3;
          return Date.now() - n > y;
        };
      return (
        ee(() => {
          D() &&
            (l = setTimeout(() => {
              (r.value = !0),
                p ||
                  ((p = !0),
                  M("newsletter", 1, "popup_viewed", {
                    source: t.source,
                    variant: t.variant,
                  }));
            }, t.delay));
        }),
        te(() => {
          l && clearTimeout(l);
        }),
        (w, n) => (
          u(),
          se(ie, { to: "body" }, [
            o(
              S,
              { name: "fade" },
              {
                default: k(() => [
                  r.value
                    ? (u(),
                      m(
                        "div",
                        {
                          key: 0,
                          class:
                            "fixed inset-0 z-[10001] flex items-center justify-center p-4",
                          onClick: P(x, ["self"]),
                        },
                        [
                          e("div", {
                            class:
                              "absolute inset-0 bg-black/60 backdrop-blur-sm",
                            onClick: x,
                          }),
                          e("div", ye, [
                            e(
                              "button",
                              {
                                onClick: x,
                                class:
                                  "absolute top-4 right-4 text-white/60 hover:text-white transition-colors",
                                "aria-label": "Close popup",
                              },
                              [
                                ...(n[1] ||
                                  (n[1] = [
                                    e(
                                      "svg",
                                      {
                                        class: "w-6 h-6",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                      },
                                      [
                                        e("path", {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          "stroke-width": "2",
                                          d: "M6 18L18 6M6 6l12 12",
                                        }),
                                      ],
                                      -1
                                    ),
                                  ])),
                              ]
                            ),
                            e("div", be, [
                              e("div", ve, [
                                d.variant === "briefing"
                                  ? (u(),
                                    m("svg", _e, [
                                      ...(n[2] ||
                                        (n[2] = [
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
                                    ]))
                                  : (u(),
                                    m("svg", ke, [
                                      ...(n[3] ||
                                        (n[3] = [
                                          e(
                                            "path",
                                            {
                                              "stroke-linecap": "round",
                                              "stroke-linejoin": "round",
                                              "stroke-width": "2",
                                              d: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
                                            },
                                            null,
                                            -1
                                          ),
                                        ])),
                                    ])),
                              ]),
                              e("h3", Ie, h(d.title), 1),
                              e("p", Se, h(d.description), 1),
                              e(
                                "form",
                                {
                                  onSubmit: P(j, ["prevent"]),
                                  class: "space-y-4",
                                },
                                [
                                  ae(
                                    e(
                                      "input",
                                      {
                                        "onUpdate:modelValue":
                                          n[0] || (n[0] = (y) => (a.value = y)),
                                        type: "email",
                                        placeholder: "Enter your email",
                                        class:
                                          "w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-[#FF5B00] transition-colors",
                                        disabled: c(i) || c(s),
                                        required: "",
                                      },
                                      null,
                                      8,
                                      Ae
                                    ),
                                    [[oe, a.value]]
                                  ),
                                  e(
                                    "button",
                                    {
                                      type: "submit",
                                      disabled: c(i) || c(s),
                                      class:
                                        "w-full py-4 rounded-xl bg-[#FF5B00] text-white font-semibold hover:bg-[#ff6a1a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                                    },
                                    h(
                                      c(i)
                                        ? "Sending..."
                                        : c(s)
                                        ? d.successMessage
                                        : d.buttonText
                                    ),
                                    9,
                                    Me
                                  ),
                                ],
                                32
                              ),
                              o(
                                S,
                                { name: "fade" },
                                {
                                  default: k(() => [
                                    c(s)
                                      ? (u(),
                                        m(
                                          "p",
                                          Ce,
                                          " You're in! Check your inbox for confirmation. "
                                        ))
                                      : I("", !0),
                                  ]),
                                  _: 1,
                                }
                              ),
                              o(
                                S,
                                { name: "fade" },
                                {
                                  default: k(() => [
                                    c(g)
                                      ? (u(), m("p", Pe, h(c(g)), 1))
                                      : I("", !0),
                                  ]),
                                  _: 1,
                                }
                              ),
                              n[4] ||
                                (n[4] = e(
                                  "p",
                                  { class: "mt-5 text-white/40 text-xs" },
                                  " No spam, ever. Unsubscribe anytime. ",
                                  -1
                                )),
                            ]),
                          ]),
                        ]
                      ))
                    : I("", !0),
                ]),
                _: 1,
              }
            ),
          ])
        )
      );
    },
  },
  Fe = F(Be, [["__scopeId", "data-v-9a64ec8f"]]),
  ze = {
    __name: "AI-Powered",
    setup(d) {
      L(v.aiPowered);
      const t = ne("/ai-powered/"),
        r = t.map((a) => ({ title: a.question, text: a.answer }));
      return (
        U([
          W(),
          K([
            { name: "Home", url: "/" },
            { name: "AI-Powered", url: "/ai-powered/" },
          ]),
          Q({
            name: "IPO Genie AI Deal Scoring",
            description:
              "AI-powered investment analysis tools that score crypto presales and venture deals using machine learning and real-time data.",
            serviceType: "Investment Analysis",
            path: "/ai-powered/",
          }),
          R("/ai-powered/", t),
          Y({
            url: "/ai-powered/",
            headline: v.aiPowered.title,
            summary: v.aiPowered.description,
          }),
        ]),
        (a, i) => (
          u(),
          m(
            T,
            null,
            [
              o(V, {
                "text-btn": "Buy $IPO Now",
                "sec-btn": "",
                heading: [
                  { text: "AI Crypto Analysis:", type: "accent" },
                  {
                    text: "How Smart Investors Use AI to Score Deals",
                    type: "default",
                  },
                ],
                breadcrumbs: [
                  { name: "Home", to: "/" },
                  { name: "AI-Powered" },
                ],
              }),
              o(G),
              o(we),
              o(B, {
                title: "How AI Deal Scoring Works",
                highlight: "AI Deal Scoring",
                content: `<p>Every investment opportunity on IPO Genie passes through a multi-layered AI scoring pipeline before reaching investors. The system ingests thousands of data points per project, including team credentials, <a href='/learn/tokenomics/'>tokenomics</a> structure, smart contract audit results, community growth velocity, and market timing signals.</p>
    <p>Unlike static checklists, the model continuously learns from historical outcomes. It cross-references each new submission against patterns from past presales that succeeded or failed, weighting factors like founder track record, capital efficiency, and token distribution fairness. The result is a dynamic 0-100 risk-adjusted score that updates as new information emerges.</p>
    <p>Investors can explore the full scoring breakdown in their dashboard, with detailed sub-scores for categories like team strength, market opportunity, and <a href='/blog/inside-ai-scoring-model-high-potential-deals/'>technical due diligence</a>. This transparency lets you understand exactly why a deal scored the way it did, rather than trusting a black-box recommendation.</p>`,
              }),
              o(B, {
                title: "Why AI Beats Manual Due Diligence",
                highlight: "AI Beats",
                content: `<p>Manual due diligence has been the gold standard in venture capital for decades, but it has critical limitations: it is slow, expensive, and susceptible to cognitive bias. A single analyst might take a week to evaluate one project thoroughly. IPO Genie's AI processes the same depth of analysis across hundreds of deals simultaneously.</p>
    <p>Speed is only part of the advantage. AI eliminates confirmation bias, the tendency for analysts to seek out evidence that supports their initial impression. The model evaluates every project against the same objective criteria, regardless of narrative appeal or hype cycles. It also detects <a href='/blog/how-to-spot-token-red-flags/'>red flags</a> that humans commonly miss, such as subtle patterns in token vesting schedules or discrepancies between stated and actual team backgrounds.</p>
    <p>The best results come from combining AI efficiency with human judgment. That is why IPO Genie pairs automated scoring with Venture Council oversight through the <a href='/marketplace/'>Deal Builder Marketplace</a>, ensuring that no deal reaches investors without both algorithmic and expert validation. Combined with <a href='/insurance/'>built-in insurance coverage</a>, investors get both informed selection and downside protection.</p>`,
              }),
              o(N),
              o(H, { mattersCards: c(z) }, null, 8, ["mattersCards"]),
              o(O, { variant: "ai" }),
              o(X, { "faq-list": c(r) }, null, 8, ["faq-list"]),
              o(q),
              o($, {
                slugs: [
                  "inside-ai-scoring-model-high-potential-deals",
                  "how-to-spot-token-red-flags",
                  "openai-anthropic-ai-pre-ipo-opportunity",
                ],
              }),
              o(Fe, {
                delay: 2500,
                "storage-key": "ai_page_briefing_dismissed",
                title:
                  "The VC Model is Broken. Here's the Blueprint for What Comes Next.",
                description:
                  "Get our free briefing on why traditional venture capital is failing - and how tokenized private markets are rewriting the rules.",
                "button-text": "Download Your Free Briefing Now",
                "success-message": "Check your inbox!",
                variant: "briefing",
                source: "vc_briefing",
              }),
            ],
            64
          )
        )
      );
    },
  };
export { ze as default };
