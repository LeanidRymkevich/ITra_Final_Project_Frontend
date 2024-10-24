import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  DeleteUserResponse,
  GetUsersRequest,
  GetUsersResponse,
  UpdateUserResponse,
  User,
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
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getUsers: builder.query<GetUsersResponse, GetUsersRequest>({
      query: ({ limit, page }) => ({
        url: ENDPOINTS.ADMIN,
        method: HTTPMethod.GET,
        params: {
          limit,
          offset: getOffset(limit, page),
        },
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.data.users.map(({ id }) => ({
                type: 'User' as const,
                id,
              })),
              'User',
            ]
          : ['User'],
    }),
    updateUser: builder.mutation<UpdateUserResponse, User>({
      query: ({ id, ...data }) => ({
        url: `${ENDPOINTS.ADMIN}/${id}`,
        method: HTTPMethod.PATCH,
        body: {
          id,
          ...data,
        },
        invalidatesTags: ['User'],
      }),
    }),
    deleteUser: builder.mutation<DeleteUserResponse, string>({
      query: (id) => ({
        url: `${ENDPOINTS.ADMIN}/${id}`,
        method: HTTPMethod.DELETE,
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userTableService;
export default userTableService;
