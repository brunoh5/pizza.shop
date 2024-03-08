import { Home, Pizza, UtensilsCrossed } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Separator } from './ui/separator'

export function Header() {
  return (
    <div className="border-b ">
      <div className="flex h-16 items-center gap-6 px-6">
        <Pizza className="size-6" />

        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <Link to="/">
            <Home className="size-4" />
            Inicio
          </Link>

          <Link to="/orders">
            <UtensilsCrossed className="size-4" />
            Pedidos
          </Link>
        </nav>
      </div>
    </div>
  )
}
