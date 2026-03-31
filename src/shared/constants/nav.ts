export const navItems = [
  { name: "Hub", path: "/" },
  { name: "Law Firm", path: "/law-firm" },
  { name: "Consulting", path: "/consulting" },
  { name: "Kost", path: "/kost" },
  { name: "Warteg", path: "/warteg" },
  { name: "Gereja", path: "/gereja" },
];

export const footerNavItems = navItems.filter((item) => item.path !== "/");
