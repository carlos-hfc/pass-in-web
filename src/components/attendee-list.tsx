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
import { ChangeEvent, useEffect, useState } from "react"

import { IconButton } from "./icon-button"
import { Table } from "./table/table"
import { TableCell } from "./table/table-cell"
import { TableHeader } from "./table/table-header"
import { TableRow } from "./table/table-row"

interface Attendee {
  id: number
  name: string
  email: string
  createdAt: string
  checkedInAt: string | null
}

export function AttendeeList() {
  const [search, setSearch] = useState(() => {
    const url = new URL(window.location.toString())

    if (url.searchParams.has("search")) {
      return url.searchParams.get("search") ?? ""
    }

    return ""
  })
  const [page, setPage] = useState(() => {
    const url = new URL(window.location.toString())

    if (url.searchParams.has("page")) {
      return Number(url.searchParams.get("page"))
    }

    return 1
  })
  const [attendees, setAttendees] = useState<Attendee[]>([])
  const [total, setTotal] = useState(0)

  const totalPages = Math.ceil(total / 10)
  const itemsPerPage = attendees.length

  useEffect(() => {
    const url = new URL(
      "http://localhost:3333/events/41c71d1e-cd4d-47f9-8391-bc9d5e5141b1/attendees",
    )

    url.searchParams.set("pageIndex", String(page - 1))
    if (search) url.searchParams.set("query", search)

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setAttendees(data.attendees)
        setTotal(data.total)
      })
  }, [page, search])

  function setCurrentSearch(search: string) {
    const url = new URL(window.location.toString())

    url.searchParams.set("search", search)

    setSearch(search)
    window.history.pushState({}, "", url)
  }

  function setCurrentPage(page: number) {
    const url = new URL(window.location.toString())

    url.searchParams.set("page", String(page))

    setPage(page)
    window.history.pushState({}, "", url)
  }

  function goToFirstPage() {
    setCurrentPage(1)
  }

  function goToLastPage() {
    setCurrentPage(totalPages)
  }

  function goToPreviousPage() {
    setCurrentPage(page - 1)
  }

  function goToNextPage() {
    setCurrentPage(page + 1)
  }

  function handleSearchInputChange(event: ChangeEvent<HTMLInputElement>) {
    setCurrentSearch(event.target.value)
    goToFirstPage()
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
            onChange={handleSearchInputChange}
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
          {attendees.map(attendee => (
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
                {formatDistanceToNow(new Date(attendee.createdAt), {
                  addSuffix: true,
                  locale: ptBR,
                })}
              </TableCell>
              <TableCell>
                {attendee.checkedInAt ? (
                  formatDistanceToNow(new Date(attendee.checkedInAt), {
                    addSuffix: true,
                    locale: ptBR,
                  })
                ) : (
                  <span className="text-zinc-400">Não fez check-in</span>
                )}
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
              Mostrando {itemsPerPage} de {total} itens
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
