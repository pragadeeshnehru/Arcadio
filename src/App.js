import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import IndexPage from "./components/IndexPage";

function App() {
  return (
    <Routes>
      <Route index element={<IndexPage />} />
      <Route path="/" element={<Login />} />
      <Route
        path="/dashboard"
        element={<PrivateRoute element={<Dashboard />} />}
      />
    </Routes>
  );
}

export default App;
