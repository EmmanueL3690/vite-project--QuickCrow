import Header from './Header.jsx';
import Hero from './Hero.jsx';
import CategorySlider from './CategorySlider.jsx';
import FeatureCards from './Feature.jsx';
import RestaurantCards from './RestarantCard.jsx';
import NewRestaurants from './NewRestaurants.jsx';
import BackToTop from './BackToTop';
import Footer from './Footer';


import './index.css';
import './CategorySlider.css';
import './Feature.css';
import './BackToTop.css';
import './Footer.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <CategorySlider />
      <RestaurantCards />
      <FeatureCards />
      <NewRestaurants />
      <BackToTop />
      <Footer />
    </div>
  );
}


export default App;

