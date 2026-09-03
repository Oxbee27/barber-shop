import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import SearchDetails from "./pages/Search";
// import Restaurant from "./pages/Restaurant";

function App() {
  const [showLogin, setShowLogin] = useState(true);
   return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <ErrorBoundary>
        <BrowserRouter>
         <Header onSignIn={() => setShowLogin(true)}   />
           <Hero />

          {/* <Routes>
            <Route
              path="/"
              element={
                <>
                  <div className="relative min-h-screen"> */}
                    

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
            {/* <Route path="/search" element={<SearchDetails />} />
            <Route path="/restaurant" element={<Restaurant />} />
          </Routes> */}
          
          <Footer />
        </BrowserRouter>
      </ErrorBoundary>
    </div>
  );
}

export default App;
