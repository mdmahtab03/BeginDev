import Card from "./Card";
export default function FeaturedProject() {
  const projects = [
    {
      id: 1,
      title: "Weather App",
      description:
        "A web application that provides real-time weather updates using OpenWeatherMap API.",
      technologies: ["JavaScript", "HTML", "CSS", "API"],
      link: "https://github.com/username/weather-app",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description:
        "My personal portfolio website to showcase my work and blog posts.",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      link: "https://username.dev",
    },
    {
      id: 3,
      title: "Task Manager",
      description:
        "A simple task management app with user authentication and real-time updates.",
      technologies: ["Node.js", "Express", "MongoDB", "Socket.IO"],
      link: "https://github.com/username/task-manager",
    },
  ];

  return (
    <>
      <h2 className="text-2xl font-semibold mb-6 text-gray-600">
        <span className="px-0.5 bg-primary mr-2"></span>Featured Weekly
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-600 w-full">

        {/* Loop through projects and pass each project as individual data */}
        {projects.map(project => (
          <Card key={project.id} data={project} />
        ))}
      </div>
    </>
  );
}
