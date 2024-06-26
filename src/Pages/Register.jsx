import { Link } from "react-router-dom";
import NavBar from "./Shared/NavBar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Register = () => {
  const { createUser } = useContext(AuthContext)

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password)

    createUser(email, password)
      .then(result => {
        console.log(result.user)
      })
      .catch(error => {
        console.error(error)
      })
  }
  return (
    <>
      <NavBar></NavBar>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content ">

          <div className="card shrink-0  shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <p className="items-center ">alreaty have an account <Link to='/login'>login</Link></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;