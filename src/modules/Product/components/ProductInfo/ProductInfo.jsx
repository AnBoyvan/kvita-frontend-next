import LikeButton from '@/ui/Buttons/LikeButton';
import styles from './ProductInfo.module.scss';
import Image from 'next/image';
import { ProductImages } from '../ProductImages/ProductImages';
import { useContext, useState } from 'react';
import { Icon } from '@/ui/Icon/Icon';
import CartButton from '@/ui/Buttons/CartButton';
import { ModalContext } from '@/hooks/useModal';
import ProductImageModal from '@/modules/Product/components/ProductImageModal/ProductImageModal';

const ProductInfo = ({ product }) => {
  const { openModal } = useContext(ModalContext);

  const {
    _id,
    name,
    imageURL,
    imageGallery,
    favorite,
    price,
    description,
    calories,
    proteins,
    fats,
    carbohydrates,
  } = product;

  const [mainImage, setMainImage] = useState(imageURL);
  const [quantity, setQuantity] = useState(1);

  const openImageModal = () => {
    openModal(
      <ProductImageModal
        title={name}
        images={imageGallery}
        currentImage={mainImage}
      />
    );
  };

  return (
    <div>
      <div className={styles.product}>
        <div className={styles.images}>
          <div className={styles.mainImageWrapper}>
            <div
              className={styles.mainImage}
              onClick={openImageModal}
            >
              <Image
                src={mainImage}
                alt={name}
                fill={true}
                sizes="(max-width: 300px)"
                style={{
                  objectFit: 'cover',
                  borderRadius: 'inherit',
                }}
              />
            </div>
            <div className={styles.like}>
              <LikeButton id={_id} likes={favorite} />
            </div>
          </div>

          {imageGallery && (
            <ProductImages
              images={imageGallery}
              name={name}
              action={setMainImage}
            />
          )}
        </div>
        <div className={styles.descrWrapper}>
          <div className={styles.descr}>{description}</div>
          {calories && (
            <div className={styles.descrCalories}>
              <p className={styles.descrCaloriesTitle}>Поживність:</p>

              <div className={styles.descrCaloriesElement}>
                Енергетична цінність:
                <span className={styles.descrCaloriesCount}>
                  &nbsp;{calories}&nbsp;ккал
                </span>
              </div>
              <div className={styles.descrCaloriesElement}>
                Білки:
                <span className={styles.descrCaloriesCount}>
                  &nbsp;{proteins}&nbsp;г
                </span>
              </div>
              <div className={styles.descrCaloriesElement}>
                Жири:
                <span className={styles.descrCaloriesCount}>
                  &nbsp;{fats}&nbsp;г
                </span>
              </div>
              <div className={styles.descrCaloriesElement}>
                Вуглеводи:
                <span className={styles.descrCaloriesCount}>
                  &nbsp;{carbohydrates}&nbsp;г
                </span>
              </div>
            </div>
          )}

          <div className={styles.actionWrapper}>
            <div className={styles.priceWrapper}>
              <span className={styles.priceText}>Ціна</span>
              <span className={styles.priceCount}>
                &#8372; {price}
              </span>
            </div>
            <div className={styles.quantityWrapper}>
              <button
                type="button"
                disabled={quantity < 2}
                onClick={() => setQuantity(quantity - 1)}
                className={styles.quantityBtn}
              >
                <Icon id="decrease" />
              </button>
              <span className={styles.quantity}>{quantity}</span>

              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className={styles.quantityBtn}
              >
                <Icon id="increase" />
              </button>
            </div>
            <CartButton product={product} quantity={quantity} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
