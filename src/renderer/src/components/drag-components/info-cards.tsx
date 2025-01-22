/* eslint-disable react/prop-types */
import * as Icon from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
const data = [
  {
    label: 'Total Devices',
    count: 78,
    icon: 'Truck',
    color: '#3b82f6'
  },
  {
    label: 'Active Devices',
    count: 66,
    icon: 'Cpu',
    color: '#22c55e'
  },
  {
    label: 'In Active Devices',
    count: 12,
    icon: 'OctagonAlert',
    color: '#dc2626'
  }
]

function InfoCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {data.map((item, key) => (
        <InfoCard item={item} key={key} />
      ))}
    </div>
  )
}

function InfoCard({ item }) {
  const { label, count, icon, color } = item
  const IconComponent = Icon[icon]

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{label}</CardTitle>
        <IconComponent style={{ color: color }} className="h-6 w-6" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{count}</div>
      </CardContent>
    </Card>
  )
}

export default InfoCards
