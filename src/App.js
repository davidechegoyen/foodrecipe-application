import './App.css';
import Mainpage from './pages/Mainpage';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Recipepage from './pages/Recipepage';
import { useState } from 'react';

function App() {

  const [recipeId, setRecipeIdState] = useState(0)

  const recipeIdChanger =(id)=>{
    setRecipeIdState(id)
  }
  
  return (
    <Router basename='foodrecipe-application'>
      <Switch>
        <Route exact path="/">
          <Mainpage recipeIdChanger={recipeIdChanger}/>
        </Route> 
        <Route path={`/recipepage=${recipeId}`}>
          <Recipepage id={recipeId}/>
        </Route>
      </Switch>     
    </Router>
      
    
  );
}

export default App;
