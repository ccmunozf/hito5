import { useEffect, useState } from 'react'
import Header from '../components/Header'
import CardPizza from '../components/CardPizza'

function Home() {
  const [pizzas, setPizzas] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    async function loadData() {
      try {
        const response = await fetch('http://localhost:5000/api/pizzas', {
          signal: controller.signal,
        })
        if (!response.ok) throw new Error(`HTTP ${response.status}`)
        const data = await response.json()
        if (!Array.isArray(data)) throw new Error('Respuesta inv?lida')
        setPizzas(data)
      } catch {
        if (!controller.signal.aborted) {
          setError('No pudimos cargar los datos. Comprueba que el backend est? activo en el puerto 5000 y vuelve a abrir esta vista.')
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false)
      }
    }

    loadData()
    return () => controller.abort()
  }, [])

  return (
    <main>
      <Header />
      {loading && <p className="api-message" role="status">Cargando pizzas?</p>}
      {error && <p className="api-message" role="alert">{error}</p>}
      {!loading && !error && pizzas.length === 0 && <p className="api-message" role="status">No hay pizzas disponibles.</p>}
      <section className="pizza-grid" aria-label="Nuestras pizzas">
        {pizzas.map((pizza) => <CardPizza key={pizza.id} {...pizza} />)}
      </section>
    </main>
  )
}

export default Home
