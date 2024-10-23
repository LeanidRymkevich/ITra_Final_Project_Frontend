import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GetUsersRequest, GetUsersResponse } from '../types/interfaces';
import { SERVER_URL } from '../constants/constants';
import { ENDPOINTS, SERVICES_NAMES } from '../types/enums';
import HTTPMethod from 'http-method-enum';
import { RootState } from '../redux/store';

const UserTableService = createApi({
  reducerPath: SERVICES_NAMES.USERS_TABLE,
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
    getUsers: builder.query<GetUsersResponse, GetUsersRequest>({
      query: (data) => ({
        url: ENDPOINTS.ADMIN,
        method: HTTPMethod.GET,
        body: data,
      }),
    }),
  }),
});

export const { useGetUsersQuery } = UserTableService;
export default UserTableService;
