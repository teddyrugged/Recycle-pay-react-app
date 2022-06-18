import { Suspense } from 'react';
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import { AuthLayout } from 'layouts';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  OverviewPage,
  PasswordResetFive,
  PasswordResetFour,
  PasswordResetOne,
  PasswordResetThree,
  PasswordResetTwo,
  SignInPage,
  SignUpPage,
} from 'pages';

// for dashboard
const PrivateOutlet = () => {
  const { isAuthorized: isAuth } = useSelector((state) => state.auth);
  const location = useLocation();
  if (!isAuth) {
    return <Navigate to="/" state={{ from: location }} />;
  }
  return (
    <div>
      <Suspense fallback="loading...">
        <Outlet />
      </Suspense>
    </div>
  );
};

// for auth routes - login, signup forget password ...
const ProtectedOutlet = () => {
  const { isAuthorized: isAuth } = useSelector((state) => state.auth);
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
  <>
    <Routes>
      <Route path="/" element={<ProtectedOutlet />}>
        <Route index element={<SignInPage />} />
        <Route path={ROUTES.signIn.path} element={<SignInPage />} />
        <Route path={ROUTES.signUp.path} element={<SignUpPage />} />
        <Route path={ROUTES.forgotPassword.path} element={<PasswordResetOne />} />

        <Route path={ROUTES.resetPassword.path} element={<PasswordResetRoutes />}>
          <Route index element={<PasswordResetOne />} />
          <Route path="reset-2" element={<PasswordResetTwo />} />
          <Route path="reset-3" element={<PasswordResetThree />} />
          <Route path="reset-4" element={<PasswordResetFour />} />
          <Route path="reset-5" element={<PasswordResetFive />} />
        </Route>
      </Route>

      <Route path={ROUTES.dashboard.path} element={<PrivateOutlet />}>
        <Route path={ROUTES.overview.path} element={<OverviewPage />} />
        <Route index element={<Navigate to={ROUTES.overview.path} />} />
      </Route>
    </Routes>
    <ToastContainer
      position="bottom-left"
      autoClose={5000}
      hideProgressBar
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  </>
);

export default App;
