import CTASection from "@/components/sections/cta";
import GamesSection from "@/components/sections/games";
import HeroSection from "@/components/sections/hero";
import SponsorsSection from "@/components/sections/sponsors";
import StreamersSection from "@/components/sections/streamers";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <GamesSection />
      <StreamersSection />
      <SponsorsSection />
      <CTASection />
    </div>
  );
}
