var $ = (T, g, m) =>
  new Promise((k, c) => {
    var w = (u) => {
        try {
          y(m.next(u));
        } catch (v) {
          c(v);
        }
      },
      e = (u) => {
        try {
          y(m.throw(u));
        } catch (v) {
          c(v);
        }
      },
      y = (u) => (u.done ? k(u.value) : Promise.resolve(u.value).then(w, e));
    y((m = m.apply(T, g)).next());
  });
import {
  m as H,
  M as R,
  H as M,
  O as A,
  _ as S,
  b as E,
  P as V,
  c as N,
} from "./index-CkW8Cm0p.js";
import {
  X as W,
  h as l,
  d as a,
  l as x,
  f as t,
  q as d,
  t as i,
  F as p,
  z as h,
  E as Q,
  p as K,
  e as r,
  j as F,
  k as b,
  A as q,
} from "./vue-Z9E3ejSf.js";
import { I as U, a as X } from "./InlineNewsletter-_bu2eZXr.js";
import { s as Y } from "./sanitize-ChfC-5Mx.js";
import "./gsap-BwUJxYA3.js";
const Z = { class: "min-h-screen bg-white text-black pt-32 pb-20" },
  ee = { key: 0, class: "max-w-4xl mx-auto px-6" },
  te = {
    class:
      "inline-block px-3 py-1 bg-[#FF5B00] text-white rounded-full text-sm mb-4 capitalize",
  },
  se = { class: "text-4xl md:text-5xl font-bold leading-tight mb-6" },
  oe = { class: "text-xl text-gray-700 mb-8 pb-6 border-b border-gray-200" },
  re = { key: 0, class: "prose prose-lg max-w-none mb-12" },
  ne = ["innerHTML"],
  ae = { key: 1, class: "mb-12" },
  le = { class: "space-y-3" },
  ie = { class: "text-[#FF5B00] font-bold" },
  ue = { class: "text-gray-700" },
  ce = { key: 2, class: "mb-12" },
  de = { class: "space-y-4" },
  me = {
    class:
      "flex items-center justify-between p-4 cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors",
  },
  ge = { class: "font-medium" },
  pe = { class: "p-4 text-gray-700" },
  he = { key: 3, class: "mb-12" },
  ye = { class: "flex flex-wrap gap-3" },
  ve = { key: 4, class: "mb-12" },
  xe = { class: "text-2xl font-bold mb-6" },
  _e = { class: "grid md:grid-cols-2 gap-4" },
  fe = { class: "font-semibold group-hover:text-[#FF5B00] transition-colors" },
  be = { class: "text-gray-600 text-sm line-clamp-2 mt-1" },
  ke = { key: 5, class: "mb-12" },
  we = { class: "grid md:grid-cols-3 gap-4" },
  Fe = { class: "h-32 overflow-hidden" },
  Te = ["src", "alt"],
  Ie = { class: "p-4" },
  Pe = {
    class:
      "font-semibold text-sm line-clamp-2 text-black group-hover:text-[#FF5B00] transition-colors",
  },
  Le = { class: "text-gray-500 text-xs mt-2 line-clamp-2" },
  Be = { key: 6, class: "mb-12" },
  Ge = { class: "space-y-3" },
  Oe = { key: 0, class: "text-gray-500 text-sm mt-1 line-clamp-1" },
  De = {
    class:
      "mt-16 p-8 bg-gradient-to-r from-[#FF5B00]/10 to-[#FF5B00]/5 rounded-2xl border border-[#FF5B00]/30",
  },
  $e = { class: "text-gray-600 mb-6" },
  Ae = { key: 1, class: "max-w-4xl mx-auto px-6 text-center" },
  z = "/images/blog-placeholder.svg",
  Ee = {
    __name: "GlossaryDetail",
    setup(T) {
      return $(this, null, function* () {
        let g, m;
        const k = (s) => {
          s.target.src = z;
        };
        let c = [];
        try {
          c =
            (([g, m] = W(() =>
              R(() => import("./glossary.generated-BbgRlcU_.js"), [])
            )),
            (g = yield g),
            m(),
            g).glossary || [];
        } catch (s) {
          console.error("Failed to load glossary:", s), (c = []);
        }
        const w = Q(),
          e = l(() => c.find((s) => s.slug === w.params.slug)),
          y = JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://ipogenie.ai/#organization",
          }),
          u = l(() =>
            e.value
              ? JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "DefinedTerm",
                  "@id": `https://ipogenie.ai/learn/${e.value.slug}/#term`,
                  name: e.value.term,
                  description: e.value.shortDefinition,
                  inDefinedTermSet: {
                    "@type": "DefinedTermSet",
                    name: "IPO Genie Crypto & IPO Glossary",
                    url: "https://ipogenie.ai/learn/",
                  },
                })
              : null
          ),
          v = l(() =>
            !e.value || !e.value.faqs || e.value.faqs.length === 0
              ? null
              : JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  "@id": `https://ipogenie.ai/learn/${e.value.slug}/#faq`,
                  mainEntity: e.value.faqs.map((s) => ({
                    "@type": "Question",
                    name: s.question,
                    acceptedAnswer: { "@type": "Answer", text: s.answer },
                  })),
                })
          ),
          C = l(() =>
            e.value
              ? JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "BreadcrumbList",
                  itemListElement: [
                    {
                      "@type": "ListItem",
                      position: 1,
                      name: "Home",
                      item: "https://ipogenie.ai/",
                    },
                    {
                      "@type": "ListItem",
                      position: 2,
                      name: "Learn",
                      item: "https://ipogenie.ai/learn/",
                    },
                    {
                      "@type": "ListItem",
                      position: 3,
                      name: e.value.term,
                      item: `https://ipogenie.ai/learn/${e.value.slug}/`,
                    },
                  ],
                })
              : null
          );
        M({
          title: l(() =>
            e.value
              ? e.value.metaTitle || `What is ${e.value.term}? | IPO Genie`
              : "Term Not Found | IPO Genie"
          ),
          script: [
            { type: "application/ld+json", children: y },
            { type: "application/ld+json", children: u },
            { type: "application/ld+json", children: v },
            { type: "application/ld+json", children: C },
          ].filter((s) => s.children),
          meta: [
            {
              name: "description",
              content: l(() =>
                e.value
                  ? e.value.shortDefinition
                  : "Learn crypto and IPO terminology with IPO Genie"
              ),
            },
            {
              property: "og:title",
              content: l(() =>
                e.value ? `What is ${e.value.term}?` : "IPO Genie Glossary"
              ),
            },
            {
              property: "og:description",
              content: l(() => {
                var s;
                return (
                  ((s = e.value) == null ? void 0 : s.shortDefinition) || ""
                );
              }),
            },
            {
              property: "og:url",
              content: l(() => {
                var s;
                return `https://ipogenie.ai/learn/${
                  ((s = e.value) == null ? void 0 : s.slug) || ""
                }/`;
              }),
            },
            { property: "og:type", content: "article" },
            { property: "og:image", content: A },
            { name: "twitter:card", content: "summary" },
            { name: "twitter:image", content: A },
          ],
          link: [
            {
              rel: "canonical",
              href: l(() => {
                var s;
                return `https://ipogenie.ai/learn/${
                  ((s = e.value) == null ? void 0 : s.slug) || ""
                }/`;
              }),
            },
          ],
        });
        const I = l(() =>
            !e.value ||
            !e.value.relatedTerms ||
            e.value.relatedTerms.length === 0
              ? []
              : typeof e.value.relatedTerms[0] == "string"
              ? c.filter((s) => e.value.relatedTerms.includes(s.slug))
              : e.value.relatedTerms
          ),
          J = l(() =>
            !e.value || !e.value.definition ? "" : Y(e.value.definition)
          ),
          P = l(() =>
            e.value
              ? c
                  .filter(
                    (s) =>
                      s.category === e.value.category && s.slug !== e.value.slug
                  )
                  .slice(0, 6)
              : []
          ),
          L = l(() => (e.value ? X(e.value, E, 3) : [])),
          j = l(() =>
            e.value
              ? [
                  { name: "Home", to: "/" },
                  { name: "Glossary", to: "/learn/" },
                  { name: e.value.term },
                ]
              : []
          ),
          B = l(() => {
            if (!e.value) return [];
            const s = e.value.slug;
            return E.filter(
              (n) =>
                n.relatedGlossaryTerms && n.relatedGlossaryTerms.includes(s)
            ).slice(0, 5);
          }),
          G = (s) => V((s == null ? void 0 : s.textPreview) || "");
        return (s, n) => {
          var O, D;
          const _ = K("router-link");
          return (
            r(),
            a("main", Z, [
              e.value
                ? (r(),
                  a("article", ee, [
                    x(S, { items: j.value, variant: "light" }, null, 8, [
                      "items",
                    ]),
                    t(
                      "span",
                      te,
                      i(
                        ((O = e.value.category) == null
                          ? void 0
                          : O.replace("-", " ")) || "General"
                      ),
                      1
                    ),
                    t("h1", se, " What is " + i(e.value.term) + "? ", 1),
                    t("p", oe, i(e.value.shortDefinition), 1),
                    e.value.definition
                      ? (r(),
                        a("div", re, [
                          t("div", { innerHTML: J.value }, null, 8, ne),
                        ]))
                      : d("", !0),
                    x(
                      U,
                      {
                        source: `glossary_${e.value.slug}_inline`,
                        headline: "Learn More About Crypto Investing",
                        subtext:
                          "Get weekly insights on tokenomics and pre-IPO opportunities.",
                        variant: "compact",
                      },
                      null,
                      8,
                      ["source"]
                    ),
                    e.value.examples && e.value.examples.length
                      ? (r(),
                        a("section", ae, [
                          n[0] ||
                            (n[0] = t(
                              "h2",
                              { class: "text-2xl font-bold mb-4" },
                              "Examples",
                              -1
                            )),
                          t("ul", le, [
                            (r(!0),
                            a(
                              p,
                              null,
                              h(
                                e.value.examples,
                                (o, f) => (
                                  r(),
                                  a(
                                    "li",
                                    {
                                      key: f,
                                      class:
                                        "flex gap-3 p-4 bg-gray-50 rounded-xl",
                                    },
                                    [
                                      t("span", ie, i(f + 1) + ".", 1),
                                      t("span", ue, i(o.example), 1),
                                    ]
                                  )
                                )
                              ),
                              128
                            )),
                          ]),
                        ]))
                      : d("", !0),
                    e.value.faqs && e.value.faqs.length
                      ? (r(),
                        a("section", ce, [
                          n[2] ||
                            (n[2] = t(
                              "h2",
                              { class: "text-2xl font-bold mb-6" },
                              "Frequently Asked Questions",
                              -1
                            )),
                          t("div", de, [
                            (r(!0),
                            a(
                              p,
                              null,
                              h(
                                e.value.faqs,
                                (o, f) => (
                                  r(),
                                  a(
                                    "details",
                                    {
                                      key: f,
                                      class:
                                        "group border border-gray-200 rounded-xl overflow-hidden",
                                    },
                                    [
                                      t("summary", me, [
                                        t("span", ge, i(o.question), 1),
                                        n[1] ||
                                          (n[1] = t(
                                            "svg",
                                            {
                                              class:
                                                "w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform",
                                              fill: "none",
                                              stroke: "currentColor",
                                              viewBox: "0 0 24 24",
                                            },
                                            [
                                              t("path", {
                                                "stroke-linecap": "round",
                                                "stroke-linejoin": "round",
                                                "stroke-width": "2",
                                                d: "M19 9l-7 7-7-7",
                                              }),
                                            ],
                                            -1
                                          )),
                                      ]),
                                      t("div", pe, i(o.answer), 1),
                                    ]
                                  )
                                )
                              ),
                              128
                            )),
                          ]),
                        ]))
                      : d("", !0),
                    I.value.length
                      ? (r(),
                        a("section", he, [
                          n[3] ||
                            (n[3] = t(
                              "h2",
                              { class: "text-2xl font-bold mb-6" },
                              "Related Terms",
                              -1
                            )),
                          t("div", ye, [
                            (r(!0),
                            a(
                              p,
                              null,
                              h(
                                I.value,
                                (o) => (
                                  r(),
                                  F(
                                    _,
                                    {
                                      key: o.slug,
                                      to: `/learn/${o.slug}/`,
                                      class:
                                        "px-4 py-2 bg-gray-100 hover:bg-[#FF5B00] hover:text-white rounded-full text-sm font-medium transition-colors",
                                    },
                                    {
                                      default: b(() => [q(i(o.term), 1)]),
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
                      : d("", !0),
                    P.value.length
                      ? (r(),
                        a("section", ve, [
                          t(
                            "h2",
                            xe,
                            " More " +
                              i(
                                (D = e.value.category) == null
                                  ? void 0
                                  : D.replace("-", " ")
                              ) +
                              " Terms ",
                            1
                          ),
                          t("div", _e, [
                            (r(!0),
                            a(
                              p,
                              null,
                              h(
                                P.value,
                                (o) => (
                                  r(),
                                  F(
                                    _,
                                    {
                                      key: o.slug,
                                      to: `/learn/${o.slug}/`,
                                      class:
                                        "p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group",
                                    },
                                    {
                                      default: b(() => [
                                        t("h3", fe, i(o.term), 1),
                                        t("p", be, i(o.shortDefinition), 1),
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
                      : d("", !0),
                    L.value.length
                      ? (r(),
                        a("section", ke, [
                          n[4] ||
                            (n[4] = t(
                              "h2",
                              { class: "text-2xl font-bold mb-6" },
                              "Related Articles",
                              -1
                            )),
                          t("div", we, [
                            (r(!0),
                            a(
                              p,
                              null,
                              h(
                                L.value,
                                (o) => (
                                  r(),
                                  F(
                                    _,
                                    {
                                      key: o.slug,
                                      to: `/blog/${o.slug}/`,
                                      class:
                                        "group bg-gray-50 rounded-xl overflow-hidden hover:bg-gray-100 transition-colors border border-gray-200",
                                    },
                                    {
                                      default: b(() => [
                                        t("div", Fe, [
                                          t(
                                            "img",
                                            {
                                              src:
                                                o.thumbnailImage ||
                                                o.mainImage ||
                                                z,
                                              alt: o.name,
                                              class:
                                                "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300",
                                              loading: "lazy",
                                              onError: k,
                                            },
                                            null,
                                            40,
                                            Te
                                          ),
                                        ]),
                                        t("div", Ie, [
                                          t("h3", Pe, i(o.name), 1),
                                          t("p", Le, i(G(o)), 1),
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
                      : d("", !0),
                    B.value.length
                      ? (r(),
                        a("section", Be, [
                          n[5] ||
                            (n[5] = t(
                              "h2",
                              { class: "text-2xl font-bold mb-6" },
                              "Further Reading",
                              -1
                            )),
                          t("ul", Ge, [
                            (r(!0),
                            a(
                              p,
                              null,
                              h(
                                B.value,
                                (o) => (
                                  r(),
                                  a("li", { key: o.slug }, [
                                    x(
                                      _,
                                      {
                                        to: `/blog/${o.slug}/`,
                                        class:
                                          "text-[#FF5B00] hover:underline font-medium",
                                      },
                                      {
                                        default: b(() => [q(i(o.name), 1)]),
                                        _: 2,
                                      },
                                      1032,
                                      ["to"]
                                    ),
                                    o.textPreview
                                      ? (r(), a("p", Oe, i(G(o)), 1))
                                      : d("", !0),
                                  ])
                                )
                              ),
                              128
                            )),
                          ]),
                        ]))
                      : d("", !0),
                    t("aside", De, [
                      n[6] ||
                        (n[6] = t(
                          "h2",
                          { class: "text-2xl font-bold mb-4 text-black" },
                          " Put Your Knowledge to Work ",
                          -1
                        )),
                      t(
                        "p",
                        $e,
                        " Now that you understand " +
                          i(e.value.term) +
                          ", explore AI-vetted pre-IPO opportunities with IPO Genie. ",
                        1
                      ),
                      x(N, {
                        text: "Join Presale",
                        class: "!w-max",
                        link: "https://buy.ipogenie.ai",
                      }),
                    ]),
                  ]))
                : (r(),
                  a("div", Ae, [
                    n[7] ||
                      (n[7] = t(
                        "h2",
                        { class: "text-3xl font-bold mb-4 text-black" },
                        "Term not found",
                        -1
                      )),
                    n[8] ||
                      (n[8] = t(
                        "p",
                        { class: "text-gray-500 mb-8" },
                        " The term you're looking for doesn't exist in our glossary. ",
                        -1
                      )),
                    x(N, {
                      text: "Browse Glossary",
                      to: "/learn/",
                      class: "!w-max mx-auto",
                    }),
                  ])),
            ])
          );
        };
      });
    },
  },
  He = H(Ee, [["__scopeId", "data-v-24332273"]]);
export { He as default };
