import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { useRef } from 'react';
// const {postSignup, checkEmail} = require('./signup.js')
import {checkEmail, postSignup, checkUsername} from './signup.js'

function Signup(){

  const errorElement = useRef();

  function handleSubmit(event){
    event.preventDefault();
    console.log('testing submit');
    let form = event.currentTarget;
    console.log(form)
    let username = form.form1.value;
    let email = form.form2.value;
    let pass1 = form.form3.value;
    let pass2 = form.form4.value;

    if(checkUsername(username)){
      if(checkEmail(email)){
        console.log('pass');
        if(pass1 !== pass2){
          errorElement.current.innerHTML = "Passwords don't match";
          errorElement.current.hidden = false;
        }else{
          errorElement.current.hidden = true;
          postSignup(username, email, pass1);
        }
      }else{
        errorElement.current.innerHTML = "Invalid Email";
        errorElement.current.hidden = false;
      }
    }else{
        errorElement.current.innerHTML = "User not found in DB";
        errorElement.current.hidden = false;
    }
}
    

  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)', height: "100vh"}}>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{maxWidth: '600px'}}>
        <form onSubmit={(event) => handleSubmit(event)}> 
          <MDBCardBody className='px-5' >
            <h2 className="text-uppercase text-center mb-5">Lets get your account back</h2>
            <MDBInput wrapperClass='mb-4' label='Username' size='lg' id='form1' type='text'/>
            <MDBInput wrapperClass='mb-4' label='Email' size='lg' id='form2' type='email'/>
            <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password'/>
            <MDBInput wrapperClass='mb-4' label='Repeat password' size='lg' id='form4' type='password'/>
            <p className='text-center' ref={errorElement} hidden={true}> User not found </p>
            <MDBBtn type='submit' className='mb-4 w-100 gradient-custom-4' size='lg'>Sign Up</MDBBtn>
          </MDBCardBody>
        </form>
      </MDBCard>
    </MDBContainer>
  );
}

export default Signup;