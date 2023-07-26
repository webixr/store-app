import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar, Footer, Home, Cart, Container } from "./Components/index";
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Container>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/cart" Component={Cart} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
