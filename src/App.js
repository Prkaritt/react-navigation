import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import ErrorPage from './pages/ErrorPage';
function App() {
  return (
    //The app.js wont have anything other than the routes defined.
    //In react router v6, the hook useHistory does not exist anymore.
    //useNavigate is the replacement for useHistory and is much simpler
    <Router>
      <nav>
        <Link to = "/">Home</Link>
        <Link to = "/about">About</Link>
        <Link to = "/profile">Profile</Link>
        {/* Whatever we want in the page is placed here.*/}
      </nav>
      <Routes>
        {/* The way the routes are to be handled in placed here. */}
        {/* Routes defines where in the routing system we want the routes */}
        <Route path="/" element = {<Home/>} />
        <Route path="/about" element = {<About/>} />
        <Route path="/profile" element = {<Profile/>} />
        <Route path="/profile/:username" element = {<Profile/>} />
        <Route path="*" element = {<ErrorPage/>} />
      </Routes>
      <div>
        Footer
      </div>
    </Router>
  );
}

export default App;
