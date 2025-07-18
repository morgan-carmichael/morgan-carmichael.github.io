import ThemeToggle from './themeToggle'
import { Link } from 'react-router-dom'

const Header = () => (
  <header className="flex items-center justify-between px-6 py-4 shadow-md bg-white dark:bg-neutral-800">
    <h1 className="text-xl font-bold tracking-wide">morgan carmichael</h1>
    <nav className="space-x-4">
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
    <ThemeToggle />
  </header>
)

export default Header
