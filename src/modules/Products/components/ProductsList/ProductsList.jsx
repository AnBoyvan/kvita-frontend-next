import { useRouter } from 'next/router';
import styles from './ProductsList.module.scss';
import { useFetchProducts } from '@/hooks/useProducts';
import { useEffect, useState } from 'react';
import ProductCard from '@/components/ProductCard/ProductCard';
import Pagination from '../Pagination/Pagination';

const ProductsList = () => {
  const { query } = useRouter();
  const requestParams = new URLSearchParams(query).toString();

  const { products, refetchProducts } =
    useFetchProducts(requestParams);

  const list = products
    ? products.result.map(product => (
        <ProductCard key={product._id} product={product} />
      ))
    : null;

  useEffect(() => {
    refetchProducts();
  }, [refetchProducts, requestParams]);
  return (
    <>
      {list && list.length > 0 ? (
        <ul className={styles.list}>{list}</ul>
      ) : (
        <span className={styles.notFound}>
          Нічого не знайдено. Змініть параметри пошуку
        </span>
      )}
      {products && products.count > 16 && (
        <Pagination count={products.count} />
      )}
    </>
  );
};

export default ProductsList;
