import React from 'react' ;
import ReactDOM from 'react-dom' ;

import Edcc from '../Edcc' ;
import {render, cleanup} from '@testing-library/react' ;
import "@testing-library/jest-dom/extend-expect" ;
import renderer from 'react-test-renderer' ;

afterEach(cleanup) ; 


//Make sure it renders

it("Renders without crashing",()=>{
    //test
    const div = document.createElement("div") ; 
    ReactDOM.render(<Edcc/>,div) ;
}) ;

it("Renders contents correctly",()=>{
    const {getByTestId} = render(<Edcc />)
    expect(getByTestId('footer')).toHaveTextContent('Copyright') ; 
    expect(getByTestId('nav')).toHaveTextContent(/Home /i) ;
    expect(getByTestId('content')).not.toBeEmptyDOMElement() ;
}) ;


//Snapshot testing
it("matches snapshot",()=>{
   const tree = renderer.create(<Edcc />).toJSON() ; //convert to vertual dom objet

   expect(tree).toMatchSnapshot() ;
})