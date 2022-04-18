import * as React from "react";
import { BrowserRouter,Routes, Route, } from "react-router-dom";
import Home from './components/frontend/pages/Home';
import SignUp from './components/frontend/pages/SignUp';
import Login from './components/frontend/pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
        <Routes>
             <Route exact path="/" element={<Home />}></Route>
             <Route  path="/signup" element={<SignUp />}></Route>
             <Route  path="/login" element={<Login />}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
