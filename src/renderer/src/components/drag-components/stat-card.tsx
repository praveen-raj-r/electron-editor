/* eslint-disable react/prop-types */
import * as Icons from 'lucide-react'
import { Card } from '../ui/card'

const data = [
  { label: 'Weight (Tonnes)', count: '1206', icon: 'Weight' },
  { label: 'Trips', count: '40', icon: 'Truck' },
  { label: 'Overload', count: '2', icon: 'CloudAlert' }
]

function StatCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 ">
      {data.map((item, k) => (
        <MetricCard item={item} key={`metric-${k}`} />
      ))}
    </div>
  )
}

function MetricCard({ item }) {
  const IconComponent = Icons[item.icon]

  return (
    <Card className="bg-card text-card-foreground shadow-sm rounded-lg p-4 xl:p-2 xl:py-3 2xl:p-6 flex flex-col items-left 2xl:min-w-[168px]">
      <div className="flex items-center gap-10">
        <span className="h-6 w-6 rounded-full flex justify-center items-center bg-primary/12">
          <IconComponent className="w-6 h-6 text-primary" />
        </span>
        <div className="text-base font-medium text-default-600">{item.label}</div>
      </div>
      <div className="mt-4">
        <div className="text-4xl font-semibold text-primary mt-1">{item.count}</div>
      </div>
    </Card>
  )
}

export default StatCard
