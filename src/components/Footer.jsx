import ComicLinks from "./FooterComponents/ComicLinksDC";
import DCShopLinks from "./FooterComponents/DCShopLinks";
import DCLegal from "./FooterComponents/DCLegal";
import DCSubs from "./FooterComponents/DCSubscriptions";
import Socials from "./FooterComponents/Socials";
import SignUpBtn from "./BtnsComponents/SignUpBtn";

export default function Footer({
  dcComicsLink,
  dcLegal,
  dcShop,
  dcSubscriptions,
  socials,
}) {
  return (
    <footer>
      <div className="linkTabs">
        <div className="container">
          <div className="column">
            <h4>DC COMICS</h4>
            <ul className="comics footerUl">
              <ComicLinks links={dcComicsLink} />
            </ul>
            <h4>SHOP</h4>
            <ul className="shop footerUl">
              <DCShopLinks links={dcShop} />
            </ul>
          </div>
          <div className="column">
            <h4>DC</h4>
            <ul className="DC footerUl">
              <DCLegal links={dcLegal} />
            </ul>
          </div>
          <div className="column">
            <h4>SITES</h4>
            <ul className="subscriptions footerUl">
              <DCSubs links={dcSubscriptions} />
            </ul>
          </div>
        </div>
        <img className="bgLogo" src="/img/dc-logo-bg.png" alt="dc-logo-bg" />
      </div>
      <div className="footerVisualLinks">
        <SignUpBtn />
        <div className="socials">
          <h3 className="follow">FOLLOW US</h3>
          <Socials socials={socials} />
        </div>
      </div>
    </footer>
  );
}
