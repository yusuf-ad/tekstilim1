import BestSellers from "./components/BestSellers";
import CustomerTestimonials from "./components/CustomerTestimonials";
import DealsOfMonth from "./components/DealsOfMonth";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HomeCategories from "./components/HomeCategories";
import InstagramStories from "./components/InstagramStories";
import SiteBenefits from "./components/SiteBenefits";

function App() {
  return (
    <div className="flex min-h-screen flex-col font-jost selection:bg-tertiary-100 selection:text-dark-500">
      <Header />

      <main className="flex-1">
        <Hero />

        <HomeCategories />

        <BestSellers />

        <DealsOfMonth />

        <CustomerTestimonials />

        <InstagramStories />

        <SiteBenefits />
      </main>

      <Footer />
    </div>
  );
}

export default App;
