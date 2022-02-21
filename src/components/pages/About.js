import React from  'react' ;
function About(){
    function openClose(){
        var btn = document.getElementById('more');
        if (btn.innerHTML === 'More...'){
            btn.innerHTML = 'Less..' ;
            var par = document.getElementById('more-txt');
            par.style.display = 'block' ;
        }
        else{
            closeOpen() ;
        }
    }
    function closeOpen(){
        var btn = document.getElementById('more');
        btn.innerHTML = 'More...' ;
        var par = document.getElementById('more-txt');
        par.style.display = 'none' ;
    }
    return(<div id="section">
        <div className='container py-3 text-center'>
            <div className='row'>
                <div className='col-md-6'>
                <p className="v1">
                        <b>Vision:</b> Setting the captives free and instructing the freed for life of liberty and abundance in Christ Jesus
                    </p>

                    <p className="v2">
                        <b>Values:</b>
                        <ul className='list-group'>
                            <li className='list-group-item'>
                                Excellence in Worship
                            </li>
                            <li className='list-group-item'>
                                Unity of the Body of Christ
                            </li>
                            <li className='list-group-item'>
                                Discipleship &amp; Missions
                            </li>
                            <li className='list-group-item'>Sound Family Unit</li>
                        </ul>
                    </p>
                </div>

                <div className='col-md-6 overflow-auto' >
                    <p className="read-text">
                        El Dabar City Church is a Bible based Messianic Community
                        that seeks to empower people by communicating the Good News
                        of the Kingdom of Yeshua the Messiah in a scriptural illustrative
                        and simple way. We are a Royal Priesthood. Messiah is the Centre...
                    </p>
                    <span id="more" className="click-btn btn-primary" onClick={openClose}>More...</span>
                    <text className="read-text " id="more-txt" style={{ display: 'none' , overflow:'scroll-y' }}> EL-DABAR CITY CHURCH (Latter House Community International ( LHCI ), we believe on the partnership of  Priests (those who are called in the five fold ministries or serving in the church full time)   and Kings ( those whom God has called to serve in the market place / secular). We believe both kings and priests are called and anointed by God for the advancement of the Kingdom of God.
                        <br />
                        We therefore endorse that Believers who work in the market place as professionals or business people are equally called and anointed by God in the market place or secular world as the priests are called and anointed by God to serve in the church.
                        <br />
                        We believe that those who works at  are serving God full time in the market place as Priestley kings. We are kingdom of Priests... <br />

                        We therefore equip kings for  market place and priests for the senctuary.<br />

                        We believe that Priests are called to give a vision in the Kingdom and kings are called to provide for the Kingdom vision.  <br />
                        So the work of the priest is to bless the king to succeed in the market place battle, and the work of the king is to take the spoil in the market place and bring them in the Kingdom of God.
                        In the Kingdom of God all are full time, whether as a pastor or medical doctor.   <br />
                        WE ARE A FAMILY OF KINGS AND PRIESTS PARTNERING FOR THE ADVANCEMENT OF THE KINGDOM OF GOD.  </text>
                </div>

            </div>

        </div>
   
</div>)
}

export default About ;