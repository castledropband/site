import Link from "next/link";
import { FaBandcamp, FaInstagram, FaSoundcloud } from "react-icons/fa6";

import { URLS } from "@/app/consts";

const socialLinks = [
  { href: URLS.instagram, Icon: FaInstagram },
  { href: URLS.bandcamp, Icon: FaBandcamp },
  { href: URLS.soundcloud, Icon: FaSoundcloud },
] as const;

export const SocialLinks = () => (
  <div className="mb-10 flex justify-center gap-5">
    {socialLinks.map(({ href, Icon }) => (
      <Link
        key={href}
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        className="transition hover:opacity-70 focus:opacity-70"
      >
        <Icon className="h-6 w-6 text-primary" />
      </Link>
    ))}
  </div>
);
