const ProjectCard = ({ title, summary, stack, demo, github }) => (
  <div className="bg-white dark:bg-neutral-800 rounded-lg p-6 shadow-md hover:shadow-xl transition">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="mb-4">{summary}</p>
    <ul className="flex flex-wrap gap-2 text-xs mb-4">
      {stack.map((tech) => (
        <li
          key={tech}
          className="px-2 py-1 bg-indigo-200 dark:bg-indigo-700 rounded text-neutral-900 dark:text-white"
        >
          {tech}
        </li>
      ))}
    </ul>
    <div className="flex gap-4">
      <a href={demo} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
        Live Demo
      </a>
      <a href={github} target="_blank" rel="noopener noreferrer" className="text-gray-500 underline">
        GitHub
      </a>
    </div>
  </div>
)

export default ProjectCard
