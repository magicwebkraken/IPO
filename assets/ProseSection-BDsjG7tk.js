import { m } from "./index-CkW8Cm0p.js";
import {
  h,
  d as s,
  e as n,
  f as l,
  q as g,
  F as r,
  A as o,
  t as a,
} from "./vue-Z9E3ejSf.js";
const f = {
    class:
      "base-x-p max-w-[2000px] flex justify-between gap-10 text-black mx-auto mt-[150px] max-xl:mt-[100px] max-lg:flex-col max-lg:mt-24 max-md:mt-20",
  },
  p = { class: "flex-1 max-lg:flex-none" },
  u = { key: 0, class: "title whitespace-normal max-lg:whitespace-normal" },
  _ = { class: "sectitle accent" },
  v = { class: "flex-1" },
  y = { class: "flex self-stretch gap-7 max-md:gap-4" },
  k = ["innerHTML"],
  S = {
    __name: "ProseSection",
    props: {
      title: { type: String, default: "" },
      highlight: { type: String, default: "" },
      content: { type: String, default: "" },
    },
    setup(e) {
      const t = e,
        d = h(() => {
          if (!t.highlight || !t.title) return t.title;
          const i = t.title.indexOf(t.highlight);
          return i > -1 ? t.title.slice(0, i) : t.title;
        }),
        x = h(() => {
          if (!t.highlight || !t.title) return "";
          const i = t.title.indexOf(t.highlight);
          return i > -1 ? t.title.slice(i + t.highlight.length) : "";
        });
      return (i, c) => (
        n(),
        s("section", f, [
          l("div", p, [
            e.title
              ? (n(),
                s("h2", u, [
                  e.highlight
                    ? (n(),
                      s(
                        r,
                        { key: 0 },
                        [
                          o(a(d.value), 1),
                          l("span", _, a(e.highlight), 1),
                          o(a(x.value), 1),
                        ],
                        64
                      ))
                    : (n(), s(r, { key: 1 }, [o(a(e.title), 1)], 64)),
                ]))
              : g("", !0),
          ]),
          l("div", v, [
            l("div", y, [
              c[0] ||
                (c[0] = l(
                  "div",
                  { class: "w-[6px] shrink-0 bg-[#FF5B00] rounded-[3px]" },
                  null,
                  -1
                )),
              l(
                "div",
                {
                  class:
                    "text-lg leading-[160%] max-md:text-sm max-md:leading-[150%] prose-content",
                  innerHTML: e.content,
                },
                null,
                8,
                k
              ),
            ]),
          ]),
        ])
      );
    },
  },
  b = m(S, [["__scopeId", "data-v-fdec14d1"]]);
export { b as P };
