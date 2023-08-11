import * as Yup from 'yup';
import { addProductSchema } from '../validation/productSchemas';

export const validateNewProduct = async product => {
  try {
    await addProductSchema.validate(product, {
      abortEarly: false,
    });
    return true;
  } catch (validationError) {
    return validationError.inner.map(error => error.message);
  }
};
