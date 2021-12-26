import React, { useState } from "react";

const Contact = (props) =>{
  document.title = props.title;

  const [data, setData] = useState({
        fname:"",
        email:"",
        subject:"",
        message:""

  });

  const contactForm = (event) =>{
    event.preventDefault();
    let fname = data.fname;
    let email = data.email;
    let subject = data.subject;
    let message = data.message;
    alert(`this is form data Name: ${fname}, Email : ${email} Subject : ${subject} and Message : ${message}`);
  }

  const inptVal = (event) =>{
     const {name, value} =  event.target;
     setData((preVal)=>{
        return{
            ...preVal,
            [name]:value,
        }
     });
  }

    return(
        <>
            <section id="contact" class="contact">

            <div className="container" data-aos="fade-up">

                <header className="section-header text-center text-info">
                    <h1>Contact Us</h1>
                </header>

              <div className="row gy-4">

                <div class="col-lg-6">

                  <div className="row gy-4">
                    <div className="col-md-6">
                      <div className="info-box">
                        <i className="bi bi-geo-alt"></i>
                        <h3>Address</h3>
                        <p>A108 Adam Street,<br/>New York, NY 535022</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="info-box">
                        <i className="bi bi-telephone"></i>
                        <h3>Call Us</h3>
                        <p>+1 5589 55488 55<br/>+1 6678 254445 41</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="info-box">
                        <i className="bi bi-envelope"></i>
                        <h3>Email Us</h3>
                        <p>info@example.com<br/>contact@example.com</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="info-box">
                        <i className="bi bi-clock"></i>
                        <h3>Open Hours</h3>
                        <p>Monday - Friday<br/>9:00AM - 05:00PM</p>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="col-lg-6">
                  <form onSubmit={contactForm} class="php-email-form">
                    <div class="row gy-4">

                      <div className="col-md-6">
                        <input type="text" name="fname"  value={data.name} className="form-control" placeholder="Your Name" required onChange={inptVal} />
                      </div>

                      <div className="col-md-6 ">
                        <input type="email" className="form-control" name="email" value={data.email} placeholder="Your Email" required onChange={inptVal} />
                      </div>

                      <div className="col-md-12">
                        <input type="text" className="form-control" name="subject" value={data.subject} placeholder="Subject" required  onChange={inptVal} />
                      </div>

                      <div className="col-md-12">
                        <textarea className="form-control" name="message"  rows="6" placeholder="Message" required onChange={inptVal} >{data.message}</textarea>
                      </div>

                      <div className="col-md-12 text-center">
                        <button className="btn btn-primary" type="submit">Send Message</button>
                      </div>

                    </div>
                  </form>
                </div>
              </div>
            </div>
           </section>
        </>
    );
}
export default Contact;