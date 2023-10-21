import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { userSignIn, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;


    userSignIn(email, password)
    .then(() => {
      Swal.fire(
        'Login successfully!',
        '',
        'success'
      )
      navigate(location.state ? location.state : "/");
      e.target.reset();
    })
    .catch((error) => {
      Swal.fire(
        "email or password Invalid",
        '',
        'error'
      )
     console.log(error.message);
    });

};

const handleGoogleSignIn = () =>{
  googleSignIn()
  .then(() => {
    Swal.fire(
      'Login successfully!',
      '',
      'success'
    )
    navigate(location.state ? location.state : "/");
  })
  .catch((error) => {
    Swal.fire(
      `${error.message}`,
      '',
      'error'
    )
   
  });

  };
  return (
    <div className="pt-32 md:pt-20">
      <h3 className="text-xl md:text-4xl font-bold text-center">Login Now!</h3>
      <form
        onSubmit={handleSignIn}
        className="card-body w-full md:w-1/2 mx-auto"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a
              href="#"
              className="label-text-alt link link-hover"
            >
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <div>
          <p className="">
            New here?{" "}
            <Link
              to="/register"
              className="text-blue-500"
            >
              Register
            </Link>
          </p>
        </div>
        <div className="block mx-auto right-0 left-0 mt-6 bg-[#F3AA60] py-2 px-4 rounded-full text-white">
          <button
            onClick={handleGoogleSignIn}
            className="flex items-center justify-center text-xl gap-2 font-medium "
          >
            <FcGoogle /> Sign In with Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
