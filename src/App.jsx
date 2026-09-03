import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import Header from "./components/Header";
import Hero from "./pages/Hero";
import Footer from "./components/Footer";

import ServicePricingList from "./pages/Service";

function App() {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <ErrorBoundary>
        <BrowserRouter>
          {/* <Header onSignIn={() => setShowLogin(true)} /> */}
          
          <Routes>
             <Route
              path="/" element={<Hero />} />
              
                 <Route path="/services" element={<ServicePricingList />} />
                      
</Routes>
            {/* {showLogin ? (
                      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
                        <Login closeLogin={() => setShowLogin(false)} />
                      </div>
                    ): 
                  //  <Home />
                  } */}
            {/* </div> */}

            {/* </> */}
            {/* } */}
            {/* /> */}
            
          {/* <Footer /> */}
        </BrowserRouter>
      </ErrorBoundary>
    </div>
  );
}

export default App;
