import { EventsPage } from '@pages/EventsPage';
import { MainPage } from '@pages/MainPage';
import { NotFoundPage } from '@pages/NotFoundPage';
import {
  AppRoutes,
  getRouteEvents,
  getRouteMain,
  getRouteNotFound,
} from '@shared/const/router';
import type { AppRouteProps } from '@shared/types/router';

export const RouteList: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.MAIN]: {
    link: {
      text: 'Main',
    },
    path: getRouteMain(),
    element: <MainPage />,
  },
  [AppRoutes.EVENTS]: {
    link: {
      text: 'Events',
    },
    path: getRouteEvents(),
    element: <EventsPage />,
    authOnly: true,
  },
  [AppRoutes.NOT_FOUND]: {
    link: {
      text: 'NotFound',
    },
    path: getRouteNotFound(),
    element: <NotFoundPage />,
  },
};

export const routeItemsArray: AppRouteProps[] = Object.values(RouteList);
