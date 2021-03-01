/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import img from './img/homeloan.jpg'

const Card = (props) => {
  return (
    <>
            <div className="col-md-4 ">
              <div className="card services__card mx-auto">
                <div className="card__img mt-4">
                <img
                  src={props.imgsrc}
                  className="card-img-top img-fluid"
                  alt="..."
                />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{props.title}</h5>
                  <p className="card-text">
                    {props.info}
                  </p>
                  <a href="#" className="btn button p-1 btn-outline-primary">
                    Know more
                  </a>
                  
                </div>
              </div>
            </div>
    </>
  );
};

export default Card;
