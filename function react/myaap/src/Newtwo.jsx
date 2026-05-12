import React from "react";
import "./Newtwo.css";

const New = ({ usersData }) => {
  return (
    <div className="container">
      <div className="user-grid">

        {usersData.users.map((user) => {
          return (
            <div className="user-card" key={user.id}>

              <img src={user.image} alt="user" />

              <h2>
                {user.firstName} {user.lastName}
              </h2>

              <p>{user.email}</p>
              <p>Age: {user.age}</p>
              <p>{user.gender}</p>
              <p>{user.phone}</p>
              <p>{user.bloodGroup}</p>
              <p>{user.eyeColor}</p>

              <p>
                Height: {user.height} | Weight: {user.weight}
              </p>

              <p>Username: {user.username}</p>
              <p>DOB: {user.birthDate}</p>
              <p>Role: {user.role}</p>

            </div>
          );
        })}

      </div>
    </div>
  );
};

export default New;