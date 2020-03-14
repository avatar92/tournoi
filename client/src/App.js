import React, { Component } from "react";
import {BrowserRouter,Route} from 'react-router-dom'
import {Provider} from 'react-redux'


import store from './store'
import HomePage from "./component/HomePage";

class App extends Component {
  render() {
    return <Provider store={store}>
      <BrowserRouter>
      
        <Route exact path="/" component={HomePage}/>


      </BrowserRouter>
    </Provider>;
  }
}

export default App;
