import { _ as o } from "./RelatedArticles-DNHAktEt.js";
import {
  _ as c,
  a as u,
  b as l,
  c as d,
  d as m,
} from "./TechnologySection-rsTEpmtd.js";
import { P as r } from "./ProseSection-BDsjG7tk.js";
import {
  u as p,
  d as g,
  g as f,
  e as h,
  B as v,
  v as y,
  k as b,
  F as k,
  s as n,
} from "./index-CkW8Cm0p.js";
import { g as w } from "./product-faqs-DsJuzZFe.js";
import { d as I, l as e, u as _, F as P, e as S } from "./vue-Z9E3ejSf.js";
import "./gsap-BwUJxYA3.js";
const A = {
  __name: "Insurance",
  setup(x) {
    p(n.insurance);
    const a = w("/insurance/"),
      i = a.map((t) => ({ title: t.question, text: t.answer }));
    g([
      f(),
      h([
        { name: "Home", url: "/" },
        { name: "Insurance", url: "/insurance/" },
      ]),
      v({
        name: "IPO Genie Investment Insurance",
        description:
          "Built-in safety net for private market investments. Coverage powered by crypto and traditional insurers protects against project failures and rug pulls.",
        serviceType: "Insurance Service",
        path: "/insurance/",
      }),
      y("/insurance/", a),
      b({
        url: "/insurance/",
        headline: n.insurance.title,
        summary: n.insurance.description,
      }),
    ]);
    const s = [
      {
        title: "Milestone Protection",
        description:
          "Coverage activates if projects fail to meet predefined milestones or founders abandon initiatives.",
      },
      {
        title: "Multi-Provider Insurance",
        description:
          "Reputable partners from crypto and traditional finance help cover potential losses.",
      },
      {
        title: "$IPO-Backed Coverage",
        description:
          "Holding $IPO secures your investments, providing a built-in safety net.",
      },
      {
        title: "Smarter Risk Management",
        description:
          "Transforms binary, high-risk outcomes into programmable, quantifiable protections for investors.",
      },
    ];
    return (t, C) => (
      S(),
      I(
        P,
        null,
        [
          e(c, {
            heading: [
              { text: "Crypto Investment Insurance:", type: "default" },
              { text: "Protect Your Portfolio", type: "accent" },
              { text: "from Rug Pulls & Scams", type: "default" },
            ],
            description:
              "Investing in private markets is risky. Scams, failed projects, and rug pulls happen. IPO Genie introduces $IPO-backed insurance, giving you a built-in safety net so you can invest with confidence. Coverage is powered by crypto and traditional insurance providers, turning risk into a programmable, transparent variable.",
            breadcrumbs: [{ name: "Home", to: "/" }, { name: "Insurance" }],
          }),
          e(u, {
            title: "Think of it as ",
            "orange-text": "investing",
            "gray-text": "but protected",
            text: "Your investment is backed if a project fails, milestones aren’t met, or founders abandon the initiative.",
          }),
          e(r, {
            title: "How Insurance Coverage Works",
            highlight: "Insurance Coverage",
            content: `<p>IPO Genie's insurance system operates through community-funded pools backed by both crypto-native and traditional insurance partners. When you invest in a deal on the platform, you can opt into coverage by paying a premium calculated based on the project's AI risk score and your staking tier.</p>
    <p>Coverage is structured around specific, verifiable trigger events. If a project fails to meet predefined development milestones within agreed timeframes, if the founding team abandons the initiative (confirmed through on-chain analysis), or if a verified rug pull or undisclosed security exploit occurs, the insurance pool activates. Claims are reviewed by the IPO Genie governance council using transparent, on-chain evidence.</p>
    <p>The level of coverage scales with your participation in the ecosystem. Higher <a href='/behavior/'>Reputation Scores</a> and longer staking durations unlock access to increased coverage limits and reduced premium rates. This ties protection directly to ecosystem engagement, rewarding committed participants with the strongest safety nets. The <a href='/ai-powered/'>AI scoring system</a> plays a key role here too, as higher-rated deals qualify for lower premiums. For a deeper understanding of <a href='/learn/smart-contract/'>smart contract mechanics</a> behind the insurance pools, explore our learning hub.</p>`,
          }),
          e(r, {
            title: "What's Covered and What's Not",
            highlight: "Covered",
            content: `<p>Understanding exactly what triggers a payout is essential before investing. IPO Genie insurance covers project-level failures, not market-level events. Specifically, covered scenarios include verified rug pulls where founders exit with investor funds, team abandonment confirmed through wallet inactivity and communication cessation, undisclosed security exploits that were not part of the pre-investment audit, and failure to deliver on predefined milestones within stated timeframes.</p>
    <p>What is not covered: general market downturns, normal price depreciation from supply-demand dynamics, regulatory changes that affect token value broadly, or losses from user error such as sending tokens to an incorrect address. Coverage is designed to protect against fraud and project failure, not market risk.</p>
    <p>This distinction is important because it keeps premiums affordable and pools solvent. By focusing on verifiable, project-specific events rather than broad market movements, the insurance system remains sustainable for the long term. Pair your coverage with solid due diligence using our guide on <a href='/blog/how-to-spot-token-red-flags/'>how to spot token red flags</a> and review our <a href='/about/tokenomics/'>tokenomics overview</a> to understand how coverage tiers interact with the broader $IPO economy.</p>`,
          }),
          e(l, {
            features: s,
            "title-prefix": "Key",
            "title-highlight": "Features",
            subtitle: "Protection built into every investment.",
          }),
          e(d),
          e(k, { "faq-list": _(i) }, null, 8, ["faq-list"]),
          e(m),
          e(o, {
            slugs: [
              "how-to-spot-token-red-flags",
              "pre-ipo-tokens-vs-meme-coins",
              "reading-tokenomics-red-flags-green-lights",
            ],
          }),
        ],
        64
      )
    );
  },
};
export { A as default };
