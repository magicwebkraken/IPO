import { m, c as u } from "./index-CkW8Cm0p.js";
import {
  p as h,
  d as g,
  j as v,
  e as o,
  l,
  f as e,
  k as r,
  G as d,
  t as i,
  A as f,
} from "./vue-Z9E3ejSf.js";
const x = {
    key: 0,
    class:
      "flex flex-col w-[360px] min-w-[360px] max-w-[360px] pb-[14px] justify-between overflow-hidden gap-6 rounded-[20px] bg-white max-lg:gap-8 max-md:gap-10 max-md:w-full max-md:min-w-full max-md:max-w-full",
  },
  p = { class: "w-full h-[200px] overflow-hidden relative" },
  w = ["src", "alt"],
  b = { class: "flex px-4 flex-col gap-1" },
  y = {
    class:
      "text-black text-lg font-semibold leading-[140%] max-lg:text-base max-md:text-sm line-clamp-2 group-hover:text-[#FF5B00] transition-colors",
  },
  k = {
    class:
      "text-[#AFAFAF] text-xs leading-[160%] line-clamp-2 max-md:text-[10px]",
  },
  M = { class: "px-4" },
  P = { class: "relative h-[220px] overflow-hidden" },
  I = ["src", "alt"],
  B = { class: "p-6 flex flex-col gap-4" },
  C = { class: "flex items-center gap-4 text-sm text-gray-500" },
  O = { class: "flex items-center gap-2" },
  T = { class: "flex items-center gap-2" },
  F = { class: "text-xl font-bold text-black leading-tight" },
  S = { class: "text-gray-600 text-sm leading-relaxed line-clamp-2" },
  E = {
    __name: "EventCard",
    props: {
      event: { type: Object, required: !0 },
      compact: { type: Boolean, default: !1 },
    },
    setup(t) {
      return (s, n) => {
        const a = h("router-link");
        return t.compact
          ? (o(),
            g("div", x, [
              l(
                a,
                {
                  to: `/events/${t.event.slug}/`,
                  class:
                    "flex flex-col gap-6 items-center justify-center max-md:gap-5 cursor-pointer group",
                },
                {
                  default: r(() => [
                    e("div", p, [
                      e(
                        "img",
                        {
                          src: t.event.image,
                          alt: t.event.title,
                          class:
                            "w-full h-full object-cover transition-transform duration-300 group-hover:scale-105",
                          loading: "lazy",
                        },
                        null,
                        8,
                        w
                      ),
                      e(
                        "div",
                        {
                          class: d([
                            "absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold",
                            t.event.status === "live"
                              ? "bg-[#FF5B00] text-white"
                              : t.event.status === "upcoming"
                              ? "bg-black text-white"
                              : "bg-gray-400 text-white",
                          ]),
                        },
                        i(
                          t.event.status === "live"
                            ? "LIVE NOW"
                            : t.event.status === "upcoming"
                            ? "UPCOMING"
                            : "PAST EVENT"
                        ),
                        3
                      ),
                    ]),
                    e("div", b, [
                      e("div", y, i(t.event.title), 1),
                      e(
                        "div",
                        k,
                        i(t.event.date) + " • " + i(t.event.location),
                        1
                      ),
                    ]),
                  ]),
                  _: 1,
                },
                8,
                ["to"]
              ),
              e("div", M, [
                l(
                  u,
                  {
                    text: "View Event",
                    class: "!w-full",
                    to: `/events/${t.event.slug}/`,
                  },
                  null,
                  8,
                  ["to"]
                ),
              ]),
            ]))
          : (o(),
            v(
              a,
              {
                key: 1,
                to: `/events/${t.event.slug}/`,
                class:
                  "group relative bg-white rounded-[30px] overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 block",
              },
              {
                default: r(() => [
                  e("div", P, [
                    e(
                      "img",
                      {
                        src: t.event.image,
                        alt: t.event.title || "Event",
                        loading: "lazy",
                        class:
                          "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",
                      },
                      null,
                      8,
                      I
                    ),
                    e(
                      "div",
                      {
                        class: d([
                          "absolute top-4 left-4 px-4 py-1.5 rounded-full text-sm font-semibold",
                          t.event.status === "live"
                            ? "bg-[#FF5B00] text-white"
                            : t.event.status === "upcoming"
                            ? "bg-black text-white"
                            : "bg-gray-400 text-white",
                        ]),
                      },
                      i(
                        t.event.status === "live"
                          ? "LIVE NOW"
                          : t.event.status === "upcoming"
                          ? "UPCOMING"
                          : "PAST EVENT"
                      ),
                      3
                    ),
                  ]),
                  e("div", B, [
                    e("div", C, [
                      e("div", O, [
                        n[0] ||
                          (n[0] = e(
                            "svg",
                            {
                              xmlns: "http://www.w3.org/2000/svg",
                              class: "w-4 h-4",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor",
                            },
                            [
                              e("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
                              }),
                            ],
                            -1
                          )),
                        e("span", null, i(t.event.date), 1),
                      ]),
                      e("div", T, [
                        n[1] ||
                          (n[1] = e(
                            "svg",
                            {
                              xmlns: "http://www.w3.org/2000/svg",
                              class: "w-4 h-4",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor",
                            },
                            [
                              e("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
                              }),
                              e("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z",
                              }),
                            ],
                            -1
                          )),
                        e("span", null, i(t.event.location), 1),
                      ]),
                    ]),
                    e("h3", F, i(t.event.title), 1),
                    e("p", S, i(t.event.description), 1),
                    n[2] ||
                      (n[2] = e(
                        "div",
                        {
                          class:
                            "mt-2 inline-flex items-center gap-2 text-[#FF5B00] font-semibold group-hover:underline",
                        },
                        [
                          f(" View Details "),
                          e(
                            "svg",
                            {
                              xmlns: "http://www.w3.org/2000/svg",
                              class:
                                "w-4 h-4 transition-transform group-hover:translate-x-1",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor",
                            },
                            [
                              e("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M14 5l7 7m0 0l-7 7m7-7H3",
                              }),
                            ]
                          ),
                        ],
                        -1
                      )),
                  ]),
                ]),
                _: 1,
              },
              8,
              ["to"]
            ));
      };
    },
  },
  j = m(E, [["__scopeId", "data-v-a166462a"]]),
  c = [
    {
      id: 1,
      slug: "misfits-boxing-dubai-2025",
      title: "Official Financial Services Partner: Misfits Mania",
      description:
        "IPO Genie was the Official Financial Services Partner of Misfits Mania: The Fight Before Christmas, streamed live to millions worldwide.",
      fullDescription: `# Seen by Millions. Backed by IPO Genie.

IPO Genie made history as the **Official Financial Services Partner of Misfits Mania: The Fight Before Christmas**, one of the most-watched boxing events of 2025.

**Streamed live to millions of viewers worldwide**, our brand was front and center at Dubai Tennis Stadium for the headline bout: **Andrew Tate vs Chase DeMoor**.

## By The Numbers

- **Millions** of live viewers across global streaming platforms
- **Billions** of social media impressions
- **5 lucky winners** flown to Dubai with VIP ringside seats
- **Worldwide** media coverage across crypto and mainstream outlets

## The IPO Genie Moment

As the Official Financial Services Partner, IPO Genie branding was prominently featured throughout the event:

- Ring mat branding seen during every fight
- Commentary mentions throughout the broadcast
- Social media takeover across Misfits channels
- VIP hospitality suite for community winners

This wasn't just a sponsorship. It was a statement. While other crypto projects talk, **IPO Genie executes on a global stage**.

## Global Media Coverage

The partnership dominated headlines across crypto and mainstream media:

- **CoinCentral**: "Why IPO Genie Is Now Dominating 2025 Headlines"
- **Bitget**: "Misfits Event Puts IPO Genie Front and Center"
- **Cryptopolitan**: "Andrew Tate's Misfits Boxing Hype Supercharges IPO Genie"
- **Blockchain Reporter**: "IPO Genie Partners with Misfits Boxing"
- **ABP Live**: "The Official Sponsor of Andrew Tate vs. DeMoor Showdown"
- **MEXC**: "Biggest 2025 Crypto Presale Collab"
- **FinanceFeeds**: "What Andrew Tate and Smart Investing Have in Common"

## Why This Matters

This landmark partnership proved that IPO Genie isn't just another presale. We're building something real:

- **Real-World Execution**: Going beyond online marketing to deliver on a global stage
- **Mainstream Reach**: Connecting with millions outside the crypto bubble
- **Credibility**: Standing out in a crowded market with tangible, verifiable moments

Just as Misfits Boxing disrupted traditional boxing, **IPO Genie is disrupting traditional private equity**, giving everyone access to pre-IPO opportunities through AI-powered deal discovery.

## Join the Movement

The Misfits partnership was just the beginning. Join the IPO Genie community and be part of what comes next.`,
      date: "December 20, 2025",
      dateISO: "2025-12-20",
      location: "Dubai, UAE",
      venue: "Dubai Tennis Stadium",
      status: "past",
      image: "/events/misfits-boxing.webp",
      video: "/events/misfits-video.mp4",
      link: "https://blockchainreporter.net/inside-ipo-genie-our-top-crypto-presale-2025-misfits-sponsorship-financial-freedom-mission/",
      tags: ["sponsorship", "boxing", "andrew-tate", "dubai", "misfits"],
    },
  ],
  V = () => c,
  D = (t) => c.find((s) => s.slug === t);
export { j as E, D as a, V as g };
