import ClientTestimonials from "../Components/Layout/ClientTestimonials";
import Contacts from "../Components/Layout/Contacts";
import DjfyWorks from "../Components/Layout/DjfyWorks";
import FAQSection from "../Components/Layout/FAQSection";
import GallerySection from "../Components/Layout/GallerySection";
import HeroSection from "../Components/Layout/HeroSection";
import UltimateDJTool from "../Components/Layout/UltimateDJTool";
import UsageVideo from "../Components/Layout/UsageVideo";
import UseCases from "../Components/Layout/UseCases";
import WebApps from "../Components/Layout/WebApps";
import SiteMapSection from "../Components/Layout/SiteMapSection";
import FooterSection from "../Components/Layout/FooterSection";

const HomePage = () => {
  return (
    <>
      <Contacts />
      <HeroSection />
      <DjfyWorks />
      <UseCases />
      <UltimateDJTool />
      <WebApps />
      <UsageVideo />
      <GallerySection />
      <ClientTestimonials />
      <FAQSection />
      <SiteMapSection />
      <FooterSection />
    </>
  );
};

export default HomePage;
