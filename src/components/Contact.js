'use client'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [formError, setFormError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track submission

  const sendEmail = (e) => {
    e.preventDefault();
    
    // Check if all the required fields are filled
    const formData = new FormData(form.current);
    const allFieldsFilled = Array.from(formData.values()).every(value => value !== '');

    if (!allFieldsFilled) {
      setFormError('Please fill in all the fields');
      return;
    }

    // If everything is filled, send the email
    emailjs
      .sendForm('service_111mf4e', 'template_su63etf', form.current, {
        publicKey: 'FOIoUq-OxcWoJnH6O',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setFormError(''); // Clear any errors if the submission is successful
          setIsSubmitted(true); // Show the popup after submission
          form.current.reset(); // Clear the form after submission
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="">
      <div className="min-h-screen flex items-center justify-center pt-8 py-4">
        <div className="relative w-full max-w-2xl d] p-12 rounded-lg border-[#000000]">
          <form className="space-y-6" ref={form} onSubmit={sendEmail}>
            <h3 className="text-center font-semibold font-pattaya md:text-5xl text-black">
              Book Consultation
            </h3>
            <div>
              <input
                type="text"
                name="from_name"
                placeholder="Full Name"
                className="w-full p-4 font-sans border-2 border-[#000000] text-[#000000] bg-transparent placeholder-[#585353] focus:outline-none"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="E Mail"
                  className="w-full p-4 font-sans border-2 border-[#000000] bg-transparent text-[#000000] placeholder-[#524e4a] focus:outline-none"
                  required
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full p-4 border-2 font-sans border-[#000000] text-[#000000] bg-transparent placeholder-[#585552] focus:outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <select
                name="service"
                className="w-full p-4 border-2 font-sans border-[#000000] bg-transparent text-[#000000] focus:outline-none"
                required
              >
                <option value="">Select Service</option>
                <option value="Service 1">Service 1</option>
                <option value="Service 2">Service 2</option>
              </select>
            </div>

            <div>
              <input
                type="date"
                name="date"
                className="w-full p-4 font-sans border-2 border-[#000000] bg-transparent text-[#000000] placeholder-[#474644] focus:outline-none"
                required
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Additional Note"
                className="w-full font-sans h-32 p-4 border-2 border-[#000000] text-[#000000] bg-transparent placeholder-[#504d4a] focus:outline-none"
                required
              />
            </div>

            <div className="flex items-start font-sans text-[#000000] justify-between">
              <input
                type="checkbox"
                name="acceptedTerms"
                className="mr-2 bg-[#000000]"
                required
              />
              <p className="text-sm text-start font-sans">
                I agree to the Terms and Conditions of this laser clinic and acknowledge that I have read and understood them
              </p>
            </div>

            {/* Show error message if form is incomplete */}
            {formError && (
              <p className="text-red-500 text-center">{formError}</p>
            )}

            <button
              type="submit"
              className="w-full font-sans bg-[#D39937] text-[#ffffff] font-semibold py-3 transition duration-200"
            >
              Confirm
            </button>
          </form>

          {/* Popup that appears when the form is submitted */}
          {isSubmitted && (
            <div className="absolute top-0 left-0 font-sans w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-8 rounded-lg text-center">
                <h3 className="text-xl font-semibold font-sans text-black">Form Submitted!</h3>
                <p className="mt-4 text-black font-sans">Your consultation request has been successfully submitted. We will get back to you shortly.</p>
                <button
                  className="mt-6 bg-[#D39937] font-sans text-white py-2 px-6 rounded"
                  onClick={() => setIsSubmitted(false)}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
