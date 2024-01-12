/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Signup() {
  const navigate = useNavigate();

  const handleSignup = (event) => {
    event.preventDefault();

    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;

    // Basic validation for username and password
    if (username === 'Tejas123' && password === 'tejas123') {
      // Successful signup
      toast.success('Signup successful!', {
        position: toast.POSITION.TOP_CENTER,
      });
      // Redirect to dashboard or any other page
      navigate('/dashboard');
    } else {
      // Failed signup
      toast.error('Invalid Credentials', {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-[#f6f6f0]">
        {/* Image Section (Hidden on smaller screens) */}
        <div className="hidden lg:block lg:flex-1">
          <img
            src="src/assets/signup.jpg"
            alt="Signup"
            className="w-full h-screen object-cover"
          />
        </div>

        {/* Signup Form Section */}
        <div className="lg:flex-1 flex items-center justify-center">
          <div className="bg-[#f6f6f0] p-6 lg:p-12 rounded w-full lg:w-2/3 transition-all duration-300 ease-in-out">
            <h2 className="text-3xl font-semibold mb-6 border-b-2 border-black pb-4">
              Sign Up
            </h2>

            <form onSubmit={handleSignup} className="max-w-md mx-auto">
              {/* Username input */}
              <div className="mb-6">
                <label
                  htmlFor="username"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="w-full border border-gray-300 bg-[#f6f6f0] p-3 rounded focus:outline-none focus:border-blue-500 transition-all duration-300 ease-in-out hover:border-blue-700"
                  placeholder="Your Username"
                />
              </div>

              {/* Password input */}
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full border border-gray-300 bg-[#f6f6f0] p-3 rounded focus:outline-none focus:border-blue-500 transition-all duration-300 ease-in-out hover:border-blue-700"
                  placeholder="Your Password"
                />
              </div>

              {/* Submit button */}
              <div className="mb-8 text-center">
                <button
                  type="submit"
                  className="m-4 bg-black text-[#f6f6f0] border-2 border-[#f6f6f0] px-6 py-3 rounded-2xl transition duration-300 hover:bg-[#f6f6f0] hover:text-black hover:border-2 hover:border-black"
                >
                  Sign Up
                </button>
              </div>

              {/* Register button */}
              <div className="flex items-center justify-between">
                <p className="mb-0">Already have an account?</p>
                <div
                  onClick={() => navigate("/login")}
                  className="text-blue-500 hover:underline focus:outline-none cursor-pointer"
                >
                  Login
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
