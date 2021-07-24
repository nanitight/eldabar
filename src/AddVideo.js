import React from 'react' ;
import './login.css'

// const userName = <p id="welcome"> Hello, {myVar}</p>

class LogIn extends React.Component{
    state = {
        userName :'' ,
        pass:'',
        logged : false,
        source:undefined,
        vidTitle:undefined,
        playlist:undefined,
    } ;

    render(){

    if (!this.state.logged){ // when you're not logged in
        return ( 
        <div className="addVideoContainer">
            <h1>Enter User Name</h1>

            <form onSubmit={this.handleSubmit} >
                <input name="userName" type="text" placeholder="Nani T" value={this.state.userName} onChange={this.handleLog} />
                <br/>
                <input name="pass" type="password" value={this.state.pass} onChange = {this.handleLog} />
                <br/>
                <button type="submit" >Log In</button>
            </form>
        </div> )
        }
    else{
        //when youre logged
            return (        
                <div className="addVideoContainer">
                    <p id="welcome" className="title"> Hello, {this.state.userName} </p>
                    {this.SendVideoInfo(this.postMsg)}
                </div>
            ) ;

        }
    }
    postMsg=()=>{
        //perform checks for the data entered by the user
        if (this.state.source !== undefined){
            
            var body = {
                source :this.state.source,
                playlist :this.state.playlist,
                title:this.state.vidTitle
            }
            console.log('Message sent to backend',body) ;
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
                
                if (res.data.data !== undefined || res.data !== undefined){
                    alert('responed') ;
                }
                else if(res.error){
                    console.log('Backend Error?',res.error) ;
                    alert('Error') ;

                }
                else{
                    console.log(res.message) ;
                    alert(res.message) ;
                }
            })
            .catch(err=>{
                console.error('Error in communication occured ',err);
            })
        }
        else{
            alert('Please Enter a source before submitting') ;
        }
    }

    handleLog = event => {
        this.setState({
            [event.target.name] :event.target.value 
        }) ;
    }

    handleSubmit = () =>{
        // alert('Hello '+this.state.userName) ;
        if (this.state.userName === 'Nani' && this.state.pass === '1234'){
            this.setState({
                logged:true
            })
        }
        else{
            alert('incorrect Password Username, Please try again.')
            this.setState({
                pass:''
            })
        }
    }

    SendVideoInfo = ()=>{
        return (<div>
             <form onSubmit={this.postMsg} >
                <input name="source" type="text" placeholder="http://..." value={this.state.source} onChange={this.handleLog} />
                <br/>
                <input name="vidTitle" type="text" placeholder="Title" value={this.state.vidTitle} onChange = {this.handleLog} />
                <br/>
                <input name="playlist" type="text" placeholder="PlayList" value={this.state.playlist} onChange = {this.handleLog} />
                <b/>
                <button type="submit" >Add Video</button>
            </form>
        </div>)
    }
    

}

// Our Redemption Story
// https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Feldabarcc%2Fvideos%2F221338096475390%2F&show_text=false&width=560&t=0

// Worship and Service
// https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Feldabarcc%2Fvideos%2F501485674453106%2F&show_text=false&width=560&t=0


// Picture of the Ruth Church
// https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Feldabarcc%2Fvideos%2F501051591016020%2F&show_text=false&width=560&t=0


//One New Man
// https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Feldabarcc%2Fvideos%2F451920419216358%2F&show_text=false&width=560&t=0


// Who are the Israelites?
// https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Feldabarcc%2Fvideos%2F922646628546083%2F&show_text=false&width=560&t=0


// Hebrew Biblical Coding
// https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Feldabarcc%2Fvideos%2F236490157913054%2F&show_text=false&width=560&t=0


export default  LogIn; 