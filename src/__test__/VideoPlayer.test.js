import React from 'react' ;
import  ReactDOM  from 'react-dom';

import {render, cleanup} from '@testing-library/react' ;
import "@testing-library/jest-dom/extend-expect" ;
import renderer from 'react-test-renderer' ;
import VideoPlayer from '../VideoPlayer' ;


afterEach(cleanup) ; 


//Make sure it renders

// it("Renders without crashing",()=>{
    //test
    const div = document.createElement("div") ;     
    it("should still render without props",()=>{
        ReactDOM.render(<VideoPlayer/>,div) ;
    }) ;
    it("should render with all required props",()=>{
        ReactDOM.render(<VideoPlayer vidURL={""}
        nextVidep={()=>{/*Empty function*/}}
        prevVideo={()=>{/*Empty function*/}}
        />,div)

    }) ;
// }) ;

// it("Renders contents correctly",()=>{
//     const {getByTestId} = render(<VideoPlayer />)
//     expect(getByTestId('footer')).toHaveTextContent('Copyright') ; 
//     expect(getByTestId('nav')).toHaveTextContent(/Home /i) ;
//     expect(getByTestId('content')).not.toBeEmptyDOMElement() ;
// }) ;
