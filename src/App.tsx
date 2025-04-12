// src/App.tsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import { Dashboard } from "./pages/Dashboard";
import { AuthPage } from "./pages/Auth";
import LeadGenerator from "./pages/LeadGenerator";
import Footer from "./components/Footer";
import Home from "./pages/Home"; // ✅ Import Home Page
import About from "./pages/About";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";

const App = () => {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Home Page */}
        <Route path="/" element={<Home />} />

        {/* Auth Page */}
        <Route
          path="/auth"
          element={user ? <Navigate to="/dashboard" /> : <AuthPage />}
        />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={user ? <Dashboard /> : <Navigate to="/auth" />}
        />
        <Route
          path="/leads"
          element={user ? <LeadGenerator /> : <Navigate to="/auth" />}
        />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />}/>
        <Route path="/pricing" element={<Pricing />}/>
      </Routes>


      <Footer />
    </BrowserRouter>
  );
};

export default App;
