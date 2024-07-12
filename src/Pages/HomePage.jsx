import ClientTestimonials from "../Components/Layout/ClientTestimonials";
import InfoLinks from "../Components/Layout/InfoLinks";
import DjfyWorks from "../Components/Layout/DjfyWorks";
import FAQSection from "../Components/Layout/FAQSection";
import GallerySection from "../Components/Layout/GallerySection";
import HeroSection from "../Components/Layout/HeroSection";
import UltimateDJTool from "../Components/Layout/UltimateDJTool";
import UsageVideo from "../Components/Layout/UsageVideo";
import UseCases from "../Components/Layout/UseCases";
import WebApps from "../Components/Layout/WebApps";
import ContactUsSection from "../Components/Layout/ContactUsSection";
import FooterSection from "../Components/Layout/FooterSection";

const HomePage = () => {
  return (
    <>
      <InfoLinks />
      <HeroSection />
      <DjfyWorks />
      <UseCases />
      <UltimateDJTool />
      <WebApps />
      <UsageVideo />
      <GallerySection />
      <ClientTestimonials />
      <FAQSection />
      <ContactUsSection />
      <FooterSection />
    </>
  );
};

export default HomePage;
