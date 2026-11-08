import { createArticleCatalog } from "@/app/constants/articles/catalog";
import { article as article1 } from "./tips-memilih-kost-jakarta";
import { article as article2 } from "./fasilitas-wajib-kost-premium";
import { article as article3 } from "./keuntungan-kost-pusat-bisnis";
import { article as article4 } from "./budget-bulanan-anak-kost";
import { article as article5 } from "./dekorasi-kamar-kost-nyaman";
import { article as article6 } from "./checklist-sebelum-masuk-kost-baru";
import { article as article7 } from "./etika-tinggal-di-kost-bersama";
import { article as article8 } from "./memilih-teman-sekamar-cocok";
import { article as article9 } from "./kamar-kost-anti-lembap";
import { article as article10 } from "./panduan-pindah-kost-aman";
import { article as article11 } from "./negosiasi-harga-sewa-kost";
import { article as article12 } from "./checklist-barang-pindah-kost";
import { article as article13 } from "./hak-kewajiban-penghuni-kost";
import { article as article14 } from "./memilih-kost-aman-nyaman";
import { article as article15 } from "./deposit-kost-kesepakatan-pembayaran";

const catalog = createArticleCatalog([article1, article2, article3, article4, article5, article6, article7, article8, article9, article10, article11, article12, article13, article14, article15]);

export const kostArticles = catalog.articles;
export const kostArticleDetails = catalog.details;
