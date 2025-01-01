import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Acasă",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Despre Noi",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Produse",
    path: "/blog",
    newTab: false,
  },
  {
    id: 3,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
  // {
  //   id: 4,
  //   title: "Pagini",
  //   newTab: false,
  //   submenu: [
  //     {
  //       id: 41,
  //       title: "Pagina Despre",
  //       path: "/about",
  //       newTab: false,
  //     },
  //     {
  //       id: 42,
  //       title: "Pagina Contact",
  //       path: "/contact",
  //       newTab: false,
  //     },
  //     {
  //       id: 43,
  //       title: "Pagina Blog Grid",
  //       path: "/blog",
  //       newTab: false,
  //     },
  //     {
  //       id: 44,
  //       title: "Pagina Blog Sidebar",
  //       path: "/blog-sidebar",
  //       newTab: false,
  //     },
  //     {
  //       id: 45,
  //       title: "Detalii Blog",
  //       path: "/blog-details",
  //       newTab: false,
  //     },
  //     {
  //       id: 46,
  //       title: "Pagina Autentificare",
  //       path: "/signin",
  //       newTab: false,
  //     },
  //     {
  //       id: 47,
  //       title: "Pagina Înregistrare",
  //       path: "/signup",
  //       newTab: false,
  //     },
  //     {
  //       id: 48,
  //       title: "Pagina Eroare",
  //       path: "/error",
  //       newTab: false,
  //     },
  //   ],
  // },
];
export default menuData;
