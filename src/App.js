import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/HomeComponent'
import Projects from './components/ProjectsComponent'
import Resume from './components/Resume'
import { Switch, Route, Redirect, BrowserRouter, Link } from 'react-router-dom'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
function App() {
  return (
    <BrowserRouter>
      <div className="demo-big-content">
        <Layout>
          <Header title={<Link to="/home" className="header-name" style={{textDecoration:'none'}}>MUDIT SHARMA</Link>}>
            <Navigation >
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>
            </Navigation>
          </Header>
          <Drawer title="PortFolio">
            <Navigation>
              <Link to="/home">Home</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>
            </Navigation>
          </Drawer>
          <Content>
            <Switch>
              <Route path="/home" component={() => <Home />} />
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
