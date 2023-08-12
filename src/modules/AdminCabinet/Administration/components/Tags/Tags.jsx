import { useContext } from 'react';

import { ApproveModal } from '@/components';
import { MainButton } from '@/ui/Buttons';
import Icon from '@/ui/Icon/Icon';
import TagsModal from './TagsModal';
import AdministrationSection from '../AdministrationSection/AdministrationSection';

import { ModalContext } from '@/hooks/useModal';
import { updateTags } from '@/services/admin';

import styles from './Tags.module.scss';
import tags from '@/config/tags.json';

const Tags = () => {
  const { openModal, closeModal } = useContext(ModalContext);

  const handleAddTag = () => {
    openModal(<TagsModal approveButton="Додати" tag="" />);
  };

  const handleChange = item => {
    openModal(<TagsModal approveButton="Змінити" tag={item} />);
  };

  const removeTag = el => {
    const newTags = tags.filter(item => item !== el);
    updateTags(newTags);
    closeModal();
  };

  const handleRemove = el => {
    openModal(
      <ApproveModal
        message={`Видалити "${el}"?`}
        approveButton="Так"
        approveAction={() => removeTag(el)}
        rejectButton="Hі"
        rejectaction={closeModal}
      />
    );
  };

  const tagList = tags?.map((tag, i) => (
    <li key={i} className={styles.item}>
      <span className={styles.itemText}>{tag}</span>
      <button
        type="button"
        className={styles.change}
        onClick={() => handleChange(tag)}
      >
        <Icon id="pencil" />
      </button>
      <button
        type="button"
        className={styles.delete}
        onClick={() => handleRemove(tag)}
      >
        <Icon id="delete" />
      </button>
    </li>
  ));
  return (
    <AdministrationSection title="Теги для галереї">
      <div className={styles.add}>
        <MainButton onClick={handleAddTag}>Додати тег</MainButton>
      </div>

      <ul className={styles.list}>{tagList}</ul>
    </AdministrationSection>
  );
};

export default Tags;
