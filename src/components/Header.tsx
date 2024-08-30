import Button from "./Button";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="container mx-auto flex max-w-screen-2xl items-center justify-between px-8 py-6">
      <div>
        <a href="#">
          <h1 className="text-4xl font-semibold">tekstilim</h1>
        </a>
      </div>

      <Navbar />

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
