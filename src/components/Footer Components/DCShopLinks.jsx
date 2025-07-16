const dcShopLinks = ["Shop DC", "Shop DC Collectibles"];

export default function DCShopLinks() {
  return (
    <>
      {dcShopLinks.map((link, index) => (
        <li key={index}>
          <a href="#">{link}</a>
        </li>
      ))}
    </>
  );
}
