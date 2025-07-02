// It exports an array of image objects, each with a source URL and an optional alt text
export interface ImageProps {
  src: string;
  alt?: string;
}
export const ImageItem: ImageProps[] = [
  {
    src: "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg",
    alt: "Hot Air Balloon",
  },
  {
    src: "https://images.pexels.com/photos/556669/pexels-photo-556669.jpeg",
    alt: "Silhouette of Person Standing on Field",
  },
  {
    src: "https://images.pexels.com/photos/1743165/pexels-photo-1743165.jpeg",
    alt: "Cropland duiring Night Time",
  },
  {
    src: "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg",
    alt: "Landscape Photography of Snowy Mountain",
  },
  {
    src: "https://images.pexels.com/photos/1173777/pexels-photo-1173777.jpeg",
    alt: "Aerial View of Road in the Middle of Trees",
  },
];
