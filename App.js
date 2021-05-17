import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
  

} from "react-router-dom";
import Main from './Views/Main';
import Detail from './Views/Detail';
import Update from './Views/Update';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
      
          <Route path="/product/:id/update">
            <Update/>
          </Route>
          <Route path="/product/:id" >
            <Detail />
          </Route>
         
          <Route path="/">
           <Main/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
