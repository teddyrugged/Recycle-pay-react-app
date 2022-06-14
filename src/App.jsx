import { Routes, Route } from 'react-router-dom';
import {
  AnotherPage,
  SignUpPage,
  SignInPage,
  PasswordResetOne,
  PasswordResetTwo,
  PasswordResetThree,
  PasswordResetFour,
  PasswordResetFive,
  OverviewPage,
} from 'pages';
import { SideBar } from 'components';

const App = () => (
  <main>
    <Routes>
      <Route path="/" element={<SignUpPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/reset-1" element={<PasswordResetOne />} />
      <Route path="/reset-2" element={<PasswordResetTwo />} />
      <Route path="/reset-3" element={<PasswordResetThree />} />
      <Route path="/reset-4" element={<PasswordResetFour />} />
      <Route path="/reset-5" element={<PasswordResetFive />} />
      <Route path="/page-2" element={<AnotherPage />} />
      <Route path="/page-7" element={<SideBar />} />
      <Route path="/dashboard/overview" element={<OverviewPage />} />
    </Routes>
  </main>
);

export default App;
