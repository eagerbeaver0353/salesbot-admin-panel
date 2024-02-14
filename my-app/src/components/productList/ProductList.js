import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./ProductList.css";
import MyNavbar from "../../layout/Navbar";
import { useState } from "react";
import PopupCustom from "../../setting/Popup";
import "sweetalert2";
import AttributeFrom from "../attributeFrom/AttributeForm";

const ProductList = () => {
  const attributes = JSON.parse(localStorage.getItem("myData")) || [];

  const [isModelOpen, setIsModelOpen] = useState({
    open: false,
    type: "",
    attribute:{}
  });
  const modelOpen = (open, type,attribute) => {
    setIsModelOpen({
      open: open,
      type: type,
      data:attribute
    });
  };

  return (
    <>
      <div>
        <MyNavbar />
        <div className="bg-dark nav-down position-relative ">
          <div className="container  ">
            <h3 className="text-light position-absolute top-50 ">
              Product List
            </h3>
          </div>
        </div>

        <div className="card container position-absolute start-50 translate-middle-x top-custom">
          <div className="card-body py-3">
            <button
              className="btn btn-primary mb-3 "
              onClick={() => modelOpen(true, "Add")}
            >
              {" "}
              <i className="bi bi-plus-lg"></i>Add Product
            </button>

            <div className="table-responsive ">
              <table className="table table-bordered table-hover">
                <thead className="thead-light">
                  <tr>
                    <th scope="col">SR No</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Product Type</th>
                    <th scope="col">Specifications</th>
                    <th scope="col">Availability</th>
                    <th scope="col">Price</th>
                    <th scope="col" className="text-end">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {attributes?.map((attribute, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{attribute?.productName}</td>
                      <td>{attribute?.productType}</td>
                      <td>{attribute?.specifications}</td>
                      <td>{attribute?.availability}</td>
                      <td>{attribute?.price}</td>
                      <td className="text-end">
                        <Popup
                          trigger={
                            <button className="btn btn-light btn-active-light-primary btn-flex btn-center btn-sm-light px-3 action">
                              Actions <i className="bi bi-chevron-down"></i>
                            </button>
                          }
                          position="bottom center"
                          on={"hover"}
                        >
                          <div className="popup-content border-0 w-50">
                            <div className="menu-item  ">
                              <button
                                className="menu-link fs-7 border-0 btn"
                                onClick={() => modelOpen(true, "Edit",attribute)}
                              >
                                {" "}
                                Edit
                              </button>
                            </div>
                            <div className="menu-item ">
                              <button
                                className="menu-link fs-7 btn border-0"
                                onClick={() => modelOpen(true, "delete",attribute)}
                              >
                                {" "}
                                Delete
                              </button>
                            </div>
                          </div>
                        </Popup>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {isModelOpen?.open && isModelOpen?.type !== "delete" && (
        <AttributeFrom
          isModelOpen={isModelOpen}
          setModelOpen={setIsModelOpen}
          type={isModelOpen?.type}
          modelOpen={modelOpen}
          data={isModelOpen?.data}
        />
      )}
      {isModelOpen?.open && isModelOpen?.type === "delete" && (
        <PopupCustom modelOpen={modelOpen} data={isModelOpen?.data} />
      )}
    </>
  );
};
export default ProductList;
