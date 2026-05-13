export type Product = {
  slug: string;
  name: string;
  lot: string;
  priceCents: number;
  currency: "usd" | "eur";
  material: string;
  origin: string;
  sizes: string[];
  images: string[];
  note?: string;
};

export const products: Product[] = [
  {
    slug: "lot-01-raw-selvedge",
    name: "raw selvedge five-pocket",
    lot: "lot 01",
    priceCents: 32000,
    currency: "usd",
    material: "14oz japanese selvedge denim",
    origin: "cut & sewn — casablanca",
    sizes: ["28", "30", "32", "34", "36"],
    images: ["/assets/logo-pair.png", "/assets/logo-tag.png"],
    note: "unwashed. will fade to the wearer.",
  },
  {
    slug: "lot-02-work-jacket",
    name: "work jacket",
    lot: "lot 02",
    priceCents: 42000,
    currency: "usd",
    material: "13.5oz indigo denim, copper rivets",
    origin: "cut & sewn — casablanca",
    sizes: ["s", "m", "l", "xl"],
    images: ["/assets/denim-raw.png", "/assets/logo-tag.png"],
  },
  {
    slug: "lot-03-overshirt",
    name: "indigo overshirt",
    lot: "lot 03",
    priceCents: 28000,
    currency: "usd",
    material: "10oz brushed denim",
    origin: "cut & sewn — casablanca",
    sizes: ["s", "m", "l", "xl"],
    images: ["/assets/logo-design.png", "/assets/logo-tag.png"],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function formatPrice(cents: number, currency: "usd" | "eur" = "usd"): string {
  const value = cents / 100;
  if (currency === "eur") return `€${value.toFixed(0)}`;
  return `$${value.toFixed(0)}`;
}
