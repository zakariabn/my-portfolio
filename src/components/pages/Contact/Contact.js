import React from "react";

const Contact = () => {
  return (
    <div className="bg-dark ">
      <div className="max-w-screen-2xl mx-auto px-4 p-10">
        {/* input form box */}
        <div className="p-4 w-full md:w-[635px] border rounded-lg mx-auto">
          <h3 className="text-3xl text-center text-white my-5">Contact With Me</h3>
          <div className="flex flex-col md:flex-row md:mb-4">
            <input
              type="text"
              name=""
              placeholder="Your Name"
              className="input-form mr-2.5 w-full"
              id=""
            />
            <input
              type="text"
              name=""
              placeholder="Your Email"
              className="input-form md:ml-2.5 w-full"
              id=""
            />
          </div>
          <input
            type="text"
            name=""
            placeholder="Your Phone"
            className="input-form w-full mb-4"
            id=""
          />
          <textarea
            placeholder="Message"
            rows={7}
            className="w-full input-form"></textarea>
          <button className="block mx-auto button px-10 mt-5 hover:text-primary_shade duration-100">
            Send
          </button>
        </div>

        {/*  */}
        <div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
