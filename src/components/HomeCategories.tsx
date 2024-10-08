const categoriesList = [
  { title: "Günlük Giyim", image: "./man.png" },
  { title: "Batı Tarzı Giyim", image: "./man.png" },
  { title: "Etnik Giyim", image: "./man.png" },
  { title: "Çocuk Giyimi", image: "./man.png" },
];

function CategoryCard({ title, image }: { title: string; image: string }) {
  return (
    <div className="relative col-span-1 mb-8 aspect-[9/12] overflow-hidden bg-gray-200">
      <div className="absolute bottom-0 left-0 z-30 w-full px-4 pb-4">
        <div className="rounded-lg bg-white-500 p-4 text-center font-bold text-dark-90">
          {title}
        </div>
      </div>

      {/* category name */}
      <div className="absolute right-0 top-4 z-10">
        <p className="text-7xl font-bold text-primary-20/50">
          {title.split(" ")[0]}
        </p>
      </div>

      {/* image */}
      <div className="absolute -right-12 bottom-0 z-20 h-full w-full">
        <div className="h-full w-full">
          <img
            className="relative aspect-square h-full w-full object-cover"
            src={image}
            alt="man"
          />
        </div>
      </div>
    </div>
  );
}

function HomeCategories() {
  return (
    <div className="custom-container px-8 py-12">
      <div className="mb-12 flex items-center justify-between">
        <h2 className="text-lg font-medium sm:text-3xl">Popüler Kategoriler</h2>

        <div className="flex gap-4">
          <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-10 text-primary-90 sm:h-12 sm:w-12">
            <i className="fa-solid fa-arrow-left"></i>
          </button>

          <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-800 text-white-5 sm:h-12 sm:w-12">
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
        {categoriesList.map((category) => (
          <CategoryCard
            key={category.title}
            title={category.title}
            image={category.image}
          />
        ))}
      </div>
    </div>
  );
}

export default HomeCategories;
