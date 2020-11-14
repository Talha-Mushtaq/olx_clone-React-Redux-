import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";

function App() {
  return (
    <>
      <Router>
        {/* <Switch> */}
        {/* <Route path="/" component={Header} /> */}
        <Header />
        <Home />
        <Footer />
        {/* </Switch> */}
      </Router>
    </>
  );
}

export default App;
