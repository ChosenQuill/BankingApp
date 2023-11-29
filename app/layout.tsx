import styles from "./layout.module.css";
import { Metadata } from "next";

// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

import { MantineProvider, ColorSchemeScript } from '@mantine/core';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          {/* @ts-expect-error https://github.com/vercel/next.js/issues/43537 */}
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Banking Application",
  description: "A modern banking application with all your banking needs.",
  icons: "/favicon.ico",
};
