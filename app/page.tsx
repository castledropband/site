import { SocialLinks, SoundCloudEmbed } from "@/app/components";

const Home = () => (
  <div className="flex flex-col gap-10">
    <h1 className="mt-16 text-center font-unifraktur text-[8rem] leading-none text-primary md:mt-24 md:text-[12rem]">
      Castle Drop
    </h1>
    <SocialLinks />
    <SoundCloudEmbed />
  </div>
);

export default Home;
