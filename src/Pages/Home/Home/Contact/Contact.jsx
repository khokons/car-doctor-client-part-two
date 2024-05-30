import React from 'react';


const Contact = () => {
  return (
    <div className="container mx-auto p-10">
      <h2 className="text-4xl text-center mb-10 uppercase">Contact Our Team</h2>
      <div className="flex flex-col md:flex-row justify-between mt-10">
        {/* Contact Form */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0 md:mr-10">
          <h3 className="text-2xl mb-6">Send Us a Message</h3>
          <form action="https://formspree.io/f/xpzvevpv" method="POST"
                className="bg-white shadow-md rounded-lg p-8">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
                Subject
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="subject"
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
                placeholder="Your Message"
                rows="4"
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>

        {/* Contact Information */}
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl mb-6">Contact Information</h3>
          <div className="bg-white shadow-md rounded-lg p-8">
            <p className="text-gray-700 mb-4">
              <strong>Address:</strong> Gazipura 27, Tongi, Gazipur.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Phone:</strong> (880+) 633-347597
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Email:</strong> khokon.webdev@gmail.com
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Office Hours:</strong> Mon-Fri, 9am - 5pm
            </p>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
