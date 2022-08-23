import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Heroes from './pages/Heroes'
import Hero from './pages/Hero'
import NewHero from './pages/NewHero'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Heroes />} />
        <Route path='/:slug' element={<Hero />} />
        <Route path='/new-hero' element={<NewHero />} />
        <Route path='/not-found' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
