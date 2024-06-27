type OrderStatus =
  | 'pending'
  | 'canceled'
  | 'processing'
  | 'delivering'
  | 'delivered'

interface OrderStatusProps {
  status: OrderStatus
}

const orderStatusMap: Record<OrderStatus, string> = {
  pending: 'Pendente',
  canceled: 'Cancelado',
  processing: 'Em preparo',
  delivering: 'Em entrega',
  delivered: 'Entregue',
}

export function OrderStatus({ status }: OrderStatusProps) {
  return (
    <div className="flex items-center gap-2">
      {status === 'pending' && (
        <span className="size-2 rounded-full bg-slate-400" />
      )}

      {status === 'canceled' && (
        <span className="size-2 rounded-full bg-rose-500" />
      )}

      {status === 'delivered' && (
        <span className="size-2 rounded-full bg-emerald-500" />
      )}

      {['processing', 'delivering'].includes(status) && (
        <span className="size-2 rounded-full bg-amber-500" />
      )}
      <span className="font-medium leading-none text-muted-foreground">
        {orderStatusMap[status]}
      </span>
    </div>
  )
}
