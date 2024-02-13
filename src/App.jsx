import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import GamePage from "./pages/GamePage";

function App() {
  return (
    <div className="p-3 container text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3">
      hello
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/play" element={<GamePage />} />
      </Routes>
    </div>
  );
}

export default App;
