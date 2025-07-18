import Layout from '../components/layout'
import ProjectCard from '../components/projectCard'
import projects from '../data/projects.json'

const Projects = () => (
  <Layout>
    <section className="p-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
      <div className="grid gap-8 sm:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  </Layout>
)

export default Projects
