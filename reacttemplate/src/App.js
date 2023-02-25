import Header from './Header'; //Include Header
import Footer from './Footer'; //Include Footer

import Home from './Home'
import Shop from './Shop'
import About from './About';
import Contact from './Contact';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Header></Header>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" />
            </Routes>
          <Footer></Footer>
        </BrowserRouter>
    </div>
  );
}
export default App;