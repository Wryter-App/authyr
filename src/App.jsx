import { Routes, Route } from "react-router-dom";
import Layout from "./layout/AppLayout";

import SignUp from "./pages/auth/SignUp";
import UserDashboard from "./pages/UserDashboard";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/app" element={<Layout />}>
        <Route index element={<UserDashboard />} />
      </Route>
    </Routes>
  );
};

export default App;
