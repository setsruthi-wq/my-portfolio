const Contact = () => {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center md:p-16">

        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-purple-400">
          Contact
        </p>

        <h2 className="text-4xl font-bold md:text-5xl">
          Let's build something.
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-gray-400">
          I'm always interested in learning, building new projects,
          collaborating, and exploring interesting ideas.
        </p>

        <div className="mt-8 flex justify-center gap-4">

          <a
            href="mailto:vitcampussruthi@gmail.com"
            className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:scale-105"
          >
            Email Me
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/20 px-6 py-3 transition hover:border-white"
          >
            GitHub ↗
          </a>

        </div>

      </div>

      <p className="mt-12 text-center text-sm text-gray-600">
        © 2026 Sruthi. Built with React.
      </p>
    </section>
  );
};

export default Contact;