import { AlertTriangle } from 'lucide-react'
import { useTheme } from 'next-themes'
import { ScrollArea } from '../ui/scroll-area'

function NotificationAlerts() {
  return (
    <ScrollArea className="h-[calc(100vh-112px)]">
      <div className="flex flex-col gap-1">
        {Array(10)
          .fill(0)
          .map(() => (
            <AlertItem />
          ))}
      </div>
    </ScrollArea>
  )
}

function AlertItem() {
  const { theme } = useTheme()
  return (
    <div className="w-full h-[88px] border rounded-lg p-4 pr-2 flex gap-4 items-center">
      <span>
        <div className="border rounded-full size-[35px] flex items-center justify-center p-1 dark:bg-[#241005] bg-yellow-100">
          <AlertTriangle stroke={theme === 'dark' ? '#FDE68A' : '#74640b'} />
        </div>
      </span>
      <div className="text-left">
        <p>
          <strong>Fleet Devices</strong> failed to Create in the <strong>Production</strong>{' '}
          environment
        </p>
        <p>36d ago</p>
      </div>
      <div></div>
    </div>
  )
}
export default NotificationAlerts
