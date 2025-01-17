import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'

import { Button } from './ui/button'

interface PaginationProps {
  pageIndex: number
  perPage: number
  totalCount: number
  onPageChange: (pageIndex: number) => Promise<void> | void
}

export function Pagination({
  pageIndex,
  perPage,
  totalCount,
  onPageChange,
}: PaginationProps) {
  const totalPages = Math.ceil(totalCount / perPage) || 1

  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">
        Total de {totalCount} registro(s)
      </span>

      <div className="flex items-center gap-6 lg:gap-8">
        <span className="text-sm font-medium">
          Página {pageIndex + 1} de {totalPages}
        </span>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="size-8 p-0"
            onClick={() => onPageChange(0)}
            disabled={pageIndex === 0}
          >
            <ChevronsLeft className="size-4" />
            <span className="sr-only">Primeira página</span>
          </Button>

          <Button
            variant="outline"
            className="size-8 p-0"
            onClick={() => onPageChange(pageIndex - 1)}
            disabled={pageIndex === 0}
          >
            <ChevronLeft className="size-4" />
            <span className="sr-only">Página anterior</span>
          </Button>

          <Button
            variant="outline"
            className="size-8 p-0"
            onClick={() => onPageChange(pageIndex + 1)}
            disabled={totalPages <= pageIndex + 1}
          >
            <ChevronRight className="size-4" />
            <span className="sr-only">Próxima página</span>
          </Button>

          <Button
            variant="outline"
            className="size-8 p-0"
            onClick={() => onPageChange(totalPages - 1)}
            disabled={totalPages <= pageIndex + 1}
          >
            <ChevronsRight className="size-4" />
            <span className="sr-only">Última página</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
