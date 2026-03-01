var M = Object.defineProperty,
  E = Object.defineProperties;
var H = Object.getOwnPropertyDescriptors;
var O = Object.getOwnPropertySymbols;
var z = Object.prototype.hasOwnProperty,
  R = Object.prototype.propertyIsEnumerable;
var G = (d, r, u) =>
    r in d
      ? M(d, r, { enumerable: !0, configurable: !0, writable: !0, value: u })
      : (d[r] = u),
  A = (d, r) => {
    for (var u in r || (r = {})) z.call(r, u) && G(d, u, r[u]);
    if (O) for (var u of O(r)) R.call(r, u) && G(d, u, r[u]);
    return d;
  },
  D = (d, r) => E(d, H(r));
import {
  h as l,
  d as i,
  e as s,
  f as t,
  t as g,
  A as b,
  l as y,
  q as x,
  F as f,
  z as _,
  k,
  p as N,
  E as J,
  j as w,
} from "./vue-Z9E3ejSf.js";
import {
  G as V,
  d as W,
  H as q,
  _ as K,
  b as F,
  g as Q,
  I as U,
  e as X,
  k as Y,
  J as Z,
  j as ee,
  c as j,
} from "./index-CkW8Cm0p.js";
import { glossary as te } from "./glossary.generated-BbgRlcU_.js";
import { I as ae, g as oe } from "./InlineNewsletter-_bu2eZXr.js";
import { s as ne } from "./sanitize-ChfC-5Mx.js";
import "./gsap-BwUJxYA3.js";
const le = {
    class:
      "my-10 p-6 md:p-8 bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-2xl border border-white/10 shadow-lg",
  },
  se = { class: "flex flex-col md:flex-row md:items-center gap-6" },
  re = {
    class:
      "flex-shrink-0 w-14 h-14 rounded-xl bg-[#FF5B00]/20 flex items-center justify-center",
  },
  ie = {
    key: 0,
    class: "w-7 h-7 text-[#FF5B00]",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
  },
  ue = {
    key: 1,
    class: "w-7 h-7 text-[#FF5B00]",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
  },
  ce = { class: "flex-grow" },
  de = { class: "text-xl md:text-2xl font-bold text-white mb-2" },
  ge = { class: "text-white/70 text-sm md:text-base" },
  me = ["href", "target", "rel"],
  pe = {
    __name: "BlogCTA",
    props: {
      variant: {
        type: String,
        default: "presale",
        validator: (d) => ["presale", "newsletter"].includes(d),
      },
      headline: { type: String, default: null },
      subtext: { type: String, default: null },
      buttonText: { type: String, default: null },
      trackingLocation: { type: String, default: "blog_inline_cta" },
    },
    setup(d) {
      const r = d,
        u = {
          presale: {
            headline: "Ready to Access Pre-IPO Deals?",
            subtext:
              "Join 10,000+ investors getting early access to the next SpaceX and Stripe.",
            buttonText: "Join the Presale",
            link: "https://app.uniswap.org/swap?chain=mainnet&inputCurrency=NATIVE&outputCurrency=0xComingSoon",
            icon: "rocket",
          },
          newsletter: {
            headline: "Stay Ahead of the Market",
            subtext:
              "Get weekly insights on pre-IPO opportunities delivered to your inbox.",
            buttonText: "Subscribe Now",
            link: "/newsletter/",
            icon: "mail",
          },
        },
        e = l(() => {
          const p = u[r.variant] || u.presale;
          return {
            headline: r.headline || p.headline,
            subtext: r.subtext || p.subtext,
            buttonText: r.buttonText || p.buttonText,
            link: p.link,
            icon: p.icon,
          };
        }),
        B = () => {
          V(e.value.buttonText, {
            location: r.trackingLocation,
            destination: e.value.link,
            variant: r.variant,
          });
        };
      return (p, h) => (
        s(),
        i("aside", le, [
          t("div", se, [
            t("div", re, [
              e.value.icon === "rocket"
                ? (s(),
                  i("svg", ie, [
                    ...(h[0] ||
                      (h[0] = [
                        t(
                          "path",
                          {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z",
                          },
                          null,
                          -1
                        ),
                      ])),
                  ]))
                : (s(),
                  i("svg", ue, [
                    ...(h[1] ||
                      (h[1] = [
                        t(
                          "path",
                          {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                          },
                          null,
                          -1
                        ),
                      ])),
                  ])),
            ]),
            t("div", ce, [
              t("h3", de, g(e.value.headline), 1),
              t("p", ge, g(e.value.subtext), 1),
            ]),
            t(
              "a",
              {
                href: e.value.link,
                target: e.value.link.startsWith("http") ? "_blank" : void 0,
                rel: e.value.link.startsWith("http")
                  ? "noopener noreferrer"
                  : void 0,
                class:
                  "flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-[#FF5B00] text-white font-semibold rounded-xl hover:bg-[#ff6a1a] transition-all duration-200 hover:-translate-y-0.5 text-sm md:text-base whitespace-nowrap",
                onClick: B,
              },
              [
                b(g(e.value.buttonText) + " ", 1),
                h[2] ||
                  (h[2] = t(
                    "svg",
                    {
                      class: "w-4 h-4",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                    },
                    [
                      t("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M17 8l4 4m0 0l-4 4m4-4H3",
                      }),
                    ],
                    -1
                  )),
              ],
              8,
              me
            ),
          ]),
        ])
      );
    },
  },
  he = { class: "min-h-screen bg-white text-black pt-32 pb-20" },
  ve = {
    key: 0,
    class: "max-w-4xl mx-auto px-6",
    itemscope: "",
    itemtype: "https://schema.org/BlogPosting",
  },
  xe = { class: "flex flex-wrap items-center gap-4 mb-4" },
  fe = {
    class: "px-3 py-1 bg-[#FF5B00] text-white rounded-full text-sm",
    itemprop: "articleSection",
  },
  be = { key: 0, class: "text-gray-500 text-sm" },
  ye = ["datetime"],
  _e = {
    class: "text-4xl md:text-5xl font-bold leading-tight mb-8",
    itemprop: "headline",
  },
  ke = { class: "rounded-2xl overflow-hidden mb-10" },
  we = ["src", "alt"],
  Fe = { class: "blog-content", itemprop: "articleBody" },
  Pe = { class: "mb-8" },
  Ie = ["innerHTML"],
  Be = {
    class:
      "mt-16 p-8 bg-gradient-to-r from-[#FF5B00]/10 to-[#FF5B00]/5 rounded-2xl border border-[#FF5B00]/30",
  },
  $e = { key: 0, class: "mt-12" },
  Se = { class: "flex flex-wrap gap-3" },
  Ce = { key: 1, class: "mt-12" },
  Te = { class: "flex flex-wrap gap-3" },
  Oe = { class: "text-gray-500 text-sm mt-3" },
  Ge = { key: 2, class: "mt-16" },
  Ae = { class: "grid md:grid-cols-3 gap-6" },
  De = { class: "h-40 overflow-hidden" },
  je = ["src", "alt"],
  Le = { class: "p-4" },
  Me = {
    class:
      "font-semibold text-sm line-clamp-2 text-black group-hover:text-[#FF5B00] transition-colors",
  },
  Ee = { key: 3, class: "mt-16" },
  He = { class: "grid md:grid-cols-2 lg:grid-cols-3 gap-6" },
  ze = { class: "w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden" },
  Re = ["src", "alt"],
  Ne = { class: "flex-1 min-w-0" },
  Je = { class: "text-xs text-[#FF5B00] font-medium" },
  Ve = {
    class:
      "font-semibold text-sm line-clamp-2 text-black group-hover:text-[#FF5B00] transition-colors mt-1",
  },
  We = { class: "text-xs text-gray-500 mt-1" },
  qe = { key: 1, class: "max-w-4xl mx-auto px-6 text-center" },
  I = "/images/blog-placeholder.svg",
  tt = {
    __name: "BlogDetail",
    setup(d) {
      const r = J(),
        u = (o) => {
          o.target.src = I;
        },
        e = l(() => F.find((o) => o.slug === r.params.slug)),
        B = l(() =>
          e.value
            ? [
                { name: "Home", to: "/" },
                { name: "Blog", to: "/blog/" },
                { name: e.value.name },
              ]
            : []
        ),
        p = l(() => {
          if (!e.value) return [];
          const o = [
            Q(),
            U(e.value),
            X([
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog/" },
              { name: e.value.name, url: `/blog/${e.value.slug}/` },
            ]),
          ];
          o.push(
            Y({
              url: `/blog/${e.value.slug}/`,
              headline: e.value.metaTitle || e.value.name,
              summary: e.value.metaDescription || e.value.textPreview,
            })
          );
          const a = Z(e.value.content);
          if (a.length > 0) {
            const c = ee(a, `/blog/${e.value.slug}/`);
            c && o.push(c);
          }
          return o;
        });
      W(p),
        q({
          title: l(
            () =>
              (e.value && e.value.metaTitle) ||
              (e.value && e.value.name) ||
              "Blog | IPO Genie"
          ),
          meta: [
            {
              name: "description",
              content: l(
                () =>
                  (e.value && e.value.metaDescription) ||
                  (e.value && e.value.textPreview) ||
                  "Read the latest insights from IPO Genie"
              ),
            },
            {
              property: "og:title",
              content: l(
                () =>
                  (e.value && e.value.metaTitle) ||
                  (e.value && e.value.name) ||
                  "Blog | IPO Genie"
              ),
            },
            {
              property: "og:description",
              content: l(
                () =>
                  (e.value && e.value.metaDescription) ||
                  (e.value && e.value.textPreview) ||
                  ""
              ),
            },
            {
              property: "og:image",
              content: l(() => {
                const o = (e.value && e.value.mainImage) || "";
                return o.startsWith("/") ? `https://ipogenie.ai${o}` : o;
              }),
            },
            { property: "og:image:width", content: "1200" },
            { property: "og:image:height", content: "630" },
            { property: "og:type", content: "article" },
            {
              property: "og:url",
              content: l(
                () =>
                  `https://ipogenie.ai/blog/${(e.value && e.value.slug) || ""}/`
              ),
            },
            { name: "twitter:card", content: "summary_large_image" },
            {
              name: "twitter:title",
              content: l(
                () =>
                  (e.value && e.value.metaTitle) ||
                  (e.value && e.value.name) ||
                  ""
              ),
            },
            {
              name: "twitter:description",
              content: l(
                () =>
                  (e.value && e.value.metaDescription) ||
                  (e.value && e.value.textPreview) ||
                  ""
              ),
            },
            {
              name: "twitter:image",
              content: l(() => {
                const o = (e.value && e.value.mainImage) || "";
                return o.startsWith("/") ? `https://ipogenie.ai${o}` : o;
              }),
            },
            {
              property: "article:published_time",
              content: l(() => (e.value && e.value.createdOn) || ""),
            },
            {
              property: "article:modified_time",
              content: l(
                () =>
                  (e.value && e.value.lastPublished) ||
                  (e.value && e.value.createdOn) ||
                  ""
              ),
            },
            {
              property: "article:section",
              content: l(() => (e.value && e.value.rawCategory) || ""),
            },
            {
              property: "article:tag",
              content: l(() => (e.value && e.value.category) || ""),
            },
          ],
          link: [
            {
              rel: "canonical",
              href: l(
                () =>
                  `https://ipogenie.ai/blog/${(e.value && e.value.slug) || ""}/`
              ),
            },
          ],
        });
      const h = (o) =>
          o
            ? new Date(o).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            : "",
        L = (o) =>
          o
            ? o
                .replace(
                  /href="https?:\/\/(www\.)?ipogenie\.ai\/blog\/([^"]*)"/g,
                  (a, c, n) => {
                    const v = String(n || "").replace(/\/+$/, "");
                    return v ? `href="/blog/${v}/"` : 'href="/blog/"';
                  }
                )
                .replace(/href="\/blog\/([^"\/]+)"/g, 'href="/blog/$1/"')
                .replace(
                  /href="https?:\/\/(www\.)?ipogenie\.ai\/?"/g,
                  'href="/"'
                )
                .replace(
                  /href="https?:\/\/whitepaper\.ipogenie\.ai\/?"/g,
                  'href="/whitepaper/"'
                )
                .replace(/href="\/whitepaper"(?!\/)"/g, 'href="/whitepaper/"')
                .replace(
                  /href="https?:\/\/buy\.ipogenie\.ai\/?"/g,
                  'href="https://app.uniswap.org/swap?chain=mainnet&inputCurrency=NATIVE&outputCurrency=0xComingSoon" target="_blank" rel="noopener noreferrer"'
                )
                .replace(/<img(?![^>]*alt=)/g, '<img alt="Blog illustration"')
                .replace(/<img(?![^>]*loading=)/g, '<img loading="lazy"')
                .replace(/ id=""/g, "")
            : "",
        P = l(() =>
          !e.value || !e.value.content
            ? []
            : e.value.content.map((o) =>
                D(A({}, o), { content: ne(L(o.content)) })
              )
        ),
        $ = l(() => {
          if (!e.value) return [];
          const o = F.filter(
            (c) => c.category === e.value.category && c.slug !== e.value.slug
          );
          if (o.length >= 3) return o.slice(0, 3);
          const a = F.filter(
            (c) => c.category !== e.value.category && c.slug !== e.value.slug
          ).slice(0, 3 - o.length);
          return [...o, ...a];
        }),
        S = l(() => {
          if (!e.value) return [];
          const o = new Set([e.value.slug, ...$.value.map((m) => m.slug)]),
            a = F.filter((m) => !o.has(m.slug));
          if (a.length === 0) return [];
          const n =
              (F.findIndex((m) => m.slug === e.value.slug) * 6) % a.length,
            v = [];
          for (let m = 0; m < Math.min(6, a.length); m++)
            v.push(a[(n + m) % a.length]);
          return v;
        }),
        C = l(() => (e.value ? oe(e.value, te, 5) : [])),
        T = l(() =>
          !P.value || P.value.length < 3 ? -1 : Math.floor(P.value.length * 0.4)
        );
      return (o, a) => {
        const c = N("router-link");
        return (
          s(),
          i("main", he, [
            e.value
              ? (s(),
                i("article", ve, [
                  y(K, { items: B.value, variant: "light" }, null, 8, [
                    "items",
                  ]),
                  t("div", xe, [
                    t("span", fe, g(e.value.rawCategory), 1),
                    e.value.time
                      ? (s(), i("span", be, g(e.value.time), 1))
                      : x("", !0),
                    e.value.lastPublished
                      ? (s(),
                        i(
                          "time",
                          {
                            key: 1,
                            datetime: e.value.lastPublished,
                            itemprop: "datePublished",
                            class: "text-gray-500 text-sm",
                          },
                          g(h(e.value.lastPublished)),
                          9,
                          ye
                        ))
                      : x("", !0),
                  ]),
                  t("h1", _e, g(e.value.name), 1),
                  a[9] ||
                    (a[9] = t(
                      "div",
                      {
                        class:
                          "flex items-center gap-3 mb-8 pb-6 border-b border-gray-200",
                        itemprop: "author",
                        itemscope: "",
                        itemtype: "https://schema.org/Organization",
                      },
                      [
                        t(
                          "div",
                          {
                            class:
                              "w-10 h-10 rounded-full bg-[#FF5B00] flex items-center justify-center text-white font-bold text-sm",
                          },
                          " IPO "
                        ),
                        t("div", null, [
                          t(
                            "span",
                            {
                              itemprop: "name",
                              class: "font-medium text-black",
                            },
                            "IPO Genie Research Team"
                          ),
                          t("meta", {
                            itemprop: "url",
                            content: "https://ipogenie.ai",
                          }),
                          t(
                            "p",
                            { class: "text-gray-500 text-sm" },
                            "AI-powered pre-IPO investment insights"
                          ),
                        ]),
                      ],
                      -1
                    )),
                  t("figure", ke, [
                    t(
                      "img",
                      {
                        src: e.value.mainImage || I,
                        alt: e.value.name,
                        class: "w-full h-auto object-cover",
                        itemprop: "image",
                        loading: "eager",
                        fetchpriority: "high",
                        onError: u,
                      },
                      null,
                      40,
                      we
                    ),
                  ]),
                  t("div", Fe, [
                    (s(!0),
                    i(
                      f,
                      null,
                      _(
                        P.value,
                        (n, v) => (
                          s(),
                          i(
                            f,
                            { key: v },
                            [
                              t("section", Pe, [
                                t("div", { innerHTML: n.content }, null, 8, Ie),
                              ]),
                              v === T.value && T.value > 0
                                ? (s(),
                                  w(
                                    pe,
                                    {
                                      key: 0,
                                      variant: "presale",
                                      "tracking-location": `blog_${e.value.slug}_mid_content`,
                                    },
                                    null,
                                    8,
                                    ["tracking-location"]
                                  ))
                                : x("", !0),
                            ],
                            64
                          )
                        )
                      ),
                      128
                    )),
                  ]),
                  a[10] ||
                    (a[10] = t(
                      "aside",
                      {
                        class:
                          "mt-12 p-6 bg-gray-100 rounded-xl border border-gray-200",
                      },
                      [
                        t(
                          "h3",
                          {
                            class:
                              "text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide",
                          },
                          "Disclaimer"
                        ),
                        t(
                          "p",
                          { class: "text-gray-600 text-sm leading-relaxed" },
                          " This content is for educational and informational purposes only and does not constitute financial, investment, or legal advice. Cryptocurrency and pre-IPO investments carry significant risks, including the potential loss of principal. Past performance is not indicative of future results. Always conduct your own research and consult with qualified professionals before making investment decisions. "
                        ),
                      ],
                      -1
                    )),
                  t("aside", Be, [
                    a[0] ||
                      (a[0] = t(
                        "h2",
                        { class: "text-2xl font-bold mb-4 text-black" },
                        "Ready to Join IPO Genie?",
                        -1
                      )),
                    a[1] ||
                      (a[1] = t(
                        "p",
                        { class: "text-gray-600 mb-6" },
                        " Get early access to AI-vetted pre-IPO opportunities and join our growing community. ",
                        -1
                      )),
                    y(j, {
                      text: "Join Presale",
                      class: "!w-max",
                      link: "https://app.uniswap.org/swap?chain=mainnet&inputCurrency=NATIVE&outputCurrency=0xComingSoon",
                    }),
                  ]),
                  y(
                    ae,
                    {
                      source: `blog_${e.value.slug}_inline`,
                      headline: "Get Pre-IPO Insights Weekly",
                      subtext:
                        "Join 5,000+ investors getting exclusive deal alerts.",
                    },
                    null,
                    8,
                    ["source"]
                  ),
                  e.value.relatedPillarPages &&
                  e.value.relatedPillarPages.length > 0
                    ? (s(),
                      i("section", $e, [
                        a[2] ||
                          (a[2] = t(
                            "h2",
                            { class: "text-xl font-bold mb-4 text-black" },
                            "Explore IPO Genie",
                            -1
                          )),
                        t("div", Se, [
                          (s(!0),
                          i(
                            f,
                            null,
                            _(
                              e.value.relatedPillarPages,
                              (n) => (
                                s(),
                                w(
                                  c,
                                  {
                                    key: n.path,
                                    to: n.path,
                                    class:
                                      "px-5 py-2.5 bg-gray-100 hover:bg-[#FF5B00] hover:text-white rounded-full text-sm font-medium text-gray-700 transition-colors border border-gray-200 hover:border-[#FF5B00]",
                                  },
                                  { default: k(() => [b(g(n.name), 1)]), _: 2 },
                                  1032,
                                  ["to"]
                                )
                              )
                            ),
                            128
                          )),
                        ]),
                      ]))
                    : x("", !0),
                  C.value.length > 0
                    ? (s(),
                      i("section", Ce, [
                        a[6] ||
                          (a[6] = t(
                            "h2",
                            { class: "text-xl font-bold mb-4 text-black" },
                            "Key Terms to Know",
                            -1
                          )),
                        t("div", Te, [
                          (s(!0),
                          i(
                            f,
                            null,
                            _(
                              C.value,
                              (n) => (
                                s(),
                                w(
                                  c,
                                  {
                                    key: n.slug,
                                    to: `/learn/${n.slug}/`,
                                    class:
                                      "px-4 py-2 bg-gray-100 hover:bg-[#FF5B00] hover:text-white rounded-full text-sm text-gray-700 transition-colors border border-gray-200 hover:border-[#FF5B00]",
                                  },
                                  { default: k(() => [b(g(n.term), 1)]), _: 2 },
                                  1032,
                                  ["to"]
                                )
                              )
                            ),
                            128
                          )),
                        ]),
                        t("p", Oe, [
                          a[4] ||
                            (a[4] = b(" New to investing? Explore our ", -1)),
                          y(
                            c,
                            {
                              to: "/learn/",
                              class: "text-[#FF5B00] hover:underline",
                            },
                            {
                              default: k(() => [
                                ...(a[3] || (a[3] = [b("glossary", -1)])),
                              ]),
                              _: 1,
                            }
                          ),
                          a[5] || (a[5] = b(" for more terms. ", -1)),
                        ]),
                      ]))
                    : x("", !0),
                  $.value.length > 0
                    ? (s(),
                      i("section", Ge, [
                        a[7] ||
                          (a[7] = t(
                            "h2",
                            { class: "text-2xl font-bold mb-8 text-black" },
                            "Related Articles",
                            -1
                          )),
                        t("div", Ae, [
                          (s(!0),
                          i(
                            f,
                            null,
                            _(
                              $.value,
                              (n) => (
                                s(),
                                w(
                                  c,
                                  {
                                    key: n.id,
                                    to: `/blog/${n.slug}/`,
                                    class:
                                      "group bg-gray-50 rounded-xl overflow-hidden hover:bg-gray-100 transition-colors border border-gray-200",
                                  },
                                  {
                                    default: k(() => [
                                      t("div", De, [
                                        t(
                                          "img",
                                          {
                                            src:
                                              n.thumbnailImage ||
                                              n.mainImage ||
                                              I,
                                            alt: n.name,
                                            class:
                                              "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300",
                                            loading: "lazy",
                                            onError: u,
                                          },
                                          null,
                                          40,
                                          je
                                        ),
                                      ]),
                                      t("div", Le, [t("h3", Me, g(n.name), 1)]),
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
                      ]))
                    : x("", !0),
                  S.value.length > 0
                    ? (s(),
                      i("section", Ee, [
                        a[8] ||
                          (a[8] = t(
                            "h2",
                            { class: "text-2xl font-bold mb-8 text-black" },
                            "More from IPO Genie",
                            -1
                          )),
                        t("div", He, [
                          (s(!0),
                          i(
                            f,
                            null,
                            _(
                              S.value,
                              (n) => (
                                s(),
                                w(
                                  c,
                                  {
                                    key: n.id,
                                    to: `/blog/${n.slug}/`,
                                    class:
                                      "group flex gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors border border-gray-200",
                                  },
                                  {
                                    default: k(() => [
                                      t("div", ze, [
                                        t(
                                          "img",
                                          {
                                            src:
                                              n.thumbnailImage ||
                                              n.mainImage ||
                                              I,
                                            alt: n.name,
                                            class:
                                              "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300",
                                            loading: "lazy",
                                            onError: u,
                                          },
                                          null,
                                          40,
                                          Re
                                        ),
                                      ]),
                                      t("div", Ne, [
                                        t("span", Je, g(n.rawCategory), 1),
                                        t("h3", Ve, g(n.name), 1),
                                        t("p", We, g(n.time), 1),
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
                      ]))
                    : x("", !0),
                ]))
              : (s(),
                i("div", qe, [
                  a[11] ||
                    (a[11] = t(
                      "h2",
                      { class: "text-3xl font-bold mb-4 text-black" },
                      "Blog not found",
                      -1
                    )),
                  a[12] ||
                    (a[12] = t(
                      "p",
                      { class: "text-gray-500 mb-8" },
                      "The blog post you're looking for doesn't exist.",
                      -1
                    )),
                  y(j, {
                    text: "Back to Blogs",
                    to: "/blog/",
                    class: "!w-max mx-auto",
                  }),
                ])),
          ])
        );
      };
    },
  };
export { tt as default };
