import * as Yup from 'yup';

const InventorySchema = Yup.object({
  productType: Yup.string().required('Product Type is required'),
  productName: Yup.string().required('Product Name is required'),
  specifications: Yup.string().required('Specifications are required'),
  availability: Yup.string().required('Availability is required'),
  price: Yup.number().required('Price is required').positive('Price must be positive'),
});
export default InventorySchema