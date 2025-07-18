import Layout from '../components/layout'

const About = () => (
  <Layout>
    <section className="p-8 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
        I’m Morgan Carmichael — a front-end developer with a focus on accessibility, performance, and design.
        I build elegant, human-centered interfaces with clean code and thoughtful interaction.
      </p>
      <p className="mt-4 text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
        With a background in creative writing and visual design, I approach development with a balance
        of structure and storytelling. I enjoy building tools that empower others — from internal dashboards
        to expressive portfolio sites.
      </p>
    </section>
  </Layout>
)

export default About
