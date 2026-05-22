import type { Sections } from '@shared/const/router';
import type { JSX, ReactElement } from 'react';
import type { RouteProps } from 'react-router-dom';

export interface RouteLink {
  text: string;
  Icon?: ReactElement;
  section?: Sections;
  path?: string;
}

export type AppRouteLinks = Partial<Record<Sections, RouteLink[]>>;

export type AppRouteProps = RouteProps & {
  link?: RouteLink;
  headerLabel?: { text: string; Icon: JSX.Element };
  isAuth?: boolean;
  authOnly?: boolean;
  guestsOnly?: boolean;
  subRoutes?: Record<string, AppRouteProps>;
};
