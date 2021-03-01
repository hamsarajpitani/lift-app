/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Card from "./Card";
import CardsData from './Cardsdata';

const Services = () => {
  return (
    <>
    <section className="services">

   
      <div className="services__heading ">
        <div className="text-center">
          <h1 className="mt-2 services__heading__h1">Our Services</h1>
          <hr className="w-25 services__heading__line mx-auto" />
        </div>
      </div>
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-5 gx-5">
              {
                  CardsData.map( (val,ind) =>{
                        return <Card 
                            key={ind}
                            imgsrc={val.imgsrc}
                            title={val.title}
                            info={val.info} />
                  })
              }
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default Services;
