import React, { useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

function Contact() {
  // State variables for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const sendMail = (event) => {
    event.preventDefault(); 

    // emailjs
    //   .sendForm('service_lr47arn', 'template_j76wkxx', formData, {
    //     publicKey: 'YOUR_PUBLIC_KEY',
    //   })
    //   .then(
    //     (res) => {
    //       console.log('SUCCESS!');
    //       console.log("res=>",res);
    //     },
    //     (error) => {
    //       console.log('FAILED...', error.text);
    //     },
    //   );


    console.log("Sending email with following details:");
    console.log("Name:", formData.name);
    console.log("email:", formData.email);
    console.log("Subject:", formData.subject);
    console.log("Message:", formData.message);
    window.open(`mailto:manish5124chouhan@gmail.com?subject=${formData.subject}&body=${
      'I am ' + formData.name + ' ' + formData.email + '. ' +
      formData.message}`);
  };

  return (
    <div>
      <section id="contact" className="sections">
        <div className="container">
          <h2 className="magnify_text" data-aos-duration="1000" data-aos="fade-up">Contact</h2>
          <div className="row mt-5" data-aos-duration="1000" data-aos="fade-up">
            <div className="col-12 col-md-4">
              <div className="d-flex align-item-center">
                <div className="contact_logo">
                <i className="ri-mail-line"></i>
                </div>
                <div className="d-flex justify-content-center flex-column">
                  <h4 className="mb-0">Email: </h4>
                  <p className="mb-0">manish5124chouhan@gmail.com</p>
                </div>
              </div>
              <div className="d-flex  align-item-center">
                <div className="contact_logo">
                <i class="ri-smartphone-line"></i>
                </div>
                <div className="d-flex justify-content-center flex-column">
                  <h4 className="mb-0">Mobile: </h4>
                  <p className="mb-0">+91 9039125961</p>
                </div>
              </div>
              <div className="d-flex align-item-center">
                <div className="contact_logo">
                <i class="ri-map-pin-line"></i>
                </div>
                <div className="d-flex justify-content-center flex-column">
                  <h4 className="mb-0">Location: </h4>
                  <p className="mb-0">Indore, India</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-8 details">
                <form className="p-2" data-aos-duration="1000" data-aos="fade-up"  onSubmit={sendMail}>
                    <div className="row form-group">
                        <div className="col">
                            <input type="text" className="form-control"  name="name"  placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className="col form-group">
                            <input type="email" className="form-control" placeholder="Your Email" name="email" value={formData.email} onChange={handleChange} required/>
                        </div>
                       
                    </div>
                    <div className="form-group">
                  <input type="text" className="form-control mt-2" placeholder="Subject" name="subject" value={formData.subject} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <textarea className="form-control mt-2" rows="5" placeholder="Message..." name="message" value={formData.message} onChange={handleChange} required />
                </div>
                    <div className="d-flex justify-content-center p-3">
                        <button type="submit" className="submit">Submit</button>
                    </div>
                </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
