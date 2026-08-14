import { Sparkles, Shield, Clock, Award, Smile, Phone, Mail, MapPin } from "lucide-react";
import { GOOGLE_MAPS_EMBED_URL, WHATSAPP_PHONE, EMAIL_ADDRESS, LOCATION_ADDRESS } from "@/app/constants/links";

export const clinicHero = {
  title: "MH Clinic",
  subtitle:
    "Klinik Estetika & Kecantikan Premium di Jakarta Barat. Menghadirkan perawatan kulit, wajah, dan tubuh modern berstandar tinggi yang dirancang khusus untuk kesehatan dan pancaran alami kulit Anda. Segera hadir untuk mendefinisikan kembali arti kecantikan sejati Anda.",
  align: "left" as const,
};

export const clinicServices = [
  {
    icon: Sparkles,
    title: "Facial Treatment & Glow",
    desc: "Perawatan pembersihan wajah mendalam dikombinasikan dengan serum premium untuk kulit lebih cerah, halus, dan bercahaya seketika.",
  },
  {
    icon: Award,
    title: "Laser Skin Rejuvenation",
    desc: "Teknologi laser terkini untuk meremajakan kulit, menyamarkan bekas jerawat, mengecilkan pori-pori, dan meratakan warna kulit.",
  },
  {
    icon: Smile,
    title: "Anti-Aging & Wrinkle Care",
    desc: "Terapi peremajaan kulit terfokus untuk meminimalkan garis halus, mengencangkan kulit kendur, dan merangsang produksi kolagen alami.",
  },
  {
    icon: Sparkles,
    title: "Acne Clear Solution",
    desc: "Program penanganan jerawat komprehensif mulai dari pembersihan, terapi cahaya (PDT), hingga perawatan bekas jerawat secara mendalam.",
  },
];

export const clinicWhyUs = [
  {
    icon: Shield,
    label: "Dokter Ahli Bersertifikat",
    desc: "Setiap perawatan dipandu dan diawasi langsung oleh dokter estetika profesional dan berpengalaman.",
  },
  {
    icon: Sparkles,
    label: "Teknologi Modern",
    desc: "Menggunakan peralatan kecantikan medis generasi terbaru yang aman, efektif, dan teruji klinis.",
  },
  {
    icon: Clock,
    label: "Konsultasi Personal",
    desc: "Pendekatan perawatan yang disesuaikan secara khusus dengan jenis dan kondisi kulit unik setiap individu.",
  },
  {
    icon: Award,
    label: "Produk Premium & Aman",
    desc: "Menggunakan produk berkualitas tinggi yang telah teregistrasi BPOM dan aman untuk penggunaan jangka panjang.",
  },
];

export const clinicContacts = [
  { icon: Phone, text: `+${WHATSAPP_PHONE}` },
  { icon: Mail, text: EMAIL_ADDRESS },
  { icon: MapPin, text: LOCATION_ADDRESS },
  { icon: Clock, text: "Opening Soon - Ikuti WhatsApp untuk Update" },
];

export const clinicMapEmbedUrl = GOOGLE_MAPS_EMBED_URL;

export const clinicGalleryImages = [
  {
    url: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=1200",
    title: "Perawatan Wajah Premium di MH Clinic Jakarta",
  },
  {
    url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200",
    title: "Ruang Perawatan dan Ambiance Klinik Estetika Modern",
  },
  {
    url: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=1200",
    title: "Produk Skincare Eksklusif Hasil Riset Medis",
  },
];

export const clinicFaqs = [
  {
    q: "Kapan MH Clinic akan resmi dibuka (Opening)?",
    a: "MH Clinic saat ini sedang dalam tahap persiapan akhir untuk memberikan layanan terbaik. Pembukaan resmi direncanakan dalam waktu dekat. Anda dapat menghubungi WhatsApp kami untuk masuk ke daftar prioritas (early-bird list) dan mendapatkan informasi diskon pembukaan pertama.",
  },
  {
    q: "Layanan kecantikan apa saja yang akan tersedia?",
    a: "Kami akan menghadirkan berbagai perawatan estetika modern seperti Facial Glow, Laser Skin Rejuvenation, Anti-Aging Treatment, Acne Clear Solution, serta konsultasi masalah kulit wajah dan tubuh secara komprehensif bersama dokter ahli.",
  },
  {
    q: "Di mana lokasi MH Clinic?",
    a: "MH Clinic berlokasi di area strategis Jakarta Barat, bertempat di Dr. Michael Building, Ruko Mutiara Taman Palem Blok C8 No 23-26, Cengkareng Timur, Jakarta Barat.",
  },
  {
    q: "Bagaimana cara mendapatkan info promo pembukaan (opening promo)?",
    a: "Caranya sangat mudah! Cukup klik tombol 'Daftar Antrean Prioritas' atau hubungi kami melalui tautan WhatsApp yang tersedia di situs ini. Kami akan mendaftarkan nomor Anda untuk menerima info promo eksklusif dan diskon hingga 50% khusus bagi pendaftar awal menjelang hari pembukaan.",
  },
  {
    q: "Apakah produk dan perawatan di MH Clinic aman?",
    a: "Ya, kebersihan, keamanan, dan kesehatan kulit Anda adalah prioritas utama kami. Seluruh perawatan dilakukan menggunakan alat medis berstandar internasional yang disterilisasi secara ketat dan produk perawatan kami telah teregistrasi resmi di BPOM RI.",
  },
];
