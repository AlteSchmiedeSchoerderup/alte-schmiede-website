import "./globals.css";

export const metadata = {
  title: "Alte Schmiede Schörderup",
  description: "Schaufel- & Hardox-Instandsetzung",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
