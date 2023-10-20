

import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="h-screen flex items-center justify-center flex-col space-y-3">
            <h2 className="text-3xl font-bold">No Data Found</h2>
            <Link to="/"><button className="px-5 py-3 bg-[#468B97] rounded font-medium text-white">Go Back Home</button></Link>
        </div>
    );
};

export default ErrorPage;