// import styles from './CustomInput.module.scss';
// import { useField } from 'formik';

// const CustomInput = ({ label, ...props }) => {
//   return (
//     <div className={styles.inputWrapper}>
//       <input
//         {...field}
//         {...props}
//         type={showPassword ? 'text' : props.type}
//         className={`${styles.input}
//         ${meta.value && !meta.error ? styles.inputValid : ''}
//         ${meta.touched && meta.error ? styles.inputError : ''}`}
//       />
//       <label
//         className={`${styles.label}
//         ${meta.value && !meta.error ? styles.labelValid : ''}
//         ${meta.touched && meta.error ? styles.labelError : ''}`}
//       >
//         {label}
//       </label>
//       {meta.touched && meta.error && (
//         <div className={styles.error}>*{meta.error}</div>
//       )}
//     </div>
//   );
// };

// export default CustomInput;
