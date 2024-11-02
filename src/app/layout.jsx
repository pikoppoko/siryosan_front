// src/app/layout.jsx
import './globals.css'; // グローバルスタイルをインポート
import Sidebar from '../components/Sidebar'; // Sidebarをインポート

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <div className="flex">
          <Sidebar />
          <div className="ml-60 flex-grow p-4">
            {children} {/* 各ページの内容がここに挿入される */}
          </div>
        </div>
      </body>
    </html>
  );
}
