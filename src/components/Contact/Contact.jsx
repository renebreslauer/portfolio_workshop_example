import React from 'react'
import './Contact.scss'
import ScrollAnimation from 'react-animate-on-scroll'

class Contact extends React.Component {
  render() {
    return (
      <>
        <div id="Contact">
          <div className="Contact_body">
            <h1>Contact</h1>
            <div className="contact_form">
              <ScrollAnimation animateIn="fadeInUp">
                <input
                  type="text"
                  className="contact_form_name"
                  placeholder="Name"
                ></input>
              </ScrollAnimation>

              <ScrollAnimation animateIn="fadeInUp">
                <input
                  type="text"
                  className="contact_form_email"
                  placeholder="Email"
                ></input>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInUp">
                <textarea
                  className="contact_form_message"
                  placeholder="Message"
                ></textarea>
              </ScrollAnimation>
              <button type="submit">Submit</button>
            </div>
          </div>
        </div>
        <div class="copyright_message">
          Copyright © 2020 WynStudent. All rights reserved.
        </div>
      </>
    )
  }
}

export default Contact
