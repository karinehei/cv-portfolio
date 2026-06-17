import type { Locale, SiteTranslations } from "./types";

const en: SiteTranslations = {
  skipLink: "Skip to main content",
  logoLabel: "QA Portfolio — return to home",
  logoText: "QA Portfolio",
  navAriaLabel: "Main navigation",
  menuOpen: "Open main menu",
  menuClose: "Close main menu",
  languageSwitcher: "Language selection",
  languageEn: "English",
  languageFi: "Finnish",
  themeLight: "Switch to dark mode",
  themeDark: "Switch to light mode",
  nav: [
    { id: "home", href: "#home", label: "Home" },
    { id: "about", href: "#about", label: "About" },
    { id: "skills", href: "#skills", label: "Skills" },
    { id: "qa-testing", href: "#qa-testing", label: "QA Portfolio" },
    { id: "projects", href: "#projects", label: "Projects" },
    { id: "cv", href: "#cv", label: "CV" },
    { id: "contact", href: "#contact", label: "Contact" },
  ],
  hero: {
    eyebrow: "ICT Engineer · Software Developer · QA Focus",
    title: "Quality assurance and test automation",
    lead:
      "ICT engineer and software developer with a strong interest in software testing. I combine development background with hands-on experience in manual testing, test automation, API verification, and quality documentation — working in agile teams alongside developers and product owners.",
    ctaPortfolio: "View QA portfolio",
    ctaContact: "Contact me",
  },
  about: {
    title: "About me",
    subtitle:
      "Background in software development with a growing specialisation in quality assurance.",
    paragraphs: [
      "I am an ICT engineer who builds software and tests it with equal care. My work spans manual and exploratory testing, structured test documentation, bug reporting, and test automation — always with the goal of shipping reliable, accessible products.",
      "I collaborate closely with developers and product owners in agile environments: clarifying requirements, raising risks early, and contributing to continuous integration pipelines. I am comfortable reading code, writing basic Python scripts, and using industry-standard QA tools from Robot Framework to Postman and JMeter.",
      "This portfolio demonstrates that approach in practice — the website itself is the application under test, with documentation, automation, and CI artefacts in the repository.",
    ],
  },
  skills: {
    title: "Skills",
    subtitle:
      "Competencies relevant to software tester and QA engineer roles in Finnish IT.",
    groups: [
      {
        id: "testing",
        title: "Testing",
        items: [
          "Manual & exploratory testing",
          "Test case design & execution",
          "Regression & smoke testing",
          "Bug reporting & test documentation",
          "Agile / Scrum way of working",
        ],
      },
      {
        id: "automation",
        title: "Automation",
        items: [
          "Test automation strategy",
          "Robot Framework (UI tests)",
          "Smoke & regression suites",
          "Stable selectors (data-testid)",
        ],
      },
      {
        id: "tools",
        title: "Tools",
        items: [
          "Postman — API testing",
          "JMeter — load & performance",
          "Git — version control",
          "Newman — CLI API runs",
        ],
      },
      {
        id: "programming",
        title: "Programming",
        items: [
          "Python basics",
          "TypeScript / JavaScript",
          "Reading & debugging code",
          "Scripting for test support",
        ],
      },
      {
        id: "cicd",
        title: "CI/CD",
        items: [
          "GitHub Actions",
          "Jenkins (understanding)",
          "Automated checks in pipelines",
          "Build, lint & test integration",
        ],
      },
      {
        id: "accessibility",
        title: "Accessibility",
        items: [
          "Lighthouse audits",
          "Axe (Deque)",
          "WAVE evaluation",
          "WCAG 2.1 awareness",
        ],
      },
    ],
  },
  qa: {
    title: "QA portfolio project",
    subtitle:
      "This website is the system under test (SUT). Instead of only showing a CV, the repository demonstrates how I plan, execute, automate, and document testing for a real application.",
    howItWorksTitle: "How it works",
    howItWorksParagraphs: [
      "The portfolio is built with Next.js and treated like any product in an agile team: requirements are covered by test cases, defects are logged with clear reports, APIs are verified with Postman, UI flows are automated with Robot Framework, load behaviour is explored with JMeter, and accessibility is checked with Lighthouse, Axe, and WAVE. A CI pipeline runs automated checks on each change.",
      "Recruiters and hiring managers can review both the live site and the QA artefacts in the repository — evidence of practical testing skills, not just frontend work.",
    ],
    artefacts: [
      {
        path: "docs/test-plan.md",
        label: "Test plan",
        description:
          "Scope, test strategy, environments, entry/exit criteria, and risk assessment for this site.",
      },
      {
        path: "docs/test-cases.md",
        label: "Test cases",
        description:
          "Manual test cases for navigation, contact form, theme toggle, and responsive layout.",
      },
      {
        path: "docs/bug-reports/",
        label: "Bug reports",
        description:
          "Structured defect reports with steps to reproduce, severity, and status tracking.",
      },
      {
        path: "docs/test-summary-report.md",
        label: "Test summary report",
        description:
          "Execution results, coverage overview, and release recommendation after a test cycle.",
      },
      {
        path: "tests/robot/",
        label: "Robot Framework",
        description:
          "UI automation — smoke tests for hero, contact form, and theme toggle using Browser library.",
      },
      {
        path: "tests/postman/",
        label: "Postman / Newman",
        description:
          "API tests for POST /api/contact — valid payloads, validation errors, and invalid JSON.",
      },
      {
        path: "tests/jmeter/",
        label: "JMeter",
        description:
          "Non-functional load test plan for the contact API endpoint (baseline performance).",
      },
      {
        path: "tests/accessibility/",
        label: "Lighthouse, Axe & WAVE",
        description:
          "Accessibility scan reports and placeholders for automated and manual a11y evaluation.",
      },
      {
        path: ".github/workflows/qa-tests.yml",
        label: "CI pipeline",
        description:
          "GitHub Actions — lint, typecheck, build, and Newman API tests on every push; Robot UI tests via a separate manual workflow.",
      },
    ],
  },
  projects: {
    title: "Projects",
    subtitle:
      "Selected work demonstrating testing, automation, and software development — including academic and personal projects.",
    viewRepo: "View repository",
    viewRepoAria: (title) => `View ${title} on GitHub (opens in new tab)`,
    items: [
      {
        id: "cv-portfolio",
        title: "CV Portfolio — QA automation project",
        description:
          "This site: a single-page portfolio with contact API, theme toggle, and a full QA toolkit. Includes test plan, manual cases, Robot Framework smoke tests, Postman collection, JMeter plan, accessibility reports, and GitHub Actions CI.",
        tags: ["Robot Framework", "Postman", "JMeter", "CI/CD", "Accessibility"],
        status: "Active",
        statusLabel: "Status: Active",
      },
      {
        id: "rag-qdrant",
        title: "RAG / Qdrant — thesis project",
        description:
          "Thesis research prototype: Qdrant-based RAG pipeline for evaluating retrieval ablations on a Finnish Theseus thesis corpus. Covers preprocessing, indexing, gold annotations, and experiments with recall@k, nDCG@k, and latency metrics (MMR, reranking, deduplication).",
        tags: ["Qdrant", "RAG", "Python", "Thesis", "Evaluation"],
        status: "Active",
        statusLabel: "Status: Active",
        href: "https://github.com/karinehei/qdrant_oppari",
      },
      {
        id: "public-transport-demo",
        title: "Public transport test automation demo",
        description:
          "E2E test automation demo for an HSL-style ticketing system: FastAPI backend, React UI, and Robot Framework suites for API, UI (Selenium), and E2E flows. Includes GitHub Actions CI, Azure DevOps pipeline docs, test management artefacts, and a live Render deployment.",
        tags: [
          "Robot Framework",
          "Exploratory testing",
          "Bug reporting",
          "Agile",
          "Automation",
        ],
        status: "Active",
        statusLabel: "Status: Active",
        href: "https://github.com/karinehei/public-transport-test-automation-demo",
      },
    ],
  },
  cv: {
    title: "CV",
    subtitle:
      "Download my curriculum vitae or connect on LinkedIn.",
    download: "Download CV (PDF)",
    linkedin: "LinkedIn profile",
    linkedinAria: "View LinkedIn profile (opens in new tab)",
  },
  contact: {
    title: "Contact",
    subtitle:
      "Interested in a software tester or QA role? Send a message below. All fields are required. The form is validated in the browser and on the server — see the Postman collection in tests/postman/ for API test coverage.",
    staticNotice:
      "This site is hosted on GitHub Pages (static files only). The contact API does not run here — use the email link below or connect on LinkedIn. Client-side validation still works; full API tests run in CI.",
    emailFallback: "Send email instead",
    nameLabel: "Name",
    emailLabel: "Email",
    messageLabel: "Message",
    required: "(required)",
    messageRequiredHint: "(required, minimum 10 characters)",
    messageHint: "At least 10 characters.",
    submit: "Send message",
    submitting: "Sending…",
    messages: {
      nameRequired: "Name is required",
      emailRequired: "Email is required",
      emailInvalid: "Invalid email address",
      messageRequired: "Message is required",
      messageMinLength: "Message must be at least 10 characters",
      invalidBody: "Invalid request body",
      success: "Contact request received",
      networkError: "Network error. Please try again.",
      genericError: "Something went wrong. Please try again.",
      staticHostingError:
        "Message could not be sent — this static site cannot run the contact API (405). Use the email link above or LinkedIn instead.",
      formErrorSummary: (count) =>
        `The form has ${count} error${count === 1 ? "" : "s"}. Please review the fields below.`,
    },
  },
  footer: {
    text: "built and tested as a product.",
    meta: "See docs/ and tests/ for QA artefacts.",
  },
};

const fi: SiteTranslations = {
  skipLink: "Siirry pääsisältöön",
  logoLabel: "QA-portfolio — palaa etusivulle",
  logoText: "QA-portfolio",
  navAriaLabel: "Päänavigaatio",
  menuOpen: "Avaa päävalikko",
  menuClose: "Sulje päävalikko",
  languageSwitcher: "Kielen valinta",
  languageEn: "Englanti",
  languageFi: "Suomi",
  themeLight: "Vaihda tummaan tilaan",
  themeDark: "Vaihda vaaleaan tilaan",
  nav: [
    { id: "home", href: "#home", label: "Etusivu" },
    { id: "about", href: "#about", label: "Tietoa minusta" },
    { id: "skills", href: "#skills", label: "Taidot" },
    { id: "qa-testing", href: "#qa-testing", label: "QA-portfolio" },
    { id: "projects", href: "#projects", label: "Projektit" },
    { id: "cv", href: "#cv", label: "CV" },
    { id: "contact", href: "#contact", label: "Yhteystiedot" },
  ],
  hero: {
    eyebrow: "ICT-insinööri · Ohjelmistokehittäjä · QA-painotus",
    title: "Laadunvarmistus ja testiautomaatio",
    lead:
      "ICT-insinööri ja ohjelmistokehittäjä, jolla on vahva kiinnostus ohjelmistotestaukseen. Yhdistän kehitystaustan käytännön kokemukseen manuaalisesta testauksesta, testiautomaatiosta, API-varmistuksesta ja laatudokumentaatiosta — työskentelen ketterissä tiimeissä kehittäjien ja tuoteomistajien rinnalla.",
    ctaPortfolio: "Näytä QA-portfolio",
    ctaContact: "Ota yhteyttä",
  },
  about: {
    title: "Tietoa minusta",
    subtitle:
      "Tausta ohjelmistokehityksessä ja kasvava erikoistuminen laadunvarmistukseen.",
    paragraphs: [
      "Olen ICT-insinööri, joka rakentaa ohjelmistoja ja testaa niitä yhtä huolellisesti. Työhöni kuuluu manuaalinen ja tutkiva testaus, strukturoitu testidokumentaatio, virheraportointi ja testiautomaatio — tavoitteena luotettavat ja saavutettavat tuotteet.",
      "Työskentelen tiiviisti kehittäjien ja tuoteomistajien kanssa ketterissä ympäristöissä: selkeytän vaatimuksia, tuon riskejä esiin ajoissa ja osallistun jatkuvan integraation putkiin. Luen koodia, kirjoitan perustason Python-skriptejä ja käytän alan QA-työkaluja Robot Frameworkista Postmaniin ja JMeteriin.",
      "Tämä portfolio osoittaa lähestymistapani käytännössä — verkkosivusto on itse testattava sovellus, ja repossa on dokumentaatio, automaatio ja CI-artefaktit.",
    ],
  },
  skills: {
    title: "Taidot",
    subtitle:
      "Osaamisalueet, jotka liittyvät ohjelmistotestaajan ja QA-asiantuntijan rooleihin Suomessa.",
    groups: [
      {
        id: "testing",
        title: "Testaus",
        items: [
          "Manuaalinen ja tutkiva testaus",
          "Testitapausten suunnittelu ja suoritus",
          "Regressio- ja savutestaus",
          "Virheraportointi ja testidokumentaatio",
          "Ketterä / Scrum-työskentely",
        ],
      },
      {
        id: "automation",
        title: "Automaatio",
        items: [
          "Testiautomaation strategia",
          "Robot Framework (UI-testit)",
          "Savu- ja regressiotestit",
          "Vakaat selektorit (data-testid)",
        ],
      },
      {
        id: "tools",
        title: "Työkalut",
        items: [
          "Postman — API-testaus",
          "JMeter — kuormitus ja suorituskyky",
          "Git — versionhallinta",
          "Newman — API-testit komentoriviltä",
        ],
      },
      {
        id: "programming",
        title: "Ohjelmointi",
        items: [
          "Pythonin perusteet",
          "TypeScript / JavaScript",
          "Koodin lukeminen ja debuggaus",
          "Skriptit testauksen tueksi",
        ],
      },
      {
        id: "cicd",
        title: "CI/CD",
        items: [
          "GitHub Actions",
          "Jenkins (ymmärrys)",
          "Automaattiset tarkistukset putkissa",
          "Build-, lint- ja testi-integraatio",
        ],
      },
      {
        id: "accessibility",
        title: "Saavutettavuus",
        items: [
          "Lighthouse-auditoinnit",
          "Axe (Deque)",
          "WAVE-arviointi",
          "WCAG 2.1 -tietoisuus",
        ],
      },
    ],
  },
  qa: {
    title: "QA-portfolioprojekti",
    subtitle:
      "Tämä verkkosivusto on testattava järjestelmä (SUT). Sen sijaan, että näytän vain CV:n, repositorio osoittaa miten suunnittelen, toteutan, automatisoin ja dokumentoin testauksen oikealle sovellukselle.",
    howItWorksTitle: "Miten se toimii",
    howItWorksParagraphs: [
      "Portfolio on rakennettu Next.js:llä ja sitä käsitellään kuten mitä tahansa tuotetta ketterässä tiimissä: vaatimukset katetaan testitapauksilla, virheet kirjataan selkeillä raporteilla, API:t varmennetaan Postmanilla, käyttöliittymävirrat automatisoidaan Robot Frameworkilla, kuormituskäyttäytymistä tutkitaan JMeterillä ja saavutettavuutta tarkistetaan Lighthouse-, Axe- ja WAVE-työkaluilla. CI-putki ajaa automaattiset tarkistukset jokaisella muutoksella.",
      "Rekrytoijat ja esihenkilöt voivat arvioida sekä live-sivuston että QA-artefaktit repossa — käytännön testausosaamista, ei pelkkää frontend-työtä.",
    ],
    artefacts: [
      {
        path: "docs/test-plan.md",
        label: "Testisuunnitelma",
        description:
          "Laajuus, testistrategia, ympäristöt, sisääntulo-/poistumiskriteerit ja riskiarvio.",
      },
      {
        path: "docs/test-cases.md",
        label: "Testitapaukset",
        description:
          "Manuaaliset testitapaukset navigointiin, yhteydenottolomakkeeseen, teeman vaihtoon ja responsiivisuuteen.",
      },
      {
        path: "docs/bug-reports/",
        label: "Virheraportit",
        description:
          "Strukturoidut virheraportit toistovaiheineen, vakavuusasteineen ja tilaseurannalla.",
      },
      {
        path: "docs/test-summary-report.md",
        label: "Testausyhteenveto",
        description:
          "Suoritustulokset, kattavuus ja julkaisusuositus testisyklin jälkeen.",
      },
      {
        path: "tests/robot/",
        label: "Robot Framework",
        description:
          "UI-automaatio — savutestit etusivulle, lomakkeelle ja teeman vaihdolle Browser-kirjastolla.",
      },
      {
        path: "tests/postman/",
        label: "Postman / Newman",
        description:
          "API-testit POST /api/contact -päätepisteelle — kelvolliset ja virheelliset pyynnöt.",
      },
      {
        path: "tests/jmeter/",
        label: "JMeter",
        description:
          "Ei-toiminnallinen kuormitussuunnitelma yhteydenotto-API:lle (perustaso).",
      },
      {
        path: "tests/accessibility/",
        label: "Lighthouse, Axe ja WAVE",
        description:
          "Saavutettavuusskannaukset ja manuaalisen arvioinnin dokumentaatio.",
      },
      {
        path: ".github/workflows/qa-tests.yml",
        label: "CI-putki",
        description:
          "GitHub Actions — lint, typecheck, build ja Newman API -testit jokaisella pushilla; Robot UI -testit erillisessä manuaalisessa workflowssa.",
      },
    ],
  },
  projects: {
    title: "Projektit",
    subtitle:
      "Valittuja töitä, jotka osoittavat testausta, automaatiota ja ohjelmistokehitystä — mukaan lukien opinnäyte- ja omat projektit.",
    viewRepo: "Näytä repositorio",
    viewRepoAria: (title) => `Avaa ${title} GitHubissa (avautuu uuteen välilehteen)`,
    items: [
      {
        id: "cv-portfolio",
        title: "CV-portfolio — QA-automaatioprojekti",
        description:
          "Tämä sivusto: yhden sivun portfolio yhteydenotto-API:lla, teeman vaihdolla ja täydellä QA-työkalupakilla. Sisältää testisuunnitelman, manuaaliset tapaukset, Robot Framework -savutestit, Postman-kokoelman, JMeter-suunnitelman, saavutettavuusraportit ja GitHub Actions -CI:n.",
        tags: ["Robot Framework", "Postman", "JMeter", "CI/CD", "Saavutettavuus"],
        status: "Active",
        statusLabel: "Tila: Aktiivinen",
      },
      {
        id: "rag-qdrant",
        title: "RAG / Qdrant — opinnäyteprojekti",
        description:
          "Opinnäytetyön tutkimusprototyyppi: Qdrant-pohjainen RAG-putki retrieval-ablaatioiden arviointiin suomenkielisellä Theseus-opinnäyteaineistolla. Sisältää preprocessoinnin, indeksoinnin, gold-annotaatiot ja kokeet (recall@k, nDCG@k, latenssi; MMR, reranking, deduplikointi).",
        tags: ["Qdrant", "RAG", "Python", "Opinnäyte", "Arviointi"],
        status: "Active",
        statusLabel: "Tila: Aktiivinen",
        href: "https://github.com/karinehei/qdrant_oppari",
      },
      {
        id: "public-transport-demo",
        title: "Joukkoliikenteen testiautomaatio-demo",
        description:
          "E2E-testiautomaatiodemo HSL-tyyliselle lippujärjestelmälle: FastAPI-backend, React-käyttöliittymä ja Robot Framework -testit API-, UI- (Selenium) ja E2E-tasoilla. Sisältää GitHub Actions -CI:n, Azure DevOps -putkidokumentaation, testinhallinta-artefaktit ja Render-julkaisun.",
        tags: [
          "Robot Framework",
          "Tutkiva testaus",
          "Virheraportointi",
          "Ketterä",
          "Automaatio",
        ],
        status: "Active",
        statusLabel: "Tila: Aktiivinen",
        href: "https://github.com/karinehei/public-transport-test-automation-demo",
      },
    ],
  },
  cv: {
    title: "CV",
    subtitle:
      "Lataa ansioluetteloni tai ota yhteyttä LinkedInissä.",
    download: "Lataa CV (PDF)",
    linkedin: "LinkedIn-profiili",
    linkedinAria: "Avaa LinkedIn-profiili (avautuu uuteen välilehteen)",
  },
  contact: {
    title: "Yhteystiedot",
    subtitle:
      "Kiinnostunut ohjelmistotestaajan tai QA-roolista? Lähetä viesti alla. Kaikki kentät ovat pakollisia. Lomake validoidaan selaimessa ja palvelimella — API-testikattavuus on tests/postman/ -kansiossa.",
    staticNotice:
      "Sivusto on GitHub Pages -staattisessa hostauksessa. Yhteystieto-API ei toimi täällä — käytä sähköpostilinkkiä tai LinkedIniä. Selainvalidointi toimii; täydet API-testit ajetaan CI:ssä.",
    emailFallback: "Lähetä sähköpostilla",
    nameLabel: "Nimi",
    emailLabel: "Sähköposti",
    messageLabel: "Viesti",
    required: "(pakollinen)",
    messageRequiredHint: "(pakollinen, vähintään 10 merkkiä)",
    messageHint: "Vähintään 10 merkkiä.",
    submit: "Lähetä viesti",
    submitting: "Lähetetään…",
    messages: {
      nameRequired: "Nimi on pakollinen",
      emailRequired: "Sähköposti on pakollinen",
      emailInvalid: "Virheellinen sähköpostiosoite",
      messageRequired: "Viesti on pakollinen",
      messageMinLength: "Viestin on oltava vähintään 10 merkkiä",
      invalidBody: "Virheellinen pyynnön runko",
      success: "Yhteydenottopyyntö vastaanotettu",
      networkError: "Verkkovirhe. Yritä uudelleen.",
      genericError: "Jokin meni pieleen. Yritä uudelleen.",
      staticHostingError:
        "Viestiä ei voitu lähettää — staattinen sivusto ei voi ajaa yhteystieto-API:a (405). Käytä yllä olevaa sähköpostilinkkiä tai LinkedIniä.",
      formErrorSummary: (count) =>
        count === 1
          ? "Lomakkeessa on 1 virhe. Tarkista kentät alla."
          : `Lomakkeessa on ${count} virhettä. Tarkista kentät alla.`,
    },
  },
  footer: {
    text: "rakennettu ja testattu tuotteena.",
    meta: "Katso docs/ ja tests/ QA-artefakteja varten.",
  },
};

export const translations: Record<Locale, SiteTranslations> = { en, fi };

export function getTranslations(locale: Locale): SiteTranslations {
  return translations[locale];
}

/** Map API English messages to localized UI text when possible. */
export function translateApiMessage(message: string, locale: Locale): string {
  const enMessages = translations.en.contact.messages;
  const fiMessages = translations.fi.contact.messages;
  const pairs: [string, string][] = [
    [enMessages.nameRequired, fiMessages.nameRequired],
    [enMessages.emailRequired, fiMessages.emailRequired],
    [enMessages.emailInvalid, fiMessages.emailInvalid],
    [enMessages.messageRequired, fiMessages.messageRequired],
    [enMessages.messageMinLength, fiMessages.messageMinLength],
    [enMessages.invalidBody, fiMessages.invalidBody],
    [enMessages.success, fiMessages.success],
  ];

  if (locale === "fi") {
    const match = pairs.find(([enMsg]) => enMsg === message);
    if (match) return match[1];
  }

  return message;
}
