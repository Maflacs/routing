import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Personnel from "./pages/Personnel";
import Contact from "./pages/Contact";
import Paths from "./pages/Paths";
import Backend from "./pages/Backend";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import PersonnelDetail from "./pages/PersonnelDetail";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Frontend from "./pages/Frontend";
import PrivateRouter from "./pages/PrivateRouter";
import Login from "./pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="personnel" element={<Personnel />} />
        <Route path="personnel/:id" element={<PersonnelDetail />} />
        <Route path="login" element={<Login />} />
        <Route path="contact" element={<PrivateRouter />}>
          <Route path="" element={<Contact />} />
        </Route>

        <Route path="paths" element={<Paths />}>
          <Route path="frontend" element={<Frontend />} />
          <Route path="backend" element={<Backend />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
