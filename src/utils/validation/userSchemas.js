import * as Yup from 'yup';

const phoneRegexp = /^\+380\d{9}$/;

// eslint-disable-next-line
const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const registerSchema = Yup.object().shape({
  name: Yup.string()
    .required('Вкажіть ім’я')
    .max(20, 'Не більше 20 символів'),
  phone: Yup.string()
    .required('Вкажіть телефон')
    .matches(phoneRegexp, 'Вкажіть номер в форматі: +380ХХХХХХХХХ.'),
  email: Yup.string()
    .required('Вкажіть пошту')
    .matches(emailRegexp, 'Пошту вказано невірно'),
  password: Yup.string()
    .required('Вкажіть пароль')
    .min(6, 'Не менше 6 символів'),
  confirmPassword: Yup.string()
    .required('Вкажіть пароль')
    .oneOf([Yup.ref('password'), null], 'Паролі не співпадають'),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .required('Вкажіть пошту')
    .matches(emailRegexp, 'Пошту вказано невірно'),
  password: Yup.string()
    .required('Вкажіть пароль')
    .min(6, 'Не менше 6 символів'),
});

export const requestSchema = Yup.object().shape({
  email: Yup.string()
    .required('Вкажіть пошту')
    .matches(emailRegexp, 'Пошту вказано невірно'),
});

export const passwordChangeSchema = Yup.object().shape({
  password: Yup.string()
    .required('Вкажіть пароль')
    .min(6, 'Не менше 6 символів'),
  confirmPassword: Yup.string()
    .required('Вкажіть пароль')
    .oneOf([Yup.ref('password'), null], 'Паролі не співпадають'),
});

export const updateByUserShema = Yup.object().shape({
  name: Yup.string()
    .required('Вкажіть ім’я')
    .max(20, 'Не більше 20 символів'),
  phone: Yup.string().matches(
    phoneRegexp,
    'Вкажіть номер в форматі: +380ХХХХХХХХХ.'
  ),
});
