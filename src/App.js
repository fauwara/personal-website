import './styles/app.module.scss';

import Banner from './components/Banner/Banner';
import Nav from './components/Nav/Nav';
import Container from './components/Container/Container';
import Home from './pages/Home';
import Projects from './pages/Projects';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Banner />
      <Container>
        <Nav />
        <Router>
          <div>
            <Routes>
              {/* <Route path='/' exact component={Register} /> */}
              {/* <Route path='/rules' exact component={Rules} /> */}
              <Route path='/projects' element={<Projects />} />
              <Route path='/' element={<Home />} />
            </Routes>
          </div>
        </Router>
      </Container>
    </div>
  );
}

export default App;
