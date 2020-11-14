import React ,{useEffect,useState}from 'react'
import firebase from "firebase";
// import "firebase/auth";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

// firebase.initializeApp({
//          apikey:"AIzaSyC3kA69kKekahenZzCufGMKybG1-OSMqME",
//          authDomain:"olxcloneauth.firebaseapp.com"
//      });

function Login(props) {
    const[login,setLogin] = useState(true);
    // eslint-disable-next-line no-undef
 useEffect(() => {
//   firebase.auth().onAuthStateChanged(user =>{
//       setLogin(!!user);
//   })
});

   const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
    //   firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccess: () => false
    }
  };


    return (
        <div>
        { login ?
            (
                <p>login</p>
                )
                : 
                (
                    <p>logout</p>
            //     <StyledFirebaseAuth
            //      uiConfig = {uiConfig}
            //      firebaseAuth = {firebase.auth()}
            //    />
            )   
        }
               
        </div>
    );
}

export default Login;