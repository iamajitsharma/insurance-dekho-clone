import HomeBanner from "./components/HomeBaner";
import FeaturedProducts from "./components/FeaturedProducts";
import Testimonials, {
  TestimonialCard,
} from "@/components/common/Testimonials";
import HowInsuranceWork from "./components/HowInsuranceWork";
import OurPartners from "@/components/common/OurPartners";
import LoginModal from "@/components/common/LoginModal";

const Home = () => {
  return (
    <div className="w-full h-full">
      <HomeBanner />
      <FeaturedProducts />
      <Testimonials />
      <TestimonialCard />
      <HowInsuranceWork />
      <OurPartners />
    </div>
  );
};

export default Home;
