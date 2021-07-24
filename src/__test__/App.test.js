import React from 'react' ;
import ReactDOM from 'react-dom' ;

import App from '../App' ;


//Make sure it renders

it("Renders without crashing",()=>{
    //test
    const div = document.createElement("div") ; 
    ReactDOM.render(<App/>,div) ;
})