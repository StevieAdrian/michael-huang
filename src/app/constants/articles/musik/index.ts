import { createArticleCatalog } from "@/app/constants/articles/catalog";
import { article as article1 } from "./proses-rekaman-studio";
import { article as article2 } from "./mixing-vs-mastering";
import { article as article3 } from "./distribusi-musik-streaming";
import { article as article4 } from "./peralatan-home-studio-pemula";
import { article as article5 } from "./memilih-daw-terbaik";
import { article as article6 } from "./vokal-nempel-di-mix";
import { article as article7 } from "./release-plan-single-30-hari";
import { article as article8 } from "./template-mixing-dasar";
import { article as article9 } from "./monetisasi-musisi-independen-streaming";
import { article as article10 } from "./soundproofing-studio-rumahan";
import { article as article11 } from "./kolaborasi-musisi-jarak-jauh";
import { article as article12 } from "./memahami-royalti-musik";
import { article as article13 } from "./membangun-home-studio-budget";
import { article as article14 } from "./checklist-rilis-lagu-digital";
import { article as article15 } from "./split-sheet-pembagian-hak-royalti";

const catalog = createArticleCatalog([article1, article2, article3, article4, article5, article6, article7, article8, article9, article10, article11, article12, article13, article14, article15]);

export const musicArticles = catalog.articles;
export const musicArticleDetails = catalog.details;
