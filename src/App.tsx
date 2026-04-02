import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header/Header";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import Home from "./pages/Home/Home";
import Events from "./pages/Events/Events";
import EventDetails from "./pages/Events/EventDetails";
import Gallery from "./pages/Gallery/Gallery";
import Donate from "./pages/Donate/Donate";
import BankDetails from "./pages/BankDetails/BankDetails";
import "./App.css";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="app">
        <ScrollToTop />
        <Header />
        <ProgressBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:eventId" element={<EventDetails />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/bank-details" element={<BankDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
