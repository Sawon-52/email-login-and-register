import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../Firebase/firebase.config";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Register = () => {
  // const [name, setName] = useState(null);
  // const [email, setEmail] = useState(null);
  // const [password, setPassword] = useState(null);
  // console.log(name,email,password);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [passError, setPassError] = useState("");
  const [showpass, setShowpass] = useState(false);

  const handleShowPass = () => {
    // console.log("show and Hide");
    setShowpass(!showpass);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    // setName(name);
    const email = e.target.email.value;
    // setEmail(email);
    const password = e.target.password.value;
    // setPassword(password);

    if (password.length < 6) {
      // console.log("your password must be 6 length");
      setPassError("your password must be 6 length");
      return;
    }

    setPassError("");
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

        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        // console.log(errorCode, errorMessage);
        // ..
      });
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
                <input type="Text" name="name" placeholder="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className=" relative form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type={showpass ? "password" : "text"} name="password" placeholder="password" className="  input input-bordered" required />

                <span onClick={() => handleShowPass()} className=" absolute cursor-pointer right-2 bottom-4">
                  {showpass ? <FaRegEye /> : <FaRegEyeSlash />}
                </span>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* showing error when error will be occured */}
      {error && <p className=" absolute -bottom-7 right-10 p-2 bg-red-700 text-md font-semibold text-white rounded-xl my-2 text-center">{error} </p>}
      {success && <p className=" absolute -bottom-7 right-10 p-2 bg-green-700 text-md font-semibold text-white rounded-xl my-2 text-center">{success} </p>}
      {passError && <p className="absolute -bottom-7 right-10 p-2 bg-red-700 text-md font-semibold text-white rounded-xl my-2 text-center">{passError} </p>}
    </div>
  );
};

export default Register;
