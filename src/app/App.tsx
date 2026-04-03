import Header from './components/Header';
import Hero from './components/Hero';
import LogoSection from './components/LogoSection';
import DashboardPreview from './components/DashboardPreview';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import WhyUsSection from './components/WhyUsSection';
import TestimonialsSection from './components/TestimonialsSection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen" style={{ scrollBehavior: 'smooth' }}>
      <Header />
      <Hero />
      <LogoSection />
      <DashboardPreview />
      <ProblemSection />
      <SolutionSection />
      <WhyUsSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </div>
  );
}