import { useEffect, useState } from "react";
import { api } from "../../services/api"; // adjust path if needed

const OurProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProjects = async () => {
    try {
      const data = await api.get("/projects");
      setProjects(data);
    } catch (err) {
      console.error("Failed to fetch projects", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-16 bg-sky-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold text-blue-700">
            Our Projects
          </h2>
          <p className="mt-3 text-gray-600">
            We know what buyers are looking for and suggest projects that will
            bring clients top dollar for the sale of their homes.
          </p>
        </div>

        {/* Content */}
        {loading ? (
          <div className="mt-12 text-center text-gray-500">
            Loading projects...
          </div>
        ) : projects.length === 0 ? (
          <div className="mt-12 text-center text-gray-500">
            No projects found.
          </div>
        ) : (
          <div className="mt-12 flex flex-wrap justify-center gap-8">
            {projects.map((project) => (
              <div
                key={project._id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition w-[220px]"
              >
                <div className="w-full aspect-[9/7] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="py-4 px-2 text-center">
                  <h3 className="text-lg font-semibold text-blue-700 min-h-[3rem] flex items-center justify-center">
                    {project.name}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    {project.description}
                  </p>

                  <button className="mt-4 bg-orange-500 text-white text-sm px-4 py-2 rounded-md hover:bg-orange-600 transition">
                    READ MORE
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default OurProjects;
