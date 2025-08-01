export default function ShopLinks({ links }) {
  return (
    <div className="visualLinks">
      {links.map((link, index) => (
        <a className="iconLink" href="#" key={index}>
          <img src={link.img} alt={link.alt} />
          {link.text}
        </a>
      ))}
    </div>
  );
}

/* PREVIOUS VERSION */
// export default function ShopLinks() {
//   return (
//     <div className="visualLinks">
//       <a className="iconLink" href="#">
//         <img src="/img/buy-comics-digital-comics.png" alt="digital_comics" />
//         DIGITAL COMICS
//       </a>
//       <a className="iconLink" href="#">
//         <img src="/img/buy-comics-merchandise.png" alt="merch" /> DC MERCHANDISE
//       </a>
//       <a className="iconLink" href="#">
//         <img src="/img/buy-comics-subscriptions.png" alt="subscriptions" />
//         SUBSCRIPTION
//       </a>
//       <a className="iconLink" href="#">
//         <img src="/img/buy-comics-shop-locator.png" alt="locator" /> COMIC SHOP
//         LOCATOR
//       </a>
//       <a className="iconLink" href="#">
//         <img src="/img/buy-dc-power-visa.svg" alt="visa" />
//         DC POWER VISA
//       </a>
//     </div>
//   );
// }
