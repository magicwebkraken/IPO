import { _ as c } from "./RelatedArticles-DNHAktEt.js";
import {
  _ as l,
  a as d,
  b as u,
  c as m,
  d as f,
} from "./TechnologySection-rsTEpmtd.js";
import { P as r } from "./ProseSection-BDsjG7tk.js";
import { a as p, _ as h } from "./Matters-Dk1h8fyO.js";
import {
  u as g,
  d as v,
  g as y,
  e as k,
  B as b,
  v as F,
  k as S,
  F as w,
  s as t,
} from "./index-CkW8Cm0p.js";
import { g as _ } from "./product-faqs-DsJuzZFe.js";
import { d as x, l as e, u as i, F as O, e as A } from "./vue-Z9E3ejSf.js";
import "./gsap-BwUJxYA3.js";
const D = {
  __name: "FaaS",
  setup(P) {
    g(t.faas);
    const n = _("/faas/"),
      s = n.map((a) => ({ title: a.question, text: a.answer }));
    v([
      y(),
      k([
        { name: "Home", url: "/" },
        { name: "Fund-as-a-Service", url: "/faas/" },
      ]),
      b({
        name: "IPO Genie Fund-as-a-Service",
        description:
          "White-labeled tokenized fund infrastructure with automated compliance, smart contracts, and real-time reporting for DAOs and investment groups.",
        serviceType: "Fund Infrastructure",
        path: "/faas/",
      }),
      F("/faas/", n),
      S({ url: "/faas/", headline: t.faas.title, summary: t.faas.description }),
    ]);
    const o = [
      {
        title: "Built-in Compliance",
        description:
          "Automated KYC/AML, accreditation checks, and jurisdiction-specific onboarding ensure all investors meet legal requirements effortlessly.",
      },
      {
        title: "Automated Operations",
        description:
          "Smart contracts manage allocations, capital calls, and distributions, reducing manual work and errors.",
      },
      {
        title: "Real-Time Tracking",
        description:
          "Investors and managers have access to live portfolio dashboards and export-ready reports for complete transparency.",
      },
      {
        title: "Custom Branding",
        description:
          "You keep full control of your fund's name and identity, while we handle the complex infrastructure.",
      },
    ];
    return (a, z) => (
      A(),
      x(
        O,
        null,
        [
          e(l, {
            heading: [
              { text: "Tokenized Fund Platform:", type: "default" },
              { text: "Launch a Compliant Investment Fund", type: "accent" },
              { text: "in Weeks", type: "default" },
            ],
            description:
              "Many DAOs, angel syndicates, and accelerators have strong communities and deal flow but lack the legal, compliance, and technical infrastructure needed to run a professional investment fund. IPO Genie's Fund-as-a-Service (FaaS) solves this by offering a fully branded, ready-to-launch platform that lets any qualified group operate a compliant investment vehicle in weeks, not months, with every transaction secured on the $IPO network.",
            description2:
              "From automated KYC/AML and smart contract deployment to real-time investor dashboards and custom branding, FaaS handles every layer of fund operations so you can focus on what matters most: sourcing great deals and delivering returns.",
            breadcrumbs: [
              { name: "Home", to: "/" },
              { name: "Fund-as-a-Service" },
            ],
          }),
          e(d, {
            title: "Think of FaaS as a",
            "orange-text": "Launchpad",
            "gray-text": "but better",
            text: "Unlike traditional launchpads that mainly focus on token issuance, IPO Genie provides the entire backend infrastructure to run and manage an investment fund compliantly. It’s not just about launching; it’s about operating smoothly and transparently from day one.",
          }),
          e(r, {
            title: "How Fund-as-a-Service Works",
            highlight: "Fund-as-a-Service",
            content: `<p>Launching a tokenized investment fund through FaaS follows a streamlined three-phase process: setup, compliance, and launch. During setup, fund operators define their investment thesis, fee structure, fund size, and branding through an intuitive dashboard. No coding or legal drafting is required at this stage.</p>
    <p>The compliance phase runs automatically. FaaS handles KYC/AML verification for all incoming investors, performs accreditation checks based on jurisdiction, and generates the necessary legal documentation. Smart contracts are deployed to manage capital calls, allocation tracking, and profit distribution, all without manual intervention from the fund operator.</p>
    <p>Once compliance clears, the fund goes live with full branding, investor dashboards, and real-time reporting. Operators focus entirely on deal sourcing and portfolio management while IPO Genie's infrastructure handles the operational complexity. The entire process takes weeks rather than the 6-12 months typical of traditional fund launches. For context on why this matters for the venture industry, read our analysis of <a href='/blog/venture-capital-crossroads-civilizational-task/'>venture capital at a crossroads</a> and explore how FaaS connects to the broader <a href='/marketplace/'>Deal Builder Marketplace</a>.</p>`,
          }),
          e(r, {
            title: "Who Uses FaaS",
            highlight: "FaaS",
            content: `<p>FaaS serves any group with strong deal flow and community but limited operational infrastructure. The most common users include DAO treasuries looking to deploy capital into curated venture opportunities, angel investor syndicates that want professional-grade fund management without the overhead, and startup accelerators seeking to offer their portfolio companies a tokenized funding mechanism.</p>
    <p>Family offices are another growing segment, particularly those interested in digital assets but lacking the in-house technical team to manage blockchain-based investments. FaaS gives them institutional-grade compliance, reporting, and portfolio tracking in a turnkey package.</p>
    <p>Emerging fund managers also benefit significantly. Traditional fund formation costs anywhere from $80,000 to $200,000 in legal and compliance fees alone, creating a massive barrier to entry. FaaS delivers the same result at a fraction of the cost and in a fraction of the time, making it possible for talented investors to launch professionally managed funds without institutional backing. Explore how tokenized <a href='/index-funds/'>index funds</a> and <a href='/learn/spv/'>SPV structures</a> complement the FaaS offering for different investment strategies.</p>`,
          }),
          e(u, {
            features: o,
            "title-prefix": "Key",
            "title-highlight": "Features",
            subtitle:
              "Everything you need to launch and operate a compliant investment fund.",
          }),
          e(h, { "matters-cards": i(p) }, null, 8, ["matters-cards"]),
          e(m),
          e(w, { "faq-list": i(s) }, null, 8, ["faq-list"]),
          e(f),
          e(c, {
            slugs: [
              "venture-capital-crossroads-civilizational-task",
              "democratized-private-markets-new-retail-gatekeepers",
              "retail-access-private-deals",
            ],
          }),
        ],
        64
      )
    );
  },
};
export { D as default };
