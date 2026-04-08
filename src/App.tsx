import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MarketingLayout from './components/marketing/MarketingLayout';
import Home from './pages/Home';
import Features from './pages/Features';
import Solutions from './pages/Solutions';
import Industries from './pages/Industries';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import IndustryDetail from './pages/IndustryDetail';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MarketingLayout />}>
          <Route index element={<Home />} />
          <Route path="features" element={<Features />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="industries" element={<Industries />} />
          <Route path="industries/:slug" element={<IndustryDetail />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
