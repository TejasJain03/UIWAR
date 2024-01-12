export default function Contactus() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center relative">
        {/* Background Div with Blur */}
        <div
          className="absolute inset-0 bg-cover bg-center blur"
          style={{ backgroundImage: `url('src/assets/contactus.jpg')` }}
        ></div>

        {/* Contact Us Form */}
        <div className="bg-[#f6f6f0] p-8 rounded-lg shadow-md w-1/2  relative z-10">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">
            Contact Us
          </h2>

          <form>
            {/* Name input */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border bg-[#f6f6f0] border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
                placeholder="Your Name"
              />
            </div>

            {/* Email input */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border bg-[#f6f6f0] border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
                placeholder="Your Email"
              />
            </div>

            {/* Message textarea */}
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full border bg-[#f6f6f0] border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
                placeholder="Write your message here"
              ></textarea>
            </div>

            {/* Submit button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#f6f6f0] font-bold text-black border-2 border-black rounded-lg px-6 py-3 duration:300 hover:bg-black  hover:text-[#f6f6f0]"
              >  
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
