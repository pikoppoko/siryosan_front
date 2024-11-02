// components/Sidebar.jsx
"use client"; // クライアントコンポーネントであることを指定

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="h-screen w-60 bg-yellow-400 text-black fixed flex flex-col p-4">
      <nav className="flex flex-col gap-4">
        <Link
          href="/home"
          className={`p-2 rounded ${pathname === '/home' ? 'bg-gray-900 text-white' : 'hover:bg-gray-900 hover:text-white'}`}
        >
          ホーム
        </Link>
        <Link
          href="/mypage"
          className={`p-2 rounded ${pathname === '/mypage' ? 'bg-gray-900 text-white' : 'hover:bg-gray-900 hover:text-white'}`}
        >
          マイページ
        </Link>
        <Link
          href="/share"
          className={`p-2 rounded ${pathname === '/share' ? 'bg-gray-900 text-white' : 'hover:bg-gray-900 hover:text-white'}`}
        >
          資料を共有する
        </Link>
        <Link
          href="/ranking"
          className={`p-2 rounded ${pathname === '/ranking' ? 'bg-gray-900 text-white' : 'hover:bg-gray-900 hover:text-white'}`}
        >
          ランキング
        </Link>
        <Link
          href="/wiki"
          className={`p-2 rounded ${pathname === '/wiki' ? 'bg-gray-900 text-white' : 'hover:bg-gray-900 hover:text-white'}`}
        >
          wiki
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
