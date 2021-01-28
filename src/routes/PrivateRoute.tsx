import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers';
import { Route, Redirect } from 'react-router-dom';
import { ReactRouterRoute } from './index';

const PrivateRoute: React.FC<ReactRouterRoute> = ({
  component: Component,
  ...rest
}) => {
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  return (
    <Route
      {...rest}
      render={props => (
        isLoggedIn ? (
          <Component {...props} />
        ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location }
              }}
            />
          )
      )}
    />
  )
}

export default PrivateRoute;