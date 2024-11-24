import { lazy } from 'react';

// project import
import AuthLayout from 'layout/Auth';
import Loadable from 'components/Loadable';
import { APP_AUTH } from 'config';
import { AuthProvider } from 'types/config';

// jwt auth
const JwtAuthLogin = Loadable(lazy(() => import('pages/auth/jwt/login')));
const JwtAuthRegister = Loadable(lazy(() => import('pages/auth/jwt/register')));
const JwtAuthForgotPassword = Loadable(lazy(() => import('pages/auth/jwt/forgot-password')));
const JwtAuthResetPassword = Loadable(lazy(() => import('pages/auth/jwt/reset-password')));
const JwtAuthCodeVerification = Loadable(lazy(() => import('pages/auth/jwt/code-verification')));
const JwtAuthCheckMail = Loadable(lazy(() => import('pages/auth/jwt/check-mail')));

// firebase auth
const FirebaseAuthLogin = Loadable(lazy(() => import('pages/auth/firebase/login')));
const FirebaseAuthRegister = Loadable(lazy(() => import('pages/auth/firebase/register')));
const FirebaseAuthForgotPassword = Loadable(lazy(() => import('pages/auth/firebase/forgot-password')));
const FirebaseAuthResetPassword = Loadable(lazy(() => import('pages/auth/firebase/reset-password')));
const FirebaseAuthCodeVerification = Loadable(lazy(() => import('pages/auth/firebase/code-verification')));
const FirebaseAuthCheckMail = Loadable(lazy(() => import('pages/auth/firebase/check-mail')));

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: <AuthLayout />,
      children: [
        {
          path: APP_AUTH === AuthProvider.JWT ? '/' : 'jwt',
          children: [
            { path: 'login', element: <JwtAuthLogin /> },
            { path: 'register', element: <JwtAuthRegister /> },
            { path: 'forgot-password', element: <JwtAuthForgotPassword /> },
            { path: 'check-mail', element: <JwtAuthCheckMail /> },
            { path: 'reset-password', element: <JwtAuthResetPassword /> },
            { path: 'code-verification', element: <JwtAuthCodeVerification /> }
          ]
        },
        {
          path: APP_AUTH === AuthProvider.FIREBASE ? '/' : 'firebase',
          children: [
            { path: 'login', element: <FirebaseAuthLogin /> },
            { path: 'register', element: <FirebaseAuthRegister /> },
            { path: 'forgot-password', element: <FirebaseAuthForgotPassword /> },
            { path: 'reset-password', element: <FirebaseAuthResetPassword /> },
            { path: 'code-verification', element: <FirebaseAuthCodeVerification /> },
            { path: 'check-mail', element: <FirebaseAuthCheckMail /> }
          ]
        }
      ]
    }
  ]
};

export default LoginRoutes;
