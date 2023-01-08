import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const SingUp = () => {
  const { userCreate, updateName, googleLogin } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleRegistration = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(form.image.files);

    userCreate(email, password)
      .then((result) => {
        const user = result.user;

        updateName(name)
          .then((result) => {
            const user = {
              name,
              role: "user",
              email,
            };
            fetch("https://supershop-server.vercel.app/user", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(user),
            })
              .then((res) => res.json())
              .then((result) => {
                console.log(user);
                toast.success("User created successfully");

                form.reset();
                navigate("/");
              });
          })
          .catch((error) => {
            console.log(error);
            toast.error(error.message);
          });
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = {
          name: result?.user?.displayName,
          role: "user",
          email: result?.user?.email,
        };
        console.log(result);

        if (result?.user?.email) {
          fetch("https://supershop-server.vercel.app/user", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(user),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result.user);
              navigate("/");
              toast.success("User created successfully");
            });
        }
      })
      .catch((err) => {
        console.log(err);
        toast.err(err.message);
      });
  };

  return (
    <section className="bg-white dark:bg-gray-900 ">
      <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
        <div className="w-full max-w-md border p-4 rounded-xl">
          <form onSubmit={handleRegistration}>
            <div className="flex items-center justify-center mt-6">
              <Link
                to="../login"
                className="w-1/3 pb-4 font-medium text-center text-gray-500 capitalize border-b dark:border-gray-400 dark:text-gray-300"
              >
                sign in
              </Link>

              <a className="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-purple-500 dark:border-purple-400 dark:text-white">
                sign up
              </a>
            </div>

            <div className="relative flex items-center mt-8">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>

              <input
                type="text"
                name="name"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-purple-400 dark:focus:border-purple-300 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Username"
                required
              />
            </div>

            {/* <label
              htmlFor="dropzone-file"
              className="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer dark:border-gray-600 dark:bg-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-300 dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                />
              </svg>

              <h2 className="mx-3 text-gray-400">Profile Photo</h2>

              <input
                id="dropzone-file"
                type="file"
                name="image"
                className="hidden"
                required
              />
            </label> */}

            <div className="relative flex items-center mt-6">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>

              <input
                type="email"
                name="email"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-purple-400 dark:focus:border-purple-300 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Email address"
                required
              />
            </div>

            <div className="relative flex items-center mt-4">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </span>

              <input
                type="password"
                name="password"
                className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-purple-400 dark:focus:border-purple-300 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Password"
                required
              />
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full button px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-400 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                id="button-5"
              >
                <div style={{ background: "blue" }} id="translate"></div>
                <p> Sign Up</p>
              </button>

              <div className="mt-6 text-center ">
                <Link
                  to="../login"
                  className="text-sm text-purple-500 hover:underline dark:text-purple-400"
                >
                  Already have an account?
                </Link>
              </div>
            </div>
          </form>
          <div className="flex items-center mt-6 -mx-2">
            {/* <button
              onClick={handleGoogleLogin}
              className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-purple-500 rounded-lg hover:bg-purple-400 focus:bg-purple-400 focus:outline-none"
            >
              <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
                <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
              </svg>

              <span className="hidden mx-2 sm:inline">Sign Up with Google</span>
            </button> */}

            <button
              onClick={handleGoogleLogin}
              className="button w-full flex justify-center mx-2"
              id="button-5"
            >
              <div style={{ background: "purple" }} id="translate"></div>
              <p className="flex items-center">
                {" "}
                <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
                  <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
                </svg>
                <span className="hidden mx-2 sm:inline">
                  Sign Up with Google
                </span>
              </p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingUp;
