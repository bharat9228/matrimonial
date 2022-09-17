import Heart from '../assets/images/pink-heart.png';
import WelcomeImg from '../assets/images/welcome.png'; 

function LoginPage(){
    return(
    <div>
        <div className='login-page-cntr'>
            <div className='login-left-cntr'>
                <img src={WelcomeImg} alt="welcome"/>
                </div>
                <div className='login-right-cntr'>
                    <img src={Heart} alt="heart"/>
                    <p>Welcome Back !</p>
                    <form className='login-page-form'>
                        <input type="text" placeholder='Username'/>
                        <input type="password" placeholder='Password' style={{marginBottom:'10px'}}/>
                        <a href='/#'>Forget Password?</a>
                        <button>log In</button>
                    </form>
                    <div className='other-signin-cntr'>
                        <p><hr/>Or<hr/></p>
                        <button>Sign in with Google</button>
                    </div>
                    <p className='new-register-btn'>New Here ? <span style={{color:'#FF607B'}}>Register</span></p>
                </div>
        </div>  
    </div>)
}
export default LoginPage;