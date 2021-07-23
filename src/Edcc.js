import React from  'react' ;
import { BrowserRouter as Router,Route , Link, Switch} from 'react-router-dom' ;
import About from './components/About';
import Contact from './components/Contact';
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
    
    postMsg=()=>{
        var body = {
            source :"https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Feldabarcc%2Fvideos%2F811895033022689%2F&show_text=false&width=560&t=0" 
        }
        // var data = new FormData() ;
        // data.append("json",JSON.stringify(body)) ;
        fetch('http://localhost:9009/edcc/addVid',{
            method:'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              },
            body :JSON.stringify(body) 
        })
        .then(res => res.json())
        .then(res=>{
            console.log(res) ;
            //success? or not
            
            if (res.data.data !== undefined){
                alert('responed') ;
            }
            else if(res.error){
                console.log('Backend Error?',res.error) ;
            }
            else{
                console.log(res.message) ;
            }
        })
        .catch(err=>{
            console.error('Error in communication occured ',err);
        })
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
                </div>
                <div className="content">
                <Switch>
                    <Route path="/" exact component={Playlist}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/about" component={About} />
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