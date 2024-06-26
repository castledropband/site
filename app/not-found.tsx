import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const NotFound = () => (
  <div className="mt-24 flex flex-col items-center gap-6 font-inter font-medium">
    <p className="text-lg text-primary">Looks like you took a wrong turn...</p>
    <Link
      href="/"
      replace
      className="flex items-center gap-3 rounded bg-primary px-5 py-2 text-sm text-neutral-800 outline-none transition hover:opacity-70 focus:opacity-70"
    >
      <FaArrowRight className="h-4 w-4" />
      Go back
    </Link>
  </div>
);

export default NotFound;
