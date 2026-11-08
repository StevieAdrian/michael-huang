import { createArticleCatalog } from "@/app/constants/articles/catalog";
import { article as article1 } from "./memulai-podcast-panduan";
import { article as article2 } from "./podcast-untuk-bisnis";
import { article as article3 } from "./tips-tamu-podcast-berkualitas";
import { article as article4 } from "./peralatan-dasar-podcast-profesional";
import { article as article5 } from "./cara-bicara-lancar-podcast";
import { article as article6 } from "./struktur-episode-podcast-20-menit";
import { article as article7 } from "./repurpose-episode-jadi-konten";
import { article as article8 } from "./teknik-opening-30-detik-podcast";
import { article as article9 } from "./konsistensi-rilis-podcast-mingguan";
import { article as article10 } from "./teknik-wawancara-podcast";
import { article as article11 } from "./strategi-promosi-podcast";
import { article as article12 } from "./judul-deskripsi-episode-podcast";
import { article as article13 } from "./monetisasi-podcast-kerja-sama-sponsor";

const catalog = createArticleCatalog([article1, article2, article3, article4, article5, article6, article7, article8, article9, article10, article11, article12, article13]);

export const podcastArticles = catalog.articles;
export const podcastArticleDetails = catalog.details;
