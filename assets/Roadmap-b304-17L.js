import {
  m as c,
  u as p,
  d as u,
  g,
  e as b,
  k as _,
  s as m,
  R as v,
  n as f,
} from "./index-CkW8Cm0p.js";
import {
  d as i,
  e as l,
  f as e,
  A as h,
  u as w,
  F as r,
  z as y,
  G as k,
  t as s,
  l as n,
} from "./vue-Z9E3ejSf.js";
import "./gsap-BwUJxYA3.js";
const C =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYEAAAARCAYAAAA7SBDTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADvSURBVHgB7d3RTcMwFAXQCxN0hIzCKNkANmgYhUkiJukIsEGxFSo+KlSSfCC750hXUT7y6xf7OU5y7VByLJlLPkrO39d6P5YMAaBLz/kZ+H/LKUsxAKAj9e3/vCLHANCFMesKwCUvAaBpQ5Ylni1FoC4dHQJAkx5LnrK92VsLgNkAQMPmbJsFXDIHgGbd2g30lyUhABr0kGUg3+s1ADSn9gQ+s8/e5wH4R3oCAHeqzgTes89bAGhW3ea5tTl8irOEAJpX9/pvKQJjAOjClHUFYAoAXRlz+wiJunTkK2GATg1ZisGc6/8JTHFWEEA3vgDfgqapLoD92QAAAABJRU5ErkJggg==",
  S = {
    class:
      "base-x-p max-w-[2000px] mx-auto flex items-center max-md:flex-col max-md:gap-6 gap-12 mt-[1.5rem] max-lg:mt-16 max-md:mt-10 mb-12 max-md:mb-8",
  },
  E = { class: "flex-1 text-black" },
  B = { class: "flex items-center gap-2 max-md:justify-between" },
  R = { class: "h-4 w-auto max-md:h-3" },
  U = ["src"],
  F = {
    class:
      "flex-1 grid grid-cols-2 gap-4 max-md:gap-y-2 max-md:gap-x-4 min-w-0",
  },
  N = { class: "text-lg italic leading-[140%] mb-1 max-md:text-[8px]" },
  G = { class: "text-2xl font-bold leading-[140%] max-md:text-base" },
  O = { class: "text-sm leading-[140%] max-md:text-xs" },
  H = {
    __name: "Evolution",
    setup(A) {
      const d = [
        {
          number: "01",
          type: "Sourcing",
          title: "Deal Sourcing",
          text: "Our network never sleeps.",
        },
        {
          number: "02",
          type: "Security",
          title: "Audits & Bounties",
          text: "Regular audits and bounty programs.",
        },
        {
          number: "03",
          type: "Community",
          title: "Global Events",
          text: "Global events, AMAs, and education.",
        },
      ];
      return (x, t) => (
        l(),
        i("div", S, [
          e("div", E, [
            t[1] ||
              (t[1] = e(
                "h2",
                { class: "title max-w-[370px] mb-9 max-md:mb-5" },
                [
                  h(" Constant "),
                  e("span", { class: "sectitle access" }, "Evolution"),
                ],
                -1
              )),
            t[2] ||
              (t[2] = e(
                "div",
                { class: "description mb-6 max-md:mb-3" },
                " Milestones are moments in time. Our work is a continuous state of flow. Here is the non-roadmap of things we do every single day. ",
                -1
              )),
            e("div", B, [
              e("div", R, [
                e(
                  "img",
                  {
                    src: w(C),
                    alt: "",
                    class: "object-contain",
                    loading: "lazy",
                  },
                  null,
                  8,
                  U
                ),
              ]),
              t[0] ||
                (t[0] = e(
                  "div",
                  {
                    class:
                      "text-lg text-black leading-[140%] whitespace-nowrap max-md:text-[10px]",
                  },
                  " ON GOING OPERATIONS ",
                  -1
                )),
            ]),
          ]),
          e("div", F, [
            (l(),
            i(
              r,
              null,
              y(d, (a, o) =>
                e(
                  "div",
                  {
                    key: o,
                    class: k([
                      "evolution-card border border-[#FF5C01] rounded-[30px] max-md:rounded-[30px] px-6 py-[30px] max-md:w-full max-md:py-[18px] max-md:px-3",
                      o === 0
                        ? "bg-[#FF5C01] text-white"
                        : "bg-white text-black",
                      o === 0 && "col-span-2",
                    ]),
                  },
                  [
                    e("div", N, s(a.number) + " - " + s(a.type), 1),
                    e("div", G, s(a.title), 1),
                    e("div", O, s(a.text), 1),
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
  T = c(H, [["__scopeId", "data-v-cff5fbab"]]),
  J = { class: "mt-24 md:mt-52 max-md:-mb-12" },
  z = {
    __name: "Roadmap",
    setup(A) {
      return (
        p(m.roadmap),
        u([
          g(),
          b([
            { name: "Home", url: "/" },
            { name: "Roadmap", url: "/about/roadmap/" },
          ]),
          _({
            url: "/about/roadmap/",
            headline: m.roadmap.title,
            summary: m.roadmap.description,
          }),
        ]),
        (d, x) => (l(), i(r, null, [e("div", J, [n(v)]), n(T), n(f)], 64))
      );
    },
  };
export { z as default };
