import type { PieData } from '@/routes/pages/dashboards/Index'
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip
} from 'recharts'

interface Props {
  data: PieData[]
}

const colors = [
  '#4f46e5', // brand
  '#7c6cf6', // brand-2
  '#1565f5', // Blue
  '#009a96', // Teal
  '#2e9e3f', // Green
  '#f5a300' // Yellow
]

export default function RegionPieChart({ data }: Props) {
  return (
    <ResponsiveContainer
      width="100%"
      height={300}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          innerRadius={52}
          outerRadius={100}
          paddingAngle={3}>
          {data.map((region, index) => (
            <Cell
              key={region.name}
              fill={colors[index % colors.length]}
            />
          ))}
        </Pie>
        <Legend />
        <Tooltip
          formatter={val => {
            if (typeof val === 'number') return `${(val / 10000).toFixed(1)}억`
          }}
        />
      </PieChart>
    </ResponsiveContainer>
  )
}
