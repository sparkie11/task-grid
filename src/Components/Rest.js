import React from "react";
import "./Rest.css";
// import { agent } from "../Assets/agence-olloweb-Z2ImfOCafFk-unsplash.jpg";
const Rest = () => {
  return (
    <div className="full-container">
      <h2> When You Learn with Us, You Stand Out</h2>
      <div className="full">
        <div className="ggrid">
          <div className="img-grid bot rot">
            <img
              src="https://images.unsplash.com/photo-1516383607781-913a19294fd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80"
              alt="agency"
            />
            <h3 className="violet">
              "Follow the learning path for your role..."
            </h3>
          </div>
          <div className="img-grid bot">
            <img
              src="https://plus.unsplash.com/premium_photo-1682308259865-afd772272f60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1886&q=80"
              alt=""
            />

            <h3 className="orange">
              "Or choose what skill you want to develop..."
            </h3>
          </div>
          <div className="img-grid rot">
            <img
              src="https://images.unsplash.com/photo-1542439218-329eec7ea6a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <h3 className="green">
              "Or explore what your colleagues are learning"
            </h3>
          </div>
          <div className="img-grid">
            <img
              src="https://images.unsplash.com/photo-1601824772711-1e22eed6db58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <h3 className="brown">
              "Or explore what your colleagues are learning"
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rest;
