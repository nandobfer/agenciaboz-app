import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { CustomersProvider } from "./contexts/CustomersContext";
import { TeamProvider } from "./contexts/TeamContext";
import { UserProvider } from "./contexts/UserContext";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Tasks } from "./pages/Tasks";
import { Users } from "./pages/Users";

function App() {
    const [user, setUser] = useState(null)
    
    return (
        <UserProvider >
            <TeamProvider>
                <CustomersProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route index element={<Login />} />
                            <Route path='/home' element={<Home />} />
                            <Route path='/usuarios' element={<Users />} />
                            <Route path='/cadastro' element={<Signup />} />
                            <Route path='/tarefas/*' element={<Tasks />} />
                        </Routes>
                    </BrowserRouter>
                </CustomersProvider>
            </TeamProvider>
        </UserProvider>
  );
}

export default App;
