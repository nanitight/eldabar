import './App.css';
import React from 'react';
import { HashRouter as Router,Route , Switch} from 'react-router-dom' ;
import EDCC from './components/pages/Edcc'
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/inc/Navbar';
import Footer from './components/inc/Footer';

import {ThemeConfig, writeDarkSwitch} from 'bootstrap-darkmode';
const themeConfig = new ThemeConfig() ;
themeConfig.initTheme() ;

class App extends React.Component {
  render(){
    return (
      // <div className='bootstrap-dark'>


        <Router>
          <Navbar/>
          <Switch>
            <Route path="/contact" component={Contact}/>
            <Route path="/about" component={About} />
            <Route path={"/"} component={EDCC}/>
          </Switch>
          <Footer/>
        </Router>
      // </div>

    )
    
    
  }
}

export default App;
