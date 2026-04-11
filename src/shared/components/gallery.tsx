"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Maximize2, Download } from "lucide-react";

interface GalleryImage {
  url: string;
  title?: string;
}

interface GalleryProps {
  images: (string | GalleryImage)[];
  title?: string;
  subtitle?: string;
}

export function Gallery({ images, title, subtitle }: GalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [scale, setScale] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false);

  const normalizedImages: GalleryImage[] = images.map((img) =>
    typeof img === "string" ? { url: img } : img
  );

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    setScale(1);
    setIsZoomed(false);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    setScale(1);
    setIsZoomed(false);
    document.body.style.overflow = "unset";
  };

  const nextImage = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % normalizedImages.length);
      setScale(1);
      setIsZoomed(false);
    }
  }, [selectedIndex, normalizedImages.length]);

  const prevImage = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        (selectedIndex - 1 + normalizedImages.length) % normalizedImages.length
      );
      setScale(1);
      setIsZoomed(false);
    }
  }, [selectedIndex, normalizedImages.length]);

  const toggleZoom = () => {
    if (isZoomed) {
      setScale(1);
      setIsZoomed(false);
    } else {
      setScale(2);
      setIsZoomed(true);
    }
  };

  const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.5, 4));
  const handleZoomOut = () => setScale((prev) => Math.max(prev - 0.5, 1));

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, nextImage, prevImage]);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
            {title || "Galeri Kantor"}
          </h2>
          {subtitle && (
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {normalizedImages.map((image, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group shadow-lg"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image.url}
                alt={image.title || `Gallery image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center p-4">
                  <Maximize2 className="w-10 h-10 mx-auto mb-2" />
                  {image.title && <p className="font-semibold">{image.title}</p>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <div
              className="relative w-full h-full flex items-center justify-center p-4 md:p-12"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Toolbar */}
              <div className="absolute top-6 right-6 flex items-center gap-4 z-[110]">
                <div className="flex items-center bg-white/10 backdrop-blur-md rounded-full px-2 py-1">
                  <button
                    onClick={handleZoomOut}
                    className="p-2 text-white/70 hover:text-white transition-colors"
                    title="Zoom Out"
                  >
                    <ZoomOut className="w-5 h-5" />
                  </button>
                  <span className="text-white/50 px-2 text-sm font-mono w-12 text-center">
                    {Math.round(scale * 100)}%
                  </span>
                  <button
                    onClick={handleZoomIn}
                    className="p-2 text-white/70 hover:text-white transition-colors"
                    title="Zoom In"
                  >
                    <ZoomIn className="w-5 h-5" />
                  </button>
                </div>

                <a
                  href={normalizedImages[selectedIndex].url}
                  download={`gallery-image-${selectedIndex + 1}.jpg`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full transition-all"
                  title="Download Image"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Download className="w-6 h-6" />
                </a>

                <button
                  onClick={closeLightbox}
                  className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full transition-all"
                  title="Close"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation */}
              <button
                onClick={prevImage}
                className="absolute left-6 top-1/2 -translate-y-1/2 p-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full transition-all z-[110]"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-6 top-1/2 -translate-y-1/2 p-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full transition-all z-[110]"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              {/* Image Container */}
              <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
                <motion.div
                  key={selectedIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: scale }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  drag={scale > 1}
                  dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                  dragElastic={0.5}
                  className="relative max-w-full max-h-full aspect-auto"
                  style={{ cursor: scale > 1 ? "grab" : "zoom-in" }}
                  onClick={toggleZoom}
                >
                  <div className="relative w-[90vw] h-[80vh]">
                    <Image
                      src={normalizedImages[selectedIndex].url}
                      alt={normalizedImages[selectedIndex].title || "Gallery image"}
                      fill
                      className="object-contain pointer-events-none"
                      priority
                    />
                  </div>
                </motion.div>
              </div>

              {/* Counter & Title */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center z-[110]">
                {normalizedImages[selectedIndex].title && (
                  <h3 className="text-white text-xl font-semibold mb-2">
                    {normalizedImages[selectedIndex].title}
                  </h3>
                )}
                <p className="text-white/50 text-sm tracking-widest font-mono">
                  {selectedIndex + 1} / {normalizedImages.length}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
