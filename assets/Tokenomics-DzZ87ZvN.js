import {
  _ as C,
  c as H,
  u as T,
  d as A,
  g as D,
  e as W,
  j as z,
  k as B,
  F as E,
  s as h,
  T as G,
} from "./index-CkW8Cm0p.js";
import {
  r as b,
  x as v,
  y as I,
  h as Y,
  d as r,
  e as l,
  l as i,
  f as e,
  K as j,
  m as F,
  F as k,
  z as P,
  q as M,
  G as N,
  t as x,
  A as w,
  u as V,
} from "./vue-Z9E3ejSf.js";
import { g as p } from "./gsap-BwUJxYA3.js";
import { S as f } from "./gsap-scroll-BIRgWtnx.js";
import { _ as L } from "./RelatedArticles-DNHAktEt.js";
const R = "/assets/HeroBg-D_UmDwn_.webp",
  q = "/assets/HeroBgMob-7yjif-9C.webp",
  U = {
    class: "pt-40 base-x-p max-w-[2000px] mx-auto max-md:pt-28 max-sm:pt-24",
  },
  Q = {
    class:
      "md:pl-16 max-w-[785px] z-10 pl-10 relative max-md:p-6 max-sm:p-5 max-sm:pb-8",
  },
  K = {
    __name: "Hero",
    setup(g) {
      const s = b(!1),
        n = () => {
          s.value = window.innerWidth < 768;
        };
      v(() => {
        n(), window.addEventListener("resize", n);
      }),
        I(() => {
          window.removeEventListener("resize", n);
        });
      const c = Y(() => (s.value ? q : R));
      return (t, a) => (
        l(),
        r("section", U, [
          i(C, {
            items: [{ name: "Home", to: "/" }, { name: "Tokenomics" }],
            variant: "light",
          }),
          e(
            "div",
            {
              class:
                "bg-cover bg-right bg-no-repeat rounded-3xl overflow-hidden relative min-h-[550px] flex items-center max-md:min-h-[420px] max-sm:min-h-[360px] max-md:items-start",
              style: F({ backgroundImage: `url(${c.value})` }),
            },
            [
              e("div", Q, [
                a[0] ||
                  (a[0] = j(
                    '<h1 class="title"> $IPO <span class="sectitle">Tokenomics</span>: What <span class="sectitle">Fuels</span> the Genie </h1><p class="text-white/90 text-lg max-md:text-base max-sm:text-sm mt-3 max-sm:mt-2"> $IPO powers access, priority, and participation in the early-stage investment ecosystem. </p><p class="text-white font-semibold text-lg max-md:text-base max-sm:text-sm mb-8 max-sm:mb-6"> Your bridge to tokenized private equity with crypto token bonus rewards. </p>',
                    3
                  )),
                i(H, {
                  class: "!w-max gap-3",
                  text: "Join the Presale",
                  link: "https://app.uniswap.org/swap?chain=mainnet&inputCurrency=NATIVE&outputCurrency=0xa6206ceB99A811246beBae71E1f8F49BaFAC7108",
                }),
              ]),
            ],
            4
          ),
        ])
      );
    },
  },
  J = { class: "base-x-p mt-10 max-w-[2000px] mx-auto" },
  X = {
    class:
      "flex items-center self-stretch justify-center max-md:flex-col max-md:gap-7",
  },
  Z = {
    class:
      "flex flex-col text-center items-center gap-6 max-lg:gap-4 max-md:gap-1",
  },
  ee = {
    class:
      "text-black text-lg font-inter font-semibold leading-[140%] max-lg:text-base max-md:text-xs",
  },
  te = {
    key: 0,
    class:
      "h-[160px] w-px bg-[#737373] mx-[76px] max-xl:mx-[20px] max-lg:mx-[10px] max-md:hidden",
  },
  se = {
    __name: "TokenStats",
    setup(g) {
      const s = [
        {
          title: "1B",
          subtitle: "Total $IPO Supply",
          titleClass:
            "text-4xl md:text-5xl font-bold tracking-tight text-black",
          line: !0,
        },
        {
          title: "ERC-20",
          subtitle: "Bridges to Solana, Base, and L2s",
          titleClass:
            "text-4xl md:text-5xl font-bold whitespace-nowrap tracking-tight text-black",
          line: !0,
        },
        {
          title: "Utility",
          subtitle: "Token Type",
          titleClass:
            "text-3xl md:text-4xl font-bold tracking-tight text-black leading-tight",
        },
      ];
      return (n, c) => (
        l(),
        r("section", J, [
          e("div", X, [
            (l(),
            r(
              k,
              null,
              P(s, (t, a) =>
                e("div", { key: a, class: "flex items-center" }, [
                  e("div", Z, [
                    e(
                      "div",
                      {
                        class: N([
                          t.titleClass,
                          "text-black text-[100px] font-inter font-extrabold leading-[80%] max-2xl:text-[70px] max-lg:text-[50px]",
                        ]),
                      },
                      x(t.title),
                      3
                    ),
                    e("div", ee, x(t.subtitle), 1),
                  ]),
                  t.line ? (l(), r("div", te)) : M("", !0),
                ])
              ),
              64
            )),
          ]),
        ])
      );
    },
  },
  ae = "/assets/WhyHoldImg1-CIZxe0NY.png",
  oe = "/assets/WhyHoldImg2-DR7wNw_X.png",
  ne = "/assets/WhyHoldImg3-Dz1YODtY.png",
  ie = {
    class:
      "w-max mx-auto bg-black text-white px-4 py-2 rounded-md text-sm font-semibold",
  },
  re = { class: "mt-8 flex flex-col items-center gap-3" },
  le = ["innerHTML"],
  ce = { class: "w-[190px] h-auto" },
  me = ["src", "alt"],
  de = { class: "text-sm text-black text-center" },
  pe = {
    __name: "WhyHold",
    setup(g) {
      p.registerPlugin(f);
      const s = [
          {
            tag: "Access",
            title: "Deal Flow <span class='italic font-semibold'>Access</span>",
            image: ae,
            description:
              "Holding $IPO is your ticket to the VIP room. Get priority access to Vetted Crypto Deals and pre-spot unicorns before the general public.",
          },
          {
            tag: "Earnings",
            title: "<span class='italic font-semibold'>Staking</span> & Yield",
            image: oe,
            description:
              "Put your $IPO to work. Stake your tokens to earn high Crypto Staking Rewards APY and compound your holdings while you sleep.",
          },
          {
            tag: "Governance",
            title: "Shape the <span class='italic font-semibold'>Future</span>",
            image: ne,
            description:
              "$IPO holders don't just watch; they steer. Exercise your DAO Governance Rights to vote on platform upgrades and the future of the Genie ecosystem.",
          },
        ],
        n = b(null),
        c = b(null);
      return (
        v(() => {
          if (window.innerWidth >= 768) return;
          const t = p.utils.toArray(".process-card");
          p.set(t, (a, o) => ({
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            zIndex: t.length - o,
          })),
            f.create({
              trigger: n.value,
              start: "top top",
              end: "+=300%",
              pin: !0,
              scrub: !0,
              onUpdate: (a) => {
                const o = a.progress,
                  m = t.length;
                t.forEach((O, d) => {
                  if (d === 0) return;
                  const _ = (d - 1) / (m - 1),
                    S = d / (m - 1);
                  let u = (o - _) / (S - _);
                  u = Math.min(Math.max(u, 0), 1);
                  const $ = -(t[0].offsetHeight - 100) * d;
                  p.to(O, { y: $ * u, ease: "none", overwrite: "auto" });
                });
              },
            });
        }),
        I(() => {
          f.getAll().forEach((t) => t.kill());
        }),
        (t, a) => (
          l(),
          r(
            "section",
            {
              ref_key: "sectionRef",
              ref: n,
              class:
                "base-x-p max-w-[2000px] flex flex-col items-center justify-center mt-[130px] max-xl:mt-[100px] max-lg:mt-16 max-md:mt-10 mx-auto",
            },
            [
              a[0] ||
                (a[0] = e(
                  "h2",
                  { class: "title mb-14 text-black text-center max-md:mb-5" },
                  [
                    w(" Why "),
                    e("span", { class: "sectitle" }, "Hold"),
                    w(" $IPO "),
                  ],
                  -1
                )),
              e(
                "div",
                {
                  class:
                    "grid lg:grid-cols-3 gap-8 max-md:gap-4 max-md:w-full relative max-md:h-[800px]",
                  ref_key: "cardsContainer",
                  ref: c,
                },
                [
                  (l(),
                  r(
                    k,
                    null,
                    P(s, (o, m) =>
                      e(
                        "div",
                        {
                          key: m,
                          class:
                            "bg-white process-card items-center max-md:w-full justify-center text-center rounded-3xl p-8 shadow-[0_4px_20px_0_rgba(0,0,0,0.25)] border-[#EDEDED] border-[15px] relative overflow-hidden max-md:min-h-[520px]",
                        },
                        [
                          e("div", ie, x(o.tag), 1),
                          e("div", re, [
                            e(
                              "h3",
                              {
                                class:
                                  "text-3xl max-w-[190px] font-bold tracking-tight text-black leading-tight",
                                innerHTML: o.title,
                              },
                              null,
                              8,
                              le
                            ),
                            e("div", ce, [
                              e(
                                "img",
                                {
                                  src: o.image,
                                  alt: o.tag,
                                  class: "object-contain w-full h-full",
                                  loading: "lazy",
                                },
                                null,
                                8,
                                me
                              ),
                            ]),
                            e("p", de, x(o.description), 1),
                          ]),
                        ]
                      )
                    ),
                    64
                  )),
                ],
                512
              ),
            ],
            512
          )
        )
      );
    },
  },
  y = [
    {
      title: "Is the $IPO Token Presale safe to invest in?",
      text: "Yes. The $IPO token smart contract has been audited by both SolidProof and CertiK. Our tokenomics are transparent, with clear vesting schedules and no hidden allocations.",
    },
    {
      title: "What is the IPO Genie project?",
      text: "IPO Genie is an AI-powered platform that democratizes access to pre-IPO and private equity investments. By tokenizing ownership stakes in high-growth startups, we enable everyday investors to access deals previously reserved for venture capitalists and institutional players.",
    },
    {
      title: "How does the IPO Genie DAO work?",
      text: "The IPO Genie DAO empowers $IPO token holders to participate in governance decisions. This includes voting on which deals to pursue, platform upgrades, treasury allocations, and strategic partnerships. The more tokens you hold, the greater your voting power in shaping the platform's future.",
    },
    {
      title: "What makes this the Best Crypto Presale of 2026?",
      text: "IPO Genie combines real utility with strong fundamentals. Unlike meme coins, $IPO provides access to vetted investment opportunities, staking rewards, and governance rights. Our AI-driven deal discovery, audited contracts, and clear roadmap set us apart from speculative projects.",
    },
    {
      title: "Can I stake my $IPO tokens?",
      text: "Yes! Staking is a core feature of the IPO Genie ecosystem. Stake your $IPO tokens to earn passive rewards while maintaining full platform access. Staking rewards are distributed from platform fees, and longer lock periods offer higher APY rates. Your staked tokens still count toward tier benefits.",
    },
  ],
  be = {
    __name: "Tokenomics",
    setup(g) {
      return (
        T(h.tokenomics),
        A([
          D(),
          W([
            { name: "Home", url: "/" },
            { name: "Tokenomics", url: "/about/tokenomics/" },
          ]),
          z(
            y.map((s) => ({ question: s.title, answer: s.text })),
            "/about/tokenomics/"
          ),
          B({
            url: "/about/tokenomics/",
            headline: h.tokenomics.title,
            summary: h.tokenomics.description,
          }),
        ]),
        (s, n) => (
          l(),
          r(
            k,
            null,
            [
              i(K),
              i(se),
              i(G),
              i(pe),
              i(L, {
                slugs: [
                  "what-is-tokenomics",
                  "how-to-read-tokenomics-like-a-vc",
                  "reading-tokenomics-red-flags-green-lights",
                ],
              }),
              i(E, { "faq-list": V(y) }, null, 8, ["faq-list"]),
            ],
            64
          )
        )
      );
    },
  };
export { be as default };
