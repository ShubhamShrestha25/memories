import { Container } from "@material-ui/core";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Auth from "./components/auth/Auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
