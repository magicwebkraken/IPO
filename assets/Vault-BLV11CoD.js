var Y = (H, A, u) =>
  new Promise((T, I) => {
    var P = (y) => {
        try {
          j(u.next(y));
        } catch (h) {
          I(h);
        }
      },
      M = (y) => {
        try {
          j(u.throw(y));
        } catch (h) {
          I(h);
        }
      },
      j = (y) => (y.done ? T(y.value) : Promise.resolve(y.value).then(P, M));
    j((u = u.apply(H, A)).next());
  });
import {
  r as z,
  h as N,
  d as o,
  f as t,
  l as i,
  j as ee,
  K as c,
  t as p,
  m as q,
  G as m,
  A as s,
  k as r,
  F as k,
  z as B,
  B as v,
  u as b,
  T as te,
  q as O,
  I as se,
  C as ae,
  V as oe,
  p as le,
  H as ie,
  e as a,
} from "./vue-Z9E3ejSf.js";
import {
  m as re,
  u as de,
  r as ne,
  d as pe,
  g as xe,
  e as me,
  j as fe,
  k as ue,
  V as ce,
  s as L,
  c as F,
  _ as ve,
  F as be,
} from "./index-CkW8Cm0p.js";
import "./gsap-BwUJxYA3.js";
const ge = "/redwood-logo-red.webp",
  he = { class: "vault-page" },
  we = {
    class:
      "px-[7px] pt-[80px] max-md:px-[10px] max-md:pt-[70px] flex justify-center",
  },
  ye = {
    class:
      "vault-hero w-full relative rounded-[60px] max-md:rounded-[30px] overflow-hidden min-h-[520px] max-md:min-h-[480px] flex items-center justify-center",
  },
  ke = {
    class:
      "relative z-10 base-x-p w-full flex flex-col items-center text-center gap-8 max-md:gap-6 py-20 max-md:py-16",
  },
  Fe = {
    class: "flex flex-row gap-3 items-center flex-wrap justify-center mt-2",
  },
  Be = { class: "max-w-[2000px] mx-auto base-x-p mt-4 max-md:mt-3" },
  Ie = { class: "sr-only", "aria-live": "polite", "aria-atomic": "true" },
  Ce = { class: "overflow-hidden" },
  _e = {
    class:
      "slide-content flex flex-col items-center justify-center gap-9 max-lg:gap-7 max-md:gap-[25px]",
  },
  Ae = { class: "grid md:grid-cols-2 gap-4 w-full max-w-[900px]" },
  Pe = { class: "p-8 bg-white rounded-[20px] max-md:p-6" },
  je = { class: "text-gray-600" },
  Oe = { class: "text-center max-w-[700px]" },
  Se = { class: "description text-black" },
  Te = {
    class:
      "slide-content flex flex-col items-center justify-center gap-6 max-md:gap-5",
  },
  Ve = { class: "grid md:grid-cols-3 gap-4 w-full max-w-[920px]" },
  ze = { class: "bg-white rounded-[20px] p-5 max-md:p-4" },
  Le = { class: "text-gray-500 text-sm leading-relaxed" },
  Me = { class: "text-gray-600 text-center max-w-[650px] text-[15px]" },
  Re = { class: "flex items-center justify-center gap-4 mt-10 max-md:mt-7" },
  We = { class: "flex gap-2" },
  Ee = ["onClick", "aria-label"],
  Ge = {
    class:
      "mt-[105px] max-w-[2000px] mx-auto base-x-p flex flex-col items-center justify-center gap-9 max-lg:gap-7 max-lg:mt-[80px] max-md:gap-[25px] max-md:mt-[60px]",
  },
  De = { class: "flex flex-col justify-center items-center text-center gap-5" },
  $e = {
    class:
      "w-full max-w-[1240px] relative max-md:rounded-[24px] perspective-[2000px] group",
  },
  Ne = {
    class:
      "relative bg-[#08080A] rounded-[32px] overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] border border-white/10 transform-gpu transition-transform duration-700 hover:scale-[1.002]",
  },
  He = {
    class:
      "relative z-10 flex items-center justify-between px-4 py-3 md:px-6 md:py-4 border-b border-white/[0.12] bg-white/[0.02] backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.1)]",
  },
  Xe = { class: "flex items-center gap-6" },
  Je = ["src"],
  Ye = {
    class:
      "relative z-10 grid grid-cols-1 lg:grid-cols-[280px_1fr_240px] border-b border-white/[0.08]",
  },
  qe = {
    class:
      "col-span-full flex lg:hidden gap-3 px-4 py-3 overflow-x-auto border-b border-white/[0.08] bg-[#0A0A0E]/60 scrollbar-hide",
  },
  Ue = ["onClick"],
  Ke = ["src", "alt"],
  Qe = {
    class:
      "relative border-r border-white/[0.08] bg-[#0A0A0E]/60 backdrop-blur-md p-5 hidden lg:flex flex-col gap-6",
  },
  Ze = { class: "relative z-10 space-y-4" },
  et = ["onClick"],
  tt = { class: "flex items-center gap-3" },
  st = {
    class:
      "w-10 h-10 rounded-lg bg-gradient-to-br from-[#1a2a1a] to-[#0a0f0a] border border-[#00ff9d]/20 flex items-center justify-center shadow-inner",
  },
  at = ["src", "alt"],
  ot = { key: 1, class: "text-white font-bold text-xs" },
  lt = { class: "flex-1 min-w-0" },
  it = {
    class: "text-sm font-bold text-white/80 leading-none mb-1 tracking-tight",
  },
  rt = {
    class: "text-[10px] text-[#00ff9d] font-semibold tracking-wide uppercase",
  },
  dt = ["onClick"],
  nt = { class: "flex items-center gap-3 mb-2.5" },
  pt = {
    class:
      "w-10 h-10 rounded-lg bg-gradient-to-br from-[#2a2a32] to-[#0a0a0f] border border-white/10 flex items-center justify-center shadow-inner",
  },
  xt = { class: "text-[#FF5B00] font-bold text-[10px] font-mono" },
  mt = { class: "flex-1 min-w-0" },
  ft = {
    class:
      "p-4 md:p-8 relative min-h-[400px] md:min-h-[500px] flex flex-col justify-between overflow-hidden",
  },
  ut = {
    class:
      "flex flex-row items-start justify-between gap-4 md:gap-6 mb-6 md:mb-12",
  },
  ct = { class: "flex items-center gap-2 mb-4 flex-wrap" },
  vt = {
    class:
      "text-2xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50 mb-3 drop-shadow-lg tracking-tight leading-[0.9]",
  },
  bt = {
    key: 0,
    class:
      "text-white/60 text-sm max-w-[440px] leading-relaxed font-light tracking-wide",
  },
  gt = { key: 1, class: "flex flex-col gap-2 mt-1 max-w-[440px]" },
  ht = {
    class:
      "relative w-20 h-20 md:w-28 md:h-28 rounded-full bg-black/80 backdrop-blur-md border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.1)] flex items-center justify-center",
  },
  wt = { class: "flex flex-col items-center" },
  yt = {
    key: 1,
    class: "text-2xl md:text-4xl font-bold text-white/30 tracking-tighter",
  },
  kt = {
    class: "grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-12",
  },
  Ft = {
    class:
      "bg-gradient-to-b from-white/[0.04] to-transparent p-3 md:p-5 rounded-xl border-t border-l border-white/10 border-b border-r border-black/40 group hover:bg-white/[0.06] transition-colors",
  },
  Bt = {
    key: 0,
    class:
      "text-xl font-bold text-white tracking-wide group-hover:scale-105 transition-transform origin-left",
  },
  It = { key: 1, class: "vault-shimmer h-[20px] w-[70px] rounded-md mt-1" },
  Ct = {
    class:
      "bg-gradient-to-b from-white/[0.04] to-transparent p-3 md:p-5 rounded-xl border-t border-l border-white/10 border-b border-r border-black/40 group hover:bg-white/[0.06] transition-colors",
  },
  _t = {
    key: 0,
    class:
      "text-xl font-bold text-white tracking-wide group-hover:scale-105 transition-transform origin-left",
  },
  At = { key: 1, class: "vault-shimmer h-[20px] w-[60px] rounded-md mt-1" },
  Pt = {
    class:
      "bg-gradient-to-b from-white/[0.04] to-transparent p-3 md:p-5 rounded-xl border-t border-l border-white/10 border-b border-r border-black/40 group hover:bg-white/[0.06] transition-colors",
  },
  jt = {
    key: 0,
    class:
      "text-xl font-bold text-white tracking-wide group-hover:scale-105 transition-transform origin-left",
  },
  Ot = { key: 1, class: "vault-shimmer h-[20px] w-[55px] rounded-md mt-1" },
  St = {
    class:
      "bg-gradient-to-b from-white/[0.04] to-transparent p-3 md:p-5 rounded-xl border-t border-l border-white/10 border-b border-r border-black/40 group hover:bg-white/[0.06] transition-colors",
  },
  Tt = {
    key: 0,
    class:
      "text-xl font-bold text-[#FF5B00] tracking-wide group-hover:scale-105 transition-transform origin-left drop-shadow-[0_0_5px_rgba(255,91,0,0.3)]",
  },
  Vt = { key: 1, class: "vault-shimmer h-[20px] w-[45px] rounded-md mt-1" },
  zt = {
    key: 0,
    class:
      "relative z-10 bg-[#0A0A0E]/80 backdrop-blur-md rounded-2xl p-2 border border-[#00ff9d]/15 flex flex-col sm:flex-row items-center gap-3 md:gap-6 group/action hover:border-[#00ff9d]/25 transition-all shadow-2xl",
  },
  Lt = {
    key: 1,
    class:
      "relative z-10 bg-[#0A0A0E]/80 backdrop-blur-md rounded-2xl p-2 border border-[#FF5B00]/10 flex flex-col sm:flex-row items-center gap-3 md:gap-6 group/action transition-all shadow-2xl",
  },
  Mt = {
    class:
      "relative border-l border-white/[0.08] bg-[#0A0A0E]/60 backdrop-blur-md p-6 hidden lg:flex flex-col gap-8",
  },
  Rt = { class: "relative z-10" },
  Wt = { class: "space-y-4" },
  Et = {
    class: "grid md:grid-cols-4 max-md:grid-cols-2 gap-4 w-full max-w-[900px]",
  },
  Gt = {
    class:
      "w-full max-w-[700px] bg-white rounded-[20px] p-8 text-center max-md:p-6",
  },
  Dt = { class: "flex justify-center items-center gap-3 flex-wrap" },
  $t = {
    class:
      "mt-[105px] max-w-[2000px] mx-auto base-x-p flex flex-col items-center justify-center gap-9 max-lg:gap-7 max-lg:mt-[80px] max-md:gap-[25px] max-md:mt-[60px]",
  },
  Nt = { class: "flex flex-col justify-center items-center text-center gap-5" },
  Ht = { class: "grid md:grid-cols-2 gap-8 w-full max-w-[900px] items-start" },
  Xt = { class: "text-gray-600 space-y-4" },
  Jt = { class: "space-y-5" },
  Yt = { class: "flex items-start gap-4" },
  qt = { class: "text-gray-500 text-sm" },
  Ut = { class: "flex items-start gap-4" },
  Kt = { class: "text-gray-500 text-sm" },
  Qt = { class: "flex justify-center" },
  Zt = {
    id: "case-study",
    class:
      "mt-[105px] max-w-[2000px] mx-auto base-x-p flex flex-col items-center justify-center gap-9 max-lg:gap-7 max-lg:mt-[80px] max-md:gap-[25px] max-md:mt-[60px]",
  },
  es = {
    class:
      "w-full relative rounded-[30px] px-8 md:px-14 flex flex-col items-center justify-center pt-[70px] gap-12 pb-16 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#0a0a0a] max-lg:pt-[55px] max-md:pt-[35px] max-lg:gap-9 max-md:gap-7 max-md:pb-10",
  },
  ts = { class: "w-full max-w-[800px] z-10" },
  ss = { class: "space-y-4 text-gray-300" },
  as = { class: "w-full max-w-[800px] z-10" },
  os = { class: "space-y-4 text-gray-300" },
  ls = { class: "w-full max-w-[800px] z-10" },
  is = { class: "space-y-4 text-gray-300" },
  rs = { class: "w-full max-w-[700px] z-10" },
  ds = {
    class:
      "bg-white/5 rounded-[20px] p-8 md:p-10 text-center relative overflow-hidden max-md:p-5",
  },
  ns = { class: "relative z-10" },
  ps = { class: "flex justify-center gap-1.5 max-md:gap-1 mb-2 max-md:mb-1.5" },
  xs = { class: "flex justify-center gap-1.5 max-md:gap-1 mb-2 max-md:mb-1.5" },
  ms = { class: "flex justify-center gap-1.5 max-md:gap-1 mb-6 max-md:mb-4" },
  fs = { class: "w-full max-w-[800px] z-10" },
  us = { class: "space-y-4 text-gray-300 mb-8" },
  cs = { class: "space-y-3 pl-1" },
  vs = { class: "flex items-start gap-3" },
  bs = {
    class:
      "mt-[105px] max-w-[2000px] mx-auto base-x-p flex flex-col items-center justify-center gap-9 max-lg:gap-7 max-lg:mt-[80px] max-md:gap-[25px] max-md:mt-[60px]",
  },
  gs = { class: "flex flex-col justify-center items-center text-center gap-5" },
  hs = { class: "grid md:grid-cols-3 gap-5 w-full max-w-[1000px]" },
  ws = { class: "flex gap-4 items-center flex-wrap justify-center" },
  ys = {
    class:
      "mt-[105px] mb-[105px] max-w-[2000px] mx-auto base-x-p flex flex-col items-center justify-center gap-9 max-lg:gap-7 max-lg:mt-[80px] max-md:gap-[25px] max-md:mt-[60px] max-lg:mb-[80px] max-md:mb-[60px]",
  },
  ks = {
    class:
      "w-full relative rounded-[30px] flex flex-col items-center justify-center py-16 gap-6 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#0a0a0a] max-md:py-10",
  },
  Fs = {
    key: 0,
    class: "flex flex-col sm:flex-row gap-4 justify-center items-center",
  },
  Bs = { key: 1, class: "max-w-md w-full px-8" },
  Is = {
    key: 0,
    class:
      "fixed inset-0 z-[100] flex items-center justify-center px-4 overflow-y-auto",
  },
  Cs = {
    class:
      "relative bg-white rounded-[30px] w-full max-w-md p-8 md:p-10 shadow-2xl",
  },
  _s = ["disabled"],
  As = ["disabled"],
  Ps = { key: 0, class: "text-center text-sm text-green-600 font-medium" },
  js = { key: 1, class: "text-center text-sm text-red-500" },
  Os = { key: 2, class: "text-center text-xs text-gray-400" },
  S = 3,
  Ss = {
    __name: "Vault",
    setup(H) {
      de({
        title: L.vault.title,
        description: L.vault.description,
        path: "/vault/",
        image: "https://ipogenie.ai/og-ipo.png",
      });
      const A = z(!1),
        u = z(0);
      let T = 0;
      const I = () => {
          u.value = (u.value + 1) % S;
        },
        P = () => {
          u.value = (u.value - 1 + S) % S;
        },
        M = (x) => {
          T = x.changedTouches[0].clientX;
        },
        j = (x) => {
          if (x.target.closest("a, button")) return;
          const e = x.changedTouches[0].clientX - T;
          Math.abs(e) > 50 && (e < 0 ? I() : P());
        },
        y = (x) => {
          x.key === "ArrowLeft" && P(), x.key === "ArrowRight" && I();
        },
        h = z(""),
        {
          isLoading: R,
          success: C,
          error: W,
          subscribeEmail: U,
          resetState: K,
        } = ne(),
        V = () => {
          K(), (h.value = ""), (A.value = !0);
        },
        E = () => {
          A.value = !1;
        },
        Q = () =>
          Y(null, null, function* () {
            if (!h.value) return;
            (yield U(h.value, { source: "vault_next_deal" })) &&
              ((h.value = ""),
              setTimeout(() => {
                E();
              }, 2e3));
          }),
        G = () => {
          var x;
          (x = document.querySelector("#case-study")) == null ||
            x.scrollIntoView({ behavior: "smooth" });
        },
        D = [
          {
            id: "redwood",
            initials: "RW",
            logo: "/redwood-logo-white.webp",
            name: "Redwood AI",
            ticker: "AIRX",
            category: "AI + LIFE SCIENCES",
            categoryColor: "green",
            score: 100,
            status: "filled",
            badges: ["Vault #1", "Complete"],
            description:
              "AI-powered drug discovery and life sciences innovation. IPO'd on CSE as AIRX, February 6, 2026.",
            target: "CSE",
            valuation: "-",
            raise: "-",
            min: "$500",
            allocation: 100,
          },
          {
            id: "vault2",
            initials: "02",
            logo: null,
            name: "Vault #2",
            category: "CLASSIFIED",
            categoryColor: "orange",
            score: null,
            status: "upcoming",
            badges: ["Vault #2", "In Progress"],
            description:
              "Company identified and locked in. Details will be revealed to waitlist members first.",
            target: "-",
            valuation: "-",
            raise: "-",
            min: "-",
            allocation: 0,
          },
          {
            id: "vault3",
            initials: "03",
            logo: null,
            name: "Vault #3",
            category: "CLASSIFIED",
            categoryColor: "blue",
            score: null,
            status: "upcoming",
            badges: ["Vault #3", "Coming Soon"],
            description:
              "Next vault in the pipeline. Join the waitlist to get notified.",
            target: "-",
            valuation: "-",
            raise: "-",
            min: "-",
            allocation: 0,
          },
        ],
        w = z(0),
        n = N(() => D[w.value]),
        _ = (x) => {
          w.value = x;
        },
        $ = N(() =>
          n.value.status === "filled"
            ? {
                bg: "bg-green-500/10",
                text: "text-green-300",
                border: "border-green-500/30",
              }
            : {
                bg: "bg-[#FF5B00]/10",
                text: "text-[#FF5B00]",
                border: "border-[#FF5B00]/30",
              }
        ),
        Z = N(() =>
          n.value.status === "filled"
            ? "from-green-500/10 via-emerald-500/5 to-transparent"
            : "from-[#FF5B00]/10 via-[#FF5B00]/5 to-transparent"
        ),
        X = [
          {
            title: "What is IPO Genie?",
            text: "IPO Genie is a platform that gives retail investors access to pre-IPO companies - the same opportunities that were previously only available to VCs and institutions. We use AI to score deals and provide transparent, research-backed investing. Learn more on our How It Works page.",
          },
          {
            title: "What was The Vault and why does it matter?",
            text: "The Vault was IPO Genie's public proof of concept. We identified Redwood AI Corp. before it IPO'd, published the prediction on this page before the listing date, and revealed everything when it listed on the CSE as AIRX on Feb 6, 2026. It matters because it proves the team can actually source and identify pre-IPO deals - something no other platform in this space has demonstrated publicly.",
          },
          {
            title: "What is Redwood AI Corp. (AIRX)?",
            text: "Redwood AI Corp. (formerly Marshall Technologies Corp.) is a company in the AI + Life Sciences sector that IPO'd on the Canadian Securities Exchange under the ticker AIRX on February 6, 2026. It was the first company identified by IPO Genie's AI-powered research model as part of the Vault #1 proof of concept.",
          },
          {
            title: "How do I know IPO Genie actually predicted the IPO?",
            text: "We published the vault page, the hints, and the guessing competition before the IPO date. The prediction was locked in publicly and verifiably - not claimed after the fact. This page and its publication history serve as the timestamped receipt that anyone can verify.",
          },
          {
            title: "How did IPO Genie find this deal?",
            text: "Our AI-powered scoring model analyzed publicly available data - regulatory filings, market signals, sector trends, and company fundamentals - to identify Redwood AI Corp. as a high-potential pre-IPO opportunity. No insider information or back-channel deals were used. You can read more about how our AI scoring model works on the AI-Powered page.",
          },
          {
            title: "Will there be another vault?",
            text: "Yes. Vault #2 is already in progress - the next company has been identified and locked in. Join the waitlist to get first access when it's revealed. Vault members get priority access to every future deal.",
          },
          {
            title: "Can I invest through IPO Genie now?",
            text: "The platform is in development. The Vault proved we can identify these opportunities before they go public. When the full platform launches, waitlist members get first access to real pre-IPO deals through the marketplace. You can explore the marketplace preview on the Marketplace page.",
          },
          {
            title:
              "What makes IPO Genie different from other crypto launchpads?",
            text: "Most launchpads focus on token launches. IPO Genie focuses on real pre-IPO companies going public on traditional stock exchanges. The Vault proved this with a real CSE listing. We also don't require staking or token purchases to participate - $IPO tokens unlock access to deals but are returned after each deal closes.",
          },
          {
            title: "How does this proof of concept benefit future investors?",
            text: "The Vault establishes trust through action, not promises. It demonstrates that the IPO Genie team has the research capabilities, AI infrastructure, and deal-sourcing network to identify pre-IPO opportunities before the public market. Every future vault and platform deal builds on this proven foundation.",
          },
        ];
      return (
        pe([
          xe(),
          me([
            { name: "Home", url: "/" },
            { name: "The Vault", url: "/vault/" },
          ]),
          fe(
            X.map((x) => ({ question: x.title, answer: x.text })),
            "/vault/"
          ),
          ue({
            url: "/vault/",
            headline: L.vault.title,
            summary: L.vault.description,
          }),
        ]),
        (x, e) => {
          const d = le("router-link"),
            g = ie("scroll-reveal");
          return (
            a(),
            o("main", he, [
              t("div", we, [
                t("div", ye, [
                  e[6] ||
                    (e[6] = c(
                      '<div class="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-[#FF5B00]/[0.08] rounded-full blur-[150px] pointer-events-none" data-v-19e2f867></div><div class="absolute bottom-[-20%] right-[10%] w-[500px] h-[500px] bg-[#FF5B00]/[0.05] rounded-full blur-[120px] pointer-events-none" data-v-19e2f867></div><div class="absolute top-[30%] left-[50%] -translate-x-1/2 w-[300px] h-[300px] bg-[#FF5B00]/[0.06] rounded-full blur-[100px] pointer-events-none" data-v-19e2f867></div><div class="vault-grid absolute inset-0 pointer-events-none" data-v-19e2f867></div><div class="absolute top-8 right-8 max-md:top-5 max-md:right-5 z-10 flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 max-md:px-3 max-md:py-1.5" data-v-19e2f867><svg class="w-4 h-4 text-green-400 max-md:w-3.5 max-md:h-3.5" fill="currentColor" viewBox="0 0 20 20" data-v-19e2f867><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-v-19e2f867></path></svg><span class="text-green-400 text-xs font-semibold max-md:text-[11px]" data-v-19e2f867>Verified</span></div>',
                      5
                    )),
                  t("div", ke, [
                    e[4] ||
                      (e[4] = c(
                        '<span class="inline-block text-[11px] font-bold text-[#FF5B00] uppercase tracking-[0.2em] bg-[#FF5B00]/10 border border-[#FF5B00]/20 px-5 py-2 rounded-full max-md:text-[10px]" data-v-19e2f867>Vault #1 - Complete</span><h1 class="text-[100px] md:text-[130px] font-extrabold leading-[0.95] tracking-[-4px] max-xl:text-[90px] max-lg:text-[70px] max-md:text-[56px] max-md:tracking-[-2px]" data-v-19e2f867><span class="vault-headline-gradient" data-v-19e2f867>We Called</span> <span class="text-[#FF5B00]" data-v-19e2f867>It.</span><span class="sr-only" data-v-19e2f867> - Verified Pre-IPO Prediction: Redwood AI Corp. (AIRX) Listed on CSE</span></h1><p class="text-white/50 text-lg max-w-[500px] leading-relaxed max-md:text-base max-md:max-w-[340px]" data-v-19e2f867> Redwood AI Corp. <span class="text-white/80 font-semibold" data-v-19e2f867>(AIRX)</span> IPO&#39;d on the CSE, February 6, 2026. </p>',
                        3
                      )),
                    t("div", Fe, [
                      i(F, {
                        text: "Buy now",
                        "bg-color": "#FF5B00",
                        "arrow-color": "#fff",
                        "bg-arrow": "#FF5B00",
                        onClick: () => {
                        window.location.href = "https://app.uniswap.org/swap?chain=mainnet&inputCurrency=NATIVE&outputCurrency=0xa6206ceB99A811246beBae71E1f8F49BaFAC7108";
                        }
                      })
                    ]),
                    e[5] ||
                      (e[5] = c(
                        '<div class="flex items-center gap-6 mt-4 max-md:gap-4 max-md:mt-2" data-v-19e2f867><div class="flex flex-col items-center" data-v-19e2f867><span class="text-white/30 text-[10px] uppercase tracking-widest font-semibold" data-v-19e2f867>Ticker</span><span class="text-white font-mono font-bold text-lg max-md:text-base" data-v-19e2f867>AIRX</span></div><div class="w-px h-8 bg-white/10" data-v-19e2f867></div><div class="flex flex-col items-center" data-v-19e2f867><span class="text-white/30 text-[10px] uppercase tracking-widest font-semibold" data-v-19e2f867>Exchange</span><span class="text-white font-mono font-bold text-lg max-md:text-base" data-v-19e2f867>CSE</span></div><div class="w-px h-8 bg-white/10" data-v-19e2f867></div><div class="flex flex-col items-center" data-v-19e2f867><span class="text-white/30 text-[10px] uppercase tracking-widest font-semibold" data-v-19e2f867>IPO Date</span><span class="text-white font-mono font-bold text-lg max-md:text-base" data-v-19e2f867>Feb 6 &#39;26</span></div></div>',
                        1
                      )),
                  ]),
                ]),
              ]),
              t("div", Be, [
                i(ve, {
                  items: [{ name: "Home", to: "/" }, { name: "The Vault" }],
                  variant: "light",
                }),
              ]),

              t("div", Ge, [
                v(
                  (a(),
                  o("div", De, [
                    ...(e[36] ||
                      (e[36] = [
                        t(
                          "h2",
                          { class: "title text-black" },
                          [
                            s(" What You'll Actually "),
                            t(
                              "span",
                              { class: "sectitle text-[#FF5B00]" },
                              "Use"
                            ),
                          ],
                          -1
                        ),
                        t(
                          "div",
                          { class: "description text-gray-600 max-w-[700px]" },
                          " The Vault proved we can find them. The platform is where you'll invest in them. ",
                          -1
                        ),
                      ])),
                  ])),
                  [[g]]
                ),
                v(
                  (a(),
                  o("div", $e, [
                    e[64] ||
                      (e[64] = t(
                        "div",
                        {
                          class:
                            "absolute -inset-[1px] bg-gradient-to-b from-white/30 via-white/5 to-transparent rounded-[33px] blur-[2px] opacity-30 pointer-events-none",
                        },
                        null,
                        -1
                      )),
                    t("div", Ne, [
                      e[61] ||
                        (e[61] = t(
                          "div",
                          {
                            class:
                              "absolute inset-0 bg-[url('/vault-texture.png')] bg-cover bg-center opacity-70 mix-blend-overlay pointer-events-none grayscale-[0.2] contrast-125",
                          },
                          null,
                          -1
                        )),
                      e[62] ||
                        (e[62] = t(
                          "div",
                          {
                            class:
                              "absolute inset-0 rounded-[32px] border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),inset_0_0_0_1px_rgba(255,255,255,0.05)] pointer-events-none z-20",
                          },
                          null,
                          -1
                        )),
                      t("div", He, [
                        t("div", Xe, [
                          t(
                            "img",
                            {
                              src: b(ce),
                              alt: "IPO Genie",
                              class: "h-8 w-auto object-contain",
                            },
                            null,
                            8,
                            Je
                          ),
                          e[37] ||
                            (e[37] = c(
                              '<div class="hidden md:flex bg-black/60 rounded-full p-1 border border-white/10 shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]" data-v-19e2f867><button class="px-6 py-1.5 rounded-full bg-gradient-to-b from-[#33333a] to-[#1a1a20] border-t border-white/20 border-b border-black/50 text-white text-[11px] font-bold shadow-[0_2px_4px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)] relative overflow-hidden group/btn tracking-wide uppercase" data-v-19e2f867><span class="relative z-10" data-v-19e2f867>Deals</span><div class="absolute inset-0 bg-white/5 opacity-0 group-hover/btn:opacity-100 transition-opacity" data-v-19e2f867></div></button><button class="px-6 py-1.5 rounded-full text-white/50 text-[11px] font-bold tracking-wide uppercase hover:text-white transition-colors" data-v-19e2f867>Portfolio</button><button class="px-6 py-1.5 rounded-full text-white/50 text-[11px] font-bold tracking-wide uppercase hover:text-white transition-colors" data-v-19e2f867>Analytics</button></div>',
                              1
                            )),
                        ]),
                        e[38] ||
                          (e[38] = c(
                            '<div class="flex items-center gap-6" data-v-19e2f867><div class="hidden sm:flex flex-col items-end" data-v-19e2f867><span class="text-[9px] text-[#00ff9d] font-bold uppercase tracking-widest mb-0.5 drop-shadow-[0_0_5px_rgba(0,255,157,0.3)]" data-v-19e2f867>Available Balance</span><span class="text-white font-mono font-bold text-sm tracking-wide text-shadow-sm" data-v-19e2f867>$58,420.00</span></div><div class="pl-6 border-l border-white/10 flex items-center gap-3" data-v-19e2f867><div class="w-10 h-10 rounded-full bg-gradient-to-b from-[#2a2a30] to-[#0a0a0f] border border-white/10 flex items-center justify-center relative shadow-[0_4px_10px_rgba(0,0,0,0.5)] group/avatar cursor-pointer" data-v-19e2f867><span class="text-xs font-bold text-white/90" data-v-19e2f867>JD</span><div class="absolute inset-0 rounded-full border border-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]" data-v-19e2f867></div><div class="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#00ff9d] border-2 border-[#121218] rounded-full shadow-[0_0_8px_#00ff9d]" data-v-19e2f867></div></div></div></div>',
                            1
                          )),
                      ]),
                      t("div", Ye, [
                        t("div", qe, [
                          (a(),
                          o(
                            k,
                            null,
                            B(D, (l, f) =>
                              t(
                                "button",
                                {
                                  key: "mobile-" + l.id,
                                  onClick: (J) => _(f),
                                  class: m([
                                    "flex items-center gap-2 px-3 py-2 rounded-full shrink-0 text-xs font-bold transition-all border",
                                    [
                                      w.value === f
                                        ? l.status === "filled"
                                          ? "bg-[#00ff9d]/10 border-[#00ff9d]/30 text-[#00ff9d]"
                                          : "bg-[#FF5B00]/10 border-[#FF5B00]/30 text-[#FF5B00]"
                                        : "bg-white/[0.03] border-white/10 text-white/50",
                                    ],
                                  ]),
                                },
                                [
                                  l.logo
                                    ? (a(),
                                      o(
                                        "img",
                                        {
                                          key: 0,
                                          src: l.logo,
                                          alt: l.name,
                                          class:
                                            "w-5 h-5 object-contain rounded",
                                        },
                                        null,
                                        8,
                                        Ke
                                      ))
                                    : (a(),
                                      o(
                                        "span",
                                        {
                                          key: 1,
                                          class: m([
                                            "w-5 h-5 rounded bg-white/10 flex items-center justify-center text-[9px] font-bold shrink-0",
                                            l.status === "filled"
                                              ? "text-[#00ff9d]"
                                              : "text-[#FF5B00]",
                                          ]),
                                        },
                                        p(l.initials),
                                        3
                                      )),
                                  t("span", null, p(l.name), 1),
                                ],
                                10,
                                Ue
                              )
                            ),
                            64
                          )),
                        ]),
                        t("div", Qe, [
                          e[43] ||
                            (e[43] = c(
                              '<div class="absolute inset-0 pointer-events-none shadow-[inset_-15px_0_30px_-15px_rgba(0,0,0,0.8)]" data-v-19e2f867></div><div class="relative z-10 flex items-center justify-between" data-v-19e2f867><h3 class="text-[10px] font-bold text-white/50 uppercase tracking-[0.25em]" data-v-19e2f867>Live Stream</h3><div class="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#00ff9d]/5 border border-[#00ff9d]/20 shadow-[0_0_10px_rgba(0,255,157,0.1)]" data-v-19e2f867><div class="w-1.5 h-1.5 rounded-full bg-[#00ff9d] animate-pulse shadow-[0_0_8px_#00ff9d]" data-v-19e2f867></div><span class="text-[9px] font-bold text-[#00ff9d] tracking-wider" data-v-19e2f867>DEMO</span></div></div>',
                              2
                            )),
                          t("div", Ze, [
                            (a(),
                            o(
                              k,
                              null,
                              B(
                                D,
                                (l, f) => (
                                  a(),
                                  o(
                                    k,
                                    { key: l.id },
                                    [
                                      l.status === "filled"
                                        ? (a(),
                                          o(
                                            "div",
                                            {
                                              key: 0,
                                              onClick: (J) => _(f),
                                              class: m([
                                                "p-3.5 rounded-xl cursor-pointer group/item transition-all dash-fade-in",
                                                [
                                                  w.value === f
                                                    ? "bg-[#00ff9d]/[0.08] border border-[#00ff9d]/25 shadow-[0_5px_20px_rgba(0,255,157,0.1)]"
                                                    : "bg-[#00ff9d]/[0.03] border border-[#00ff9d]/10 hover:bg-[#00ff9d]/[0.06]",
                                                  `dash-delay-${f + 1}`,
                                                ],
                                              ]),
                                            },
                                            [
                                              t("div", tt, [
                                                t("div", st, [
                                                  l.logo
                                                    ? (a(),
                                                      o(
                                                        "img",
                                                        {
                                                          key: 0,
                                                          src: l.logo,
                                                          alt: l.name,
                                                          class:
                                                            "w-6 h-6 object-contain",
                                                        },
                                                        null,
                                                        8,
                                                        at
                                                      ))
                                                    : (a(),
                                                      o(
                                                        "span",
                                                        ot,
                                                        p(l.initials),
                                                        1
                                                      )),
                                                ]),
                                                t("div", lt, [
                                                  t("div", it, p(l.name), 1),
                                                  t(
                                                    "div",
                                                    rt,
                                                    p(l.ticker || l.initials) +
                                                      " · Complete",
                                                    1
                                                  ),
                                                ]),
                                                e[39] ||
                                                  (e[39] = t(
                                                    "div",
                                                    {
                                                      class:
                                                        "flex flex-col items-end",
                                                    },
                                                    [
                                                      t(
                                                        "svg",
                                                        {
                                                          class:
                                                            "w-3.5 h-3.5 text-[#00ff9d]",
                                                          fill: "currentColor",
                                                          viewBox: "0 0 20 20",
                                                        },
                                                        [
                                                          t("path", {
                                                            "fill-rule":
                                                              "evenodd",
                                                            d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                                            "clip-rule":
                                                              "evenodd",
                                                          }),
                                                        ]
                                                      ),
                                                    ],
                                                    -1
                                                  )),
                                              ]),
                                            ],
                                            10,
                                            et
                                          ))
                                        : (a(),
                                          o(
                                            "div",
                                            {
                                              key: 1,
                                              onClick: (J) => _(f),
                                              class: m([
                                                "p-3.5 rounded-xl transition-all cursor-pointer group/item dash-fade-in",
                                                [
                                                  w.value === f
                                                    ? "bg-[#FF5B00]/[0.05] border border-[#FF5B00]/20 shadow-[0_5px_15px_rgba(255,91,0,0.08)]"
                                                    : "bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04]",
                                                  `dash-delay-${f + 1}`,
                                                ],
                                              ]),
                                            },
                                            [
                                              t("div", nt, [
                                                t("div", pt, [
                                                  t(
                                                    "span",
                                                    xt,
                                                    p(l.initials),
                                                    1
                                                  ),
                                                ]),
                                                t("div", mt, [
                                                  t(
                                                    "div",
                                                    {
                                                      class: m([
                                                        "text-sm font-bold leading-none mb-1.5 tracking-tight",
                                                        w.value === f
                                                          ? "text-white/90"
                                                          : "text-white/50",
                                                      ]),
                                                    },
                                                    p(l.name),
                                                    3
                                                  ),
                                                  e[40] ||
                                                    (e[40] = t(
                                                      "div",
                                                      {
                                                        class:
                                                          "vault-shimmer h-[10px] w-[80px] rounded-sm",
                                                      },
                                                      null,
                                                      -1
                                                    )),
                                                ]),
                                                e[41] ||
                                                  (e[41] = t(
                                                    "div",
                                                    {
                                                      class:
                                                        "flex flex-col items-end",
                                                    },
                                                    [
                                                      t("span", {
                                                        class:
                                                          "w-2 h-2 rounded-full bg-[#FF5B00] animate-pulse",
                                                      }),
                                                    ],
                                                    -1
                                                  )),
                                              ]),
                                              e[42] ||
                                                (e[42] = t(
                                                  "div",
                                                  {
                                                    class:
                                                      "vault-shimmer h-[6px] w-full rounded-full",
                                                  },
                                                  null,
                                                  -1
                                                )),
                                            ],
                                            10,
                                            dt
                                          )),
                                    ],
                                    64
                                  )
                                )
                              ),
                              64
                            )),
                          ]),
                        ]),
                        t("div", ft, [
                          e[55] ||
                            (e[55] = t(
                              "div",
                              {
                                class:
                                  "absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.05] pointer-events-none mix-blend-plus-lighter",
                              },
                              null,
                              -1
                            )),
                          t(
                            "div",
                            {
                              class: m([
                                "absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br blur-[100px] pointer-events-none transition-all duration-700",
                                Z.value,
                              ]),
                            },
                            null,
                            2
                          ),
                          i(
                            te,
                            { name: "deal-content", mode: "out-in" },
                            {
                              default: r(() => [
                                (a(),
                                o(
                                  "div",
                                  { key: w.value, class: "relative z-10" },
                                  [
                                    t("div", ut, [
                                      t("div", null, [
                                        t("div", ct, [
                                          (a(!0),
                                          o(
                                            k,
                                            null,
                                            B(
                                              n.value.badges,
                                              (l) => (
                                                a(),
                                                o(
                                                  "span",
                                                  {
                                                    key: l,
                                                    class: m([
                                                      "px-2.5 py-1 rounded-sm text-[9px] font-bold uppercase tracking-widest",
                                                      [
                                                        $.value.bg,
                                                        $.value.text,
                                                        $.value.border,
                                                        "border",
                                                      ],
                                                    ]),
                                                  },
                                                  p(l),
                                                  3
                                                )
                                              )
                                            ),
                                            128
                                          )),
                                        ]),
                                        t("h2", vt, p(n.value.name), 1),
                                        n.value.status !== "upcoming"
                                          ? (a(),
                                            o(
                                              "p",
                                              bt,
                                              p(n.value.description),
                                              1
                                            ))
                                          : (a(),
                                            o("div", gt, [
                                              ...(e[44] ||
                                                (e[44] = [
                                                  t(
                                                    "div",
                                                    {
                                                      class:
                                                        "vault-shimmer h-[12px] w-full rounded-md",
                                                    },
                                                    null,
                                                    -1
                                                  ),
                                                  t(
                                                    "div",
                                                    {
                                                      class:
                                                        "vault-shimmer h-[12px] w-[85%] rounded-md",
                                                    },
                                                    null,
                                                    -1
                                                  ),
                                                  t(
                                                    "div",
                                                    {
                                                      class:
                                                        "vault-shimmer h-[12px] w-[60%] rounded-md",
                                                    },
                                                    null,
                                                    -1
                                                  ),
                                                ])),
                                            ])),
                                      ]),
                                      i(
                                        d,
                                        {
                                          to: "/ai-powered/",
                                          class:
                                            "relative group/score shrink-0",
                                          title: "How our AI scoring works",
                                        },
                                        {
                                          default: r(() => [
                                            t(
                                              "div",
                                              {
                                                class: m([
                                                  "absolute inset-0 blur-[50px] rounded-full opacity-40 group-hover/score:opacity-60 transition-opacity",
                                                  n.value.score === 100
                                                    ? "bg-[#00ff9d]/20"
                                                    : "bg-[#FF5B00]/20",
                                                ]),
                                              },
                                              null,
                                              2
                                            ),
                                            t("div", ht, [
                                              (a(),
                                              o(
                                                "svg",
                                                {
                                                  class: m([
                                                    "absolute inset-0 w-full h-full -rotate-90",
                                                    n.value.score === 100
                                                      ? "text-[#00ff9d]"
                                                      : "text-[#FF5B00]",
                                                  ]),
                                                  viewBox: "0 0 36 36",
                                                },
                                                [
                                                  e[45] ||
                                                    (e[45] = t(
                                                      "path",
                                                      {
                                                        d: "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831",
                                                        fill: "none",
                                                        class: "text-white/5",
                                                        stroke: "currentColor",
                                                        "stroke-width": "1.5",
                                                      },
                                                      null,
                                                      -1
                                                    )),
                                                  n.value.score
                                                    ? (a(),
                                                      o(
                                                        "path",
                                                        {
                                                          key: 0,
                                                          d: "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831",
                                                          fill: "none",
                                                          stroke:
                                                            "currentColor",
                                                          "stroke-width": "2",
                                                          style: q({
                                                            "--ring-score":
                                                              n.value.score,
                                                          }),
                                                          class: m([
                                                            n.value.score ===
                                                            100
                                                              ? "drop-shadow-[0_0_10px_rgba(0,255,157,0.5)]"
                                                              : "drop-shadow-[0_0_10px_rgba(255,91,0,0.5)]",
                                                            "dash-ring-fill",
                                                          ]),
                                                        },
                                                        null,
                                                        6
                                                      ))
                                                    : O("", !0),
                                                ],
                                                2
                                              )),
                                              t("div", wt, [
                                                n.value.score
                                                  ? (a(),
                                                    o(
                                                      "span",
                                                      {
                                                        key: 0,
                                                        class: m([
                                                          "text-2xl md:text-4xl font-bold tracking-tighter drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]",
                                                          n.value.score === 100
                                                            ? "text-[#00ff9d]"
                                                            : "text-white",
                                                        ]),
                                                      },
                                                      p(n.value.score),
                                                      3
                                                    ))
                                                  : (a(), o("span", yt, "?")),
                                                e[46] ||
                                                  (e[46] = t(
                                                    "span",
                                                    {
                                                      class:
                                                        "text-[9px] text-white/30 uppercase tracking-[0.2em] font-bold mt-1",
                                                    },
                                                    "Score",
                                                    -1
                                                  )),
                                              ]),
                                            ]),
                                          ]),
                                          _: 1,
                                        }
                                      ),
                                    ]),
                                    t("div", kt, [
                                      t("div", Ft, [
                                        e[47] ||
                                          (e[47] = t(
                                            "div",
                                            {
                                              class:
                                                "text-[9px] text-white/30 uppercase tracking-[0.2em] mb-2 flex items-center gap-1.5 font-bold",
                                            },
                                            [
                                              s("Target "),
                                              t("div", {
                                                class:
                                                  "w-1 h-1 rounded-full bg-white/30",
                                              }),
                                            ],
                                            -1
                                          )),
                                        n.value.status !== "upcoming"
                                          ? (a(),
                                            o("div", Bt, p(n.value.target), 1))
                                          : (a(), o("div", It)),
                                      ]),
                                      t("div", Ct, [
                                        e[48] ||
                                          (e[48] = t(
                                            "div",
                                            {
                                              class:
                                                "text-[9px] text-white/30 uppercase tracking-[0.2em] mb-2 flex items-center gap-1.5 font-bold",
                                            },
                                            [
                                              s("Ticker "),
                                              t("div", {
                                                class:
                                                  "w-1 h-1 rounded-full bg-white/30",
                                              }),
                                            ],
                                            -1
                                          )),
                                        n.value.status !== "upcoming"
                                          ? (a(),
                                            o(
                                              "div",
                                              _t,
                                              p(n.value.ticker || "-"),
                                              1
                                            ))
                                          : (a(), o("div", At)),
                                      ]),
                                      t("div", Pt, [
                                        e[49] ||
                                          (e[49] = t(
                                            "div",
                                            {
                                              class:
                                                "text-[9px] text-white/30 uppercase tracking-[0.2em] mb-2 flex items-center gap-1.5 font-bold",
                                            },
                                            [
                                              s("Raise "),
                                              t("div", {
                                                class:
                                                  "w-1 h-1 rounded-full bg-white/30",
                                              }),
                                            ],
                                            -1
                                          )),
                                        n.value.status !== "upcoming"
                                          ? (a(),
                                            o("div", jt, p(n.value.raise), 1))
                                          : (a(), o("div", Ot)),
                                      ]),
                                      t("div", St, [
                                        e[50] ||
                                          (e[50] = t(
                                            "div",
                                            {
                                              class:
                                                "text-[9px] text-white/30 uppercase tracking-[0.2em] mb-2 flex items-center gap-1.5 font-bold",
                                            },
                                            [
                                              s("Min "),
                                              t("div", {
                                                class:
                                                  "w-1 h-1 rounded-full bg-white/30",
                                              }),
                                            ],
                                            -1
                                          )),
                                        n.value.status !== "upcoming"
                                          ? (a(),
                                            o("div", Tt, p(n.value.min), 1))
                                          : (a(), o("div", Vt)),
                                      ]),
                                    ]),
                                    n.value.status === "filled"
                                      ? (a(),
                                        o("div", zt, [
                                          e[52] ||
                                            (e[52] = t(
                                              "div",
                                              { class: "flex-1 px-5" },
                                              [
                                                t(
                                                  "div",
                                                  {
                                                    class:
                                                      "flex justify-between items-end mb-2.5",
                                                  },
                                                  [
                                                    t(
                                                      "span",
                                                      {
                                                        class:
                                                          "text-white/50 text-[10px] font-bold uppercase tracking-[0.15em]",
                                                      },
                                                      "Allocation Complete"
                                                    ),
                                                    t(
                                                      "span",
                                                      {
                                                        class:
                                                          "text-[#00ff9d] font-mono font-bold text-lg leading-none drop-shadow-[0_0_8px_rgba(0,255,157,0.4)]",
                                                      },
                                                      "100%"
                                                    ),
                                                  ]
                                                ),
                                                t(
                                                  "div",
                                                  {
                                                    class:
                                                      "h-2.5 w-full bg-black/60 rounded-sm overflow-hidden shadow-[inset_0_1px_3px_rgba(0,0,0,1)] border border-white/5",
                                                  },
                                                  [
                                                    t(
                                                      "div",
                                                      {
                                                        class:
                                                          "h-full w-full bg-gradient-to-r from-[#00ff9d] to-[#00cc7d] rounded-sm relative",
                                                      },
                                                      [
                                                        t("div", {
                                                          class:
                                                            "absolute inset-0 bg-gradient-to-b from-white/20 to-transparent mix-blend-overlay",
                                                        }),
                                                      ]
                                                    ),
                                                  ]
                                                ),
                                              ],
                                              -1
                                            )),
                                          t(
                                            "button",
                                            {
                                              onClick: G,
                                              class:
                                                "px-6 py-3 md:px-10 md:py-4 bg-gradient-to-b from-[#00ff9d] to-[#00cc7d] hover:from-[#33ffb3] hover:to-[#00e68a] text-black text-xs md:text-sm font-bold uppercase tracking-[0.1em] rounded-xl shadow-[0_5px_0_#009960,0_15px_20px_rgba(0,255,157,0.15)] hover:translate-y-[2px] hover:shadow-[0_3px_0_#009960,0_8px_15px_rgba(0,255,157,0.15)] active:translate-y-[5px] active:shadow-none transition-all border-t border-white/20 flex items-center gap-3 relative overflow-hidden group/btn whitespace-nowrap",
                                            },
                                            [
                                              ...(e[51] ||
                                                (e[51] = [
                                                  t(
                                                    "span",
                                                    null,
                                                    "Case Study",
                                                    -1
                                                  ),
                                                  t(
                                                    "svg",
                                                    {
                                                      class: "w-4 h-4",
                                                      fill: "none",
                                                      stroke: "currentColor",
                                                      viewBox: "0 0 24 24",
                                                    },
                                                    [
                                                      t("path", {
                                                        "stroke-linecap":
                                                          "round",
                                                        "stroke-linejoin":
                                                          "round",
                                                        "stroke-width": "2.5",
                                                        d: "M19 14l-7 7m0 0l-7-7m7 7V3",
                                                      }),
                                                    ],
                                                    -1
                                                  ),
                                                ])),
                                            ]
                                          ),
                                        ]))
                                      : (a(),
                                        o("div", Lt, [
                                          e[54] ||
                                            (e[54] = t(
                                              "div",
                                              { class: "flex-1 px-5" },
                                              [
                                                t(
                                                  "div",
                                                  {
                                                    class:
                                                      "flex items-center gap-2 mb-2",
                                                  },
                                                  [
                                                    t("span", {
                                                      class:
                                                        "w-1.5 h-1.5 rounded-full bg-[#FF5B00] animate-pulse",
                                                    }),
                                                    t(
                                                      "span",
                                                      {
                                                        class:
                                                          "text-[#FF5B00] text-[10px] font-bold uppercase tracking-[0.15em]",
                                                      },
                                                      "Company identified & locked in"
                                                    ),
                                                  ]
                                                ),
                                                t("div", {
                                                  class:
                                                    "vault-shimmer h-[8px] w-full rounded-full",
                                                }),
                                              ],
                                              -1
                                            )),
                                          t(
                                            "button",
                                            {
                                              onClick: V,
                                              class:
                                                "px-6 py-3 md:px-10 md:py-4 bg-gradient-to-b from-[#FF5B00] to-[#cc4900] hover:from-[#ff7a33] hover:to-[#e65200] text-white text-xs md:text-sm font-bold uppercase tracking-[0.1em] rounded-xl shadow-[0_5px_0_#993600,0_15px_20px_rgba(255,91,0,0.2)] hover:translate-y-[2px] hover:shadow-[0_3px_0_#993600,0_8px_15px_rgba(255,91,0,0.2)] active:translate-y-[5px] active:shadow-none transition-all border-t border-white/20 flex items-center gap-3 relative overflow-hidden group/btn whitespace-nowrap",
                                            },
                                            [
                                              ...(e[53] ||
                                                (e[53] = [
                                                  t(
                                                    "div",
                                                    {
                                                      class:
                                                        "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_0.5s_linear_once]",
                                                    },
                                                    null,
                                                    -1
                                                  ),
                                                  t(
                                                    "span",
                                                    null,
                                                    "Get Notified",
                                                    -1
                                                  ),
                                                  t(
                                                    "svg",
                                                    {
                                                      class: "w-4 h-4",
                                                      fill: "none",
                                                      stroke: "currentColor",
                                                      viewBox: "0 0 24 24",
                                                    },
                                                    [
                                                      t("path", {
                                                        "stroke-linecap":
                                                          "round",
                                                        "stroke-linejoin":
                                                          "round",
                                                        "stroke-width": "2.5",
                                                        d: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
                                                      }),
                                                    ],
                                                    -1
                                                  ),
                                                ])),
                                            ]
                                          ),
                                        ])),
                                  ]
                                )),
                              ]),
                              _: 1,
                            }
                          ),
                        ]),
                        t("div", Mt, [
                          e[60] ||
                            (e[60] = c(
                              '<div class="absolute inset-0 pointer-events-none shadow-[inset_15px_0_30px_-15px_rgba(0,0,0,0.8)]" data-v-19e2f867></div><div class="relative z-10" data-v-19e2f867><h3 class="text-[10px] font-bold text-white/40 uppercase tracking-[0.25em] mb-4" data-v-19e2f867>Performance</h3><div class="bg-black/60 border border-white/10 rounded-xl p-5 shadow-[inset_0_2px_10px_rgba(0,0,0,0.8)] relative overflow-hidden group/perf" data-v-19e2f867><div class="absolute inset-0 bg-[#00ff9d]/5 group-hover/perf:bg-[#00ff9d]/10 transition-colors" data-v-19e2f867></div><div class="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.2)_50%)] bg-[length:100%_3px] pointer-events-none opacity-40" data-v-19e2f867></div><div class="flex items-baseline justify-between mb-3 relative z-10" data-v-19e2f867><span class="text-[9px] text-white/50 uppercase tracking-wider font-bold" data-v-19e2f867>30 Day</span><span class="text-sm font-mono font-bold text-[#00ff9d] drop-shadow-[0_0_5px_rgba(0,255,157,0.5)]" data-v-19e2f867>+12.4%</span></div><svg class="w-full h-12 overflow-visible" viewBox="0 0 100 40" preserveAspectRatio="none" data-v-19e2f867><path d="M0,35 L10,32 L20,36 L30,25 L40,30 L50,15 L60,20 L70,10 L80,12 L90,5 L100,2" fill="none" stroke="#00ff9d" stroke-width="2" vector-effect="non-scaling-stroke" class="drop-shadow-[0_0_8px_#00ff9d] dash-sparkline" data-v-19e2f867></path><path d="M0,35 L10,32 L20,36 L30,25 L40,30 L50,15 L60,20 L70,10 L80,12 L90,5 L100,2 V40 H0 Z" fill="url(#grad1)" opacity="0.3" data-v-19e2f867></path><defs data-v-19e2f867><linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%" data-v-19e2f867><stop offset="0%" style="stop-color:#00ff9d;stop-opacity:1;" data-v-19e2f867></stop><stop offset="100%" style="stop-color:#00ff9d;stop-opacity:0;" data-v-19e2f867></stop></linearGradient></defs></svg></div></div>',
                              2
                            )),
                          t("div", Rt, [
                            e[59] ||
                              (e[59] = t(
                                "h3",
                                {
                                  class:
                                    "text-[10px] font-bold text-white/40 uppercase tracking-[0.25em] mb-4",
                                },
                                "Holdings",
                                -1
                              )),
                            t("div", Wt, [
                              t(
                                "div",
                                {
                                  onClick: e[0] || (e[0] = (l) => _(0)),
                                  class: m([
                                    "flex items-center justify-between text-xs py-2.5 border-b border-white/5 cursor-pointer hover:bg-white/[0.03] rounded-lg px-2 -mx-2 transition-colors",
                                    { "bg-white/[0.05]": w.value === 0 },
                                  ]),
                                },
                                [
                                  ...(e[56] ||
                                    (e[56] = [
                                      t(
                                        "span",
                                        {
                                          class:
                                            "text-white/80 font-bold tracking-wide",
                                        },
                                        "AIRX",
                                        -1
                                      ),
                                      t(
                                        "span",
                                        {
                                          class:
                                            "text-[#00ff9d] font-mono bg-[#00ff9d]/10 border border-[#00ff9d]/20 px-2 py-0.5 rounded text-[10px] font-bold",
                                        },
                                        "+87.0%",
                                        -1
                                      ),
                                    ])),
                                ],
                                2
                              ),
                              t(
                                "div",
                                {
                                  onClick: e[1] || (e[1] = (l) => _(1)),
                                  class: m([
                                    "flex items-center justify-between text-xs py-2.5 border-b border-white/5 cursor-pointer hover:bg-white/[0.03] rounded-lg px-2 -mx-2 transition-colors",
                                    { "bg-white/[0.05]": w.value === 1 },
                                  ]),
                                },
                                [
                                  ...(e[57] ||
                                    (e[57] = [
                                      t(
                                        "span",
                                        {
                                          class:
                                            "text-white/40 font-bold tracking-wide",
                                        },
                                        "Vault #2",
                                        -1
                                      ),
                                      t(
                                        "span",
                                        {
                                          class:
                                            "text-white/20 font-mono text-[9px] uppercase tracking-widest font-bold",
                                        },
                                        "Locked",
                                        -1
                                      ),
                                    ])),
                                ],
                                2
                              ),
                              t(
                                "div",
                                {
                                  onClick: e[2] || (e[2] = (l) => _(2)),
                                  class: m([
                                    "flex items-center justify-between text-xs py-2.5 cursor-pointer hover:bg-white/[0.03] rounded-lg px-2 -mx-2 transition-colors",
                                    { "bg-white/[0.05]": w.value === 2 },
                                  ]),
                                },
                                [
                                  ...(e[58] ||
                                    (e[58] = [
                                      t(
                                        "span",
                                        {
                                          class:
                                            "text-white/40 font-bold tracking-wide",
                                        },
                                        "Vault #3",
                                        -1
                                      ),
                                      t(
                                        "span",
                                        {
                                          class:
                                            "text-white/20 font-mono text-[9px] uppercase tracking-widest font-bold",
                                        },
                                        "Locked",
                                        -1
                                      ),
                                    ])),
                                ],
                                2
                              ),
                            ]),
                          ]),
                        ]),
                      ]),
                      e[63] ||
                        (e[63] = c(
                          '<div class="border-t border-white/[0.08] bg-[#050508] px-4 py-2 md:px-6 md:py-3 flex items-center justify-between text-[10px] font-mono relative z-10 shadow-[0_-5px_20px_rgba(0,0,0,0.5)]" data-v-19e2f867><div class="flex items-center gap-5" data-v-19e2f867><div class="flex items-center gap-2" data-v-19e2f867><div class="w-1.5 h-1.5 rounded-full bg-[#00ff9d] animate-pulse shadow-[0_0_5px_#00ff9d]" data-v-19e2f867></div><span class="text-white/50 uppercase tracking-widest font-bold" data-v-19e2f867>System Demo</span></div><span class="text-white/10" data-v-19e2f867>|</span><span class="text-white/30" data-v-19e2f867>Latency: <span class="text-[#00ff9d]" data-v-19e2f867>12ms</span></span></div><div class="text-white/20" data-v-19e2f867>V 2.5.0 build-892</div></div>',
                          1
                        )),
                    ]),
                  ])),
                  [[g, { delay: 100 }]]
                ),
                e[67] ||
                  (e[67] = t(
                    "p",
                    {
                      class:
                        "text-gray-400 text-xs text-center mt-4 font-mono tracking-wide",
                    },
                    "Interactive demo — not a live trading interface. Final platform may differ.",
                    -1
                  )),
                v(
                  (a(),
                  o("div", Et, [
                    ...(e[65] ||
                      (e[65] = [
                        c(
                          '<div class="text-center p-5" data-v-19e2f867><div class="w-12 h-12 bg-[#FF5B00]/10 rounded-xl flex items-center justify-center mx-auto mb-3" data-v-19e2f867><svg class="w-6 h-6 text-[#FF5B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-19e2f867><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-v-19e2f867></path></svg></div><h4 class="font-bold text-black text-sm mb-1" data-v-19e2f867>Browse</h4><p class="text-gray-500 text-xs" data-v-19e2f867>Explore AI-scored deals</p></div><div class="text-center p-5" data-v-19e2f867><div class="w-12 h-12 bg-[#FF5B00]/10 rounded-xl flex items-center justify-center mx-auto mb-3" data-v-19e2f867><svg class="w-6 h-6 text-[#FF5B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-19e2f867><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-v-19e2f867></path></svg></div><h4 class="font-bold text-black text-sm mb-1" data-v-19e2f867>Allocate</h4><p class="text-gray-500 text-xs" data-v-19e2f867>Stake $IPO tokens</p></div><div class="text-center p-5" data-v-19e2f867><div class="w-12 h-12 bg-[#FF5B00]/10 rounded-xl flex items-center justify-center mx-auto mb-3" data-v-19e2f867><svg class="w-6 h-6 text-[#FF5B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-19e2f867><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" data-v-19e2f867></path></svg></div><h4 class="font-bold text-black text-sm mb-1" data-v-19e2f867>Invest</h4><p class="text-gray-500 text-xs" data-v-19e2f867>Get pre-IPO access</p></div><div class="text-center p-5" data-v-19e2f867><div class="w-12 h-12 bg-[#FF5B00]/10 rounded-xl flex items-center justify-center mx-auto mb-3" data-v-19e2f867><svg class="w-6 h-6 text-[#FF5B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-19e2f867><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" data-v-19e2f867></path></svg></div><h4 class="font-bold text-black text-sm mb-1" data-v-19e2f867>Track</h4><p class="text-gray-500 text-xs" data-v-19e2f867>Monitor performance</p></div>',
                          4
                        ),
                      ])),
                  ])),
                  [[g, { delay: 200 }]]
                ),
                v(
                  (a(),
                  o("div", Gt, [
                    e[66] ||
                      (e[66] = t(
                        "p",
                        { class: "text-gray-600 mb-6" },
                        [
                          t(
                            "strong",
                            { class: "text-black" },
                            "$IPO tokens unlock access to deals"
                          ),
                          s(
                            " - they aren't spent. Tokens are returned after a deal closes, so you can reinvest in the next opportunity. "
                          ),
                        ],
                        -1
                      )),
                    t("div", Dt, [
                      i(F, {
                        text: "Buy Now",
                        link: "https://app.uniswap.org/swap?chain=mainnet&inputCurrency=NATIVE&outputCurrency=0xa6206ceB99A811246beBae71E1f8F49BaFAC7108",
                        "bg-color": "#FF5B00",
                      }),
                    ]),
                  ])),
                  [[g, { delay: 300 }]]
                ),
              ]),
              t("div", $t, [
                v(
                  (a(),
                  o("div", Nt, [
                    ...(e[68] ||
                      (e[68] = [
                        t(
                          "h2",
                          { class: "title text-black" },
                          [
                            s(" What Comes "),
                            t(
                              "span",
                              { class: "sectitle text-[#FF5B00]" },
                              "Next"
                            ),
                          ],
                          -1
                        ),
                        t(
                          "div",
                          { class: "description text-gray-600 max-w-[700px]" },
                          " The proof is in. Now we're building the real thing. ",
                          -1
                        ),
                      ])),
                  ])),
                  [[g]]
                ),
                v(
                  (a(),
                  o("div", Ht, [
                    t("div", Xt, [
                      e[78] ||
                        (e[78] = t(
                          "p",
                          null,
                          " Vault #1 proved the model. We identified Redwood AI Corp. before it IPO'd on the CSE - and we did it publicly, with receipts. This is the first time a platform in this space has delivered a verifiable, public proof of concept. ",
                          -1
                        )),
                      t("p", null, [
                        e[71] ||
                          (e[71] = t(
                            "strong",
                            { class: "text-black" },
                            "Vault #2 is already in progress.",
                            -1
                          )),
                        e[72] ||
                          (e[72] = s(
                            " The next company has been identified, locked in, and will be revealed when the time is right. Beyond vaults, we're building a ",
                            -1
                          )),
                        i(
                          d,
                          {
                            to: "/marketplace/",
                            class: "text-[#FF5B00] hover:underline",
                          },
                          {
                            default: r(() => [
                              ...(e[69] ||
                                (e[69] = [s("full marketplace", -1)])),
                            ]),
                            _: 1,
                          }
                        ),
                        e[73] ||
                          (e[73] = s(
                            " where you can browse, score, and invest in pre-IPO deals powered by our ",
                            -1
                          )),
                        i(
                          d,
                          {
                            to: "/ai-powered/",
                            class: "text-[#FF5B00] hover:underline",
                          },
                          {
                            default: r(() => [
                              ...(e[70] ||
                                (e[70] = [s("AI scoring engine", -1)])),
                            ]),
                            _: 1,
                          }
                        ),
                        e[74] || (e[74] = s(". ", -1)),
                      ]),
                      t("p", null, [
                        e[76] || (e[76] = s(" Check our ", -1)),
                        i(
                          d,
                          {
                            to: "/about/roadmap/",
                            class: "text-[#FF5B00] hover:underline",
                          },
                          {
                            default: r(() => [
                              ...(e[75] || (e[75] = [s("roadmap", -1)])),
                            ]),
                            _: 1,
                          }
                        ),
                        e[77] ||
                          (e[77] = s(
                            " to see what's coming next - including the platform beta, additional vaults, and the full deal marketplace. ",
                            -1
                          )),
                      ]),
                    ]),
                    t("div", Jt, [
                      e[91] ||
                        (e[91] = c(
                          '<div class="flex items-start gap-4" data-v-19e2f867><div class="w-10 h-10 bg-[#FF5B00]/10 rounded-xl flex items-center justify-center shrink-0" data-v-19e2f867><svg class="w-5 h-5 text-[#FF5B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-19e2f867><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" data-v-19e2f867></path></svg></div><div data-v-19e2f867><p class="font-bold text-black text-sm" data-v-19e2f867>Vault #2 Notification</p><p class="text-gray-500 text-sm" data-v-19e2f867>First to know when the next company is revealed.</p></div></div>',
                          1
                        )),
                      t("div", Yt, [
                        e[83] ||
                          (e[83] = t(
                            "div",
                            {
                              class:
                                "w-10 h-10 bg-[#FF5B00]/10 rounded-xl flex items-center justify-center shrink-0",
                            },
                            [
                              t(
                                "svg",
                                {
                                  class: "w-5 h-5 text-[#FF5B00]",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                },
                                [
                                  t("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M13 10V3L4 14h7v7l9-11h-7z",
                                  }),
                                ]
                              ),
                            ],
                            -1
                          )),
                        t("div", null, [
                          e[82] ||
                            (e[82] = t(
                              "p",
                              { class: "font-bold text-black text-sm" },
                              "Platform Beta Access",
                              -1
                            )),
                          t("p", qt, [
                            e[80] || (e[80] = s("Early access to the ", -1)),
                            i(
                              d,
                              {
                                to: "/marketplace/",
                                class: "text-[#FF5B00] hover:underline",
                              },
                              {
                                default: r(() => [
                                  ...(e[79] ||
                                    (e[79] = [s("marketplace", -1)])),
                                ]),
                                _: 1,
                              }
                            ),
                            e[81] ||
                              (e[81] = s(
                                " - browse, allocate, and invest in real deals.",
                                -1
                              )),
                          ]),
                        ]),
                      ]),
                      t("div", Ut, [
                        e[90] ||
                          (e[90] = t(
                            "div",
                            {
                              class:
                                "w-10 h-10 bg-[#FF5B00]/10 rounded-xl flex items-center justify-center shrink-0",
                            },
                            [
                              t(
                                "svg",
                                {
                                  class: "w-5 h-5 text-[#FF5B00]",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                },
                                [
                                  t("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
                                  }),
                                ]
                              ),
                            ],
                            -1
                          )),
                        t("div", null, [
                          e[89] ||
                            (e[89] = t(
                              "p",
                              { class: "font-bold text-black text-sm" },
                              "Learn Pre-IPO Investing",
                              -1
                            )),
                          t("p", Kt, [
                            e[86] || (e[86] = s("Explore our ", -1)),
                            i(
                              d,
                              {
                                to: "/blog/pre-ipo-investing-beginners-guide/",
                                class: "text-[#FF5B00] hover:underline",
                              },
                              {
                                default: r(() => [
                                  ...(e[84] ||
                                    (e[84] = [s("beginner's guide", -1)])),
                                ]),
                                _: 1,
                              }
                            ),
                            e[87] || (e[87] = s(" and ", -1)),
                            i(
                              d,
                              {
                                to: "/learn/",
                                class: "text-[#FF5B00] hover:underline",
                              },
                              {
                                default: r(() => [
                                  ...(e[85] || (e[85] = [s("glossary", -1)])),
                                ]),
                                _: 1,
                              }
                            ),
                            e[88] ||
                              (e[88] = s(" to understand the space.", -1)),
                          ]),
                        ]),
                      ]),
                    ]),
                  ])),
                  [[g, { delay: 100 }]]
                ),
                v(
                  (a(),
                  o("div", Qt, [
                    i(F, {
                      text: "Buy Now",
                      link: "https://app.uniswap.org/swap?chain=mainnet&inputCurrency=NATIVE&outputCurrency=0xa6206ceB99A811246beBae71E1f8F49BaFAC7108",
                      "bg-color": "#FF5B00",
                    }),
                  ])),
                  [[g, { delay: 200 }]]
                ),
              ]),
              t("div", Zt, [
                v(
                  (a(),
                  o("div", es, [
                    e[141] ||
                      (e[141] = c(
                        '<div class="flex gap-[14px] z-10 flex-col items-center justify-center text-white text-center" data-v-19e2f867><p class="text-[#FF5B00] font-bold uppercase tracking-widest text-sm" data-v-19e2f867>Case Study - Vault #1</p><h2 class="title !text-white max-md:!text-[30px]" data-v-19e2f867> Redwood AI <span class="sectitle text-[#FF5B00]" data-v-19e2f867>Corp.</span></h2><p class="text-gray-400 text-lg max-md:text-base" data-v-19e2f867> CSE: AIRX · AI + Life Sciences · IPO&#39;d February 6, 2026 </p></div>',
                        1
                      )),
                    t("div", ts, [
                      e[100] ||
                        (e[100] = t(
                          "h3",
                          {
                            class:
                              "text-white text-2xl font-bold mb-4 max-md:text-xl",
                          },
                          "The Problem We Set Out to Solve",
                          -1
                        )),
                      t("div", ss, [
                        t("p", null, [
                          i(
                            d,
                            {
                              to: "/blog/retail-access-private-deals/",
                              class: "text-[#FF5B00] hover:underline",
                            },
                            {
                              default: r(() => [
                                ...(e[92] ||
                                  (e[92] = [
                                    s("Retail investors get locked out", -1),
                                  ])),
                              ]),
                              _: 1,
                            }
                          ),
                          e[93] ||
                            (e[93] = s(
                              " of every major opportunity. By the time you can buy shares on IPO day, VCs and institutions have already captured the gains - sometimes years earlier. ",
                              -1
                            )),
                        ]),
                        t("p", null, [
                          e[96] ||
                            (e[96] = s(
                              " Uber IPO'd at $45 and closed at $41.57 on day one. ",
                              -1
                            )),
                          i(
                            d,
                            {
                              to: "/blog/spacex-early-investors-100x-whats-next/",
                              class: "text-[#FF5B00] hover:underline",
                            },
                            {
                              default: r(() => [
                                ...(e[94] ||
                                  (e[94] = [
                                    s("SpaceX went from $20B to $175B+", -1),
                                  ])),
                              ]),
                              _: 1,
                            }
                          ),
                          e[97] ||
                            (e[97] = s(
                              " before retail could even invest. ",
                              -1
                            )),
                          i(
                            d,
                            {
                              to: "/blog/stripe-valuation-lessons-private-investors/",
                              class: "text-[#FF5B00] hover:underline",
                            },
                            {
                              default: r(() => [
                                ...(e[95] ||
                                  (e[95] = [
                                    s("Stripe's valuation swung wildly", -1),
                                  ])),
                              ]),
                              _: 1,
                            }
                          ),
                          e[98] ||
                            (e[98] = s(
                              " while insiders had already exited. The pattern is always the same: the best returns happen before the IPO. ",
                              -1
                            )),
                        ]),
                        e[99] ||
                          (e[99] = t(
                            "p",
                            null,
                            [
                              s(" We asked a simple question: "),
                              t(
                                "strong",
                                { class: "text-white" },
                                "what if a team could identify these opportunities early and share them with retail investors before the listing?"
                              ),
                              s(" The Vault was our answer. "),
                            ],
                            -1
                          )),
                      ]),
                    ]),
                    t("div", as, [
                      e[110] ||
                        (e[110] = t(
                          "h3",
                          {
                            class:
                              "text-white text-2xl font-bold mb-4 max-md:text-xl",
                          },
                          "What We Did - And Why It Matters",
                          -1
                        )),
                      t("div", os, [
                        e[109] ||
                          (e[109] = t(
                            "p",
                            null,
                            " We identified Redwood AI Corp., a company in the AI + Life Sciences sector, before it went public on the Canadian Securities Exchange. We didn't just tell our inner circle - we published the prediction publicly on this page, dropped hints, ran a guessing competition, and locked everything in before the IPO date. ",
                            -1
                          )),
                        t("p", null, [
                          e[102] ||
                            (e[102] = s(
                              " No insider information. No back-channel deals. Our ",
                              -1
                            )),
                          i(
                            d,
                            {
                              to: "/ai-powered/",
                              class: "text-[#FF5B00] hover:underline",
                            },
                            {
                              default: r(() => [
                                ...(e[101] ||
                                  (e[101] = [
                                    s("AI-powered research model", -1),
                                  ])),
                              ]),
                              _: 1,
                            }
                          ),
                          e[103] ||
                            (e[103] = s(
                              " analyzed publicly available data - regulatory filings, market signals, sector trends, and company fundamentals - and surfaced the opportunity. Then we did something no other platform in this space has done: we put the call on the public record. ",
                              -1
                            )),
                        ]),
                        t("p", null, [
                          e[105] ||
                            (e[105] = s(
                              " This is what separates IPO Genie from the hundreds of crypto projects that ship a whitepaper and a roadmap. We shipped a ",
                              -1
                            )),
                          e[106] ||
                            (e[106] = t(
                              "strong",
                              { class: "text-white" },
                              "result",
                              -1
                            )),
                          e[107] ||
                            (e[107] = s(
                              ". A verifiable, timestamped, publicly available proof that the team behind this platform can actually do what we say we can do: ",
                              -1
                            )),
                          i(
                            d,
                            {
                              to: "/blog/inside-ai-scoring-model-high-potential-deals/",
                              class: "text-[#FF5B00] hover:underline",
                            },
                            {
                              default: r(() => [
                                ...(e[104] ||
                                  (e[104] = [
                                    s("find high-potential deals", -1),
                                  ])),
                              ]),
                              _: 1,
                            }
                          ),
                          e[108] ||
                            (e[108] = s(
                              " before the rest of the market. ",
                              -1
                            )),
                        ]),
                      ]),
                    ]),
                    t("div", ls, [
                      e[118] ||
                        (e[118] = t(
                          "h3",
                          {
                            class:
                              "text-white text-2xl font-bold mb-4 max-md:text-xl",
                          },
                          "How Our AI Model Identified AIRX",
                          -1
                        )),
                      t("div", is, [
                        t("p", null, [
                          e[112] || (e[112] = s(" Our ", -1)),
                          i(
                            d,
                            {
                              to: "/ai-powered/",
                              class: "text-[#FF5B00] hover:underline",
                            },
                            {
                              default: r(() => [
                                ...(e[111] ||
                                  (e[111] = [
                                    s("AI-powered scoring model", -1),
                                  ])),
                              ]),
                              _: 1,
                            }
                          ),
                          e[113] ||
                            (e[113] = s(
                              " evaluates pre-IPO companies across five core dimensions: team strength, market opportunity, timing, traction, and fundamentals. Each dimension produces a weighted score that feeds into an overall Genie AI Score - a single number that tells you how strong the opportunity is. ",
                              -1
                            )),
                        ]),
                        e[117] ||
                          (e[117] = t(
                            "p",
                            null,
                            " For Redwood AI Corp., the model flagged strong signals across multiple dimensions: a founding team with deep experience in AI and life sciences, growing sector tailwinds as healthcare AI investment accelerated, and regulatory filings consistent with a near-term public listing on the CSE. The company's pivot from Marshall Technologies Corp. to Redwood AI Corp. - aligning the brand with its core technology - signalled strategic intent. ",
                            -1
                          )),
                        t("p", null, [
                          e[115] ||
                            (e[115] = s(
                              " The model doesn't rely on any single data point. It cross-references hundreds of publicly available signals to surface companies most likely heading toward an IPO within a defined window. Learn more about how the full process works on our ",
                              -1
                            )),
                          i(
                            d,
                            {
                              to: "/how-it-works/",
                              class: "text-[#FF5B00] hover:underline",
                            },
                            {
                              default: r(() => [
                                ...(e[114] ||
                                  (e[114] = [s("How It Works", -1)])),
                              ]),
                              _: 1,
                            }
                          ),
                          e[116] || (e[116] = s(" page. ", -1)),
                        ]),
                      ]),
                    ]),
                    e[142] ||
                      (e[142] = c(
                        '<div class="w-full max-w-[800px] z-10" data-v-19e2f867><h3 class="text-white text-2xl font-bold mb-6 max-md:text-xl" data-v-19e2f867>Vault #1 Timeline</h3><div class="space-y-4" data-v-19e2f867><div class="flex gap-4 items-start" data-v-19e2f867><div class="w-3 h-3 rounded-full bg-[#FF5B00] mt-1.5 shrink-0" data-v-19e2f867></div><div data-v-19e2f867><p class="text-white font-semibold text-sm" data-v-19e2f867>Company Identified</p><p class="text-gray-400 text-sm" data-v-19e2f867>AI model flags Redwood AI Corp. as a high-confidence pre-IPO opportunity</p></div></div><div class="flex gap-4 items-start" data-v-19e2f867><div class="w-3 h-3 rounded-full bg-[#FF5B00] mt-1.5 shrink-0" data-v-19e2f867></div><div data-v-19e2f867><p class="text-white font-semibold text-sm" data-v-19e2f867>Prediction Published</p><p class="text-gray-400 text-sm" data-v-19e2f867>Vault page goes live with hints and a guessing competition - locked in publicly before the listing</p></div></div><div class="flex gap-4 items-start" data-v-19e2f867><div class="w-3 h-3 rounded-full bg-[#FF5B00] mt-1.5 shrink-0" data-v-19e2f867></div><div data-v-19e2f867><p class="text-white font-semibold text-sm" data-v-19e2f867>Community Engagement</p><p class="text-gray-400 text-sm" data-v-19e2f867>IPO Genie community guesses the company based on published clues</p></div></div><div class="flex gap-4 items-start" data-v-19e2f867><div class="w-3 h-3 rounded-full bg-green-500 mt-1.5 shrink-0" data-v-19e2f867></div><div data-v-19e2f867><p class="text-white font-semibold text-sm" data-v-19e2f867>IPO Confirmed - February 6, 2026</p><p class="text-gray-400 text-sm" data-v-19e2f867>Redwood AI Corp. lists on the CSE under ticker AIRX. Vault #1 verified.</p></div></div></div></div><div class="w-full max-w-[1200px] z-10" data-v-19e2f867><h3 class="text-white text-2xl font-bold mb-6 text-center max-md:text-xl" data-v-19e2f867>The Result</h3><div class="grid grid-cols-2 md:grid-cols-4 gap-3 max-md:gap-2.5 w-full" data-v-19e2f867><div class="p-5 bg-white/5 rounded-[16px] border border-green-500/30 max-md:p-3.5" data-v-19e2f867><div class="w-10 h-10 max-md:w-8 max-md:h-8 bg-green-500/10 rounded-lg flex items-center justify-center mb-3 max-md:mb-2" data-v-19e2f867><svg class="w-5 h-5 max-md:w-4 max-md:h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-19e2f867><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-v-19e2f867></path></svg></div><h4 class="font-bold text-white text-sm max-md:text-xs mb-1" data-v-19e2f867>The Company</h4><p class="text-sm max-md:text-xs text-green-400 font-semibold" data-v-19e2f867>Redwood AI Corp.</p></div><div class="p-5 bg-white/5 rounded-[16px] border border-green-500/30 max-md:p-3.5" data-v-19e2f867><div class="w-10 h-10 max-md:w-8 max-md:h-8 bg-green-500/10 rounded-lg flex items-center justify-center mb-3 max-md:mb-2" data-v-19e2f867><svg class="w-5 h-5 max-md:w-4 max-md:h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-19e2f867><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-v-19e2f867></path></svg></div><h4 class="font-bold text-white text-sm max-md:text-xs mb-1" data-v-19e2f867>When We Called It</h4><p class="text-sm max-md:text-xs text-green-400 font-semibold" data-v-19e2f867>Before Feb 6, 2026</p></div><div class="p-5 bg-white/5 rounded-[16px] border border-white/10 max-md:p-3.5" data-v-19e2f867><div class="w-10 h-10 max-md:w-8 max-md:h-8 bg-[#FF5B00]/10 rounded-lg flex items-center justify-center mb-3 max-md:mb-2" data-v-19e2f867><svg class="w-5 h-5 max-md:w-4 max-md:h-4 text-[#FF5B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-19e2f867><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-v-19e2f867></path></svg></div><h4 class="font-bold text-white text-sm max-md:text-xs mb-1" data-v-19e2f867>IPO Price</h4><p class="text-sm max-md:text-xs text-gray-400" data-v-19e2f867>Pending market data</p></div><div class="p-5 bg-white/5 rounded-[16px] border border-white/10 max-md:p-3.5" data-v-19e2f867><div class="w-10 h-10 max-md:w-8 max-md:h-8 bg-[#FF5B00]/10 rounded-lg flex items-center justify-center mb-3 max-md:mb-2" data-v-19e2f867><svg class="w-5 h-5 max-md:w-4 max-md:h-4 text-[#FF5B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-19e2f867><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-v-19e2f867></path></svg></div><h4 class="font-bold text-white text-sm max-md:text-xs mb-1" data-v-19e2f867>The Returns</h4><p class="text-sm max-md:text-xs text-gray-400" data-v-19e2f867>Pending market data</p></div></div></div>',
                        2
                      )),
                    t("div", rs, [
                      e[123] ||
                        (e[123] = t(
                          "h3",
                          {
                            class:
                              "text-white text-2xl font-bold mb-6 text-center max-md:text-xl",
                          },
                          "The Name Reveal",
                          -1
                        )),
                      t("div", ds, [
                        e[122] ||
                          (e[122] = t(
                            "div",
                            {
                              class:
                                "absolute top-0 right-0 w-48 h-48 bg-[#FF5B00]/10 rounded-full blur-3xl -mr-24 -mt-24",
                            },
                            null,
                            -1
                          )),
                        t("div", ns, [
                          e[120] ||
                            (e[120] = t(
                              "p",
                              {
                                class:
                                  "text-green-400 text-sm uppercase tracking-widest mb-4 font-bold max-md:text-xs max-md:mb-3",
                              },
                              "Confirmed - IPO'd Feb 6, 2026",
                              -1
                            )),
                          t("div", ps, [
                            (a(),
                            o(
                              k,
                              null,
                              B("REDWOOD", (l, f) =>
                                t(
                                  "div",
                                  {
                                    key: "r-" + f,
                                    class:
                                      "w-14 h-16 max-md:w-[38px] max-md:h-[44px] bg-gray-800 rounded-lg max-md:rounded-md border-2 border-green-500 flex items-center justify-center text-4xl max-md:text-xl font-black text-green-400 shadow-[0_0_20px_rgba(34,197,94,0.2)]",
                                  },
                                  p(l),
                                  1
                                )
                              ),
                              64
                            )),
                          ]),
                          t("div", xs, [
                            (a(),
                            o(
                              k,
                              null,
                              B("AI", (l, f) =>
                                t(
                                  "div",
                                  {
                                    key: "a-" + f,
                                    class:
                                      "w-14 h-16 max-md:w-[38px] max-md:h-[44px] bg-gray-800 rounded-lg max-md:rounded-md border-2 border-green-500 flex items-center justify-center text-4xl max-md:text-xl font-black text-green-400 shadow-[0_0_20px_rgba(34,197,94,0.2)]",
                                  },
                                  p(l),
                                  1
                                )
                              ),
                              64
                            )),
                          ]),
                          t("div", ms, [
                            (a(),
                            o(
                              k,
                              null,
                              B("CORP", (l, f) =>
                                t(
                                  "div",
                                  {
                                    key: "c-" + f,
                                    class:
                                      "w-14 h-16 max-md:w-[38px] max-md:h-[44px] bg-gray-800 rounded-lg max-md:rounded-md border-2 border-green-500 flex items-center justify-center text-4xl max-md:text-xl font-black text-green-400 shadow-[0_0_20px_rgba(34,197,94,0.2)]",
                                  },
                                  p(l),
                                  1
                                )
                              ),
                              64
                            )),
                            e[119] ||
                              (e[119] = t(
                                "div",
                                {
                                  class:
                                    "w-14 h-16 max-md:w-[38px] max-md:h-[44px] bg-gray-800 rounded-lg max-md:rounded-md border-2 border-[#FF5B00] flex items-center justify-center text-2xl max-md:text-lg font-black text-[#FF5B00]",
                                },
                                " . ",
                                -1
                              )),
                          ]),
                          e[121] ||
                            (e[121] = t(
                              "p",
                              { class: "text-gray-400 text-sm max-md:text-xs" },
                              " CSE: AIRX · AI + Life Sciences · Formerly Marshall Technologies Corp. ",
                              -1
                            )),
                        ]),
                      ]),
                    ]),
                    t("div", fs, [
                      e[140] ||
                        (e[140] = t(
                          "h3",
                          {
                            class:
                              "text-white text-2xl font-bold mb-4 max-md:text-xl",
                          },
                          "What This Proves About IPO Genie",
                          -1
                        )),
                      t("div", us, [
                        t("p", null, [
                          e[125] ||
                            (e[125] = s(
                              " This wasn't a lucky guess. It was a systematic process: ",
                              -1
                            )),
                          i(
                            d,
                            {
                              to: "/ai-powered/",
                              class: "text-[#FF5B00] hover:underline",
                            },
                            {
                              default: r(() => [
                                ...(e[124] ||
                                  (e[124] = [s("AI-driven research", -1)])),
                              ]),
                              _: 1,
                            }
                          ),
                          e[126] ||
                            (e[126] = s(
                              " applied to public data, locked in before the listing, and verified after the fact. ",
                              -1
                            )),
                        ]),
                        e[137] ||
                          (e[137] = t(
                            "p",
                            null,
                            " The Vault proved three things that matter to every investor considering IPO Genie: ",
                            -1
                          )),
                        t("ul", cs, [
                          e[132] ||
                            (e[132] = t(
                              "li",
                              { class: "flex items-start gap-3" },
                              [
                                t(
                                  "svg",
                                  {
                                    class:
                                      "w-5 h-5 text-green-400 shrink-0 mt-0.5",
                                    fill: "currentColor",
                                    viewBox: "0 0 20 20",
                                  },
                                  [
                                    t("path", {
                                      "fill-rule": "evenodd",
                                      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                      "clip-rule": "evenodd",
                                    }),
                                  ]
                                ),
                                t("span", null, [
                                  t(
                                    "strong",
                                    { class: "text-white" },
                                    "The team can source deals."
                                  ),
                                  s(
                                    " Not in theory, not on a roadmap - we found a real pre-IPO opportunity and identified it correctly."
                                  ),
                                ]),
                              ],
                              -1
                            )),
                          t("li", vs, [
                            e[131] ||
                              (e[131] = t(
                                "svg",
                                {
                                  class:
                                    "w-5 h-5 text-green-400 shrink-0 mt-0.5",
                                  fill: "currentColor",
                                  viewBox: "0 0 20 20",
                                },
                                [
                                  t("path", {
                                    "fill-rule": "evenodd",
                                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                    "clip-rule": "evenodd",
                                  }),
                                ],
                                -1
                              )),
                            t("span", null, [
                              e[128] ||
                                (e[128] = t(
                                  "strong",
                                  { class: "text-white" },
                                  "The AI model works.",
                                  -1
                                )),
                              e[129] || (e[129] = s(" Our ", -1)),
                              i(
                                d,
                                {
                                  to: "/blog/inside-ai-scoring-model-high-potential-deals/",
                                  class: "text-[#FF5B00] hover:underline",
                                },
                                {
                                  default: r(() => [
                                    ...(e[127] ||
                                      (e[127] = [s("scoring model", -1)])),
                                  ]),
                                  _: 1,
                                }
                              ),
                              e[130] ||
                                (e[130] = s(
                                  " flagged this opportunity from public data alone - no insider access needed.",
                                  -1
                                )),
                            ]),
                          ]),
                          e[133] ||
                            (e[133] = t(
                              "li",
                              { class: "flex items-start gap-3" },
                              [
                                t(
                                  "svg",
                                  {
                                    class:
                                      "w-5 h-5 text-green-400 shrink-0 mt-0.5",
                                    fill: "currentColor",
                                    viewBox: "0 0 20 20",
                                  },
                                  [
                                    t("path", {
                                      "fill-rule": "evenodd",
                                      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                      "clip-rule": "evenodd",
                                    }),
                                  ]
                                ),
                                t("span", null, [
                                  t(
                                    "strong",
                                    { class: "text-white" },
                                    "Transparency is real."
                                  ),
                                  s(
                                    " We didn't hide behind NDAs or claim results after the fact. Everything was public, verifiable, and timestamped."
                                  ),
                                ]),
                              ],
                              -1
                            )),
                        ]),
                        t("p", null, [
                          e[135] || (e[135] = s(" In a space where ", -1)),
                          i(
                            d,
                            {
                              to: "/blog/what-makes-the-ipo-genie-presale-different-from-others/",
                              class: "text-[#FF5B00] hover:underline",
                            },
                            {
                              default: r(() => [
                                ...(e[134] ||
                                  (e[134] = [
                                    s("most projects ship promises", -1),
                                  ])),
                              ]),
                              _: 1,
                            }
                          ),
                          e[136] ||
                            (e[136] = s(
                              ", this is what shipping proof looks like. ",
                              -1
                            )),
                        ]),
                      ]),
                    ]),
                  ])),
                  [[g]]
                ),
              ]),
              t("div", bs, [
                v(
                  (a(),
                  o("div", gs, [
                    ...(e[143] ||
                      (e[143] = [
                        t(
                          "h2",
                          { class: "title text-black" },
                          [
                            s(" Go "),
                            t(
                              "span",
                              { class: "sectitle text-[#FF5B00]" },
                              "Deeper"
                            ),
                          ],
                          -1
                        ),
                        t(
                          "div",
                          { class: "description text-gray-600 max-w-[700px]" },
                          " Understand why pre-IPO access matters - and how IPO Genie is built to deliver it. ",
                          -1
                        ),
                      ])),
                  ])),
                  [[g]]
                ),
                v(
                  (a(),
                  o("div", hs, [
                    i(
                      d,
                      {
                        to: "/blog/pre-ipo-vs-ipo-investing/",
                        class:
                          "group p-6 bg-white rounded-[20px] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 max-md:p-5",
                      },
                      {
                        default: r(() => [
                          ...(e[144] ||
                            (e[144] = [
                              t(
                                "p",
                                {
                                  class:
                                    "text-[11px] font-bold text-[#FF5B00] uppercase tracking-wider mb-3",
                                },
                                "Investment Guide",
                                -1
                              ),
                              t(
                                "h3",
                                {
                                  class:
                                    "font-bold text-black text-base mb-2 group-hover:text-[#FF5B00] transition-colors",
                                },
                                "Pre-IPO vs IPO Investing: Where the Real Money Is Made",
                                -1
                              ),
                              t(
                                "p",
                                { class: "text-gray-500 text-sm" },
                                "The data behind why early access matters more than IPO day hype.",
                                -1
                              ),
                            ])),
                        ]),
                        _: 1,
                      }
                    ),
                    i(
                      d,
                      {
                        to: "/blog/inside-ai-scoring-model-high-potential-deals/",
                        class:
                          "group p-6 bg-white rounded-[20px] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 max-md:p-5",
                      },
                      {
                        default: r(() => [
                          ...(e[145] ||
                            (e[145] = [
                              t(
                                "p",
                                {
                                  class:
                                    "text-[11px] font-bold text-[#FF5B00] uppercase tracking-wider mb-3",
                                },
                                "How It Works",
                                -1
                              ),
                              t(
                                "h3",
                                {
                                  class:
                                    "font-bold text-black text-base mb-2 group-hover:text-[#FF5B00] transition-colors",
                                },
                                "Inside the AI Scoring Model That Found AIRX",
                                -1
                              ),
                              t(
                                "p",
                                { class: "text-gray-500 text-sm" },
                                "How our AI analyzes deals and flags high-potential opportunities before anyone else.",
                                -1
                              ),
                            ])),
                        ]),
                        _: 1,
                      }
                    ),
                    i(
                      d,
                      {
                        to: "/blog/spacex-early-investors-100x-whats-next/",
                        class:
                          "group p-6 bg-white rounded-[20px] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 max-md:p-5",
                      },
                      {
                        default: r(() => [
                          ...(e[146] ||
                            (e[146] = [
                              t(
                                "p",
                                {
                                  class:
                                    "text-[11px] font-bold text-[#FF5B00] uppercase tracking-wider mb-3",
                                },
                                "Case Study",
                                -1
                              ),
                              t(
                                "h3",
                                {
                                  class:
                                    "font-bold text-black text-base mb-2 group-hover:text-[#FF5B00] transition-colors",
                                },
                                "How SpaceX Early Investors Made 100x",
                                -1
                              ),
                              t(
                                "p",
                                { class: "text-gray-500 text-sm" },
                                "The returns that happen before IPO day - and why retail always misses them.",
                                -1
                              ),
                            ])),
                        ]),
                        _: 1,
                      }
                    ),
                    i(
                      d,
                      {
                        to: "/blog/retail-access-private-deals/",
                        class:
                          "group p-6 bg-white rounded-[20px] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 max-md:p-5",
                      },
                      {
                        default: r(() => [
                          ...(e[147] ||
                            (e[147] = [
                              t(
                                "p",
                                {
                                  class:
                                    "text-[11px] font-bold text-[#FF5B00] uppercase tracking-wider mb-3",
                                },
                                "Industry Analysis",
                                -1
                              ),
                              t(
                                "h3",
                                {
                                  class:
                                    "font-bold text-black text-base mb-2 group-hover:text-[#FF5B00] transition-colors",
                                },
                                "How Retail Investors Finally Access Private Deals",
                                -1
                              ),
                              t(
                                "p",
                                { class: "text-gray-500 text-sm" },
                                "The barriers that kept you out - and the technology breaking them down.",
                                -1
                              ),
                            ])),
                        ]),
                        _: 1,
                      }
                    ),
                    i(
                      d,
                      {
                        to: "/blog/ipo-genie-right-to-be-early/",
                        class:
                          "group p-6 bg-white rounded-[20px] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 max-md:p-5",
                      },
                      {
                        default: r(() => [
                          ...(e[148] ||
                            (e[148] = [
                              t(
                                "p",
                                {
                                  class:
                                    "text-[11px] font-bold text-[#FF5B00] uppercase tracking-wider mb-3",
                                },
                                "Philosophy",
                                -1
                              ),
                              t(
                                "h3",
                                {
                                  class:
                                    "font-bold text-black text-base mb-2 group-hover:text-[#FF5B00] transition-colors",
                                },
                                "IPO Genie and the Right to Be Early",
                                -1
                              ),
                              t(
                                "p",
                                { class: "text-gray-500 text-sm" },
                                "Why we believe every investor deserves access to pre-IPO opportunities.",
                                -1
                              ),
                            ])),
                        ]),
                        _: 1,
                      }
                    ),
                    i(
                      d,
                      {
                        to: "/blog/stop-buying-tokens-start-buying-access/",
                        class:
                          "group p-6 bg-white rounded-[20px] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 max-md:p-5",
                      },
                      {
                        default: r(() => [
                          ...(e[149] ||
                            (e[149] = [
                              t(
                                "p",
                                {
                                  class:
                                    "text-[11px] font-bold text-[#FF5B00] uppercase tracking-wider mb-3",
                                },
                                "$IPO Token",
                                -1
                              ),
                              t(
                                "h3",
                                {
                                  class:
                                    "font-bold text-black text-base mb-2 group-hover:text-[#FF5B00] transition-colors",
                                },
                                "Stop Buying Tokens. Start Buying Access.",
                                -1
                              ),
                              t(
                                "p",
                                { class: "text-gray-500 text-sm" },
                                "How $IPO works differently from speculative tokens.",
                                -1
                              ),
                            ])),
                        ]),
                        _: 1,
                      }
                    ),
                  ])),
                  [[g, { delay: 100 }]]
                ),
                v(
                  (a(),
                  o("div", ws, [
                    i(F, {
                      text: "Read All Articles",
                      to: "/blog/",
                      "bg-color": "transparent",
                      "text-color": "#000",
                      "border-color": "#000",
                      "arrow-color": "#fff",
                      "bg-arrow": "#FF5B00",
                    }),
                    i(F, {
                      text: "Read the Whitepaper",
                      to: "/whitepaper/",
                      "bg-color": "transparent",
                      "text-color": "#000",
                      "border-color": "#000",
                      "arrow-color": "#fff",
                      "bg-arrow": "#FF5B00",
                    }),
                  ])),
                  [[g, { delay: 200 }]]
                ),
              ]),
              i(be, { "faq-list": X }),
              t("div", ys, [
                v(
                  (a(),
                  o("div", ks, [
                    e[151] ||
                      (e[151] = t(
                        "h2",
                        {
                          class:
                            "title !text-white text-center max-md:!text-[28px] px-8",
                        },
                        [
                          s(" This Was Just the "),
                          t(
                            "span",
                            { class: "sectitle text-[#FF5B00]" },
                            "First One"
                          ),
                        ],
                        -1
                      )),
                    e[152] ||
                      (e[152] = t(
                        "p",
                        {
                          class:
                            "description !text-gray-300 text-center max-w-[600px] px-8",
                        },
                        " We proved the model works. Redwood AI Corp. IPO'd exactly as we called it. The next vault is already in progress. ",
                        -1
                      )),
                    b(C)
                      ? (a(),
                        o("div", Bs, [
                          ...(e[150] ||
                            (e[150] = [
                              t(
                                "div",
                                {
                                  class:
                                    "p-4 bg-green-500/10 border border-green-500/30 rounded-2xl text-center",
                                },
                                [
                                  t(
                                    "p",
                                    { class: "text-green-400 font-medium" },
                                    "You're on the list. We'll notify you when Vault #2 is ready."
                                  ),
                                ],
                                -1
                              ),
                            ])),
                        ]))
                      : (a(),
                        o("div", Fs, [
                          i(F, {
                            text: "BUY NOW",
                            "bg-color": "#FF5B00",
                            link: "https://app.uniswap.org/swap?chain=mainnet&inputCurrency=NATIVE&outputCurrency=0xa6206ceB99A811246beBae71E1f8F49BaFAC7108",
                          }),
                        ])),
                    e[153] ||
                      (e[153] = t(
                        "p",
                        { class: "text-sm text-gray-500 px-8 text-center" },
                        "We didn't ask you to trust us. We showed you the receipts.",
                        -1
                      )),
                  ])),
                  [[g]]
                ),
              ]),
              (a(),
              ee(oe, { to: "body" }, [
                A.value
                  ? (a(),
                    o("div", Is, [
                      t("div", {
                        class:
                          "fixed inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity",
                        onClick: E,
                      }),
                      t("div", Cs, [
                        t(
                          "button",
                          {
                            onClick: E,
                            "aria-label": "Close",
                            class:
                              "absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors",
                          },
                          [
                            ...(e[154] ||
                              (e[154] = [
                                t(
                                  "svg",
                                  {
                                    class: "w-6 h-6",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                  },
                                  [
                                    t("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d: "M6 18L18 6M6 6l12 12",
                                    }),
                                  ],
                                  -1
                                ),
                              ])),
                          ]
                        ),
                        e[155] ||
                          (e[155] = t(
                            "div",
                            { class: "text-center mb-8" },
                            [
                              t(
                                "div",
                                {
                                  class:
                                    "w-16 h-16 bg-[#FF5B00]/10 rounded-2xl flex items-center justify-center text-[#FF5B00] mx-auto mb-4",
                                },
                                [
                                  t(
                                    "svg",
                                    {
                                      class: "w-8 h-8",
                                      fill: "none",
                                      stroke: "currentColor",
                                      viewBox: "0 0 24 24",
                                    },
                                    [
                                      t("path", {
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        "stroke-width": "2",
                                        d: "M13 10V3L4 14h7v7l9-11h-7z",
                                      }),
                                    ]
                                  ),
                                ]
                              ),
                              t(
                                "h3",
                                { class: "text-2xl font-bold text-gray-900" },
                                "Don't Miss Vault #2"
                              ),
                              t(
                                "p",
                                { class: "text-gray-500 mt-2" },
                                "Get notified when the next vault drops"
                              ),
                            ],
                            -1
                          )),
                        t(
                          "form",
                          { onSubmit: se(Q, ["prevent"]), class: "space-y-4" },
                          [
                            t("div", null, [
                              v(
                                t(
                                  "input",
                                  {
                                    "onUpdate:modelValue":
                                      e[3] || (e[3] = (l) => (h.value = l)),
                                    type: "email",
                                    required: "",
                                    placeholder: "Enter your email",
                                    disabled: b(R) || b(C),
                                    class:
                                      "w-full px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF5B00] transition-all text-center disabled:opacity-50 disabled:cursor-not-allowed",
                                  },
                                  null,
                                  8,
                                  _s
                                ),
                                [[ae, h.value]]
                              ),
                            ]),
                            t(
                              "button",
                              {
                                type: "submit",
                                disabled: b(R) || b(C),
                                class:
                                  "w-full bg-[#FF5B00] hover:bg-[#e55200] text-white py-4 rounded-2xl font-bold text-lg shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed",
                              },
                              p(
                                b(R)
                                  ? "Sending..."
                                  : b(C)
                                  ? "You're In!"
                                  : "Join Waitlist"
                              ),
                              9,
                              As
                            ),
                            b(C)
                              ? (a(),
                                o(
                                  "p",
                                  Ps,
                                  " You're on the list! We'll notify you when Vault #2 is ready. "
                                ))
                              : O("", !0),
                            b(W) ? (a(), o("p", js, p(b(W)), 1)) : O("", !0),
                            !b(C) && !b(W)
                              ? (a(),
                                o(
                                  "p",
                                  Os,
                                  " No spam. Just vault drops and platform updates. "
                                ))
                              : O("", !0),
                          ],
                          32
                        ),
                      ]),
                    ]))
                  : O("", !0),
              ])),
            ])
          );
        }
      );
    },
  },
  Ms = re(Ss, [["__scopeId", "data-v-19e2f867"]]);
export { Ms as default };
