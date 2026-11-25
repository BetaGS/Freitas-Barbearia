import { barbershop, services } from '../../data/barbershopData'
import './Services.css'

export default function Services() {
  return (
    <section id="servicos" className="section services">
      <div className="container">
        <h2 className="section-title">Serviços</h2>
        <p className="section-lead">O que fazemos na cadeira. Chame no WhatsApp para saber os valores.</p>
        <ul className="menu">
          {services.map((s) => (
            <li key={s.id} className={`menu__item ${s.featured ? 'is-featured' : ''}`}>
              {s.featured && <span className="menu__badge">Mais pedido</span>}
              <h3>{s.name}</h3>
              <p>{s.description}</p>
            </li>
          ))}
        </ul>
        <a href={barbershop.bookingUrl} target="_blank" rel="noreferrer" className="btn btn-gold services__cta">Agendar horário</a>
      </div>
    </section>
  )
}
