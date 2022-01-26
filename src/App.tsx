import SocialMedia from "./pages/SocialMediaApp/SocialMedia";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Setting from "./pages/Setting/Setting";
import Signup from "./pages/Signup/Signup";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/socialMedia" element={<SocialMedia />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </div>
  );
}

export default App;
