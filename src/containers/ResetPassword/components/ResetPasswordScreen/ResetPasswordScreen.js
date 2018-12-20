import React from 'react';
import RequestEmailForm from '../RequestEmailForm';
import ResetPasswordForm from '../ResetPasswordForm';
import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';


const ResetPassworScreen = ({
    confirmResetLink,
    token,
}) => (
  <div style={{backgroundColor:'#f0f4f9'}}>
      <Header/>
      { confirmResetLink === 'success' ? (<ResetPasswordForm token={token}/>) : (<RequestEmailForm/>)  }
      <Footer/>
  </div>  
);

export default ResetPassworScreen;