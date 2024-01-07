
import Head from "next/head";
import data from "../public/data";
import TestimonialSection from "@/components/Testimonal";
import AboutCource from "@/components/AboutCource";
import AboutInstructor from "@/components/AboutInstructor";
import HeroSection from "@/components/HeroSection";
const CoursePage = () => {
  const {title} = data;
  
  return (
    <div className="min-h-screen">
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Course selling website for key life lessons from the Gita."
        />
       
      </Head>

     <HeroSection />

      <div className="max-w-screen-lg mx-auto">
       <AboutCource />
       <AboutInstructor />

        
      </div>
        <TestimonialSection />
    </div>
  );
};

export default CoursePage;
