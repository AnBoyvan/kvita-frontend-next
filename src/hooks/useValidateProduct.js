import { addProductSchema } from '@/utils/validation/productSchemas';

export const useValidateProduct = () => {
  const validateNewProduct = async product => {
    try {
      await addProductSchema.validate(product, {
        abortEarly: false,
      });
      return true;
    } catch (validationError) {
      return validationError.inner.map(error => error.message);
    }
  };
  return { validateNewProduct };
};
