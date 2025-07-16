import comics from "./data/comics";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import Main from "./components/Main";
import ShopLinks from "./components/ShopLinks";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Jumbotron />
      <Main comics={comics} />
      <ShopLinks />
      <Footer />
    </>
  );
}

export default App;
