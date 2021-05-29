import './App.css';
import React from 'react';
import { BrowserRouter as Router,Route , Link, Switch} from 'react-router-dom' ;

const Home = () => (
  <div>
      <h1> Welcome to EL Dabar City Church</h1>
      <Link to="/about">ABOUT</Link> <br/>
      <Link to="/contact">Contact US</Link>
  </div>
)

const About = () =>(
  <div>
      <h1> About </h1>
      <Link to="/">go to Home </Link>
  </div>
)

const Contact = () => (
  <div>
    <p> Contact US @ 0123456789</p>
    <Link to="/">go to Home</Link>
  </div>
)

class App extends React.Component {
  render(){
    return (
      <Router>
        <Route path="/about" 
        render={ renderProps => (
          <div>
            <Link to="/about/ari">Ari</Link> 
            <br/>
            <Link to="/about/nate">Nate</Link>
            <br/>
            <Route path="/about/:name"
              render= {renderProps => (
                <div>
                  <About name={renderProps.match.params.name} />
                  <Link to="/">Go Home</Link>
                </div>
              )} />
          </div>
        )}/>

          <Route path="/" render ={renderProps=>(
            <div>
              Home is underneath
              <Home {...this.props} {...renderProps} />
              <Link to="/about" >About</Link>
            </div>
          )} />
          {/* <Route path="/contact" component = {Contact}/>  */}
      </Router>
    )
  }
}

export default App;
