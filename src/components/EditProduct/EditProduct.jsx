import { useContext, useState } from 'react';
import styles from './EditProduct.module.scss';
import ProductImage from './components/ProductImage/ProductImage';
import MainButton from '@/ui/Buttons/MainButton';
import SecondaryButton from '@/ui/Buttons/SecondaryButton';
import { ModalContext } from '@/hooks/useModal';
import ApproveModal from '../ApproveModal/ApproveModal';
import ProductGallery from './components/ProductGallery/ProductGallery';
import ProductName from './components/ProductName/ProductName';
import ProductPrice from './components/ProductPrice/ProductPrice';
import ProductDescription from './components/ProductDescription/ProductDescription';
import ProductCategory from './components/ProductCategory/ProductCategory';
import ProductNutrients from './components/ProductNutrients/ProductNutrients';
import { useValidateProduct } from '@/hooks/useValidateProduct';
import Notiflix from 'notiflix';
import { useMutateProducts } from '@/hooks/useProducts';
import { newProductFormData } from '@/utils/helpers/formDataFormating';

const EditProduct = ({ product = {}, isNew }) => {
  const { openModal, closeModal } = useContext(ModalContext);
  const { addNewProduct } = useMutateProducts();
  const { validateNewProduct } = useValidateProduct();

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
  const [productImages, setProductImages] = useState(null);

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
    setProductImages(null);
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

  const submitProduct = async () => {
    const newProduct = {
      name: productName,
      price: productPrice,
      description: productDescription,
      category: productCategory,
      image: productImage,
      images: productImages,
      imageURL: productImageURL,
      imageGallery: productImageGallery,
      calories: productNutrients.calories,
      proteins: productNutrients.proteins,
      fats: productNutrients.fats,
      carbohydrates: productNutrients.carbohydrates,
    };

    const isValid = isNew ? await validateNewProduct(newProduct) : '';

    if (isValid === true) {
      const data = newProductFormData(newProduct);
      await addNewProduct(data);
    } else {
      const errors = isValid;
      errors.forEach(error => {
        Notiflix.Notify.failure(error);
      });
      return;
    }

    closeModal();
    clearForm();
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

  return (
    <div className={styles.container}>
      <ProductImage
        image={productImageURL}
        setImage={setProductImage}
        setImageURL={setProductImageURL}
        isNew={isNew}
      />
      {!isNew && (
        <ProductGallery
          images={productImageGallery}
          setMainImage={setProductImageURL}
          id={product._id}
        />
      )}
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
        <SecondaryButton onClick={handleClear}>
          Очистити
        </SecondaryButton>
      </div>
    </div>
  );
};

export default EditProduct;
