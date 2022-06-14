import * as yup from 'yup';

export const VALIDATIONS = {
  email: yup.string().email().required(),
  password: yup.string().required(),
};
