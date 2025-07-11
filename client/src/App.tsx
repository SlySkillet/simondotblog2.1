import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Layout, NewToMe, Projects } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/new-to-me" element={<NewToMe />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
