import "./App.css";
import MainPage from "./components/MainPage";
import Login from "./Login";
import SignUp from "./components/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import PageNotFound from "./components/PageNotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoutesPage from "./components/PublicRoutesPage";
import AdminContact from "./components/AdminContact";
import AdminAbout from "./components/AdminAbout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute Component={MainPage} />} />

        <Route
          path="/admincontact"
          element={<ProtectedRoute Component={AdminContact} />}
        />
        <Route
          path="/adminabout"
          element={<ProtectedRoute Component={AdminAbout} />}
        />

        <Route
          path="/contact"
          element={<ProtectedRoute Component={Contact} />}
        />
        <Route path="/about" element={<ProtectedRoute Component={About} />} />

        <Route path="/login" element={<PublicRoutesPage Component={Login} />} />
        <Route
          path="/signup"
          element={<PublicRoutesPage Component={SignUp} />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
