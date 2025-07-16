import ComicLinks from "./FooterComponents/ComicLinksDC";
import DCShopLinks from "./FooterComponents/DCShopLinks";
import DCLegal from "./FooterComponents/DCLegal";
import DCSubs from "./FooterComponents/DCSubscriptions";
import Socials from "./FooterComponents/Socials";
import SignUpBtn from "./BtnsComponents/SignUpBtn";
import LogoBig from "./FooterComponents/LogoBig";

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
            <ComicLinks links={dcComicsLink} />
            <DCShopLinks links={dcShop} />
          </div>
          <div className="column">
            <DCLegal links={dcLegal} />
          </div>
          <div className="column">
            <DCSubs links={dcSubscriptions} />
          </div>
        </div>
        <LogoBig />
      </div>
      <div className="footerVisualLinks">
        <SignUpBtn />
        <div className="socials">
          <Socials socials={socials} />
        </div>
      </div>
    </footer>
  );
}
