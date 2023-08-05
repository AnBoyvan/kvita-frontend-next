import * as Yup from 'yup';

const phoneRegexp = /^\+380\d{9}$/;

// eslint-disable-next-line
const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const newOrderSchema = Yup.object().shape({
  name: Yup.string()
    .required('Вкажіть ім’я')
    .max(20, 'Не більше 20 символів'),
  email: Yup.string().matches(emailRegexp, 'Пошту вказано невірно'),
  phone: Yup.string()
    .required('Вкажіть телефон')
    .matches(phoneRegexp, 'Вкажіть номер в форматі: +380ХХХХХХХХХ.'),
});
