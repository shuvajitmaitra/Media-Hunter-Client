import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div className='pt-32 md:pt-20'>
        <h3 className='text-xl md:text-4xl font-bold text-center'>Register Now!</h3>
        <form className="card-body w-full md:w-1/2 mx-auto">
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
    <div>
        <p className="" >Already have an account?  <Link to="/login" className="text-blue-500">Login</Link></p>
    </div>
    <div className="block mx-auto right-0 left-0 mt-6 bg-[#F3AA60] py-2 px-4 rounded-full text-white" >
      <button className="flex items-center justify-center text-xl gap-2 font-medium "><FcGoogle/> Sign In with Google</button>
    </div>
  </form>
    </div>
    );
};

export default Register;