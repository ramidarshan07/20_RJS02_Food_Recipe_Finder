import "./App.css";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Info from "./Info";
import Header from "./components/Header";

function App() {
  return (
    <>
      {/* <Home /> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mealid" element={<Info />} />
      </Routes>
    </>
  );
}

export default App;
