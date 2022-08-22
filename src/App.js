import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Hero from './pages/Hero'
import NewHero from './pages/NewHero'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/:slug' element={<Hero />} />
        <Route path='/new-hero' element={<NewHero />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
