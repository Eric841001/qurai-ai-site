import "./globals.css";

export const metadata = {
  title: "QURAI.AI",
  description: "QURAI.AI official website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
