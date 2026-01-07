import { useEffect, useState } from "react";
import axios from "axios";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=6")
      .then((response) => {
        setProjects(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center p-8">Loading my projects...</p>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <h2 className="font-bold mb-2">{project.title}</h2>
            <p className="text-gray-700">{project.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
