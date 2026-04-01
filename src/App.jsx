import { Routes, Route } from "react-router"
import { Footer, Header } from "./components"
import { AboutPage, CaseStudiesPage } from "./pages"
import './App.css'

function App() {

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<CaseStudiesPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </div>

  )
}

export default App
