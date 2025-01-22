import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { useMemo, useState } from 'react'
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'
const chartData = [
  { date: '2024-04-01', daily: 222, weekly: 150, monthly: 22 },
  { date: '2024-04-02', daily: 97, weekly: 180, monthly: 97 },
  { date: '2024-04-03', daily: 167, weekly: 120, monthly: 16 },
  { date: '2024-04-04', daily: 242, weekly: 260, monthly: 24 },
  { date: '2024-04-05', daily: 373, weekly: 290, monthly: 37 },
  { date: '2024-04-06', daily: 301, weekly: 340, monthly: 30 },
  { date: '2024-04-07', daily: 245, weekly: 180, monthly: 24 },
  { date: '2024-04-08', daily: 409, weekly: 320, monthly: 40 },
  { date: '2024-04-09', daily: 59, weekly: 110, monthly: 59 },
  { date: '2024-04-10', daily: 261, weekly: 190, monthly: 26 },
  { date: '2024-04-11', daily: 327, weekly: 350, monthly: 32 },
  { date: '2024-04-12', daily: 292, weekly: 210, monthly: 29 },
  { date: '2024-04-13', daily: 342, weekly: 380, monthly: 34 },
  { date: '2024-04-14', daily: 137, weekly: 220, monthly: 13 },
  { date: '2024-04-15', daily: 120, weekly: 170, monthly: 12 },
  { date: '2024-04-16', daily: 138, weekly: 190, monthly: 13 },
  { date: '2024-04-17', daily: 446, weekly: 360, monthly: 44 },
  { date: '2024-04-18', daily: 364, weekly: 410, monthly: 36 },
  { date: '2024-04-19', daily: 243, weekly: 180, monthly: 24 },
  { date: '2024-04-20', daily: 89, weekly: 150, monthly: 89 },
  { date: '2024-04-21', daily: 137, weekly: 200, monthly: 13 },
  { date: '2024-04-22', daily: 224, weekly: 170, monthly: 22 },
  { date: '2024-04-23', daily: 138, weekly: 230, monthly: 13 },
  { date: '2024-04-24', daily: 387, weekly: 290, monthly: 38 },
  { date: '2024-04-25', daily: 215, weekly: 250, monthly: 21 },
  { date: '2024-04-26', daily: 75, weekly: 130, monthly: 75 },
  { date: '2024-04-27', daily: 383, weekly: 420, monthly: 38 },
  { date: '2024-04-28', daily: 122, weekly: 180, monthly: 12 },
  { date: '2024-04-29', daily: 315, weekly: 240, monthly: 31 },
  { date: '2024-04-30', daily: 454, weekly: 380, monthly: 45 },
  { date: '2024-05-01', daily: 165, weekly: 220, monthly: 16 },
  { date: '2024-05-02', daily: 293, weekly: 310, monthly: 29 },
  { date: '2024-05-03', daily: 247, weekly: 190, monthly: 24 },
  { date: '2024-05-04', daily: 385, weekly: 420, monthly: 38 },
  { date: '2024-05-05', daily: 481, weekly: 390, monthly: 48 },
  { date: '2024-05-06', daily: 498, weekly: 520, monthly: 49 },
  { date: '2024-05-07', daily: 388, weekly: 300, monthly: 38 },
  { date: '2024-05-08', daily: 149, weekly: 210, monthly: 14 },
  { date: '2024-05-09', daily: 227, weekly: 180, monthly: 22 },
  { date: '2024-05-10', daily: 293, weekly: 330, monthly: 29 },
  { date: '2024-05-11', daily: 335, weekly: 270, monthly: 33 },
  { date: '2024-05-12', daily: 197, weekly: 240, monthly: 19 },
  { date: '2024-05-13', daily: 197, weekly: 160, monthly: 19 },
  { date: '2024-05-14', daily: 448, weekly: 490, monthly: 44 },
  { date: '2024-05-15', daily: 473, weekly: 380, monthly: 47 },
  { date: '2024-05-16', daily: 338, weekly: 400, monthly: 33 },
  { date: '2024-05-17', daily: 499, weekly: 420, monthly: 49 },
  { date: '2024-05-18', daily: 315, weekly: 350, monthly: 31 },
  { date: '2024-05-19', daily: 235, weekly: 180, monthly: 23 },
  { date: '2024-05-20', daily: 177, weekly: 230, monthly: 17 },
  { date: '2024-05-21', daily: 82, weekly: 140, monthly: 82 },
  { date: '2024-05-22', daily: 81, weekly: 120, monthly: 81 },
  { date: '2024-05-23', daily: 252, weekly: 290, monthly: 25 },
  { date: '2024-05-24', daily: 294, weekly: 220, monthly: 29 },
  { date: '2024-05-25', daily: 201, weekly: 250, monthly: 20 },
  { date: '2024-05-26', daily: 213, weekly: 170, monthly: 21 },
  { date: '2024-05-27', daily: 420, weekly: 460, monthly: 42 },
  { date: '2024-05-28', daily: 233, weekly: 190, monthly: 23 },
  { date: '2024-05-29', daily: 78, weekly: 130, monthly: 78 },
  { date: '2024-05-30', daily: 340, weekly: 280, monthly: 34 },
  { date: '2024-05-31', daily: 178, weekly: 230, monthly: 17 },
  { date: '2024-06-01', daily: 178, weekly: 200, monthly: 17 },
  { date: '2024-06-02', daily: 470, weekly: 410, monthly: 47 },
  { date: '2024-06-03', daily: 103, weekly: 160, monthly: 10 },
  { date: '2024-06-04', daily: 439, weekly: 380, monthly: 43 },
  { date: '2024-06-05', daily: 88, weekly: 140, monthly: 88 },
  { date: '2024-06-06', daily: 294, weekly: 250, monthly: 29 },
  { date: '2024-06-07', daily: 323, weekly: 370, monthly: 32 },
  { date: '2024-06-08', daily: 385, weekly: 320, monthly: 38 },
  { date: '2024-06-09', daily: 438, weekly: 480, monthly: 43 },
  { date: '2024-06-10', daily: 155, weekly: 200, monthly: 15 },
  { date: '2024-06-11', daily: 92, weekly: 150, monthly: 92 },
  { date: '2024-06-12', daily: 492, weekly: 420, monthly: 49 },
  { date: '2024-06-13', daily: 81, weekly: 130, monthly: 81 },
  { date: '2024-06-14', daily: 426, weekly: 380, monthly: 42 },
  { date: '2024-06-15', daily: 307, weekly: 350, monthly: 30 },
  { date: '2024-06-16', daily: 371, weekly: 310, monthly: 37 },
  { date: '2024-06-17', daily: 475, weekly: 520, monthly: 47 },
  { date: '2024-06-18', daily: 107, weekly: 170, monthly: 10 },
  { date: '2024-06-19', daily: 341, weekly: 290, monthly: 34 },
  { date: '2024-06-20', daily: 408, weekly: 450, monthly: 40 },
  { date: '2024-06-21', daily: 169, weekly: 210, monthly: 16 },
  { date: '2024-06-22', daily: 317, weekly: 270, monthly: 31 },
  { date: '2024-06-23', daily: 480, weekly: 530, monthly: 48 },
  { date: '2024-06-24', daily: 132, weekly: 180, monthly: 13 },
  { date: '2024-06-25', daily: 141, weekly: 190, monthly: 14 },
  { date: '2024-06-26', daily: 434, weekly: 380, monthly: 43 },
  { date: '2024-06-27', daily: 448, weekly: 490, monthly: 44 },
  { date: '2024-06-28', daily: 149, weekly: 200, monthly: 14 },
  { date: '2024-06-29', daily: 103, weekly: 160, monthly: 10 },
  { date: '2024-06-30', daily: 446, weekly: 400, monthly: 44 }
]

const chartConfig = {
  weight: {
    label: 'Weight'
  },
  daily: {
    label: 'daily',
    color: 'hsl(var(--chart-1))'
  },
  weekly: {
    label: 'weekly',
    color: 'hsl(var(--chart-2))'
  },
  monthly: {
    label: 'monthly',
    color: 'hsl(var(--chart-3))'
  }
}

function BarChartComp() {
  const [activeChart, setActiveChart] = useState('daily')

  const total = useMemo(
    () => ({
      daily: chartData.reduce((acc, curr) => acc + curr.daily, 0),
      weekly: chartData.reduce((acc, curr) => acc + curr.weekly, 0),
      monthly: chartData.reduce((acc, curr) => acc + curr.monthly, 0)
    }),
    []
  )

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Statistical Report</CardTitle>
          <CardDescription>Showing Productivity for different time ranges</CardDescription>
        </div>

        <div className="flex">
          {['daily', 'weekly', 'monthly'].map((key) => {
            const chart = key
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-destructive sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-sm font-medium capitalize">{chartConfig[chart].label}</span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[key].toLocaleString()}
                </span>
              </button>
            )
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer config={chartConfig} className="aspect-auto h-[250px] w-full">
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric'
                })
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="weight"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default BarChartComp
