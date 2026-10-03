import { useState } from "react";

const achievements = [
  {
    title: "Paper Presentation",
    event: "TEXUS'26",
    organization: "SRM Institute of Science and Technology",
    year: "2026",
    description:
      "Participated in a paper presentation event conducted as part of TEXUS'26.",
    image: "/achievements/Texus'26.jpg",
    featured: true,
  },

  {
    title: "COGNEBULA'26",
    event: "AI & Data Science Symposium",
    organization: "Velammal Engineering College",
    year: "2026",
    description:
      "Participated in a national-level technical symposium organized by the Department of Artificial Intelligence and Data Science.",
    image: "/achievements/cognebula'26.jpg",
    featured: true,
  },

  {
    title: "Anti Drug Run",
    event: "Chennai 2026",
    organization: "Sports Development Authority of Tamil Nadu",
    year: "2026",
    description:
      "Successfully completed the Anti Drug Run Chennai 2026.",
    image: "/achievements/anti-drug-run.jpg",
    featured: true,
  },

  {
    title: "NPTEL Certification",
    event: "NPTEL",
    organization: "IIT Madras",
    year: "2025",
    description:
      "Successfully completed the NPTEL course Python for Data Science and earned a certification.",
    image: "/achievements/nptel.jpg",
    featured: false,
  },
];

const Achievements = () => {
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const featuredAchievements = achievements.filter(
    (achievement) => achievement.featured
  );

  return (
    <section id="achievements" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-purple-400">
              Achievements
            </p>

            <h2 className="text-4xl font-bold md:text-5xl">
              Things I'm proud of.
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-gray-400">
              A few milestones and experiences from my academic journey.
            </p>
          </div>

          <span className="text-sm text-gray-600">
            {featuredAchievements.length.toString().padStart(2, "0")} Featured
          </span>
        </div>

        {/* Featured Certificates */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">

          {featuredAchievements.map((achievement) => (
            <article
              key={achievement.title}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition duration-500 hover:-translate-y-2 hover:border-purple-400/40 hover:bg-white/[0.06]"
            >

              {/* Certificate Preview */}
              <button
                type="button"
                onClick={() => setSelectedAchievement(achievement)}
                className="relative block aspect-[4/3] w-full overflow-hidden bg-black/40 text-left"
              >
                <img
                  src={achievement.image}
                  alt={`${achievement.title} certificate`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <span className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-xs text-white backdrop-blur-xl">
                  {achievement.year}
                </span>

                <span className="absolute bottom-4 left-4 text-sm font-medium text-white opacity-0 transition duration-300 group-hover:opacity-100">
                  Click to view ↗
                </span>
              </button>

              {/* Certificate Details */}
              <div className="p-6">

                <p className="text-sm font-medium text-purple-400">
                  {achievement.event}
                </p>

                <h3 className="mt-2 text-xl font-bold text-white">
                  {achievement.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {achievement.description}
                </p>

                <p className="mt-5 text-xs uppercase tracking-wide text-gray-600">
                  {achievement.organization}
                </p>

                <button
                  type="button"
                  onClick={() => setSelectedAchievement(achievement)}
                  className="mt-5 text-sm font-medium text-white underline underline-offset-4 transition hover:text-purple-300"
                >
                  View Certificate →
                </button>

              </div>
            </article>
          ))}

        </div>

        {/* View All Button */}
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setShowAll(true)}
            className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-gray-300 transition hover:border-purple-400/40 hover:bg-purple-400/10 hover:text-white"
          >
            View All Achievements →
          </button>
        </div>

      </div>

      {/* Full Certificate Modal */}
      {selectedAchievement && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-5 backdrop-blur-md"
          onClick={() => setSelectedAchievement(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-[#111113] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >

            {/* Close */}
            <button
              type="button"
              onClick={() => setSelectedAchievement(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/70 text-xl text-white backdrop-blur-xl transition hover:bg-white hover:text-black"
            >
              ×
            </button>

            {/* Image */}
            <div className="max-h-[75vh] overflow-auto">
              <img
                src={selectedAchievement.image}
                alt={`${selectedAchievement.title} certificate`}
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>

            {/* Details */}
            <div className="border-t border-white/10 p-5">
              <p className="text-sm text-purple-400">
                {selectedAchievement.event}
              </p>

              <h3 className="mt-1 text-xl font-bold text-white">
                {selectedAchievement.title}
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                {selectedAchievement.organization}
              </p>
            </div>

          </div>
        </div>
      )}

      {/* All Achievements Modal */}
      {showAll && (
        <div
          className="fixed inset-0 z-[90] overflow-y-auto bg-black/85 p-5 backdrop-blur-md"
          onClick={() => setShowAll(false)}
        >
          <div
            className="mx-auto mt-10 max-w-6xl rounded-3xl border border-white/10 bg-[#0d0d0f] p-6 shadow-2xl md:p-10"
            onClick={(event) => event.stopPropagation()}
          >

            {/* Modal Header */}
            <div className="mb-8 flex items-start justify-between gap-5">

              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-purple-400">
                  Achievement Archive
                </p>

                <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
                  My milestones.
                </h2>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  A collection of certificates, events and experiences.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowAll(false)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-white transition hover:bg-white hover:text-black"
              >
                ×
              </button>

            </div>

            {/* All Certificates */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

              {achievements.map((achievement) => (
                <button
                  key={achievement.title}
                  type="button"
                  onClick={() => {
                    setShowAll(false);
                    setSelectedAchievement(achievement);
                  }}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] text-left transition duration-300 hover:-translate-y-1 hover:border-purple-400/40 hover:bg-white/[0.06]"
                >

                  <div className="aspect-[4/3] overflow-hidden bg-black/40">
                    <img
                      src={achievement.image}
                      alt={`${achievement.title} certificate`}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-5">

                    <p className="text-xs uppercase tracking-wider text-purple-400">
                      {achievement.event}
                    </p>

                    <h3 className="mt-2 font-semibold text-white">
                      {achievement.title}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-gray-500">
                      {achievement.organization}
                    </p>

                  </div>

                </button>
              ))}

            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default Achievements;