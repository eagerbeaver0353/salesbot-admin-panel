import Modal from "react-modal";
import { useFormik } from "formik";
import InventorySchema from "../schemas/InventorySchema";
import { useEffect } from "react";
const AttributeFrom = (props) => {
  console.log(props?.data,"ind==>");
  Modal.setAppElement("#root");
  const formik = useFormik({
    initialValues: {
      productType: "",
      productName: "",
      specifications: "",
      availability: "",
      price: "",
    },
    validationSchema: InventorySchema,
    onSubmit: (values) => {
      const newData = {
        id: Date.now(),
        ...values,
      };

      const existingData = JSON.parse(localStorage.getItem("myData")) || [];
      const isDuplicate = existingData.some((item) => item.id === newData.id);
      if (isDuplicate) {
        alert("exits");
      } else {
        const updatedData = [...existingData, newData];

        localStorage.setItem("myData", JSON.stringify(updatedData));
      }
    },
  });
  useEffect(() => {
    if (props.data) {
      formik.setValues({
        productType: props.data.productType,
        productName: props.data.productName,
        specifications: props.data.specifications,
        availability: props.data.availability,
        price: props.data.price,
      });
    }
  }, [props.data]);
  return (
    <>
      <Modal
        isOpen={props?.isModelOpen?.open}
        contentLabel="Example Modal"
        id="root"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
          content: {
            width: "600px",
            height: "600px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "white",
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        <div className="d-flex justify-content-between">
          <h3>{props?.type} {formik?.values?.productName} Product</h3>
          <div onClick={() => props?.setModelOpen(!props?.isModelOpen)}>
            <i className="bi bi-x-lg"></i>
          </div>
        </div>

        <form onSubmit={formik.handleSubmit} className="w-100">
          <div className="form-group  mt-3">
            <label htmlFor="productName" className="required-label">
              Product Type <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              id="productType"
              name="productType"
              className={`form-control ${
                formik.touched.productType && formik.errors.productType
                  ? "is-invalid"
                  : ""
              }`}
              value={formik.values.productType}
              onChange={formik.handleChange}
            />
            {formik?.touched?.productType && formik?.errors?.productType ? (
              <div className="text-danger">{formik?.errors?.productType}</div>
            ) : null}
          </div>
          <div className="form-group mt-3">
            <label htmlFor="productName" className="required-label">
              Product Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              id="productName"
              name="productName"
              className={`form-control ${
                formik.touched.productName && formik.errors.productName
                  ? "is-invalid"
                  : ""
              }`}
              value={formik.values.productName}
              onChange={formik.handleChange}
            />
            {formik?.touched?.productName && formik?.errors?.productName ? (
              <div className="invalid-feedback">
                {formik?.errors?.productName}
              </div>
            ) : null}
          </div>
          <div className="form-group mt-3">
            <label htmlFor="productName" className="required-label">
              Specifications <span className="text-danger">*</span>
            </label>{" "}
            <input
              type="text"
              id="specifications"
              name="specifications"
              className={`form-control ${
                formik.touched.specifications && formik.errors.specifications
                  ? "is-invalid"
                  : ""
              }`}
              value={formik.values.specifications}
              onChange={formik.handleChange}
            />
            {formik?.touched?.specifications &&
            formik?.errors?.specifications ? (
              <div className="text-danger">
                {formik?.errors?.specifications}
              </div>
            ) : null}
          </div>
          <div className="form-group mt-3">
            <label htmlFor="productName" className="required-label">
              Availability <span className="text-danger">*</span>
            </label>{" "}
            <input
              type="text"
              id="availability"
              name="availability"
              className={`form-control ${
                formik.touched.availability && formik.errors.availability
                  ? "is-invalid"
                  : ""
              }`}
              value={formik.values.availability}
              onChange={formik.handleChange}
            />
            {formik?.touched?.availability && formik?.errors?.price ? (
              <div className="text-danger">{formik?.errors?.availability}</div>
            ) : null}
          </div>
          <div className="form-group mt-3 ">
            <label htmlFor="productName" className="required-label">
              Price <span className="text-danger">*</span>
            </label>{" "}
            <input
              type="text"
              id="price"
              name="price"
              className={`form-control ${
                formik.touched.price && formik.errors.price ? "is-invalid" : ""
              }`}
              value={formik.values.price}
              onChange={formik.handleChange}
            />
            {formik.touched.price && formik.errors.price ? (
              <div className="text-danger">{formik.errors.price}</div>
            ) : null}
          </div>

          <div className="d-flex justify-content-end mt-5">
            <button
              type="button"
              className="btn btn-secondary me-2"
              onClick={() => props?.setModelOpen(!props?.isModelOpen)}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary " >
              Save
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};
export default AttributeFrom;
