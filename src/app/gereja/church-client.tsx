"use client";

import { useEffect, useState } from "react";
import {
  Bell,
  Calendar,
  ChevronDown,
  Clock,
  Heart,
  HeartHandshake,
  Image,
  Mail,
  MapPin,
  Phone,
  QrCode,
  Users,
  Target,
  Compass,
  FileSpreadsheet,
  X,
  Youtube,
  ZoomIn,
  ZoomOut
} from "lucide-react";
import { PageHero } from "@/features/home/components/page-hero";
import { CHURCH_WHATSAPP_URL, YOUTUBE_CHANNEL_URL, CHURCH_MAPS_URL } from "@/app/constants/links";
import { ArticleCards } from "@/shared/components/article-cards";
import {
  churchAnnouncements,
  churchContactInfo,
  churchDonationItems,
  churchSchedules,
  churchUpcomingEvents,
  churchWeeklyPhotos,
  churchYoutubeVideos,
  churchTitheData,
  churchPastors,
  churchVisionMission,
  churchMonthlyThemes,
  ChurchTitheMonth
} from "@/app/constants/church";
import { churchArticles } from "@/app/constants/church-articles";

interface ChurchClientPageProps {
  initialTitheData?: ChurchTitheMonth[];
}

export function ChurchClientPage({ initialTitheData }: ChurchClientPageProps) {
  const titheData = initialTitheData && initialTitheData.length > 0 ? initialTitheData : churchTitheData;
  const [selectedTheme, setSelectedTheme] = useState<typeof churchMonthlyThemes[0] | null>(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [openDonation, setOpenDonation] = useState<string | null>("perpuluhan");
  const [selectedTitheMonth, setSelectedTitheMonth] = useState(titheData[0]?.month || "");
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const currentMonth = new Date().getMonth() + 1; // 1-12

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const nextSunday = new Date();

      nextSunday.setDate(now.getDate() + ((7 - now.getDay()) % 7 || 7));
      if (now.getDay() === 0 && now.getHours() >= 10) {
        nextSunday.setDate(nextSunday.getDate() + 7);
      }
      nextSunday.setHours(10, 0, 0, 0);

      const diff = Math.max(0, nextSunday.getTime() - now.getTime());
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const photosWithImages = churchWeeklyPhotos.filter(p => p.image);
  const selectedPhoto = selectedPhotoIndex !== null ? photosWithImages[selectedPhotoIndex] : null;

  const handleNextPhoto = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % photosWithImages.length);
      setIsZoomed(false);
      setPanOffset({ x: 0, y: 0 });
    }
  };

  const handlePrevPhoto = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex - 1 + photosWithImages.length) % photosWithImages.length);
      setIsZoomed(false);
      setPanOffset({ x: 0, y: 0 });
    }
  };

  const onDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isZoomed) return;
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    setDragStart({ x: clientX - panOffset.x, y: clientY - panOffset.y });
  };

  const onDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || !isZoomed) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    setPanOffset({
      x: clientX - dragStart.x,
      y: clientY - dragStart.y
    });
  };

  const onDragEnd = () => setIsDragging(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedPhoto) return;
      if (e.key === "Escape") {
        setSelectedPhotoIndex(null);
        setIsZoomed(false);
      }
      if (e.key === "ArrowRight") handleNextPhoto();
      if (e.key === "ArrowLeft") handlePrevPhoto();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhoto, selectedPhotoIndex]);

  return (
    <div className="pb-24">
      <PageHero
        title="Glory Ministry Church"
        subtitle="Komunitas iman yang penuh kasih, harapan, dan sukacita. Bergabunglah bersama kami setiap Minggu."
        align="left"
      />

      <section id="jadwal" className="bg-gradient-gold py-12 relative z-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-primary-foreground font-semibold uppercase tracking-widest mb-6 text-sm">
            Ibadah Minggu Berikutnya
          </h3>
          <div className="flex justify-center gap-2 md:gap-8">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="flex flex-col items-center">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-background/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl md:text-5xl font-display font-bold text-primary-foreground border border-white/20 shadow-lg">
                  {value.toString().padStart(2, "0")}
                </div>
                <span className="text-primary-foreground/80 text-xs md:text-sm uppercase tracking-wider mt-2 font-medium">
                  {unit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section id="visi-misi" className="py-12 md:py-20 bg-background border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-4xl font-display font-bold mb-8 text-gold">Visi & Misi</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-card border border-border/50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-gold"/> Visi
              </h3>
              <p className="text-muted-foreground">{churchVisionMission.vision}</p>
            </div>
            <div className="bg-card border border-border/50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Compass className="w-5 h-5 text-gold"/> Misi
              </h3>
              <ul className="space-y-3">
                {churchVisionMission.mission.map((m, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground">
                    <span className="text-gold font-bold">{i+1}.</span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership / Pastors Section */}
      <section id="gembala" className="py-20 md:py-32 bg-card border-b border-border/50 relative overflow-hidden">
        {/* Subtle Background Decoration */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-sm font-bold text-gold uppercase tracking-[0.3em] mb-4">Spiritual Leaders</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold mb-6">Tim Gembala</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              Kami dilayani oleh hamba-hamba Tuhan yang mendedikasikan hidupnya untuk menuntun dan melayani jemaat dengan hati yang tulus.
            </p>
          </div>
          
          {/* Main Pastor - Premium Card */}
          <div className="flex justify-center mb-24 md:mb-32">
            {churchPastors.filter(p => p.isMain).map(pastor => (
              <div key={pastor.name} className="relative group max-w-4xl w-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-gold/20 via-gold/40 to-gold/20 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-background border border-gold/20 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row items-center cursor-default">
                  {/* Photo Part */}
                  <div className="w-full md:w-2/5 aspect-[4/5] md:aspect-square overflow-hidden border-b md:border-b-0 md:border-r border-gold/10">
                    <img 
                      src={pastor.image} 
                      alt={pastor.name} 
                      className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105" 
                    />
                  </div>
                  {/* Content Part */}
                  <div className="w-full md:w-3/5 p-8 md:p-12 text-center md:text-left flex flex-col justify-center">
                    <div className="w-12 h-1 bg-gold mb-6 mx-auto md:mx-0"></div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-4 leading-tight">
                      {pastor.name}
                    </h3>
                    <p className="text-gold font-bold uppercase tracking-widest text-sm mb-6">
                      {pastor.role}
                    </p>
                    <p className="text-muted-foreground italic text-sm md:text-base mb-0 leading-relaxed">
                      "Melayani dengan segenap hati untuk kemuliaan Tuhan."
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mb-12">
            <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] mb-8 relative inline-block">
              Associate Pastors
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-px bg-border"></span>
            </h4>
          </div>

          {/* Associate Pastors - Refined Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {churchPastors.filter(p => !p.isMain).map(pastor => (
              <div key={pastor.name} className="group flex flex-col items-center">
                <div className="relative w-40 h-40 md:w-48 md:h-48 mb-6">
                  {/* Outer Ring */}
                  <div className="absolute -inset-2 bg-gold/5 rounded-full border border-gold/10 group-hover:border-gold/30 transition-colors duration-500"></div>
                  {/* Image Container */}
                  <div className="relative w-full h-full bg-muted rounded-full overflow-hidden border-2 border-transparent group-hover:border-gold/50 shadow-xl transition-all duration-500">
                    <img 
                      src={pastor.image} 
                      alt={pastor.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110" 
                    />
                  </div>
                </div>
                <h3 className="text-lg font-bold font-display group-hover:text-gold transition-colors duration-300">
                  {pastor.name}
                </h3>
                <p className="text-muted-foreground text-xs uppercase tracking-widest font-semibold mt-1">
                  {pastor.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Theme Carousel Section */}
      <section id="tema-bulanan" className="py-16 md:py-24 bg-background border-y border-border/50 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Tema Bulanan {new Date().getFullYear()}</h2>
              <p className="text-muted-foreground md:text-lg">Kumpulan renungan firman Tuhan yang menuntun langkah kita bertumbuh di sepanjang tahun ini.</p>
            </div>
            <div className="hidden md:flex gap-2 text-muted-foreground mr-4 text-sm mt-auto items-center">
              Geser untuk melihat <span className="text-gold">&rarr;</span>
            </div>
          </div>

          <div className="flex overflow-x-auto gap-5 md:gap-8 pb-10 pt-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pl-4 lg:pl-0 pr-4">
            {churchMonthlyThemes.filter(t => t.monthId <= currentMonth).reverse().map(theme => (
              <div 
                key={theme.monthId} 
                onClick={() => setSelectedTheme(theme)}
                tabIndex={0}
                role="button"
                className="group relative w-[85vw] sm:w-[300px] md:w-[400px] h-[420px] md:h-[500px] rounded-[2rem] overflow-hidden snap-center shrink-0 flex flex-col cursor-pointer hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.3)] transition-all duration-500 border border-border/20 bg-muted text-left"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={theme.picture} 
                    alt={theme.monthName} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" 
                  />
                  {/* Premium Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 z-10" />
                </div>
                
                {/* Top Badge */}
                <div className="absolute top-6 left-6 z-20">
                  <div className="bg-background/20 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-lg">
                    {theme.monthName}
                  </div>
                </div>

                {/* Content at Bottom */}
                <div className="relative z-20 mt-auto p-6 md:p-8 flex flex-col translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-gold font-medium mb-3 text-sm tracking-wide bg-black/40 w-fit px-3 py-1 rounded-md backdrop-blur-sm border border-gold/20 shadow-md">
                    {theme.bibleVerse}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2 leading-tight drop-shadow-md">
                    {theme.themeText}
                  </h3>
                  
                  {/* Fading text description */}
                  <p className="text-white/70 text-sm md:text-base line-clamp-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 h-0 group-hover:h-auto">
                    {theme.description}
                  </p>
                  
                  {/* Interactive Button */}
                  <div className="flex items-center gap-2 text-gold text-sm font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0">
                    Baca Renungan <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-background border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-3">
              Jadwal Ibadah
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Hadir dan bertumbuh bersama dalam persekutuan setiap minggu.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {churchSchedules.map((schedule) => (
              <div
                key={schedule.name}
                className="bg-card border border-border/50 p-6 rounded-2xl text-center hover:border-gold/30 transition-colors"
              >
                <Clock className="w-8 h-8 text-gold mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">{schedule.name}</h3>
                <p className="text-muted-foreground text-sm">{schedule.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-card border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Bell className="w-6 h-6 text-gold" />
            <h2 className="text-2xl md:text-4xl font-display font-bold">
              Pengumuman
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {churchAnnouncements.map((item) => (
              <a
                key={item.title}
                href={item.link}
                className="bg-background border border-border/50 p-6 rounded-2xl hover:border-gold/30 transition-colors"
              >
                <span className="text-sm font-bold text-gold mb-2 block">
                  {item.date}
                </span>
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{item.desc}</p>
                <span className="text-sm font-semibold hover:text-gold transition-colors">
                  Selengkapnya &rarr;
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-background border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Users className="w-6 h-6 text-gold" />
            <h2 className="text-2xl md:text-4xl font-display font-bold">
              Foto Jemaat Mingguan
            </h2>
          </div>
          <p className="text-muted-foreground mt-1 mb-8 text-sm">
            Momen kebersamaan kita setiap minggu
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {churchWeeklyPhotos.map((item) => (
              <div
                key={item.label}
                onClick={() => {
                  if (item.image) {
                    const idx = photosWithImages.findIndex(p => p.image === item.image);
                    setSelectedPhotoIndex(idx);
                  }
                }}
                className={`group relative aspect-square rounded-xl md:rounded-2xl bg-card border border-border/50 overflow-hidden transition-all duration-300 shadow-sm ${
                  item.image ? "cursor-pointer hover:border-gold/50" : "cursor-default"
                }`}
              >
                {item.image ? (
                  <>
                    <img 
                      src={item.image} 
                      alt={item.label}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 md:p-4">
                      <span className="text-white text-[10px] md:text-sm font-bold uppercase tracking-wider">{item.label}</span>
                      <span className="text-gold/80 text-[8px] md:text-[10px] font-medium uppercase tracking-widest mt-0.5">Klik untuk memperbesar</span>
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-2 opacity-40 group-hover:opacity-60 transition-opacity">
                    <Image className="w-8 h-8 text-muted-foreground" />
                    <span className="text-[10px] md:text-xs text-muted-foreground font-medium uppercase tracking-tighter">
                      {item.label}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground/60 mt-4 text-center">
            Foto akan diperbarui setiap Minggu setelah ibadah selesai.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-card border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 md:mb-12">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center">
                  <Youtube className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
                  YouTube
                </span>
              </div>
              <h2 className="text-2xl md:text-4xl font-display font-bold">Terbaru di YouTube</h2>
              <p className="text-muted-foreground mt-2 text-sm md:text-base">Tonton rekaman ibadah dan khotbah terbaru kami.</p>
            </div>
            <a
              href={YOUTUBE_CHANNEL_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-colors text-sm shrink-0"
            >
              <Youtube className="w-4 h-4" /> Subscribe Channel
            </a>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-border/50 shadow-2xl bg-black">
              <iframe
                src="https://www.youtube.com/embed/iWonkzOLS7w"
                title="Church Video"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="mt-6 text-center">
              <h3 className="text-xl font-bold mb-2">Ibadah Hari Minggu - Glory Ministry Church</h3>
              <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
                Mari bersekutu dan dikuatkan oleh Firman Tuhan dalam ibadah online kami. Bagikan pesan ini kepada keluarga dan kerabat Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-background border-b border-border/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-semibold mb-4">
              <Heart className="w-4 h-4" /> Perpuluhan dan Persembahan
            </div>
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-3">
              Persembahan Online
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
              Kemurahan hati Anda memampukan kami untuk terus melayani komunitas,
              mendukung misi, dan menjangkau jiwa-jiwa baru.
            </p>
          </div>

          <div className="space-y-3">
            {churchDonationItems.map((item) => {
              const isOpen = openDonation === item.key;
              return (
                <div key={item.key} className="bg-card border border-border rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenDonation(isOpen ? null : item.key)}
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
                        <HeartHandshake className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <p className="font-bold text-base">{item.title}</p>
                        <p className="text-xs text-muted-foreground">{item.subtitle}</p>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-gold shrink-0 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 md:px-6 pb-6 border-t border-border/50">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-5">
                        <div className="flex flex-col items-center">
                          <p className="text-sm font-semibold text-muted-foreground mb-3">
                            Scan QRIS
                          </p>
                          <div className="w-56 h-56 md:w-64 md:h-64 bg-white rounded-2xl border border-border/50 shadow-sm overflow-hidden flex items-center justify-center relative">
                            <img 
                              src="/images/qris-church.png" 
                              alt="QRIS Glory Ministry Church" 
                              className="w-full h-full object-cover scale-[1.1] origin-center"
                            />
                          </div>
                          {/*<p className="text-xs text-muted-foreground mt-2">
                            Berlaku untuk semua bank & e-wallet
                          </p>*/}
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-muted-foreground mb-3">
                            Transfer Bank
                          </p>
                          <div className="space-y-3">
                            {item.accounts.map((account) => (
                              <div
                                key={`${item.key}-${account.bank}-${account.no}`}
                                className="bg-background border border-border/50 rounded-xl p-3"
                              >
                                <p className="text-xs font-bold text-gold mb-0.5">{account.bank}</p>
                                <p className="font-mono font-bold text-sm">{account.no}</p>
                                <p className="text-xs text-muted-foreground">{account.name}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      {item.key === "perpuluhan" && (
                        <p className="text-xs text-muted-foreground mt-5 text-center italic">
                          Konfirmasi transfer via WhatsApp agar bendahara dapat mencatat dengan tepat.
                        </p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-6 text-center">
            <a
              href={CHURCH_WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-sm transition-colors"
            >
              Konfirmasi via WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section id="laporan-perpuluhan" className="py-12 md:py-20 bg-card border-b border-border/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-3 flex items-center justify-center gap-3">
              <FileSpreadsheet className="text-emerald-500 w-8 h-8" />
              Laporan Persembahan
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
              Transparansi adalah komitmen kami. Berikut adalah laporan penerimaan berdasarkan data yang masuk setiap bulannya.
            </p>
          </div>

          <div className="bg-background rounded-2xl border border-border/50 overflow-hidden shadow-xl max-w-5xl mx-auto">
            {/* Toolbar/Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border-b border-border/50 bg-muted/30">
              <div className="flex gap-2 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {titheData.map(data => (
                  <button 
                    key={data.month}
                    onClick={() => setSelectedTitheMonth(data.month)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                      selectedTitheMonth === data.month 
                        ? "bg-emerald-600 text-white" 
                        : "bg-background border border-border/50 text-muted-foreground hover:bg-card"
                    }`}
                  >
                    Bulan {data.month}
                  </button>
                ))}
              </div>
              <div className="mt-4 sm:mt-0 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                Total: Rp {(titheData.find(d => d.month === selectedTitheMonth)?.total || 0).toLocaleString('id-ID')}
              </div>
            </div>

            {/* Spreadsheet View */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-muted text-muted-foreground uppercase font-medium text-xs">
                  <tr>
                    <th className="px-6 py-4 border-b border-border/10">Tanggal</th>
                    <th className="px-6 py-4 border-b border-border/10">Nama / Keterangan</th>
                    <th className="px-6 py-4 border-b border-border/10">Metode</th>
                    <th className="px-6 py-4 border-b border-border/10 text-right">Nominal (Rp)</th>
                  </tr>
                </thead>
                <tbody>
                  {titheData.find(d => d.month === selectedTitheMonth)?.rows.map((row, idx) => (
                    <tr key={idx} className="border-b border-border/10 hover:bg-muted/30 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap font-mono text-muted-foreground">{row.date}</td>
                      <td className="px-6 py-4 font-medium">{row.name}</td>
                      <td className="px-6 py-4 text-muted-foreground">{row.paymentType}</td>
                      <td className="px-6 py-4 text-right font-mono font-medium text-emerald-600 dark:text-emerald-400">
                        {row.amount.toLocaleString('id-ID')}
                      </td>
                    </tr>
                  ))}
                  {(!churchTitheData.find(d => d.month === selectedTitheMonth)?.rows || churchTitheData.find(d => d.month === selectedTitheMonth)!.rows.length === 0) && (
                    <tr>
                      <td colSpan={4} className="px-6 py-12 text-center text-muted-foreground">Belum ada data untuk bulan ini.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="text-center mt-6">
             <a href="https://docs.google.com/spreadsheets/d/1uBBirkqnagjrPbek7apzioWaeEHyDAFmc8EbQcO1j3E/edit?gid=1988151645#gid=1988151645" target="_blank" rel="noreferrer" className="text-sm text-gold hover:underline font-medium inline-flex items-center gap-1">
               <FileSpreadsheet className="w-4 h-4" /> Buka Laporan Lengkap (Google Sheets)
             </a>
          </div>
        </div>
      </section>

      {/*<section className="py-12 md:py-20 bg-card border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-3">
              Kegiatan Mendatang
            </h2>
          </div>
        </div>
      </section>*/} 

      <section className="py-12 md:py-20 bg-background border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl md:text-4xl font-display font-bold mb-4">
                Hubungi dan Temukan Kami
              </h2>
              <p className="text-muted-foreground mb-6">
                Tim pastoral kami siap melayani Anda. Jangan ragu menghubungi kami kapan saja.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-center lg:justify-start gap-3 text-sm">
                  <Phone className="w-5 h-5 text-gold shrink-0" />
                  <span>{churchContactInfo.phone}</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-3 text-sm">
                  <Mail className="w-5 h-5 text-gold shrink-0" />
                  <span>{churchContactInfo.email}</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-3 text-sm">
                  <MapPin className="w-5 h-5 text-gold shrink-0" />
                  <span>{churchContactInfo.address}</span>
                </div>
              </div>
              <a
                href={CHURCH_WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-sm transition-colors"
              >
                Chat via WhatsApp
              </a>
            </div>

            <div className="space-y-4">
              <div className="h-[300px] md:h-[380px] rounded-2xl overflow-hidden border border-border/50 shadow-xl">
                <iframe
                  src={churchContactInfo.mapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a 
                href={churchContactInfo.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-white hover:bg-muted text-foreground font-semibold rounded-xl border border-border transition-all shadow-sm"
              >
                <MapPin className="w-4 h-4 text-black" />
                Dapatkan Rute di Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/*<section className="py-12 md:py-20 bg-card border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-3">
              Kesaksian Jemaat
            </h2>
          </div>
        </div>
      </section>*/}

      <ArticleCards
        articles={churchArticles}
        basePath="/gereja"
        title="Artikel & Renungan"
      />

      {/* Lightbox Foto Jemaat */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300 overflow-hidden"
          onMouseMove={onDragMove}
          onMouseUp={onDragEnd}
          onTouchMove={onDragMove}
          onTouchEnd={onDragEnd}
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/95 backdrop-blur-md"
            onClick={() => {
              setSelectedPhotoIndex(null);
              setIsZoomed(false);
              setPanOffset({ x: 0, y: 0 });
            }}
          />
          
          {/* Controls Container */}
          <div className="absolute top-4 right-4 md:top-8 md:right-8 flex items-center gap-2 md:gap-4 z-[110]">
            <div className="hidden md:flex items-center gap-2 mr-4 bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">
              <span className="text-white/60 text-xs font-bold uppercase tracking-widest">
                {selectedPhotoIndex! + 1} / {photosWithImages.length}
              </span>
            </div>
            
            <button 
              onClick={() => {
                setIsZoomed(!isZoomed);
                if (!isZoomed) setPanOffset({ x: 0, y: 0 });
              }}
              className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-all border border-white/10 shadow-lg"
              title={isZoomed ? "Zoom Out" : "Zoom In"}
            >
              {isZoomed ? <ZoomOut className="w-6 h-6" /> : <ZoomIn className="w-6 h-6" />}
            </button>
            <button 
              onClick={() => {
                setSelectedPhotoIndex(null);
                setIsZoomed(false);
                setPanOffset({ x: 0, y: 0 });
              }}
              className="p-3 bg-red-500/20 hover:bg-red-500/40 text-white rounded-full backdrop-blur-md transition-all border border-red-500/20 shadow-lg"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Arrows */}
          {!isZoomed && (
            <>
              <button 
                onClick={handlePrevPhoto}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-4 bg-white/5 hover:bg-white/10 text-white rounded-full backdrop-blur-md transition-all border border-white/10 z-[110] group"
              >
                <ChevronDown className="w-8 h-8 rotate-90 group-hover:-translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={handleNextPhoto}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-4 bg-white/5 hover:bg-white/10 text-white rounded-full backdrop-blur-md transition-all border border-white/10 z-[110] group"
              >
                <ChevronDown className="w-8 h-8 -rotate-90 group-hover:translate-x-1 transition-transform" />
              </button>
            </>
          )}

          <div className="absolute top-6 left-1/2 -translate-x-1/2 z-[110] text-center hidden md:block">
            <span className="bg-gold/20 text-gold px-6 py-2 rounded-full text-xs font-bold tracking-[0.3em] uppercase border border-gold/30 backdrop-blur-md shadow-lg">
              {selectedPhoto.label}
            </span>
          </div>

          {/* Image Wrapper */}
          <div 
            className={`relative transition-transform duration-500 ease-out select-none flex items-center justify-center ${
              isZoomed ? "cursor-grab active:cursor-grabbing" : "cursor-zoom-in"
            }`}
            style={{
              transform: isZoomed 
                ? `scale(2.5) translate(${panOffset.x / 2.5}px, ${panOffset.y / 2.5}px)` 
                : 'scale(1)',
              transition: isDragging ? 'none' : 'transform 0.5s cubic-bezier(0.2, 0, 0, 1)'
            }}
            onMouseDown={onDragStart}
            onTouchStart={onDragStart}
            onClick={(e) => {
              if (!isDragging && Math.abs(panOffset.x) < 5 && Math.abs(panOffset.y) < 5) {
                // If not dragging, toggle zoom
                // But wait, if we are zoomed, clicking the image should zoom out
                if (isZoomed) setIsZoomed(false);
              }
            }}
          >
            <img 
              src={selectedPhoto.image} 
              alt={selectedPhoto.label} 
              className="max-w-[90vw] max-h-[80vh] md:max-h-[85vh] object-contain rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              draggable={false}
            />
          </div>
          
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-[110]">
            <p className="text-white/50 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase bg-black/40 px-4 py-2 rounded-full backdrop-blur-md border border-white/5 shadow-xl">
              {isZoomed 
                ? "Gunakan mouse/sentuh untuk menggeser" 
                : "Klik gambar untuk zoom • Gunakan panah untuk navigasi"}
            </p>
          </div>
        </div>
      )}

      {/* Modal Tema Bulanan */}
      {selectedTheme && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"
            onClick={() => setSelectedTheme(null)}
          />
          {/* Modal Card */}
          <div className="relative bg-card border border-border/50 rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            {/* Image Header */}
            <div className="relative h-56 md:h-72 w-full">
              <img src={selectedTheme.picture} alt={selectedTheme.themeText} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-background/40 to-black/20" />
              
              {/* Close Button */}
              <button 
                onClick={() => setSelectedTheme(null)}
                className="absolute top-4 right-4 p-2 bg-black/30 hover:bg-black/60 text-white rounded-full backdrop-blur-md transition-colors border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="p-6 md:p-8 -mt-10 relative z-10">
              <div className="flex flex-wrap items-center gap-2 mb-5">
                <span className="bg-gold/20 text-gold px-3 mb-1 py-1 text-xs font-bold rounded-full uppercase tracking-widest border border-gold/30 shadow-sm">
                  {selectedTheme.monthName}
                </span>
                <span className="text-xs md:text-sm font-semibold text-muted-foreground bg-muted border border-border/50 px-3 py-1 mb-1 rounded-full shadow-sm">
                  {selectedTheme.bibleVerse}
                </span>
              </div>
              
              <h3 className="text-2xl md:text-4xl font-display font-bold mb-4 leading-tight">
                {selectedTheme.themeText}
              </h3>
              
              <div className="prose prose-sm md:prose-base dark:prose-invert text-muted-foreground pb-4">
                <p className="leading-relaxed text-foreground/90">
                  {selectedTheme.description}
                </p>
                <div className="h-px w-full bg-border/50 my-6"></div>
                <h4 className="text-foreground font-bold mb-2">Aplikasi Praktis:</h4>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Membaca rutinitas Alkitab setiap hari dengan fokus pada <strong>{selectedTheme.bibleVerse}</strong>.</li>
                  <li>Membagikan renungan ini kepada 2-3 orang terdekat di waktu luang minggu ini.</li>
                  <li>Menjelmakan tema "{selectedTheme.themeText}" ke dalam langkah-langkah konkrit di dunia pekerjaan/pelayanan Anda.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
