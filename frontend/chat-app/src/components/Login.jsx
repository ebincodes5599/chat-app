import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handlesubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center  ">
      <div className=" ">
        <div className="shadow-md rounded-2xl p-6 px-24 bg-cyan-200">
          <h1 className="text-3xl font-semibold text-center text-blue-700">
            Talk
            <span className="text-blue-900">Trove</span>
          </h1>
        </div>
      </div>
      <br />
      <div className="">
        <div className="bg-purple-100 shadow-md rounded-lg p-12">
          <h1 className="text-3xl font-bold text-center text-black ">LogIn</h1>
          <form onSubmit={handlesubmit}>
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Link
              to="/signup"
              className="text-sm hover:text-blue-800 hover:font-semibold mt-2 inline-block"
            >
              {"Don't"} have an account ?
            </Link>
            <div>
              <button
                className="btn btn-block btn-sm mt-2 font-bold bg-purple-400 hover:bg-purple-600"
                disabled={loading}
              >
                {loading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  "LogIn"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
