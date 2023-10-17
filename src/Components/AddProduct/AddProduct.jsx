const AddProduct = () => {
  return (
    <div className="pt-20">
        <h2 className="text-xl md:text-4xl text-center font-bold">Add Your Media</h2>
      <form className="flex w-3/4 mx-auto gap-6 ">
        {/* left side............ */}
       <div className="flex-1">
       <div className="form-control ">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
       </div>
       {/* right side.......... */}
       <div className="flex-1">
       <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
       </div>
      </form>
    </div>
  );
};

export default AddProduct;
