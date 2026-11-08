import type { ArticleRecord } from "@/shared/types/article";

export const article: ArticleRecord = {
  id: "5",
  title: "Memahami DAW Terbaik untuk Kebutuhan Anda",
  excerpt: "Dari FL Studio hingga Ableton Live, setiap software DAW memiliki keunggulan tersendiri. Temukan DAW yang paling sesuai dengan alur kerja Anda.",
  date: "15 Juni 2026",
  category: "Software",
  slug: "memilih-daw-terbaik",
  readTime: "5 menit",
  subtitle: "Memilih software utama untuk berkreasi musik bisa membingungkan. Mari bandingkan DAW terpopuler di kalangan produser musik.",
  author: {
        name: "Tim Kreatif Michael Music",
        role: "Music Producer",
      },
  content: [
        {
          type: "paragraph",
          text: "Digital Audio Workstation (DAW) adalah perangkat lunak utama tempat Anda merekam, menyusun aransemen, melakukan mixing, dan mengekspor musik. Tidak ada DAW yang mutlak terbaik, melainkan mana yang paling cocok dengan kreativitas Anda.",
        },
        {
          type: "heading",
          text: "FL Studio: Surganya Pembuat Beat",
        },
        {
          type: "paragraph",
          text: "Sangat populer untuk genre EDM, hip-hop, dan pop. FL Studio terkenal dengan fitur Step Sequencer-nya yang intuitif dan lisensi update gratis seumur hidup.",
        },
        {
          type: "heading",
          text: "Ableton Live: Terbaik untuk Live Performance & Loop",
        },
        {
          type: "paragraph",
          text: "Jika alur kerja Anda banyak bermain dengan contoh suara (sampling) atau ingin menggunakannya untuk penampilan langsung di panggung, Ableton Live memiliki Session View yang sangat fleksibel.",
        },
        {
          type: "heading",
          text: "Logic Pro & Reaper: Pilihan Rekaman Klasik",
        },
        {
          type: "paragraph",
          text: "Logic Pro adalah pilihan eksklusif pengguna Mac dengan instrumen bawaan yang melimpah. Sementara Reaper sangat ringan dan fleksibel dengan lisensi yang sangat terjangkau.",
        },
      ],
  tags: ["DAW", "Software", "FL Studio", "Ableton", "Logic Pro"],
};
