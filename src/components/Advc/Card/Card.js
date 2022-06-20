import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div>
      <div class="card rounded-top m-3">
        <img
          class="card-img-top rounded S-img"
          src="Ad.webp"
          alt="Card image cap"
        />
        <div class="card-body">
          <div className="S-card-header">
            <h5 class="card-title S-card-title">Card title</h5>
            <div className="S-card-cost">
              <i class="fa-solid fa-square-dollar"></i>
              <span>cost</span>
            </div>
          </div>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
