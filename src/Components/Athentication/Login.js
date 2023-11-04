import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import brand from "../../Assists/logo.png";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  const Navigate = useNavigate();
  const { googleLogin, login } = useContext(AuthContext);
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        Navigate("/");
        toast.success("User login successfully");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
    login(email, password)
      .then((result) => {
        console.log(result);
        Navigate("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };

  return (
    <div className="flex items-center h-screen">
      <div className="w-full max-w-sm p-6 m-auto mx-auto border bg-white rounded-lg shadow-md  ">
        <h1 className="text-3xl font-semibold text-center text-gray-700  ">
          <img src={brand} alt="" />
        </h1>

        <form onSubmit={handleLogin} className="mt-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm text-gray-800  "
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg       focus:border-purple-400   focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              required
            />
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm text-gray-800  "
              >
                Password
              </label>
              <a
                href="#"
                className="text-xs text-gray-600   hover:underline"
              >
                Forget Password?
              </a>
            </div>

            <input
              type="password"
              name="password"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg       focus:border-purple-400   focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              required
            />
          </div>

          <div className="mt-6"></div>
          <button
            type="submit"
            className="w-full button px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-400 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
            id="button-5"
          >
            <div style={{ background: "blue" }} id="translate"></div>
            <p> Sign In</p>
          </button>
        </form>

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b   lg:w-1/5"></span>

          <a className="text-xs text-center text-gray-500 uppercase   hover:underline">
            or login with Social Media
          </a>

          <span className="w-1/5 border-b  lg:w-1/5"></span>
        </div>

        <div className="flex items-center mt-6 -mx-2">
          {/* <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-purple-500 rounded-lg hover:bg-purple-400 focus:bg-purple-400 focus:outline-none"
          >
            <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
              <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
            </svg>

            <span className="hidden mx-2 sm:inline">Sign in with Google</span>
          </button> */}
          <button
            onClick={handleGoogleLogin}
            style={{ color: "black !important" }}
            className="flex button items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium  transition-colors duration-300 transform hover:text-black rounded-lg focus:outline-none"
            id="button-5"
          >
            <div style={{ background: "#7e00c9", color: "black !important" }} id="translate"></div>
            <p className="flex" style={{ color: "black !important" }}>
              {" "}
              <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
                <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
              </svg>
              <span className="hidden mx-2 sm:inline">Sign in with Google</span>
            </p>
          </button>
        </div>

        <p className="mt-8 text-xs font-light text-center text-gray-400">
          {" "}
          Don't have an account?{" "}
          <Link
            to="../register"
            className="font-medium text-gray-700   hover:underline"
          >
            Create One
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
