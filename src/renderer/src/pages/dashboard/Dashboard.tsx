import AveragesComponent from '@/components/app/dashboard/averages-component'
import BarChartDashboard from '@/components/app/dashboard/bar-chart-dashboard'
import AreaChartComp from '@/components/drag-components/area-chart'
import CardsDataTable from '@/components/examples-dashboard/cards-data-table'
import CardsMetric from '@/components/examples-dashboard/cards-metric'
import CardsStats from '@/components/examples-dashboard/cards-stats'

function Dashboard() {
  return (
    <div className="flex flex-col gap-3">
      <CardsStats />
      <AveragesComponent />
      <BarChartDashboard />
      <AreaChartComp />
      <CardsMetric />
      <CardsDataTable />
    </div>
  )
}

export default Dashboard
