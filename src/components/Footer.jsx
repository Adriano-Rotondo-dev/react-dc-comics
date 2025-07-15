import ComicLinks from "./ComicLinksDC";
import DCShopLinks from "./DCShopLinks";
import DCLegal from "./DCLegal";
import DCSubs from "./DCSubscriptions";
import Socials from "./Socials";

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
        <button className="signUp btn">SIGN UP NOW!</button>
        <div className="socials">
          <h3 className="follow">FOLLOW US</h3>
          <Socials />
        </div>
      </div>
    </footer>
  );
}
