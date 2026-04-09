export interface YoutubeVideoItem {
  title: string;
  description: string;
  thumbnail?: string;
}

export const defaultYoutubeVideos: YoutubeVideoItem[] = [
  {
    title: "Video Terbaru",
    description: "Tonton konten terbaru di channel YouTube kami",
  },
  {
    title: "Koleksi Pilihan",
    description: "Video pilihan dari arsip channel kami",
  },
  {
    title: "Behind The Scenes",
    description: "Proses kreatif di balik layar studio kami",
  },
];
