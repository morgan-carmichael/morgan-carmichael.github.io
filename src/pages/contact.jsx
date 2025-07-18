import Layout from '../components/layout'

const Contact = () => (
  <Layout>
    <section className="p-8 max-w-xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
      <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-6">
        Whether you want to collaborate, ask questions, or just say hello —
        I’d love to hear from you.
      </p>

      <div className="space-y-4">
        <a
          href="mailto:equusincorde+portfolio@gmail.com"
          className="block text-blue-600 dark:text-blue-400 hover:underline"
        >
          equusincorde+portfolio@gmail.com
        </a>

        <a
          href="https://github.com/morgan-carmichael"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-blue-600 dark:text-blue-400 hover:underline"
        >
          GitHub Profile
        </a>

        {/* Add LinkedIn or other links as needed */}
      </div>
    </section>
  </Layout>
)

export default Contact
