import React from "react";
import FacebookLogin from 'react-facebook-login';
import axios from "axios";

class FacebookLoginExt extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            a_token: '',//'EAAFgUZCXOJK4BAE9C9oVvptANCZAVRqfYV6C5Tu7UkmVGZCaGBjv69BBEwGm3SSB6gIKtinmZCByAkQr5ZC3EsFKzJAAfkmFkQAWYaUZBbn0MH4P5C4ZCyj3ZBCkS8Qzy1uTr99M6nwwqedPXolOvAZAvd1Rp8krXNHFVAPWyMkjd0UgpmdnFCZB0oOyJBGWPL46WZAZCFROE4hC6gZDZD ' ,
            userID: '0',
            pic: {}, //{data:{height:num,url:str,width:num}}
            name: '',
            loading: false
        }
    }

    componentDidMount() {
        //check storage for logged in and tokenned user
        //edccMember = { token:str,pic,name}
        var user = localStorage.getItem('edccMember');
        if (user != null) {
            const userObj = JSON.parse(user);
            if (userObj.a_token !== undefined && userObj.a_token.length > 1) {
                this.setState({
                    a_token: userObj.a_token,
                    pic: userObj.pic,
                    name: userObj.name,
                    userID: userObj.userID
                }, () => {
                    console.log("after update,", this.state)
                })
            }

        }
    }
    componentClicked = (data) => {
        console.log("evnt:", data)
    }

    responseFacebook = (res) => {
        console.log("res:", res)

        if (res.accessToken && res.userID) {
            const userObj = {
                a_token: res.accessToken,
                name: res.name,
                pic: res.picture,
                type: 'short',
                userID: res.userID,

            }
            console.log("saved Object ", userObj)

            localStorage.setItem('edccMember', JSON.stringify(userObj))
            this.setState({
                a_token: res.accessToken,
                pic: res.picture,
                userID: res.userID,
                name: res.name
            });
        }
    }
    getLongLivedTokenFromFacebook = (event) => {
        console.log("long ", event)
        this.setState({
            loading: true
        });
        //User long lived token
        axios.get(`https://graph.facebook.com/v13.0/oauth/access_token?
        grant_type=fb_exchange_token&
        client_id=${process.env.REACT_APP_ID}&
        client_secret=${process.env.REACT_APP_SECRET}&
        fb_exchange_token=${this.state.a_token}`)
            .then((res) => {
                console.log("accept", res)
                if (res.data.access_token) {
                    let tok = res.data.access_token;
                    const user = localStorage.getItem('edccMember');
                    if (user != null) {
                        var longUserObj = JSON.parse(user);
                        longUserObj.a_token = res.data.access_token;
                        longUserObj.type = 'long';
                        localStorage.setItem('edccMember', JSON.stringify(longUserObj));

                    }
                    else {
                        var halfUser = {
                            a_token: res.data.access_token,
                            type: 'long'
                        }
                        localStorage.setItem('edccMember', JSON.stringify(halfUser));

                    }

                    this.getPageToken(tok);
                    // this.setState({
                    //     a_token:res.data.access_token,
                    //     loading:false
                    // }) ;


                }
                else {
                    this.setState({
                        a_token: '' //back to log in
                    });
                }
            }, (rej) => {
                console.log("rejected", rej)

            })
            .catch((err) => {
                console.log("error happened", err)

            })
        console.log("long ")

    }

    getPageToken = (userToken) => { // => pageAccessT | null
        axios.get(`https://graph.facebook.com/${process.env.REACT_APP_USERID}/accounts?
        access_token=${userToken}`)
            .then((res) => {
                console.log("Accounts", res)
                this.setState({
                    // a_token:res.data.access_token,
                    loading: false
                });


            })
            .catch((err) => {
                console.log("err", err)
                this.setState({
                    loading: false
                });

            })
    }

    getVideosFromPage = (userToken) => { // => pageAccessT | null
        axios.get(`https://graph.facebook.com/${process.env.REACT_APP_USERID}/accounts?
        access_token=${userToken}`)
            .then((res) => {
                console.log("Accounts", res)
                this.setState({
                    // a_token:res.data.access_token,
                    loading: false
                });


            })
            .catch((err) => {
                console.log("err", err)
                this.setState({
                    loading: false
                });

            })
    }
    render() {
        if (this.state.loading) {
            return <>
                loading...
            </>
        }
        else if (this.state.a_token.length < 1 || this.state.userID) {
            return <>
                <p>
                    AccessToken : {this.state.a_token}
                    client_id=${process.env.REACT_APP_ID}<br />
                    client_secret=${process.env.REACT_APP_SECRET}<br />
                    userID = {process.env.REACT_APP_USERID}<br />
                    fb_exchange_token=${this.state.a_token}<br />
                </p>
                <div>
                    Name : {this.state.name}
                    <img alt="prof pic" src={this.state.pic.data.url} height={this.state.pic.data.height} />
                </div>
                You are now logged in! Please proceed to access El Dabar Facebook Videos
                <button className="btn btn-success" onClick={this.getLongLivedTokenFromFacebook}>Proceed</button>
            </>
        }
        else {

            return (
                <>
                    AccessToken : {this.state.a_token}
                    FB <br/>
                   

                </>
            )
        }
    }
}

export default FacebookLoginExt;

 {/* <FacebookLogin
                        appId={process.env.REACT_APP_ID}
                        autoLoad={true}
                        xfbml={true}
                        fields="name,email,picture"
                        onClick={this.componentClicked}
                        callback={this.responseFacebook} /> */}