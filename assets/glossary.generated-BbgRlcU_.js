const e = [
  {
    term: "IPO",
    slug: "ipo",
    shortDefinition:
      "An Initial Public Offering is when a private company sells shares to the public for the first time, allowing anyone to invest.",
    definition:
      "<p>An <strong>IPO (Initial Public Offering)</strong> is the process where a private company offers shares to the public for the first time. It's the moment a company transitions from private ownership to being traded on a stock exchange.</p><p><strong>Why it matters:</strong> IPOs are often seen as major milestones, but by the time a company goes public, early investors and insiders have typically captured 80-90% of the value creation. The public gets access only after the exponential growth phase.</p><p><strong>The IPO process:</strong></p><ul><li><strong>Filing:</strong> Company submits S-1 to the SEC with financials and risks</li><li><strong>Roadshow:</strong> Management pitches to institutional investors</li><li><strong>Pricing:</strong> Underwriters set the initial share price</li><li><strong>Trading:</strong> Shares begin trading on an exchange (NYSE, NASDAQ)</li></ul><p><strong>Real example:</strong> When Facebook IPO'd in 2012 at $38/share, early investors like Peter Thiel had bought in at roughly $0.005/share years earlier. By IPO day, his return was already 7,600x.</p><p>Platforms like <strong>IPO Genie</strong> aim to level this playing field by providing retail investors with curated pre-IPO access before this stage, so you are not left buying at inflated post-listing prices.</p>",
    category: "ipo-markets",
    relatedTerms: [
      "pre-ipo-investing",
      "direct-listing",
      "lock-up-period",
      "spac",
    ],
    examples: [
      {
        example:
          "Airbnb's 2020 IPO priced at $68 and opened at $146 - a 115% first-day pop that benefited institutional allocations over retail buyers.",
      },
      {
        example:
          "WeWork's failed 2019 IPO attempt showed how private valuations ($47B) can collapse when public market scrutiny arrives.",
      },
    ],
    faqs: [
      {
        question: "What is an IPO in simple terms?",
        answer:
          "An IPO is when a private company sells shares to the public for the first time. Before an IPO, only private investors (VCs, employees, accredited investors) can own shares. After, anyone with a brokerage account can buy in.",
      },
      {
        question: "How do I invest in an IPO?",
        answer:
          "Most retail investors can only buy shares once trading begins on the exchange - often at inflated prices after the initial 'pop'. To get IPO allocation at the offer price, you typically need a relationship with the underwriting bank or access through platforms like IPO Genie.",
      },
      {
        question: "Are IPOs good investments?",
        answer:
          "It depends on your entry point. Studies show that buying at IPO prices and holding long-term often underperforms the market. The real gains happen pre-IPO, which is why platforms like IPO Genie exist - to democratize access to earlier stages.",
      },
    ],
    metaTitle: "What is an IPO? Initial Public Offering Explained | IPO Genie",
    relatedBlogSlugs: [
      "5-ipo-myths-debunked",
      "ipo-vs-direct-listing",
      "presale-vs-seed-rounds-vs-pre-ipo-the-complete-comparison",
      "figma-ipo-physics-of-liquidity",
      "ipo-genie-right-to-be-early",
    ],
  },
  {
    term: "Direct Listing",
    slug: "direct-listing",
    shortDefinition:
      "An alternative to IPOs where existing shares are sold directly to the public without underwriters - no new shares, no lockups, no middlemen.",
    definition:
      "<p>A <strong>direct listing</strong> is an alternative to a traditional IPO where a company's existing shares are listed directly on an exchange without issuing new shares or using underwriters.</p><p><strong>Key differences from IPO:</strong></p><ul><li><strong>No new shares:</strong> Company doesn't raise capital; existing shareholders sell</li><li><strong>No underwriters:</strong> No investment banks setting price or guaranteeing demand</li><li><strong>No lockup:</strong> All shareholders can sell immediately on day one</li><li><strong>Price discovery:</strong> Market determines opening price, not bankers</li></ul><p><strong>Why companies choose direct listings:</strong></p><ul><li>Avoid 5-7% underwriter fees</li><li>No dilution from new shares</li><li>More democratic price discovery</li><li>Employees can sell immediately</li></ul><p><strong>Famous examples:</strong> Spotify (2018), Slack (2019), Coinbase (2021), Roblox (2021).</p><p><strong>What retail investors should know:</strong> Direct listings can be a double-edged sword for everyday investors. On the plus side, there is no insider allocation advantage since all shares hit the market at once, creating a more level playing field. However, without underwriter price stabilization, first-day volatility can be extreme. Unlike IPOs, there is no guaranteed price floor, meaning the opening trade could be significantly above or below the reference price. For retail investors comparing direct listings to traditional IPOs, the key difference is access: in a direct listing, everyone buys on the open market simultaneously, whereas IPO shares are allocated to institutional investors first.</p>",
    category: "ipo-markets",
    relatedTerms: ["ipo", "lock-up-period", "spac", "pre-ipo-investing"],
    examples: [
      {
        example:
          "Spotify's 2018 direct listing saved an estimated $300M in underwriter fees and let employees sell immediately.",
      },
      {
        example:
          "Coinbase's direct listing opened at $381 vs reference price of $250, showing volatile price discovery without banker stabilization.",
      },
    ],
    faqs: [
      {
        question: "What is a direct listing in simple terms?",
        answer:
          "A direct listing is when a company goes public by letting existing shareholders sell their shares directly on an exchange, without hiring banks to underwrite new shares. It's a simpler, cheaper way to go public.",
      },
      {
        question: "What's the difference between a direct listing and an IPO?",
        answer:
          "IPOs issue new shares through underwriters and have lock-up periods. Direct listings sell only existing shares, have no underwriters or lockups, and let the market set the opening price.",
      },
      {
        question: "Are direct listings better for investors?",
        answer:
          "Mixed. Direct listings can be more volatile without underwriter stabilization. But they're more transparent (no allocation games) and existing shareholders can sell immediately, increasing day-one liquidity.",
      },
    ],
    metaTitle:
      "What is a Direct Listing? IPO Alternative Explained | IPO Genie",
    relatedBlogSlugs: [
      "ipo-vs-direct-listing",
      "companies-that-should-have-stayed-private",
      "5-ipo-myths-debunked",
      "presale-vs-seed-rounds-vs-pre-ipo-the-complete-comparison",
      "retail-access-private-deals",
    ],
  },
  {
    term: "SPAC",
    slug: "spac",
    shortDefinition:
      "A Special Purpose Acquisition Company raises money through an IPO to acquire a private company - a backdoor to going public without a traditional IPO.",
    definition:
      "<p>A <strong>SPAC (Special Purpose Acquisition Company)</strong> is a shell company that raises money through an IPO with the sole purpose of acquiring a private company, effectively taking it public without a traditional IPO process.</p><p><strong>How SPACs work:</strong></p><ul><li><strong>Formation:</strong> Sponsors create a blank-check company with no operations</li><li><strong>IPO:</strong> SPAC raises capital from public investors (typically at $10/share)</li><li><strong>Search:</strong> SPAC has 18-24 months to find and merge with a target</li><li><strong>Merger:</strong> Private company merges with SPAC and becomes public</li><li><strong>Redemption:</strong> If you don't like the target, you can redeem shares for ~$10</li></ul><p><strong>Why companies use SPACs:</strong> Faster than traditional IPO (3-4 months vs 12-18), more pricing certainty, and ability to share forward projections.</p><p><strong>Risks:</strong> Sponsor dilution, poor target selection, and historically weak post-merger performance.</p><p><strong>Lessons from the SPAC boom:</strong> The 2021 SPAC frenzy saw hundreds of blank-check companies flood the market, many merging with unprofitable targets at inflated valuations. By 2023, SPAC activity had dropped over 90% as regulators tightened rules and investors grew skeptical. The key takeaway: SPACs can offer legitimate paths to public markets, but investors must scrutinize sponsor incentives, target quality, and dilution before committing capital.</p>",
    category: "ipo-markets",
    relatedTerms: ["ipo", "direct-listing", "pre-ipo-investing", "valuation"],
    examples: [
      {
        example:
          "DraftKings went public via SPAC in 2020, reaching a $20B+ valuation faster than a traditional IPO would allow.",
      },
      {
        example:
          "The 2021 SPAC boom saw 613 SPAC IPOs raising $162B. By 2022, most traded below $10 as the bubble deflated.",
      },
    ],
    faqs: [
      {
        question: "What is a SPAC in simple terms?",
        answer:
          "A SPAC is a company with no business operations that goes public to raise money, then uses that money to buy a private company. It's a shortcut for private companies to become publicly traded.",
      },
      {
        question: "Are SPACs good investments?",
        answer:
          "SPACs have a mixed track record. Many trade below their $10 IPO price after merging. The best opportunity is often buying the SPAC pre-merger at $10, getting downside protection while waiting for an attractive target.",
      },
      {
        question: "What's the difference between a SPAC and IPO?",
        answer:
          "In an IPO, the company itself goes public. In a SPAC, a shell company goes public first, then merges with the private company. SPACs are faster but involve more dilution from sponsor shares.",
      },
    ],
    metaTitle:
      "What is a SPAC? Special Purpose Acquisition Companies | IPO Genie",
    relatedBlogSlugs: [
      "spacex-early-investors-100x-whats-next",
      "5-ipo-myths-debunked",
      "ipo-vs-direct-listing",
      "companies-that-should-have-stayed-private",
      "presale-vs-seed-rounds-vs-pre-ipo-the-complete-comparison",
    ],
  },
  {
    term: "Lock-up Period",
    slug: "lock-up-period",
    shortDefinition:
      "The time after an IPO when insiders can't sell their shares - usually 90-180 days. When it ends, watch out for selling pressure.",
    definition:
      "<p>A <strong>lock-up period</strong> is a contractual restriction that prevents company insiders (founders, employees, early investors) from selling their shares for a set time after an IPO - typically 90 to 180 days.</p><p><strong>Why it matters:</strong> Lock-up expirations are predictable selling events. When the lock-up ends, a flood of shares can hit the market, often causing price drops of 10-30%.</p><p><strong>Who's locked up:</strong></p><ul><li>Company executives and founders</li><li>Employees with equity compensation</li><li>Pre-IPO investors (VCs, private equity)</li><li>Board members</li></ul><p><strong>Trading strategy:</strong> Some investors avoid buying immediately before lock-up expiration, or even short the stock in anticipation of selling pressure.</p><p><strong>Why lock-ups exist and what happens when they expire:</strong> Lock-up periods protect public investors by preventing insiders from dumping shares right after an IPO, which would tank the price. They give the market time to establish fair value based on fundamentals rather than insider selling pressure. When lock-ups expire, the sudden increase in tradable shares often creates significant downward pressure, especially if the stock is trading below expectations or insiders are eager to liquidate. However, if insiders remain confident in the company's trajectory, they may hold through expiration and the stock can actually rally as the overhang fear dissipates.</p>",
    category: "ipo-markets",
    relatedTerms: ["ipo", "vesting", "cliff-period", "pre-ipo-investing"],
    examples: [
      {
        example:
          "Facebook's stock dropped 50% from its IPO price partly due to massive lock-up expirations releasing billions of shares.",
      },
      {
        example:
          "Uber's lock-up expiration in November 2019 released 1.7 billion shares, contributing to further price decline.",
      },
    ],
    faqs: [
      {
        question: "What is a lock-up period in simple terms?",
        answer:
          "A lock-up period is when company insiders (employees, founders, early investors) aren't allowed to sell their shares after an IPO. It usually lasts 90-180 days and prevents immediate dumping.",
      },
      {
        question: "What happens when the lock-up period ends?",
        answer:
          "Insiders can finally sell their shares. This often creates selling pressure, causing the stock price to drop. The effect varies - some stocks drop 10-30%, others barely move if insiders stay bullish.",
      },
      {
        question: "Should I avoid buying before lock-up expiration?",
        answer:
          "It's a risk to consider. While not all stocks drop at lock-up expiration, the increased supply often creates downward pressure. Some investors wait until after expiration to buy at potentially lower prices.",
      },
    ],
    metaTitle: "What is a Lock-up Period? IPO Lock-ups Explained | IPO Genie",
    relatedBlogSlugs: [
      "disagreement-predicts-startup-success",
      "how-to-calculate-startup-valuations",
      "ipo-vs-direct-listing",
      "companies-that-should-have-stayed-private",
      "5-ipo-myths-debunked",
    ],
  },
  {
    term: "Unicorn Startup",
    slug: "unicorn-startup",
    shortDefinition:
      "A privately held startup valued at $1 billion or more - once rare, now there are 1,200+ globally, but most retail investors can't access them.",
    definition:
      "<p>A <strong>unicorn</strong> is a privately held startup company valued at $1 billion or more. The term was coined in 2013 when such valuations were rare - now there are over 1,200 unicorns globally.</p><p><strong>Why it matters:</strong> Unicorns represent some of the fastest-growing companies in the world. By the time they IPO, much of the value creation has already occurred. Early access to unicorns is where generational wealth is built.</p><p><strong>Unicorn tiers:</strong></p><ul><li><strong>Unicorn:</strong> $1B+ valuation</li><li><strong>Decacorn:</strong> $10B+ valuation (Stripe, SpaceX, Databricks)</li><li><strong>Hectocorn:</strong> $100B+ valuation (ByteDance, SpaceX)</li></ul><p><strong>Notable unicorns:</strong> SpaceX ($180B), Stripe ($50B), Databricks ($43B), Canva ($26B), Discord ($15B).</p><p><strong>Access:</strong> Traditionally limited to VCs and accredited investors, but platforms are democratizing access to unicorn shares.</p><p><strong>The access challenge:</strong> With over 1,200 unicorns worldwide, there is no shortage of billion-dollar private companies. The problem is that the vast majority of retail investors have no way to buy in before an IPO. Secondary markets exist but often require accredited status and six-figure minimums. This access gap means ordinary investors miss the highest-growth phase entirely, entering only after these companies go public at mature valuations.</p>",
    category: "ipo-markets",
    relatedTerms: [
      "pre-ipo-investing",
      "valuation",
      "secondary-markets",
      "accredited-investor",
    ],
    examples: [
      {
        example:
          "SpaceX became a unicorn in 2012 at $1.2B. It's now valued at $180B+ - early investors saw 150x returns before any IPO.",
      },
      {
        example:
          "Canva reached unicorn status in 2018 at $1B. By 2021, it was valued at $40B - employees and early investors captured the entire journey.",
      },
    ],
    faqs: [
      {
        question: "What is a unicorn startup?",
        answer:
          "A unicorn is a private company valued at $1 billion or more. The term reflects how rare these companies once were. Examples include SpaceX, Stripe, and Databricks.",
      },
      {
        question: "How do I invest in unicorn startups?",
        answer:
          "Options include: secondary market platforms (Forge, EquityZen), SPVs that pool investor capital, or platforms like IPO Genie that provide curated access. Most require accredited investor status.",
      },
      {
        question: "Are unicorns good investments?",
        answer:
          "Unicorns have generated massive returns for early investors, but they also carry significant risk. Many fail or see down rounds. Diversification across multiple unicorns reduces single-company risk while capturing asset class returns.",
      },
    ],
    metaTitle:
      "What is a Unicorn Startup? Billion-Dollar Companies | IPO Genie",
    relatedBlogSlugs: [
      "how-to-calculate-startup-valuations",
      "figma-ipo-physics-of-liquidity",
      "openai-anthropic-ai-pre-ipo-opportunity",
      "spacex-early-investors-100x-whats-next",
      "how-to-build-pre-ipo-portfolio",
    ],
  },
  {
    term: "Cap Table",
    slug: "cap-table",
    shortDefinition:
      "A spreadsheet showing who owns what percentage of a company - the document that reveals how much your shares might really be worth.",
    definition:
      "<p>A <strong>cap table (capitalization table)</strong> is a document that shows the complete ownership structure of a company - who owns shares, what type, and how much of the total equity they represent.</p><p><strong>Why it matters:</strong> The cap table determines how IPO proceeds or acquisition payouts are distributed. Understanding it reveals whether your shares are actually valuable or buried under layers of preferred stock.</p><p><strong>What's on a cap table:</strong></p><ul><li><strong>Founders:</strong> Original equity split</li><li><strong>Investors:</strong> VCs, angels, by funding round (Series A, B, C)</li><li><strong>Employee pool:</strong> Stock options reserved for employees</li><li><strong>Share classes:</strong> Common vs preferred, with different rights</li><li><strong>Convertible instruments:</strong> SAFEs, convertible notes</li></ul><p><strong>Key insight:</strong> Preferred shareholders get paid first in a sale. If a company sells for less than total invested, common shareholders (including employees) may get nothing.</p><p>Cap tables grow increasingly complex with each funding round as new share classes, option pools, and convertible instruments are added. For pre-IPO investors, understanding the cap table is essential because it reveals your true ownership percentage after dilution and your position in the payout waterfall relative to preferred shareholders.</p>",
    category: "ipo-markets",
    relatedTerms: [
      "equity-dilution",
      "valuation",
      "pre-ipo-investing",
      "vesting",
    ],
    examples: [
      {
        example:
          "A startup raises $10M at $40M post-money. VCs own 25%, founders own 50%, employee pool is 15%, early angels have 10%.",
      },
      {
        example:
          "After 5 funding rounds, early employees who owned 2% might be diluted to 0.5% - still valuable if the company succeeds, but cap table math matters.",
      },
    ],
    faqs: [
      {
        question: "What is a cap table in simple terms?",
        answer:
          "A cap table is a spreadsheet showing everyone who owns shares in a company and their ownership percentages. It's updated after every funding round, option grant, or equity transaction.",
      },
      {
        question: "Why should I care about a company's cap table?",
        answer:
          "The cap table determines your actual ownership and payout priority. Heavy investor ownership with liquidation preferences can mean common shareholders get little in a modest exit.",
      },
      {
        question: "How do I see a company's cap table?",
        answer:
          "Cap tables are private information. As an investor, you can request it during due diligence. Platforms like Carta help companies manage and share cap tables with stakeholders.",
      },
    ],
    metaTitle:
      "What is a Cap Table? Capitalization Tables Explained | IPO Genie",
    relatedBlogSlugs: [
      "venture-capital-crossroads-civilizational-task",
      "figma-ipo-physics-of-liquidity",
      "inside-ai-scoring-model-high-potential-deals",
      "the-alchemy-of-10x-stocks-what-464-outliers-reveal-about-market-beating-returns",
      "disagreement-predicts-startup-success",
    ],
  },
  {
    term: "Private Placement",
    slug: "private-placement",
    shortDefinition:
      "A direct sale of securities to select investors without a public offering - how companies raise capital without the hassle of going public.",
    definition:
      "<p>A <strong>private placement</strong> is the sale of securities directly to a select group of investors rather than through a public offering. It's how most startups and private companies raise capital.</p><p><strong>Why companies use private placements:</strong></p><ul><li><strong>Speed:</strong> Faster than IPO process (weeks vs months)</li><li><strong>Cost:</strong> Lower fees, no underwriters required</li><li><strong>Privacy:</strong> No public disclosure of financials</li><li><strong>Flexibility:</strong> Negotiate terms directly with investors</li></ul><p><strong>Regulations:</strong> Private placements are exempt from SEC registration under Regulation D, but typically limited to accredited investors. Common exemptions: 506(b), 506(c).</p><p><strong>Types:</strong> Equity (shares), debt (notes), or hybrid (convertible notes, SAFEs).</p><p><strong>Who participates and what is changing:</strong> Private placements have traditionally been reserved for institutional investors, venture capital firms, family offices, and high-net-worth accredited individuals, with minimum investment thresholds typically starting at $100,000 or more. However, the landscape is shifting. Crypto and blockchain-based tokenization are opening private placements to a broader audience by fractionalizing ownership into smaller units, lowering minimums to as little as a few hundred dollars, and enabling global participation. This evolution is making what was once an exclusive corner of finance increasingly accessible to retail investors.</p>",
    category: "ipo-markets",
    relatedTerms: [
      "accredited-investor",
      "pre-ipo-investing",
      "spv",
      "valuation",
    ],
    examples: [
      {
        example:
          "SpaceX regularly raises billions through private placements - its 2024 round raised $750M at a $180B valuation from select institutional investors.",
      },
      {
        example:
          "A Series B might be a private placement of preferred stock to 3-4 VC firms, raising $50M at a $200M valuation.",
      },
    ],
    faqs: [
      {
        question: "What is a private placement?",
        answer:
          "A private placement is when a company sells securities directly to chosen investors instead of the general public. It's faster and cheaper than an IPO, but usually restricted to accredited investors.",
      },
      {
        question: "How do I participate in private placements?",
        answer:
          "You typically need to be an accredited investor and have access through VC networks, angel groups, or platforms that aggregate private placement opportunities.",
      },
      {
        question: "Are private placements risky?",
        answer:
          "Yes - less regulatory oversight means less transparency. Due diligence is crucial. However, private placements also offer access to high-growth companies before they go public.",
      },
    ],
    metaTitle: "What is a Private Placement? Securities Explained | IPO Genie",
    relatedBlogSlugs: [
      "democratized-private-markets-new-retail-gatekeepers",
      "retail-access-private-deals",
      "stripe-valuation-lessons-private-investors",
      "companies-that-should-have-stayed-private",
      "venture-capital-crossroads-civilizational-task",
    ],
  },
  {
    term: "Pre-IPO Investing",
    slug: "pre-ipo-investing",
    shortDefinition:
      "Buying shares in private companies before they go public - the strategy that made early investors in Uber, Airbnb, and SpaceX millionaires.",
    definition:
      "<p><strong>Pre-IPO investing</strong> means purchasing equity in a private company before its Initial Public Offering. This is historically how venture capitalists, accredited investors, and company insiders captured the majority of value creation.</p><p><strong>Why it matters:</strong> When Facebook IPO'd at $38/share, early investors had paid cents. By the time retail could buy, 99% of the gains were already locked in. Pre-IPO access lets you sit at the same table as institutional money.</p><p><strong>How it works:</strong></p><ul><li><strong>Private placements:</strong> Direct investment in funding rounds (Series A, B, C, etc.)</li><li><strong>Secondary markets:</strong> Buying existing shares from employees or early investors</li><li><strong>SPVs:</strong> Pooled vehicles that aggregate smaller investors to meet minimums</li><li><strong>Platforms:</strong> Services like IPO Genie that democratize access</li></ul><p><strong>Real example:</strong> SpaceX has been valued at $180B+ but isn't public. Pre-IPO investors can own shares now and potentially see significant returns when it eventually lists.</p><p>Platforms like <strong>IPO Genie</strong> are democratizing pre-IPO access through tokenization, allowing everyday investors to participate in opportunities that were previously reserved for venture capitalists and institutions.</p>",
    category: "investing",
    relatedTerms: ["ipo", "accredited-investor", "secondary-markets", "spv"],
    examples: [
      {
        example:
          "Early Uber investors who bought at the Series A ($4M valuation) saw 20,000x returns by IPO ($82B valuation).",
      },
      {
        example:
          "Stripe employees who received equity grants at $20B valuation could see 3-5x returns if the company IPOs at $60-100B.",
      },
    ],
    faqs: [
      {
        question: "What is pre-IPO investing in simple terms?",
        answer:
          "Pre-IPO investing means buying shares of a private company before it lists on the stock market. You're getting in before the general public can buy, typically at lower prices but with higher risk and less liquidity.",
      },
      {
        question: "How much money do I need to start pre-IPO investing?",
        answer:
          "Traditionally $25,000-$100,000+ due to accreditation requirements. However, new platforms are lowering minimums to $500-$1,000 through fractional shares and SPV structures.",
      },
      {
        question: "Is pre-IPO investing risky?",
        answer:
          "Yes - companies can fail, IPOs can be delayed or cancelled, and your money may be locked up for years. However, diversification across multiple pre-IPO opportunities can reduce individual company risk while capturing the asset class returns.",
      },
    ],
    metaTitle: "What is Pre-IPO Investing? Complete Guide | IPO Genie",
    relatedBlogSlugs: [
      "pre-ipo-investing-beginners-guide",
      "pre-ipo-vs-ipo-investing",
      "staking-vs-pre-ipo-investing",
      "presale-vs-seed-rounds-vs-pre-ipo-the-complete-comparison",
      "why-crypto-portfolio-needs-pre-ipo-exposure",
    ],
  },
  {
    term: "Accredited Investor",
    slug: "accredited-investor",
    shortDefinition:
      "A wealthy individual or institution that meets SEC criteria to invest in unregistered securities - the traditional gatekeeper to pre-IPO deals.",
    definition:
      "<p>An <strong>accredited investor</strong> is someone who meets specific financial criteria set by the SEC, qualifying them to invest in private securities that aren't registered with regulators. It's historically been the gatekeeper to pre-IPO opportunities.</p><p><strong>SEC criteria (as of 2024):</strong></p><ul><li><strong>Income:</strong> $200K+ individual or $300K+ joint income for past 2 years</li><li><strong>Net worth:</strong> $1M+ excluding primary residence</li><li><strong>Professional:</strong> Series 7, 65, or 82 license holders</li><li><strong>Knowledgeable employees:</strong> Of private funds</li><li><strong>Entities:</strong> $5M+ in assets, or all equity owners are accredited</li></ul><p><strong>Why it exists:</strong> The SEC argues that wealthy/sophisticated investors can better bear the risks of unregistered securities. Critics argue it perpetuates wealth inequality by excluding everyone else from the highest-returning investments.</p><p><strong>The debate over access:</strong> The accredited investor threshold has not been adjusted for inflation since 1982, meaning it is both outdated and increasingly exclusionary. There is growing bipartisan support in Congress to broaden access by adding financial literacy tests or education-based qualifications. Meanwhile, blockchain-based platforms and tokenized investment vehicles are creating alternative pathways that may eventually make the accredited distinction less relevant for certain asset classes.</p>",
    category: "investing",
    relatedTerms: [
      "pre-ipo-investing",
      "spv",
      "secondary-markets",
      "private-placement",
    ],
    examples: [
      {
        example:
          "A software engineer earning $250K with $1.2M net worth qualifies as accredited and can invest in pre-IPO rounds directly.",
      },
      {
        example:
          "New in 2020: SEC added 'knowledgeable employees' and certain license holders, expanding access beyond just wealth.",
      },
    ],
    faqs: [
      {
        question: "What is an accredited investor in simple terms?",
        answer:
          "An accredited investor is someone the SEC deems wealthy or sophisticated enough to invest in risky private securities. You need $200K+ income, $1M+ net worth, or certain professional credentials to qualify.",
      },
      {
        question: "How do I become an accredited investor?",
        answer:
          "You qualify by meeting income thresholds ($200K individual/$300K joint for 2 years), net worth ($1M+ excluding home), or holding certain financial licenses (Series 7, 65, 82). There's no application - you self-certify.",
      },
      {
        question: "Can non-accredited investors access pre-IPO deals?",
        answer:
          "Traditionally no, but this is changing. Regulation CF allows non-accredited investors to invest up to certain limits in crowdfunding. Platforms are also working to democratize access through compliant structures.",
      },
    ],
    metaTitle: "What is an Accredited Investor? Requirements | IPO Genie",
    relatedBlogSlugs: [
      "retail-access-private-deals",
      "democratized-private-markets-new-retail-gatekeepers",
      "pre-ipo-playbook-smart-money-builds-wealth",
      "openai-anthropic-ai-pre-ipo-opportunity",
      "smart-money-rotating-this-asset-class",
    ],
  },
  {
    term: "Valuation",
    slug: "valuation",
    shortDefinition:
      "What a company is worth on paper - the number that determines whether you're getting a deal or getting fleeced.",
    definition:
      "<p><strong>Valuation</strong> is the process of determining a company's worth. It's the number that sets your entry price and ultimately determines your returns.</p><p><strong>Why it matters:</strong> Even the best company is a bad investment at the wrong valuation. Instagram was bought for $1B (seemed expensive then) and is now worth $100B+. WeWork was valued at $47B and went nearly bankrupt. Entry price matters.</p><p><strong>Common valuation methods:</strong></p><ul><li><strong>Revenue multiple:</strong> Value = Revenue × Industry multiple (e.g., 10x for SaaS)</li><li><strong>DCF:</strong> Discounted cash flow - project future earnings, discount to present</li><li><strong>Comparable companies:</strong> Value based on similar public companies</li><li><strong>Last round pricing:</strong> Private company valued at last funding round price</li></ul><p><strong>Key metrics:</strong> Market cap, fully diluted valuation (FDV), enterprise value (EV), price-to-earnings (P/E), price-to-sales (P/S).</p><p><strong>Private vs public valuations:</strong> Private valuations are set infrequently during funding rounds and can become stale between events, while public markets reprice companies every second. This disconnect means pre-IPO valuations can represent both opportunity and risk. You might buy at a private valuation that looks cheap compared to public peers, or you could overpay based on an inflated last round that the public market refuses to honor at listing.</p>",
    category: "investing",
    relatedTerms: ["ipo", "pre-ipo-investing", "cap-table", "equity-dilution"],
    examples: [
      {
        example:
          "Stripe's last private valuation was $95B in 2021. In 2023, it cut to $50B. Entry point matters - 2021 investors are underwater.",
      },
      {
        example:
          "Figma was valued at $10B in 2021, almost acquired for $20B, and later valued around $12B. Knowing these ranges helps assess opportunity.",
      },
    ],
    faqs: [
      {
        question: "What is valuation in simple terms?",
        answer:
          "Valuation is what a company is worth. For public companies, it's market cap (share price × shares). For private companies, it's based on the last funding round or comparable company analysis.",
      },
      {
        question: "How do you value a pre-IPO company?",
        answer:
          "Common methods: 1) Revenue multiple (10-20x for high-growth SaaS), 2) Comparable public companies, 3) Last funding round price, 4) DCF for profitable companies.",
      },
      {
        question: "Is a high valuation good or bad?",
        answer:
          "It depends on growth and entry point. A $50B company growing 100% yearly may be cheap. A $5B company growing 10% may be expensive. Compare valuation to growth rate, margins, and market size.",
      },
    ],
    metaTitle: "What is Company Valuation? Methods Explained | IPO Genie",
    relatedBlogSlugs: [
      "stripe-valuation-lessons-private-investors",
      "how-to-calculate-startup-valuations",
      "figma-ipo-physics-of-liquidity",
      "inside-ai-scoring-model-high-potential-deals",
      "the-alchemy-of-10x-stocks-what-464-outliers-reveal-about-market-beating-returns",
    ],
  },
  {
    term: "Due Diligence",
    slug: "due-diligence",
    shortDefinition:
      "The research process before investing - examining financials, team, market, and risks to avoid putting money into a disaster.",
    definition:
      "<p><strong>Due diligence</strong> is the comprehensive investigation of an investment opportunity before committing capital. It's the difference between informed investing and gambling.</p><p><strong>Key areas of due diligence:</strong></p><ul><li><strong>Financial:</strong> Revenue, burn rate, margins, runway, projections</li><li><strong>Legal:</strong> Corporate structure, IP ownership, pending litigation</li><li><strong>Team:</strong> Founders' track record, key hires, equity distribution</li><li><strong>Market:</strong> TAM (total addressable market), competition, moat</li><li><strong>Product:</strong> Technology, traction, customer feedback</li><li><strong>Deal terms:</strong> Valuation, preferences, pro-rata rights</li></ul><p><strong>For crypto/presales:</strong> Add tokenomics review, smart contract audits, team doxxing, and community analysis.</p><p><strong>Time investment:</strong> Institutional investors spend 100+ hours on due diligence. Retail investors should spend at minimum 10-20 hours per significant investment.</p><p><strong>Due diligence for retail crypto investors:</strong> Start by verifying the team — are founders publicly identified (doxxed) with verifiable LinkedIn profiles and relevant experience? Next, review the tokenomics: examine the allocation breakdown, vesting schedules, and whether insiders hold a disproportionate share. Check whether the smart contracts have been audited by reputable firms such as CertiK, Hacken, or OpenZeppelin, and read the audit reports for critical findings. Evaluate the community by gauging organic activity on Discord, Telegram, and Twitter — bot-filled channels with no real discussion are a warning sign. Finally, look for a working product or at least a testnet demo, review the GitHub repository for consistent development activity, and assess whether the roadmap milestones are realistic and being met on schedule.</p>",
    category: "investing",
    relatedTerms: ["valuation", "pre-ipo-investing", "cap-table", "tokenomics"],
    examples: [
      {
        example:
          "Theranos passed surface-level due diligence (famous founder, big partnerships) but deeper investigation would have revealed no working product.",
      },
      {
        example:
          "Proper due diligence on FTX would have uncovered the commingling of customer funds and Alameda ties before the collapse.",
      },
    ],
    faqs: [
      {
        question: "What is due diligence?",
        answer:
          "Due diligence is the research and analysis you do before investing. It means examining financials, team, market opportunity, risks, and deal terms to make an informed decision.",
      },
      {
        question: "How do I do due diligence on a crypto project?",
        answer:
          "Check: 1) Team backgrounds and doxxing, 2) Smart contract audits, 3) Tokenomics and vesting, 4) Community activity, 5) GitHub commits, 6) Investor backing, 7) Roadmap execution.",
      },
      {
        question: "How long should due diligence take?",
        answer:
          "For significant investments: 10-20+ hours minimum. Review all available documents, research the team, understand the market, and ideally talk to customers or users of the product.",
      },
    ],
    metaTitle: "What is Due Diligence? Investment Research | IPO Genie",
    relatedBlogSlugs: [
      "inside-ai-scoring-model-high-potential-deals",
      "the-alchemy-of-10x-stocks-what-464-outliers-reveal-about-market-beating-returns",
      "disagreement-predicts-startup-success",
      "what-makes-the-ipo-genie-presale-different-from-others",
      "5-reasons-to-join-the-ipo-genie-presale-before-it-sells-out",
    ],
  },
  {
    term: "Equity Dilution",
    slug: "equity-dilution",
    shortDefinition:
      "When new shares are issued and your ownership percentage shrinks - the silent wealth transfer from early shareholders to new investors.",
    definition:
      "<p><strong>Equity dilution</strong> occurs when a company issues new shares, reducing existing shareholders' ownership percentage. It's inevitable in growing companies but understanding it is crucial for calculating real returns.</p><p><strong>How dilution works:</strong></p><ul><li>You own 1% of a company with 10M shares (100K shares)</li><li>Company issues 5M new shares in a funding round</li><li>You still own 100K shares but now that's 0.67% of 15M total</li><li>Your ownership dropped 33% even though share count stayed the same</li></ul><p><strong>When dilution occurs:</strong></p><ul><li><strong>Funding rounds:</strong> Each Series A, B, C dilutes earlier shareholders</li><li><strong>Employee stock options:</strong> New grants increase total share count</li><li><strong>Convertible notes:</strong> When they convert to equity</li><li><strong>Acquisitions:</strong> Stock-based purchases issue new shares</li></ul><p><strong>Dilution isn't always bad:</strong> If new capital increases company value more than it dilutes ownership, you can own a smaller percentage of something worth much more.</p><p><strong>Dilution in crypto vs traditional equity:</strong> In traditional markets, dilution happens through formal board-approved share issuances, but in crypto the equivalent occurs through token minting — where a project's smart contract creates new tokens, often with fewer governance checks. Some protocols allow unlimited minting by the team or a multisig wallet, making it essential for investors to verify whether a token contract has a hard-capped supply or if minting functions remain accessible to insiders.</p>",
    category: "investing",
    relatedTerms: ["cap-table", "valuation", "vesting", "pre-ipo-investing"],
    examples: [
      {
        example:
          "After 5 funding rounds, a founder who started with 50% might own 15% - but 15% of a $10B company beats 50% of a $10M company.",
      },
      {
        example:
          "Early Instagram employees were diluted from 0.5% to 0.1% ownership, but that 0.1% was worth $10M+ at the Facebook acquisition.",
      },
    ],
    faqs: [
      {
        question: "What is equity dilution?",
        answer:
          "Dilution is when new shares are created, reducing your ownership percentage. If you own 10% and the company doubles its share count, you now own 5%.",
      },
      {
        question: "Is dilution bad for investors?",
        answer:
          "Not necessarily. If dilution comes from a funding round that increases company value, you can own less of something worth more. The key is whether value creation outpaces dilution.",
      },
      {
        question: "How do I protect against dilution?",
        answer:
          "Negotiate anti-dilution provisions, pro-rata rights (right to invest in future rounds), or invest in later-stage companies with less funding ahead. But some dilution is unavoidable in growing companies.",
      },
    ],
    metaTitle: "What is Equity Dilution? Share Dilution Explained | IPO Genie",
    relatedBlogSlugs: [
      "figma-ipo-physics-of-liquidity",
      "inside-ai-scoring-model-high-potential-deals",
      "the-alchemy-of-10x-stocks-what-464-outliers-reveal-about-market-beating-returns",
      "disagreement-predicts-startup-success",
      "pre-ipo-investing-beginners-guide",
    ],
  },
  {
    term: "Secondary Markets",
    slug: "secondary-markets",
    shortDefinition:
      "Platforms where you can buy and sell pre-IPO shares from existing shareholders - your liquidity lifeline before a company goes public.",
    definition:
      "<p><strong>Secondary markets</strong> are platforms where existing shares of private companies can be traded between investors. Unlike primary markets (where companies issue new shares), secondary markets trade existing shares between buyers and sellers.</p><p><strong>Why it matters:</strong> Without secondary markets, pre-IPO investments are completely illiquid. You'd have to wait years for an IPO or acquisition to get your money out. Secondary markets provide an exit before those events.</p><p><strong>How it works:</strong></p><ul><li><strong>Sellers:</strong> Employees, early investors who want liquidity before IPO</li><li><strong>Buyers:</strong> Investors seeking pre-IPO exposure</li><li><strong>Platforms:</strong> Forge, EquityZen, Carta, SharesPost facilitate trades</li><li><strong>Pricing:</strong> Based on last funding round, supply/demand, and market conditions</li></ul><p><strong>Considerations:</strong> Higher minimums ($10K-$50K+), ROFR (right of first refusal) restrictions, and company approval may be required.</p><p><strong>Growth of secondary markets:</strong> The secondary market for private company shares has expanded rapidly, growing from under $10 billion in annual volume a decade ago to well over $100 billion today. Platforms such as Forge Global, EquityZen, and Linqto have lowered barriers by offering fractional access, streamlined compliance, and digital settlement. For pre-IPO investors, secondary markets are essential because they provide a liquidity option during what would otherwise be a multi-year lock-up. They also enable price discovery for private companies, giving buyers and sellers real-time market signals rather than relying solely on stale funding round valuations.</p>",
    category: "investing",
    relatedTerms: ["pre-ipo-investing", "spv", "accredited-investor"],
    examples: [
      {
        example:
          "SpaceX employees regularly sell shares on secondary markets at $80-95/share, giving investors pre-IPO access to a $180B company.",
      },
      {
        example:
          "During the 2022 downturn, Stripe secondary shares traded at 50% discounts to the last funding round, offering opportunistic entry points.",
      },
    ],
    faqs: [
      {
        question: "What is a secondary market?",
        answer:
          "A secondary market is where existing shares trade between investors (not with the company). For private companies, this means buying shares from employees or early investors before the IPO.",
      },
      {
        question: "How do I buy shares on secondary markets?",
        answer:
          "Use platforms like Forge, EquityZen, or Carta. You'll typically need to be an accredited investor, meet minimum investment requirements ($10K-$50K+), and the company may need to approve the transfer.",
      },
      {
        question: "Are secondary market prices accurate?",
        answer:
          "They reflect supply and demand, which can differ significantly from company valuations. In bear markets, secondaries trade at discounts. In bull markets, at premiums.",
      },
    ],
    metaTitle: "What are Secondary Markets? Pre-IPO Trading | IPO Genie",
    relatedBlogSlugs: [
      "retail-access-private-deals",
      "figma-ipo-physics-of-liquidity",
      "pre-ipo-investing-beginners-guide",
      "pre-ipo-vs-ipo-investing",
      "why-crypto-portfolio-needs-pre-ipo-exposure",
    ],
  },
  {
    term: "SPV",
    slug: "spv",
    shortDefinition:
      "A Special Purpose Vehicle pools money from multiple investors to meet minimums for pre-IPO deals - your ticket to the table when you can't buy a whole seat.",
    definition:
      "<p>A <strong>Special Purpose Vehicle (SPV)</strong> is a legal entity created for a single investment purpose. In pre-IPO investing, SPVs pool capital from multiple investors to meet minimum investment requirements that individuals couldn't meet alone.</p><p><strong>Why it matters:</strong> Many pre-IPO opportunities have $100K-$1M minimums. SPVs let you invest $5K-$25K alongside others, democratizing access to deals previously reserved for institutions.</p><p><strong>How it works:</strong></p><ul><li><strong>Formation:</strong> Organizer creates LLC or LP structure</li><li><strong>Pooling:</strong> Multiple investors contribute capital</li><li><strong>Investment:</strong> SPV invests in target company as single entity</li><li><strong>Returns:</strong> Profits distributed proportionally minus fees</li></ul><p><strong>Fees:</strong> Typically 0-2% management fee + 10-20% carry (share of profits). Always understand the fee structure before investing.</p><p><strong>SPVs in practice:</strong> An SPV organizer — often an angel investor, syndicate lead, or investment platform — identifies a deal, negotiates terms, and then opens the vehicle for other investors to participate. Capital is pooled into the SPV's bank account, and the entity makes a single investment on behalf of all participants. Fee structures vary: some charge only carry (a percentage of profits, typically 20%), while others layer on setup fees and annual management fees that can erode returns on smaller allocations. Increasingly, tokenized SPVs are emerging on blockchain platforms, representing fractional ownership via digital tokens. These tokenized structures offer faster settlement, global investor access, and programmable distribution of returns through smart contracts, bridging traditional private equity structures with decentralized finance.</p>",
    category: "investing",
    relatedTerms: [
      "pre-ipo-investing",
      "accredited-investor",
      "secondary-markets",
      "private-placement",
    ],
    examples: [
      {
        example:
          "An SPV raises $500K from 20 investors ($25K each) to participate in a SpaceX secondary round with a $250K minimum.",
      },
      {
        example:
          "AngelList pioneered SPV structures, enabling smaller investors to co-invest alongside prominent angels in startup deals.",
      },
    ],
    faqs: [
      {
        question: "What is an SPV in simple terms?",
        answer:
          "An SPV is a pooled investment vehicle where multiple investors combine money to invest in a single opportunity. Think of it like a group buy - together you can access deals with high minimums.",
      },
      {
        question: "How do SPV fees work?",
        answer:
          "Common structure: 0-2% annual management fee + 10-20% carry (% of profits). On a $25K investment with 20% carry, if it 4x's to $100K, you'd pay ~$15K in carry.",
      },
      {
        question: "Are SPVs safe?",
        answer:
          "SPVs add risk (organizer quality, fee structures, legal complexity) on top of the underlying investment risk. Use reputable platforms and read all documents carefully.",
      },
    ],
    metaTitle: "What is an SPV? Special Purpose Vehicles | IPO Genie",
    relatedBlogSlugs: [
      "venture-capital-crossroads-civilizational-task",
      "pre-ipo-playbook-smart-money-builds-wealth",
      "ipo-genie-vs-angellist",
      "presale-vs-seed-rounds-vs-pre-ipo-the-complete-comparison",
      "retail-access-private-deals",
    ],
  },
  {
    term: "Tokenomics",
    slug: "tokenomics",
    shortDefinition:
      "The economic design of a cryptocurrency - how tokens are created, distributed, and what makes them valuable (or worthless).",
    definition: `<p><strong>Tokenomics</strong> is the study of how a cryptocurrency's economic model works. Think of it as the "business model" for a token - it determines supply, demand, and ultimately whether your investment goes up or down.</p><p><strong>Why it matters:</strong> Bad tokenomics is the #1 reason presales fail. A project can have great tech and a strong team, but if 80% of tokens go to insiders with no vesting, you're exit liquidity.</p><p><strong>Key components:</strong></p><ul><li><strong>Total supply:</strong> How many tokens will ever exist (fixed vs inflationary)</li><li><strong>Distribution:</strong> Who gets tokens and when (team, investors, community)</li><li><strong>Vesting:</strong> Lock-up periods preventing immediate dumps</li><li><strong>Utility:</strong> What the token actually does (governance, fees, staking)</li><li><strong>Burn mechanisms:</strong> How supply decreases over time</li></ul><p><strong>Red flags:</strong> No vesting, high insider allocation (>30%), unlimited supply, vague utility claims.</p><p><strong>Evaluating tokenomics:</strong> Before investing in any crypto project, tokenomics should be the first section of the whitepaper you study. Look for clear documentation of the emission schedule, unlock timelines, and what percentage of supply is allocated to the community versus insiders. Major red flags include opaque treasury management, the ability for the team to mint unlimited tokens, sudden changes to the emission schedule, and an absence of independent audits confirming the token contract matches the published tokenomics.</p>`,
    category: "tokenomics",
    relatedTerms: [
      "vesting",
      "token-burn",
      "token-allocation",
      "circulating-supply",
    ],
    examples: [
      {
        example:
          "Bitcoin has fixed tokenomics: 21 million max supply, halving every 4 years, no pre-mine. This scarcity drives value.",
      },
      {
        example:
          "Red flag example: Project X allocated 40% to team with 1-month cliff. After unlock, price dropped 70% as insiders dumped.",
      },
    ],
    faqs: [
      {
        question: "What is tokenomics in simple terms?",
        answer:
          "Tokenomics is how a crypto project designs its token's economy - who gets tokens, how many exist, and what creates demand. Good tokenomics aligns incentives; bad tokenomics lets insiders dump on retail.",
      },
      {
        question: "How do I evaluate tokenomics before investing?",
        answer:
          "Check: 1) Team/insider allocation (under 20% is healthy), 2) Vesting schedules (longer is better), 3) Token utility (does holding it do anything?), 4) Emission schedule.",
      },
      {
        question: "What are tokenomics red flags?",
        answer:
          "No vesting or short cliffs, high insider allocation (>30%), unlimited supply with no burns, vague utility claims, complex mechanisms that obscure who benefits.",
      },
    ],
    metaTitle: "What is Tokenomics? Token Economics Explained | IPO Genie",
    relatedBlogSlugs: [
      "what-is-tokenomics",
      "reading-tokenomics-red-flags-green-lights",
      "how-to-read-tokenomics-like-a-vc",
      "presale-vs-seed-rounds-vs-pre-ipo-the-complete-comparison",
      "retail-access-private-deals",
    ],
  },
  {
    term: "Vesting",
    slug: "vesting",
    shortDefinition:
      "A schedule that controls when token or share holders can actually sell - the difference between aligned incentives and getting dumped on.",
    definition: `<p><strong>Vesting</strong> is a mechanism that releases tokens or shares gradually over time, rather than all at once. It's designed to align long-term incentives and prevent early investors or team members from immediately selling.</p><p><strong>Why it matters:</strong> Without vesting, insiders can dump their entire allocation the moment a token lists, crashing the price. Proper vesting protects retail investors by ensuring everyone has skin in the game.</p><p><strong>Common vesting structures:</strong></p><ul><li><strong>Cliff:</strong> Initial period (e.g., 6-12 months) before any tokens unlock</li><li><strong>Linear vesting:</strong> Equal amounts unlock each month/quarter after the cliff</li><li><strong>Milestone-based:</strong> Tokens unlock when specific goals are achieved</li></ul><p><strong>Example:</strong> "2-year vesting with 6-month cliff" means nothing unlocks for 6 months, then tokens release monthly over the next 18 months.</p><p><strong>Vesting and investor confidence:</strong> A robust vesting schedule is one of the strongest signals that a project's team is committed to long-term success rather than a quick cash grab. When evaluating a project, check the vesting details on the official tokenomics page, third-party trackers like TokenUnlocks or CryptoRank, and on-chain data through block explorers. Verify that the vesting contract is immutable or governed by a multisig, so the team cannot unilaterally accelerate unlock timelines. Projects with transparent, enforced vesting tend to maintain healthier price action because the market trusts that sudden supply shocks are unlikely.</p>`,
    category: "tokenomics",
    relatedTerms: [
      "tokenomics",
      "cliff-period",
      "lock-up-period",
      "token-allocation",
    ],
    examples: [
      {
        example:
          "Good: Team tokens vest over 4 years with 1-year cliff. Bad: Team tokens fully unlocked at launch.",
      },
      {
        example:
          "The $LUNA collapse was accelerated by poor vesting - large holders could exit immediately, creating a death spiral.",
      },
    ],
    faqs: [
      {
        question: "What is vesting in crypto?",
        answer:
          "Vesting is a schedule that controls when token holders can sell. Instead of receiving all tokens immediately, they unlock gradually over months or years.",
      },
      {
        question: "What's a good vesting schedule?",
        answer:
          "For team tokens: 3-4 year vesting with 1-year cliff is standard. For investor tokens: 1-2 year vesting with 3-6 month cliff. Shorter schedules are red flags.",
      },
      {
        question: "What happens when tokens vest?",
        answer:
          "Vested tokens become liquid - holders can sell them. Large unlock events often cause price drops as supply increases.",
      },
    ],
    metaTitle: "What is Token Vesting? Schedules Explained | IPO Genie",
    relatedBlogSlugs: [
      "staking-vs-pre-ipo-investing",
      "presale-vs-seed-rounds-vs-pre-ipo-the-complete-comparison",
      "what-makes-the-ipo-genie-presale-different-from-others",
      "5-reasons-to-join-the-ipo-genie-presale-before-it-sells-out",
      "what-is-tokenomics",
    ],
  },
  {
    term: "Cliff Period",
    slug: "cliff-period",
    shortDefinition:
      "The initial waiting period before any tokens unlock - your protection against team members cashing out and disappearing on day one.",
    definition:
      "<p>A <strong>cliff period</strong> is the initial portion of a vesting schedule during which no tokens unlock at all. It's a commitment device that ensures team members and investors stay aligned with the project before receiving any tokens.</p><p><strong>Why it matters:</strong> The cliff prevents hit-and-run scenarios where insiders collect tokens and immediately sell. A meaningful cliff (6-12+ months) shows the team has long-term conviction.</p><p><strong>Common cliff structures:</strong></p><ul><li><strong>Team:</strong> 12-month cliff is standard</li><li><strong>Advisors:</strong> 6-month cliff is common</li><li><strong>Seed investors:</strong> 6-12 month cliff</li><li><strong>Public sale:</strong> Often no cliff or very short (1-3 months)</li></ul><p><strong>Red flag:</strong> No cliff or very short cliffs (<3 months) for team and early investors. This allows rapid selling pressure at launch.</p><p><strong>How cliff periods protect investors:</strong> Cliff periods serve as an anti-dumping mechanism that forces insiders to remain invested through early, often volatile, market conditions. Typical cliff lengths range from 6 months for advisors and public sale participants to 12 months or longer for core team members and seed investors. When evaluating a new project, look for cliff details published in the tokenomics documentation and verify them on-chain — reputable projects use time-locked smart contracts that cannot be overridden. Be cautious of projects where the cliff applies only to retail buyers while team tokens have shorter or no restrictions, as this asymmetry suggests the team may prioritize its own liquidity over the health of the broader token economy.</p>",
    category: "tokenomics",
    relatedTerms: [
      "vesting",
      "tokenomics",
      "lock-up-period",
      "token-allocation",
    ],
    examples: [
      {
        example:
          "Standard: '4-year vesting with 1-year cliff' means zero tokens for 12 months, then 25% unlocks, then monthly releases for 3 more years.",
      },
      {
        example:
          "Red flag: '6-month vesting with no cliff' means tokens start unlocking immediately - team can sell from day one.",
      },
    ],
    faqs: [
      {
        question: "What is a cliff period?",
        answer:
          "A cliff is the initial period in a vesting schedule when no tokens unlock. If you have a 1-year cliff, you get zero tokens until the cliff ends, then vesting begins.",
      },
      {
        question: "Why do cliff periods matter?",
        answer:
          "Cliffs prevent early dumping. Without a cliff, team members could sell tokens immediately after launch. A 12-month cliff ensures at least one year of commitment before any selling.",
      },
      {
        question: "What's a reasonable cliff period?",
        answer:
          "For team tokens: 12 months minimum. For investors: 6-12 months. Anything shorter is a red flag that insiders might prioritize short-term gains over long-term success.",
      },
    ],
    metaTitle: "What is a Cliff Period? Token Vesting Cliffs | IPO Genie",
    relatedBlogSlugs: [
      "reading-tokenomics-red-flags-green-lights",
      "presale-vs-seed-rounds-vs-pre-ipo-the-complete-comparison",
      "what-makes-the-ipo-genie-presale-different-from-others",
      "5-reasons-to-join-the-ipo-genie-presale-before-it-sells-out",
      "what-is-tokenomics",
    ],
  },
  {
    term: "Token Burn",
    slug: "token-burn",
    shortDefinition:
      "Permanently destroying tokens to reduce supply - a deflationary mechanism that can increase value for remaining holders.",
    definition:
      "<p><strong>Token burning</strong> is the process of permanently removing tokens from circulation by sending them to an inaccessible wallet address (a 'burn address'). It's a deflationary mechanism that reduces supply.</p><p><strong>Why it matters:</strong> Basic economics - if demand stays constant but supply decreases, price should increase. Burns create scarcity and can reward long-term holders.</p><p><strong>Common burn mechanisms:</strong></p><ul><li><strong>Transaction fee burns:</strong> Portion of each transaction is burned (like ETH EIP-1559)</li><li><strong>Buyback and burn:</strong> Project uses revenue to buy and burn tokens</li><li><strong>Scheduled burns:</strong> Predetermined amounts burned at intervals</li><li><strong>Event-based burns:</strong> Tokens burned based on milestones or metrics</li></ul><p><strong>Caution:</strong> Burns only matter if there's real demand. Burning 50% of a token nobody wants doesn't create value.</p><p><strong>Economic impact and examples:</strong> Well-designed burn mechanisms can create sustained upward pressure on token price by continuously reducing the available supply. Ethereum's EIP-1559 base fee burn has removed millions of ETH from circulation, periodically making the network deflationary during high-activity periods. Binance's quarterly BNB burns, funded by a portion of exchange profits, have destroyed billions of dollars in tokens and are credited with supporting long-term price appreciation. When analyzing burns, consider whether the mechanism is automatic and on-chain (more trustworthy) or manual and team-controlled (less transparent), and whether the burn rate is meaningful relative to total supply or merely cosmetic.</p>",
    category: "tokenomics",
    relatedTerms: [
      "tokenomics",
      "deflationary-token",
      "circulating-supply",
      "maximum-supply",
    ],
    examples: [
      {
        example:
          "Ethereum burns ETH with every transaction since EIP-1559. On high-activity days, more ETH is burned than created, making it deflationary.",
      },
      {
        example:
          "Binance conducts quarterly BNB burns based on trading volume, having burned over $60B worth of BNB since inception.",
      },
    ],
    faqs: [
      {
        question: "What is token burning?",
        answer:
          "Token burning permanently destroys tokens by sending them to an address that no one can access. This reduces total supply, theoretically increasing the value of remaining tokens.",
      },
      {
        question: "Does burning tokens increase price?",
        answer:
          "It can, if demand remains constant or increases. But burning alone doesn't create value - it's only meaningful for tokens people actually want to hold and use.",
      },
      {
        question: "How do I know if tokens are really burned?",
        answer:
          "Check the blockchain. Burns are sent to verified burn addresses (like 0x000...dead). You can verify on block explorers that the tokens went to an inaccessible address.",
      },
    ],
    metaTitle: "What is Token Burning? Crypto Burns Explained | IPO Genie",
    relatedBlogSlugs: [
      "why-meme-coins-die-utility-tokens-survive",
      "the-return-of-altseason-why-smaller-tokens-are-surging-again",
      "what-is-tokenomics",
      "reading-tokenomics-red-flags-green-lights",
      "what-vcs-know-token-utility-retail-doesnt",
    ],
  },
  {
    term: "Circulating Supply",
    slug: "circulating-supply",
    shortDefinition:
      "The number of tokens currently available for trading - the supply that actually affects price, not tokens locked in vesting or reserves.",
    definition:
      "<p><strong>Circulating supply</strong> is the number of tokens that are currently available in the market and in the hands of the public. It excludes locked, reserved, or unreleased tokens.</p><p><strong>Why it matters:</strong> Market cap = price × circulating supply. If you only look at circulating supply and ignore future unlocks, you might overpay. Always check total and max supply too.</p><p><strong>What's NOT in circulating supply:</strong></p><ul><li><strong>Team tokens:</strong> Locked in vesting</li><li><strong>Treasury:</strong> Project reserves not released</li><li><strong>Staked tokens:</strong> Sometimes excluded</li><li><strong>Foundation holdings:</strong> For ecosystem development</li></ul><p><strong>Key insight:</strong> A token with 10% circulating supply will see significant selling pressure as the other 90% unlocks. Compare circulating to total supply before investing.</p><p><strong>Why circulating supply matters more than total supply:</strong> For price analysis, circulating supply is far more relevant than total or maximum supply because it reflects the tokens actually available for trading right now. A token with a $50 million market cap based on circulating supply might have a fully diluted valuation of $500 million — meaning you are effectively paying ten times more than the headline number suggests. To find accurate circulating supply data, use aggregators like CoinGecko or CoinMarketCap, cross-reference with the project's official tokenomics page, and verify on-chain using block explorers. Be wary of projects that inflate their circulating supply figures by counting locked or unvested tokens, as this misrepresents the true available supply and distorts market cap calculations.</p>",
    category: "tokenomics",
    relatedTerms: [
      "maximum-supply",
      "tokenomics",
      "token-allocation",
      "vesting",
    ],
    examples: [
      {
        example:
          "Bitcoin: ~19.5M circulating out of 21M max. 93% of supply is already circulating - minimal future dilution.",
      },
      {
        example:
          "New presale: 5% circulating at launch, 95% locked. Heavy unlock schedule means significant future selling pressure.",
      },
    ],
    faqs: [
      {
        question: "What is circulating supply?",
        answer:
          "Circulating supply is the number of tokens currently tradeable in the market. It excludes locked tokens, team allocations still vesting, and project reserves.",
      },
      {
        question: "Why does circulating supply matter for price?",
        answer:
          "Price is determined by circulating supply, not total supply. A $100M market cap with 10% circulating means $1B fully diluted - big difference in what you're really paying.",
      },
      {
        question: "How do I find a token's circulating supply?",
        answer:
          "Check CoinGecko, CoinMarketCap, or the project's tokenomics page. Be skeptical - some projects manipulate this number by including locked tokens.",
      },
    ],
    metaTitle: "What is Circulating Supply? Token Supply | IPO Genie",
    relatedBlogSlugs: [
      "what-is-tokenomics",
      "when-altcoins-surge-utility-tokens-lead",
      "only-crypto-metric-predicts-price",
      "how-to-read-tokenomics-like-a-vc",
      "presale-vs-seed-rounds-vs-pre-ipo-the-complete-comparison",
    ],
  },
  {
    term: "Maximum Supply",
    slug: "maximum-supply",
    shortDefinition:
      "The hard cap on how many tokens will ever exist - the difference between scarce digital gold and infinitely printable funny money.",
    definition:
      "<p><strong>Maximum supply</strong> (also called max supply or hard cap) is the total number of tokens that will ever exist for a cryptocurrency. Once reached, no new tokens can be created.</p><p><strong>Why it matters:</strong> Fixed supply creates scarcity. Bitcoin's 21 million cap is fundamental to its value proposition. Tokens with unlimited supply face constant inflation pressure.</p><p><strong>Supply types:</strong></p><ul><li><strong>Fixed supply:</strong> Hard cap that will never increase (Bitcoin: 21M)</li><li><strong>Capped supply:</strong> Maximum set but not yet minted</li><li><strong>Inflationary:</strong> No max, new tokens created continuously (early Ethereum)</li><li><strong>Deflationary:</strong> Burns reduce supply over time (post-EIP-1559 ETH)</li></ul><p><strong>Key metric:</strong> Compare circulating supply to max supply. If only 10% is circulating and max is 10x higher, expect significant dilution.</p><p><strong>Scarcity and investor implications:</strong> A hard-capped maximum supply is one of the most powerful drivers of long-term value in crypto, mirroring the scarcity principle behind precious metals. Bitcoin's 21 million cap is the gold standard — it guarantees that no central authority can inflate the supply, which underpins its narrative as digital gold. In contrast, tokens with no maximum supply, such as Dogecoin, experience perpetual inflation that requires ever-growing demand just to maintain price. For investors, the absence of a max supply is not automatically disqualifying, but it demands closer scrutiny of the emission rate and whether deflationary mechanisms like burns offset new issuance. Always check the token's smart contract to confirm the supply cap is enforced at the code level and cannot be modified by the team.</p>",
    category: "tokenomics",
    relatedTerms: [
      "circulating-supply",
      "tokenomics",
      "token-burn",
      "deflationary-token",
    ],
    examples: [
      {
        example:
          "Bitcoin: 21 million max supply, never changes. This scarcity is core to the 'digital gold' narrative.",
      },
      {
        example:
          "Dogecoin: No max supply - 5 billion new DOGE created annually. Constant inflation requires constant demand to maintain price.",
      },
    ],
    faqs: [
      {
        question: "What is maximum supply?",
        answer:
          "Maximum supply is the total number of tokens that will ever exist. It's the hard cap - once reached, no more can be created. This creates scarcity.",
      },
      {
        question: "Is unlimited supply bad?",
        answer:
          "Not necessarily, but it requires constant demand to offset inflation. Bitcoin's fixed supply creates scarcity. Ethereum's unlimited supply is offset by burns. Context matters.",
      },
      {
        question: "How do I evaluate supply metrics?",
        answer:
          "Check: 1) Max supply (is there a cap?), 2) Circulating supply (what's tradeable now?), 3) Emission schedule (how fast does supply increase?), 4) Burn mechanisms (does supply decrease?).",
      },
    ],
    metaTitle: "What is Maximum Supply? Token Supply Caps | IPO Genie",
    relatedBlogSlugs: [
      "what-is-tokenomics",
      "when-altcoins-surge-utility-tokens-lead",
      "only-crypto-metric-predicts-price",
      "how-to-read-tokenomics-like-a-vc",
      "presale-vs-seed-rounds-vs-pre-ipo-the-complete-comparison",
    ],
  },
  {
    term: "Token Allocation",
    slug: "token-allocation",
    shortDefinition:
      "How tokens are distributed among team, investors, community, and reserves - the pie chart that shows who really benefits.",
    definition:
      "<p><strong>Token allocation</strong> is how a project distributes its total token supply among different stakeholders. It's typically presented as a pie chart showing percentages for team, investors, community, treasury, etc.</p><p><strong>Why it matters:</strong> Allocation reveals incentive alignment. If insiders (team + early investors) hold 60%+, retail investors may be exit liquidity. Healthy projects prioritize community allocation.</p><p><strong>Typical allocation categories:</strong></p><ul><li><strong>Team:</strong> Founders, employees (10-20% is reasonable)</li><li><strong>Investors:</strong> Seed, private, public rounds (15-25%)</li><li><strong>Community:</strong> Airdrops, rewards, farming (20-40%)</li><li><strong>Treasury:</strong> Development, partnerships (10-20%)</li><li><strong>Ecosystem:</strong> Grants, incentives (10-15%)</li></ul><p><strong>Red flags:</strong> Team + investors > 40%, no community allocation, vague 'other' categories.</p><p><strong>Reading allocation charts:</strong> A healthy allocation typically reserves 30-40% for community incentives, 10-20% for the team with long vesting, and 15-25% for investors. When evaluating a chart, look at the combined insider percentage first. If founders and private investors together exceed 50%, the community has limited influence over supply. Watch for unlabeled categories like 'ecosystem' or 'strategic reserve' that may serve as hidden team wallets. Transparent projects publish wallet addresses for each allocation bucket so holdings can be verified on-chain.</p>",
    category: "tokenomics",
    relatedTerms: ["tokenomics", "vesting", "circulating-supply", "cap-table"],
    examples: [
      {
        example:
          "Healthy: Team 15%, Investors 20%, Community 40%, Treasury 15%, Ecosystem 10%. Insiders < 40%, community prioritized.",
      },
      {
        example:
          "Red flag: Team 30%, Private investors 35%, Public sale 10%, Marketing 25%. Insiders control 65%, retail gets crumbs.",
      },
    ],
    faqs: [
      {
        question: "What is token allocation?",
        answer:
          "Token allocation is how a project divides its total token supply among different groups - team, investors, community, treasury, etc. It's usually shown as a pie chart.",
      },
      {
        question: "What's a healthy token allocation?",
        answer:
          "Team + investors should be under 40% combined. Community allocation should be 30%+ for decentralization. All insider allocations should have meaningful vesting (2-4 years).",
      },
      {
        question: "Where do I find token allocation?",
        answer:
          "Check the project's whitepaper, tokenomics page, or litepaper. If allocation isn't clearly disclosed, that's a red flag.",
      },
    ],
    metaTitle: "What is Token Allocation? Distribution | IPO Genie",
    relatedBlogSlugs: [
      "what-is-tokenomics",
      "reading-tokenomics-red-flags-green-lights",
      "what-vcs-know-token-utility-retail-doesnt",
      "why-99-percent-tokens-no-real-utility",
      "how-to-read-tokenomics-like-a-vc",
    ],
  },
  {
    term: "Utility Token",
    slug: "utility-token",
    shortDefinition:
      "A token that provides access to a product or service - not an investment security, but a functional key to an ecosystem.",
    definition:
      "<p>A <strong>utility token</strong> provides access to a specific product, service, or ecosystem. Unlike security tokens (which represent ownership), utility tokens are functional - they're used, not just held.</p><p><strong>Why it matters:</strong> Utility drives demand. If a token has no use case beyond speculation, its value relies entirely on finding a greater fool. Real utility creates sustainable demand.</p><p><strong>Common utility types:</strong></p><ul><li><strong>Access:</strong> Token required to use the platform</li><li><strong>Fees:</strong> Pay transaction fees in native token</li><li><strong>Governance:</strong> Vote on protocol decisions</li><li><strong>Staking:</strong> Lock tokens for rewards or benefits</li><li><strong>Discounts:</strong> Reduced fees for token holders</li></ul><p><strong>Regulatory note:</strong> The SEC has cracked down on tokens that call themselves 'utility' but function as securities. True utility requires actual functionality.</p><p><strong>Utility vs security tokens:</strong> The key distinction is purpose. A security token represents ownership in an asset and is subject to securities law, while a utility token grants functional access to a service. In practice, the line blurs when utility tokens appreciate in value and buyers expect profit. Regulators apply the Howey test: if purchasers invest money expecting profits primarily from the efforts of others, the token may be classified as a security regardless of its label. Projects that build genuine, working utility before their token launch have a stronger case for utility classification.</p>",
    category: "blockchain",
    relatedTerms: ["tokenomics", "governance-token", "token-allocation"],
    examples: [
      {
        example:
          "Chainlink (LINK): Pay node operators for oracle services. Clear utility - data feeds require LINK payment.",
      },
      {
        example:
          "BNB: Reduced trading fees on Binance, gas for BNB Chain, launchpad access. Multiple utilities drive demand.",
      },
    ],
    faqs: [
      {
        question: "What is a utility token?",
        answer:
          "A utility token gives holders access to a product or service. Unlike securities, they're meant to be used within an ecosystem, not just held as investments.",
      },
      {
        question: "How do I evaluate utility token value?",
        answer:
          "Ask: What can I actually DO with this token? Is there real demand for that function? Would the ecosystem work without a token? Real utility = sustainable demand.",
      },
      {
        question: "Are utility tokens securities?",
        answer:
          "Not if they have genuine utility. But many tokens claim utility while functioning as investments. The SEC applies the Howey test - if buyers expect profits from others' efforts, it's likely a security.",
      },
    ],
    metaTitle: "What is a Utility Token? Token Utility Explained | IPO Genie",
    relatedBlogSlugs: [
      "what-vcs-know-token-utility-retail-doesnt",
      "when-altcoins-surge-utility-tokens-lead",
      "utility-ladder-tokens-10x-or-die",
      "tokens-that-print-money-utility-value",
      "why-99-percent-tokens-no-real-utility",
    ],
  },
  {
    term: "Governance Token",
    slug: "governance-token",
    shortDefinition:
      "A token that gives holders voting power over protocol decisions - like shareholder voting, but for DAOs and DeFi protocols.",
    definition:
      "<p>A <strong>governance token</strong> gives holders the right to vote on protocol decisions - parameter changes, treasury spending, upgrades, and strategic direction. It's decentralized decision-making.</p><p><strong>Why it matters:</strong> Governance tokens distribute power from founders to community. They also create demand beyond speculation - holding tokens gives you a voice in the project's future.</p><p><strong>What governance tokens can decide:</strong></p><ul><li><strong>Protocol parameters:</strong> Fee structures, interest rates, collateral ratios</li><li><strong>Treasury allocation:</strong> How project funds are spent</li><li><strong>Upgrades:</strong> New features, integrations, changes</li><li><strong>Partnerships:</strong> Which projects to collaborate with</li><li><strong>Token economics:</strong> Supply changes, burn rates, rewards</li></ul><p><strong>Reality check:</strong> Many governance tokens have concentrated ownership, making voting power an illusion. Check actual participation rates and whale holdings.</p><p><strong>How governance voting works in practice:</strong> A token holder submits a proposal on-chain or through a platform like Snapshot. The community discusses it during a review period before a formal vote opens. Voting power is typically proportional to token holdings, meaning one token equals one vote. Some protocols use delegation, allowing holders to assign their voting power to trusted representatives without giving up token ownership. Common governance decisions include adjusting protocol fees, approving new asset listings, funding grants from the treasury, and authorizing smart contract upgrades. Participation tends to be low, often below 10% of token supply, so a small group of dedicated holders can wield outsized influence.</p>",
    category: "blockchain",
    relatedTerms: ["utility-token", "tokenomics", "token-allocation"],
    examples: [
      {
        example:
          "Uniswap (UNI): Holders vote on fee switches, treasury grants, and protocol upgrades. Major decisions require community approval.",
      },
      {
        example:
          "Compound (COMP): Holders govern interest rate models, supported assets, and protocol parameters through on-chain voting.",
      },
    ],
    faqs: [
      {
        question: "What is a governance token?",
        answer:
          "A governance token gives you voting rights over a protocol's decisions - like being a shareholder who can vote on company matters, but for decentralized projects.",
      },
      {
        question: "Are governance tokens worth anything?",
        answer:
          "Value depends on: 1) What decisions the token controls, 2) Protocol revenue/treasury size, 3) Actual decentralization, 4) Participation rates. Governance over a valuable protocol is valuable.",
      },
      {
        question: "How do I vote with governance tokens?",
        answer:
          "Connect your wallet to the protocol's governance portal (like Snapshot or Tally), view proposals, and cast your votes. Some require staking or delegation first.",
      },
    ],
    metaTitle: "What is a Governance Token? DAO Voting | IPO Genie",
    relatedBlogSlugs: [
      "utility-ladder-tokens-10x-or-die",
      "the-return-of-altseason-why-smaller-tokens-are-surging-again",
      "what-vcs-know-token-utility-retail-doesnt",
      "pre-ipo-tokens-next-narrative-after-ai",
      "when-altcoins-surge-utility-tokens-lead",
    ],
  },
  {
    term: "Deflationary Token",
    slug: "deflationary-token",
    shortDefinition:
      "A token designed to decrease in supply over time through burns - creating scarcity that could increase value for holders.",
    definition:
      "<p>A <strong>deflationary token</strong> is designed so that its total supply decreases over time, typically through burn mechanisms. As supply shrinks, remaining tokens theoretically become more valuable.</p><p><strong>How deflationary mechanisms work:</strong></p><ul><li><strong>Transaction burns:</strong> Percentage of each transaction is destroyed</li><li><strong>Buyback burns:</strong> Protocol uses revenue to buy and burn tokens</li><li><strong>Automatic burns:</strong> Smart contract rules that trigger burns</li><li><strong>Manual burns:</strong> Scheduled destruction by the team</li></ul><p><strong>Ethereum example:</strong> Since EIP-1559, ETH burns base fees with every transaction. On high-activity days, more ETH is burned than issued, making it net deflationary.</p><p><strong>Caution:</strong> Deflation doesn't guarantee value. A token nobody uses or wants won't increase in value just because supply decreases. Utility must exist first.</p><p><strong>Deflationary vs inflationary models:</strong> Inflationary tokens continuously mint new supply to fund staking rewards, validator incentives, or ecosystem growth. Deflationary tokens do the opposite by permanently removing supply. Some tokens, like Ethereum after EIP-1559, blend both approaches and can be net deflationary or inflationary depending on network activity. Deflation benefits holders when demand is steady or growing because each remaining token captures a larger share of value. However, excessive deflation can discourage spending and reduce network activity. When evaluating a deflationary mechanism, check whether burns are tied to real usage or artificially manufactured, and whether the burn rate is meaningful relative to total supply.</p>",
    category: "tokenomics",
    relatedTerms: [
      "token-burn",
      "tokenomics",
      "circulating-supply",
      "maximum-supply",
    ],
    examples: [
      {
        example:
          "Ethereum post-EIP-1559: Burns base fees, sometimes burning more than new issuance. 'Ultra sound money' narrative.",
      },
      {
        example:
          "SHIB: Burns through transactions and community events. Supply reduced from 1 quadrillion, though still massive.",
      },
    ],
    faqs: [
      {
        question: "What is a deflationary token?",
        answer:
          "A deflationary token has mechanisms that reduce its supply over time - usually through burning. As supply decreases, each remaining token represents a larger share.",
      },
      {
        question: "Are deflationary tokens better investments?",
        answer:
          "Not automatically. Deflation only matters if there's demand. A token that burns 50% but nobody wants is still worthless. Look for deflation + utility + demand.",
      },
      {
        question: "How do I verify a token is deflationary?",
        answer:
          "Check: 1) Burn mechanisms in tokenomics, 2) Actual burn history on block explorer, 3) Net supply change over time (burns vs new issuance).",
      },
    ],
    metaTitle: "What is a Deflationary Token? Token Burns | IPO Genie",
    relatedBlogSlugs: [
      "tokens-that-print-money-utility-value",
      "why-meme-coins-die-utility-tokens-survive",
      "the-return-of-altseason-why-smaller-tokens-are-surging-again",
      "what-is-tokenomics",
      "reading-tokenomics-red-flags-green-lights",
    ],
  },
  {
    term: "Crypto Presale",
    slug: "crypto-presale",
    shortDefinition:
      "An early token sale before public launch - the opportunity to buy at the lowest price, but also the highest risk of scams and failures.",
    definition:
      "<p>A <strong>crypto presale</strong> is an early token sale that occurs before a project's public launch or exchange listing. Participants buy tokens at discounted prices in exchange for early capital and the risk of unproven projects.</p><p><strong>Why presales exist:</strong></p><ul><li><strong>Funding:</strong> Projects raise capital for development</li><li><strong>Community:</strong> Build early supporter base</li><li><strong>Marketing:</strong> Generate buzz before launch</li><li><strong>Price discovery:</strong> Test demand before public sale</li></ul><p><strong>Presale stages (typical):</strong></p><ul><li><strong>Seed:</strong> Earliest, highest discount, longest lock</li><li><strong>Private:</strong> VCs and big investors</li><li><strong>Presale:</strong> Public early access</li><li><strong>Public sale:</strong> Open to everyone</li><li><strong>Launch:</strong> Trading begins</li></ul><p><strong>Risks:</strong> Scams, failed projects, long locks, no liquidity. Due diligence is critical.</p><p><strong>How presales work step by step:</strong> First, a project announces the presale with details on pricing, supply, and timeline. Participants connect a wallet to the official presale page, choose an amount, and send cryptocurrency or fiat to purchase tokens. Tokens are typically held in a smart contract until the Token Generation Event, when they are distributed according to the vesting schedule. Legitimate presales feature a clear roadmap, doxxed or publicly accountable team members, transparent tokenomics, and a verifiable smart contract. Common structures include tiered pricing where the price rises after each stage, giving earlier buyers a deeper discount.</p>",
    category: "trading",
    relatedTerms: ["ico", "ido", "token-generation-event", "tokenomics"],
    examples: [
      {
        example:
          "Ethereum's 2014 presale sold ETH at $0.31. Early participants saw 10,000x+ returns. The presale raised $18M for development.",
      },
      {
        example:
          "Many 2021 presales went to zero - projects abandoned, rugged, or simply failed to deliver. Early doesn't mean profitable.",
      },
    ],
    faqs: [
      {
        question: "What is a crypto presale?",
        answer:
          "A presale is an early token sale before public listing. You buy tokens at a discount before they're tradeable, in exchange for early risk and often lock-up periods.",
      },
      {
        question: "How do I participate in presales?",
        answer:
          "Through the project's website (verify it's official), launchpads (like IPO Genie), or private allocation. Often requires whitelisting, KYC, or holding certain tokens.",
      },
      {
        question: "How do I know if a crypto presale is legitimate?",
        answer:
          "Look for these signs: a publicly identified team with verifiable backgrounds, a professionally audited smart contract, transparent tokenomics with clear allocation and vesting, an active community on social channels, and a realistic roadmap with achievable milestones. Red flags include anonymous teams, guaranteed return promises, pressure to buy immediately, no audit, and copy-pasted whitepapers. Always verify the presale URL through official channels and never send funds to an address you found only on social media.",
      },
    ],
    metaTitle: "What is a Crypto Presale? Token Sales | IPO Genie",
    relatedBlogSlugs: [
      "what-is-a-crypto-presale-and-how-does-it-work",
      "crypto-presales-vs-icos",
      "best-crypto-presale-platforms-2026",
      "presale-vs-seed-rounds-vs-pre-ipo-the-complete-comparison",
      "what-makes-the-ipo-genie-presale-different-from-others",
    ],
  },
  {
    term: "ICO",
    slug: "ico",
    shortDefinition:
      "Initial Coin Offering - the 2017 fundraising craze where projects sold tokens directly to the public, raising billions before regulations caught up.",
    definition:
      "<p>An <strong>ICO (Initial Coin Offering)</strong> is a fundraising method where projects sell tokens directly to the public, typically in exchange for ETH or BTC. ICOs dominated 2017-2018 before regulatory crackdowns.</p><p><strong>How ICOs worked:</strong></p><ul><li><strong>Whitepaper:</strong> Project publishes vision and tokenomics</li><li><strong>Sale:</strong> Public sends ETH/BTC to smart contract</li><li><strong>Distribution:</strong> Tokens sent to participants</li><li><strong>Listing:</strong> Tokens trade on exchanges</li></ul><p><strong>The ICO boom:</strong> In 2017-2018, ICOs raised over $20 billion. Many were scams or failures. The SEC eventually declared most ICO tokens securities, leading to enforcement actions.</p><p><strong>Evolution:</strong> ICOs evolved into IEOs (exchange-based), IDOs (DEX-based), and regulated STOs (security tokens) to address regulatory concerns.</p><p><strong>The 2017 boom and its aftermath:</strong> During the ICO mania of 2017, nearly anyone could publish a whitepaper and raise millions within hours. Studies estimate that over 80% of ICO projects from that era were scams or failed to deliver. The regulatory backlash was swift: the SEC issued enforcement actions, China and South Korea banned ICOs outright, and many countries introduced registration requirements. Since then, token launches have matured considerably. Modern projects typically use launchpads with vetting processes, comply with KYC and AML rules, and implement vesting schedules that align team incentives with long-term success rather than quick cash grabs.</p>",
    category: "trading",
    relatedTerms: [
      "ido",
      "crypto-presale",
      "token-generation-event",
      "tokenomics",
    ],
    examples: [
      {
        example:
          "Ethereum's 2014 ICO raised $18M at $0.31/ETH. One of the most successful ICOs in history.",
      },
      {
        example:
          "EOS raised $4B in a year-long ICO (2017-2018) - the largest ever. The project has struggled to deliver on promises.",
      },
    ],
    faqs: [
      {
        question: "What is an ICO?",
        answer:
          "An ICO (Initial Coin Offering) is when a crypto project sells tokens to the public to raise funds. Popular in 2017-2018, most ICOs are now considered securities by regulators.",
      },
      {
        question: "Are ICOs legal?",
        answer:
          "In most jurisdictions, ICOs selling to US investors are illegal unless registered as securities. This led to the shift toward IEOs, IDOs, and compliant alternatives.",
      },
      {
        question: "What's the difference between ICO and IPO?",
        answer:
          "IPOs sell stock in regulated markets with disclosure requirements. ICOs sold tokens with minimal regulation. ICOs were faster and cheaper but riskier and often illegal.",
      },
    ],
    metaTitle: "What is an ICO? Initial Coin Offering | IPO Genie",
    relatedBlogSlugs: [
      "crypto-presales-vs-icos",
      "what-is-a-crypto-presale-and-how-does-it-work",
      "best-crypto-presale-platforms-2026",
      "presale-vs-seed-rounds-vs-pre-ipo-the-complete-comparison",
      "referral-program-earn-15-percent-extra-ipo",
    ],
  },
  {
    term: "IDO",
    slug: "ido",
    shortDefinition:
      "Initial DEX Offering - a token launch on decentralized exchanges, providing immediate liquidity without centralized exchange gatekeepers.",
    definition:
      "<p>An <strong>IDO (Initial DEX Offering)</strong> is a token launch that occurs on a decentralized exchange (DEX) or launchpad. Unlike ICOs or IEOs, IDOs provide immediate liquidity and decentralized access.</p><p><strong>How IDOs work:</strong></p><ul><li><strong>Launchpad:</strong> Project partners with IDO platform (e.g., Polkastarter, DAO Maker)</li><li><strong>Whitelist:</strong> Users qualify through staking, lottery, or allocation</li><li><strong>Sale:</strong> Tokens sold at fixed price</li><li><strong>Liquidity:</strong> Tokens immediately tradeable on DEX</li></ul><p><strong>Advantages over ICOs:</strong></p><ul><li>Immediate liquidity (no waiting for exchange listing)</li><li>Decentralized - anyone can participate</li><li>Lower costs than centralized exchange listings</li><li>Fair launch potential with anti-whale mechanisms</li></ul><p><strong>Popular IDO platforms:</strong> Polkastarter, DAO Maker, TrustPad, Seedify, GameFi.</p><p><strong>How IDOs differ from ICOs:</strong> The fundamental difference is decentralization. ICOs relied on centralized teams to collect funds and distribute tokens, often with long delays. IDOs use smart contracts on decentralized exchanges to handle the sale and instantly provide trading liquidity. This means participants can trade their tokens immediately after purchase rather than waiting for a centralized exchange listing. Launchpads act as curators, vetting projects before allowing them to launch, which adds a layer of quality control that ICOs lacked. However, IDO access often requires staking the launchpad's native token, creating a barrier to entry that limits participation to committed community members.</p>",
    category: "trading",
    relatedTerms: [
      "ico",
      "crypto-presale",
      "liquidity-pool",
      "token-generation-event",
    ],
    examples: [
      {
        example:
          "Polkastarter has launched 100+ IDOs including PAID, SuperFarm, and Mina. Average returns vary wildly based on market conditions.",
      },
      {
        example:
          "DAO Maker uses an SHO (Strong Holder Offering) model requiring users to stake DAO tokens for allocation rights.",
      },
    ],
    faqs: [
      {
        question: "What is an IDO?",
        answer:
          "An IDO (Initial DEX Offering) is a token launch on a decentralized exchange or launchpad. Unlike ICOs, IDOs provide immediate trading liquidity.",
      },
      {
        question: "How do I participate in IDOs?",
        answer:
          "Most require: 1) Holding the launchpad's token, 2) Completing KYC, 3) Winning lottery or meeting staking requirements, 4) Connecting wallet during sale window.",
      },
      {
        question: "Are IDOs better than ICOs?",
        answer:
          "IDOs offer immediate liquidity and decentralized access, but still carry project risk. The mechanism is better, but due diligence on the project itself remains essential.",
      },
    ],
    metaTitle: "What is an IDO? Initial DEX Offering | IPO Genie",
    relatedBlogSlugs: [
      "what-is-a-crypto-presale-and-how-does-it-work",
      "best-crypto-presale-platforms-2026",
      "crypto-presales-vs-icos",
      "presale-vs-seed-rounds-vs-pre-ipo-the-complete-comparison",
      "referral-program-earn-15-percent-extra-ipo",
    ],
  },
  {
    term: "Token Generation Event",
    slug: "token-generation-event",
    shortDefinition:
      "The moment when tokens are created and distributed - when your investment transforms from a promise into actual blockchain assets.",
    definition:
      "<p>A <strong>Token Generation Event (TGE)</strong> is when a project's tokens are officially created on the blockchain and distributed to investors, team, and other stakeholders. It's the birth of the token.</p><p><strong>What happens at TGE:</strong></p><ul><li><strong>Smart contract deployment:</strong> Token contract goes live</li><li><strong>Initial distribution:</strong> Tokens sent to presale participants, team wallets, etc.</li><li><strong>Vesting begins:</strong> Lock periods and vesting schedules activate</li><li><strong>Trading starts:</strong> Usually coincides with exchange listing</li></ul><p><strong>TGE vs listing:</strong> TGE is when tokens are created. Listing is when they become tradeable on exchanges. Sometimes these happen simultaneously, sometimes TGE precedes listing by days/weeks.</p><p><strong>Key dates:</strong> TGE date determines when your vesting schedule starts and when you can claim tokens.</p><p><strong>What investors should prepare for at TGE:</strong> Before TGE, ensure your wallet is compatible with the token's blockchain, have enough native currency for gas fees, and verify the official claim portal address to avoid phishing. At TGE, tokens typically list on exchanges and experience high volatility as early investors decide whether to hold or sell. Many projects release only a fraction of tokens at TGE, commonly 10-25%, with the remainder unlocking over months through vesting. This initial unlock often creates selling pressure that can push the price below presale levels temporarily. Understanding the distribution timeline helps you set realistic expectations and avoid panic selling during normal post-launch price discovery.</p>",
    category: "trading",
    relatedTerms: ["crypto-presale", "ico", "ido", "vesting"],
    examples: [
      {
        example:
          "Project announces: 'TGE on January 15, listing on Uniswap and Gate.io same day. Presale tokens unlock 10% at TGE, rest over 12 months.'",
      },
      {
        example:
          "Some projects delay TGE despite raising funds, leaving investors waiting months or years for their tokens.",
      },
    ],
    faqs: [
      {
        question: "What is a Token Generation Event?",
        answer:
          "A TGE is when a project's tokens are created on the blockchain and distributed to investors and other stakeholders. It's when tokens go from promises to real assets.",
      },
      {
        question: "What happens to my investment at TGE?",
        answer:
          "Your token allocation is distributed to your wallet (or becomes claimable). Vesting schedules activate - you may receive all tokens or just a portion, with rest unlocking over time.",
      },
      {
        question: "Is TGE the same as listing?",
        answer:
          "Not always. TGE is token creation; listing is when trading begins on exchanges. They often happen together but TGE can precede listing.",
      },
    ],
    metaTitle: "What is a Token Generation Event (TGE)? | IPO Genie",
    relatedBlogSlugs: [
      "ipo-genie-black-friday-event-a-limited-30-bonus-for-early-buyers",
      "the-return-of-altseason-why-smaller-tokens-are-surging-again",
      "pre-ipo-tokens-vs-meme-coins",
      "how-to-spot-token-red-flags",
      "what-is-tokenomics",
    ],
  },
  {
    term: "Liquidity Pool",
    slug: "liquidity-pool",
    shortDefinition:
      "A pool of tokens locked in a smart contract that enables decentralized trading - no order books, no middlemen, just math and code.",
    definition:
      "<p>A <strong>liquidity pool</strong> is a collection of tokens locked in a smart contract that enables trading on decentralized exchanges (DEXs). Instead of matching buyers with sellers, trades execute against the pool.</p><p><strong>How it works:</strong></p><ul><li><strong>Providers:</strong> Users deposit token pairs (e.g., ETH/USDC) into the pool</li><li><strong>Traders:</strong> Swap one token for another against the pool</li><li><strong>AMM:</strong> Automated Market Maker algorithm sets prices based on pool ratios</li><li><strong>Fees:</strong> Traders pay fees (0.1-0.3%) distributed to providers</li></ul><p><strong>Example:</strong> To trade ETH for USDC on Uniswap, you trade against the ETH/USDC pool. The pool's smart contract calculates the exchange rate and executes the swap.</p><p><strong>Risks:</strong> Impermanent loss (pool value vs holding), smart contract bugs, rug pulls (liquidity removal).</p><p><strong>How LPs earn fees and manage risk:</strong> When you deposit tokens into a liquidity pool, you receive LP tokens that represent your proportional share of the pool. These LP tokens accrue value as trading fees are collected. For example, if a pool charges 0.3% per trade and processes one million dollars in daily volume, it generates three thousand dollars in fees distributed to all providers based on their share. However, providers face impermanent loss, which occurs when the price ratio of the paired tokens changes after deposit. The larger the price divergence, the greater the loss compared to simply holding the tokens. LP tokens can also be staked in yield farming protocols for additional rewards, compounding the earning potential.</p>",
    category: "defi",
    relatedTerms: ["smart-contract", "ido", "secondary-markets"],
    examples: [
      {
        example:
          "Uniswap's ETH/USDC pool holds billions in liquidity, enabling large trades with minimal slippage.",
      },
      {
        example:
          "New token launches need liquidity pools - without one, there's no way to trade the token on DEXs.",
      },
    ],
    faqs: [
      {
        question: "What is a liquidity pool?",
        answer:
          "A liquidity pool is tokens locked in a smart contract that enables trading. Instead of order books matching buyers and sellers, you trade against the pool itself.",
      },
      {
        question: "How do liquidity providers make money?",
        answer:
          "LPs earn a share of trading fees (usually 0.1-0.3% per trade) proportional to their share of the pool. High-volume pools generate more fees.",
      },
      {
        question: "What is impermanent loss?",
        answer:
          "When token prices change, your LP position may be worth less than simply holding. This 'loss' becomes permanent if you withdraw. It's the main risk of providing liquidity.",
      },
    ],
    metaTitle: "What is a Liquidity Pool? DeFi Trading | IPO Genie",
    relatedBlogSlugs: [
      "figma-ipo-physics-of-liquidity",
      "staking-vs-pre-ipo-investing",
      "tokenized-securities-vs-traditional-equity",
      "what-is-blockchain-and-how-does-it-work",
      "what-is-the-metaverse-and-how-it-uses-blockchain",
    ],
  },
  {
    term: "Smart Contract",
    slug: "smart-contract",
    shortDefinition:
      "Self-executing code on a blockchain that automatically enforces agreements - no lawyers, no middlemen, just code that runs exactly as written.",
    definition:
      "<p>A <strong>smart contract</strong> is code stored on a blockchain that automatically executes when predetermined conditions are met. They enable trustless agreements - parties don't need to trust each other, just the code.</p><p><strong>Why it matters:</strong> Smart contracts power DeFi, NFTs, DAOs, and tokenized assets. They replace intermediaries (banks, lawyers, escrow) with transparent, auditable code.</p><p><strong>Common uses:</strong></p><ul><li><strong>Token contracts:</strong> Define token supply, transfers, balances</li><li><strong>DEX swaps:</strong> Execute trades automatically</li><li><strong>Lending:</strong> Manage collateral and liquidations</li><li><strong>Vesting:</strong> Release tokens on schedule</li><li><strong>NFTs:</strong> Define ownership and royalties</li></ul><p><strong>Risks:</strong> Code bugs can cause massive losses (see: DAO hack, Wormhole). Always verify contracts are audited by reputable firms.</p><p><strong>Smart contract audits and security:</strong> An audit is a thorough review of a smart contract's code by independent security experts. Reputable firms like CertiK, OpenZeppelin, and Trail of Bits examine the code for vulnerabilities such as reentrancy attacks, integer overflow, access control flaws, and logic errors. Audits typically take weeks and cost tens of thousands of dollars, which signals that a project takes security seriously. However, an audit is not a guarantee of safety. It reflects the code at a specific point in time, and post-audit changes can introduce new bugs. Investors should check whether audit reports are publicly available, whether identified issues were resolved, and whether the deployed contract matches the audited version.</p>",
    category: "blockchain",
    relatedTerms: ["liquidity-pool", "tokenomics", "vesting"],
    examples: [
      {
        example:
          "Uniswap's smart contracts handle billions in daily trading volume without any company processing transactions.",
      },
      {
        example:
          "The 2016 DAO hack exploited a smart contract bug, draining $60M and leading to the Ethereum/Ethereum Classic split.",
      },
    ],
    faqs: [
      {
        question: "What is a smart contract in simple terms?",
        answer:
          "A smart contract is a program on a blockchain that automatically executes when conditions are met. Like a vending machine - insert the right input, get the guaranteed output, no trust required.",
      },
      {
        question: "Are smart contracts safe?",
        answer:
          "Smart contracts do exactly what they're programmed to do - which can include bugs. Always check for audits from reputable firms (CertiK, OpenZeppelin, Trail of Bits) before interacting with significant funds.",
      },
      {
        question: "Can smart contracts be changed?",
        answer:
          "Depends on design. Some are immutable (can never change). Others have admin keys or upgrade mechanisms. Upgradeable contracts add flexibility but also trust requirements.",
      },
    ],
    metaTitle: "What is a Smart Contract? Blockchain Code | IPO Genie",
    relatedBlogSlugs: [
      "what-is-blockchain-and-how-does-it-work",
      "what-is-the-metaverse-and-how-it-uses-blockchain",
      "what-is-web3-and-how-its-shaping-the-future-of-the-internet",
      "how-to-spot-token-red-flags",
      "staking-vs-pre-ipo-investing",
    ],
  },
  {
    term: "Yield Farming",
    slug: "yield-farming",
    shortDefinition:
      "Earning rewards by providing liquidity or staking tokens across DeFi protocols - chasing the highest APY like a digital farmer tends crops.",
    definition:
      "<p><strong>Yield farming</strong> is the practice of moving crypto assets across DeFi protocols to maximize returns. Farmers provide liquidity, stake tokens, or lend assets to earn rewards - often paid in the protocol's native token.</p><p><strong>How yield farming works:</strong></p><ul><li><strong>Provide liquidity:</strong> Deposit token pairs into pools, earn trading fees + token rewards</li><li><strong>Staking:</strong> Lock tokens to secure the protocol, earn staking rewards</li><li><strong>Lending:</strong> Supply assets to lending protocols, earn interest + governance tokens</li><li><strong>Compounding:</strong> Reinvest rewards to compound returns</li></ul><p><strong>Risks:</strong> Impermanent loss, smart contract vulnerabilities, token price crashes, protocol exploits, and unsustainable APYs that eventually collapse.</p><p><strong>How it works in practice:</strong> Farmers typically deposit token pairs into a liquidity pool on a DEX like Uniswap or Curve, earning trading fees plus bonus governance tokens. Common strategies include single-asset staking for simpler exposure, LP farming across multiple pools, leveraged yield farming through lending protocols like Aave, and auto-compounding vaults such as Yearn that reinvest rewards automatically. More advanced farmers rotate between protocols chasing the highest APY, a practice known as crop rotation.</p><p><strong>Key risks in detail:</strong> Smart contract bugs can drain entire pools overnight, as seen in numerous DeFi exploits totaling billions in losses. Rug pulls occur when anonymous developers abandon a project and withdraw all liquidity. Impermanent loss erodes returns when token prices diverge significantly from your entry point. Always research audit history, team reputation, and TVL stability before committing funds.</p>",
    category: "defi",
    relatedTerms: ["liquidity-pool", "staking", "impermanent-loss", "tvl"],
    examples: [
      {
        example:
          "In 2020's 'DeFi Summer,' yield farmers earned 1000%+ APY by rotating between Compound, Aave, and Yearn - but many yields proved unsustainable.",
      },
      {
        example:
          "Yearn Finance automates yield farming strategies, automatically moving funds to highest-yield opportunities.",
      },
    ],
    faqs: [
      {
        question: "What is yield farming?",
        answer:
          "Yield farming is earning rewards by providing liquidity or staking tokens in DeFi protocols. It's like earning interest, but often with higher returns and higher risks.",
      },
      {
        question: "Is yield farming profitable?",
        answer:
          "It can be, but high APYs often come with high risks: impermanent loss, token depreciation, smart contract bugs, and rug pulls. Sustainable yields are typically 5-20% APY.",
      },
      {
        question: "How do I start yield farming?",
        answer:
          "1) Choose a reputable protocol (Aave, Curve, Uniswap), 2) Connect your wallet, 3) Deposit tokens, 4) Monitor your position. Start small and understand the risks.",
      },
    ],
    metaTitle: "What is Yield Farming? DeFi Rewards | IPO Genie",
    relatedBlogSlugs: [
      "staking-vs-pre-ipo-investing",
      "tokenized-securities-vs-traditional-equity",
      "what-is-blockchain-and-how-does-it-work",
      "what-is-the-metaverse-and-how-it-uses-blockchain",
      "what-is-web3-and-how-its-shaping-the-future-of-the-internet",
    ],
  },
  {
    term: "Impermanent Loss",
    slug: "impermanent-loss",
    shortDefinition:
      "The loss liquidity providers face when token prices change - your LP position ends up worth less than if you had simply held the tokens.",
    definition:
      "<p><strong>Impermanent loss (IL)</strong> occurs when you provide liquidity to a pool and the price ratio of your deposited tokens changes. The more the prices diverge, the greater the loss compared to simply holding.</p><p><strong>Why it happens:</strong> AMMs maintain constant product ratios. When prices change, arbitrageurs rebalance the pool, leaving you with more of the depreciated token and less of the appreciated one.</p><p><strong>Example:</strong> You deposit $1000 of ETH and $1000 of USDC. If ETH doubles in price, your LP position might be worth $2,800 instead of $3,000 if you had just held. That $200 difference is impermanent loss.</p><p><strong>'Impermanent' because:</strong> If prices return to original ratio, the loss disappears. It becomes permanent when you withdraw.</p><p><strong>Mitigation:</strong> Farm stablecoin pairs (minimal IL), choose correlated assets, or ensure trading fees exceed IL.</p><p><strong>Advanced mitigation strategies:</strong> Choosing highly correlated token pairs such as wBTC/renBTC or stETH/ETH dramatically reduces divergence risk. Concentrated liquidity positions on Uniswap V3 can improve fee earnings enough to offset IL, though they require active management. Some protocols now offer impermanent loss insurance or protection mechanisms that reimburse LPs after a minimum holding period. Evaluating the fee-to-IL ratio before entering any pool is essential for consistent profitability.</p>",
    category: "defi",
    relatedTerms: ["liquidity-pool", "yield-farming", "amm", "dex"],
    examples: [
      {
        example:
          "An ETH/USDC LP who held through ETH's 10x run experienced significant impermanent loss - they'd have been better off just holding ETH.",
      },
      {
        example:
          "Stablecoin pairs like USDC/USDT have minimal impermanent loss since prices stay pegged together.",
      },
    ],
    faqs: [
      {
        question: "What is impermanent loss?",
        answer:
          "Impermanent loss is when your liquidity provider position is worth less than if you had simply held the tokens. It happens when token prices change from when you deposited.",
      },
      {
        question: "How do I avoid impermanent loss?",
        answer:
          "Provide liquidity to stablecoin pairs, choose correlated assets, use single-sided staking when available, or ensure trading fee earnings exceed potential IL.",
      },
      {
        question: "Is impermanent loss always bad?",
        answer:
          "Not always - if trading fees earned exceed the IL, you still profit. Some pools generate enough fees to make IL worthwhile. Calculate your net position including fees.",
      },
    ],
    metaTitle: "What is Impermanent Loss? LP Risks | IPO Genie",
    relatedBlogSlugs: [
      "staking-vs-pre-ipo-investing",
      "tokenized-securities-vs-traditional-equity",
      "what-is-blockchain-and-how-does-it-work",
      "what-is-the-metaverse-and-how-it-uses-blockchain",
      "what-is-web3-and-how-its-shaping-the-future-of-the-internet",
    ],
  },
  {
    term: "TVL",
    slug: "tvl",
    shortDefinition:
      "Total Value Locked - the total crypto assets deposited in a DeFi protocol, measuring its size and user trust.",
    definition:
      "<p><strong>TVL (Total Value Locked)</strong> measures the total value of crypto assets deposited in a DeFi protocol. It's the primary metric for comparing DeFi protocol size and adoption.</p><p><strong>What TVL indicates:</strong></p><ul><li><strong>Protocol adoption:</strong> Higher TVL suggests more user trust</li><li><strong>Liquidity depth:</strong> More TVL means better trading with less slippage</li><li><strong>Market position:</strong> TVL rankings show competitive landscape</li></ul><p><strong>TVL limitations:</strong></p><ul><li>Can be inflated by incentive programs</li><li>Doesn't measure profitability or sustainability</li><li>Double-counting across protocols</li><li>Vulnerable to token price changes</li></ul><p><strong>Key resource:</strong> DeFiLlama tracks TVL across all major protocols and chains.</p><p><strong>Why TVL matters:</strong> TVL is the most widely cited DeFi metric because it reflects how much real capital users are willing to commit to a protocol. A rising TVL generally signals growing confidence, while a declining TVL can indicate users withdrawing due to security concerns or better opportunities elsewhere. Analysts often compare TVL-to-market-cap ratios to gauge whether a protocol token is over- or under-valued relative to its actual usage.</p><p><strong>Interpreting TVL changes carefully:</strong> A protocol's TVL can increase simply because the underlying token price rose, not because new capital entered. This makes dollar-denominated TVL misleading during bull markets. To get a clearer picture, track TVL in native token terms alongside dollar values, and check whether growth comes from organic deposits or temporary incentive programs that inflate the numbers artificially.</p>",
    category: "defi",
    relatedTerms: ["liquidity-pool", "yield-farming", "dex", "staking"],
    examples: [
      {
        example:
          "Aave and Lido dominate DeFi with $10B+ TVL each, indicating massive user deposits and trust.",
      },
      {
        example:
          "A protocol's TVL dropping 80% might signal users fleeing due to concerns about safety or sustainability.",
      },
    ],
    faqs: [
      {
        question: "What is TVL in crypto?",
        answer:
          "TVL (Total Value Locked) is the total dollar value of crypto deposited in a DeFi protocol. It measures how much money users have trusted the protocol with.",
      },
      {
        question: "Is high TVL good?",
        answer:
          "Generally yes - it indicates user trust and adoption. But verify TVL is organic, not artificially inflated by unsustainable incentives. Quality matters more than quantity.",
      },
      {
        question: "Where can I check TVL?",
        answer:
          "DeFiLlama (defillama.com) is the standard resource for tracking TVL across all DeFi protocols and blockchains.",
      },
    ],
    metaTitle: "What is TVL? Total Value Locked | IPO Genie",
    relatedBlogSlugs: [
      "staking-vs-pre-ipo-investing",
      "tokenized-securities-vs-traditional-equity",
      "what-is-blockchain-and-how-does-it-work",
      "what-is-the-metaverse-and-how-it-uses-blockchain",
      "what-is-web3-and-how-its-shaping-the-future-of-the-internet",
    ],
  },
  {
    term: "DEX",
    slug: "dex",
    shortDefinition:
      "Decentralized Exchange - trade crypto directly from your wallet without a middleman, using smart contracts instead of company servers.",
    definition:
      "<p>A <strong>DEX (Decentralized Exchange)</strong> enables peer-to-peer crypto trading without intermediaries. Instead of depositing funds with a company, you trade directly from your wallet through smart contracts.</p><p><strong>How DEXs work:</strong></p><ul><li><strong>AMM-based:</strong> Trade against liquidity pools (Uniswap, Curve)</li><li><strong>Order book:</strong> Match buyers and sellers on-chain (dYdX, Serum)</li><li><strong>Aggregators:</strong> Route through multiple DEXs for best price (1inch, Paraswap)</li></ul><p><strong>DEX vs CEX:</strong></p><ul><li><strong>Custody:</strong> DEX = your wallet; CEX = exchange holds funds</li><li><strong>KYC:</strong> DEX = usually none; CEX = required</li><li><strong>Listings:</strong> DEX = permissionless; CEX = curated</li><li><strong>Speed:</strong> DEX = blockchain speed; CEX = instant</li></ul><p><strong>Popular DEXs:</strong> Uniswap (Ethereum), PancakeSwap (BNB), Raydium (Solana), TraderJoe (Avalanche).</p><p><strong>How DEXs compare to centralized exchanges:</strong> Centralized exchanges like Coinbase and Binance offer deeper liquidity, faster execution, and fiat on-ramps, but require KYC verification and hold custody of your funds. DEXs trade those conveniences for self-custody and permissionless access, meaning anyone with a wallet can trade any listed token without approval. Uniswap dominates Ethereum DEX volume, PancakeSwap leads on BNB Chain, and Raydium is the top choice on Solana, each optimized for its chain's speed and fee structure.</p><p><strong>Trade-offs to consider:</strong> DEXs generally have higher slippage on large orders due to lower liquidity compared to CEXs. Gas fees on Ethereum can make small trades uneconomical, though Layer 2 DEXs and Solana-based platforms offer much cheaper alternatives. The lack of KYC provides privacy but also means less regulatory protection if something goes wrong.</p>",
    category: "defi",
    relatedTerms: ["liquidity-pool", "amm", "smart-contract", "ido"],
    examples: [
      {
        example:
          "Uniswap processes billions in monthly volume, all through smart contracts with no company intermediary.",
      },
      {
        example:
          "After FTX collapsed, DEX volume surged as traders moved to non-custodial solutions.",
      },
    ],
    faqs: [
      {
        question: "What is a DEX?",
        answer:
          "A DEX (Decentralized Exchange) lets you trade crypto directly from your wallet using smart contracts. No middleman holds your funds - you maintain custody throughout.",
      },
      {
        question: "Are DEXs safe?",
        answer:
          "DEXs eliminate custodial risk (exchange can't steal or lose your funds), but introduce smart contract risk. Use audited, established DEXs and verify contract addresses.",
      },
      {
        question: "Why use a DEX over Coinbase?",
        answer:
          "Self-custody (you control your keys), no KYC for most trades, access to tokens before CEX listings, and trading continues even if the website goes down.",
      },
    ],
    metaTitle: "What is a DEX? Decentralized Exchange | IPO Genie",
    relatedBlogSlugs: [
      "staking-vs-pre-ipo-investing",
      "tokenized-securities-vs-traditional-equity",
      "what-is-blockchain-and-how-does-it-work",
      "what-is-the-metaverse-and-how-it-uses-blockchain",
      "what-is-web3-and-how-its-shaping-the-future-of-the-internet",
    ],
  },
  {
    term: "AMM",
    slug: "amm",
    shortDefinition:
      "Automated Market Maker - an algorithm that sets prices and enables trading using math formulas instead of traditional order books.",
    definition:
      "<p>An <strong>AMM (Automated Market Maker)</strong> is an algorithm that enables trading without order books. Instead of matching buyers with sellers, AMMs use mathematical formulas to price assets based on supply in liquidity pools.</p><p><strong>The constant product formula:</strong> x * y = k</p><p>Where x and y are token quantities, and k stays constant. When you buy token x, you add y to the pool, changing the ratio and thus the price.</p><p><strong>Popular AMM models:</strong></p><ul><li><strong>Uniswap (x*y=k):</strong> Simple, works for all pairs</li><li><strong>Curve (StableSwap):</strong> Optimized for stablecoins, minimal slippage</li><li><strong>Balancer:</strong> Multi-asset pools with custom weights</li></ul><p><strong>Advantages:</strong> Always-on liquidity, no counterparty needed, permissionless listing. <strong>Disadvantages:</strong> Impermanent loss, MEV exploitation, capital inefficiency.</p><p><strong>How the constant product formula works in depth:</strong> In the x * y = k model, the pool always maintains a fixed product of its two token reserves. When a trader buys token A, they deposit token B, increasing B's supply while decreasing A's. The price shifts along a curve, meaning larger trades cause proportionally more slippage. This differs fundamentally from traditional order book exchanges where prices are set by discrete buy and sell orders placed by market makers and traders.</p><p><strong>Role in the DeFi ecosystem:</strong> AMMs are the backbone of decentralized finance, enabling 24/7 trading without intermediaries. They power not just spot trading but also stablecoin swaps, derivative platforms, and cross-chain bridges. Their permissionless nature means any token can have a market from day one, democratizing access to liquidity that previously required professional market makers.</p>",
    category: "defi",
    relatedTerms: [
      "dex",
      "liquidity-pool",
      "impermanent-loss",
      "smart-contract",
    ],
    examples: [
      {
        example:
          "Uniswap's AMM handles billions in volume using a simple x*y=k formula that anyone can provide liquidity to.",
      },
      {
        example:
          "Curve's StableSwap AMM is optimized for assets that should trade 1:1, minimizing slippage for stablecoin swaps.",
      },
    ],
    faqs: [
      {
        question: "What is an AMM?",
        answer:
          "An AMM (Automated Market Maker) is a smart contract that uses math formulas to set prices and enable trading. It replaces traditional order books with algorithmic pricing based on liquidity pool ratios.",
      },
      {
        question: "How do AMMs set prices?",
        answer:
          "Most use constant product formula (x*y=k). When you buy one token, you add the other to the pool, changing the ratio and thus the price. Large trades cause more price impact (slippage).",
      },
      {
        question: "Why do AMMs cause impermanent loss?",
        answer:
          "AMMs automatically rebalance as prices change. Arbitrageurs profit from price differences, extracting value from LPs. You end up with more of the losing token and less of the winner.",
      },
    ],
    metaTitle: "What is an AMM? Automated Market Maker | IPO Genie",
    relatedBlogSlugs: [
      "staking-vs-pre-ipo-investing",
      "tokenized-securities-vs-traditional-equity",
      "what-is-blockchain-and-how-does-it-work",
      "what-is-the-metaverse-and-how-it-uses-blockchain",
      "what-is-web3-and-how-its-shaping-the-future-of-the-internet",
    ],
  },
  {
    term: "Staking",
    slug: "staking",
    shortDefinition:
      "Locking your crypto to help secure a blockchain network and earn rewards - like earning interest for supporting the system.",
    definition:
      "<p><strong>Staking</strong> is locking cryptocurrency to participate in blockchain operations (validating transactions, securing the network) in exchange for rewards. It's how Proof of Stake blockchains achieve consensus.</p><p><strong>Types of staking:</strong></p><ul><li><strong>Network staking:</strong> Lock tokens to become a validator or delegate to one (ETH, SOL, ADA)</li><li><strong>DeFi staking:</strong> Lock tokens in protocols for rewards (often called 'farming')</li><li><strong>Liquid staking:</strong> Stake while maintaining liquidity via derivative tokens (stETH, rETH)</li></ul><p><strong>Typical rewards:</strong> 3-15% APY depending on the network and market conditions.</p><p><strong>Risks:</strong> Slashing (penalties for validator misbehavior), lock-up periods, token price volatility, smart contract bugs (for liquid staking).</p><p><strong>Proof-of-Stake consensus explained:</strong> In Proof of Stake networks, validators lock tokens as collateral to propose and verify new blocks. If they act honestly, they earn rewards; if they misbehave or go offline, a portion of their stake is slashed as punishment. This mechanism secures the network without the energy-intensive mining required by Proof of Work. Ethereum's transition to PoS in 2022 reduced its energy consumption by over 99%.</p><p><strong>Rewards and lock-up considerations:</strong> Staking APY typically ranges from 3% to 20% depending on the network and total amount staked. Some chains require lock-up periods where staked tokens cannot be withdrawn, ranging from days to weeks. Liquid staking derivatives like Lido's stETH and Rocket Pool's rETH solve this by issuing a tradable token representing your staked position, allowing you to earn staking rewards while still using your capital across DeFi protocols.</p>",
    category: "defi",
    relatedTerms: ["yield-farming", "tvl", "tokenomics", "vesting"],
    examples: [
      {
        example:
          "Ethereum stakers earn ~4% APY for helping secure the network, with 32 ETH required to run your own validator.",
      },
      {
        example:
          "Lido lets you stake any amount of ETH and receive stETH, which you can use in DeFi while still earning staking rewards.",
      },
    ],
    faqs: [
      {
        question: "What is crypto staking?",
        answer:
          "Staking is locking your crypto to help operate a blockchain network. In return, you earn rewards - typically 3-15% APY. It's how Proof of Stake networks secure themselves.",
      },
      {
        question: "Is staking safe?",
        answer:
          "Network staking is generally safe but has risks: token price can drop, some networks have lock-up periods, and validators can be 'slashed' for misbehavior. Liquid staking adds smart contract risk.",
      },
      {
        question: "How much can I earn staking?",
        answer:
          "Varies by network: ETH ~4%, SOL ~6-7%, ATOM ~15-20%. Higher rates often mean higher risk or inflation. Compare real yield (rewards minus inflation).",
      },
    ],
    metaTitle: "What is Staking? Crypto Rewards | IPO Genie",
    relatedBlogSlugs: [
      "staking-vs-pre-ipo-investing",
      "ipo-genie-vs-dao-maker",
      "ipo-genie-vs-seedify",
      "best-crypto-presale-platforms-2026",
      "tokenized-securities-vs-traditional-equity",
    ],
  },
  {
    term: "Airdrop",
    slug: "airdrop",
    shortDefinition:
      "Free tokens distributed to wallet addresses - sometimes for early users, sometimes for marketing, sometimes worth thousands of dollars.",
    definition:
      "<p>An <strong>airdrop</strong> is a distribution of free tokens to wallet addresses. Projects use airdrops to reward early users, decentralize token ownership, generate buzz, or bootstrap network effects.</p><p><strong>Types of airdrops:</strong></p><ul><li><strong>Retroactive:</strong> Reward past users (Uniswap's $UNI to all past traders)</li><li><strong>Snapshot:</strong> Hold specific tokens at a certain time</li><li><strong>Task-based:</strong> Complete actions (follow, retweet, join Discord)</li><li><strong>Loyalty:</strong> Ongoing rewards for active users</li></ul><p><strong>Airdrop hunting:</strong> Using protocols hoping for future airdrops. Successful hunters earned $10,000+ from Uniswap, Arbitrum, and Optimism airdrops.</p><p><strong>Risks:</strong> Scam airdrops (never connect wallet to unknown sites), tax obligations on received tokens, tokens may be worthless.</p><p><strong>Airdrop types in detail:</strong> Retroactive airdrops reward users who interacted with a protocol before the token launch, as Uniswap and Ethereum Name Service famously did. Holder airdrops distribute tokens to wallets holding a specific asset at a snapshot date. Task-based airdrops require completing actions like social media follows, testnet usage, or governance participation. Each type serves a different purpose, from rewarding loyalty to driving adoption and awareness for new projects.</p><p><strong>Tax implications and marketing role:</strong> In most jurisdictions, airdropped tokens are treated as taxable income at their fair market value when received. Recipients should track the value at receipt for tax reporting. From a project perspective, airdrops are powerful marketing tools that simultaneously decentralize token ownership, bootstrap an active community, and create aligned incentives between the protocol and its users. Well-designed airdrops with Sybil resistance tend to produce the most lasting community engagement.</p>",
    category: "trading",
    relatedTerms: [
      "tokenomics",
      "token-allocation",
      "crypto-presale",
      "whitelist",
    ],
    examples: [
      {
        example:
          "Uniswap's 2020 airdrop gave 400 UNI ($1,200+ at launch) to everyone who had ever used the protocol - some received much more.",
      },
      {
        example:
          "Arbitrum's 2023 airdrop rewarded active users with ARB tokens worth $1,000-$10,000+ based on activity levels.",
      },
    ],
    faqs: [
      {
        question: "What is a crypto airdrop?",
        answer:
          "An airdrop is free tokens distributed to wallet addresses. Projects do this to reward users, distribute ownership, or create buzz. Some airdrops have been worth thousands of dollars.",
      },
      {
        question: "How do I get airdrops?",
        answer:
          "Use new protocols early, hold governance tokens, be active in ecosystems. Check airdrop tracking sites but beware of scams - never share seed phrases or connect to suspicious sites.",
      },
      {
        question: "Are airdrops taxable?",
        answer:
          "In most jurisdictions, yes. Airdrops are typically taxed as income at fair market value when received. Consult a tax professional for your specific situation.",
      },
    ],
    metaTitle: "What is an Airdrop? Free Crypto | IPO Genie",
    relatedBlogSlugs: [
      "presale-vs-seed-rounds-vs-pre-ipo-the-complete-comparison",
      "retail-access-private-deals",
      "referral-program-earn-15-percent-extra-ipo",
      "ipo-genie-right-to-be-early",
      "ipo-genie-misfits-boxing-contest-how-to-enter",
    ],
  },
  {
    term: "DAO",
    slug: "dao",
    shortDefinition:
      "Decentralized Autonomous Organization - a community-governed entity where token holders vote on decisions, replacing traditional corporate structures.",
    definition:
      "<p>A <strong>DAO (Decentralized Autonomous Organization)</strong> is an organization governed by smart contracts and token holder votes rather than traditional management. Rules are encoded in code, and decisions are made through proposals and voting.</p><p><strong>How DAOs work:</strong></p><ul><li><strong>Governance tokens:</strong> Ownership = voting power</li><li><strong>Proposals:</strong> Anyone can suggest changes</li><li><strong>Voting:</strong> Token holders vote on proposals</li><li><strong>Execution:</strong> Approved proposals execute automatically</li></ul><p><strong>Common DAO types:</strong></p><ul><li><strong>Protocol DAOs:</strong> Govern DeFi protocols (Uniswap, Aave)</li><li><strong>Investment DAOs:</strong> Pool capital for investments</li><li><strong>Social DAOs:</strong> Membership communities</li><li><strong>Collector DAOs:</strong> Acquire NFTs/assets collectively</li></ul><p><strong>Challenges:</strong> Low voter participation, plutocracy (rich = more votes), coordination difficulties, legal uncertainty.</p><p><strong>How DAOs operate in practice:</strong> Members submit proposals to a governance forum, which are discussed and refined before moving to an on-chain vote. Voting power is typically proportional to token holdings, though some DAOs use quadratic voting or delegation to balance influence. Approved proposals can trigger smart contract actions automatically, such as transferring treasury funds or updating protocol parameters. Notable DAOs include MakerDAO, which manages billions in collateral backing the DAI stablecoin, and Uniswap DAO, which governs the largest DEX with a multi-billion dollar treasury.</p><p><strong>Challenges and governance attacks:</strong> Voter apathy is a persistent problem, with many DAOs seeing under 10% participation rates. This creates vulnerability to governance attacks where a well-funded actor accumulates enough tokens to push through self-serving proposals. Flash loan governance attacks have exploited this in several protocols. Effective DAOs address these issues through minimum quorum requirements, time-locked execution, and delegate systems that let passive holders assign their voting power to trusted community members.</p>",
    category: "blockchain",
    relatedTerms: [
      "governance-token",
      "smart-contract",
      "tokenomics",
      "airdrop",
    ],
    examples: [
      {
        example:
          "MakerDAO governs the DAI stablecoin through MKR token voting, managing billions in collateral through community decisions.",
      },
      {
        example:
          "ConstitutionDAO raised $47M to buy a copy of the Constitution - demonstrating DAO coordination at scale, even though they lost the auction.",
      },
    ],
    faqs: [
      {
        question: "What is a DAO?",
        answer:
          "A DAO is an organization governed by token holders rather than executives. Decisions are made through voting, and rules are enforced by smart contracts. It's decentralized corporate governance.",
      },
      {
        question: "How do I join a DAO?",
        answer:
          "Buy the DAO's governance token to gain voting rights. Participate in forums/Discord to understand proposals. Vote on decisions that matter to you.",
      },
      {
        question: "Are DAOs legal?",
        answer:
          "Legal status varies by jurisdiction. Some states (Wyoming) have DAO-specific laws. Most operate in legal gray areas. Consult a lawyer for serious involvement.",
      },
    ],
    metaTitle: "What is a DAO? Decentralized Organization | IPO Genie",
    relatedBlogSlugs: [
      "ipo-genie-vs-dao-maker",
      "utility-ladder-tokens-10x-or-die",
      "bnb-built-empire-ipo-building-deal-flow",
      "ton-has-telegram-ipo-has-something-better",
      "what-is-blockchain-and-how-does-it-work",
    ],
  },
  {
    term: "Funding Rounds",
    slug: "funding-rounds",
    shortDefinition:
      "The stages of startup financing from pre-seed to IPO - each round brings more capital at higher valuations as the company proves itself.",
    definition:
      "<p><strong>Funding rounds</strong> are the stages of investment a startup goes through as it grows. Each round typically involves selling equity to investors at progressively higher valuations.</p><p><strong>Common rounds:</strong></p><ul><li><strong>Pre-seed:</strong> $50K-$500K from founders, friends, angels</li><li><strong>Seed:</strong> $500K-$5M to prove concept and find product-market fit</li><li><strong>Series A:</strong> $5M-$20M to scale what's working</li><li><strong>Series B:</strong> $20M-$50M to expand market presence</li><li><strong>Series C+:</strong> $50M+ for major expansion or pre-IPO</li><li><strong>IPO/Direct Listing:</strong> Public markets</li></ul><p><strong>Valuation progression:</strong> A company might be valued at $5M (seed), $20M (Series A), $100M (Series B), $500M (Series C), and $2B+ at IPO. Early investors capture most of this growth.</p><p><strong>Round progression and valuation changes:</strong> The typical startup journey follows a clear progression: pre-seed funding validates the idea, seed capital proves the concept, Series A scales what works, Series B expands market presence, and Series C and beyond fuel major growth or prepare for an IPO. Valuations commonly increase 2x to 4x between rounds when a company hits its milestones. However, down rounds do occur when a company raises at a lower valuation than the previous round, signaling trouble and triggering anti-dilution protections for earlier investors.</p><p><strong>Dilution at each stage:</strong> Founders typically give up 10% to 25% of equity per round. By the time a startup reaches Series C, the original founders may own only 15% to 30% of the company. This is why early-stage investing can be so lucrative for VCs, as they buy large ownership stakes at low valuations. Understanding dilution math is essential for any investor evaluating entry points across different funding stages.</p>",
    category: "investing",
    relatedTerms: [
      "valuation",
      "pre-ipo-investing",
      "term-sheet",
      "equity-dilution",
    ],
    examples: [
      {
        example:
          "Stripe raised: Seed ($2M at $20M val), Series A ($18M at $100M), through Series I ($600M at $95B). Early investors saw 4,750x paper returns.",
      },
      {
        example:
          "A typical VC fund expects most companies to fail, but hopes for 100x+ returns from winners to make the portfolio profitable.",
      },
    ],
    faqs: [
      {
        question: "What are funding rounds?",
        answer:
          "Funding rounds are stages of startup investment. Companies raise money in rounds (Seed, Series A, B, C...) at increasing valuations as they grow and prove their business.",
      },
      {
        question: "When is the best time to invest in a startup?",
        answer:
          "Earlier is better for returns but riskier. Seed investors might see 100x+ returns but most startups fail. Later rounds have lower returns but higher certainty.",
      },
      {
        question: "How do I invest in early funding rounds?",
        answer:
          "Traditionally limited to VCs and accredited investors. Platforms like IPO Genie are democratizing access to pre-IPO opportunities previously reserved for institutions.",
      },
    ],
    metaTitle: "What are Funding Rounds? Startup Investment | IPO Genie",
    relatedBlogSlugs: [
      "presale-vs-seed-rounds-vs-pre-ipo-the-complete-comparison",
      "how-to-calculate-startup-valuations",
      "figma-ipo-physics-of-liquidity",
      "inside-ai-scoring-model-high-potential-deals",
      "the-alchemy-of-10x-stocks-what-464-outliers-reveal-about-market-beating-returns",
    ],
  },
  {
    term: "Term Sheet",
    slug: "term-sheet",
    shortDefinition:
      "A non-binding document outlining investment terms - the handshake agreement before lawyers draft the final contracts.",
    definition:
      "<p>A <strong>term sheet</strong> is a non-binding document that outlines the key terms of an investment. It's the starting point for negotiation before binding legal documents are drafted.</p><p><strong>Key term sheet elements:</strong></p><ul><li><strong>Valuation:</strong> Pre-money and post-money valuation</li><li><strong>Investment amount:</strong> How much is being raised</li><li><strong>Equity:</strong> Percentage ownership investors receive</li><li><strong>Liquidation preference:</strong> Who gets paid first in exit</li><li><strong>Board seats:</strong> Investor representation</li><li><strong>Anti-dilution:</strong> Protection against down rounds</li><li><strong>Vesting:</strong> Founder equity vesting schedule</li></ul><p><strong>Red flags:</strong> Excessive liquidation preferences, full ratchet anti-dilution, excessive board control, participating preferred stock.</p><p><strong>Key clauses investors should understand:</strong> Liquidation preference determines who gets paid first in an exit and at what multiple. Anti-dilution provisions protect investors if the company raises at a lower valuation later, with weighted-average being more founder-friendly than full ratchet. Board seat allocation gives investors direct influence over company decisions, including hiring, spending, and strategic direction. Pro-rata rights allow existing investors to maintain their ownership percentage in future rounds.</p><p><strong>Term sheets in crypto and what founders should negotiate:</strong> Token-based projects increasingly use term sheets for SAFT (Simple Agreement for Future Tokens) deals, covering token allocation, vesting schedules, and lock-up periods. Founders should negotiate for single-trigger acceleration on vesting, reasonable liquidation preferences of no more than 1x non-participating, and protective provisions that require super-majority votes. Having experienced legal counsel review every term sheet is critical, as seemingly minor clauses around drag-along rights or information rights can have outsized impact during exits or future fundraising.</p>",
    category: "investing",
    relatedTerms: [
      "funding-rounds",
      "valuation",
      "liquidation-preference",
      "anti-dilution",
    ],
    examples: [
      {
        example:
          "A typical Series A term sheet might show: $10M investment, $40M pre-money valuation, 1x non-participating liquidation preference, one board seat.",
      },
      {
        example:
          "Founders should always have a lawyer review term sheets - seemingly small terms can have major implications in exits.",
      },
    ],
    faqs: [
      {
        question: "What is a term sheet?",
        answer:
          "A term sheet is a non-binding document outlining investment terms before legal contracts are finalized. It covers valuation, investment amount, investor rights, and key deal terms.",
      },
      {
        question: "Is a term sheet binding?",
        answer:
          "Generally no - most provisions are non-binding. However, exclusivity (no-shop) and confidentiality clauses are usually binding. It signals serious intent but isn't the final deal.",
      },
      {
        question: "What should founders watch for?",
        answer:
          "Excessive liquidation preferences (>1x), aggressive anti-dilution, too many board seats, participating preferred, and terms that create misaligned incentives.",
      },
    ],
    metaTitle: "What is a Term Sheet? Investment Terms | IPO Genie",
    relatedBlogSlugs: [
      "presale-vs-seed-rounds-vs-pre-ipo-the-complete-comparison",
      "how-to-calculate-startup-valuations",
      "figma-ipo-physics-of-liquidity",
      "inside-ai-scoring-model-high-potential-deals",
      "the-alchemy-of-10x-stocks-what-464-outliers-reveal-about-market-beating-returns",
    ],
  },
  {
    term: "Liquidation Preference",
    slug: "liquidation-preference",
    shortDefinition:
      "The right to get paid first when a company exits - investors get their money back before founders and employees see anything.",
    definition:
      "<p>A <strong>liquidation preference</strong> determines who gets paid first and how much when a company is sold or liquidated. Preferred shareholders (investors) typically get their money back before common shareholders (founders, employees).</p><p><strong>Types:</strong></p><ul><li><strong>1x non-participating:</strong> Investors get back 1x their investment OR their equity share (whichever is more)</li><li><strong>1x participating:</strong> Investors get 1x back AND their share of remaining proceeds ('double-dip')</li><li><strong>2x, 3x:</strong> Multiples of investment returned first</li></ul><p><strong>Example:</strong> $100M exit, investor owns 20%, invested $30M with 1x non-participating preference. They choose max of $30M (1x) or $20M (20%). They take $30M. With participating preferred, they'd get $30M + 20% of $70M = $44M.</p><p><strong>Impact:</strong> High liquidation preferences can leave founders with nothing in modest exits.</p><p><strong>How preferences shape exit returns:</strong> In any acquisition or liquidation event, investors with liquidation preferences are paid before common shareholders see a single dollar. The most common structure is a 1x preference, meaning investors recoup their original investment first. However, in competitive fundraising environments, investors may negotiate 2x or even 3x multiples, requiring the company to return two or three times the invested capital before other shareholders participate. The distinction between <strong>participating</strong> and <strong>non-participating</strong> preferences is critical. Non-participating preferred holders choose between their preference amount or their pro-rata share of proceeds, whichever is greater. Participating preferred holders receive their preference amount <em>and</em> their pro-rata share of the remaining proceeds, effectively double-dipping. This participating structure can dramatically reduce payouts to founders and employees, especially in moderate exits where the total proceeds barely exceed the preference stack.</p>",
    category: "investing",
    relatedTerms: [
      "term-sheet",
      "funding-rounds",
      "equity-dilution",
      "valuation",
    ],
    examples: [
      {
        example:
          "A company with $50M in liquidation preferences sells for $60M. Investors take $50M, leaving only $10M for everyone else despite building a $60M company.",
      },
      {
        example:
          "In 2008-2009, many startups sold for less than total raised capital, leaving common shareholders with nothing due to liquidation preferences.",
      },
    ],
    faqs: [
      {
        question: "What is liquidation preference?",
        answer:
          "Liquidation preference is the right of investors to get paid before other shareholders when a company exits. It determines the order and amount of payouts in a sale or liquidation.",
      },
      {
        question: "Why does liquidation preference matter?",
        answer:
          "It affects how exit proceeds are distributed. High preferences can mean founders get nothing in moderate exits, even if they built a valuable company.",
      },
      {
        question: "What's a fair liquidation preference?",
        answer:
          "1x non-participating is standard and fair. Be wary of 2x+ multiples or participating preferred, which can significantly reduce founder/employee returns.",
      },
    ],
    metaTitle: "What is Liquidation Preference? Exit Terms | IPO Genie",
    relatedBlogSlugs: [
      "presale-vs-seed-rounds-vs-pre-ipo-the-complete-comparison",
      "how-to-calculate-startup-valuations",
      "figma-ipo-physics-of-liquidity",
      "inside-ai-scoring-model-high-potential-deals",
      "the-alchemy-of-10x-stocks-what-464-outliers-reveal-about-market-beating-returns",
    ],
  },
  {
    term: "Pro-Rata Rights",
    slug: "pro-rata-rights",
    shortDefinition:
      "The right to invest in future rounds to maintain your ownership percentage - protecting early investors from dilution.",
    definition:
      "<p><strong>Pro-rata rights</strong> allow existing investors to participate in future funding rounds to maintain their ownership percentage. Without pro-rata, your stake gets diluted with each new round.</p><p><strong>How it works:</strong></p><ul><li>You own 10% after Series A</li><li>Series B raises $20M at $80M pre-money (20% of company)</li><li>Without pro-rata: Your 10% dilutes to 8%</li><li>With pro-rata: You can invest $2.5M to maintain 10%</li></ul><p><strong>Why it matters:</strong> Early investors want to double down on winners. Pro-rata lets them invest more in companies that are succeeding.</p><p><strong>Common terms:</strong> Major investor (>X% ownership) may have pro-rata rights; smaller investors often don't.</p><p><strong>Why pro-rata rights matter for early investors:</strong> For seed and Series A investors, pro-rata rights are among the most valuable terms in a deal. Early backers gain access to invest additional capital in later rounds at prices that still reflect significant upside. Without these rights, an investor who helped a startup at its riskiest stage could see their ownership steadily shrink through Series B, C, and beyond. Pro-rata rights serve as a critical tool to <strong>prevent dilution</strong> in subsequent funding rounds by allowing investors to purchase enough new shares to maintain their original percentage. In practice, not every investor exercises their pro-rata. Investors may <strong>waive their rights</strong> when they lack the capital to follow on, when the company's trajectory no longer fits their thesis, or when they strategically choose to let other investors lead. Some funds also waive selectively to preserve relationships with co-investors who want larger allocations in oversubscribed rounds.</p>",
    category: "investing",
    relatedTerms: [
      "equity-dilution",
      "term-sheet",
      "funding-rounds",
      "anti-dilution",
    ],
    examples: [
      {
        example:
          "An early investor in Facebook with pro-rata rights could maintain their percentage through every round, turning a small seed check into billions.",
      },
      {
        example:
          "Super pro-rata rights let investors buy more than their proportional share - highly sought after for hot deals.",
      },
    ],
    faqs: [
      {
        question: "What are pro-rata rights?",
        answer:
          "Pro-rata rights let existing investors invest in future funding rounds to maintain their ownership percentage. It protects against dilution as the company raises more capital.",
      },
      {
        question: "Are pro-rata rights valuable?",
        answer:
          "Very valuable for successful companies. The ability to invest more in winners is crucial for venture returns. Less valuable if the company struggles.",
      },
      {
        question: "Who typically gets pro-rata rights?",
        answer:
          "Usually 'major investors' above a threshold (e.g., >5% ownership). Smaller investors often don't receive pro-rata rights.",
      },
    ],
    metaTitle: "What are Pro-Rata Rights? Investor Rights | IPO Genie",
    relatedBlogSlugs: [
      "figma-ipo-physics-of-liquidity",
      "inside-ai-scoring-model-high-potential-deals",
      "the-alchemy-of-10x-stocks-what-464-outliers-reveal-about-market-beating-returns",
      "disagreement-predicts-startup-success",
      "pre-ipo-investing-beginners-guide",
    ],
  },
  {
    term: "Anti-Dilution",
    slug: "anti-dilution",
    shortDefinition:
      "Protection against down rounds - if the company raises at a lower valuation, your shares get adjusted so you don't lose as much.",
    definition:
      "<p><strong>Anti-dilution provisions</strong> protect investors if a company raises money at a lower valuation than their round (a 'down round'). The investor's price per share is adjusted downward, giving them more shares.</p><p><strong>Types:</strong></p><ul><li><strong>Full ratchet:</strong> Investor price adjusts to the new lower price (very aggressive)</li><li><strong>Weighted average:</strong> Adjusts based on how much was raised at lower price (more fair)</li><li><strong>Broad-based weighted average:</strong> Includes all shares in calculation (founder-friendly)</li></ul><p><strong>Example:</strong> Investor bought at $10/share. Down round at $5/share. Full ratchet: their price becomes $5, doubling their shares. Weighted average: adjustment is proportional to down-round size.</p><p><strong>Impact:</strong> Anti-dilution can crush founder ownership in down rounds.</p><p><strong>Full ratchet vs weighted average in detail:</strong> Under a <strong>full ratchet</strong> provision, the investor's conversion price resets entirely to match the lower price of the new round, regardless of how many shares are issued. This is the most aggressive form and can transfer enormous ownership from founders to investors even if only a small amount is raised at the lower price. In contrast, <strong>weighted average</strong> anti-dilution calculates a new conversion price based on the number of shares issued at the lower price relative to total outstanding shares. The more shares sold cheaply, the greater the adjustment, but it remains proportional. Anti-dilution provisions become especially important during <strong>down rounds</strong>, when market corrections or missed milestones force companies to raise at reduced valuations. In these scenarios, founders should negotiate for broad-based weighted average protections during initial funding to minimize the ownership impact if conditions deteriorate later.</p>",
    category: "investing",
    relatedTerms: [
      "down-round",
      "term-sheet",
      "equity-dilution",
      "pro-rata-rights",
    ],
    examples: [
      {
        example:
          "Square's 2016 IPO was a 'down round' from their last private valuation, triggering anti-dilution for some investors.",
      },
      {
        example:
          "During 2022's market correction, many startups faced down rounds and founders learned the painful impact of anti-dilution clauses.",
      },
    ],
    faqs: [
      {
        question: "What is anti-dilution protection?",
        answer:
          "Anti-dilution protects investors if the company raises money at a lower valuation. Their effective share price is adjusted down, giving them more shares.",
      },
      {
        question:
          "What's the difference between full ratchet and weighted average?",
        answer:
          "Full ratchet adjusts to the exact lower price (very investor-friendly). Weighted average considers how much was raised at lower price (more balanced). Most deals use weighted average.",
      },
      {
        question: "Is anti-dilution bad for founders?",
        answer:
          "Full ratchet is punishing; broad-based weighted average is reasonable. In down rounds, anti-dilution transfers ownership from common (founders/employees) to preferred (investors).",
      },
    ],
    metaTitle: "What is Anti-Dilution? Investor Protection | IPO Genie",
    relatedBlogSlugs: [
      "presale-vs-seed-rounds-vs-pre-ipo-the-complete-comparison",
      "how-to-calculate-startup-valuations",
      "figma-ipo-physics-of-liquidity",
      "inside-ai-scoring-model-high-potential-deals",
      "the-alchemy-of-10x-stocks-what-464-outliers-reveal-about-market-beating-returns",
    ],
  },
  {
    term: "Down Round",
    slug: "down-round",
    shortDefinition:
      "Raising money at a lower valuation than your previous round - a sign of struggle that often triggers painful anti-dilution provisions.",
    definition:
      "<p>A <strong>down round</strong> occurs when a company raises funding at a valuation lower than its previous round. It signals that the company hasn't met expectations or market conditions have deteriorated.</p><p><strong>Consequences:</strong></p><ul><li><strong>Anti-dilution triggers:</strong> Previous investors get more shares</li><li><strong>Founder dilution:</strong> Ownership shrinks significantly</li><li><strong>Employee morale:</strong> Stock options may be underwater</li><li><strong>Signal:</strong> Negative perception in the market</li></ul><p><strong>When down rounds happen:</strong></p><ul><li>Company missed milestones</li><li>Market conditions changed (see 2022)</li><li>Competitive position weakened</li><li>Running out of money with no alternatives</li></ul><p><strong>Alternatives:</strong> Bridge financing, revenue-based financing, strategic partnerships, or cost cutting to avoid down round.</p><p><strong>What triggers down rounds and their broader effects:</strong> Down rounds are typically triggered by a combination of factors: the company burning through cash faster than expected, failing to hit revenue or user growth targets, macroeconomic shifts that compress valuations industry-wide, or increased competition eroding market position. Beyond the financial mechanics, down rounds carry significant <strong>psychological and practical effects on cap tables</strong>. Existing investors may lose confidence, employee option pools become underwater and need repricing, and the founder's negotiating position weakens considerably. Anti-dilution clauses activate, shifting ownership percentages in favor of preferred shareholders and further compressing common stock value. However, down rounds can also <strong>create opportunities for new investors</strong> who enter at a more realistic valuation. These investors often secure favorable terms, including stronger board seats, enhanced liquidation preferences, and protective provisions that reflect their leverage in the negotiation. For disciplined buyers, a down round can represent excellent entry pricing into a fundamentally sound business that was simply overvalued in a frothier market.</p>",
    category: "investing",
    relatedTerms: [
      "anti-dilution",
      "funding-rounds",
      "valuation",
      "term-sheet",
    ],
    examples: [
      {
        example:
          "In 2022-2023, many startups that raised at peak 2021 valuations faced down rounds as public market comparables crashed 50-80%.",
      },
      {
        example:
          "Stripe raised at $95B in 2021, then was reportedly valued at $50B in 2023 - a down round that affected employee equity significantly.",
      },
    ],
    faqs: [
      {
        question: "What is a down round?",
        answer:
          "A down round is when a company raises money at a lower valuation than their previous funding round. It dilutes existing shareholders, especially founders and employees.",
      },
      {
        question: "Why do down rounds happen?",
        answer:
          "Missed growth targets, market corrections, increased competition, or simply needing money with no better options. The 2022-2023 period saw many down rounds after 2021's peak valuations.",
      },
      {
        question: "How bad is a down round for founders?",
        answer:
          "Depends on anti-dilution provisions. With full ratchet anti-dilution, founders can lose massive ownership. With weighted average, the impact is more moderate but still painful.",
      },
    ],
    metaTitle: "What is a Down Round? Valuation Drop | IPO Genie",
    relatedBlogSlugs: [
      "presale-vs-seed-rounds-vs-pre-ipo-the-complete-comparison",
      "how-to-calculate-startup-valuations",
      "figma-ipo-physics-of-liquidity",
      "inside-ai-scoring-model-high-potential-deals",
      "the-alchemy-of-10x-stocks-what-464-outliers-reveal-about-market-beating-returns",
    ],
  },
  {
    term: "Convertible Note",
    slug: "convertible-note",
    shortDefinition:
      "Debt that converts to equity in the next funding round - a fast way to raise early money without setting a valuation.",
    definition:
      "<p>A <strong>convertible note</strong> is a loan that converts into equity during a future funding round. It lets startups raise money quickly without negotiating a valuation - the conversion price is based on the next round.</p><p><strong>Key terms:</strong></p><ul><li><strong>Discount:</strong> Converts at 10-25% below next round price</li><li><strong>Valuation cap:</strong> Maximum valuation for conversion (protects early investors)</li><li><strong>Interest rate:</strong> Typically 2-8%, accrues and converts to equity</li><li><strong>Maturity date:</strong> When the note must be repaid or converted</li></ul><p><strong>Example:</strong> $500K note with 20% discount and $10M cap. Series A at $15M valuation. Investor converts at $10M cap (better than $12M with discount), getting 5% ownership instead of 3.3%.</p><p><strong>Alternatives:</strong> SAFE (Simpler Agreement for Future Equity) - similar but no interest or maturity date.</p><p><strong>Cap and discount mechanics:</strong> The <strong>valuation cap</strong> sets a ceiling on the conversion price, ensuring early investors benefit if the company's valuation soars by the next round. The <strong>discount</strong> provides a percentage reduction off the next round's price, rewarding investors for the additional risk of investing earlier. When both a cap and discount apply, the investor typically converts at whichever term yields more shares. Convertible notes are generally preferable to priced rounds when speed matters, legal costs need to stay low, or when a fair valuation is difficult to establish at an early stage. Their evolution led to Y Combinator's creation of the <strong>SAFE</strong> in 2013, which eliminates the debt component entirely - no interest accrual, no maturity date, and simpler legal documentation. SAFEs have since become the dominant instrument for pre-seed and seed fundraising in Silicon Valley and beyond.</p>",
    category: "investing",
    relatedTerms: [
      "funding-rounds",
      "valuation",
      "term-sheet",
      "pre-ipo-investing",
    ],
    examples: [
      {
        example:
          "Y Combinator's standard SAFE (similar to convertible note) is used by thousands of startups - simple, fast, founder-friendly.",
      },
      {
        example:
          "A startup might raise $1M on convertible notes in 2 weeks vs 2 months for a priced equity round, preserving runway while seeking product-market fit.",
      },
    ],
    faqs: [
      {
        question: "What is a convertible note?",
        answer:
          "A convertible note is a loan that converts to equity in a future funding round. It lets startups raise money without setting a valuation, deferring that negotiation to later.",
      },
      {
        question: "What's better - convertible note or priced round?",
        answer:
          "Notes are faster and simpler for early stages. Priced rounds provide more clarity and structure for larger raises. Most seed rounds use notes/SAFEs; Series A+ usually priced.",
      },
      {
        question: "What's a reasonable cap and discount?",
        answer:
          "Typical terms: 15-25% discount, $3-15M cap depending on stage and market. Lower caps and higher discounts favor investors; higher caps favor founders.",
      },
    ],
    metaTitle: "What is a Convertible Note? Startup Debt | IPO Genie",
    relatedBlogSlugs: [
      "presale-vs-seed-rounds-vs-pre-ipo-the-complete-comparison",
      "how-to-calculate-startup-valuations",
      "figma-ipo-physics-of-liquidity",
      "inside-ai-scoring-model-high-potential-deals",
      "the-alchemy-of-10x-stocks-what-464-outliers-reveal-about-market-beating-returns",
    ],
  },
  {
    term: "Gas Fees",
    slug: "gas-fees",
    shortDefinition:
      "Transaction fees paid to process your blockchain transaction - the cost of computation on decentralized networks.",
    definition:
      "<p><strong>Gas fees</strong> are payments made to validators/miners to process and validate blockchain transactions. They compensate for the computational energy required to execute operations.</p><p><strong>How gas works (Ethereum):</strong></p><ul><li><strong>Gas units:</strong> Measure of computational work (e.g., 21,000 for simple transfer)</li><li><strong>Gas price:</strong> Cost per unit, measured in gwei (1 gwei = 0.000000001 ETH)</li><li><strong>Total fee:</strong> Gas units × Gas price</li><li><strong>Priority fee:</strong> Tip to validators for faster inclusion</li></ul><p><strong>Why fees vary:</strong> Network congestion drives up gas prices. During NFT mints or market crashes, fees can spike 10-100x.</p><p><strong>Optimization:</strong> Use Layer 2s (Arbitrum, Optimism), transact during low-traffic hours, batch transactions, or use cheaper chains for small amounts.</p><p><strong>What determines gas prices:</strong> Gas costs are driven primarily by <strong>network congestion</strong> and <strong>transaction complexity</strong>. A simple ETH transfer requires around 21,000 gas units, while interacting with a complex smart contract such as a multi-hop DEX swap or an NFT mint can consume hundreds of thousands of gas units. When many users compete for limited block space simultaneously, the base fee rises through Ethereum's EIP-1559 mechanism, and users bid higher priority fees to get included faster. <strong>Strategies to reduce gas costs</strong> include using gas tracker tools to identify off-peak windows, batching multiple operations into a single transaction, and choosing protocols that optimize contract efficiency. <strong>Layer 2 solutions</strong> like Arbitrum, Optimism, and Base bundle hundreds of transactions together and settle them on Ethereum mainnet, reducing per-transaction costs by 90% or more. Alternative Layer 1 chains such as Solana and Avalanche offer inherently lower fees through different consensus mechanisms, though they may trade some degree of decentralization for that affordability.</p>",
    category: "blockchain",
    relatedTerms: ["smart-contract", "layer-2", "dex", "staking"],
    examples: [
      {
        example:
          "During the 2021 NFT boom, Ethereum gas fees exceeded $100 for simple transactions, making small trades economically impossible.",
      },
      {
        example:
          "Solana and BNB Chain charge fractions of a cent per transaction, attracting users priced out of Ethereum.",
      },
    ],
    faqs: [
      {
        question: "What are gas fees?",
        answer:
          "Gas fees are transaction costs on blockchain networks. They compensate validators for processing your transaction. Fees vary based on network congestion and transaction complexity.",
      },
      {
        question: "Why are Ethereum gas fees so high?",
        answer:
          "High demand for limited block space. When many people want transactions processed, they bid up gas prices. Layer 2 solutions and Ethereum upgrades are addressing this.",
      },
      {
        question: "How can I reduce gas fees?",
        answer:
          "Use Layer 2s (Arbitrum, Optimism), transact during off-peak hours (weekends, late night), use gas trackers to find cheap windows, or batch multiple operations.",
      },
    ],
    metaTitle: "What are Gas Fees? Transaction Costs | IPO Genie",
    relatedBlogSlugs: [
      "what-is-blockchain-and-how-does-it-work",
      "what-is-the-metaverse-and-how-it-uses-blockchain",
      "what-is-web3-and-how-its-shaping-the-future-of-the-internet",
      "how-to-spot-token-red-flags",
      "staking-vs-pre-ipo-investing",
    ],
  },
  {
    term: "Layer 2",
    slug: "layer-2",
    shortDefinition:
      "Scaling solutions built on top of blockchains that enable faster, cheaper transactions while inheriting the security of the main chain.",
    definition:
      "<p><strong>Layer 2</strong> refers to protocols built on top of a base blockchain (Layer 1) to improve scalability. They process transactions off the main chain while inheriting its security.</p><p><strong>Types of Layer 2s:</strong></p><ul><li><strong>Optimistic rollups:</strong> Assume transactions valid, fraud proofs if disputed (Arbitrum, Optimism)</li><li><strong>ZK rollups:</strong> Use zero-knowledge proofs to verify transactions (zkSync, StarkNet)</li><li><strong>State channels:</strong> Off-chain transactions between parties (Lightning Network)</li><li><strong>Sidechains:</strong> Separate chains with own security (Polygon PoS)</li></ul><p><strong>Benefits:</strong> 10-100x cheaper fees, faster confirmations, same security as Layer 1 (for rollups).</p><p><strong>Popular L2s:</strong> Arbitrum, Optimism, Base (Ethereum); Lightning Network (Bitcoin).</p><p><strong>Major L2 solutions and how rollups work:</strong> The leading Ethereum L2s include <strong>Arbitrum</strong>, the largest by total value locked, <strong>Optimism</strong>, which powers the OP Stack framework, <strong>Base</strong>, Coinbase's L2 built on the OP Stack, and <strong>zkSync</strong>, a pioneer in zero-knowledge rollup technology. Rollups work by executing transactions off-chain and then posting compressed transaction data back to Ethereum mainnet. <strong>Optimistic rollups</strong> assume all transactions are valid by default and rely on a challenge period during which anyone can submit a fraud proof if they detect an invalid transaction. <strong>ZK rollups</strong> take a different approach, generating cryptographic validity proofs that mathematically guarantee correctness before data is posted on-chain, enabling faster finality. L2s are <strong>critical for DeFi scalability</strong> because decentralized trading, lending, and yield farming require frequent, low-cost transactions that are economically impractical on Ethereum mainnet during periods of high congestion. By offloading execution to L2s while preserving Ethereum's security guarantees, the ecosystem can support millions of users and billions in transaction volume without prohibitive fees.</p>",
    category: "blockchain",
    relatedTerms: ["gas-fees", "smart-contract", "dex", "staking"],
    examples: [
      {
        example:
          "Arbitrum processes transactions for ~$0.10 vs $5+ on Ethereum mainnet, while inheriting Ethereum's security.",
      },
      {
        example:
          "Coinbase launched Base (L2) to offer cheap, fast transactions while maintaining connection to Ethereum.",
      },
    ],
    faqs: [
      {
        question: "What is Layer 2?",
        answer:
          "Layer 2s are scaling solutions built on top of main blockchains. They process transactions faster and cheaper while using the underlying chain for security and settlement.",
      },
      {
        question: "Is Layer 2 as secure as Ethereum?",
        answer:
          "Rollups (Arbitrum, Optimism, zkSync) inherit Ethereum's security since they post proofs to mainnet. Sidechains have their own security, which may be weaker.",
      },
      {
        question: "Should I use Layer 2s?",
        answer:
          "For most DeFi activities, yes - significantly cheaper with similar security. Bridge assets from mainnet, or buy directly on L2 through exchanges that support withdrawals there.",
      },
    ],
    metaTitle: "What is Layer 2? Blockchain Scaling | IPO Genie",
    relatedBlogSlugs: [
      "best-crypto-presale-platforms-2026",
      "what-is-blockchain-and-how-does-it-work",
      "what-is-the-metaverse-and-how-it-uses-blockchain",
      "what-is-web3-and-how-its-shaping-the-future-of-the-internet",
      "how-to-spot-token-red-flags",
    ],
  },
  {
    term: "RWA",
    slug: "rwa",
    shortDefinition:
      "Real World Assets tokenized on blockchain - bringing stocks, real estate, bonds, and commodities on-chain for 24/7 trading and fractional ownership.",
    definition:
      "<p><strong>RWA (Real World Assets)</strong> refers to traditional assets tokenized on blockchain - representing physical or financial assets as digital tokens. This brings traditional finance on-chain.</p><p><strong>Types of RWAs:</strong></p><ul><li><strong>Securities:</strong> Stocks, bonds, treasuries (Ondo, Backed)</li><li><strong>Real estate:</strong> Property fractional ownership (RealT, Lofty)</li><li><strong>Commodities:</strong> Gold, silver tokens (PAXG, tGOLD)</li><li><strong>Private credit:</strong> Loans and credit facilities (Maple, Centrifuge)</li></ul><p><strong>Benefits:</strong> 24/7 trading, fractional ownership, global access, programmable finance, reduced intermediaries.</p><p><strong>Challenges:</strong> Regulatory compliance, custody of underlying assets, oracle reliability, legal enforceability.</p><p><strong>What is being tokenized and why it matters:</strong> The fastest-growing RWA categories include <strong>tokenized U.S. Treasuries</strong>, which offer on-chain yield backed by government bonds, <strong>real estate</strong> fractionalized into affordable tokens representing rental income shares, and <strong>commodities</strong> like gold that can be transferred instantly without physical custody logistics. Major RWA protocols driving adoption include <strong>Ondo Finance</strong> for tokenized treasuries and bonds, <strong>Centrifuge</strong> for structured credit, and <strong>MakerDAO</strong>, which has allocated billions in collateral to real-world assets. On the regulatory front, jurisdictions like Singapore, the EU under MiCA, and Switzerland have made meaningful progress in creating legal frameworks for tokenized securities. <strong>RWA is widely considered the bridge between TradFi and DeFi</strong> because it introduces stable, yield-bearing, familiar asset classes into on-chain ecosystems, attracting institutional capital that would otherwise remain in traditional markets. By combining the transparency and composability of blockchain with the reliability of real-world collateral, RWA protocols are building the foundation for a more inclusive and efficient global financial system.</p>",
    category: "blockchain",
    relatedTerms: ["sto", "smart-contract", "tokenomics", "pre-ipo-investing"],
    examples: [
      {
        example:
          "BlackRock's BUIDL fund tokenizes US Treasuries on Ethereum, offering 24/7 settlement and yields.",
      },
      {
        example:
          "RealT lets investors buy fractional ownership in US rental properties for as little as $50, receiving rent in stablecoins.",
      },
    ],
    faqs: [
      {
        question: "What are Real World Assets in crypto?",
        answer:
          "RWAs are traditional assets (stocks, real estate, bonds, commodities) represented as tokens on blockchain. They bring traditional finance benefits (stability, yield) to crypto rails.",
      },
      {
        question: "Why tokenize real world assets?",
        answer:
          "24/7 trading, fractional ownership, global access, programmable finance, instant settlement, and reduced intermediary costs. It makes traditional assets more accessible and efficient.",
      },
      {
        question: "Are RWA tokens legal?",
        answer:
          "Depends on the asset and jurisdiction. Securities-backed tokens must comply with securities laws. Projects like Ondo and Backed work within regulatory frameworks.",
      },
    ],
    metaTitle: "What are RWAs? Real World Assets | IPO Genie",
    relatedBlogSlugs: [
      "what-is-blockchain-and-how-does-it-work",
      "what-is-the-metaverse-and-how-it-uses-blockchain",
      "what-is-web3-and-how-its-shaping-the-future-of-the-internet",
      "how-to-spot-token-red-flags",
      "presale-vs-seed-rounds-vs-pre-ipo-the-complete-comparison",
    ],
  },
  {
    term: "STO",
    slug: "sto",
    shortDefinition:
      "Security Token Offering - a regulated token sale representing real securities, combining crypto efficiency with legal compliance.",
    definition:
      "<p>A <strong>Security Token Offering (STO)</strong> is a regulated token sale where tokens represent ownership in real assets or companies. Unlike utility tokens, security tokens comply with securities regulations.</p><p><strong>What STOs represent:</strong></p><ul><li>Equity in a company (like stock)</li><li>Debt obligations (like bonds)</li><li>Revenue share agreements</li><li>Real estate ownership</li></ul><p><strong>Benefits over ICOs:</strong></p><ul><li>Regulatory compliance (SEC, etc.)</li><li>Investor protection</li><li>Legal enforceability</li><li>Institutional participation</li></ul><p><strong>Challenges:</strong> Higher compliance costs, limited to accredited investors often, less liquid markets, complex legal structure.</p><p><strong>Platforms:</strong> Securitize, Polymath, tZERO, Harbor.</p><p><strong>How STOs differ from ICOs and their regulatory landscape:</strong> The core distinction between STOs and ICOs lies in <strong>regulatory compliance</strong>. While the 2017-2018 ICO boom saw thousands of tokens sold with minimal oversight, often skirting securities laws, STOs explicitly register as securities offerings under frameworks like the SEC's Regulation D (accredited investors), Regulation A+ (broader public access), or Regulation S (international investors). The <strong>SEC's stance</strong> has been clear: tokens that represent an investment contract are securities and must comply with existing laws. Notable successful STOs include <strong>Securitize's</strong> tokenization of KKR fund interests, <strong>tZERO's</strong> security token exchange, and <strong>SPiCE VC's</strong> tokenized venture fund that enabled secondary trading of traditionally illiquid VC positions. As <strong>regulation matures</strong> globally, STOs are positioned to gain significant traction. Clearer legal frameworks reduce uncertainty for issuers and investors alike, and institutional adoption is accelerating as major financial firms recognize that compliant tokenized securities can reduce settlement times, lower costs, and unlock liquidity in previously illiquid asset classes.</p>",
    category: "trading",
    relatedTerms: ["ico", "rwa", "pre-ipo-investing", "tokenomics"],
    examples: [
      {
        example:
          "SPiCE VC tokenized their venture fund, allowing secondary trading of VC fund interests - traditionally illiquid.",
      },
      {
        example:
          "Overstock's tZERO exchange trades security tokens including its own TZROP token.",
      },
    ],
    faqs: [
      {
        question: "What is a Security Token Offering?",
        answer:
          "An STO is a regulated token sale where tokens represent real securities (equity, debt, etc.). Unlike ICOs, STOs comply with securities laws and offer investor protections.",
      },
      {
        question: "How is an STO different from an ICO?",
        answer:
          "ICOs sold utility tokens with minimal regulation. STOs sell securities, requiring compliance with SEC/regulators, KYC/AML, and investor accreditation. More legal protection but more restrictions.",
      },
      {
        question: "Can anyone invest in STOs?",
        answer:
          "Often limited to accredited investors due to regulations. Some STOs use Reg A+ or Reg CF for broader access, but this varies by offering and jurisdiction.",
      },
    ],
    metaTitle: "What is an STO? Security Token Offering | IPO Genie",
    relatedBlogSlugs: [
      "stop-buying-tokens-start-buying-access",
      "the-alchemy-of-10x-stocks-what-464-outliers-reveal-about-market-beating-returns",
      "stripe-valuation-lessons-private-investors",
      "spacex-early-investors-100x-whats-next",
      "what-is-a-crypto-presale-and-how-does-it-work",
    ],
  },
  {
    term: "Whitelist",
    slug: "whitelist",
    shortDefinition:
      "An approved list of wallet addresses allowed to participate in a token sale, NFT mint, or exclusive access event.",
    definition:
      "<p>A <strong>whitelist</strong> is a list of approved wallet addresses that can participate in a specific event - typically a token sale, NFT mint, or airdrop. Being whitelisted guarantees you access that others don't have.</p><p><strong>How to get whitelisted:</strong></p><ul><li><strong>Social tasks:</strong> Follow, retweet, join Discord</li><li><strong>Holding requirements:</strong> Hold specific tokens</li><li><strong>Early activity:</strong> Use platform before public launch</li><li><strong>Referrals:</strong> Invite others to join</li><li><strong>Lottery:</strong> Random selection from applicants</li></ul><p><strong>Why whitelists exist:</strong></p><ul><li>Prevent bots from sniping all supply</li><li>Reward early community members</li><li>Compliance (KYC'd addresses only)</li><li>Create scarcity and FOMO</li></ul><p><strong>How whitelisting works in practice:</strong> The typical whitelisting process involves <strong>KYC verification</strong> (submitting identity documents to prove eligibility) and <strong>wallet registration</strong> (connecting your crypto wallet to the project's platform so it can be added to the approved list). Some projects use on-chain Merkle proofs to verify whitelist status during the smart contract interaction, while others maintain off-chain databases. Projects use whitelists to ensure fair distribution, comply with regulatory requirements, and build a committed early community. <strong>Early access benefits</strong> for whitelisted participants often include lower token prices, guaranteed allocation before public sale, exclusive bonus tokens, and priority access to limited supply. To <strong>improve your chances of getting whitelisted</strong>, engage genuinely with the project's community early, contribute to Discord discussions, participate in testnet activities, and build a track record across multiple platforms. Following project announcements closely is essential, as whitelist windows are often short and fill up quickly. Being active on social media and maintaining a clean wallet history with legitimate on-chain activity also helps establish credibility with project teams.</p>",
    category: "trading",
    relatedTerms: [
      "crypto-presale",
      "airdrop",
      "ido",
      "token-generation-event",
    ],
    examples: [
      {
        example:
          "Bored Ape Yacht Club's whitelist let early supporters mint at 0.08 ETH - those NFTs later traded for 100+ ETH.",
      },
      {
        example:
          "Many IDO platforms require staking their token to get whitelisted for new launches.",
      },
    ],
    faqs: [
      {
        question: "What is a whitelist in crypto?",
        answer:
          "A whitelist is an approved list of wallet addresses allowed to participate in a token sale, NFT mint, or exclusive event. It's like a VIP list for crypto launches.",
      },
      {
        question: "How do I get whitelisted?",
        answer:
          "Complete required tasks (social follows, Discord activity), hold specified tokens, or participate in lotteries. Each project has different requirements - check their announcements.",
      },
      {
        question: "Is being whitelisted guaranteed profit?",
        answer:
          "No. Being whitelisted just gives you access to buy. The investment might still lose money if the project fails or token price drops post-launch.",
      },
    ],
    metaTitle: "What is a Whitelist? Crypto Access | IPO Genie",
    relatedBlogSlugs: [
      "best-crypto-presale-platforms-2026",
      "presale-vs-seed-rounds-vs-pre-ipo-the-complete-comparison",
      "referral-program-earn-15-percent-extra-ipo",
      "ipo-genie-right-to-be-early",
      "ipo-genie-misfits-boxing-contest-how-to-enter",
    ],
  },
];
export { e as glossary };
