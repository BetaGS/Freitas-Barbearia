import { MapPin } from 'lucide-react'
import { barbershop } from '../../data/barbershopData'
import './Location.css'

export default function Location() {
  const { address, hours } = barbershop
  return (
    <section id="localizacao" className="section">
      <div className="container">
        <h2 className="section-title">Localização e horários</h2>
        <div className="location">
          <div className="location__info">
            <h3>Endereço</h3>
            <address>
              {address.street} - {address.district}<br />
              {address.city}, CEP {address.zip}
            </address>
            <a href={barbershop.mapsUrl} target="_blank" rel="noreferrer" className="btn btn-gold">
              <MapPin size={20} /> Abrir no Google Maps
            </a>
            <h3>Horário de atendimento</h3>
            <ul className="location__hours">
              {hours.map((h) => (
                <li key={h.days}><span>{h.days}</span><strong>{h.time}</strong></li>
              ))}
            </ul>
          </div>
          <iframe className="location__map" title="Mapa da Freitas Barbearia" src={barbershop.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </div>
    </section>
  )
}
