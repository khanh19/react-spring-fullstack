import React, {Component} from 'react'
import "./App.css";

import Header from './components/Layout/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from "react-router-dom";
import AddProject from './components/Project/AddProject';
import Dashboard from './components/Dashboard';
import {Provider} from "react-redux";
import store from './store';
import UpdateProject from './components/Project/UpdateProject';
class App extends Component{
  render() {
    return (  
      <Provider store={store}>
      <Router>
          <div className="App">
            <Header/>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/addProject" component={AddProject} /> 
            {/* /:id pass specifi id to update specific project*/}
            <Route exact path="/updateProject/:id" component={UpdateProject} />
          </div>
      </Router>
      </Provider>  
    );
  }
 }
 //Components in files 
export default App;
