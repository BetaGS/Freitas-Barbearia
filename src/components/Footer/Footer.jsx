import { Instagram, MessageCircle } from 'lucide-react'
import { barbershop, nav } from '../../data/barbershopData'
import './Footer.css'

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__inner">
          <div>
            <p className="footer__logo">{barbershop.name.toUpperCase()}</p>
            <p className="footer__muted">{barbershop.slogan}</p>
          </div>
          <ul className="footer__links">
            {nav.map((n) => <li key={n.href}><a href={n.href}>{n.label}</a></li>)}
          </ul>
          <a href={barbershop.instagramUrl} target="_blank" rel="noreferrer" className="footer__ig">
            <Instagram size={20} /> {barbershop.instagramHandle}
          </a>
        </div>
        <p className="footer__copy">© {new Date().getFullYear()} {barbershop.name}. Todos os direitos reservados.</p>
      </footer>
      <a href={barbershop.bookingUrl} target="_blank" rel="noreferrer" className="whats" aria-label="Chamar no WhatsApp">
        <MessageCircle size={28} />
      </a>
    </>
  )
}
