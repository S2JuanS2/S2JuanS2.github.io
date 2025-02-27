import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ThinksPick from "./pages/ThinksPick";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Mant from "./pages/Mant";
import { useEffect, useState } from "react";
import Loading from "./pages/Loading";

function App() {
  const [serverStatus, setServerStatus] = useState(null);

  useEffect(() => {
    const checkServer = async () => {
      try {
        const response = await fetch("https://squad9-2024-2c.onrender.com/api/projects");
        setServerStatus(response.ok);
      } catch (error) {
        setServerStatus(false);
      }
    };

    checkServer();
    const interval = setInterval(checkServer, 60000);
    return () => clearInterval(interval);
  }, []);

  if (serverStatus === null) {
    return <Loading></Loading>;
  }

  return (
    <Router>
      <Routes>
        {serverStatus ? (
          <>
            <Route path="/thinks-pick" element={<ThinksPick />} />
            <Route path="/thinks-pick/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </>
        ) : (
          <Route path="*" element={<Mant />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
