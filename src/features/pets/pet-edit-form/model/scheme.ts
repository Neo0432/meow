import * as yup from 'yup';

export const petEditFormScheme = yup.object().shape({
  imageUrl: yup.string().required(),
  name: yup.string().required(),
  type: yup.string().required(),
  sex: yup.string().oneOf(['Male', 'Female']).required(),
  vaccine: yup.bool().default(false).required(),
  birthDate: yup.string().required(),
  breed: yup.string().required(),
  chipNumber: yup.string().required(),
});
