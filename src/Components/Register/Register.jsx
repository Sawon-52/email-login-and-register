const Register = () => {
  return (
    <div className=" h-full z-30">
      <div className="hero h-full">
        <div className="hero-content flex-col">
          <h2 className="text-2xl text-white">Registration form</h2>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-indigo-700 ">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" required />
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
