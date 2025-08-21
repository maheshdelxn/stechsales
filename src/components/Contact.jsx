'use client';
import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      console.log('Submitting form:', formData);
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log('API response:', data);

      if (!response.ok) {
        throw new Error(data.message || 'Server responded with an error');
      }

      setSubmitStatus({
        success: true,
        message: data.message || 'Message sent successfully!'
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: ''
      });
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus({
        success: false,
        message: error.message || 'Failed to send message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Contact Us</h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Reach out to us for inquiries, quotes, or technical support
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/2">
            <form onSubmit={handleSubmit} className="bg-blue-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-blue-900 mb-6">Send us a message</h3>

              {submitStatus && (
                <div className={`mb-5 p-4 rounded-lg ${submitStatus.success
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                  }`}>
                  {submitStatus.message}
                  {!submitStatus.success && (
                    <p className="mt-2 text-sm">Check console for more details</p>
                  )}
                </div>
              )}

              <div className="mb-5">
                <label htmlFor="name" className="block text-gray-700 mb-2">Name *</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="mb-5">
                <label htmlFor="email" className="block text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  placeholder="Your email"
                  required
                />
              </div>

              <div className="mb-5">
                <label htmlFor="phone" className="block text-gray-700 mb-2">Phone *</label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  placeholder="Your phone number"
                  required
                />
              </div>

              <div className="mb-5">
                <label htmlFor="subject" className="block text-gray-700 mb-2">Subject *</label>
                <select
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  required
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Technical Support">Technical Support</option>
                  <option value="Feedback">Feedback</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="mb-5">
                <label htmlFor="message" className="block text-gray-700 mb-2">Message *</label>
                <textarea
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : 'Send Message'}
              </button>
            </form>
          </div>

          <div className="lg:w-1/2">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white p-6 rounded-xl">
                <div className="flex items-start mb-4">
                  <FaMapMarkerAlt className="text-xl mt-1 mr-4 text-red-400" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Our Location</h3>
                    <p>Dattanager Shivanjali lane no 2</p>
                    <p>Katraj, Pune - 411046</p>
                    <p>Maharashtra, India</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white p-6 rounded-xl">
                <div className="flex items-start mb-4">
                  <FaPhone className="text-xl mt-1 mr-4 text-red-400" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Contact Information</h3>
                    <p className="flex items-center"><FaEnvelope className="mr-3" /> info@stechsales.com</p>
                    <p className="flex items-center mt-2"><FaPhone className="mr-3" /> +91 8208269162</p>
                    <p className="flex items-center mt-2"><FaPhone className="mr-3" /> +91 9422302342</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white p-6 rounded-xl">
                <div className="flex items-start">
                  <FaClock className="text-xl mt-1 mr-4 text-red-400" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Business Hours</h3>
                    <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;