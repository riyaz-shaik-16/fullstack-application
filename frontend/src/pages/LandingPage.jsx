import {
  Navbar,
  HeroSection,
  OurProjects,
  HappyClients,
  Footer,
} from "../components/landingPage";
import { useRef } from "react";

export const LandingPage = () => {
  const inputRef = useRef(null);

  const handleContactClick = () => {
    const heroSection = document.getElementById("hero");

    heroSection?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      inputRef.current?.focus();
    }, 400);
  };

  return (
    <>
      <Navbar onClick={handleContactClick} />
      <HeroSection formRef={inputRef} />
      <OurProjects />
      <HappyClients />
      <Footer />
    </>
  );
};

export default LandingPage;
