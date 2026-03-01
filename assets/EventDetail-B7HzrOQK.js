import {
  h as v,
  w as F,
  d as a,
  f as e,
  q as d,
  l as u,
  k as f,
  G as C,
  t as n,
  A as b,
  F as g,
  z as p,
  j as x,
  p as M,
  E as V,
  e as o,
} from "./vue-Z9E3ejSf.js";
import {
  c as h,
  b as m,
  n as j,
  u as z,
  d as I,
  g as D,
  e as H,
  L,
} from "./index-CkW8Cm0p.js";
import { a as N, g as k, E as O } from "./events-BeUnrYL-.js";
import { s as S } from "./sanitize-ChfC-5Mx.js";
import "./gsap-BwUJxYA3.js";
const A = { key: 0 },
  P = { class: "relative h-[600px] max-md:h-[450px] overflow-hidden" },
  T = ["poster"],
  R = ["src"],
  G = ["src", "alt"],
  q = { class: "absolute bottom-0 left-0 right-0 p-12 max-md:p-6" },
  J = { class: "max-w-[1400px] mx-auto" },
  U = {
    class: "text-5xl max-lg:text-4xl max-md:text-3xl font-bold text-white mb-4",
  },
  W = { class: "flex flex-wrap items-center gap-6 text-white/80" },
  Y = { class: "flex items-center gap-2" },
  K = { class: "flex items-center gap-2" },
  Q = { key: 0, class: "flex items-center gap-2" },
  X = { class: "base-x-p py-16 max-md:py-10" },
  Z = { class: "max-w-[1000px] mx-auto" },
  ee = { class: "grid grid-cols-3 gap-12 max-lg:grid-cols-1" },
  te = { class: "col-span-2 max-lg:col-span-1" },
  se = ["innerHTML"],
  le = { key: 0, class: "mt-10 rounded-[20px] overflow-hidden shadow-lg" },
  oe = ["poster"],
  ae = ["src"],
  ne = { key: 1, class: "mt-8 flex flex-wrap gap-2" },
  re = { class: "col-span-1" },
  ie = { class: "bg-white rounded-[30px] p-8 shadow-lg sticky top-8" },
  de = { class: "space-y-4 mb-8" },
  ce = { class: "flex items-start gap-3" },
  ue = { class: "font-medium text-black" },
  me = { class: "flex items-start gap-3" },
  ve = { class: "font-medium text-black" },
  ge = { key: 0, class: "flex items-start gap-3" },
  pe = { class: "font-medium text-black" },
  xe = { class: "space-y-3" },
  he = { key: 0, class: "base-x-p py-16 bg-white" },
  we = { class: "max-w-[1400px] mx-auto" },
  fe = {
    class: "grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1",
  },
  be = { class: "h-48 overflow-hidden" },
  ke = ["src", "alt"],
  _e = { class: "p-5" },
  ye = { class: "text-xs text-[#FF5B00] font-medium" },
  Ee = {
    class:
      "font-semibold text-lg text-black group-hover:text-[#FF5B00] transition-colors mt-2 line-clamp-2",
  },
  Be = { class: "text-gray-500 text-sm mt-2" },
  $e = { class: "base-x-p py-16 bg-gray-50" },
  Fe = { class: "max-w-[1400px] mx-auto" },
  Ce = {
    class: "grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1",
  },
  Me = { key: 1, class: "min-h-[60vh] flex items-center justify-center" },
  Ve = { class: "text-center" },
  _ = "/images/blog-placeholder.svg",
  Ne = {
    __name: "EventDetail",
    setup(je) {
      const y = V(),
        t = v(() => N(y.params.slug)),
        E = (r) => {
          r.target.src = _;
        },
        w = v(() => {
          if (!t.value) return [];
          const c = (k().findIndex((i) => i.id === t.value.id) * 3) % m.length,
            l = [];
          for (let i = 0; i < 3 && i < m.length; i++)
            l.push(m[(c + i) % m.length]);
          return l;
        }),
        B = (r) => {
          if (!r) return "";
          const s = r
            .replace(
              /^# (.+)$/gm,
              '<h2 class="text-3xl font-bold text-black mt-6 mb-4">$1</h2>'
            )
            .replace(
              /^## (.+)$/gm,
              '<h3 class="text-xl font-bold text-black mt-8 mb-4">$1</h3>'
            )
            .replace(
              /^### (.+)$/gm,
              '<h4 class="text-lg font-semibold text-black mt-6 mb-3">$1</h4>'
            )
            .replace(
              /\*\*(.+?)\*\*/g,
              '<strong class="font-semibold text-black">$1</strong>'
            )
            .replace(
              /^- (.+)$/gm,
              '<li class="ml-5 list-disc text-gray-700 mb-2">$1</li>'
            )
            .replace(
              /^(\d+)\. (.+)$/gm,
              '<li class="ml-5 list-decimal text-gray-700 mb-2">$2</li>'
            )
            .replace(
              /\n\n/g,
              '</p><p class="mb-4 text-gray-700 leading-relaxed">'
            )
            .replace(/\n/g, "<br>")
            .replace(/^/, '<p class="mb-4 text-gray-700 leading-relaxed">')
            .replace(/$/, "</p>")
            .replace(/<p[^>]*>(<li)/g, '<ul class="mb-6 space-y-1">$1')
            .replace(/(<\/li>)<\/p>/g, "$1</ul>")
            .replace(/<p[^>]*>(<h[234])/g, "$1")
            .replace(/(<\/h[234]>)<\/p>/g, "$1");
          return S(s);
        },
        $ = v(() =>
          t.value
            ? k()
                .filter((r) => r.id !== t.value.id)
                .slice(0, 3)
            : []
        );
      return (
        F(() => {
          t.value &&
            (z({
              title: `${t.value.title} | IPO Genie Events`,
              description: t.value.description,
              path: `/events/${t.value.slug}/`,
            }),
            I([
              D(),
              H([
                { name: "Home", url: "/" },
                { name: "Events", url: "/events" },
                { name: t.value.title, url: `/events/${t.value.slug}` },
              ]),
              L({
                slug: t.value.slug,
                name: t.value.title,
                description: t.value.description,
                image: t.value.image,
                startDate: t.value.startDate || t.value.date,
                endDate: t.value.endDate,
                location: t.value.location,
                venue: t.value.venue,
                isOnline: t.value.isOnline || !1,
                link: t.value.link,
              }),
            ]));
        }),
        (r, s) => {
          const c = M("router-link");
          return t.value
            ? (o(),
              a("div", A, [
                e("section", P, [
                  t.value.video
                    ? (o(),
                      a(
                        "video",
                        {
                          key: 0,
                          class:
                            "absolute inset-0 w-full h-full object-cover pointer-events-none",
                          poster: t.value.image,
                          autoplay: "",
                          muted: "",
                          loop: "",
                          playsinline: "",
                        },
                        [
                          e(
                            "source",
                            { src: t.value.video, type: "video/mp4" },
                            null,
                            8,
                            R
                          ),
                        ],
                        8,
                        T
                      ))
                    : (o(),
                      a(
                        "img",
                        {
                          key: 1,
                          src: t.value.image,
                          alt: t.value.title,
                          class:
                            "absolute inset-0 w-full h-full object-cover pointer-events-none",
                          fetchpriority: "high",
                        },
                        null,
                        8,
                        G
                      )),
                  s[4] ||
                    (s[4] = e(
                      "div",
                      {
                        class:
                          "absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none",
                      },
                      null,
                      -1
                    )),
                  u(
                    c,
                    {
                      to: "/events/",
                      class:
                        "absolute top-24 left-8 max-md:top-16 max-md:left-4 flex items-center gap-2 text-white bg-black/30 hover:bg-black/50 px-4 py-2 rounded-full transition-colors z-30",
                    },
                    {
                      default: f(() => [
                        ...(s[0] ||
                          (s[0] = [
                            e(
                              "svg",
                              {
                                xmlns: "http://www.w3.org/2000/svg",
                                class: "w-5 h-5",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                              },
                              [
                                e("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M10 19l-7-7m0 0l7-7m-7 7h18",
                                }),
                              ],
                              -1
                            ),
                            b(" Back to Events ", -1),
                          ])),
                      ]),
                      _: 1,
                    }
                  ),
                  e(
                    "div",
                    {
                      class: C([
                        "absolute top-24 right-8 max-md:top-16 max-md:right-4 px-5 py-2 rounded-full text-sm font-semibold z-30",
                        t.value.status === "live"
                          ? "bg-[#FF5B00] text-white"
                          : t.value.status === "upcoming"
                          ? "bg-white text-black"
                          : "bg-gray-400 text-white",
                      ]),
                    },
                    n(
                      t.value.status === "live"
                        ? "LIVE NOW"
                        : t.value.status === "upcoming"
                        ? "UPCOMING"
                        : "PAST EVENT"
                    ),
                    3
                  ),
                  e("div", q, [
                    e("div", J, [
                      e("h1", U, n(t.value.title), 1),
                      e("div", W, [
                        e("div", Y, [
                          s[1] ||
                            (s[1] = e(
                              "svg",
                              {
                                xmlns: "http://www.w3.org/2000/svg",
                                class: "w-5 h-5",
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
                          e("span", null, n(t.value.date), 1),
                        ]),
                        e("div", K, [
                          s[2] ||
                            (s[2] = e(
                              "svg",
                              {
                                xmlns: "http://www.w3.org/2000/svg",
                                class: "w-5 h-5",
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
                          e("span", null, n(t.value.location), 1),
                        ]),
                        t.value.venue
                          ? (o(),
                            a("div", Q, [
                              s[3] ||
                                (s[3] = e(
                                  "svg",
                                  {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    class: "w-5 h-5",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                  },
                                  [
                                    e("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
                                    }),
                                  ],
                                  -1
                                )),
                              e("span", null, n(t.value.venue), 1),
                            ]))
                          : d("", !0),
                      ]),
                    ]),
                  ]),
                ]),
                e("section", X, [
                  e("div", Z, [
                    e("div", ee, [
                      e("div", te, [
                        e(
                          "div",
                          {
                            class: "prose prose-lg max-w-none leading-relaxed",
                            innerHTML: B(t.value.fullDescription),
                          },
                          null,
                          8,
                          se
                        ),
                        t.value.video
                          ? (o(),
                            a("div", le, [
                              e(
                                "video",
                                {
                                  class: "w-full aspect-video bg-black",
                                  poster: t.value.image,
                                  controls: "",
                                  playsinline: "",
                                },
                                [
                                  e(
                                    "source",
                                    { src: t.value.video, type: "video/mp4" },
                                    null,
                                    8,
                                    ae
                                  ),
                                  s[5] ||
                                    (s[5] = b(
                                      " Your browser does not support the video tag. ",
                                      -1
                                    )),
                                ],
                                8,
                                oe
                              ),
                            ]))
                          : d("", !0),
                        t.value.tags && t.value.tags.length
                          ? (o(),
                            a("div", ne, [
                              (o(!0),
                              a(
                                g,
                                null,
                                p(
                                  t.value.tags,
                                  (l) => (
                                    o(),
                                    a(
                                      "span",
                                      {
                                        key: l,
                                        class:
                                          "px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full text-sm",
                                      },
                                      " #" + n(l),
                                      1
                                    )
                                  )
                                ),
                                128
                              )),
                            ]))
                          : d("", !0),
                      ]),
                      e("div", re, [
                        e("div", ie, [
                          s[12] ||
                            (s[12] = e(
                              "h3",
                              { class: "text-xl font-bold text-black mb-6" },
                              "Event Details",
                              -1
                            )),
                          e("div", de, [
                            e("div", ce, [
                              s[7] ||
                                (s[7] = e(
                                  "svg",
                                  {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    class: "w-5 h-5 text-[#FF5B00] mt-0.5",
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
                              e("div", null, [
                                s[6] ||
                                  (s[6] = e(
                                    "p",
                                    { class: "text-sm text-gray-500" },
                                    "Date",
                                    -1
                                  )),
                                e("p", ue, n(t.value.date), 1),
                              ]),
                            ]),
                            e("div", me, [
                              s[9] ||
                                (s[9] = e(
                                  "svg",
                                  {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    class: "w-5 h-5 text-[#FF5B00] mt-0.5",
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
                              e("div", null, [
                                s[8] ||
                                  (s[8] = e(
                                    "p",
                                    { class: "text-sm text-gray-500" },
                                    "Location",
                                    -1
                                  )),
                                e("p", ve, n(t.value.location), 1),
                              ]),
                            ]),
                            t.value.venue
                              ? (o(),
                                a("div", ge, [
                                  s[11] ||
                                    (s[11] = e(
                                      "svg",
                                      {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        class: "w-5 h-5 text-[#FF5B00] mt-0.5",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                      },
                                      [
                                        e("path", {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          "stroke-width": "2",
                                          d: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
                                        }),
                                      ],
                                      -1
                                    )),
                                  e("div", null, [
                                    s[10] ||
                                      (s[10] = e(
                                        "p",
                                        { class: "text-sm text-gray-500" },
                                        "Venue",
                                        -1
                                      )),
                                    e("p", pe, n(t.value.venue), 1),
                                  ]),
                                ]))
                              : d("", !0),
                          ]),
                          e("div", xe, [
                            t.value.link
                              ? (o(),
                                x(
                                  h,
                                  {
                                    key: 0,
                                    text:
                                      t.value.status === "past"
                                        ? "Read Coverage"
                                        : t.value.status === "live"
                                        ? "Join Now"
                                        : "Register Interest",
                                    link: t.value.link,
                                    class: "w-full",
                                  },
                                  null,
                                  8,
                                  ["text", "link"]
                                ))
                              : d("", !0),
                            u(h, {
                              text: "Buy $IPO Now",
                              link: "app.uniswap.org/swap?chain=mainnet&inputCurrency=NATIVE&outputCurrency=0xComingSoon",
                              "bg-color": "transparent",
                              "text-color": "#000",
                              "border-color": "#000",
                              "arrow-color": "#fff",
                              "bg-arrow": "#FF5B00",
                              class: "w-full",
                            }),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                w.value.length > 0
                  ? (o(),
                    a("section", he, [
                      e("div", we, [
                        s[13] ||
                          (s[13] = e(
                            "h2",
                            { class: "text-3xl font-bold text-black mb-8" },
                            "Related Articles",
                            -1
                          )),
                        e("div", fe, [
                          (o(!0),
                          a(
                            g,
                            null,
                            p(
                              w.value,
                              (l) => (
                                o(),
                                x(
                                  c,
                                  {
                                    key: l.slug,
                                    to: `/blog/${l.slug}/`,
                                    class:
                                      "group bg-gray-50 rounded-xl overflow-hidden hover:bg-gray-100 transition-colors border border-gray-200",
                                  },
                                  {
                                    default: f(() => [
                                      e("div", be, [
                                        e(
                                          "img",
                                          {
                                            src:
                                              l.thumbnailImage ||
                                              l.mainImage ||
                                              _,
                                            alt: l.name,
                                            class:
                                              "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300",
                                            loading: "lazy",
                                            onError: E,
                                          },
                                          null,
                                          40,
                                          ke
                                        ),
                                      ]),
                                      e("div", _e, [
                                        e("span", ye, n(l.rawCategory), 1),
                                        e("h3", Ee, n(l.name), 1),
                                        e("p", Be, n(l.time), 1),
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
                    ]))
                  : d("", !0),
                e("section", $e, [
                  e("div", Fe, [
                    s[14] ||
                      (s[14] = e(
                        "h2",
                        { class: "text-3xl font-bold text-black mb-8" },
                        "Other Events",
                        -1
                      )),
                    e("div", Ce, [
                      (o(!0),
                      a(
                        g,
                        null,
                        p(
                          $.value,
                          (l) => (
                            o(),
                            x(O, { key: l.id, event: l }, null, 8, ["event"])
                          )
                        ),
                        128
                      )),
                    ]),
                  ]),
                ]),
                u(j),
              ]))
            : (o(),
              a("div", Me, [
                e("div", Ve, [
                  s[15] ||
                    (s[15] = e(
                      "h1",
                      { class: "text-4xl font-bold text-black mb-4" },
                      "Event Not Found",
                      -1
                    )),
                  s[16] ||
                    (s[16] = e(
                      "p",
                      { class: "text-gray-600 mb-8" },
                      "The event you're looking for doesn't exist.",
                      -1
                    )),
                  u(h, { text: "View All Events", to: "/events/" }),
                ]),
              ]));
        }
      );
    },
  };
export { Ne as default };
