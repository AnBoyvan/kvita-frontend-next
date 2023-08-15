import {
  addPictureSchema,
  updatePictureSchema,
} from '@/utils/validation/pictureSchemas';
import { addProductSchema } from '@/utils/validation/productSchemas';

export const useValidate = () => {
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

  const validateNewPicture = async picture => {
    try {
      await addPictureSchema.validate(picture, {
        abortEarly: false,
      });
      return true;
    } catch (validationError) {
      return validationError.inner.map(error => error.message);
    }
  };

  const validatePictureUpdate = async picture => {
    try {
      await updatePictureSchema.validate(picture, {
        abortEarly: false,
      });
      return true;
    } catch (validationError) {
      return validationError.inner.map(error => error.message);
    }
  };

  return {
    validateNewProduct,
    validateNewPicture,
    validatePictureUpdate,
  };
};
