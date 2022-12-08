import About from "./about-page/About";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./home-page/Home";
import LoginPage from "./Login-page/Login";
import SignUp from "./signup-page/SignUp";
import Profile from "./profile-page/Profile";
import ForgetPassword from "./forgetpassword/ForgetPassword";
import VerifyEmail from "./verifyemail/VerifyEmail";
import Dashboard from "./dashboard/Dashboard";
import Edit from "./edit-profile/Edit-Profile";
import Groups from "./groups/Groups";
import CreateProfile from "./CreateProfile/CreateProfile";
import { ContextProvider } from "./context/Context";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create" element={<CreateProfile />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
        </Routes>
      </ContextProvider>
    </div>
  );
}

export default App;
