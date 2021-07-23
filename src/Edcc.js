import React from  'react' ;
import { BrowserRouter as Router,Route , Link, Switch} from 'react-router-dom' ;
import About from './components/About';
import Contact from './components/Contact';
import AddVideo from './AddVideo' ;
import './EDCC.css' ;
import Playlist from './Playlist';
class EDCCNavBar extends React.Component{
    constructor(props){
        super(props) ;
        this.url = 'http://localhost:9009' ;
        // this.url= 'https://nd1server1.herokuapp.com'
        // this.state = {
        //     videos:[]
        // }
    }
    
    render(){
        return(
            <Router>
                <div className="nav-container">
                    <img id="logo" src={`${this.url}/artist/edcc/logosquare.jpg`} alt="logo"/>

                    <div className="nav-list">
                        <Link to="/">HOME</Link>
                        <Link to="/about">About Us</Link>
                        <Link to="/contact">Contact Us</Link>
                    </div>
                    <Link className="click-btn title" to="/add">+</Link>
                </div>
                <div className="content">
                <Switch>
                    <Route path="/" exact component={Playlist}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/about" component={About} />
                    <Route path="/add" component={AddVideo}/>
                </Switch>
                </div>
                <div id="footer">
                    <p id="slogan">
                        Empowering People To Impact The World
                    </p>
                        Copyright 2019-2021
                </div>
            </Router>
        )
    }
}

export default EDCCNavBar ;