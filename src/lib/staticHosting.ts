/** True when built for GitHub Pages (static export with basePath). */
export function isStaticHosting(): boolean {
  return Boolean(process.env.NEXT_PUBLIC_BASE_PATH);
}

export function getContactEmail(): string | undefined {
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim();
  return email || undefined;
}

export function buildMailtoUrl(
  name: string,
  fromEmail: string,
  message: string
): string | undefined {
  const to = getContactEmail();
  if (!to) return undefined;

  const subject = encodeURIComponent(`Portfolio contact from ${name}`);
  const body = encodeURIComponent(
    `From: ${name} <${fromEmail}>\n\n${message}`
  );
  return `mailto:${to}?subject=${subject}&body=${body}`;
}
