import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MarketingLayout from './components/marketing/MarketingLayout';
import Home from './pages/Home';
import Features from './pages/Features';
import Solutions from './pages/Solutions';
import Industries from './pages/Industries';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import IndustryDetail from './pages/IndustryDetail';
import RefundPolicy from './pages/RefundPolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import StartTrial from './pages/StartTrial';
import StartTrialStep2 from './pages/StartTrialStep2';
import StartTrialStep3 from './pages/StartTrialStep3';
import StartTrialStep4 from './pages/StartTrialStep4';
import StartTrialStep5 from './pages/StartTrialStep5';

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
          <Route path="refund-policy" element={<RefundPolicy />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="terms" element={<Terms />} />
        </Route>
        <Route path="start-trial" element={<StartTrial />} />
        <Route path="start-trial/step-2" element={<StartTrialStep2 />} />
        <Route path="start-trial/step-3" element={<StartTrialStep3 />} />
        <Route path="start-trial/step-4" element={<StartTrialStep4 />} />
        <Route path="start-trial/step-5" element={<StartTrialStep5 />} />
      </Routes>
    </BrowserRouter>
  );
}
