import React from "react";
import { Link } from "react-router-dom";
import { Home, icons, Info } from "lucide-react";
const navItems = [
  {
    name: "Home",
    slug: "/",
    icons: <Home />,
  },
  {
    name: "About",
    slug: "/about",
    icons: <Info />,
  },
];

const Nav = () => {
  return (
    <>
      <nav>
        <header>Campus Placement Tracker</header>

        <div>
          <ul>
            {navItems.map((f) => (
              <Link key={f.name} to={f.slug}>
                {f.name}
              </Link>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
