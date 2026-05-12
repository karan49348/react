import React, { useState } from 'react';

const Test = ({ data = {} }) => {

  const [form, setform] = useState({
    country: '',
    state: '',
    city: '',
  });

  const handlechange = (e) => {
    const { name, value } = e.target;

    if (name === 'country') {
      setform({ country: value, state: '', city: '' });
    } else if (name === 'state') {
      setform({ ...form, state: value, city: '' });
    } else {
      setform({ ...form, [name]: value });
    }
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    console.log("Submitted Data:", form);

    localStorage.setItem('userdata', JSON.stringify(form));

    alert("Data Saved");

    setform({
      country: '',
      state: '',
      city: '',
    });
  };

  return (
    <div className="p-5">
      <form onSubmit={handlesubmit} className="flex flex-col gap-3 w-60">

        <select
          name="country"
          value={form.country}
          onChange={handlechange}
          className="border p-2"
        >
          <option value="">Select Country</option>
          {Object.keys(data || {}).map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>

        <select
          name="state"
          value={form.state}
          onChange={handlechange}
          className="border p-2"
          disabled={!form.country}
        >
          <option value="">Select State</option>
          {form.country &&
            Object.keys(data[form.country]?.states || {}).map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
        </select>

        <select
          name="city"
          value={form.city}
          onChange={handlechange}
          className="border p-2"
          disabled={!form.state}
        >
          <option value="">Select City</option>
          {form.country && form.state &&
            (data[form.country]?.states?.[form.state] || []).map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
        </select>

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded"
        >
          Submit
        </button>

      </form>
    </div>
  );
};

export default Test;