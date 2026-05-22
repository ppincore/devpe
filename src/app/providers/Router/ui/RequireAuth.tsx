import { getRouteMain } from '@shared/const/router';
import type { ReactElement } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface RequireAuthProps {
  children: ReactElement;
  isAuth: boolean;
}

export function RequireAuth(props: RequireAuthProps) {
  const { children, isAuth } = props;
  const location = useLocation();
  if (!isAuth) {
    return <Navigate to={getRouteMain()} replace state={{ from: location }} />;
  }

  return children;
}
