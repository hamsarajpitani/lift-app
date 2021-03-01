import React from "react";
import home from './img/Carousel/lift4.jpg';
import people from "./img/Carousel/lift5.jpg";
import office from "./img/Carousel/lift2.jpg";
import Services from "./Services";

const Crousel = () => {
  return (
    <>
      <section id="carousel">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 p-0">
              <div className="">
                <div
                  id="carouselExampleSlidesOnly"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="0"
                      class="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                  </div>
                  <div className="carousel-inner">
                    <div
                      className="carousel-item  active"
                      data-bs-interval="2000"
                    >
                      <img
                        src={office}
                        className="d-block  mx-auto img-fluid"
                        alt="..."
                      />
                      <div class="carousel-caption d-md-block">
                        <h5>Lift Cabin</h5>
                        <p>
                          We Are Manufatures in Lift Cabin with Great installing Engginers
                        </p>
                      </div>
                    </div>
                    <div className="carousel-item " data-bs-interval="2000">
                      <img
                        src={people}
                        className="d-block  mx-auto img-fluid"
                        alt="..."
                      />
                      <div class="carousel-caption d-md-block">
                        <h5>Capsule Cabin</h5>
                        <p>
                        We Provide High Quality Capsule Lift Cabin with Quality Assurance
                        </p>
                      </div>
                    </div>
                    <div className="carousel-item " data-bs-interval="2000">
                      <img
                         src={home}
                         className="d-block  mx-auto img-fluid"
                         alt="..."
                      />
                      <div class="carousel-caption d-md-block">
                        <h5>Maintainance and Services</h5>
                        <p>
                          We Provide Maintaince and Services 
                        </p>
                      </div>
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Services />
    </>
  );
};

export default Crousel;
