import { YOUTUBE_CHANNEL_URL, SPOTIFY_URL, APPLE_PODCASTS_URL, GOOGLE_PODCASTS_URL } from "./links";

export interface PodcastEpisode {
  number: string;
  title: string;
  guest: string;
  duration: string;
  desc: string;
}

export interface PodcastPlatform {
  name: string;
  url: string;
  color: string;
  icon: string;
}

export const podcastEpisodes: PodcastEpisode[] = [
  {
    number: "EP 24",
    title: "Bisnis dan Iman: Menemukan Keseimbangan",
    guest: "Michael Huang",
    duration: "1j 12m",
    desc: "Bagaimana iman membentuk cara kita berbisnis. Obrolan jujur tentang prinsip, godaan, dan keberhasilan sejati.",
  },
  {
    number: "EP 23",
    title: "Hukum dan Pengusaha Muda di Indonesia",
    guest: "Adv. Sari Wulandari",
    duration: "54 mnt",
    desc: "Hal penting yang wajib dipahami pengusaha muda terkait aspek hukum bisnis, dijelaskan secara praktis.",
  },
  {
    number: "EP 22",
    title: "Investasi Properti di Era Digital",
    guest: "Budi Setiawan, CFP",
    duration: "1j 5m",
    desc: "Strategi investasi properti yang tetap relevan di tengah perubahan pola ekonomi digital.",
  },
  {
    number: "EP 21",
    title: "Musik sebagai Identitas dan Pelayanan",
    guest: "Indra Wirawan",
    duration: "48 mnt",
    desc: "Bermusik bukan sekadar karier, tetapi juga panggilan. Obrolan tentang musik, identitas, dan komunitas.",
  },
  {
    number: "EP 20",
    title: "Membangun Tim yang Solid dan Loyal",
    guest: "Dewi Purnama, HR Expert",
    duration: "1j 3m",
    desc: "Cara membangun tim yang tidak hanya kompeten, tetapi juga berkomitmen terhadap visi jangka panjang.",
  },
  {
    number: "EP 19",
    title: "Perjalanan Iman: Dari Ragu Menuju Percaya",
    guest: "Pdt. Hendra Lim",
    duration: "1j 18m",
    desc: "Kisah nyata tentang proses menemukan iman di tengah tekanan dan krisis kehidupan.",
  },
];

export const podcastPlatforms: PodcastPlatform[] = [
  {
    name: "YouTube",
    url: YOUTUBE_CHANNEL_URL,
    color: "bg-red-600",
    icon: ">",
  },
  { name: "Spotify", url: SPOTIFY_URL, color: "bg-emerald-600", icon: "S" },
  { name: "Apple Podcasts", url: APPLE_PODCASTS_URL, color: "bg-indigo-600", icon: "A" },
  { name: "Google Podcasts", url: GOOGLE_PODCASTS_URL, color: "bg-blue-600", icon: "G" },
];
