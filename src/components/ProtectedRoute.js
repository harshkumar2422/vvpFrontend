import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated, isAdmin, adminRoute, children, ...rest }) => {
  if (adminRoute && (!isAuthenticated || !isAdmin)) {
    return <Navigate to="/login" />;
  }
  if (!isAuthenticated && rest.redirect) {
    return <Navigate to={rest.redirect} />;
  }
  return (
    <Route
      {...rest}
      render={() => {
        if (isAuthenticated || !rest.redirect) {
          return children;
        } else {
          return <Navigate to="/login" />;
        }
      }}
    />
  );
};

export { ProtectedRoute };
