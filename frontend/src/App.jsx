import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Body from "./Pages/Body";
import Users from "./Pages/Users";
import "./index.css"
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import styled from "styled-components";
import Channel from "./Pages/Channel";

function App() {
  return (
    <Router>
      <Header />
      <AppBody>
        <SideBar />  
        <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/users" element={<Users />} />
        <Route path="/channel" element={<Channel />} />
      </Routes>
      </AppBody>
    
    </Router>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`