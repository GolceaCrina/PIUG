import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Video from "@/components/Video";
import TopCategoriesTable from "@/components/Table/Table";
import HelpButton from "@/components/Common/Help";

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <TopCategoriesTable />
      <AboutSectionOne />
      <AboutSectionTwo />
      {/* <Blog />
      <Contact /> */}
    </>
  );
}
