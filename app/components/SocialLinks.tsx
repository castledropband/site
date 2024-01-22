import Image from "next/image";
import Link from "next/link";

import { URLS } from "@/app/consts";
import instagramIcon from "@/public/instagram.svg";
import bandcampIcon from "@/public/bandcamp.svg";
import soundcloudIcon from "@/public/soundcloud.svg";

export const SocialLinks = () => {
  const socialLinks = [
    { href: URLS.instagram, image: instagramIcon, alt: "instagram" },
    { href: URLS.bandcamp, image: bandcampIcon, alt: "bandcamp" },
    { href: URLS.soundcloud, image: soundcloudIcon, alt: "soundcloud" },
  ] as const;

  return (
    <div className="mb-10 flex justify-center gap-5">
      {socialLinks.map(({ href, image, alt }) => (
        <Link
          key={alt}
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          className="transition hover:opacity-70 focus:opacity-70"
        >
          <Image src={image} alt={alt} className="h-6 w-6" />
        </Link>
      ))}
    </div>
  );
};
