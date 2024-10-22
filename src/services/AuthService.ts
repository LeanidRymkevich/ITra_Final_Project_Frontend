import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  AuthResponse,
  SignInRequest,
  SignUpRequest,
} from '../types/interfaces';
import { SERVER_URL } from '../constants/constants';
import { AUTH_ENDPOINTS, ENDPOINTS, SERVICES_NAMES } from '../types/enums';
import HTTPMethod from 'http-method-enum';
import { RootState } from '../redux/store';

const authService = createApi({
  reducerPath: SERVICES_NAMES.AUTH,
  baseQuery: fetchBaseQuery({
    baseUrl: SERVER_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    signIn: builder.mutation<AuthResponse, SignInRequest>({
      query: (credentials) => ({
        url: `${ENDPOINTS.AUTH}${AUTH_ENDPOINTS.SIGN_IN}`,
        method: HTTPMethod.POST,
        body: credentials,
      }),
    }),
    signUp: builder.mutation<AuthResponse, SignUpRequest>({
      query: (credentials) => ({
        url: `${ENDPOINTS.AUTH}${AUTH_ENDPOINTS.SIGN_UP}`,
        method: HTTPMethod.POST,
        body: credentials,
      }),
    }),
    checkToken: builder.mutation({
      query: () => ({
        url: ENDPOINTS.AUTH,
        method: HTTPMethod.POST,
      }),
    }),
  }),
});

export const { useSignInMutation, useSignUpMutation, useCheckTokenMutation } =
  authService;
export default authService;
