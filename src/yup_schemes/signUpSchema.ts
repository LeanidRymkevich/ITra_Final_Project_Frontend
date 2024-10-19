import * as yup from 'yup';

const signUpSchema = yup
  .object({
    username: yup.string().required(),
    email: yup.string().required().email(),
    password: yup.string().required(),
    repeatPassword: yup
      .string()
      .required()
      .test(function (value) {
        return this.parent.password === value;
      }),
  })
  .required();

export type signUpFormData = yup.InferType<typeof signUpSchema>;
export default signUpSchema;
