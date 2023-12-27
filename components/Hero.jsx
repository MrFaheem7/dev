import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
function Hero() {
  return (
    <>
      <div className="Hero" style={{}}>
        <div className="container">
          <div className="row d-flex ">
            <div className="col-lg-5 col-md-7">
              <h4 className="mt-1">Welcome to GIZMOGARDEN</h4>
              <h1 className="mt-3"> Discover Your Perfect Picks</h1>
              <p className="mt-4">
                “Welcome to our all-inclusive online emporium! Discover a world
                of enchanting cosmetics, captivating electric gadgets, and
                delightful kids’ products. Our AI-driven website offers a
                seamless experience with secure logins, an intuitive cart
                system, and a visually stunning interface. Explore a diverse
                range of high-quality items, each carefully curated to spark joy
                and elevate every moment. Find beauty, innovation, and endless
                possibilities at your fingertips.”
              </p>
              <button className="mbtn mt-4">
                Shop Now{" "}
                <span>
                  <FontAwesomeIcon
                    className="ps"
                    icon={faArrowRight}
                    size="lg"
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <section class="banner spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-7 offset-lg-4">
              <div class="banner__item">
                <div class="banner__item__pic">
                  <img
                    style={{ height: "353px" }}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSx7jJfDuWJxr4dDWzKdwynBhW2vkChUfErw&usqp=CAU"
                    alt="Hero Img"
                    className="img-fluid"
                  />
                </div>
                <div class="banner__item__text">
                  <h2>Electronics</h2>
                  <a href="#">Shop now</a>
                </div>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="banner__item banner__item--middle">
                <div class="banner__item__pic ">
                  <img
                    src="https://cdn.firstcry.com/education/2022/11/06094158/Toy-Names-For-Kids.jpg"
                    alt="Hero Img"
                    className="img-fluid"
                  />
                </div>
                <div class="banner__item__text">
                  <h2>Kids Products</h2>
                  <a href="#">Shop now</a>
                </div>
              </div>
            </div>
            <div class="col-lg-7">
              <div class="banner__item banner__item--last">
                <div class="banner__item__pic">
                  <img
                    style={{ height: "503px" }}
                    src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29zbWV0aWN8ZW58MHx8MHx8fDA%3D"
                    alt="Hero Img"
                    className="img-fluid"
                  />
                </div>
                <div class="banner__item__text">
                  <h2>Cosmetics</h2>
                  <a href="#">Shop now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
