(this.webpackJsonpedcc=this.webpackJsonpedcc||[]).push([[0],{36:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var i=n(1),s=n.n(i),a=n(28),r=n.n(a),o=(n(36),n(8)),c=n(9),l=n(11),d=n(10),h=n(13),u=n(2),j=n(0);var b=function(){return Object(j.jsxs)("div",{id:"section",children:[Object(j.jsxs)("p",{className:"v1",children:[Object(j.jsx)("u",{children:"Vision:"})," Setting the captives free and instructing the freed for life of liberty and abundance in Christ Jesus"]}),Object(j.jsxs)("p",{class:"v2",children:[Object(j.jsx)("u",{children:"Values:"}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{id:"1",children:"Excellence in Worship"}),Object(j.jsx)("li",{id:"2",children:"Unity of the Body of Christ"}),Object(j.jsx)("li",{id:"3",children:"Discipleship & Missions"}),Object(j.jsx)("li",{id:"4",children:"Sound Family Unit"})]})]}),Object(j.jsx)("p",{className:"read-text",children:"El Dabar City Church is a Bible base Messianic Community that seeks to empower people by communicating the Good News of the Kingdom of Yeshua the Messiah in a scriptural illustrative and simple way. We are a Royal Priesthood. Messiah is the Centre..."}),Object(j.jsx)("span",{id:"more",className:"click-btn",onClick:function(){var e=document.getElementById("more");"More..."===e.innerHTML?(e.innerHTML="Less..",document.getElementById("more-txt").style.display="block"):(document.getElementById("more").innerHTML="More...",document.getElementById("more-txt").style.display="none")},children:"More..."}),Object(j.jsxs)("text",{className:"read-text",id:"more-txt",style:{display:"none"},children:[" EL-DABAR CITY CHURCH (Latter House Community International ( LHCI ), we believe on the partnership of  Priests (those who are called in the five fold ministries or serving in the church full time)   and Kings ( those whom God has called to serve in the market place / secular). We believe both kings and priests are called and anointed by God for the advancement of the Kingdom of God.",Object(j.jsx)("br",{}),"We therefore endorse that Believers who work in the market place as professionals or business people are equally called and anointed by God in the market place or secular world as the priests are called and anointed by God to serve in the church.",Object(j.jsx)("br",{}),"We believe that those who works at  are serving God full time in the market place as Priestley kings. We are kingdom of Priests... ",Object(j.jsx)("br",{}),"We therefore equip kings for  market place and priests for the senctuary.",Object(j.jsx)("br",{}),"We believe that Priests are called to give a vision in the Kingdom and kings are called to provide for the Kingdom vision.  ",Object(j.jsx)("br",{}),"So the work of the priest is to bless the king to succeed in the market place battle, and the work of the king is to take the spoil in the market place and bring them in the Kingdom of God. In the Kingdom of God all are full time, whether as a pastor or medical doctor.   ",Object(j.jsx)("br",{}),"WE ARE A FAMILY OF KINGS AND PRIESTS PARTNERING FOR THE ADVANCEMENT OF THE KINGDOM OF GOD.  "]})]})};var p=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("a",{className:"read-text",href:"https://www.facebook.com/eldabarcc",target:"_blank",rel:"noreferrer",children:"Facebook"}),Object(j.jsx)("br",{}),Object(j.jsx)("a",{className:"read-text",href:"https://www.youtube.com/channel/UCd9Sbju3Tp3vzQGfnolSC_Q",target:"_blank",rel:"noreferrer",children:"Youtube"})]})},m=n(29),v=(n(38),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var i=arguments.length,s=new Array(i),a=0;a<i;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={userName:"",pass:"",logged:!1,source:void 0,vidTitle:void 0,playlist:void 0},e.postMsg=function(){if(void 0!==e.state.source){var t={source:e.state.source,playlist:e.state.playlist,title:e.state.vidTitle};console.log("Message sent to backend",t),fetch("http://localhost:9009/edcc/addVid",{method:"POST",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){console.log(e),void 0!==e.data.data||void 0!==e.data?alert("responed"):e.error?(console.log("Backend Error?",e.error),alert("Error")):(console.log(e.message),alert(e.message))})).catch((function(e){console.error("Error in communication occured ",e)}))}else alert("Please Enter a source before submitting")},e.handleLog=function(t){e.setState(Object(m.a)({},t.target.name,t.target.value))},e.handleSubmit=function(){"Nani"===e.state.userName&&"1234"===e.state.pass?e.setState({logged:!0}):(alert("incorrect Password Username, Please try again."),e.setState({pass:""}))},e.SendVideoInfo=function(){return Object(j.jsx)("div",{children:Object(j.jsxs)("form",{onSubmit:e.postMsg,children:[Object(j.jsx)("input",{name:"source",type:"text",placeholder:"http://...",value:e.state.source,onChange:e.handleLog}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{name:"vidTitle",type:"text",placeholder:"Title",value:e.state.vidTitle,onChange:e.handleLog}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{name:"playlist",type:"text",placeholder:"PlayList",value:e.state.playlist,onChange:e.handleLog}),Object(j.jsx)("b",{}),Object(j.jsx)("button",{type:"submit",children:"Add Video"})]})})},e}return Object(c.a)(n,[{key:"render",value:function(){return this.state.logged?Object(j.jsxs)("div",{className:"addVideoContainer",children:[Object(j.jsxs)("p",{id:"welcome",className:"title",children:[" Hello, ",this.state.userName," "]}),this.SendVideoInfo(this.postMsg)]}):Object(j.jsxs)("div",{className:"addVideoContainer",children:[Object(j.jsx)("h1",{children:"Enter User Name"}),Object(j.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(j.jsx)("input",{name:"userName",type:"text",placeholder:"Nani T",value:this.state.userName,onChange:this.handleLog}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{name:"pass",type:"password",value:this.state.pass,onChange:this.handleLog}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{type:"submit",children:"Log In"})]})]})}}]),n}(s.a.Component)),x=(n(39),n(40),n(41),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){if(void 0===this.props.vidURL)return Object(j.jsx)("div",{children:"Video Player"});var e=void 0===this.props.vidURL.source?"":this.props.vidURL.source,t=void 0===this.props.vidURL.title?"EL-Dabar : The Word Of God":this.props.vidURL.title;return Object(j.jsxs)("div",{id:"VideoPlayer",children:[Object(j.jsx)("p",{className:"title",children:t}),Object(j.jsx)("iframe",{className:"vidContainer",title:t,src:e,allowFullScreen:!0,allow:"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"})]})}}]),n}(s.a.Component)),O=(n(42),n(30)),f=n.n(O),g=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).getAllVideos=function(){f.a.get("https://nd1server1.herokuapp.com/edcc/videos").then((function(e){console.log("Backend",e);var t=e.data;void 0!==t.data?i.setState({vidsArray:t.data},(function(){console.log("updating state")})):alert("no videos found")})).catch((function(e){return console.log("Error in comms",e)}))},i.nextVideo=function(){i.state.currVidIndex===i.state.vidsArray.length-1?!0===window.confirm("End of Current playlist is reached, do you want to jump to the next Playlist?")||(alert("start at first video"),i.setState({currVidIndex:0})):i.setState({currVidIndex:i.state.currVidIndex+1})},i.prevVideo=function(){0===i.state.currVidIndex?alert("No Previous Video, Watch next video or watch another playlist"):i.setState({currVidIndex:i.state.currVidIndex-1})},i.playSelectedVideo=function(e){i.setState({currVidIndex:e})},i.state={currVidIndex:0,vidsArray:[],userName:"PlaceHolder1"},i}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.getAllVideos()}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this,t=this.state.vidsArray;if(Array.isArray(t)&&this.state.currVidIndex>=0){var n=t[this.state.currVidIndex];return Object(j.jsxs)("div",{id:"bigContainer","data-testid":"playlist-content",children:[Object(j.jsx)(x,{vidURL:void 0===n?{}:n,nextVideo:this.nextVideo,prevVideo:this.prevVideo}),Object(j.jsxs)("div",{className:"Playlist Manager","data-testid":"playlist-manager",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{className:"click-btn",onClick:this.prevVideo,children:"Previous Video"}),Object(j.jsx)("button",{className:"click-btn",onClick:this.nextVideo,children:"Next Video"})]}),Object(j.jsxs)("p",{className:"title",children:[Object(j.jsx)("span",{className:"click-btn",children:"\u2630"}),"EL-DABAR : THE WORD OF GOD"]}),Object(j.jsx)("div",{children:this.state.vidsArray.length>0?this.state.vidsArray.map((function(t,n){return Object(j.jsx)("button",{className:"click-btn",onClick:function(){return e.playSelectedVideo(n)},children:t.title},"k".concat(n))})):Object(j.jsx)("p",{children:"No Videos Selected"})})]})]})}return Object(j.jsx)("div",{"data-testid":"playlist-content",children:"No Videos to choose from"})}}]),n}(s.a.Component),y=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).url="https://nd1server1.herokuapp.com",i}return Object(c.a)(n,[{key:"render",value:function(){return Object(j.jsxs)(h.a,{children:[Object(j.jsxs)("div",{className:"nav-container","data-testid":"nav",children:[Object(j.jsx)("img",{id:"logo",src:"".concat(this.url,"/artist/edcc/logosquare.jpg"),alt:"logo"}),Object(j.jsxs)("div",{className:"nav-list",children:[Object(j.jsx)(h.b,{to:"/",children:"HOME "}),Object(j.jsx)(h.b,{to:"/about",children:"About Us "}),Object(j.jsx)(h.b,{to:"/contact",children:"Contact Us "})]}),Object(j.jsx)(h.b,{className:"click-btn title",to:"/add",children:"+ "})]}),Object(j.jsx)("div",{className:"content","data-testid":"content",children:Object(j.jsxs)(u.c,{children:[Object(j.jsx)(u.a,{path:"/",exact:!0,component:g}),Object(j.jsx)(u.a,{path:"/contact",component:p}),Object(j.jsx)(u.a,{path:"/about",component:b}),Object(j.jsx)(u.a,{path:"/add",component:v})]})}),Object(j.jsxs)("div",{id:"footer","data-testid":"footer",children:[Object(j.jsx)("p",{id:"slogan",children:"Empowering People To Impact The World"}),"Copyright 2019-2021"]})]})}}]),n}(s.a.Component),k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,67)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),i(e),s(e),a(e),r(e)}))};r.a.render(Object(j.jsx)(y,{}),document.getElementById("root")),k()}},[[66,1,2]]]);
//# sourceMappingURL=main.882d7052.chunk.js.map