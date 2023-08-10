// import MainButton from '@/ui/Buttons/MainButton';
// import styles from './CabinetModal.module.scss';

// import { useContext } from 'react';
// import SecondaryButton from '@/ui/Buttons/SecondaryButton';
// import { ModalContext } from '@/hooks/useModal';
// import CloseModalButton from '@/ui/Buttons/CloseModalButton';

// const CabinetModal = ({
//   title,
//   content,
//   approveButton,
//   approveAction,
//   currentOption,
// }) => {
//   const { closeModal } = useContext(ModalContext);

//   console.log(currentOption);

//   const handleClick = () => {
//     approveAction();
//     // closeModal();
//   };
//   return (
//     <div className={styles.container}>
//       <div className={styles.title}>{title}</div>
//       {content}
//       <div className={styles.btnWrapper}>
//         <MainButton onClick={handleClick}>{approveButton}</MainButton>
//         <SecondaryButton onClick={closeModal}>Назад</SecondaryButton>
//       </div>
//       <CloseModalButton />
//     </div>
//   );
// };

// export default CabinetModal;
