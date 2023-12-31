import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const product = useLoaderData();
  const { _id, name, brand, price, photo, type, rating, description } = product;
  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const brand = e.target.brand.value;
    const price = e.target.price.value;
    const photo = e.target.photo.value;
    const type = e.target.type.value;
    const rating = e.target.rating.value;
    const description = e.target.description.value;

    const updatedProduct = {
      name,
      brand,
      price,
      photo,
      type,
      rating,
      description,
    };
    fetch(`http://localhost:5000/product/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Media Updated Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };
  return (
    <div className="pt-28 md:pt-24">
      <h2 className="text-xl md:text-5xl text-center font-bold">
        Update {name} {type}
      </h2>
      <form onSubmit={handleUpdateProduct}>
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
                defaultValue={name}
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
                defaultValue={brand}
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
                defaultValue={price}
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
                defaultValue={photo}
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
                defaultValue={type}
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
                defaultValue={rating}
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
            defaultValue={description}
            placeholder="Enter Description..."
            className="input input-bordered rounded"
            required
          />
        </div>
        <button className=" w-1/2 mx-auto block left-0 right-0 my-6 rounded btn bg-[#1D5B79] text-white">
          Update Media
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
