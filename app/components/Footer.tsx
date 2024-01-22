import Image from "next/image";

import copyrightIcon from "@/public/copyright.svg";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex items-center justify-center gap-2 p-4">
      <Image src={copyrightIcon} alt="copyright" className="h-4 w-4" />
      <p className="font-unifraktur text-lg text-primary">
        {currentYear} Castle Drop
      </p>
    </footer>
  );
};
