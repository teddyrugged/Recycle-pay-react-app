import { Routes, Route } from 'react-router-dom';
import { AnotherPage, SignUpPage, SignInPage, PasswordResetOne, PasswordResetThree, PasswordResetFive } from 'pages';

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/forget-one" element={<PasswordResetOne />} />
      <Route path="/forget-three" element={<PasswordResetThree />} />
      <Route path="/forget-five" element={<PasswordResetFive />} />
      <Route path="/page-2" element={<AnotherPage />} />
    </Routes>
  </div>
);

export default App;
