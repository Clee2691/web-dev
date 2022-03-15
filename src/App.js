import "./vendors/bootstrap/css/bootstrap.min.css";
import "./vendors/bootstrap/bootstrap.min.css";
import "./vendors/fontawesome/css/all.min.css";
import "./components/Tuiter/ExploreScreen/explore.css";
import "./components/Tuiter/HomeScreen/home.css";
import "./components/Tuiter/ProfileScreen/profile.css";
import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

// The pages
import HelloWorld from "./components/Labs/HelloWorld";
import Labs from "./components/Labs";
import ExploreScreen from "./components/Tuiter/ExploreScreen/ExploreScreen";
import HomeScreen from "./components/Tuiter/HomeScreen";
import ProfileScreen from "./components/Tuiter/ProfileScreen/ProfileScreen";

// Reducers
import who from "./reducers/who";
import tuits from "./reducers/tuits";
import ProfileInfo from "./reducers/profile";
import Tuiter from "./components/Tuiter";

const reducers = combineReducers({ who, tuits, ProfileInfo });
const store = createStore(reducers);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/">
              <Route index element={<Labs />} />
              <Route path="hello" element={<HelloWorld />} />
              <Route path="tuiter" element={<Tuiter/>}>
                <Route index element={<HomeScreen />} />
                <Route path="explore" element={<ExploreScreen />} />
                <Route path="profile" element={<ProfileScreen />} />
              </Route>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}
export default App;
