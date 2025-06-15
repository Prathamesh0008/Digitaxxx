import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { FormProvider, useForm } from './components/FormContext/FormContext';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer/Footer';

import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import ContactUs from './components/Contact-us/ContactUs';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';
import About from './pages/About';
import BrandPromotion from './pages/BrandPromotion';
import ServiceSeo from './pages/ServiceSeo';
import Smm from './pages/Smm';
import ServiceDigital from './pages/ServiceDigital';
import StickyContactButton from './components/StickyContactButton/StickyContactButton';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';
import BookNowModal from './components/BookNowModal/BookNowModal';

function AppContent() {
  const { isFormOpen, closeForm, openForm } = useForm();

  return (
    <div className="App">
      <Navbar />

      {/* ✅ Render BookNowModal if open */}
      {/* {isFormOpen && <BookNowModal onClose={closeForm} />} */}

      <ScrollToTop />
      <WhatsAppButton onClick={openForm} />
      <ScrollToTopButton />
      <StickyContactButton onClick={openForm} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/brand-promo" element={<BrandPromotion />} />
        <Route path="/service-Seo" element={<ServiceSeo />} />
        <Route path="/services/service-smm" element={<Smm />} />
        <Route path="/service/service-digital" element={<ServiceDigital />} />
      </Routes>
<BookNowModal/>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <FormProvider>
      <Router>
        <AppContent />
      </Router>
    </FormProvider>
  );
}

export default App;
