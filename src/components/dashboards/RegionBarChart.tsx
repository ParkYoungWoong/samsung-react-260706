import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts'
import type { RegionSale } from '@/routes/pages/dashboards/Index'

interface Props {
  data: RegionSale[]
}

export default function RegionBarChart({ data }: Props) {
  return (
    <ResponsiveContainer
      width="100%"
      height={300}>
      <BarChart data={data}>
        <XAxis dataKey="region" />
        <YAxis tickFormatter={val => `${val / 10000}억`} />
        <Bar dataKey="total" />
      </BarChart>
    </ResponsiveContainer>
  )
}
