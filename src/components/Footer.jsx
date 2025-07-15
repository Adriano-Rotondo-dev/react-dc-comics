import ComicLinks from "./ComicLinksDC";

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
              <li>
                <a href="#">Shop DC</a>
              </li>
              <li>
                <a href="#">Shop DC Collectibles</a>
              </li>
            </ul>
          </div>
          <div className="column">
            <h4>DC</h4>
            <ul className="DC footerUl">
              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li>
                <a href="#">Privacy Policy (New)</a>
              </li>
              <li>
                <a href="#">Ad Choices</a>
              </li>
              <li>
                <a href="#">Advertising</a>
              </li>
              <li>
                <a href="#">Jobs</a>
              </li>
              <li>
                <a href="#">Subscriptions</a>
              </li>
              <li>
                <a href="#">Talent Workshops</a>
              </li>
              <li>
                <a href="#">CPSC Certificates</a>
              </li>
              <li>
                <a href="#">Ratings</a>
              </li>
              <li>
                <a href="#">Shop Help</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="column">
            <h4>SITES</h4>
            <ul className="sites footerUl">
              <li>
                <a href="#">DC</a>
              </li>
              <li>
                <a href="#">MAD Magazine</a>
              </li>
              <li>
                <a href="#">DC Kids</a>
              </li>
              <li>
                <a href="#">DC Universe</a>
              </li>
              <li>
                <a href="#">DC Power Visa</a>
              </li>
            </ul>
          </div>
        </div>
        <img className="bgLogo" src="/img/dc-logo-bg.png" alt="dc-logo-bg" />
      </div>
      <div className="footerVisualLinks">
        <button className="signUp btn">SIGN UP NOW!</button>
        <div className="socials">
          <h3 className="follow">FOLLOW US</h3>
          <a href="#" className="socialIcon">
            <img
              className="socialIcon"
              src="/img/footer-facebook.png"
              alt="facebook"
            />
          </a>
          <a href="#" className="socialIcon">
            <img
              className="socialIcon"
              src="/img/footer-twitter.png"
              alt="twitter"
            />
          </a>
          <a href="#" className="socialIcon">
            <img
              className="socialIcon"
              src="/img/footer-youtube.png"
              alt="youtube"
            />
          </a>
          <a href="#" className="socialIcon">
            <img
              className="socialIcon"
              src="/img/footer-pinterest.png"
              alt="pinterest"
            />
          </a>
          <a href="#" className="socialIcon">
            <img
              className="socialIcon"
              src="/img/footer-periscope.png"
              alt="periscope"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
