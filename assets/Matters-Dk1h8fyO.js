import {
  d as s,
  e as a,
  f as t,
  A as o,
  F as d,
  z as c,
  t as n,
} from "./vue-Z9E3ejSf.js";
const m = {
    class:
      "base-x-p max-w-[2000px] flex justify-between gap-6 text-black mx-auto mt-[150px] max-xl:mt-[100px] max-lg:flex-col max-lg:mt-24 max-md:mt-20",
  },
  x = { class: "flex flex-col items-center gap-10 flex-1 max-md:gap-4" },
  p = { class: "flex flex-col items-start text-start gap-6 max-md:gap-2" },
  u = {
    class: "text-2xl font-inter font-extrabold leading-[85%] max-md:text-lg",
  },
  f = { class: "text-lg leading-[140%] max-md:text-xs" },
  h = {
    __name: "Matters",
    props: { mattersCards: { type: Array, required: !0 } },
    setup(r) {
      return (g, e) => (
        a(),
        s("div", m, [
          e[1] ||
            (e[1] = t(
              "div",
              { class: "flex-1" },
              [
                t("h2", { class: "title whitespace-nowrap" }, [
                  o(" Why It "),
                  t("span", { class: "sectitle" }, "Matters"),
                ]),
                t(
                  "div",
                  { class: "description mt-5 max-md:mt-2" },
                  " Understanding the core benefits of our platform structure. "
                ),
              ],
              -1
            )),
          t("div", x, [
            (a(!0),
            s(
              d,
              null,
              c(
                r.mattersCards,
                (i, l) => (
                  a(),
                  s(
                    "div",
                    { key: l, class: "flex self-stretch gap-7 max-md:gap-2" },
                    [
                      e[0] ||
                        (e[0] = t(
                          "div",
                          {
                            class: "w-[6px] h-auto bg-[#FF5B00] rounded-[3px]",
                          },
                          null,
                          -1
                        )),
                      t("div", p, [
                        t("div", u, n(i.title), 1),
                        t("div", f, n(i.text), 1),
                      ]),
                    ]
                  )
                )
              ),
              128
            )),
          ]),
        ])
      );
    },
  },
  v = [
    {
      title: "Speed and Efficiency",
      text: "AI reduces weeks of research into minutes and brings the strongest opportunities directly to you.",
    },
    {
      title: "Precision and Objectivity",
      text: "Data-driven insights remove bias and help you evaluate startups with clear, consistent criteria.",
    },
    {
      title: "Continuous Intelligence",
      text: "The system monitors every signal in real time so you stay informed and ready to act as markets shift.",
    },
  ],
  _ = [
    {
      title: "Timeline",
      text: "Setting up a traditional investment fund typically requires 6–12 months of preparation.",
    },
    {
      title: "Cost",
      text: "This process often costs more than $100,000 in legal and administrative fees.",
    },
    {
      title: "Speed with FaaS",
      text: "With Fund-as-a-Service, you can launch a fully compliant fund in under 30 days.",
    },
    {
      title: "Accessibility",
      text: "This dramatically reduces costs and enables emerging managers to participate in venture investing.",
    },
  ];
export { v as M, h as _, _ as a };
