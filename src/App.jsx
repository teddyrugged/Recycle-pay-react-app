import { Routes, Route } from 'react-router-dom';
import { AnotherPage, SignUpPage } from 'pages';

const App = () => (
  <div className="App">
    <h1>Recycle Pay</h1>
    <Routes>
      <Route path="/" element={<SignUpPage />} />
      <Route path="/page-2" element={<AnotherPage />} />
    </Routes>
  </div>
);

export default App;
