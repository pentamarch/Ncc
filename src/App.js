import React ,{ Component} from 'react';
import './App.css';
import { Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Testcases from "./components/testcases/testcases.jsx";
import Navbar from "./components/navBar";
import Footer from "./components/footer";

class App extends Component {
  state = {  }
  render() { 
    return (
      <div className="container-fluid" >
        <div className="row" style={{height:"93vh"}}>
        <Navbar/>
        <Route path="/testcases" component={Testcases}></Route>
      </div>
      <Footer/>
      </div>
    );
  }
}
 
export default App;

