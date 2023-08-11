import { useContext, useState } from 'react';
import styles from './EditProduct.module.scss';
import ProductImage from './components/ProductImage/ProductImage';
import MainButton from '@/ui/Buttons/MainButton';
import SecondaryButton from '@/ui/Buttons/SecondaryButton';
import { ModalContext } from '@/hooks/useModal';
import ApproveModal from '../ApproveModal/ApproveModal';
import ProductGallery from './components/ProductGallery/ProductGallery';

// ['pie', 'cake', 'dessert', 'other'];

const EditProduct = ({ product = {}, isNew }) => {
  const { openModal, closeModal } = useContext(ModalContext);

  const [productName, setProductName] = useState(
    product.name || null
  );
  const [productPrice, setProductPrice] = useState(
    Number(product.price) || null
  );
  const [productDescription, setProductDescription] = useState(
    product.description || null
  );
  const [productCategory, setProductCategory] = useState(
    product.category || null
  );
  const [productImage, setProductImage] = useState(null);
  const [productImageURL, setProductImageURL] = useState(
    product.imageURL || null
  );
  const [productImageGallery, setProductImageGallery] = useState(
    product.imageGallery || null
  );
  const [productCalories, setProductCalories] = useState(
    Number(product.calories) || null
  );
  const [productProteins, setProductProteins] = useState(
    Number(product.proteins) || null
  );
  const [productFats, setProductFats] = useState(
    Number(product.fats) || null
  );
  const [productCarbs, setProductCarbs] = useState(
    Number(product.carbohydrates) || null
  );

  const submitProduct = () => {
    const newProduct = {
      name: productName,
      price: productPrice,
      description: productDescription,
      category: productCategory,
      image: productImage,
      imageURL: productImageURL,
      imageGallery: productImageGallery,
      calories: productCalories,
      proteins: productProteins,
      fats: productFats,
      carbohydrates: productCarbs,
    };

    console.log(newProduct);
    // closeModal()
  };

  const handleSubmit = () => {
    openModal(
      <ApproveModal
        message="Завершити редагування?"
        approveButton="Так"
        approveAction={submitProduct}
        rejectButton="Ні"
        rejectaction={closeModal}
      />
    );
  };
  // const clearForm = () => {
  //   setProductName(null);
  //   setProductPrice(null);
  //   setProductDescription(null);
  //   setProductCategory(null);
  //   setProductImageURL(null);
  //   setProductImageGallery(null);
  //   setProductCalories(null);
  //   setProductProteins(null);
  //   setProductFats(null);
  //   setProductCarbs(null);
  //   closeModal();
  // };

  // const handleClear = () => {
  //   openModal(
  //     <ApproveModal
  //       message="Очистити?"
  //       approveButton="Так"
  //       approveAction={clearForm}
  //       rejectButton="Ні"
  //       rejectaction={closeModal}
  //     />
  //   );
  // };

  return (
    <div className={styles.container}>
      <ProductImage
        image={productImageURL}
        setImage={setProductImage}
        isNew={isNew}
      />
      {!isNew && (
        <ProductGallery
          images={productImageGallery}
          setMainImage={setProductImageURL}
          // id={product._id}
          id="12345"
        />
      )}

      <div className={styles.btnWrapper}>
        <MainButton onClick={submitProduct}>Готово</MainButton>
        {/* <SecondaryButton onClick={handleClear}>
          Очистити
        </SecondaryButton> */}
      </div>
    </div>
  );
};

export default EditProduct;
