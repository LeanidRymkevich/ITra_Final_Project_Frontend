import * as yup from 'yup';

const signInSchema = yup
  .object({
    email: yup.string().required().email(),
    password: yup.string().required(),
  })
  .required();

export type signInFormData = yup.InferType<typeof signInSchema>;
export default signInSchema;
