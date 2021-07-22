import React from 'react' ;
import './VideoPlayer.css' ;


class LatestVideo extends React.Component{
    render(){ 
        console.log('VidPlayer Props',this.props) ;
        if (this.props.vidURL === undefined){
            return (<div>
                Video Player
            </div>)
        }
        // const vidHeight = this.props.vidURL.height === undefined ? '560':this.props.vidURL.height  ;
        // const vidWidth = this.props.vidURL.width === undefined ? '560':this.props.vidURL.width ;
        const vidSource = this.props.vidURL.source === undefined ? '':this.props.vidURL.source ;
        const vidTitle = this.props.vidURL.title === undefined ? 'EL-Dabar : The Word Of God' :this.props.vidURL.title ;
        return ( 
            <div id="VideoPlayer">

                <p className="title">{vidTitle}</p> 

                <iframe className="vidContainer"
                title={vidTitle}
                src={vidSource} 
                // width={vidWidth} 
                // height={vidHeight} 
                allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" 
                
                />      
                <br/>
                <button className="click-btn" onClick={this.props.prevVideo}>Previous Video</button>
                <button className="click-btn" onClick={this.props.nextVideo} >Next Video</button>
           
        </div> )
    }
}

export default LatestVideo ;
// export {LatestVideo , VideoPage}