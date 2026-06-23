import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import PortfolioPage from './pages/PortfolioPage'
import ContactPage from './pages/ContactPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="portfolio" element={<PortfolioPage />} />
        <Route path="contact" element={<ContactPage />} />
        {/* Unknown URLs fall back to Home */}
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}
