import { m as r } from "./index-CkW8Cm0p.js";
import {
  d as n,
  e as s,
  K as p,
  f as t,
  F as m,
  z as h,
  j as d,
  t as c,
  G as o,
  s as x,
} from "./vue-Z9E3ejSf.js";
const f = {},
  _ = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "49",
    height: "49",
    viewBox: "0 0 49 49",
    fill: "none",
  };
function C(l, e) {
  return (
    s(),
    n("svg", _, [
      ...(e[0] ||
        (e[0] = [
          p(
            '<g clip-path="url(#clip0_3515_52039)"><path d="M24.5 0C18.0037 0 11.7677 2.58284 7.17773 7.17582C2.58311 11.7707 0.00131476 18.0021 0 24.5C0 30.9952 2.58398 37.2312 7.17773 41.8242C11.7677 46.4172 18.0037 49 24.5 49C30.9963 49 37.2323 46.4172 41.8223 41.8242C46.416 37.2312 49 30.9952 49 24.5C49 18.0048 46.416 11.7688 41.8223 7.17582C37.2323 2.58284 30.9963 0 24.5 0Z" fill="#5BC7FF"></path><path d="M11.0905 24.2413C18.2337 21.1298 22.9959 19.0785 25.377 18.0872C32.1834 15.2571 33.596 14.7656 34.5186 14.7489C34.7215 14.7457 35.1732 14.7958 35.468 15.0341C35.713 15.2351 35.7819 15.5069 35.8163 15.6977C35.8469 15.8884 35.8891 16.3229 35.8546 16.662C35.4871 20.5361 33.8908 29.9372 33.0792 34.2764C32.7385 36.1124 32.0609 36.7279 31.4063 36.788C29.9823 36.9189 28.9027 35.8478 27.5246 34.9448C25.3694 33.531 24.152 32.6513 22.058 31.2721C19.6387 29.678 21.2082 28.8018 22.5863 27.3701C22.9462 26.9953 29.2166 21.2933 29.3353 20.7761C29.3506 20.7114 29.3659 20.4702 29.2205 20.3432C29.0788 20.2157 28.8683 20.2593 28.7152 20.2938C28.4969 20.3428 25.0555 22.6197 18.3792 27.1243C17.403 27.7957 16.5187 28.1231 15.7225 28.1058C14.8497 28.0871 13.1653 27.6112 11.9135 27.2047C10.3823 26.7059 9.16109 26.4421 9.26827 25.595C9.32187 25.154 9.93054 24.7026 11.0905 24.2413Z" fill="white"></path></g><defs><clipPath id="clip0_3515_52039"><rect width="49" height="49" fill="white"></rect></clipPath></defs>',
            2
          ),
        ])),
    ])
  );
}
const w = r(f, [["render", C]]),
  g = {},
  u = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "none",
  };
function L(l, e) {
  return (
    s(),
    n("svg", u, [
      ...(e[0] ||
        (e[0] = [
          t(
            "g",
            { "clip-path": "url(#clip0_3515_52047)" },
            [
              t("path", {
                d: "M18.9788 13.55L30.6353 0H27.8727L17.7518 11.765L9.66775 0H0.34375L12.5682 17.791L0.34375 32H3.10625L13.7948 19.5758L22.3318 32H31.6558L18.978 13.55H18.9788ZM15.1953 17.9475L13.9565 16.176L4.1015 2.0795H8.3445L16.2973 13.456L17.5357 15.2275L27.874 30.015H23.6315L15.1953 17.9482V17.9475Z",
                fill: "white",
              }),
            ],
            -1
          ),
          t(
            "defs",
            null,
            [
              t("clipPath", { id: "clip0_3515_52047" }, [
                t("rect", { width: "32", height: "32", fill: "white" }),
              ]),
            ],
            -1
          ),
        ])),
    ])
  );
}
const v = r(g, [["render", L]]),
  b = ["href"],
  y = {
    class: "flex flex-col items-start justify-start flex-shrink-0 min-w-0",
  },
  k = {
    class:
      "font-inter whitespace-nowrap text-start text-[18px] font-bold max-md:text-xl",
  },
  B = { class: "text-[10px] whitespace-nowrap" },
  H = {
    __name: "Socials",
    props: { basePadding: { type: Boolean, default: !1 } },
    setup(l) {
      const e = [
        {
          title: "Join Telegram Chat",
          subtitle: "24/7 Live Support & Community",
          icon: w,
          link: "https://t.me/IPOGENIECoin",
        },
        {
          title: "Follow on X",
          subtitle: "Latest Announcements & Alpha",
          icon: v,
          link: "https://x.com/IPOGENIECoin",
        },
      ];
      return (P, S) => (
        s(),
        n(
          "div",
          {
            class: o([
              "mt-[-1rem] flex flex-wrap gap-10 justify-center items-center max-w-[1300px] max-md:max-w-[300px] mx-auto max-md:gap-5",
              l.basePadding ? "" : "base-x-p",
            ]),
          },
          [
            (s(),
            n(
              m,
              null,
              h(e, (i, a) =>
                t(
                  "a",
                  {
                    key: a,
                    href: i.link,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    class: o([
                      "py-1 px-6 flex-1 min-w-[320px] rounded-[15px] flex items-center justify-between gap-3 max-md:py-5 max-md:px-6 transition-all duration-300 hover:scale-[1.02] hover:opacity-90 min-h-[70px] max-md:min-h-[90px]",
                      { "bg-[#26A4E2]": a === 0 },
                      { "bg-[#000]": a === 1 },
                    ]),
                  },
                  [
                    t("div", y, [
                      t("div", k, c(i.title), 1),
                      t("div", B, c(i.subtitle), 1),
                    ]),
                    (s(),
                    d(
                      x(i.icon),
                      {
                        class: o([
                          "flex-shrink-0",
                          a === 0 ? "socials-icon-telegram" : "socials-icon-x",
                        ]),
                      },
                      null,
                      8,
                      ["class"]
                    )),
                  ],
                  10,
                  b
                )
              ),
              64
            )),
          ],
          2
        )
      );
    },
  },
  I = r(H, [["__scopeId", "data-v-29e665f1"]]);
export { I as S };
