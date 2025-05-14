import { Route, Navigate } from 'react-router-dom'

import PropTypes from 'prop-types'
//import { Header } from '../components'

function PrivateRoute({ component: Component, isAdmin, ...rest }) {
  const userData = localStorage.getItem('devnotes:userData');
  const user = userData ? JSON.parse(userData) : null;

  if (!user) {
    return <Navigate to="/login" replace />
  }

  if (isAdmin && !user.admin) {
    return <Navigate to="/" replace/>
  }

  return (
    <>
      <Route {...rest} element={<Component />} />
    </>
  )
 

  /*
  return (
    <>
      {!isAdmin && <Header />}
      <Route {...rest} component={component} />
    </>
  )
  */
}

export default PrivateRoute

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  isAdmin: PropTypes.bool
}