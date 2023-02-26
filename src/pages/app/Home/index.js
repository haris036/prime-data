import {
  ContactSection,
  EPrimeDataSection,
  GrowthSection,
  HeroSection,
  LearnMoreSection,
  PlanSection,
  SolutionsSection,
  TestimonialsSection,
  TrustedSection,
} from "./components";
import "./styles.scss";

const Home = () => {
  return (
    <>
      <HeroSection />
      <LearnMoreSection />
      <SolutionsSection />
      <PlanSection />
      <GrowthSection />
      <TestimonialsSection />
      <EPrimeDataSection />
      <TrustedSection />
      <ContactSection />
    </>
  );
};

export default Home;
