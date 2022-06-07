import { Routes, Route } from 'react-router-dom';
import {
  AnotherPage,
  SignUpPage,
  SignInPage,
  PasswordResetTwo,
  PasswordResetThree,
  PasswordResetFive,
  SignInLoading,
  SignUpLoading,
} from 'pages';

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/forgot-two" element={<PasswordResetTwo />} />
      <Route path="/forgot-three" element={<PasswordResetThree />} />
      <Route path="/forgot-five" element={<PasswordResetFive />} />
      <Route path="/signin-loading" element={<SignInLoading />} />
      <Route path="/signup-loading" element={<SignUpLoading />} />
      <Route path="/page-2" element={<AnotherPage />} />
    </Routes>
  </div>
);

export default App;
