import { Link } from "react-router-dom";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const quickLinks = [
  { name: "Dashboard", slug: "/dashboard", category: "platform" },
  { name: "Job opportunities", slug: "/opportunities", category: "platform" },
  { name: "Applications", slug: "/applications", category: "platform" },
  { name: "Interviews", slug: "/interviews", category: "platform" },
  { name: "Companies", slug: "/companies", category: "resources" },
  { name: "Students", slug: "/students", category: "resources" },
  { name: "Placement drives", slug: "/drives", category: "resources" },
  { name: "Reports & analysis", slug: "/reports", category: "resources" },
  { name: "Help center", slug: "/help", category: "support" },
  { name: "Contact us", slug: "/contact", category: "support" },
  { name: "Privacy policy", slug: "/privacy", category: "support" },
  { name: "Terms & conditions", slug: "/terms", category: "support" },
];

const footerSections = [
  { title: "Platform", category: "platform" },
  { title: "Resources", category: "resources" },
  { title: "Support", category: "support" },
];

const groupedLinks = quickLinks.reduce((groups, link) => {
  if (!groups[link.category]) groups[link.category] = [];
  groups[link.category].push(link);
  return groups;
}, {});

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

  const formatLinkName = (name) =>
    name
      .split(" ")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
      .join(" ");

  return (
    <footer className="border-t border-ink-line bg-ink text-[#cfd1d6]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Top — manifesto */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-ink-soft text-sm font-semibold text-paper">
                CP
              </span>
              <div className="flex flex-col leading-none">
                <span className="font-display text-[16px] font-medium tracking-tight text-paper">
                  {appName}
                </span>
                <span className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-[#8a8d96]">
                  Built by students, for students
                </span>
              </div>
            </div>

            <p className="mt-6 max-w-md text-[14px] leading-6 text-[#a8abb3]">
              A single workspace to track companies, applications, interviews,
              and offers across your placement season.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-7 flex max-w-md items-center gap-2"
            >
              <input
                type="email"
                placeholder="you@college.edu"
                aria-label="Email for placement alerts"
                className="h-11 flex-1 rounded-md border border-ink-soft bg-ink-soft px-3.5 text-[14px] text-paper placeholder:text-[#6f737b] focus:border-[#2f6f55] focus:outline-none focus:ring-2 focus:ring-[#2f6f55]/20"
              />
              <button
                type="submit"
                className="h-11 shrink-0 rounded-md bg-paper px-4 text-[13.5px] font-medium text-ink transition-colors hover:bg-white"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-2 text-xs text-[#6f737b]">
              Weekly placement digest. No spam — unsubscribe anytime.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7">
            {footerSections.map((section) => (
              <div key={section.category}>
                <h3 className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8a8d96]">
                  {section.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {groupedLinks[section.category]?.map((item) => (
                    <li key={item.slug}>
                      <Link
                        to={item.slug}
                        className="
                          inline-flex items-center text-[13.5px] text-[#cfd1d6]
                          transition-colors duration-150 hover:text-paper
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
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-start justify-between gap-5 border-t border-ink-soft pt-8 text-[12.5px] text-[#8a8d96] sm:flex-row sm:items-center">
          <p>
            &copy; {new Date().getFullYear()} {appName}. All rights reserved.
          </p>

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
                  className="
                    inline-flex h-9 w-9 items-center justify-center
                    rounded-md border border-ink-soft
                    text-[#8a8d96]
                    transition-all duration-150
                    hover:border-[#2a313d] hover:bg-ink-soft hover:text-paper
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2f6f55]
                  "
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
