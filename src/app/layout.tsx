import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pato Place | Italian Kitchen in New York",
  description:
    "Seasonal Italian plates, generous pours, and a table worth gathering around.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
