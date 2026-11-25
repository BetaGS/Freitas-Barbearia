import { Instagram } from 'lucide-react'
import { barbershop, gallery, galleryCta } from '../../data/barbershopData'
import './Gallery.css'

export default function Gallery() {
  return (
    <section id="cortes" className="section">
      <div className="container">
        <h2 className="section-title">Cortes</h2>
        <p className="section-lead">Alguns dos estilos que saem da cadeira da Freitas.</p>
        <ul className="gallery">
          {gallery.map((g) => (
            <li key={g.id} className="gallery__item">
              {g.image && <img src={g.image} alt={`Corte ${g.label}`} loading="lazy" />}
              <span className="gallery__label">{g.label}</span>
            </li>
          ))}
        </ul>
        <a href={barbershop.instagramUrl} target="_blank" rel="noreferrer" className="btn btn-outline gallery__cta">
          <Instagram size={20} /> {galleryCta}
        </a>
      </div>
    </section>
  )
}
