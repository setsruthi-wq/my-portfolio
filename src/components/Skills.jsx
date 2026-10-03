const skills = [
  "Python",
  "JavaScript",
  "React",
  "React Native",
  "Node.js",
  "Express.js",
  "MongoDB",
  "SQL",
  "Git & GitHub",
  "AI / ML",
  "HTML & CSS",
  
];

const Skills = () => {
  return (
    <section id="skills" className="border-y border-white/10 px-6 py-24">
      <div className="mx-auto max-w-6xl">

        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-purple-400">
          Skills
        </p>

        <h2 className="text-4xl font-bold md:text-5xl">
          Tools I work with.
        </h2>

        <div className="mt-10 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-gray-300 transition hover:border-purple-400/50 hover:bg-purple-400/10"
            >
              {skill}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;