import HomeScreenProvider from "./context/HomeScreenProvider";
import HomeScreen from "./page/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PortfolioScreen from "./page/PortfolioScreen";

function App() {
  return (
    <Router>
      <HomeScreenProvider>
        <Routes>
          <Route path="/">
            <Route index element={<HomeScreen />} />
          </Route>
          <Route path="/portfolio" element={<PortfolioScreen />} />
        </Routes>
      </HomeScreenProvider>
    </Router>
  );
}

export default App;
