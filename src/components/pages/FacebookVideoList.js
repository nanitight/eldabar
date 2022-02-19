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
            currVid : { id: '1557020284672060', description:'Start State'} ,
            loading : false 
        }
    }

    componentDidMount(){
        this.getFacebookVideos() ;
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
                this.setState({
                    videoList:list , 
                    loading:false ,
                    currVid:list[0]
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
    }
    
    render(){

        const stateList = this.state.videoList ;
        console.log("state",this.state)

        if (this.state.loading){
            return <div class="spinner-grow text-success" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        }
        const chosenVid = {
            title: this.state.currVid.description ,
            source: `https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Feldabarcc%2Fposts%2F${this.state.currVid.id}%2F&show_text=false&width=500&t=0`
        }
        return (<>
        
            <div className="container-fluid">
                <div className='row'>
                <div className='col py-3'>
                    <VideoPlayer vidURL={chosenVid} />
                </div>
                
                <div className='col py-3 overflow-scroll h-25'>
                Previous Videos
                <br/>
                <div className='d-grid gap-2'>
                {
                    
                    stateList.map((vidobj)=>{
                        return (<div className='btn btn-outline-success '
                         key={JSON.stringify(vidobj)} onClick={(event)=>this.selectFacebookVideo(vidobj)}>
                            <img alt={vidobj.description} 
                            src={`https://graph.facebook.com/${vidobj.id}/picture?access_token=${process.env.REACT_APP_PAGE_TOKEN}`}/>
                             : {vidobj.description}
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