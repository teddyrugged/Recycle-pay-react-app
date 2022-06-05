import { Routes, Route } from 'react-router-dom';
import { AnotherPage, SignUpPage, SignInPage } from 'pages';

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/page-2" element={<AnotherPage />} />
    </Routes>
  </div>
);

export default App;
