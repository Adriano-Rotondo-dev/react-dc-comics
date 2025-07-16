import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import Main from "./components/Main";
import ShopLinks from "./components/ShopLinks";
import Footer from "./components/Footer";

//* arrays
import navbarLinks from "./data/navbarLinks";
import comics from "./data/comics";
import blueShopLinks from "./data/blueLineLinks";
import dcComicsLink from "./data/dcComicsLinks";
import dcLegal from "./data/dcLegal";
import dcShop from "./data/dcShop";
import dcSubscriptions from "./data/dcSubscriptions";
import socials from "./data/socials";

function App() {
  return (
    <>
      <Header navbarLinks={navbarLinks} />
      <Jumbotron />
      <Main comics={comics} />
      <ShopLinks links={blueShopLinks} />
      <Footer
        dcComicsLink={dcComicsLink}
        dcLegal={dcLegal}
        dcShop={dcShop}
        dcSubscriptions={dcSubscriptions}
        socials={socials}
      />
    </>
  );
}

export default App;
