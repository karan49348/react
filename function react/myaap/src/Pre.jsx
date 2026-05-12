import React, { useState } from "react";

const Pre = ({ update }) => {
  const [data, setdata] = useState(update);
  const [count, Setcount] = useState(6);

  const adddata = () => {
    const obj = { id: count, name: "karan", age: 20 };
    setdata([...data, obj]);
    Setcount(count + 1);
  };

  const delet = (id) => {
    const updated = data.filter((x) => x.id !== id);
    setdata(updated);
  };

  const updatedata = (id) => {
    const updated = data.map((item) => {
      if (item.id === id) {
        return { ...item, name: "hakkkka", age: 100 };
      }
      return item;
    });

    setdata(updated);
    alert("sherrrrr update huva hai")
  };

  return (
    <div>
      <button onClick={adddata}>add</button>

      {data.map((x) => (
        <div key={x.id}>
          <p>name: <span>{x.name}</span></p>
          <p>age: <span>{x.age}</span></p>
          <p>id: <span>{x.id}</span></p>

          <button onClick={() => delet(x.id)}>delete</button>
          <button onClick={() => updatedata(x.id)}>update</button>
        </div>
      ))}
    </div>
  );
};

export default Pre;