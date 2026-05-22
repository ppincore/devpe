import { Suspense, memo, useMemo } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import type { AppRouteProps } from '@shared/types/router';
import { PageLoader } from '@widgets/PageLoader';
import { useSelector } from 'react-redux';
import { isAuthenticated } from '@entities/User/model/selectors/selectors';
import { routeItemsArray } from '../config/routerConfig';
import { RequireAuth } from './RequireAuth';

export const AppRouter = memo(function AppRouter() {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  const isAuth = useSelector(isAuthenticated) ?? false;
  const routes = useMemo(
    () => routeItemsArray.map((route) => renderWithWrapper(route, isAuth)),
    [isAuth],
  );

  return <Routes>{routes}</Routes>;
});

function renderWithWrapper(route: AppRouteProps, isAuth: boolean) {
  const element = (
    <Suspense fallback={<PageLoader />}>{route.element}</Suspense>
  );
  const path = route.path;
  const subRoutes = route.subRoutes;
  let subRoutesElement;
  let routeElement = element;

  if (subRoutes) {
    subRoutesElement = Object.values(subRoutes).map((subRoute) =>
      renderWithWrapper(subRoute, isAuth),
    );
  }

  if (route.authOnly) {
    routeElement = <RequireAuth isAuth={isAuth}>{element}</RequireAuth>;
  }

  if (route.guestsOnly) {
    routeElement = isAuth ? <Navigate to="/" replace /> : element;
  }

  return (
    <Route key={path} path={path} element={routeElement}>
      {subRoutesElement}
    </Route>
  );
}
