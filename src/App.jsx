import ShowMovies from "./Pages/movieList"
import ErrorPage from "./Pages/ErrorPage"
import Summary from './Pages/summary'
// import movieList from './Pages/movieList'
import FormPage from './Pages/FormPage'
import Header from "./Components/Header"
import './App.css'

import { Routes, Route } from "react-router-dom"





function App() {




  return (

    < >

      <Header></Header>
      <Routes >
        <Route path="/" element={<ShowMovies />} />
        <Route path="/movies/:id" element={<Summary />} />
        <Route path="/FormPage" element={<FormPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>


    </>
  )
}

export default App
