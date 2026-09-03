import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Header from "./components/Header";
import Hero from "./pages/Hero";
import Footer from "./components/Footer";

import ServicePricingList from "./pages/Service";

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <ErrorBoundary>
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/" element={<Hero />} />

            <Route path="/services" element={<ServicePricingList />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </ErrorBoundary>
    </div>
  );
}

export default App;
