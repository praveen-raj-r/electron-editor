import AreaChartComp from '@/components/drag-components/area-chart'
import BarChartComp from '@/components/drag-components/bar-chart'
import ActionButton from '@/components/drag-components/button'
import CardsDataTable from '@/components/drag-components/data-cards'
import DonutChart from '@/components/drag-components/donut-chart'
import InfoCards from '@/components/drag-components/info-cards'
import Label from '@/components/drag-components/label'
import PerformanceTracker from '@/components/drag-components/performance-tracker'
import { PieChartComponenet } from '@/components/drag-components/pie-chart'
import StatCard from '@/components/drag-components/stat-card'
import TabbedContainer from '@/components/drag-components/tabbed-container'
import TableComp from '@/components/drag-components/table'
import { TextArea } from '@/components/drag-components/text-box'
import imagesObject from '@/data/editor/components-images.json'

export const componentsList = [
  {
    element: <DonutChart />,
    props: ['content', 'apperance', 'size', 'weight'],
    componentLabel: 'Donut Chart',
    id: 'donut-chart',
    image: imagesObject['donut-chart']
  },
  {
    element: <BarChartComp />,
    props: ['content', 'apperance', 'size', 'weight'],
    componentLabel: 'Bar Chart',
    id: 'bar-chart',
    image: imagesObject['bar-chart']
  },
  {
    element: <TableComp />,
    props: ['content', 'apperance', 'size', 'weight'],
    componentLabel: 'Summary Table',
    id: 'summary-table',
    image: imagesObject['summary-table']
  },
  {
    element: <InfoCards />,
    props: ['content', 'apperance', 'size', 'weight'],
    componentLabel: 'Stat Cards',
    id: 'stat-cards',
    image: imagesObject['stat-cards']
  },
  {
    element: <Label />,
    props: ['content', 'apperance', 'size', 'weight'],
    componentLabel: 'Label',
    id: 'label',
    image: imagesObject['label']
  },
  {
    element: <PerformanceTracker />,
    props: ['content', 'apperance', 'size', 'weight'],
    componentLabel: 'Performance tracker',
    id: 'performance-tracker',
    image: imagesObject['performance-tracker']
  },
  {
    element: <TabbedContainer />,
    props: ['content', 'apperance', 'size', 'weight'],
    componentLabel: 'Active Reports',
    id: 'active-reports',
    image: imagesObject['active-reports']
  },
  {
    element: <StatCard />,
    props: ['content', 'apperance', 'size', 'weight'],
    componentLabel: 'Productivity Cards',
    id: 'productivity-cards',
    image: imagesObject['productivity-cards']
  },
  {
    element: <ActionButton />,
    props: ['content', 'apperance', 'size', 'weight'],
    componentLabel: 'Action Button',
    id: 'action-button',
    image: imagesObject['action-button']
  },
  {
    element: <CardsDataTable />,
    props: ['content', 'apperance', 'size', 'weight'],
    componentLabel: 'Table',
    id: 'table',
    image: imagesObject['table']
  },
  {
    element: <AreaChartComp />,
    props: ['content', 'apperance', 'size', 'weight'],
    componentLabel: 'Area Chart',
    id: 'area-chart',
    image: imagesObject['area-chart']
  },
  {
    element: <PieChartComponenet />,
    props: ['content', 'apperance', 'size', 'weight'],
    componentLabel: 'Pie Chart',
    id: 'pie-chart',
    image: imagesObject['pie-chart']
  },
  {
    element: <TextArea />,
    props: ['content', 'apperance', 'size', 'weight'],
    componentLabel: 'Text Area',
    id: 'text-area',
    image: imagesObject['text-area']
  }
]
