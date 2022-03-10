import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './components/Tuiter/ExploreScreen/explore.css';
import './components/Tuiter/HomeScreen/home.css';
import './index.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HelloWorld from "./components/Labs/HelloWorld"
import Labs from './components/Labs';
import ExploreScreen from './components/Tuiter/ExploreScreen/ExploreScreen';
import HomeScreen from './components/Tuiter/HomeScreen/HomeScreen';
import who from "./reducers/who";
import tuits from "./reducers/tuits"
import {combineReducers,createStore} from "redux";
import {Provider} from "react-redux"

const reducers = combineReducers({who, tuits});
const store = createStore(reducers);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className='container'>
          <Routes>
            <Route path="/hello" exact={true} element={<HelloWorld/>}/>
            <Route path="/" exact={true} element={<Labs/>}/>
            <Route path="/tuiter/home" exact={true} element={<HomeScreen/>}/>
            <Route path="/tuiter/explore" exact={true} element={<ExploreScreen/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>

  );
}
export default App;
