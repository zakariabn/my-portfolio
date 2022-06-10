import React from "react";

const Contact = () => {
  return (
    <div className="bg-dark ">
      <div className="max-w-screen-2xl mx-auto px-4 p-10">
        {/* input form box */}
        <form
          className="p-4 w-full md:w-[635px] border rounded-lg mx-auto"
          action="https://formsubmit.co/zakaria.nizam11@gmail.com"
          method="POST">
          <h3 className="text-3xl text-center text-white my-5">
            Contact With Me
          </h3>
          <div className="flex flex-col md:flex-row md:mb-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input-form mr-2.5 w-full"
              id=""
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="input-form md:ml-2.5 w-full"
              id=""
            />
          </div>
          <input
            type="number"
            name="number"
            placeholder="Your Phone"
            className="input-form w-full mb-4"
            id=""
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={7}
            className="w-full input-form"></textarea>
          <button
            type="submit"
            className="block mx-auto button px-10 mt-5 hover:text-primary_shade duration-100">
            Send
          </button>
        </form>

        {/*  */}
        <div></div>
      </div>
    </div>
  );
};

export default Contact;
