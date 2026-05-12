import React, { useEffect, useState } from "react";
import { addApi } from "./slice/signupslice";
import { useDispatch } from "react-redux";
import axios from "axios";

const Api = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const result = await axios.get("https://dummyjson.com/products");
    // console.log(">>>>>result", result.data.products);

    setData(result.data.products);
    dispatch(addApi(result.data.products));
  };
  console.log(data);

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
          <p>{item.description}</p>
          <p>{item.category}</p>
          <p>{item.price}</p>
          <p>{item.discountPercentage}</p>
          <p>{item.rating}</p>
          <p>{item.stock}</p>
        </div>
      ))}
    </div>
  );

  
}
export default Api
