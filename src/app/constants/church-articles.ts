import type { Article } from "@/shared/components/article-cards";
import type { ArticleDetail } from "@/shared/types/article";

export const churchArticles: Article[] = [
  {
    id: "1",
    title: "Makna Baptisan Air dalam Iman Kristen",
    excerpt:
      "Baptisan bukan sekadar ritual, melainkan pernyataan iman dan identitas baru sebagai pengikut Kristus.",
    date: "5 April 2026",
    category: "Iman",
    slug: "makna-baptisan-air",
  },
  {
    id: "2",
    title: "Pelayanan Sosial: Menjangkau Komunitas Sekitar",
    excerpt:
      "Gereja dipanggil menjadi berkat. Lihat bagaimana jemaat Glory Ministry menjangkau banyak jiwa melalui aksi nyata.",
    date: "20 Mar 2026",
    category: "Pelayanan",
    slug: "pelayanan-sosial-komunitas",
  },
  {
    id: "3",
    title: "Jadwal Retret Spiritual 2026 dan Persiapannya",
    excerpt:
      "Retret adalah waktu untuk berhenti, memulihkan hati, dan mendengar suara Tuhan dengan lebih jelas.",
    date: "10 Feb 2026",
    category: "Kegiatan",
    slug: "jadwal-retret-spiritual-2026",
  },
  {
    id: "4",
    title: "Membangun Kehidupan Doa yang Konsisten",
    excerpt:
      "Doa bukan sekadar rutinitas, melainkan napas kehidupan rohani. Pelajari cara membangun kebiasaan doa yang hidup dan bermakna setiap hari.",
    date: "18 Mei 2026",
    category: "Renungan",
    slug: "kehidupan-doa-konsisten",
  },
  {
    id: "5",
    title: "Pentingnya Kelompok Kecil dalam Pertumbuhan Iman",
    excerpt:
      "Kelompok kecil adalah tempat di mana iman bertumbuh melalui relasi, saling menguatkan, dan belajar firman bersama.",
    date: "2 Mei 2026",
    category: "Komunitas",
    slug: "kelompok-kecil-pertumbuhan-iman",
  },
];

export const churchArticleDetails: Record<string, ArticleDetail> = {
  "makna-baptisan-air": {
    slug: "makna-baptisan-air",
    category: "Iman",
    readTime: "6 menit",
    date: "5 April 2026",
    title: "Makna Baptisan Air dalam Iman Kristen",
    subtitle:
      "Baptisan air bukan sekadar tradisi gereja. Baptisan adalah tanda ketaatan, pertobatan, dan komitmen untuk hidup baru di dalam Kristus.",
    author: {
      name: "Tim Pastoral Glory Ministry",
      role: "Redaksi Gereja",
    },
    content: [
      {
        type: "paragraph",
        text: "Dalam perjalanan iman Kristen, baptisan air adalah langkah penting yang menegaskan keputusan seseorang untuk mengikuti Yesus. Tindakan ini bukan syarat keselamatan, namun menjadi pernyataan publik bahwa seseorang telah percaya kepada Kristus dan memilih hidup dalam ketaatan pada firman Tuhan.",
      },
      {
        type: "heading",
        text: "Apa Arti Baptisan Air?",
      },
      {
        type: "paragraph",
        text: "Secara sederhana, baptisan air melambangkan kematian manusia lama dan kebangkitan manusia baru. Saat seseorang dibaptis, ia menyatakan bahwa hidup lamanya sudah ditinggalkan dan ia memasuki hidup baru yang dipimpin Roh Kudus. Baptisan juga menjadi simbol penyatuan kita dengan kematian dan kebangkitan Kristus.",
      },
      {
        type: "quote",
        text: "Karena itu pergilah, jadikanlah semua bangsa murid-Ku dan baptislah mereka dalam nama Bapa dan Anak dan Roh Kudus. - Matius 28:19",
      },
      {
        type: "heading",
        text: "Mengapa Orang Percaya Perlu Dibaptis?",
      },
      {
        type: "list",
        items: [
          "Sebagai bentuk ketaatan kepada perintah Tuhan Yesus.",
          "Sebagai kesaksian iman di depan jemaat dan keluarga.",
          "Sebagai momen komitmen untuk meninggalkan hidup lama.",
          "Sebagai langkah awal bertumbuh dalam komunitas rohani.",
        ],
      },
      {
        type: "paragraph",
        text: "Baptisan bukan akhir, melainkan awal perjalanan bersama Tuhan. Setelah dibaptis, setiap orang percaya dipanggil untuk terus belajar firman, berdoa, melayani, dan hidup dalam persekutuan yang sehat.",
      },
      {
        type: "heading",
        text: "Persiapan Sebelum Baptisan",
      },
      {
        type: "list",
        items: [
          "Ikuti kelas pembinaan baptisan untuk memahami dasar iman Kristen.",
          "Konsultasikan kesiapan rohani bersama tim pastoral.",
          "Siapkan kesaksian singkat tentang perjalanan iman Anda.",
          "Undang keluarga atau sahabat sebagai dukungan rohani.",
        ],
      },
      {
        type: "paragraph",
        text: "Jika Anda rindu dibaptis, kami mengundang Anda untuk mendaftar pada sesi baptisan berikutnya. Tim gereja siap mendampingi Anda secara pribadi agar keputusan ini menjadi langkah yang kokoh dalam iman.",
      },
    ],
    tags: ["Iman", "Baptisan", "Pemuridan", "Gereja"],
  },
  "pelayanan-sosial-komunitas": {
    slug: "pelayanan-sosial-komunitas",
    category: "Pelayanan",
    readTime: "6 menit",
    date: "20 Mar 2026",
    title: "Pelayanan Sosial: Menjangkau Komunitas Sekitar",
    subtitle:
      "Gereja dipanggil menjadi garam dan terang, bukan hanya di ruang ibadah, tetapi juga di tengah kebutuhan masyarakat sekitar.",
    author: {
      name: "Tim Pelayanan Sosial Glory Ministry",
      role: "Kepedulian Jemaat",
    },
    content: [
      {
        type: "paragraph",
        text: "Pelayanan sosial adalah ekspresi kasih Tuhan yang nyata. Melalui program bantuan pangan, dukungan pendidikan, dan kunjungan pastoral, gereja dapat hadir bagi keluarga yang membutuhkan penguatan secara rohani maupun praktis.",
      },
      {
        type: "heading",
        text: "Fokus Pelayanan Komunitas",
      },
      {
        type: "list",
        items: [
          "Distribusi paket sembako untuk keluarga rentan.",
          "Program beasiswa dan perlengkapan sekolah anak.",
          "Kunjungan doa dan konseling bagi lansia serta pasien.",
          "Kolaborasi relawan jemaat untuk tanggap bencana lokal.",
        ],
      },
      {
        type: "paragraph",
        text: "Ketika gereja hadir secara konsisten, masyarakat tidak hanya menerima bantuan, tetapi juga merasakan harapan. Pelayanan sosial yang sehat selalu berangkat dari relasi, bukan sekadar kegiatan seremonial.",
      },
      {
        type: "quote",
        text: "Aku berkata kepadamu, sesungguhnya segala sesuatu yang kamu lakukan untuk salah seorang dari saudara-Ku yang paling hina ini, kamu telah melakukannya untuk Aku. - Matius 25:40",
      },
      {
        type: "heading",
        text: "Cara Jemaat Dapat Terlibat",
      },
      {
        type: "list",
        items: [
          "Mendaftar sebagai relawan tetap untuk kunjungan komunitas.",
          "Mendukung program sosial melalui persembahan kasih bulanan.",
          "Menjadi mentor belajar bagi anak-anak dari keluarga prasejahtera.",
          "Mengajak kelompok kecil terlibat dalam aksi sosial terjadwal.",
        ],
      },
      {
        type: "paragraph",
        text: "Setiap anggota jemaat memiliki peran yang berharga. Melalui doa, waktu, tenaga, dan sumber daya yang kita bagikan, gereja bisa menjadi saluran kasih Kristus yang relevan dan berdampak bagi kota kita.",
      },
    ],
    tags: ["Pelayanan", "Komunitas", "Misi", "Kasih"],
  },
  "jadwal-retret-spiritual-2026": {
    slug: "jadwal-retret-spiritual-2026",
    category: "Kegiatan",
    readTime: "4 menit",
    date: "10 Feb 2026",
    title: "Jadwal Retret Spiritual 2026 dan Persiapannya",
    subtitle:
      "Retret tahunan adalah momen untuk berhenti sejenak, memulihkan hati, dan kembali menyelaraskan hidup dengan panggilan Tuhan.",
    author: {
      name: "Tim Penggembalaan Glory Ministry",
      role: "Koordinator Kegiatan",
    },
    content: [
      {
        type: "paragraph",
        text: "Retret rohani dirancang agar jemaat memiliki ruang untuk berdoa, merenung, dan diperlengkapi. Dalam ritme hidup yang cepat, retret membantu kita memperbarui fokus kepada Tuhan dan sesama.",
      },
      {
        type: "heading",
        text: "Hal yang Perlu Dipersiapkan",
      },
      {
        type: "list",
        items: [
          "Mendaftarkan diri sesuai tenggat waktu panitia.",
          "Menyiapkan perlengkapan pribadi dan Alkitab.",
          "Mendoakan hati yang terbuka untuk dibentuk Tuhan.",
          "Mengatur jadwal agar dapat mengikuti retret secara penuh.",
        ],
      },
      {
        type: "quote",
        text: "Datanglah kepada-Ku, semua yang letih lesu dan berbeban berat, Aku akan memberi kelegaan kepadamu. - Matius 11:28",
      },
      {
        type: "paragraph",
        text: "Kami mendorong setiap jemaat untuk mengambil bagian dalam retret ini. Bersama-sama kita belajar membangun kehidupan doa yang kuat, hubungan yang sehat, dan komitmen pelayanan yang semakin matang.",
      },
    ],
    tags: ["Retret", "Pertumbuhan", "Komunitas", "Doa"],
  },
  "kehidupan-doa-konsisten": {
    slug: "kehidupan-doa-konsisten",
    category: "Renungan",
    readTime: "7 menit",
    date: "18 Mei 2026",
    title: "Membangun Kehidupan Doa yang Konsisten",
    subtitle:
      "Banyak orang percaya merindukan kehidupan doa yang lebih dalam, namun kesulitan menjaga konsistensi. Artikel ini membagikan prinsip praktis untuk membangun kebiasaan doa yang bermakna.",
    author: {
      name: "Tim Pastoral Glory Ministry",
      role: "Redaksi Gereja",
    },
    content: [
      {
        type: "paragraph",
        text: "Doa adalah percakapan pribadi dengan Tuhan — bukan monolog formal, melainkan dialog penuh kepercayaan antara anak dan Bapa surgawi. Namun di tengah kesibukan hidup modern, banyak orang percaya merasa kehidupan doa mereka kering dan tidak konsisten.",
      },
      {
        type: "heading",
        text: "Mengapa Doa Sering Terabaikan?",
      },
      {
        type: "list",
        items: [
          "Kesibukan dan jadwal yang padat membuat doa tergeser oleh aktivitas lain.",
          "Perasaan bahwa doa tidak langsung menjawab kebutuhan sehingga motivasi menurun.",
          "Kurangnya pemahaman bahwa doa adalah kebutuhan rohani, bukan sekadar kewajiban.",
          "Gangguan digital — ponsel dan media sosial merebut waktu yang bisa digunakan untuk berdoa.",
        ],
      },
      {
        type: "heading",
        text: "Prinsip Membangun Kebiasaan Doa",
      },
      {
        type: "list",
        items: [
          "Tentukan waktu tetap — pilih waktu spesifik setiap hari (pagi sebelum aktivitas atau malam sebelum tidur) dan jadikan non-negotiable.",
          "Mulai dari yang sederhana — tidak harus lama. 5-10 menit doa yang tulus lebih bermakna daripada 1 jam tanpa fokus.",
          "Gunakan panduan — jurnal doa, daftar syukur, atau model doa ACTS (Adoration, Confession, Thanksgiving, Supplication) membantu mengarahkan doa.",
          "Berdoa dengan firman — baca satu ayat Alkitab lalu respons dalam doa. Ini membantu doa tetap berdasarkan kebenaran.",
          "Cari partner doa — berdoa bersama teman atau pasangan meningkatkan akuntabilitas dan kedalaman doa.",
        ],
      },
      {
        type: "quote",
        text: "Tetaplah berdoa dan jangan jemu-jemu. — Kolose 4:2",
      },
      {
        type: "heading",
        text: "Ketika Doa Terasa Hambar",
      },
      {
        type: "paragraph",
        text: "Setiap orang percaya pernah mengalami musim kering dalam kehidupan doa. Ini bukan tanda kegagalan rohani, melainkan bagian alami dari perjalanan iman. Ketika doa terasa hambar, tetaplah datang kepada Tuhan — bahkan dengan kata-kata yang sederhana. Kesetiaan dalam musim kering justru membentuk iman yang lebih tangguh.",
      },
      {
        type: "paragraph",
        text: "Di Glory Ministry Church, kami percaya bahwa kehidupan doa yang sehat adalah fondasi dari segala pelayanan dan pertumbuhan iman. Bergabunglah dalam doa bersama setiap ibadah atau hubungi tim pastoral kami jika Anda ingin pendampingan doa secara pribadi.",
      },
    ],
    tags: ["Doa", "Renungan", "Kehidupan Rohani", "Pertumbuhan Iman"],
  },
  "kelompok-kecil-pertumbuhan-iman": {
    slug: "kelompok-kecil-pertumbuhan-iman",
    category: "Komunitas",
    readTime: "6 menit",
    date: "2 Mei 2026",
    title: "Pentingnya Kelompok Kecil dalam Pertumbuhan Iman",
    subtitle:
      "Gereja bukan hanya soal ibadah Minggu. Kelompok kecil adalah tempat di mana iman dipraktikkan, hubungan dibangun, dan setiap orang dikenal secara pribadi.",
    author: {
      name: "Tim Pemuridan Glory Ministry",
      role: "Koordinator Kelompok Kecil",
    },
    content: [
      {
        type: "paragraph",
        text: "Dalam gereja yang semakin besar, mudah bagi seseorang untuk merasa tersembunyi di tengah keramaian. Ibadah Minggu memberikan inspirasi dan penyembahan, namun pertumbuhan iman yang sesungguhnya sering terjadi dalam lingkaran yang lebih kecil dan intim — di situlah kelompok kecil berperan.",
      },
      {
        type: "heading",
        text: "Apa Itu Kelompok Kecil?",
      },
      {
        type: "paragraph",
        text: "Kelompok kecil (cell group atau small group) adalah perkumpulan 5-12 orang yang bertemu secara rutin untuk belajar firman, berdoa, berbagi kehidupan, dan saling mendukung. Di Glory Ministry Church, kelompok kecil bertemu setiap minggu di rumah-rumah anggota atau secara online.",
      },
      {
        type: "heading",
        text: "Manfaat Bergabung di Kelompok Kecil",
      },
      {
        type: "list",
        items: [
          "Pertumbuhan iman yang lebih dalam — belajar firman secara interaktif dan relevan dengan kehidupan sehari-hari.",
          "Akuntabilitas rohani — memiliki teman yang mengenal Anda dan mendorong Anda bertumbuh.",
          "Dukungan dalam pergumulan — tempat aman untuk berbagi beban dan didoakan secara spesifik.",
          "Penemuan karunia — kelompok kecil menjadi ruang latihan untuk menemukan dan mengembangkan karunia pelayanan.",
          "Relasi yang otentik — membangun persahabatan yang lebih dari sekadar kenalan di ibadah Minggu.",
        ],
      },
      {
        type: "quote",
        text: "Besi menajamkan besi, orang menajamkan sesamanya. — Amsal 27:17",
      },
      {
        type: "heading",
        text: "Bagaimana Kelompok Kecil di Glory Ministry Berjalan?",
      },
      {
        type: "list",
        items: [
          "Ice breaker — pembuka ringan untuk mencairkan suasana dan membangun keakraban.",
          "Pujian dan penyembahan — waktu menyembah bersama dalam suasana intim.",
          "Diskusi firman — pembahasan perikop Alkitab atau tema khotbah minggu sebelumnya secara interaktif.",
          "Doa bersama — saling mendoakan pergumulan dan syukur secara spesifik.",
          "Fellowship — makan bersama atau kegiatan sosial ringan untuk mempererat hubungan.",
        ],
      },
      {
        type: "paragraph",
        text: "Jika Anda belum bergabung di kelompok kecil, ini adalah saat yang tepat untuk memulai. Tidak perlu menunggu sempurna atau merasa siap — datang apa adanya dan biarkan komunitas ini menjadi tempat Anda bertumbuh bersama. Hubungi tim kami untuk informasi kelompok kecil terdekat di area Anda.",
      },
    ],
    tags: ["Kelompok Kecil", "Komunitas", "Pemuridan", "Persekutuan"],
  },
};
