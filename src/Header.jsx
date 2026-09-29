import { useState } from "react";
import {
  Crown,
  Phone,
  Menu,
  X
} from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container nav">

        <a className="brand" href="#home">
          <span className="brand-mark">
            <Crown size={18} />
          </span>

          <span>
            <b>آرتمیس</b>
            <small>BEAUTY SALON</small>
          </span>
        </a>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#home" onClick={() => setMenuOpen(false)}>
            خانه
          </a>

          <a href="#services" onClick={() => setMenuOpen(false)}>
            خدمات
          </a>

          <a href="#about" onClick={() => setMenuOpen(false)}>
            درباره ما
          </a>

          <a href="#booking" onClick={() => setMenuOpen(false)}>
            رزرو نوبت
          </a>
        </nav>

        <div className="nav-actions">
          <a
            className="phone-btn"
            href="tel:09120000000"
          >
            <Phone size={17} />
            تماس
          </a>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

      </div>
    </header>
  );
}