import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import DeleteAccount from "./pages/DeleteAccount";

function App() {
  return (
    <Router>
      <Routes>
        {/* Delete page */}
        <Route path="/delete-account" element={<DeleteAccount />} />

        {/* Redirect root "/" to delete page */}
        <Route path="/" element={<Navigate to="/delete-account" replace />} />

        {/* Optional: catch-all route */}
        <Route path="*" element={<DeleteAccount />} />
      </Routes>
    </Router>
  );
}

export default App;
