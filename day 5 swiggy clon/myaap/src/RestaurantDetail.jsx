import { useParams } from "react-router-dom";
import { restaurants } from "./data/restaurants";

const RestaurantDetail = () => {
  const { id } = useParams();

  const restaurant = restaurants.find(
    (r) => r.id === parseInt(id)
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl">{restaurant.name}</h1>

      {restaurant.dishes.map((dish, i) => (
        <div key={i}>
          <img src={dish.image} className="w-20" />
          <p>{dish.name}</p>
        </div>
      ))}
    </div>
  );
};

export default RestaurantDetail;