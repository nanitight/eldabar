import React from 'react' ;
import './VideoPlayer.css' ;


class LatestVideo extends React.Component{
    render(){
        return ( 
        <div>
            <p className="welcome"> Hello,  {this.props.userName}</p> 

            <div id="VideoPlayer">
                <iframe 
                title={this.props.vidURL.title}
                src={this.props.vidURL.source} 
                width={this.props.vidURL.width} 
                height={this.props.vidURL.height} 
                allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" 
                allowFullScreen="true"
                />      
             </div>

        </div> )
    }
}

export default LatestVideo ;
// export {LatestVideo , VideoPage}