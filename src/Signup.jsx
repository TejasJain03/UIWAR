export default function Signup() {
    return <>
       <div className="min-h-screen flex bg-[#f6f6f0]">
      {/* Image Section */}
      <div className="flex-1 ">
        <img
          src="src/assets/loginimage.jpg"
          alt="Login"
          className="w-full h-screen object-cover"
        />
      </div>

      {/* Login Form Section */}
      <div className="flex-1 flex items-center justify-center">
        <div className="bg-[#f6f6f0] p-12 rounded shadow-md max-w-lg">
          <h2 className="text-3xl font-semibold mb-6">Login</h2>

          <form>
            {/* Username input */}
            <div className="mb-6 bg-[#f6f6f0]">
              <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-blue-500"
                placeholder="Your Username"
              />
            </div>

            {/* Password input */}
            <div className="mb-6 bg-[#f6f6f0]">
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-blue-500"
                placeholder="Your Password"
              />
            </div>

            {/* Submit button */}
            <div className="mb-8 text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
              >
                Log In
              </button>
            </div>

            {/* Forgot password link */}
            <div className="text-center mb-4">
              <a href="#!" className="text-blue-500 hover:underline">
                Forgot password?
              </a>
            </div>

            {/* Register button */}
            <div className="flex items-center justify-between">
              <p className="mb-0">Don't have an account?</p>
              <button
                type="button"
                className="text-blue-500 hover:underline focus:outline-none"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>;
}