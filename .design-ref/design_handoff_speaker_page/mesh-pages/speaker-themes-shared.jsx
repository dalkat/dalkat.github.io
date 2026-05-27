// Shared theme data for /speaker variations J/K/L.
// Three POV themes, each with explicit items pulled from the speaker
// dataset. Variation I (speaker-i.jsx) keeps its own local copy on
// purpose so it stays self-contained — these three new variations
// share this source of truth.

(function () {
  const { MESH } = window;
  const { C } = MESH;

  window.SPEAKER_THEMES = [
    {
      id: 'entrepreneurship',
      eyebrow: 'A point of view on',
      title: 'The startup journey',
      tint: C.teal,
      thesis:
        'What it actually takes to go 0→1, why scrappiness is the wrong advice for first-gen founders, and what an edge-innovation team looks like when it ships instead of running great Miro workshops.',
      items: [
        { kind: 'Essay',    title: 'Why First-Gen Founders Need to Learn to Spend',                where: "Entrepreneur's Handbook",                      year: 2023 },
        { kind: 'Podcast',  title: 'Building Early-stage Startups & Adjusting to Market Signals', where: 'The Prodcast',                                 year: 2021 },
        { kind: 'Podcast',  title: 'Startup Journey — 0 to 1, Retention, Virality',               where: 'BRAVE',                                        year: 2021 },
        { kind: 'AMA',      title: 'Entrepreneurship AMA',                                         where: 'Journal',                                      year: 2021 },
        { kind: 'Workshop', title: 'An Algorithm for Growth',                                      where: 'Princeton Social Entrepreneurship Conference', year: 2015 },
        { kind: 'Textbook', title: "Entrepreneurial Finance: Uber's Path to Success",              where: 'MIT Press',                                    year: 2014 },
      ],
    },
    {
      id: 'product',
      eyebrow: 'A point of view on',
      title: 'Product & business',
      tint: C.coral,
      thesis:
        'Most products today feel like the same grey corridor. I write and speak about applying architectural thinking — rooms, thresholds, light, hospitality — to consumer product design.',
      items: [
        { kind: 'Newsletter',         title: 'Interspace: Architectural Thinking for Product Design', where: 'Substack',                     year: '2025–6' },
        { kind: 'Workshop',           title: 'Mobile: Meet Your Users Where They Are',                where: 'Stripe',                       year: 2024 },
        { kind: 'University Lecture', title: 'Digital Networks and Growth',                            where: 'Princeton University',         year: 2020 },
        { kind: 'University Lecture', title: 'Human-Centered Design & Storytelling',                   where: 'Princeton University',         year: 2019 },
        { kind: 'Article',            title: '9 Steps to Unlock Your Company\u2019s Competitive Edge', where: 'The Startup · LinkedIn',       year: 2019 },
        { kind: 'Whitepaper',         title: 'Business Practice Redesign & The Future of Work',        where: 'Deloitte Center for the Edge', year: 2018 },
        { kind: 'Twitter Spaces',     title: 'Building Presently',                                     where: 'Journal',                      year: 2021 },
        { kind: 'Workshop',           title: 'Introduction to Human-Centered Design',                  where: 'NameCoach Fellowship',         year: 2019 },
      ],
    },
    {
      id: 'culture',
      eyebrow: 'A point of view on',
      title: 'Culture-building',
      tint: C.plum,
      thesis:
        "I came up in international affairs before I came up in product. My early work — and a senior thesis at Princeton — looked at how shared work can bridge groups that don't otherwise share much. I still bring that lens to org and product design.",
      items: [
        { kind: 'Book',       title: 'Improving Arab-Jewish Relations in Israel Through Workforce Integration', where: 'Princeton University', year: 2015 },
        { kind: 'Whitepaper', title: 'A New Home at Work: Fostering Inclusion for Refugee Employees',           where: 'Deloitte',             year: 2019 },
        { kind: 'Conference', title: 'Bridging Cultural Divides at Work',                                        where: 'Women Design Talks',   year: 2019 },
        { kind: 'Podcast',    title: 'Creating More Inclusive Workplaces',                                       where: 'Way We Lead',          year: 2019 },
        { kind: 'Podcast',    title: 'Changemakers',                                                             where: 'Changemakers',         year: 2020 },
        { kind: 'Event',      title: 'Using Workplace Diversity to Bridge Divides',                              where: 'Deloitte D-Talks',     year: 2018 },
        { kind: 'Event',      title: 'Retaining Top Talent Through a Culture of Intrapreneurship',               where: 'Deloitte',             year: 2018 },
        { kind: 'Event',      title: 'Fostering Understanding & Inclusion in Israel-Palestine',                  where: 'IPF Atid',             year: 2019 },
      ],
    },
  ];

  // Pale palette tints (sky, butter, mint, peach, rose) read as washed
  // out when used as chip ink. Swap to a darker companion so every chip
  // has the same legibility floor.
  const INK_BY_TINT = new Map([
    [C.sky,    '#3a5b8c'],
    [C.butter, '#8a6a1f'],
    [C.mint,   '#3d7a5a'],
    [C.peach,  '#a8552a'],
    [C.rose,   '#a64158'],
  ]);
  window.speakerChipInk = (tint) => INK_BY_TINT.get(tint) || tint;
})();
