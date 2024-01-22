import { SOUNDCLOUD } from "@/app/consts";

export const SoundCloudEmbed = () => {
  const url = new URL(SOUNDCLOUD.url);
  url.search = new URLSearchParams(SOUNDCLOUD.options).toString();

  return (
    <div className="mb-16 flex justify-center">
      <iframe src={url.href} className="h-[23rem] w-full max-w-lg rounded" />
    </div>
  );
};
