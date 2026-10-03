const projects = [
  {
    title: "UNLOAD",
    description:
      "A digital wellness mobile application based on the Progressive Unloading model. It helps users gradually reduce excessive screen time through mindful reflection, app limits, safe zones, rewards, and personalized digital wellness journeys.",
    tech: "React Native • Expo • JavaScript",
    github: "#",
  }
 
];

const Projects = () => {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">

        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-purple-400">
          Projects
        </p>

        <h2 className="text-4xl font-bold md:text-5xl">
          Things I've built.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">

          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-2 hover:border-purple-400/30"
            >

              <div className="mb-8 flex items-center justify-between">
                <span className="text-2xl font-bold">
                  {project.title}
                </span>

                <span className="text-gray-500 transition group-hover:text-purple-400">
                  ↗
                </span>
              </div>

              <p className="leading-7 text-gray-400">
                {project.description}
              </p>

              <p className="mt-6 text-sm text-purple-300">
                {project.tech}
              </p>

              <a
                href={project.github}
                className="mt-8 inline-block text-sm font-medium text-white underline underline-offset-4"
              >
                View on GitHub →
              </a>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;