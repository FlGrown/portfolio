import { Route, Routes } from "react-router";
import { Footer, Header } from "./components";
import { AboutPage, CaseStudiesPage, NotFoundPage } from "./pages";
import "./App.module.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<CaseStudiesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
