import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThinksPick from "./pages/ThinksPick";
import NotFound from "./pages/NotFound";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/thinks-pick" element={<ThinksPick />} />
        <Route path="/thinks-pick/about" element={<About />}/>q
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
