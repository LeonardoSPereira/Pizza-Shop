import { DollarSign } from 'lucide-react'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../../components/ui/card'

interface MonthCanceledOrdersAmountCardProps {}

export function MonthCanceledOrdersAmountCard({}: MonthCanceledOrdersAmountCardProps) {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Cancelamentos (mês)
        </CardTitle>
        <DollarSign className="size-4 text-muted-foreground" />
      </CardHeader>

      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tighter">32</span>

        <p>
          <span className="text-emerald-500 dark:text-emerald-400">-6%</span> em
          relação ao mês passado
        </p>
      </CardContent>
    </Card>
  )
}
