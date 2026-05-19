import React, { useState } from "react";

const FormSubmit = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
  });

  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let obj = {};

    if (!form.name) obj.name = "Name is Required";
    if (form.name.length >= 50)
      obj.nameLength = "Name must be less than 50 characters";

    if (!form.email) obj.email = "Email is Required";
    if (form.email.length >= 50)
      obj.emailLength = "Email must be less than 50 characters";

    if (!form.address) obj.address = "Address is Required";
    if (form.address.length >= 50)
      obj.addressLength = "Address must be less than 50 characters";

    setError(obj);

    if (Object.keys(obj).length === 0) {
      let local = JSON.parse(localStorage.getItem("userData")) || {};

      const updatedData = {
        ...form,

        nameSize: form.name.length + (local.nameSize || 0),

        emailSize: form.email.length + (local.emailSize || 0),

        addressSize: form.address.length + (local.addressSize || 0),
      };

      localStorage.setItem("userData", JSON.stringify(updatedData));

      console.log("Submitted Data", updatedData);
    } else {
      console.log("Not Submitted Data");
    }
  };

  return (
    <div >
      <form  onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Your Name"
          value={form.name}
          name="name"
          onChange={handleChange}
          className="border p-2"
        />
        {error.name && <p >{error.name}</p>}
        {error.nameLength && <p >{error.nameLength}</p>}

        <input
          type="email"
          placeholder="Enter Your Email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="border p-2"
        />
        {error.email && <p >{error.email}</p>}
        {error.emailLength && (
          <p >{error.emailLength}</p>
        )}

        <textarea
          placeholder="Enter Your Address"
          name="address"
          value={form.address}
          onChange={handleChange}
          className="border p-2"
        />
        {error.address && <p>{error.address}</p>}
        {error.addressLength && (
          <p>{error.addressLength}</p>
        )}

        <button>Submit</button>
      </form>
    </div>
  );
};

export default FormSubmit;
