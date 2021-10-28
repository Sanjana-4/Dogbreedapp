import React from 'react';
import {Provider} from 'react-redux'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import BasePage from './Components/BasePage';
import DogListContainer from './Components/DogListContainer';
import ViewLarge from './Components/ViewLarge';
import store from './Redux/Store'
class App extends React.Component {
  
  render(){
    
  return (
    <Provider store = {store}>
    <div>
    <Router>
      <Switch>
      <Route path = '/' exact component = {BasePage}/>
        <Route path = '/DogList/:breed' exact component = {DogListContainer}/>
        <Route path = '/DogList/:breed/:sub' exact component = {DogListContainer}/>
        <Route path = '/large/:i/:breed/:sub' component = {ViewLarge}/>    
        <Route path = '/large/:i/:breed' component = {ViewLarge}/>  
      </Switch>
    </Router>
   
    </div>
    </Provider>
  );
  }
}

export default App;
