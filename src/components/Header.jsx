import Logo from "./HeaderComponents/Logo";
import Navbar from "./HeaderComponents/Navbar";

export default function Header({ navbarLinks }) {
  return (
    <header>
      <Logo />
      <Navbar links={navbarLinks} />
    </header>
  );
}
