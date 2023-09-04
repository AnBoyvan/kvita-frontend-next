import { Vortex } from 'react-loader-spinner';

import styles from './CustomLoader.module.scss';

const CustomLoader = () => {
  return (
    <div className={styles.overlay}>
      <Vortex
        visible={true}
        height="100"
        width="100"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={[
          'red',
          'green',
          'blue',
          'yellow',
          'orange',
          'purple',
        ]}
      />
    </div>
  );
};

export default CustomLoader;
