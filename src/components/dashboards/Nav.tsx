import { NavLink } from 'react-router'
import { twMerge } from 'tailwind-merge'

const navigations = [
  { to: '/dashboard', label: '대시보드' },
  { to: '/dashboard/stores', label: '매장 목록' },
  { to: '/dashboard/map', label: '매장 지도' }
]

export default function Nav() {
  return (
    <nav className="fixed top-[32px] left-0 box-border h-[calc(100vh-32px)] w-[250px] border-r border-gray-200 bg-white p-4">
      {navigations.map(nav => {
        return (
          <NavLink
            key={nav.to}
            to={nav.to}
            end
            className={({ isActive }) => {
              const base =
                'mb-1 flex h-[40px] w-full items-center rounded-md px-3 hover:bg-gray-200'
              return isActive
                ? twMerge(base, 'bg-red-200 font-bold hover:bg-red-300')
                : base
            }}>
            {nav.label}
          </NavLink>
        )
      })}
    </nav>
  )
}
