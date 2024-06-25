import { ArrowRight, Search, X } from 'lucide-react'

import { Button } from '../../../components/ui/button'
import { TableCell, TableRow } from '../../../components/ui/table'

interface OrderTableRowProps {}

export function OrderTableRow({}: OrderTableRowProps) {
  return (
    <TableRow>
      <TableCell>
        <Button variant="outline" size="xs">
          <Search className="size-3" />
          <span className="sr-only">Detalhes do pedido</span>
        </Button>
      </TableCell>

      <TableCell className="font-mono text-xs font-medium">
        w5ef4w56ef4w6e5f1
      </TableCell>

      <TableCell className="text-muted-foreground">há 15 minutos</TableCell>

      <TableCell>
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-slate-400" />
          <span className="font-medium leading-none text-muted-foreground">
            Pendente
          </span>
        </div>
      </TableCell>

      <TableCell className="font-medium">Leonardo da Silva Pereira</TableCell>

      <TableCell className="font-medium">R$ 149,90</TableCell>

      <TableCell>
        <Button variant="outline" size="xs">
          <span className="leading-none">Aprovar</span>
          <ArrowRight className="ml-2 size-3" />
        </Button>
      </TableCell>

      <TableCell>
        <Button variant="ghost" size="xs">
          <X className="mr-2 size-3" />
          <span className="leading-none">Cancelar</span>
        </Button>
      </TableCell>
    </TableRow>
  )
}
