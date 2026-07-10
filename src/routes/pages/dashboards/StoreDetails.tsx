import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import type { Store } from '@/routes/pages/dashboards/Stores'
import Card from '@/components/dashboards/Card'
import Map from '@/components/dashboards/Map'
import MonthlyLineChart from '@/components/dashboards/MonthlyLineChart'

// http://localhost:3000/dashboard/stores/7
export default function StoreDetails() {
  const { storeId } = useParams()
  const [store, setStore] = useState<Store | null>(null)

  useEffect(() => {
    ;(async function () {
      const { data } = await axios.get(
        `http://localhost:3000/stores/${storeId}`
      )
      setStore(data)
    })()
  }, [])

  return (
    <>
      {store && (
        <>
          <h1>
            <span className="text-2xl font-bold">{store.name}</span>
            <span>{store.status}</span>
          </h1>
          <p>{store.address}</p>
          <div className="grid grid-cols-2 grid-rows-[repeat(2,380px)] gap-4">
            <Card name="기본 정보">
              <div className="grid grid-cols-2 gap-3">
                <InfoItem
                  name="매니저"
                  value={store.manager}
                />
                <InfoItem
                  name="연락처"
                  value={store.phone}
                />
                <InfoItem
                  name="개점일"
                  value={store.openedAt}
                />
                <InfoItem
                  name="연 매출"
                  value={`${(store.totalSales / 10000).toFixed(1)}억 원`}
                />
              </div>
            </Card>
            <Card name="위치">
              <Map
                lat={store.lat}
                lng={store.lng}
              />
            </Card>
            <Card
              name="월별 매출 추이"
              className="col-span-2">
              <MonthlyLineChart
                data={store.monthlySales.map(sales => {
                  return {
                    month: sales.month,
                    total: sales.amount
                  }
                })}
              />
            </Card>
          </div>
        </>
      )}
    </>
  )
}

interface InfoItemProps {
  name: string
  value: string
}
function InfoItem({ name, value }: InfoItemProps) {
  return (
    <div>
      <h4 className="text-sm text-gray-500">{name}</h4>
      <p>{value}</p>
    </div>
  )
}
