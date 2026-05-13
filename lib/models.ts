export type ModelSlot = {
  id: string;
  href: string;
  image: string; // /assets/models/01.jpg etc — drop real files in /public/assets/models/
  alt: string;
};

// Five hero slots — replace `image` paths as model photos arrive.
// Until then, brand placeholders fill the slots so the layout reads correctly.
export const homeModels: ModelSlot[] = [
  { id: "01", href: "/objects", image: "/assets/models/01.jpg", alt: "look 01" },
  { id: "02", href: "/objects", image: "/assets/models/02.jpg", alt: "look 02" },
  { id: "03", href: "/objects", image: "/assets/models/03.jpg", alt: "look 03" },
  { id: "04", href: "/objects", image: "/assets/models/04.jpg", alt: "look 04" },
  { id: "05", href: "/objects", image: "/assets/models/05.jpg", alt: "look 05" },
];
