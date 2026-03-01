var _ = Object.defineProperty;
var f = Object.getOwnPropertySymbols;
var k = Object.prototype.hasOwnProperty,
  w = Object.prototype.propertyIsEnumerable;
var v = (r, t, e) =>
    t in r
      ? _(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e })
      : (r[t] = e),
  h = (r, t) => {
    for (var e in t || (t = {})) k.call(t, e) && v(r, e, t[e]);
    if (f) for (var e of f(t)) w.call(t, e) && v(r, e, t[e]);
    return r;
  };
var y = (r, t, e) =>
  new Promise((l, m) => {
    var b = (s) => {
        try {
          a(e.next(s));
        } catch (n) {
          m(n);
        }
      },
      u = (s) => {
        try {
          a(e.throw(s));
        } catch (n) {
          m(n);
        }
      },
      a = (s) => (s.done ? l(s.value) : Promise.resolve(s.value).then(b, u));
    a((e = e.apply(r, t)).next());
  });
import {
  r as F,
  c as C,
  _ as S,
  u as A,
  d as E,
  g as q,
  e as N,
  t as P,
  v as B,
  F as T,
  s as $,
  n as O,
} from "./index-CkW8Cm0p.js";
import {
  d,
  e as p,
  f as o,
  q as g,
  A as x,
  u as i,
  K as j,
  l as c,
  t as D,
  F as I,
} from "./vue-Z9E3ejSf.js";
import { S as L } from "./Socials-BMfvSOBs.js";
import { g as M } from "./product-faqs-DsJuzZFe.js";
import "./gsap-BwUJxYA3.js";
const R = {
    id: "contact",
    class:
      "max-w-[2000px] base-x-p mx-auto relative z-10 mt-[120px] max-xl:mt-[100px] max-lg:mt-16 max-md:mt-10",
  },
  V = {
    class:
      "bg-white rounded-[30px] max-md:rounded-[25px] p-4 md:p-12 shadow-[0_4px_20px_2px_rgba(0,0,0,0.25)] shadow-black/5",
  },
  z = {
    key: 0,
    class:
      "bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-center",
  },
  G = {
    key: 1,
    class:
      "bg-green-50 border border-green-200 text-green-700 px-6 py-8 rounded-xl text-center",
  },
  H = {
    __name: "ContactForm",
    setup(r) {
      const { isLoading: t, error: e, success: l, submitContactForm: m } = F(),
        b = (u) =>
          y(null, null, function* () {
            u.preventDefault();
            const a = u.target,
              s = new FormData(a),
              n = {
                name: s.get("name"),
                email: s.get("email"),
                role: s.get("role"),
                topic: s.get("topic"),
                message: s.get("message"),
              };
            (yield m(n)) &&
              (fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(
                  h(
                    {
                      access_key: "1d323164-4e55-47c8-bd46-0062756d256e",
                      subject: `New Contact Form: ${n.topic} - ${n.name}`,
                      from_name: "IPO Genie Contact Form",
                      replyto: n.email,
                    },
                    n
                  )
                ),
              }).catch(() => {}),
              a.reset());
          });
      return (u, a) => (
        p(),
        d("section", R, [
          o("div", V, [
            a[2] ||
              (a[2] = o(
                "div",
                {
                  class:
                    "flex flex-col text-center text-black gap-7 mb-16 max-md:mb-5",
                },
                [
                  o("h2", { class: "title" }, [
                    x(" Send us an "),
                    o("span", { class: "sectitle" }, "Official"),
                    x(" Request "),
                  ]),
                  o(
                    "div",
                    { class: "description" },
                    " For partnerships, media inquiries, or technical account support. "
                  ),
                ],
                -1
              )),
            i(l)
              ? g("", !0)
              : (p(),
                d(
                  "form",
                  { key: 0, onSubmit: b, class: "space-y-6 max-md:space-y-1" },
                  [
                    a[0] ||
                      (a[0] = j(
                        '<input type="checkbox" name="botcheck" class="hidden" style="display:none;"><div class="grid md:grid-cols-2 gap-6 max-md:gap-1"><div class="space-y-2"><label for="contact-name" class="text-sm text-black ml-1">Name</label><input id="contact-name" name="name" type="text" placeholder="Your Name" class="w-full bg-[#F4F4F4] border border-[#CECECE] rounded-xl px-5 py-3 text-black placeholder:text-[#A5A5A5] focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-colors" required></div><div class="space-y-2"><label for="contact-email" class="text-sm text-black ml-1">Email</label><input id="contact-email" name="email" type="email" placeholder="name@example.com" class="w-full bg-[#F4F4F4] border border-[#CECECE] rounded-xl px-5 py-3 text-black placeholder:text-[#A5A5A5] focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-colors" required></div></div><div class="grid md:grid-cols-2 gap-6 max-md:gap-1"><div class="space-y-2"><label for="contact-role" class="text-sm text-black ml-1">I am a</label><div class="relative"><select id="contact-role" name="role" class="w-full bg-[#F4F4F4] border border-[#CECECE] rounded-xl px-5 py-3 text-black focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-colors appearance-none cursor-pointer" required><option value="" disabled selected class="text-[#A5A5A5]">Select your role</option><option value="investor">Investor</option><option value="partner">Partner</option><option value="developer">Developer</option><option value="other">Other</option></select><svg class="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></div></div><div class="space-y-2"><label for="contact-topic" class="text-sm text-black ml-1">Topic</label><div class="relative"><select id="contact-topic" name="topic" class="w-full bg-[#F4F4F4] border border-[#CECECE] rounded-xl px-5 py-3 text-black focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-colors appearance-none cursor-pointer" required><option value="" disabled selected class="text-[#A5A5A5]">Select a topic</option><option value="presale">Presale Inquiry</option><option value="support">Technical Support</option><option value="partnership">Partnership</option><option value="general">General</option></select><svg class="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></div></div></div><div class="space-y-2 max-md:pt-3"><label for="contact-message" class="sr-only">Message</label><textarea id="contact-message" name="message" placeholder="Tell us how we can help..." rows="4" class="w-full bg-[#F4F4F4] h-[140px] border border-[#CECECE] rounded-xl px-5 py-3 text-black placeholder:text-[#A5A5A5] focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-colors resize-none" required></textarea></div>',
                        4
                      )),
                    i(e) ? (p(), d("div", z, D(i(e)), 1)) : g("", !0),
                    c(
                      C,
                      {
                        type: "submit",
                        text: i(t) ? "Sending..." : "Submit Request",
                        disabled: i(t),
                        class: "!w-max gap-10 mx-auto",
                      },
                      null,
                      8,
                      ["text", "disabled"]
                    ),
                  ],
                  32
                )),
            i(l)
              ? (p(),
                d("div", G, [
                  ...(a[1] ||
                    (a[1] = [
                      o(
                        "svg",
                        {
                          class: "w-12 h-12 text-green-500 mx-auto mb-4",
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
                      o(
                        "h3",
                        { class: "text-xl font-semibold mb-2" },
                        "Message Sent!",
                        -1
                      ),
                      o(
                        "p",
                        null,
                        "Thank you for reaching out. We'll get back to you soon.",
                        -1
                      ),
                    ])),
                ]))
              : g("", !0),
          ]),
        ])
      );
    },
  },
  Q = {
    class:
      "max-w-[2000px] base-x-p mx-auto text-center mt-[180px] max-lg:mt-[120px] max-md:mt-28",
  },
  W = {
    class:
      "rounded-[30px] max-md:rounded-[15px] h-[450px] px-4 overflow-hidden relative bg-white shadow-[0_4px_20px_2px_rgba(0,0,0,0.25)] gap-16 flex flex-col justify-center items-center max-md:h-max max-md:py-8 max-md:gap-4",
  },
  J = {
    __name: "HeroSection",
    setup(r) {
      return (t, e) => (
        p(),
        d("section", Q, [
          c(S, {
            items: [{ name: "Home", to: "/" }, { name: "Contact" }],
            variant: "light",
            class: "text-left mb-8",
          }),
          e[2] ||
            (e[2] = o(
              "div",
              {
                class:
                  "rounded-[15px] mb-20 w-max mx-auto border border-[#FF5B00] py-[18px] px-8 text-[#FF5C01] font-medium max-md:mb-10",
              },
              " 24/7 SUPPORT CENTER ",
              -1
            )),
          e[3] ||
            (e[3] = o(
              "h1",
              { class: "title mb-8 text-black max-w-[800px] mx-auto" },
              [
                x(" You Rubbed the Lamp "),
                o("span", { class: "sectitle" }, "We're Listening"),
              ],
              -1
            )),
          e[4] ||
            (e[4] = o(
              "p",
              {
                class:
                  "text-black description max-w-[670px] mx-auto mb-16 max-md:mb-8",
              },
              " Whether you have a question about the presale, a partnership proposal, or just want to say hi - the Genie is here to grant your request. ",
              -1
            )),
          o("div", W, [
            e[0] ||
              (e[0] = o(
                "div",
                { class: "flex text-center flex-col gap-7 max-md:gap-3" },
                [
                  o(
                    "div",
                    {
                      class:
                        "text-black font-inter font-extrabold leading-[66%] text-[52px] max-lg:text-4xl max-md:text-2xl",
                    },
                    [
                      x(" Need Answers "),
                      o("span", { class: "italic font-semibold" }, "Fast"),
                      x("? "),
                    ]
                  ),
                  o(
                    "div",
                    { class: "description text-black" },
                    " Skip the email queue. Join our global community for 24/7 support, live updates, and direct access to the team. "
                  ),
                ],
                -1
              )),
            c(L, { "base-padding": !0 }),
            e[1] ||
              (e[1] = o(
                "div",
                {
                  class:
                    "w-full absolute left-0 bottom-2 h-4 bg-[linear-gradient(90deg,#FF5B00_0%,#FF8541_100%)]",
                },
                null,
                -1
              )),
          ]),
        ])
      );
    },
  },
  oe = {
    __name: "ContactUs",
    setup(r) {
      A($.contact);
      const t = M("/contact/"),
        e = t.map((l) => ({ title: l.question, text: l.answer }));
      return (
        E([
          q(),
          N([
            { name: "Home", url: "/" },
            { name: "Contact", url: "/contact/" },
          ]),
          P(),
          B("/contact/", t),
        ]),
        (l, m) => (
          p(),
          d(
            I,
            null,
            [
              c(J),
              c(H),
              c(T, { "faq-list": i(e) }, null, 8, ["faq-list"]),
              c(O),
            ],
            64
          )
        )
      );
    },
  };
export { oe as default };
