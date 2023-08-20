import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import Notiflix from 'notiflix';

import ApproveModal from '@/components/ApproveModal/ApproveModal';
import {
  ProductCategory,
  ProductDescription,
  ProductGallery,
  ProductImage,
  ProductName,
  ProductNutrients,
  ProductPrice,
} from './components';
import { MainButton, SecondaryButton } from '@/ui/Buttons';

import { ModalContext } from '@/hooks/useModal';
import { useMutateProducts } from '@/hooks/useProducts';
import { useValidate } from '@/hooks/useValidate';
import {
  newProductFormData,
  updatedProductFormData,
} from '@/utils/helpers/formDataFormating';

import styles from './EditProduct.module.scss';

const EditProduct = ({ product = {}, isNew }) => {
  const { openModal, closeModal } = useContext(ModalContext);
  const {
    addNewProduct,
    removeProductImage,
    updProduct,
    removeProduct,
  } = useMutateProducts();
  const { validateNewProduct, validateUpdatedProduct } =
    useValidate();
  const router = useRouter();

  const [productName, setProductName] = useState(product.name || '');
  const [productPrice, setProductPrice] = useState(
    Number(product.price) || 0
  );
  const [productDescription, setProductDescription] = useState(
    product.description || ''
  );
  const [productCategory, setProductCategory] = useState(
    product.category || ''
  );
  const [productImage, setProductImage] = useState(null);
  const [addedToGallery, setAddedToGallery] = useState([]);
  const [newImages, setNewImages] = useState([]);
  const [productImageURL, setProductImageURL] = useState(
    product.imageURL || ''
  );
  const [productImageGallery, setProductImageGallery] = useState(
    product.imageGallery || []
  );
  const [productNutrients, setProductNutrients] = useState({
    calories: Number(product.calories) || 0,
    proteins: Number(product.proteins) || 0,
    fats: Number(product.fats) || 0,
    carbohydrates: Number(product.carbohydrates) || 0,
  });

  const clearForm = () => {
    setProductName('');
    setProductPrice(0);
    setProductDescription('');
    setProductCategory('');
    setProductImage(null);
    setAddedToGallery([]);
    setNewImages([]);
    setProductImageURL('');
    setProductImageGallery([]);
    setProductNutrients({
      calories: 0,
      proteins: 0,
      fats: 0,
      carbohydrates: 0,
    });
    closeModal();
  };

  const deleteGalleryImages = () => {
    for (const img of product.imageGallery) {
      const chekImg = productImageGallery.includes(img);
      if (!chekImg) {
        removeProductImage({ _id: product._id, imgURL: img });
      }
    }
  };

  const createProduct = async newProduct => {
    const isValid = await validateNewProduct(newProduct);

    if (isValid === true) {
      const data = newProductFormData(newProduct);
      await addNewProduct(data);
      clearForm();
      closeModal();
    } else {
      const errors = isValid;
      errors.forEach(error => {
        Notiflix.Notify.failure(error);
      });
      return;
    }
    router.push('/admin/products');
  };

  const updateProduct = async updatedProduct => {
    await deleteGalleryImages();
    const isValid = await validateUpdatedProduct(updatedProduct);

    if (isValid === true) {
      const data = updatedProductFormData(updatedProduct);
      await updProduct({ _id: product._id, data });
      closeModal();
    } else {
      const errors = isValid;
      errors.forEach(error => {
        Notiflix.Notify.failure(error);
      });
      return;
    }
    router.push('/admin/products');
  };

  const submitProduct = async () => {
    const submitedProduct = {
      name: productName,
      price: productPrice,
      description: productDescription,
      category: productCategory,
      image: productImage,
      gallery: addedToGallery,
      imageURL: productImageURL,
      imageGallery: productImageGallery,
      calories: productNutrients.calories,
      proteins: productNutrients.proteins,
      fats: productNutrients.fats,
      carbohydrates: productNutrients.carbohydrates,
    };

    if (isNew) {
      createProduct(submitedProduct);
    } else {
      updateProduct(submitedProduct);
    }
  };

  const deleteProduct = () => {
    removeProduct(product._id);
    closeModal();
    router.push('/admin/products');
  };

  const handleSubmit = () => {
    openModal(
      <ApproveModal
        message={isNew ? 'Додати продукт?' : 'Змінити продукт?'}
        approveButton="Так"
        approveAction={submitProduct}
        rejectButton="Ні"
        rejectaction={closeModal}
      />
    );
  };

  const handleClear = () => {
    openModal(
      <ApproveModal
        message="Очистити?"
        approveButton="Так"
        approveAction={clearForm}
        rejectButton="Ні"
        rejectaction={closeModal}
      />
    );
  };

  const handleDelete = () => {
    openModal(
      <ApproveModal
        message={`Видалити ${product.name}?`}
        approveButton="Так"
        approveAction={deleteProduct}
        rejectButton="Ні"
        rejectaction={closeModal}
      />
    );
  };

  return (
    <div className={styles.container}>
      <ProductImage
        image={productImageURL}
        setImage={setProductImage}
        setImageURL={setProductImageURL}
        isNew={isNew}
      />
      <ProductGallery
        isNew={isNew}
        images={productImageGallery}
        setProductImageGallery={setProductImageGallery}
        setMainImage={setProductImageURL}
        addedToGallery={addedToGallery}
        setAddedToGallery={setAddedToGallery}
        newImages={newImages}
        setNewImages={setNewImages}
        id={product._id}
      />
      <ProductName name={productName} setName={setProductName} />
      <ProductPrice price={productPrice} setPrice={setProductPrice} />
      <ProductDescription
        description={productDescription}
        setDescription={setProductDescription}
      />
      <ProductCategory
        category={productCategory}
        setCategory={setProductCategory}
      />
      <ProductNutrients
        nutrients={productNutrients}
        setNutrients={setProductNutrients}
      />
      <div className={styles.btnWrapper}>
        <MainButton onClick={handleSubmit}>Готово</MainButton>
        {isNew ? (
          <SecondaryButton onClick={handleClear}>
            Очистити
          </SecondaryButton>
        ) : (
          <SecondaryButton onClick={handleDelete}>
            Видалити
          </SecondaryButton>
        )}
      </div>
    </div>
  );
};

EditProduct.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    category: PropTypes.string,
    imageURL: PropTypes.string,
    imageGallery: PropTypes.arrayOf(PropTypes.string),
    calories: PropTypes.number,
    proteins: PropTypes.number,
    fats: PropTypes.number,
    carbohydrates: PropTypes.number,
    favorite: PropTypes.arrayOf(PropTypes.string),
  }),
  isNew: PropTypes.bool,
};

export default EditProduct;
