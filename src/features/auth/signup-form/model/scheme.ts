import * as yup from 'yup';

const passRegexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

export const scheme = yup.object().shape({
  email: yup.string().email('Email is not valid').required('Email is required'),
  password: yup
    .string()
    .matches(passRegexp, 'Password is too weak')
    .required('Password is required'),
  passwordConfirm: yup
    .string()
    .matches(passRegexp, 'Password is too weak')
    .oneOf([yup.ref('password')], 'Both passwords must match')
    .required('Password must match'),
});
