import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import GamePage from "./pages/GamePage";
import AuthProvider from "./context/AuthProvider";
import NavBar from "./components/NavBar";

function App() {
  return (
    <AuthProvider>
      <div className="p-3 container text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/play" element={<GamePage />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
