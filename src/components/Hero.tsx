import Button from "./Button";

function Hero() {
  return (
    <div className="relative flex min-h-[60vh] items-center bg-[url('/hero-img.webp')] bg-cover bg-center">
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
            Yatak odası ürünlerimizde harika indirimler keşfedin. Yatak odanızı
            lüks bir kaçış noktasına dönüştürmek için premium koleksiyonumuzu
            inceleyin.
          </p>

          <Button className="flex items-center gap-4 bg-white-500 font-medium">
            <p className="text-dark-500">Şimdi Alışveriş Yap</p>
            <i className="fa-solid fa-arrow-right mt-1 text-dark-500"></i>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
