import { _ as r } from "./RelatedArticles-DNHAktEt.js";
import {
  _ as c,
  a as m,
  b as l,
  c as p,
  d as g,
} from "./TechnologySection-rsTEpmtd.js";
import { P as n } from "./ProseSection-BDsjG7tk.js";
import {
  u as d,
  d as h,
  g as u,
  e as v,
  B as y,
  v as b,
  k as f,
  F as w,
  s as i,
} from "./index-CkW8Cm0p.js";
import { g as k } from "./product-faqs-DsJuzZFe.js";
import { d as S, l as e, u as _, F as I, e as x } from "./vue-Z9E3ejSf.js";
import "./gsap-BwUJxYA3.js";
const E = {
  __name: "Behavior",
  setup(B) {
    d(i.behavior);
    const a = k("/behavior/"),
      o = a.map((t) => ({ title: t.question, text: t.answer }));
    h([
      u(),
      v([
        { name: "Home", url: "/" },
        { name: "Behavior-Based Staking", url: "/behavior/" },
      ]),
      y({
        name: "IPO Genie Behavior-Based Staking",
        description:
          "Dynamic staking rewards powered by AI that analyzes on-chain behavior, governance participation, and ecosystem contribution.",
        serviceType: "Staking Rewards",
        path: "/behavior/",
      }),
      b("/behavior/", a),
      f({
        url: "/behavior/",
        headline: i.behavior.title,
        summary: i.behavior.description,
      }),
    ]);
    const s = [
      {
        title: "Governance Participation",
        description:
          "Voting in governance and engaging in ecosystem decisions to shape the network.",
      },
      {
        title: "Deal Contribution",
        description:
          "Contributing diligence on deals and submitting promising opportunities for review.",
      },
      {
        title: "Community Growth",
        description:
          "Referring new users and helping expand the ecosystem through network effects.",
      },
      {
        title: "Long-Term Commitment",
        description:
          "Holding tokens over time to demonstrate loyalty and earn ongoing rewards.",
      },
    ];
    return (t, P) => (
      x(),
      S(
        I,
        null,
        [
          e(c, {
            heading: [
              {
                text: "Behavior-Based Staking: Earn Crypto Rewards Through",
                type: "default",
              },
              { text: "Active Participation", type: "accent" },
            ],
            description:
              "IPO Genie is reinventing staking by moving beyond passive holding rewards to a dynamic, behavior-driven model powered by real-time on-chain data and AI.",
            description2:
              "Instead of simply rewarding users for locking up tokens, this new system values active, meaningful participation in the ecosystem.",
            breadcrumbs: [
              { name: "Home", to: "/" },
              { name: "Behavioral Analytics" },
            ],
          }),
          e(m, {
            title: "Think of it as ",
            "orange-text": "Staking",
            "gray-text": "but dynamic",
            text: "IPO Genie introduces an activity-weighted staking model that rewards users based on how they contribute to the network. Each participant earns a Reputation Score that evolves dynamically through AI and machine learning analysis of past behavior, network effects, and predictive value.",
          }),
          e(n, {
            title: "How Reputation Scoring Works",
            highlight: "Reputation Scoring",
            content: `<p>Your Reputation Score is more than a vanity metric. It is the backbone of IPO Genie's behavior-based staking system. The AI analyzes your on-chain activity across multiple dimensions: governance voting patterns, deal submission quality, community referrals, staking consistency, and <a href='/learn/tokenomics/'>token holding</a> duration.</p>
    <p>Each action carries a different weight based on its impact on ecosystem health. For example, submitting a deal that passes Venture Council review contributes more to your score than a simple governance vote, because it demonstrates deeper analytical engagement. The AI also adjusts weights dynamically, so the system cannot be gamed by repeating a single action.</p>
    <p>As your Reputation Score increases, you unlock progressively better staking multipliers, priority access to new deals, enhanced governance power, and higher <a href='/insurance/'>insurance coverage</a> limits. This creates a virtuous cycle where the most engaged participants earn the most, regardless of their initial capital.</p>`,
          }),
          e(n, {
            title: "What Earns Staking Rewards",
            highlight: "Staking Rewards",
            content: `<p>IPO Genie rewards a wide range of ecosystem contributions, each with its own multiplier effect on your staking yield. The core reward categories include governance participation, deal contribution, community growth, and long-term commitment.</p>
    <p>Governance participation means voting on proposals, joining discussion forums, and helping shape platform policy. Deal contribution covers submitting opportunities to the <a href='/marketplace/'>Deal Builder Marketplace</a>, writing due diligence reports, and validating other users' submissions. Community growth includes referring new members, creating educational content, and mentoring newer participants.</p>
    <p>Long-term commitment rewards consistent holding and staking behavior over time, with multipliers that increase at 30, 90, and 180-day milestones. Importantly, these categories stack. An investor who votes, submits deals, refers friends, and maintains a long staking period earns compounding multipliers that passive holders simply cannot match. Explore how this compares to traditional models in our guide to <a href='/blog/staking-vs-pre-ipo-investing/'>staking vs. pre-IPO investing</a>.</p>`,
          }),
          e(l, {
            features: s,
            "title-prefix": "Key",
            "title-highlight": "Features",
            subtitle: "How you earn rewards in the IPO Genie ecosystem.",
          }),
          e(p),
          e(w, { "faq-list": _(o) }, null, 8, ["faq-list"]),
          e(g),
          e(r, {
            slugs: [
              "staking-vs-pre-ipo-investing",
              "stop-buying-tokens-start-buying-access",
              "why-crypto-portfolio-needs-pre-ipo-exposure",
            ],
          }),
        ],
        64
      )
    );
  },
};
export { E as default };
