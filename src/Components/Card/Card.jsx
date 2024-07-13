import { useState } from "react";

function Card({ cardData, updateCartNo }) {
  const [isItemAdded, setIsItemAdded] = useState(false);
  return (
    <div className="col mb-5">
      <div className="card h-100 ">

        <img
          src={cardData.image}
          className="card-img-top "
          alt="product image"
        />
        {cardData.sale ? (
          <div
            className="badge position-absolute bg-primary text-white"
            style={{ top: "0.5rem", right: "0.5rem" }}
          >
            20% Off
          </div>
        ) : (
          <></>
        )}
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="card-title fw-bolder">{cardData.name}</h5>
            {cardData.rating ? (
              <div className="text-warning mb-2 small">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
            ) : (
              <></>
            )}

            <div className="card-text">
              {cardData.original ? (
                <span className="text-muted text-decoration-line-through">
                  {"  "}
                  {cardData.originalPrice}
                </span>
              ) : (
                <></>
              )}{" "}
              <span className="">{cardData.price}</span>
            </div>
          </div>
        </div>

        <div className="card-footer bg-transparent p-4 pt-0 border-0 ">
          <div className="text-center">
            {isItemAdded ? (
              <button
                className="btn btn-danger"
                onClick={() => {
                  updateCartNo((prevValue) => prevValue - 1);
                  setIsItemAdded((prevValue) => !prevValue);
                }}
              >
                Remove from cart
              </button>
            ) : (
              <button
                className="btn btn-outline-success"
                onClick={() => {
                  updateCartNo((prevValue) => prevValue + 1);
                  setIsItemAdded((prevValue) => !prevValue);
                }}
              >
                Add to cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;