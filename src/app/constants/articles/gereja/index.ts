import { createArticleCatalog } from "@/app/constants/articles/catalog";
import { article as article1 } from "./makna-baptisan-air";
import { article as article2 } from "./pelayanan-sosial-komunitas";
import { article as article3 } from "./jadwal-retret-spiritual-2026";
import { article as article4 } from "./kehidupan-doa-konsisten";
import { article as article5 } from "./kelompok-kecil-pertumbuhan-iman";
import { article as article6 } from "./disiplin-baca-alkitab-15-menit";
import { article as article7 } from "./melayani-dengan-sehat-anti-burnout";
import { article as article8 } from "./arti-sabat-pekerja-modern";
import { article as article9 } from "./membangun-mezbah-keluarga-harian";
import { article as article10 } from "./kekuatan-pengampunan-tanda-iman";
import { article as article11 } from "./pemuridan-generasi-muda-iman";
import { article as article12 } from "./pentingnya-doa-kehidupan-sehari-hari";
import { article as article13 } from "./melayani-gereja-panggilan-karunia";
import { article as article14 } from "./mengelola-kecemasan-iman-komunitas";
import { article as article15 } from "./komunitas-gereja-ramah-pendatang-baru";

const catalog = createArticleCatalog([article1, article2, article3, article4, article5, article6, article7, article8, article9, article10, article11, article12, article13, article14, article15]);

export const churchArticles = catalog.articles;
export const churchArticleDetails = catalog.details;
