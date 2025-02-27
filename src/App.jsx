import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ThinksPick from "./pages/ThinksPick";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
          <Route path="/thinks-pick" element={<ThinksPick />} />
          <Route path="/thinks-pick/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;