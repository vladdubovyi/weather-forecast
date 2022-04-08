import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DayPage from "./Pages/DayPage";
import SevenDayPage from "./Pages/SevenDayPage";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/:name" element={<DayPage />} />
          <Route path="/7Day/:name" element={<SevenDayPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
