var x = (e, t, r) =>
  new Promise((i, a) => {
    var c = (s) => {
        try {
          n(r.next(s));
        } catch (l) {
          a(l);
        }
      },
      f = (s) => {
        try {
          n(r.throw(s));
        } catch (l) {
          a(l);
        }
      },
      n = (s) => (s.done ? i(s.value) : Promise.resolve(s.value).then(c, f));
    n((r = r.apply(e, t)).next());
  });
import {
  r as S,
  d as m,
  e as g,
  f as o,
  l as b,
  t as p,
  B as T,
  C as I,
  u,
  I as G,
  k as v,
  q as w,
  A as h,
  T as y,
  G as L,
} from "./vue-Z9E3ejSf.js";
import { m as N, r as M, A as k, G as P, z as V } from "./index-CkW8Cm0p.js";
function U(e, t, r = 5) {
  if (!e || !t || t.length === 0) return [];
  if (e.relatedGlossaryTerms && e.relatedGlossaryTerms.length > 0) {
    const n = t.filter((s) => e.relatedGlossaryTerms.includes(s.slug));
    if (n.length >= r) return n.slice(0, r);
  }
  const i = B(e).toLowerCase(),
    a = t.filter((n) => {
      const s = n.term.toLowerCase(),
        l = n.slug.replace(/-/g, " ");
      return i.includes(s) || i.includes(l);
    }),
    c = e.relatedGlossaryTerms || [];
  return [
    ...t.filter((n) => c.includes(n.slug)),
    ...a.filter((n) => !c.includes(n.slug)),
  ].slice(0, r);
}
function Y(e, t, r = 3) {
  if (!e || !t || t.length === 0) return [];
  if (e.relatedPosts && e.relatedPosts.length > 0) {
    const s = t.filter((l) => e.relatedPosts.includes(l.slug));
    if (s.length >= r) return s.slice(0, r);
  }
  const i = e.term.toLowerCase(),
    a = e.slug.replace(/-/g, " "),
    c = t.filter((s) => {
      const l = B(s).toLowerCase();
      return l.includes(i) || l.includes(a);
    }),
    f = e.relatedPosts || [];
  return [
    ...t.filter((s) => f.includes(s.slug)),
    ...c.filter((s) => !f.includes(s.slug)),
  ].slice(0, r);
}
function B(e) {
  return !e || !e.content
    ? ""
    : typeof e.content == "string"
    ? F(e.content)
    : Array.isArray(e.content)
    ? e.content
        .map((t) => {
          const r = t.title || "",
            i = t.content || "";
          return F(r + " " + i);
        })
        .join(" ")
    : "";
}
function F(e) {
  return e
    ? e
        .replace(/<[^>]*>/g, " ")
        .replace(/\s+/g, " ")
        .trim()
    : "";
}
const j = { class: "flex items-start gap-4 mb-4" },
  z = { class: "text-lg font-bold text-black" },
  A = { class: "text-gray-600 text-sm mt-1" },
  E = ["disabled"],
  W = ["disabled"],
  q = { key: 0, class: "mt-3 text-green-600 text-sm flex items-center gap-2" },
  D = { key: 0, class: "mt-3 text-red-600 text-sm flex items-center gap-2" },
  H = {
    __name: "InlineNewsletter",
    props: {
      source: { type: String, default: "inline_newsletter" },
      headline: { type: String, default: "Get Pre-IPO Insights Weekly" },
      subtext: { type: String, default: "Join 5,000+ investors. No spam." },
      buttonText: { type: String, default: "Subscribe" },
      variant: {
        type: String,
        default: "default",
        validator: (e) => ["default", "compact"].includes(e),
      },
    },
    setup(e) {
      const t = e,
        r = S(""),
        {
          isLoading: i,
          success: a,
          error: c,
          subscribeEmail: f,
          resetState: n,
        } = M(),
        s = () =>
          x(null, null, function* () {
            if (!r.value || !r.value.includes("@")) return;
            k("inline_newsletter", "submit", {
              source: t.source,
              variant: t.variant,
            }),
              P("Newsletter Subscribe", {
                location: t.source,
                destination: "newsletter_signup",
              }),
              (yield f(r.value, { source: t.source }))
                ? (V("newsletter", 2, "inline_subscribed", {
                    source: t.source,
                    variant: t.variant,
                  }),
                  (r.value = ""))
                : k("inline_newsletter", "error", {
                    source: t.source,
                    variant: t.variant,
                    error_message: c.value || "subscribe_failed",
                  });
          }),
        l = () => {
          c.value && n();
        };
      return (_, d) => (
        g(),
        m(
          "div",
          {
            class: L([
              "my-10 p-6 md:p-8 rounded-2xl border",
              [
                e.variant === "compact"
                  ? "bg-gray-50 border-gray-200"
                  : "bg-gradient-to-r from-[#FF5B00]/10 to-[#FF5B00]/5 border-[#FF5B00]/20",
              ],
            ]),
          },
          [
            o("div", j, [
              d[1] ||
                (d[1] = o(
                  "div",
                  {
                    class:
                      "flex-shrink-0 w-10 h-10 rounded-lg bg-[#FF5B00]/20 flex items-center justify-center",
                  },
                  [
                    o(
                      "svg",
                      {
                        class: "w-5 h-5 text-[#FF5B00]",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                      },
                      [
                        o("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                        }),
                      ]
                    ),
                  ],
                  -1
                )),
              o("div", null, [
                o("h3", z, p(e.headline), 1),
                o("p", A, p(e.subtext), 1),
              ]),
            ]),
            o(
              "form",
              {
                onSubmit: G(s, ["prevent"]),
                class: "flex flex-col sm:flex-row gap-3",
              },
              [
                T(
                  o(
                    "input",
                    {
                      "onUpdate:modelValue":
                        d[0] || (d[0] = (C) => (r.value = C)),
                      type: "email",
                      placeholder: "your@email.com",
                      class:
                        "flex-grow px-4 py-3 rounded-xl border border-gray-300 bg-white text-black placeholder:text-gray-400 focus:outline-none focus:border-[#FF5B00] focus:ring-1 focus:ring-[#FF5B00] transition-colors text-sm",
                      disabled: u(i) || u(a),
                      onInput: l,
                      required: "",
                    },
                    null,
                    40,
                    E
                  ),
                  [[I, r.value]]
                ),
                o(
                  "button",
                  {
                    type: "submit",
                    disabled: u(i) || u(a),
                    class:
                      "px-6 py-3 rounded-xl bg-[#FF5B00] text-white font-semibold hover:bg-[#ff6a1a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm whitespace-nowrap",
                  },
                  p(u(i) ? "Sending..." : u(a) ? "Subscribed!" : e.buttonText),
                  9,
                  W
                ),
              ],
              32
            ),
            b(
              y,
              { name: "fade" },
              {
                default: v(() => [
                  u(a)
                    ? (g(),
                      m("p", q, [
                        ...(d[2] ||
                          (d[2] = [
                            o(
                              "svg",
                              {
                                class: "w-4 h-4",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                              },
                              [
                                o("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M5 13l4 4L19 7",
                                }),
                              ],
                              -1
                            ),
                            h(
                              " You're in! Check your inbox for confirmation. ",
                              -1
                            ),
                          ])),
                      ]))
                    : w("", !0),
                ]),
                _: 1,
              }
            ),
            b(
              y,
              { name: "fade" },
              {
                default: v(() => [
                  u(c)
                    ? (g(),
                      m("p", D, [
                        d[3] ||
                          (d[3] = o(
                            "svg",
                            {
                              class: "w-4 h-4",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                            },
                            [
                              o("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                              }),
                            ],
                            -1
                          )),
                        h(" " + p(u(c)), 1),
                      ]))
                    : w("", !0),
                ]),
                _: 1,
              }
            ),
          ],
          2
        )
      );
    },
  },
  K = N(H, [["__scopeId", "data-v-e879dade"]]);
export { K as I, Y as a, U as g };
