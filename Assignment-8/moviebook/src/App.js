import AboutMovie from "./Components/AboutMovie";
import BookingForm from "./Components/BookingForm";
import Home from "./Components/Home";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route element={ <Home/>} path='/' />
          <Route element={ <AboutMovie/>} path='/aboutmovie/:id' />
          <Route element={ <BookingForm/>} path='/bookmovie/:Title' />

        </Routes>
      </HashRouter>
    </>
  );
}

export default App;

//http://www.omdbapi.com/?apikey=610e72a2&s=movie
