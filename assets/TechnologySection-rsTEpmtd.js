import { c as x, _ as Q } from "./index-CkW8Cm0p.js";
import {
  d as A,
  e as a,
  f as t,
  A as r,
  t as s,
  l as p,
  j as w,
  q as m,
  F as g,
  z as u,
  h as y,
  p as k,
  k as R,
} from "./vue-Z9E3ejSf.js";
const C = {
    class:
      "base-x-p max-w-[2000px] text-black text-center mx-auto mt-[160px] max-xl:mt-[100px] max-lg:mt-16 max-md:mt-8",
  },
  S = { key: 0, class: "title" },
  U = { key: 1, class: "title" },
  v = {
    class: "description text-black mt-10 max-md:mt-7 max-w-[759px] mx-auto",
  },
  K = {
    class: "flex flex-wrap items-center justify-center gap-4 mt-10 max-md:mt-7",
  },
  wt = {
    __name: "DiscoverSection",
    props: { variant: { type: String, default: "institutions" } },
    setup(e) {
      return (l, i) => (
        a(),
        A("section", C, [
          e.variant === "institutions"
            ? (a(),
              A("h2", S, [
                ...(i[0] ||
                  (i[0] = [
                    r(" This Is What the ", -1),
                    t("span", { class: "sectitle" }, "Institutions", -1),
                    r(" Never Wanted You to ", -1),
                    t("span", { class: "sectitle" }, "Access", -1),
                  ])),
              ]))
            : (a(),
              A("h2", U, [
                ...(i[1] ||
                  (i[1] = [
                    r(" Discover Better Deals with ", -1),
                    t("span", { class: "sectitle" }, "Intelligent", -1),
                    r(" Signals ", -1),
                  ])),
              ])),
          t(
            "p",
            v,
            s(
              e.variant === "institutions"
                ? "IPO Genie isn't here to democratize hype. It's here to bring discipline, infrastructure, and upside to the people who move early."
                : "Start using AI to find early stage opportunities, track market shifts, and stay ahead of emerging trends. IPO Genie gives you the insights you need to make faster and more confident investment decisions."
            ),
            1
          ),
          t("div", K, [
            p(x, {
              text: "Read Whitepaper",
              link: "https://whitepaper.ipogenie.ai",
              "bg-color": "transparent",
              class: "!w-max gap-5",
              "text-color": "#000",
              "border-color": "#000",
              "arrow-color": "#fff",
              "bg-arrow": "#FF5B00",
            }),
            p(x, {
              text: "Buy Now",
              link: "https://app.uniswap.org/swap?chain=mainnet&inputCurrency=NATIVE&outputCurrency=0xa6206ceB99A811246beBae71E1f8F49BaFAC7108",
              "bg-color": "#16151A",
              "arrow-color": "#000",
              "bg-arrow": "#fff",
              "text-color": "#fff",
            }),
          ]),
        ])
      );
    },
  },
  V = {
    class:
      "base-x-p mx-auto max-w-[2000px] mt-[140px] max-lg:mt-[100px] max-md:mt-[85px]",
  },
  J = { class: "mx-auto text-center" },
  E = { class: "title text-black !font-semibold" },
  D = {
    class:
      "flex flex-wrap items-center justify-center gap-2 md:gap-8 mt-6 max-md:mt-3",
  },
  N = {
    class:
      "bg-[#ff5b00] whitespace-nowrap text-white max-md:max-h-[42px] flex items-center font-semibold text-[70px] max-xl:text-5xl max-lg:text-3xl max-md:text-[22px] tracking-tight px-8 py-3 max-md:px-6 max-md:py-[10px] rounded-[30px] max-md:rounded-[10px]",
  },
  X = {
    class:
      "bg-[#393939] whitespace-nowrap text-white font-inter max-md:max-h-[42px] flex items-center font-semibold italic text-[70px] max-xl:text-5xl max-lg:text-3xl max-md:text-[22px] tracking-tight max-md:px-6 px-8 py-3 max-md:py-[10px] rounded-[30px] max-md:rounded-[10px]",
  },
  T = {
    class:
      "description text-black mt-10 max-xl:mt-6 max-md:mt-3 mx-auto max-w-[1000px]",
  },
  ft = {
    __name: "ETFSection",
    props: {
      title: { type: String, default: "Think of it as a" },
      orangeText: { type: String, default: "Partner" },
      grayText: { type: String, default: "but smarter" },
      text: {
        type: String,
        default:
          "Unlike traditional launchpads that mainly focus on token issuance, IPO Genie provides the entire backend infrastructure to run and manage an investment fund compliantly. It’s not just about launching; it’s about operating smoothly and transparently from day one.",
      },
    },
    setup(e) {
      return (l, i) => (
        a(),
        A("section", V, [
          t("div", J, [
            t("h2", E, s(e.title), 1),
            t("div", D, [
              t("span", N, s(e.orangeText), 1),
              i[0] ||
                (i[0] = t(
                  "span",
                  {
                    class:
                      "font-inter font-bold text-[70px] max-xl:text-5xl max-lg:text-3xl max-md:text-[22px] tracking-tight text-black",
                  },
                  "-",
                  -1
                )),
              t("span", X, s(e.grayText), 1),
            ]),
            t("p", T, s(e.text), 1),
          ]),
        ])
      );
    },
  },
  j = {
    class:
      "flex items-center max-w-[2055px] mx-auto flex-col base-x-p mt-[200px] max-xl:mt-[180px] max-lg:mt-[120px] max-md:mt-28",
  },
  F = {
    class: "flex flex-col mx-auto items-center text-center gap-8 max-md:gap-5",
  },
  L = { class: "title text-black max-w-[700px]" },
  O = { key: 0, class: "sectitle" },
  H = { key: 1 },
  Y = { class: "flex flex-col gap-3" },
  G = { class: "max-w-[865px] text-black mx-auto description" },
  P = { key: 0, class: "max-w-[865px] text-black mx-auto description" },
  Z = { class: "flex items-center gap-3" },
  Bt = {
    __name: "HeroSection",
    props: {
      breadcrumbs: { type: Array, default: null },
      heading: {
        type: Array,
        default: () => [
          { text: "AI Powered", type: "accent" },
          { text: "Deal Discovery", type: "default" },
        ],
      },
      description: {
        type: String,
        default:
          "Smart investing tools for crypto powered by AI. Our AI presale analysis scans private markets, validates project signals, detects red flags, and scores opportunities - so you can invest with clarity, not hype.",
      },
      description2: { type: String },
      textBtn: { type: String, default: "Buy $IPO Now" },
      secBtn: { type: Boolean, default: !1 },
    },
    setup(e) {
      return (l, i) => (
        a(),
        A("section", j, [
          e.breadcrumbs && e.breadcrumbs.length
            ? (a(),
              w(
                Q,
                {
                  key: 0,
                  items: e.breadcrumbs,
                  variant: "light",
                  class: "w-full",
                },
                null,
                8,
                ["items"]
              ))
            : m("", !0),
          t("div", F, [
            t("h1", L, [
              (a(!0),
              A(
                g,
                null,
                u(
                  e.heading,
                  (n, c) => (
                    a(),
                    A(
                      g,
                      { key: c },
                      [
                        n.type === "accent"
                          ? (a(), A("span", O, s(n.text), 1))
                          : (a(), A("span", H, s(n.text), 1)),
                        r(" " + s(c < e.heading.length - 1 ? " " : ""), 1),
                      ],
                      64
                    )
                  )
                ),
                128
              )),
            ]),
            t("div", Y, [
              t("p", G, s(e.description), 1),
              e.description2
                ? (a(), A("p", P, s(e.description2), 1))
                : m("", !0),
            ]),
            t("div", Z, [
              p(x, { text: e.textBtn }, null, 8, ["text"]),
              e.secBtn
                ? (a(),
                  w(x, {
                    key: 0,
                    text: "Read Whitepaper",
                    link: "https://whitepaper.ipogenie.ai",
                    "bg-color": "transparent",
                    "text-color": "#000",
                    "border-color": "#000",
                    "arrow-color": "#fff",
                    "bg-arrow": "#FF5B00",
                    class: "!w-max gap-5",
                  }))
                : m("", !0),
            ]),
          ]),
        ])
      );
    },
  },
  f =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARTSURBVHgB1ZtdUtswEMf/SsN7btD0BuQEhRMAb/1gBjgB3CDhBG1vkM4A5Q16guQG5AjpDehM+1JS1JViZ/CHrF1ZttPfTCaMY1v5RbK0uzYKDaI/4oTeJvQa0muOHZypKZboEIWGSGSnuc1Lkt7vUroRYYdsSqfS0YU9sim1pPUpBvhjLxOoGywkx0YVZsqmBEnrY5zDzAuapNPzaBxxxaMJC2VTRNIkOya5SclHj7R9nyPdQwS8soq+UDlDPGFGQ3QIXxtuWcOA2pjpD9iFh9rCXlmNS6wwApy96JX2yKawpGsNaY4sDbOJ/fMdCb3CDHCKlQ5vpuxLKod3sLBEdrNJKB0gm+KUDhIOkd18xJSmy+AkUDalVFosXEd2s4tPWtkvO0B9luoab7KnFqDf45CmuTv3Dn7Zza7+no6DxuhlL8tm6Ve2d10nZssa1C0N3b80dNFwiNnLjpQo63CChpAWpJfqirK0F8iEn/Hd+ZnChNbAMYRY6R7u0Qxf8htEwjRkpyR26d5BLm2XnmdcIDbmErvG5/zmsGXp2Abv44rGJvTjXDLOM6659Ljad84n4YFHTekuZA31QstA6a5kDbXTQ6l0l7KGKPkwV7prWUO8AoBPGnY93EN8Hin2HnGLCHFLPH7ppmBXTuIX8bZcupky7RZLlwrbMuiKSiXalkte0/uQ9hxkTqzwg94X6GNR1gBJz+i4PcRGU7iocABh5SRlI2wln3BKfx7Q1l1hPrqEmZToy5hUrOnZOLRcZFBJUfucouqLSEm3yT291UMxuaUnVFpRbzwkQ3d7cayzIdI9e31uM1WJgD+fLpSATXrozWo6gxMbC6XtpNXhMuJGWDJiD+/NAdslPafkfV94DEd6nlmHt0qaWUQoHLaWfgDKV5xMiYcKXpPKEk6bBNbIKBAylVXX8rosj7T+0572BjzPOCot4rXe0ypbSs19xuppr6zGmfqGe2fVsjVpMxtf0QRVoxrKkr1Z3x7yZksND+8FzcYjdlslw1sia/DWpRvu6V36wnvstnI9LZVdn4JJYz29zrAuRG0ZyV7y7t6nIGuQ3T08pkq+tk/RxKRwSzNpK/wHdsga2LdabBqp8RbxGdpgIUfwpVQha2AJJ8UBE7I1k0bulFdGxNIeWYNXuHFZ24g7RWVLM2QNlcKtyNqGqG5WgVeaKWtwCrcmu2bo28EpLZA1lAoLZRdthaFWmgRtKKroJrqyT+lMJefo5zeIZX9To/d4pGUEbSQcieAUgRR7+AmfIJS1X6RORKbxEy2REU7qPqeM4zKyKTWkl2iJbA+vWBXMUtmUIGnVlXDf+7xxpWyKWFrJnmqvQyGWpsnnjq6pw5J9WbK5c7HiYYqlRTF9HYqTVp+mfeBrZptZAoSy9jBeT8/RIs5f1gb0fXr9oiRdKFo4V1VPCwOHurQ2lBzSpalhk8R81rISx/Ceo2Va6+GUpKdP7FK0ouF82+4/bP0Dw6VcvYDiZiQAAAAASUVORK5CYII=",
  B =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAS3SURBVHgB7VlRctNIEH1jku/VngDtCWJOsM4JFv6WkKo1Jwg+QZwTkJxgQ1V24S9wgogTYE6AOAGhii+cZBi1RNB094wkIzAEvSqXLalnpp+6503PGBgwYMCAAQN+TtgpUruDPfwgsLvYcz4lXdqMuhhjiVMYHDrS+1gzHNl9WBw6n866tGtN2D7AY/c1pguD+TpJV2Tn1eW48q0VTBsjR27qLP9lt3Ns4o45xjm+IyiFl3jlfqbegyvMzFMX8QY0Ei7mbZU2ae12jktsm2fuew2wfztfbgmfzqsA5LG2zSm9pNRN/RFxb11kC9DYBg/Z7QQfm1M7SpiiC5fO3k0cmP+x4HbfUr0rNU7r98wJMkf6yDM0uOtsJ7G+4hFeCmHKHdm550w5p86+lXrX1PhULEEb5EvuN4j7ECQciq4wXFIapfS7Z/XmaswDQIIpfZo4H8ahPsMR1qN77Dm0Qy9k6lkZTLsWAxqoD8v6Bh7xlK184ivFXQQQS+mJ7wFeCAsjXwqpdw9LFfXh+gInYxVhknP5HwSgEq5SImW3j5nNFFK9D5rUu4hcESX6NGRC1RdP2bEiTBm7TmnpUhCKMJ8DOVdm15KrcsZTvg4i+MCJ2xLv3Is5o4/7XdzjClyH+c8JlmGEmDCRYvNMuKWntU54xAhbvPYuCwcts+FpVbd3ywoRhLpkTBzxN1Gxk9NpLLLDiChvQUEowlvMyo/uR+H4uXvLz6GApodtLvlI4UNr6KYQpgQXIgtfs2tVqXXClqWYYfNyJDpbIIRR+8I+tIaSgBk2hsywnDVLdHd0pKzznD2/zZ7zt1veLpeWCdojLGQWb9mdLfacrwwpFHTbD39BwnrRl6GLcAEQRKiNERXV78yi1VK4KuH1w+A3rIC2hHma8WLgttpqIzK3Qwi3SdiY77ECQoRz78oIwnw+pVBQiU2G9sgiVRpfZnJ/MOFDDgU6YSMimLLnPArjSNV0gLYwEVvbsDLYryHMVfeKDbYUUSu2iFMooCrIis06M6Jdz8OqYpLu7FLVlDCfuC1XbTXlQym9YA796V2WJw4Za/MXAqCS8xJ/ACqhhXN+O1aWOvAydiFqdrkuZ1CgE74UVVMiqiBZ7k3sfTxCANVLeikf4IWo0+vDFJsUK8Y+YjZys2P0PkdB57gSX7FBN5V96Aj7sY1AV1Bfpnlf7mz2hM1JlwiXnRzFOq1OG2asFR339HYAIE9L9VMXNG4XrxEmfKWk9Y4vTPSmDbOzeNLbAYDBE3b7OHDqkvqNRbtrBAnTvOIT3+CxcpBWKHBejk4nmnP0BJeW89pSVZymeNElX7SUP1klwiV4+iTqQVp5FDPrk+x1/yfU50w9+NfPzKPrfvM/D7t0OjFhrbZjbzHS11xsAV0EK1Ld+rrv1uaR+3PPx8KdkNyJtWuupS8oZXnlddqnGncFja3tsy9xr6ltI+HAQVpvatwVMfVu8/dPq90SHaSBKV9PatwVqnq7laKtfrTfD29SFVVWLz2rcVcI9f7QUKvX0JpwpcbFHJmtk+xneOr9vH2mbaADqjlyiB8E1VTrhJ/3iGdFDIRvOgbCNx0D4ZuOX45wp8KjB2TKhjTDgAEDBgwY8GviEzsExJ2WZ/FZAAAAAElFTkSuQmCC",
  I =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPUSURBVHgB7ZpNctMwFMefQhcsWOQIOUJ6gqYnoEsomak5QekJmp6A9gQ1M8CwI5zA4QTNDRpOQBcsGJoi/k+R4y/J33ESRr8ZT5xIT35/P+lJlkPkcDgcDofD4dgjpEd9+YoGVBFlh4MqIsc04qNMXVGmknLikd7jdKR/uhGf6DpV7uH0JVockkw4Pcf3G/GZfEO7Q9id4fQExyBVPIPdB5Ndpp0xBahL8Om4qG6vsLFTuqQl3ePU004NICoZhSUcJ31DZCZCQ9S/lW/oNtP4UtV9R2TsDSNl91qV2/0bq2uOuH6ZKFsF892Hk/e46MQgIoH4iGgQPeBYcDTR6lucX8B2HqvmZRw6UOUL1Juq+qEd/xZ5eEn5ROWysC4uaeM3BDzTQgXOpXJiaK3/RIfiS8zRFde6u420Q2w/CwuFTw/yBHZTdbMivz1040f6qb+qfGBoOx7dEBVlHQAj1girCwhEi+/+kg7x+Y1yMDlUhrRYTbJHPTfWYbIRLYjyQV4h7tRk3c6YKoNIDRCpUdRgootH9U4R+Z4S2YfDbHMeK/a5J2RsstENyY1yruAmaLHB+gf0FGtX6yHhpZ0XSuQN/YpmgxT2SK6iPDNfagPExA70TwsMi4sqbahEKTHN9bMJMye6IdaM3bpgo9gnOs4b44j8MeZQwQeEcL640kU8TweGxUhhNraN5Va7dB2xabDQ4HE+x5R4RuG8/0d9rsc/3yCqSWsRVl1oSXfUQGyKKKq96stNG61EGFnWQxdKr6RmaN1LZfc5ojNN2Ak6gu13iOJxvoANL005S/djXs6pJdrp0sKYIPgmpPFxTGN2R6qe0HWfEWVsJF2ZpqW6bCRLl0bQDyJLl19NSxcY0xNq9ZI7AJaXfXoRW7aiazcY+w6HY09RW0Sn+UluYw8PXaO3mQKd3a1sd1rSlN2As9pHS9phUd2tC4bYSywuArV3Vse+glhmq4K12In6gr2zqqINDyuFbE1wQmxIBdF1xDJbEWwUG1JCtNrPTj6ZlaZzwRB7bhUbkiNaiw2Kto5tdCpYPdRL6x5VEha92gRI2jcQy+QKVruJLaGd96kafih6bS+bbQb0CkpPcKG7Oi+44qhuWF1siK9f0/jUAmW6tG0jrRTrMdcMj1qi7Bhm0XdqKqhA0wSzCaokrYGO9KBMZT1Pft0lsUzVLF1KdN1FQRfUmZZyRe+yWKbuPGwUvetimSYLj5VoPVfvg1im6UqL//4QqOfZPRDLtLHjwW/5ms6znbETOx5d4gT/7+SP4SUW7Aexvw6IjpOSrHG9v+4VjcPhcDj2hn9duHz4o6D4OwAAAABJRU5ErkJggg==",
  b =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASlSURBVHgB7VrbUdtAFD1KSL5dgumAVBC7gsBfAsxgVwBUAFQAVICZSQh/mApQKsAdoBL4CPnAhs3dqzWxtSt5X/KEQWcm46DH7p6977sCGjRo0OAVIbF9UGxBaC//sH8/JkLW8g5vDCuIALGNDv10UC/S5DtSBCIKYUiyAgeoE7nCpgjEm1PpOIQF7lE3Is3hotJywtbsBfEV7eQSGZ4wpJFGqBO/8/HlnDCvzQr2hBMiJrBWeFv+nTFp8L/6sUKEtaBkv9kuKv1Lu/Jcu2fWIbBjuJrBEi6Eh9qVBDuiN6/mdYLmasMU/hJcwxL2Ki1tdKzZcQuP2KPfQ17QFv//GDEhcJRc5ONjwtJtF57IKD4PYQlrCScDIpvgVL+BXbGZ2zaldyfGZ3whcDoly9IVivg8UjjALSytECHdI7aI5NVUtWm3pZTPEY5zIivHAo89xo32REJrecIRHOCc/Feo7Qgf0GVNAKebh/TzGT4QuGZtwRzZNcNz/9TdEl7VDpG5ock6+g2ypY/oT0mHgslOcEbjrhtuZ7Qpq3CEX6Y1QR+mYJ/QwkgaypsGgccY88YayZIqd+EB73qWHVXCqtYyLihX7wweeCGLko0T+ESq7JXZeefSPKHAfsltueA78S13Oi4gc9klDbpFOdm+L1mJ4I4FLXCdFnEGlCYgA5L20SJpK+cknWHP+ID0yM/YJ7IDBCBKi0ap9xVQaruZ8qgD4/vbXE+fLXh/I0SyU0TrSXEV877C7vLZurNdCyVV2TioUv0ROagNVaAEI3oTjqR1QtLYLVzOaKb+HNnFUuVMC39wmAzj1du1dB1JxXs0spRcu7johbaar+qeTUAlHzFRW5uVVZxq14JUpeQPiUyrYkWpjPOxVFgffglQcVWqbwflK6lNqvPT1Iz/QarzU9UEX6myM1uhPHlQD/la2rQz2VKn4rEBNeZWZ6siqsSOaQNuOB/frHBqAYgqYcu46hKiTmhD9hER8RKPXIVltrVW/pAeVxXZm4qhgwqRIuKklj0iOV6QWhakOvf+bNwuez9Sahlsw2R3O2SvVSnlOR6onKs4COMcO69vy1pDbVmKcqESiCAJM1mUVC+ecdWi89mjMb17Zv4NgFyNb0tuc0fCN64uKETkRnaX2gCYcVAmjELISqjzqi7MRygtVm/PNpKfDZe1XxJq4j2EkX0Z6jL3zjymjpZKatzHhSPIcRyUNMRHTHb40qbdLWnAWUxCp/0Xeb+5sk0rOyA/3XyEE2FWI5lB6Xlxxp54SnaLd7+HMAzIOfXVvC3lL9qFZ+5JC1Zd2sJuKj1m6epFwNOMZLcW1Lr26Kmx8mMeisMwnXo8ujUKXW24o12RoUfZLKs73DuVFdibdj7ZK5edbTmcYNp/p5V3J4ueOQv1yC5Qqn2HYoe00Curgr2EBb4YrqbLIiuhTjD1pOPZ3jnaE06MYcg74wlACn0d1od29gfiwhAWJsp280OvNdSJaVNgQrb8XrvbthzF6SsezTG8qPOYvXLck/8ixlwXn8g5yXsvXFsZ4nQ8kiV85xFpjubjUk+kS2j4poiAKIRVDEzxCvDmVLpBgwYNXhX+AulB0T+BzTLtAAAAAElFTkSuQmCC",
  W = {
    class:
      "base-x-p mx-auto max-w-[2000px] mt-[140px] max-lg:mt-[100px] max-md:mt-[85px]",
  },
  z = { class: "mx-auto" },
  q = { class: "text-center mb-10 max-lg:mb-6 max-md:mb-[18px]" },
  M = { class: "title text-black" },
  _ = { key: 0 },
  $ = { class: "font-semibold italic" },
  tt = { class: "description text-black mt-4 max-md:mt-3" },
  et = {
    class:
      "bg-white rounded-[30px] p-5 max-md:py-8 md:p-12 grid md:grid-cols-2 gap-12 max-md:gap-8 max-md:rounded-[20px]",
  },
  at = { class: "shrink-0 w-[30px] aspect-square max-md:w-6" },
  At = ["src", "alt"],
  st = {
    class: "font-['Inter'] font-extrabold text-xl tracking-tight text-black",
  },
  it = { class: "text-lg text-black mt-3 tracking-[-0.2px] leading-[140%]" },
  It = {
    __name: "InstitutionaSection",
    props: {
      features: { type: Array, default: null },
      titlePrefix: { type: String, default: "Key" },
      titleHighlight: { type: String, default: "Features" },
      subtitle: {
        type: String,
        default: "Built to give you an unfair advantage in private markets.",
      },
    },
    setup(e) {
      const l = e,
        i = [
          {
            icon: f,
            title: "Intelligent Deal Sourcing",
            description:
              "Evaluates founder history, product traction, and technical momentum to identify high-potential opportunities.",
          },
          {
            icon: B,
            title: "Real-Time Market Signals",
            description:
              "Sentient Signal Agents monitor millions of data points including funding rounds and GitHub activity in real time.",
          },
          {
            icon: I,
            title: "Continuous Due Diligence",
            description:
              "Tracks KPI changes and risk indicators constantly. If conditions improve or deteriorate, you're alerted instantly.",
          },
          {
            icon: b,
            title: "Adaptive Learning Engine",
            description:
              "Learns from your investment behavior to tailor deal recommendations and filter out irrelevant noise.",
          },
        ],
        n = [f, B, I, b],
        c = y(() =>
          l.features
            ? l.features.map((o, h) => ({
                icon: n[h % n.length],
                title: o.title,
                description: o.description,
              }))
            : i
        );
      return (o, h) => (
        a(),
        A("section", W, [
          t("div", z, [
            t("div", q, [
              t("h2", M, [
                e.titlePrefix
                  ? (a(), A("span", _, s(e.titlePrefix), 1))
                  : m("", !0),
                t("span", $, s(e.titleHighlight), 1),
              ]),
              t("p", tt, s(e.subtitle), 1),
            ]),
            t("div", et, [
              (a(!0),
              A(
                g,
                null,
                u(
                  c.value,
                  (d) => (
                    a(),
                    A(
                      "div",
                      {
                        key: d.title,
                        class: "flex items-start gap-4 max-md:gap-3",
                      },
                      [
                        t("div", at, [
                          t(
                            "img",
                            {
                              src: d.icon,
                              alt: d.title,
                              class: "object-contain",
                              loading: "lazy",
                            },
                            null,
                            8,
                            At
                          ),
                        ]),
                        t("div", null, [
                          t("h3", st, s(d.title), 1),
                          t("p", it, s(d.description), 1),
                        ]),
                      ]
                    )
                  )
                ),
                128
              )),
            ]),
          ]),
        ])
      );
    },
  },
  nt =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAYAAACrHtS+AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJxSURBVHgB7d3hbdNAAIbhD8QA2YBjgzIB2QA2oBvABvUGwARJJ4ANUiYoGzRMQDcIPpkmMrarVvL57vK9j3R/Ilc55W0c6xw7EgAAAAAAAAAAAAAAAAAAAAAAwJkK7VipHHEuQZhdfGF37Tj8G1+U30an+dyqrH/E6jU6vbgP44PyudRwPo0q8FJ1CCOPXSifMPLYa1WgluCYCcHNENwMwc0Q3AzBzRDczCvlF1eoPqlbSFk9ss3/4t98nNh+347rdmyFooR23Gm4ajXX2CmNZuS5NqpA7l36ldKefFirkiXPpeQOvsR6+DvhKHfwJc4wBeGIo3QzBDdDcDMEN1PCwkuJ4sHkpaYPKseO/OMXMpqJ7e/b8UPdgpC1wwLjTs8TV/D+JJrLlcyVFvxigfl8lrHSgn8vbD6z46CtLyi9oIwI3nf23y0nuBmCmyG4GYKbIbgZgpshuBmCmyG4GYKbIbgZgpshuBmCmyG4GYKbIbgZgpshuBmCmyF430+l90sZEbzvq7rLglL6JmOlXYgQrZXmvjPx8qXsV528UF4Hpbdvxxs931rTFw281/B2JfHjYDuxfdxr3Cj93qN4Jb7Dn6IZeZ6NKsBnuBmCmyG4GYKbIbgZgpshuBmCm8kdfImVp71wlDv4tdJb4jmqkTt4o7TvwBvxqwg9ue/EGHfpb9Xd9TCekAgT2600vOHOvaY/EvbqTmY0QpW2Gp6saJRPI06eoAYEN0NwMwQ3Q3AzBDdDcDO1BN8/8bGljF1M8FuYTVxlu9VpkWOr/OJFCw/z2cng1ts5BJX1wsa5BAEAAAAAAAAAAAAAAAAAAAAAAJyjv8U3SY4d9eFQAAAAAElFTkSuQmCC",
  ot =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAYAAAAcaxDBAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQNSURBVHgB7Zz/VdswEMe/7ev/ZQOuE8AI7gZsQDpB6QSkEwATJExAO4HZADqBvQFhAtdH7IfD06/I8kmJ9Xnv++w4cnw5yZZ0kgVkMplMxpdPiM9Jq6LbUquv3b4Lm1av3fa50wYz5apV2aoJrKdWC8wIalUhvCM/ququddQQZJw5G6dKOnPoVDG+QI4FzKWl7rSBe8VCgy0Z0vDz+hZHBlcWqhK0hHutboK631Jdo8SRwQ7TOTM0S821QmRaMhRQ/0lCeHSZdwEBPkMGUhyrO4Vmo/ldkRIa26FTsXG0IThSDpUmWvczOzQwx3rLvyqOnUKAYy2h0cgODUx2aGBCBZip1Xm3PcO2zdcHjDH4HJONQjW2z9s+OF0jIkWrG8SJIE0ZmVpBOORHmCbSnppWEHAs94dfADQz0QsmjAFcAGhmquBOJcyrZKpKKiEgKwDNzFUiEASgyXpTAQsuDftrZHqsz1KXhn2FGYxvO1K3+mZKYCuhhOzMIQSLP2wOPUd8uEv4q1ON+Bh9YhuXj+3QutV3vAeM19jWtjHtItOXthIaO6Bxh93oO+/fIy5nGMED4jRPuBQW0Gco17brSLb9wQhKyBpbwaGtN+Ac8tGuEiN4gpyhfC2fRwxB1s4KI6ggZyTBnxPI2qollSGQ3xjXJOLK6gcOAIkIkynHr7Fb8mzTvauJbW06n3jTCOhWc+0bwzkrzTm3E9vayxsJ4xaK6xYO5xWK8xYT2ejs0FSHkckzTfQ5oCk4lBTHuPFcw8yl47GkkLh9Ss21CfZKZoXtrc89J8lenRZbPLSBDBxjrDXf9RMo+okT3JcuEPf29p4gIpXjJfZngXiTLLyRNPIafkg1lQ7Ooawb+LEUsO0gHcqq4Pfyaylkn9GhqVRKKrh//tjqH97fsOPtsyY9Qe41xOQrJW7ycNOngD1wzE4jjb2lkL3eSBj3hP0dU0HdbFpOaKeTQ1PoKd07HhtCUE86qBGZFByqegWmhh2XNOKk4FDVkPAjzKX0rkvj8ltJETvAvMDueBGnXRrSVxPb2mBkgFnCQFaB8SwwrY0uBcBKBTkjxwQ7CHmQbgfCtqlE2B/OiAfPc30Y9R4p/8lGUJz7+1QsBRKb6GAroaNywwPCthJaQT+5tV+JrIR/qR7DK0awhmzuf9SVwqaryDbpRmnfsJXQZ8TlEruVFe//RFyMd61tfmiNuPDzlB8Bd91ndjAhLsZCZgtDEYRX5joATONf1lu+RqJ95kjUsPjDpR36F5meRwSgQNxaNSURAlECaGauFQJCyC/PEgKTX++egLwAwQQQ4ndJJVQiwtojaxzfIi7cVy/gSehlhljc3z7F+9JCfV98uC9Nv6xQTz041k+kiL7MUCaTyWQymcyM+A/dfI0SEi5g6QAAAABJRU5ErkJggg==",
  lt =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAYAAABxlTA0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASNSURBVHgB7ZztceM2EIafZPI/7iC4Cs7pANdBUoFQgjuwOrBTAZUK4lRAd+BcBZAr8HXgEENyTtZZxDcB3uGZ2ZHGlHeBVxAIYAFCo9FoNBqNRqPRaCTmJ74Prif7OJgY7Gp6/XJix8E+D/bfZA0LcrC7wV4Ge/U0PVg3+dgcpvXcMFbAVGRJAIE/arAn/EVdEluxAQSjqD6VE7gjGcV4zWRVC31LWKWEg2/zi7gjXDhf66aYVWAK0hNeGWHxb67rCP8xrVlQGEF85cWCfzMqCLmBpRT5moKkuNGIC75LizvbC4VEviVNBcQ7vs3fahD3VGRBICETDcH487FhBvcPjIP7Lxc+83B2zfTpT1TQ/51xHOx3LtcjKR32b/2esDuxi+9SdscKCIeC7AlDAa+VmyQzylKAjnA09Qusycw/lgIIwlDUL+5siowsDc0eCKfHvm5Riz2RkaXAN6TDjD3/YOzPe+oTWZKJUj8dMyIxgh+oQ+B7MlFK4FPEFEtTTuAXMlGDwKcoygntNIX+mW1zGOzTYH+xPj+EwIYj4w32w/R+LX4YgWeOjOsFMcNFH4TLh37Bjw8L11wWQsy3Lgf7jbfZX8NxejUZ3+fBHvHP/poy/Mk4vLslL79SCZIy2d89JLmZLZWtKIq0d3iN/0hlnzD+uWWd0S0hqSv7u89Ujp6VqTn7a1ukql5gQd3Z36sM5cs2XT6ndILSNTEpE8dNubh1ka1lf+8TxsyebRZsL/t7RZoyazKTo09LYRr7jW+fIE5HZjriC5nLbNnfFK1YkhFFXOHWMLlchahWrMmMJrxwa5lNhJhWrMiIguBKr22KZUImH5rMaMIqW8JsawUywKciI5KwiroUWmXyLRfq49tNdGSmI7yiLi1CZfBvm872jn40K+x614RX1CbujEocw5b9dZnZRW1fdeUaoirqIu6MShzrOiLWahuwb1hH3Bm1UjxBBeIaUi2SKNxRiWIu9cNXF/5Hs/Im8J51xZ1RCeLassznI4kDBY5xxQqsCEdFxu4t/jVfW62kEHMh1hZ3RkXE1xbfPRknEL77IkJ4JZ4YH7b9Gp/IiKvAR8I7/cP0+jdh7E58hBByMuiK5X74SGJSZGV3+LNLELfHH2Xx6Yzr3rRn4jngJ3Jsy535TEFcBT6ShgNuIqcS13BkA6SeKi+JnKJbOLWQ2ZgiURfhQ+oM8u6dGLvEMTRhKFbugw3/kpYDb0VO2S3MPLIhJGlb12lL3mXyLQljaXEr2wEYgyaPEDlME87SsDTrtlXFdgRWhCEsfrMfUdDUL64mnI48X5wzkvoFVoRx6+BbsAIpdymmtg5/XDePe/sOfXbllh79Mp9zfg9z7eN03WWRfdWzeIJtbF8VifzvKcAWNmCLBP6LnSgy1H6EQET613wnTwHMVXkR4b+nsudYHlhPXNdHh4lA/3sqRZH/IKLEHeHh23Q3HfWNjt5FUf4orUGwLKjxa0Q1CzzVdAc+SMauI0RsI8A9G30UuCF0ohHK/DgDwTjAh7ePMzAThOfp/SPtYfaNRqPRaDQajUaj8S3/A70VZxWnqNWiAAAAAElFTkSuQmCC",
  ct =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKOSURBVHgB7Z3dcdNAFIUPPwVQgkoIHaQDeOSRDkwH2g4ogRKACpwOoIPQQXjkTWjH40liZGst7e7VXb5v5jwlHtvf0a5s6WYiAQAAAAAAQFVeCc7xZsyHMd2YP2N+C6qxGzOcpBdUIYoezoQSCnNJPiUUJkU+JRTiGvmUkJkl8ikhE2vkU8JKcsinhIXklE8JV1JCPiUkUlI+JcxQQ/4xnwTPqCk/5kGHi3mg+vKPeZ/w2vRa2+d2zDsd3lAnP7i/fB2X8GfZHL054noLii/+h3wJf5og53g+8oOc08mX8KbkR77Il/Sm5Ec87v1BDeFJfHPyI8g3BvnGIN8Y5BekT/idOQGwkCg/RSAFFOAonwIMeCqfAipzKp8CKjIlnwIqcU4+BVTgknwKOOGF8jMnae455yYK5h5fu6RVDl9qe/y88LPvglnWbiGdDqvg9HEPSpuKGCpnc+R4wd2Yr3oUv1f6SIqrArZ4Dij9/Llxdw7oVI4b1WX1OcmigKSRvYXULCBOvm1yCHduz9yrHPeShsK59pxUnZQ3UeLI2UkaCsQdqUdRzu3iRtMfXSlAl0vIsRJ2Kie/6QKOuR/zUdetiE6H8vZSFslmBVh8D/BG0e8tW7wWtCWKX3tiBZwnfs5/O+aXCsIK+Jco/k4V5Edy/41YL3+UvjZVjSh/cJgm6OVLelMF9PIlvKkCevmS3VQBvXyJnso3OaWXL9FTSb3HvDl6+RI9JX4v5C9K0H8M8g2Jk2rIN+RWyDclTjIg35C4BZW87Yf8BOItQOQbE4R8c4KQb04Q8s0JQr45Qcg3Jwj55gQh35wg5JsThHxzgpBvTtBz8blG0Zuj5FRYp8eR8zvxzzABAAAAAABgC/wF02IdWtWOiY4AAAAASUVORK5CYII=",
  rt =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATiSURBVHgB7Z2Ncds2GIafdgJ3gmKDpBtwBHeCYIO4E4idIN5A6gRuJqA2cDIBnAnsDRTiLF50MkGC0vcBJI3n7j3dUTjyBUACIP4IhUKhUCgUCoVC4b3xG/PmplXVyrT6cPw1x//MWdiXVk8nvz9a7Vt9Ox4rROAT/LbVl1au1UFI/lzb47lvKLyhavXQ6hm5RB9SlxnvGn8nbkiX6KEnw/K2OFs1c0j4vozY8A6wyJbtWk/E6jCtGuab8Od6YEXF0mfmVdzEynu2LBhf1vvm5JISvU9fWCCm1SPLSughPbKgIskw74r2UjkWkAmGdSb+IjLBsO7En3UmGNInfs1rRe91l/jajpllQuoK967HQ53Yg4/zLDr2cjQ1+yJ+k8FH9iaqJX2kDwN+cni5IxOGtG+4/lr3DL+d+i7mHWnro2cy1QcPpIlgw+t4wVRuSdf/1JAYi36kHJclfJ9Xh75fS0K0I+SfLskWhkH/iXUkahVtQDUiO/TYgar3GmUMunf/A/o0oObfV8iqT4EFNfOO8dZE99Y75M8wfg7N1luNIg7UjNuB656PI4fozrVhGAvi/k+fAhVuQc20G7iuT/zzro4Qp2HGugo0n4IKBbagZvh+4LpNT/gQ5+GagbD3Ez1OkXhdpt3PUgWuawPhQ/SFtYGwFfH+pkq8MtYsfg4DZhuuz4AmENYQ7+8Sic6826JrNoRE+OcLzi+hoWJ1Mg5dsyGeJ4YPnT9H97Ujgt8jwnijBl1M4Pg3ZOh7d/iELgaheqBC9045oFsJd/KZ0A1hbq7wOkUi9UCNvlGtZmhujQ7WxBRBBn0+Dfz3N3JFUWo+jAWIyYA/0ccXCzbw30urv1r9y/IwCJBqxkPMy4thuM9oLkVPJ4cAKcd9G64jx5iwegakNr1FhpRjwkO6mhymJRdIWPI+EVeTy7hDbqDbkG4Wx2oyoFODXMfWDpJ4Fs0AB8lNh56ILddnRoO+104io2MOkhmOVQhL/jHhUz0iQEMasxIZ0P2/YRir6O1UDQLsIIlZyQzo7r5cY8KdtowQ0xWx1H6YjwyPzf6HPj/GAsRkwBNp8H09fxz1DzJUhJuy/6PPHgFSLHyYuuIlxJRy2ER6u0ZiA/OO9EaHMj5EX9hcY8KOCGKKIM9XdHkJHJPY6SrXOq59TKDYDNijiwkcl2gA7APHtTMm6qadkgESd2MIEzgu0VIJneMjuuwRRrMza21TE7coUIGa4aGKUmtyroOL/Y5JdFbcKZpvj3bk2jVxGfDMr1X0ISyIej+VQ5Ea1IxLjAl3c3/GzuFALR4WRbR7Ehv00azLHAmm8dSgFgGvLXpsQdV7TQL8U+BANSLSm+bdkGaZajIsupHpImS5nooVLtT2NOhH6sDlY8IV6TymWF77BkPaSVuO8TFhy+sWMqk3ETFkIvVOVZ1C5PBiyYzmK31Ic9mwSXQZ0qX0dRVoq+7x8TmxB5EZD1IY0k9fybHipZOj7JyYTY6yd2hJ/CEMZevi7BjK5t2zIEcTVVo+DrkG9kWwLPcDDqPLTJeCId8CiUvUsNIvK1nKR3xmQc28MiJmHHl1GPI/Ee8y4fvo1vemSnRfH1UU3tB9zHOH/Mc875nhxzyX8DlbP4Ww4nXPCsOv/YvOE/Lp5Nfr+/F3T/mcbaFQKBQKhUKhUJgRPwHwPFtvo7QR8gAAAABJRU5ErkJggg==",
  dt = {
    class:
      "base-x-p max-w-[2000px] text-black text-center mx-auto mt-[130px] max-xl:mt-[100px] max-lg:mt-20 max-md:mt-12",
  },
  mt = {
    class: "flex flex-wrap items-center justify-center gap-4 max-md:gap-2",
  },
  xt = { class: "w-[42px] aspect-square max-md:w-7" },
  pt = ["src", "alt"],
  gt = ["innerHTML"],
  bt = {
    __name: "TechnologySection",
    setup(e) {
      const l = [
        {
          icon: nt,
          title: "White-Labeled<br>Fund-as-a Service (FaaS)",
          link: "/faas/",
        },
        {
          icon: ot,
          title: "Behaviour Based<br>Staking & Rewards",
          link: "/behavior/",
        },
        {
          icon: lt,
          title: "IPO Index Funds<br>Wrapped Token Baskets",
          link: "/index-funds/",
        },
        {
          icon: ct,
          title: "Deal Builder<br>Marketplace",
          link: "/marketplace/",
        },
        {
          icon: rt,
          title: "IPO-Backed<br>Insurance Pool",
          link: "/insurance/",
        },
      ];
      return (i, n) => {
        const c = k("router-link");
        return (
          a(),
          A("section", dt, [
            n[0] ||
              (n[0] = t(
                "h2",
                { class: "title text-black mb-8" },
                [
                  r(" Technology "),
                  t("span", { class: "sectitle" }, "Overview"),
                ],
                -1
              )),
            t("div", mt, [
              (a(),
              A(
                g,
                null,
                u(l, (o) =>
                  p(
                    c,
                    {
                      key: o.title,
                      to: o.link,
                      class:
                        "bg-white rounded-2xl max-md:rounded-[7px] p-4 flex text-start items-center gap-3 max-md:py-2 max-md:pl-1 max-md:gap-0 max-md:min-w-[160px] hover:shadow-lg transition-shadow duration-300",
                    },
                    {
                      default: R(() => [
                        t("div", xt, [
                          t(
                            "img",
                            {
                              src: o.icon,
                              alt: o.title.replace(/<br>/g, " "),
                              class: "object-contain",
                              loading: "lazy",
                            },
                            null,
                            8,
                            pt
                          ),
                        ]),
                        t("div", null, [
                          t(
                            "p",
                            {
                              class:
                                "font-medium text-sm leading-tight max-md:text-[10px]",
                              innerHTML: o.title,
                            },
                            null,
                            8,
                            gt
                          ),
                        ]),
                      ]),
                      _: 2,
                    },
                    1032,
                    ["to"]
                  )
                ),
                64
              )),
            ]),
          ])
        );
      };
    },
  };
export { Bt as _, ft as a, It as b, wt as c, bt as d };
