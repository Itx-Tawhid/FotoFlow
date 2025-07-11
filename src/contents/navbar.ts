export interface NavbarProps {
  title: string;
  link: string;
  icon: string;
}

export const NavbarItem: NavbarProps[] = [
  {
    title: "Photos",
    link: "/photos",
    icon: "line-md:image-filled",
  },
  {
    title: "Videos",
    link: "/videos",
    icon: "line-md:play-filled",
  },
  {
    title: "Explore",
    link: "/explore",
    icon: "line-md:compass-loop",
  },
];
