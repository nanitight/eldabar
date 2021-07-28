import React from  'react' ;
import { HashRouter,Route , Link, Switch} from 'react-router-dom' ;
import About from './components/About';
import Contact from './components/Contact';
import AddVideo from './AddVideo' ;
import './EDCC.css' ;
import './css/global.css' ;

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
            <HashRouter>
                <div className="nav-container" data-testid="nav">
                    <Link className="click-btn title" to="/add"> 
                        <img id="logo" src={`${this.url}/artist/edcc/logosquare.jpg`} alt="logo"/>
                    </Link>

                    <div className="nav-list">
                        <Link to="/">HOME </Link>
                        <Link to="/about">About Us </Link>
                        <Link to="/contact">Contact Us </Link>
                    </div>
                </div>
                <div className="content" data-testid="content">
                <Switch>
                    <Route path="/" exact >
                        <Playlist url={this.url}/>
                    </Route>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/about" component={About} />
                    <Route path="/add" component={AddVideo}/>
                </Switch>
                </div>
                <div id="footer" data-testid="footer">
                    <p id="slogan">
                        Empowering People To Impact The World
                    </p>
                        Copyright 2019-2021
                </div>
            </HashRouter>
        )
    }
}

export default EDCCNavBar ;