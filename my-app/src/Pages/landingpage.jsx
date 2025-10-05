// import Routers from "./Ruters";
import BookSection from "../Sections/BookingSection";
import ContactForm from "../Sections/ContactSection";
import EquipmentSection from "../Sections/EquipmentSection";
import VideoBackground from "../Sections/herosection";
import PricingSection from "../Sections/membershipsection";
import Navbar from "../Sections/Navbar";
import ProgramsSection from "../Sections/ProgramSection";
import ReviewSection from "../Sections/reviewssection";
import Stat from "../Sections/Statsection";
// import PasswordInput from "./test";

function LandingPage() {
  return (
    <>
      <Navbar />
      <VideoBackground />
      <Stat />
      <ProgramsSection />
      <EquipmentSection />
      <ReviewSection />
      <PricingSection />
      <BookSection />
      <ContactForm />
    </>
  );
}

export default LandingPage;
