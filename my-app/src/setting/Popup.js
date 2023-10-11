import React from "react";
const PopupCustom = (props) => {
  return (
    <>
      <div
        className="swal2-container swal2-center swal2-backdrop-show"
        style={{ overflowY: "auto" }}
      >
        <div
          className="swal2-popup swal2-modal swal2-icon-warning swal2-show"
          tabIndex="-1"
          role="dialog"
          aria-live="assertive"
          aria-modal="true"
          style={{ display: "grid", height: "auto", padding: "20px" }}
        >
          <ul className="swal2-progress-steps" style={{ display: "none" }}></ul>
          <div
            className="swal2-icon swal2-warning swal2-icon-show"
            style={{ display: "flex" }}
          >
            <div className="swal2-icon-content">!</div>
          </div>

          <div
            className="swal2-html-container"
            id="swal2-html-container"
            style={{ display: "block" }}
          >
            Are you sure you want to delete {props?.data?.productName}
          </div>

          <div
            className="swal2-actions"
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            <div className="swal2-loader"></div>
            <button
              type="button"
              className="swal2-confirm btn fw-bold btn-danger  "
              aria-label=""
              style={{ display: "inline-block", marginRight: "10px" }}
              onClick={()=>props?.modelOpen(false, "delete")}
            >
              Yes, delete!
            </button>
            <button
              type="button"
              className="swal2-cancel btn fw-bold btn-active-light-primary"
              aria-label=""
              style={{ display: "inline-block", color: "#007bff" }}
              onClick={()=>props.modelOpen(false, "delete")}
            >
              No, cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default PopupCustom;
