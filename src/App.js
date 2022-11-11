import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Home } from "./pages/Home";
import { Users } from "./pages/Users";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/usuarios' element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
