import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./pages/Login/Login";
import GlobalStyle from './GlobalStyles';
import Register from "./pages/Register/register";


function App() {
  return (
    <div>
      <GlobalStyle/>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
