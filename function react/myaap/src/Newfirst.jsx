import React from "react";
import "./New.css";

const New = ({ data }) => {
  return (
    <div className="container">
      <div className="product-grid">

        {data.products.map((item) => {
          return (
            <div className="product-card" key={item.id}>

              
              <img 
                src={item.images?.[0]} 
                alt={item.title} 
              />

              <h2>{item.title}</h2>

              <p>{item.description}</p>

              <p className="price">Price: ₹{item.price}</p>
              <p className="discount">
                Discount: {item.discountPercentage}%
              </p>

              <p>{item.rating}</p>
              <p>{item.category}</p>
              <p>{item.brand}</p>
              <p>Stock: {item.stock}</p>

              <p><b>Reviews:</b></p>

              {item.reviews && item.reviews.length > 0 ? (
                item.reviews.map((rev, i) => {
                  return (
                    <div className="review-box" key={i}>
                      <p>  balllu{rev.rating}</p>
                      <p>{rev.comment}</p>
                      <p>- {rev.reviewerName}</p>
                      <p>{rev.stock}</p>
                    </div>
                  );
                })
              ) : (
                <p>No reviews</p>
              )}

            </div>
          );
        })}

      </div>
    </div>
  );
};

export default New;