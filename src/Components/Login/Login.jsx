import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../Firebase/firebase.config";
import { RxCross1 } from "react-icons/rx";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginError, setLoginError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showpass, setShowpass] = useState(true);

  const handleShowPass = () => {
    setShowpass(!showpass);
  };

  const handleMessageShow = () => {
    setLoginError("");
    setSuccessMessage("");
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed in
        const user = result.user;
        console.log(user);
        setSuccessMessage("Login Successfully");

        // if login success then clear form
        setEmail("");
        setPassword("");
        // ...
      })

      .catch((error) => {
        const errorMessage = error.message;
        setLoginError(errorMessage);
      });
  };
  return (
    <div className=" h-full z-30">
      <div className="hero h-full">
        <div className="hero-content flex-col ">
          <h2 className="text-2xl text-white">Login Form</h2>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-indigo-700 ">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input onChange={(e) => setEmail(e.target.value)} type="email" value={email} placeholder="email" className="input input-bordered" required />
              </div>
              <div className=" relative form-control ">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input onChange={(e) => setPassword(e.target.value)} type={showpass ? "password" : "text"} value={password} placeholder="password" className="input input-bordered" required />
                <span onClick={() => handleShowPass()} className=" absolute cursor-pointer right-2 bottom-12">
                  {showpass ? <FaRegEye /> : <FaRegEyeSlash />}
                </span>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* handle login error */}
      {loginError && (
        <span className=" absolute bottom-0 right-10  flex items-center gap-8 p-2 bg-red-700 text-md font-semibold text-white rounded-xl my-2 text-center">
          <p>{loginError}</p>
          <div onClick={handleMessageShow} className=" cursor-pointer text-xl">
            <RxCross1 />
          </div>
        </span>
      )}

      {successMessage && (
        <span className=" absolute bottom-0 right-10  flex items-center gap-8 p-2 bg-green-700 text-md font-semibold text-white rounded-xl my-2 text-center">
          <p>{successMessage}</p>
          <div onClick={handleMessageShow} className=" cursor-pointer text-xl">
            <RxCross1 />
          </div>
        </span>
      )}
    </div>
  );
};

export default Login;
