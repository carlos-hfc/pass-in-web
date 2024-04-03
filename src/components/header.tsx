import nlwUniteIcon from "../assets/nlw-unite-icon.svg"

export function Header() {
  return (
    <header className="flex items-center gap-5 py-2">
      <img
        src={nlwUniteIcon}
        alt=""
      />

      <nav className="flex items-center gap-5">
        <a
          href=""
          className="text-sm font-medium text-zinc-200"
        >
          Eventos
        </a>
        <a
          href=""
          className="text-sm font-medium"
        >
          Participantes
        </a>
      </nav>
    </header>
  )
}
