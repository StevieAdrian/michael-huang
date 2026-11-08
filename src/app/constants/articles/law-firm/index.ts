import { createArticleCatalog } from "@/app/constants/articles/catalog";
import { article as article1 } from "./melindungi-aset-bisnis";
import { article as article2 } from "./panduan-kontrak-kerja-2026";
import { article as article3 } from "./hak-menghadapi-sengketa";
import { article as article4 } from "./aspek-hukum-joint-venture";
import { article as article5 } from "./klausul-arbitrase-kontrak-bisnis";
import { article as article6 } from "./langkah-hukum-menghadapi-somasi";
import { article as article7 } from "./due-diligence-hukum-akuisisi-perusahaan";
import { article as article8 } from "./strategi-hukum-penagihan-piutang-korporasi";
import { article as article9 } from "./legal-opinion-kontrak-investasi";
import { article as article10 } from "./struktur-kepemilikan-saham-pendiri";
import { article as article11 } from "./pelanggaran-merek-dagang-tuntutan";
import { article as article12 } from "./litigasi-vs-arbitrase-sengketa";
import { article as article13 } from "./kontrak-kerja-hak-kewajiban";
import { article as article14 } from "./somasi-sengketa-perdata";
import { article as article15 } from "./mengumpulkan-bukti-sengketa-bisnis";

const catalog = createArticleCatalog([article1, article2, article3, article4, article5, article6, article7, article8, article9, article10, article11, article12, article13, article14, article15]);

export const lawFirmArticles = catalog.articles;
export const lawFirmArticleDetails = catalog.details;
