import { useRouter } from 'next/router';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';

import Icon from '@/ui/Icon/Icon';

import styles from './Pagination.module.scss';

const Pagination = ({ count }) => {
  const router = useRouter();

  const onPageChange = ({ selected }) => {
    const newPage = selected + 1;

    const newQuery = { ...router.query, page: newPage };

    const queryString = new URLSearchParams(newQuery).toString();
    router.push(`/products?${queryString}`, undefined, {
      shallow: true,
    });
  };

  const checkPage = () => {
    const currentPage = router.query.page;
    if (currentPage > 1) {
      return currentPage - 1;
    }
    return 0;
  };
  return (
    <div className={styles.container}>
      <ReactPaginate
        previousLabel={<Icon id="prev" />}
        nextLabel={<Icon id="next" className={styles.icon} />}
        breakLabel={'...'}
        pageCount={Math.ceil(count / 16)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={onPageChange}
        forcePage={checkPage()}
        containerClassName={styles.pagination}
        breakClassName={styles.paginationLink}
        previousLinkClassName={styles.paginationBtn}
        nextLinkClassName={styles.paginationBtn}
        pageLinkClassName={styles.paginationLink}
        activeLinkClassName={styles.paginationActiveLink}
      />
    </div>
  );
};

Pagination.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Pagination;
