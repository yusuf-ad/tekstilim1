import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-tertiary-100 selection:text-dark-500">
      <Header />

      <main className="flex-1 bg-orange-500"></main>

      <Footer />
    </div>
  );
}

export default App;
