// import { useState } from "react";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Cart = () => {
//   const [products, setProducts] = useState(null);
const {user} = useContext(AuthContext)
  const cartData = useLoaderData();
  const carts = cartData.filter(cart=>cart.uid === user.uid)
  
//   setProducts({...products, loadedProduct});
  return (
    <div className="py-24">
      <h3>This is add to cart{cartData.length}</h3>
    
      {carts.map((cart) => (
        <div key={cart._id}>
            <img src={cart.photo} className="w-56" />
          <h3>{cart.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Cart;
