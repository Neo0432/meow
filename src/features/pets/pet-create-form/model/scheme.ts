import * as yup from 'yup';

export const petCreateFormScheme = yup.object().shape({
  imageUrl: yup.string().required(),
  name: yup.string().required(),
  type: yup.string().required(),
  gender: yup.string().oneOf(['male', 'female']).required(),
  vaccine: yup.bool().default(false).required(),
  dateOfBirth: yup
    .date()
    .transform((value, originalValue) => {
      const date = new Date(originalValue);
      return isNaN(date.getTime()) ? '' : date;
    })
    .required(),
  breed: yup.string().required(),
  chipNumber: yup.string().required(),
});
