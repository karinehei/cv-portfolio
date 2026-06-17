export type Locale = "en" | "fi";

export const DEFAULT_LOCALE: Locale = "en";

export interface ContactMessages {
  nameRequired: string;
  emailRequired: string;
  emailInvalid: string;
  messageRequired: string;
  messageMinLength: string;
  invalidBody: string;
  success: string;
  networkError: string;
  genericError: string;
  staticHostingError: string;
  formErrorSummary: (count: number) => string;
}

export interface NavLink {
  id: string;
  href: string;
  label: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  items: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  status: string;
  statusLabel: string;
}

export interface QaArtefact {
  path: string;
  label: string;
  description: string;
}

export interface SiteTranslations {
  skipLink: string;
  logoLabel: string;
  logoText: string;
  navAriaLabel: string;
  menuOpen: string;
  menuClose: string;
  languageSwitcher: string;
  languageEn: string;
  languageFi: string;
  themeLight: string;
  themeDark: string;
  nav: NavLink[];
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    ctaPortfolio: string;
    ctaContact: string;
  };
  about: {
    title: string;
    subtitle: string;
    paragraphs: string[];
  };
  skills: {
    title: string;
    subtitle: string;
    groups: SkillGroup[];
  };
  qa: {
    title: string;
    subtitle: string;
    howItWorksTitle: string;
    howItWorksParagraphs: string[];
    artefacts: QaArtefact[];
  };
  projects: {
    title: string;
    subtitle: string;
    items: ProjectItem[];
  };
  cv: {
    title: string;
    subtitle: string;
    cardText: string;
    download: string;
    linkedin: string;
    linkedinAria: string;
  };
  contact: {
    title: string;
    subtitle: string;
    staticNotice: string;
    emailFallback: string;
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    required: string;
    messageRequiredHint: string;
    messageHint: string;
    submit: string;
    submitting: string;
    messages: ContactMessages;
  };
  footer: {
    text: string;
    meta: string;
  };
}
