import React from "react";
import { Link } from "react-router-dom";

function Footer(){
    return(
        <section className="bg-dark text-white py-5">

            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <h6>Info</h6>
                        <hr/>
                        <table className="table table-hover table-striped text-white">
                            <thead>
                                <tr className="table-primary">
                                    <th scope="col">
                                    Our Church Services are as follows:

                                    </th>
                                    <th>

                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="table-secondary">
                                        Saturdays @ 15:00-17:00
                                    </td>
                                    <td className="table-success">
                                        Church band/choir practice
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-secondary">
                                        Sunday @ 09:00-11:00
                                    </td>
                                    <td className="table-success">
                                        Main Worship service
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-secondary">
                                        Wednesday @ 18:30-20:00
                                    </td>
                                    <td className="table-success">
                                        Hebrew Biblical Roots
                                    </td>
                                </tr>
                            </tbody>
                            
                        </table>
                        <br/> 
                    </div>
                    <div className="col-md-4">
                        <h6>Quick Links</h6>
                        <hr/>
                        <div>
                            <div>
                            <Link to={'/'} className='text-decoration-none '>Home</Link>

                            </div>
                            <div>
                            <Link to={'/about'} className='text-decoration-none ' >About Us</Link>

                            </div>
                            <div>
                            <Link to={'/contact'} className='text-decoration-none' >Contact</Link>

                            </div>
                            <div><Link to={'//fvideos'} className='text-decoration-none' >Videos</Link></div>
                        </div>
                        <p>
                        Empowering People To Impact The World</p>
                    </div>
                    <div className="col-md-2">
                        <h6>Contact Information</h6>
                        <hr/>
                       <h2>
                           <table>
                               <tbody>
                               <tr>
                                   <td>
                                   <i className="bi bi-whatsapp"></i><br/>
                                   <i className="bi bi-telephone-outbound-fill"></i>

                                   </td>
                                   <td>
                                   &nbsp; 065 848 3510

                                    </td>
                               </tr>
                               </tbody>
                           </table>
                       </h2>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Footer ;