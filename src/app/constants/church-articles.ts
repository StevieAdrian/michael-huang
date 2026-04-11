import type { Article } from "@/shared/components/article-cards";
import type { ArticleDetail } from "@/shared/types/article";

export const churchArticles: Article[] = [
  {
    id: "1",
    title: "Makna Baptisan Air dalam Iman Kristen",
    excerpt:
      "Baptisan bukan sekadar ritual, melainkan pernyataan iman dan identitas baru sebagai pengikut Kristus.",
    date: "5 April 2025",
    category: "Iman",
    slug: "makna-baptisan-air",
  },
  {
    id: "2",
    title: "Pelayanan Sosial: Menjangkau Komunitas Sekitar",
    excerpt:
      "Gereja dipanggil menjadi berkat. Lihat bagaimana jemaat Glory Ministry menjangkau banyak jiwa melalui aksi nyata.",
    date: "20 Mar 2025",
    category: "Pelayanan",
    slug: "pelayanan-sosial-komunitas",
  },
  {
    id: "3",
    title: "Jadwal Retret Spiritual 2025 dan Persiapannya",
    excerpt:
      "Retret adalah waktu untuk berhenti, memulihkan hati, dan mendengar suara Tuhan dengan lebih jelas.",
    date: "10 Feb 2025",
    category: "Kegiatan",
    slug: "jadwal-retret-spiritual-2025",
  },
];

export const churchArticleDetails: Record<string, ArticleDetail> = {
  "makna-baptisan-air": {
    slug: "makna-baptisan-air",
    category: "Iman",
    readTime: "6 menit",
    date: "5 April 2025",
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
    date: "20 Mar 2025",
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
  "jadwal-retret-spiritual-2025": {
    slug: "jadwal-retret-spiritual-2025",
    category: "Kegiatan",
    readTime: "4 menit",
    date: "10 Feb 2025",
    title: "Jadwal Retret Spiritual 2025 dan Persiapannya",
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
};
