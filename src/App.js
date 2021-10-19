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
        <Route path = '/DogList' exact component = {DogListContainer}/>
        <Route path = '/large' component = {ViewLarge}/>    
      </Switch>
    </Router>
   
    </div>
    </Provider>
  );
  }
}

export default App;
