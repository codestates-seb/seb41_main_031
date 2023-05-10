import React from 'react';
import styled from 'styled-components';
import '../Asset/styles.css'
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';



class ContactForm extends React.Component {
  componentDidMount() {
    // SB Forms Contact Form
    // To make this form functional, sign up at https://startbootstrap.com/solution/contact-forms to get an API token!

    // Disable form submissions if there are invalid fields
    $('#contactForm').on('submit', function (event) {
      if (this.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      this.classList.add('was-validated');
    });
  }

  render() {
    return (
      <>
        <ContactSection className="page-section" id="contact">
          <div className="container">
            <div className="text-center">
              <ContactHeading className="section-heading text-uppercase">Contact Me</ContactHeading>
              <ContactSubheading className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</ContactSubheading>
            </div>
            <form id="contactForm" noValidate>
              <div className="row align-items-stretch mb-5">
                <div className="col-md-6">
                  <div className="form-group">
                    {/* Name input */}
                    <input className="form-control" id="name" type="text" placeholder="Your Name *" required />
                    <div className="invalid-feedback">A name is required.</div>
                  </div>
                  <div className="form-group">
                    {/* Email address input */}
                    <input className="form-control" id="email" type="email" placeholder="Your Email *" required />
                    <div className="invalid-feedback">An email is required.</div>
                    <div className="invalid-feedback">Email is not valid.</div>
                  </div>
                  <div className="form-group mb-md-0">
                    {/* Phone number input */}
                    <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required />
                    <div className="invalid-feedback">A phone number is required.</div>
                  </div>
                </div>
                <div className="col-md-6">
                <div class="form-group form-group-textarea mb-md-0">
                  {/* message input */}
                  <textarea className="form-control" id="message" placeholder="Your Message *" required />
                  <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                  </div>
                </div>
              </div>
              <div class="d-none" id="submitSuccessMessage">
                <div class="text-center text-white mb-3">
                  <div class="fw-bolder">Form submission successful!</div>
                  To activate this form, sign up at
                  <br />
                  <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                </div>
              </div>
              <div class="d-none" id="submitErrorMessage">
                <div class="text-center text-danger mb-3">Error sending message!</div>
              </div>
              <div class="text-center">
                <button class="btn btn-primary btn-xl text-uppercase disabled" id="submitButton" type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </ContactSection>
      </>
    );
    
  }
}

export default ContactForm;


const ContactSection = styled.section`
  padding: 100px 0;
  background-color: #212529;
  background-image: url("../assets/img/map-image.png");
  background-repeat: no-repeat;
  background-position: center;

  .text-center {
    text-align: center !important;
  }
  .section-heading {
    color: #fff;
  }
  .col-md-6 {
    flex: 0 0 auto;
    width: 50%;
  }

  form#contactForm .form-group {
    margin-bottom: 1.5rem;

    input,
    textarea {
      padding: 1.25rem;
    }

    input.form-control {
      height: auto;
    }

    &-textarea {
      height: 100%;

      textarea {
        height: 100%;
        min-height: 10rem;
      }
    }

    p.help-block {
      margin: 0;
    }

    .form-control:focus {
      border-color: #ffc800;
      box-shadow: none;
    }
  }

  form#contactForm ::-webkit-input-placeholder {
    font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-weight: 700;
    color: #ced4da;
  }

  form#contactForm :-moz-placeholder {
    font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-weight: 700;
    color: #ced4da;
  }

  form#contactForm ::-moz-placeholder {
    font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-weight: 700;
    color: #ced4da;
  }

  form#contactForm :-ms-input-placeholder {
    font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-weight: 700;
    color: #ced4da;
  }
`;

const ContactHeading = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const ContactSubheading = styled.h3`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 50px;
`;