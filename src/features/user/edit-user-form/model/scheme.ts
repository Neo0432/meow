import * as yup from 'yup';

export const userEditFormScheme = yup.object().shape({
  imageUrl: yup.string().required(),
  name: yup.string().required(),
  email: yup.string().email().required(),
  phoneNumber: yup.string().required(),
});
