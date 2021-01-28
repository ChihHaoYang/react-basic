import { RouteComponentProps } from 'react-router-dom';

// pages
import Login from '../pages/Login';
import Home from '../pages/Home';


export interface ReactRouterRoute {
  path: string;
  component: React.FC<RouteComponentProps>;
  exact?: boolean;
  private: boolean;
};

export const defaultRoutePath = '/404';

export const rootRoutes: Array<ReactRouterRoute> = [{
  path: '/login',
  component: Login,
  exact: true,
  private: false,
}, {
  path: '/',
  component: Home,
  exact: false,
  private: true,
}]

export { default as PrivateRoute } from './PrivateRoute';

