import React from  'react' ;
import { withRouter,Route , Switch, Link} from 'react-router-dom' ;
import ImageSlider from '../inc/ImageSlider';
import img from '../images/scripture.jpg' ;
import logo from '../images/WLogo.jpeg'

import '../../css/global.css' ;

import Playlist from './Playlist';
import FacebookVideoList from './FacebookVideoList';
class EDCC extends React.Component{
    constructor(props){
        super(props) ;
        // this.url = 'http://localhost:9009' ;
        this.url= 'https://nd1server1.herokuapp.com'
        // this.state = {
        //     videos:[]
        // }
    }
    
    render(){
        const {path, url} = this.props.match ;
        console.log('EDCC props',this.props) ;
        return(<>
            <div className='bg-secondary bg-gradient bg-opacity-10'>
                <ImageSlider />
                <Switch>
                <Route path={`${path}/fvideos`} >
                   <FacebookVideoList />
                        
                </Route>    
                    <Route path={`${path}/videos`} >

                    <Playlist url={this.url}/>
                    </Route>
                    <Route exact component={() => {
                        return <>
                            <section className='py-4'>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='col-md-12'>
                                            <h4>Our Church</h4>
                                            <div className="underline mb-3" ></div>
                                            <p>
                                                We believe that Priests are called to stand as intercessors between God and the
                                                communities they serve in the market place while kings are called to give the Kingdom
                                                vision and mission to those communities.<br />
                                                So the work of the priest is to bless the king to succeed in the market place battle,
                                                and the work of the king is to take the spoil in the market place and bring them in the
                                                Kingdom of God.
                                                In the Kingdom of God all are full time, whether as a pastor or medical doctor.
                                                WE ARE A FAMILY OF KINGS AND PRIESTS ADVANCING THE ADVANCEMENT OF THE KINGDOM OF GOD
                                            </p>
                                        </div>
                                    </div>


                                </div>
                            </section>

                            <section>
                                <div className='container '>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <div className="card shadow" >
                                                <img src={img} className="card-img-top mx-auto py-3" alt="..." style={{ maxWidth: '250px' }} />
                                                <div className="card-body">
                                                    <h5 className="card-title">What To Expect From Our Service</h5>
                                                    <hr className='underline-sub' />
                                                    <div className="card-text">
                                                        <ul>
                                                            <li>
                                                                Teaching Session - congregants, get to ask questions during the session.
                                                            </li>
                                                            <li>
                                                                Worship and Praise - congregants sing along in praise and worship to our king Yeshua.
                                                            </li>
                                                            <li>
                                                                Preaching Session - congregants sit for the Word of God and encouraged.
                                                            </li>
                                                            <li>
                                                                Public Reading - Every member of the congregation reads the word of God out loud with others.
                                                            </li>
                                                            <li>
                                                                Offerings are accepted
                                                            </li>
                                                        </ul>
                                                        This is not neccesarily the strict order, led by the Holy Spirit, the program may change.
                                                    </div>
                                                    <Link className="btn btn-primary" to={`${url}/fvideos`}>Facebook Video</Link>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='col-md-6'>
                                            <img src={logo} alt='logo' style={{ maxWidth: '60%' }} />
                                        </div>
                                    </div>

                                </div>
                            </section>
                    </>
                }} >
                    
                    </Route>
                </Switch>
                </div>
               
            

                {/* <Link className="click-btn title" to={`${path}/add`}> 
                        <img className='ratio ratio1x1' src={`${this.url}/artist/edcc/logosquare.jpg`} alt="logo"/>
                    </Link> */}
            </>
        )
    }
}

export default withRouter(EDCC) ;