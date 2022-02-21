import React from 'react' ;

function Contact(){
    return (<div >
        <section className='py-5'>

            <div className="container">
                <div className="row">
                    <div className="col-md-4">
        
                        <a className="read-text btn btn-primary mb-2" href="https://www.facebook.com/eldabarcc" target="_blank" rel="noreferrer">
                            <i className="bi bi-facebook"></i>
                            EL Dabar City Church</a>
                        <br />
                        <a className="read-text  btn btn-primary mb-3" href="https://www.youtube.com/channel/UCd9Sbju3Tp3vzQGfnolSC_Q" target="_blank" rel="noreferrer">
                            <i className="bi bi-youtube py-5"></i>
                            EL Dabar City Church</a>
                        <br />

                        <div className="fb-page"
                            data-href="https://www.facebook.com/eldabarcc/"
                            data-width="380"
                            data-hide-cover="false"
                            data-show-facepile="false"></div>
                    </div>
                    <div className="col-md-8">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.8161729681165!2d28.016854714669154!3d-25.577781945009338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ebfce0a62400737%3A0xf41c1ae229aa8102!2sEl%20Dabar%20City%20Church.%20LatterHouse%20Community%20Churc%20(LHCC)!5e0!3m2!1sen!2sza!4v1645382451081!5m2!1sen!2sza"
                            width="600" height="450" style={{ border: "0;" }} 
                     allowfullscreen="1" loading="lazy" title='Directions to EDCC'></iframe>

                    </div>
                </div>
            </div>

        
        </section>

    </div>)
}

export default Contact ;