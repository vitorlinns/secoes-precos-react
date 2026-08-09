import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { SectionPage } from './pages/SectionPage'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/secoes/:sectionId" element={<SectionPage />} />
      </Routes>
    </>
  )
}

export default App
