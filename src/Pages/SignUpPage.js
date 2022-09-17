import Heart from '../assets/images/pink-heart.png';
import WelcomeImg from '../assets/images/signup-welcome.png'; 

function SignUpPage(){
    return(
    <div>
        <div className='login-page-cntr'>
            <div className='login-left-cntr' style={{padding:'0px',width:'40%'}}>
                <img src={WelcomeImg} alt="welcome" style={{width:'100%'}}/>
                </div>
                <div className='login-right-cntr' style={{width:'60%'}}>
                    <img src={Heart} alt="heart"/>
                    <p>Register Here</p>
                    <form className='login-page-form'>
                        <input type="text" placeholder='Name'/>
                        <input type="email" placeholder='Email Id'/>
                        <input type="number" placeholder='Phone Number'/>
                        <input type="text" placeholder='Marital Status'/>
                        <input type="number" placeholder='Age'/>
                        <input type="password" placeholder='Password'/>
                        <input type="password" placeholder='Confirm Password' style={{marginBottom:'10px'}}/>
                        <a href='/#'>Forget Password?</a>
                        <button style={{lineHeight:'44px'}}>Register</button>
                    </form>
                    <p className='new-register-btn'>already register ? <span style={{color:'#FF607B'}}>Log In</span></p>
                </div>
        </div>  
    </div>)
}
export default SignUpPage;