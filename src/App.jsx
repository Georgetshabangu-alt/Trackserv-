import { Routes, Route, Navigate } from "react-router-dom";
import UserLogin from "./UserLogin";
import Register from "./Register";
import AdminLogin from "./AdminLogin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;
