import { createArticleCatalog } from "@/app/constants/articles/catalog";
import { article as article1 } from "./legal-due-diligence-akuisisi";
import { article as article2 } from "./klausul-penting-kontrak-bisnis";
import { article as article3 } from "./kepatuhan-hukum-startup";
import { article as article4 } from "./aspek-hukum-merger-akuisisi";
import { article as article5 } from "./perlindungan-data-pribadi-pdp-perusahaan";
import { article as article6 } from "./audit-kontrak-vendor-tahunan";
import { article as article7 } from "./retainer-legal-perusahaan-efisien";
import { article as article8 } from "./legal-health-check-triwulan";
import { article as article9 } from "./mitigasi-sengketa-kerja-sop-hr";
import { article as article10 } from "./esg-compliance-hukum-perusahaan-indonesia";
import { article as article11 } from "./nda-efektif-perjanjian-kerahasiaan";
import { article as article12 } from "./perizinan-usaha-oss-panduan";
import { article as article13 } from "./compliance-perusahaan-kepatuhan-hukum";
import { article as article14 } from "./review-kontrak-vendor";
import { article as article15 } from "./kebijakan-privasi-layanan-digital";

const catalog = createArticleCatalog([article1, article2, article3, article4, article5, article6, article7, article8, article9, article10, article11, article12, article13, article14, article15]);

export const lawConsultingArticles = catalog.articles;
export const lawConsultingArticleDetails = catalog.details;
