import type { Metadata } from "next";

import "./globals.css";
import { ThemeProvider } from "./provider";



export const metadata: Metadata = {
  title: "Dipto's Portfolio",
  description: "Full Stack  Developer with strong problem-solving skills, experienced in building scalable web applications and intuitive UI/UX designs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/jsm-logo.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
