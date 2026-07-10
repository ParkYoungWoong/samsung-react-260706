import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router'

export interface Store {
  id: string
  name: string
  region: string
  address: string
  lat: number
  lng: number
  manager: string
  phone: string
  status: string
  openedAt: string
  monthlySales: MonthlySale[]
  totalSales: number
}
export interface MonthlySale {
  month: string
  amount: number
}

export default function Stores() {
  const [stores, setStores] = useState<Store[]>([])

  useEffect(() => {
    ;(async function () {
      const { data } = await axios.get('http://localhost:3000/stores')
      setStores(data)
    })()
  }, [])

  return (
    <>
      <h1>매장 목록</h1>
      <ul>
        {stores.map(store => {
          return (
            <li key={store.id}>
              <Link
                to={`/dashboard/stores/${store.id}`}
                className="grid h-[46px] grid-cols-5 items-center px-3 hover:bg-gray-100">
                <div>{store.name}</div>
                <div>{store.region}</div>
                <div>{store.manager}</div>
                <div>{store.status}</div>
                <div>{(store.totalSales / 10000).toFixed(1)}억 원</div>
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
