import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Greeting from './Greeting'
import StyledWordPage from './StyledWordPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:number" element={<About />} />
        <Route path="/greeting/:greeting" element={<Greeting />} />
        <Route path="/color/:word/:color1/:color2" element={<StyledWordPage />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App;