import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import type { Store } from '@/routes/pages/dashboards/Stores'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Map() {
  const [stores, setStores] = useState<Store[]>([])

  useEffect(() => {
    ;(async function () {
      const { data } = await axios.get('http://localhost:3000/stores')
      setStores(data)
    })()
  }, [])

  return (
    <MapContainer
      center={[37.4, 127.2]}
      zoom={9}
      scrollWheelZoom
      className="h-[500px] w-full">
      <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {stores.map(store => {
        return (
          <Marker
            key={store.id}
            position={[store.lat, store.lng]}
          />
        )
      })}
    </MapContainer>
  )
}
