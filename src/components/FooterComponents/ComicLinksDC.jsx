export default function ComicLinks({ links }) {
  return (
    <>
      <h4>DC COMICS</h4>
      <ul className="comics footerUl">
        {links.map((link, index) => (
          <li key={index}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
