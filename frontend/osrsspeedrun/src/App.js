import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import WelcomePage from './pages/WelcomePage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<WelcomePage/>} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
