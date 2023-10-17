const AddProduct = () => {
  return (
    <div className="pt-28 md:pt-20">
      <h2 className="text-xl md:text-4xl text-center font-bold">
        Add Your Media
      </h2>
      <form>
        {/* left side............ */}
        <div className="flex flex-col md:flex-row w-3/4 mx-auto gap-6">
          <div className="flex-1">
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Media Name..."
                className="input input-bordered rounded"
                required
              />
            </div>
            {/* brand name......... */}
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <input
                type="text"
                name="brand"
                placeholder="Enter Your Brand Name..."
                className="input input-bordered rounded"
                required
              />
            </div>
            {/* Price */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                name="price"
                placeholder="Enter Price..."
                className="input input-bordered rounded"
                required
              />
            </div>
          </div>
          {/* right side.......... */}
          <div className="flex-1">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Upload image..."
                className="input input-bordered rounded"
                required
              />
            </div>
            {/* type */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Type of Media</span>
              </label>
              <input
                type="text"
                name="type"
                placeholder="Enter type of media..."
                className="input input-bordered rounded"
                required
              />
            </div>
            {/* rating */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="text"
                name="rating"
                placeholder="Enter Rating..."
                className="input input-bordered rounded"
                required
              />
            </div>
          </div>
        </div>
        {/* description */}
        <div className="form-control w-3/4 mx-auto">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input
            type="text"
            name="description"
            placeholder="Enter Description..."
            className="input input-bordered rounded"
            required
          />
        </div>
        <button className=" w-1/2 mx-auto block left-0 right-0 my-6 rounded btn bg-[#1D5B79] text-white">
          Add Media
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
