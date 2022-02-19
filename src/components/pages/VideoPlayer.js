import React from 'react' ;
// import './VideoPlayer.css' ;


class LatestVideo extends React.Component{
    render(){ 
        // console.log('VidPlayer Props',this.props) ;
        if (this.props.vidURL === undefined){
            return (<div>
                <p className="sticky-sm-top"> Video Player</p> 
            </div>)
        }
        // const vidHeight = this.props.vidURL.height === undefined ? '560':this.props.vidURL.height  ;
        // const vidWidth = this.props.vidURL.width === undefined ? '560':this.props.vidURL.width ;
        const vidSource = this.props.vidURL.source === undefined ? '':this.props.vidURL.source ;
        const vidTitle = this.props.vidURL.title === undefined ? 'EL-Dabar : The Word Of God' :this.props.vidURL.title ;
        return ( 
            <div id="VideoPlayer" >

                <p className="sticky-sm-top">{vidTitle}</p> 

                <div id="vidContainer" className='ratio ratio-4x3'>

                <iframe className="vidContainer"
                title={vidTitle}
                src={vidSource} 
                width="500" height="316"  
                allowFullScreen={true} allow="clipboard-write; encrypted-media; picture-in-picture; web-share" 
                />      
                </div>
        </div> )
    }
}

export default LatestVideo ;
// export {LatestVideo , VideoPage}