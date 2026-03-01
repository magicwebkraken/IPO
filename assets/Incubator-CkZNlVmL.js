var W = (m, r, s) =>
  new Promise((t, l) => {
    var i = (o) => {
        try {
          n(s.next(o));
        } catch (a) {
          l(a);
        }
      },
      x = (o) => {
        try {
          n(s.throw(o));
        } catch (a) {
          l(a);
        }
      },
      n = (o) => (o.done ? t(o.value) : Promise.resolve(o.value).then(i, x));
    n((s = s.apply(m, r)).next());
  });
import {
  _ as B,
  c as I,
  m as M,
  o as q,
  u as z,
  d as O,
  g as D,
  e as N,
  p as T,
  q as G,
  s as V,
} from "./index-CkW8Cm0p.js";
import {
  d,
  e as c,
  l as p,
  f as e,
  K as $,
  A as f,
  F as h,
  z as w,
  j as L,
  s as H,
  t as u,
  U as g,
  r as k,
  I as R,
  G as Q,
  k as X,
  B as Y,
  J,
  T as U,
  q as F,
} from "./vue-Z9E3ejSf.js";
import "./gsap-BwUJxYA3.js";
const Z = "/geniecross.png",
  K = {
    class:
      "flex items-center max-w-[2055px] mx-auto flex-col base-x-p mt-[200px] max-xl:mt-[180px] max-lg:mt-[120px] max-md:mt-28",
  },
  ee = {
    class: "flex flex-col mx-auto items-center text-center gap-8 max-md:gap-5",
  },
  te = { class: "flex items-center gap-3" },
  oe = {
    __name: "HeroSection",
    setup(m) {
      return (r, s) => (
        c(),
        d("section", K, [
          p(B, {
            items: [{ name: "Home", to: "/" }, { name: "Incubator" }],
            variant: "light",
            class: "w-full",
          }),
          e("div", ee, [
            s[0] ||
              (s[0] = $(
                '<div class="relative"><img src="' +
                  Z +
                  '" alt="" class="absolute -left-36 -top-20 h-[250px] w-auto -z-10 -scale-x-100 object-contain hidden lg:block" loading="lazy"><h1 class="title text-black max-w-[700px]"> IPO Genie <span class="sectitle">Incubator</span></h1></div><div class="flex flex-col gap-4"><p class="max-w-[865px] text-black mx-auto description"> We&#39;re building an incubator for bold founders - whether you&#39;re in Web3, Web2, or traditional industries. Connect with mentors, VCs, and retail funding through our growing network. </p><p class="max-w-[865px] text-black mx-auto description opacity-80"> Apply now to be considered for our first cohort. Early applicants will receive priority review. </p></div>',
                2
              )),
            e("div", te, [
              p(I, {
                text: "Apply Now",
                to: "#apply",
                "bg-color": "#FF5B00",
                "arrow-color": "#000",
                "bg-arrow": "#fff",
                "text-color": "#fff",
              }),
              p(I, {
                text: "Read Whitepaper",
                link: "https://whitepaper.ipogenie.ai",
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
  ae = {
    class:
      "base-x-p mx-auto max-w-[2000px] mt-[140px] max-lg:mt-[100px] max-md:mt-[85px]",
  },
  re = { class: "mx-auto" },
  se = {
    class:
      "bg-white rounded-[30px] p-5 max-md:py-8 md:p-12 grid md:grid-cols-2 gap-12 max-md:gap-8 max-md:rounded-[20px]",
  },
  ne = {
    class:
      "shrink-0 w-12 h-12 max-md:w-10 max-md:h-10 rounded-xl bg-[#FF5B00]/10 flex items-center justify-center",
  },
  le = {
    class: "font-['Inter'] font-extrabold text-xl tracking-tight text-black",
  },
  ie = { class: "text-lg text-black mt-3 tracking-[-0.2px] leading-[140%]" },
  ce = {
    __name: "WhatWeOffer",
    setup(m) {
      const i = [
          {
            render() {
              return g(
                "svg",
                {
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  "stroke-width": "2",
                },
                [
                  g("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                  }),
                ]
              );
            },
          },
          {
            render() {
              return g(
                "svg",
                {
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  "stroke-width": "2",
                },
                [
                  g("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
                  }),
                ]
              );
            },
          },
          {
            render() {
              return g(
                "svg",
                {
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  "stroke-width": "2",
                },
                [
                  g("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z",
                  }),
                ]
              );
            },
          },
          {
            render() {
              return g(
                "svg",
                {
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  "stroke-width": "2",
                },
                [
                  g("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z",
                  }),
                ]
              );
            },
          },
        ],
        x = [
          {
            title: "Seed Funding",
            description:
              "Get initial capital to build your MVP and validate your concept. We invest in promising teams at the earliest stages - regardless of industry.",
          },
          {
            title: "Expert Mentorship",
            description:
              "Access our network of founders, investors, and advisors across tech, finance, healthcare, and more who've built and scaled successful companies.",
          },
          {
            title: "Go-to-Market Support",
            description:
              "Whether you're launching a SaaS product, a consumer app, or a blockchain protocol - we help you find product-market fit and scale.",
          },
          {
            title: "Network & Partnerships",
            description:
              "Tap into our investor network, corporate partners, and global community to accelerate your growth and open new doors.",
          },
        ];
      return (n, o) => (
        c(),
        d("section", ae, [
          e("div", re, [
            o[0] ||
              (o[0] = e(
                "div",
                { class: "text-center mb-10 max-lg:mb-6 max-md:mb-[18px]" },
                [
                  e("h2", { class: "title text-black" }, [
                    f(" What You'll "),
                    e("span", { class: "sectitle" }, "Get"),
                  ]),
                  e(
                    "p",
                    { class: "description text-black mt-4 max-md:mt-3" },
                    " Everything you need to go from idea to launch. "
                  ),
                ],
                -1
              )),
            e("div", se, [
              (c(),
              d(
                h,
                null,
                w(x, (a, v) =>
                  e(
                    "div",
                    {
                      key: a.title,
                      class: "flex items-start gap-4 max-md:gap-3",
                    },
                    [
                      e("div", ne, [
                        (c(),
                        L(H(i[v]), {
                          class: "w-6 h-6 max-md:w-5 max-md:h-5 text-[#FF5B00]",
                        })),
                      ]),
                      e("div", null, [
                        e("h3", le, u(a.title), 1),
                        e("p", ie, u(a.description), 1),
                      ]),
                    ]
                  )
                ),
                64
              )),
            ]),
          ]),
        ])
      );
    },
  },
  de = {
    class:
      "base-x-p max-w-[2000px] flex justify-between gap-6 text-black mx-auto mt-[150px] max-xl:mt-[100px] max-lg:flex-col max-lg:mt-24 max-md:mt-20",
  },
  pe = { class: "flex flex-col items-center gap-10 flex-1 max-md:gap-4" },
  ue = { class: "flex flex-col items-start text-start gap-6 max-md:gap-2" },
  me = {
    class: "text-2xl font-inter font-extrabold leading-[85%] max-md:text-lg",
  },
  xe = { class: "text-lg leading-[140%] max-md:text-xs" },
  ge = {
    __name: "WhoShouldApply",
    setup(m) {
      const r = [
        {
          title: "Web3 & Blockchain",
          text: "DeFi protocols, NFT platforms, infrastructure tools, and decentralized applications pushing the boundaries of what's possible.",
        },
        {
          title: "AI & Deep Tech",
          text: "Teams leveraging artificial intelligence, machine learning, or cutting-edge technology to solve real problems.",
        },
        {
          title: "Something Interesting?",
          text: "We work with a variety of funds and have networks across every sector. If you're building something exciting, we want to hear from you.",
        },
        {
          title: "Consumer & Marketplaces",
          text: "Consumer apps, e-commerce platforms, and marketplaces with a clear path to scale and strong unit economics.",
        },
      ];
      return (s, t) => (
        c(),
        d("div", de, [
          t[1] ||
            (t[1] = e(
              "div",
              { class: "flex-1" },
              [
                e("h2", { class: "title whitespace-nowrap" }, [
                  f(" Who Should "),
                  e("span", { class: "sectitle" }, "Apply"),
                ]),
                e(
                  "div",
                  { class: "description mt-5 max-md:mt-2" },
                  " We're looking for ambitious builders ready to disrupt. "
                ),
              ],
              -1
            )),
          e("div", pe, [
            (c(),
            d(
              h,
              null,
              w(r, (l, i) =>
                e(
                  "div",
                  { key: i, class: "flex self-stretch gap-7 max-md:gap-2" },
                  [
                    t[0] ||
                      (t[0] = e(
                        "div",
                        { class: "w-[6px] h-auto bg-[#FF5B00] rounded-[3px]" },
                        null,
                        -1
                      )),
                    e("div", ue, [
                      e("div", me, u(l.title), 1),
                      e("div", xe, u(l.text), 1),
                    ]),
                  ]
                )
              ),
              64
            )),
          ]),
        ])
      );
    },
  },
  be = {
    class:
      "base-x-p mx-auto max-w-[2000px] mt-[140px] max-lg:mt-[100px] max-md:mt-[85px]",
  },
  fe = { class: "grid md:grid-cols-4 gap-6 max-md:gap-4" },
  he = { class: "flex items-center gap-3 mb-4" },
  ve = {
    class:
      "w-10 h-10 rounded-full bg-[#FF5B00] flex items-center justify-center text-white font-inter font-bold text-lg",
  },
  ye = { class: "font-inter font-extrabold text-xl max-md:text-lg" },
  ke = { class: "text-base leading-[140%] max-md:text-sm" },
  we = {
    __name: "ProcessSection",
    setup(m) {
      const r = [
        {
          title: "Apply Now",
          description:
            "Submit your application early to be considered for our first cohort.",
        },
        {
          title: "We Review",
          description:
            "Our team evaluates applications based on innovation, team strength, and market potential.",
        },
        {
          title: "Get Selected",
          description:
            "Selected projects join the cohort, receive funding, and start working with mentors.",
        },
        {
          title: "Launch & Grow",
          description:
            "Build your product, go to market, and scale with continued IPO Genie support.",
        },
      ];
      return (s, t) => (
        c(),
        d("section", be, [
          t[0] ||
            (t[0] = e(
              "div",
              { class: "text-center mb-10 max-lg:mb-6 max-md:mb-[18px]" },
              [
                e("h2", { class: "title text-black" }, [
                  f(" How It "),
                  e("span", { class: "sectitle" }, "Works"),
                ]),
                e(
                  "p",
                  { class: "description text-black mt-4 max-md:mt-3" },
                  " From application to launch in four simple steps. "
                ),
              ],
              -1
            )),
          e("div", fe, [
            (c(),
            d(
              h,
              null,
              w(r, (l, i) =>
                e(
                  "div",
                  {
                    key: i,
                    class: "bg-white rounded-[20px] p-6 max-md:p-4 text-black",
                  },
                  [
                    e("div", he, [
                      e("div", ve, u(i + 1), 1),
                      e("h3", ye, u(l.title), 1),
                    ]),
                    e("p", ke, u(l.description), 1),
                  ]
                )
              ),
              64
            )),
          ]),
        ])
      );
    },
  },
  _e = {
    class:
      "flex flex-col text-black base-x-p gap-[104px] items-center justify-center mt-36 max-xl:gap-20 max-lg:mt-24 max-lg:gap-10 max-md:gap-6 max-md:mt-16",
  },
  Fe = { class: "flex flex-col gap-2 w-full max-w-[900px] mx-auto" },
  Ce = ["onClick"],
  Ae = { class: "flex justify-between items-center" },
  Ee = { class: "text-xl leading-[200%] max-md:text-lg" },
  Se = {
    __name: "FAQSection",
    setup(m) {
      const r = k(null),
        s = (l) => {
          r.value = r.value === l ? null : l;
        },
        t = [
          {
            title: "What stage startups do you accept?",
            text: "We accept startups at all early stages, from idea to early revenue. Whether you have just a concept, a working prototype, or an MVP with initial traction, we want to hear from you. What matters most is your vision, your team, and your commitment to building something meaningful.",
          },
          {
            title: "Do I need to be in Web3 or crypto to apply?",
            text: "Not at all. While IPO Genie operates in the Web3 space, our incubator is industry-agnostic. We back founders building in AI, fintech, SaaS, healthtech, consumer apps, and more. If you're solving a real problem with a scalable solution, we're interested.",
          },
          {
            title: "How much funding do you provide?",
            text: "Our seed funding amounts vary based on the stage, needs, and potential of each startup. We work with founders to determine the right investment that allows you to hit key milestones. Reach out or apply to discuss specifics for your situation.",
          },
          {
            title: "What do you look for in applicants?",
            text: "We look for passionate founders with a clear vision, a deep understanding of the problem they're solving, and the grit to execute. We value diverse backgrounds, unique perspectives, and teams that can adapt quickly. A polished pitch deck isn't required. We care more about your thinking and potential.",
          },
          {
            title: "How long is the incubator program?",
            text: "Our program is designed to be flexible based on your startup's needs. Typically, the core program runs 3-6 months, but our support and network access extend well beyond that. We're here to help you succeed long-term, not just during a fixed cohort period.",
          },
          {
            title: "Do I need to relocate or work on-site?",
            text: "No, our incubator is fully remote-friendly. We work with founders globally and leverage virtual collaboration tools for mentorship, workshops, and community engagement. We may host optional in-person events, but participation is never required.",
          },
          {
            title: "What equity do you take?",
            text: "Equity terms vary based on the funding amount and stage of your startup. We aim to be founder-friendly and structure deals that align our incentives with your success. We'll discuss specifics transparently during the application process.",
          },
          {
            title: "When will I hear back after applying?",
            text: "We're currently in presale mode, so the incubator program will fully launch after our presale ends. In the meantime, we're collecting applications to build our first cohort. Once we launch, we'll review applications on a rolling basis and reach out to schedule calls with promising founders.",
          },
        ];
      return (l, i) => (
        c(),
        d("div", _e, [
          i[1] ||
            (i[1] = e(
              "div",
              { class: "flex flex-col gap-4 text-center items-center" },
              [
                e("h2", { class: "title" }, [
                  e("span", { class: "sectitle" }, "Frequently"),
                  f(" Asked Questions "),
                ]),
                e(
                  "div",
                  { class: "description max-w-[675px]" },
                  " Everything you need to know about our incubator program. "
                ),
              ],
              -1
            )),
          e("div", Fe, [
            (c(),
            d(
              h,
              null,
              w(t, (x, n) =>
                e(
                  "div",
                  {
                    key: n,
                    class: "flex flex-col gap-2 cursor-pointer select-none",
                    onClick: R((o) => s(n), ["stop"]),
                  },
                  [
                    e("div", Ae, [
                      e("div", Ee, u(x.title), 1),
                      e(
                        "div",
                        {
                          class: Q([
                            "transition-transform duration-200 ease-in-out",
                            r.value === n ? "rotate-180" : "",
                          ]),
                        },
                        [p(q)],
                        2
                      ),
                    ]),
                    p(
                      U,
                      { name: "faq" },
                      {
                        default: X(() => [
                          Y(
                            e(
                              "div",
                              {
                                class:
                                  "text-base leading-[140%] overflow-hidden",
                              },
                              u(x.text),
                              513
                            ),
                            [[J, r.value === n]]
                          ),
                        ]),
                        _: 2,
                      },
                      1024
                    ),
                    i[0] ||
                      (i[0] = e(
                        "div",
                        { class: "w-full h-[0.5px] bg-black" },
                        null,
                        -1
                      )),
                  ],
                  8,
                  Ce
                )
              ),
              64
            )),
          ]),
        ])
      );
    },
  },
  We = M(Se, [["__scopeId", "data-v-fc3b3d1a"]]),
  Ie = {
    id: "apply",
    class:
      "base-x-p mx-auto max-w-[2000px] mt-[140px] max-lg:mt-[100px] max-md:mt-[85px]",
  },
  $e = { class: "bg-white rounded-[30px] p-4 md:p-8 max-md:rounded-[20px]" },
  je = {
    key: 0,
    class:
      "bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-center",
  },
  Pe = { class: "flex justify-center" },
  Be = ["disabled"],
  Me = {
    key: 1,
    class:
      "bg-green-50 border border-green-200 text-green-700 px-6 py-8 rounded-xl text-center",
  },
  qe = 10 * 1024 * 1024,
  ze = {
    __name: "ApplicationSection",
    setup(m) {
      const r = k(!1),
        s = k(!1),
        t = k(null),
        l = (n) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n),
        i = (n) => n.replace(/\D/g, "").length >= 7,
        x = (n) =>
          W(null, null, function* () {
            n.preventDefault(), (t.value = null);
            const o = n.target,
              a = new FormData(o),
              v = a.get("name"),
              j = a.get("email"),
              P = a.get("phone"),
              C = a.get("startup_name"),
              A = a.get("one_liner"),
              E = a.get("problem"),
              b = a.get("pitch_deck");
            if (!v || v.trim().length < 2) {
              t.value = "Please enter your full name.";
              return;
            }
            if (!l(j)) {
              t.value = "Please enter a valid email address.";
              return;
            }
            if (!i(P)) {
              t.value = "Please enter a valid phone number.";
              return;
            }
            if (!C || C.trim().length < 2) {
              t.value = "Please enter your startup name.";
              return;
            }
            if (!A || A.trim().length < 3) {
              t.value = "Please describe what your startup does.";
              return;
            }
            if (!E || E.trim().length < 10) {
              t.value = "Please describe the problem you're solving.";
              return;
            }
            if (b && b.size > 0 && b.size > qe) {
              t.value = "Pitch deck must be less than 10MB.";
              return;
            }
            (r.value = !0),
              (!b || b.size === 0) && a.delete("pitch_deck"),
              a.append("access_key", "1d323164-4e55-47c8-bd46-0062756d256e"),
              a.append("subject", "New Incubator Application - IPO Genie"),
              a.append("from_name", "IPO Genie Website");
            try {
              const _ = yield fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: a,
              });
              let y = {};
              const S = yield _.text();
              if (S)
                try {
                  y = JSON.parse(S);
                } catch (Oe) {
                  t.value = "Server error. Please try again later.";
                  return;
                }
              y.success
                ? ((s.value = !0), o.reset())
                : (console.error("Web3Forms error:", y),
                  (t.value =
                    y.message || "Failed to submit. Please try again."));
            } catch (_) {
              console.error("Form submission error:", _),
                (t.value =
                  "Network error. Please check your connection and try again.");
            } finally {
              r.value = !1;
            }
          });
      return (n, o) => (
        c(),
        d("section", Ie, [
          o[2] ||
            (o[2] = e(
              "div",
              { class: "text-center mb-10 max-lg:mb-6 max-md:mb-[18px]" },
              [
                e("h2", { class: "title text-black" }, [
                  f(" Apply for Our "),
                  e("span", { class: "sectitle" }, "First Cohort"),
                ]),
                e(
                  "p",
                  {
                    class:
                      "description text-black mt-4 max-md:mt-3 max-w-[700px] mx-auto",
                  },
                  " We're accepting applications for our upcoming incubator program. Submit your details and we'll be in touch when we launch. "
                ),
              ],
              -1
            )),
          e("div", $e, [
            s.value
              ? F("", !0)
              : (c(),
                d(
                  "form",
                  { key: 0, onSubmit: x, class: "space-y-8" },
                  [
                    o[0] ||
                      (o[0] = $(
                        '<input type="checkbox" name="botcheck" class="hidden" style="display:none;"><div class="space-y-4"><h3 class="text-xl font-bold text-black">Contact Information</h3><div class="grid md:grid-cols-2 gap-4"><div class="space-y-2"><label for="inc-name" class="text-sm text-black ml-1">Full Name *</label><input id="inc-name" name="name" type="text" placeholder="Your full name" class="w-full bg-[#F4F4F4] border border-[#CECECE] rounded-xl px-5 py-3 text-black placeholder:text-[#A5A5A5] focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange" required></div><div class="space-y-2"><label for="inc-email" class="text-sm text-black ml-1">Email *</label><input id="inc-email" name="email" type="email" placeholder="you@example.com" class="w-full bg-[#F4F4F4] border border-[#CECECE] rounded-xl px-5 py-3 text-black placeholder:text-[#A5A5A5] focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange" required></div></div><div class="grid md:grid-cols-2 gap-4"><div class="space-y-2"><label for="inc-phone" class="text-sm text-black ml-1">Phone / WhatsApp *</label><input id="inc-phone" name="phone" type="tel" placeholder="+1 234 567 8900" class="w-full bg-[#F4F4F4] border border-[#CECECE] rounded-xl px-5 py-3 text-black placeholder:text-[#A5A5A5] focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange" required></div><div class="space-y-2"><label for="inc-telegram" class="text-sm text-black ml-1">Telegram</label><input id="inc-telegram" name="telegram" type="text" placeholder="@username" class="w-full bg-[#F4F4F4] border border-[#CECECE] rounded-xl px-5 py-3 text-black placeholder:text-[#A5A5A5] focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange"></div></div><div class="grid md:grid-cols-2 gap-4"><div class="space-y-2"><label for="inc-twitter" class="text-sm text-black ml-1">X (Twitter)</label><input id="inc-twitter" name="twitter" type="text" placeholder="@handle" class="w-full bg-[#F4F4F4] border border-[#CECECE] rounded-xl px-5 py-3 text-black placeholder:text-[#A5A5A5] focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange"></div><div class="space-y-2"><label for="inc-linkedin" class="text-sm text-black ml-1">LinkedIn Profile</label><input id="inc-linkedin" name="linkedin" type="url" placeholder="https://linkedin.com/in/..." class="w-full bg-[#F4F4F4] border border-[#CECECE] rounded-xl px-5 py-3 text-black placeholder:text-[#A5A5A5] focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange"></div></div></div><div class="space-y-4"><h3 class="text-xl font-bold text-black">Team &amp; Project Socials</h3><div class="grid md:grid-cols-2 gap-4"><div class="space-y-2"><label for="inc-project-twitter" class="text-sm text-black ml-1">Project X (Twitter)</label><input id="inc-project-twitter" name="project_twitter" type="text" placeholder="@projecthandle" class="w-full bg-[#F4F4F4] border border-[#CECECE] rounded-xl px-5 py-3 text-black placeholder:text-[#A5A5A5] focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange"></div><div class="space-y-2"><label for="inc-project-telegram" class="text-sm text-black ml-1">Project Telegram</label><input id="inc-project-telegram" name="project_telegram" type="text" placeholder="@projectgroup or t.me/..." class="w-full bg-[#F4F4F4] border border-[#CECECE] rounded-xl px-5 py-3 text-black placeholder:text-[#A5A5A5] focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange"></div></div><div class="space-y-2"><label for="inc-team-size" class="text-sm text-black ml-1">Team Size</label><div class="relative"><select id="inc-team-size" name="team_size" class="w-full bg-[#F4F4F4] border border-[#CECECE] rounded-xl px-5 py-3 text-black focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange appearance-none cursor-pointer"><option value="" disabled selected>Select team size</option><option value="solo">Solo founder</option><option value="2-3">2-3 people</option><option value="4-10">4-10 people</option><option value="10+">10+ people</option></select><svg class="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></div></div></div><div class="space-y-4"><h3 class="text-xl font-bold text-black">About Your Startup</h3><div class="grid md:grid-cols-2 gap-4"><div class="space-y-2"><label for="inc-startup-name" class="text-sm text-black ml-1">Startup / Project Name *</label><input id="inc-startup-name" name="startup_name" type="text" placeholder="Your startup name" class="w-full bg-[#F4F4F4] border border-[#CECECE] rounded-xl px-5 py-3 text-black placeholder:text-[#A5A5A5] focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange" required></div><div class="space-y-2"><label for="inc-website" class="text-sm text-black ml-1">Website</label><input id="inc-website" name="website" type="url" placeholder="https://..." class="w-full bg-[#F4F4F4] border border-[#CECECE] rounded-xl px-5 py-3 text-black placeholder:text-[#A5A5A5] focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange"></div></div><div class="grid md:grid-cols-2 gap-4"><div class="space-y-2"><label for="inc-stage" class="text-sm text-black ml-1">Current Stage *</label><div class="relative"><select id="inc-stage" name="stage" class="w-full bg-[#F4F4F4] border border-[#CECECE] rounded-xl px-5 py-3 text-black focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange appearance-none cursor-pointer" required><option value="" disabled selected>Select stage</option><option value="idea">Idea only</option><option value="prototype">Prototype</option><option value="mvp">MVP live</option><option value="early_revenue">Early revenue</option><option value="growing">Growing</option></select><svg class="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></div></div><div class="space-y-2"><label for="inc-industry" class="text-sm text-black ml-1">Industry *</label><div class="relative"><select id="inc-industry" name="industry" class="w-full bg-[#F4F4F4] border border-[#CECECE] rounded-xl px-5 py-3 text-black focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange appearance-none cursor-pointer" required><option value="" disabled selected>Select industry</option><option value="web3">Web3 / Crypto</option><option value="ai">AI / ML</option><option value="fintech">Fintech</option><option value="saas">SaaS</option><option value="consumer">Consumer</option><option value="healthtech">Healthtech</option><option value="other">Other</option></select><svg class="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></div></div></div></div><div class="space-y-4"><h3 class="text-xl font-bold text-black">Tell Us More</h3><div class="space-y-2"><label for="inc-one-liner" class="text-sm text-black ml-1">One-liner: What does your startup do? *</label><input id="inc-one-liner" name="one_liner" type="text" placeholder="We are X for Y that does Z" class="w-full bg-[#F4F4F4] border border-[#CECECE] rounded-xl px-5 py-3 text-black placeholder:text-[#A5A5A5] focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange" required></div><div class="space-y-2"><label for="inc-problem" class="text-sm text-black ml-1">What problem are you solving? *</label><textarea id="inc-problem" name="problem" placeholder="Describe the pain point and your solution..." rows="4" class="w-full bg-[#F4F4F4] border border-[#CECECE] rounded-xl px-5 py-3 text-black placeholder:text-[#A5A5A5] focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange resize-none" required></textarea></div></div><div class="space-y-4"><h3 class="text-xl font-bold text-black">Documents</h3><div class="grid md:grid-cols-2 gap-4"><div class="space-y-2"><label for="inc-pitch-deck" class="text-sm text-black ml-1">Pitch Deck (PDF, max 10MB)</label><input id="inc-pitch-deck" name="pitch_deck" type="file" accept=".pdf" class="w-full bg-[#F4F4F4] border border-[#CECECE] rounded-xl px-5 py-3 text-black file:mr-4 file:py-1 file:px-4 file:rounded-lg file:border-0 file:bg-orange file:text-white file:cursor-pointer"></div><div class="space-y-2"><label for="inc-demo-link" class="text-sm text-black ml-1">Demo / Video Link</label><input id="inc-demo-link" name="demo_link" type="url" placeholder="https://..." class="w-full bg-[#F4F4F4] border border-[#CECECE] rounded-xl px-5 py-3 text-black placeholder:text-[#A5A5A5] focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange"></div></div></div><div class="space-y-4"><div class="space-y-2"><label for="inc-referral" class="text-sm text-black ml-1">How did you hear about us? *</label><div class="relative"><select id="inc-referral" name="referral_source" class="w-full bg-[#F4F4F4] border border-[#CECECE] rounded-xl px-5 py-3 text-black focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange appearance-none cursor-pointer" required><option value="" disabled selected>Select one</option><option value="twitter">Twitter / X</option><option value="linkedin">LinkedIn</option><option value="referral">Friend / Referral</option><option value="event">Event / Conference</option><option value="search">Online Search</option><option value="other">Other</option></select><svg class="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></div></div><div class="flex items-start gap-3"><input type="checkbox" name="consent" id="consent" class="mt-1 w-5 h-5 rounded border-gray-300 text-orange focus:ring-orange" required><label for="consent" class="text-sm text-black"> I confirm the information is accurate and consent to IPO Genie storing my data for evaluation purposes. * </label></div></div>',
                        7
                      )),
                    t.value ? (c(), d("div", je, u(t.value), 1)) : F("", !0),
                    e("div", Pe, [
                      e(
                        "button",
                        {
                          type: "submit",
                          disabled: r.value,
                          class:
                            "bg-[#FF6B00] text-white font-semibold px-8 py-3 rounded-xl hover:bg-[#FF6B00]/90 transition-colors disabled:opacity-50",
                        },
                        u(r.value ? "Submitting..." : "Submit Application"),
                        9,
                        Be
                      ),
                    ]),
                  ],
                  32
                )),
            s.value
              ? (c(),
                d("div", Me, [
                  ...(o[1] ||
                    (o[1] = [
                      e(
                        "svg",
                        {
                          class: "w-12 h-12 text-green-500 mx-auto mb-4",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                        },
                        [
                          e("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M5 13l4 4L19 7",
                          }),
                        ],
                        -1
                      ),
                      e(
                        "h3",
                        { class: "text-xl font-semibold mb-2" },
                        "Application Received!",
                        -1
                      ),
                      e(
                        "p",
                        null,
                        "Thank you for applying. We'll be in touch when we launch our first cohort.",
                        -1
                      ),
                    ])),
                ]))
              : F("", !0),
          ]),
        ])
      );
    },
  },
  Ve = {
    __name: "Incubator",
    setup(m) {
      return (
        z(V.incubator),
        O([
          D(),
          N([
            { name: "Home", url: "/" },
            { name: "Incubator", url: "/about/incubator/" },
          ]),
          T(),
          G(),
        ]),
        (r, s) => (
          c(), d(h, null, [p(oe), p(ce), p(ge), p(we), p(ze), p(We)], 64)
        )
      );
    },
  };
export { Ve as default };
