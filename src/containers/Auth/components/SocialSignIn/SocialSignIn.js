import React from 'react';


const SocialSignIn = ({
                          handleSocialSignIn,
                          handleSignIn
                      })=> (
    <div style={{display:"flex",textAlign:'center', fontWeight:"600",height:'48px',alignItems:'center',cursor:'pointer'}}>
        <div onClick={()=>{ handleSignIn('facebook') }} style={{flexGrow:'1',backgroundColor:'#3B5998',color:'white',padding:'10px'}}>
            <i style={{fontSize:'20px'}} className="fab fa-facebook-f"></i>            Facebook Login
        </div>
        <div onClick={()=>{ handleSignIn('google') }} style={{flexGrow:'1',backgroundColor:'white',color:'#f53e46',padding:'10px'}}>
            <i style={{fontSize:'20px'}} className="fab fa-google"></i>            Google Login
        </div>
    </div>
);

export default SocialSignIn;