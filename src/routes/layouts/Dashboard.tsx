import Nav from '@/components/dashboards/Nav'
import { Outlet } from 'react-router'

export default function Dashboard() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  )
}
