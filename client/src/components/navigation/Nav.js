import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import {
  Blog,
  Buyers,
  Contact,
  Listings,
  Sellers,
  Testimonials,
  Error
} from "../pages";
import { Home } from "../Home";

function Nav() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sellers" element={<Sellers />} />
        <Route path="/buyers" element={<Buyers />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/*" element={<Error />}/>
      </Routes>
    </Router>
  );
}

export default Nav;
