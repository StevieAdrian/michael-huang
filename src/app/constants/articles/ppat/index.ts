import { createArticleCatalog } from "@/app/constants/articles/catalog";
import { article as article1 } from "./cara-balik-nama-sertifikat-tanah";
import { article as article2 } from "./dokumen-ajb-ppat";
import { article as article3 } from "./hak-tanggungan-pengertian";
import { article as article4 } from "./prosedur-hibah-tanah-pajak";
import { article as article5 } from "./akta-pembagian-hak-bersama-aphb";
import { article as article6 } from "./cek-sertifikat-sebelum-transaksi";
import { article as article7 } from "./split-sertifikat-tanah-proses";
import { article as article8 } from "./simulasi-biaya-ajb-bphtb-pph";
import { article as article9 } from "./cek-zona-tata-ruang-tanah";
import { article as article10 } from "./konversi-girik-sertifikat-ppat";
import { article as article11 } from "./perpanjangan-peningkatan-hgb-shm";
import { article as article12 } from "./pajak-jual-beli-tanah-bphtb-pph";
import { article as article13 } from "./roya-penghapusan-hak-tanggungan";
import { article as article14 } from "./sertifikat-tanah-hilang-pengganti";
import { article as article15 } from "./perbedaan-shm-hgb-hgu";

const catalog = createArticleCatalog([article1, article2, article3, article4, article5, article6, article7, article8, article9, article10, article11, article12, article13, article14, article15]);

export const ppatArticles = catalog.articles;
export const ppatArticleDetails = catalog.details;
