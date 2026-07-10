import axios from 'axios'
import { useEffect, useState } from 'react'

export interface Dashboard {
  totalStores: number
  activeStores: number
  totalSales: number
  avgSales: number
  regionSales: RegionSale[]
  monthlySales: MonthlySale[]
  pieData: PieDaum[]
}
export interface RegionSale {
  region: string
  total: number
}
export interface MonthlySale {
  month: string
  total: number
}
export interface PieDaum {
  name: string
  value: number
}

export default function Index() {
  const [dashboard, setDashboard] = useState<Dashboard | null>(null)

  useEffect(() => {
    ;(async function () {
      const { data } = await axios.get('http://localhost:3000/dashboard')
      setDashboard(data)
    })()
  }, [])

  return (
    <>
      <h1>대시보드</h1>
    </>
  )
}
