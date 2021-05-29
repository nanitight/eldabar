import React from 'react' ;
import './login.css'

// const userName = <p id="welcome"> Hello, {myVar}</p>

class LogIn extends React.Component{
    state = {
        userName :'' ,
        pass:'',
        logged : false
    } ;

    render(){

    if (!this.state.logged){ // when you're not logged in
        return ( 
        <div id="login">
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
                <div>
                    <p id="welcome"> Hello, {this.state.userName} </p>
                </div>
            ) ;

        }
    }

    handleLog = event => {
        this.setState({
            userName :event.target.value ,
            pass: event.target.value
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


}

export default  LogIn; 