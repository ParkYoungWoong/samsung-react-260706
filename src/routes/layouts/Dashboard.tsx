import Nav from '@/components/dashboards/Nav'
import { Outlet } from 'react-router'

export default function Dashboard() {
  return (
    <>
      <Nav />
      <section className="ml-[250px] box-border w-[calc(100vw-250px)]">
        <Outlet />
      </section>
    </>
  )
}
