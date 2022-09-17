import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import CoupleImg from '../assets/images/couple.png';
import SignUpIcon from '../assets/images/sign-up.png';
import ConnectIcon from '../assets/images/connect.png';
import MessagesIcon from '../assets/images/Messages.png';
import RightArrow from '../assets/images/right_arrow.png';
import HeartIcon from '../assets/images/heart.png';
import CoupleIcon from '../assets/images/couple2.png';
import Couple3Icon from '../assets/images/couple3.png';
import EllipseIcon from '../assets/images/Ellipse.png';
import StoryHeart from '../assets/images/story-heart.png';
import BrideGroom from '../assets/images/bride-groom.png';
import PrivacyIcon from '../assets/images/privacy.png';
import SecurityIcon from '../assets/images/security.png';
import PurityIcon from '../assets/images/purity.png';
import AboutUsImg from '../assets/images/about-us.png';
import ClientsImg from '../assets/images/clients.png';
import Client2Img from '../assets/images/client2.png';
import Image1 from '../assets/images/img1.png';

function HomePage(){
     const FilterCategory=()=>{return(
            <div className="filter-category-box">
            <div className="filter-category-item">
            
            <div className="select">
            <select name="I’m Looking for" id="cars">
              <option value="I’m Looking for">I’m Looking for</option>
              <option value="Look">Look I’m Looking</option>
            </select></div>
            <div className="select">
            <select name="Age" id="Age">
              <option value="Age">Age</option>
              <option value="Age">Age2</option>
            </select></div>

            <div className="select">
            <select name="Religion" id="Religion">
              <option value="Religion">Religion</option>
              <option value="Religion">Religion2</option>
            </select></div>

            <div className="select">
            <select name="Cast" id="Cast">
              <option value="Cast">Cast</option>
              <option value="Caste">Cast2</option>
            </select></div></div>

                <button>Let’s Begin</button>
            </div>
        )}
        
        const SucessStories=()=>{return(
            <div>
            <div className="stories-container">
                <div className="stories-left-container">
                    <img src={Image1} alt="image1"/>
                </div>
                <div className="stories-line">
                    <img className="stories-line-img-2" src={StoryHeart} alt="heart"/>
                    <div></div>
                    <img className="stories-line-img-3" src={EllipseIcon} alt="ellipe"/>
                </div>
                <div className="stories-right-container">
                <img style={{position: 'absolute',marginLeft: '250px',width:'40px'}} src={HeartIcon} alt="heart"/>
                    <p>Zoya <span style={{color:'#FF607B'}}>Weds</span> Honey</p>
                    <p>Currently living in Mumbai , Married 10 years</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <button>know More</button>
                </div>  
            </div>

            <div className="stories-container" style={{justifyContent:'normal'}}>
            <div className="stories-right-container" style={{paddingLeft:'60px'}}>
                <img style={{position: 'absolute',marginLeft: '250px',width:'40px'}} src={HeartIcon} alt="heart"/>
                    <p>Zoya <span style={{color:'#FF607B'}}>Weds</span> Honey</p>
                    <p>Currently living in Mumbai , Married 10 years</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <button>know More</button>
                </div> 
                <div className="stories-line" style={{left:'46.4%'}}>
                    <div></div>
                    <img className="stories-line-img-3" src={EllipseIcon} alt="ellipe"/>
                </div> 
                <div className="stories-left-container" style={{width:'40%'}}>
                    <img src={Image1} alt="image1"/>
                </div>
            </div>
            <div className="stories-container">
                <div className="stories-left-container">
                    <img src={Image1} alt="image1"/>
                </div>
                <div className="stories-line">
                    <div></div>
                    <img className="stories-line-img-2" src={StoryHeart} alt="heart"/>
                </div>
                <div className="stories-right-container">
                <img style={{position: 'absolute',marginLeft: '250px',width:'40px'}} src={HeartIcon} alt="heart"/>
                    <p>Zoya <span style={{color:'#FF607B'}}>Weds</span> Honey</p>
                    <p>Currently living in Mumbai , Married 10 years</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <button>know More</button>
                </div>  
            </div></div>
        )}

    return(
        <div>
        <div className="container">
            <Header/>
            <div className="container-box">
                <div className="container-title">
                    <p>We Bring <span style={{fontSize:'48px'}}>People</span> together.</p>
                    <p><span style={{fontSize:'48px'}}>LOVE</span> unites them...</p>
                    <button className="find-someone-btn">Lets Find Someone
                        <img src={RightArrow} alt="arrow"/>
                    </button>
                </div>
                <img src={CoupleImg} alt="couple"/>
            </div>
            </div>
            
            {FilterCategory()}
            
            <div className="follow-steps-box">
                <div className="follow-steps">
                    <div style={{display:'flex',alignItems:'center',flexFlow:'column'}}>
                    <img src={SignUpIcon} alt="signup"/>
                    <p className="follow-steps-title">Sign Up</p>
                    <p className="follow-steps-detail">Register for free &put<br/> up your matrimony<br/> Profile</p>
                    </div>
                    <p className="follow-steps-no" style={{color:'#F78770'}}>1</p>
                </div>
                <div className="follow-steps">
                    <div style={{display:'flex',alignItems:'center',flexFlow:'column'}}>
                    <img src={ConnectIcon} alt="signup"/>
                    <p className="follow-steps-title">Connect</p>
                    <p className="follow-steps-detail">Register for free &put<br/> up your matrimony<br/> Profile</p>
                    </div>
                    <p className="follow-steps-no2">2</p>
                </div>
                <div className="follow-steps">
                    <div style={{display:'flex',alignItems:'center',flexFlow:'column'}}>
                    <img src={MessagesIcon} alt="signup"/>
                    <p className="follow-steps-title">Interact</p>
                    <p className="follow-steps-detail">Register for free &put<br/> up your matrimony<br/> Profile</p>
                    </div>
                    <p className="follow-steps-no" style={{color:'#F78770'}}>1</p>
                </div>
            </div>
            <div className="client-stories-box">
                <img style={{position: 'absolute',marginLeft: '150px',width:'50px'}} src={HeartIcon} alt="heart"/>
                <p className="client-stories-title"><span style={{color:'#FF607BED'}}>Success</span> Stories</p>
                <p className="client-stories-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
            
            {SucessStories()}

            <div className="why-us-box">
                <p className="why-us-title">Why <span>Us</span></p>
                <div className="why-us-info-cntr">
                <div className="why-us-img-container">
                    <img src={BrideGroom} alt="img" />
                </div>
                <div className="why-us-detail-cntr">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <div className="why-us-detail-img-cntr">
                    <img src={PurityIcon} alt="img" />
                    <div className="why-us-detail-img-cntr2">
                    <img src={PrivacyIcon} alt="img" />
                    </div>
                    <img src={SecurityIcon} alt="img" />
                    </div>
                </div>
                </div>
            </div>

            <div className="why-us-box" style={{marginTop:'10px'}}>
                <p className="why-us-title">About <span>Us</span></p>
                <div className="about-us-cntr">
                    <div className="about-us-left-cntr">
                        <img src={AboutUsImg} alt="about-us" />
                    </div>
                    <div className="about-us-right-cntr">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button>know More</button>
                    </div>
                </div>
                </div>

            <div className="client-stories-box" style={{padding:'40px'}}>
                <img style={{position: 'absolute',marginLeft: '160px',width:'40px'}} src={HeartIcon} alt="heart"/>
                <p className="client-stories-title">Our Happy <span style={{color:'#FF607BED'}}>Clients</span></p>
                <div className="client-stories-cntr">
                <div className="client-stories-left-cntr">
                    <img src={ClientsImg} alt="img"/>
                </div>
                <div className="client-stories-right-cntr">
                    <div className="client-stories-details">
                    <p>Zoya Khan</p>
                    <p>Mumbai</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="client-list-cntr">
                        <div className="client-list-cntr">
                            <img src={Client2Img} alt="client"/>
                            <img src={Client2Img} alt="client"/>
                            <img src={Client2Img} alt="client"/>
                            <img src={Client2Img} alt="client"/>
                            <img src={Client2Img} alt="client"/>
                        </div>
                        <div className="client-list-scroll">
                        <button></button>
                        <p>NEXT</p>
                        <button></button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <Footer/>
         </div>
    )
}
export default HomePage;