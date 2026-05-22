export enum AppRoutes {
  MAIN = 'main',
  EVENTS = 'events',

  NOT_FOUND = 'not_found',
}

export enum Sections {}

export const getRouteMain = () => '/';
export const getRouteLogin = () => '/login';
export const getRouteEvents = () => '/events';
export const getRouteProfile = () => '/profile';
export const getRouteNotFound = () => '*';
