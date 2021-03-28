import './App.css';
import Contact from './pages/Contact';
import Nav from './pages/Nav';
import History from './pages/History';
import About from './pages/About';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/contact" component={Contact} exact/>
          <Route path="/history" component={History} exact/>
          <Route path="/about" component={About} exact/>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
