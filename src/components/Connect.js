import React from "react";

const Connect = () => {
  return (
    <div>
      <div className="container-fluid padding">
        <div className="row text-center padding">
          <div className="col-12">
            <h3>Connect</h3>
          </div>
          <div className="col-12 social padding">
            <a href="facebook.com">
              {" "}
              <div className="fab fa-facebook"></div>
            </a>
            <a href="facebook.com">
              <div className="fab fa-twitter"></div>
            </a>

            <a href="facebook.com">
              {" "}
              <div className="fab fa-google-plus-g"></div>
            </a>
            <a href="facebook.com">
              {" "}
              <div className="fab fa-instagram"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
