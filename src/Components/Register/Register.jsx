import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../Firebase/firebase.config";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [registrationError, setregistrationError] = useState("");
  const [showpass, setShowpass] = useState(true);

  const handleMessageShow = () => {
    setError("");
    setSuccess("");
    setregistrationError("");
  };

  const handleShowPass = () => {
    setShowpass(!showpass);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setregistrationError(" password must be 6 character");
      return;
    } else if (check === false) {
      setregistrationError("Accept our Trems and Conditions");
      return;
    }

    setregistrationError("");
    setSuccess("");
    setError("");

    // Initialize Firebase Authentication and get a reference to the service
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        setSuccess("Created Successfully");
        setName("");
        setEmail("");
        setPassword("");
        setCheck(false);

        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        // console.log(errorCode, errorMessage);
        // ..
      });

    console.log(check);
  };

  return (
    <div className="h-full z-30">
      <div className="hero h-full">
        <div className="hero-content flex-col">
          <h2 className="text-2xl text-white">Registration form</h2>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-indigo-700 ">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input onChange={(e) => setName(e.target.value)} type="Text" name="name" value={name} placeholder="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" value={email} placeholder="email" className="input input-bordered" required />
              </div>
              <div className=" relative form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input onChange={(e) => setPassword(e.target.value)} type={showpass ? "password" : "text"} name="password" value={password} placeholder="password" className="  input input-bordered" required />

                <span onClick={() => handleShowPass()} className=" absolute cursor-pointer right-2 bottom-4">
                  {showpass ? <FaRegEye /> : <FaRegEyeSlash />}
                </span>
              </div>

              <div className="flex gap-2">
                <input onChange={(e) => setCheck(e.target.checked)} type="checkbox" />
                <label className="label">
                  <span className="label-text">
                    Accept our{" "}
                    <a className="text-red-300" href="#">
                      Terms and conditions
                    </a>
                  </span>
                </label>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* showing error when error will be occured */}
      {error && (
        <span className=" absolute bottom-0 right-10  flex items-center gap-8 p-2 bg-red-700 text-md font-semibold text-white rounded-xl my-2 text-center">
          <p>{error}</p>
          <div onClick={handleMessageShow} className=" cursor-pointer text-xl">
            <RxCross1 />
          </div>
        </span>
      )}

      {success && (
        <span className=" absolute bottom-0 right-10 flex items-center gap-8 p-2 bg-green-700 text-md font-semibold text-white rounded-xl my-2 text-center">
          <p>{success}</p>
          <div onClick={handleMessageShow} className=" cursor-pointer text-xl">
            <RxCross1 />
          </div>
        </span>
      )}

      {registrationError && (
        <span className="absolute bottom-0 right-10 flex items-center gap-8 p-2 bg-red-700 text-md font-semibold text-white rounded-xl my-2 text-center">
          <p>{registrationError}</p>
          <div onClick={handleMessageShow} className=" cursor-pointer text-xl">
            <RxCross1 />
          </div>
        </span>
      )}
    </div>
  );
};

export default Register;
