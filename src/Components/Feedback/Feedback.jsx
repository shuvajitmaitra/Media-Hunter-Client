const Feedback = () => {
    return (
      <div className=" min-h-fit bg-green-200 py-10">
        <h2 className="text-xl lg:text-5xl font-bold text-center pb-10 ">
          Leave Your Valuable Feedback
        </h2>
        <form className="w-full lg:w-1/2 px-4 md:mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              className="flex-1 py-4 placeholder:px-2 placeholder:uppercase focus:outline-gray-400"
              type="text"
              name="text"
              placeholder="Name*"
              required
            />
            <input
              className="flex-1 py-4 placeholder:px-2 placeholder:uppercase focus:outline-gray-400" 
              type="email"
              name="email"
              placeholder="E-Mail*"
              required
            />
          </div>
          <textarea
            className="w-full mt-4 placeholder:px-2 placeholder:uppercase placeholder:py-3 focus:outline-gray-400"
            rows="8"
            name="text"
            placeholder=" Message"
          />
          <button className="bg-[#A8DF8E] py-3 px-5 uppercase block right-0 left-0 mx-auto my-4">SEND Message</button>
        </form>
      </div>
    );
  };
  
  export default Feedback;