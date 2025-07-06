// It exports an array of image objects, each with a source URL and an optional alt text
export interface ImageProps {
  src: string;
  alt?: string;
  tagline: string;
  author: string;
  authorLink: string;
}
export const ImageItem: ImageProps[] = [
  {
    src: "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg",
    alt: "Hot Air Balloon",
    tagline: "Rise above the ordinary and float into creativity.",
    author: "Francesco Ungaro",
    authorLink: "https://www.pexels.com/@francesco-ungaro/",
  },
  {
    src: "https://images.pexels.com/photos/556669/pexels-photo-556669.jpeg",
    alt: "Silhouette of Person Standing on Field",
    tagline: "Stand tall, embrace the horizon of endless ideas.",
    author: "luizclas",
    authorLink: "https://www.pexels.com/@luizclas-170497/",
  },
  {
    src: "https://images.pexels.com/photos/1743165/pexels-photo-1743165.jpeg",
    alt: "Cropland during Night Time",
    tagline: "Where dreams grow under the quiet starlit sky.",
    author: "Aron Visuals",
    authorLink: "https://www.pexels.com/@aronvisuals/",
  },
  {
    src: "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg",
    alt: "Landscape Photography of Snowy Mountain",
    tagline: "Climb higher, capture the untouched silence.",
    author: "eberhard grossgasteiger",
    authorLink: "https://www.pexels.com/@eberhardgross/",
  },
  {
    src: "https://images.pexels.com/photos/1173777/pexels-photo-1173777.jpeg",
    alt: "Aerial View of Road in the Middle of Trees",
    tagline: "Find your path in the forest of imagination.",
    author: "Deva Darshan",
    authorLink: "https://www.pexels.com/@darshan394/",
  },
];
