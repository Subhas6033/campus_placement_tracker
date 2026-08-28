import { Link } from "react-router-dom";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const quickLinks = [
  {
    name: "dashboard",
    slug: "/dashboard",
    category: "platform",
  },
  {
    name: "job opportunities",
    slug: "/opportunities",
    category: "platform",
  },
  {
    name: "applications",
    slug: "/applications",
    category: "platform",
  },
  {
    name: "interviews",
    slug: "/interviews",
    category: "platform",
  },
  {
    name: "companies",
    slug: "/companies",
    category: "resources",
  },
  {
    name: "students",
    slug: "/students",
    category: "resources",
  },
  {
    name: "placement drives",
    slug: "/drives",
    category: "resources",
  },
  {
    name: "reports & analysis",
    slug: "/reports",
    category: "resources",
  },
  {
    name: "help center",
    slug: "/help",
    category: "support",
  },
  {
    name: "contact us",
    slug: "/contact",
    category: "support",
  },
  {
    name: "privacy policy",
    slug: "/privacy",
    category: "support",
  },
  {
    name: "terms & conditions",
    slug: "/terms",
    category: "support",
  },
];

const footerSections = [
  {
    title: "Platform",
    category: "platform",
  },
  {
    title: "Resources",
    category: "resources",
  },
  {
    title: "Support",
    category: "support",
  },
];

/*
 * Group links once instead of filtering quickLinks
 * separately for every section.
 */
const groupedLinks = quickLinks.reduce((groups, link) => {
  if (!groups[link.category]) {
    groups[link.category] = [];
  }

  groups[link.category].push(link);

  return groups;
}, {});

/*
 * Social links
 */
const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/subhas6033",
    icon: FaLinkedinIn,
    external: true,
  },
  {
    name: "GitHub",
    href: "https://github.com/Subhas6033",
    icon: FaGithub,
    external: true,
  },
  {
    name: "Email",
    href: "mailto:sm2733@it.jgec.ac.in",
    icon: CiMail,
    external: false,
  },
];

const Footer = () => {
  const appName = import.meta.env.VITE_APP_NAME || "Applications Site";

  const appInitials = appName
    .trim()
    .split(/\s+/)
    .map((word) => word.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const formatLinkName = (name) => {
    return name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              {/* Logo */}
              <div
                className="
                  flex h-10 w-10 shrink-0
                  items-center justify-center
                  rounded-lg
                  bg-indigo-600
                  text-sm font-bold
                  text-white
                "
              >
                {appInitials}
              </div>

              {/* App name */}
              <span className="text-xl font-bold text-white">
                {appName.split(" ")[0]}

                {appName.split(" ").length > 1 && (
                  <span className="text-indigo-400">
                    {" "}
                    {appName.split(" ").slice(1).join(" ")}
                  </span>
                )}
              </span>
            </div>

            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
              A centralized platform to manage campus placements, applications,
              interviews, and student recruitment.
            </p>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.category}>
              <h3
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-wider
                  text-white
                "
              >
                {section.title}
              </h3>

              <ul className="mt-4 space-y-3">
                {groupedLinks[section.category]?.map((item) => (
                  <li key={item.slug}>
                    <Link
                      to={item.slug}
                      className="
                        block
                        text-sm
                        text-slate-400
                        transition-all
                        duration-200
                        hover:translate-x-1
                        hover:text-indigo-400
                      "
                    >
                      {formatLinkName(item.name)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Sections */}
        <div className="mt-12 border-t border-slate-800 pt-8">
          <div
            className="
              flex
              flex-col
              items-center
              justify-between
              gap-5
              text-sm
              md:flex-row
            "
          >
            {/* Copyright */}
            <p className="text-center text-slate-500 md:text-left">
              &copy; {new Date().getFullYear()} {appName}. All rights reserved.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.external ? "_blank" : undefined}
                    rel={social.external ? "noopener noreferrer" : undefined}
                    aria-label={social.name}
                    title={social.name}
                    className="
                      group
                      flex h-10 w-10
                      items-center justify-center
                      rounded-lg
                      border border-slate-800
                      text-slate-400
                      transition-all
                      duration-200
                      hover:border-slate-700
                      hover:bg-slate-800
                      hover:text-indigo-400
                      focus:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-indigo-500
                      focus-visible:ring-offset-2
                      focus-visible:ring-offset-slate-900
                      active:scale-95
                    "
                  >
                    <Icon
                      className="
                        h-5 w-5
                        transition-transform
                        duration-200
                        group-hover:scale-110
                      "
                      aria-hidden="true"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
