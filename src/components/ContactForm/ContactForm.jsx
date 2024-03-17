import React from 'react'
import './ContactForm.scss'
const ContactForm = ({ fields, messageVisible }) => {
  return (
    <div className='contactForm'>
      <div className="contactFormContainer">
        <form className='form'>
          <div className='formContainer'>
            {fields.map((element, index) => {
              return (
                <div key={index} className='itemContainer'>
                  <fieldset className='fieldsetContainer'>
                    <label className='label'>{element.label}</label>
                    <input  name={element.name}  placeholder={element.placeholder} className='input'/>
                  </fieldset>
                </div>
              )
            })}

            {messageVisible && (
              <div className='itemContainer txtarea'>
                <fieldset className='fieldsetContainer'>
                  <label className='label'>Message</label>
                  <textarea name="message" placeholder="Your Message" className='textarea'></textarea>
                </fieldset>
              </div>
            )}
            <div className='itemContainer'>
              <fieldset className='fieldsetContainer'>
                <button type="submit"   >Send Message</button>
              </fieldset>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm