import Header from '@/components/Header'
import { Outlet, ScrollRestoration } from 'react-router'

export default function Default() {
  return (
    <>
      <Header />
      <main className="mt-[32px]">
        <Outlet />
      </main>
      <ScrollRestoration />
    </>
  )
}
