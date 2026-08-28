import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Home, Info, Phone, Menu, X } from "lucide-react";

const navItems = [
  {
    name: "Home",
    slug: "/",
    icon: Home,
  },
  {
    name: "About",
    slug: "/about",
    icon: Info,
  },
  {
    name: "Contact",
    slug: "/contact",
    icon: Phone,
  },
];

const Nav = () => {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  const toggleMenuIcon = () => {
    setIsMobileMenuActive((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuActive(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo / Brand */}
        <Link
          to="/"
          onClick={closeMobileMenu}
          className="flex items-center gap-2 text-xl font-bold text-black"
        >
          <div className="rounded-lg p-2">
            <img
              src="/placementTrackerLogo.png"
              alt="Campus Placement Tracker logo"
              className="h-8 w-8"
            />
          </div>

          <span className="hidden sm:inline">
            {import.meta.env.VITE_APP_NAME}
          </span>

          {/* <span className="sm:hidden">Placement Tracker</span> */}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <li key={item.name}>
                  <NavLink
                    to={item.slug}
                    className={({ isActive }) =>
                      `flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                          : "text-gray-600 hover:bg-indigo-50 hover:text-indigo-600"
                      }`
                    }
                  >
                    <Icon size={18} />
                    <span>{item.name}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Mobile Menu */}
        <div
          onClick={toggleMenuIcon}
          className="rounded-lg p-2 text-gray-600 transition hover:bg-indigo-50 hover:text-indigo-600 md:hidden hover:cursor-pointer"
          aria-label={
            isMobileMenuActive
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={isMobileMenuActive}
        >
          {isMobileMenuActive ? <X size={26} /> : <Menu size={26} />}
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuActive && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <ul className="mx-auto max-w-7xl space-y-1 px-4 py-3 sm:px-6">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <li key={item.name}>
                  <NavLink
                    to={item.slug}
                    onClick={closeMobileMenu}
                    className={({ isActive }) =>
                      `flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                          : "text-gray-600 hover:bg-indigo-50 hover:text-indigo-600"
                      }`
                    }
                  >
                    <Icon size={20} />
                    <span>{item.name}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
