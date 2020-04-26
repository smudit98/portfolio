import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/HomeComponent'
import Contact from './components/ContactComponent'
import Projects from './components/ProjectsComponent'
import Resume from './components/Resume'
import { Switch, Route, Redirect, BrowserRouter, Link } from 'react-router-dom'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
function App() {
  return (
    <BrowserRouter>
      <div className="demo-big-content">
        <Layout fixedHeader>
          <Header title={<Link to="/home" style={{ color: 'white', textDecoration: 'none' }}>MUDIT SHARMA</Link>}>
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer>
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Switch>
              <Route path="/home" component={() => <Home />} />
              <Route path="/contact" component={() => <Contact />} />
              <Route path="/resume" component={() => <Resume />} />
              <Route path="/projects" component={() => <Projects />} />
              <Redirect to="/home" />
            </Switch>
          </Content>
        </Layout>
      </div>
    </BrowserRouter>

  );
}

export default App;
