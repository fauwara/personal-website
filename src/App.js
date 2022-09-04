import './styles/app.module.scss';

import Banner from './components/Banner/Banner';
import Nav from './components/Nav/Nav';
import Container from './components/Container/Container';
import Landing from './components/Landing/Landing';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div>
      <Banner />
      <Container>
        <Nav />
        <Landing />
        <Projects count={2}/>
      </Container>
    </div>
  );
}

export default App;
