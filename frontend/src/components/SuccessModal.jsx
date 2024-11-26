import React from "react";
import "../styles/SuccessModal.css";

const SuccessModal = ({ show, message }) => {
  return (
    show && (
      <div className="modal fade show d-block" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content text-center">
            <div className="modal-body">
              <img
                src="/success.gif"
                alt="Success"
                className="img-fluid mb-3"
              />
              <h5>{message}</h5>
              <div className="progress mt-3">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "100%", transition: "width 1.5s linear" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default SuccessModal;
