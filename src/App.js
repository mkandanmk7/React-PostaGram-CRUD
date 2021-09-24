// import Switch from "react-bootstrap/esm/Switch";
import { BrowserRouter, Link, Switch } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Posts from "./Pages/Posts/Posts";

function App() {
  return (
    <div className="App">
      <h2 className="btn btn-dark ">Welcome to Postagram</h2>
      <BrowserRouter>
        <Switch>
          <Link exact path="/" component={Home} />
          <Link path="/posts" component={Posts} />
          <Link path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
