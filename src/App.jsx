import { Suspense } from 'react';
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import {
  SignUpPage,
  SignInPage,
  PasswordResetOne,
  PasswordResetTwo,
  PasswordResetThree,
  PasswordResetFour,
  PasswordResetFive,
  OverviewPage,
} from 'pages';

import { ROUTES } from 'constants/routes';
import { AuthLayout } from 'layouts';

const authenticated = true;

// for dashboard
const PrivateOutlet = () => {
  const location = useLocation();
  const isAuth = authenticated;
  if (!isAuth) {
    return <Navigate to="/" state={{ from: location }} />;
  }
  return (
    // <DashboardLayout>
    <div>
      <Suspense fallback="loading...">
        <Outlet />
      </Suspense>
    </div>
    // </DashboardLayout>
  );
};

// for auth routes - login, signup forget password ...
const ProtectedOutlet = () => {
  const isAuth = authenticated;
  return !isAuth ? (
    <AuthLayout>
      <Suspense fallback="loading...">
        <Outlet />
      </Suspense>
    </AuthLayout>
  ) : (
    <Navigate to="/dashboard" />
  );
};

const PasswordResetRoutes = () => <Outlet />;

const App = () => (
  <Routes>
    <Route path="/" element={<ProtectedOutlet />}>
      <Route index element={<SignInPage />} />
      <Route path={ROUTES.signIn.path} element={<SignInPage />} />
      <Route path={ROUTES.signUp.path} element={<SignUpPage />} />

      <Route path={ROUTES.resetPassword.path} element={<PasswordResetRoutes />}>
        <Route index element={<PasswordResetOne />} />
        <Route path="reset-1" element={<PasswordResetOne />} />
        <Route path="reset-2" element={<PasswordResetTwo />} />
        <Route path="reset-3" element={<PasswordResetThree />} />
        <Route path="reset-4" element={<PasswordResetFour />} />
        <Route path="reset-5" element={<PasswordResetFive />} />
      </Route>
      {/* <Route index element={<Navigate to={ROUTES.signIn.path} />} /> */}
    </Route>

    <Route path={ROUTES.dashboard.path} element={<PrivateOutlet />}>
      <Route path={ROUTES.overview.path} element={<OverviewPage />} />
      <Route index element={<Navigate to={ROUTES.overview.path} />} />
    </Route>
  </Routes>
);

export default App;
