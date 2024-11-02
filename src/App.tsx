import {Route, Routes} from "react-router-dom";
import './App.css'
import HomePage from "./pages/HomePage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import Navbar from "@/components/navbar/navbar.tsx";
import Footer from "@/components/footer/footer.tsx";

function App() {

  return (
      <>
        <Navbar />
        <Routes>
          <Route path={'/'} element={<HomePage />} />
          <Route path={'/contact'} element={<ContactPage />} />
        </Routes>
        <Footer />
      </>
  )
}

export default App
