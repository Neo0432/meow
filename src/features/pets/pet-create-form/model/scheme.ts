import * as yup from 'yup';

export const petCreateFormSchema = yup.object().shape({
  imageUrl: yup.string().nullable().notRequired(),
  name: yup.string().required(),
  type: yup.string().nullable().notRequired(),
  gender: yup.string().oneOf(['male', 'female']).notRequired(),
  vaccine: yup.bool().default(false).required(),
  dateOfBirth: yup
    .string()
    .transform(value => (value === '' ? null : value))
    .matches(
      /^(?:\d{2}\.\d{2}\.\d{4})?$/,
      'Enter a valid date in format dd.mm.yyyy',
    )
    .nullable()
    .notRequired(),
  breed: yup.string().nullable().notRequired(),
  chipNumber: yup.string().notRequired(),
});
