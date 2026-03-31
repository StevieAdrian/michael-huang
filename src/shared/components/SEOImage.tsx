/**
 * Image Optimization Helper
 * Best practices for SEO-friendly images
 */

import Image from "next/image";
import { ReactNode } from "react";

interface SEOImageProps {
  src: string;
  alt: string;
  title?: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
}

/**
 * SEO-optimized image component
 * Includes proper alt text, lazy loading, format optimization
 */
export function SEOImage({
  src,
  alt,
  title,
  width,
  height,
  priority = false,
  className,
}: SEOImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      title={title || alt}
      width={width}
      height={height}
      priority={priority}
      className={className}
      quality={85} // Balance between quality and file size
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
      loading={priority ? "eager" : "lazy"}
    />
  );
}

/**
 * Responsive image container for proper aspect ratio
 */
interface ResponsiveImageContainerProps {
  children: ReactNode;
  aspectRatio?: "16/9" | "4/3" | "1/1";
  className?: string;
}

export function ResponsiveImageContainer({
  children,
  aspectRatio = "16/9",
  className = "",
}: ResponsiveImageContainerProps) {
  const paddingBottom = {
    "16/9": "56.25%",
    "4/3": "75%",
    "1/1": "100%",
  }[aspectRatio];

  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{ paddingBottom }}
    >
      <div className="absolute inset-0">{children}</div>
    </div>
  );
}
