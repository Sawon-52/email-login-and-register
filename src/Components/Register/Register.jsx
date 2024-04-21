import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../Firebase/firebase.config";

const Register = () => {
  // const [name, setName] = useState(null);
  // const [email, setEmail] = useState(null);
  // const [password, setPassword] = useState(null);
  // console.log(name,email,password);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    // setName(name);
    const email = e.target.email.value;
    // setEmail(email);
    const password = e.target.password.value;
    // setPassword(password);

    // Initialize Firebase Authentication and get a reference to the service
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <div className=" h-full z-30">
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
