import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
  MoreHorizontalIcon,
  SearchIcon,
} from "lucide-react"
import { useState } from "react"

import { IconButton } from "./icon-button"
import { Table } from "./table/table"
import { TableCell } from "./table/table-cell"
import { TableHeader } from "./table/table-header"
import { TableRow } from "./table/table-row"

export function AttendeeList() {
  const [search, setSearch] = useState("")

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className="flex w-72 items-center gap-3 rounded-lg border border-white/10 px-3 py-1.5 text-sm">
          <SearchIcon className="size-4 text-teal-200" />
          <input
            type="text"
            placeholder="Buscar participante..."
            className="h-auto flex-1 border-0 bg-transparent p-0 text-sm outline-none"
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
          {Array.from({ length: 8 }).map((_, i) => (
            <TableRow
              key={i}
              className="hover:bg-white/5"
            >
              <TableCell>
                <input
                  type="checkbox"
                  className="size-4 rounded border border-white/10 bg-black/20"
                />
              </TableCell>
              <TableCell>1234</TableCell>
              <TableCell>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-white">
                    Carlos Faustino
                  </span>
                  <span>carlos@email.com</span>
                </div>
              </TableCell>
              <TableCell>7 dias atrás</TableCell>
              <TableCell>2 dias atrás</TableCell>
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
            <TableCell colSpan={3}>Mostrando 10 de 228 itens</TableCell>
            <TableCell
              colSpan={3}
              className="text-right"
            >
              <div className="flex items-center justify-end gap-8">
                <span>Página 1 de 23</span>

                <div className="flex gap-1.5">
                  <IconButton>
                    <ChevronsLeftIcon className="size-4" />
                  </IconButton>
                  <IconButton>
                    <ChevronLeftIcon className="size-4" />
                  </IconButton>
                  <IconButton>
                    <ChevronRightIcon className="size-4" />
                  </IconButton>
                  <IconButton>
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
