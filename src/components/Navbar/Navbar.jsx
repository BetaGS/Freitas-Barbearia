import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { barbershop, nav } from '../../data/barbershopData'
import './Navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <a href="#inicio" className="navbar__logo" onClick={close}>{barbershop.name.toUpperCase()}</a>
        <nav className={`navbar__menu ${open ? 'is-open' : ''}`} aria-label="Principal">
          <ul>
            {nav.map((item) => (
              <li key={item.href}><a href={item.href} onClick={close}>{item.label}</a></li>
            ))}
          </ul>
          <a href={barbershop.bookingUrl} target="_blank" rel="noreferrer" className="btn btn-gold navbar__cta">Agendar horário</a>
        </nav>
        <button className="navbar__toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
    </header>
  )
}
