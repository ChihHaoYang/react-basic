import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import {
  defaultRoutePath,
  rootRoutes,
  ReactRouterRoute,
  PrivateRoute
} from './routes';

function App() {
  function renderRoute(props: ReactRouterRoute) {
    if (props.private) {
      return <PrivateRoute {...props} key={props.path} />;
    }
    return <Route {...props} key={props.path} />
  }

  return (
    <>
      <Router>
        <Switch>
          {rootRoutes.map(renderRoute)}
          <Redirect to={defaultRoutePath} />
        </Switch>
      </Router>
    </>
  )
}

export default App;
