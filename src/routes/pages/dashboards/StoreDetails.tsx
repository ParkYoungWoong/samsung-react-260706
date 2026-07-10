import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import type { Store } from '@/routes/pages/dashboards/Stores'

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
          <h1>{store.name}</h1>
        </>
      )}
    </>
  )
}
