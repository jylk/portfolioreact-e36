import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./Contact.css";

function Contact() {
  const [contactFormData, setContactFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    fullname: '',
    email: '',
    phone: '',
    message: ''
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      fullname: '',
      email: '',
      phone: '',
      message: ''
      }


    if (!contactFormData.fullname.trim()){
      newErrors.fullname = "Full Name is required";
      valid = false;
    }
     else if(contactFormData.fullname.length<3){
      newErrors.fullname = "Full Name should contain minimum 3 charachters";
      valid = false;
    }
    if (!contactFormData.email.trim()){
      newErrors.email = "E-mail is required";
      valid = false;
    }
     else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(contactFormData.email)){
      newErrors.email = "Please enter a valid email";
      valid = false;
    }
    if (!contactFormData.phone.trim()){
      newErrors.phone = "Please enter a phone number";
      valid = false;
    }
     else if(/^\d{10}$/.test(contactFormData.phone)){
      newErrors.phone = "Phone number must be 10 digits";
      valid = false;
    }
    if (!contactFormData.message.trim()){
      newErrors.message = "Please enter a message";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  }
  
    const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form is submitted")
    }
    

  }
  // 

    const onChangehandler = (e) => {
    const { name, value } = e.target;
    setContactFormData({ ...contactFormData, [name]: value });

  }
    console.log("ContactFormdata------------>", contactFormData);
  return (
    <Container>
      <Row className=' justify-content-center'>
        
        <Col md={6} >
          <div className='shadow bg-white p-4 m-4'>
          <p span className='text-center title'>Contact Me</p>
            <form className='form-container my-4' onSubmit={handleSubmit}>
              <input type='text' name='fullname' placeholder='Please enter your full name' onChange={onChangehandler} />
              <span className='errors'>{errors?.fullname ?? ''}</span>
              <input type='email' name='email' placeholder='Please enter your email id' onChange={onChangehandler} />
              <span className='errors'>{errors?.email ?? ''}</span>
              <input type='number' name='Phone Number' placeholder='Please enter your phone number' onChange={onChangehandler} />
              <span className='errors'>{errors?.phone ?? ''}</span>
              <textarea type='text' rows={10} name='message' placeholder='Please enter your message' onChange={onChangehandler}></textarea>
              <span className='errors'>{errors?.message ?? ''}</span>
              <button>Send message</button>

            </form>

          </div>
        </Col>
      </Row>
    </Container>
  )
}



export default Contact