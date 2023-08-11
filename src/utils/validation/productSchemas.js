import * as Yup from 'yup';

const categories = ['pie', 'cake', 'dessert', 'other'];

export const addProductSchema = Yup.object().shape({
  name: Yup.string().required('Вкажіть назву'),
  price: Yup.number().min(0).required('Вкажіть ціну'),
  description: Yup.string(),
  category: Yup.string()
    .oneOf([...categories], 'Вкажіть категорію')
    .required('Вкажіть категорію'),
  imageURL: Yup.string(),
  calories: Yup.number().min(0),
  proteins: Yup.number().min(0),
  fats: Yup.number().min(0),
  carbohydrates: Yup.number().min(0),
});
