import React from 'react';
import PageHero from '../components/Layout/PageHero';

const ContactInfo = () => (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border-t-4 border-medics-red/80">
        <h2 className="text-2xl font-montserrat font-bold text-primary-blue mb-6">Hospital Information</h2>

        {/* Location */}
        <div className="flex space-x-4 mb-6 items-start">
            <i className="fas fa-map-marker-alt text-2xl text-medics-red mt-1" aria-hidden="true"></i>
            <div>
                <h4 className="font-bold text-lg text-primary-blue">Our Location</h4>
                <p className="text-secondary-gray text-sm">570/327, VIP Rd, near Pakri Ka Pull, Fauji colony, Ramprasad Bismil Nagar, Alambagh, Lucknow, Uttar Pradesh 226005</p>
                <a href="https://www.google.com/maps/place/Meddics+Hospital/@26.8015304,80.9121215,821m/data=!3m2!1e3!4b1!4m6!3m5!1s0x399bfd6273a868a9:0x11c1eb801fe6586b!8m2!3d26.8015256!4d80.9146964!16s%2Fg%2F11j2b31nb3?hl=en-GB&entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener" className="text-care-blue text-sm hover:underline font-medium mt-1 inline-block">Get Directions</a>
            </div>
        </div>

        {/* Phone */}
        <div className="flex space-x-4 mb-6 items-start">
            <i className="fas fa-phone-alt text-2xl text-medics-red mt-1" aria-hidden="true"></i>
            <div>
                <h4 className="font-bold text-lg text-primary-blue">General Enquiries</h4>
                <p className="text-secondary-gray text-sm">Emergency: <a href="tel:+918700127481" className="font-bold text-primary-blue hover:text-medics-red">+91 8700127481</a></p>
                <p className="text-secondary-gray text-sm">Appointments: <a href="tel:+918700127482" className="font-bold text-primary-blue hover:text-medics-red">+91 8700127482</a></p>
            </div>
        </div>

        {/* Email */}
        <div className="flex space-x-4 items-start">
            <i className="fas fa-envelope text-2xl text-medics-red mt-1" aria-hidden="true"></i>
            <div>
                <h4 className="font-bold text-lg text-primary-blue">Email Address</h4>
                <p><a href="mailto:medicscarehospital@gmail.com" className="text-care-blue hover:underline text-sm font-medium">medicscarehospital@gmail.com</a></p>
            </div>
        </div>
    </div>
);

const ContactForm = () => {
    // In a real application, you would handle form submission here (e.g., using Formik or a custom hook)
    const handleSubmit = (e) => {
        e.preventDefault();
        // Placeholder for submitting to WhatsApp or an API
        alert("Inquiry submitted! (Functionality needs backend/WhatsApp integration)");
    };

    return (
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border-t-4 border-care-blue/80">
            <h2 className="text-2xl font-montserrat font-bold text-primary-blue mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="form-group">
                    <label htmlFor="name" className="block text-sm font-medium text-primary-blue mb-1">Full Name</label>
                    <input type="text" id="name" name="name" required className="w-full p-2 border border-gray-300 rounded-lg focus:ring-care-blue focus:border-care-blue transition duration-150" />
                </div>

                <div className="form-group">
                    <label htmlFor="email" className="block text-sm font-medium text-primary-blue mb-1">Email Address</label>
                    <input type="email" id="email" name="email" required className="w-full p-2 border border-gray-300 rounded-lg focus:ring-care-blue focus:border-care-blue transition duration-150" />
                </div>
                
                <div className="form-group">
                    <label htmlFor="subject" className="block text-sm font-medium text-primary-blue mb-1">Select Inquiry Category</label>
                    <select id="subject" name="subject" required className="w-full p-2 border border-gray-300 rounded-lg bg-white focus:ring-care-blue focus:border-care-blue transition duration-150">
                        <option value="" disabled selected>— Choose a category —</option>
              <option value="Appointment / OPD Booking">Appointment / OPD Booking</option>
              <option value="Emergency / Ambulance Request">Emergency / Ambulance Request</option>
              <option value="Doctor Consultation">Doctor Consultation</option>
              <option value="Admission / Surgery Enquiry">Admission / Surgery Enquiry</option>
              <option value="Billing / Insurance Support">Billing / Insurance Support</option>
              <option value="Diagnostics / Laboratory Reports">Diagnostics / Laboratory Reports</option>
              <option value="Pharmacy / Prescription Refill">Pharmacy / Prescription Refill</option>
              <option value="Careers / Job Opportunities">Careers / Job Opportunities</option>
              <option value="Feedback / Complaints">Feedback / Complaints</option>
              <option value="Other Enquiry">Other Enquiry</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="message" className="block text-sm font-medium text-primary-blue mb-1">Your Message</label>
                    <textarea id="message" name="message" rows="5" required className="w-full p-2 border border-gray-300 rounded-lg focus:ring-care-blue focus:border-care-blue transition duration-150"></textarea>
                </div>

                <button type="submit" className="w-full bg-medics-red text-white py-3 rounded-lg font-bold hover:bg-red-700 transition duration-300 shadow-md">
                    Submit Inquiry
                </button>
            </form>
        </div>
    );
};

const HospitalMap = () => (
    <section className="hospital-map container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-3xl font-montserrat font-bold text-center mb-6 text-primary-blue">
            Find Our Location
        </h2>
        <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3575.118166326966!2d80.91212147534291!3d26.801530364859868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd6273a868a9%3A0x11c1eb801fe6586b!2sMeddics%20Hospital!5e1!3m2!1sen!2sin!4v1762070122496!5m2!1sen!2sin" // Use your real map embed URL here
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Hospital Location Map"
            ></iframe>
        </div>
    </section>
);


const Contact = () => {
  return (
    <>
        <PageHero 
            title="Get In Touch With Us" 
            subtitle="We are here 24/7 to answer your questions and assist with appointments. Feel free to reach out via phone, email, or our contact form."
        />

        <section className="contact-grid container mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <ContactInfo />
                <ContactForm />
            </div>
        </section>

        <HospitalMap />
    </>
  );
};

export default Contact;