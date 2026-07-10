import { ResponsiveContainer, LineChart, Line, XAxis, YAxis } from 'recharts'
import type { MonthlySale } from '@/routes/pages/dashboards/Index'
import dayjs from 'dayjs'

interface Props {
  data: MonthlySale[]
}

export default function MonthlyLineChart({ data }: Props) {
  return (
    <ResponsiveContainer
      width="100%"
      height={300}>
      <LineChart data={data}>
        <Line
          dataKey="total"
          strokeWidth={4}
          dot={false}
        />
        <XAxis
          dataKey="month"
          tickFormatter={val => dayjs(val).format('YY/MM')}
        />
        <YAxis
          tickFormatter={val => {
            if (val > 0) return `${(val / 10000 + 3).toFixed(1)}억`
            return ''
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
