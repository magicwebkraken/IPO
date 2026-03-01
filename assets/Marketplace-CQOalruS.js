import { _ as o } from "./RelatedArticles-DNHAktEt.js";
import {
  _ as l,
  a as c,
  b as u,
  c as d,
  d as p,
} from "./TechnologySection-rsTEpmtd.js";
import { P as r } from "./ProseSection-BDsjG7tk.js";
import {
  u as m,
  d as h,
  g,
  e as f,
  B as y,
  v,
  k as b,
  F as k,
  s as a,
} from "./index-CkW8Cm0p.js";
import { g as w } from "./product-faqs-DsJuzZFe.js";
import { d as _, l as e, u as I, F as x, e as S } from "./vue-Z9E3ejSf.js";
import "./gsap-BwUJxYA3.js";
const C = {
  __name: "Marketplace",
  setup(P) {
    m(a.marketplace);
    const s = w("/marketplace/"),
      i = s.map((t) => ({ title: t.question, text: t.answer }));
    h([
      g(),
      f([
        { name: "Home", url: "/" },
        { name: "Marketplace", url: "/marketplace/" },
      ]),
      y({
        name: "IPO Genie Deal Builder Marketplace",
        description:
          "Community-powered deal sourcing platform where scouts stake $IPO to submit vetted startup opportunities with AI-enhanced screening.",
        serviceType: "Deal Sourcing",
        path: "/marketplace/",
      }),
      v("/marketplace/", s),
      b({
        url: "/marketplace/",
        headline: a.marketplace.title,
        summary: a.marketplace.description,
      }),
    ]);
    const n = [
      {
        title: "Community-Powered Sourcing",
        description:
          "Operators, scouts, analysts, and founders submit deals and stake $IPO to signal confidence.",
      },
      {
        title: "Collaborative Validation",
        description:
          "The network vets deals through upvotes, reputation-based governance, and staking filters, ensuring quality and fairness.",
      },
      {
        title: "Expert Oversight",
        description:
          "The IPO Genie Venture Council reviews all submissions to maintain high standards and reliability.",
      },
      {
        title: "AI-Enhanced Pre-Screening",
        description:
          "AI tags startups by category, scores submissions based on past success, and flags duplicates or issues for faster, smarter deal flow.",
      },
    ];
    return (t, O) => (
      S(),
      _(
        x,
        null,
        [
          e(l, {
            heading: [
              { text: "Private Deal Access:", type: "default" },
              {
                text: "How Retail Investors Get Into Exclusive Opportunities",
                type: "accent",
              },
            ],
            description2:
              "AI tools, community validation, and expert oversight combine to create a fast, fair, and always-on deal pipeline.",
            description:
              "IPO Genie's Deal Builder Marketplace puts deal sourcing into the hands of the community. Operators, scouts, analysts, and founders alike. By staking $IPO, contributors show real skin in the game when submitting vetted startup opportunities.",
            breadcrumbs: [{ name: "Home", to: "/" }, { name: "Marketplace" }],
          }),
          e(c, {
            title: "Think of it as ",
            "orange-text": "sourcing",
            "gray-text": "but AI Augmented",
            text: "The Deal Builder Marketplace combines community-powered deal submissions with AI pre-screening and Venture Council oversight. Scouts stake $IPO to submit opportunities, validators vote on quality, and the best deals rise to the top, creating a transparent, merit-based pipeline for private market access.",
          }),
          e(r, {
            title: "How Deal Sourcing Works",
            highlight: "Deal Sourcing",
            content: `<p>The Deal Builder Marketplace runs on a four-stage pipeline: submit, stake, validate, and approve. Any $IPO holder can submit a startup opportunity by providing key details about the project, including team backgrounds, funding stage, market opportunity, and relevant documentation.</p>
    <p>To submit a deal, scouts must stake $IPO tokens alongside their submission. This skin-in-the-game requirement ensures that only serious, vetted opportunities enter the pipeline. The <a href='/ai-powered/'>AI scoring system</a> then pre-screens each submission, flagging duplicates, identifying potential red flags, and generating an initial risk assessment score.</p>
    <p>Next, community validators with established Reputation Scores review and vote on submissions. Validators who correctly identify strong deals or flag weak ones earn rewards, creating an incentive for careful, honest assessment. Finally, top-scoring submissions advance to the Venture Council for expert-level review before being listed for investment. Learn more about how this process opens doors for everyday investors in our analysis of <a href='/blog/retail-access-private-deals/'>retail access to private deals</a>.</p>`,
          }),
          e(r, {
            title: "Earning Rewards as a Scout",
            highlight: "Rewards",
            content: `<p>IPO Genie's scout reward system is designed to attract the best deal flow from across the crypto and startup ecosystems. When your submitted deal passes all validation stages and gets listed, you earn $IPO rewards proportional to your initial stake and the deal's eventual performance.</p>
    <p>Successful scouts also build their <a href='/behavior/'>Reputation Score</a> over time. As your track record of quality submissions grows, you unlock reduced staking requirements for future submissions, priority review queues, and higher reward multipliers. This means experienced scouts with proven judgment earn more per deal than newcomers, creating a natural meritocracy.</p>
    <p>The reward structure extends beyond just submitting deals. Validators who accurately assess submission quality earn a share of the slashed stakes from rejected deals. Analysts who contribute detailed due diligence reports earn additional rewards. Every role in the pipeline is compensated, ensuring the marketplace attracts diverse expertise. Understand how these rewards interact with the broader <a href='/learn/tokenomics/'>$IPO token economy</a> in our tokenomics overview.</p>`,
          }),
          e(u, {
            features: n,
            "title-prefix": "Key",
            "title-highlight": "Features",
            subtitle: "A transparent, community-driven deal pipeline.",
          }),
          e(d),
          e(k, { "faq-list": I(i) }, null, 8, ["faq-list"]),
          e(p),
          e(o, {
            slugs: [
              "spacex-early-investors-100x-whats-next",
              "stripe-valuation-lessons-private-investors",
              "companies-that-should-have-stayed-private",
            ],
          }),
        ],
        64
      )
    );
  },
};
export { C as default };
