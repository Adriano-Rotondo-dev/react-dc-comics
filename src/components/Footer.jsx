import ComicLinks from "./Footer Components/ComicLinksDC";
import DCShopLinks from "./Footer Components/DCShopLinks";
import DCLegal from "./Footer Components/DCLegal";
import DCSubs from "./Footer Components/DCSubscriptions";
import Socials from "./Footer Components/Socials";
import SignUpBtn from "./Btns Components/SignUpBtn";

export default function Footer() {
  return (
    <footer>
      <div className="linkTabs">
        <div className="container">
          <div className="column">
            <h4>DC COMICS</h4>
            <ul className="comics footerUl">
              <ComicLinks />
            </ul>
            <h4>SHOP</h4>
            <ul className="shop footerUl">
              <DCShopLinks />
            </ul>
          </div>
          <div className="column">
            <h4>DC</h4>
            <ul className="DC footerUl">
              <DCLegal />
            </ul>
          </div>
          <div className="column">
            <h4>SITES</h4>
            <ul className="subscriptions footerUl">
              <DCSubs />
            </ul>
          </div>
        </div>
        <img className="bgLogo" src="/img/dc-logo-bg.png" alt="dc-logo-bg" />
      </div>
      <div className="footerVisualLinks">
        <SignUpBtn />
        <div className="socials">
          <h3 className="follow">FOLLOW US</h3>
          <Socials />
        </div>
      </div>
    </footer>
  );
}
