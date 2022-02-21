import axios from 'axios';
import React from 'react' ;
import VideoPlayer from './VideoPlayer'


//list of videos
// custom video player
class FacebookVideoList extends React.Component {

    constructor(props){
        super(props) ;
        this.state = {
            videoList: [] , //Array of {id:num,description:str,update_time:str} -- descr - xxx\nxxx
            currVid : { id: '1557020284672060', description:'Thanking God for the year.'} ,
            loading : false 
        }
    }

    componentDidMount(){
        this.getFacebookVideos() ;
        const storedVid = localStorage.getItem('fbVideo') ;
        if (storedVid !== null){
            const vid = JSON.parse(storedVid );
            console.log("stored",vid)
            this.setState({
                currVid : vid 
            }) ;
        }
    }

    componentWillUnmount(){
        const strinVid = JSON.stringify(this.state.currVid) ;
        localStorage.setItem('fbVideo',strinVid) ; 

        console.log('saved',strinVid, 'state:',this.state.currVid)
    }

    getFacebookVideos=()=>{
        this.setState({
            loading:true
        });

        axios(`https://graph.facebook.com/${process.env.REACT_APP_PAGE_ID}/videos?access_token=${process.env.REACT_APP_PAGE_TOKEN}`)
        .then((res)=>{
            console.log("acc",res) ;
            const list = res.data.data ;
            if (Array.isArray(list)){
                let storedVid = localStorage.getItem('fbVideo') ;
                let vid =  JSON.parse(storedVid) ;

                console.log("after all,",vid, storedVid) ;
                const selectedVid = storedVid === null ? list[0] : vid ; // if stored vid then display stored vid, else display newest vid
                this.setState({
                    videoList:list , 
                    loading:false ,
                    currVid:selectedVid
                }) ;
            }
            else{
                console.log('something wrong')
                this.setState({
                    loading:false 
                })
                 // go back to start or error page or referesh 
            }
        })
        .catch((err)=>{
            console.log("err occ",err)
            this.setState({
                loading:false 
            }) ;
        })
    }

    selectFacebookVideo =(fbVideo) =>{
        this.setState({
            currVid:fbVideo
        }) ;
        const strinVid = JSON.stringify(fbVideo) ;
        localStorage.setItem('fbVideo',strinVid) ; 

    }
    
    render(){

        const stateList = this.state.videoList ;
        console.log("state",this.state)

        if (this.state.loading){
            return <div className="spinner-grow text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        }
        const chosenVid = {
            title: this.state.currVid.description ,
            source: `https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Feldabarcc%2Fposts%2F${this.state.currVid.id}%2F&show_text=false&width=auto&t=0`
        }
        return (<>

            <div className="container">
                <div className='row justify-content-md-center' >
                    <div className='col-md-6 '>
                        <VideoPlayer vidURL={chosenVid} />
                    </div>

                    <div className='col py-3'>
                        <h5>Previous Videos</h5>
                        <br />
                        <div className='d-grid gap-2  overflow-scroll' style={{ maxHeight: '50vh' }} >
                            {

                                stateList.map((vidobj, ind) => {
                                    return (<div className='btn btn-outline-success .text-wrap w-100 card  border-secondary mb-1 '
                                        key={JSON.stringify(vidobj)} onClick={(event) => this.selectFacebookVideo(vidobj)}>

                                            {
                                                ind < 2 ?
                                                 <div className="badge bg-danger">
                                                     Latest 
                                                </div>
                                                 : <div className="badge bg-secondary">
                                                 {
                                                     vidobj.updated_time.split('T')[0]
                                                 }
                                            </div>
                                            }
                                        <div className='img-fluid'>
                                            <img alt={vidobj.description} className=''
                                                src={`https://graph.facebook.com/${vidobj.id}/picture?access_token=${process.env.REACT_APP_PAGE_TOKEN}`} />

                                        </div>
                                        <div className='d-inline-block'></div>
                                        {vidobj.description}
                                    </div>)
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

        </>)
    }
}


export default FacebookVideoList ;