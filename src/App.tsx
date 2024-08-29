import BestSellers from "./components/BestSellers";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeCategories from "./components/HomeCategories";

function App() {
  return (
    <div className="flex min-h-screen flex-col selection:bg-tertiary-100 selection:text-dark-500">
      <Header />

      <main className="flex-1">
        {/* hero */}
        <div className="relative flex min-h-[60vh] items-center bg-[url('./hero-img.webp')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black opacity-65"></div>
          <div className="item container relative mx-auto max-w-screen-2xl px-8">
            <div className="max-w-2xl p-8 text-white-500">
              <h3 className="mb-6 text-3xl font-semibold text-white-500">
                Özel İndirim
              </h3>

              <h1 className="mb-5 text-6xl font-bold text-white-500">
                Yatak Odası Ürünleri
              </h1>

              <p className="mb-12 text-2xl font-medium text-white-500">
                %40'A VARAN İNDİRİM
              </p>

              <p className="mb-12 text-xl font-medium leading-8 text-gray-20">
                Yatak odası ürünlerimizde harika indirimler keşfedin. Yatak
                odanızı lüks bir kaçış noktasına dönüştürmek için premium
                koleksiyonumuzu inceleyin.
              </p>

              <button className="rounded-xl bg-white-500 px-8 py-3 font-medium text-dark-500">
                Şimdi Alışveriş Yap
              </button>
            </div>
          </div>
        </div>

        <HomeCategories />

        <BestSellers />
      </main>

      <Footer />
    </div>
  );
}

export default App;

{
  /* <div className="col-span-1">
              <div className="flex flex-col justify-center">
                <h1 className="text-4xl font-semibold text-primary-800">
                  <span className="text-primary-500">tekstilim</span>'e Hoş
                  Geldiniz
                </h1>
                <p className="mt-4 text-lg text-primary-300">
                  Tekstil ile ilgili her şey için tek adresiniz
                </p>
              </div>
            </div> */
}
