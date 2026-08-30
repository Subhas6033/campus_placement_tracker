import { Nav, Footer } from "../Components";

export const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink">
      <a
        href="#main-content"
        className="
          sr-only
          fixed left-4 top-4 z-9999
          rounded-lg
          bg-ink px-4 py-2.5
          text-sm font-semibold text-paper
          shadow-lg
          ring-offset-2 ring-offset-paper
          transition
          focus:not-sr-only
          focus:outline-none
          focus:ring-2
          focus:ring-[#2f6f55]
        "
      >
        Skip to main content
      </a>

      <Nav />

      <main id="main-content" className="flex-1">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
