const navList = [
  { title: "Home", link: "#" },
  { title: "Shop", link: "#" },
  { title: "Our Story", link: "#" },
  { title: "Blog", link: "#" },
  { title: "Contact Us", link: "#" },
];

function Header() {
  return (
    <header className="container max-w-screen-2xl mx-auto flex items-center justify-between px-8 py-6">
      {/* logo */}
      <div>
        <h1 className="text-4xl font-semibold">tekstilim</h1>
      </div>
      {/* navbar */}
      <nav>
        <ul className="flex items-center gap-4">
          {navList.map((item) => (
            <li className="text-dark-90  font-semibold">
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
      </nav>
      {/* button */}

      <div className="flex gap-12 items-center">
        <div className="flex gap-8">
          <button className="text-2xl text-neutral-500">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <button className="text-2xl text-neutral-500">
            <i className="fa-regular fa-heart"></i>
          </button>
          <button className="text-2xl text-neutral-500">
            <i className="fa-solid fa-bag-shopping"></i>
          </button>
        </div>

        <button className="px-8 py-3 bg-black text-white rounded-lg ">
          Login
        </button>
      </div>
    </header>
  );
}

export default Header;
