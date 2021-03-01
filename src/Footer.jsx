/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 mx-auto">
            <div className="row footer">
              <div className="col-md-6 footer d-flex flex-column justify-content-start align-content-center ">
                <h1 className="footer__heading ">Connect With Us</h1>
                <p className="mt-2 footer__para">
                  we are manufactures in lift cabin, m.s.s.s wooden glass ,
                  capsule cabin, m.s swing door , auto door ,telescopic door ,
                  car frame callapsible gate imerforted & complete elevators
                  kits
                </p>
                
                <p className="footer__para contact">
                  <i class="bi bi-geo-alt"></i>
                  jay maharashta nagar,block no 9 , 90 feet road , pant nagar,
                  near hanuman mandir , ghatkopar ,mumbai - 400075
                  <br />
                  <i class="bi bi-telephone"></i>
                  Mr.Deepak Kumar kanojiya
                </p>
              </div>

              <div className="footer__map d-flex col-md-6 align-items-center justify-content-center">
                <div className="row">
                  <div className="col-md-4">
                    <div className="mapouter">
                      <div className="gmap_canvas">
                        <iframe
                          width="696"
                          height="347"
                          id="gmap_canvas"
                          src="https://maps.google.com/maps?q=ghatkopar%2090%20feet%20road&t=&z=13&ie=UTF8&iwloc=&output=embed"
                          frameborder="0"
                          scrolling="no"
                          marginheight="0"
                          marginwidth="0"
                        ></iframe>
                        <a href="https://fmovies2.org">fmovies</a>
                        <br />
                        <a href="https://www.embedgooglemap.net">maps embed</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Copyright --> */}
              <div className="text-center mt-3">
                <p className="text-white fs-6">
                  {" "}
                  © 2020 Copyright All Rights Received
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
