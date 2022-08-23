import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import EditHeroForm from '../components/EditHeroForm'

const Hero = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [hero, setHero] = useState(null)

  useEffect(() => {
    fetchHero()
  }, [slug])

  const fetchHero = async () => {
    const request = await fetch(`http://localhost:5000/heroes/${slug}`)
    const response = await request.json()

    if (request.status === 404) {
      navigate('/not-found')
    } else {
      setHero(response)
    }
  }

  const handleDeleteClick = async () => {
    const request = await fetch(`http://localhost:5000/heroes/${slug}`, {
      method: 'DELETE'
    })

    navigate('/')
  }

  const handlePowerDeleteClick = async power => {
    const request = await fetch(
      `http://localhost:5000/heroes/${slug}/powers/${power}`,
      { method: 'DELETE' }
    )

    fetchHero()
  }

  if (!hero) {
    return <p>Loading...</p>
  }

  return (
    <div className='container'>
      <h1>{hero.name}</h1>
      <button className='btn btn-danger' onClick={handleDeleteClick}>
        Supprimer
      </button>
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
          <li>
            {p}
            <button
              className='btn btn-danger'
              onClick={() => handlePowerDeleteClick(p)}
            >
              Supprimer
            </button>
          </li>
        ))}
      </ul>
      <EditHeroForm hero={hero} />
    </div>
  )
}

export default Hero
