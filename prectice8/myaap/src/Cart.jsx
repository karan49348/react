// import React from "react";
// import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";

// const Cart = () => {
//   const { id } = useParams();

//   const cartdata = useSelector((state) => state.allusr.userdata || []);

//   const item = cartdata.find((x) => String(x.id) === String(id));

//   return (
//     <div>
//       {item ? (
//         <div>
//           <p>{item.title}</p>
//           <p>{item.price}</p>
//         </div>
//       ) : (
//         <p>No item found</p>
//       )}
//     </div>
//   );
// };

// export default Cart;
