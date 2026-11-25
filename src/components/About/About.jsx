import { Sparkles, Clock, Snowflake, Scissors } from 'lucide-react'
import { about } from '../../data/barbershopData'
import './About.css'

const icons = { sparkles: Sparkles, clock: Clock, snowflake: Snowflake, scissors: Scissors }

export default function About() {
  return (
    <section id="sobre" className="section about">
      <div className="container">
        <h2 className="section-title">{about.title}</h2>
        <p className="section-lead">{about.text}</p>
        <ul className="about__grid">
          {about.items.map((item) => {
            const Icon = icons[item.icon]
            return (
              <li key={item.title} className="about__item">
                <Icon size={28} color="var(--gold)" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
