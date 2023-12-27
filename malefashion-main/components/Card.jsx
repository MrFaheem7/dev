import React from "react";

const ProductCard = () => {
  const props = [
    {
      pname: "Kids Products",
      disc: "Variety of toys for different ages",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv16RX8IUHnRHXY43gzeKDg9KbjmHV2ZhiC_YbyXu5cQ&s",
    },
    {
      pname: "Cosmetics",
      disc: "Makeup products for all skin types",
      url: "https://media.istockphoto.com/id/1296705483/photo/make-up-products-prsented-on-white-podiums-on-pink-pastel-background.jpg?s=612x612&w=0&k=20&c=j3Vfpo81L5I2g0uJ5tArBC3l_fcPtPAcLzzT4pq5BLY=",
    },
    {
      pname: "Electronics",
      disc: "Latest gadgets and tech accessories",
      url: "https://i.pinimg.com/736x/ba/c1/6e/bac16e9df93c7eeff7ad9268bbb4ad1c.jpg",
    },
  ];
  return (
    <>
      {props.map((items) => {
        return (
          <div className="card">
            <div
              className="card-image"
              style={{ backgroundImage: `url(${items.url})` }}
            ></div>
            <div className="card-content">
              <h3>{items.pname}</h3>
              <p>{items.disc}</p>
              <button className="card-button">Add to Cart</button>
            </div>

            <style jsx>{`
              .card {
                width: 300px;
                border: 1px solid #ccc;
                border-radius: 8px;
                overflow: hidden;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                margin: 10px;
              }

              .card-image {
                background-size: cover;
                height: 200px;
              }

              .card-content {
                padding: 20px;
              }

              .card-button {
                display: block;
                width: 100%;
                padding: 10px 0;
                text-align: center;
                background-color: #007bff;
                color: #fff;
                text-decoration: none;
                border: none;
                border-radius: 4px;
                cursor: pointer;
              }

              .card-button:hover {
                background-color: #0056b3;
              }
              .card:hover {
                transform: scale(1.05); /* Scale the card slightly on hover */
                border-color: #007bff; /* Change border color on hover */
                transition: transform 0.3s ease-in-out,
                  border-color 0.3s ease-in-out; /* Add transition for a smooth effect */
              }
            `}</style>
          </div>
        );
      })}
    </>
  );
};

export default ProductCard;
