import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import React, { useState } from "react";
import jwt_decode from "jwt-decode";
import User from "./user";
function Outh() {
  let credId =
    "1042743214705-74s11rkplsnpr36jugdq29bu9lrau085.apps.googleusercontent.com";
  const [userdata, setUserdata] = useState("");
  //   if (userdata) {
  //     return <User user={userdata} />;
  //   } this is for directly call not saved in local system

  if (userdata) {
    window.localStorage.setItem("name", userdata.name);
    window.localStorage.setItem("email", userdata.email);
    window.localStorage.setItem("picture", userdata.picture);
    return <User info={userdata} />;
  }

  let name = window.localStorage.getItem("name");
  let email = window.localStorage.getItem("email");
  let picture = window.localStorage.getItem("picture");

  if (name && email && picture) {
    setUserdata({ name: name, email: email, picture: picture });
  }

  return (
    <div>
      <h1>google login</h1>
      {/* <h1>{userdata.name}</h1>
      <h1>{userdata.email}</h1>
      this is for showing on this page for rendering this piece of code
      <img src={userdata.picture}></img> */}
      <GoogleOAuthProvider clientId={credId}>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            let token = credentialResponse.credential;
            let decode = jwt_decode(token);
            // console.log(decode);
            setUserdata(decode);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </GoogleOAuthProvider>
    </div>
  );
}

export default Outh;
