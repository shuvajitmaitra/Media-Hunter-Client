import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const Cart = () => {
  const { user } = useContext(AuthContext);
  const cartData = useLoaderData();
  const newCarts = cartData.filter((cart) => cart.uid === user.uid);
  const [carts, setCarts] = useState(newCarts);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://assingment-10-media-hunter-server-98gi7m8jc.vercel.app/cart/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your media has been deleted.", "success");
            }
            const filteredData = carts?.filter((item) => item._id !== id);
            setCarts(filteredData);
          });
      }
    });
  };

  return (
    <div>
      {carts?.length > 0 ? (
        <div className="max-w-screen-lg mx-auto gap-6 pt-32 grid grid-cols-1 md:grid-cols-2">
          {carts?.map((cart) => (
            <div key={cart._id}>
              <div className="flex border shadow-md rounded-lg mx-5">
                <div className="">
                  <img
                    src={cart.photo}
                    className="w-72 h-52 md:h-40 overflow-clip rounded-l-lg "
                  />
                </div>
                <div className="w-full border p-3 space-y-1">
                  <div className="flex justify-between items-center ">
                    <h3>
                      <span className="font-bold">{cart.type} Name:</span>{" "}
                      {cart.name}
                    </h3>
                    <MdDelete
                      onClick={() => handleDelete(cart._id)}
                      className="text-red-500 text-xl cursor-pointer"
                    />
                  </div>
                  <h3>
                    <span className="font-bold">Brand Name:</span> {cart.brand}
                  </h3>
                  <h3>
                    <span className="font-bold">Rating:</span> {cart.rating}
                  </h3>
                  <h3>
                    <span className="font-bold">Price:</span> {cart.price} $
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="h-screen flex justify-center items-center">
          <h3 className="text-xl font-bold md:text-4xl">No Data Added</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
