import type { Metadata } from "next";
import { AppShell } from "@/components/AppShell";
import "./globals.css";

export const metadata: Metadata = {
  title: "CV Portfolio | Software Tester & QA Engineer",
  description:
    "ICT engineer and software developer with a focus on manual testing, test automation, API testing, and quality documentation — portfolio built as a tested product.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
