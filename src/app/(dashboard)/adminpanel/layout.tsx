export default function LayOutAdminPanel({ children }: { children: React.ReactNode }) {
    return (
      <div>
        <header>📌 هدر اختصاصی برای صفحات `adminPanel`</header>
        <main>{children}</main>
        <footer>📌 فوتر اختصاصی برای صفحات `adminpanel`</footer>
      </div>
    );
  }
  