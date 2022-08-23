import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'

import EditHeroForm from '../components/EditHeroForm'

const Hero = () => {
  const [heroes, setHeroes] = useState([])

  useEffect(() => {
    fetchHeroes()
  }, [])

  const fetchHeroes = async () => {
    const request = await fetch(`http://localhost:5000/heroes`)
    const response = await request.json()
    setHeroes(response)
  }

  return (
    <div className='container'>
      <h1>Heroes</h1>
      <ul>
        {heroes.map(hero => (
          <li>
            <Link to={`/${hero.slug}`}>{hero.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Hero
