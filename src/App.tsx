import BestSellers from "./components/BestSellers";
import DealsOfMonth from "./components/DealsOfMonth";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HomeCategories from "./components/HomeCategories";

function App() {
  return (
    <div className="flex min-h-screen flex-col font-jost selection:bg-tertiary-100 selection:text-dark-500">
      <Header />

      <main className="flex-1">
        <Hero />

        <HomeCategories />

        <BestSellers />

        <DealsOfMonth />
      </main>

      <Footer />
    </div>
  );
}

export default App;
