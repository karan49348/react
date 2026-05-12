import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

const Producatdetial = () => {

  const [data, setdata] = useState({})
  const [loding, setloding] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`https://dummyjson.com/products/${id}`)
        setdata(result.data)
      } catch (error) {
        console.log(error)
      } finally {
        setloding(false)
      }
    }

    fetchData()
  }, [id])

  if (loding) {
    return <h1 className="text-center mt-10 text-xl">Loading...</h1>
  }

  return (
    <div className="p-5">
      <div className="border p-3 rounded-xl shadow-md bg-white">

        <LazyLoadImage
          src={data.thumbnail}
          alt={data.title}
          effect="blur"
          className="w-full h-32 object-cover rounded"
        />

        <h2 className="text-sm font-bold mt-2">{data.title}</h2>

        <p className="text-green-600 font-semibold">₹ {data.price}</p>
        <p className="text-sm">Rating: {data.rating}</p>
        <p className="text-sm">Discount: {data.discountPercentage}%</p>

      </div>
    </div>
  )
}

export default Producatdetial