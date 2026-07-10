import { NavLink, useNavigate } from 'react-router'

const navigations = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/movies', label: 'Movies' },
  { to: '/todos', label: 'Todos' },
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/signin', label: 'Sign In' }
]

export default function Header() {
  const navigate = useNavigate()

  function signOut() {
    localStorage.removeItem('accessToken')
    // location.reload()
    navigate('/')
  }

  return (
    <header className="flex gap-3">
      {navigations.map(nav => {
        return (
          <NavLink
            key={nav.to}
            to={nav.to}
            className={({ isActive }) => (isActive ? 'text-red-500' : '')}>
            {nav.label}
          </NavLink>
        )
      })}
      <button onClick={signOut}>Sign Out</button>
    </header>
  )
}
