export default function WebLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header>📌 هدر اختصاصی برای صفحات `web`</header>
      <main>{children}</main>
      <footer>📌 فوتر اختصاصی برای صفحات `web`</footer>
    </div>
  );
}
