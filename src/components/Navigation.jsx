import { NavLink } from 'react-router-dom'

// TODO: Import NavLink from react-router-dom instead of using regular links

function Navigation() {
  return (
    <nav className="navigation">
      {/* TODO: Replace these <a> tags with NavLink components
          - Use the className prop with a function that receives { isActive }
          - Update the paths to match your routes
      */}
      <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        Home
      </NavLink>
      <NavLink to="/projects" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        Projects
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        About
      </NavLink>
      <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        Contact
      </NavLink>
    </nav>
  )
}

export default Navigation