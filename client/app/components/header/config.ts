export const NAV_ITEMS = [
  {
    title: "Home",
    type: "text",
    children: [],
    href: "/",
  },
  {
    title: "About",
    type: "text",
    children: [],
    href: "/about",
  },
  {
    title: "Blogs",
    type: "dropdown",
    children: [
      { title: "Web Development", href: "/blogs/web-development" },
      { title: "App Development", href: "/blogs/app-development" },
    ],
    href: "/blogs",
  },
  {
    title: "Write with us",
    type: "text",
    children: [],
    href: "/write-with-us",
  },
];

export const ACCOUNT_ITEMS = [
  {
    title: "Profile",
    href: "#",
  },
  {
    title: "About",
    href: "/about",
  },
];