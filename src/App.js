// import logo from "./logo.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import Nav from "./components/nav";

function App() {
  return (
    <div className="App">
      <Nav />

      {/* conditinally render those pages here */}

      <Outlet />
    </div>
  );
}

export default App;
