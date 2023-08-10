import styles from './Options.module.scss';

const Options = ({ action, name, value, title, checked }) => {
  return (
    <div className={styles.wrapper}>
      <input
        name={name}
        id={value}
        className={styles.input}
        type="radio"
        onChange={action}
        checked={checked}
      />
      <label htmlFor={value} className={styles.label}>
        <span className={styles.custom}></span>
        {title}
      </label>
    </div>
  );
};

export default Options;
