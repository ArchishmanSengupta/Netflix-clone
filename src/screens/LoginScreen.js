import React from 'react';
import "./LoginScreen.css";

function LoginScreen(){
    const [signIn,setSignIn]=useState(false);

    return (<div className="loginScreen">
        <div className="loginscreen_background">
            <img className="loginScreen__logo"src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
            <button onClick={()=>setSignIn(true)} className="loginScreen__button"> Sign In</button>
            <div className="loginScreen__gradient"></div>
            <div className="loginScreen__body">
                {signIn ?(<SignInScreen/>): (
                    <>
                    <h1>Ulimited films, TV programmes and more.</h1>
                    <h2> Watch anywhere. Cancel at any time</h2>
                    <h3> Ready to watch? Enter your email to create or restart your membership</h3>
                    <div className="loginScreen__input">
                        <form>
                            <input type='email'
                            placeholder="Email Address"/>
                            <button onClick={()=>setSignIn(true)} className="loginScreen__getStarted">GETSTARTED</button>
                        </form>
                    </div>
                    </>
                )}
            </div>
        </div>

    </div>
    )
}
export default LoginScreen;