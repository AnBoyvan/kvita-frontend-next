import Image from 'next/image';
import { useContext, useState } from 'react';

import {
  CloseModalButton,
  MainButton,
  SecondaryButton,
} from '@/ui/Buttons';
import Icon from '@/ui/Icon/Icon';

import { ModalContext } from '@/hooks/useModal';
import { useFetchProducts } from '@/hooks/useProducts';
import { updateNewProduct } from '@/services/admin';
import { sortData } from '@/utils/helpers/sortData';

import styles from './HeroType.module.scss';
import newProduct from '@/config/newProduct.json';

const ChangeProduct = () => {
  const { closeModal } = useContext(ModalContext);
  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const { products } = useFetchProducts('limit=1000');

  const sortedProducts = products
    ? sortData({
        data: products.result,
        fieldName: 'name',
        type: 'asc',
      })
    : null;

  const filteredProducts = sortedProducts?.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const handlePickOption = e => {
    const optionId = e.target.dataset.id;
    const pickedProduct = filteredProducts?.filter(
      product => product._id === optionId
    );
    setSelectedOption(pickedProduct[0]);
    setSearch(pickedProduct[0].name);
  };

  const options = filteredProducts?.map(({ _id, name }) => (
    <li
      key={_id}
      className={styles.modalOption}
      onClick={handlePickOption}
      data-id={_id}
    >
      {name}
    </li>
  ));

  const handleClick = () => {
    const { _id, name, imageURL, description } = selectedOption;
    const updatedConfig = {
      ...newProduct,
      name,
      imageURL,
      description,
      link: `/products/${_id}`,
    };
    updateNewProduct(updatedConfig);
    closeModal();
  };

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalTitle}>Оберіть новинку</div>
      <div className={styles.modalSearch}>
        <input
          type="text"
          value={search}
          className={styles.modalSearchInput}
          onChange={e => setSearch(e.target.value)}
          onFocus={() => setIsOpen(true)}
          onBlur={() => {
            setTimeout(() => {
              setIsOpen(false);
            }, 200);
          }}
        />
        <div className={styles.modalSearchIcon}>
          {!isOpen && <Icon id="dropdown" />}
        </div>
        {isOpen && (
          <ul className={styles.modalOptionsList}>{options}</ul>
        )}
      </div>
      <div className={styles.modalSelectedWrapper}>
        {selectedOption && (
          <div className={styles.modalSelected}>
            <Image
              src={selectedOption.imageURL}
              alt={selectedOption.name}
              width={70}
              height={70}
              style={{
                objectFit: 'cover',
                borderRadius: '20px',
              }}
            />
            <span>{selectedOption.name}</span>
          </div>
        )}
      </div>

      <div className={styles.modalBtnWrapper}>
        <MainButton onClick={handleClick}>Змінити</MainButton>
        <SecondaryButton onClick={closeModal}>Назад</SecondaryButton>
      </div>
      <CloseModalButton />
    </div>
  );
};

export default ChangeProduct;
