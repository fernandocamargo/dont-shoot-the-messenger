import { lazy } from 'react';

export const Dashboard = lazy(() => import('./dashboard'));

export const Interview = lazy(() => import('./interview'));

export const Login = lazy(() => import('./login'));

export const NotFound = lazy(() => import('./404'));
