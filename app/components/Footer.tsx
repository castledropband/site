import { FaRegCopyright } from "react-icons/fa6";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex items-center justify-center gap-2 p-4 text-primary">
      <FaRegCopyright className="h-4 w-4" />
      <p className="font-unifraktur text-lg">{currentYear} Castle Drop</p>
    </footer>
  );
};
