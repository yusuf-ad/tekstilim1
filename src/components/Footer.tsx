import Contact from "./Contact";
import FooterMenu from "./FooterMenu";
import SubscriptionField from "./SubscriptionField";

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

function Footer() {
  return (
    <footer className=" bg-primary-800 text-primary-100 font-semibold text-lg">
      <div className="container max-w-screen-2xl mx-auto flex justify-between px-8 py-12">
        <div className="basis-80">
          <h1 className="text-4xl font-semibold text-white-500 mb-8">
            tekstilim
          </h1>

          <Contact />
        </div>

        <FooterMenu title="Information" list={informationList} />

        <FooterMenu title="Service" list={serviceList} />

        <div className="basis-96">
          <SubscriptionField />
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto">
        <div className="py-6 px-8 border-t border-primary-80">
          <p className="text-primary-100 text-sm">
            © 2024 Tekstilim. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
