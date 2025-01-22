import { Label, Pie, PieChart } from 'recharts'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'

const chartData = [
  { browser: 'chrome', visitors: 92.9, fill: 'var(--color-chrome)' },
  { browser: 'safari', visitors: 55.7, fill: 'var(--color-safari)' },
  { browser: 'firefox', visitors: 10, fill: 'var(--color-firefox)' }
]

const chartConfig = {
  visitors: {
    label: 'Visitors'
  },
  chrome: {
    label: 'Shift A',
    color: 'hsl(var(--chart-1))'
  },
  safari: {
    label: 'Shift B',
    color: 'hsl(var(--chart-2))'
  },
  firefox: {
    label: 'Shift C',
    color: 'hsl(var(--chart-3))'
  }
}

function DonutChart() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Productivity Report</CardTitle>
        <CardDescription>Average Cycle time </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[340px]">
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={100}
              cornerRadius={10}
            >
              <Label
                content={({ viewBox }) => {
                  // Check if viewBox is available
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {Math.floor(chartData.reduce((k, i) => i.visitors + k, 0))}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Total Tons
                        </tspan>
                      </text>
                    )
                  }

                  // Fallback if viewBox is undefined or missing properties
                  return null
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default DonutChart
