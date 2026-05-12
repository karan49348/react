import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./slice/producatslice";
const Regex = () => {
  const dispach = useDispatch();
  const res = useSelector((state) => state.userCart.products);
  console.log(res);

  useEffect(() => {
    dispach(fetchProducts());
  }, []);

  return <div>newdata</div>;
};

export default Regex;
