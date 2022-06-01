import { Routes, Route } from 'react-router-dom';
import { AnotherPage, SignUpPage } from 'pages';
import { Sidebar } from './components/molecules/sideBar/index';

const App = () => (
  <div className="App">
    <h1>Recycle Pay</h1>
    <Routes>
      <Route path="/" element={<SignUpPage />} />
      <Route path="/page-2" element={<AnotherPage />} />
      <Route path="/page-3" element={<Sidebar />} />
    </Routes>
  </div>
);

export default App;
