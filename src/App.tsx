import Home from './pages/home/Home';
import AboutMe from './pages/about-me/AboutMe';
import NavBar from './components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import ContactMe from './pages/contact-me/ContactMe';
import TopButton from './ui-components/TopButton/TopButton';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { useScrollReveal } from './shared/useScrollReveal';

const App = () => {
  // Sections fade in as they are reached. This took the place of the
  // full-screen intro video, which delayed first paint on every visit.
  useScrollReveal();

  return (
    <>
      <ScrollToTop />
      <NavBar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutMe />} />
          <Route path='/contact' element={<ContactMe />} />
        </Routes>
      </main>
      <Footer />
      <TopButton />
    </>
  );
};

export default App;
