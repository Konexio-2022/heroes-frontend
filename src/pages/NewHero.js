import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NewHero = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [power, setPower] = useState('')
  const [age, setAge] = useState('')
  const [color, setColor] = useState('')
  const [isAlive, setIsAlive] = useState(false)
  const [error, setError] = useState('')

  const handleNameChange = e => {
    setName(e.target.value)
  }

  const handleImageChange = e => {
    setImage(e.target.value)
  }

  const handlePowerChange = e => {
    setPower(e.target.value)
  }

  const handleAgeChange = e => {
    setAge(e.target.value)
  }

  const handleColorChange = e => {
    setColor(e.target.value)
  }

  const handleIsAliveChange = e => {
    setIsAlive(e.target.checked)
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const body = {
      name,
      color,
      age,
      power: power.split(','),
      image,
      isAlive
    }

    const request = await fetch('http://localhost:5000/heroes', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify(body)
    })

    if (request.status === 400) {
      setError(request.statusText)
    } else {
      const response = await request.json()
      navigate(`/${response.slug}`)
    }
  }

  return (
    <div className='container'>
      <h1>New hero</h1>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='name' className='form-label'>
            Name
          </label>
          <input
            type='text'
            className='form-control'
            id='name'
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='image' className='form-label'>
            Image
          </label>
          <input
            type='text'
            className='form-control'
            id='image'
            value={image}
            onChange={handleImageChange}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='power' className='form-label'>
            Power
          </label>
          <input
            type='text'
            className='form-control'
            id='power'
            value={power}
            onChange={handlePowerChange}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='age' className='form-label'>
            Age
          </label>
          <input
            type='number'
            className='form-control'
            id='age'
            value={age}
            onChange={handleAgeChange}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='color' className='form-label'>
            Color
          </label>
          <input
            type='text'
            id='color'
            className='form-control'
            value={color}
            onChange={handleColorChange}
          />
        </div>
        <div className='mb-3 form-check'>
          <input
            type='checkbox'
            className='form-check-input'
            id='isAlive'
            checked={isAlive}
            onChange={handleIsAliveChange}
          />
          <label className='form-check-label' htmlFor='isAlive'>
            IsAlive
          </label>
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
        {error && (
          <div className='alert alert-danger mt-3' role='alert'>
            {error}
          </div>
        )}
      </form>
    </div>
  )
}

export default NewHero
