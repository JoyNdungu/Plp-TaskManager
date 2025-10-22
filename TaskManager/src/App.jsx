import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import TaskManager from "./pages/TaskManager";
import ApiListPage from "./pages/ApiListPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Layout wraps all pages */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<TaskManager />} />
          <Route path="/api" element={<ApiListPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
