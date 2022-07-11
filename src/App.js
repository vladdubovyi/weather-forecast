import "./Styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DayPage from "./Pages/DayPage";
import FiveDayPage from "./Pages/FiveDayPage";
import NotFound from "./Pages/NotFound";
import NavMenu from "./Components/UI/NavMenu/NavMenu";
import searchIcon from "./Images/searchIcon.png";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Router>
          <NavMenu icon={searchIcon} />
          <Routes>
            <Route path="/Day/:name" element={<DayPage />} />
            <Route path="/5Day/:name" element={<FiveDayPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </HelmetProvider>
  );
}

export default App;
