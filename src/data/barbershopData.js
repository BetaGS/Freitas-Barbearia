// Fonte única de textos, preços e links. Edite apenas este arquivo para manter o site.
const whatsappNumber = '5521982051530' // TODO: trocar pelo WhatsApp real (DDI + DDD + número)
const bookingMessage = 'Olá! Quero agendar um horário na Freitas Barbearia.'

export const barbershop = {
  name: 'Freitas Barbearia',
  slogan: 'Estilo que marca.',
  instagramHandle: '@freitasbarbearia1',
  instagramUrl: 'https://www.instagram.com/freitasbarbearia1/',
  bookingUrl: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(bookingMessage)}`,
  address: {
    street: 'Rua Leopoldo, 34',
    district: 'Andaraí',
    city: 'Rio de Janeiro - RJ',
    zip: '20541-170',
  },
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Freitas+Barbearia+Rua+Leopoldo+34+Andara%C3%AD+Rio+de+Janeiro',
  mapsEmbed: 'https://maps.google.com/maps?q=Rua+Leopoldo+34+Andara%C3%AD+Rio+de+Janeiro&output=embed',
  hours: [
    { days: 'Segunda a sexta', time: '09h às 18h' },
    { days: 'Sábado', time: '09h às 17h' },
    { days: 'Domingo', time: 'Fechado' },
  ],
}

export const nav = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Cortes', href: '#cortes' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Localização', href: '#localizacao' },
]

export const hero = {
  title: 'Corte feito com precisão. Estilo que marca.',
  subtitle: 'Degradê, barba e acabamento no Andaraí, com hora marcada e atendimento sem pressa.',
  image: '/img/corte-3.png',
  primaryCta: 'Agendar horário',
  secondaryCta: 'Ver serviços',
}

export const services = [
  { id: 'corte', name: 'Corte degradê / social', description: 'Máquina, tesoura e acabamento na navalha.' },
  { id: 'barba', name: 'Barba terapia / navalhada', description: 'Toalha quente, navalha e hidratação.' },
  { id: 'combo', name: 'Combo: corte + barba', description: 'O pedido mais feito da casa.', featured: true },
  { id: 'sobrancelha', name: 'Sobrancelha / pezinho', description: 'Acabamento para manter o corte alinhado.' },
]

export const gallery = [
  { id: 1, label: 'Degradê com barba', image: '/img/corte-1.png' },
  { id: 2, label: 'Degradê alto', image: '/img/corte-2.png' },
  { id: 3, label: 'Barba alinhada', image: '/img/corte-3.png' },
  { id: 4, label: 'Corte social', image: '/img/corte-4.png' },
]
export const galleryCta = `Ver mais no Instagram (${barbershop.instagramHandle})`

export const about = {
  title: 'Barbearia pequena, atenção grande',
  text: 'Na Freitas Barbearia cada atendimento tem horário marcado e tempo para conversar sobre o corte que combina com você.',
  items: [
    { icon: 'sparkles', title: 'Higiene', text: 'Material esterilizado e toalhas limpas a cada cliente.' },
    { icon: 'clock', title: 'Pontualidade', text: 'Seu horário é respeitado, sem fila de espera.' },
    { icon: 'snowflake', title: 'Ambiente climatizado', text: 'Espaço confortável, com boa resenha.' },
    { icon: 'scissors', title: 'Profissionais qualificados', text: 'Técnica em degradê, navalha e barba.' },
  ],
}
