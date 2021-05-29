import React from 'react';
import VideoPlayer from './VideoPlayer'
import './Playlist.css'
var title = "Living A Life Free From Demonic Oppression" ; 

//The class for the playlist, it must atleast have one video. 
class Playlist extends React.Component {
    //the index must start from 0 when it's created from scratch, but if there was a current index already it must be used 
    //in the appropriate place
    constructor(props){
        super(props) ;
        this.state = {
            currVidIndex : 0 ,
            vidsArray: [ // we are supposed to receive the videos details from user input. we will work on that ..
            {   title:title ,
                source: "https://www.facebook.com/plugins/video.php?height=415&href=https%3A%2F%2Fwww.facebook.com%2F137622389779783%2Fvideos%2F310221190308898%2F&show_text=true&width=560" ,
                scroll:"no",
                width:"560",
                height:"530"} ,
            //,next
            {   title: "VideoPlayer",
                source:"https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F137622389779783%2Fvideos%2F1798424190305663%2F&show_text=false&width=560",
                width:"560" ,
                height:"560" ,
                scrolling :"no" 
            }
        ],
            title: title,
            userName: 'PlaceHolder1' //props.userName
        }
    }
    componentWillMount(){
        alert('retriving old value') ;
        let index = localStorage.getItem("CurrVidIndex") ;
        if (!index===null){ //index is not equal to null
            this.setState({
                currVidIndex:index
            })
        }
    }
    componentWillUnmount(){
        // when app unmonts it must store the current index video. If the playlist has one vid, index is 0 , 
        const index = localStorage.getItem("CurrVidIndex") ;

        if (index=== null){ //there was no stored variable
            localStorage.setItem("CurrVidIndex",this.state.currVidIndex) ; 
        }
        else{
            if (parseInt(index) !==  this.state.currVidIndex){ //check if i went back in the viewes list ,or it changed
                localStorage.setItem("CurrVidIndex",this.state.currVidIndex) ; 
            }
        }
    }

    componentDidUpdate(){
        alert('update') ; //debug  step
        if (0 < this.state.currVidIndex){ //check if i went back in the viewes list
            localStorage.setItem("CurrVidIndex",this.state.currVidIndex) ; 
        }
    }

    nextVideo =()=>{
        alert('pressed NExt') //debug  step
        const curr = this.state.currVidIndex ; 
        if (curr === (this.state.vidsArray.length-1)){
            // if the end of the array has been reached
            let ans = window.confirm('End of Current playlist is reached, do you want to jump to the next Playlist?') ; 
            if (ans === true){
                alert('Next PLAYLIST PLays Now') ; //debug  step
            }
            else{
                alert('start at first video') ;
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
        alert('pressed Prev') //debug  step
        const curr = this.state.currVidIndex ;
        if (curr === 0 ){
            alert('No Previous Video, Watch next video or watch another playlist') ;
            //prompt for next video or playlist
        }
        else{
            alert('moving to Prev video') ; 
            this.setState({
                currVidIndex:this.state.currVidIndex-1
            }) ; 
        }
    }

    render(){
        // this.state.currVidIndex
        const  video = this.state.vidsArray[this.state.currVidIndex]  ; //object that represents the video
        return (
            <div  id="bigContainer">
                <VideoPlayer 
                userName={this.state.userName} 
                vidURL={video}
                nextVideo={this.nextVideo}
                prevVideo={this.prevVideo}
                />
            
                <button onClick={this.prevVideo}>Previous Video</button>
                <button onClick={this.nextVideo} >Next Video</button>
            </div>
            )
    }
}

export default Playlist ;