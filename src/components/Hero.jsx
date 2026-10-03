import useMousePosition from "../hooks/useMousePosition";

const Hero = () => {
  const { x, y } = useMousePosition();

  const moveX = (x - window.innerWidth / 2) / 35;
  const moveY = (y - window.innerHeight / 2) / 35;

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
    >
      {/* Cursor reactive glow */}
      <div
        className="pointer-events-none fixed z-0 h-80 w-80 rounded-full bg-purple-500/20 blur-[120px]"
        style={{
          left: x - 160,
          top: y - 160,
        }}
      />

      {/* Background gradients */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-fuchsia-600/20 blur-[140px]" />

        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-indigo-600/20 blur-[140px]" />

        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div>

          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 backdrop-blur-xl">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
            Available for opportunities
          </div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-purple-400">
            Computer Science Engineer
          </p>

          <h1 className="text-6xl font-black leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">

            Hi, I'm

            <span className="mt-3 block bg-gradient-to-r from-purple-300 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              Sruthi.
            </span>

          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
            I build modern digital experiences with
            <span className="text-white"> code, AI and creativity.</span>
            <br />
            Turning ideas into meaningful products one project at a time.
          </p>

          {/* BUTTONS */}
          <div className="mt-9 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="group rounded-full bg-white px-7 py-3.5 font-semibold text-black transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(255,255,255,0.2)]"
            >
              Explore My Work
              <span className="ml-2 transition group-hover:ml-3">
                →
              </span>
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/20 bg-white/5 px-7 py-3.5 font-semibold backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/50"
            >
              Let's Talk
            </a>

          </div>

          {/* SOCIALS */}
          <div className="mt-10 flex items-center gap-5 text-sm text-gray-500">

            <span>Find me on</span>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 transition hover:text-white"
            >
              GitHub ↗
            </a>

            <span className="text-gray-700">•</span>

            <a
              href="#"
              className="text-gray-300 transition hover:text-white"
            >
              LinkedIn ↗
            </a>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div
          className="relative mx-auto h-[500px] w-full max-w-[500px]"
          style={{
            transform: `translate(${moveX}px, ${moveY}px)`,
            transition: "transform 0.15s ease-out",
          }}
        >

          {/* Outer glow */}
          <div className="absolute inset-10 rounded-[40%] bg-purple-500/20 blur-[100px]" />

          {/* Main glass card */}
          <div className="absolute inset-8 rotate-3 rounded-[40px] border border-white/10 bg-white/[0.04] shadow-2xl backdrop-blur-xl transition duration-500 hover:rotate-0">

            {/* Window bar */}
            <div className="flex items-center gap-2 border-b border-white/10 px-6 py-5">

              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
              <span className="h-3 w-3 rounded-full bg-green-400/80" />

              <span className="ml-auto text-xs text-gray-600">
                sruthi.dev
              </span>

            </div>

            {/* Code-like visual */}
            <div className="p-8 font-mono text-sm leading-8">

              <p className="text-gray-600">
                01
              </p>

              <p>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-pink-300">developer</span>{" "}
                =
              </p>

              <p className="pl-5">
                {"{"}
              </p>

              <p className="pl-10">
                name:
                <span className="text-green-300">
                  "Sruthi"
                </span>
                ,
              </p>

              <p className="pl-10">
                passion:
                <span className="text-green-300">
                  "Building"
                </span>
                ,
              </p>

              <p className="pl-10">
                stack:
                <span className="text-green-300">
                  "Full Stack"
                </span>
                ,
              </p>

              <p className="pl-10">
                loves:
                <span className="text-green-300">
                  "AI + Creativity"
                </span>
              </p>

              <p className="pl-5">
                {"}"}
              </p>

              <div className="mt-10 rounded-2xl border border-purple-400/20 bg-purple-500/10 p-5">

                <p className="text-xs text-purple-300">
                  CURRENTLY BUILDING
                </p>

                <p className="mt-2 text-lg font-bold text-white">
                  UNLOAD 🌱
                </p>

                <p className="mt-1 text-xs leading-5 text-gray-400">
                  A digital wellness experience
                  designed to help people build
                  healthier relationships with technology.
                </p>

              </div>

            </div>

          </div>

          {/* Floating badge */}
          <div className="absolute right-0 top-16 rounded-2xl border border-white/10 bg-black/60 px-5 py-4 shadow-xl backdrop-blur-xl">
            <p className="text-xs text-gray-500">
              EXPERIENCE
            </p>

            <p className="mt-1 font-bold text-white">
              Code • Create • Learn
            </p>
          </div>

          {/* Floating tech badge */}
          <div className="absolute bottom-20 left-0 rounded-2xl border border-white/10 bg-black/60 px-5 py-4 shadow-xl backdrop-blur-xl">
            <p className="text-xs text-gray-500">
              STACK
            </p>

            <p className="mt-1 font-bold text-purple-300">
              React • Python • AI
            </p>
          </div>

        </div>

      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-gray-500 md:flex"
      >
        <span>Scroll to explore</span>

        <span className="animate-bounce text-lg">
          ↓
        </span>
      </a>

    </section>
  );
};

export default Hero;