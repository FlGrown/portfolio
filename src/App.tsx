import { Route, Routes } from "react-router";
import { Footer, Header } from "./components";
import { AboutPage, CaseStudiesPage, NotFoundPage } from "./pages";
import shared from "./index.module.scss";

function App() {
  return (
    <div className={shared.app}>
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
