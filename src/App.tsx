import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<h1 style={{ textAlign: "center" }}>Root Test Page</h1>}
        />
        <Route
          path="/admins"
          element={<h1 style={{ textAlign: "center" }}>Admins Page</h1>}
        />
        <Route
          path="/login"
          element={<h1 style={{ textAlign: "center" }}>Login Page</h1>}
        />
        <Route
          path="*"
          element={<h1 style={{ textAlign: "center" }}>Not Found</h1>}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
