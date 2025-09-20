import "@fortawesome/fontawesome-free/css/all.min.css";
import HomeScreenProvider from "./context/HomeScreenProvider";
import HomeScreen from "./page/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PortfolioScreen from "./page/PortfolioScreen";
import Sharing from "./page/Sharing";
import ProductList from "./page/ProductList";
import Contact from "./page/Contact";


function App() {
  return (
    <Router>
      <HomeScreenProvider>
        <Routes>
          <Route path="/">
            <Route index element={<HomeScreen />} />
          </Route>
          <Route path="/portfolio" element={<PortfolioScreen />} />
          <Route path="/sharing" element={<Sharing />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </HomeScreenProvider>
    </Router>
  );
}

export default App;
