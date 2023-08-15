import * as Yup from 'yup';

export const addPictureSchema = Yup.object().shape({
  title: Yup.string(),
  description: Yup.string(),
  image: Yup.mixed()
    .test('fileFormat', 'Непідтримуваний формат файлу', value => {
      if (!value) {
        return false;
      }
      return value && value.type.startsWith('image/');
    })
    .required('Додайте зображення'),
  tags: Yup.array().of(Yup.string()),
});

export const updatePictureSchema = Yup.object().shape({
  title: Yup.string(),
  description: Yup.string(),
  tags: Yup.array().of(Yup.string()),
});
