import { BrowserRouter,  useNavigate,  Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Header from "./components/Header";
import Hero from "./pages/Hero";
import Footer from "./components/Footer";

import ServicePricingList from "./pages/Service";
import MasterBarber from "./pages/Barber";
import Appointment from "./pages/Appointment";
import LookBook from "./pages/LookBook";
import Ritual from "./pages/Ritual";
import Contact from "./pages/Contact";

function App() {
  
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <ErrorBoundary>
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/" element={<Hero />} />

            <Route path="/services" element={<ServicePricingList />} />
            <Route path="/barbers" element={<MasterBarber onSelectBarber={(barberId) => 
      {
              console.log("selected barber:", barberId)
            navigate(`/appointment/${barberId}`)
      }

            }  />} />

      <Route path="/appointment/:barberId" element={<Appointment />} />
<Route path="/lookbook" element={<LookBook />} />
<Route path="/ritual" element={<Ritual />} />
<Route path="/contact" element={<Contact />} />

          </Routes>
          <Footer />
        </BrowserRouter>
      </ErrorBoundary>
    </div>
  );
}

export default App;
