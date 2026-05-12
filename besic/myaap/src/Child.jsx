import React, { useEffect } from 'react'
 import axios from 'axios'

const Child = ({ sentdata }) => {
  
  const fetchdata = async () => {

    const res = await axios.get("https://dummyjson.com/products");
    console.log(res.data.products);
    sentdata(res.data.products);  
  };
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div>
      <h1>hello everywone</h1>
    </div>
  );
};

export default Child
