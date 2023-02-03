import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="max-w-[1080px] m-auto md:pl-20 p-4 py-16">
      <h1 className="py4 text-4xl font-bold text-center text-[#001b5e]">
        Contact
      </h1>
      <form
        action="https://getform.io/f/d25d9251-7a81-4330-afc5-44c0f0c49ffb"
        method="POST"
        encType="multipart/form-data"
      >
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label className="uppercase text-sm py2">Name</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="name"
            />
          </div>
          <div className="flx flex-col">
            <label className="uppercase text-sm py2">Phone</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="phone"
            />
          </div>
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py2">Email</label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300"
            type="email"
            name="email"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py2">Subject</label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300"
            type="text"
            name="subject"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py2">Message</label>
          <textarea
            className="border-2 rounded-lg p-3 border-gray-300"
            name="message"
            rows="10"
          ></textarea>
        </div>
        <button className="bg-[#001b5e] text-gray-100 text-lg leading-4 tracking-wider font-semibold mt-4 w-full p-4 rounded-lg hover:scale-[100.5%]">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
