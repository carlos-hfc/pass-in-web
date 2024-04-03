import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
  MoreHorizontalIcon,
  SearchIcon,
} from "lucide-react"
import { useState } from "react"

import { attendees } from "../data/attendees"
import { IconButton } from "./icon-button"
import { Table } from "./table/table"
import { TableCell } from "./table/table-cell"
import { TableHeader } from "./table/table-header"
import { TableRow } from "./table/table-row"

export function AttendeeList() {
  const [search, setSearch] = useState("")
  const [page, setPage] = useState(1)

  const totalPages = Math.ceil(attendees.length / 10)
  const itemsPerPage = attendees.slice((page - 1) * 10, page * 10).length

  function goToFirstPage() {
    setPage(1)
  }

  function goToLastPage() {
    setPage(totalPages)
  }

  function goToPreviousPage() {
    setPage(prev => prev - 1)
  }

  function goToNextPage() {
    setPage(prev => prev + 1)
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className="flex w-72 items-center gap-3 rounded-lg border border-white/10 px-3 py-1.5 text-sm">
          <SearchIcon className="size-4 text-teal-200" />
          <input
            type="text"
            placeholder="Buscar participante..."
            className="h-auto flex-1 border-0 bg-transparent p-0 text-sm focus:outline-none focus:ring-0"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
      </div>

      <Table>
        <thead>
          <TableRow>
            <TableHeader style={{ width: 48 }}>
              <input
                type="checkbox"
                className="size-4 rounded border border-white/10 bg-black/20"
              />
            </TableHeader>
            <TableHeader>Código</TableHeader>
            <TableHeader>Participante</TableHeader>
            <TableHeader>Data de inscrição</TableHeader>
            <TableHeader>Data do check-in</TableHeader>
            <TableHeader style={{ width: 64 }} />
          </TableRow>
        </thead>

        <tbody>
          {attendees.slice((page - 1) * 10, page * 10).map(attendee => (
            <TableRow
              key={attendee.id}
              className="hover:bg-white/5"
            >
              <TableCell>
                <input
                  type="checkbox"
                  className="size-4 rounded border border-white/10 bg-black/20"
                />
              </TableCell>
              <TableCell>{attendee.id}</TableCell>
              <TableCell>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-white">
                    {attendee.name}
                  </span>
                  <span>{attendee.email}</span>
                </div>
              </TableCell>
              <TableCell>
                {formatDistanceToNow(attendee.createdAt, {
                  addSuffix: true,
                  locale: ptBR,
                })}
              </TableCell>
              <TableCell>
                {formatDistanceToNow(attendee.checkedInAt, {
                  addSuffix: true,
                  locale: ptBR,
                })}
              </TableCell>
              <TableCell>
                <IconButton transparent>
                  <MoreHorizontalIcon className="size-4" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </tbody>

        <tfoot>
          <tr>
            <TableCell colSpan={3}>
              Mostrando {itemsPerPage} de {attendees.length} itens
            </TableCell>
            <TableCell
              colSpan={3}
              className="text-right"
            >
              <div className="flex items-center justify-end gap-8">
                <span>
                  Página {page} de {totalPages}
                </span>

                <div className="flex gap-1.5">
                  <IconButton
                    disabled={page === 1}
                    onClick={goToFirstPage}
                    aria-label="Primeira página"
                    title="Primeira página"
                  >
                    <ChevronsLeftIcon className="size-4" />
                  </IconButton>
                  <IconButton
                    disabled={page === 1}
                    onClick={goToPreviousPage}
                    aria-label="Página anterior"
                    title="Página anterior"
                  >
                    <ChevronLeftIcon className="size-4" />
                  </IconButton>
                  <IconButton
                    disabled={page === totalPages}
                    onClick={goToNextPage}
                    aria-label="Próxima página"
                    title="Próxima página"
                  >
                    <ChevronRightIcon className="size-4" />
                  </IconButton>
                  <IconButton
                    disabled={page === totalPages}
                    onClick={goToLastPage}
                    aria-label="Última página"
                    title="Última página"
                  >
                    <ChevronsRightIcon className="size-4" />
                  </IconButton>
                </div>
              </div>
            </TableCell>
          </tr>
        </tfoot>
      </Table>
    </div>
  )
}
