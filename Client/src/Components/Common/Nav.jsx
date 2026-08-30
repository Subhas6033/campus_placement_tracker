import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import Button from "./Button";

const navItems = [
  { name: "Home", slug: "/" },
  { name: "About", slug: "/about" },
  { name: "Contact", slug: "/contact" },
];

const platformItems = [
  { name: "Dashboard", desc: "Your placement overview", slug: "/dashboard" },
  {
    name: "Applications",
    desc: "Track every opportunity",
    slug: "/applications",
  },
  { name: "Interviews", desc: "Prep & schedule", slug: "/interviews" },
  { name: "Companies", desc: "Browse visiting firms", slug: "/companies" },
];

const Nav = () => {
  const [openMobile, setOpenMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => setOpenMobile(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-9999 w-full border-b transition-all duration-200 ${
        scrolled
          ? "border-ink-line bg-paper-soft/90 shadow-[0_1px_3px_rgba(0,0,0,0.04)] backdrop-blur-xl"
          : "border-transparent bg-paper-soft"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        {/* Brand */}
        <Link
          to="/"
          onClick={closeMobile}
          className="group flex items-center gap-2.5"
          aria-label="Campus Placement Tracker — Home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-ink text-[13px] font-semibold tracking-tight text-paper">
            CP
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-[15px] font-medium tracking-tight text-ink">
              Campus Placement
            </span>
            <span className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-mute">
              Tracker
            </span>
          </span>
        </Link>

        {/* Center nav (desktop) */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.slug}
              to={item.slug}
              end={item.slug === "/"}
              className={({ isActive }) =>
                `rounded-md px-3 py-1.5 text-[13.5px] font-medium transition-colors duration-150 ${
                  isActive ? "text-ink" : "text-ink-mute hover:text-ink"
                }`
              }
            >
              {({ isActive }) => (
                <span className="inline-flex items-center gap-1.5">
                  {item.name}
                  {isActive && (
                    <span className="block h-1 w-1 rounded-full bg-[#2f6f55]" />
                  )}
                </span>
              )}
            </NavLink>
          ))}

          {/* Platform dropdown */}
          <div className="group relative">
            <button
              type="button"
              className="flex items-center gap-1 rounded-md px-3 py-1.5 text-[13.5px] font-medium text-ink-mute transition-colors duration-150 hover:text-ink"
              aria-haspopup="menu"
            >
              Platform
              <ChevronDown
                className="h-3.5 w-3.5 transition-transform duration-150 group-hover:rotate-180"
                strokeWidth={1.8}
              />
            </button>

            <div
              className="invisible absolute left-1/2 top-full z-20 mt-2 w-105 -translate-x-1/2 translate-y-1 rounded-xl border border-ink-line bg-white p-2 opacity-0 shadow-[0_12px_32px_-10px_rgba(14,17,22,0.18)] transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
              role="menu"
            >
              <div className="px-3 pb-2 pt-2">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-mute">
                  Built for students
                </p>
                <p className="mt-1 text-sm text-ink">
                  Everything you need for placement season.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-1 p-1">
                {platformItems.map((item) => (
                  <Link
                    key={item.slug}
                    to={item.slug}
                    className="rounded-lg px-3 py-2.5 transition-colors hover:bg-paper"
                    role="menuitem"
                  >
                    <p className="text-sm font-medium text-ink">{item.name}</p>
                    <p className="mt-0.5 text-xs text-ink-mute">{item.desc}</p>
                  </Link>
                ))}
              </div>
              <div className="mt-1 flex items-center justify-between border-t border-ink-line px-4 py-3">
                <span className="text-xs text-ink-mute">
                  Free for students — no card required.
                </span>
                <Link
                  to="/signin"
                  className="text-xs font-medium text-[#2f6f55] hover:underline"
                >
                  Sign in →
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Right side */}
        <div className="hidden items-center gap-2 md:flex">
          <Link
            to="/signin"
            className="rounded-md px-3 py-1.5 text-[13.5px] font-medium text-ink-mute transition-colors hover:text-ink"
          >
            Sign in
          </Link>
          <Button
            variant="primary"
            size="sm"
            onClick={() => (window.location.href = "/signup")}
            className="bg-ink! text-paper! hover:bg-ink-soft! shadow-none!"
          >
            Get started
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpenMobile((p) => !p)}
          aria-label={openMobile ? "Close menu" : "Open menu"}
          aria-expanded={openMobile}
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-ink-line text-ink md:hidden"
        >
          {openMobile ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      {openMobile && (
        <div className="border-t border-ink-line bg-paper-soft md:hidden">
          <nav className="mx-auto max-w-7xl px-5 py-4">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.slug}>
                  <NavLink
                    to={item.slug}
                    end={item.slug === "/"}
                    onClick={closeMobile}
                    className={({ isActive }) =>
                      `flex items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium ${
                        isActive
                          ? "bg-ink text-paper"
                          : "text-ink hover:bg-paper"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            <p className="mt-5 px-1 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-mute">
              Platform
            </p>
            <ul className="mt-2 grid grid-cols-2 gap-1">
              {platformItems.map((item) => (
                <li key={item.slug}>
                  <Link
                    to={item.slug}
                    onClick={closeMobile}
                    className="block rounded-md px-3 py-2 text-sm text-ink hover:bg-paper"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex items-center gap-2">
              <Button
                variant="secondary"
                size="md"
                onClick={closeMobile}
                className="flex-1 border-ink-line!"
              >
                Sign in
              </Button>
              <Button
                size="md"
                onClick={closeMobile}
                className="flex-1 bg-ink! text-paper! hover:bg-ink-soft!"
              >
                Get started
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Nav;
