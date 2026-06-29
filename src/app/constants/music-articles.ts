import type { Article } from "@/shared/components/article-cards";
import type { ArticleDetail } from "@/shared/types/article";

export const musicArticles: Article[] = [
  {
    id: "1",
    title: "Proses Rekaman Studio: Dari Konsep Hingga Master",
    excerpt:
      "Rekaman profesional bukan hanya soal memasang mikrofon. Pelajari tahapan lengkap produksi musik dari pre-production hingga mastering.",
    date: "12 April 2026",
    category: "Studio",
    slug: "proses-rekaman-studio",
  },
  {
    id: "2",
    title: "Mixing vs Mastering: Apa Bedanya?",
    excerpt:
      "Banyak musisi bingung membedakan mixing dan mastering. Artikel ini menjelaskan peran masing-masing dalam rantai produksi audio.",
    date: "5 Maret 2026",
    category: "Teknis",
    slug: "mixing-vs-mastering",
  },
  {
    id: "3",
    title: "Cara Mendistribusikan Musik ke Spotify dan Apple Music",
    excerpt:
      "Setelah rekaman selesai, langkah berikutnya adalah distribusi digital. Pelajari cara mendaftarkan musik Anda ke platform streaming.",
    date: "20 Feb 2026",
    category: "Distribusi",
    slug: "distribusi-musik-streaming",
  },
  {
    id: "4",
    title: "Peralatan Home Studio Esensial untuk Pemula",
    excerpt:
      "Ingin membangun studio musik sendiri di rumah? Berikut adalah daftar peralatan esensial paling hemat untuk memulai produksi musik.",
    date: "15 Juni 2026",
    category: "Peralatan",
    slug: "peralatan-home-studio-pemula",
  },
  {
    id: "5",
    title: "Memahami DAW Terbaik untuk Kebutuhan Anda",
    excerpt:
      "Dari FL Studio hingga Ableton Live, setiap software DAW memiliki keunggulan tersendiri. Temukan DAW yang paling sesuai dengan alur kerja Anda.",
    date: "2 Mei 2026",
    category: "Software",
    slug: "memilih-daw-terbaik",
  },
];

export const musicArticleDetails: Record<string, ArticleDetail> = {
  "proses-rekaman-studio": {
    slug: "proses-rekaman-studio",
    category: "Studio",
    readTime: "7 menit",
    date: "12 April 2026",
    title: "Proses Rekaman Studio: Dari Konsep Hingga Master",
    subtitle:
      "Produksi musik yang rapi selalu dimulai dari perencanaan yang jelas. Dari ide lagu sampai file final, setiap tahap punya peran penting.",
    author: {
      name: "Tim Produksi Michael Music",
      role: "Studio Engineer",
    },
    content: [
      {
        type: "paragraph",
        text: "Banyak musisi mengira proses rekaman selesai ketika vokal sudah terekam. Padahal, hasil akhir yang profesional bergantung pada rangkaian kerja yang disiplin: pre-production, tracking, editing, mixing, hingga mastering.",
      },
      {
        type: "heading",
        text: "Tahap 1: Pre-Production",
      },
      {
        type: "list",
        items: [
          "Menyusun aransemen dan menentukan tempo final.",
          "Membuat demo untuk menguji struktur lagu.",
          "Menetapkan referensi sound sesuai genre.",
          "Menyiapkan jadwal take per instrumen agar sesi efisien.",
        ],
      },
      {
        type: "heading",
        text: "Tahap 2: Tracking dan Editing",
      },
      {
        type: "paragraph",
        text: "Di tahap tracking, kualitas performa dan pemilihan mikrofon sangat menentukan karakter audio. Setelah itu, engineer melakukan comping, tuning seperlunya, dan pembersihan noise agar materi siap masuk tahap mixing.",
      },
      {
        type: "quote",
        text: "Rekaman yang baik bukan yang paling keras, tetapi yang paling jujur menangkap emosi lagu.",
      },
      {
        type: "heading",
        text: "Tahap 3: Mixing dan Mastering",
      },
      {
        type: "paragraph",
        text: "Mixing menyeimbangkan semua elemen lagu agar saling menyatu, sementara mastering menyiapkan hasil akhir agar konsisten di berbagai platform seperti Spotify, YouTube, dan Apple Music. Kombinasi keduanya menentukan pengalaman dengar pendengar.",
      },
    ],
    tags: ["Studio", "Recording", "Mixing", "Mastering"],
  },
  "mixing-vs-mastering": {
    slug: "mixing-vs-mastering",
    category: "Teknis",
    readTime: "6 menit",
    date: "5 Maret 2026",
    title: "Mixing vs Mastering: Apa Bedanya?",
    subtitle:
      "Keduanya sering disamakan, padahal fungsi mixing dan mastering berbeda. Memahami perbedaannya membantu musisi mengambil keputusan produksi yang tepat.",
    author: {
      name: "Tim Audio Michael Music",
      role: "Mixing Engineer",
    },
    content: [
      {
        type: "paragraph",
        text: "Mixing bekerja di level multitrack: vokal, drum, bass, gitar, synth, dan elemen lain diolah agar terdengar seimbang. Mastering bekerja di level stereo final untuk memoles hasil akhir dan memastikan kualitas terjaga lintas perangkat.",
      },
      {
        type: "heading",
        text: "Apa yang Terjadi Saat Mixing?",
      },
      {
        type: "list",
        items: [
          "Mengatur level volume antar instrumen.",
          "Membentuk karakter tonal dengan EQ.",
          "Mengontrol dinamika menggunakan kompresor.",
          "Memberi ruang dimensi dengan reverb dan delay.",
        ],
      },
      {
        type: "heading",
        text: "Apa yang Terjadi Saat Mastering?",
      },
      {
        type: "list",
        items: [
          "Menyeimbangkan tonal keseluruhan lagu.",
          "Menjaga loudness agar sesuai standar platform.",
          "Meningkatkan konsistensi antar lagu dalam satu EP/album.",
          "Menyiapkan format final untuk distribusi digital.",
        ],
      },
      {
        type: "paragraph",
        text: "Jika mixing adalah menyusun tiap komponen masakan, mastering adalah plating terakhir sebelum disajikan. Keduanya perlu agar karya terdengar matang dan kompetitif.",
      },
    ],
    tags: ["Audio", "Mixing", "Mastering", "Produksi Musik"],
  },
  "distribusi-musik-streaming": {
    slug: "distribusi-musik-streaming",
    category: "Distribusi",
    readTime: "5 menit",
    date: "20 Feb 2026",
    title: "Cara Mendistribusikan Musik ke Spotify dan Apple Music",
    subtitle:
      "Setelah proses produksi selesai, distribusi digital adalah langkah penting agar lagu Anda bisa ditemukan pendengar di berbagai platform streaming.",
    author: {
      name: "Tim Rilis Digital Michael Music",
      role: "Digital Distribution",
    },
    content: [
      {
        type: "paragraph",
        text: "Musisi independen kini bisa merilis lagu tanpa label besar, tetapi tetap perlu strategi distribusi yang benar. Kunci utamanya adalah metadata rapi, artwork sesuai standar, dan jadwal rilis yang terencana.",
      },
      {
        type: "heading",
        text: "Checklist Sebelum Rilis",
      },
      {
        type: "list",
        items: [
          "Siapkan file audio WAV 24-bit berkualitas final master.",
          "Gunakan artwork cover dengan resolusi yang sesuai ketentuan distributor.",
          "Pastikan judul lagu, nama artis, dan credit sudah konsisten.",
          "Tentukan tanggal rilis minimal 2-3 minggu sebelum publish.",
        ],
      },
      {
        type: "heading",
        text: "Sesudah Lagu Tayang",
      },
      {
        type: "paragraph",
        text: "Optimalkan profil artis, dorong playlist pitching, dan jalankan konten promosi pendek di media sosial. Distribusi bukan sekadar upload file, tetapi proses membangun momentum audiens secara berkelanjutan.",
      },
    ],
    tags: ["Distribusi", "Spotify", "Apple Music", "Rilis Digital"],
  },
  "peralatan-home-studio-pemula": {
    slug: "peralatan-home-studio-pemula",
    category: "Peralatan",
    readTime: "6 menit",
    date: "15 Juni 2026",
    title: "Peralatan Home Studio Esensial untuk Pemula",
    subtitle:
      "Membangun workstation musik pribadi tidak melulu mahal. Fokus pada perangkat inti adalah kunci efisiensi budget.",
    author: {
      name: "Tim Audio Michael Music",
      role: "Gear Consultant",
    },
    content: [
      {
        type: "paragraph",
        text: "Membuat musik dari kenyamanan kamar sendiri kini bukan lagi impian yang mahal. Berkat kemajuan teknologi audio digital, Anda bisa merekam, memproduksi, dan memproses musik berkualitas tinggi hanya dengan beberapa alat utama.",
      },
      {
        type: "heading",
        text: "1. Komputer atau Laptop (DAW Host)",
      },
      {
        type: "paragraph",
        text: "Komputer Anda adalah otak dari studio. Pastikan memiliki RAM minimal 8GB (direkomendasikan 16GB) dan penyimpanan SSD agar pemuatan instrumen virtual serta pengolahan audio berjalan lancar.",
      },
      {
        type: "heading",
        text: "2. Audio Interface (Soundcard)",
      },
      {
        type: "paragraph",
        text: "Audio interface mengubah sinyal analog dari mikrofon atau instrumen menjadi data digital. Pilihlah interface yang memiliki preamp berkualitas baik dengan opsi phantom power 48V.",
      },
      {
        type: "heading",
        text: "3. Mikrofon Kondensor & Headphone Monitor",
      },
      {
        type: "paragraph",
        text: "Untuk vokal atau instrumen akustik, mikrofon kondensor adalah pilihan standar. Pasangkan dengan headphone monitor tipe closed-back agar suara instrumen tidak bocor kembali ke rekaman mikrofon.",
      },
    ],
    tags: ["Home Studio", "Audio Interface", "Mikrofon", "Gear Guide"],
  },
  "memilih-daw-terbaik": {
    slug: "memilih-daw-terbaik",
    category: "Software",
    readTime: "5 menit",
    date: "2 Mei 2026",
    title: "Memahami DAW Terbaik untuk Kebutuhan Anda",
    subtitle:
      "Memilih software utama untuk berkreasi musik bisa membingungkan. Mari bandingkan DAW terpopuler di kalangan produser musik.",
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
  },
};

