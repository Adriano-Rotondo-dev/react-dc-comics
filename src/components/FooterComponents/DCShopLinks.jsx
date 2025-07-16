export default function DCShopLinks({ links }) {
  return (
    <>
      {links.map((link, index) => (
        <li key={index}>
          <a href="#">{link}</a>
        </li>
      ))}
    </>
  );
}
