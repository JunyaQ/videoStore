import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes ,Route, BrowserRouter } from "react-router-dom";
import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer';
import MainPage from './pages/MainPage/MainPage';
import MoviePage from './pages/MoviePage/MoviePage';
import TvPage from './pages/TvPage/TvPage';
import FreePage from './pages/FreePage/FreePage';
import LoginSignupPage from './pages/LoginSignupPage/LoginSignupPage';
import DetailPage from './pages/DetailPage/DetailPage';
//temp test
import Login from './components/Login';
// coming soon
import Comingsoon from './pages/Comingsoon/Comingsoon';


function App() {
  return (
    <div className="App">
      <header>
      <Navigation/>
      </header>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<MainPage/>}></Route>
      <Route path='/movies' element={<MoviePage/>}></Route>
      <Route path='/tvs' element={<TvPage/>}></Route>
      <Route path='/free' element={<FreePage/>}></Route>
      <Route path='/loginSignup' element={<LoginSignupPage/>}></Route>
      <Route path="/movie/:id" element={<DetailPage type="movies"/>} ></Route>
      <Route path='/comingsoon' element={<Comingsoon/>}></Route>

      {/* <Route path='/login' element={<Login/>}></Route> */}
      </Routes>
      </BrowserRouter>

      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
