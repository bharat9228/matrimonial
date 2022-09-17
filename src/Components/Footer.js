import React from "react";
import facebook from '../assets/images/fb.png';
import twitter from '../assets/images/twitter.png';
import google from '../assets/images/google.png';
import MapIcon from '../assets/images/map.png';
import CallIcon from '../assets/images/call.png';
import MailIcon from '../assets/images/mail.png';
import DualHeart from '../assets/images/DualHeart.png';

function Footer(){
    return(
        <div className="footer-cntr">
            <table>
                <tbody>
                    <td className="footer-detail">
                        <img className="footer-detail-logo" src={DualHeart} alt="heart"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        <div className="footer-social-img">
                            <img src={facebook} alt="fb"/>
                            <img src={twitter} alt="twitter"/>
                            <img src={google} alt="google"/>
                        </div>
                    </td>
                    <td style={{paddingTop:'18px'}}>
                        <tr className="footer-links">
                            <p>Help & Support</p>
                            <ul>
                                <li><a href="/#">Help</a></li>
                                <li><a href="/#">FQAs</a></li>
                                <li><a href="/#">Feedback</a></li>
                            </ul>
                        </tr>
                    </td>
                    <td style={{paddingTop:'18px'}}>
                    <tr className="footer-links">
                            <p>Quick Links</p>
                            <ul>
                                <li><a href="/#">About US</a></li>
                                <li><a href="/#">Our Stories</a></li>
                                <li><a href="/#">Terms & Conditions</a></li>
                                <li><a href="/#">Contact Us</a></li>
                            </ul>
                        </tr>
                    </td>
                    <td style={{paddingTop:'18px'}}>
                        <tr className="footer-links">
                            <p>Address</p>
                            <div className="address-cntr">
                                <img src={MailIcon} alt="mail"/>
                                <p style={{marginTop:'0px'}}>Lorem ipsum dolor sit amet, consec</p>
                            </div>
                            <div className="address-cntr">
                                <img src={CallIcon} alt="call"/>
                                <p>986785494</p>
                            </div>
                            <div className="address-cntr">
                                <img src={MapIcon} alt="map"/>
                                <p>Lorem ipsum dolor sit amet, consec</p>
                            </div>
                        </tr>
                    </td>
                </tbody>
            </table>
        </div>
    )
}

export default Footer;