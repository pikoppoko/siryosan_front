"use client";

import { useState } from 'react';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('メイン'); // 初期タブを「メイン」に設定

  return (
    <div className="flex flex-col p-4">
      {/* 最上部の要素 */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <input 
            type="text" 
            placeholder="何をお探しですか？" 
            className="border border-gray-300 rounded-l-md p-2 h-10"
          />
          <button className="bg-gray-300 p-2 rounded-r-md h-10">
            <span role="img" aria-label="search">🔍</span>
          </button>
        </div>
      </div>

      {/* タブ付きコンテナ */}
      <div className="flex flex-col mb-4">
        <div className="flex space-x-4 border-b border-gray-300 mb-0">
          {['メイン', '担当者', '商材', 'プロジェクト'].map(tab => (
            <button 
              key={tab} 
              onClick={() => setActiveTab(tab)} 
              className={`py-2 px-4 ${activeTab === tab ? 'border-b-4 border-pink-500 font-extrabold' : 'text-gray-600'}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* タブコンテンツを囲むボックス */}
        <div className="border border-gray-300 p-4">
          {/* 検索ページのコンテンツ */}
          <div className="flex flex-col space-y-6">
            {/* 検索用テキストボックス */}
            <div>
              <input
                type="text"
                placeholder="キーワードを入力してください。　例）繊維　サンプル　デザイン　1000万円"
                className="w-full border border-gray-300 p-2 h-10"
              />
            </div>

            {/* 除外ワード */}
            <div className="flex items-center mb-6">
              <label className="mr-2">除外ワード</label>
              <input
                type="text"
                placeholder="除外するキーワードを入力してください。※2語以上の場合はEnterを押してください。"
                className="border border-gray-300 p-2 flex-grow h-10"
              />
            </div>

            {/* 横線 */}
            <div className="border-t border-white mb-4"></div>

            {/* 3段目 */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block mb-1">商材</label>
                <select className="border border-gray-300 p-2 w-full h-10">
                  <option value="">選択してください</option>
                  <option value="product1">商材１</option>
                  <option value="product2">商材２</option>
                  <option value="product3">商材３</option>
                </select>
              </div>
              <div>
                <label className="block mb-1">作成者（部署）</label>
                <input
                  type="text"
                  className="border border-gray-300 p-2 w-full h-10"
                />
              </div>
            </div>

            {/* 4段目 */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block mb-1">プロジェクト</label>
                <select className="border border-gray-300 p-2 w-full h-10">
                  <option value="">選択してください</option>
                  <option value="project1">プロジェクト１</option>
                  <option value="project2">プロジェクト２</option>
                  <option value="project3">プロジェクト３</option>
                </select>
              </div>
              <div>
                <label className="block mb-1">作成者（名前）</label>
                <input
                  type="text"
                  className="border border-gray-300 p-2 w-full h-10"
                />
              </div>
            </div>

            {/* 5段目 */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block mb-1">業界</label>
                <input
                  type="text"
                  className="border border-gray-300 p-2 w-full h-10"
                />
              </div>
              <div>
                <label className="block mb-1">コメント数</label>
                <select className="border border-gray-300 p-2 w-full h-10">
                  <option value="">選択してください</option>
                  <option value="0-10">0～10</option>
                  <option value="11-20">11～20</option>
                  <option value="21-30">21～30</option>
                  <option value="151-200">31～</option>
                </select>
              </div>
            </div>

            {/* 6段目 */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block mb-1">顧客</label>
                <select className="border border-gray-300 p-2 w-full h-10">
                  <option value="">選択してください</option>
                  <option value="customer1">顧客1</option>
                  <option value="customer2">顧客2</option>
                  <option value="customer3">顧客3</option>
                </select>
              </div>
              <div>
                <label className="block mb-1">いいね♥数</label>
                <select className="border border-gray-300 p-2 w-full h-10">
                  <option value="">選択してください</option>
                  <option value="0-50">0～50</option>
                  <option value="51-100">51～100</option>
                  <option value="101-150">101～150</option>
                  <option value="151-200">151～200</option>
                  <option value="201">201～</option>
                </select>
              </div>
            </div>

            {/* 7段目 */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block mb-1">価格</label>
                <select className="border border-gray-300 p-2 w-full h-10">
                  <option value="">選択してください</option>
                  <option value="0-100">0～100万</option>
                  <option value="101-200">101万～200万</option>
                  <option value="201-300">201万～300万</option>
                  <option value="301-plus">301万～</option>
                </select>
              </div>
              <div>
                <label className="block mb-1">更新日</label>
                <div className="flex space-x-2">
                  <input
                    type="date"
                    className="border border-gray-300 p-2 h-10"
                  />
                  <span>～</span>
                  <input
                    type="date"
                    className="border border-gray-300 p-2 h-10"
                  />
                </div>
              </div>
            </div>

            {/* 8段目 */}
            <div className="flex items-center mb-6 space-x-8">
              <div>
                <input type="checkbox" id="editable" />
                <label htmlFor="editable">編集可能</label>
              </div>
              <div>
                <input type="checkbox" id="adoption-case" />
                <label htmlFor="adoption-case">採択事例あり</label>
              </div>
              <div>
                <input type="checkbox" id="talk-script" />
                <label htmlFor="talk-script">トークスクリプトあり</label>
              </div>
            </div>

            {/* 検索ボタン */}
            <div className="flex justify-end mt-4">
              <button className="bg-sky-300 text-black font-bold p-2 rounded shadow hover:bg-sky-400">
                検索
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
