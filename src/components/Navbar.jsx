const Navbar = () => {
  return (
    <nav className="fixed left-1/2 top-5 z-50 w-[92%] max-w-5xl -translate-x-1/2">
      <div className="flex items-center justify-between rounded-full border border-white/10 bg-black/40 px-5 py-3 shadow-2xl backdrop-blur-xl">

        {/* Logo */}
        <a
          href="#home"
          className="text-lg font-black tracking-tight"
        >
          S<span className="text-purple-400">.</span>
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-7 text-sm text-gray-400 md:flex">

          <a
            href="#home"
            className="transition hover:text-white"
          >
            Home
          </a>

          <a
            href="#about"
            className="transition hover:text-white"
          >
            About
          </a>

          <a
            href="#skills"
            className="transition hover:text-white"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="transition hover:text-white"
          >
            Work
          </a>

          {/* ACHIEVEMENTS BEFORE CONTACT */}
          <a
            href="#achievements"
            className="transition hover:text-white"
          >
            Achievements
          </a>

          <a
            href="#contact"
            className="transition hover:text-white"
          >
            Contact
          </a>

        </div>

        {/* Contact button */}
        <a
          href="#contact"
          className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition hover:scale-105"
        >
          Let's Talk
        </a>

      </div>
    </nav>
  );
};

export default Navbar;