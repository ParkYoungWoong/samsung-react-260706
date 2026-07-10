import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from '@/components/dashboards/Card'
import RegionBarChart from '@/components/dashboards/RegionBarChart'
import RegionPieChart from '@/components/dashboards/RegionPieChart'

export interface Dashboard {
  totalStores: number
  activeStores: number
  totalSales: number
  avgSales: number
  regionSales: RegionSale[]
  monthlySales: MonthlySale[]
  pieData: PieData[]
}
export interface RegionSale {
  region: string
  total: number
}
export interface MonthlySale {
  month: string
  total: number
}
export interface PieData {
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
      {dashboard && (
        <div className="grid grid-cols-4 grid-rows-[110px_380px_380px] gap-4">
          <Card name="전체 매장">
            <div>{dashboard.totalStores}개</div>
          </Card>
          <Card name="운영 중">
            <div>{dashboard.activeStores}개</div>
          </Card>
          <Card name="연 매출 합계">
            <div>{(dashboard.totalSales / 10000).toFixed(1)}억 원</div>
          </Card>
          <Card name="매장 평균">
            <div>{(dashboard.avgSales / 10000).toFixed(1)}억 원</div>
          </Card>
          <Card
            name="지역별 매출"
            className="col-span-2">
            <RegionBarChart data={dashboard.regionSales} />
          </Card>
          <Card
            name="지역별 매출 비중"
            className="col-span-2">
            <RegionPieChart data={dashboard.pieData} />
          </Card>
          <Card
            name="월별 전체 매출 추이"
            className="col-span-4"></Card>
        </div>
      )}
    </>
  )
}
