import * as yup from 'yup';

const passRegexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

export const scheme = yup.object().shape({
  email: yup.string().email().required('Email is required'),
  password: yup.string().matches(passRegexp).required('Password is required'),
});
