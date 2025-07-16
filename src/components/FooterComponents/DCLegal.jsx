export default function DCLegal({ links }) {
  return (
    <>
      <h4>DC</h4>
      <ul className="DC footerUl">
        {links.map((link, index) => (
          <li key={index}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
