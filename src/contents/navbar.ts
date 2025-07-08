import VideoIcon from "@/icons/video.svg";

export interface NavbarProps {
  title: string;
  link: string;
  icon: string;
}

export const NavbarItem: NavbarProps[] = [
  {
    title: "Home",
    link: "/",
    icon: "streamline-freehand:home-chimney-2",
  },
  {
    title: "Photos",
    link: "/photos",
    icon: "streamline-freehand:crop-image",
  },
  {
    title: "videos",
    link: "/about",
    icon: "streamline-freehand:video-edit-play",
  },
];
