import type { ArticleRecord } from "@/shared/types/article";

export const article: ArticleRecord = {
  id: "15",
  title: "Membuat Split Sheet: Menyepakati Pembagian Hak dan Royalti Musik",
  excerpt: "Catatan pembagian kontribusi sejak awal membantu penulis lagu, produser, dan kolaborator memiliki pemahaman yang sama tentang karya.",
  date: "16 November 2026",
  category: "Bisnis Musik",
  slug: "split-sheet-pembagian-hak-royalti",
  readTime: "7 menit",
  subtitle: "Split sheet mencatat siapa yang berkontribusi pada sebuah lagu dan kesepakatan pembagiannya, sehingga semua pihak memiliki acuan yang sama.",
  author: {
        name: "Tim Musik Dr. Michael, S.H., S.T., M.Kn., M.Th., Ph.D.",
        role: "Music Production Team",
      },
  content: [
        {
          type: "paragraph",
          text: "Sebuah lagu dapat melibatkan penulis lirik, komposer, produser, dan kolaborator lain. Jika pembagian kontribusi hanya dibicarakan lisan, ingatan para pihak bisa berbeda ketika lagu mulai dipakai atau menghasilkan pendapatan.",
        },
        {
          type: "heading",
          text: "Informasi yang Perlu Dicatat",
        },
        {
          type: "list",
          items: [
            "Judul sementara atau final dan tanggal pencatatan.",
            "Nama lengkap serta kontak setiap kontributor.",
            "Peran dan kontribusi masing-masing terhadap komposisi atau rekaman.",
            "Persentase pembagian yang telah disepakati dan hak yang dicakup.",
            "Persetujuan para pihak serta cara memperbarui catatan bila ada perubahan.",
          ],
        },
        {
          type: "heading",
          text: "Bicarakan Sebelum Lagu Dirilis",
        },
        {
          type: "paragraph",
          text: "Bedakan kepemilikan komposisi dari kepemilikan rekaman master, karena pihak dan kesepakatannya dapat berbeda. Jangan menganggap kontribusi otomatis memberi persentase tertentu; bahas ruang lingkupnya bersama dan tuliskan hasilnya dalam dokumen yang dapat dipahami semua pihak.",
        },
        {
          type: "quote",
          text: "Kesepakatan yang dibicarakan dengan terbuka sejak awal membantu kolaborasi tetap sehat ketika karya berkembang.",
        },
        {
          type: "paragraph",
          text: "Simpan salinan yang dapat diakses seluruh kontributor dan minta nasihat profesional jika ada ketidakjelasan hak atau penggunaan. Split sheet adalah catatan kesepakatan; pastikan bentuk dokumennya sesuai dengan kebutuhan dan aturan yang berlaku.",
        },
      ],
  tags: ["Split Sheet", "Hak Cipta Musik", "Royalti", "Kolaborasi Musisi"],
};
