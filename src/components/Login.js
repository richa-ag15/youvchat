
import { FcGoogle, FcPhone } from 'react-icons/fc';
import React from 'react';
import "firebase/app";
import { auth } from '../firebase';
import firebase from 'firebase/app';
import Verification from './Verification';
// import { Form, Button } from "react-bootstrap"



const Login = () => {
    const [modalShow, setModalShow] = React.useState(false);
    
    return (
        <>

            <div id="login-page">
                <div id="login-card">
                    <h2 style={
                        { color: "#3b5998" }
                    }>Welcome to  <span style={{ color: "#EDC2D8FF" }}>YouV</span ><span style={{ color: "#8ABAD3FF" }}>chat!</span></h2>
                    <div className='login-button google'
                        onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>
                        <FcGoogle /> Sign in with google
                    </div>
                    <br /><br />
                    <div className='login-button facebook' onClick={() => setModalShow(true)}>
                        < FcPhone /> Sign In with phone
                    </div>

                   
                </div>

                <Verification
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
            </div>
             

        </>
    );
}


export default Login;