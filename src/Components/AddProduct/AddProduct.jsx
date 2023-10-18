import Swal from "sweetalert2";

const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const brand = e.target.brand.value;
    const price = e.target.price.value;
    const photo = e.target.photo.value;
    const type = e.target.type.value;
    const rating = e.target.rating.value;
    const description = e.target.description.value;

    console.log(name, brand, price, photo, type, rating, description);

const     product = {name, brand, price, photo, type, rating, description} 
    fetch('http://localhost:5000/product', {
      method: 'POST',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(product)
  })
      .then(res => res.json())
      .then(data => {
          console.log(data);
          if(data.insertedId){
              Swal.fire({
                  title: 'Success!',
                  text: 'Media Added Successfully',
                  icon: 'success',
                  confirmButtonText: 'Cool'
                })
          }
      })
  };
  return (
    <div className="pt-28 md:pt-20">
      <h2 className="text-xl md:text-4xl text-center font-bold">
        Add Your Media
      </h2>
      <form onSubmit={handleAddProduct}>
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
