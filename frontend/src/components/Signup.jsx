// import { useState } from "react";
import { Link } from "react-router-dom";
import useSignup from "../hooks/useSignup";
import { useState } from "react";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { loading, signup } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);
    await signup(inputs);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="shadow-md rounded-2xl p-6 px-24  bg-cyan-200">
        <h1 className="text-3xl font-semibold text-center text-blue-700">
          Talk
          <span className="text-blue-900">Trove</span>
        </h1>
      </div>
      <br />
      <div className="">
        <div className="bg-purple-100 shadow-md rounded-lg p-12">
          <h1 className="text-3xl font-bold text-center text-black">SignUp</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label className="label p-2">
                <span className="text-base label-text font-semibold">
                  Full Name
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter full name"
                className="w-full input input-bordered h-10"
                name="fullName"
                value={inputs.fullName}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="label p-2">
                <span className="text-base label-text font-semibold">
                  Email
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter email"
                className="w-full input input-bordered h-10"
                name="email"
                value={inputs.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="label p-2">
                <span className="text-base label-text font-semibold">
                  Password
                </span>
              </label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full input input-bordered h-10"
                name="password"
                value={inputs.password}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="label p-2">
                <span className="text-base label-text font-semibold">
                  Confirm Password
                </span>
              </label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full input input-bordered h-10"
                name="confirmPassword"
                value={inputs.confirmPassword}
                onChange={handleInputChange}
              />
            </div>
            <Link
              to="/login"
              className="text-sm hover:text-blue-800 hover:font-semibold mt-2 inline-block"
            >
              {"Already"} signed up ?
            </Link>
            <div>
              <button
                className="btn btn-block btn-sm mt-2 font-bold bg-purple-400 hover:bg-purple-600 "
                disabled={loading}
              >
                {loading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  "Sign Up"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
