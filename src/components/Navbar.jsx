const navbarLinks = [
  "CHARACTERS",
  "COMICS",
  "MOVIES",
  "TV",
  "GAMES",
  "COLLECTIBLES",
  "VIDEOS",
  "FANS",
  "NEWS",
  "SHOP",
];

export default function Navbar() {
  return (
    <nav className="navbar">
      {navbarLinks.map((link, index) => (
        <a className="hover" href="#" key={index}>
          {link}
        </a>
      ))}
    </nav>
  );
}
