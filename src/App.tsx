import BestSellers from "./components/BestSellers";
import Footer from "./components/Footer";
// import Header from "./components/Header";
import HomeCategories from "./components/HomeCategories";

function App() {
  return (
    <div className="flex min-h-screen flex-col selection:bg-tertiary-100 selection:text-dark-500">
      {/* <Header /> */}

      <main className="flex-1 bg-gray-5">
        <HomeCategories />

        <BestSellers />
      </main>

      <Footer />
    </div>
  );
}

export default App;
