import React from "react"
import GlobalStyle from "./assets/styles/globalStyle"
import { ToastContainer } from "react-toastify"
import Header from "./components/header"
import Footer from "./components/footer"
import Home from "./pages/home"

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
        <main className="content">
          <Home />
        </main>
        <Footer />
      </div>
      <ToastContainer />
    </>
  )
}

export default App
