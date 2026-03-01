import { _ as r } from "./RelatedArticles-DNHAktEt.js";
import {
  _ as d,
  a as l,
  b as u,
  c,
  d as p,
} from "./TechnologySection-rsTEpmtd.js";
import { P as a } from "./ProseSection-BDsjG7tk.js";
import {
  u as m,
  d as h,
  g as f,
  e as g,
  C as v,
  v as k,
  k as b,
  F as y,
  s as i,
} from "./index-CkW8Cm0p.js";
import { g as x } from "./product-faqs-DsJuzZFe.js";
import { d as I, l as e, u as w, F, e as P } from "./vue-Z9E3ejSf.js";
import "./gsap-BwUJxYA3.js";
const j = {
  __name: "IndexFunds",
  setup(_) {
    m(i.indexFunds);
    const n = x("/index-funds/"),
      o = n.map((t) => ({ title: t.question, text: t.answer }));
    h([
      f(),
      g([
        { name: "Home", url: "/" },
        { name: "Index Funds", url: "/index-funds/" },
      ]),
      v({
        name: "IPO Genie Index Funds",
        description:
          "Diversified tokenized baskets of pre-IPO startups. ETF-style exposure to private markets with automatic rebalancing and instant liquidity.",
        path: "/index-funds/",
      }),
      k("/index-funds/", n),
      b({
        url: "/index-funds/",
        headline: i.indexFunds.title,
        summary: i.indexFunds.description,
      }),
    ]);
    const s = [
      {
        title: "Curated Portfolios",
        description:
          'Access themed baskets like "AI Frontier" or "Sustainable Growth," giving investors diversified exposure to high-growth startups.',
      },
      {
        title: "Automatic Rebalancing",
        description:
          "Portfolios adjust automatically based on performance and community governance, ensuring optimal allocation over time.",
      },
      {
        title: "Tradable Anytime",
        description:
          "Tokens can be traded anytime through IPO-native liquidity pools, providing instant access and flexibility without lockups.",
      },
    ];
    return (t, A) => (
      P(),
      I(
        F,
        null,
        [
          e(d, {
            heading: [
              { text: "Pre-IPO Index Funds:", type: "default" },
              { text: "Diversified Access to Private Markets", type: "accent" },
            ],
            description:
              "Diversification is a cornerstone of smart investing, but in private markets, it's long been out of reach. IPO Genie changes that with Index Funds, where a single token represents a curated basket of high-growth startups. Think of it as an ETF for the pre-IPO world. Fully transparent, rebalanced automatically, and tradable anytime through IPO-native liquidity pools.",
            breadcrumbs: [{ name: "Home", to: "/" }, { name: "Index Funds" }],
          }),
          e(l, {
            title: "Think of it as an ",
            "orange-text": "ETF",
            "gray-text": "but decentralized",
            text: "Traditional ETFs give access to public stocks. IPO Genie brings that same simplicity to the private market. Each Index Fund token tracks a dynamic portfolio like “AI Frontier” or “Sustainable Growth”, letting investors gain diversified exposure to vetted startups with just one click.",
          }),
          e(a, {
            title: "How Pre-IPO Index Funds Work",
            highlight: "Index Funds",
            content: `<p>IPO Genie Index Funds operate like tokenized ETFs for the private market. Each fund token represents a proportional share of a curated basket of pre-IPO startups, selected and managed through a combination of <a href='/ai-powered/'>AI scoring</a>, community governance, and Venture Council oversight.</p>
    <p>Portfolio construction follows a theme-based approach. A fund like 'AI Frontier' concentrates on artificial intelligence startups at Series A through pre-IPO stages, while 'Sustainable Growth' targets green technology and ESG-aligned companies. Within each theme, the AI continuously monitors portfolio balance, automatically reweighting positions based on milestone achievement, market conditions, and updated risk scores.</p>
    <p>Liquidity is built in from day one. Unlike traditional venture funds with 7-10 year lockup periods, index fund tokens trade through on-chain liquidity pools around the clock. This means you can enter or exit a diversified private market position at any time, something that was previously impossible without institutional-level capital. Learn how to structure your allocation in our guide to <a href='/blog/how-to-build-pre-ipo-portfolio/'>building a pre-IPO portfolio</a>.</p>`,
          }),
          e(a, {
            title: "Index Funds vs Direct Investment",
            highlight: "Direct Investment",
            content: `<p>Choosing between an index fund and a direct presale investment comes down to your risk tolerance and time commitment. Direct investments in individual projects can deliver outsized returns, but they concentrate your risk in a single outcome. If that one project fails, your entire position is lost.</p>
    <p>Index funds spread that risk across multiple vetted startups within a single token. If one company in the basket underperforms, the gains from the rest of the portfolio can offset that loss. Historically, diversified venture portfolios have tended to outperform concentrated bets on a risk-adjusted basis, though past performance does not guarantee future results. Diversification helps capture more of the market's overall upside while limiting downside exposure.</p>
    <p>There is also a time advantage. Evaluating individual presales requires significant research into <a href='/learn/tokenomics/'>tokenomics</a>, team backgrounds, and market positioning. Index funds delegate that work to the AI scoring system and the Venture Council, while still giving you transparent visibility into every holding. For additional downside protection, pair your index fund position with <a href='/insurance/'>IPO Genie insurance</a> to cover project-level failures within the basket.</p>`,
          }),
          e(u, {
            features: s,
            "title-prefix": "Key",
            "title-highlight": "Features",
            subtitle: "Diversified exposure to private markets, simplified.",
          }),
          e(c),
          e(y, { "faq-list": w(o) }, null, 8, ["faq-list"]),
          e(p),
          e(r, {
            slugs: [
              "how-to-build-pre-ipo-portfolio",
              "bull-market-positioning-allocate-before-surge",
              "smart-money-rotating-this-asset-class",
            ],
          }),
        ],
        64
      )
    );
  },
};
export { j as default };
