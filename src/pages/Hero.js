import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Hero = () => {
  const { slug } = useParams()
  const [hero, setHero] = useState(null)

  useEffect(() => {
    fetchHero()
  }, [slug])

  const fetchHero = async () => {
    const request = await fetch(`http://localhost:5000/heroes/${slug}`)
    const response = await request.json()

    setHero(response)
  }

  if (!hero) {
    return <p>Loading...</p>
  }

  return (
    <div className='container'>
      <h1>{hero.name}</h1>
      <ul>
        <li>Age: {hero.age}</li>
        <li>Color: {hero.color}</li>
        <li>IsAlive: {hero.isAlive}</li>
        <li>
          <img src={hero.image} alt={hero.name} />
        </li>
      </ul>
      <h2>Powers</h2>
      <ul>
        {hero.power.map(p => (
          <li>{p}</li>
        ))}
      </ul>
    </div>
  )
}

export default Hero
