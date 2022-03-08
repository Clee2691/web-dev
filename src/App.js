import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './components/Tuiter/ExploreScreen/explore.css';
import './components/Tuiter/HomeScreen/home.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HelloWorld from "./components/Labs/HelloWorld"
import Labs from './components/Labs';
import ExploreScreen from './components/Tuiter/ExploreScreen/ExploreScreen';
import HomeScreen from './components/Tuiter/HomeScreen/HomeScreen';

function App() {
  return (
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
  );
}
export default App;
