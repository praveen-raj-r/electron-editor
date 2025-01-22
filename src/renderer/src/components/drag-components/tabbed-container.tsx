import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { Badge } from '../ui/badge'
import { Card } from '../ui/card'

const invoices = [
  {
    invoice: 'INV001',
    deviceId: '00001',
    truckNumber: '0459',
    location: 'Chennai',
    tripNumber: '81',
    tripLoad: '40',
    status: 'completed',
    recordedDateTime: '8/6/2024 12:31:46 AM'
  },
  {
    invoice: 'INV002',
    deviceId: '00001',
    truckNumber: '0459',
    location: 'Chennai',
    tripNumber: '80',
    tripLoad: '40',
    status: 'completed',
    recordedDateTime: '8/6/2024 12:31:46 AM'
  },
  {
    invoice: 'INV003',
    deviceId: '00001',
    truckNumber: '80',
    location: 'Chennai',
    tripNumber: '79',
    tripLoad: '40',
    status: 'completed',
    recordedDateTime: '8/6/2024 12:31:46 AM'
  },
  {
    invoice: 'INV004',
    deviceId: '00001',
    truckNumber: '0459',
    location: 'Chennai',
    tripNumber: '78',
    tripLoad: '40',
    status: 'in-process',
    recordedDateTime: '8/6/2024 12:31:46 AM'
  },
  {
    invoice: 'INV005',
    deviceId: '00001',
    truckNumber: '0459',
    location: 'Chennai',
    tripNumber: '77',
    tripLoad: '40',
    status: 'completed',
    recordedDateTime: '8/6/2024 12:31:46 AM'
  }
]

export function TabbedContainer() {
  return (
    <Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Device Id </TableHead>
            <TableHead>Truck Number</TableHead>
            <TableHead>Locations</TableHead>
            <TableHead>Trip Number</TableHead>
            <TableHead>Trip Load (Tonnes)</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Recorded Date Time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.deviceId}</TableCell>
              <TableCell>{invoice.truckNumber}</TableCell>
              <TableCell>{invoice.location}</TableCell>
              <TableCell>{invoice.tripNumber}</TableCell>
              <TableCell>{invoice.tripLoad}</TableCell>
              <TableCell className="capitalize">
                {invoice.status === 'completed' ? (
                  <Badge className="bg-green-700">completed</Badge>
                ) : (
                  <Badge className="bg-yellow-700">In Progress</Badge>
                )}
              </TableCell>
              <TableCell className="text-right">{invoice.recordedDateTime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}
export default TabbedContainer
