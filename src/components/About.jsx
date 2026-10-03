const About = () => {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">

        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-purple-400">
          About Me
        </p>

        <h2 className="text-4xl font-bold md:text-5xl">
          A little about me.
        </h2>

        <div className="mt-8 grid gap-10 md:grid-cols-2">

          <p className="leading-8 text-gray-400">
            I'm a Computer Science Engineering student who enjoys building
            applications and exploring how technology can solve everyday
            problems.
          </p>

          <p className="leading-8 text-gray-400">
            My interests include full-stack development, artificial
            intelligence, machine learning, mobile application development,
            and creating clean user experiences.
          </p>

        </div>

      </div>
    </section>
  );
};

export default About;