export const metadata = {
  title: "HAjizome",
  description: "Util to generate HTML elements for WordPress post",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
