export const NAV_ITEMS = [
  { 
    title: "Home", 
    type: "text", 
    children: []
  },
  { 
    title: "About", 
    type: "text", 
    children: [] 
  },
  { 
    title: "Blogs", 
    type: "dropdown", 
    children: [
      { title: 'Web Development', href: '/web-development' }, 
      { title: 'App Development', href: '/app-development' }
    ]
  },
  { 
    title: "Team Members", 
    type: "text", 
    children: [] 
  },
];


export const ACCOUNT_ITEMS = [
  {
    title: "Profile",
    slug: "/profile"
  },
  {
    title: 'About',
    slug: "/about"
  }
]
