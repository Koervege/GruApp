import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Landing from './pages/Landing';
import ListMotorcycle from './pages/ListMotorcycle';
import ListTow from './pages/ListTow';
import Login from './pages/Login/Login';
import Register from './pages/Register';
import UserInfo from './pages/UserInfo';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/listtow" component={ListTow} />
        <Route exact path="/listmotorcycle" component={ListMotorcycle} />
        <Route exact path="/userinfo" component={UserInfo} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}

export default App;
