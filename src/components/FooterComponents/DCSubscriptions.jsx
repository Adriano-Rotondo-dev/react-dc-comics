export default function DCSubs({ links }) {
  return (
    <>
      <h4>SITES</h4>
      <ul className="subscriptions footerUl">
        {links.map((link, index) => (
          <li key={index}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
