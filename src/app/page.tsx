import Header from "@/components/sections/Header";
import Myself from "@/components/sections/Myself";
import Work from "@/components/sections/Work";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

import DiagonalMarquees from "@/components/ui/MarqueeDemoVertical"

export default function Home() {
  return (
    <>
      <Header />
      <Myself />
      <Work />
    </>
  );
}
