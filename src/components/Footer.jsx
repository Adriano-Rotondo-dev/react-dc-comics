export default function Footer() {
  return (
    <footer>
      <div className="linkTabs">
        <div className="container">
          <div className="column">
            <h4>DC COMICS</h4>
            <ul className="comics footerUl">
              <li>Characters</li>
              <li>Comics</li>
              <li>Movies</li>
              <li>Tv</li>
              <li>Games</li>
              <li>Videos</li>
              <li>New</li>
            </ul>
            <h4>SHOP</h4>
            <ul className="shop footerUl">
              <li>Shop DC</li>
              <li>Shop DC Collectibles</li>
            </ul>
          </div>
          <div className="column">
            <h4>DC</h4>
            <ul className="DC footerUl">
              <li>Terms of Use</li>
              <li>Privacy Policy (New) </li>
              <li>Ad Choices</li>
              <li>Advertising</li>
              <li>Jobs</li>
              <li>Subscriptions</li>
              <li>Talent Workshops</li>
              <li>CPSC Certificates</li>
              <li>Ratings</li>
              <li>Shop Help</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="column">
            <h4>SITES</h4>
            <ul className="sites footerUl">
              <li>DC</li>
              <li>MAD Magazine</li>
              <li>DC Kids</li>
              <li>DC Universe</li>
              <li>DC Power Visa</li>
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
