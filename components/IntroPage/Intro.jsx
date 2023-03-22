import React from "react";

function Intro() {
  return (
    <div className="chairmart_container">
      <h1 className="chairmart">CHAIRMART</h1>
      <div className="chairmart_grid">
        <div className="chairmart_second_head">
          <p className="chairmart_intro">
            We create venues to improve peoples lives, we bring magic to life on
            the surface. its gleaming but on the inside, its stunning.
          </p>
        </div>

        <div className="chairmart_second_head__">
          <p className="chairmart_numbers">
            77k<span style={{ color: "orange", fontWeight: "bold" }}>+</span>
          </p>
          <p className="chairmart_numbers">
            82k<span style={{ color: "orange", fontWeight: "bold" }}>+</span>
          </p>
          <p className="chairmart_numbers">
            98k<span style={{ color: "orange", fontWeight: "bold" }}>+</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Intro;
