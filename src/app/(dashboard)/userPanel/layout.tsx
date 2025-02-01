export default function LayOutYserPanel({ children }: { children: React.ReactNode }) {
    return (
      <div>
        <header>📌 هدر اختصاصی برای صفحات `userPanel`</header>
        <main>{children}</main>
        <footer>📌 فوتر اختصاصی برای صفحات `userPanel`</footer>
      </div>
    );
  }
  