import { barbershop, hero } from '../../data/barbershopData'
import './Hero.css'

export default function Hero() {
  const bg = hero.image ? { backgroundImage: `url(${hero.image})` } : undefined
  return (
    <section id="inicio" className="hero" style={bg}>
      <div className="hero__overlay" />
      <div className="hero__content">
        <p className="hero__brand">{barbershop.name}</p>
        <h1>{hero.title}</h1>
        <p className="hero__sub">{hero.subtitle}</p>
        <div className="hero__actions">
          <a href={barbershop.bookingUrl} target="_blank" rel="noreferrer" className="btn btn-gold">{hero.primaryCta}</a>
          <a href="#servicos" className="btn btn-outline">{hero.secondaryCta}</a>
        </div>
      </div>
    </section>
  )
}
