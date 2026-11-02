"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "@/components/Logo";

const links = [
  { href: "/", label: "Home", match: (path: string) => path === "/" },
  { href: "/#courts", label: "Our Judicial Officers" },
  { href: "/#bearers", label: "Office Bearers" },
  {
    href: "/about",
    label: "About Us",
    match: (path: string) => path === "/about",
  },
  {
    href: "/contact",
    label: "Contact Us",
    match: (path: string) => path === "/contact",
  },
];

export default function Header() {
  const pathname = usePathname();
  const [solid, setSolid] = useState(pathname !== "/");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
    if (pathname !== "/") {
      setSolid(true);
      return;
    }

    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return (
    <header
      id="top"
      className={[solid ? "solid" : "", menuOpen ? "menu" : ""]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="wrap nav">
        <Link
          className="brand inline-flex items-center gap-3 text-white"
          href="/"
          aria-label="The Bar Association Kattappana"
        >
          <Logo />
          <span className="leading-tight text-white">
            The Bar Association
            <br />
            Kattappana
          </span>
        </Link>
        <button
          className="menu-btn"
          aria-expanded={menuOpen}
          aria-controls="nav"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
        >
          Menu
        </button>
        <nav id="nav" aria-label="Main" className={menuOpen ? "open" : undefined}>
          <ul>
            {links.map((link) => {
              const current = link.match?.(pathname);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={current ? "page" : undefined}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
