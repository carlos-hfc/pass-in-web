import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
  MoreHorizontalIcon,
  SearchIcon,
} from "lucide-react"

import { IconButton } from "./icon-button"

export function AttendeeList() {
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
          />
        </div>
      </div>

      <div className="rounded-lg border border-white/10">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th
                className="px-4 py-3 text-left text-sm font-semibold"
                style={{ width: 48 }}
              >
                <input
                  type="checkbox"
                  className="size-4 rounded border border-white/10 bg-black/20"
                />
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                Código
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                Participante
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                Data de inscrição
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                Data do check-in
              </th>
              <th
                className="px-4 py-3 text-left text-sm font-semibold"
                style={{ width: 64 }}
              />
            </tr>
          </thead>

          <tbody>
            {Array.from({ length: 8 }).map((_, i) => (
              <tr
                key={i}
                className="border-b border-white/10 hover:bg-white/5"
              >
                <td className="px-4 py-3 text-sm text-zinc-300">
                  <input
                    type="checkbox"
                    className="size-4 rounded border border-white/10 bg-black/20"
                  />
                </td>
                <td className="px-4 py-3 text-sm text-zinc-300">1234</td>
                <td className="px-4 py-3 text-sm text-zinc-300">
                  <div className="flex flex-col gap-1 ">
                    <span className="font-semibold text-white">
                      Carlos Faustino
                    </span>
                    <span>carlos@email.com</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm text-zinc-300">
                  7 dias atrás
                </td>
                <td className="px-4 py-3 text-sm text-zinc-300">
                  2 dias atrás
                </td>
                <td className="px-4 py-3 text-sm text-zinc-300">
                  <IconButton transparent>
                    <MoreHorizontalIcon className="size-4" />
                  </IconButton>
                </td>
              </tr>
            ))}
          </tbody>

          <tfoot>
            <tr>
              <td
                className="px-4 py-3 text-sm text-zinc-300"
                colSpan={3}
              >
                Mostrando 10 de 228 itens
              </td>
              <td
                className="px-4 py-3 text-right text-sm text-zinc-300"
                colSpan={3}
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
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}
