import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/HomeComponent'
import Contact from './components/ContactComponent'
import Projects from './components/ProjectsComponent'
import Skills from './components/SkillsComponent'
import { Switch, Route, Redirect, BrowserRouter,Link } from 'react-router-dom'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
function App() {
  return (
    <BrowserRouter>
      <div className="demo-big-content">
        <Layout fixedHeader>
          <Header title="MUDIT SHARMA" style={{ color: 'white' }}>
            <Navigation>
              <a href="#">Link</a>
              <a href="#">Link</a>
              <a href="#">Link</a>
              <a href="#">Link</a>
            </Navigation>
          </Header>
          <Drawer>
            <Navigation>
              <a href="#">Link</a>
              <a href="#">Link</a>
              <a href="#">Link</a>
              <a href="#">Link</a>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Switch>
              <Route path="/home" component={() => <Home />} />
              <Route path="/contact" component={() => <Contact />} />
              <Route path="/skills" component={() => <Skills />} />
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
