import React from "react";


const Calculator = () => {
  return (
    <>
      <div id="contact">
        {/* <!-- Button trigger modal --> */}
        <a href="tel:+918828507441">
          <button type="button" className="contact__btn">
            <i class="bi bi-telephone"></i>
            
            Call us
          </button>
        </a>

        <a href="https://wa.me/918369272829?text=hello asstha elevator">
        <button type="button" id="whatsapp" class=" btn btn-primary">
          <i class="bi bi-whatsapp"></i>
          Whatsapp
        </button>
        </a>
      </div>
    </>
  );
};

export default Calculator;
