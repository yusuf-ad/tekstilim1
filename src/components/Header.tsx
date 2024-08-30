import Button from "./Button";
import MegaMenu from "./MegaMenu";

interface Navbarprops {
  id: number;
  title: string;
  link: string;
  icon?: string;
  submenu?: true;
}

const Navbardata: Navbarprops[] = [
  { id: 1, title: "Ana Sayfa", link: "#" },
  {
    id: 2,
    title: "Mağaza",
    icon: "fa-solid fa-chevron-down",
    link: "#",
    submenu: true,
  },
  { id: 3, title: "Hikaye", link: "#" },
  { id: 4, title: "Blog", link: "#" },
  { id: 5, title: "Bize Ulaşın", link: "#" },
];

function Header() {
  return (
    <header className="container mx-auto flex max-w-screen-2xl items-center justify-between px-8 py-6">
      {/* logo */}
      <div>
        <h1 className="text-4xl font-semibold">tekstilim</h1>
      </div>
      {/* navbar */}
      <nav>
        <ul className="hidden items-center gap-4 lg:flex">
          {Navbardata.map((data) => (
            <li className="group relative p-2 py-4" key={data.id}>
              <a
                className="flex items-center text-lg font-semibold text-primary-400 hover:text-primary-900"
                href={data.link}
                // onClick={
                //   data.title.includes("Mağaza")
                //     ? handleMegaMenuToggle
                //     : undefined
                // }
              >
                {data.title}
                {data.icon && (
                  <i className={`fa ml-[6px] text-sm ${data.icon}`}></i>
                )}
              </a>
              {data.submenu && <MegaMenu />}
            </li>
          ))}
        </ul>
      </nav>
      {/* button */}

      <div className="flex items-center gap-8">
        <div className="hidden gap-8 lg:flex">
          <button className="text-2xl text-primary-400 hover:text-primary-900">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <button className="text-2xl text-primary-400 hover:text-primary-900">
            <i className="fa-regular fa-heart"></i>
          </button>
          <button className="text-2xl text-primary-400 hover:text-primary-900">
            <i className="fa-solid fa-bag-shopping"></i>
          </button>
        </div>

        <Button>Login</Button>
      </div>
    </header>
  );
}

export default Header;
