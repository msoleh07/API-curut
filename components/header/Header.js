import Link from "next/link";
import "./Header.css";
function Header() {
  return (
    <header>
      <div className="header_logo">
        <Link href="/">Home</Link>
      </div>
      <div className="header_links">
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className="header_register">
        <Link href="/lognIn">Logn In</Link>
        <Link href="/lognIn">Logn Up</Link>
      </div>
    </header>
  );
}

export default Header;
