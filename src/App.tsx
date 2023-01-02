import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/pages/contact/Contact";
import Admin from "./components/pages/admin/Admin";
import Home from "./components/pages/home/Home";
import Login from "./components/pages/login/Login";
// import "./index.scss";
import "./styles/index.scss";
import Navigation from "./components/nav/Navigation";
import PostDetail from "./components/posts/PostDetail";
import Breadcrumbs from "./components/Breadcrumbs";

import { AuthProvider } from "./components/context/AuthContext";
import { Container } from "react-bootstrap";
import { FavouriteProvider } from "./components/context/FavouriteContext";
import Favourites from "./components/pages/favourites/Favourites";
import Footer from "./components/footer/Footer";

// privateroute
// bug hvis man taster inn /admin manuelt
// https://dev.to/luispa/how-to-add-a-dynamic-title-on-your-react-app-1l7k
function App() {
  return (
    <AuthProvider>
      <FavouriteProvider>
        <Router>
          <Navigation />
          <div className="body-container">
            <Container>
              <Breadcrumbs />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                {/* <Route path="/posts/:id" element={<PostDetail />} /> */}
                <Route path="/detail/:slug" element={<PostDetail />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/favourites" element={<Favourites />} />
              </Routes>
            </Container>
          </div>
          <Footer />
        </Router>
      </FavouriteProvider>
    </AuthProvider>
  );
}

export default App;
