import { BrowserRouter as Router,Route} from 'react-router-dom';
import Topnav from './components/Topnav';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import Home from './components/Home';
import About from './components/About';
import Inplay from './components/Inplay';
import Winlist from './components/Winlist';
import Contact from './components/Contact';
import Signup from './components/Signup';
import Login from './components/Login';
import Upcomming from './components/Upcoming';
import Promotion from './components/Promotion';
import Faq from './components/Faq';
import Privacy from './components/Privacy';
import Terms  from './components/Terms';
import News from './components/News';
import Details from './components/Details';
import Morebet from './components/Morebet';
import Games from './components/Games';

function Routes() {
  return (
    <div className="App">
      <Router>
      <Preloader />
      <Topnav />
      <Route path="/" exact><Home /></Route>
      <Route path="/about" ><About /></Route>
      <Route path="/inplay" ><Inplay /></Route>
      <Route path="/winlist"><Winlist /></Route>
      <Route path="/contact"><Contact /></Route>
      <Route path="/register"><Signup /></Route>
      <Route path="/login"><Login /></Route>
      <Route path="/upcoming"><Upcomming /></Route>
      <Route path="/promotion"><Promotion /></Route>
      <Route path="/faq"><Faq /></Route>
      <Route path="/privacy"><Privacy /></Route>
      <Route path="/terms"><Terms /></Route>
      <Route path='/news'><News /></Route>
      <Route path="/details"><Details /></Route>
      <Route path="/morebet"><Morebet /></Route>
      <Route path="/games"><Games /></Route>
      <Footer />
      </Router>
    </div>
  );
}

export default Routes;
