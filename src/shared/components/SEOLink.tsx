/**
 * SEO Link Helpers
 * Best practices for internal linking and external links
 */

interface SEOLinkProps {
  href: string;
  children: React.ReactNode;
  title?: string;
  external?: boolean;
  className?: string;
}

/**
 * SEO-optimized internal link
 */
export function SEOLink({
  href,
  children,
  title,
  className = "",
}: Omit<SEOLinkProps, "external">) {
  const titleAttr = title || (typeof children === "string" ? children : undefined);
  return (
    <a
      href={href}
      title={titleAttr}
      className={className}
    >
      {children}
    </a>
  );
}

/**
 * External link with proper SEO attributes
 * - rel="noopener noreferrer" for security
 * - Opens in new tab
 */
export function ExternalLink({
  href,
  children,
  title,
  className = "",
}: SEOLinkProps) {
  const titleAttr = title || (typeof children === "string" ? children : undefined);
  return (
    <a
      href={href}
      title={titleAttr}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

/**
 * Generate breadcrumb navigation for SEO
 * Helps Google understand page hierarchy
 */
interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumbs(items: BreadcrumbItem[]): string {
  return items
    .map((item) => `<a href="${item.url}">${item.name}</a>`)
    .join(" › ");
}
