import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css'; //Import the bootstrap css file into main App.js
import { BrowserRouter as Router, Route } from 'react-router-dom'; //import and use Router/Route as shorthand.
import AddProject from './components/Project/AddProject';
import { Provider } from 'react-redux';
import store from './store';
class App extends Component() {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Route exact path="/Dashboard" component={Dashboard} />
            <Route exact path="/AddProject" component={AddProject} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
