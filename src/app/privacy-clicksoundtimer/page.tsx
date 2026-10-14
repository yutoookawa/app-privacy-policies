import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'プライバシーポリシー | ClickSound Timer',
  description: 'ClickSound Timer（クリックサウンドタイマー）のプライバシーポリシーです。',
};

export default function ClickSoundTimerPrivacy() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 sm:p-10 shadow-xl backdrop-blur-sm">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
          ClickSound Timer プライバシーポリシー
        </h1>
        <p className="text-xs text-slate-400 mb-8 pb-4 border-b border-slate-700">
          最終更新日: 2026年10月14日
        </p>

        <div className="space-y-6 text-sm text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-base font-semibold text-white mb-2">1. はじめに</h2>
            <p>
              本プライバシーポリシーは、「ClickSound Timer」（以下、「本アプリ」）における利用者情報の取り扱いについて説明するものです。
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-white mb-2">2. 取得する情報について</h2>
            <p>
              本アプリは、完全オフラインで動作するタイマーアプリです。
              氏名、メールアドレス、電話番号、位置情報、端末識別子、その他の個人情報を取得・収集・保存・外部送信することは一切ありません。
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-white mb-2">3. アプリ内課金および広告について</h2>
            <p>
              本アプリ内には広告表示および有料課金（アプリ内購入・定期購入）の機能は含まれていません。
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-white mb-2">4. データの第三者提供</h2>
            <p>
              本アプリは利用者の端末データを外部サーバー等へ送信しないため、第三者へ提供・共有されることはありません。
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-white mb-2">5. お問い合わせ</h2>
            <p>
              本ポリシーに関するお問い合わせは、以下の窓口までお願いいたします。<br />
              連絡先: <span className="text-amber-400">testers-field@googlegroups.com</span>
            </p>
          </section>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-700 text-center">
          <Link
            href="/"
            className="text-xs text-slate-400 hover:text-white transition-colors"
          >
            ← テスターズフィールド トップへ戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
