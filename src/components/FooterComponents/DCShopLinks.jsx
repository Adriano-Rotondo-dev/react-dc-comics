export default function DCShopLinks({ links }) {
  return (
    <>
      <h4>SHOP</h4>
      <ul className="shop footerUl">
        {links.map((link, index) => (
          <li key={index}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
