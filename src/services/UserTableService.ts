import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  DeleteUserResponse,
  GetUsersRequest,
  GetUsersResponse,
  UpdateUserRequest,
  UpdateUserResponse,
} from '../types/interfaces';
import { SERVER_URL } from '../constants/constants';
import { ENDPOINTS, SERVICES_NAMES } from '../types/enums';
import HTTPMethod from 'http-method-enum';
import { RootState } from '../redux/store';

const getOffset = (limit: number, page: number): number => limit * page;

const userTableService = createApi({
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
      query: ({ limit, page, order, orderBy }) => ({
        url: ENDPOINTS.ADMIN,
        method: HTTPMethod.GET,
        params: {
          limit,
          offset: getOffset(limit, page),
          order: order.toLocaleUpperCase(),
          orderBy,
        },
      }),
    }),
    updateUser: builder.mutation<UpdateUserResponse, UpdateUserRequest>({
      query: ({ id, ...data }) => ({
        url: `${ENDPOINTS.ADMIN}/${id}`,
        method: HTTPMethod.PATCH,
        body: {
          id,
          ...data,
        },
      }),
    }),
    deleteUser: builder.mutation<DeleteUserResponse, number>({
      query: (id) => ({
        url: `${ENDPOINTS.ADMIN}/${id}`,
        method: HTTPMethod.DELETE,
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userTableService;
export default userTableService;
