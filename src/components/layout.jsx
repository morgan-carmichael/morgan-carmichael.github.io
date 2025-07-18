import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => (
  <div className="flex flex-col min-h-screen bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
    <Header />
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
)

export default Layout
