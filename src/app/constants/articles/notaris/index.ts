import { createArticleCatalog } from "@/app/constants/articles/catalog";
import { article as article1 } from "./apa-itu-akta-autentik";
import { article as article2 } from "./prosedur-pendirian-pt-notaris";
import { article as article3 } from "./perbedaan-notaris-ppat";
import { article as article4 } from "./akta-pendirian-yayasan-prosedur";
import { article as article5 } from "./fungsi-legalisasi-waarmerking-notaris";
import { article as article6 } from "./perjanjian-pranikah-setelah-menikah";
import { article as article7 } from "./checklist-legalisasi-dokumen-luar-negeri";
import { article as article8 } from "./akta-hibah-vs-wasiat";
import { article as article9 } from "./syarat-akta-kuasa-menjual";
import { article as article10 } from "./surat-keterangan-waris-akta-kematian";
import { article as article11 } from "./akta-rups-notaris-fungsi";
import { article as article12 } from "./akta-jaminan-fidusia-notaris";
import { article as article13 } from "./cara-memilih-notaris-tepat";
import { article as article14 } from "./akta-perjanjian-sewa-menyewa";
import { article as article15 } from "./peran-notaris-pendirian-koperasi";

const catalog = createArticleCatalog([article1, article2, article3, article4, article5, article6, article7, article8, article9, article10, article11, article12, article13, article14, article15]);

export const notarisArticles = catalog.articles;
export const notarisArticleDetails = catalog.details;
