import Header from "./components/Header";

const informationList = [
  { title: "My Account", link: "#" },
  { title: "Login", link: "#" },
  { title: "My Cart", link: "#" },
  { title: "My Wishlist", link: "#" },
  { title: "Checkout", link: "#" },
];

const serviceList = [
  { title: "About Us", link: "#" },
  { title: "Careers", link: "#" },
  { title: "Delivery Information", link: "#" },
  { title: "Privacy Policy", link: "#" },
  { title: "Terms & Conditions", link: "#" },
];
function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-blue-500"></main>

      <footer className=" bg-[#131118] text-[#8a898c] font-semibold text-lg">
        <div className="container max-w-screen-2xl mx-auto flex justify-between px-8 py-12">
          <div className=" max-w-80">
            <h1 className="text-4xl font-semibold text-white mb-8">
              tekstilim
            </h1>

            <ul className="gap-4 flex flex-col">
              <li className="flex items-center">
                <span className="text-2xl text-neutral-500 mr-4">
                  <i className="fa-solid fa-phone-volume"></i>
                </span>
                <span>(704) 555-0127</span>
              </li>
              <li className="flex items-center">
                <span className="text-2xl text-neutral-500 mr-4">
                  <i className="fa-regular fa-envelope"></i>
                </span>
                <span>krist@example.com</span>
              </li>
              <li className="flex items-center">
                <span className="text-2xl text-neutral-500 mr-4">
                  <i className="fa-solid fa-location-dot"></i>
                </span>
                <span>3891 Ranchview Dr. Richardson, California 62639</span>
              </li>
            </ul>
          </div>
          {/* information list */}
          <div>
            <h3 className="text-white mb-4">Information</h3>
            <ul className="flex gap-4 flex-col">
              {informationList.map((item) => (
                <li>
                  <a href={item.link}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* service list */}
          <div>
            <h3 className="text-white mb-4">Service</h3>
            <ul className="flex gap-4 flex-col">
              {serviceList.map((item) => (
                <li>
                  <a href={item.link}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* subscriction */}
          <div className="max-w-96">
            <h3 className="text-white mb-4">Subscribe </h3>

            <p className="mb-4">
              Enter your email below to be the first to know about new
              collections and product launches.
            </p>

            <div className="flex items-center py-3 px-4 border rounded-lg border-neutral-200">
              <span className="text-2xl text-neutral-500 mr-4">
                <i className="fa-regular fa-envelope"></i>
              </span>
              <p>Your email</p>
            </div>
          </div>
        </div>

        <div className="py-4 px-8 border-t border-neutral-400/35">
          <p className="text-[#8a898c]">
            © 2023 Tekstilim. All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
