import Head from 'next/head';
import { useState, useEffect } from 'react';

export default function Home() {
  const texts = [
    'Hari ini mungkin melelahkan, tapi itu bukan alasan untuk berhenti. Kamu sudah kuat sejauh ini.',
    'Jangan merasa sendiri. Kadang kita cuma butuh satu kalimat hangat untuk bertahan.',
    'Nggak apa-apa kalau kamu belum baik-baik saja. Semua butuh waktu, dan itu nggak masalah.',
    'Kamu berhak untuk didengar, untuk bercerita, dan untuk merasa cukup, apa pun yang sedang kamu alami.',
    'Mau harimu gelap atau terang, kamu tetap layak untuk senyuman yang tulus dan pelukan yang hangat.',
    'Ada ruang di dunia ini yang selalu terbuka buat kamu, tempat untuk berbagi tanpa dihakimi.',
    'Nggak ada perasaan yang salah. Excited boleh, sedih juga boleh. Yang penting kamu jujur sama diri sendiri.',
    'Terus berjalan, sekecil apa pun langkahmu. Karena kamu sedang menuju hari yang lebih baik.'
  ];

  const [currentText, setCurrentText] = useState('');
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typing = setTimeout(() => {
      if (charIndex < texts[index].length) {
        setCurrentText((prev) => prev + texts[index][charIndex]);
        setCharIndex(charIndex + 1);
      } else {
        setTimeout(() => {
          setCurrentText('');
          setCharIndex(0);
          setIndex((prev) => (prev + 1) % texts.length);
        }, 3000);
      }
    }, 45);

    return () => clearTimeout(typing);
  }, [charIndex, index]);

  return (
    <div className="flex items-center justify-center h-screen bg-black text-green-400 font-mono px-6">
      <Head>
        <title>Code Ungkapan</title>
      </Head>
      <h1 className="text-xl md:text-2xl text-center leading-relaxed max-w-3xl">{currentText}|</h1>
    </div>
  );
}
