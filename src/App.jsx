import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Gallery from './components/Gallery/Gallery'
import About from './components/About/About'
import Location from './components/Location/Location'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <About />
        <Location />
      </main>
      <Footer />
    </>
  )
}
