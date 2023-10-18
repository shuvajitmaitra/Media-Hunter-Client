import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import auth from "../../Config/firebase.config";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { createUser, googleSignIn } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    console.log(email, photo, password);
    const regExp =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&`#^(){}.])[0-9a-zA-Z@$!%*?&`#^(){}.]{6,}$/;

    if (!regExp.test(password)) {
      return setError("Invalid password");
    }
    setError("");

    createUser(email, password)
      .then((result) => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        });
        console.log(result.user);
        Swal.fire("Registration successfully!", "", "success");
        console.log(location.state);
        navigate(location.state ? location.state : "/login");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire("", `${error.message}`, "error");
      });
  };

  const handleGoogleSingIn = () => {
    googleSignIn();
  };

  return (
    <div className="pt-32 md:pt-20">
      <h3 className="text-xl md:text-4xl font-bold text-center">
        Register Now!
      </h3>
      <form
        className="card-body w-full md:w-1/2 mx-auto"
        onSubmit={handleRegister}
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            name="name"
            type="name"
            placeholder="name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image Link</span>
          </label>
          <input
            name="photo"
            type="text"
            placeholder="Image Link..."
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            name="password"
            type="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
        </div>
        <p className="text-red-400">{error}</p>
        <div className="form-control mt-6">
          <button
            type="submit"
            className="btn btn-primary"
          >
            Register
          </button>
        </div>
        <div>
          <p className="">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-500"
            >
              Login
            </Link>
          </p>
        </div>
        <div className="block mx-auto right-0 left-0 mt-6 bg-[#F3AA60] py-2 px-4 rounded-full text-white">
          <button
            onClick={handleGoogleSingIn}
            className="flex items-center justify-center text-xl gap-2 font-medium "
          >
            <FcGoogle /> Sign In with Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
