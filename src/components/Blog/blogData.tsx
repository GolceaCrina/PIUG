import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Laptop Dell Inspiron 15",
    paragraph:
      "Performanță ridicată pentru orice activitate. Ideal pentru lucru sau gaming. Vine cu procesor Intel i7 și 16GB RAM.",
    image: "/images/products/product-dell.jpg",
    author: {
      name: "Furnizor: TechPro",
      image: "/images/products/image.png",
      designation: "Echipamente IT",
    },
    tags: ["laptop", "dell", "electronice"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Canon EOS 250D",
    paragraph:
      "Cameră DSLR compactă și ușor de utilizat. Perfectă pentru capturarea momentelor speciale cu o calitate excelentă.",
    image: "/images/products/canon-eos.jpg",
    author: {
      name: "Furnizor: FotoPro",
      image: 
      "/images/products/image.png",
      designation: "Echipamente Foto",
    },
    tags: ["cameră", "dslr", "canon"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Bicicletă MTB Cross X3",
    paragraph:
      "Bicicletă montană robustă, ideală pentru trasee dificile. Cadru ușor din aluminiu și frâne pe disc hidraulice.",
    image: "/images/products/mtb-cross.jpg",
    author: {
      name: "Furnizor: OutdoorHub",
      image: "/images/products/image.png",
      designation: "Echipamente Sportive",
    },
    tags: ["bicicletă", "mtb", "outdoor"],
    publishDate: "2025",
  },
  {
    id: 4,
    title: "Samsung Galaxy S22 Ultra",
    paragraph:
      "Smartphone de ultimă generație cu un ecran Dynamic AMOLED 2X și o cameră impresionantă de 108MP.",
    image: "/images/products/samsung.png",
    author: {
      name: "Furnizor: PhoneWorld",
      image: "/images/products/image.png",
      designation: "Electronice",
    },
    tags: ["smartphone", "samsung", "tehnologie"],
    publishDate: "2025",
  },
  {
    id: 5,
    title: "Rolex Submariner",
    paragraph:
      "Ceas de lux, rezistent la apă până la 300m. O combinație perfectă între eleganță și performanță.",
    image: "/images/products/rolex.jpg",
    author: {
      name: "Furnizor: LuxuryTime",
      image: "/images/products/image.png",
      designation: "Ceasuri",
    },
    tags: ["ceas", "lux", "rolex"],
    publishDate: "2025",
  },
  {
    id: 6,
    title: "Trotinetă Electrică Xiaomi Pro",
    paragraph:
      "Mobilitate urbană simplificată. Baterie cu autonomie de 45 km și viteză maximă de 25 km/h.",
    image: "/images/products/xiomi.png",
    author: {
      name: "Furnizor: EcoRide",
      image: "/images/products/image.png",
      designation: "Transport",
    },
    tags: ["trotinetă", "electric", "mobilitate"],
    publishDate: "2025",
  },
  {
    id: 7,
    title: "Apple MacBook Pro 16-inch",
    paragraph:
      "Laptop premium pentru profesioniști, cu ecran Retina și procesor M2 Max, ideal pentru editare video și design grafic.",
    image: "/images/products/mac.png",
    author: {
      name: "Furnizor: AppleStore",
      image: "/images/products/image.png",
      designation: "Laptopuri",
    },
    tags: ["laptop", "apple", "macbook"],
    publishDate: "2025",
  },
  {
    id: 8,
    title: "Frigider LG InstaView",
    paragraph:
      "Frigider modern cu tehnologie InstaView, care permite vizualizarea conținutului fără a deschide ușa.",
    image: "/images/products/lg.png",
    author: {
      name: "Furnizor: HomeAppliances",
      image: "/images/products/image.png",
      designation: "Electrocasnice",
    },
    tags: ["frigider", "lg", "electrocasnice"],
    publishDate: "2025",
  },
  {
    id: 9,
    title: "Căști Sony WH-1000XM5",
    paragraph:
      "Căști wireless cu noise-cancelling avansat și sunet de înaltă calitate, perfecte pentru muzică și apeluri.",
    image: "/images/products/sony.png",
    author: {
      name: "Furnizor: AudioWorld",
      image: "/images/products/image.png",
      designation: "Accesorii audio",
    },
    tags: ["căști", "sony", "audio"],
    publishDate: "2025",
  },
];
export default blogData;
