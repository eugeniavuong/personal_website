import React from 'react'
import ContactForm from './Form'

const ContactSection = () => {
  return (
    <section id="contact">
        <h1 className="text-center font-bold text-4xl pt-20">Let&#39;s Have a Chat!</h1>
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        <ContactForm/>
    </section>
  )
}

export default ContactSection
