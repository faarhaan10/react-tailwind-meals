import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Header from "./Header/Header";
import Home from "./Home/Home";
import MealDetail from "./MealDetail/MealDetail";
import Meals from "./Meals/Meals";
import NotFound from "./NotFound/NotFound";

function App() {
  return (
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>

          <Route path='/home'>
            <Home></Home>
          </Route>

          <Route path='/meals'>
            <Meals></Meals>
          </Route>

          <Route path='/meal/:idMeal'>
            <MealDetail></MealDetail>
          </Route>

          <Route exact path='*'>
            <NotFound></NotFound>
          </Route>

        </Switch>
      </Router>
  )
}

export default App;
