import React from 'react' ;
import ReactDOM  from 'react-dom';

import {render, cleanup} from '@testing-library/react' ;
import "@testing-library/jest-dom/extend-expect" ;
import renderer from 'react-test-renderer' ;
import Playlist from '../Playlist' ;


afterEach(cleanup) ; 
//Make sure it renders

it("Renders without crashing",()=>{
    //test
    const div = document.createElement("div") ; 
    ReactDOM.render(<Playlist/>,div) ;
    
}) ;

// it("Renders contents correctly",()=>{
    it("When using default url that is active",()=>{        
        const {getByTestId} = render(<Playlist />)
        const no_content = getByTestId('playlist-content') ; 
        // if (no_content!==undefined){
            //if the server is working and the clicked video link is >=0
            const playlist_manager = getByTestId('playlist-manager') ;
            expect(playlist_manager).not.toBeEmptyDOMElement() ; 
            expect(getByTestId('playlist-content')).toContainElement(playlist_manager) ; 
            
        // }
        // else{
            //if the server is not working || the clicked video link is <=0
        //    expect(no_content).toHaveTextContent('No Videos to choose from') ;
        // }
    }) ;
    // it("When passed a prop that has url in it",()=>{
    //     expect(getByTestId('nav')).toHaveTextContent(/Home /i) ;
    //     expect(getByTestId('content')).not.toBeEmptyDOMElement() ;
        
    // })
// }) ;
