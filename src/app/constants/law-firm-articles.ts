import type { Article } from "@/shared/components/article-cards";
import type { ArticleDetail } from "@/shared/types/article";

export const lawFirmArticles: Article[] = [
  {
    id: "1",
    title: "Cara Melindungi Aset Bisnis Anda dari Sengketa Hukum",
    excerpt:
      "Strategi legal yang komprehensif untuk melindungi aset perusahaan dari potensi sengketa bisnis dan risiko litigasi.",
    date: "15 Mei 2026",
    category: "Korporat",
    slug: "melindungi-aset-bisnis",
  },
  {
    id: "2",
    title: "Panduan Hukum Kontrak Kerja 2026: Apa yang Berubah?",
    excerpt:
      "Perubahan regulasi ketenagakerjaan terbaru dan dampaknya terhadap hubungan kerja antara perusahaan dan karyawan.",
    date: "16 Mei 2026",
    category: "Ketenagakerjaan",
    slug: "panduan-kontrak-kerja-2026",
  },
  {
    id: "3",
    title: "5 Hak Anda Saat Menghadapi Sengketa di Pengadilan",
    excerpt:
      "Pahami hak-hak hukum Anda secara menyeluruh sebelum memasuki proses litigasi di pengadilan.",
    date: "20 Mei 2026",
    category: "Litigasi",
    slug: "hak-menghadapi-sengketa",
  },
  {
    id: "4",
    title: "Aspek Hukum Pendirian Joint Venture di Indonesia",
    excerpt:
      "Membangun kemitraan dengan investor asing? Pahami kerangka hukum, pembagian saham, dan ketentuan PMA untuk pendirian joint venture.",
    date: "10 Juni 2026",
    category: "Korporat",
    slug: "aspek-hukum-joint-venture",
  },
  {
    id: "5",
    title: "Pentingnya Klausul Arbitrase dalam Kontrak Bisnis",
    excerpt:
      "Mengapa banyak pelaku usaha memilih arbitrase dibanding pengadilan negeri? Simak kelebihan klausul arbitrase untuk menyelesaikan sengketa bisnis.",
    date: "11 Juni 2026",
    category: "Litigasi",
    slug: "klausul-arbitrase-kontrak-bisnis",
  },
];

export const lawFirmArticleDetails: Record<string, ArticleDetail> = {
  "melindungi-aset-bisnis": {
    slug: "melindungi-aset-bisnis",
    category: "Korporat",
    readTime: "7 menit",
    date: "15 Mei 2026",
    title: "Cara Melindungi Aset Bisnis Anda dari Sengketa Hukum",
    subtitle:
      "Perlindungan aset bukan hanya soal asuransi. Strategi legal yang tepat dapat menjadi perisai paling efektif bagi keberlangsungan bisnis Anda.",
    author: {
      name: "Tim Legal Michael, Antonius & Co",
      role: "Corporate Law Division",
    },
    content: [
      {
        type: "paragraph",
        text: "Dalam dunia bisnis yang dinamis, risiko sengketa hukum bisa muncul kapan saja — dari perselisihan kontrak dengan mitra, gugatan karyawan, hingga klaim pihak ketiga. Tanpa strategi perlindungan aset yang matang, perusahaan Anda bisa kehilangan aset berharga dalam waktu singkat.",
      },
      {
        type: "heading",
        text: "Mengapa Perlindungan Aset Penting?",
      },
      {
        type: "paragraph",
        text: "Perlindungan aset (asset protection) adalah serangkaian strategi legal yang dirancang untuk melindungi kekayaan perusahaan dari klaim kreditur, gugatan perdata, dan risiko hukum lainnya. Ini bukan tentang menyembunyikan aset, melainkan tentang menyusun struktur kepemilikan yang sah secara hukum.",
      },
      {
        type: "heading",
        text: "Strategi Legal yang Dapat Diterapkan",
      },
      {
        type: "list",
        items: [
          "Pemisahan entitas bisnis: Pisahkan aset operasional dan aset investasi ke dalam badan hukum yang berbeda untuk membatasi risiko.",
          "Perjanjian pra-kontrak yang kuat: Pastikan setiap hubungan bisnis diikat dengan kontrak yang memuat klausul pembatasan tanggung jawab.",
          "Asuransi profesional: Lengkapi perlindungan legal dengan polis asuransi yang sesuai dengan profil risiko bisnis.",
          "Pemindahbukuan aset terencana: Lakukan transfer aset secara legal sebelum potensi sengketa muncul, bukan setelahnya.",
          "Pendaftaran HKI: Lindungi merek, paten, dan kekayaan intelektual lainnya melalui pendaftaran resmi.",
        ],
      },
      {
        type: "quote",
        text: "Perlindungan aset yang terbaik adalah yang dipersiapkan jauh sebelum masalah datang. Ketika sengketa sudah terjadi, opsi Anda akan sangat terbatas.",
      },
      {
        type: "heading",
        text: "Kesalahan Umum yang Harus Dihindari",
      },
      {
        type: "list",
        items: [
          "Mencampurkan aset pribadi dan perusahaan dalam satu rekening.",
          "Tidak memiliki perjanjian tertulis dengan mitra bisnis atau investor.",
          "Mengabaikan pembaruan dokumen legal perusahaan secara berkala.",
          "Melakukan transfer aset secara terburu-buru saat sudah ada ancaman gugatan (fraudulent conveyance).",
        ],
      },
      {
        type: "paragraph",
        text: "Dengan perencanaan yang tepat dan pendampingan dari tim hukum yang berpengalaman, Anda dapat membangun benteng perlindungan yang kokoh bagi bisnis dan aset keluarga Anda. Jangan tunggu hingga masalah datang — mulailah lindungi aset Anda hari ini.",
      },
    ],
    tags: ["Korporat", "Aset", "Perlindungan Hukum", "Bisnis"],
  },
  "panduan-kontrak-kerja-2026": {
    slug: "panduan-kontrak-kerja-2026",
    category: "Ketenagakerjaan",
    readTime: "8 menit",
    date: "16 Mei 2026",
    title: "Panduan Hukum Kontrak Kerja 2026: Apa yang Berubah?",
    subtitle:
      "Tahun 2026 membawa sejumlah perubahan regulasi ketenagakerjaan di Indonesia. Berikut panduan lengkap yang wajib dipahami perusahaan dan pekerja.",
    author: {
      name: "Tim Legal Michael, Antonius & Co",
      role: "Employment Law Division",
    },
    content: [
      {
        type: "paragraph",
        text: "Regulasi ketenagakerjaan di Indonesia terus mengalami perkembangan. Dengan berlakunya revisi Peraturan Pemerintah terkait hubungan kerja dan Undang-Undang Cipta Kerja, penting bagi pelaku usaha dan karyawan untuk memahami perubahan yang terjadi agar hubungan kerja tetap harmonis dan sesuai hukum.",
      },
      {
        type: "heading",
        text: "Perubahan Utama dalam Regulasi 2026",
      },
      {
        type: "list",
        items: [
          "Penyesuaian ketentuan Perjanjian Kerja Waktu Tertentu (PKWT): Batas waktu dan kompensasi akhir kontrak kini lebih terstruktur.",
          "Kebijakan upah minimum regional: Formula perhitungan baru yang mempertimbangkan inflasi dan pertumbuhan ekonomi daerah.",
          "Ketentuan outsourcing yang diperketat: Pembatasan jenis pekerjaan yang dapat di-outsource dan kewajiban perlindungan pekerja alih daya.",
          "Fleksibilitas jam kerja: Regulasi baru mengakomodasi model kerja hybrid dan remote working dengan pedoman yang lebih jelas.",
        ],
      },
      {
        type: "heading",
        text: "Klausul Wajib dalam Kontrak Kerja",
      },
      {
        type: "list",
        items: [
          "Identitas lengkap para pihak (pemberi kerja dan pekerja).",
          "Jabatan, deskripsi pekerjaan, dan penempatan kerja.",
          "Besaran upah, tunjangan, dan komponen remunerasi lainnya.",
          "Syarat dan prosedur pemutusan hubungan kerja (PHK).",
          "Klausul kerahasiaan (NDA) dan non-kompetisi jika diperlukan.",
        ],
      },
      {
        type: "quote",
        text: "Kontrak kerja yang baik melindungi kedua belah pihak. Kejelasan di awal mencegah sengketa di kemudian hari.",
      },
      {
        type: "heading",
        text: "Dampak bagi Perusahaan",
      },
      {
        type: "paragraph",
        text: "Perusahaan perlu segera meninjau dan memperbarui template kontrak kerja yang digunakan. Kontrak yang tidak sesuai dengan regulasi terbaru dapat mengakibatkan sanksi administratif, denda, atau bahkan pembatalan klausul oleh pengadilan hubungan industrial.",
      },
      {
        type: "paragraph",
        text: "Kami merekomendasikan audit ketenagakerjaan secara berkala untuk memastikan kepatuhan perusahaan terhadap regulasi yang berlaku. Tim kami siap membantu review dan penyusunan kontrak kerja yang sesuai dengan standar hukum terkini.",
      },
    ],
    tags: ["Ketenagakerjaan", "Kontrak Kerja", "Regulasi", "PKWT"],
  },
  "hak-menghadapi-sengketa": {
    slug: "hak-menghadapi-sengketa",
    category: "Litigasi",
    readTime: "6 menit",
    date: "20 Mei 2026",
    title: "5 Hak Anda Saat Menghadapi Sengketa di Pengadilan",
    subtitle:
      "Memahami hak-hak Anda dalam proses litigasi adalah langkah pertama untuk melindungi kepentingan Anda secara efektif di pengadilan.",
    author: {
      name: "Tim Litigasi Michael, Antonius & Co",
      role: "Litigation & Dispute Resolution",
    },
    content: [
      {
        type: "paragraph",
        text: "Menghadapi proses hukum di pengadilan bisa terasa menakutkan, terutama bagi mereka yang baru pertama kali berhadapan dengan sistem peradilan. Namun, setiap warga negara memiliki hak-hak fundamental yang dilindungi oleh undang-undang. Mengetahui hak-hak ini akan membantu Anda mengambil keputusan yang tepat.",
      },
      {
        type: "heading",
        text: "1. Hak untuk Didampingi Kuasa Hukum",
      },
      {
        type: "paragraph",
        text: "Setiap orang berhak untuk didampingi oleh advokat atau kuasa hukum dalam setiap tahapan proses hukum. Ini berlaku baik dalam perkara perdata maupun pidana. Advokat akan memastikan hak-hak prosedural Anda terpenuhi dan strategi hukum dijalankan secara optimal.",
      },
      {
        type: "heading",
        text: "2. Hak untuk Didengar di Pengadilan (Audi Alteram Partem)",
      },
      {
        type: "paragraph",
        text: "Prinsip hukum universal ini menjamin bahwa kedua belah pihak memiliki kesempatan yang sama untuk menyampaikan argumen, bukti, dan pembelaan di hadapan hakim. Tidak ada putusan yang sah tanpa mendengar semua pihak.",
      },
      {
        type: "heading",
        text: "3. Hak atas Proses Peradilan yang Adil (Fair Trial)",
      },
      {
        type: "paragraph",
        text: "Anda berhak atas proses peradilan yang imparsial, transparan, dan dilakukan oleh hakim yang independen. Ini termasuk hak untuk mengetahui dakwaan atau gugatan yang diajukan terhadap Anda secara lengkap.",
      },
      {
        type: "heading",
        text: "4. Hak untuk Mengajukan Banding",
      },
      {
        type: "paragraph",
        text: "Jika Anda tidak puas dengan putusan pengadilan tingkat pertama, Anda memiliki hak untuk mengajukan banding ke pengadilan tinggi. Mekanisme upaya hukum ini tersedia untuk memastikan koreksi terhadap kemungkinan kesalahan dalam penerapan hukum.",
      },
      {
        type: "heading",
        text: "5. Hak atas Kerahasiaan dan Proteksi Data",
      },
      {
        type: "paragraph",
        text: "Dalam perkara tertentu, Anda berhak meminta agar persidangan dilakukan secara tertutup, terutama jika menyangkut informasi bisnis rahasia, keluarga, atau data pribadi yang sensitif.",
      },
      {
        type: "quote",
        text: "Mengetahui hak Anda adalah senjata paling kuat dalam setiap proses hukum. Ketidaktahuan bukanlah pembelaan, tetapi pengetahuan adalah perisai.",
      },
      {
        type: "paragraph",
        text: "Jika Anda sedang menghadapi atau berpotensi menghadapi sengketa hukum, jangan ragu untuk berkonsultasi dengan tim litigasi kami. Kami akan memastikan hak-hak Anda terlindungi dan strategi hukum terbaik diterapkan untuk kepentingan Anda.",
      },
    ],
    tags: ["Litigasi", "Hak Hukum", "Pengadilan", "Sengketa"],
  },
  "aspek-hukum-joint-venture": {
    slug: "aspek-hukum-joint-venture",
    category: "Korporat",
    readTime: "7 menit",
    date: "10 Juni 2026",
    title: "Aspek Hukum Pendirian Joint Venture di Indonesia",
    subtitle:
      "Kerjasama bisnis internasional menawarkan peluang besar, namun membutuhkan perlindungan hukum yang presisi sejak awal.",
    author: {
      name: "Tim Legal Michael, Antonius & Co",
      role: "Corporate Law Division",
    },
    content: [
      {
        type: "paragraph",
        text: "Joint Venture (JV) merupakan salah satu strategi paling umum bagi perusahaan lokal untuk berkolaborasi dengan investor asing atau sebaliknya. Namun, penggabungan modal dan teknologi lintas negara ini diatur dengan ketat oleh regulasi Penanaman Modal Asing (PMA) di Indonesia."
      },
      {
        type: "heading",
        text: "1. Pemilihan Struktur Badan Hukum"
      },
      {
        type: "paragraph",
        text: "Di Indonesia, joint venture dengan pihak asing wajib didirikan dalam bentuk Perseroan Terbatas Penanaman Modal Asing (PT PMA). Dokumen utama yang menjadi landasan adalah Joint Venture Agreement (JVA) dan Akta Pendirian Perusahaan."
      },
      {
        type: "heading",
        text: "2. Pembagian Saham dan Hak Suara"
      },
      {
        type: "paragraph",
        text: "JVA harus merinci pembagian kepemilikan saham, komposisi direksi dan dewan komisaris, hak veto (quorom & voting), serta mekanisme resolusi jika terjadi perselisihan (deadlock resolution)."
      },
      {
        type: "heading",
        text: "3. Hak Kekayaan Intelektual (HKI) dan Alih Teknologi"
      },
      {
        type: "paragraph",
        text: "Penting untuk mengatur kepemilikan HKI yang digunakan dalam JV. Apakah lisensi diberikan secara eksklusif, bagaimana royalti dihitung, dan siapa yang berhak atas pengembangan teknologi baru hasil dari JV tersebut."
      }
    ],
    tags: ["Joint Venture", "Korporat", "PT PMA", "Investasi"]
  },
  "klausul-arbitrase-kontrak-bisnis": {
    slug: "klausul-arbitrase-kontrak-bisnis",
    category: "Litigasi",
    readTime: "6 menit",
    date: "11 Juni 2026",
    title: "Pentingnya Klausul Arbitrase dalam Kontrak Bisnis",
    subtitle:
      "Penyelesaian sengketa yang cepat, tertutup, dan ditangani oleh ahli industri menjadikan arbitrase pilihan utama kontrak komersial.",
    author: {
      name: "Tim Litigasi Michael, Antonius & Co",
      role: "Litigation & Dispute Resolution Division",
    },
    content: [
      {
        type: "paragraph",
        text: "Saat merancang kontrak bisnis, bagian penyelesaian sengketa (dispute resolution clause) sering kali kurang mendapat perhatian. Padahal, pilihan forum penyelesaian sengketa sangat menentukan biaya, waktu, dan kerahasiaan saat terjadi perselisihan di kemudian hari."
      },
      {
        type: "heading",
        text: "Kelebihan Arbitrase Dibanding Pengadilan"
      },
      {
        type: "list",
        items: [
          "Kerahasiaan Terjamin: Berbeda dengan sidang pengadilan negeri yang terbuka untuk umum, proses arbitrase bersifat tertutup dan rahasia.",
          "Keahlian Arbiter: Para pihak dapat memilih arbiter yang memiliki keahlian khusus di bidang industri yang disengketakan (misal: konstruksi, teknologi, atau keuangan).",
          "Waktu Penyelesaian Terukur: Putusan arbitrase umumnya lebih cepat dan bersifat final serta mengikat (final and binding), sehingga tidak ada proses banding panjang."
        ]
      },
      {
        type: "heading",
        text: "Cara Menyusun Klausul Arbitrase yang Sah"
      },
      {
        type: "paragraph",
        text: "Pastikan klausul arbitrase mencantumkan lembaga arbitrase yang dipilih (seperti BANI atau SIAC), hukum yang berlaku (governing law), bahasa yang digunakan, serta jumlah arbiter. Klausul yang tidak jelas (pathological clause) justru dapat memicu sengketa baru."
      }
    ],
    tags: ["Arbitrase", "Kontrak Bisnis", "Sengketa", "BANI"]
  }
};
