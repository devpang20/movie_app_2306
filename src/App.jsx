import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Movie from "./Pages/Movie"
import Header from "./Components/Header"
import MovieList from "./Pages/MovieList"
import MovieDetail from "./Pages/MovieDetail"

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="movie/:id" element={< MovieDetail />} />
        <Route path="movies/:type" element={< MovieList />} />  
        <Route path="movie" element={<Movie />} />
        <Route path="/" element={<h1>Error Page</h1>} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
