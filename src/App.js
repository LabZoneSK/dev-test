import 'antd/dist/antd.less';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import { routes } from './routes/routes';

const App = () => {
  return (
    <Router>
      <Switch>
        {
          routes.map((route, index) => {
            return (
              <Route path={route.url} key={index}>
                {route.component}
              </Route>
            )
          })
        }
      </Switch>
    </Router>
  );
}

export default App;
