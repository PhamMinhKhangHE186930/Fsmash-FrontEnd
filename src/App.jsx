import HomeScreenProvider from "./context/HomeScreenProvider";
import HomeScreen from "./page/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HomeScreenProvider>
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<HomeScreen />} />
          </Route>
        </Routes>
      </Router>
    </HomeScreenProvider>
  );
}

export default App;
