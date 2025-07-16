export default function Navbar({ links }) {
  return (
    <nav className="navbar">
      {links.map((link, index) => (
        <a className="hover" href="#" key={index}>
          {link}
        </a>
      ))}
    </nav>
  );
}
