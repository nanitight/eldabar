import React from 'react';
import VideoPlayer from './VideoPlayer'
// import './Playlist.css' ;
import axios from 'axios' ;

//The class for the playlist, it must atleast have one video. 
class Playlist extends React.Component {
    //the index must start from 0 when it's created from scratch, but if there was a current index already it must be used 
    //in the appropriate place
    constructor(props){
        super(props) ;
        this.state = {
            currVidIndex : 0 ,
            allVideos:[],
            vidsArray: [], // we are supposed to receive the videos details from user input. we will work on that ..
            playlistList:['EL-DABAR : THE WORD OF GOD'],
            selectedPlaylist:'EL-DABAR : THE WORD OF GOD'
        }
    }
    getAllVideos= () =>{
        // axios.get('https://nd1server1.herokuapp.com/edcc/videos')
        // axios.get('http://localhost:9009/edcc/videos')
        // .then(res=>res.json())
        axios.get(`${this.props.url}/edcc/videos`)
        .then((res)=>{
            // console.log('Backend',res) ;
            const responseData = res.data ; 
            // const responseData = res ; 

            if (responseData.data !== undefined){
                this.setState({
                    vidsArray:responseData.data,
                    allVideos:responseData.data
                }) ;
            }
            else{
                alert('no videos found') ;
            }
        })
        .catch(err=>console.log('Error in comms',err))

    }
    componentDidMount(){
       this.getAllVideos() ;
       this.getPlaylistForAllVideos()
        // alert('retriving old value') ;
        // let index = localStorage.getItem("CurrVidIndex") ;
        // if (!index===null){ //index is not equal to null
        //     this.setState({
        //         currVidIndex:index
        //     }) ;
        // }
        // else{
        //     this.setState({
        //         currVidIndex:0
        //     }) ;
        // }
    }
    componentWillUnmount(){
        // when app unmonts it must store the current index video. If the playlist has one vid, index is 0 , 
    //     const index = localStorage.getItem("CurrVidIndex") ;

    //     if (index=== null){ //there was no stored variable
    //         localStorage.setItem("CurrVidIndex",this.state.currVidIndex) ; 
    //     }
    //     else{
    //         if (parseInt(index) !==  this.state.currVidIndex){ //check if i went back in the viewes list ,or it changed
    //             localStorage.setItem("CurrVidIndex",this.state.currVidIndex) ; 
    //         }
    //     }
    }

    // componentDidUpdate(){
    //     alert('update') ; //debug  step
    //     if (0 < this.state.currVidIndex){ //check if i went back in the viewes list
    //         localStorage.setItem("CurrVidIndex",this.state.currVidIndex) ; 
    //     }
    // }

    nextVideo =()=>{
       // alert('pressed NExt') ; debug  step
        const curr = this.state.currVidIndex ; 
        if (curr === (this.state.vidsArray.length-1)){
            // if the end of the array has been reached
            let ans = window.confirm('End of Current playlist is reached, do you want to jump to the next Playlist?') ; 
            if (ans === true){
               // alert('Next PLAYLIST PLays Now') ; //debug  step
                //change playlist
                const list = this.state.playlistList ;
                if (list.length>1){
                    var index =list.indexOf(this.state.selectedPlaylist) ; 
                    if (index>-1){
                        // list in item choose another
                        if (index+1>=list.length){
                            //boundary riched
                            index = 0 ; 
                        }
                        else{
                            index = index+1 ;
                        }
                    }
                    else{
                        index = 0 ; //no selected playlist
                    }
                    this.filterPlayListVideos(list[index]) ;
                }
            }
            else{
                alert('Starting at first video') ;
                this.setState({
                    currVidIndex: 0 
                }); 
            }
        }
        else{
            this.setState({
                currVidIndex:this.state.currVidIndex+1
            }) ; 
        }
    }

    prevVideo = () =>{
        // alert('pressed Prev') //debug  step
        const curr = this.state.currVidIndex ;
        if (curr === 0 ){
            alert('No Previous Video, Watch next video or watch another playlist') ;
            //prompt for next video or playlist
        }
        else{
            // alert('moving to Prev video') ; 
            this.setState({
                currVidIndex:this.state.currVidIndex-1
            }) ; 
        }
    }

    playSelectedVideo = (num)=>{
        this.setState({
            currVidIndex:num
        }) ;
    }

    getPlaylistForAllVideos = ()=>{
        axios.get(`${this.props.url}/edcc/playlist`)
        .then((res)=>{
            const result = res.data ;
            if (result.data !== undefined){
                this.setState({
                    playlistList:result.data
                }) ;
            }
            else{
                this.filterPlayListVideos('EL-DABAR : THE WORD OF GOD');
            }
        })
        .catch((err)=>{
            this.filterPlayListVideos('EL-DABAR : THE WORD OF GOD');
            console.log('Error when fetching playlist',err) ;
            
        })
    }

    handleSelect = (event)=>{
        // console.log('select changing')
        this.setState({
            [event.target.name]:event.target.value
        },()=>this.filterPlayListVideos(this.state.selectedPlaylist)) ;
    }

    filterPlayListVideos = (playlist) =>{
        var result = this.state.allVideos.filter(value => value.playlist === playlist) ;
        this.setState({
            vidsArray:result ,
            currVidIndex:0, 
            selectedPlaylist:playlist
        }) ;
    }
    render(){
        const storedVids = this.state.vidsArray  ;
        // this.state.currVidIndex
        // playlist names ? -> map out from all
        if (Array.isArray(storedVids) && this.state.currVidIndex >= 0){
            var  video = storedVids[this.state.currVidIndex ] ; //object that represents the video
            console.log('video displayed',this.state) ;
            return (
                <div  id="bigContainer" data-testid="playlist-content">
                    <VideoPlayer 
                    vidURL={video===undefined?{}:video}
                    nextVideo={this.nextVideo}
                    prevVideo={this.prevVideo}
                    />
                    <div className="Playlist Manager" data-testid="playlist-manager">
                    <div>
                        <button className="click-btn" onClick={this.prevVideo}>Previous Video</button>
                        <button className="click-btn" onClick={this.nextVideo} >Next Video</button>
                    </div>
                    {/*  have a menu that selects playlists, but there must be default
                        choose between the lists */}
                        <div>
                            <span className="click-btn">&#9776;
                            </span> 
                            <select onChange={this.handleSelect} value={this.state.selectedPlaylist} name="selectedPlaylist">
                                {
                                    this.state.playlistList.map((v)=>{
                                      return  <option>
                                            {
                                                v
                                            }
                                        </option>
                                    })
                                }   
                            </select>
                           <p className="title"  testid="playlistname">
                           {this.state.selectedPlaylist}
                            </p>
                        </div>
                        <div>
                        {this.state.vidsArray.length > 0 ?
                        this.state.vidsArray.map((vid,index)=>{
                            return <button className="click-btn" key={`k${index}`}
                                onClick={()=>this.playSelectedVideo(index)}>
                                    {vid.title}</button>
                        }):
                        <p>No Videos Selected</p>}
                        </div>
                </div>
                </div>
                )
            }
        else{
            return (<div data-testid="playlist-content">
                No Videos to choose from
            </div>)
        }
    }
}

export default Playlist ;