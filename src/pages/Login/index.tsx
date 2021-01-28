import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, RouteComponentProps, useHistory, useLocation } from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { Formik } from 'formik';
import { RootState } from '../../store/reducers';
import { useIntl } from 'react-intl';

interface LocationState {
  from: {
    pathname: string;
    search: string;
  }
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  errorText: {
    color: theme.palette.error.main,
  },
}));

const Login: React.FC = () => {
  const history = useHistory();
  const location = useLocation<LocationState>();
  const classes = useStyles();
  const { formatMessage } = useIntl();
  const { isLoggedIn } = useSelector((state: RootState) => ({
    isLoggedIn: state.user.isLoggedIn,
  }));
  const { from } = location.state || { from: { pathname: '/' } };

  useEffect(() => {
    // Login action
  }, []);

  if (isLoggedIn) {
    return (
      <Redirect
        to={from}
      />
    )
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">{formatMessage({ id: 'login' })}</Typography>
        <Formik
          initialValues={{
            account: '',
            password: '',
          }}
          validate={values => {
            const errors = { account: '', password: '' };
            if (!values.account) {
              errors.account = formatMessage({ id: 'required' });
            }
            if (!values.password) {
              errors.password = formatMessage({ id: 'required' });
            }
            return errors;
          }}
          onSubmit={(values, action) => {
            // login function
            console.log(values);
          }}
        >
          {
            ({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form
                className={classes.form}
                onSubmit={handleSubmit}
              >
                <TextField
                  variant="outlined"
                  margin="normal"
                  value={values.account}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  fullWidth
                  id="account"
                  label={formatMessage({ id: 'account' })}
                  name="account"
                  autoComplete="account"
                  autoFocus
                  error={Boolean(errors.account && touched.account)}
                />
                {
                  errors.account && touched.account && (
                    <FormHelperText className={classes.errorText}>{errors.account}</FormHelperText>
                  )
                }
                <TextField
                  variant="outlined"
                  margin="normal"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  fullWidth
                  name="password"
                  label={formatMessage({ id: 'password' })}
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  inputProps={{
                    autoCapitalize: 'off'
                  }}
                  error={Boolean(errors.password && touched.password)}
                />
                {errors.password && touched.password && (
                  <FormHelperText className={classes.errorText}>{errors.password}</FormHelperText>
                )}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  {formatMessage({ id: 'login' })}
                </Button>
              </form>
            )
          }
        </Formik>
      </Box>
    </Container>
  )
}

export default Login;